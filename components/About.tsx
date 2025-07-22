"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  const images = [
    "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
    "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg",
    "https://images.pexels.com/photos/40896/lion-wildlife-animal-nature-40896.jpeg",
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images superposées */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:h-[700px]"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 + index * 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -10 + index * 10 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`absolute w-80 h-96 rounded-2xl shadow-2xl overflow-hidden ${
                  index === 0
                    ? "top-0 left-0 z-30"
                    : index === 1
                    ? "top-16 left-16 z-20"
                    : "top-32 left-32 z-10"
                }`}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 40,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
                À propos
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                Photographe français de 25 ans, je me passionne pour trois
                univers distincts mais complémentaires : le sport, le portrait
                et la photographie animalière.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ma polyvalence est mon atout principal. Chaque domaine enrichit
                ma vision artistique et me permet de créer des images uniques
                qui racontent une histoire.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                À travers mon objectif, je capture l'émotion pure,
                l'authenticité des moments et la beauté brute de la nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-light tracking-wide"
              >
                <Link href="/gallery">Voir mes réalisations</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
