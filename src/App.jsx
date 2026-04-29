import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="flex bg-[#040b14] min-h-screen selection:bg-blue-500/30 overflow-hidden cursor-none md:cursor-auto">
      <CustomCursor />
      
      {/* Dynamic Animated Underlay */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#040b14] to-[#040b14] pointer-events-none"></div>

      <Sidebar />

      <div className="flex-1 ml-0 lg:ml-72 relative z-10 w-full">
        <Hero />
        <div className="space-y-32 pb-20">
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}