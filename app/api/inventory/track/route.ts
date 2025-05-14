import { NextResponse } from "next/server"

// This would be replaced with actual database queries in a real application
const inventoryItems = [
  {
    id: 1,
    productId: 1,
    sku: "HDPH-BLK-001",
    variantOptions: { Size: "Medium", Color: "Black" },
    quantity: 45,
    lowStockThreshold: 10,
    lastUpdated: "2023-07-15T10:30:00Z",
  },
  {
    id: 2,
    productId: 1,
    sku: "HDPH-WHT-001",
    variantOptions: { Size: "Medium", Color: "White" },
    quantity: 32,
    lowStockThreshold: 10,
    lastUpdated: "2023-07-15T10:30:00Z",
  },
  {
    id: 3,
    productId: 1,
    sku: "HDPH-RED-001",
    variantOptions: { Size: "Medium", Color: "Red" },
    quantity: 18,
    lowStockThreshold: 10,
    lastUpdated: "2023-07-15T10:30:00Z",
  },
  {
    id: 4,
    productId: 1,
    sku: "HDPH-BLU-001",
    variantOptions: { Size: "Medium", Color: "Blue" },
    quantity: 7,
    lowStockThreshold: 10,
    lastUpdated: "2023-07-15T10:30:00Z",
  },
  {
    id: 5,
    productId: 2,
    sku: "SHOE-BLK-008",
    variantOptions: { Size: "8", Width: "Regular" },
    quantity: 25,
    lowStockThreshold: 5,
    lastUpdated: "2023-07-14T14:45:00Z",
  },
  {
    id: 6,
    productId: 2,
    sku: "SHOE-BLK-009",
    variantOptions: { Size: "9", Width: "Regular" },
    quantity: 18,
    lowStockThreshold: 5,
    lastUpdated: "2023-07-14T14:45:00Z",
  },
  {
    id: 7,
    productId: 2,
    sku: "SHOE-BLK-010",
    variantOptions: { Size: "10", Width: "Regular" },
    quantity: 12,
    lowStockThreshold: 5,
    lastUpdated: "2023-07-14T14:45:00Z",
  },
  {
    id: 8,
    productId: 3,
    sku: "PHON-SLV-128",
    variantOptions: { Storage: "128GB", Color: "Silver" },
    quantity: 30,
    lowStockThreshold: 8,
    lastUpdated: "2023-07-13T09:15:00Z",
  },
  {
    id: 9,
    productId: 3,
    sku: "PHON-GRY-128",
    variantOptions: { Storage: "128GB", Color: "Space Gray" },
    quantity: 22,
    lowStockThreshold: 8,
    lastUpdated: "2023-07-13T09:15:00Z",
  },
  {
    id: 10,
    productId: 3,
    sku: "PHON-GLD-128",
    variantOptions: { Storage: "128GB", Color: "Gold" },
    quantity: 15,
    lowStockThreshold: 8,
    lastUpdated: "2023-07-13T09:15:00Z",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get("productId")
  const sku = searchParams.get("sku")
  const lowStock = searchParams.get("lowStock")

  let filteredItems = [...inventoryItems]

  if (productId) {
    filteredItems = filteredItems.filter((item) => item.productId === Number(productId))
  }

  if (sku) {
    filteredItems = filteredItems.filter((item) => item.sku.toLowerCase().includes(sku.toLowerCase()))
  }

  if (lowStock === "true") {
    filteredItems = filteredItems.filter((item) => item.quantity <= item.lowStockThreshold)
  }

  return NextResponse.json({ items: filteredItems })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { productId, sku, variantOptions, quantity, lowStockThreshold } = body

    if (!productId || !sku || !variantOptions || quantity === undefined) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    // Check if SKU already exists
    const existingItem = inventoryItems.find((item) => item.sku === sku)
    if (existingItem) {
      return NextResponse.json({ error: "SKU already exists" }, { status: 400 })
    }

    // In a real application, you would save this to a database
    const newItem = {
      id: inventoryItems.length + 1,
      productId: Number(productId),
      sku,
      variantOptions,
      quantity: Number(quantity),
      lowStockThreshold: Number(lowStockThreshold) || 10,
      lastUpdated: new Date().toISOString(),
    }

    // Simulate adding to database
    inventoryItems.push(newItem)

    return NextResponse.json({ item: newItem, success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create inventory item" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, quantity, lowStockThreshold } = body

    if (!id || quantity === undefined) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    // Find and update the inventory item
    const itemIndex = inventoryItems.findIndex((item) => item.id === Number(id))

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Inventory item not found" }, { status: 404 })
    }

    // Update the item
    inventoryItems[itemIndex] = {
      ...inventoryItems[itemIndex],
      quantity: Number(quantity),
      lowStockThreshold:
        lowStockThreshold !== undefined ? Number(lowStockThreshold) : inventoryItems[itemIndex].lowStockThreshold,
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json({ item: inventoryItems[itemIndex], success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update inventory item" }, { status: 500 })
  }
}
