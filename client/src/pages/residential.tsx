import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Award, Home, Zap,
         Lightbulb, Activity, WifiIcon, ThermometerIcon, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Residential() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const [activeTab, setActiveTab] = useState('installation');

  // FAQs data - shortened
  const faqs = [
    {
      question: "How often should my home's electrical system be inspected?",
      answer: "We recommend a comprehensive electrical inspection every 3-5 years for homes less than 25 years old, and every 1-2 years for older homes. However, if you're experiencing issues like flickering lights, tripping breakers, or warm outlets, you should schedule an inspection immediately."
    },
    {
      question: "What are signs that I need to rewire my home?",
      answer: "Signs that indicate you may need rewiring include: frequent circuit breaker trips, burning smell around outlets or switches, discolored outlets, buzzing sounds from outlets, aluminum wiring (in homes built 1965-1973), lack of grounded outlets, and homes older than 40 years that haven't been rewired."
    },
    {
      question: "How long does a typical residential electrical installation take?",
      answer: "The timeframe varies based on the project scope. Simple installations like ceiling fans may take 1-2 hours, while rewiring an entire home could take 3-7 days. During your consultation, our electricians will provide a detailed timeline specific to your project."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 pt-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Residential Electrical Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Expert electrical solutions for your home by {business?.basic_info.name}
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
              <h2 className="text-3xl font-bold mb-6">Our Residential Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Electrical Installation</h3>
                  <p className="text-gray-600">Complete electrical system installations for new homes and renovations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Electrical Repairs</h3>
                  <p className="text-gray-600">Expert troubleshooting and repairs for all electrical issues.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lighting Solutions</h3>
                  <p className="text-gray-600">Modern lighting installation and upgrades for any room.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety Inspections</h3>
                  <p className="text-gray-600">Comprehensive electrical safety audits and maintenance.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose {business?.basic_info.name}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    24/7 emergency support
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    Upfront, transparent pricing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    100% satisfaction guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our residential electrical services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}