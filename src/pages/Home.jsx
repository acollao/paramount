import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Car, Briefcase, Heart, Plane, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import car1 from '../assets/car1.png'
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Website() {
    const [isOpen, setIsOpen] = useState(false);

    const services = [
    {
      title: "Tours",
      desc: "Unforgettable San Francisco and Wine Country experiences tailored for business or leisure.",
      img: "/images/tours.jpg",
    },
    {
      title: "Corporate Roadshow",
      desc: "Seamless, confidential, and reliable transportation for your financial roadshows.",
      img: "/images/roadshow.jpg",
    },
    {
      title: "Events",
      desc: "Reliable, stress-free transportation for conventions, concerts, sports, and more.",
      img: "/images/events.jpg",
    },
  ];

  return (
    <div>
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
         <section className="py-16 bg-gray-50">
             <div className="container mx-auto px-6 text-left">
                <p className="text-green-600 font-semibold uppercase tracking-wide">
                    Premier Transportation Services
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-10">
                    Experience unparalleled travel comfort.
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                        />
                         {/* Content */}
                          <div className="p-5">
                            <h3 className="font-semibold text-lg flex items-center justify-between">
                            {service.title}
                            <ChevronRight className="w-5 h-5 text-green-600" />
                            </h3>
                            <p className="text-gray-600 mt-2">{service.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
             </div>
         </section>
      {/* Fleet Showcase */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto px-6 text-left">
            <p className="text-green-600 font-semibold uppercase tracking-wide">
                Premier limousine fleet
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-10">
                Late-model SUVs, sedans, and luxury vans tailored to your travel needs.
            </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <img src="/images/fleet-sedan.jpg" alt="Sedan" className="w-full h-64 object-cover rounded-2xl shadow" />
            <img src="/images/fleet-suv.jpg" alt="SUV" className="w-full h-64 object-cover rounded-2xl shadow" />
            <img src="/images/luxury-van.jpg" alt="Stretch Limo" className="w-full h-64 object-cover rounded-2xl shadow" />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-gray-800 text-center">
        <div>
          <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p>800-718-2924</p>
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
              <option value="tours">Tours</option>
              <option value="corporate_travel">Corporate Travel</option>
              <option value="events">Events</option>
            </select>
              <input type="number" placeholder="Number of Passengers" className="w-full border rounded-xl px-4 py-3" required />
                <input type="text" placeholder="Type of Vehicle" className="w-full border rounded-xl px-4 py-3" required />
            </div>

            <textarea placeholder="Message" rows="4" className="w-full border rounded-xl px-4 py-3"></textarea>
            <Button type="submit" className="w-full rounded-2xl py-4 text-lg bg-green-600 text-white hover:bg-green-700">
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

     
    </div>
  );
}