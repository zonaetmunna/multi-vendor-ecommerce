import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, PercentIcon, Plus, Tag, Trash2, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coupons & Discounts | Vendor Dashboard",
  description: "Manage your coupons and discount offers",
}

export default function CouponsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Coupons & Discounts</h1>
        <p className="text-muted-foreground">
          Create and manage special offers for your customers.
        </p>
      </div>
      
      <Separator />
      
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Active Coupons</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Coupon
        </Button>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Usage / Limit</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">SUMMER25</TableCell>
                <TableCell>Percentage</TableCell>
                <TableCell>25% off</TableCell>
                <TableCell>43 / 100</TableCell>
                <TableCell>Jun 30, 2025</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">FREESHIP</TableCell>
                <TableCell>Free Shipping</TableCell>
                <TableCell>Free shipping</TableCell>
                <TableCell>78 / 200</TableCell>
                <TableCell>Jul 15, 2025</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">WELCOME10</TableCell>
                <TableCell>Fixed Amount</TableCell>
                <TableCell>$10 off</TableCell>
                <TableCell>125 / Unlimited</TableCell>
                <TableCell>No expiry</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">FLASH50</TableCell>
                <TableCell>Percentage</TableCell>
                <TableCell>50% off</TableCell>
                <TableCell>12 / 50</TableCell>
                <TableCell>May 20, 2025</TableCell>
                <TableCell>
                  <Badge variant="outline">Scheduled</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SPRING15</TableCell>
                <TableCell>Percentage</TableCell>
                <TableCell>15% off</TableCell>
                <TableCell>203 / 300</TableCell>
                <TableCell>Apr 30, 2025</TableCell>
                <TableCell>
                  <Badge variant="secondary">Expired</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Coupon Types</CardTitle>
            <CardDescription>
              Different types of discounts you can offer to your customers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PercentIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Percentage Discount</h3>
                  <p className="text-sm text-muted-foreground">
                    Offer a percentage off the entire order or specific products.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Tag className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Fixed Amount</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide a specific dollar amount off the order total.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    Offer free shipping on the entire order.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Tag className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Buy X Get Y</h3>
                  <p className="text-sm text-muted-foreground">
                    Customers buy a certain quantity and get additional items at a discount.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Coupon Performance</CardTitle>
            <CardDescription>
              Track how your coupons are performing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Top Performing Coupon</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">WELCOME10</span>
                    <p className="text-sm text-muted-foreground">$10 off</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-medium">$1,250</span>
                    <p className="text-sm text-muted-foreground">Revenue generated</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Redemptions</h3>
                  <p className="text-2xl font-bold">461</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Avg. Order Value</h3>
                  <p className="text-2xl font-bold">$78.45</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Conversion Rate</h3>
                  <p className="text-2xl font-bold">24.3%</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Discount</h3>
                  <p className="text-2xl font-bold">$3,842</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
