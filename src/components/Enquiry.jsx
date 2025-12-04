import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Soya_front_page from '../assets/Soya_front_page.webp'
export default function BookSite() {
  const [form, setForm] = useState({ name: '', email: '', date: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.date) return alert('Please fill all fields')

    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <Navbar />
      <section
        aria-label="Book a site visit — Saya South X"
        className="w-full min-h-screen flex items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${Soya_front_page})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl w-full px-6 py-10 md:p-12"
        >
          <motion.div
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 md:p-10"
          >
            <header className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">If Any Query Please Write Down</h2>
            </header>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="grid gap-4"
            >
              <label className="flex flex-col text-sm text-white/90">
                <span className="mb-2">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-2 bg-white/6 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Your full name"
                  type="text"
                  required
                />
              </label>

              <label className="flex flex-col text-sm text-white/90">
                <span className="mb-2">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-2 bg-white/6 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </label>

              <label className="flex flex-col text-sm text-white/90">
                <span className="mb-2">Any Query Write Down</span>

                <textarea
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-2 bg-white/6 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y min-h-[80px]"
                  placeholder="Write your query here..."
                  required
                />
              </label>

              <div className="pt-2">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl py-3 font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                >
                  {sent ? 'Request Sent ✓' : 'Submit Request'}
                </motion.button>
              </div>

              <p className="text-xs text-white/70 mt-2">We will contact you to confirm the visit time. Your details are safe with us.</p>
            </motion.form>
          </motion.div>

          <div className="mt-6 flex items-center justify-between text-xs text-white/70">
            <span>Flexible visiting hours • Weekdays & weekends</span>
            <span>Free parking available</span>
          </div>
        </motion.div>
      </section>
    </>
  )
}
