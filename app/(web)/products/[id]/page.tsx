import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { ProductDetails } from "@/components/products/product-details"
import { RelatedProducts } from "@/components/products/related-products"
import { ProductReviews } from "@/components/products/product-reviews"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the product data based on the ID
  const productId = Number.parseInt(params.id)

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Product Details", href: `/products/${productId}`, active: true },
          ]}
        />

        <ProductDetails productId={productId} />

        <Tabs defaultValue="description" className="mt-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none dark:prose-invert">
              <h3>Product Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <p>
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <h4>Features</h4>
              <ul>
                <li>High-quality materials</li>
                <li>Durable construction</li>
                <li>Elegant design</li>
                <li>Versatile functionality</li>
                <li>Easy to clean and maintain</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Dimensions</h4>
                    <p>10 x 5 x 2 inches</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Weight</h4>
                    <p>1.5 lbs</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Materials</h4>
                    <p>Aluminum, Plastic</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Warranty</h4>
                    <p>1 Year Limited</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Country of Origin</h4>
                    <p>United States</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Model Number</h4>
                    <p>ABC123XYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <ProductReviews productId={productId} />
          </TabsContent>
        </Tabs>

        <RelatedProducts />
      </div>
      <Footer />
    </div>
  )
}
