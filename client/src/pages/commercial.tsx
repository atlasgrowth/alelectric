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
  Building2, 
  PieChart, 
  Activity,
  CheckCircle2 
} from "lucide-react";

export default function Commercial() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1590959651373-a3db0f38c961?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
              <p className="text-primary-foreground font-medium text-sm">COMMERCIAL SERVICES</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial <br/>
              <span className="text-primary">Electrical</span> Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Expert electrical solutions by {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}. 
              Powering businesses with reliable and efficient electrical services.
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
              Professional <span className="text-primary">Commercial</span> Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive electrical solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <Building2 className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Installation</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Complete electrical systems for offices and commercial spaces.
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
                  Office fit-outs
                </li>
              </ul>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <PieChart className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy Management</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Smart solutions to reduce energy costs and improve efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Energy audits
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  LED retrofits
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Smart controls
                </li>
              </ul>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <Activity className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety & Compliance</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Ensuring your business meets all electrical safety standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Code compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Safety inspections
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Emergency systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}