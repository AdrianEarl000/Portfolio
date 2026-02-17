export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      year: "2023 - PRESENT",
      company: "HOP!",
      role: "Creative Design Lead",
      description: "Leading the creative direction for mobile applications, overseeing UI/UX strategies, and managing a team of junior designers to ensure brand consistency."
    },
    {
      id: 2,
      year: "2021 - 2023",
      company: "WISBOOM",
      role: "Associate Design Director",
      description: "Collaborated with cross-functional teams to deliver high-quality web solutions. Spearheaded the redesign of the company's core product interface."
    },
    {
      id: 3,
      year: "2019 - 2021",
      company: "SNAP UP",
      role: "Director of Design",
      description: "Managed client relationships and delivered end-to-end design solutions. Focused on user-centric design principles to boost engagement by 40%."
    },
    {
      id: 4,
      year: "2017 - 2019",
      company: "GDV",
      role: "UI/UX Designer",
      description: "Designed intuitive interfaces for e-commerce platforms. Conducted user research and usability testing to refine product features."
    },
  ];

  return (
    <section id="experience" className="w-full py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase">
            <span className="text-green-600 mr-3"></span>
            EXPERIENCE
          </h2>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Central Vertical Line (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-500/30 hidden md:block"></div>
          
          {/* Vertical Line (Mobile - Left aligned) */}
          <div className="absolute left-6 h-full w-0.5 bg-green-500/30 md:hidden"></div>

          {/* --- TIMELINE ITEMS --- */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center justify-between mb-16 relative w-full`}>
              
              {/* LEFT SIDE CONTENT (Visible only for Odd items on Desktop) */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 md:pr-16 text-left md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}`}>
                {index % 2 !== 0 && (
                  <div className="hidden md:block">
                    <span className="text-green-500 font-bold tracking-widest text-sm block mb-1">{exp.year}</span>
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-1">{exp.company}</h3>
                    <h4 className="text-lg text-gray-300 font-medium italic mb-3">{exp.role}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                )}
              </div>

              {/* CENTER DOT */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10 shadow-[0_0_15px_rgba(34,197,94,0.8)] mt-1 md:mt-0"></div>

              {/* RIGHT SIDE CONTENT (Visible only for Even items on Desktop) */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-16 text-left ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}`}>
                {/* Desktop: Show if index is Even */}
                <div className={`${index % 2 === 0 ? 'hidden md:block' : 'hidden'}`}>
                   <span className="text-green-500 font-bold tracking-widest text-sm block mb-1">{exp.year}</span>
                   <h3 className="text-2xl font-bold uppercase tracking-wider mb-1">{exp.company}</h3>
                   <h4 className="text-lg text-gray-300 font-medium italic mb-3">{exp.role}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                </div>

                {/* MOBILE: Always Show Content Here */}
                <div className="md:hidden">
                   <span className="text-green-500 font-bold tracking-widest text-sm block mb-1">{exp.year}</span>
                   <h3 className="text-2xl font-bold uppercase tracking-wider mb-1">{exp.company}</h3>
                   <h4 className="text-lg text-gray-300 font-medium italic mb-3">{exp.role}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}