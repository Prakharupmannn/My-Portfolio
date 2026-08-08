import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../data/portfolioData";
import { ExternalLink, ImageIcon } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "App", "Design"];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="pt-32 px-10 md:px-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">Portfolio</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 mb-12 flex-wrap justify-center bg-[#0a1120] p-2 rounded-2xl border border-white/5 inline-flex w-fit mx-auto"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-8 py-3 rounded-xl transition-all duration-300 font-medium ${
              filter === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="group glass-panel rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 border border-white/10 flex flex-col bg-white/[0.02]"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-[#040b14] animate-pulse -z-10"></div>
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-700">
                     <ImageIcon className="w-12 h-12 text-gray-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040b14]/50 to-transparent"></div>
                <span className="absolute top-4 right-4 text-[10px] px-3 py-1 bg-blue-600/90 text-white rounded-full font-bold uppercase tracking-wider backdrop-blur-sm border border-blue-400/30 shadow-md">
                  {item.category}
                </span>
              </div>
              
              {/* Text Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div>
                  {item.tags && (
                    <div className="flex gap-2 flex-wrap mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2.5 py-1 bg-white/5 text-gray-300 rounded-full border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <a 
                    href={item.demoUrl || "#"} 
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-semibold group-hover:underline"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}