// Mock data for Al-Faris Arabian Horse Farm

export interface Horse {
  id: string;
  name: string;
  breed: string;
  age: number;
  height: string;
  color: string;
  gender: "Stallion" | "Mare" | "Gelding";
  price?: number;
  status: "available" | "sold" | "not-for-sale";
  visibility: "public" | "hidden";
  images: string[];
  description: string;
  achievements: string[];
  pedigree: {
    sire: { name: string; sire?: string; dam?: string };
    dam: { name: string; sire?: string; dam?: string };
  };
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: "food" | "tack" | "grooming" | "stable" | "apparel";
  image: string;
  description: string;
  inStock: boolean;
  stockCount: number;
}

export interface TimeSlot {
  id: string;
  time: string;
  period: "morning" | "afternoon" | "evening";
  available: boolean;
  instructor?: string;
}

export interface Service {
  id: string;
  type: "lessons" | "trips" | "hospitality";
  name: string;
  description: string;
  weekdayPrice: number;
  weekendPrice: number;
  duration: string;
}

// Horse placeholders with Unsplash images
export const horses: Horse[] = [
  {
    id: "h1",
    name: "Al-Malik",
    breed: "Arabian",
    age: 6,
    height: "15.2 hands",
    color: "Bay",
    gender: "Stallion",
    price: 85000,
    status: "available",
    visibility: "public",
    images: [
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800",
      "https://wildjolie.com/cdn/shop/articles/16_Most_Beautiful_Horse_in_the_World.jpg?crop=center&height=2048&v=1740021416&width=2048",
    ],
    description:
      "A magnificent bay stallion with exceptional movement and presence. Al-Malik represents the finest Arabian bloodlines.",
    achievements: ["2024 National Champion", "Reserve Supreme Champion 2023"],
    pedigree: {
      sire: { name: "Sahadeen", sire: "El Rasheed", dam: "Bint Sahara" },
      dam: {
        name: "Jamila Rose",
        sire: "Desert Prince",
        dam: "Rose of Sharon",
      },
    },
  },
  {
    id: "h2",
    name: "Desert Rose",
    breed: "Arabian",
    age: 4,
    height: "14.3 hands",
    color: "Grey",
    gender: "Mare",
    price: 65000,
    status: "available",
    visibility: "public",
    images: [
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=800",
      "data:image/jpeg;base64,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",
    ],
    description:
      "An elegant grey mare with exceptional conformation and gentle temperament.",
    achievements: ["Class A Winner 2023", "Best Movement Award"],
    pedigree: {
      sire: { name: "Silver Wind", sire: "Storm Cloud", dam: "Silver Belle" },
      dam: { name: "Desert Jewel", sire: "Arabian Knight", dam: "Desert Star" },
    },
  },
  {
    id: "h3",
    name: "Sultan",
    breed: "Arabian",
    age: 8,
    height: "15.1 hands",
    color: "Chestnut",
    gender: "Stallion",
    price: 120000,
    status: "available",
    visibility: "public",
    images: [
      "https://www.breyerhorses.com/cdn/shop/articles/friesian-450810_700x700_crop_center.jpg?v=1563488308",
      "https://i.pinimg.com/474x/23/bd/c0/23bdc047b5bcfe46a679b6944af3a4d1.jpg",
    ],
    description:
      "Sultan is a proven sire with offspring excelling in both show ring and endurance.",
    achievements: ["World Champion 2022", "Endurance Gold 2021"],
    pedigree: {
      sire: { name: "Royal Prince", sire: "King of Hearts", dam: "Royal Lady" },
      dam: { name: "Golden Dawn", sire: "Sunrise", dam: "Golden Girl" },
    },
  },
  {
    id: "h4",
    name: "Sahara Moon",
    breed: "Arabian",
    age: 3,
    height: "14.2 hands",
    color: "Black",
    gender: "Mare",
    status: "not-for-sale",
    visibility: "public",
    images: [
      "https://cdn.mos.cms.futurecdn.net/7GMUTwZBpjtGHCN2dbjMQe-1920-80.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcbtCF9Zcn5OlHDT8bssufkt0iC9o3OCZEA&s",
    ],
    description:
      "A rare black Arabian mare with exceptional type and expression.",
    achievements: ["Junior Champion 2024"],
    pedigree: {
      sire: { name: "Midnight Star", sire: "Dark Knight", dam: "Night Sky" },
      dam: { name: "Sahara Queen", sire: "Desert King", dam: "Sahara Wind" },
    },
  },
  {
    id: "h5",
    name: "Phoenix",
    breed: "Arabian",
    age: 5,
    height: "15.0 hands",
    color: "Chestnut",
    gender: "Gelding",
    price: 45000,
    status: "available",
    visibility: "public",
    images: [
      "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=800",
    ],
    description:
      "An athletic gelding perfect for experienced riders seeking a competitive partner.",
    achievements: ["Endurance Silver 2023"],
    pedigree: {
      sire: { name: "Fire Storm", sire: "Blaze", dam: "Fire Dancer" },
      dam: { name: "Rising Sun", sire: "Dawn Patrol", dam: "Morning Glory" },
    },
  },
  {
    id: "h6",
    name: "Jasmine",
    breed: "Arabian",
    age: 7,
    height: "14.3 hands",
    color: "Grey",
    gender: "Mare",
    price: 55000,
    status: "available",
    visibility: "public",
    images: [
      "https://s3.amazonaws.com/wp-s3-thehorse.com/wp-content/uploads/2017/09/22200722/chestnut-horse-playing-in-paddock-1024x683.jpg",
    ],
    description:
      "A gentle soul with flowing movement, ideal for showing or breeding.",
    achievements: ["Best Movement 2022", "Champion Mare 2021"],
    pedigree: {
      sire: { name: "White Knight", sire: "Sir Galahad", dam: "White Rose" },
      dam: { name: "Desert Flower", sire: "Oasis", dam: "Spring Bloom" },
    },
  },
];

