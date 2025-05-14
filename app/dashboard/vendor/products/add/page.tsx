"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Plus, Trash2, Upload, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export default function AddProductPage() {
  const [activeTab, setActiveTab] = useState("basic")
  const [variants, setVariants] = useState<{ id: number; name: string; options: string[] }[]>([
    { id: 1, name: "Color", options: ["Black", "White", "Blue"] },
  ])
  const [images, setImages] = useState<{ id: number; url: string }[]>([
    { id: 1, url: "/placeholder.svg?height=200&width=200" },
  ])

  const addVariant = () => {
    const newId = variants.length > 0 ? Math.max(...variants.map((v) => v.id)) + 1 : 1
    setVariants([...variants, { id: newId, name: "", options: [""] }])
  }

  const removeVariant = (id: number) => {
    setVariants(variants.filter((variant) => variant.id !== id))
  }

  const updateVariantName = (id: number, name: string) => {
    setVariants(variants.map((variant) => (variant.id === id ? { ...variant, name } : variant)))
  }

  const addVariantOption = (variantId: number) => {
    setVariants(
      variants.map((variant) =>
        variant.id === variantId ? { ...variant, options: [...variant.options, ""] } : variant,
      ),
    )
  }

  const updateVariantOption = (variantId: number, optionIndex: number, value: string) => {
    setVariants(
      variants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              options: variant.options.map((option, index) => (index === optionIndex ? value : option)),
            }
          : variant,
      ),
    )
  }

  const removeVariantOption = (variantId: number, optionIndex: number) => {
    setVariants(
      variants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              options: variant.options.filter((_, index) => index !== optionIndex),
            }
          : variant,
      ),
    )
  }

  const addImage = () => {
    const newId = images.length > 0 ? Math.max(...images.map((img) => img.id)) + 1 : 1
    setImages([...images, { id: newId, url: "/placeholder.svg?height=200&width=200" }])
  }

  const removeImage = (id: number) => {
    setImages(images.filter((image) => image.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/vendor/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Add New Product</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Product</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="basic" onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the basic details of your product.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" placeholder="Enter product name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your product in detail"
                      className="min-h-[150px]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                          <SelectItem value="home">Home & Kitchen</SelectItem>
                          <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                          <SelectItem value="sports">Sports & Outdoors</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subcategory">Subcategory</Label>
                      <Select>
                        <SelectTrigger id="subcategory">
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="computers">Computers</SelectItem>
                          <SelectItem value="phones">Phones & Accessories</SelectItem>
                          <SelectItem value="wearables">Wearables</SelectItem>
                          <SelectItem value="cameras">Cameras</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="compare-price">Compare at Price ($)</Label>
                      <Input id="compare-price" type="number" placeholder="0.00" />
                      <p className="text-xs text-muted-foreground">
                        To show a reduced price, set this higher than the price.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" placeholder="wireless, bluetooth, audio" />
                    <p className="text-xs text-muted-foreground">Separate tags with commas.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Information</CardTitle>
                  <CardDescription>Optimize your product for search engines.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="seo-title">SEO Title</Label>
                    <Input id="seo-title" placeholder="SEO optimized title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seo-description">Meta Description</Label>
                    <Textarea
                      id="seo-description"
                      placeholder="Brief description for search results"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="images" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Upload high-quality images of your product. The first image will be used as the featured image.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={image.id} className="relative group">
                        <div className="aspect-square rounded-md border overflow-hidden bg-muted">
                          <img
                            src={image.url || "/placeholder.svg"}
                            alt={`Product image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeImage(image.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove image</span>
                          </Button>
                        </div>
                        {index === 0 && <Badge className="absolute top-2 left-2">Featured</Badge>}
                      </div>
                    ))}
                    <button
                      className="aspect-square rounded-md border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                      onClick={addImage}
                    >
                      <Upload className="h-8 w-8 mb-2" />
                      <span>Add Image</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="variants" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Variants</CardTitle>
                  <CardDescription>
                    Add variations of your product such as different sizes, colors, or materials.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {variants.map((variant) => (
                    <div key={variant.id} className="space-y-4 pb-4 border-b last:border-0">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2 flex-1">
                          <Label htmlFor={`variant-${variant.id}`}>Variant Type</Label>
                          <Input
                            id={`variant-${variant.id}`}
                            placeholder="e.g. Size, Color, Material"
                            value={variant.name}
                            onChange={(e) => updateVariantName(variant.id, e.target.value)}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-2 mt-6"
                          onClick={() => removeVariant(variant.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove variant</span>
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <Label>Variant Options</Label>
                        <div className="space-y-2">
                          {variant.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center gap-2">
                              <Input
                                placeholder={`Option ${optionIndex + 1}`}
                                value={option}
                                onChange={(e) => updateVariantOption(variant.id, optionIndex, e.target.value)}
                              />
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeVariantOption(variant.id, optionIndex)}
                                disabled={variant.options.length <= 1}
                              >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove option</span>
                              </Button>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => addVariantOption(variant.id)}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add Option
                        </Button>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" onClick={addVariant}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add Another Variant
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Variant Combinations</CardTitle>
                  <CardDescription>Manage inventory and pricing for each variant combination.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Variant</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>SKU</TableHead>
                          <TableHead className="w-[100px]">Enabled</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Black</TableCell>
                          <TableCell>
                            <Input type="number" defaultValue="199.99" className="w-24" />
                          </TableCell>
                          <TableCell>
                            <Input type="number" defaultValue="45" className="w-20" />
                          </TableCell>
                          <TableCell>
                            <Input defaultValue="WH-BLK-001" className="w-32" />
                          </TableCell>
                          <TableCell>
                            <Checkbox defaultChecked />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>White</TableCell>
                          <TableCell>
                            <Input type="number" defaultValue="199.99" className="w-24" />
                          </TableCell>
                          <TableCell>
                            <Input type="number" defaultValue="32" className="w-20" />
                          </TableCell>
                          <TableCell>
                            <Input defaultValue="WH-WHT-001" className="w-32" />
                          </TableCell>
                          <TableCell>
                            <Checkbox defaultChecked />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Blue</TableCell>
                          <TableCell>
                            <Input type="number" defaultValue="209.99" className="w-24" />
                          </TableCell>
                          <TableCell>
                            <Input type="number" defaultValue="18" className="w-20" />
                          </TableCell>
                          <TableCell>
                            <Input defaultValue="WH-BLU-001" className="w-32" />
                          </TableCell>
                          <TableCell>
                            <Checkbox defaultChecked />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>Manage stock levels and inventory settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                    <Input id="sku" placeholder="WH-1000XM4" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                    <Input id="barcode" placeholder="123456789012" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input id="stock" type="number" placeholder="0" />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch id="track-inventory" />
                    <Label htmlFor="track-inventory">Track inventory</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="continue-selling" />
                    <Label htmlFor="continue-selling">Continue selling when out of stock</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping</CardTitle>
                  <CardDescription>Configure shipping details for this product.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="0.00" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (cm)</Label>
                      <Input id="length" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (cm)</Label>
                      <Input id="width" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch id="free-shipping" />
                    <Label htmlFor="free-shipping">Free shipping</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">Visibility</Label>
                <Select defaultValue="draft">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Switch id="featured" />
                <Label htmlFor="featured">Featured product</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cost-price">Cost Price ($)</Label>
                <Input id="cost-price" type="number" placeholder="0.00" />
                <p className="text-xs text-muted-foreground">For your reference only, not shown to customers.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profit-margin">Profit Margin</Label>
                <div className="flex items-center">
                  <Input id="profit-margin" type="number" placeholder="0" className="rounded-r-none" />
                  <div className="bg-muted px-3 py-2 border border-l-0 rounded-r-md">%</div>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between">
                <span className="font-medium">Estimated Profit:</span>
                <span className="font-bold text-green-600">$0.00</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
