import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const details = [
    { label: "Birthday", value: "29 June 2005" },
    { label: "Age", value: "20" },
    { label: "Website", value: "www.forever.com" },
    { label: "Email", value: "upmanjiprakhar@gmail.com" },
    { label: "Phone", value: "+91 8827353112" },
    { label: "City", value: "Jabalpur, India" },
  ];

  return (
    <section id="about" className="pt-32 px-10 md:px-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">About</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="About me"
            className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full border border-white/10 filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <div className="lg:col-span-7">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            UI/UX Designer & Web Developer
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg leading-relaxed mix-blend-lighten"
          >
            I am a passionate developer dedicated to creating premium, immersive web experiences. 
            Blending technical proficiency with high-end aesthetic design, I build interfaces that feel beautifully alive and intuitive.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-colors duration-500"
          >
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex flex-col group">
                  <span className="text-blue-400/80 font-medium text-sm tracking-wider uppercase mb-1 flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-500 group-hover:translate-x-2 transition-transform" />
                    {item.label}
                  </span>
                  <span className="text-gray-200 text-lg font-light pl-5">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}