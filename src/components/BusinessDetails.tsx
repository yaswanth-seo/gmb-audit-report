import { Card } from "@/components/ui/card";
import { MapPin, Phone, Globe, Calendar, Link as LinkIcon } from "lucide-react";

interface BusinessDetailsProps {
  data: {
    address: string;
    phone_number: string;
    website: string[];
    postalCode: string;
    city: string;
    country_code: string;
    appointments_url?: string;
    place_id: string;
    cid: number;
  };
}

export const BusinessDetails = ({ data }: BusinessDetailsProps) => {
  const details = [
    {
      icon: MapPin,
      label: "Full Address",
      value: data.address,
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: data.phone_number,
      color: "text-success",
    },
    {
      icon: Globe,
      label: "Website",
      value: data.website[0],
      color: "text-accent",
      isLink: true,
    },
  ];

  if (data.appointments_url) {
    details.push({
      icon: Calendar,
      label: "Book Appointment",
      value: data.appointments_url,
      color: "text-warning",
      isLink: true,
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Business Information</h2>
      
      <Card className="p-6">
        <div className="space-y-4">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-secondary/30">
              <div className={`${detail.color} bg-background p-2 rounded-lg`}>
                <detail.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                {detail.isLink ? (
                  <a
                    href={detail.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium break-all"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{detail.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Place ID</span>
              <span className="text-foreground font-mono text-xs">{data.place_id}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">CID</span>
              <span className="text-foreground font-mono text-xs">{data.cid}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Location</span>
              <span className="text-foreground">{data.city}, {data.country_code.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
