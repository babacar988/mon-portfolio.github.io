
import { motion } from "framer-motion";
import { Code, Database, Server, Smartphone } from "lucide-react";

const Profile = () => {
  const highlights = [
    { icon: Code, text: "Développement Full-Stack" },
    { icon: Database, text: "Gestion de Bases de Données" },
    { icon: Server, text: "Systèmes Embarqués" },
    { icon: Smartphone, text: "Applications Mobiles" }
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">À Propos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Étudiant passionné en cycle ingénieur informatique, spécialisé dans les techniques 
              informatiques niveau 3 (DI113) à l'Institut Supérieur d'Informatique de Dakar (ISI). 
              Je me consacre activement à des projets innovants en développement logiciel et 
              technologies émergentes.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Mon objectif est de rejoindre une équipe dynamique où je pourrai relever des défis 
              technologiques, approfondir mes compétences techniques et participer à la création 
              de solutions à forte valeur ajoutée.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {["Innovation", "Créativité", "Leadership", "Collaboration"].map((trait, index) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-700 font-medium text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
