"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedStyle, setSelectedStyle] = useState("Tous");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const categories = ["Tous", "Sport", "Portrait", "Animalier"];
  const styles = ["Tous", "Couleur", "Noir et Blanc"];

  const images = [
    {
      src: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
      category: "Sport",
      style: "Couleur",
    },
    {
      src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      category: "Sport",
      style: "Noir et Blanc",
    },
    {
      src: "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg",
      category: "Portrait",
      style: "Couleur",
    },
    {
      src: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      category: "Portrait",
      style: "Noir et Blanc",
    },
    {
      src: "https://images.pexels.com/photos/40896/lion-wildlife-animal-nature-40896.jpeg",
      category: "Animalier",
      style: "Couleur",
    },
    {
      src: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
      category: "Animalier",
      style: "Noir et Blanc",
    },
    {
      src: "https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg",
      category: "Sport",
      style: "Couleur",
    },
    {
      src: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg",
      category: "Portrait",
      style: "Couleur",
    },
    {
      src: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg",
      category: "Animalier",
      style: "Noir et Blanc",
    },
    {
      src: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg",
      category: "Sport",
      style: "Noir et Blanc",
    },
    {
      src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      category: "Portrait",
      style: "Noir et Blanc",
    },
    {
      src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg",
      category: "Animalier",
      style: "Couleur",
    },
  ];

  const filteredImages = images.filter((img) => {
    const categoryMatch =
      selectedCategory === "Tous" || img.category === selectedCategory;
    const styleMatch = selectedStyle === "Tous" || img.style === selectedStyle;
    return categoryMatch && styleMatch;
  });

  const handleImageClick = (image: any) => {
    const index = filteredImages.findIndex((img) => img.src === image.src);
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < filteredImages.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "Escape") setSelectedImageIndex(null);
  };

  // Add keyboard event listener
  React.useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-6 font-sans">
                <ArrowLeft size={16} className="mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
              Galerie
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Découvrez l'ensemble de mes travaux à travers mes trois univers de
              prédilection
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {/* Catégories */}
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide font-sans">
                  Catégories
                </h3>
                <div className="flex flex-wrap gap-2 bg-muted/50 p-3 rounded-xl border">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "ghost"
                      }
                      onClick={() => setSelectedCategory(category)}
                      className={`font-sans transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-accent text-accent-foreground shadow-md"
                          : "hover:bg-accent/10 hover:scale-105"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Styles */}
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide font-sans">
                  Style
                </h3>
                <div className="flex flex-wrap gap-2 bg-muted/50 p-3 rounded-xl border">
                  {styles.map((style) => (
                    <Button
                      key={style}
                      variant={selectedStyle === style ? "default" : "ghost"}
                      onClick={() => setSelectedStyle(style)}
                      className={`font-sans transition-all duration-300 ${
                        selectedStyle === style
                          ? "bg-accent text-accent-foreground shadow-md"
                          : "hover:bg-accent/10 hover:scale-105"
                      }`}
                    >
                      {style}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Compteur de résultats */}
            <div className="text-sm text-muted-foreground font-sans">
              {filteredImages.length} photo
              {filteredImages.length > 1 ? "s" : ""} trouvée
              {filteredImages.length > 1 ? "s" : ""}
            </div>
          </motion.div>

          {/* Filtres actifs */}
          {(selectedCategory !== "Tous" || selectedStyle !== "Tous") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-muted-foreground font-sans">
                  Filtres actifs :
                </span>
                {selectedCategory !== "Tous" && (
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-sans">
                    {selectedCategory}
                  </span>
                )}
                {selectedStyle !== "Tous" && (
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-sans">
                    {selectedStyle}
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("Tous");
                    setSelectedStyle("Tous");
                  }}
                  className="text-xs font-sans text-muted-foreground hover:text-foreground"
                >
                  Effacer tout
                </Button>
              </div>
            </motion.div>
          )}

          {/* Message si aucun résultat */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-lg text-muted-foreground font-sans">
                Aucune photo ne correspond à ces critères
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("Tous");
                  setSelectedStyle("Tous");
                }}
                className="mt-4 font-sans"
              >
                Voir toutes les photos
              </Button>
            </motion.div>
          )}

          {/* Image grid */}
          {filteredImages.length > 0 && (
            <motion.div
              layout
              className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${image.src}-${selectedCategory}-${selectedStyle}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-6 block"
                    onClick={() => handleImageClick(image)}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={image.src}
                      alt={"Image du photographe Tom Lemelle"}
                      className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 ${
                        image.style === "Noir et Blanc" ? "grayscale" : ""
                      }`}
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                        {image.category}
                      </div>
                      {image.style === "Noir et Blanc" && (
                        <div className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                          N&B
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

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
                    alt={"Image du photographe Tom Lemelle"}
                    className={`max-w-full max-h-full object-contain ${
                      filteredImages[selectedImageIndex].style ===
                      "Noir et Blanc"
                        ? "grayscale"
                        : ""
                    }`}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
