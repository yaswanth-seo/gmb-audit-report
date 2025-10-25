import { ReportHeader } from "@/components/ReportHeader";
import { BusinessStats } from "@/components/BusinessStats";
import { OpeningHours } from "@/components/OpeningHours";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CompetitorInsights } from "@/components/CompetitorInsights";
import { BusinessDetails } from "@/components/BusinessDetails";
import { GoogleMapsEmbed } from "@/components/GoogleMapsEmbed";
import { GoogleLinks } from "@/components/GoogleLinks";
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
  fact_id: "0x48761df8e3318a47:0x3f6b1afb180607c0",
  kg_id: "/g/11bz0ng4qp",
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
      user_name: "Nikolay Arabadzhiev",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJyIg6ssMcqhCVaNSp7IviNlObOt-UwihkC0oJCo=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "2 years ago",
      rating: 5,
      content: "I didn't expect the rest will be that good. OMG, the carpet looks brand new now. Thank you so much for your hard work. Highly Recommended. Thank you",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 2, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/115930922480464577694",
      review_link: "https://www.google.com/maps/contrib/115930922480464577694/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s115930922480464577694!3m1!1e1",
    },
    {
      user_name: "Milena Obretenova",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7BtItkv22y2n_5Bduby2uiY2afylsvB8SqEoDbfk=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "2 years ago",
      rating: 5,
      content: "Highly recommend premium carpet clean .In my living room carpet was really bad with lots of stains .   the carpet looks like new  now. i couldn't believe   the stains gave gone.Great work from Kiro .Well done",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 1, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/109540861327258240167",
      review_link: "https://www.google.com/maps/contrib/109540861327258240167/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s109540861327258240167!3m1!1e1",
    },
    {
      user_name: "Madeline Holder",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14GhRm9lXvhxeTt0UvSnOVn0IA894tktNzjLClVsc=s40-c-c0x00000000-cc-rp-mo-ba2-br100",
      time_text: "3 years ago",
      rating: 4,
      content: "Punctual, efficient, friendly and very professional team . I will be using Premium Carpet Cleaning Service again. Highly recommend.",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 1, reviews: 2, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/108937162150964546931",
      review_link: "https://www.google.com/maps/contrib/108937162150964546931/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s108937162150964546931!3m1!1e1",
    },
    {
      user_name: "A.M G",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJzxP2En27v8HutsKz-glf-gRvSnaZo9_zQH3F4L=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "The carpet stain was big and very difficult to clean as when the accident happened I watched youtube videos and try to clean by myself, of course it made it much worse. Kiril from Premium Carpet Cleaning was very friendly and professional, he found varies solution to make the carpet back to normal. After a few visit the carpet is in very good condition. Highly recommend!",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 4, photos: 4 },
      user_link: "https://www.google.com/maps/contrib/109332469491043248894",
      review_link: "https://www.google.com/maps/contrib/109332469491043248894/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s109332469491043248894!3m1!1e1",
    },
    {
      user_name: "Tina Manolova",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJyJh0ELd0_wVxWzCNenDzgU7I_yhkm8X6qDmPrH=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "Kitil did my carpet today. I am impress with thr service. The carpet looks like new. Thank you so much. Highly recommended",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 1, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/114838266405271540603",
      review_link: "https://www.google.com/maps/contrib/114838266405271540603/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s114838266405271540603!3m1!1e1",
    },
    {
      user_name: "Paul Edwards",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJxkRx-421RMvxaj9ZtMf9HWc4Nf1MBLc_o1r0Jd=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "At Waste King they have cleaned our carpets for years. Great service and cost",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 29, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/100134730347968960742",
      review_link: "https://www.google.com/maps/contrib/100134730347968960742/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s100134730347968960742!3m1!1e1",
    },
    {
      user_name: "Gareth Reed",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14GjeMaYIE4N5jNsf671dK9D7_t3ri_qS4z5zUDiDpA=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "Very professional, and a great guy as well. We had our carpets cleaned as well as a couch. Perfect job, nothing was a fuss, provided plenty of entertainment. Very VERY good value for money.",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 7, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/108772505638198680236",
      review_link: "https://www.google.com/maps/contrib/108772505638198680236/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s108772505638198680236!3m1!1e1",
    },
    {
      user_name: "Paul Angus",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14Gj7codAWvy0PkelKknln5xgOD9rf7TkColXgZeL8IA=s40-c-c0x00000000-cc-rp-mo-ba4-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "Friendly guys, cleaned 2 sofas and a set of dining chairs, didn't take too long, but with great results.",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 1, reviews: 121, photos: 59 },
      user_link: "https://www.google.com/maps/contrib/109107779944072146785",
      review_link: "https://www.google.com/maps/contrib/109107779944072146785/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s109107779944072146785!3m1!1e1",
    },
    {
      user_name: "Mariya Dragova",
      user_photo: "https://lh3.googleusercontent.com/a/AATXAJxNtLiY4iavxicV8x-GjAcUPxN7ZFDjp8mDWMtG=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "Kiril is very professional carpet cleaner. He removed all the stains, i was suprired. Highly recommend. Thabk you so much.",
      review_likes: 1,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 2, photos: 3 },
      user_link: "https://www.google.com/maps/contrib/100919250925150512553",
      review_link: "https://www.google.com/maps/contrib/100919250925150512553/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s100919250925150512553!3m1!1e1",
    },
    {
      user_name: "Victoria Chapman",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14Gjwa7BEgnWsSuyqThJ2I9TdA4XOE1alAmLNso4a=s40-c-c0x00000000-cc-rp-mo-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "Very happy with the carpet clean.  Professional, friendly, quick and a good cleaning result.  Would use again.",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 0, reviews: 4, photos: 0 },
      user_link: "https://www.google.com/maps/contrib/114138200191371985141",
      review_link: "https://www.google.com/maps/contrib/114138200191371985141/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s114138200191371985141!3m1!1e1",
    },
    {
      user_name: "Ivo ANDRADE",
      user_photo: "https://lh3.googleusercontent.com/a-/AOh14Ghp_iFkvIu9PhTGoYbC8FdjOv6RPrs6bNH58iDT=s40-c-c0x00000000-cc-rp-mo-ba3-br100",
      time_text: "3 years ago",
      rating: 5,
      content: "Very friendly staff, very professional, we called several times and were always very well attended.",
      review_likes: 0,
      response_from_owner: "Thank you very much! :)",
      response_from_owner_time: "2 years ago",
      user_stats: { local_guide: 1, reviews: 13, photos: 15 },
      user_link: "https://www.google.com/maps/contrib/113403128942618571760",
      review_link: "https://www.google.com/maps/contrib/113403128942618571760/place/ChIJR4ox4_gddkgRwAcGGPsaaz8/@51.429099,-0.061062,18z/data=!4m6!1m5!8m4!1e1!2s113403128942618571760!3m1!1e1",
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
  links: {
    listing: "https://maps.google.com/?cid=4569775912639662016",
    knowledge_graph: "https://www.google.com/search?q=Premium+Carpet+Cleaning&kponly&kgmid=/g/11bz0ng4qp",
    knowledge_graph_short: "http://g.co/kg/g/11bz0ng4qp",
    local_finder: "https://www.google.bg/search?q=Premium+Carpet+Cleaning&tbm=lcl#rlfi=si:4569775912639662016",
    photos: "https://www.google.com/maps/uv?pb=!1s0x0:0x3f6b1afb180607c0!2m5!2m2!1i80!2i80!3m1!2i100!3m1!7e1!4s",
    reviews: "https://search.google.com/local/reviews?placeid=ChIJR4ox4_gddkgRwAcGGPsaaz8",
    reviews_write: "https://search.google.com/local/writereview?placeid=ChIJR4ox4_gddkgRwAcGGPsaaz8",
  },
  embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75931.9600640659!2d-2.472455102734396!3d53.5064506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42bc3ace0ff2e86d%3A0xcf06ff10890a2c84!2sSupreme%20Carpet%20Care%20ltd!5e0!3m2!1sen!2suk!4v1761405541042!5m2!1sen!2suk",
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
            <ReviewsSection 
              reviews={sampleData.reviews} 
              totalReviews={sampleData.review_count}
              allReviewsLink={sampleData.links.reviews}
            />
          </div>

          <div className="space-y-6">
            <GoogleMapsEmbed embedUrl={sampleData.embed_url} businessName={sampleData.name} />
            <GoogleLinks links={sampleData.links} />
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
