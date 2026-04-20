import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Products() {
  const products = [
    {
      id: "malta",
      name: "Malta Juice",
      description: "Golden citrus from Pahadi orchards. Sun-kissed, sweet, and tangy.",
      color: "bg-[#fff7ed]",
      accentColor: "text-orange-500",
      borderColor: "border-orange-200",
      sizes: [
        { size: "Small", price: "₹10" },
        { size: "Large", price: "₹20" }
      ]
    },
    {
      id: "buransh",
      name: "Buransh Juice",
      description: "Made from rare Rhododendron flowers unique to Uttarakhand. Sweet, earthy, magical.",
      color: "bg-[#fff1f2]",
      accentColor: "text-[#e11d48]",
      borderColor: "border-rose-200",
      sizes: [
        { size: "Small", price: "₹10" },
        { size: "Large", price: "₹20" }
      ]
    }
  ];

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Authentic Flavors</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mountain Nectar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available all over India with our Central FSSAI license. Real fruit, real flowers, zero compromise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative overflow-hidden rounded-3xl border ${product.borderColor} ${product.color} p-8 md:p-12 transition-transform duration-300 hover:-translate-y-2`}
            >
              <h3 className={`font-devanagari text-5xl md:text-6xl font-black mb-2 ${product.accentColor} opacity-20 absolute top-8 right-8`}>
                {product.id === "malta" ? "माल्टा" : "बुरांश"}
              </h3>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className={`text-3xl font-bold mb-4 ${product.accentColor}`}>{product.name}</h3>
                <p className="text-foreground/80 mb-8 flex-grow text-lg">{product.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex items-center gap-4">
                    {product.sizes.map((s, i) => (
                      <div key={i} className="flex-1 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center shadow-sm">
                        <div className="text-sm font-medium text-muted-foreground mb-1">{s.size}</div>
                        <div className={`text-2xl font-black ${product.accentColor}`}>{s.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
