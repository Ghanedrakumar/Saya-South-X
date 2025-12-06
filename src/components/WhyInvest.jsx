
import React from "react";
import { motion } from "framer-motion";
const cards = [
  {
    id: "corner",
    title: "Corner 3-side Open Plot",
    desc: "Maximum visibility and customer footfall from multiple directions.",
    icon: "corner",
  },
  {
    id: "footfall",
    title: "High Nearby Footfall",
    desc: "Large residential catchment (200k+ residents nearby) for steady daily customers.",
    icon: "people",
  },
  {
    id: "rental",
    title: "Assured Rental Potential",
    desc: "Multiple revenue streams — retail leases, food & entertainment rentals, and offices.",
    icon: "rupee",
  },
  {
    id: "brands",
    title: "Premium Brands Attraction",
    desc: "Designed to attract national & regional retail chains and F&B brands.",
    icon: "store",
  },
  {
    id: "location",
    title: "Strategic Connectivity",
    desc: "Excellent link-road access to Noida, Delhi and surrounding NCR — ideal for customers & employees.",
    icon: "map",
  },
];

export default function WhyInvest() {
  return (
    <section
      id="why-invest"
      aria-label="Why invest in Saya South X"
      className="py-12 px-6 md:px-12 lg:px-24 bg-yellow-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Invest in Saya South X
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl">
          A mixed-use commercial hub built for long-term rental yields, high footfall,
          and brand visibility. Key advantages at a glance.
        </p>

        <ul
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {cards.map((c, idx) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start"
            >
              <div className="flex-shrink-0">
                <VisIcon name={c.icon} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Simple inline SVG icons — small, dependency-free, tailwind-friendly. */
function VisIcon({ name }) {
  const base = "h-10 w-10 p-2 rounded-xl bg-white border border-gray-200";
  switch (name) {
    case "corner":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-amber-500">
            <path d="M3 21V3h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="14" y="14" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6"/>
          </svg>
        </div>
      );
    case "people":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-500">
            <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 21v-1a4 4 0 014-4h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      );
    case "rupee":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-indigo-500">
            <path d="M6 7h12M6 11h12M10 21l-4-4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 13c2 0 4-1 4-4s-2-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      );
    case "store":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-pink-500">
            <path d="M3 9l1.5-3h15L21 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 9v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      );
    case "map":
      return (
        <div className={base} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-500">
            <path d="M20 6l-6 2-6-2-6 2v10l6-2 6 2 6-2V6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      );
    default:
      return <div className={base} aria-hidden="true" />;
  }
}
