import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="our-services text-3xl md:text-4xl font-extrabold text-slate-900">
                        Our Services
                    </h2>
                    <h5 className="mt-4 text-lg text-slate-600">
                        We provide end-to-end web, software, and digital marketing solutions
                        to help your business grow online.
                    </h5>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <ServiceCard
                        image="/undraw_web-devices_i15y.svg"
                        title="Web Design"
                        desc="Modern, responsive, and user-friendly website designs tailored to your brand."
                    />

                    <ServiceCard
                        image="/undraw_dev-environment_n5by.svg"
                        title="Laravel & PHP Development"
                        desc="Secure, scalable backend solutions using Laravel and core PHP."
                    />

                    <ServiceCard
                        image="/undraw_creative-flow_t3kz.svg"
                        title="WordPress Development"
                        desc="Custom WordPress websites, themes, and plugins for all business needs."
                    />

                    <ServiceCard
                        image="/undraw_react_ytu4.svg"
                        title="React & Next.js Development"
                        desc="High-performance frontend applications using React and Next.js."
                    />

                    <ServiceCard
                        image="/undraw_blogging_38kl.svg"
                        title="Digital Marketing"
                        desc="SEO, paid ads, and social media strategies to boost online visibility."
                    />

                    <ServiceCard
                        image="/undraw_drag-and-drop_v4po.svg"
                        title="Graphic Design"
                        desc="Creative logos, branding, banners, and marketing creatives."
                    />

                </div>
            </div>
        </section>
    );
}

/* =======================
   Service Card Component
======================= */

function ServiceCard({
    image,
    title,
    desc,
}: {
    image: string;
    title: string;
    desc: string;
}) {
    return (
        <div className="shadow-xl p-10 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Service Image */}
            <div className="flex justify-center mb-6 h-40">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={100}
                />
            </div>

            {/* Service Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-3">
                {title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
