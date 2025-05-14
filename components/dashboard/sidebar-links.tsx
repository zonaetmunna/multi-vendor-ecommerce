import type React from "react"
import {
  BarChart3,
  Box,
  CreditCard,
  DollarSign,
  FileText,
  Gift,
  Heart,
  Home,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Truck,
  Users,
  AlertTriangle,
  Layers,
  Tag,
  ImageIcon,
  FileSpreadsheet,
  Store,
  BarChart,
  Mail,
  MapPin,
  Wallet,
} from "lucide-react"

type SidebarLinkGroup = {
  title: string
  links: {
    href: string
    label: string
    icon: React.ReactNode
  }[]
}

export const customerLinks: SidebarLinkGroup[] = [
  {
    title: "Dashboard",
    links: [
      {
        href: "/dashboard/customer",
        label: "Overview",
        icon: <Home className="h-4 w-4" />,
      },
      {
        href: "/dashboard/customer/profile",
        label: "My Profile",
        icon: <Users className="h-4 w-4" />,
      },
      {
        href: "/dashboard/customer/addresses",
        label: "My Addresses",
        icon: <MapPin className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Shopping",
    links: [
      {
        href: "/dashboard/customer/orders",
        label: "My Orders",
        icon: <ShoppingBag className="h-4 w-4" />,
      },
      {
        href: "/dashboard/customer/wishlist",
        label: "Wishlist",
        icon: <Heart className="h-4 w-4" />,
      },
      {
        href: "/dashboard/customer/wallet",
        label: "My Wallet",
        icon: <Wallet className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        href: "/dashboard/customer/messages",
        label: "Messages",
        icon: <MessageSquare className="h-4 w-4" />,
      },
      {
        href: "/dashboard/customer/disputes",
        label: "Disputes",
        icon: <AlertTriangle className="h-4 w-4" />,
      },
      {
        href: "/dashboard/customer/newsletter",
        label: "Newsletter",
        icon: <Mail className="h-4 w-4" />,
      },
    ],
  },
]

export const vendorLinks: SidebarLinkGroup[] = [
  {
    title: "Dashboard",
    links: [
      {
        href: "/dashboard/vendor",
        label: "Overview",
        icon: <Home className="h-4 w-4" />,
      },
      {
        href: "/dashboard/vendor/analytics",
        label: "Analytics",
        icon: <BarChart className="h-4 w-4" />,
      },
      {
        href: "/dashboard/vendor/storefront",
        label: "Storefront",
        icon: <Store className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        href: "/dashboard/vendor/products",
        label: "All Products",
        icon: <Package className="h-4 w-4" />,
      },
      {
        href: "/dashboard/vendor/products/add",
        label: "Add Product",
        icon: <Box className="h-4 w-4" />,
      },
      {
        href: "/dashboard/vendor/bulk-upload",
        label: "Bulk Upload",
        icon: <FileSpreadsheet className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Orders",
    links: [
      {
        href: "/dashboard/vendor/orders",
        label: "All Orders",
        icon: <ShoppingBag className="h-4 w-4" />,
      },
      {
        href: "/dashboard/vendor/shipping",
        label: "Shipping",
        icon: <Truck className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Marketing",
    links: [
      {
        href: "/dashboard/vendor/coupons",
        label: "Coupons",
        icon: <Tag className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Finance",
    links: [
      {
        href: "/dashboard/vendor/payouts",
        label: "Payouts",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        href: "/dashboard/vendor/transactions",
        label: "Transactions",
        icon: <CreditCard className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        href: "/dashboard/vendor/messages",
        label: "Messages",
        icon: <MessageSquare className="h-4 w-4" />,
      },
    ],
  },
]

export const adminLinks: SidebarLinkGroup[] = [
  {
    title: "Dashboard",
    links: [
      {
        href: "/dashboard/admin",
        label: "Overview",
        icon: <Home className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Marketplace",
    links: [
      {
        href: "/dashboard/admin/vendors",
        label: "Vendors",
        icon: <Users className="h-4 w-4" />,
      },
      {
        href: "/dashboard/admin/categories",
        label: "Categories",
        icon: <Layers className="h-4 w-4" />,
      },
      {
        href: "/dashboard/admin/featured",
        label: "Featured Items",
        icon: <Gift className="h-4 w-4" />,
      },
      {
        href: "/dashboard/admin/banners",
        label: "Banners",
        icon: <ImageIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Finance",
    links: [
      {
        href: "/dashboard/admin/payouts",
        label: "Payouts",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        href: "/dashboard/admin/commissions",
        label: "Commissions",
        icon: <BarChart3 className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        href: "/dashboard/admin/disputes",
        label: "Disputes",
        icon: <AlertTriangle className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Content",
    links: [
      {
        href: "/dashboard/admin/cms",
        label: "CMS Pages",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        href: "/dashboard/admin/site-settings",
        label: "Site Settings",
        icon: <Settings className="h-4 w-4" />,
      },
    ],
  },
]
