'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}