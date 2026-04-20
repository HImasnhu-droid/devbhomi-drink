import React from "react";
import { motion } from "framer-motion";
import { Droplet, Sparkles, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-gradient-to-b from-[#e9f2eb] to-[#fcfaf5] flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0, x: Math.random() * 100 - 50 }}
            animate={{ 
              y: "110vh", 
              opacity: [0, 0.6, 0],
              x: `calc(${Math.random() * 100 - 50}vw)`,
              rotate: Math.random() * 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute top-0 text-3xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {i % 3 === 0 ? <Leaf className="text-primary/30 w-8 h-8" /> : 
             i % 3 === 1 ? <Droplet className="text-blue-400/30 w-6 h-6" /> : 
             <Sparkles className="text-secondary/40 w-5 h-5" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 relative"
        >
          <motion.h1 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-devanagari text-[120px] md:text-[200px] leading-none font-black text-primary drop-shadow-sm tracking-tight"
          >
            देवभूमि
          </motion.h1>
          <motion.h2
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="font-cursive text-6xl md:text-8xl text-accent absolute -bottom-10 md:-bottom-16 right-0 md:-right-10 transform -rotate-6"
          >
            drink
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24 max-w-lg text-lg md:text-2xl text-muted-foreground font-medium"
        >
          The taste of the Himalayas in a bottle. Pure, natural, mountain-spring fresh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10"
        >
          <a href="#products" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground text-lg font-bold shadow-lg hover:bg-primary/90 transition-colors hover:scale-105 active:scale-95 duration-200">
            Taste the Magic
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
