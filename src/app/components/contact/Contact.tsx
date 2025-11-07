"'use client';"
import { DottedMap } from '@/components/ui/dotted-map';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const markers = [
  { lat: 40.7128, lng: -74.006, size: 0.3 },   // New York
  { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
  { lat: 51.5074, lng: -0.1278, size: 0.3 },   // London
  { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
  { lat: 48.8566, lng: 2.3522, size: 0.3 },    // Paris
  { lat: 35.6762, lng: 139.6503, size: 0.3 },  // Tokyo
  { lat: 55.7558, lng: 37.6176, size: 0.3 },   // Moscow
  { lat: 39.9042, lng: 116.4074, size: 0.3 },   // Beijing
  { lat: 28.6139, lng: 77.209, size: 0.3 },    // New Delhi
  { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
  { lat: 1.3521, lng: 103.8198, size: 0.3 },   // Singapore
  { lat: 25.2048, lng: 55.2708, size: 0.3 },   // Dubai
  { lat: 52.52, lng: 13.405, size: 0.3 },      // Berlin
  { lat: 19.4326, lng: -99.1332, size: 0.3 },   // Mexico City
  { lat: -26.2041, lng: 28.0473, size: 0.3 },  // Johannesburg
];

export default function Contact() {
  return (
    <section id="contact" className="height-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ────── LEFT ────── */}
          <div className="flex flex-col space-y-8">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-gray-700" />
              <a
                href="mailto:your@email.com"
                className="text-lg text-gray-800 hover:underline"
              >
                harrisshaukat3@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <Link
                href="https://github.com/Harris-Shoukat"
                target="_blank"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <Github className="w-7 h-7" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/harris-shoukat134/"
                target="_blank"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <Linkedin className="w-7 h-7" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>

            {/* Optional extra text */}
            <p className="text-gray-600 max-w-md">
              I’m open for freelance work, collaboration, or just a friendly chat.
              Drop me a line!
            </p>
          </div>

          {/* ────── RIGHT ────── */}
          <div className="relative w-full overflow-hidden  shadow-sm">
            {/* Radial overlay (keeps the map from being too bright) */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-200/70 pointer-events-none" />
            <DottedMap markers={markers} />
          </div>
        </div>
      </div>
    </section>
  );
}