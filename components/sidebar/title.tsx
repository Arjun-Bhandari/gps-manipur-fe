

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import FullLogo from "../fulllogo"

export function Header() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center ">
          <FullLogo />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
