"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MessageSquare } from "lucide-react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { cn } from "@/lib/utils"

// Mock chat data
const conversations = [
  {
    id: "1",
    vendor: {
      id: "v1",
      name: "AudioTech Support",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online" as const,
    },
    lastMessage: {
      content: "We'll be happy to help with your headphones issue.",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: "2",
    vendor: {
      id: "v2",
      name: "EcoWear Support",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline" as const,
    },
    lastMessage: {
      content: "Your order has been shipped! Here's your tracking number: ECW12345",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      isRead: false,
    },
    unreadCount: 1,
  },
  {
    id: "3",
    vendor: {
      id: "v3",
      name: "TechHome",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away" as const,
    },
    lastMessage: {
      content: "Thank you for your inquiry about our smart home products.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: "4",
    vendor: {
      id: "v4",
      name: "FitTech Support",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online" as const,
    },
    lastMessage: {
      content: "We've processed your return request. Please check your email for the return label.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: "5",
    vendor: {
      id: "v5",
      name: "LeatherCraft",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline" as const,
    },
    lastMessage: {
      content: "Your custom wallet design has been approved and is now in production.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      isRead: true,
    },
    unreadCount: 0,
  },
]

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeConversation, setActiveConversation] = useState(conversations[0])

  const filteredConversations = conversations.filter((conversation) =>
    conversation.vendor.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatTimestamp = (date: Date) => {
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } else if (diffInDays === 1) {
      return "Yesterday"
    } else if (diffInDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" })
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Chat with vendors about your orders and inquiries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[700px]">
        <Card className="md:col-span-1 flex flex-col">
          <CardHeader className="px-4 py-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="divide-y">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    className={cn("w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors", {
                      "bg-muted": activeConversation.id === conversation.id,
                    })}
                    onClick={() => setActiveConversation(conversation)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.vendor.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{conversation.vendor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div
                          className={cn("absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background", {
                            "bg-green-500": conversation.vendor.status === "online",
                            "bg-yellow-500": conversation.vendor.status === "away",
                            "bg-gray-400": conversation.vendor.status === "offline",
                          })}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-medium truncate">{conversation.vendor.name}</h3>
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        <p
                          className={cn("text-sm truncate", {
                            "font-medium": conversation.unreadCount > 0,
                            "text-muted-foreground": conversation.unreadCount === 0,
                          })}
                        >
                          {conversation.lastMessage.content}
                        </p>
                      </div>
                      {conversation.unreadCount > 0 && (
                        <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-40 p-4 text-center">
                  <MessageSquare className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">No conversations found</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 flex flex-col">
          {activeConversation ? (
            <ChatInterface
              recipientName={activeConversation.vendor.name}
              recipientAvatar={activeConversation.vendor.avatar}
              recipientStatus={activeConversation.vendor.status}
              className="h-full border-0"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No conversation selected</h3>
              <p className="text-muted-foreground">Select a conversation from the list to start chatting</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
