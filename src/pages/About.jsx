import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <Navbar />

      <main className="flex-grow w-full">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div
              className="bg-gradient-to-r from-white/70 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.995 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-4"
                initial={{ x: -18, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                About Saya South X — Greater Noida West
              </motion.h1>

              <motion.p
                className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl"
                initial={{ x: 18, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
              >
                Saya South X is a premium high-street retail & lifestyle destination in
                Greater Noida West — crafted to blend premium retail, dining and
                entertainment with modern architecture and high visibility.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content grid */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.article className="p-6 bg-white rounded-2xl shadow-sm" variants={item}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Vision & Concept</h2>
              <p className="text-gray-600 leading-relaxed">
                The project aims to create a vibrant community hub for shopping, dining,
                and lifestyle experiences in Greater Noida West. With an open high-street
                layout and contemporary design, Saya South X focuses on accessibility,
                aesthetics, and memorable experiences.
              </p>
            </motion.article>

            <motion.article className="p-6 bg-white rounded-2xl shadow-sm" variants={item}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Prime 3-side open corner plot for maximum visibility</li>
                <li>High-street retail with wide walkways & outdoor experiences</li>
                <li>Premium brands, F&B, wellness & entertainment</li>
                <li>Large frontage, ample parking & security systems</li>
              </ul>
            </motion.article>

            <motion.article className="p-6 bg-white rounded-2xl shadow-sm" variants={item}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Location Advantage</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Strategically positioned in Greater Noida West with strong connectivity to
                Noida, Ghaziabad and central NCR. Rapid residential growth around the site
                ensures solid footfall potential.
              </p>
              <div className="text-sm text-gray-700">
                <p>• ~5 mins from Gaur City & Kisan Chowk</p>
                <p>• ~15 mins from Noida Sector 52 Metro (approx)</p>
                <p>• Well-connected via Noida–Greater Noida Expressway</p>
              </div>
            </motion.article>

            <motion.article className="p-6 bg-white rounded-2xl shadow-sm" variants={item}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">World-Class Amenities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Open-air rooftop dining & terrace restaurants</li>
                <li>Entertainment & family zones</li>
                <li>Modern escalators, elevators & central services</li>
                <li>CCTV, fire safety & managed parking</li>
              </ul>
            </motion.article>
          </motion.div>
        </section>
        <section className="bg-yellow-50 py-12">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Saya Homes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Saya Homes is a reputed developer in NCR, known for quality execution and
                customer-first approach. Saya South X is a flagship commercial offering
                that complements the developer's residential portfolio.
              </p>

              <h4 className="text-xl font-medium text-gray-800 mb-3">Why Saya South X?</h4>
              <p className="text-gray-700 leading-relaxed">
                Whether you are an investor or a retailer, Saya South X provides a
                combination of strong location, modern amenities, and an experiential
                design that attracts repeat visitors and long-term value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <motion.div
            className="rounded-xl p-6 sm:p-8 bg-indigo-600 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ scale: 0.995, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h4 className="text-lg font-semibold">Interested in a site visit or retail enquiry?</h4>
              <p className="text-sm opacity-90">Get in touch to explore retail / investment opportunities at Saya South X.</p>
            </div>
            <div>
              <a
                href="/contact"
                className="inline-block mt-2 sm:mt-0 px-5 py-2 bg-white text-indigo-700 rounded-lg font-medium shadow hover:scale-105 transition-transform"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
