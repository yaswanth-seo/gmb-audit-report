import { ReportHeader } from "@/components/ReportHeader";
import { BusinessStats } from "@/components/BusinessStats";
import { OpeningHours } from "@/components/OpeningHours";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CompetitorInsights } from "@/components/CompetitorInsights";
import { BusinessDetails } from "@/components/BusinessDetails";
import { GoogleMapsEmbed } from "@/components/GoogleMapsEmbed";
import { GoogleLinks } from "@/components/GoogleLinks";
import GMBImageGallery from "@/components/GMBImageGallery";
import { GMBServicesSection } from "@/components/GMBServicesSection";
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
      timestamp: 1665849600,
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
      timestamp: 1672531200,
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
      timestamp: 1634054400,
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
      timestamp: 1628640000,
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
      timestamp: 1620950400,
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
      timestamp: 1697328000,
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
      timestamp: 1704067200,
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
      timestamp: 1709251200,
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
      timestamp: 1714521600,
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
      timestamp: 1719878400,
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
      timestamp: 1725235200,
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
  images: [
    { id: "AF1QipOT5KmvH3sk4DIAvXD6ClpvwxzOclRedVqdOst0", img_url: "https://lh5.googleusercontent.com/p/AF1QipOT5KmvH3sk4DIAvXD6ClpvwxzOclRedVqdOst0=w5472-h3648", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "360", size: [5472, 3648], date_year: 2022, date_month: 3, date_day: 24, date_hour: 9, timestamp: 1648105200 },
    { id: "AF1QipMLRlwCFZxHeuSW7vmmkYd9ycX4aUYhqpVOVuwm", img_url: "https://lh5.googleusercontent.com/p/AF1QipMLRlwCFZxHeuSW7vmmkYd9ycX4aUYhqpVOVuwm=w960-h720", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [960, 720], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipNPdZkChN2-C3PMXMeSgBqoMthosGUWafzhcCFW", img_url: "https://lh5.googleusercontent.com/p/AF1QipNPdZkChN2-C3PMXMeSgBqoMthosGUWafzhcCFW=w1600-h1600", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1600, 1600], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipMPMHnZgf5tccIjSCgEiQawcW53KiJqqJ1Z1uKV", img_url: "https://lh5.googleusercontent.com/p/AF1QipMPMHnZgf5tccIjSCgEiQawcW53KiJqqJ1Z1uKV=w5472-h3648", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_api", type: "360", size: [5472, 3648], date_year: 2020, date_month: 11, date_day: 7, date_hour: 3, timestamp: 1604710800 },
    { id: "AF1QipM-cPrheIZ1WjHn2nZQuLY_5q33so-QRn4WcHvB", img_url: "https://lh5.googleusercontent.com/p/AF1QipM-cPrheIZ1WjHn2nZQuLY_5q33so-QRn4WcHvB=w1200-h1600", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1200, 1600], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipMzyzYTESNpM926YWMak4cbZbUmX1-u7Z-Uas3M", img_url: "https://lh5.googleusercontent.com/p/AF1QipMzyzYTESNpM926YWMak4cbZbUmX1-u7Z-Uas3M=w1200-h1600", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1200, 1600], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipMC7fP1QaM9ExKXfftoPd8LgP81BIweOZSaNaQr", img_url: "https://lh5.googleusercontent.com/p/AF1QipMC7fP1QaM9ExKXfftoPd8LgP81BIweOZSaNaQr=w5472-h3648", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_api", type: "360", size: [5472, 3648], date_year: 2020, date_month: 11, date_day: 7, date_hour: 3, timestamp: 1604710800 },
    { id: "AF1QipPeEfAr-EGV6mz5GQEQ7-WM6SgZbW4PSsxWSJz-", img_url: "https://lh5.googleusercontent.com/p/AF1QipPeEfAr-EGV6mz5GQEQ7-WM6SgZbW4PSsxWSJz-=w1936-h2592", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1936, 2592], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipOiA2f7LkQrW4GdDQIB3CWkWiKN7Wg5NVVcLGMq", img_url: "https://lh5.googleusercontent.com/p/AF1QipOiA2f7LkQrW4GdDQIB3CWkWiKN7Wg5NVVcLGMq=w1200-h1600", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1200, 1600], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipOsOUWJj-YoNebhQXCUmcLHsFcyE7IcxLh6mYL9", img_url: "https://lh5.googleusercontent.com/p/AF1QipOsOUWJj-YoNebhQXCUmcLHsFcyE7IcxLh6mYL9=w1936-h2592", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1936, 2592], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipPHz0LMtWFIUNbtjSVLIy9xbJta1BUQgjmIpkUp", img_url: "https://lh5.googleusercontent.com/p/AF1QipPHz0LMtWFIUNbtjSVLIy9xbJta1BUQgjmIpkUp=w1280-h960", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1280, 960], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipOtRlR621O0mpgWiD_RqUdMcM2YaxApXvLi2TDy", img_url: "https://lh5.googleusercontent.com/p/AF1QipOtRlR621O0mpgWiD_RqUdMcM2YaxApXvLi2TDy=w1280-h1280", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1280, 1280], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipPiKHMksSjFRE8g3yv4MtoCsum0LyXTeAGENbY8", img_url: "https://lh5.googleusercontent.com/p/AF1QipPiKHMksSjFRE8g3yv4MtoCsum0LyXTeAGENbY8=w5472-h3648", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_api", type: "360", size: [5472, 3648], date_year: 2020, date_month: 11, date_day: 7, date_hour: 3, timestamp: 1604710800 },
    { id: "AF1QipMfpj2KhOvloZz_COfaBzx0w53m896cvYVin0vp", img_url: "https://lh5.googleusercontent.com/p/AF1QipMfpj2KhOvloZz_COfaBzx0w53m896cvYVin0vp=w1936-h2592", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1936, 2592], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipMwNH4wTpR9lCH6B7jtsBMpb-ssMiQ74z0bvNN-", img_url: "https://lh5.googleusercontent.com/p/AF1QipMwNH4wTpR9lCH6B7jtsBMpb-ssMiQ74z0bvNN-=w1936-h2592", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1936, 2592], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipN2INL09A4MZbBqYZx2lfwzQUWgrb9zWRLQ7vNC", img_url: "https://lh5.googleusercontent.com/p/AF1QipN2INL09A4MZbBqYZx2lfwzQUWgrb9zWRLQ7vNC=w1280-h960", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1280, 960], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipOGnVLOMFGY9lVz9aDY2MEJCFD-acNzbKhRSK9S", img_url: "https://lh5.googleusercontent.com/p/AF1QipOGnVLOMFGY9lVz9aDY2MEJCFD-acNzbKhRSK9S=w5472-h3648", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_api", type: "360", size: [5472, 3648], date_year: 2020, date_month: 11, date_day: 7, date_hour: 3, timestamp: 1604710800 },
    { id: "AF1QipOxpYyH9FbW5-wNBvsvBtEO9UzDHugT8jSd0q3f", img_url: "https://lh5.googleusercontent.com/p/AF1QipOxpYyH9FbW5-wNBvsvBtEO9UzDHugT8jSd0q3f=w1434-h806", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_ios", type: "", size: [1434, 806], date_year: 2021, date_month: 7, date_day: 26, date_hour: 20, timestamp: 1627318800 },
    { id: "AF1QipMg51tLWcfacTYLiFuNgMESR_0rCkuOHlZcIZ5I", img_url: "https://lh5.googleusercontent.com/p/AF1QipMg51tLWcfacTYLiFuNgMESR_0rCkuOHlZcIZ5I=w1125-h633", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_ios", type: "", size: [1125, 633], date_year: 2021, date_month: 7, date_day: 29, date_hour: 13, timestamp: 1627552800 },
    { id: "AF1QipMQfBwzKFnlCX-astarFcaSrcMjmbHDQRB9-8hT", img_url: "https://lh5.googleusercontent.com/p/AF1QipMQfBwzKFnlCX-astarFcaSrcMjmbHDQRB9-8hT=w2592-h1936", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [2592, 1936], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipMfqOuvXg0ipsPVC71UjpzsP6GVBc6NjdSBDXU_", img_url: "https://lh5.googleusercontent.com/p/AF1QipMfqOuvXg0ipsPVC71UjpzsP6GVBc6NjdSBDXU_=w960-h720", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [960, 720], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipMq-DVhMap6Me3YDJl7O3GD_v7llI3D67dLXX26", img_url: "https://lh5.googleusercontent.com/p/AF1QipMq-DVhMap6Me3YDJl7O3GD_v7llI3D67dLXX26=w720-h960", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [720, 960], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipNPpObd9PV2Y-EXj5ZKyOpF9Z5gLZ589ZSbxn36", img_url: "https://lh5.googleusercontent.com/p/AF1QipNPpObd9PV2Y-EXj5ZKyOpF9Z5gLZ589ZSbxn36=w1600-h1200", user_id: "100268027689656880990", user_name: "Chris Butcher", source: "photos:local_universal_desktop", type: "", size: [1600, 1200], date_year: 2021, date_month: 9, date_day: 7, date_hour: 12, timestamp: 1631005200 },
    { id: "AF1QipNJ7L-XUL9cdNO7beFjqOFJF5IbSA4FocSgCYZi", img_url: "https://lh5.googleusercontent.com/p/AF1QipNJ7L-XUL9cdNO7beFjqOFJF5IbSA4FocSgCYZi=w1200-h1600", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1200, 1600], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipPYZ_yIh6atOo_wYZo3NOL96f1uBwmoyCw1IvOT", img_url: "https://lh5.googleusercontent.com/p/AF1QipPYZ_yIh6atOo_wYZo3NOL96f1uBwmoyCw1IvOT=w806-h1080", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [806, 1080], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipNxxQrpFk606DqMJFgAyq5d41nPl78qIGl8KYT5", img_url: "https://lh5.googleusercontent.com/p/AF1QipNxxQrpFk606DqMJFgAyq5d41nPl78qIGl8KYT5=w2448-h3264", user_id: "107416897282014474673", user_name: "Kiril Natov", source: "photos:spicybowl_desktop", type: "", size: [2448, 3264], date_year: 2016, date_month: 6, date_day: 14, date_hour: 12, timestamp: 1465894800 },
    { id: "AF1QipNh07M8808vWfLkp-VWKvB8s-1MuAKXtLis7VeM", img_url: "https://lh5.googleusercontent.com/p/AF1QipNh07M8808vWfLkp-VWKvB8s-1MuAKXtLis7VeM=w1200-h1600", user_id: "102291271332294724313", user_name: "Premium Carpet Cleaning", source: "bizbuilder:gmb_web", type: "", size: [1200, 1600], date_year: 2021, date_month: 7, date_day: 30, date_hour: 8, timestamp: 1627621200 },
    { id: "AF1QipNWcKu8keuVjVKSr5RKAoUlZOriWxIX_yqVXWZP", img_url: "https://lh5.googleusercontent.com/p/AF1QipNWcKu8keuVjVKSr5RKAoUlZOriWxIX_yqVXWZP=w1280-h960", user_id: "107416897282014474673", user_name: "Kiril Natov", source: "photos:local_universal_desktop", type: "", size: [1280, 960], date_year: 2017, date_month: 1, date_day: 8, date_hour: 21, timestamp: 1483902000 },
  ],
  services: [
    { name: "Area rug cleaning", description: "Professional deep cleaning for all types of area rugs including Persian, Oriental, and wool rugs. Removes dirt, stains, and allergens while preserving colors and fibers.", price: "From £45", category: "Carpet cleaning service" },
    { name: "General carpet cleaning", description: "Comprehensive steam cleaning for all carpet types. Removes embedded dirt, dust mites, and bacteria. Fast drying time of 2-4 hours.", price: "From £25 per room", category: "Carpet cleaning service" },
    { name: "Pet stain & odor removal", description: "Advanced enzyme-based treatment that eliminates pet urine, feces, and vomit stains along with associated odors. Safe for pets and children.", price: "From £40", category: "Carpet cleaning service" },
    { name: "Upholstery cleaning", description: "Deep cleaning for sofas, chairs, and other upholstered furniture. Safe for all fabric types including microfiber, cotton, and linen.", price: "From £55", category: "Carpet cleaning service" },
    { name: "2 Bedroom Flat", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Acne Medication", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Air Conditioning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Alkaline Cleaner", description: "", price: "", category: "Carpet cleaning service" },
    { name: "All Types Of Flooring", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Appliances Cleaned", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Appliances Wiped", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Begin Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Candle Wax", description: "Careful removal of candle wax from carpets and upholstery without damaging fibers. Includes residue cleaning.", price: "£20 per area", category: "Carpet cleaning service" },
    { name: "Car Interior Cleaning Service", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Clean Driveway", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Cleaning Agents", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Cleaning Chemicals", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Cleaning Job", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Cleaning Machines", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Decking Clean", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Deep Cleaning Services", description: "Intensive cleaning package including pre-treatment, steam cleaning, stain removal, and deodorizing. Ideal for heavily soiled carpets.", price: "From £40 per room", category: "Carpet cleaning service" },
    { name: "Deeper Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Dining Chairs", description: "Fabric and upholstered dining chair cleaning. Removes food stains, spills, and everyday grime.", price: "£8 per chair", category: "Carpet cleaning service" },
    { name: "Dry Cleaner", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Dye Service", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Eco-Friendly Cleaning", description: "100% biodegradable, non-toxic cleaning solutions safe for children, pets, and allergy sufferers. Equally effective as traditional methods.", price: "From £32 per room", category: "Carpet cleaning service" },
    { name: "End Of Tenancy Cleaning Service", description: "Comprehensive cleaning package for rental properties. Includes carpets, curtains, and upholstery. Guaranteed to meet landlord standards.", price: "From £120", category: "Carpet cleaning service" },
    { name: "Experienced Cleaners", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Exterior Window Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Extremely Clean", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Fridge Freezer Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Furniture Moving", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Furniture Polish", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Heavily Soiled Carpets", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Home Furnishings", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Home Mattress", description: "Hygienic deep cleaning that removes dust mites, allergens, bacteria, and stains. Helps improve sleep quality and extends mattress life.", price: "From £35 per mattress", category: "Carpet cleaning service" },
    { name: "Home Sofa Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Homes Decor", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Inspection Services", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Interior Windows", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Leather Cleaners", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Leather Conditioner", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Leather Couches", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Leather Restoration Service", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Leather Sofa", description: "Professional leather cleaning and conditioning service that restores shine and prevents cracking. Includes stain removal.", price: "From £65 per sofa", category: "Carpet cleaning service" },
    { name: "Living Room", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Mattress Cleaning London", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Mattress Steam Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Non Toxic Cleaning Service", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Nylon Carpets", description: "High-performance cleaning for durable nylon carpets with stain protection treatment included.", price: "From £28 per room", category: "Carpet cleaning service" },
    { name: "Odor Control", description: "Professional odor neutralization service using industrial-strength deodorizers. Eliminates smoke, pet, and cooking odors.", price: "From £30", category: "Carpet cleaning service" },
    { name: "Odor Neutraliser", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Odour Neutraliser", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Our Office Cleaning Services", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Our Window Cleaning Service", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Oven Cleaning", description: "Complete oven cleaning service including racks, trays, and glass doors. Non-caustic products used. Oven ready to use immediately.", price: "From £55", category: "Carpet cleaning service" },
    { name: "Party Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Patio Cleaning", description: "High-pressure cleaning for patios, decking, and driveways. Removes moss, algae, and stubborn dirt. Restores original appearance.", price: "From £75", category: "Carpet cleaning service" },
    { name: "Pet Hairs", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Regular Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Removed Dust", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Rug Treatments", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Rugs Cleaning London", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Safe Flooring", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Sanitizing Treatments", description: "Anti-bacterial and anti-viral sanitizing service. Kills 99.9% of germs and viruses. Perfect for health-conscious households.", price: "£25 additional per room", category: "Carpet cleaning service" },
    { name: "Second Clean", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Site Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Sofa Cleaning London", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Special Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Special Occasions", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Special Treatments", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Specialised Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Spills And Stains", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Spot Treat", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Spot Treatment", description: "Targeted stain removal for wine, coffee, ink, and other common spills. Emergency same-day service available.", price: "£15 per stain", category: "Carpet cleaning service" },
    { name: "Spots And Stain Removal", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Spots Spots", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Spray Clean", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Stain Treatment", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Stain Washing", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Start Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Upholstered Furniture", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Vacuum Cleaner", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Vacuum Cleaning", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Vacuuming The Rug", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Window Treatments", description: "", price: "", category: "Carpet cleaning service" },
    { name: "Wool Carpets", description: "Specialized gentle cleaning treatment for delicate wool carpets using pH-balanced solutions that protect natural fibers.", price: "From £35 per room", category: "Carpet cleaning service" },
    { name: "Wool Rugs", description: "Expert care for wool rugs with natural, eco-friendly cleaning agents. Hand-brushed and air-dried for optimal results.", price: "From £50", category: "Carpet cleaning service" },
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
            <BusinessStats data={sampleData} reviews={sampleData.reviews} />
            <ReviewsSection 
              reviews={sampleData.reviews} 
              totalReviews={sampleData.review_count}
              allReviewsLink={sampleData.links.reviews}
            />
          <GMBImageGallery images={sampleData.images} />
          
          <GMBServicesSection services={sampleData.services} />
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
