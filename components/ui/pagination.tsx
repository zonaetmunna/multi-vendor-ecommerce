"use client"

import type * as React from "react"

import { cn } from "@/lib/utils"

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange, className, ...props }: PaginationProps) {
  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  const getPageNumbers = () => {
    const visiblePageCount = 5
    const pageNumbers: number[] = []

    if (totalPages <= visiblePageCount) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
      return pageNumbers
    }

    const middle = Math.ceil(visiblePageCount / 2)
    let start = Math.max(currentPage - middle + 1, 1)
    const end = Math.min(start + visiblePageCount - 1, totalPages)

    if (end - start + 1 < visiblePageCount) {
      start = Math.max(end - visiblePageCount + 1, 1)
    }

    if (start > 1) {
      pageNumbers.push(1)
      if (start > 2) {
        pageNumbers.push(-1) // Ellipsis
      }
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i)
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pageNumbers.push(-1) // Ellipsis
      }
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <div className="join">
        <button className="join-item btn" onClick={() => onPageChange(currentPage - 1)} disabled={!hasPreviousPage}>
          «
        </button>
        {pageNumbers.map((page, index) =>
          page === -1 ? (
            <button key={`ellipsis-${index}`} className="join-item btn btn-disabled">
              ...
            </button>
          ) : (
            <button
              key={page}
              className={cn("join-item btn", { "btn-active": currentPage === page })}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ),
        )}
        <button className="join-item btn" onClick={() => onPageChange(currentPage + 1)} disabled={!hasNextPage}>
          »
        </button>
      </div>
    </div>
  )
}
