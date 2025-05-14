import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
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
  AlertCircle,
  DollarSign,
  Edit,
  PercentIcon,
  Plus,
  Save,
  Search,
  Trash2
} from "lucide-react"

export default function AdminCommissionSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Commission Settings</h2>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
      
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Commission changes will apply to new orders only. Existing orders will maintain their original commission rates.
        </AlertDescription>
      </Alert>
      
      <Tabs defaultValue="global" className="space-y-4">
        <TabsList>
          <TabsTrigger value="global">Global Commission</TabsTrigger>
          <TabsTrigger value="category">Category-Based</TabsTrigger>
          <TabsTrigger value="vendor">Vendor-Specific</TabsTrigger>
          <TabsTrigger value="tiers">Commission Tiers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="global" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global Commission Rate</CardTitle>
              <CardDescription>Set the default commission rate for all vendors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="globalRate">Default Commission Rate</Label>
                  <div className="flex">
                    <Input id="globalRate" defaultValue="10" className="rounded-r-none" />
                    <div className="flex items-center px-3 border border-l-0 rounded-r-md bg-muted">
                      <PercentIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This rate will apply to all vendors unless overridden by category or vendor-specific settings
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="minCommission">Minimum Commission Amount</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="minCommission" defaultValue="1.00" className="rounded-l-none" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The minimum commission amount that will be charged per order
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="processingFee">Payment Processing Fee</Label>
                  <div className="flex">
                    <Input id="processingFee" defaultValue="2.9" className="rounded-r-none" />
                    <div className="flex items-center px-3 border border-l-0 rounded-r-md bg-muted">
                      <PercentIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Additional fee to cover payment processing costs
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fixedFee">Fixed Transaction Fee</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="fixedFee" defaultValue="0.30" className="rounded-l-none" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fixed fee applied to each transaction
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="includeShipping" />
                <div>
                  <Label htmlFor="includeShipping">Apply Commission to Shipping</Label>
                  <p className="text-sm text-muted-foreground">
                    If enabled, commission will be calculated on product price + shipping
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="includeTax" />
                <div>
                  <Label htmlFor="includeTax">Apply Commission to Tax</Label>
                  <p className="text-sm text-muted-foreground">
                    If enabled, commission will be calculated on product price + tax
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <div className="space-y-4 w-full">
                <h4 className="text-sm font-medium">Commission Calculation Preview</h4>
                <div className="bg-muted p-4 rounded-md">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Product Price:</span>
                        <span>$100.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commission Rate:</span>
                        <span>10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee (2.9%):</span>
                        <span>$2.90</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fixed Fee:</span>
                        <span>$0.30</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Commission:</span>
                        <span>$10.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Fees:</span>
                        <span>$3.20</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Total Deduction:</span>
                        <span>$13.20</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Vendor Receives:</span>
                        <span>$86.80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="category" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Category-Based Commission</CardTitle>
                <CardDescription>Set different commission rates for product categories</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Category Rule
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Commission Rate</TableHead>
                    <TableHead>Min. Commission</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      category: "Electronics",
                      rate: "8%",
                      minCommission: "$2.00",
                      status: "Active"
                    },
                    {
                      category: "Fashion & Apparel",
                      rate: "12%",
                      minCommission: "$1.50",
                      status: "Active"
                    },
                    {
                      category: "Home & Garden",
                      rate: "10%",
                      minCommission: "$1.00",
                      status: "Active"
                    },
                    {
                      category: "Beauty & Personal Care",
                      rate: "15%",
                      minCommission: "$1.00",
                      status: "Active"
                    },
                    {
                      category: "Books & Media",
                      rate: "7%",
                      minCommission: "$0.50",
                      status: "Active"
                    }
                  ].map((category, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{category.category}</TableCell>
                      <TableCell>{category.rate}</TableCell>
                      <TableCell>{category.minCommission}</TableCell>
                      <TableCell>
                        <Badge variant={category.status === "Active" ? "default" : "secondary"}>
                          {category.status}
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
              <CardTitle>Add Category Commission Rule</CardTitle>
              <CardDescription>Create a new commission rule for a specific category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="categorySelect">Product Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sports">Sports & Outdoors</SelectItem>
                    <SelectItem value="toys">Toys & Games</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="pet">Pet Supplies</SelectItem>
                    <SelectItem value="food">Food & Grocery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="categoryRate">Commission Rate</Label>
                  <div className="flex">
                    <Input id="categoryRate" placeholder="10" className="rounded-r-none" />
                    <div className="flex items-center px-3 border border-l-0 rounded-r-md bg-muted">
                      <PercentIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="categoryMinCommission">Minimum Commission</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="categoryMinCommission" placeholder="1.00" className="rounded-l-none" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="categoryActive" defaultChecked />
                <Label htmlFor="categoryActive">Active</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Add Category Rule</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="vendor" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vendor-Specific Commission Rates</CardTitle>
              <CardDescription>Set custom commission rates for specific vendors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search vendors..."
                    className="pl-8"
                  />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Vendor Rule
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Store</TableHead>
                    <TableHead>Commission Rate</TableHead>
                    <TableHead>Override Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Smith",
                      email: "john@techgadgets.com",
                      store: "Tech Gadgets Store",
                      rate: "7%",
                      reason: "Premium vendor partnership",
                      status: "Active"
                    },
                    {
                      name: "Sarah Johnson",
                      email: "sarah@fashionista.com",
                      store: "Fashionista Boutique",
                      rate: "15%",
                      reason: "High return rate",
                      status: "Active"
                    },
                    {
                      name: "Emma Davis",
                      email: "emma@beautycorner.com",
                      store: "Beauty Corner",
                      rate: "8%",
                      reason: "Promotional period",
                      status: "Active"
                    }
                  ].map((vendor, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${vendor.name}`} />
                            <AvatarFallback>{vendor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-muted-foreground">{vendor.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.store}</TableCell>
                      <TableCell className="font-medium">{vendor.rate}</TableCell>
                      <TableCell>{vendor.reason}</TableCell>
                      <TableCell>
                        <Badge variant={vendor.status === "Active" ? "default" : "secondary"}>
                          {vendor.status}
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
              <CardTitle>Add Vendor-Specific Commission</CardTitle>
              <CardDescription>Set a custom commission rate for a specific vendor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vendorSelect">Select Vendor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a vendor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mike">Mike Williams (Home Goods Plus)</SelectItem>
                    <SelectItem value="robert">Robert Chen (Sports World)</SelectItem>
                    <SelectItem value="lisa">Lisa Thompson (Kitchen Wares Co.)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vendorRate">Commission Rate</Label>
                  <div className="flex">
                    <Input id="vendorRate" placeholder="10" className="rounded-r-none" />
                    <div className="flex items-center px-3 border border-l-0 rounded-r-md bg-muted">
                      <PercentIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vendorMinCommission">Minimum Commission</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="vendorMinCommission" placeholder="1.00" className="rounded-l-none" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="overrideReason">Override Reason</Label>
                <Select>
                  <SelectTrigger id="overrideReason">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium Partnership</SelectItem>
                    <SelectItem value="promotional">Promotional Period</SelectItem>
                    <SelectItem value="performance">Performance Based</SelectItem>
                    <SelectItem value="risk">Risk Adjustment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" placeholder="Additional notes about this commission override" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
                <Input id="expiryDate" type="date" />
                <p className="text-sm text-muted-foreground">
                  If set, this custom rate will expire on this date and revert to the default rate
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="vendorActive" defaultChecked />
                <Label htmlFor="vendorActive">Active</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Add Vendor Rule</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="tiers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Commission Tier Structure</CardTitle>
              <CardDescription>Set up volume-based commission tiers to incentivize sales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="enableTiers" />
                <div>
                  <Label htmlFor="enableTiers">Enable Tiered Commissions</Label>
                  <p className="text-sm text-muted-foreground">
                    Apply commission rates based on monthly sales volume
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tier Name</TableHead>
                      <TableHead>Monthly Sales Volume</TableHead>
                      <TableHead>Commission Rate</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Bronze",
                        volume: "$0 - $1,000",
                        rate: "12%"
                      },
                      {
                        name: "Silver",
                        volume: "$1,001 - $5,000",
                        rate: "10%"
                      },
                      {
                        name: "Gold",
                        volume: "$5,001 - $10,000",
                        rate: "8%"
                      },
                      {
                        name: "Platinum",
                        volume: "$10,001+",
                        rate: "6%"
                      }
                    ].map((tier, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{tier.name}</TableCell>
                        <TableCell>{tier.volume}</TableCell>
                        <TableCell>{tier.rate}</TableCell>
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
                
                <div className="mt-4 flex justify-end">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Tier
                  </Button>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Tier Calculation Period</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="calculationPeriod">Calculation Period</Label>
                    <Select defaultValue="monthly">
                      <SelectTrigger id="calculationPeriod">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resetDay">Reset Day</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="resetDay">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st of month</SelectItem>
                        <SelectItem value="15">15th of month</SelectItem>
                        <SelectItem value="last">Last day of month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Commission Tier Benefits</CardTitle>
              <CardDescription>Additional benefits for vendors in higher tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="bronze">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Bronze</Badge>
                      <span>Standard Benefits</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Standard commission rate (12%)</li>
                      <li>Basic seller dashboard</li>
                      <li>Standard support response time</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="silver">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Silver</Badge>
                      <span>Enhanced Benefits</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Reduced commission rate (10%)</li>
                      <li>Priority support response</li>
                      <li>Featured products (1 per month)</li>
                      <li>Access to promotional banners</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="gold">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Gold</Badge>
                      <span>Premium Benefits</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Lower commission rate (8%)</li>
                      <li>Dedicated account manager</li>
                      <li>Featured products (3 per month)</li>
                      <li>Homepage promotion opportunities</li>
                      <li>Early access to new features</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="platinum">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Platinum</Badge>
                      <span>Elite Benefits</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Lowest commission rate (6%)</li>
                      <li>VIP support with dedicated account manager</li>
                      <li>Featured products (5 per month)</li>
                      <li>Premium homepage placement</li>
                      <li>Custom store design assistance</li>
                      <li>Exclusive marketing opportunities</li>
                      <li>Early payout options</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 