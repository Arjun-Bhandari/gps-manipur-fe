import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AdminSidebar } from "@/components/sidebar/admin-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-4 px-4">
            <Link 
              href="/dashboard" 
              className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </Link>
            <div className="w-px h-4 bg-border" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Admin Portal</span>
          </div>
        </header>
        <main className="p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
