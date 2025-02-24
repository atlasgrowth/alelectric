import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type BusinessData } from "@shared/schema"
import { businessDataSchema } from "@shared/schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to safely convert to number
function safeParseFloat(value: any): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return !isNaN(parsed) ? parsed : undefined;
  }
  return undefined;
}

interface RawBusinessData {
  name: string;
  phone: string;
  city?: string;
  rating?: string | number;
  latitude?: string | number;
  longitude?: string | number;
  reviews?: string;
  reviews_link?: string;
  s: string;
}

export const getBusinessData = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const businessId = urlParams.get('s');

  if (!businessId) {
    throw new Error('Please provide a business ID in the URL using the "s" parameter');
  }

  try {
    // Fetch both business data and reviews
    const [businessResponse, reviewsResponse] = await Promise.all([
      fetch('https://raw.githubusercontent.com/atlasgrowth/alabamaelectric/main/electricians.json'),
      fetch('https://raw.githubusercontent.com/atlasgrowth/alabamaelectric/main/electricians_with_reviews.json')
    ]);

    if (!businessResponse.ok || !reviewsResponse.ok) {
      throw new Error(`Failed to load data: ${businessResponse.status} ${reviewsResponse.status}`);
    }

    const [rawData, reviewsData] = await Promise.all([
      businessResponse.json() as Promise<Record<string, RawBusinessData>>,
      reviewsResponse.json() as Promise<Record<string, { reviews: Array<{ text: string; reviewer_name: string; date: string }> }>>
    ]);

    // Find the business by the 's' parameter
    const businessEntries = Object.entries(rawData);
    const business = businessEntries.find(([_, value]) => 
      value.s === businessId
    );

    if (!business) {
      throw new Error('Business not found');
    }

    const [_, data] = business;

    // Get reviews for this business
    const businessReviews = reviewsData[businessId]?.reviews || [];

    // Transform the data to match our schema
    const normalizedData = {
      basic_info: {
        name: data.name,
        phone: data.phone,
        city: data.city || undefined,
        rating: safeParseFloat(data.rating),
        latitude: safeParseFloat(data.latitude),
        longitude: safeParseFloat(data.longitude),
        working_hours: {},
      },
      five_star_reviews: businessReviews.length > 0 
        ? businessReviews.map(review => ({
            text: review.text,
            reviewer_name: review.reviewer_name,
            date: review.date,
          }))
        : data.reviews 
          ? [{
              text: data.reviews_link ? "View our reviews on Google" : "Great service and professional work",
              reviewer_name: "Customer Review",
              date: new Date().toISOString(),
            }]
          : undefined,
      social_media: {
        facebook: "",
        instagram: "",
        reviews_link: data.reviews_link
      }
    };

    const parsed = businessDataSchema.safeParse(normalizedData);

    if (!parsed.success) {
      console.error('Data validation error:', parsed.error);
      throw new Error('Invalid business data format');
    }

    return parsed.data;
  } catch (error) {
    console.error('Error fetching business data:', error);
    throw error;
  }
}