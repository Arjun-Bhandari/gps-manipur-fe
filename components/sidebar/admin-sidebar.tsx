"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  MessageSquare,
  BarChart3,
} from "lucide-react"

import { Header } from "@/components/sidebar/title"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { useSessionQuery } from "@/lib/services/auth/auth.queries"
import { useAuthStore } from "@/lib/store/authStore"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "users",
      icon: Users,
    },
    {
      title: "Content",
      url: "/content",
      icon: FileText,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
}

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const authUser = useAuthStore((state) => state.user)
  const sessionQuery = useSessionQuery(!authUser)
  const resolvedUser = authUser ?? sessionQuery.data?.user ?? null

  const user = {
    name: resolvedUser?.name || "",
    email: resolvedUser?.email || "",
    avatar: resolvedUser?.image || "",
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold px-4 mb-2">Admin Controls</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "relative h-11 rounded-full px-4 transition-all duration-300",
                        "hover:bg-primary/5 hover:text-primary",
                        isActive && "bg-primary! text-primary-foreground! font-semibold shadow-sm hover:shadow-md hover:shadow-primary/30 transition-shadow"
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon className="size-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {resolvedUser ? <NavUser user={user} /> : null}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
