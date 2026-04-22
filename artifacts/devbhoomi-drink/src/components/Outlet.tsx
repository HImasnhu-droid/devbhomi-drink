import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Star } from "lucide-react";

export function Outlet() {
  return (
    <section id="outlet" className="py-24 px-6 md:px-12 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Sister Outlet in Rishikesh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pahadi Punch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our flavors fresh. Visit our outlet in the yoga capital of the world for fresh juices, shakes, and smoothies made with authentic mountain love.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border mb-8">
              <h3 className="font-bold text-xl mb-4">Fresh Menu Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {['Burans Juice', 'Malta Juice', 'Mousami Juice', 'Pineapple', 'Apple', 'Carrot', 'Mango', 'Watermelon', 'Fresh Shakes'].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9411190278" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                <Phone className="w-5 h-5" />
                9411190278
              </a>
              <a
                href="https://www.zomato.com/rishikesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-red-500 text-white font-bold border border-red-600 shadow-md hover:bg-red-600 hover:scale-105 active:scale-95 transition-all"
                data-testid="link-zomato"
              >
                <Star className="w-5 h-5 fill-current" />
                Order on Zomato
              </a>
            </div>
          </div>

          {/* Images Gallery */}
          <div className="order-1 lg:order-2 relative h-[500px] w-full">
            <motion.div 
              initial={{ rotate: -5, opacity: 0, x: -20 }}
              whileInView={{ rotate: -5, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-2/3 h-[300px] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20"
            >
              <img src="/outlet1.jpg" alt="Pahadi Punch Outlet Day" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ rotate: 5, opacity: 0, x: 20 }}
              whileInView={{ rotate: 5, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-10 right-0 w-2/3 h-[300px] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10"
            >
              <img src="/outlet2.jpg" alt="Pahadi Punch Outlet Night" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div 
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: -10, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-10 w-1/3 h-[200px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-30"
            >
              <img src="/menu1.jpg" alt="Pahadi Punch Menu" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
