"use client"

import * as React from "react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface Props {
  mobile?: boolean
}

export function NavDropdown({ mobile }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1 nav-link"
        aria-haspopup="menu"
      >
        Menu 2
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-48 transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
      >
        <DropdownMenuItem asChild>
          <Link href="/submenu1">Submenu 1</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/submenu2">Submenu 2</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/submenu3">Submenu 3</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}