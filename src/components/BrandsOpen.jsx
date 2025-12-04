import React, { useEffect, useRef } from "react";

const BrandsOpen = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll("[data-reveal]") ?? [];
    if (!items.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
          else entry.target.classList.remove("reveal-visible"); // optional: replay animations
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="bg-yellow-50">
      <div className="w-full relative overflow-hidden py-10 brands-section">
       
        <div className="container mx-auto px-4">
        
          <div data-reveal className="heading text-center mx-auto mb-6 opacity-0 transform translate-y-4 transition duration-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient text-amber-700 pb-6">Brands opening very soon</h2>
          </div>

          <div data-reveal className="row grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-8 opacity-0 transform translate-y-4 transition duration-600">

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Cinépolis</span>
                </div>
                <div className="brandLogo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjezuxV0AJTEVtfWWKm5eZgXHIqoLPrBY6kg&s" alt="Cinépolis" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Sunburn</span>
                </div>
                <div className="brandLogo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJoMK-8i13RVC1hGcSrbm0VeRss04dMsJyA&s" alt="Sunburn" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Badamis</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/brand-logos/badamis.webp" alt="Badamis" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">McDonalds</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/brand-logos/mcdonalds.png" alt="McDonalds" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Ministry Of Beer</span>
                </div>
                <div className="brandLogo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuIA6BWFWe3cGxAQnxSO5Pr7REGObpVYlgA&s" alt="Ministry Of Beer" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Castles Barbeque</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/logo/castle's-barbeque.png" alt="Castles Barbeque" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Funky Island</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/logo/funky-island.png" alt="Funky Island" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Rubarru</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/logo/rubarro-logo.png" alt="Rubarru" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">The Beer Mug</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/logo/TheBeerMug.webp" alt="The Beer Mug" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="brandBox">
              <a href="#" className="inner block">
                <div className="brandName text-center mb-2">
                  <span className="brandTitle text-sm sm:text-base font-medium">Blaaze</span>
                </div>
                <div className="brandLogo">
                  <img src="https://sayahomes.com/images/logo/blaaze.png" alt="Blaaze" className="w-full h-24 object-contain mx-auto transition-transform duration-300 transform hover:scale-105" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* background video (absolute so it won't steal focus/scroll) */}
        <div className="brand-video absolute inset-0 -z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="./images/southx-vidoe-th.webp"
          >
            <source src="./videos/southx-banner-c.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      {/* component-scoped styles */}
      <style>{`
        /* reveal animation */
        [data-reveal] { will-change: transform, opacity; }
        .reveal-visible { opacity: 1 !important; transform: none !important; }

        .heading.opacity-0, .row.opacity-0 { opacity: 0; transform: translateY(18px); transition: opacity 560ms ease, transform 560ms ease; }
        .reveal-visible.heading, .reveal-visible.row { opacity: 1; transform: translateY(0); }

        /* brand card hover (glass + lift) */
        .brandBox .inner {
          display: block;
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          padding: 12px;
          transition: transform 250ms ease, box-shadow 250ms ease, background 250ms ease;
          text-align: center;
        }
        .brandBox .inner:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 8px 26px rgba(0,0,0,0.35);
          background: rgba(255,255,255,0.06);
        }

        /* responsive tweaks */
        @media (max-width: 640px) {
          .brandLogo img { height: 64px; object-fit: contain; }
        }

        /* container utility if you aren't using Tailwind container */
        .container { max-width: 1200px; margin-left: auto; margin-right: auto; }
      `}</style>
    </div>
  );
};

export default BrandsOpen;
