import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505] shadow-md border-b border-gray-900">
      <div className="container mx-auto px-8 py-5 flex justify-between items-center h-20">
        
        {/* Branding: 'AE' with the green arc */}
        <div className="flex items-center cursor-pointer select-none group">
          <span className="text-2xl font-bold tracking-widest text-white group-hover:text-green-400 transition-colors">
            AE
          </span>
          <span className="text-green-500 text-3xl ml-1 font-light group-hover:rotate-12 transition-transform duration-300">
            )
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wider">
          <Link href="/" className="text-green-500 hover:text-green-400 transition-colors">
            HOME
          </Link>
          <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
            EXPERIENCE
          </Link>
          <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
            PORTFOLIO
          </Link>
          <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  );
}