"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MessageSquare, Filter } from "lucide-react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock chat data
const conversations = [
  {
    id: "1",
    customer: {
      id: "c1",
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online" as const,
    },
    lastMessage: {
      content: "I'm having an issue with my headphones. The noise cancellation doesn't seem to be working properly.",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      isRead: false,
    },
    unreadCount: 2,
    orderId: "ORD-7890",
    isResolved: false,
  },
  {
    id: "2",
    customer: {
      id: "c2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline" as const,
    },
    lastMessage: {
      content: "Thank you for the quick response! I'll check the tracking number.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      isRead: true,
    },
    unreadCount: 0,
    orderId: "ORD-7891",
    isResolved: false,
  },
  {
    id: "3",
    customer: {
      id: "c3",
      name: "Robert Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away" as const,
    },
    lastMessage: {
      content: "I'm interested in your smart home hub. Does it work with Apple HomeKit?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      isRead: true,
    },
    unreadCount: 0,
    orderId: null,
    isResolved: false,
  },
  {
    id: "4",
    customer: {
      id: "c4",
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online" as const,
    },
    lastMessage: {
      content: "I've sent the fitness tracker back using the return label you provided.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      isRead: true,
    },
    unreadCount: 0,
    orderId: "ORD-7893",
    isResolved: true,
  },
  {
    id: "5",
    customer: {
      id: "c5",
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline" as const,
    },
    lastMessage: {
      content: "The wallet looks amazing! Thank you for the custom engraving.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      isRead: true,
    },
    unreadCount: 0,
    orderId: "ORD-7894",
    isResolved: true,
  },
]

export default function VendorMessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredConversations = conversations.filter((conversation) => {
    const matchesSearch = conversation.customer.name.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") {
      if (statusFilter === "all") return matchesSearch
      if (statusFilter === "resolved") return matchesSearch && conversation.isResolved
      if (statusFilter === "unresolved") return matchesSearch && !conversation.isResolved
      return matchesSearch
    }

    if (activeTab === "unread") {
      return (
        matchesSearch &&
        conversation.unreadCount > 0 &&
        (statusFilter === "all" ||
          (statusFilter === "resolved" && conversation.isResolved) ||
          (statusFilter === "unresolved" && !conversation.isResolved))
      )
    }

    if (activeTab === "orders") {
      return (
        matchesSearch &&
        conversation.orderId !== null &&
        (statusFilter === "all" ||
          (statusFilter === "resolved" && conversation.isResolved) ||
          (statusFilter === "unresolved" && !conversation.isResolved))
      )
    }

    return matchesSearch
  })

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
        <h1 className="text-2xl font-bold">Customer Messages</h1>
        <p className="text-muted-foreground">Manage conversations with your customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[700px]">
        <Card className="md:col-span-1 flex flex-col">
          <CardHeader className="px-4 py-3 border-b space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">
                    Unread
                    <Badge variant="secondary" className="ml-1 bg-primary text-primary-foreground">
                      {conversations.reduce((acc, conv) => acc + conv.unreadCount, 0)}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="unresolved">Unresolved</SelectItem>
                </SelectContent>
              </Select>
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
                          <AvatarImage src={conversation.customer.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{conversation.customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div
                          className={cn("absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background", {
                            "bg-green-500": conversation.customer.status === "online",
                            "bg-yellow-500": conversation.customer.status === "away",
                            "bg-gray-400": conversation.customer.status === "offline",
                          })}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-medium truncate">{conversation.customer.name}</h3>
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        {conversation.orderId && (
                          <div className="text-xs text-muted-foreground mb-1">
                            Order: <span className="font-medium">{conversation.orderId}</span>
                          </div>
                        )}
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
              recipientName={activeConversation.customer.name}
              recipientAvatar={activeConversation.customer.avatar}
              recipientStatus={activeConversation.customer.status}
              orderId={activeConversation.orderId}
              isResolved={activeConversation.isResolved}
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
