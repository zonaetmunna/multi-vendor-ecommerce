"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { adminLinks, customerLinks, vendorLinks } from "./sidebar-links"

interface SidebarProps {
  userRole: "admin" | "vendor" | "customer"
}

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Determine which links to use based on user role
  const sidebarLinks = userRole === "admin" ? adminLinks : userRole === "vendor" ? vendorLinks : customerLinks

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">
              {userRole === "admin"
                ? "Admin Dashboard"
                : userRole === "vendor"
                  ? "Vendor Dashboard"
                  : "Customer Dashboard"}
            </h2>
          </div>
          <ScrollArea className="h-[calc(100vh-5rem)]">
            <div className="p-4">
              {sidebarLinks.map((group, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-4">{group.title}</h3>
                  <div className="space-y-1">
                    {group.links.map((link, j) => (
                      <Link
                        key={j}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                          pathname === link.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                        )}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r bg-background">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">
              {userRole === "admin"
                ? "Admin Dashboard"
                : userRole === "vendor"
                  ? "Vendor Dashboard"
                  : "Customer Dashboard"}
            </h2>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4">
              {sidebarLinks.map((group, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-4">{group.title}</h3>
                  <div className="space-y-1">
                    {group.links.map((link, j) => (
                      <Link
                        key={j}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                          pathname === link.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                        )}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}
