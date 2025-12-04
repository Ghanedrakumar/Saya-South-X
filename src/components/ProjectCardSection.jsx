import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Saya Avenue",
    subtitle: "High-street retail & leisure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaE2rF2HgePnjpVyCRxbu2mzqp58fedQe9Q&s",
  },
  {
    id: 2,
    title: "Saya Plaza",
    subtitle: "Premium retail arcade",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlovyWygxA5Hx2DrjMIPxYrPG8ZAE_cnjHFA&s",
  },
  {
    id: 3,
    title: "Saya One",
    subtitle: "Lifestyle & dining hub",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSMKfWU7MJmXO_hXLS98cDpU0u8SSAv6zQA&s",
  },
  {
    id: 4,
    title: "Saya Heights",
    subtitle: "Mixed-use commercial project",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASbDW_miwwPKLp-ZHmgY_KHKBJPjEF5huag&s",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function ProjectCardSection() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-700">
            Other Saya South Projects
          </h2>
          <p className="text-gray-600 mt-2">
            Explore other remarkable developments by Saya.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-2xl bg-white shadow overflow-hidden transform transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}   // <-- CARD ZOOM EFFECT
            >
              {/* Image */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" // <-- IMAGE ZOOM EFFECT
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=Project+Image";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
