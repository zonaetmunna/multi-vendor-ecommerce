"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Paperclip, Send, CheckCircle, XCircle, ImageIcon, File, Smile } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ChatInterfaceProps {
  recipientName: string
  recipientAvatar: string
  recipientStatus: "online" | "offline" | "away"
  orderId?: string | null
  isResolved?: boolean
  className?: string
}

type MessageType = {
  id: string
  content: string
  timestamp: Date
  sender: "user" | "recipient"
  attachments?: {
    type: "image" | "file"
    url: string
    name: string
    size?: number
  }[]
}

export function ChatInterface({
  recipientName,
  recipientAvatar,
  recipientStatus,
  orderId,
  isResolved = false,
  className,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      sender: "recipient",
    },
    {
      id: "2",
      content: "I have a question about my recent order.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5), // 1.5 hours ago
      sender: "user",
    },
    {
      id: "3",
      content: "Of course, I'd be happy to help. Could you please provide your order number?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.4), // 1.4 hours ago
      sender: "recipient",
    },
    {
      id: "4",
      content: "It's ORD-7890. I haven't received a shipping confirmation yet.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.3), // 1.3 hours ago
      sender: "user",
    },
    {
      id: "5",
      content: "Thank you for providing that information. Let me check the status of your order. One moment please...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.2), // 1.2 hours ago
      sender: "recipient",
    },
    {
      id: "6",
      content:
        "I've checked our system and your order has been processed. The shipping department is preparing it now, and you should receive a shipping confirmation email within the next 24 hours. Is there anything else I can help you with?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.1), // 1.1 hours ago
      sender: "recipient",
    },
    {
      id: "7",
      content: "That's great news! Thank you for checking. I have one more question about the product.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1 hour ago
      sender: "user",
    },
    {
      id: "8",
      content:
        "I ordered the wireless headphones. Do they come with a charging case or do I need to purchase that separately?",
      timestamp: new Date(Date.now() - 1000 * 60 * 59), // 59 minutes ago
      sender: "user",
      attachments: [
        {
          type: "image",
          url: "/placeholder.svg?height=200&width=300",
          name: "headphones.jpg",
        },
      ],
    },
    {
      id: "9",
      content:
        "The wireless headphones come with a charging case included in the box. You'll also receive a USB-C charging cable, user manual, and three different sizes of ear tips for the perfect fit. Is there anything else you'd like to know about the product?",
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
      sender: "recipient",
      attachments: [
        {
          type: "file",
          url: "#",
          name: "product_manual.pdf",
          size: 2.4,
        },
      ],
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const newMsg: MessageType = {
      id: Date.now().toString(),
      content: newMessage,
      timestamp: new Date(),
      sender: "user",
    }

    setMessages([...messages, newMsg])
    setNewMessage("")

    // Simulate recipient typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const response: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message. I'll get back to you shortly.",
        timestamp: new Date(),
        sender: "recipient",
      }
      setMessages((prev) => [...prev, response])
    }, 3000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // In a real app, you would upload the file to a server here
    // For this demo, we'll just simulate adding it to the message
    const attachments = Array.from(files).map((file) => ({
      type: file.type.startsWith("image/") ? "image" : "file",
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size / (1024 * 1024), // Convert to MB
    })) as MessageType["attachments"]

    const newMsg: MessageType = {
      id: Date.now().toString(),
      content: "I'm sending you this attachment.",
      timestamp: new Date(),
      sender: "user",
      attachments,
    }

    setMessages([...messages, newMsg])

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatFileSize = (size?: number) => {
    if (!size) return ""
    return size < 1 ? `${(size * 1024).toFixed(0)} KB` : `${size.toFixed(1)} MB`
  }

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar>
              <AvatarImage src={recipientAvatar || "/placeholder.svg"} />
              <AvatarFallback>{recipientName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div
              className={cn("absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background", {
                "bg-green-500": recipientStatus === "online",
                "bg-yellow-500": recipientStatus === "away",
                "bg-gray-400": recipientStatus === "offline",
              })}
            />
          </div>
          <div>
            <h3 className="font-medium">{recipientName}</h3>
            <div className="flex items-center text-xs text-muted-foreground">
              <span className="capitalize">{recipientStatus}</span>
              {orderId && (
                <>
                  <span className="mx-1">•</span>
                  <span>Order: {orderId}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isResolved ? (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              Resolved
            </Badge>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Resolved
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <XCircle className="h-4 w-4 mr-2" />
                  Close Conversation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", {
              "justify-end": message.sender === "user",
              "justify-start": message.sender === "recipient",
            })}
          >
            <div
              className={cn("max-w-[80%] rounded-lg p-3", {
                "bg-primary text-primary-foreground": message.sender === "user",
                "bg-muted": message.sender === "recipient",
              })}
            >
              <div className="space-y-2">
                <p>{message.content}</p>
                {message.attachments && message.attachments.length > 0 && (
                  <div className="space-y-2 mt-2">
                    {message.attachments.map((attachment, index) => (
                      <div key={index}>
                        {attachment.type === "image" ? (
                          <div className="rounded-md overflow-hidden">
                            <img
                              src={attachment.url || "/placeholder.svg"}
                              alt={attachment.name}
                              className="max-w-full h-auto max-h-[200px] object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={cn(
                              "flex items-center gap-2 p-2 rounded-md",
                              message.sender === "user" ? "bg-primary-foreground/10" : "bg-background",
                            )}
                          >
                            <File className="h-5 w-5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{attachment.name}</p>
                              {attachment.size && (
                                <p className="text-xs text-muted-foreground">{formatFileSize(attachment.size)}</p>
                              )}
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <a href={attachment.url} download={attachment.name}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={cn("text-xs mt-1", {
                  "text-primary-foreground/70": message.sender === "user",
                  "text-muted-foreground": message.sender === "recipient",
                })}
              >
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce"></div>
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="p-3 border-t">
        <div className="flex items-center w-full gap-2">
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="h-5 w-5" />
              <span className="sr-only">Attach file</span>
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileUpload}
              multiple
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
            />
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <ImageIcon className="h-5 w-5" />
              <span className="sr-only">Send image</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Smile className="h-5 w-5" />
              <span className="sr-only">Emoji</span>
            </Button>
          </div>
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button
            size="icon"
            className="h-9 w-9 rounded-full"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
