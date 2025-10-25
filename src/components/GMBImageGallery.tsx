import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Camera, Image as ImageIcon, Users, Calendar, Ruler } from "lucide-react";
import { format } from "date-fns";

export interface GMBImage {
  id: string;
  img_url: string;
  user_id?: string;
  user_name?: string;
  source: string;
  type: string;
  size: number[];
  date_year?: number;
  date_month?: number;
  date_day?: number;
  date_hour?: number;
  timestamp?: number;
}

interface GMBImageGalleryProps {
  images: GMBImage[];
}

export default function GMBImageGallery({ images }: GMBImageGalleryProps) {
  // Calculate statistics
  const totalImages = images.length;
  const threeSixtyCount = images.filter(img => img.type === "360").length;
  const ownerImages = images.filter(img => img.source?.includes("bizbuilder")).length;
  const customerImages = totalImages - ownerImages;
  
  const validTimestamps = images.filter(img => img.timestamp).map(img => img.timestamp!);
  const latestUpload = validTimestamps.length > 0 ? Math.max(...validTimestamps) : null;
  const oldestUpload = validTimestamps.length > 0 ? Math.min(...validTimestamps) : null;
  
  // Calculate average resolution
  const avgWidth = images.reduce((sum, img) => sum + (img.size?.[0] || 0), 0) / images.length;
  const avgHeight = images.reduce((sum, img) => sum + (img.size?.[1] || 0), 0) / images.length;
  const avgResolution = `${Math.round(avgWidth)}×${Math.round(avgHeight)}`;
  
  // Get top contributors
  const contributorCounts = images.reduce((acc, img) => {
    if (img.user_name) {
      acc[img.user_name] = (acc[img.user_name] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  const topContributors = Object.entries(contributorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  const formatDate = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "MMM d, yyyy");
  };

  const getResolutionBadge = (size: number[]) => {
    if (!size || size.length < 2) return "Unknown";
    const pixels = size[0] * size[1];
    if (pixels >= 3840 * 2160) return "4K+";
    if (pixels >= 1920 * 1080) return "HD";
    return "SD";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          GMB Images Gallery
        </CardTitle>
        <CardDescription>Business photos and customer contributions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stats">Stats Overview</TabsTrigger>
            <TabsTrigger value="gallery">Image Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="space-y-4">
            {/* Summary Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-4 w-4" />
                  <span className="text-sm">Total Images</span>
                </div>
                <p className="text-2xl font-bold">{totalImages}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Camera className="h-4 w-4" />
                  <span className="text-sm">360° Photos</span>
                </div>
                <p className="text-2xl font-bold">{threeSixtyCount}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Ruler className="h-4 w-4" />
                  <span className="text-sm">Avg Resolution</span>
                </div>
                <p className="text-2xl font-bold text-sm">{avgResolution}</p>
              </div>
            </div>

            {/* Image Sources */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Image Sources</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Business Owner</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${(ownerImages / totalImages) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{ownerImages}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Customers</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary" 
                        style={{ width: `${(customerImages / totalImages) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{customerImages}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Timeline */}
            {latestUpload && oldestUpload && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Upload Timeline</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">First Upload</span>
                    <p className="text-sm font-medium">{formatDate(oldestUpload)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Latest Upload</span>
                    <p className="text-sm font-medium">{formatDate(latestUpload)}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Top Contributors */}
            {topContributors.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Top Contributors
                </h4>
                <div className="space-y-2">
                  {topContributors.map(([name, count], index) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {index + 1}. {name}
                      </span>
                      <Badge variant="secondary">{count} photos</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="gallery" className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="space-y-2">
                      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                        <img
                          src={image.img_url}
                          alt={`Photo by ${image.user_name || 'Unknown'}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                        {image.type === "360" && (
                          <Badge className="absolute top-2 right-2" variant="secondary">
                            360°
                          </Badge>
                        )}
                        {image.size && image.size.length >= 2 && (
                          <Badge className="absolute bottom-2 left-2" variant="outline">
                            {getResolutionBadge(image.size)}
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-1">
                        {image.user_name && (
                          <p className="text-sm font-medium truncate">{image.user_name}</p>
                        )}
                        {image.timestamp && (
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(image.timestamp)}
                          </p>
                        )}
                        {image.size && image.size.length >= 2 && (
                          <p className="text-xs text-muted-foreground">
                            {image.size[0]}×{image.size[1]}
                          </p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-center text-sm text-muted-foreground">
              Showing {images.length} images
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
