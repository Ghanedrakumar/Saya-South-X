
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const PHONE = "+91 12345 67890";
const EMAIL = "hello@saya-southx.example";
const ADDRESS_LINE1 = "Plot C-01, Sector Ecotech-12";
const ADDRESS_LINE2 = "Greater Noida West, Uttar Pradesh 201306";
const WHATSAPP_NUMBER = "+911234567890"; // use international format without spaces when forming wa.me link

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    // simple mailto fallback — opens user's mail client to send subscription email
    const subject = encodeURIComponent("Saya South X — Subscription Request");
    const body = encodeURIComponent(`Please subscribe ${email} to Saya South X updates.\n\nSource: Website`);
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & social */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src="https://sayahomes.com/images/logo.svg" alt="Saya Homes" className="h-10" />
              <span className="text-2xl font-extrabold tracking-tight">Saya South X</span>
            </div>

            <p className="text-sm text-slate-300 max-w-md">
              Premium high-street retail and mixed-use destination in Greater Noida West — retail, dining, entertainment and business suites crafted for visibility and value.
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/sayahomesofficial/" label="Facebook">
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon href="https://www.instagram.com/sayahomes/?hl=en" label="Instagram">
                <FaInstagram />
              </SocialIcon>

              <SocialIcon href="https://www.youtube.com/@sayahomes" label="YouTube">
                <FaYoutube />
              </SocialIcon>

              <SocialIcon href="https://in.linkedin.com/company/sayarealtyofficial" label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>

              <SocialIcon
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialIcon>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <h6 className="text-sm font-semibold text-slate-200 mb-3">About</h6>
              <ul className="text-sm text-slate-300 space-y-2">
                <li><a className="hover:text-white" href="/about">Overview</a></li>
                <li><a className="hover:text-white" href="/about#vision">Vision</a></li>
                <li><a className="hover:text-white" href="/about#team">Team</a></li>
                <li><a className="hover:text-white" href="/projects">Projects</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-slate-200 mb-3">Support</h6>
              <ul className="text-sm text-slate-300 space-y-2">
                <li><a className="hover:text-white" href="/contact">Contact Us</a></li>
                <li><a className="hover:text-white" href="/faq">FAQs</a></li>
                <li><a className="hover:text-white" href="/careers">Careers</a></li>
                <li><a className="hover:text-white" href="/brochure.pdf" download>Brochure (PDF)</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Contact & newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="space-y-4"
          >
            <h6 className="text-sm font-semibold text-slate-200">Contact</h6>

            <div className="text-sm text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <strong className="min-w-[84px]">Phone:</strong>
                <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE}</a>
              </div>

              <div className="flex items-center gap-2">
                <strong className="min-w-[84px]">Email:</strong>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </div>

              <div className="flex items-start gap-2">
                <strong className="min-w-[84px]">Address:</strong>
                <div className="text-slate-300">{ADDRESS_LINE1}<br />{ADDRESS_LINE2} <br />
                  <a className="text-slate-200 underline text-sm" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE1 + ' ' + ADDRESS_LINE2)}`} target="_blank" rel="noreferrer">View on map</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="mt-2">
              <label htmlFor="subscribe" className="text-sm text-slate-200 block mb-2">Get latest updates</label>

              <div className="flex gap-2">
                <input
                  id="subscribe"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-3 py-2 rounded-md bg-slate-800 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button type="submit" className="px-4 py-2 rounded-md bg-amber-400 text-slate-900 font-semibold">Subscribe</button>
              </div>

              {subscribed && (
                <p role="status" className="text-xs text-emerald-300 mt-2">Opened mail client to complete subscription — thank you!</p>
              )}
            </form>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">© {new Date().getFullYear()} Saya Homes — All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-sm text-slate-400 hover:text-white">Privacy</a>
            <a href="/terms" className="text-sm text-slate-400 hover:text-white">Terms</a>
            <a href="/sitemap.xml" className="text-sm text-slate-400 hover:text-white hidden sm:inline">Sitemap</a>
          </div>
        </div>
      </div>

      {/* floating back-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed right-5 bottom-5 md:right-8 md:bottom-8 bg-amber-400 text-slate-900 p-3 rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

/* Social Icon helper */
function SocialIcon({ href = "#", label = "Social", children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-slate-100 hover:bg-white hover:text-slate-900 transition-shadow shadow"
    >
      <span className="sr-only">{label}</span>
      <div className="w-4 h-4">{children}</div>
    </a>
  );
}
