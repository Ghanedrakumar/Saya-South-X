// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TESTS = [
  { id:1, name:"Aman, Retailer", text:"Great location and early footfall — excited to open my store here." },
  { id:2, name:"Priya, F&B Owner", text:"Designated F&B zone perfect for our brand." },
  { id:3, name:"Ravi, Investor", text:"Promising rental yields and connectivity." }
];

export default function Testimonials({ autoplay = true, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (!autoplay) return;
    timer.current = setInterval(() => setIndex(i => (i+1) % TESTS.length), interval);
    return () => clearInterval(timer.current);
  }, [autoplay, interval]);

  return (
    <section className="py-10 bg-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold">What people say</h3>
        <div className="mt-6 relative">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p className="text-gray-700">“{TESTS[index].text}”</p>
            <div className="mt-4 font-semibold">{TESTS[index].name}</div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-4">
            {TESTS.map((t,i) => (
              <button key={t.id} onClick={()=>setIndex(i)} className={`w-2 h-2 rounded-full ${i===index ? 'bg-amber-500' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
