import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "Node.js", percent: 70 },
    { name: "Tailwind", percent: 90 },
    { name: "C++", percent: 80 },
    { name: "Java", percent: 85 },
  ];

  return (
    <section id="skills" className="pt-32 px-10 md:px-20 relative">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">Skills</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-3xl"
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-300 tracking-wide">{skill.name}</span>
                <span className="text-blue-400 font-bold">{skill.percent}%</span>
              </div>

              <div className="w-full bg-[#0a1120] rounded-full h-3 border border-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-50 animate-[translate_1s_linear_infinite]"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}