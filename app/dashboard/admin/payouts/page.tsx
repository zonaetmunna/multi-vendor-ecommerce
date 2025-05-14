import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
  BanknoteIcon,
  Calendar,
  CreditCard,
  Download,
  Filter,
  MessageCircle,
  Search,
  Store
} from "lucide-react"

export default function AdminPayoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payout Management</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Payouts
          </Button>
          <Button>
            <BanknoteIcon className="mr-2 h-4 w-4" />
            Process Payouts
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,560.80</div>
            <p className="text-xs text-muted-foreground">12 vendors awaiting payment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,245.30</div>
            <p className="text-xs text-muted-foreground">5 payouts in process</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$28,435.90</div>
            <p className="text-xs text-muted-foreground">Total payouts this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Fee</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,215.65</div>
            <p className="text-xs text-muted-foreground">Commission earned this month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vendor or transaction ID..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Payouts</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
      
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payouts</CardTitle>
              <CardDescription>Payouts awaiting processing</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Request Date</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Smith",
                      store: "Tech Gadgets Store",
                      amount: "$1,245.80",
                      date: "Jun 15, 2023",
                      method: "Bank Transfer",
                      status: "Pending"
                    },
                    {
                      name: "Sarah Johnson",
                      store: "Fashionista Boutique",
                      amount: "$2,890.50",
                      date: "Jun 14, 2023",
                      method: "PayPal",
                      status: "Pending"
                    },
                    {
                      name: "Mike Williams",
                      store: "Home Goods Plus",
                      amount: "$950.20",
                      date: "Jun 13, 2023",
                      method: "Bank Transfer",
                      status: "Pending"
                    },
                    {
                      name: "Emma Davis",
                      store: "Beauty Corner",
                      amount: "$1,875.30",
                      date: "Jun 12, 2023",
                      method: "PayPal",
                      status: "Pending"
                    },
                    {
                      name: "Robert Chen",
                      store: "Sports World",
                      amount: "$780.45",
                      date: "Jun 11, 2023",
                      method: "Bank Transfer",
                      status: "Pending"
                    }
                  ].map((payout, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${payout.name}`} />
                            <AvatarFallback>{payout.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{payout.name}</div>
                            <div className="text-sm text-muted-foreground">{payout.store}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{payout.amount}</TableCell>
                      <TableCell>{payout.date}</TableCell>
                      <TableCell>{payout.method}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          {payout.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm">Process</Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="processing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Processing Payouts</CardTitle>
              <CardDescription>Payouts that are currently being processed</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Initiated</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "TRX-78901",
                      name: "Lisa Thompson",
                      store: "Kitchen Wares Co.",
                      amount: "$1,340.60",
                      date: "Jun 16, 2023",
                      method: "Bank Transfer",
                      status: "Processing"
                    },
                    {
                      id: "TRX-78902",
                      name: "David Wilson",
                      store: "Outdoor Adventure",
                      amount: "$975.20",
                      date: "Jun 16, 2023",
                      method: "PayPal",
                      status: "Processing"
                    },
                    {
                      id: "TRX-78903",
                      name: "Jennifer Adams",
                      store: "Happy Pets Store",
                      amount: "$1,890.45",
                      date: "Jun 15, 2023",
                      method: "Bank Transfer",
                      status: "Processing"
                    }
                  ].map((payout, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{payout.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div>{payout.name}</div>
                            <div className="text-sm text-muted-foreground">{payout.store}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{payout.amount}</TableCell>
                      <TableCell>{payout.date}</TableCell>
                      <TableCell>{payout.method}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {payout.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Payouts</CardTitle>
              <CardDescription>Successfully processed payouts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Requested</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "TRX-78890",
                      name: "John Smith",
                      store: "Tech Gadgets Store",
                      amount: "$1,450.30",
                      requested: "Jun 10, 2023",
                      completed: "Jun 12, 2023",
                      method: "Bank Transfer",
                      status: "Completed"
                    },
                    {
                      id: "TRX-78880",
                      name: "Sarah Johnson",
                      store: "Fashionista Boutique",
                      amount: "$2,780.90",
                      requested: "Jun 9, 2023",
                      completed: "Jun 11, 2023",
                      method: "PayPal",
                      status: "Completed"
                    },
                    {
                      id: "TRX-78870",
                      name: "Emma Davis",
                      store: "Beauty Corner",
                      amount: "$1,230.50",
                      requested: "Jun 8, 2023",
                      completed: "Jun 10, 2023",
                      method: "Bank Transfer",
                      status: "Completed"
                    }
                  ].map((payout, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{payout.id}</TableCell>
                      <TableCell>
                        <div>
                          <div>{payout.name}</div>
                          <div className="text-sm text-muted-foreground">{payout.store}</div>
                        </div>
                      </TableCell>
                      <TableCell>{payout.amount}</TableCell>
                      <TableCell>{payout.requested}</TableCell>
                      <TableCell>{payout.completed}</TableCell>
                      <TableCell>{payout.method}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {payout.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1-3</strong> of <strong>145</strong> completed payouts
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payout Settings</CardTitle>
              <CardDescription>Configure your platform's payout preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Automatic Payouts</h3>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Minimum Payout Amount</h3>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <span>$</span>
                    </div>
                    <Input defaultValue="50.00" className="rounded-l-none" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Default Payment Method</h3>
                  <Select defaultValue="bank">
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="stripe">Stripe Connect</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Holding Period</h3>
                  <Select defaultValue="7">
                    <SelectTrigger>
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 