export const products: Product[] = [
  // Horse Food & Supplements
  {
    id: "p2",
    name: "Equine Joint Support",
    price: 89,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    description:
      "Advanced formula with glucosamine and chondroitin for joint health",
    inStock: true,
    stockCount: 45,
  },
  {
    id: "p3",
    name: "Daily Vitamin Pack",
    price: 65,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    description: "Complete vitamin and mineral supplement for daily nutrition",
    inStock: true,
    stockCount: 60,
  },
  {
    id: "p8",
    name: "Western Show Saddle",
    price: 2400,
    category: "tack",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
    description: "Ornate western saddle with silver accents and tooled leather",
    inStock: true,
    stockCount: 3,
  },
  {
    id: "p9",
    name: "Premium Leather Bridle",
    price: 189,
    category: "tack",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=600&q=80",
    description: "Hand-stitched bridle with brass fittings",
    inStock: true,
    stockCount: 12,
  },
  {
    id: "p10",
    name: "Gel Saddle Pad",
    price: 125,
    category: "tack",
    image:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&q=80",
    description: "Shock-absorbing gel pad with breathable cover",
    inStock: true,
    stockCount: 20,
  },
  {
    id: "p12",
    name: "Leather Riding Reins",
    price: 95,
    category: "tack",
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=600&q=80",
    description: "Premium leather reins with rubber grip",
    inStock: true,
    stockCount: 18,
  },
  
  {
    id: "p15",
    name: "Rubber Curry Brush",
    price: 18,
    category: "grooming",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
    description: "Flexible rubber brush for coat cleaning and massage",
    inStock: true,
    stockCount: 60,
  },
  {
    id: "p16",
    name: "Mane & Tail Detangler",
    price: 24,
    category: "grooming",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=600&q=80",
    description: "Professional spray for tangle-free manes and tails",
    inStock: true,
    stockCount: 40,
  },
  {
    id: "p17",
    name: "Deluxe Grooming Box",
    price: 85,
    category: "grooming",
    image:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&q=80",
    description: "Durable wooden grooming box with compartments",
    inStock: true,
    stockCount: 15,
  },
 

  // Stable Accessories
  {
    id: "p19",
    name: "Stable Blanket - Quilted",
    price: 185,
    category: "stable",
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=600&q=80",
    description: "Warm quilted blanket for cool weather protection",
    inStock: true,
    stockCount: 22,
  },
  {
    id: "p22",
    name: "Rubber Stall Mat",
    price: 75,
    category: "stable",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
    description: "Heavy-duty rubber mat for comfort and easy cleaning",
    inStock: true,
    stockCount: 50,
  },
  {
    id: "p23",
    name: "Stable Name Plate - Brass",
    price: 45,
    category: "stable",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=600&q=80",
    description: "Engraved brass nameplate for stall doors",
    inStock: true,
    stockCount: 30,
  },
  {
    id: "p24",
    name: "LED Stable Light",
    price: 68,
    category: "stable",
    image:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&q=80",
    description: "Energy-efficient LED lighting for stables",
    inStock: true,
    stockCount: 25,
  },

  // Apparel
  {
    id: "p25",
    name: "Tall Riding Boots",
    price: 425,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80",
    description: "Full-grain leather riding boots with zipper",
    inStock: true,
    stockCount: 15,
  },
  {
    id: "p26",
    name: "Riding Helmet - Ventilated",
    price: 189,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=600&q=80",
    description: "Safety-certified helmet with adjustable fit",
    inStock: true,
    stockCount: 20,
  },
 
  {
    id: "p29",
    name: "Competition Breeches",
    price: 145,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
    description: "Stretch fabric breeches with silicone knee patches",
    inStock: true,
    stockCount: 28,
  },
  {
    id: "p30",
    name: "Show Jacket - Navy",
    price: 285,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=600&q=80",
    description: "Tailored show jacket with satin lining",
    inStock: true,
    stockCount: 12,
  },
];

