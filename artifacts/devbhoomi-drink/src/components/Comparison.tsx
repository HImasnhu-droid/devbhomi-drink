import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Leaf, Factory } from "lucide-react";

export function Comparison() {
  const comparisonData = [
    {
      trait: "Ingredients",
      us: "Real Pahadi Fruit & Flowers",
      them: "Artificial Flavors & Extracts"
    },
    {
      trait: "Origin",
      us: "Uttarakhand Mountains",
      them: "Industrial Factories"
    },
    {
      trait: "Health",
      us: "Natural Goodness",
      them: "Heavy Sugar & Preservatives"
    },
    {
      trait: "Colors",
      us: "100% Natural",
      them: "Synthetic Dyes"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nature vs. Factory</h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">
            We're changing what India drinks. Step away from corporate colas and taste the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center bg-primary-foreground/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary-foreground/20">
          
          {/* US */}
          <div className="space-y-8">
            <div className="flex items-center justify-center md:justify-start gap-3 text-secondary mb-8">
              <Leaf className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Devbhoomi Drink</h3>
            </div>
            
            <div className="space-y-6">
              {comparisonData.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold mb-1">{item.trait}</div>
                    <div className="font-medium text-lg">{item.us}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center justify-center h-full py-8">
            <div className="w-px h-full bg-primary-foreground/20 rounded-full" />
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-primary-foreground/10 my-4 text-sm font-bold text-primary-foreground/50">VS</div>
            <div className="w-px h-full bg-primary-foreground/20 rounded-full" />
          </div>

          {/* THEM */}
          <div className="space-y-8 mt-12 md:mt-0 pt-12 md:pt-0 border-t border-primary-foreground/20 md:border-t-0">
            <div className="flex items-center justify-center md:justify-end gap-3 text-destructive mb-8">
              <h3 className="text-2xl font-bold">Mass Market Drinks</h3>
              <Factory className="w-8 h-8" />
            </div>
            
            <div className="space-y-6">
              {comparisonData.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-start gap-3 justify-end text-right"
                >
                  <div>
                    <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold mb-1">{item.trait}</div>
                    <div className="font-medium text-lg opacity-80 line-through decoration-destructive/50">{item.them}</div>
                  </div>
                  <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
