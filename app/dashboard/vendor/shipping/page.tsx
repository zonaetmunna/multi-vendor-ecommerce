import type { Metadata } from "next"
import { Plus, Edit, Trash2, Globe, TruckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertCircle,
  Check,
  MapPin,
  Save,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Shipping Settings | Vendor Dashboard",
  description: "Manage your shipping methods and costs",
}

export default function VendorShippingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Shipping Settings</h2>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
      
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Configure your shipping methods and rates to ensure accurate shipping costs for your customers.
          These settings will be used to calculate shipping costs during checkout.
        </AlertDescription>
      </Alert>
      
      <Tabs defaultValue="methods" className="space-y-4">
        <TabsList>
          <TabsTrigger value="methods">Shipping Methods</TabsTrigger>
          <TabsTrigger value="zones">Shipping Zones</TabsTrigger>
          <TabsTrigger value="rules">Shipping Rules</TabsTrigger>
          <TabsTrigger value="integrations">Shipping Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Shipping Methods</CardTitle>
              <CardDescription>Configure the shipping methods available to your customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Shipping Method
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Method Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Processing Time</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Standard Shipping",
                        type: "Flat Rate",
                        processing: "3-5 business days",
                        cost: "$5.99",
                        status: "Active"
                      },
                      {
                        name: "Express Shipping",
                        type: "Flat Rate",
                        processing: "1-2 business days",
                        cost: "$12.99",
                        status: "Active"
                      },
                      {
                        name: "Free Shipping",
                        type: "Free",
                        processing: "5-7 business days",
                        cost: "$0.00",
                        status: "Active"
                      },
                      {
                        name: "International Shipping",
                        type: "Weight Based",
                        processing: "7-14 business days",
                        cost: "Varies",
                        status: "Active"
                      },
                      {
                        name: "Local Pickup",
                        type: "Free",
                        processing: "Same day",
                        cost: "$0.00",
                        status: "Inactive"
                      }
                    ].map((method, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{method.name}</TableCell>
                        <TableCell>{method.type}</TableCell>
                        <TableCell>{method.processing}</TableCell>
                        <TableCell>{method.cost}</TableCell>
                        <TableCell>
                          <Badge variant={method.status === "Active" ? "default" : "secondary"}>
                            {method.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Add New Shipping Method</CardTitle>
              <CardDescription>Create a new shipping method for your customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="methodName">Method Name</Label>
                  <Input id="methodName" placeholder="e.g. Standard Shipping" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="methodType">Method Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat">Flat Rate</SelectItem>
                      <SelectItem value="free">Free Shipping</SelectItem>
                      <SelectItem value="weight">Weight Based</SelectItem>
                      <SelectItem value="price">Order Total Based</SelectItem>
                      <SelectItem value="pickup">Local Pickup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="processingTime">Processing Time</Label>
                  <Input id="processingTime" placeholder="e.g. 3-5 business days" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cost">Cost</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <span>$</span>
                    </div>
                    <Input id="cost" placeholder="0.00" className="rounded-l-none" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief description of this shipping method" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="active" />
                <Label htmlFor="active">Active</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Method
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="zones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Zones</CardTitle>
              <CardDescription>Define geographic regions for different shipping rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Shipping Zone
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Zone Name</TableHead>
                    <TableHead>Regions</TableHead>
                    <TableHead>Methods</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "United States",
                      regions: "All 50 states",
                      methods: 3
                    },
                    {
                      name: "Canada",
                      regions: "All provinces",
                      methods: 2
                    },
                    {
                      name: "Europe",
                      regions: "EU countries",
                      methods: 2
                    },
                    {
                      name: "Rest of World",
                      regions: "All other countries",
                      methods: 1
                    }
                  ].map((zone, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{zone.name}</TableCell>
                      <TableCell>{zone.regions}</TableCell>
                      <TableCell>{zone.methods} shipping methods</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>United States Zone Details</CardTitle>
              <CardDescription>Configure shipping methods for the United States</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Regions:</span>
                <span>All 50 states</span>
                <Button variant="outline" size="sm" className="ml-auto">
                  Edit Regions
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Available Shipping Methods</h4>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Method
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Method</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Free Shipping Threshold</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Standard Shipping",
                        cost: "$5.99",
                        threshold: "$50.00",
                        status: true
                      },
                      {
                        name: "Express Shipping",
                        cost: "$12.99",
                        threshold: "N/A",
                        status: true
                      },
                      {
                        name: "Free Shipping",
                        cost: "$0.00",
                        threshold: "N/A",
                        status: true
                      }
                    ].map((method, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{method.name}</TableCell>
                        <TableCell>{method.cost}</TableCell>
                        <TableCell>{method.threshold}</TableCell>
                        <TableCell>
                          {method.status ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              <Check className="mr-1 h-3 w-3" /> Enabled
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                              Disabled
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Rules</CardTitle>
              <CardDescription>Set up conditional rules for shipping costs and methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Rule
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rule Name</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Free Shipping Over $50",
                      condition: "Order total ≥ $50.00",
                      action: "Apply free shipping",
                      status: "Active"
                    },
                    {
                      name: "Reduced Rate for Small Items",
                      condition: "Product weight < 1lb",
                      action: "Apply $3.99 flat rate",
                      status: "Active"
                    },
                    {
                      name: "Expedited Shipping for Premium Members",
                      condition: "Customer is Premium Member",
                      action: "50% off Express Shipping",
                      status: "Active"
                    },
                    {
                      name: "Holiday Special",
                      condition: "Date between Nov 15 - Dec 31",
                      action: "Free shipping on all orders",
                      status: "Inactive"
                    }
                  ].map((rule, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{rule.name}</TableCell>
                      <TableCell>{rule.condition}</TableCell>
                      <TableCell>{rule.action}</TableCell>
                      <TableCell>
                        <Badge variant={rule.status === "Active" ? "default" : "secondary"}>
                          {rule.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Add New Shipping Rule</CardTitle>
              <CardDescription>Create conditional shipping rules based on order details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ruleName">Rule Name</Label>
                <Input id="ruleName" placeholder="e.g. Free Shipping Over $100" />
              </div>
              
              <div className="space-y-2">
                <Label>Condition Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order_total">Order Total</SelectItem>
                    <SelectItem value="weight">Product Weight</SelectItem>
                    <SelectItem value="quantity">Item Quantity</SelectItem>
                    <SelectItem value="customer">Customer Group</SelectItem>
                    <SelectItem value="date">Date Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Operator</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select operator" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="greater_than">Greater than or equal to (≥)</SelectItem>
                      <SelectItem value="less_than">Less than (<)</SelectItem>
                      <SelectItem value="equal">Equal to (=)</SelectItem>
                      <SelectItem value="between">Between</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="conditionValue">Value</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <span>$</span>
                    </div>
                    <Input id="conditionValue" placeholder="100.00" className="rounded-l-none" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Action Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select action type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free_shipping">Apply Free Shipping</SelectItem>
                    <SelectItem value="flat_rate">Apply Flat Rate</SelectItem>
                    <SelectItem value="percentage_discount">Apply Percentage Discount</SelectItem>
                    <SelectItem value="fixed_discount">Apply Fixed Discount</SelectItem>
                    <SelectItem value="disable_method">Disable Shipping Method</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="actionValue">Action Value</Label>
                <Input id="actionValue" placeholder="e.g. 0.00 or 50%" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="ruleActive" />
                <Label htmlFor="ruleActive">Active</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Rule</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Provider Integrations</CardTitle>
              <CardDescription>Connect with shipping carriers for real-time rates and tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                {[
                  {
                    name: "USPS",
                    logo: "🇺🇸",
                    status: "Connected",
                    description: "United States Postal Service for domestic and international shipping"
                  },
                  {
                    name: "FedEx",
                    logo: "📦",
                    status: "Not Connected",
                    description: "FedEx shipping services with real-time rates and tracking"
                  },
                  {
                    name: "UPS",
                    logo: "🚚",
                    status: "Not Connected",
                    description: "UPS shipping services with package tracking and insurance"
                  },
                  {
                    name: "DHL",
                    logo: "✈️",
                    status: "Not Connected",
                    description: "DHL Express for international shipping and fast delivery"
                  }
                ].map((provider, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="text-3xl">{provider.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{provider.name}</h3>
                        <Badge variant={provider.status === "Connected" ? "default" : "outline"}>
                          {provider.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{provider.description}</p>
                    </div>
                    <Button variant={provider.status === "Connected" ? "outline" : "default"}>
                      {provider.status === "Connected" ? "Configure" : "Connect"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>USPS Configuration</CardTitle>
              <CardDescription>Manage your USPS shipping integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="uspsUsername">USPS Username</Label>
                  <Input id="uspsUsername" value="vendor_12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uspsApiKey">API Key</Label>
                  <Input id="uspsApiKey" type="password" value="••••••••••••••••" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Available Services</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Priority Mail",
                    "Priority Mail Express",
                    "First-Class Mail",
                    "USPS Ground Advantage",
                    "Media Mail",
                    "Parcel Select"
                  ].map((service, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Switch id={`service-${i}`} defaultChecked={i < 4} />
                      <Label htmlFor={`service-${i}`}>{service}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Packaging Types</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Your Packaging",
                    "USPS Flat Rate Envelope",
                    "USPS Flat Rate Box - Small",
                    "USPS Flat Rate Box - Medium",
                    "USPS Flat Rate Box - Large"
                  ].map((packaging, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Switch id={`packaging-${i}`} defaultChecked={i < 3} />
                      <Label htmlFor={`packaging-${i}`}>{packaging}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="liveRates" defaultChecked />
                <div>
                  <Label htmlFor="liveRates">Show Live Rates at Checkout</Label>
                  <p className="text-sm text-muted-foreground">Display real-time shipping rates to customers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="trackingEmails" defaultChecked />
                <div>
                  <Label htmlFor="trackingEmails">Send Tracking Emails</Label>
                  <p className="text-sm text-muted-foreground">Automatically send tracking information to customers</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Disconnect</Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
