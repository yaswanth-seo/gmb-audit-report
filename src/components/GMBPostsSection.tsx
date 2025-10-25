import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquare, ExternalLink } from "lucide-react";

interface GMBPost {
  id: string | number;
  content: string;
  post_img?: string;
  gallery?: string[];
  content_link?: string;
  content_link_text?: string;
  timestamp: number;
  time_text: string;
  user_name: string;
  post_type: string;
  post_link?: string;
}

interface GMBPostsSectionProps {
  posts: GMBPost[];
}

export default function GMBPostsSection({ posts }: GMBPostsSectionProps) {
  // Limit to first 50 posts as per requirement
  const displayPosts = posts.slice(0, 50);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <CardTitle>Google Posts</CardTitle>
          </div>
          <Badge variant="secondary">{displayPosts.length} Posts</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {displayPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full transition-all duration-200 hover:shadow-lg">
                  <CardContent className="p-0 flex flex-col h-[380px] sm:h-[400px]">
                    {/* Image Section */}
                    <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg bg-muted">
                      {post.post_img || (post.gallery && post.gallery[0]) ? (
                        <img
                          src={post.post_img || post.gallery![0]}
                          alt="Post image"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <MessageSquare className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                      
                      {/* Time Badge */}
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-muted/80 backdrop-blur">
                          {post.time_text}
                        </Badge>
                      </div>
                      
                      {/* Post Type Badge (if not regular) */}
                      {post.post_type !== "regular" && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary/10 text-primary capitalize">
                            {post.post_type}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4 flex flex-col">
                      <p className="text-sm text-foreground line-clamp-3 flex-1">
                        {post.content}
                      </p>
                      
                      {/* Gallery indicator */}
                      {post.gallery && post.gallery.length > 1 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          +{post.gallery.length - 1} more {post.gallery.length - 1 === 1 ? 'photo' : 'photos'}
                        </p>
                      )}
                    </div>

                    {/* CTA Section */}
                    <div className="p-4 pt-0 flex gap-2">
                      {post.content_link && post.content_link_text && (
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(post.content_link, "_blank")}
                        >
                          {post.content_link_text}
                        </Button>
                      )}
                      {post.post_link && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(post.post_link, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
