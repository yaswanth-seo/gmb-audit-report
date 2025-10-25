import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star, ThumbsUp, Reply, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  response_from_owner?: string;
  response_from_owner_time?: string;
  user_stats?: {
    local_guide: number;
    reviews: number;
    photos: number;
  };
  user_link?: string;
  review_link?: string;
  review_id?: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  totalReviews?: number;
  allReviewsLink?: string;
}

export const ReviewsSection = ({ reviews, totalReviews, allReviewsLink }: ReviewsSectionProps) => {
  const displayedReviews = reviews.slice(0, 50);
  const hasMoreReviews = totalReviews && totalReviews > 50;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Customer Reviews {totalReviews && `(${totalReviews})`}
        </h2>
        {displayedReviews.length < (totalReviews || reviews.length) && (
          <p className="text-sm text-muted-foreground">
            Showing {displayedReviews.length} of {totalReviews || reviews.length} reviews
          </p>
        )}
      </div>

      <div className="relative">
        <ScrollArea className="h-[400px] sm:h-[500px] pr-2 sm:pr-4 border-t border-b border-border/50">
          <div className="grid gap-4 py-2">
            {displayedReviews.map((review, idx) => (
            <Card key={idx} className="p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="flex gap-3 sm:gap-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <AvatarImage src={review.user_photo} alt={review.user_name} />
                  <AvatarFallback>{review.user_name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        {review.user_link ? (
                <a 
                  href={review.user_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-sm sm:text-base text-foreground hover:underline break-words"
                >
                  {review.user_name}
                </a>
                        ) : (
                          <h4 className="font-semibold text-foreground">{review.user_name}</h4>
                        )}
                        {review.user_stats?.local_guide === 1 && (
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            Local Guide
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{review.time_text}</span>
                        {review.user_stats && (
                          <>
                            <span>•</span>
                            <span>{review.user_stats.reviews} reviews</span>
                            {review.user_stats.photos > 0 && (
                              <>
                                <span>•</span>
                                <span>{review.user_stats.photos} photos</span>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
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
                      {review.review_link && (
                        <a
                          href={review.review_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          title="View on Google"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-foreground leading-relaxed break-words">{review.content}</p>

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
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
                {review.photos.map((photo, photoIdx) => (
                  <img
                    key={photoIdx}
                    src={photo}
                    alt={`Review photo ${photoIdx + 1}`}
                    className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-lg flex-shrink-0"
                  />
                ))}
              </div>
            )}

                  {review.response_from_owner && (
                    <div className="bg-muted/50 border-l-2 border-primary/50 pl-4 pr-3 py-3 rounded-r-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Reply className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Response from owner</span>
                        {review.response_from_owner_time && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{review.response_from_owner_time}</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">{review.response_from_owner}</p>
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
        </ScrollArea>
        
        {/* Bottom fade gradient to indicate more content */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
      </div>

      {/* Sticky "View All" button - always visible */}
      {hasMoreReviews && allReviewsLink && (
        <Card className="mt-4 p-4 bg-gradient-to-br from-primary/5 to-background border-2 border-primary/30 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-base text-foreground mb-1">
                View All {totalReviews} Reviews on Google Sheets
              </h3>
              <p className="text-xs text-muted-foreground">
                Showing {displayedReviews.length} of {totalReviews} reviews • Click to see complete feedback
              </p>
            </div>
            <Button variant="default" size="default" asChild>
              <a href={allReviewsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                View All
              </a>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
