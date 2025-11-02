import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { mockData } from "@/lib/mockData";
import { ReportHeader } from "@/components/ReportHeader";
import { BusinessDetails } from "@/components/BusinessDetails";
import { BusinessStats } from "@/components/BusinessStats";
import { GoogleMapsEmbed } from "@/components/GoogleMapsEmbed";
import { OpeningHours } from "@/components/OpeningHours";
import { ReviewsSection } from "@/components/ReviewsSection";
import AIOverviewSection from "@/components/AIOverviewSection";
import ReviewFrequencyChart from "@/components/ReviewFrequencyChart";
import { CompetitorInsights } from "@/components/CompetitorInsights";
import { GMBQASection } from "@/components/GMBQASection";
import GMBPostsSection from "@/components/GMBPostsSection";
import { GMBProductsSection } from "@/components/GMBProductsSection";
import { GMBServicesSection } from "@/components/GMBServicesSection";
import GMBImageGallery from "@/components/GMBImageGallery";
import { GoogleLinks } from "@/components/GoogleLinks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Sample data (you can replace this with real data later)
const getSampleData = (businessName: string) => ({
  name: businessName,
  rating: 4.5,
  review_count: 142,
  reviews_count: 142,
  address: "123 Main Street, City, State 12345",
  phone_number: "+1 (555) 123-4567",
  phone: "+1 (555) 123-4567",
  website: ["https://example.com"],
  categories: ["Local Business"],
  category: "Local Business",
  verified: 1,
  embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e0da243%3A0xd44b68e93e56f764!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  opening_hours: [
    { open: 900, close: 1700 },
    { open: 900, close: 1700 },
    { open: 900, close: 1700 },
    { open: 900, close: 1700 },
    { open: 900, close: 1700 },
    { open: 1000, close: 1600 },
    { open: -1, close: -1 },
  ],
  reviews: [],
  place_id: "ChIJd8BlQ2BZwokRqFdQKvdz_I0",
  cid: 1234567890,
  postalCode: "12345",
  city: "City",
  country_code: "US",
  image_count: 25,
  review_summary: { 5: 80, 4: 40, 3: 15, 2: 5, 1: 2 },
});

export default function ReportView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundReport = mockData.getReport(id);
      if (foundReport) {
        setReport(foundReport);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Report Not Found</AlertTitle>
            <AlertDescription>
              The report you're looking for doesn't exist or has been deleted.
            </AlertDescription>
          </Alert>
          <div className="mt-6">
            <Button onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const data = getSampleData(report.businessName);
  
  const competitors = [
    { name: "Similar Business 1", social_url: "https://example.com" },
    { name: "Similar Business 2", social_url: "https://example.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GMB</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Report Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ReportHeader data={data} />

          <div className="grid lg:grid-cols-2 gap-6">
            <BusinessDetails data={data} />
            <BusinessStats data={data} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <GoogleMapsEmbed embedUrl={data.embed_url} businessName={data.name} />
            <OpeningHours hours={data.opening_hours} />
          </div>

          <ReviewsSection reviews={data.reviews} />
          <AIOverviewSection 
            businessName={data.name} 
            content={`${data.name} is a well-established ${data.category} serving the local community. With a strong ${data.rating}-star rating based on ${data.review_count} customer reviews, they have built a solid reputation for quality service and customer satisfaction.`}
          />
          <ReviewFrequencyChart reviews={[]} />
          <CompetitorInsights competitors={competitors} />
          <GMBQASection questions={[]} />
          <GMBPostsSection posts={[]} />
          <GMBProductsSection products={[]} />
          <GMBServicesSection services={[]} />
          <GMBImageGallery images={[]} />
          <GoogleLinks links={{ listing: `https://search.google.com/local/writereview?placeid=${data.place_id}` }} />
        </div>
      </main>
    </div>
  );
}
