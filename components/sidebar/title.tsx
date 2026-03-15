

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import FullLogo from "../fulllogo"
import Link from "next/link"

export function Header() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href='/'>
          <div className="flex items-center ">
            <FullLogo height={200} width={200} className='h-12' />
            {/* <span className="ml-2 text-xl font-semibold">GPS Manipur</span> */}
          </div>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
