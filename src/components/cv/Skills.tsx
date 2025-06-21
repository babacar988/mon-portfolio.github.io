
import { motion } from "framer-motion";
import { Code, Database, Globe, Wrench, Languages, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Compétences en Informatique",
      icon: Code,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Bases de données relationnelles (SQL, MySQL, ORACLE)", level: 85 },
        { name: "Programmation Web", level: 80 },
        { name: "Cartographie", level: 75 },
        { name: "Notions de base en Python3", level: 70 },
        { name: "Word, Excel, PowerPoint", level: 90 }
      ]
    },
    {
      title: "Domaines de Compétence",
      icon: Wrench,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Modélisation et gestion de base de données", level: 85 },
        { name: "Intégration des systèmes embarqués (agriculture)", level: 80 },
        { name: "Modélisation et mise en œuvre de solutions", level: 75 },
        { name: "Gestion et suivi de production", level: 70 },
        { name: "Maîtrise de la performance des systèmes", level: 78 }
      ]
    },
    {
      title: "Compétences Linguistiques",
      icon: Languages,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Français", level: 95 },
        { name: "Anglais", level: 75 },
        { name: "Wolof", level: 100 }
      ]
    }
  ];

  const certifications = [
    "Certification en PYTHON ESSENTIALS 1 dispensé par Cisco Networking Academy",
    "Attestation de Stage à la ferme Agroécologique KAYDARA",
    "Lycée CHEIKH OUMAR FOUTIYOU TALL de SAINT-LOUIS (Baccalauréat en Série S2)"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Compétences & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        {/* Compétences */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Diplômes et Attestations</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
