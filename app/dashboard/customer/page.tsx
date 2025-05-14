import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ShoppingCart, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Lifetime orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Products saved for later</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Orders in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reviews Given</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Product reviews submitted</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="reviews">My Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Recent Orders</CardTitle>
              <CardDescription>Track and manage your recent purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center border rounded-lg p-4">
                    <div className="h-16 w-16 bg-muted rounded-md mr-4 flex items-center justify-center">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="font-medium">Order #{Math.floor(Math.random() * 10000)}</h3>
                          <p className="text-sm text-muted-foreground">Placed on {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            {["Shipped", "Processing", "Delivered"][i - 1]}
                          </div>
                          <Link href={`/dashboard/customer/orders/${i}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm">
                          {i === 1 ? "3 items" : i === 2 ? "1 item" : "2 items"} • $
                          {(Math.random() * 200 + 50).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/dashboard/customer/orders">
                  <Button variant="outline">View All Orders</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wishlist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Wishlist</CardTitle>
              <CardDescription>Products you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-muted flex items-center justify-center">
                      <img
                        src={`/placeholder.svg?height=160&width=320`}
                        alt={`Wishlist item ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium truncate">Product Name {i}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Vendor Name</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">${(Math.random() * 100 + 20).toFixed(2)}</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Reviews</CardTitle>
              <CardDescription>Reviews you've left on products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${
                                j < 5 - (i % 2) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-medium">Product Name {i}</h3>
                    <p className="text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
