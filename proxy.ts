import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Public routes that authenticated users should NOT be able to visit
const publicAuthRoutes = ['/', '/login', '/onboarding']

// Protected routes that require authentication
const protectedRoutes = ['/dashboard', '/admin', '/books', '/guides', '/pyqs', '/solved-pyq', '/courses', '/articles']

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    
    // Get the JWT token from cookies
    const token = request.cookies.get('accessToken')?.value

    const isAuthenticated = !!token
    let userRole = 'user'

    // Attempt to decode the JWT to check the role, if token exists
    if (token) {
        try {
            const payloadBase64 = token.split('.')[1]
            if (payloadBase64) {
                const payload = JSON.parse(atob(payloadBase64))
                if (payload.role) {
                    userRole = payload.role
                }
            }
        } catch (e) {
            console.error("Failed to parse JWT in proxy:", e)
        }
    }

    // 1. If user is authenticated...
    if (isAuthenticated) {
        // ...prevent access to public auth-only routes (redirect to dashboard)
        if (publicAuthRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }

        // ...check admin access for /admin routes
        if (pathname.startsWith('/admin') && userRole !== 'admin') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }

    // 2. If user is NOT authenticated...
    if (!isAuthenticated) {
        // ...prevent access to protected routes (redirect to login)
        const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    // 3. Allow request to proceed
    return NextResponse.next()
}

export const config = {
    // Match all routes except API, Next static assets, images, icon
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
