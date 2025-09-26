// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="text-left">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            We’re here to assist you!
          </h2>
          <p className="text-gray-600 mb-6 mt-5">
            Have questions or need a quote? Our team is here to help. Reach out to us by phone,
            email, or through the form — we’ll get back to you promptly.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">800-718-2924</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">info@paramountlimosvc.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
                Paramount Transportation Inc. <br />
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
          <form className="space-y-5 text-left">
            <div>
              <label className="block text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-500 rounded-sm px-4 py-2 focus:ring-1 focus:ring-green-600 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email address <span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="000-000-0000"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
