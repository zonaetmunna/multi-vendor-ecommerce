"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid3X3, LayoutList } from "lucide-react"

export function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="flex flex-col space-y-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setViewMode("grid")}>
            <Grid3X3 className={`h-4 w-4 ${viewMode === "grid" ? "text-primary" : ""}`} />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button variant="outline" size="icon" onClick={() => setViewMode("list")}>
            <LayoutList className={`h-4 w-4 ${viewMode === "list" ? "text-primary" : ""}`} />
            <span className="sr-only">List view</span>
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="rounded-full">
          Electronics
          <span className="sr-only">Remove filter Electronics</span>
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Price: $100 - $500
          <span className="sr-only">Remove price filter</span>
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          4★ & above
          <span className="sr-only">Remove rating filter</span>
        </Button>
        <Button variant="ghost" size="sm">
          Clear All
        </Button>
      </div>
    </div>
  )
}
