import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
('import Link from "next/link')

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />}
            {item.active ? (
              <span className="font-medium">{item.label}</span>
            ) : (
              <BreadcrumbLink
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </BreadcrumbLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function BreadcrumbLink({
  children,
  href,
  className,
}: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
