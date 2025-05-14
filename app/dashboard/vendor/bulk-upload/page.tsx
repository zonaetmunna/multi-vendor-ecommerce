import type { Metadata } from "next"
import { FileUp, Download, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Bulk Upload | Vendor Dashboard",
  description: "Upload multiple products at once",
}

export default function BulkUploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bulk Upload</h1>
        <p className="text-muted-foreground">Upload multiple products at once using CSV or Excel files.</p>
      </div>

      <Separator />

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload Products</TabsTrigger>
          <TabsTrigger value="history">Upload History</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-6 space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              Make sure your file follows our template format. Download a template from the Templates tab if needed.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Upload Product File</CardTitle>
              <CardDescription>Upload a CSV or Excel file containing your product data.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-10 text-center">
                <FileUp className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Drag and drop your file here</h3>
                <p className="text-muted-foreground mb-4">Supports CSV and Excel (.xlsx) files up to 10MB</p>
                <Button>Select File</Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">Maximum 1000 products per upload</p>
              <Button disabled>Upload Products</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Settings</CardTitle>
              <CardDescription>Configure how your bulk upload should be processed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      <input type="checkbox" className="mr-2" />
                      Update existing products if SKU matches
                    </label>
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      <input type="checkbox" className="mr-2" />
                      Skip rows with errors and continue upload
                    </label>
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      <input type="checkbox" className="mr-2" />
                      Set all products as draft (unpublished)
                    </label>
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      <input type="checkbox" className="mr-2" />
                      Send email notification when upload completes
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload History</CardTitle>
              <CardDescription>View your recent bulk upload activities.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>File Name</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>May 12, 2025</TableCell>
                    <TableCell>summer_collection.csv</TableCell>
                    <TableCell>42 products</TableCell>
                    <TableCell>
                      <Badge variant="success" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Report
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>May 5, 2025</TableCell>
                    <TableCell>spring_inventory.xlsx</TableCell>
                    <TableCell>78 products</TableCell>
                    <TableCell>
                      <Badge variant="success" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Report
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Apr 28, 2025</TableCell>
                    <TableCell>new_arrivals.csv</TableCell>
                    <TableCell>23 products</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Failed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Errors
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Download Templates</CardTitle>
              <CardDescription>Use these templates to format your product data correctly.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <Download className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Standard Product Template</h3>
                  <p className="text-muted-foreground mb-4">
                    Basic template for most product types. Includes fields for title, description, price, inventory,
                    etc.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Download CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Excel
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <Download className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Product with Variants Template</h3>
                  <p className="text-muted-foreground mb-4">
                    Template for products with multiple variants (size, color, etc.). Includes parent-child relationship
                    structure.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Download CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Excel
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <Download className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Inventory Update Template</h3>
                  <p className="text-muted-foreground mb-4">
                    Simplified template for updating inventory levels and prices of existing products.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Download CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Excel
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <Download className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Digital Products Template</h3>
                  <p className="text-muted-foreground mb-4">
                    Template specifically for digital products, including fields for file uploads and download limits.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Download CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Excel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Alert className="w-full">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Template Guide</AlertTitle>
                <AlertDescription>
                  Need help understanding the templates? Check out our{" "}
                  <a href="#" className="underline font-medium">
                    Bulk Upload Guide
                  </a>{" "}
                  for detailed instructions.
                </AlertDescription>
              </Alert>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
