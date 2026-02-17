import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#050505] border-t border-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* BRANDING (Left side) */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="flex items-center cursor-pointer group">
            <span className="text-2xl font-bold tracking-widest group-hover:text-green-400 transition-colors">
              AE
            </span>
            <span className="text-green-500 text-3xl ml-1 font-light group-hover:rotate-12 transition-transform duration-300">
              )
            </span>
          </Link>
        </div>

        {/* COPYRIGHT TEXT (Right side/Center) */}
        <div className="text-sm font-light tracking-wider text-gray-500 text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} by Adrian Earl Abade. 
            <span className="hidden md:inline"> | </span> 
            <br className="md:hidden"/>
            Powered and secured by <span className="text-gray-300">ROLOBOX</span>
          </p>
        </div>

      </div>
    </footer>
  );
}