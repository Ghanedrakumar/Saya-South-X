
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const fadeUp = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      {/* HERO */}
      <header className="relative">
        <div className="relative h-[56vh] md:h-[64vh] overflow-hidden">
          {/* background image (replace with video if you prefer) */}
          <img
            src="https://sayahomes.com/images/south-x/gallery/3.jpg"
            alt="Saya South X - hero"
            className="absolute inset-0 w-full h-full object-cover brightness-90"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">Saya South X — High-Street Retail & Lifestyle, Greater Noida West</h1>
              <p className="mt-4 text-sm md:text-lg text-white/90 max-w-xl">
                A premium mixed-use destination — designed for top retail brands, dining experiences and family entertainment. Exceptional frontage, strategic connectivity and built for long-term rental value.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a href="/brochure.pdf" className="inline-block px-5 py-3 rounded-full bg-amber-400 text-black font-semibold shadow hover:shadow-lg">Download Brochure</a>
                <a href="#visit" className="inline-block px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/5">Book a Site Visit</a>
              </div>

              <div className="mt-6 flex gap-6 text-xs text-white/80">
                <div><span className="font-semibold">RERA:</span> UPRERAPRJ17950</div>
                <div><span className="font-semibold">Location:</span> Sector Ecotech-12, Greater Noida West</div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-10">
          <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer} initial="hidden" animate="show">
            {/* Left: Vision */}
            <motion.div className="bg-white rounded-2xl p-6 shadow-sm" {...fadeUp}>
              <h2 className="text-2xl font-semibold mb-3">Vision & Experience</h2>
              <p className="text-gray-700 leading-relaxed">
                Saya South X is envisioned as Greater Noida West’s premier high-street destination — an open, walkable environment where premium retail brands, curated dining and family entertainment come together to create memorable experiences.
              </p>

              <ul className="mt-4 grid gap-2 text-gray-700">
                <li>• Contemporary architecture with double-height flagship units</li>
                <li>• Designed circulation and plaza areas to maximize dwell time</li>
                <li>• Dedicated business suites and premium parking</li>
              </ul>
            </motion.div>

            {/* Right: Quick Facts */}
            <motion.div className="bg-gradient-to-tr from-white to-white/95 rounded-2xl p-6 shadow-sm flex flex-col justify-between" {...fadeUp}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>

                <div className="grid grid-cols-2 gap-4">
                  <Stat label="Project Area" value="~3 acres" />
                  <Stat label="Unit Types" value="Retail • F&B • Suites" />
                  <Stat label="Parking" value="Multi-level" />
                  <Stat label="Expected Launch" value="Phase 1 — 2026" />
                </div>
              </div>

              <div className="mt-6">
                <a href="#amenities" className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold shadow">See Amenities</a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Animated Counters */}
        <section className="bg-white/50 py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div className="bg-white rounded-2xl p-6 shadow" whileInView={{ y: 0 }} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <div className="text-4xl font-extrabold text-amber-500">200+</div>
                <div className="text-sm text-gray-600 mt-2">Shops (approx)</div>
              </motion.div>

              <motion.div className="bg-white rounded-2xl p-6 shadow" whileInView={{ y: 0 }} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <div className="text-4xl font-extrabold text-indigo-600">3</div>
                <div className="text-sm text-gray-600 mt-2">Acres (approx)</div>
              </motion.div>

              <motion.div className="bg-white rounded-2xl p-6 shadow" whileInView={{ y: 0 }} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <div className="text-4xl font-extrabold text-emerald-600">50+</div>
                <div className="text-sm text-gray-600 mt-2">Planned Brands (est.)</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features / Amenities */}
        <section id="amenities" className="max-w-6xl mx-auto px-6 md:px-12 py-10">
          <h3 className="text-2xl font-semibold mb-6">Facilities & Amenities</h3>
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[
              { title: "Air-conditioned High-street", desc: "Comfortable & brand-friendly retail spaces." },
              { title: "Food Court & Restaurants", desc: "Curated F&B with outdoor seating." },
              { title: "Multiplex & Entertainment", desc: "Planned cinema / family entertainment zones." },
              { title: "Double-height Flagship Units", desc: "Iconic double-height storefronts." },
              { title: "High-speed Lifts & Escalators", desc: "Smooth vertical circulation." },
              { title: "24x7 Security & Parking", desc: "CCTV, managed parking and safety systems." },
            ].map((f, i) => (
              <motion.article key={f.title} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.06 } } }} className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Gallery strip */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h3 className="text-2xl font-semibold mb-4">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaE2rF2HgePnjpVyCRxbu2mzqp58fedQe9Q&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlovyWygxA5Hx2DrjMIPxYrPG8ZAE_cnjHFA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSMKfWU7MJmXO_hXLS98cDpU0u8SSAv6zQA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASbDW_miwwPKLp-ZHmgY_KHKBJPjEF5huag&s"].map((src, idx) => (
                <motion.div key={src} className="rounded-xl overflow-hidden bg-gray-100 cursor-pointer" whileHover={{ scale: 1.04 }} transition={{ duration: 0.35 }}>
                  <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-36 object-cover" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-10">
          <motion.div className="rounded-xl p-6 sm:p-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4" initial={{ scale: 0.995, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <div>
              <h4 className="text-lg font-semibold">Interested in retail or investment opportunities?</h4>
              <p className="text-sm opacity-90">Contact our leasing team to explore units and early-bird rates.</p>
            </div>
            <div className="flex gap-3 items-center">
              <a href="/brochure.pdf" className="inline-block px-5 py-3 bg-white text-indigo-700 rounded-lg font-medium shadow">Download Brochure</a>
              <a href="#visit" className="inline-block px-5 py-3 bg-amber-400 text-black rounded-lg font-medium shadow">Book Site Visit</a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* Small presentational stat component */
function Stat({ label, value }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
