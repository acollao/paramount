import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Car, Briefcase, Heart, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import car1 from '../assets/car1.png'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Website() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

        <nav className="bg-[#FFFFFF] text-black sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Left side */}
                    <div className="flex flex-col items-end text-right space-y-1">
                    <br/>
                    <span className="text-sm text-gray-800">info@paramountlimosvc.com</span>
                    </div>
                    <hr/>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    {/* <div className="flex-shrink-0 text-left">
                        <h3 className="text-md font-bold leading-tight">
                            PARAMOUNT <br /> TRANSPORTATION INC.
                        </h3>
                    </div> */}
                    <div className="flex-shrink-0 text-left">
                        <img 
                        src={logo}   // <-- replace with your actual logo path
                        alt="Paramount Transportation Inc." 
                        className="h-20 w-auto mb-5"  // controls size
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="hover:underline transition-colors duration-200">
                        Home
                    </Link>
                    <Link to="/services" className="hover:underline">
                        Services
                    </Link>
                    <Link to="/fleet" className="hover:underline">
                        Our Fleet
                    </Link>
                    
                    <Link to="/about" className="hover:underline">
                        About
                    </Link>
                    <Link
                    to="/contact"
                    className="border px-4 py-1 rounded hover:bg-white hover:text-black transition"
                    >
                        CONTACT
                    </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        >
                            <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0b1a0f]">
            <Link to="/" className="block hover:underline">
            Home
            </Link>
            <Link to="/fleet" className="block hover:underline">
            Our Fleet
            </Link>
            <Link to="/services" className="block hover:underline">
            Services
            </Link>
            <Link to="/about" className="block hover:underline">
            About
            </Link>
            <Link
            to="/contact"
            className="block border px-4 py-1 rounded hover:bg-white hover:text-black transition"
            >
            CONTACT
            </Link>
            </div>
            )}
        </nav>
      
      {/* Hero Section */}
        <section className="relative bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                src={car1}
                alt="Luxury car"
                className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* overlay for contrast */}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
                {/* Hero Title & Tagline */}
                <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Paramount Transportation Inc.
                </h1>
                <p className="text-lg md:text-2xl mb-5">
                    Professional, reliable, and stylish transportation across the Bay Area.
                </p>
                    <ScrollLink 
                    to="quote" 
                    smooth={true} 
                    duration={1000} 
                    offset={-70} 
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
                    >
                    Get a Quote
                    </ScrollLink>
                </div>

                {/* Intro / Value Statements */}
                <div className="space-y-6 text-left">
                <p className="text-xl font-semibold">
                    At Paramount, our strengths go beyond just transportation.
                </p>
                <p className="text-sm md:text-lg">
                    Providing premiere transportation service throughout the Bay Area since 2005, our professional team is backed with 25 years of collective experience working with the biggest limousine company in the industry.
                </p>
                <p className="text-sm md:text-lg">
                    Our chauffeurs are equipped with the right local knowledge to let you move around with ease. We work hard to ensure you get flawless airport transfers, with access to all airports, FBOs, hotels, convention centers and more.
                </p>
                <p className="text-sm md:text-lg">
                    Whether you are traveling for business or pleasure, count on us to satisfy your expectations at an affordable price.
                </p>
                </div>
            </div>
        </section>



      {/* Services Overview */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Plane className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Airport Transfers</h3>
            <p>On-time pickups & drop-offs for stress-free travel.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Corporate Travel</h3>
            <p>Professional transport solutions for executives & teams.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Heart className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Weddings & Events</h3>
            <p>Arrive in elegance and style on your special day.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Car className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Hourly Charter</h3>
            <p>Flexible luxury service for any occasion or night out.</p>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Fleet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <img src="/images/fleet-sedan.jpg" alt="Sedan" className="rounded-2xl shadow" />
            <img src="/images/fleet-suv.jpg" alt="SUV" className="rounded-2xl shadow" />
            <img src="/images/fleet-stretch.jpg" alt="Stretch Limo" className="rounded-2xl shadow" />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-gray-800 text-center">
        <div>
          <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p>(650) 219-8169</p>
        </div>
        <div>
          <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p>info@paramountlimosvc.com</p>
        </div>
        <div>
          <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Service Area</h3>
          <p>Serving the Bay Area & Beyond</p>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Request a Quote</h2>
          <form className="grid gap-6">
            <input type="text" placeholder="Full Name" className="w-full border rounded-xl px-4 py-3" required />
            <input type="email" placeholder="Email Address" className="w-full border rounded-xl px-4 py-3" required />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-xl px-4 py-3" required />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="date" className="w-full border rounded-xl px-4 py-3" required />
              <input type="time" className="w-full border rounded-xl px-4 py-3" required />
             
            </div>
            <input type="text" placeholder="Pick up Location" className="w-full border rounded-xl px-4 py-3" required />
            <input type="text" placeholder="Drop off Location" className="w-full border rounded-xl px-4 py-3" required />
            <div className="grid md:grid-cols-3 gap-4">
              <select className="w-full border rounded-xl px-4 py-3" required>
              <option value="">Select Service Type</option>
              <option value="airport_transfer">Airport Transfer</option>
              <option value="corporate_travel">Corporate Travel</option>
              <option value="events">Wedding & Events</option>
            </select>
              <input type="number" placeholder="Number of Passengers" className="w-full border rounded-xl px-4 py-3" required />
                <input type="text" placeholder="Type of Vehicle" className="w-full border rounded-xl px-4 py-3" required />
            </div>

            <textarea placeholder="Message" rows="4" className="w-full border rounded-xl px-4 py-3"></textarea>
            <Button type="submit" className="w-full rounded-2xl py-4 text-lg">
              Submit Request
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198614.063501095!2d-100.96194576997704!3d38.47272057400683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a31771717c016b%3A0x68c2b4a94b3e095f!2sKansas%2C%20USA!5e0!3m2!1sen!2sph!4v1758720647091!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Paramount Limousine Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
