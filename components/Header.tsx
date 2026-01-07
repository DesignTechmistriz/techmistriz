import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-600 text-[#6c63ff]">
          Techmistriz
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium ">
          <Link href="#home" className="hover:text-[#6c63ff]">Home</Link>
          <Link href="#about" className="hover:text-[#6c63ff]">About</Link>
          <Link href="#services" className="hover:text-[#6c63ff]">Services</Link>
          <Link href="#process" className="hover:text-[#6c63ff]">Process</Link>
          <Link href="#contact" className="hover:text-[#6c63ff]">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="bg-600 bg-[#6c63ff] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#6c63ff] transition"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}



