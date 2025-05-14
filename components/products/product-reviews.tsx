"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsDown, ThumbsUp } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock review data
const reviews = [
  {
    id: 1,
    user: "John D.",
    rating: 5,
    date: "2023-10-15",
    title: "Excellent quality and sound",
    content:
      "I've been using these headphones for a month now and I'm extremely impressed with the sound quality and noise cancellation. Battery life is also excellent.",
    helpful: 24,
    unhelpful: 2,
  },
  {
    id: 2,
    user: "Sarah M.",
    rating: 4,
    date: "2023-09-28",
    title: "Great headphones, minor comfort issues",
    content:
      "The sound quality is amazing and the noise cancellation works well. My only complaint is that they get a bit uncomfortable after wearing them for several hours.",
    helpful: 18,
    unhelpful: 3,
  },
  {
    id: 3,
    user: "Michael P.",
    rating: 5,
    date: "2023-09-10",
    title: "Worth every penny",
    content:
      "These are by far the best headphones I've ever owned. The sound is crisp and clear, and the noise cancellation is top-notch. Highly recommend!",
    helpful: 32,
    unhelpful: 1,
  },
  {
    id: 4,
    user: "Emily L.",
    rating: 3,
    date: "2023-08-22",
    title: "Good but not great",
    content:
      "The sound quality is good, but I expected better noise cancellation at this price point. The battery life is excellent though.",
    helpful: 12,
    unhelpful: 8,
  },
  {
    id: 5,
    user: "David R.",
    rating: 5,
    date: "2023-08-05",
    title: "Exceptional product",
    content:
      "I use these headphones daily for work calls and listening to music. The sound quality is exceptional and the noise cancellation helps me focus.",
    helpful: 27,
    unhelpful: 0,
  },
]

// Calculate rating distribution
const ratingCounts = [0, 0, 0, 0, 0]
reviews.forEach((review) => {
  ratingCounts[review.rating - 1]++
})
const totalReviews = reviews.length
const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews

export function ProductReviews({ productId }: { productId: number }) {
  const [helpfulReviews, setHelpfulReviews] = useState<Record<number, boolean | null>>({})
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleHelpful = (reviewId: number, isHelpful: boolean) => {
    setHelpfulReviews((prev) => ({
      ...prev,
      [reviewId]: prev[reviewId] === isHelpful ? null : isHelpful,
    }))
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <div className="text-center">
            <div className="text-5xl font-bold">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                    )}
                  />
                ))}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Based on {totalReviews} reviews</div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm">{rating} stars</div>
                <Progress value={(ratingCounts[rating - 1] / totalReviews) * 100} className="h-2 flex-1 mx-2" />
                <div className="w-10 text-sm text-right">{ratingCounts[rating - 1]}</div>
              </div>
            ))}
          </div>

          <Button className="w-full" onClick={() => setShowReviewForm(!showReviewForm)}>
            Write a Review
          </Button>
        </div>

        <div className="md:col-span-2">
          {showReviewForm && (
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-medium mb-4">Write Your Review</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Rating</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button key={rating} className="p-1">
                        <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Review Title</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Summarize your experience"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Review</label>
                  <Textarea placeholder="Write your review here..." className="min-h-[100px]" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                    Cancel
                  </Button>
                  <Button>Submit Review</Button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                            )}
                          />
                        ))}
                    </div>
                    <h4 className="font-medium mt-1">{review.title}</h4>
                  </div>
                  <div className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">By {review.user}</p>
                  <p className="mt-2">{review.content}</p>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="mr-4">Was this review helpful?</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn("gap-1", helpfulReviews[review.id] === true && "text-green-600")}
                    onClick={() => handleHelpful(review.id, true)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    {review.helpful + (helpfulReviews[review.id] === true ? 1 : 0)}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn("gap-1", helpfulReviews[review.id] === false && "text-red-600")}
                    onClick={() => handleHelpful(review.id, false)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    {review.unhelpful + (helpfulReviews[review.id] === false ? 1 : 0)}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
