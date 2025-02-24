import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Award, Building2, Zap, 
         Lightbulb, Activity, PieChart, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Commercial() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const [activeTab, setActiveTab] = useState('installation');

  const faqs = [
    {
      question: "What types of commercial properties do you service?",
      answer: "We service all types of commercial properties including offices, retail spaces, restaurants, warehouses, manufacturing facilities, schools, healthcare facilities, and multi-unit residential buildings."
    },
    {
      question: "How do you minimize disruption to our business operations?",
      answer: "We understand that electrical work can impact your business operations. We offer flexible scheduling including nights and weekends, carefully plan work to minimize impact on critical areas, and maintain clear communication throughout the project."
    },
    {
      question: "Do you handle commercial electrical code compliance?",
      answer: "Absolutely. Our licensed commercial electricians are thoroughly versed in National Electrical Code (NEC) requirements as well as state and local regulations specific to commercial properties."
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1590959651373-a3db0f38c961?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 pt-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Commercial Electrical Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Expert electrical solutions for your business by {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}. 
              Minimizing downtime and maximizing efficiency for commercial facilities.
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
              <h2 className="text-3xl font-bold mb-6">Our Commercial Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office & Retail</h3>
                  <p className="text-gray-600">Complete electrical systems for commercial spaces including lighting, power distribution, and data infrastructure.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industrial & Manufacturing</h3>
                  <p className="text-gray-600">Heavy-duty electrical solutions for manufacturing facilities and industrial applications.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Management</h3>
                  <p className="text-gray-600">Smart energy solutions to reduce costs and improve efficiency.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety & Compliance</h3>
                  <p className="text-gray-600">Regular inspections and maintenance to ensure code compliance.</p>
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
              Get answers to common questions about our commercial electrical services.
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