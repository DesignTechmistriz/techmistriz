import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Working Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple and transparent workflow that ensures quality,
            efficiency, and timely delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">

          <Step
            number="01"
            title="Discussion"
            desc="We understand your requirements, goals, and expectations."
            icon={<MessageCircle size={28} />}
          />

          <Step
            number="02"
            title="Design"
            desc="We create modern UI/UX designs aligned with your brand."
            icon={<PenTool size={28} />}
          />

          <Step
            number="03"
            title="Development"
            desc="Our developers build fast, scalable, and secure solutions."
            icon={<Code2 size={28} />}
          />

          <Step
            number="04"
            title="Launch"
            desc="After testing, we launch and provide ongoing support."
            icon={<Rocket size={28} />}
          />

        </div>
      </div>
    </section>
  );
}

/* Step Card */
function Step({
  number,
  title,
  desc,
  icon,
}: {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition">
      
      {/* Step Number */}
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6c63ff] text-white text-sm font-bold px-4 py-1 rounded-full">
        {number}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-[#6c63ff] mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
