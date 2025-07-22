"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      if (sectionId === "hero") {
        router.push("/");
      } else {
        router.push(`/#${sectionId}`);
        setIsMobileMenuOpen(false);
      }
    }
  };

  const menuItems = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { href: "/gallery", label: "Galerie" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b shadow-lg"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Left - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {menuItems.slice(0, 2).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id!)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative font-sans ${
                  isScrolled
                    ? "text-foreground/70 hover:text-accent"
                    : "text-white/80 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <Link href="/gallery">
              <motion.span
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative font-sans cursor-pointer ${
                  isScrolled
                    ? "text-foreground/70 hover:text-accent"
                    : "text-white/80 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Galerie
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>
            {menuItems.slice(3).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id!)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative font-sans ${
                  isScrolled
                    ? "text-foreground/70 hover:text-accent"
                    : "text-white/80 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Center - Name */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <h1
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-accent" : "text-white"
              }`}
            >
              Tom Lemelle
            </h1>
          </motion.div>

          {/* Right - Social Links */}
          <div className="hidden md:flex items-center space-x-2 flex-1 justify-end">
            <motion.a
              href="https://instagram.com/tomlemelle"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors ${
                isScrolled
                  ? "text-foreground/70 hover:text-accent"
                  : "text-white/80 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={20} />
            </motion.a>
            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </Button>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.a
              href="https://instagram.com/tomlemelle"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors ${
                isScrolled
                  ? "text-foreground/70 hover:text-accent"
                  : "text-white/80 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={20} />
            </motion.a>
            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-b shadow-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) =>
            item.href ? (
              <Link key={item.href} href={item.href}>
                <span className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/70 hover:text-accent transition-colors font-sans">
                  {item.label}
                </span>
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id!)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/70 hover:text-accent transition-colors font-sans"
              >
                {item.label}
              </button>
            )
          )}
          <a
            href="https://instagram.com/tomlemelle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-base font-medium text-accent hover:text-accent/80 transition-colors font-sans"
          >
            <Instagram size={16} /> @tomlemelle
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
