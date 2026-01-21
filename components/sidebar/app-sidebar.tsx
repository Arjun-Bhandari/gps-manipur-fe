"use client"

import * as React from "react"

import { SearchForm } from "@/components/sidebar/search-form"
import { Header } from "@/components/sidebar/title"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
 
  navMain: [
    {
      title: "Over View",
      url: "#",
    },
    {
      title: "Books",
      url: "#",
    },
    {
      title: "Guides",
      url: "#",
    },
    {
      title: "PYQs",
      url: "#",
    },
    {
      title: "Solved PYQs",
      url: "#",
    },
    {
      title: "Articles",
      url: "#", // kept for grouping; items define the real links
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isArticlesOpen, setIsArticlesOpen] = React.useState(true)

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Header
        />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => {
          const isArticles = item.title === "Articles"
          return (
            <SidebarGroup key={item.title}>
              {isArticles ? (
                <>
                  <SidebarGroupLabel>
                    <button
                      type="button"
                      onClick={() => setIsArticlesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between text-sm font-semibold"
                    >
                      {item.title}
                      <span className={`transition-transform ${isArticlesOpen ? "rotate-0" : "-rotate-90"}`}>
                        ▾
                      </span>
                    </button>
                  </SidebarGroupLabel>
                  {isArticlesOpen && (
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {item.items?.map((child) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                              <a href={child.url}>{child.title}</a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  )}
                </>
              ) : (
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          )
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
