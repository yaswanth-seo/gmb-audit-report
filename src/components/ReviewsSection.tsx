import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp } from "lucide-react";

interface Review {
  user_name: string;
  user_photo: string;
  rating: number;
  content: string;
  time_text: string;
  review_likes: number;
  review_attributes?: {
    Positive?: string[];
  };
  photos?: string[];
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Customer Reviews</h2>
      <div className="grid gap-4">
        {reviews.slice(0, 6).map((review, idx) => (
          <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={review.user_photo} alt={review.user_name} />
                <AvatarFallback>{review.user_name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.user_name}</h4>
                    <p className="text-sm text-muted-foreground">{review.time_text}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-foreground leading-relaxed">{review.content}</p>

                {review.review_attributes?.Positive && review.review_attributes.Positive.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {review.review_attributes.Positive.map((attr, attrIdx) => (
                      <Badge key={attrIdx} variant="secondary" className="text-xs">
                        {attr}
                      </Badge>
                    ))}
                  </div>
                )}

                {review.photos && review.photos.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {review.photos.map((photo, photoIdx) => (
                      <img
                        key={photoIdx}
                        src={photo}
                        alt={`Review photo ${photoIdx + 1}`}
                        className="h-24 w-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {review.review_likes > 0 && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">{review.review_likes}</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
