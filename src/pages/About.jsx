export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Content */}
        <div className="text-left">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            About Paramount Transportation Inc.
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Experience the paramount difference
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            With over 15 years of expertise in delivering exceptional
            transportation solutions, Paramount Transportation Inc.
            sets the standard for corporate travel. We specialize in
            providing premier limousine services tailored to meet the
            needs of executives, families, and special events.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our commitment to reliability and excellence ensures a seamless
            experience every time. Trust us to elevate your transportation
            needs with professionalism and style.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block text-green-600 font-medium hover:underline"
          >
            Get in touch
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/images/fleet-sedan.jpg"
            alt="Luxury Car"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
