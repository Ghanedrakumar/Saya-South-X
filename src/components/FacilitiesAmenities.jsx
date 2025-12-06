import React from "react";
import { motion } from "framer-motion";


const AMENITIES = [
  { id: "ac", title: "Air-conditioned High-street Retail", desc: "Comfortable, climate-controlled shopping experience for customers and brands.", icon: "ac" },
  { id: "food", title: "Food Court & Restaurants", desc: "Dedicated F&B zone with seating and service areas for high dwell time.", icon: "food" },
  { id: "multiplex", title: "Multiplex (Proposed)", desc: "Space allocated for cinema and entertainment to increase footfall and evening business.", icon: "movie" },
  { id: "double", title: "Double-height Shops", desc: "Premium double-height units for flagship stores and enhanced brand presence.", icon: "double" },
  { id: "suites", title: "Dedicated Business Suites Entry", desc: "Separate access and services for office occupants and visitors.", icon: "office" },
  { id: "lifts", title: "High-speed Lifts & Escalators", desc: "Efficient vertical circulation for shoppers and employees.", icon: "lift" },
  { id: "cctv", title: "24x7 CCTV & Security", desc: "Secure environment with surveillance and trained security personnel.", icon: "security" },
  { id: "parking", title: "Multi-level Parking", desc: "Ample parking provisions for visitors and staff with smart management.", icon: "parking" },
  { id: "road", title: "Wide 60m Road Frontage", desc: "Excellent visibility from the main arterial road and easy access to the project.", icon: "road" },
];

export default function FacilitiesAmenities() {
  return (
    <section id="amenities" aria-label="Facilities and amenities" className="py-12 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Facilities & Amenities</h2>
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl">Everything designed for visitors, brands and long-term commercial success — curated amenities for convenience, comfort and crowd pull.</p>
          </div>

         {/* {showCTA && (
            <div>
              <a href="/brochure.pdf" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-400 text-black font-semibold shadow">
                Download Brochure
              </a>
            </div>
          )} */}
        </div> 

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {AMENITIES.map((a, i) => (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start"
            >
              <div className="flex-shrink-0">
                <AmenityIcon name={a.icon} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{a.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Optional short stats row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Stat label="Project Area" value="~3 acres" />
          <Stat label="Parking" value="Multi-level" />
          <Stat label="Unit Types" value="Retail • F&B • Suites" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
      <div className="text-lg font-bold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

function AmenityIcon({ name }) {
  const base = "h-12 w-12 p-2 rounded-lg bg-white border border-gray-200 flex items-center justify-center";

  switch (name) {
    case "ac":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 7h18" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="7" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12h.01M12 12h.01M16 12h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "food":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M8 2v10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2v10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 18h20" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "movie":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="6" width="20" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 3v4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3v4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "double":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 21V3h8v18" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 21V3h8v18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "office":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 7h.01M8 11h.01M8 15h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "lift":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-rose-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6h12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "security":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2l6 3v5c0 5-3.8 9-6 9s-6-4-6-9V5l6-3z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "parking":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M17 9V7a5 5 0 00-10 0v2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 13h10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 21h10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "road":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 3l18 18" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
  }
}
