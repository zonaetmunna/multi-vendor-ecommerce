import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart } from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    ArrowDownRight,
    ArrowUpRight,
    Calendar,
    Download,
    TrendingDown,
    TrendingUp,
    Users,
} from "lucide-react"

// Custom PieChart component since it's not available in the chart library
const PieChart = ({ data, colors, valueFormatter, showLegend }: { 
  data: Array<{ name: string; value: number }>;
  colors: string[];
  valueFormatter: (value: number) => string;
  showLegend: boolean;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-64 w-64 relative rounded-full bg-muted overflow-hidden">
        {data.map((item, index) => {
          const totalValue = data.reduce((sum, item) => sum + item.value, 0);
          const percentage = (item.value / totalValue) * 100;
          const previousPercentages = data
            .slice(0, index)
            .reduce((sum, item) => sum + (item.value / totalValue) * 100, 0);
          
          return (
            <div
              key={item.name}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((previousPercentages / 100) * 2 * Math.PI - Math.PI / 2)}% ${50 + 50 * Math.sin((previousPercentages / 100) * 2 * Math.PI - Math.PI / 2)}%, ${50 + 50 * Math.cos(((previousPercentages + percentage) / 100) * 2 * Math.PI - Math.PI / 2)}% ${50 + 50 * Math.sin(((previousPercentages + percentage) / 100) * 2 * Math.PI - Math.PI / 2)}%)`,
                backgroundColor: colors[index % colors.length],
              }}
            />
          );
        })}
      </div>
      
      {showLegend && (
        <div className="grid grid-cols-2 gap-2 mt-4 w-full">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-sm">{item.name} ({valueFormatter(item.value)})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function VendorAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics & Reports</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.89</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+15.3%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+0.5%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$52.40</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+$3.20</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Return Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500 font-medium">-0.3%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales Analysis</TabsTrigger>
          <TabsTrigger value="products">Product Performance</TabsTrigger>
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Trend</CardTitle>
              <CardDescription>Your sales performance over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart
                data={[
                  { name: "Jan 1", sales: 400, orders: 24 },
                  { name: "Jan 5", sales: 300, orders: 13 },
                  { name: "Jan 10", sales: 500, orders: 22 },
                  { name: "Jan 15", sales: 450, orders: 21 },
                  { name: "Jan 20", sales: 600, orders: 28 },
                  { name: "Jan 25", sales: 750, orders: 32 },
                  { name: "Jan 30", sales: 800, orders: 40 },
                  { name: "Feb 5", sales: 700, orders: 35 },
                  { name: "Feb 10", sales: 650, orders: 30 },
                  { name: "Feb 15", sales: 850, orders: 42 },
                  { name: "Feb 20", sales: 900, orders: 45 },
                  { name: "Feb 25", sales: 1000, orders: 55 },
                ]}
                categories={["sales", "orders"]}
                colors={["#8884d8", "#82ca9d"]}
                valueFormatter={(value: number) => `$${value}`}
                showLegend={true}
                showXAxis={true}
                showYAxis={true}
                showGridLines={true}
              />
            </CardContent>
          </Card>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Day of Week</CardTitle>
                <CardDescription>Which days perform best</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "Monday", total: 900 },
                    { name: "Tuesday", total: 1200 },
                    { name: "Wednesday", total: 1500 },
                    { name: "Thursday", total: 1300 },
                    { name: "Friday", total: 2000 },
                    { name: "Saturday", total: 2200 },
                    { name: "Sunday", total: 1800 },
                  ]}
                  categories={["total"]}
                  colors={["#8884d8"]}
                  valueFormatter={(value: number) => `$${value}`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales by Time of Day</CardTitle>
                <CardDescription>When your customers are shopping</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "12am-4am", total: 400 },
                    { name: "4am-8am", total: 300 },
                    { name: "8am-12pm", total: 1100 },
                    { name: "12pm-4pm", total: 1600 },
                    { name: "4pm-8pm", total: 2200 },
                    { name: "8pm-12am", total: 1800 },
                  ]}
                  categories={["total"]}
                  colors={["#82ca9d"]}
                  valueFormatter={(value: number) => `$${value}`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
              <CardDescription>Your best performers by revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Units Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Profit Margin</TableHead>
                    <TableHead>Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Wireless Earbuds Pro",
                      units: 156,
                      revenue: 7800,
                      margin: "42%",
                      trend: "up"
                    },
                    {
                      name: "Smart Watch Series 5",
                      units: 98,
                      revenue: 4900,
                      margin: "38%",
                      trend: "up"
                    },
                    {
                      name: "Bluetooth Speaker",
                      units: 87,
                      revenue: 3480,
                      margin: "45%",
                      trend: "down"
                    },
                    {
                      name: "Laptop Stand",
                      units: 75,
                      revenue: 2250,
                      margin: "55%",
                      trend: "up"
                    },
                    {
                      name: "Phone Charging Station",
                      units: 65,
                      revenue: 1950,
                      margin: "48%",
                      trend: "down"
                    }
                  ].map((product, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.units}</TableCell>
                      <TableCell>${product.revenue.toLocaleString()}</TableCell>
                      <TableCell>{product.margin}</TableCell>
                      <TableCell>
                        {product.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Category Performance</CardTitle>
                <CardDescription>Sales distribution by category</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart
                  data={[
                    { name: "Electronics", value: 45 },
                    { name: "Accessories", value: 25 },
                    { name: "Smart Home", value: 15 },
                    { name: "Audio", value: 10 },
                    { name: "Other", value: 5 },
                  ]}
                  colors={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={true}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
                <CardDescription>Current stock levels by status</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart
                  data={[
                    { name: "In Stock", value: 68 },
                    { name: "Low Stock", value: 15 },
                    { name: "Out of Stock", value: 12 },
                    { name: "Discontinued", value: 5 },
                  ]}
                  colors={["#4ade80", "#facc15", "#f87171", "#94a3b8"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Metrics</CardTitle>
              <CardDescription>Detailed metrics for your top products</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Conversion Rate</TableHead>
                    <TableHead>Avg. Rating</TableHead>
                    <TableHead>Return Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Wireless Earbuds Pro",
                      views: 3245,
                      conversion: "4.8%",
                      rating: "4.7/5",
                      returns: "1.2%"
                    },
                    {
                      name: "Smart Watch Series 5",
                      views: 2890,
                      conversion: "3.4%",
                      rating: "4.5/5",
                      returns: "2.1%"
                    },
                    {
                      name: "Bluetooth Speaker",
                      views: 2456,
                      conversion: "3.5%",
                      rating: "4.3/5",
                      returns: "2.8%"
                    },
                    {
                      name: "Laptop Stand",
                      views: 1987,
                      conversion: "3.8%",
                      rating: "4.8/5",
                      returns: "0.9%"
                    },
                    {
                      name: "Phone Charging Station",
                      views: 1654,
                      conversion: "3.9%",
                      rating: "4.4/5",
                      returns: "1.5%"
                    }
                  ].map((product, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.views.toLocaleString()}</TableCell>
                      <TableCell>{product.conversion}</TableCell>
                      <TableCell>{product.rating}</TableCell>
                      <TableCell>{product.returns}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Customer Demographics</CardTitle>
                <CardDescription>Age distribution of your customers</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "18-24", total: 15 },
                    { name: "25-34", total: 35 },
                    { name: "35-44", total: 25 },
                    { name: "45-54", total: 15 },
                    { name: "55+", total: 10 },
                  ]}
                  categories={["total"]}
                  colors={["#8884d8"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Locations</CardTitle>
                <CardDescription>Top regions by sales</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "North America", total: 45 },
                    { name: "Europe", total: 25 },
                    { name: "Asia", total: 20 },
                    { name: "Australia", total: 7 },
                    { name: "Other", total: 3 },
                  ]}
                  categories={["total"]}
                  colors={["#82ca9d"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  layout="vertical"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Loyalty</CardTitle>
                <CardDescription>Repeat purchase behavior</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart
                  data={[
                    { name: "First-time", value: 65 },
                    { name: "Returning", value: 35 },
                  ]}
                  colors={["#8884d8", "#82ca9d"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Customer Lifetime Value</CardTitle>
                <CardDescription>Average revenue per customer over time</CardDescription>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart
                data={[
                  { name: "Initial", value: 50 },
                  { name: "3 months", value: 120 },
                  { name: "6 months", value: 180 },
                  { name: "9 months", value: 250 },
                  { name: "12 months", value: 310 },
                  { name: "18 months", value: 420 },
                  { name: "24 months", value: 550 },
                ]}
                categories={["value"]}
                colors={["#10b981"]}
                valueFormatter={(value: number) => `$${value}`}
                showLegend={false}
                showXAxis={true}
                showYAxis={true}
                showGridLines={true}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="traffic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your store visitors come from</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart
                  data={[
                    { name: "Direct", value: 30 },
                    { name: "Search", value: 25 },
                    { name: "Social", value: 20 },
                    { name: "Referral", value: 15 },
                    { name: "Email", value: 10 },
                  ]}
                  colors={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={true}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Device Types</CardTitle>
                <CardDescription>Devices used to access your store</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart
                  data={[
                    { name: "Mobile", value: 62 },
                    { name: "Desktop", value: 28 },
                    { name: "Tablet", value: 10 },
                  ]}
                  colors={["#8884d8", "#82ca9d", "#ffc658"]}
                  valueFormatter={(value: number) => `${value}%`}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Traffic Trends</CardTitle>
              <CardDescription>Visitor traffic over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart
                data={[
                  { name: "Jan 1", visitors: 150, conversions: 5 },
                  { name: "Jan 5", visitors: 120, conversions: 4 },
                  { name: "Jan 10", visitors: 190, conversions: 7 },
                  { name: "Jan 15", visitors: 210, conversions: 8 },
                  { name: "Jan 20", visitors: 250, conversions: 9 },
                  { name: "Jan 25", visitors: 230, conversions: 8 },
                  { name: "Jan 30", visitors: 300, conversions: 12 },
                  { name: "Feb 5", visitors: 320, conversions: 13 },
                  { name: "Feb 10", visitors: 290, conversions: 10 },
                  { name: "Feb 15", visitors: 350, conversions: 15 },
                  { name: "Feb 20", visitors: 380, conversions: 16 },
                  { name: "Feb 25", visitors: 400, conversions: 18 },
                ]}
                categories={["visitors", "conversions"]}
                colors={["#8884d8", "#82ca9d"]}
                valueFormatter={(value: number) => `${value}`}
                showLegend={true}
                showXAxis={true}
                showYAxis={true}
                showGridLines={true}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Landing Pages</CardTitle>
              <CardDescription>Most visited pages on your store</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Visitors</TableHead>
                    <TableHead>Bounce Rate</TableHead>
                    <TableHead>Avg. Time on Page</TableHead>
                    <TableHead>Conversion Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      page: "Homepage",
                      visitors: 2450,
                      bounce: "32%",
                      time: "1:45",
                      conversion: "3.2%"
                    },
                    {
                      page: "Wireless Earbuds Product Page",
                      visitors: 1280,
                      bounce: "28%",
                      time: "2:30",
                      conversion: "4.8%"
                    },
                    {
                      page: "Smart Watches Collection",
                      visitors: 950,
                      bounce: "35%",
                      time: "1:50",
                      conversion: "3.5%"
                    },
                    {
                      page: "Summer Sale Special",
                      visitors: 820,
                      bounce: "25%",
                      time: "2:15",
                      conversion: "5.2%"
                    },
                    {
                      page: "Tech Blog: Latest Gadgets",
                      visitors: 650,
                      bounce: "40%",
                      time: "3:10",
                      conversion: "2.1%"
                    }
                  ].map((page, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{page.page}</TableCell>
                      <TableCell>{page.visitors.toLocaleString()}</TableCell>
                      <TableCell>{page.bounce}</TableCell>
                      <TableCell>{page.time}</TableCell>
                      <TableCell>{page.conversion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 