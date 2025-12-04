import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { FaEnvelope, FaTimes } from "react-icons/fa";

const Navbar = ({
  enquiryHref = "/enquiry",
  whatsappHref =
    "https://api.whatsapp.com/send?phone=+918860763281&text=Hi I am interested in Saya Homes, please share the details.",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // close on Esc and prevent body scroll when open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // universal nav handler: supports "#id" scroll and "/route" navigation
  const handleNav = (e, href) => {
    // allow WHATSAPP and external links to behave normally
    if (!href) return;

    // external link (starts with http) — let it proceed
    if (/^https?:\/\//.test(href)) return;

    e.preventDefault();
    setMenuOpen(false);

    // anchor navigation to section id (e.g. "#about")
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // update the URL hash without reloading
        history.replaceState(null, "", href);
      } else {
        // if element not present, optionally navigate to route with hash
        navigate(href);
      }
      return;
    }

    // route navigation (starts with '/')
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    // fallback: treat as anchor
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 bg-yellow-50 shadow-sm z-50 p-2">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center">
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="p-2 rounded-md focus:outline-none focus:ring lg:mr-4"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="flex-1" aria-hidden="true" />

          {/* logo: use handleNav to navigate without reload */}
          <div
            className="
              order-3 ml-auto
              lg:order-2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:ml-0
              shrink-0
            "
          >
            <a href="/" onClick={(e) => handleNav(e, "/")} aria-label="Home" className="block">
              <img
                src="https://sayahomes.com/images/logo.svg"
                alt="Saya Homes Logo"
                className="w-32 h-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-end gap-8">
            {/* enquiry is a route: use navigate */}
            <a
              href={enquiryHref}
              onClick={(e) => handleNav(e, enquiryHref)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-transparent rounded-full text-sm font-medium hover:bg-amber-900 hover:text-white transition bg-amber-600 p-3"
              aria-label="Enquiry"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Enquiry</span>
            </a>

            {/* whatsapp is external, let it open in new tab */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-md text-sm font-medium hover:bg-green-50 hover:text-green-600 transition"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      {/* aside */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        aria-label="Main menu"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-md focus:outline-none focus:ring">
              <FaTimes className="w-5 h-5" />
            </button>
            <span className="text-lg font-semibold">Menu</span>
          </div>
        </div>

        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-2 text-base">
            <li>
              <a
                href="/"
                onClick={(e) => handleNav(e, "/")}
                className="block px-3 py-2 rounded hover:bg-gray-50 transition"
              >
                Home
              </a>
            </li>
            <li>
              {/* If you actually have a route /about, this will navigate via react-router.
                  If you instead have a section with id="about", change href to "#about" */}
              <a
                href="/about"
                onClick={(e) => handleNav(e, "/about")}
                className="block px-3 py-2 rounded hover:bg-gray-50 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={(e) => handleNav(e, "/contact")}
                className="block px-3 py-2 rounded hover:bg-gray-50 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="mt-6 border-t pt-4 lg:hidden flex flex-col gap-3">
           <a
  href={enquiryHref}
  onClick={(e) => handleNav(e, enquiryHref)}
  className="inline-flex items-center gap-2 ..."
  aria-label="Enquiry"
>
              <FaEnvelope className="w-4 h-4" />
              <span>Enquiry</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium hover:bg-green-50"
            >
              <SiWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
