"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

// Mock data
const categories = [
  { id: "electronics", name: "Electronics", count: 42 },
  { id: "fashion", name: "Fashion", count: 38 },
  { id: "home", name: "Home & Kitchen", count: 27 },
  { id: "beauty", name: "Beauty & Personal Care", count: 21 },
  { id: "sports", name: "Sports & Outdoors", count: 16 },
  { id: "toys", name: "Toys & Games", count: 14 },
  { id: "books", name: "Books", count: 32 },
  { id: "automotive", name: "Automotive", count: 9 },
]

const vendors = [
  { id: 1, name: "AudioTech", count: 12 },
  { id: 2, name: "EcoWear", count: 18 },
  { id: 3, name: "TechHome", count: 9 },
  { id: 4, name: "ArtisanCrafts", count: 15 },
  { id: 5, name: "FitTech", count: 7 },
  { id: 6, name: "LeatherCraft", count: 11 },
  { id: 7, name: "AromaHouse", count: 6 },
  { id: 8, name: "EcoLiving", count: 14 },
]

const ratings = [
  { value: 4, label: "4★ & above" },
  { value: 3, label: "3★ & above" },
  { value: 2, label: "2★ & above" },
  { value: 1, label: "1★ & above" },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedVendors, setSelectedVendors] = useState<number[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [inStock, setInStock] = useState(false)
  const [onSale, setOnSale] = useState(false)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleVendorChange = (vendorId: number) => {
    setSelectedVendors((prev) => (prev.includes(vendorId) ? prev.filter((id) => id !== vendorId) : [...prev, vendorId]))
  }

  const handleRatingChange = (rating: number) => {
    setSelectedRating(selectedRating === rating ? null : rating)
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
  }

  const resetFilters = () => {
    setPriceRange([0, 1000])
    setSelectedCategories([])
    setSelectedVendors([])
    setSelectedRating(null)
    setInStock(false)
    setOnSale(false)
  }

  return (
    <div className="bg-card rounded-lg border p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "rating"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`} className="flex-1 text-sm cursor-pointer">
                    {category.name}
                    <span className="text-muted-foreground ml-1">({category.count})</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="vendors">
          <AccordionTrigger>Vendors</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {vendors.map((vendor) => (
                <div key={vendor.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`vendor-${vendor.id}`}
                    checked={selectedVendors.includes(vendor.id)}
                    onCheckedChange={() => handleVendorChange(vendor.id)}
                  />
                  <Label htmlFor={`vendor-${vendor.id}`} className="flex-1 text-sm cursor-pointer">
                    {vendor.name}
                    <span className="text-muted-foreground ml-1">({vendor.count})</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating.value}`}
                    checked={selectedRating === rating.value}
                    onCheckedChange={() => handleRatingChange(rating.value)}
                  />
                  <Label htmlFor={`rating-${rating.value}`} className="flex-1 text-sm cursor-pointer">
                    {rating.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" checked={inStock} onCheckedChange={(checked) => setInStock(checked === true)} />
                <Label htmlFor="in-stock" className="text-sm cursor-pointer">
                  In Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="on-sale" checked={onSale} onCheckedChange={(checked) => setOnSale(checked === true)} />
                <Label htmlFor="on-sale" className="text-sm cursor-pointer">
                  On Sale
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-4">Apply Filters</Button>
    </div>
  )
}
