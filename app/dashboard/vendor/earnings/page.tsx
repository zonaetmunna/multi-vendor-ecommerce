import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart } from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { ArrowDownToLine, CreditCard, DollarSign, Download, History } from "lucide-react"

export default function VendorEarningsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Earnings & Payouts</h2>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Statement
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,456.89</div>
            <p className="text-xs text-muted-foreground">Ready to withdraw</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Balance</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245.32</div>
            <p className="text-xs text-muted-foreground">Will be available in 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Withdrawn</CardTitle>
            <ArrowDownToLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,789.00</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commission Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10%</div>
            <p className="text-xs text-muted-foreground">Platform fee</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="earnings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>
        
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
              <CardDescription>Your earnings over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart
                data={[
                  { name: "Jan", total: 400 },
                  { name: "Feb", total: 600 },
                  { name: "Mar", total: 550 },
                  { name: "Apr", total: 800 },
                  { name: "May", total: 950 },
                  { name: "Jun", total: 1100 },
                  { name: "Jul", total: 900 },
                  { name: "Aug", total: 1200 },
                  { name: "Sep", total: 1500 },
                  { name: "Oct", total: 1800 },
                  { name: "Nov", total: 1600 },
                  { name: "Dec", total: 2100 },
                ]}
                categories={["total"]}
                colors={["#10b981"]}
                valueFormatter={(value) => `$${value}`}
                showLegend={false}
                showXAxis={true}
                showYAxis={true}
                showGridLines={true}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Earnings</CardTitle>
                <CardDescription>Your recent order earnings</CardDescription>
              </div>
              <Select defaultValue="30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="year">This year</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead className="text-right">Gross Amount</TableHead>
                    <TableHead className="text-right">Commission</TableHead>
                    <TableHead className="text-right">Net Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "ORD-7829",
                      date: "2023-06-15",
                      products: 3,
                      gross: 124.99,
                      commission: 12.50,
                      net: 112.49
                    },
                    {
                      id: "ORD-7830",
                      date: "2023-06-14",
                      products: 1,
                      gross: 59.99,
                      commission: 6.00,
                      net: 53.99
                    },
                    {
                      id: "ORD-7831",
                      date: "2023-06-14",
                      products: 2,
                      gross: 89.98,
                      commission: 9.00,
                      net: 80.98
                    },
                    {
                      id: "ORD-7832",
                      date: "2023-06-13",
                      products: 4,
                      gross: 199.96,
                      commission: 20.00,
                      net: 179.96
                    },
                    {
                      id: "ORD-7833",
                      date: "2023-06-12",
                      products: 1,
                      gross: 29.99,
                      commission: 3.00,
                      net: 26.99
                    }
                  ].map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.products}</TableCell>
                      <TableCell className="text-right">${order.gross.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-red-500">${order.commission.toFixed(2)}</TableCell>
                      <TableCell className="text-right font-medium">${order.net.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">View All Earnings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Payout History</CardTitle>
                <CardDescription>Your previous withdrawal requests</CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payouts</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "TRX-4532",
                      date: "2023-06-10",
                      amount: 1200.00,
                      method: "Bank Transfer",
                      status: "Completed"
                    },
                    {
                      id: "TRX-4533",
                      date: "2023-05-25",
                      amount: 950.00,
                      method: "PayPal",
                      status: "Completed"
                    },
                    {
                      id: "TRX-4534",
                      date: "2023-05-10",
                      amount: 800.00,
                      method: "Bank Transfer",
                      status: "Completed"
                    },
                    {
                      id: "TRX-4535",
                      date: "2023-04-25",
                      amount: 1500.00,
                      method: "Bank Transfer",
                      status: "Completed"
                    },
                    {
                      id: "TRX-4536",
                      date: "2023-04-10",
                      amount: 600.00,
                      method: "PayPal",
                      status: "Completed"
                    }
                  ].map((payout) => (
                    <TableRow key={payout.id}>
                      <TableCell className="font-medium">{payout.id}</TableCell>
                      <TableCell>{payout.date}</TableCell>
                      <TableCell>${payout.amount.toFixed(2)}</TableCell>
                      <TableCell>{payout.method}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          payout.status === "Completed" ? "bg-green-100 text-green-800" :
                          payout.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {payout.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">View All Payouts</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="withdraw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Request Withdrawal</CardTitle>
              <CardDescription>Withdraw your available balance to your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount to withdraw</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="amount" placeholder="0.00" className="pl-8" />
                </div>
                <p className="text-sm text-muted-foreground">Available balance: $3,456.89</p>
              </div>
              
              <div className="grid gap-2">
                <Label>Payment Method</Label>
                <Select defaultValue="bank">
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 bg-muted-foreground/20">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Processing Time</p>
                    <p className="text-sm text-muted-foreground">Bank transfers typically take 2-3 business days to process</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Request Withdrawal</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 