import {
  ShieldCheck,
  Clock,
  Users,
  TrendingUp,
  Headphones,
  Award,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/why-choose-bg.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <h2 className="why-choose text-3xl md:text-4xl font-extrabold">
            Why Choose Techmistriz
          </h2>
          <h5 className="mt-4 text-lg text-slate-200">
            We combine creativity, technology, and strategy to deliver
            high-quality digital solutions that grow your business.
          </h5>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <Feature
            icon={<ShieldCheck size={30} />}
            title="Trusted & Secure"
            desc="We follow best practices to ensure data security and reliability."
          />

          <Feature
            icon={<Clock size={30} />}
            title="On-Time Delivery"
            desc="Your project is delivered on schedule without compromising quality."
          />

          <Feature
            icon={<Users size={30} />}
            title="Experienced Team"
            desc="Skilled designers, developers, and marketers working together."
          />

          <Feature
            icon={<TrendingUp size={30} />}
            title="Business-Focused"
            desc="We build solutions that help you scale and generate results."
          />

          <Feature
            icon={<Headphones size={30} />}
            title="Dedicated Support"
            desc="Ongoing assistance even after project completion."
          />

          <Feature
            icon={<Award size={30} />}
            title="Quality Assured"
            desc="Every project goes through testing and quality checks."
          />

        </div>
      </div>
    </section>
  );
}

/* Feature Card */
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl p-10 shadow-xl   bg-gradient-to-br from-black/40 to-black/30   backdrop-blur-md    hover:shadow-2xl transition">

      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-[#6c63ff] mb-6 group-hover:bg-[#6c63ff] group-hover:text-white transition">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#fff] mb-3">
        {title}
      </h3>

      <p className="text-[#fff] leading-relaxed">
        {desc}
      </p>
    </div>
  );
} 
