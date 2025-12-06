
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";


const PRICES = [
  {
    type: "Retail",
    subtitle: "Double-height flagship units",
    items: [
      { id: "r1", area: "200 sq.ft", price: "₹ 2,000 / sq.ft", priceNote: "Starting price", possession: "Phase 1, 2026" },
      { id: "r2", area: "400 sq.ft", price: "₹ 1,950 / sq.ft", priceNote: "Popular", possession: "Phase 1, 2026" },
      { id: "r3", area: "800 sq.ft", price: "₹ 1,850 / sq.ft", priceNote: "Flagship", possession: "Phase 2, 2027" },
    ],
  },
  {
    type: "F&B",
    subtitle: "Food Court & Restaurants",
    items: [
      { id: "f1", area: "400 sq.ft", price: "₹ 2,200 / sq.ft", priceNote: "Kiosk", possession: "Phase 1, 2026" },
      { id: "f2", area: "900 sq.ft", price: "₹ 2,000 / sq.ft", priceNote: "Full outlet", possession: "Phase 1, 2026" },
    ],
  },
  {
    type: "Kiosk",
    subtitle: "High-visibility kiosks",
    items: [
      { id: "k1", area: "50 sq.ft", price: "₹ 60,000 (one-time)", priceNote: "Approx", possession: "Immediate" },
      { id: "k2", area: "100 sq.ft", price: "₹ 1,10,000 (one-time)", priceNote: "High footfall", possession: "Immediate" },
    ],
  },
  {
    type: "Suites",
    subtitle: "Business suites & offices",
    items: [
      { id: "s1", area: "300 sq.ft", price: "₹ 1,600 / sq.ft", priceNote: "Serviced", possession: "Phase 1, 2026" },
      { id: "s2", area: "1200 sq.ft", price: "₹ 1,450 / sq.ft", priceNote: "Large suite", possession: "Phase 2, 2027" },
    ],
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const cardVariant = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 }, hover: { scale: 1.03 } };

export default function PricingList() {
  const [tab, setTab] = useState(PRICES[0].type);
  const current = useMemo(() => PRICES.find((p) => p.type === tab) || PRICES[0], [tab]);

  return (
    <section id="pricing" aria-label="Pricing list" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pricing & Unit Types</h2>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">Indicative pricing and unit types at a glance. For exact custom quotes and area-specific rates, contact our leasing team.</p>
        </header>

        {/* Tabs */}
        <nav className="flex flex-wrap items-center gap-3 mb-6" aria-label="Unit types">
          {PRICES.map((p) => (
            <button
              key={p.type}
              onClick={() => setTab(p.type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                tab === p.type ? "bg-amber-400 text-black shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-pressed={tab === p.type}
            >
              {p.type}
            </button>
          ))}
        </nav>

        {/* Subtitle + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="text-sm text-gray-700">{current.subtitle}</div>
            <div className="text-xs text-gray-500 mt-1">Prices shown are indicative and subject to change. GST, registration & other charges extra.</div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.madhyam.com/project/saya-south-x-price-list.pdf" className="px-4 py-2 bg-white border rounded-lg text-sm hover:shadow" download>
              Download Price List (PDF)
            </a>
            <a href="/contact" className="px-4 py-2 bg-amber-400 text-black rounded-lg text-sm font-medium">Enquire</a>
          </div>
        </div>

        {/* Cards grid */}
        <motion.ul initial="hidden" animate="show" variants={container} role="list" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((it, i) => (
            <motion.li
              key={it.id}
              variants={cardVariant}
              whileHover="hover"
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{it.area}</h3>
                    <p className="text-sm text-gray-500 mt-1">{it.priceNote}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-extrabold text-amber-500">{it.price}</div>
                    <div className="text-xs text-gray-500 mt-1">{it.possession}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-700">Typical layout & fit-out options available. Contact us for detailed floor plan & rate card for the exact unit.</p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href={`/inquiry?unit=${encodeURIComponent(it.id)}`} className="flex-1 px-3 py-2 rounded-lg bg-white border text-sm text-gray-800 text-center hover:shadow">
                  Request Info
                </a>

                <a href="/brochure.pdf" className="px-3 py-2 rounded-lg bg-amber-400 text-black text-sm font-medium" download>
                  Reserve
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Compare table (collapsible on mobile) */}
        <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-4">
          <h4 className="text-lg font-semibold mb-3">Compare unit types</h4>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-xs text-gray-500">
                  <th className="p-3">Type</th>
                  <th className="p-3">Typical Area</th>
                  <th className="p-3">Indicative Rate</th>
                  <th className="p-3">Possession</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p) => (
                  <tr key={p.type} className="border-t">
                    <td className="p-3 font-medium text-gray-800">{p.type}</td>
                    <td className="p-3 text-gray-700">{p.items.map((x) => x.area).join(", ")}</td>
                    <td className="p-3 text-gray-700">{p.items.map((x) => x.price).slice(0, 2).join(" / ")}</td>
                    <td className="p-3 text-gray-700">{p.items.map((x) => x.possession).slice(0, 2).join(" / ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs text-gray-500">Note: Rates are indicative. For a firm quote and area-specific pricing please contact leasing.</div>
        </div>
      </div>
    </section>
  );
}
