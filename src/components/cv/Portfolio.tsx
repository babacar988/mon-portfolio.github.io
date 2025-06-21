
import { motion } from "framer-motion";
import { ExternalLink, Github, Award, Lightbulb, Users, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AGROMET-SERVICE",
      category: "Agriculture Intelligente",
      description: "Solution innovante primée au Climathon 2024 pour optimiser les pratiques agricoles grâce aux données météorologiques et à l'intelligence artificielle.",
      technologies: ["IoT", "Machine Learning", "API Météo", "React", "Node.js"],
      award: "2ème prix Climathon 2024",
      icon: Award,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Système d'Irrigation Automatisé",
      category: "IoT & Automation",
      description: "Système téléguidé primé au hackathon de la foire de l'emploi vert, permettant une irrigation intelligente basée sur les capteurs d'humidité et les prévisions météo.",
      technologies: ["Arduino", "Capteurs IoT", "Mobile App", "LoRaWAN"],
      award: "1er prix Hackathon Emploi Vert",
      icon: Zap,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Cartographie par Drone",
      category: "Télédétection",
      description: "Projet de traitement d'images par drone pour l'analyse des cultures et la détection de problèmes agricoles via l'intelligence artificielle.",
      technologies: ["Python", "OpenCV", "GIS", "Machine Learning"],
      award: "Projet de recherche",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Plateforme de Gestion Agricole",
      category: "Web Development",
      description: "Application web complète pour la gestion des exploitations agricoles, incluant le suivi des cultures, la gestion des stocks et l'analyse de performance.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      award: "Projet personnel",
      icon: Users,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mes Réalisations</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes projets innovants qui allient technologie et agriculture pour créer des solutions durables
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-8 h-8" />
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{project.award}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className={`flex-1 bg-gradient-to-r ${project.color} text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-gray-300 transition-colors">
                    <Github className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Intéressé par mes projets ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert à de nouvelles collaborations et défis technologiques. 
              Contactez-moi pour discuter de vos projets !
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Démarrer une collaboration
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
