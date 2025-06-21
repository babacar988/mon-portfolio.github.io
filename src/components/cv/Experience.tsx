
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "2ème prix du climathon 2024",
      organization: "AUF en collaboration avec l'Université du Sine Saloum",
      team: "équipe AGROMET-SERVICE",
      period: "2024",
      type: "Compétition",
      description: "Développement d'une solution innovante pour l'agriculture intelligente"
    },
    {
      title: "1er prix du hackathon de la foire de l'emploi vert",
      organization: "Proposition d'un système d'irrigation automatisé et téléguidé",
      period: "2023",
      type: "Hackathon",
      description: "Conception d'un système IoT pour l'optimisation de l'irrigation agricole"
    },
    {
      title: "Stagiaire à la FERME AGRO-ÉCOLOGIQUE DE KAYDARA",
      period: "10/08/2022-25/09/2022",
      type: "Stage",
      description: "Application pratique des technologies agricoles et gestion des systèmes de production"
    },
    {
      title: "Atelier de conduite de drone et traitement d'image",
      organization: "Université du Sine Saloum El hadji Ibrahima Niass (USSEIN)",
      period: "24/03/2022-24/03/2022",
      type: "Formation",
      description: "Formation spécialisée en télédétection et imagerie par drone"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Compétition":
      case "Hackathon":
        return Award;
      case "Stage":
        return Briefcase;
      case "Formation":
        return Users;
      default:
        return Briefcase;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "Compétition":
        return "from-yellow-500 to-orange-500";
      case "Hackathon":
        return "from-green-500 to-emerald-500";
      case "Stage":
        return "from-blue-500 to-indigo-500";
      case "Formation":
        return "from-purple-500 to-pink-500";
      default:
        return "from-blue-500 to-indigo-500";
    }
  };

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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Expériences Professionnelles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((item, index) => {
              const IconComponent = getIcon(item.type);
              const colorClass = getColor(item.type);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  <div className={`hidden md:flex w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full items-center justify-center shadow-lg flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                          <span className={`px-3 py-1 bg-gradient-to-r ${colorClass} text-white rounded-full text-xs font-medium`}>
                            {item.type}
                          </span>
                        </div>
                        {item.organization && (
                          <p className="text-gray-600 font-medium">{item.organization}</p>
                        )}
                        {item.team && (
                          <p className="text-gray-500 text-sm mt-1">{item.team}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
