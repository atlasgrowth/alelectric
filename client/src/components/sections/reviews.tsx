import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Star } from "lucide-react";

export function Reviews() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const reviews = business?.five_star_reviews || [];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about {business?.basic_info.name}'s electrical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-100 mb-4">"{review.text}"</p>
              <p className="text-gray-300 font-semibold">{review.reviewer_name}</p>
              {review.date && (
                <p className="text-gray-400 text-sm">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>

        {business?.social_media?.reviews_link && (
          <div className="text-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open(business.social_media.reviews_link, '_blank')}
            >
              Read More Reviews on Google
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}