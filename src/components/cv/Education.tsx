
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Institut Supérieur d'Informatique de DAKAR (ISI)",
      degree: "Diplôme d'Ingénieur en Techniques Informatiques niveau 3 (DI113)",
      period: "2024-2025",
      location: "Dakar, Sénégal",
      status: "En cours"
    },
    {
      institution: "Université du Sine Saloum El hadji Ibrahima Niass (USSEIN)",
      degree: "Licence 2 en AgroTIC",
      period: "2020-2021",
      location: "Kaolack, Sénégal",
      status: "Diplômé"
    },
    {
      institution: "Université du Sine Saloum El hadji Ibrahima Niass (USSEIN)",
      degree: "Licence 1 en AgroTIC",
      period: "2019-2020",
      location: "Kaolack, Sénégal",
      status: "Diplômé"
    }
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Formation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full items-center justify-center shadow-lg flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                      {item.institution}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "En cours" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-700 font-medium mb-4">{item.degree}</p>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
