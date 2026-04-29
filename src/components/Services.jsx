import { motion } from "framer-motion";
import { Laptop, PenTool, Smartphone, Database } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Building modern web applications that are fast, responsive, and highly interactive.", icon: <Laptop/> },
    { title: "UI/UX Design", desc: "Creating user-friendly interfaces with a strong focus on aesthetics and user flow.", icon: <PenTool/> },
    { title: "Responsive Design", desc: "Mobile-first web layouts that look flawless across all screen sizes and devices.", icon: <Smartphone/> },
    { title: "API Integration", desc: "Connecting frontend with robust backend APIs for seamless data exchange.", icon: <Database/> },
  ];

  return (
    <section id="services" className="pt-32 px-10 md:px-20 relative">
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">Services</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            key={index}
            className="group glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transform group-hover:scale-150 transition-all duration-500 pointer-events-none *:w-32 *:h-32">
              {service.icon}
            </div>
            
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform *:w-6 *:h-6">
              {service.icon}
            </div>
            
            <h3 className="font-bold text-xl text-white mb-3">
              {service.title}
            </h3>
            
            <p className="text-gray-400 font-light leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}