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
import { GMBProductsSection } from "@/components/GMBProductsSection";
import { GMBQASection } from "@/components/GMBQASection";
import GMBPostsSection from "@/components/GMBPostsSection";
import ReviewFrequencyChart from "@/components/ReviewFrequencyChart";
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
  products: [
    {
      id: "-8309482220366508092",
      name: "Amethyst Necklace",
      description: "Happy birthday to all of our February babies! This 14k white gold necklace boasts a 5.62ct oval amethyst as well as .41ctw of round brilliant cut diamonds. This pendant is perfect for anyone who loves to make a bright and colorful statement.",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XCIFSn-7y1FrCe7bCKaMBXgBdvAOQDJtlrBYJPvRt7qaDV5dBJqnYIzVR1826h6tVNr---UVUM4BxM525r3mPVuIQ",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-8309482220366508092",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "-2836232707872109235",
      name: "Heart Pendant",
      description: "Valentine's Day is here! This 14k white gold heart pendant is made up of .17 cts of round brilliant cut diamonds. This necklace is a beautiful way to let that special person in your life know that they have your heart.",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAuRKI6KBnIYW_EhaagpZHStztrRHxekzeR_-JGH9gbNSDck996kmn0_CuPOmpK03IeQCod4VsBXyKXZ7wI4q-Xuw",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-2836232707872109235",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "3836438590382249679",
      name: "Multi Color Sapphire and Diamond Baguette Pendant",
      description: "Chase away the winter blues with this multi color sapphire and diamond pendant. Set in 14k yellow gold with .12ct of baguette diamonds, this piece will add a pop of color to your every day wardrobe.",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XBIgskLx4BhMk3rOQabODKLvOxYkiXbmDxkdwdzrO3Ly7bqtZAejmdwh2XGbs5kNBAPsdVnkmoH0Xskq24weFAtuA",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=3836438590382249679",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "8433782160159805723",
      name: "Blue Sapphire Flower Pendant",
      description: "This 14k white gold pendant is made up of 2.10 carats of beautiful blue sapphires and round brilliant cut diamonds. A stunning piece to remind you that Spring is right around the corner!",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XCrgY0OuV2_qswCaO8NtmmQwD2L7_FsIWhfWrF2you7gifZLBxPsXAX2-Wbpwg5b7EvGOpFVhLz0PpxzM-s0V8Kdg",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=8433782160159805723",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "-4067767917384692012",
      name: "Diamond Pendant",
      description: "Here, we have an impressive ladies diamond necklace, which boasts .25 carat total weight of round, brilliant cut diamonds. This drop-style pendant is suspended from an 18\" 14K white gold chain. This charming piece will be sure to add sparkle to your holiday season!",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XBvP64t-xGsQPB5hFNzZa4L0BnYnSqXPeywua43HPoZs-FMLd1CA2usK28kqjSkQHVl5x0swHxPas4OM-f8SuuDVw",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-4067767917384692012",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "2480337038001911855",
      name: "Confetti Collection",
      description: "Summer is here which means no more layering of clothes, so lets layer our necklaces! These 2 new beauties are part of the confetti collection. Both are 14k white gold, one is set with diamonds while the other is set with multi color sapphires.",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XBEx-wpAZ4GGCbv3rQiC0rs8lMSc5xCjAIkDNkHj6BZrnRE5zG1U4VDlBurEwQ7-f-2r5lgP7ADRcWFm76Ft1P2cQ",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=2480337038001911855",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "2814976103048878581",
      name: "Custom Necklace",
      description: "Custom Monogram Necklace",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XDjlbt6z4Pp4bDP7zQj6HGz9fdqRnwMOQYceYGOPedfS9Iyu2VysMIUeO2PWu2omYEMLXjvyez4mdqOhYAfJjXSWQ",
      url: "",
      btn: "",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=2814976103048878581",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "-6326845978526059297",
      name: "Custom Diamond Pendant",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XBRhh8YojiQt-91rnXt04sex4JfQJN9HHprrKIMnvtL0yVJILKmp7_4vbbi1z48Nn5dzlYhmu8csFDH0EL64bAWWw",
      url: "https://barbaraoliverandco.com/pendants-gallery/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-6326845978526059297",
      collection_id: "379022455",
      collection_name: "Pendants",
      collection_description: ""
    },
    {
      id: "6320417207774489901",
      name: "Diamond Earrings",
      description: "Beautifully matched, the above cluster earrings carry a .72 carat total weight of near-colorless round, brilliant cut diamonds. These lovely earrings are made up of 14K white gold and will make any occasion special!",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XDguTBrhLPjF0W4gO5un4Ss5ltT5wKWrt6-eChVW-PibFsOKorzycgJzDTSQUauraaOS-xL2o4uGPb7z901ja_27g",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=6320417207774489901",
      collection_id: "739385651",
      collection_name: "Earrings",
      collection_description: ""
    },
    {
      id: "-278315832047905124",
      name: "Emerald Cut Diamond Earrings",
      description: "The stunning earrings showcase 1.31 carat total weight of beautiful emerald cut diamond set in 18k white gold. These earrings are sure to give you that little extra sparkle and shine we all love!",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAdlcvKB6MWrFYx-RcKVKFwcuQEOeqjJNUXwqJgvHqjg6z6Komj6G6SOrZE0-pE0b5iEOheXS53SO-S97QOJgV9jQ",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-278315832047905124",
      collection_id: "739385651",
      collection_name: "Earrings",
      collection_description: ""
    },
    {
      id: "6871615424937439910",
      name: "Marquis Dangle Earrings",
      description: "These perfectly matched marquis diamond earrings are 1.75 carat total weight and set in 14k white gold. These earrings are sure to make any night out a special night!",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XCm49WmhDctiL-YEkp5QAn9GmxI6VPPbHxw1bBvxm_E93hk04yyn7NHIYyOpJJbVdr1Xcs87Ku3DK61e0Z1qtl2NQ",
      url: "http://www.barbaraoliverjewelry.com/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=6871615424937439910",
      collection_id: "739385651",
      collection_name: "Earrings",
      collection_description: ""
    },
    {
      id: "-4779429887048919552",
      name: "Custom Rings",
      description: "Custom Mother's Ring Talk to Barbara about your custom design today! Call 716-204-1297",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XCQwGA3KyB2NOlWJHziEqmr3Gx90_b50TLFPBV6D6rg3EgjyrEuxczTitQ4_rEFWwYAbpc7DSgWOiBqWV7rNbh9kQ",
      url: "https://barbaraoliverandco.com/custom-jewelry-design/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-4779429887048919552",
      collection_id: "939669804",
      collection_name: "Custom Rings",
      collection_description: ""
    },
    {
      id: "-4517928176725427392",
      name: "Custom Ring",
      description: "Custom Diamond Leaf Design",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XC4mOL7qAteV4ytaWEAhebLo0Z0RbvYgSRoL0LFsw2IFaKNafUjdhQ3bfSc3imcPlO328FwzuuUnB3hebkCLAnovQ",
      url: "",
      btn: "",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-4517928176725427392",
      collection_id: "939669804",
      collection_name: "Custom Rings",
      collection_description: ""
    },
    {
      id: "6515119873915337334",
      name: "Custom Wedding Rings",
      description: "From grandma's heart to granddaughters' new custom wedding bands. See how your vintage jewelry can become your treasured heirloom - Call 716-204-1297.",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XASaNvSPNqCJRY_85U2cpCt9C0CjdncfcD-Sgg34HEPwkrkts-90u3o9ML24g9m_yn9zm34vqBrthTHV7PM5MvwPA",
      url: "",
      btn: "",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=6515119873915337334",
      collection_id: "939669804",
      collection_name: "Custom Rings",
      collection_description: ""
    },
    {
      id: "-5474675937794079655",
      name: "Custom Ring - Tulips & Music",
      description: "Call Barbara for Your Custom Design 716-204-1297",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAYLP2mCb-wTBR94TdOi22R1BDN9WJifZYbC312dNEa8K-6EPc8M_jRS2UX_4qvKru5CpbupCIPu_TCwKf4dkjOJA",
      url: "",
      btn: "",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-5474675937794079655",
      collection_id: "939669804",
      collection_name: "Custom Rings",
      collection_description: ""
    },
    {
      id: "1207897426149811229",
      name: "Custom Ring",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XBiV-RQHeWLqOC6J71zVINGNvki4o-3QTALAG4HHPIFpn63rMQnLqlsnFjZdDoIvwLPesPcYdvcfpO3wHGILMBG-w",
      url: "https://barbaraoliverandco.com/rings-gallery/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=1207897426149811229",
      collection_id: "939669804",
      collection_name: "Custom Rings",
      collection_description: ""
    },
    {
      id: "-7689722703997433154",
      name: "Custom Ring",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XDbpqvlDjSpimGOBVwWkJvcN-cdoZM6b3bT-8jxnV9uF8sihYorBl9U2jL_3xmrd4e-5UlwNyXxSbDa5CPLj8l02g",
      url: "https://barbaraoliverandco.com/rings-gallery/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-7689722703997433154",
      collection_id: "939669804",
      collection_name: "Custom Rings",
      collection_description: ""
    },
    {
      id: "5596246028526877896",
      name: "Stackable Rings",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAHAprBl_3eSiTZuuBmWBWpS0ZoO_HiYBvlL7D971pe8NA11rXVLUIGmxIngVxip-Xd1Q9Tah8hLlbz878-m957Rg",
      url: "",
      btn: "",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=5596246028526877896",
      collection_id: "78965795",
      collection_name: "Rings",
      collection_description: ""
    },
    {
      id: "1221883530543627332",
      name: "Bracelet",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAxxY4iaBK4r2zdrxy1n3gVmAgLriEcKVjl-EoFDjP2Pshuh8aAbSeTW3ZrBBbnA6ecS3CJBFWQwD7ZNYHni2q7YA",
      url: "https://barbaraoliverandco.com/bracelets-gallery/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=1221883530543627332",
      collection_id: "903395915",
      collection_name: "Bracelets",
      collection_description: ""
    },
    {
      id: "-3555059755495763551",
      name: "Custom Earrings/Bracelet Set",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XBSosOplrQ1l4wHUk3c71AQBZJuMyIZA2jHF7Pal5KBjxeuZCjkqvmjluoOXAWAeRuljJeAeJiEpk7YsRWidkao1A",
      url: "https://barbaraoliverandco.com/earrings-gallery/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=-3555059755495763551",
      collection_id: "1326398076",
      collection_name: "Custom Earrings",
      collection_description: ""
    },
    {
      id: "739072577167775811",
      name: "Diamond Engagement Ring",
      description: "",
      price: "",
      image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAHaY60favLUHrhQMVYKEnZpb2GLYAb9JmpXap-XQTr6c9TGG56a7Rr3gLIbPHPgLnZjJpTf8U2bt6lMT2fWb7PLQ",
      url: "https://barbaraoliverandco.com/engagement-rings-gallery/",
      btn: "Learn more",
      link_to_product: "https://www.google.com/search?q=42.964635%2C+-78.736418+Barbara+Oliver+Jewelry&ludocid=3291747407840809159&ie=UTF-8#ludocid=3291747407840809159&lpc=lpc&prid=739072577167775811",
      collection_id: "673763038",
      collection_name: "Engagement Rings",
      collection_description: ""
    }
  ],
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
  questions: [
    {
      user_name: "Mike Blumenthal",
      user_id: "114463183691836121484",
      question: "Does Barbara Oliver do custom jewelry design?",
      id: "AIe9_BFMK6FB7k24ANEBV5CospTTsZOMHlc7S9pPxoIsCTrfc6zQgoXKhXUXFVyJ1EkyGWQzAioFQij2PWLRBG2C5d-vtwobhpLy_Ey7hezz4zvEmg0xnrl-Uck5p_oD8Vumm4hzDnu2",
      answers: [
        {
          user_name: "Ashley Rizzo",
          user_id: "114764999785564232331",
          timestamp: 1586800312,
          time_text: "2 years ago",
          time: "2020-04-13 20:51:52",
          answer: "Yes. Barbara is both thoughtful and thorough when doing custom designs, and the results are always stunning!"
        },
        {
          user_name: "Scott Benedict",
          user_id: "105893003565839686499",
          timestamp: 1586800312,
          time_text: "2 years ago",
          time: "2020-04-13 20:51:52",
          answer: "Barbara does beautiful custom jewelry."
        }
      ]
    },
    {
      user_name: "Mike Blumenthal",
      user_id: "114463183691836121484",
      question: "Are you open during the Covid virus crisis?",
      id: "AIe9_BFMK6FB7k24ANEBV5CospTT1W7ba_n7Vm0w9ioPuKoT0mWv7panhSO3iYfxlBuC5ftO5VY2bwRaYYduu-sKoRzNTXiIwlKnqif-g3Bk1CODmvFp-0FHLA4lhXrFNqp3jMf2nQgv",
    },
    {
      user_name: "Barbara Oliver Jewelry (Owner)",
      question: "Do you custom design jewelry?",
      id: "AIe9_BFL0OZrFaHgoJtqifT1GHrILd7e9uYvMhsc7AgFgLWBlxU_eH-JDmuti8_1_G0xcdyugD4b1OhdlCAoc9yXjKg-DZuv6ZFCoWCjXaGfQPdBSeiiXhiTe2FovKFbG96P2r1vcK44",
      answers: [
        {
          user_name: "Keith Rowsey",
          user_id: "102952538073453398992",
          timestamp: 1523641914,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:54",
          answer: "Yes she does... Beautifully"
        },
        {
          user_name: "Barbara Oliver Jewelry (Owner)",
          timestamp: 1523641914,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:54",
          answer: "Absolutely! We would be honored to work with you and create a custom piece of jewelry that reflects your vision and desires. We will make it your signature piece, never to be duplicated again. Barbara is a graduate gemologist with 30 years of experience and has designed countless pieces."
        }
      ]
    },
    {
      user_name: "Barbara Oliver Jewelry (Owner)",
      question: "Do you do jewelry repairs?",
      id: "AIe9_BFL0OZrFaHgoJtqifT1GHrIDSlYLzsNgNF6BGZ0YkcBqcL2VhTTWJzEAoEE863Zsn6T6PPY_JG9PAgbG6Ux9BDiUTZ6teiHJT71yPabjd68Omi5GpzxmSpAssg1L8nGFiMcV73c",
      answers: [
        {
          user_name: "DaVinci 104.06",
          user_id: "112503871592848889715",
          timestamp: 1523641914,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:54",
          answer: "They do, and her work is very good. You are getting great customer service on top of your piece mended."
        },
        {
          user_name: "Barbara Oliver Jewelry (Owner)",
          timestamp: 1523641914,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:54",
          answer: "Yes, we do all types of jewelry repairs including ring resizing, replacing missing stones and more."
        }
      ]
    },
    {
      user_name: "Barbara Oliver Jewelry (Owner)",
      question: "Are you in an office building? Do you have parking?",
      id: "AIe9_BFL0OZrFaHgoJtqifT1GHrI-UdETQk2v7lMcVxK6JuBLezLcmuRrPbrOZGWcyqkEXNpOU5X9e1xU1m_5Edd5g589tl6SboW17YlbXN8HL9QBVuzVA9YfvpHmmlmq5wT48OLT0dW",
      answers: [
        {
          user_name: "Marissa Felser-Gilbert",
          user_id: "114148966474911618567",
          timestamp: 1523641914,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:54",
          answer: "Yes, she is located on the third floor of an office building.  There is a parking lot behind it."
        },
        {
          user_name: "Barbara Oliver Jewelry (Owner)",
          timestamp: 1523641914,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:54",
          answer: "Yes, we are on the third floor of the Caldwell Building. A large parking lot and the entrance are located at the back of the building."
        }
      ]
    },
    {
      user_name: "Barbara Oliver Jewelry (Owner)",
      question: "Do I need to leave my jewelry to be appraised?",
      id: "AIe9_BFL0OZrFaHgoJtqifT1GHrIkB8Io67iqzzd9_3YSjlob3bf167m2Hqns0Ag5TrCzMT_l6jovAqzzip2FuJ6h5hhZDfY3pYzKRNupe470OwRdh0RAhqwwyNdDtXCqS6InUqaBssx",
      answers: [
        {
          user_name: "Barbara Oliver Jewelry (Owner)",
          timestamp: 1523641915,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:55",
          answer: "Typically we do appraisals on the spot, so you don't have to leave your jewelry. There are some exceptions. For example, if you have numerous pieces for an estate that need to be appraised, we may ask you to leave those pieces. FYI: We are a walk-in shop, so we do appraisals in-between customers. If you can come during the week instead of Saturday, our busiest day, that would be greatly appreciated."
        }
      ]
    },
    {
      user_name: "Kryton Kryton",
      user_id: "115966726481870746721",
      question: "What is the charge for an appraisal?",
      id: "AIe9_BExcxslmE1rr7n5jMcadSKeQNzCAAQCFhFBL5tal4-t4wsdoFDXiddH6diTLYqNPdIerXl2PLdUT7MGKACbTxYBwkpYzfjiCXDE1eQM9EJ2DcQJj09MLiOWcJMWyn2LbzsuwKX-",
      answers: [
        {
          user_name: "Barbara Oliver Jewelry (Owner)",
          timestamp: 1523641915,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:55",
          answer: "If you would like a verbal review to determine how much a piece is worth or exactly what it is, we provide this as a complimentary service. If you need a written appraisal for insurance with complete documentation, there is a $45 charge per piec."
        }
      ]
    },
    {
      user_name: "Kryton Kryton",
      user_id: "115966726481870746721",
      question: "Can you resize my ring if I didn't buy it from you?",
      id: "AIe9_BExcxslmE1rr7n5jMcadSKe8704rNixvo8HHxIDxbNzykaHYjhDGd9mZ_xUbVAWqBTCavOq9dQD91nRj0TZ4rC8DowFZY9EV4c01b212VODzpCYSg_TVNr7YcEUHZp2vAjsRrbG",
      answers: [
        {
          user_name: "Barbara Oliver Jewelry (Owner)",
          timestamp: 1523641916,
          time_text: "4 years ago",
          time: "2018-04-13 20:51:56",
          answer: "Yes, we will gladly size your ring even if you didn't buy it from us."
        }
      ]
    }
  ],
  posts: [
    {
      id: "7927509188647564641",
      content: "Professional Carpet Cleaning Service - Get your carpets looking brand new! Book your appointment today.",
      post_img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      content_link: "https://example.com/contact/",
      content_link_text: "Book",
      timestamp: 1638800705,
      time_text: "4 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular",
      post_link: "https://search.google.com/local/posts"
    },
    {
      id: "7070573536014090451",
      content: "Professional Rugs Cleaning Service available today. Get your free Quotation!",
      post_img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop",
      content_link: "https://example.com/contact/",
      content_link_text: "Learn more",
      timestamp: 1648113680,
      time_text: "1 month ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "offer",
      post_link: "https://search.google.com/local/posts"
    },
    {
      id: "5240076691291523321",
      content: "Professional Sofa Cleaning Service! Transform your furniture with our expert cleaning.",
      post_img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"],
      content_link: "https://example.com/upholstery-cleaning/",
      content_link_text: "Learn more",
      timestamp: 1645724908,
      time_text: "2 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular",
      post_link: "https://search.google.com/local/posts"
    },
    {
      id: "599838117683680631",
      content: "Professional Sofa Cleaning Service - Expert care for all your upholstery needs.",
      post_img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=600&fit=crop",
      content_link: "https://example.com/contact/",
      content_link_text: "Book",
      timestamp: 1638800748,
      time_text: "4 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular",
      post_link: "https://search.google.com/local/posts"
    },
    {
      id: "post_5",
      content: "Spring Cleaning Special! Get 20% off all carpet cleaning services this month. Limited time offer.",
      post_img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop",
      content_link: "https://example.com/specials/",
      content_link_text: "Get Offer",
      timestamp: 1647500000,
      time_text: "1 month ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "offer",
      post_link: "https://search.google.com/local/posts"
    },
    {
      id: "post_6",
      content: "New Service Alert: We now offer commercial carpet cleaning for offices and retail spaces!",
      post_img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      content_link: "https://example.com/commercial/",
      content_link_text: "Learn more",
      timestamp: 1646800000,
      time_text: "2 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update",
      post_link: "https://search.google.com/local/posts"
    },
    {
      id: "post_7",
      content: "Pet Stain Removal Experts! Your carpets will look and smell fresh again. Safe for pets and children.",
      post_img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop",
      content_link: "https://example.com/pet-stain-removal/",
      content_link_text: "Shop Now",
      timestamp: 1646200000,
      time_text: "2 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_8",
      content: "Customer Appreciation Week! Book any service and get a free room cleaned. Thank you for your loyalty!",
      post_img: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=800&h=600&fit=crop",
      content_link: "https://example.com/book/",
      content_link_text: "Book",
      timestamp: 1645600000,
      time_text: "3 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "event"
    },
    {
      id: "post_9",
      content: "Deep Steam Cleaning - The most effective way to remove dirt and allergens from your carpets.",
      post_img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      content_link: "https://example.com/services/",
      content_link_text: "Learn more",
      timestamp: 1645000000,
      time_text: "3 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_10",
      content: "Holiday Special: Book before the holidays and save! Make your home sparkle for guests.",
      post_img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop",
      content_link: "https://example.com/holiday-special/",
      content_link_text: "Get Offer",
      timestamp: 1644400000,
      time_text: "3 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "offer"
    },
    {
      id: "post_11",
      content: "Eco-Friendly Cleaning Solutions - Safe for your family and the environment!",
      post_img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      content_link: "https://example.com/eco-friendly/",
      content_link_text: "Learn more",
      timestamp: 1643800000,
      time_text: "4 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_12",
      content: "Tile and Grout Cleaning - Restore your floors to their original beauty!",
      post_img: "https://images.unsplash.com/photo-1581404554910-ea2e67e0c5db?w=800&h=600&fit=crop",
      content_link: "https://example.com/tile-cleaning/",
      content_link_text: "Book",
      timestamp: 1643200000,
      time_text: "4 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_13",
      content: "Same Day Service Available! Need urgent cleaning? We've got you covered.",
      post_img: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&h=600&fit=crop",
      content_link: "https://example.com/same-day/",
      content_link_text: "Book Now",
      timestamp: 1642600000,
      time_text: "4 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_14",
      content: "Area Rug Specialists - From Oriental to modern rugs, we handle them all with care.",
      post_img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      content_link: "https://example.com/area-rugs/",
      content_link_text: "Learn more",
      timestamp: 1642000000,
      time_text: "5 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_15",
      content: "Free Estimates! Contact us today for a no-obligation quote on any cleaning service.",
      post_img: "https://images.unsplash.com/photo-1554224311-beee2b9c8a8d?w=800&h=600&fit=crop",
      content_link: "https://example.com/estimate/",
      content_link_text: "Get Quote",
      timestamp: 1641400000,
      time_text: "5 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_16",
      content: "Odor Removal Experts - Eliminate stubborn smells with our advanced treatment process.",
      post_img: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&h=600&fit=crop",
      content_link: "https://example.com/odor-removal/",
      content_link_text: "Learn more",
      timestamp: 1640800000,
      time_text: "5 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_17",
      content: "Join Our Loyalty Program - Earn points with every service and save on future cleanings!",
      post_img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
      content_link: "https://example.com/loyalty/",
      content_link_text: "Sign Up",
      timestamp: 1640200000,
      time_text: "5 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_18",
      content: "Mattress Cleaning Service - Sleep better with a professionally cleaned mattress.",
      post_img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      content_link: "https://example.com/mattress/",
      content_link_text: "Book",
      timestamp: 1639600000,
      time_text: "6 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_19",
      content: "Water Damage Restoration - 24/7 emergency response for flooding and water damage.",
      post_img: "https://images.unsplash.com/photo-1584622650653-82c89635c286?w=800&h=600&fit=crop",
      content_link: "https://example.com/water-damage/",
      content_link_text: "Call Now",
      timestamp: 1639000000,
      time_text: "6 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_20",
      content: "Stair Carpet Cleaning - Specialized equipment for hard-to-reach areas.",
      post_img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      content_link: "https://example.com/stairs/",
      content_link_text: "Learn more",
      timestamp: 1638400000,
      time_text: "6 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_21",
      content: "Auto Upholstery Cleaning - Keep your car interior looking and smelling fresh!",
      post_img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      content_link: "https://example.com/auto/",
      content_link_text: "Book",
      timestamp: 1637800000,
      time_text: "6 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_22",
      content: "Move-In/Move-Out Cleaning Special - Get your deposit back with our thorough cleaning!",
      post_img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      content_link: "https://example.com/move-out/",
      content_link_text: "Get Offer",
      timestamp: 1637200000,
      time_text: "6 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "offer"
    },
    {
      id: "post_23",
      content: "Certified Technicians - All our staff are trained and certified in the latest cleaning methods.",
      post_img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
      content_link: "https://example.com/about/",
      content_link_text: "Learn more",
      timestamp: 1636600000,
      time_text: "7 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_24",
      content: "Allergen Reduction Treatment - Breathe easier with our special allergen removal process.",
      post_img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop",
      content_link: "https://example.com/allergens/",
      content_link_text: "Learn more",
      timestamp: 1636000000,
      time_text: "7 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_25",
      content: "Family Business - Serving the community for over 20 years with quality and integrity.",
      post_img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      content_link: "https://example.com/about/",
      content_link_text: "Our Story",
      timestamp: 1635400000,
      time_text: "7 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_26",
      content: "Leather Furniture Cleaning - Preserve and protect your valuable leather pieces.",
      post_img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&h=600&fit=crop",
      content_link: "https://example.com/leather/",
      content_link_text: "Book",
      timestamp: 1634800000,
      time_text: "7 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_27",
      content: "Scotchgard Protection - Add a protective layer to keep your carpets cleaner longer!",
      post_img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop",
      content_link: "https://example.com/protection/",
      content_link_text: "Learn more",
      timestamp: 1634200000,
      time_text: "8 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_28",
      content: "Weekend Appointments Available - We work around your schedule!",
      post_img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
      content_link: "https://example.com/booking/",
      content_link_text: "Book",
      timestamp: 1633600000,
      time_text: "8 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_29",
      content: "Before & After Gallery - See the amazing results we achieve for our customers!",
      post_img: "https://images.unsplash.com/photo-1565374195076-b6df4e8b4388?w=800&h=600&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1565374195076-b6df4e8b4388?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop"],
      content_link: "https://example.com/gallery/",
      content_link_text: "View Gallery",
      timestamp: 1633000000,
      time_text: "8 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_30",
      content: "Custom Cleaning Plans - Every home is unique. Let us create a plan that fits your needs.",
      post_img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      content_link: "https://example.com/custom/",
      content_link_text: "Learn more",
      timestamp: 1632400000,
      time_text: "8 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_31",
      content: "Color Restoration - Bring faded carpets back to life with our color restoration service.",
      post_img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      content_link: "https://example.com/restoration/",
      content_link_text: "Learn more",
      timestamp: 1631800000,
      time_text: "9 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_32",
      content: "Residential & Commercial - No job too big or small. We handle all types of properties.",
      post_img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      content_link: "https://example.com/services/",
      content_link_text: "Our Services",
      timestamp: 1631200000,
      time_text: "9 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_33",
      content: "Quick Dry Technology - Most carpets dry in just 2-4 hours!",
      post_img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
      content_link: "https://example.com/technology/",
      content_link_text: "Learn more",
      timestamp: 1630600000,
      time_text: "9 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_34",
      content: "Gift Certificates Available - The perfect gift for any homeowner!",
      post_img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop",
      content_link: "https://example.com/gift-cards/",
      content_link_text: "Buy Now",
      timestamp: 1630000000,
      time_text: "9 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "offer"
    },
    {
      id: "post_35",
      content: "Hardwood Floor Cleaning - Gentle yet effective cleaning for all types of hardwood.",
      post_img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      content_link: "https://example.com/hardwood/",
      content_link_text: "Book",
      timestamp: 1629400000,
      time_text: "10 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_36",
      content: "5-Star Reviews - Join hundreds of satisfied customers! Check out our testimonials.",
      post_img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      content_link: "https://example.com/reviews/",
      content_link_text: "Read Reviews",
      timestamp: 1628800000,
      time_text: "10 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_37",
      content: "Seasonal Maintenance Plans - Keep your home fresh year-round with our subscription service.",
      post_img: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=800&h=600&fit=crop",
      content_link: "https://example.com/maintenance/",
      content_link_text: "Sign Up",
      timestamp: 1628200000,
      time_text: "10 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_38",
      content: "Smoke Damage Cleaning - Restore your home after fire or smoke damage.",
      post_img: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&h=600&fit=crop",
      content_link: "https://example.com/smoke-damage/",
      content_link_text: "Emergency Service",
      timestamp: 1627600000,
      time_text: "10 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_39",
      content: "Green Cleaning Certification - Proud to use environmentally responsible products and methods.",
      post_img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
      content_link: "https://example.com/green/",
      content_link_text: "Learn more",
      timestamp: 1627000000,
      time_text: "11 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_40",
      content: "Drapery & Curtain Cleaning - Professional cleaning for all window treatments.",
      post_img: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?w=800&h=600&fit=crop",
      content_link: "https://example.com/drapery/",
      content_link_text: "Book",
      timestamp: 1626400000,
      time_text: "11 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_41",
      content: "Senior Citizen Discount - 15% off for seniors! Ask about our special rates.",
      post_img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      content_link: "https://example.com/discounts/",
      content_link_text: "Get Discount",
      timestamp: 1625800000,
      time_text: "11 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "offer"
    },
    {
      id: "post_42",
      content: "Spot Cleaning Tips - Learn how to handle small spills before they become stains!",
      post_img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      content_link: "https://example.com/blog/tips/",
      content_link_text: "Read More",
      timestamp: 1625200000,
      time_text: "11 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_43",
      content: "Van Equipment Tour - See the professional equipment we use for superior results!",
      post_img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
      content_link: "https://example.com/equipment/",
      content_link_text: "Watch Video",
      timestamp: 1624600000,
      time_text: "12 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_44",
      content: "Wine & Coffee Stain Removal - We've seen it all and can remove the toughest stains!",
      post_img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
      content_link: "https://example.com/stain-removal/",
      content_link_text: "Learn more",
      timestamp: 1624000000,
      time_text: "12 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_45",
      content: "New Location Opening Soon - Expanding to serve you better! Stay tuned for details.",
      post_img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop",
      content_link: "https://example.com/news/",
      content_link_text: "Read More",
      timestamp: 1623400000,
      time_text: "12 months ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "event"
    },
    {
      id: "post_46",
      content: "Insurance Claims Assistance - We work directly with insurance companies for damage claims.",
      post_img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      content_link: "https://example.com/insurance/",
      content_link_text: "Learn more",
      timestamp: 1622800000,
      time_text: "1 year ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_47",
      content: "Customer Safety First - All our technicians are background checked and insured.",
      post_img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      content_link: "https://example.com/safety/",
      content_link_text: "Learn more",
      timestamp: 1622200000,
      time_text: "1 year ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_48",
      content: "Post-Construction Cleaning - Remove dust and debris after renovation or construction work.",
      post_img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      content_link: "https://example.com/construction/",
      content_link_text: "Book",
      timestamp: 1621600000,
      time_text: "1 year ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    },
    {
      id: "post_49",
      content: "Flexible Payment Options - We accept all major credit cards and offer financing!",
      post_img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      content_link: "https://example.com/payment/",
      content_link_text: "Learn more",
      timestamp: 1621000000,
      time_text: "1 year ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "update"
    },
    {
      id: "post_50",
      content: "Thank You to Our Loyal Customers - Celebrating another great year serving the community!",
      post_img: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop",
      content_link: "https://example.com/about/",
      content_link_text: "Our Story",
      timestamp: 1620400000,
      time_text: "1 year ago",
      user_name: "Premium Carpet Cleaning",
      post_type: "regular"
    }
  ]
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
            <GMBQASection questions={sampleData.questions} />
            <GMBImageGallery images={sampleData.images} />
          
          <GMBServicesSection services={sampleData.services} />
          
          <GMBProductsSection products={sampleData.products} />
          
          <GMBPostsSection posts={sampleData.posts} />
        </div>

          <div className="space-y-6">
            <GoogleMapsEmbed embedUrl={sampleData.embed_url} businessName={sampleData.name} />
            <GoogleLinks links={sampleData.links} />
            
            <ReviewFrequencyChart reviews={sampleData.reviews} />
            
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
