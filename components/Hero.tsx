'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    {
      src: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
      alt: 'Photographie de sport'
    },
    {
      src: 'https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg',
      alt: 'Portrait artistique'
    },
    {
      src: 'https://images.pexels.com/photos/40896/lion-wildlife-animal-nature-40896.jpeg',
      alt: 'Photographie animalière'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center filter brightness-60"
            style={{ backgroundImage: `url(${image.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </motion.div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">
              Tom Lemelle
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-80 font-sans">
              Photographe
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;