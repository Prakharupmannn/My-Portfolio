import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ethan Walker",
      role: "CEO, TechNova",
      msg: "Amazing work! Very professional developer. The attention to detail in the UI was honestly breathtaking.",
    },
    {
      name: "Sarah Jenkins",
      role: "Product Manager",
      msg: "Delivered the project on time and with extremely high quality. Absolute pleasure to collaborate with.",
    },
    {
      name: "David Chen",
      role: "Founding Designer",
      msg: "Great communication and very clean code. Built exactly what we designed with perfect pixel precision.",
    },
  ];

  return (
    <section id="testimonials" className="pt-32 px-10 md:px-20 relative">
      <div className="absolute left-1/4 top-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16 justify-center"
      >
        <div className="h-1 w-16 bg-gradient-to-l from-purple-500 to-transparent rounded"></div>
        <h2 className="text-4xl md:text-5xl font-black text-white text-center">Testimonials</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="group glass-panel p-8 rounded-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300 relative mt-4"
          >
            <div className="absolute -top-6 left-8 text-purple-500/30 group-hover:text-purple-400/50 transition-colors bg-[#040b14] p-2 rounded-full border border-purple-500/20">
               <Quote className="w-8 h-8 rotate-180" />
            </div>
            
            <p className="text-gray-300 italic font-light leading-relaxed relative z-10 pt-6 mb-6 text-lg">
              "{item.msg}"
            </p>
            
            <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg text-lg">
                {item.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight">{item.name}</h3>
                <p className="text-xs text-purple-400 uppercase tracking-widest mt-1">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}