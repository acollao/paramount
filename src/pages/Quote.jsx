// src/pages/Quote.jsx
import React from "react";

export default function Quote() {
  return (
    <section id="quote" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading / Intro */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get A Quote</h1>
          <p className="text-lg text-gray-700">
            Find the perfect transportation with us.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-800 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py_2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Service Type / Details</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Tell us about your trip, dates, etc."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact / Info */}
        <div className="text-center space-y-4">
          <p className="text-gray-700">
            Call us today at <strong>800 718 2924</strong> and we’ll give you immediate pricing and reservations.
          </p>
          <p className="text-gray-700">
            Email us at: <strong>info@paramountlimosvc.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
