
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/cv/Header";
import Profile from "../components/cv/Profile";
import Education from "../components/cv/Education";
import Experience from "../components/cv/Experience";
import Skills from "../components/cv/Skills";
import Portfolio from "../components/cv/Portfolio";
import Contact from "../components/cv/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "education", "experience", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              BABACAR SARR
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "profile", label: "Profil" },
                { id: "education", label: "Formation" },
                { id: "experience", label: "Expérience" },
                { id: "skills", label: "Compétences" },
                { id: "portfolio", label: "Réalisations" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="pt-20">
        <Header />
        <div id="profile"><Profile /></div>
        <div id="education"><Education /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
};

export default Index;
