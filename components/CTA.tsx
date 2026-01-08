"use client";
import '../app/globals.css';


import Image from "next/image";
import { useState } from "react";

export default function CTASection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/cta-bg.jpeg" alt="CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Build Something Amazing
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Share your requirements with us and our experts will contact you shortly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl md-p-10 p-5 shadow-xl bg-gradient-to-br from-black/40 to-black/30 backdrop-blur-md">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
            >
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input name="name" required placeholder="Enter Full Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none" />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input name="email" type="email" required placeholder="Enter Email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none" />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input name="phone" placeholder="Enter Phone"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none" />
              </div>

              <div>
                <label className="block text-sm mb-1">Service Required</label>
                <select name="service"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-slate-200 outline-none">
                  <option className="text-black">Web Design</option>
                  <option className="text-black">Web Development</option>
                  <option className="text-black">Digital Marketing</option>
                  <option className="text-black">Graphic Design</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Message</label>
                <textarea name="message" rows={4} required
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none" />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="md-w-[30%] bg-[#6c63ff] py-3 px-5 rounded-lg font-semibold mx-auto flex justify-center"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
