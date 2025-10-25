import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface GoogleMapsEmbedProps {
  embedUrl: string;
  businessName: string;
}

export const GoogleMapsEmbed = ({ embedUrl, businessName }: GoogleMapsEmbedProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Business Location</h3>
      </div>
      <div className="relative w-full h-[250px] sm:h-[300px] md:aspect-[4/3] rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${businessName} location map`}
          className="absolute inset-0"
        />
      </div>
    </Card>
  );
};
