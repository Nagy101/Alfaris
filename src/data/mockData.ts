// Mock data for Al-Faris Arabian Horse Farm

export interface Horse {
  id: string;
  name: string;
  breed: string;
  age: number;
  height: string;
  color: string;
  gender: 'Stallion' | 'Mare' | 'Gelding';
  price?: number;
  status: 'available' | 'sold' | 'not-for-sale';
  visibility: 'public' | 'hidden';
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
  category: 'tack' | 'apparel' | 'supplements' | 'accessories';
  image: string;
  description: string;
  inStock: boolean;
  stockCount: number;
}

export interface TimeSlot {
  id: string;
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
  available: boolean;
  instructor?: string;
}

export interface Service {
  id: string;
  type: 'lessons' | 'trips' | 'hospitality';
  name: string;
  description: string;
  weekdayPrice: number;
  weekendPrice: number;
  duration: string;
}

// Horse placeholders with Unsplash images
export const horses: Horse[] = [
  {
    id: 'h1',
    name: 'Al-Malik',
    breed: 'Arabian',
    age: 6,
    height: '15.2 hands',
    color: 'Bay',
    gender: 'Stallion',
    price: 85000,
    status: 'available',
    visibility: 'public',
    images: [
      'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800',
      'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800',
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800',
    ],
    description: 'A magnificent bay stallion with exceptional movement and presence. Al-Malik represents the finest Arabian bloodlines.',
    achievements: ['2024 National Champion', 'Reserve Supreme Champion 2023'],
    pedigree: {
      sire: { name: 'Sahadeen', sire: 'El Rasheed', dam: 'Bint Sahara' },
      dam: { name: 'Jamila Rose', sire: 'Desert Prince', dam: 'Rose of Sharon' },
    },
  },
  {
    id: 'h2',
    name: 'Desert Rose',
    breed: 'Arabian',
    age: 4,
    height: '14.3 hands',
    color: 'Grey',
    gender: 'Mare',
    price: 65000,
    status: 'available',
    visibility: 'public',
    images: [
      'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ],
    description: 'An elegant grey mare with exceptional conformation and gentle temperament.',
    achievements: ['Class A Winner 2023', 'Best Movement Award'],
    pedigree: {
      sire: { name: 'Silver Wind', sire: 'Storm Cloud', dam: 'Silver Belle' },
      dam: { name: 'Desert Jewel', sire: 'Arabian Knight', dam: 'Desert Star' },
    },
  },
  {
    id: 'h3',
    name: 'Sultan',
    breed: 'Arabian',
    age: 8,
    height: '15.1 hands',
    color: 'Chestnut',
    gender: 'Stallion',
    price: 120000,
    status: 'available',
    visibility: 'public',
    images: [
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
      'https://images.unsplash.com/photo-1460411794035-42aac080490a?w=800',
    ],
    description: 'Sultan is a proven sire with offspring excelling in both show ring and endurance.',
    achievements: ['World Champion 2022', 'Endurance Gold 2021'],
    pedigree: {
      sire: { name: 'Royal Prince', sire: 'King of Hearts', dam: 'Royal Lady' },
      dam: { name: 'Golden Dawn', sire: 'Sunrise', dam: 'Golden Girl' },
    },
  },
  {
    id: 'h4',
    name: 'Sahara Moon',
    breed: 'Arabian',
    age: 3,
    height: '14.2 hands',
    color: 'Black',
    gender: 'Mare',
    status: 'not-for-sale',
    visibility: 'public',
    images: [
      'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=800',
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800',
    ],
    description: 'A rare black Arabian mare with exceptional type and expression.',
    achievements: ['Junior Champion 2024'],
    pedigree: {
      sire: { name: 'Midnight Star', sire: 'Dark Knight', dam: 'Night Sky' },
      dam: { name: 'Sahara Queen', sire: 'Desert King', dam: 'Sahara Wind' },
    },
  },
  {
    id: 'h5',
    name: 'Phoenix',
    breed: 'Arabian',
    age: 5,
    height: '15.0 hands',
    color: 'Chestnut',
    gender: 'Gelding',
    price: 45000,
    status: 'available',
    visibility: 'public',
    images: [
      'https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=800',
    ],
    description: 'An athletic gelding perfect for experienced riders seeking a competitive partner.',
    achievements: ['Endurance Silver 2023'],
    pedigree: {
      sire: { name: 'Fire Storm', sire: 'Blaze', dam: 'Fire Dancer' },
      dam: { name: 'Rising Sun', sire: 'Dawn Patrol', dam: 'Morning Glory' },
    },
  },
  {
    id: 'h6',
    name: 'Jasmine',
    breed: 'Arabian',
    age: 7,
    height: '14.3 hands',
    color: 'Grey',
    gender: 'Mare',
    price: 55000,
    status: 'available',
    visibility: 'public',
    images: [
      'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800',
    ],
    description: 'A gentle soul with flowing movement, ideal for showing or breeding.',
    achievements: ['Best Movement 2022', 'Champion Mare 2021'],
    pedigree: {
      sire: { name: 'White Knight', sire: 'Sir Galahad', dam: 'White Rose' },
      dam: { name: 'Desert Flower', sire: 'Oasis', dam: 'Spring Bloom' },
    },
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Premium Leather Halter',
    price: 189,
    category: 'tack',
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=400',
    description: 'Hand-stitched leather halter with brass fittings',
    inStock: true,
    stockCount: 12,
  },
  {
    id: 'p2',
    name: 'Show Blanket - Gold Trim',
    price: 245,
    category: 'tack',
    image: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=400',
    description: 'Elegant show blanket with gold embroidery',
    inStock: true,
    stockCount: 8,
  },
  {
    id: 'p3',
    name: 'Riding Boots - Classic',
    price: 425,
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1460411794035-42aac080490a?w=400',
    description: 'Full-grain leather riding boots',
    inStock: true,
    stockCount: 15,
  },
  {
    id: 'p4',
    name: 'Equine Joint Supplement',
    price: 89,
    category: 'supplements',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400',
    description: 'Premium joint support formula - 30 day supply',
    inStock: true,
    stockCount: 25,
  },
  {
    id: 'p5',
    name: 'Brass Grooming Kit',
    price: 156,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400',
    description: 'Complete grooming set with brass handles',
    inStock: true,
    stockCount: 10,
  },
  {
    id: 'p6',
    name: 'Embroidered Polo Shirt',
    price: 95,
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=400',
    description: 'Al-Faris branded polo in cream or forest green',
    inStock: true,
    stockCount: 30,
  },
];

export const services: Service[] = [
  {
    id: 's1',
    type: 'lessons',
    name: 'Private Riding Lesson',
    description: 'One-on-one instruction with our expert trainers',
    weekdayPrice: 120,
    weekendPrice: 150,
    duration: '1 hour',
  },
  {
    id: 's2',
    type: 'lessons',
    name: 'Group Lesson',
    description: 'Learn alongside fellow enthusiasts (max 4 riders)',
    weekdayPrice: 75,
    weekendPrice: 95,
    duration: '1.5 hours',
  },
  {
    id: 's3',
    type: 'trips',
    name: 'Sunset Trail Ride',
    description: 'A magical journey through our scenic trails',
    weekdayPrice: 95,
    weekendPrice: 125,
    duration: '2 hours',
  },
  {
    id: 's4',
    type: 'trips',
    name: 'Full Day Adventure',
    description: 'Explore the countryside with lunch included',
    weekdayPrice: 250,
    weekendPrice: 295,
    duration: '6 hours',
  },
  {
    id: 's5',
    type: 'hospitality',
    name: 'VIP Farm Tour',
    description: 'Exclusive behind-the-scenes experience with champagne',
    weekdayPrice: 200,
    weekendPrice: 250,
    duration: '3 hours',
  },
  {
    id: 's6',
    type: 'hospitality',
    name: 'Private Event Hosting',
    description: 'Host your special occasion at our elegant facilities',
    weekdayPrice: 1500,
    weekendPrice: 2000,
    duration: '4 hours',
  },
];

export const timeSlots: TimeSlot[] = [
  { id: 't1', time: '8:00 AM', period: 'morning', available: true, instructor: 'Sarah' },
  { id: 't2', time: '9:30 AM', period: 'morning', available: true, instructor: 'Marcus' },
  { id: 't3', time: '11:00 AM', period: 'morning', available: false, instructor: 'Sarah' },
  { id: 't4', time: '1:00 PM', period: 'afternoon', available: true, instructor: 'Elena' },
  { id: 't5', time: '2:30 PM', period: 'afternoon', available: true, instructor: 'Marcus' },
  { id: 't6', time: '4:00 PM', period: 'afternoon', available: true, instructor: 'Sarah' },
  { id: 't7', time: '5:30 PM', period: 'evening', available: true, instructor: 'Elena' },
  { id: 't8', time: '7:00 PM', period: 'evening', available: false, instructor: 'Marcus' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Elizabeth Hartford',
    role: 'Horse Owner',
    quote: 'The care and attention at Al-Faris is unparalleled. My horses have never been happier.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 2,
    name: 'James Wellington',
    role: 'Competitive Rider',
    quote: 'Training here has elevated my riding to championship level. The staff are world-class.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'First-time Rider',
    quote: 'My first experience with horses was magical. The team made me feel safe and confident.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];
