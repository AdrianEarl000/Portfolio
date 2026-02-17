// DESIGN 2
import About from "@/components/Design2/About";
import Certifications from "@/components/Design2/Certifications";
import Contact from "@/components/Design2/Contact";
import Footer from "@/components/Design2/Footer";
import Header from "@/components/Design2/Header2";
import HeroSection2 from "@/components/Design2/HeroSection2";
import Portfolio from "@/components/Design2/Portfolio";
import Resume from "@/components/Design2/Resume";

export default function Home() {
  return (
    // UPDATED: Changed selection color to Red (#ff3333) to match the theme
    <main className="w-full min-h-screen bg-[#050505] text-white selection:bg-[#ff3333] selection:text-white">
      
      {/* Header stays outside sections so it's fixed on top */}
      <Header/>

      {/* 1. Hero Section linked to #home */}
      <section id="home">
        <HeroSection2/>
      </section>

      {/* 2. Portfolio linked to #portfolio */}
      <section id="portfolio">
        <Portfolio/>
      </section>

      {/* 3. Resume linked to #resume */}
      {/* I grouped Certifications here so the "RESUME" nav stays active while scrolling both */}
      <section id="resume">
        <Resume/>
        <Certifications/>
      </section>

      {/* 4. About linked to #about */}
      <section id="about">
        <About/>
      </section>

      {/* 5. Contact linked to #contact */}
      <section id="contact">
        <Contact/>
      </section>

      <Footer/>
      
    </main>
  );
}
