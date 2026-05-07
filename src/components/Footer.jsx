import { Globe, Briefcase, Camera, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 text-center border-t border-white/10 mt-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-24 bg-blue-600/20 blur-3xl -z-10 rounded-full"></div>
      
      <div className="flex gap-6 justify-center mb-6">
        {[<Globe className="w-5 h-5"/>, <Briefcase className="w-5 h-5"/>, <Camera className="w-5 h-5"/>, <Mail className="w-5 h-5"/>].map((icon, idx) => (
          <a
            key={idx}
            href="#"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            {icon}
          </a>
        ))}
      </div>

      <p className="text-gray-400 font-light tracking-wide mb-2 text-sm md:text-base cursor-default flex items-center justify-center gap-2">
        Crafted with <Heart className="w-4 h-4 text-purple-500 animate-pulse fill-purple-500" /> by
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold ml-1">
          Prakhar Upman
        </span>
      </p>
      <p className="text-gray-600 text-xs tracking-widest uppercase font-black cursor-default">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}