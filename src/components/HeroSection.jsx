
import React, { useEffect } from "react";
export default function HeroSection() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-anim]");
    if (!items.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const dir = el.getAttribute("data-anim") || "top";
          if (entry.isIntersecting) {
            const duration = el.getAttribute("data-duration") || "700ms";
            const delay = el.getAttribute("data-delay") || "0ms";
            const name =
              dir === "top"
                ? "slideFromTop"
                : dir === "left"
                ? "slideFromLeft"
                : dir === "right"
                ? "slideFromRight"
                : "slideFromBottom";
            el.style.animation = `${name} ${duration} ease-out ${delay} both`;
          } else {
            el.style.animation = "none";
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((it) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* import a professional font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        :root{ --card-bg: #ffffff; --card-shadow: 0 8px 24px rgba(15,23,42,0.08);} 

        @keyframes slideFromTop { from { opacity: 0; transform: translateY(-20px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes slideFromLeft { from { opacity: 0; transform: translateX(-20px);} to { opacity: 1; transform: translateX(0);} }
        @keyframes slideFromRight { from { opacity: 0; transform: translateX(20px);} to { opacity: 1; transform: translateX(0);} }
        @keyframes slideFromBottom { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }

        /* Card styling with subtle zoom on hover/focus */
        .stat-card{
          background: var(--card-bg);
          box-shadow: var(--card-shadow);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          width: 14.5rem;
          transition: transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms;
          transform-origin: center;
          will-change: transform;
        }
        .stat-card:focus, .stat-card:hover{
          transform: scale(1.04);
          box-shadow: 0 18px 40px rgba(15,23,42,0.12);
          outline: none;
        }

        /* number and label */
        .stat-number{ font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight: 800; letter-spacing: -0.02em; }
        .stat-label{ font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #4b5563; }

        /* responsive tweaks */
        @media (min-width: 640px){ .stat-cards-wrap{ gap: 1.5rem; } }

      `}</style>

      <section className="w-full mb-0 pb-0 min-h-[60vh] sm:min-h-[70vh] bg-amber-50">
        <div className="relative overflow-hidden flex flex-col items-center justify-center px-4 py-10">
          {/* Logo */}
          <div data-anim="top" data-duration="700ms" className="opacity-0">
            <img
              src="https://sayahomes.com/images/logo-south-x.svg"
              alt="Saya South X Logo"
              className="w-56 sm:w-64 md:w-72 h-auto object-contain"
            />
          </div>

          <div className="mt-6 w-full flex justify-center px-4">
            <h2
              data-anim="right"
              data-duration="800ms"
              className="opacity-0 text-center text-gray-800 font-semibold leading-tight max-w-3xl wrap-break-words whitespace-normal"
              style={{ fontSize: "clamp(1rem, 2.4vw, 1.5rem)", fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto" }}
            >
              Saya South X is here to take your retail experience to the next level with a diverse selection of luxury brands amidst tasteful landscaping.
            </h2>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="mx-auto max-w-3xl mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center stat-cards-wrap gap-6">
            <button
              data-anim="left"
              data-duration="700ms"
              className="opacity-0 stat-card"
              aria-label="12,000 plus square meters"
            >
              <div className="flex flex-col items-center">
                <span className="stat-number text-2xl sm:text-3xl">12,000+</span>
                <span className="stat-label text-sm">sq.m Growth Segment</span>
              </div>
            </button>

            <button
              data-anim="right"
              data-duration="700ms"
              className="opacity-0 stat-card"
              aria-label="10,000 plus visitors per month"
            >
              <div className="flex flex-col items-center">
                <span className="stat-number text-2xl sm:text-3xl">10,000+</span>
                <span className="stat-label text-sm">Monthly Footfall</span>
              </div>
            </button>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="mx-auto max-w-3xl flex flex-col items-center gap-6 text-center">
            <div data-anim="right" data-delay="100ms" className="opacity-0 w-full">
              <p className="text-lg sm:text-xl font-semibold wrap-break-words whitespace-normal text-amber-700" style={{ fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto" }}>
                An Uber Luxury High Street Retail Destination
              </p>
            </div>

            <div data-anim="left" data-delay="200ms" className="opacity-0 w-full">
              <p className="text-base sm:text-lg text-gray-700 wrap-break-words whitespace-normal" style={{ fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto" }}>
                Catch the latest flix, meet your friends for a cup of coffee, shop for the latest trends, or take your family on a culinary journey. Capture every beautiful moment and rejoice in the joys of retail therapy. With Saya South X, you can explore a mix of retail, restaurants and entertainment pulsating with style and energy. No limit, no end to fun & excitement at Saya South X.
              </p>
            </div>

            <div data-anim="bottom" data-delay="300ms" className="opacity-0 w-full mb-10">
              <p className="text-sm text-gray-600 wrap-break-words whitespace-normal" style={{ fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto" }}>
                RERA Number : UPRERAPRJ17950 | www.up-rera.in
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
