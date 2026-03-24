import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicAuthRoutes = ['/', '/login', '/onboarding']
const protectedRoutes = ['/dashboard', '/admin', '/books', '/guides', '/pyqs', '/solved-pyq', '/courses', '/articles']
const sessionCookieNames = ['better-auth.session_token', '__Secure-better-auth.session_token']

type SessionUser = {
    role?: string
}

const normalizePathname = (pathname: string) => {
    if (pathname === '/') return '/'
    return pathname.replace(/\/+$/, '')
}

const matchesRoute = (pathname: string, route: string) => {
    if (route === '/') return pathname === '/'
    return pathname === route || pathname.startsWith(`${route}/`)
}

const hasSessionCookie = (request: NextRequest) => {
    return sessionCookieNames.some((cookieName) => Boolean(request.cookies.get(cookieName)?.value))
}

const getSessionUser = async (request: NextRequest): Promise<SessionUser | null> => {
    const cookieHeader = request.headers.get('cookie')
    if (!cookieHeader) return null

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/v1'

    try {
        const response = await fetch(`${apiBaseUrl}/auth/get-session`, {
            method: 'GET',
            headers: {
                cookie: cookieHeader,
                accept: 'application/json',
            },
            cache: 'no-store',
        })

        if (!response.ok) return null

        const sessionData = await response.json()
        const user = sessionData?.user || sessionData?.data?.user

        if (!user) return null
        return user
    } catch {
        return null
    }
}

export async function proxy(request: NextRequest) {
    const pathname = normalizePathname(request.nextUrl.pathname)
    const isPublicAuthRoute = publicAuthRoutes.some((route) => matchesRoute(pathname, route))
    const isProtectedRoute = protectedRoutes.some((route) => matchesRoute(pathname, route))
    const isAdminRoute = matchesRoute(pathname, '/admin')

    let user: SessionUser | null = null

    if (hasSessionCookie(request)) {
        user = await getSessionUser(request)
    }

    const isAuthenticated = Boolean(user)
    const userRole = (user?.role || 'user').toLowerCase()

    if (isAuthenticated && isPublicAuthRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (!isAuthenticated && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (isAuthenticated && isAdminRoute && userRole !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    // Match all routes except API, Next static assets, images, icon
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
