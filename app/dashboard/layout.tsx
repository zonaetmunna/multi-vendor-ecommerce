"use client"

import type React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"; // Import from shadcn sidebar [^1]
import {
  BarChart3,
  Bell,
  CreditCard,
  Home,
  LogOut,
  MessageSquare,
  Package,
  Settings,
  ShoppingCart,
  Store,
  User,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import "../../styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [userType, setUserType] = useState<"admin" | "vendor" | "customer">("admin")

  // Determine user type based on URL path
  useEffect(() => {
    if (pathname.includes("/dashboard/admin")) {
      setUserType("admin")
    } else if (pathname.includes("/dashboard/vendor")) {
      setUserType("vendor")
    } else {
      setUserType("customer")
    }
  }, [pathname])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar userType={userType} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader userType={userType} />
          <main className="flex-1 p-6 bg-muted/30">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function DashboardSidebar({ userType }: { userType: "admin" | "vendor" | "customer" }) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center p-2">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            MultiVend
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {userType === "admin" && <AdminSidebarContent pathname={pathname} />}
        {userType === "vendor" && <VendorSidebarContent pathname={pathname} />}
        {userType === "customer" && <CustomerSidebarContent pathname={pathname} />}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

function AdminSidebarContent({ pathname }: { pathname: string }) {
  const isActive = (path: string) => pathname === path

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin")}>
                <a href="/dashboard/admin">
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin/vendors")}>
                <a href="/dashboard/admin/vendors">
                  <Store className="h-4 w-4" />
                  <span>Vendors</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin/customers")}>
                <a href="/dashboard/admin/customers">
                  <Users className="h-4 w-4" />
                  <span>Customers</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin/products")}>
                <a href="/dashboard/admin/products">
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin/orders")}>
                <a href="/dashboard/admin/orders">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Orders</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin/payouts")}>
                <a href="/dashboard/admin/payouts">
                  <CreditCard className="h-4 w-4" />
                  <span>Payouts</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/admin/analytics")}>
                <a href="/dashboard/admin/analytics">
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

function VendorSidebarContent({ pathname }: { pathname: string }) {
  const isActive = (path: string) => pathname === path

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Vendor Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/vendor")}>
                <a href="/dashboard/vendor">
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/vendor/products")}>
                <a href="/dashboard/vendor/products">
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/vendor/orders")}>
                <a href="/dashboard/vendor/orders">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Orders</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/vendor/earnings")}>
                <a href="/dashboard/vendor/earnings">
                  <CreditCard className="h-4 w-4" />
                  <span>Earnings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/vendor/analytics")}>
                <a href="/dashboard/vendor/analytics">
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/vendor/customers")}>
                <a href="/dashboard/vendor/customers">
                  <Users className="h-4 w-4" />
                  <span>Customers</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

function CustomerSidebarContent({ pathname }: { pathname: string }) {
  const isActive = (path: string) => pathname === path

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>My Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/customer")}>
                <a href="/dashboard/customer">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/customer/orders")}>
                <a href="/dashboard/customer/orders">
                  <ShoppingCart className="h-4 w-4" />
                  <span>My Orders</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/customer/wishlist")}>
                <a href="/dashboard/customer/wishlist">
                  <Package className="h-4 w-4" />
                  <span>Wishlist</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/customer/reviews")}>
                <a href="/dashboard/customer/reviews">
                  <MessageSquare className="h-4 w-4" />
                  <span>My Reviews</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/customer/profile")}>
                <a href="/dashboard/customer/profile">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

function DashboardHeader({ userType }: { userType: "admin" | "vendor" | "customer" }) {
  const titles = {
    admin: "Admin Dashboard",
    vendor: "Vendor Dashboard",
    customer: "Customer Dashboard",
  }

  return (
    <header className="border-b bg-background p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">{titles[userType]}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
