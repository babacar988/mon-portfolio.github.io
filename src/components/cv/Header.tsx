
import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Header = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          {/* Photo de profil */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-blue-600">
                  <img src="baba.jpg.jpg" className="absolute -right-1,5 w-60 h-60 rounded-full" alt="" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-sm">DEVOPS</span>
              </div>
            </div>
          </motion.div>

          {/* Informations principales */}
          <div className="md:col-span-2 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              BABACAR
              <br />
              <span className="text-blue-200">SARR</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 font-light"
            >
              Ingénieur de Conception & Développeur Full-Stack
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+221 77 492 94 04</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>babacar.sarr988@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Dakar, Sénégal</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg">
                <Download className="w-5 h-5" />
                Télécharger CV
              </button>
              <div className="flex gap-3">
                <a href="www.linkedin.com/in/babacar-sarr-506444285" className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300">
                  <Linkedin className="w-6 h-6"  />
                </a>
                <a href="https://github.com/babacar988/" className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300">
                  <Github className="w-6 h-6"/>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
