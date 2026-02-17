import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "PROJECT 01",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop", // Placeholder: Mobile App
    },
    {
      id: 2,
      title: "PROJECT 02",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004560-64a27b0cf4e8?q=80&w=1000&auto=format&fit=crop", // Placeholder: Clean Web
    },
    {
      id: 3,
      title: "PROJECT 03",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1000&auto=format&fit=crop", // Placeholder: Phone/Mockup
    },
  ];

  return (
    <section id="portfolio" className="w-full py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          {/* Number & Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase">
            <span className="text-gray-600 mr-3">PORTFOLIO</span>
            
          </h2>
          
          {/* Subtitle & Link */}
          <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-sm tracking-widest font-medium">
            <span className="text-gray-400">MY LATEST WORK.</span>
            <Link href="#" className="text-green-500 hover:text-green-400 transition-colors flex items-center group">
              SEE MORE 
              <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </Link>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-80 w-full overflow-hidden bg-gray-900 cursor-pointer"
            >
              {/* Image with Hover Zoom */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay (Darkens bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-0 w-full text-center z-10">
                <h3 className="text-xl font-bold tracking-widest text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}