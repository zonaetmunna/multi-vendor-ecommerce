"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClassName?: string
  as?: React.ElementType
}

export const BackgroundGradient = ({
  className,
  containerClassName,
  children,
  as: Component = "div",
  ...props
}: BackgroundGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <Component
      ref={containerRef}
      className={cn("group relative bg-transparent", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={cn("absolute inset-0 rounded-xl transition duration-300 group-hover:opacity-100", className)}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120, 85, 220, 0.15), transparent)`,
          opacity: isMounted ? opacity : 0,
        }}
      />
      <div className="relative">{children}</div>
    </Component>
  )
}
