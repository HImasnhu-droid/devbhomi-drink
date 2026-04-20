import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-16 border border-border shadow-sm relative overflow-hidden">
          {/* Decorative geometric mountain */}
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
             <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
             </svg>
          </div>

          <div className="relative z-10">
            <Quote className="w-16 h-16 text-secondary mb-8 opacity-50" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-foreground">
                "We are fighting against the unhealthy packaged juice market by bringing Uttarakhand's authentic, pure flavors to all of India."
              </h2>
              
              <div className="flex items-center gap-4 mt-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-xl font-bold text-primary">SG</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">Sachin Gairola</div>
                  <div className="text-muted-foreground font-medium">Founder, Devbhoomi Drink</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
