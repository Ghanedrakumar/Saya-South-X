
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Card = ({ children, className = "" }) => (
  <div
    className={
      "w-full text-center md:text-left mx-auto " +
      // mobile: card style, md+: transparent/flat
      "bg-white rounded-lg shadow-md p-4 md:bg-transparent md:shadow-none md:p-0 " +
      className
    }
  >
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-8">
   
          <Card className="md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start">
            <div className="w-36 md:w-40 mx-auto md:mx-0">
              <img
                src="https://sayahomes.com/images/logo.svg"
                alt="Saya Homes Logo"
                title="Saya Homes"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-3 mt-3">
              <img
                src="https://sayahomes.com/images/icons/g-logo.webp"
                alt="Google logo"
                className="w-8 h-8 object-contain rounded-sm"
              />
              <div>
                <small className="text-slate-600 block">Google reviews</small>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-700">4.8</span>
                  <div className="flex items-center text-amber-400">
                    <span className="mr-1">★ ★ ★ ★</span>
                    <span className="text-amber-300">☆</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="flex gap-3 mt-4 justify-center md:justify-start">
              <li>
                <a
                  href="https://www.facebook.com/sayahomesofficial/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow hover:opacity-90 transition"
                >
                  <FaFacebookF className="w-4 h-4 text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sayahomes/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow hover:opacity-90 transition"
                >
                  <FaInstagram className="w-4 h-4 text-pink-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@sayahomes"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow hover:opacity-90 transition"
                >
                  <FaYoutube className="w-4 h-4 text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/sayarealtyofficial"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow hover:opacity-90 transition"
                >
                  <FaLinkedinIn className="w-4 h-4 text-blue-700" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=00"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow hover:opacity-90 transition"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-500" />
                </a>
              </li>
            </ul>
          </Card>

          {/* About Us */}
          <Card>
            <h6 className="text-lg font-semibold text-slate-900">About Us</h6>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="hover:text-slate-900 transition cursor-pointer">Overview</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Vision &amp; Mission</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Meet the Founder</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Customer Relationship</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Partnerships</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Appreciation Letter</li>
            </ul>
          </Card>

          {/* Projects */}
          <Card>
            <h6 className="text-lg font-semibold text-slate-900">Projects</h6>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="hover:text-slate-900 transition cursor-pointer">Residential</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Commercial</li>
            </ul>
          </Card>

          {/* Media */}
          <Card>
            <h6 className="text-lg font-semibold text-slate-900">Media</h6>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="hover:text-slate-900 transition cursor-pointer">In The Media</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Awards &amp; Recognition</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Events</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Blogs</li>
            </ul>
          </Card>

          {/* Quick Links */}
          <Card>
            <h6 className="text-lg font-semibold text-slate-900">Quick Links</h6>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="hover:text-slate-900 transition cursor-pointer">NRI Corner</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Customer Support</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Careers</li>
              <li className="hover:text-slate-900 transition cursor-pointer">Contact Us</li>
            </ul>
          </Card>
        </div>

        {/* bottom bar */}
        <div className="mt-6 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} Saya Homes. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">Privacy Policy</a>
            <a href="/terms" className="text-sm text-slate-600 hover:text-slate-900">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
