import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Clock, 
  Shield, 
  HardHat, 
  Zap, 
  Settings, 
  Activity, 
  Bolt, 
  CheckCircle2, 
  Factory, 
  PowerIcon 
} from "lucide-react";

export default function Industrial() {
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
              <p className="text-primary-foreground font-medium text-sm">INDUSTRIAL SERVICES</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Industrial <br/>
              <span className="text-primary">Electrical</span> Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Heavy-duty electrical solutions by {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}. 
              Powering industry with reliable and efficient electrical services.
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
                  <HardHat className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/90">Safety First</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/90">24/7 Support</span>
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
              Industrial-Grade <span className="text-primary">Electrical</span> Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Specialized electrical solutions for manufacturing, processing, and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <Factory className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Equipment Installation</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Expert installation of industrial machinery and equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Machine hookups
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Production line wiring
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Equipment testing
                </li>
              </ul>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <PowerIcon className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Power Distribution</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Efficient power distribution solutions for large facilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Bus duct systems
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Distribution panels
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Load balancing
                </li>
              </ul>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white">
                <Settings className="h-8 w-8 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Control Systems</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-4">
                Advanced control systems for automated processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  PLC systems
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  Motor controls
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white mr-2" />
                  SCADA integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Advantage Section - Enhanced */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background accent elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-yellow-200 rounded-full opacity-20 -ml-40 -mb-40"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=2070" 
                  alt="Industrial electrical work" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-200 rounded-lg -z-10"></div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-5 rounded-lg shadow-xl">
                <div className="flex flex-col items-center">
                  <span className="text-yellow-600 text-5xl font-bold">30+</span>
                  <span className="text-gray-700 text-center">Years Industrial<br/>Experience</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-yellow-50 px-4 py-1 inline-block rounded-full mb-4">
                <p className="text-yellow-600 font-medium text-sm">THE INDUSTRIAL DIFFERENCE</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Industrial Electrical Services</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Industrial facilities require specialized electrical expertise. Our team brings decades of experience in heavy-duty industrial environments, ensuring your operations run safely and efficiently.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <HardHat className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-lg">Safety-First Approach</h3>
                  </div>
                  <p className="text-gray-600">
                    Rigorous safety protocols and training for high-risk industrial environments
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      {/* Removed Tool Icon */}
                      <HardHat className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-lg">Experienced Technicians</h3>
                  </div>
                  <p className="text-gray-600">
                    Specialized industrial electricians with extensive factory floor experience
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-lg">24/7 Emergency Support</h3>
                  </div>
                  <p className="text-gray-600">
                    Round-the-clock service to minimize costly production downtime
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <Activity className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-lg">Comprehensive Maintenance</h3>
                  </div>
                  <p className="text-gray-600">
                    Preventative maintenance plans to ensure continuous operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industrial Sectors We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our team has expertise across a wide range of industrial environments, each with unique electrical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-4 rounded-lg h-fit mr-5">
                <Factory className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
                <p className="text-gray-600">Electrical systems for production lines, machinery, and factory operations</p>
              </div>
            </div>

            <div className="flex p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-4 rounded-lg h-fit mr-5">
                <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Warehousing</h3>
                <p className="text-gray-600">Lighting, power distribution, and logistics support systems</p>
              </div>
            </div>

            <div className="flex p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-4 rounded-lg h-fit mr-5">
                <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Processing Plants</h3>
                <p className="text-gray-600">Specialized systems for food, chemical, and materials processing</p>
              </div>
            </div>

            <div className="flex p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-4 rounded-lg h-fit mr-5">
                <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pharmaceutical</h3>
                <p className="text-gray-600">Clean room and precision electrical systems for pharmaceutical production</p>
              </div>
            </div>

            <div className="flex p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-4 rounded-lg h-fit mr-5">
                <PowerIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Power Generation</h3>
                <p className="text-gray-600">Electrical systems for power plants and generation facilities</p>
              </div>
            </div>

            <div className="flex p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-4 rounded-lg h-fit mr-5">
                <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Water Treatment</h3>
                <p className="text-gray-600">Electrical controls for pumps, filtration, and treatment processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your Industrial Operations Running Smoothly</h2>
              <p className="text-white/90 text-lg mb-8">
                Whether you need installation of new industrial equipment, power distribution solutions, or emergency electrical services, our team of specialized industrial electricians is ready to support your operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                  id="contact-form"
                  onClick={() => window.location.href = `tel:${business?.basic_info.phone}`}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {business?.basic_info.phone || 'Call Now'}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Industrial Quote
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get an Industrial Service Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company-name" className="block text-gray-700 font-medium mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="company-name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-1">Contact Name</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-1">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select a service</option>
                    <option value="high-voltage">High Voltage Systems</option>
                    <option value="equipment">Equipment Installation</option>
                    <option value="power">Power Distribution</option>
                    <option value="controls">Industrial Controls</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="maintenance">Maintenance Program</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="project-details" className="block text-gray-700 font-medium mb-1">Project Details</label>
                  <textarea 
                    id="project-details" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Tell us about your industrial project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}