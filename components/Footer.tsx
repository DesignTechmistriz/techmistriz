import Image from "next/image";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-[#252323] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          {/* <h3 className="text-white text-xl font-bold mb-4">Techmistriz</h3> */}
          <Image src="footer_logo.svg" alt="footer_logo" width={250} height={150} />
          <p className="text-sm">
            Building smart web & digital solutions for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Design</li>
            <li>Laravel Development</li>
            <li>WordPress</li>
            <li>React Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-[#6c63ff] text-lg" /> India
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#6c63ff] text-lg" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#6c63ff] text-lg" /> info@techmistriz.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © 2026 Techmistriz. All rights reserved.
      </div>
    </footer>
  );
}
