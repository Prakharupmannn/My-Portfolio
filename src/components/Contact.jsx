import { motion } from "framer-motion";
import { MapPin, Mail, Smartphone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 md:px-20 relative">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">Contact</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors duration-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">awesome</span></h3>
          <p className="text-gray-400 text-lg font-light mb-10">
            Whether you have a project in mind or just want to say hi, my inbox is always open. Let's make it happen!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#0a1120] border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                <MapPin className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Location</h4>
                <p className="text-white text-lg">Jabalpur, India</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#0a1120] border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                <Mail className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Email</h4>
                <p className="text-white text-lg">upmanjiprakhar@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#0a1120] border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                <Smartphone className="text-pink-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Call Me</h4>
                <p className="text-white text-lg">+91 8827353112</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 rounded-3xl border border-white/10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-4 rounded-xl bg-[#040b14]/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-4 rounded-xl bg-[#040b14]/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
            <input
              type="text"
              placeholder="Web Development Project"
              className="w-full p-4 rounded-xl bg-[#040b14]/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
            <textarea
              placeholder="Tell me about your idea..."
              className="w-full p-4 rounded-xl bg-[#040b14]/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              rows="5"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button" 
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-shadow duration-300 flex items-center justify-center gap-3"
          >
            Send Message
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}