import { NextResponse } from "next/server"

// This would be replaced with actual database queries in a real application
const productVariants = [
  {
    id: 1,
    productId: 1,
    name: "Size",
    options: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 2,
    productId: 1,
    name: "Color",
    options: ["Black", "White", "Red", "Blue"],
  },
  {
    id: 3,
    productId: 2,
    name: "Size",
    options: ["5", "6", "7", "8", "9", "10", "11", "12"],
  },
  {
    id: 4,
    productId: 2,
    name: "Width",
    options: ["Regular", "Wide"],
  },
  {
    id: 5,
    productId: 3,
    name: "Storage",
    options: ["64GB", "128GB", "256GB", "512GB"],
  },
  {
    id: 6,
    productId: 3,
    name: "Color",
    options: ["Silver", "Space Gray", "Gold", "Pacific Blue"],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get("productId")

  if (productId) {
    const variants = productVariants.filter((variant) => variant.productId === Number(productId))
    return NextResponse.json({ variants })
  }

  return NextResponse.json({ variants: productVariants })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { productId, name, options } = body

    if (!productId || !name || !options || !Array.isArray(options)) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    // In a real application, you would save this to a database
    const newVariant = {
      id: productVariants.length + 1,
      productId: Number(productId),
      name,
      options,
    }

    // Simulate adding to database
    productVariants.push(newVariant)

    return NextResponse.json({ variant: newVariant, success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create variant" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, name, options } = body

    if (!id || !name || !options || !Array.isArray(options)) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    // Find and update the variant
    const variantIndex = productVariants.findIndex((variant) => variant.id === Number(id))

    if (variantIndex === -1) {
      return NextResponse.json({ error: "Variant not found" }, { status: 404 })
    }

    // Update the variant
    productVariants[variantIndex] = {
      ...productVariants[variantIndex],
      name,
      options,
    }

    return NextResponse.json({ variant: productVariants[variantIndex], success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update variant" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "Variant ID is required" }, { status: 400 })
  }

  // Find the variant
  const variantIndex = productVariants.findIndex((variant) => variant.id === Number(id))

  if (variantIndex === -1) {
    return NextResponse.json({ error: "Variant not found" }, { status: 404 })
  }

  // Remove the variant
  productVariants.splice(variantIndex, 1)

  return NextResponse.json({ success: true })
}
