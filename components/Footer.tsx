import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-background/95 backdrop-blur-xl border-t py-6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground font-sans">
          <div className="mb-2 md:mb-0">
            <span className="font-medium text-foreground">Tom Lemelle</span> - Photographe
          </div>
          <div className="text-center md:text-right">
            © 2025 Tom Lemelle. Tous droits réservés sur les photographies.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;