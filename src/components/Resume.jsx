import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="resume" className="pt-32 px-10 md:px-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">Resume</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <User className="w-5 h-5"/>
              </span> 
              Summary
            </h3>
            <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-blue-500/30 pb-4">
              <div className="absolute w-4 h-4 bg-[#040b14] border-2 border-blue-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="font-bold text-xl text-white">Prakhar Upman</h4>
              <p className="text-gray-400 mt-4 leading-relaxed font-light glass-panel p-5 rounded-2xl hover:border-blue-500/30 transition-colors">
                Enthusiastic Web Developer with strong knowledge of React.js and Tailwind CSS, seeking an opportunity to contribute to real-world projects and enhance my development skills.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <GraduationCap className="w-5 h-5"/>
              </span> 
              Education
            </h3>
            <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute w-4 h-4 bg-[#040b14] border-2 border-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#a855f7]"></div>
              <h4 className="font-bold text-xl text-white">B.Tech Computer Science</h4>
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-purple-300 my-3">
                2023 - 2027
              </span>
              <p className="text-gray-400 font-medium">Baderia Global Institute Of Engineering And Management</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
            <span className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
              <Briefcase className="w-5 h-5"/>
            </span> 
            Experience
          </h3>
          <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-pink-500/30">
            <div className="absolute w-4 h-4 bg-[#040b14] border-2 border-pink-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#ec4899]"></div>
            <h4 className="font-bold text-xl text-white">Frontend Developer</h4>
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-pink-300 my-3">
              2023 - Present
            </span>
            <ul className="list-none space-y-4 mt-4 glass-panel p-6 rounded-2xl hover:border-pink-500/30 transition-colors">
              {[
                "Built responsive UI using robust Tailwind CSS architecture.",
                "Architected reusable React components for scalability.",
                "Integrated secure backend APIs for smooth data exchange."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}