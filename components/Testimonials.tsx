import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from businesses we’ve helped grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <TestimonialCard
            name="Amit Sharma"
            role="Founder, Startup India"
            review="Techmistriz delivered an outstanding website with a clean UI and smooth performance. Highly professional team!"
          />

          <TestimonialCard
            name="Sarah Williams"
            role="Marketing Head, Ecom Brand"
            review="Their digital marketing strategy significantly increased our traffic and conversions within weeks."
          />

          <TestimonialCard
            name="Rahul Verma"
            role="CEO, IT Solutions"
            review="Excellent communication, timely delivery, and top-notch development quality. Highly recommended!"
          />

        </div>
      </div>
    </section>
  );
}

/* Testimonial Card */
function TestimonialCard({
  name,
  role,
  review,
}: {
  name: string;
  role: string;
  review: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition border border-slate-200">
      
      {/* Stars */}
      <div className="flex mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      {/* Review */}
      <p className="text-slate-600 leading-relaxed mb-6">
        “{review}”
      </p>

      {/* Client */}
      <div>
        <h4 className="font-bold text-slate-900">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
}
