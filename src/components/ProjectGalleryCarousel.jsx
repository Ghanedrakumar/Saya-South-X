import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  { id: "day", src: "https://sayahomes.com/images/south-x/floorwise/southx-fhd.webp", alt: "Day view of Saya South X" },
  { id: "night", src: "https://sayahomes.com/images/south-x/gallery/2.jpg", alt: "Night view with lights" },
  { id: "atrium", src: "https://sayahomes.com/images/south-x/gallery/03_SSX.webp", alt: "Atrium and plaza view" },
  { id: "shops", src: "https://www.wavecitycenter.in/wp-content/uploads/2019/07/wcc-hssc.jpg", alt: "High-street shops" },
  { id: "food", src: "https://sayahomes.com/images/south-x/gallery/4.webp", alt: "Food court interior" },
];

export default function ProjectGalleryCarousel({ autoplay = true, autoplayInterval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const timer = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (lightbox.open && e.key === "Escape") setLightbox({ open: false, src: "", alt: "" });
      if (!lightbox.open) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  useEffect(() => {
    if (!autoplay) return;
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoplay]);

  function startTimer() {
    stopTimer();
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, autoplayInterval);
  }

  function stopTimer() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }

  function prev() {
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }

  function next() {
    setIndex((i) => (i + 1) % IMAGES.length);
  }

  function openLightbox(img) {
    setLightbox({ open: true, src: img.src, alt: img.alt });
  }

  return (
    <section id="gallery" aria-label="Project gallery" className="py-12 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Project Gallery</h2>
          <div className="text-sm text-gray-600">Hover an image to zoom • Click to view larger</div>
        </div>

        {/* Carousel viewport */}
        <div
          ref={containerRef}
          onMouseEnter={stopTimer}
          onMouseLeave={() => autoplay && startTimer()}
          className="relative mt-6"
        >
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className="w-full h-72 md:h-96 relative"
            >
              <img
                src={IMAGES[index].src}
                alt={IMAGES[index].alt}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />

              {/* Overlay controls */}
              <div className="absolute inset-0 flex items-center justify-between px-3 md:px-6">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow backdrop-blur"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow backdrop-blur"
                >
                  ›
                </button>
              </div>

              {/* CTA show thumbnails */}
              <div className="absolute left-4 bottom-4 right-4 md:left-8 md:right-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-3 overflow-x-auto py-2">
                    {IMAGES.map((img, i) => (
                      <motion.button
                        key={img.id}
                        onClick={() => setIndex(i)}
                        onDoubleClick={() => openLightbox(img)}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${i === index ? "border-amber-400" : "border-transparent"}`}
                        aria-label={`Show ${img.alt}`}
                      >
                        <img src={img.src} alt={img.alt} className="w-24 h-14 object-cover" loading="lazy" />
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
                      <span>{index + 1} / {IMAGES.length}</span>
                    </div>

                    <button
                      onClick={() => openLightbox(IMAGES[index])}
                      className="px-3 py-2 rounded-full bg-amber-400 text-black font-medium"
                    >
                      View Large
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-amber-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox({ open: false, src: "", alt: "" })}
            >
              <motion.div
                className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white"
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 flex items-center justify-between border-b">
                  <div className="text-sm font-medium text-gray-900">{lightbox.alt}</div>
                  <button onClick={() => setLightbox({ open: false, src: "", alt: "" })} className="text-gray-600">✕</button>
                </div>

                <div className="w-full bg-black/5">
                  <img src={lightbox.src} alt={lightbox.alt} className="w-full h-[70vh] object-contain bg-black" />
                </div>

                <div className="p-4 flex justify-end gap-3">
                  <a href={lightbox.src} download className="px-3 py-2 rounded-full border">Download Image</a>
                  <a href="/brochure.pdf" className="px-3 py-2 rounded-full bg-amber-400 text-black font-medium">Download Brochure</a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
