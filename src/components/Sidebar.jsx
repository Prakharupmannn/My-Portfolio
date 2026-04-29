import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Zap, FileText, Image as ImageIcon, Briefcase, MessageSquare, Phone, Globe, Camera } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#hero", icon: <Home className="w-5 h-5" /> },
    { name: "About", link: "#about", icon: <User className="w-5 h-5" /> },
    { name: "Skills", link: "#skills", icon: <Zap className="w-5 h-5" /> },
    { name: "Resume", link: "#resume", icon: <FileText className="w-5 h-5" /> },
    { name: "Portfolio", link: "#portfolio", icon: <ImageIcon className="w-5 h-5" /> },
    { name: "Services", link: "#services", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testimonials", link: "#testimonials", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Contact", link: "#contact", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-6 right-6 z-50 bg-[#040b14]/50 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/10 transition-all border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95 group"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#040b14]/60 backdrop-blur-3xl border-r border-white/5 text-white z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-500 ease-out flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.8)] overflow-hidden`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full overflow-y-auto overflow-x-hidden scrollbar-hide py-10">
          
          <div className="flex flex-col items-center px-6">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="relative group cursor-pointer mt-4"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-[spin_4s_linear_infinite] opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              <div className="relative p-1 bg-[#040b14] rounded-full">
                <img
                  src="my formal photo.jpeg"
                  alt="Profile"
                  className="rounded-full object-cover w-32 h-32 border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-black mt-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg"
            >
              Prakhar
            </motion.h1>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-medium tracking-widest text-blue-400 uppercase mt-1"
            >
              Upman
            </motion.h1>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 mt-6 w-full justify-center"
            >
              {[<Globe className="w-5 h-5"/>, <Briefcase className="w-5 h-5"/>, <Camera className="w-5 h-5"/>].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="relative flex items-center justify-center w-10 h-10 bg-white/5 rounded-xl hover:bg-gradient-to-tr hover:from-blue-600 hover:to-purple-600 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.4)] transition-all duration-300 border border-white/5 group text-gray-400 hover:text-white"
                >
                  <span className="group-hover:scale-110 transition-transform">{icon}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

          <nav className="flex-1 px-4">
            <ul className="space-y-1.5">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <a
                    href={item.link}
                    className="group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl overflow-hidden transition-all duration-300 text-gray-400 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-blue-500 group-hover:h-3/4 rounded-r-full shadow-[0_0_10px_#3b82f6] transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"></div>
                    
                    <span className="relative z-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 drop-shadow-md">
                      {item.icon}
                    </span>
                    <span className="relative z-10 text-[15px] font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300 drop-shadow-sm">
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </div>
      
      {open && (
        <div 
          className="fixed inset-0 bg-[#040b14]/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;