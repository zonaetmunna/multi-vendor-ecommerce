"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Upload, FileText, CheckCircle, AlertCircle, X, HelpCircle, FileUp } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function BulkUploadForm() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("upload")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadResults, setUploadResults] = useState<{
    success: number
    errors: number
    warnings: number
    details: Array<{
      row: number
      status: "success" | "error" | "warning"
      message: string
      data?: Record<string, any>
    }>
  } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)

    // Reset upload state when a new file is selected
    setUploadProgress(0)
    setUploadResults(null)
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate file upload with progress
    const totalSteps = 10
    for (let step = 1; step <= totalSteps; step++) {
      await new Promise((resolve) => setTimeout(resolve, 300))
      setUploadProgress(Math.floor((step / totalSteps) * 100))
    }

    // Simulate processing and validation
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate upload results
    const mockResults = {
      success: 42,
      errors: 3,
      warnings: 5,
      details: [
        {
          row: 1,
          status: "success" as const,
          message: "Product successfully imported",
          data: { sku: "PROD-001", name: "Wireless Headphones", price: "$199.99" },
        },
        {
          row: 2,
          status: "success" as const,
          message: "Product successfully imported",
          data: { sku: "PROD-002", name: "Bluetooth Speaker", price: "$79.99" },
        },
        {
          row: 3,
          status: "warning" as const,
          message: "Product imported with warnings: Missing category",
          data: { sku: "PROD-003", name: "Wireless Earbuds", price: "$129.99" },
        },
        {
          row: 4,
          status: "error" as const,
          message: "Failed to import: Price is required",
          data: { sku: "PROD-004", name: "Portable DAC/Amp", price: "" },
        },
        {
          row: 5,
          status: "success" as const,
          message: "Product successfully imported",
          data: { sku: "PROD-005", name: "Noise Cancelling Headphones", price: "$249.99" },
        },
        {
          row: 6,
          status: "warning" as const,
          message: "Product imported with warnings: Image URL is invalid",
          data: { sku: "PROD-006", name: "Wireless Charging Pad", price: "$39.99" },
        },
        {
          row: 7,
          status: "error" as const,
          message: "Failed to import: SKU already exists",
          data: { sku: "PROD-001", name: "Smart Home Speaker", price: "$99.99" },
        },
        {
          row: 8,
          status: "success" as const,
          message: "Product successfully imported",
          data: { sku: "PROD-008", name: "Wireless Mouse", price: "$29.99" },
        },
        {
          row: 9,
          status: "success" as const,
          message: "Product successfully imported",
          data: { sku: "PROD-009", name: "Mechanical Keyboard", price: "$89.99" },
        },
        {
          row: 10,
          status: "error" as const,
          message: "Failed to import: Invalid category",
          data: { sku: "PROD-010", name: "USB-C Hub", price: "$49.99" },
        },
      ],
    }

    setUploadResults(mockResults)
    setIsUploading(false)

    toast({
      title: "Upload Complete",
      description: `Successfully imported ${mockResults.success} products with ${mockResults.errors} errors and ${mockResults.warnings} warnings.`,
    })

    // Switch to results tab
    setActiveTab("results")
  }

  const handleDownloadTemplate = () => {
    // In a real application, this would download a CSV template
    toast({
      title: "Template Downloaded",
      description: "Product import template has been downloaded.",
    })
  }

  const handleDownloadResults = () => {
    // In a real application, this would download the results as a CSV
    toast({
      title: "Results Downloaded",
      description: "Import results have been downloaded as CSV.",
    })
  }

  const resetUpload = () => {
    setSelectedFile(null)
    setUploadProgress(0)
    setUploadResults(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Product Upload</CardTitle>
        <CardDescription>Import multiple products at once using a CSV or Excel file</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload File</TabsTrigger>
            <TabsTrigger value="results" disabled={!uploadResults}>
              Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6 pt-4">
            <Alert>
              <HelpCircle className="h-4 w-4" />
              <AlertTitle>Important Information</AlertTitle>
              <AlertDescription>
                <p className="mb-2">
                  Please ensure your file follows the required format. Download our template for the correct structure.
                </p>
                <Button variant="outline" size="sm" onClick={handleDownloadTemplate}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload File</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="file-upload"
                    type="file"
                    ref={fileInputRef}
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileChange}
                    className="flex-1"
                  />
                  {selectedFile && (
                    <Button variant="ghost" size="icon" onClick={resetUpload}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Clear file</span>
                    </Button>
                  )}
                </div>
                {selectedFile && (
                  <p className="text-sm text-muted-foreground">
                    Selected file: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>

              {selectedFile && !isUploading && uploadProgress === 0 && (
                <div className="flex justify-end">
                  <Button onClick={handleUpload}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload and Process
                  </Button>
                </div>
              )}

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Uploading...</span>
                    <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">File Format Requirements</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Your CSV or Excel file should include the following columns:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>SKU (required) - Unique product identifier</li>
                  <li>Name (required) - Product name</li>
                  <li>Description - Product description</li>
                  <li>Price (required) - Product price</li>
                  <li>Category - Product category</li>
                  <li>Stock - Initial inventory quantity</li>
                  <li>Images - Comma-separated URLs or file paths</li>
                  <li>Variants - Format: Size:S|M|L,Color:Red|Blue|Green</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-6 pt-4">
            {uploadResults && (
              <>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Import Results</h3>
                    <p className="text-sm text-muted-foreground">
                      {uploadResults.success + uploadResults.errors + uploadResults.warnings} products processed
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleDownloadResults}>
                    <Download className="h-4 w-4 mr-2" />
                    Download Results
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Card className="flex-1 min-w-[120px]">
                    <CardHeader className="py-4">
                      <CardTitle className="text-center text-3xl text-green-500">{uploadResults.success}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 text-center">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Success
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="flex-1 min-w-[120px]">
                    <CardHeader className="py-4">
                      <CardTitle className="text-center text-3xl text-yellow-500">{uploadResults.warnings}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 text-center">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Warnings
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="flex-1 min-w-[120px]">
                    <CardHeader className="py-4">
                      <CardTitle className="text-center text-3xl text-red-500">{uploadResults.errors}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 text-center">
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        <X className="h-3 w-3 mr-1" />
                        Errors
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Row</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {uploadResults.details.map((detail) => (
                        <TableRow key={detail.row}>
                          <TableCell>{detail.row}</TableCell>
                          <TableCell>
                            {detail.status === "success" && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Success
                              </Badge>
                            )}
                            {detail.status === "warning" && (
                              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                Warning
                              </Badge>
                            )}
                            {detail.status === "error" && (
                              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                Error
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{detail.data?.sku || "-"}</TableCell>
                          <TableCell>{detail.data?.name || "-"}</TableCell>
                          <TableCell>{detail.data?.price || "-"}</TableCell>
                          <TableCell>{detail.message}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex justify-end">
                  <Button onClick={resetUpload}>
                    <FileUp className="h-4 w-4 mr-2" />
                    Upload Another File
                  </Button>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span>Supported formats: CSV, Excel (.xlsx, .xls)</span>
        </div>
      </CardFooter>
    </Card>
  )
}
