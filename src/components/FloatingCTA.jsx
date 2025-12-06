// FloatingCTA.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function FloatingCTA({ phone = "+911234567890", brochure = "https://doc.squareyards.com/ProjectKnowledge/Brochure_d7555bdbe5214e188a63b3f81e54add5.pdf" }) {
  const [open, setOpen] = useState(false); // expanded state
  const [expanded, setExpanded] = useState(false); 
  const handleToggle = () => {
    setOpen((v) => !v);
    setExpanded((v) => !v);
  };

  const navigate = useNavigate();
  
    const handleBook = (e) => {
      e.preventDefault();
      navigate('/booksite');
    }
  
    

  return (
    <>
      {/* Hidden on very small screens? We show compact UI */}
      <div className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6">
        {/* Expand / collapse wrapper */}
        <AnimatePresence>
          {/* Expanded view (desktop / when open) */}
          {(open || expanded) && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="mb-3 flex flex-col items-end gap-3"
            >
              {/* Call Now */}
              <a
                href={`tel:${phone}`}
                aria-label={`Call now ${phone}`}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-lg ring-1 ring-black/5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.54.34 1.36.66 2.32a1 1 0 0 1-.24 1l-1.5 1.5a15 15 0 0 0 6 6l1.5-1.5a1 1 0 0 1 1-.24c.96.32 1.78.54 2.32.66a1 1 0 0 1 .75 1V21z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Call Now</div>
                  <div className="text-sm font-medium text-gray-900">{phone}</div>
                </div>
              </a>

              {/* Download Brochure */}
              <a
                href={brochure}
                download
                aria-label="Download brochure"
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-lg ring-1 ring-black/5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <svg className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="17" width="18" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download</div>
                  <div className="text-sm font-medium text-gray-900">Brochure</div>
                </div>
              </a>

              {/* Book Site Visit */}
<nav>
              <button
                onClick={handleBook}
                aria-label="Book site visit"
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-amber-400 text-black font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10h-6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6h18M7 6v14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-black/80">Book</div>
                  <div className="text-sm font-semibold text-black">Site Visit</div>
                </div>
              </button>
</nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating main toggle button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleToggle}
          aria-expanded={open}
          aria-controls="floating-cta"
          className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-400 text-black shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-300"
          title="Open quick actions"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* small badge hint on hover (desktop) */}
          <span className="pointer-events-none absolute -left-40 hidden md:block group-hover:block bg-black/75 text-white text-xs px-3 py-1 rounded-md">
            Quick actions
          </span>
        </motion.button>
      </div>
    </>
  );
}
