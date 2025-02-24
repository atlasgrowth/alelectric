import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Clock, 
  Shield, 
  Award, 
  Zap,
  Lightbulb, 
  Activity, 
  Wifi as WifiIcon, 
  ThermometerSun,
  CheckCircle2 
} from "lucide-react";
import { useState } from "react";

export default function Residential() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

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

      {/* Modern Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
              <p className="text-primary-foreground font-medium text-sm">RESIDENTIAL SERVICES</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Expert Electrical <br/>
              <span className="text-primary">Solutions</span> for Your Home
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional electrical services by {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}. 
              Delivering safety, reliability, and excellence to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.location.href = `tel:${business?.basic_info.phone}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black"
              >
                Get Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/90">24/7 Service</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/90">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-1 rounded-full mb-4">
              <p className="text-primary font-medium text-sm">OUR SERVICES</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Home <span className="text-primary">Electrical</span> Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From simple repairs to complete electrical system installations, our expert team provides a full range of residential services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <Zap className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Electrical Installation</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Complete wiring solutions for new constructions, renovations, and additions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  New construction wiring
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Panel upgrades
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Circuit installations
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <Lightbulb className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lighting Solutions</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Modern lighting installation and upgrades for enhanced ambiance and efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  LED lighting upgrades
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Smart lighting controls
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Outdoor lighting
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <WifiIcon className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Home Integration</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Advanced automation and control systems for modern living.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Smart device installation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Home automation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Security integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/10 px-4 py-1 inline-block rounded-full mb-4">
                <p className="text-primary font-medium text-sm">WHY CHOOSE US</p>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Expert Electrical Services <br/>You Can Trust
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                When it comes to your home's electrical needs, quality and safety are paramount. Here's why families in {business?.basic_info.city || 'your area'} choose us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully certified experts you can trust</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">Always here when you need us</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Upfront Pricing</h3>
                    <p className="text-gray-600">No hidden costs or surprises</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-gray-600">Your happiness is our priority</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069" 
                  alt="Electrician at work" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex flex-col items-center">
                  <span className="text-primary text-4xl font-bold">20+</span>
                  <span className="text-gray-600">Years Experience</span>
                </div>
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