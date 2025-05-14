import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Package, ShoppingCart, Store, Users } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
            <Store className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+12 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">+573 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180 since last week</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart
                  data={[
                    { name: "Jan", total: 1500 },
                    { name: "Feb", total: 2300 },
                    { name: "Mar", total: 3200 },
                    { name: "Apr", total: 4500 },
                    { name: "May", total: 4200 },
                    { name: "Jun", total: 5800 },
                    { name: "Jul", total: 6000 },
                    { name: "Aug", total: 5500 },
                    { name: "Sep", total: 7000 },
                    { name: "Oct", total: 8900 },
                    { name: "Nov", total: 9100 },
                    { name: "Dec", total: 10200 },
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
                <CardTitle>Top Categories</CardTitle>
                <CardDescription>Top selling product categories this month</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "Electronics", total: 1200 },
                    { name: "Fashion", total: 900 },
                    { name: "Home", total: 700 },
                    { name: "Beauty", total: 500 },
                    { name: "Sports", total: 300 },
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
                <CardDescription>Latest orders across all vendors</CardDescription>
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
                      <div className="font-medium">${(Math.random() * 200).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>New Vendors</CardTitle>
                <CardDescription>Recently registered vendors pending approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4 h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                        <Store className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Vendor Name {i}</p>
                        <p className="text-sm text-muted-foreground">vendor{i}@example.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Pending</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>Detailed platform performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view platform reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reports content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
