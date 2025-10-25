import { ReportHeader } from "@/components/ReportHeader";
import { BusinessStats } from "@/components/BusinessStats";
import { OpeningHours } from "@/components/OpeningHours";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CompetitorInsights } from "@/components/CompetitorInsights";
import { BusinessDetails } from "@/components/BusinessDetails";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

// Sample data from the API response
const sampleData = {
  name: "Premium Carpet Cleaning",
  phone_number: "+447427306730",
  country_code: "GB",
  postalCode: "SE26 6QQ",
  city: "London",
  website: ["https://carpetcleaningslondon.co.uk/"],
  review_count: 52,
  rating: 4.9,
  cid: 4569775912639662016,
  place_id: "ChIJR4ox4_gddkgRwAcGGPsaaz8",
  address: "7A Longton Grove, London SE26 6QQ, United Kingdom",
  categories: ["Carpet cleaning service"],
  image_count: 34,
  verified: 1,
  review_summary: {
    1: 0,
    2: 0,
    3: 0,
    4: 4,
    5: 48,
  },
  reviews: [
    {
      user_name: "Chris Butcher",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJxqsGndMqMLXLSrsaUVFeHGAL5Wsh4ZRTTGD6Xy=s120-c-c0x00000000-cc-rp-mo-br100",
      photos: [
        "https://lh5.googleusercontent.com/p/AF1QipPAL7a1ccOtSQ7-hntupRM-9ZGmGhDkJNCeEO5u=w300-h300-k-no-p",
        "https://lh5.googleusercontent.com/p/AF1QipOIbDPKazSw6RuoiZ9jNqfpKJNCxsrXazs8k9-S=w300-h300-k-no-p",
      ],
      time_text: "7 months ago",
      rating: 5,
      content: "Booked this company for my carpet and sofa clean after my tenant terms finished. Nick came on time and did a fantastic job, all the stains came out completely. They using very big and professional machines, everything looks on a higher standard. He is a very polite and nice person, very smiled and explained to me all the process. I will definitely use this company in the future and highly recommend it to my friends and family. Thank you for the great service.",
      review_attributes: {
        Positive: ["Professionalism", "Punctuality", "Quality", "Responsiveness", "Value"],
      },
      review_likes: 0,
    },
    {
      user_name: "Rose Linton",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14GhSPPLL_9If3Beed79-KCsDg0hcJekRMKql9Y86=s120-c-c0x00000000-cc-rp-mo-br100",
      time_text: "2 months ago",
      rating: 5,
      content: "He did a fantastic job on our carpets, some of which had been neglected for a long time..... They've turned out great. He was also extremely kind, nice, industrious, and respectful, demonstrating that he is concerned about the quality of his job. We'll be calling him back to clean the rest of our carpets shortly!",
      review_attributes: {
        Positive: ["Responsiveness"],
      },
      review_likes: 0,
    },
    {
      user_name: "pru gaffikin",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJy7hwj7zW0_kozWlZPQWrnL67qqZpwkEpJykXHI=s120-c-c0x00000000-cc-rp-mo-br100",
      time_text: "4 months ago",
      rating: 5,
      content: "Awesome! Dan did an amazing job of cleaning our carpets! I'm really pleased with them. Great service and great value for money. I'd highly recommend.",
      review_likes: 0,
    },
    {
      user_name: "Pedro Daniels",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14Gj5oyXNQKDCu5eUuD2Rx6yRAZATfFC9ox1IwZyy=s120-c-c0x00000000-cc-rp-mo-br100",
      time_text: "2 months ago",
      rating: 5,
      content: "Arrived on schedule. He described what he was going to do and asked if I had any stains. I pointed him an old stain that we had previously attempted to remove. He was unconcerned about this. He was highly professional and got rid of all the stains. I would really suggest him since he is quite helpful.",
      review_attributes: {
        Positive: ["Professionalism"],
      },
      review_likes: 0,
    },
  ],
  open_hours: [
    { open: 900, close: 1800 },
    { open: 900, close: 1800 },
    { open: 900, close: 1800 },
    { open: 900, close: 1800 },
    { open: 900, close: 1800 },
    { open: -1, close: -1 },
    { open: -1, close: -1 },
  ],
  appointments_url: "https://carpetcleaningslondon.co.uk/contact/",
  also_search_for: [
    {
      name: "Premium Clean",
      social_url: "https://maps.google.com/?cid=4275091721289199393",
    },
    {
      name: "Roger Garrett Professional Carpet Cleaning",
      social_url: "https://maps.google.com/?cid=119956192754752844",
    },
    {
      name: "Wizard Cleaning - Crystal Palace",
      social_url: "https://maps.google.com/?cid=14926186189092509123",
    },
    {
      name: "Deep Steam Clean",
      social_url: "https://maps.google.com/?cid=1894066965694305454",
    },
  ],
};

const Index = () => {
  const reportDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-card border-b border-border px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Google My Business Audit Report</h1>
            <p className="text-sm text-muted-foreground">Generated on {reportDate}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <ReportHeader data={sampleData} />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BusinessStats data={sampleData} />
            <ReviewsSection reviews={sampleData.reviews} />
          </div>

          <div className="space-y-6">
            <OpeningHours hours={sampleData.open_hours} />
            <BusinessDetails data={sampleData} />
            <CompetitorInsights competitors={sampleData.also_search_for} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
