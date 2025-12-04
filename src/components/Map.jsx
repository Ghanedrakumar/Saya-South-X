import React from "react";


export default function SayaMap() {
  const approxLat = 28.6035;
  const approxLng = 77.3540;
  const googleEmbedSrc = `https://www.google.com/maps?q=${approxLat},${approxLng}&z=15&output=embed`;

  return (
    <div className="min-h-screen bg-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-700">
            Saya South X — Location & Map
          </h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Find Saya South X at Greater Noida West. Explore site location, nearby landmarks,
            connectivity and key directions — all on a single page.
          </p>
        </header>

        <div className="bg-beige-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex md:gap-0">
            {/* Left: Map (50%) */}
            <div className="md:w-1/2 h-80 md:h-auto">
              {/* Use iframe for Google Maps embed. Replace src with your embed link. */}
              <iframe
                title="Saya South X location"
                src={googleEmbedSrc}
                loading="lazy"
                className="w-full h-full border-0"
                allowFullScreen
              />
              {/* Fallback: if you want a static image, swap iframe with <img src='/path/to/map.png' /> */}
            </div>

            {/* Right: Content (50%) */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Location Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Saya South X is a high-street retail and lifestyle destination located in
                Greater Noida West. Strategically positioned for high visibility and easy access,
                it offers a mix of premium retail, dining, and entertainment experiences.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Approx. Coordinates</h3>
                  <p className="text-sm text-gray-600">{approxLat}° N, {approxLng}° E</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-800">Plot Type</h3>
                  <p className="text-sm text-gray-600">Prime 3-side open corner & high-frontage</p>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">How to Reach</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>By Car: Easily accessible from Noida–Greater Noida Expressway.</li>
                <li>By Metro: Closest metro (approx) — Noida Sector 52 / extension (check current status).</li>
                <li>By Train/Bus: Regular connectivity to Noida and Ghaziabad; local cabs and autos available.</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Nearby Landmarks</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>Gaur City (residential hub) — ~5 mins</li>
                <li>Kisan Chowk / Sector market — ~5–7 mins</li>
                <li>Noida–Greater Noida Expressway — quick access to NCR</li>
              </ul>

              <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg mb-6">
                <h4 className="text-sm font-semibold text-indigo-700">Footfall & Opportunity</h4>
                <p className="text-sm text-indigo-900/90">
                  Saya South X benefits from the rapidly growing residential catchment in Greater Noida West,
                  ensuring good footfall for retail and F&B outlets. Ideal for retail investments and experiential F&B.
                </p>
              </div>


              <p className="mt-4 text-xs text-gray-500">
                Note: Map coordinates are approximate. For precise location, replace the iframe `src`
                with an official Google Maps embed link (Share → Embed map) or use your mapping component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
