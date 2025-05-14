"use client"

import type React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface ChartProps {
  data: any[]
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  showLegend?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  layout?: "horizontal" | "vertical"
}

export const LineChartComponent: React.FC<ChartProps> = ({
  data,
  categories,
  colors,
  valueFormatter,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {showXAxis && <XAxis dataKey="name" />}
        {showYAxis && <YAxis tickFormatter={valueFormatter} />}
        <Tooltip formatter={valueFormatter ? (value) => [valueFormatter(value as number)] : undefined} />
        {showLegend && <Legend />}
        {showGridLines && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        {categories.map((category, index) => (
          <Line key={category} type="monotone" dataKey={category} stroke={colors[index % colors.length]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export const BarChartComponent: React.FC<ChartProps> = ({
  data,
  categories,
  colors,
  valueFormatter,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
  layout = "horizontal",
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout={layout}>
        <CartesianGrid strokeDasharray="3 3" />
        {showXAxis && <XAxis dataKey="name" />}
        {showYAxis && <YAxis tickFormatter={valueFormatter} />}
        <Tooltip formatter={valueFormatter ? (value) => [valueFormatter(value as number)] : undefined} />
        {showLegend && <Legend />}
        {showGridLines && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        {categories.map((category, index) => (
          <Bar key={category} dataKey={category} fill={colors[index % colors.length]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

export const BarChart = BarChartComponent
export const LineChart = LineChartComponent
