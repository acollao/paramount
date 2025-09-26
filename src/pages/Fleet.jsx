
export default function Fleet() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Content */}
        <div className="text-left">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Premier limousine fleet
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Fleet Transportation Solutions
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
           Paramount Transportation Inc. offers a <b>versatile fleet of late-model SUVs, 
           executive sedans, and luxury vans</b>, designed to meet the needs of both corporate 
           clients and personal travelers. Our commitment to quality over quantity ensures 
           every vehicle is <b>well-maintained, reliable, and tailored</b> to your event or 
           travel requirements.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
           Trusted by major corporate accounts, we pride ourselves on delivering 
           the right vehicle for every occasion — whether it’s a business roadshow, 
           an airport transfer, or a leisure trip. With Paramount, you’re not just 
           choosing a ride, you’re choosing <b>flexibility, comfort, and confidence</b> on the road.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block text-green-600 font-medium hover:underline"
          >
            Get in touch
          </a>
        </div>

        {/* Right Image */}
         {/* Right: Car Images */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="/images/fleet-suv.jpg"
            alt="SUV"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <img
            src="/images/fleet-sedan.jpg"
            alt="Executive Sedan"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <img
            src="/images/luxury-van.jpg"
            alt="Luxury Van"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
