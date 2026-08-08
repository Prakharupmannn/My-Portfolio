import ecommerceImg from "../assets/ecommerce.png";
import foodDeliveryImg from "../assets/food_delivery.png";
import chatbotImg from "../assets/chatbot.png";

export const portfolioItems = [
  {
    id: 1,
    title: "Forever",
    category: "Web",
    img: ecommerceImg,
    description: "A high-performance e-commerce platform featuring a modern grid layout, glassmorphic checkout flows, and fluid micro-interactions.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Vyanjanam",
    category: "App",
    img: foodDeliveryImg,
    description: "A sleek, responsive food ordering application featuring interactive search filters, live order tracking UI, and rich menu categories.",
    tags: ["React Native", "TailwindCSS", "Redux Toolkit"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "OmniChat AI",
    category: "Web",
    img: chatbotImg,
    description: "An AI-powered messaging assistant featuring real-time stream responses, sleek message bubble animations, and dark-mode optimization.",
    tags: ["Next.js", "AI Integrations", "WebSockets"],
    demoUrl: "#",
  },
];