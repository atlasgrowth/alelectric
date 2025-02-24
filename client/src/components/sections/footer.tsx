import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{business?.basic_info.name}</h3>
            <p className="text-sm">
              Professional electrical services for residential, commercial, and industrial needs.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/residential">
                  <a className="hover:text-white transition-colors">Residential</a>
                </Link>
              </li>
              <li>
                <Link href="/commercial">
                  <a className="hover:text-white transition-colors">Commercial</a>
                </Link>
              </li>
              <li>
                <Link href="/industrial">
                  <a className="hover:text-white transition-colors">Industrial</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{business?.basic_info.phone}</span>
              </li>
              {business?.basic_info.city && (
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{business.basic_info.city}</span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {business?.social_media?.facebook && (
                <a 
                  href={business.social_media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {business?.social_media?.instagram && (
                <a 
                  href={business.social_media.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {business?.basic_info.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
