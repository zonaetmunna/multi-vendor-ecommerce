import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Globe, MapPin, Phone, Save, Store, Upload } from "lucide-react"

export default function VendorProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Store Profile</h2>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
      
      <div className="relative h-64 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <Button variant="secondary" className="gap-2">
            <Camera className="h-4 w-4" />
            Change Banner
          </Button>
        </div>
      </div>
      
      <div className="flex items-start gap-6">
        <div className="relative -mt-16 h-32 w-32 rounded-xl overflow-hidden border-4 border-background bg-muted">
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <Button size="sm" variant="secondary" className="gap-1">
              <Upload className="h-3 w-3" />
              Logo
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-2xl font-bold">Tech Gadgets Store</h3>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>New York, USA</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span>techgadgets.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Store className="h-3 w-3" />
              <span>Since 2020</span>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General Information</TabsTrigger>
          <TabsTrigger value="business">Business Details</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>Update your store's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" defaultValue="Tech Gadgets Store" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeEmail">Store Email</Label>
                  <Input id="storeEmail" defaultValue="contact@techgadgets.com" type="email" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="storePhone">Store Phone</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="storePhone" defaultValue="+1 (555) 123-4567" className="rounded-l-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeWebsite">Store Website</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l-md bg-muted">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="storeWebsite" defaultValue="https://techgadgets.com" className="rounded-l-none" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="storeDescription">Store Description</Label>
                <Textarea 
                  id="storeDescription" 
                  rows={5} 
                  defaultValue="Tech Gadgets Store is your one-stop shop for all the latest tech gadgets and accessories. We offer a wide range of products including smartphones, laptops, smart home devices, and more at competitive prices."
                />
                <p className="text-sm text-muted-foreground">This description will appear on your store's public page.</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="storeShortDescription">Short Description</Label>
                <Input 
                  id="storeShortDescription" 
                  defaultValue="Latest tech gadgets at competitive prices" 
                />
                <p className="text-sm text-muted-foreground">A brief tagline for your store (max 100 characters).</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Set your store's location information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Tech Street, Suite 456" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" defaultValue="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip/Postal Code</Label>
                  <Input id="zipCode" defaultValue="10001" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Add your business details for invoicing and legal purposes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="legalName">Legal Business Name</Label>
                  <Input id="legalName" defaultValue="Tech Gadgets LLC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID / VAT Number</Label>
                  <Input id="taxId" defaultValue="123-45-6789" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessAddress">Business Address</Label>
                <Input id="businessAddress" defaultValue="123 Tech Street, Suite 456, New York, NY 10001" />
                <div className="flex items-center space-x-2 pt-2">
                  <Switch id="sameAsStore" defaultChecked />
                  <Label htmlFor="sameAsStore" className="text-sm">Same as store address</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Business Type</Label>
                <Select defaultValue="llc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sole">Sole Proprietorship</SelectItem>
                    <SelectItem value="llc">LLC</SelectItem>
                    <SelectItem value="corp">Corporation</SelectItem>
                    <SelectItem value="partner">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="yearEstablished">Year Established</Label>
                  <Input id="yearEstablished" defaultValue="2020" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Select defaultValue="1-10">
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201+">201+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Profiles</CardTitle>
              <CardDescription>Connect your store with your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">
                    <span className="text-blue-600 font-bold">f</span>
                  </div>
                  <Input id="facebook" defaultValue="https://facebook.com/techgadgets" className="rounded-l-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">
                    <span className="text-pink-600 font-bold">Ig</span>
                  </div>
                  <Input id="instagram" defaultValue="https://instagram.com/techgadgets" className="rounded-l-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">
                    <span className="text-blue-400 font-bold">X</span>
                  </div>
                  <Input id="twitter" defaultValue="https://twitter.com/techgadgets" className="rounded-l-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">
                    <span className="text-red-600 font-bold">YT</span>
                  </div>
                  <Input id="youtube" defaultValue="https://youtube.com/techgadgets" className="rounded-l-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tiktok">TikTok</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">
                    <span className="font-bold">TT</span>
                  </div>
                  <Input id="tiktok" defaultValue="https://tiktok.com/@techgadgets" className="rounded-l-none" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your store for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input id="metaTitle" defaultValue="Tech Gadgets Store | Latest Tech Products & Accessories" />
                <p className="text-sm text-muted-foreground">Recommended length: 50-60 characters</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea 
                  id="metaDescription" 
                  rows={3} 
                  defaultValue="Shop the latest tech gadgets, smartphones, laptops, and accessories at competitive prices. Fast shipping and excellent customer service. Visit Tech Gadgets Store today!"
                />
                <p className="text-sm text-muted-foreground">Recommended length: 150-160 characters</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input id="keywords" defaultValue="tech gadgets, smartphones, laptops, smart home, accessories" />
                <p className="text-sm text-muted-foreground">Separate keywords with commas</p>
              </div>
              
              <div className="space-y-2">
                <Label>Store URL Structure</Label>
                <div className="p-3 bg-muted rounded-md">
                  <code className="text-sm">https://multivendor.com/store/<span className="text-blue-600">tech-gadgets</span></code>
                </div>
                <p className="text-sm text-muted-foreground">Your store's unique URL slug</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="googleIndex" defaultChecked />
                <Label htmlFor="googleIndex">Allow search engines to index your store</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 