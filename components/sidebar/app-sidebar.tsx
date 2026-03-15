"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BookOpen,
  Compass,
  FileText,
  CheckSquare,
  GraduationCap,
  Newspaper,
  ShieldCheck,
  Info,
  Star,
  Lightbulb,
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

interface NavItem {
  title: string
  url: string
  icon?: React.ElementType
  roleRequired?: string
  items?: NavItem[]
}

// This is sample data.
const data: {
  user: {
    name: string
    email: string
    avatar: string
    role: string
  }
  navMain: NavItem[]
} = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://github.com/shadcn.png",
    role: "admin", // Simulated role
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Books",
      url: "/books",
      icon: BookOpen,
    },
    {
      title: "Guides",
      url: "/guides",
      icon: Compass,
    },
    {
      title: "PYQs",
      url: "/pyqs",
      icon: FileText,
    },
    {
      title: "Solved PYQs",
      url: "/solved-pyq",
      icon: CheckSquare,
    },
    {
      title: "Courses",
      url: "/courses",
      icon: GraduationCap,
    },
    {
      title: "Articles",
      url: "/articles",
      icon: Newspaper,
      items: [
        {
          title: "Introduction",
          url: "/articles",
          icon: Info,
        },
        {
          title: "Featured Articles",
          url: "/articles/featured",
          icon: Star,
        },
        {
          title: "Exam Tips",
          url: "/articles/tip",
          icon: Lightbulb,
        },
      ],
    },
    {
      title: "Admin Portal",
      url: "/admin",
      icon: ShieldCheck,
      roleRequired: "admin",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const [isArticlesOpen, setIsArticlesOpen] = React.useState(true)

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.filter(item => !item.roleRequired || item.roleRequired === data.user.role).map((item) => {
          const isArticles = item.title === "Articles"
          const isActive = pathname === item.url || (item.items?.some(child => pathname === child.url))

          return (
            <SidebarGroup key={item.title}>
              {isArticles ? (
                <>
                  <SidebarGroupLabel>
                    <SidebarMenuButton
                      type="button"
                      onClick={() => setIsArticlesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between text-sm font-semibold hover:text-foreground transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon && <item.icon className="size-4" />}
                        {item.title}
                      </div>
                      <span className={`transition-transform duration-200 ${isArticlesOpen ? "rotate-0" : "-rotate-90"}`}>
                        ▾
                      </span>
                    </SidebarMenuButton>
                  </SidebarGroupLabel>
                  {isArticlesOpen && (
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {item.items?.filter(child => !child.roleRequired || child.roleRequired === data.user.role).map((child) => {
                          const isChildActive = pathname === child.url
                          return (
                            <SidebarMenuItem key={child.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={isChildActive}
                                className={cn(
                                  "relative h-10 rounded-full px-4 transition-all duration-300",
                                  "hover:bg-primary/5 hover:text-primary",
                                  isChildActive && "bg-primary! text-primary-foreground! font-semibold shadow-sm hover:shadow-md hover:shadow-primary/30 transition-shadow"
                                )}
                              >
                                <Link href={child.url} className="flex items-center gap-3">
                                  {child.icon && <child.icon className="size-4" />}
                                  {child.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          )
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  )}
                </>
              ) : (
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={cn(
                          "relative h-8 rounded-full px-4 transition-all duration-300",
                          "hover:bg-primary/5 hover:text-primary",
                          isActive && "bg-primary! text-primary-foreground! font-semibold shadow-sm hover:shadow-md hover:shadow-primary/30 transition-shadow"
                        )}
                      >
                        <Link href={item.url} className="flex items-center gap-3">
                          {item.icon && <item.icon className="size-5" />}
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          )
        })}

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />

    </Sidebar>
  )
}
