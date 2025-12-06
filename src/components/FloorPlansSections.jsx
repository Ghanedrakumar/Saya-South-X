import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UNITS = [
  {
    id: "retail",
    title: "Retail Shop",
    subtitle: "200 - 800 sq.ft",
    desc: "Double-height units suitable for flagship and neighbourhood retail.",
    img: "https://investormart.s3.ap-south-1.amazonaws.com/floorplan/659-1751358454SayaSouthX-lowergroundfloorwebp.webp",
  },
  {
    id: "food",
    title: "Food Court Space",
    subtitle: "400 - 1500 sq.ft",
    desc: "Flexible F&B kiosks & large dining zones with designated services.",
    img: "https://ncrestates.com/wp-content/uploads/2024/01/ff.jpg",
  },
  {
    id: "office",
    title: "Business Suite",
    subtitle: "300 - 1200 sq.ft",
    desc: "Premium office suites with dedicated entry and utilities.",
    img: "https://www.bricksbybricks.com/wp-content/uploads/2020/05/First-floor-plan.jpg",
  },
  {
    id: "kiosk",
    title: "Kiosk",
    subtitle: "50 - 150 sq.ft",
    desc: "High-visibility kiosks placed on main circulation paths.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIw8AdXqulRdWwHWw6jXaOKGPNyoavVxUlQ&s",
  },
];

export default function FloorPlansSection() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });

  return (
    <section id="floorplans" aria-label="Floor plans and unit types" className="py-12 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Floor Plans & Unit Types</h2>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">Explore typical unit sizes and layouts. Click any card to view the floor plan image.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNITS.map((u, idx) => (
            <motion.article
              key={u.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-4 shadow-sm cursor-pointer overflow-hidden"
              onClick={() => setLightbox({ open: true, src: u.img, title: `${u.title} — ${u.subtitle}` })}
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Image with subtle zoom-on-hover using CSS plus motion for smoothness */}
                <motion.img
                  src={u.img}
                  alt={`${u.title} floor plan`}
                  className="w-full h-36 object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                  {u.title}
                  <span className="text-sm text-gray-500">{u.subtitle}</span>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{u.desc}</p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox({ open: true, src: u.img, title: `${u.title} — ${u.subtitle}` }); }}
                    className="px-3 py-2 rounded-full bg-amber-400 text-black text-sm font-medium shadow"
                    aria-label={`View ${u.title} floor plan`}
                  >
                    View Floor Plan
                  </button>

                  <a href="https://doc.squareyards.com/ProjectKnowledge/Brochure_d7555bdbe5214e188a63b3f81e54add5.pdf" onClick={(e) => e.stopPropagation()} className="text-sm text-gray-700 underline">Download Brochure</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Lightbox modal for image preview */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox({ open: false, src: "", title: "" })}
            >
              <motion.div
                className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white"
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 flex items-center justify-between border-b">
                  <div className="text-sm font-medium">{lightbox.title}</div>
                  <button onClick={() => setLightbox({ open: false, src: "", title: "" })} className="text-gray-600">✕</button>
                </div>

                <div className="w-full bg-black/5">
                  <img src={lightbox.src} alt={lightbox.title} className="w-full h-[60vh] object-contain bg-black" />
                </div>

                <div className="p-4 flex justify-end gap-3">
                  <a href={lightbox.src} download className="px-3 py-2 rounded-full border">Download Image</a>
                  <a href="/brochure.pdf" className="px-3 py-2 rounded-full bg-amber-400 text-black font-medium">Download Brochure</a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
