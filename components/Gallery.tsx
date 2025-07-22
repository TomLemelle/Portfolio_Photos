'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedStyle, setSelectedStyle] = useState('Tous');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['Tous', 'Sport', 'Portrait', 'Animalier'];
  const styles = ['Tous', 'Couleur', 'Noir et Blanc'];

  const images = [
    { 
      src: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg', 
      category: 'Sport', 
      style: 'Couleur',
      title: 'Action sportive',
      description: 'Capture de l\'intensité du moment'
    },
    { 
      src: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg', 
      category: 'Sport', 
      style: 'Noir et Blanc',
      title: 'Performance athlétique',
      description: 'L\'effort dans toute sa beauté'
    },
    { 
      src: 'https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg', 
      category: 'Portrait', 
      style: 'Couleur',
      title: 'Portrait contemplatif',
      description: 'L\'émotion à l\'état pur'
    },
    { 
      src: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', 
      category: 'Portrait', 
      style: 'Noir et Blanc',
      title: 'Expression naturelle',
      description: 'Authenticité et caractère'
    },
    { 
      src: 'https://images.pexels.com/photos/40896/lion-wildlife-animal-nature-40896.jpeg', 
      category: 'Animalier', 
      style: 'Couleur',
      title: 'Majesté sauvage',
      description: 'Le roi dans son élément'
    },
    { 
      src: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg', 
      category: 'Animalier', 
      style: 'Noir et Blanc',
      title: 'Grâce naturelle',
      description: 'Élégance de la faune'
    },
    { 
      src: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg', 
      category: 'Sport', 
      style: 'Couleur',
      title: 'Dynamisme urbain',
      description: 'Sport et environnement'
    },
    { 
      src: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg', 
      category: 'Portrait', 
      style: 'Couleur',
      title: 'Personnalité marquée',
      description: 'Caractère et distinction'
    },
    { 
      src: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg', 
      category: 'Animalier', 
      style: 'Noir et Blanc',
      title: 'Liberté sauvage',
      description: 'L\'animal dans son habitat'
    }
  ];

  const filteredImages = images.filter(img => {
    const categoryMatch = selectedCategory === 'Tous' || img.category === selectedCategory;
    const styleMatch = selectedStyle === 'Tous' || img.style === selectedStyle;
    return categoryMatch && styleMatch;
  });

  const handleImageClick = (image: any) => {
    const index = filteredImages.findIndex(img => img.src === image.src);
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-foreground">Galerie</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes travaux à travers mes trois univers de prédilection
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          {/* Catégories */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Catégories</h3>
            <div className="flex flex-wrap gap-2 bg-muted p-2 rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category 
                      ? 'bg-accent text-accent-foreground' 
                      : 'hover:bg-accent/10'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Style</h3>
            <div className="flex flex-wrap gap-2 bg-muted p-2 rounded-lg">
              {styles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "ghost"}
                  onClick={() => setSelectedStyle(style)}
                  className={`${
                    selectedStyle === style 
                      ? 'bg-accent text-accent-foreground' 
                      : 'hover:bg-accent/10'
                  }`}
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${selectedCategory}-${selectedStyle}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-6 block"
                onClick={() => handleImageClick(image)}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 ${
                    image.style === 'Noir et Blanc' ? 'grayscale' : ''
                  }`}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                  {image.style === 'Noir et Blanc' && (
                    <div className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      N&B
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Image Viewer */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 z-10 text-white hover:bg-white/10 w-12 h-12"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={28} />
              </Button>

              {/* Previous button */}
              {selectedImageIndex > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 w-12 h-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                >
                  <ChevronLeft size={32} />
                </Button>
              )}

              {/* Next button */}
              {selectedImageIndex < filteredImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 w-12 h-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                >
                  <ChevronRight size={32} />
                </Button>
              )}

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].title}
                  className={`max-w-full max-h-full object-contain ${
                    filteredImages[selectedImageIndex].style === 'Noir et Blanc' ? 'grayscale' : ''
                  }`}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;