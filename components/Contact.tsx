"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@tomlemelle.fr",
      link: "mailto:contact@tomlemelle.fr",
      description: "Pour vos projets et collaborations",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 7 67 33 83 65",
      link: "tel:+33767338365",
      description: "Disponible du lundi au vendredi",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Rouen, France",
      link: null,
      description: "Déplacements possibles en Europe",
    },
  ];

  const socialLinks = [
    {
      icon: Camera,
      title: "Portfolio Principal",
      value: "tomlemelle.fr",
      link: "https://tomlemelle.fr",
      description: "Découvrez l'ensemble de mon travail",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@tomlemelle",
      link: "https://instagram.com/tomlemelle",
      description: "Suivez mes dernières créations",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 text-foreground"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Me contacter
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Vous avez un projet photographique ? N'hésitez pas à me contacter
            pour discuter de vos besoins et donner vie à vos idées. Je serais
            ravi de collaborer avec vous.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-accent/50 group-hover:scale-105">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon size={28} className="text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {info.description}
                  </p>
                  {info.link ? (
                    <motion.a
                      href={info.link}
                      className="text-accent hover:text-accent/80 transition-colors font-medium text-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.value}
                    </motion.a>
                  ) : (
                    <p className="text-foreground font-medium text-lg">
                      {info.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-accent/50 group-hover:scale-105 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <motion.div
                      className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon
                        size={32}
                        className="text-accent-foreground"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {social.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {social.description}
                      </p>
                      <motion.a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {social.value} <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
