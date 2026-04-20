import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Pride() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 bg-primary text-primary-foreground overflow-hidden">
      {/* Parallax Mountain Shapes */}
      <motion.div style={{ y: y1 }} className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute top-0 -right-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-devanagari text-6xl md:text-8xl font-black mb-6 text-secondary/90">देवभूमि</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8">The Land of Gods</h3>
          
          <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 font-medium mb-12">
            Every sip carries the essence of Uttarakhand. From the sacred rivers to the snow-capped peaks, we bottle the purity of the mountains. No shortcuts, no compromises. Just the raw, untamed spirit of the Himalayas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-primary-foreground/20 pt-12">
            <div>
              <div className="text-4xl font-black mb-2 text-secondary">100%</div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/70 font-semibold">Pahadi Origin</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-secondary">Zero</div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/70 font-semibold">Artificial Colors</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-secondary">Rare</div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/70 font-semibold">Buransh Flowers</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-secondary">Real</div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/70 font-semibold">Malta Citrus</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
