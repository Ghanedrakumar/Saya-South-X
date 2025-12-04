import React, { useEffect, useRef, useState } from "react";

const slideImages = [
  { url: "https://sayahomes.com/images/south-x/gallery/01_SSX.webp", caption: "Saya South X" },
  { url: "https://sayahomes.com/images/south-x/gallery/03_SSX.webp", caption: "Saya South X" },
  { url: "https://investormart.s3.ap-south-1.amazonaws.com/galery_image/659-1751358239SayaSouthXbanner2webp.webp", caption: "Saya South X" },
  { url: "https://sayahomes.com/images/south-x/gallery/01_SSX.webp", caption: "Saya South X" },
  { url: "https://sayahomes.com/images/south-x/gallery/03_SSX.webp", caption: "Saya South X" },
  { url: "https://investormart.s3.ap-south-1.amazonaws.com/galery_image/659-1751358239SayaSouthXbanner2webp.webp", caption: "Saya South X" },
];

function ProjectShowCase({ height = "h-screen" }) {
  const [index, setIndex] = useState(0);
  const previewRef = useRef(null);
  const thumbRefs = useRef([]);
  const mountedRef = useRef(false); // prevents running on first render

  const next = () => setIndex((i) => (i + 1) % slideImages.length);
  const prev = () => setIndex((i) => (i - 1 + slideImages.length) % slideImages.length);
  const goTo = (i) => setIndex(Math.max(0, Math.min(i, slideImages.length - 1)));

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Keep active thumbnail in view when index changes — but only scroll the preview container
  useEffect(() => {
    // skip on initial mount to avoid page jump on refresh
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    const container = previewRef.current;
    const el = thumbRefs.current[index];
    if (!container || !el) return;

    // Calculate a scrollLeft that centers the thumbnail in the preview container
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // Use offsets relative to the container
    const offsetLeft = el.offsetLeft;
    const left = offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);

    // Smooth scroll the preview strip only (won't move the page)
    container.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  return (
    <div className=" bg-yellow-50">
      <div className=" font-bold text-amber-700 text-center pb-9  pt-4 shadow-2xl shadow-amber-200 text-4xl bg-yellow-50 ">Project Showcase</div>

      <div className={`w-full ${height} max-w-full `}>
        {/* Main carousel area */}
        <div className={`relative w-full ${height} overflow-hidden shadow-lg`} aria-roledescription="carousel">
          {slideImages.map((s, i) => {
            const isActive = i === index;
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{
                  backgroundImage: `url(${s.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="group"
                aria-hidden={!isActive}
              >
                <div className="absolute inset-0 bg-black/25 flex items-end">
                  <div className="p-4 md:p-6">
                    <h3 className="text-white text-lg md:text-2xl font-semibold drop-shadow">{s.caption}</h3>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left / Right arrows */}
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md focus:outline-none" aria-label="Previous slide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md focus:outline-none" aria-label="Next slide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slideImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-transform ${i === index ? "scale-110 bg-white" : "bg-white/60"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Preview strip (moved below main area to avoid initial focusing issues) */}
      <div className="w-full flex justify-center px-4 bg-yellow-50 pt-3 py-3">
        <div ref={previewRef} className="w-full max-w-4xl flex gap-3 overflow-x-auto no-scrollbar py-2">
          {slideImages.map((s, i) => (
            <button
              key={i}
              ref={(el) => (thumbRefs.current[i] = el)}
              onClick={() => goTo(i)}
              className={`shrink-0 w-28 h-16 rounded-lg overflow-hidden border-2 focus:outline-none transition-transform transform ${i === index ? "border-white scale-105 shadow-lg" : "border-gray-200 hover:scale-105"}`}
              aria-label={`Preview ${i + 1}`}
            >
              <img src={s.url} alt={s.caption} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectShowCase;
