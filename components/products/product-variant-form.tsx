"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, X, Save, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ProductVariantFormProps {
  productId: number
  existingVariants?: {
    id: number
    name: string
    options: string[]
  }[]
  onSave?: () => void
}

export function ProductVariantForm({ productId, existingVariants = [], onSave }: ProductVariantFormProps) {
  const { toast } = useToast()
  const [variants, setVariants] = useState(existingVariants)
  const [newVariantName, setNewVariantName] = useState("")
  const [newOptionValue, setNewOptionValue] = useState("")
  const [editingVariantIndex, setEditingVariantIndex] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddVariant = () => {
    if (!newVariantName.trim()) return

    setVariants([...variants, { id: Date.now(), name: newVariantName, options: [] }])
    setNewVariantName("")
    setEditingVariantIndex(variants.length)
  }

  const handleRemoveVariant = (index: number) => {
    const updatedVariants = [...variants]
    updatedVariants.splice(index, 1)
    setVariants(updatedVariants)

    if (editingVariantIndex === index) {
      setEditingVariantIndex(null)
    } else if (editingVariantIndex !== null && editingVariantIndex > index) {
      setEditingVariantIndex(editingVariantIndex - 1)
    }
  }

  const handleAddOption = (variantIndex: number) => {
    if (!newOptionValue.trim()) return

    const updatedVariants = [...variants]
    updatedVariants[variantIndex].options.push(newOptionValue)
    setVariants(updatedVariants)
    setNewOptionValue("")
  }

  const handleRemoveOption = (variantIndex: number, optionIndex: number) => {
    const updatedVariants = [...variants]
    updatedVariants[variantIndex].options.splice(optionIndex, 1)
    setVariants(updatedVariants)
  }

  const handleSaveVariants = async () => {
    setIsSubmitting(true)

    try {
      // In a real application, you would make API calls to save each variant
      // For this demo, we'll just simulate a successful save

      // Example API call:
      // for (const variant of variants) {
      //   if (variant.id < 0) {
      //     // New variant
      //     await fetch('/api/products/variants', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ productId, name: variant.name, options: variant.options })
      //     });
      //   } else {
      //     // Existing variant
      //     await fetch('/api/products/variants', {
      //       method: 'PUT',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ id: variant.id, name: variant.name, options: variant.options })
      //     });
      //   }
      // }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Variants saved",
        description: `Successfully saved ${variants.length} product variants.`,
      })

      if (onSave) onSave()
    } catch (error) {
      toast({
        title: "Error saving variants",
        description: "There was a problem saving your product variants.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Product Variants</h2>
        <Button onClick={handleSaveVariants} disabled={isSubmitting}>
          <Save className="h-4 w-4 mr-2" />
          Save All Variants
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {variants.map((variant, variantIndex) => (
          <Card key={variant.id}>
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{variant.name}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => handleRemoveVariant(variantIndex)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove variant</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((option, optionIndex) => (
                    <Badge key={optionIndex} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                      {option}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 ml-1 p-0"
                        onClick={() => handleRemoveOption(variantIndex, optionIndex)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove option</span>
                      </Button>
                    </Badge>
                  ))}
                </div>

                {editingVariantIndex === variantIndex && (
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Add option value"
                      value={newOptionValue}
                      onChange={(e) => setNewOptionValue(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="sm" onClick={() => handleAddOption(variantIndex)}>
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              {editingVariantIndex !== variantIndex ? (
                <Button variant="outline" className="w-full" onClick={() => setEditingVariantIndex(variantIndex)}>
                  Edit Options
                </Button>
              ) : (
                <Button variant="outline" className="w-full" onClick={() => setEditingVariantIndex(null)}>
                  Done
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Add New Variant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="variant-name">Variant Name</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="variant-name"
                    placeholder="e.g. Size, Color, Material"
                    value={newVariantName}
                    onChange={(e) => setNewVariantName(e.target.value)}
                  />
                  <Button onClick={handleAddVariant}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Add variant types like Size, Color, Material, etc. Then add options for each variant.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {variants.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-medium mb-2">Variant Combinations</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Based on your variants, the following combinations will be created:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {variants.length > 0 &&
              generateCombinations(variants).map((combination, index) => (
                <div key={index} className="text-sm border rounded-md p-2 bg-background">
                  {Object.entries(combination).map(([name, value]) => (
                    <span key={name}>
                      <span className="font-medium">{name}:</span> {value}
                      <br />
                    </span>
                  ))}
                </div>
              ))}
          </div>

          {variants.length > 1 && (
            <p className="text-sm text-muted-foreground mt-4">
              Total combinations: {calculateTotalCombinations(variants)}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// Helper function to generate all possible combinations of variants
function generateCombinations(variants: { name: string; options: string[] }[], limit = 9) {
  if (variants.length === 0) return []

  const combinations: Record<string, string>[] = []

  function generate(index: number, current: Record<string, string>) {
    if (index === variants.length) {
      combinations.push({ ...current })
      return
    }

    const variant = variants[index]
    for (const option of variant.options) {
      current[variant.name] = option
      generate(index + 1, current)

      if (combinations.length >= limit) return
    }
  }

  generate(0, {})

  return combinations.slice(0, limit)
}

// Helper function to calculate total number of combinations
function calculateTotalCombinations(variants: { name: string; options: string[] }[]) {
  return variants.reduce((total, variant) => total * Math.max(1, variant.options.length), 1)
}
