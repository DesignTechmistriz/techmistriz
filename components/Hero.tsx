import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpeg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-slate-50/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">
          <span className="inline-block mb-4 text-[#6c63ff] font-semibold">
            Welcome to Techmistriz
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Smart Web & Digital <br />
            Solutions for{" "}
            <span className="text-[#6c63ff]">Modern Businesses</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            We build high-performance websites, scalable applications, and
            result-driven digital marketing strategies to grow your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#6c63ff] text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="border border-slate-300 text-slate-800 px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 md:order-2 relative">
          <Image
            src="/undraw_asset-selection_jrie.svg"
            alt="Techmistriz Hero Illustration"
            width={520}
            height={520}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