export const services: Service[] = [
  {
    id: "s1",
    type: "lessons",
    name: "Private Riding Lesson",
    description: "One-on-one instruction with our expert trainers",
    weekdayPrice: 120,
    weekendPrice: 150,
    duration: "1 hour",
  },
  {
    id: "s2",
    type: "lessons",
    name: "Group Lesson",
    description: "Learn alongside fellow enthusiasts (max 4 riders)",
    weekdayPrice: 75,
    weekendPrice: 95,
    duration: "1.5 hours",
  },
  {
    id: "s3",
    type: "trips",
    name: "Sunset Trail Ride",
    description: "A magical journey through our scenic trails",
    weekdayPrice: 95,
    weekendPrice: 125,
    duration: "2 hours",
  },
  {
    id: "s4",
    type: "trips",
    name: "Full Day Adventure",
    description: "Explore the countryside with lunch included",
    weekdayPrice: 250,
    weekendPrice: 295,
    duration: "6 hours",
  },
  {
    id: "s5",
    type: "hospitality",
    name: "VIP Farm Tour",
    description: "Exclusive behind-the-scenes experience with champagne",
    weekdayPrice: 200,
    weekendPrice: 250,
    duration: "3 hours",
  },
  {
    id: "s6",
    type: "hospitality",
    name: "Private Event Hosting",
    description: "Host your special occasion at our elegant facilities",
    weekdayPrice: 1500,
    weekendPrice: 2000,
    duration: "4 hours",
  },
];

export const timeSlots: TimeSlot[] = [
  {
    id: "t1",
    time: "8:00 AM",
    period: "morning",
    available: true,
    instructor: "Sarah",
  },
  {
    id: "t2",
    time: "9:30 AM",
    period: "morning",
    available: true,
    instructor: "Marcus",
  },
  {
    id: "t3",
    time: "11:00 AM",
    period: "morning",
    available: false,
    instructor: "Sarah",
  },
  {
    id: "t4",
    time: "1:00 PM",
    period: "afternoon",
    available: true,
    instructor: "Elena",
  },
  {
    id: "t5",
    time: "2:30 PM",
    period: "afternoon",
    available: true,
    instructor: "Marcus",
  },
  {
    id: "t6",
    time: "4:00 PM",
    period: "afternoon",
    available: true,
    instructor: "Sarah",
  },
  {
    id: "t7",
    time: "5:30 PM",
    period: "evening",
    available: true,
    instructor: "Elena",
  },
  {
    id: "t8",
    time: "7:00 PM",
    period: "evening",
    available: false,
    instructor: "Marcus",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Elizabeth Hartford",
    role: "Horse Owner",
    quote:
      "The care and attention at Al-Faris is unparalleled. My horses have never been happier.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    id: 2,
    name: "James Wellington",
    role: "Competitive Rider",
    quote:
      "Training here has elevated my riding to championship level. The staff are world-class.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "First-time Rider",
    quote:
      "My first experience with horses was magical. The team made me feel safe and confident.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
];
