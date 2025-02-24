import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Industrial() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 pb-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 pt-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Industrial Electrical Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Heavy-duty electrical solutions for your facility by {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black"
              onClick={() => window.location.href = `tel:${business?.basic_info.phone}`}
            >
              <Phone className="mr-2 h-5 w-5" />
              {business?.basic_info.phone || 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Industrial Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">High Voltage Systems</h3>
                  <p className="text-gray-600">Installation and maintenance of industrial-grade electrical systems.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Equipment Installation</h3>
                  <p className="text-gray-600">Expert installation of industrial machinery and equipment.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Power Distribution</h3>
                  <p className="text-gray-600">Efficient power distribution solutions for large facilities.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industrial Controls</h3>
                  <p className="text-gray-600">Advanced control systems for automated processes.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Industrial Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    24/7 emergency support
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    Experienced industrial technicians
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    Safety-first approach
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    Comprehensive maintenance plans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
