import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix default icon issue for many bundlers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const CENTER = { lat: 28.4995, lng: 77.4485 }; // approximate center near Greater Noida West (adjust if needed)

const LOCATIONS = [
  { id: "project", name: "Saya South X (Project)", lat: 28.4995, lng: 77.4485, time: "—", label: "Project" },
  { id: "gaur", name: "Gaur City", lat: 28.5021, lng: 77.4417, time: "5 mins" },
  { id: "sector78", name: "Sector 78 Metro", lat: 28.5226, lng: 77.3978, time: "12 mins" },
  { id: "noida62", name: "Noida Sec 62", lat: 28.4750, lng: 77.5030, time: "18 mins" },
  { id: "nh24", name: "NH-24 (access)", lat: 28.6493, lng: 77.4350, time: "10 mins" },
];

function FlyToLocation({ position }) {
  const map = useMap();
  useEffect(() => {
    if (!position) return;
    map.flyTo([position.lat, position.lng], 14, { duration: 0.8 });
  }, [position, map]);
  return null;
}

export default function LocationAdvantage({ showMap = true }) {
  const [active, setActive] = useState(LOCATIONS[0]);
  const mapRef = useRef(null);

  return (
    <section id="location-advantage" aria-label="Location advantage" className="py-12 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-gray-900">
            Location & Connectivity
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }} className="mt-3 text-sm text-gray-600">
            Saya South X sits at a strategic junction in Greater Noida West with easy link-road access to Noida, Delhi and major NCR corridors. Key nearby points and approximate travel times:
          </motion.p>

          <div className="mt-6 space-y-3">
            {LOCATIONS.slice(1).map((loc) => (
              <motion.button
                key={loc.id}
                onClick={() => setActive(loc)}
                whileHover={{ x: 6 }}
                className={`group w-full text-left p-3 rounded-lg border ${active.id === loc.id ? "bg-amber-50 border-amber-200" : "bg-white border-gray-100"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-gray-100">
                      {/* simple pin icon */}
                      <svg className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 21s-6-4.35-6-9a6 6 0 1112 0c0 4.65-6 9-6 9z" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="11" r="2" />
                      </svg>
                    </span>

                    <div>
                      <div className="text-sm font-semibold text-gray-900">{loc.name}</div>
                      <div className="text-xs text-gray-500">{loc.id === "project" ? "Project location" : `${loc.time} from project`}</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 font-medium">{loc.time}</div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-6">
            <a href="https://www.google.com/maps/search/soya+south+x+location+map/@28.5636108,77.2175242,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold">View detailed map</a>
          </div>
        </div>

        <div className="md:col-span-2">
          {showMap ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.06 }} className="w-full h-80 md:h-96 rounded-xl overflow-hidden border border-gray-100">
              <MapContainer center={[CENTER.lat, CENTER.lng]} zoom={13} style={{ height: "100%", width: "100%" }} ref={mapRef}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {LOCATIONS.map((loc) => (
                  <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                    <Popup>
                      <div className="text-sm">
                        <div className="font-semibold">{loc.name}</div>
                        <div className="text-xs text-gray-600">{loc.time} from project</div>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                <FlyToLocation position={active} />
              </MapContainer>
            </motion.div>
          ) : (
            // Alternative fallback: static image or iframe
            <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50">
              <iframe
                title="Saya South X map"
                src={`https://www.google.com/maps?q=${CENTER.lat},${CENTER.lng}&z=14&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
