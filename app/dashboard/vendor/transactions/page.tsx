import type { Metadata } from "next"
import TransactionsClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Transactions | Vendor Dashboard",
  description: "View your transaction history",
}

export default function TransactionsPage() {
  return <TransactionsClientPage />
}
