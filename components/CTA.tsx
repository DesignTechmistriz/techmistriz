import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta-bg.jpeg"
          alt="CTA Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading & Paragraph (Center Top) ===== */}
        <div className="text-center max-w-3xl mx-auto text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Build Something Amazing
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Share your requirements with us and our experts will contact
            you shortly to discuss your project.
          </p>
        </div>

        {/* ===== Form Section ===== */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-10 shadow-xl
            bg-gradient-to-br from-black/40 to-black/30
            backdrop-blur-md
          ">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3
                  placeholder:text-slate-300 focus:outline-none focus:none focus:none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3
                  placeholder:text-slate-300 focus:outline-none focus:none focus:none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3
                  placeholder:text-slate-300 focus:outline-none focus:none focus:none"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Required
                </label>
                <select
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3
                  text-slate-200 focus:outline-none focus:none focus:none "
                >
                  <option className="text-black">Select a service</option>
                  <option className="text-black">Web Design</option>
                  <option className="text-black">Web Development</option>
                  <option className="text-black">Digital Marketing</option>
                  <option className="text-black">Graphic Design</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3
                  placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-[30%] bg-[#6c63ff] text-white py-3 rounded-lg font-semibold
                  hover:bg-[#6c63ff] transition mx-auto flex justify-center"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
