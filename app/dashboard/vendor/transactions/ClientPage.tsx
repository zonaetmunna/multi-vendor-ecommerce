"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, CalendarIcon, DollarSign, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Transaction {
  id: string
  date: string
  type: "Sale" | "Payout" | "Refund" | "Fee"
  description: string
  amount: string
  status: "Completed" | "Pending" | "Failed"
  reference?: string
}

interface TransactionTableProps {
  transactions: Transaction[]
}

function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Reference</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.type === "Sale"
                      ? "outline"
                      : transaction.type === "Payout"
                        ? "secondary"
                        : transaction.type === "Refund"
                          ? "destructive"
                          : "default"
                  }
                >
                  {transaction.type}
                </Badge>
              </TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.reference || "-"}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "Completed"
                      ? "default"
                      : transaction.status === "Pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell
                className={cn(
                  "text-right font-medium",
                  transaction.type === "Sale"
                    ? "text-green-600"
                    : transaction.type === "Payout" || transaction.type === "Refund" || transaction.type === "Fee"
                      ? "text-red-600"
                      : "",
                )}
              >
                {transaction.type === "Sale" ? "+" : "-"}
                {transaction.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function DatePickerWithRange() {
  const [date, setDate] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className="w-full md:w-[300px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={new Date()}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

// Mock data
const mockTransactions: Transaction[] = [
  {
    id: "TRX-8201",
    date: "May 13, 2025",
    type: "Sale",
    description: "Order #ORD-8201",
    amount: "$149.97",
    status: "Completed",
    reference: "ORD-8201",
  },
  {
    id: "TRX-8195",
    date: "May 12, 2025",
    type: "Sale",
    description: "Order #ORD-8195",
    amount: "$89.98",
    status: "Completed",
    reference: "ORD-8195",
  },
  {
    id: "TRX-8190",
    date: "May 12, 2025",
    type: "Fee",
    description: "Platform commission for Order #ORD-8195",
    amount: "$8.99",
    status: "Completed",
    reference: "ORD-8195",
  },
  {
    id: "TRX-8187",
    date: "May 11, 2025",
    type: "Sale",
    description: "Order #ORD-8187",
    amount: "$249.99",
    status: "Completed",
    reference: "ORD-8187",
  },
  {
    id: "TRX-8180",
    date: "May 10, 2025",
    type: "Payout",
    description: "Weekly payout to bank account ending in 4567",
    amount: "$1,250.00",
    status: "Completed",
    reference: "PYT-4532",
  },
  {
    id: "TRX-8156",
    date: "May 8, 2025",
    type: "Sale",
    description: "Order #ORD-8156",
    amount: "$179.97",
    status: "Completed",
    reference: "ORD-8156",
  },
  {
    id: "TRX-8142",
    date: "May 6, 2025",
    type: "Refund",
    description: "Refund for Order #ORD-8142",
    amount: "$89.99",
    status: "Completed",
    reference: "ORD-8142",
  },
  {
    id: "TRX-8135",
    date: "May 5, 2025",
    type: "Payout",
    description: "Weekly payout to bank account ending in 4567",
    amount: "$975.50",
    status: "Pending",
    reference: "PYT-4531",
  },
]

export default function TransactionsClientPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground">View your complete transaction history</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        <Card className="w-full md:w-1/3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Available Balance</CardTitle>
            <CardDescription>Current funds available for withdrawal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$4,285.90</div>
            <Button className="mt-4 w-full">
              <DollarSign className="h-4 w-4 mr-2" />
              Request Payout
            </Button>
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pending Balance</CardTitle>
            <CardDescription>Funds that will be available soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$1,249.50</div>
            <div className="text-sm text-muted-foreground mt-2">Funds are held for 7 days after order completion</div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Lifetime Earnings</CardTitle>
            <CardDescription>Total earnings since you joined</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$28,492.75</div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
              <ArrowUpIcon className="h-4 w-4" />
              <span>12.5% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View all your transactions, payouts, and fees</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="grid grid-cols-2 md:flex gap-2">
              <DatePickerWithRange />

              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="sale">Sales</SelectItem>
                  <SelectItem value="payout">Payouts</SelectItem>
                  <SelectItem value="refund">Refunds</SelectItem>
                  <SelectItem value="fee">Platform Fees</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full md:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="payouts">Payouts</TabsTrigger>
              <TabsTrigger value="refunds">Refunds</TabsTrigger>
              <TabsTrigger value="fees">Fees</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <TransactionTable transactions={mockTransactions} />
            </TabsContent>

            <TabsContent value="sales">
              <TransactionTable transactions={mockTransactions.filter((t) => t.type === "Sale")} />
            </TabsContent>

            <TabsContent value="payouts">
              <TransactionTable transactions={mockTransactions.filter((t) => t.type === "Payout")} />
            </TabsContent>

            <TabsContent value="refunds">
              <TransactionTable transactions={mockTransactions.filter((t) => t.type === "Refund")} />
            </TabsContent>

            <TabsContent value="fees">
              <TransactionTable transactions={mockTransactions.filter((t) => t.type === "Fee")} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
