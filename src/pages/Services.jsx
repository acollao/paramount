
export default function Services() {
  const services = [
    {
      name: "Corporate Roadshow",
      desc: [
  "Having hands-on knowledge on financial or corporate roadshows is our key advantage in this niche industry.",
  "Our years of experience enable us to provide the highest level of service, and understand the nuances involved in financial roadshows. Confidentiality goes without saying.",
  "Our chauffeurs have extensive knowledge of financial institutions in the Bay Area.",
  "To guarantee proper communication, we provide your chauffeur with your itinerary and inform you of your chauffeur's name and cellphone number at least 24 hours in advance."
],
      img: "/images/roadshow.jpg",
    },
    {
      name: "Tours",
      desc:[
        "We know you're either traveling for business or leisure. Either way, we want to make sure you get an unforgettable experience by giving you the best tours possible.",
        "Start by discovering the treasures of San Francisco, Chinatown, Coit Tower, the Palace of Fine Arts. Then sample the famous wines of Napa and Sonoma, experience California cuisine and wine country living.",
        "View the sites and learn the history of San Francisco from the Gold Rush era, the San Francisco fire, to the present.",
        "Choose from the delightful tours we have on offer: Tours of The City, the Wine Country, Muir Woods and Bohemian Sausalito."
      ],
      img: "/images/tours.jpg",
    },
    {
      name: "Events",
      desc: [
        "You can't take chances if you need to be at any personal or corporate event at any given time. That's why we've worked hard perfecting the very transportation service you need especially for conventions, sports events, concerts and more.",
        "Quick and efficient coordination enable us to move people with ease. Our expertise ensures you can focus on what you need to do-you can quit worrying and leave the rest to our dependable chauffeurs.",
      ],
      img: "/images/events.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Left Content */}
        <div className="text-left">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
           Transportation solutions tailored for every occasion
          </h2>
          
        </div>

        {/* Right Image */}
        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-xl mb-2">{service.name}</h3>
                {Array.isArray(service.desc) ? (
                    service.desc.map((p, i) => (
                      <p key={i} className="mb-3 text-gray-600 leading-relaxed">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
