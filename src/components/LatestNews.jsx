
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function LatestNews({ limit = 6 }) {
  const [articles, setArticles] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    // Load news JSON from public folder
    fetch("/data/news.json")
      .then((r) => {
        if (!r.ok) throw new Error("News fetch failed");
        return r.json();
      })
      .then((data) => {
        // sort by date desc
        const sorted = (data || []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sorted);
      })
      .catch((err) => {
        console.error("News fetch error:", err);
        setArticles([]);
      });
  }, []);

  if (!articles.length) {
    return (
      <section id="news" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest News & Updates</h2>
          <p className="mt-4 text-gray-600">No news available right now.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" aria-label="Latest news and updates" className="py-12 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest News & Updates</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl">Recent announcements, leasing updates, and local development news about Saya South X and Greater Noida West.</p>
          </div>
          <div>
            <a href="/news" className="hidden sm:inline-block text-sm text-amber-500 hover:underline">View all news →</a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, limit).map((item, i) => (
            <motion.article
              key={item.id || i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.36, delay: i * 0.05 }}
              whileHover={{ translateY: -6, boxShadow: "0 12px 30px rgba(16,24,40,0.08)" }}
              className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden cursor-default"
            >
              <div className="relative">
                {item.image ? (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-44 bg-gray-200 flex items-center justify-center text-gray-400">No image</div>
                )}

                {/* category badge */}
                {item.category && (
                  <div className="absolute left-3 top-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                    {item.category}
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {formatDate(item.date)} • {item.location || "Greater Noida"}
                    </p>
                  </div>

                  {/* small tag (featured/new) */}
                  {item.tag && (
                    <div className="text-xs text-amber-600 font-semibold ml-2">{item.tag}</div>
                  )}
                </div>

                <p className="mt-3 text-sm text-gray-700">
                  {expandedId === item.id ? item.content : truncate(item.content, 140)}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="text-sm text-amber-500 hover:underline"
                      aria-expanded={expandedId === item.id}
                    >
                      {expandedId === item.id ? "Show less" : "Read more"}
                    </button>

                    <a href={item.link || "/brochure.pdf"} className="text-sm text-gray-700 hover:underline" target="_blank" rel="noopener noreferrer">Source</a>
                  </div>

                  <div className="text-sm text-gray-500">{item.views ? `${item.views} views` : null}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* helpers */
function truncate(str = "", n = 140) {
  if (!str) return "";
  return str.length > n ? str.slice(0, n).trim() + "…" : str;
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); // e.g., 5 Dec 2025
  } catch {
    return dateStr;
  }
}
