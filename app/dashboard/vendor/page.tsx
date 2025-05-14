import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import { ArrowUpRight, DollarSign, Package, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VendorDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.89</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+243</div>
            <p className="text-xs text-muted-foreground">+18% since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85</div>
            <p className="text-xs text-muted-foreground">+12 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Store Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground">Based on 156 reviews</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart
                  data={[
                    { name: "Jan", total: 500 },
                    { name: "Feb", total: 900 },
                    { name: "Mar", total: 1200 },
                    { name: "Apr", total: 800 },
                    { name: "May", total: 1100 },
                    { name: "Jun", total: 1500 },
                    { name: "Jul", total: 1800 },
                    { name: "Aug", total: 1600 },
                    { name: "Sep", total: 2000 },
                    { name: "Oct", total: 2200 },
                    { name: "Nov", total: 2100 },
                    { name: "Dec", total: 2500 },
                  ]}
                  categories={["total"]}
                  colors={["#8884d8"]}
                  valueFormatter={(value) => `$${value}`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  showGridLines={true}
                />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Your best selling products this month</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "Product A", total: 120 },
                    { name: "Product B", total: 90 },
                    { name: "Product C", total: 70 },
                    { name: "Product D", total: 50 },
                    { name: "Product E", total: 30 },
                  ]}
                  categories={["total"]}
                  colors={["#8884d8"]}
                  valueFormatter={(value) => `${value} sales`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  layout="vertical"
                />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your most recent customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4 rounded-full p-2 bg-muted">
                        <ShoppingCart className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Order #{Math.floor(Math.random() * 10000)}</p>
                        <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
                      </div>
                      <div className="font-medium">${(Math.random() * 100).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Store Performance</CardTitle>
                <CardDescription>Key metrics for your store</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold">3.2%</p>
                        <ArrowUpRight className="ml-2 h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-500 ml-1">+0.5%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Avg. Order Value</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold">$52.40</p>
                        <ArrowUpRight className="ml-2 h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-500 ml-1">+$3.20</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Return Rate</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold">2.1%</p>
                        <span className="text-xs text-muted-foreground ml-1">(-0.3%)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Customer Satisfaction</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold">96%</p>
                        <ArrowUpRight className="ml-2 h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-500 ml-1">+2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your product inventory</CardDescription>
              </div>
              <Link href="/dashboard/vendor/products/add">
                <Button>Add Product</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <p>Products list will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
              <CardDescription>View and manage your customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Orders list will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
