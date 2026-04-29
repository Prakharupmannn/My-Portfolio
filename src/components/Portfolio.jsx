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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="group glass-panel rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500 border border-white/10 relative"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#040b14] animate-pulse -z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-700">
                   <ImageIcon className="w-12 h-12 text-gray-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#040b14] to-transparent opacity-80 decoration-0"></div>
              </div>
              
              <div className="absolute bottom-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-blue-400 text-sm font-semibold mb-1 uppercase tracking-wider">{item.category}</p>
                <h3 className="font-bold text-2xl text-white">{item.title}</h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                    View Project <ExternalLink className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}