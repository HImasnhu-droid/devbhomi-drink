import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Products() {
  const products = [
    {
      id: "malta",
      name: "Malta Juice",
      hindi: "माल्टा",
      tagline: "Pahadon ka asli orange",
      description: "Golden citrus from Pahadi orchards. Sun-kissed, sweet, and tangy — Vitamin C straight from the hills.",
      bottleImg: "/logo-malta.jpg",
      bottleColor: "linear-gradient(180deg, #ff7a18 0%, #ff9a3c 50%, #ff7a18 100%)",
      capColor: "#7a2e0b",
      bgColor: "bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100",
      accentColor: "text-orange-600",
      borderColor: "border-orange-200",
      ringColor: "ring-orange-300",
      sizes: [
        { size: "Small", price: "₹10" },
        { size: "Large", price: "₹20" },
      ],
    },
    {
      id: "buransh",
      name: "Buransh Juice",
      hindi: "बुरांश",
      tagline: "Pahadon ka anmol tohfa",
      description: "Made from rare Rhododendron flowers unique to Uttarakhand. Sweet, earthy, magical — a forest in every sip.",
      bottleImg: "/logo-buransh.jpg",
      bottleColor: "linear-gradient(180deg, #8b0000 0%, #c41e3a 50%, #8b0000 100%)",
      capColor: "#3d0a0a",
      bgColor: "bg-gradient-to-br from-rose-50 via-red-50 to-rose-100",
      accentColor: "text-rose-700",
      borderColor: "border-rose-200",
      ringColor: "ring-rose-300",
      sizes: [
        { size: "Small", price: "₹10" },
        { size: "Large", price: "₹20" },
      ],
    },
  ];

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Authentic Flavors</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mountain Nectar in a Bottle</h2>
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
              className={`relative overflow-hidden rounded-3xl border-2 ${product.borderColor} ${product.bgColor} p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg`}
              data-testid={`card-product-${product.id}`}
            >
              {/* Watermark Hindi */}
              <h3
                className={`font-devanagari text-7xl md:text-8xl font-black ${product.accentColor} opacity-10 absolute -top-4 -right-2 select-none pointer-events-none`}
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {product.hindi}
              </h3>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                {/* Bottle illustration */}
                <motion.div
                  className="relative shrink-0"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Bottle shape */}
                  <div className="relative w-32 md:w-36">
                    {/* Cap */}
                    <div
                      className="mx-auto w-12 h-6 rounded-t-md"
                      style={{ background: product.capColor }}
                    />
                    <div
                      className="mx-auto w-14 h-2 -mt-px"
                      style={{ background: product.capColor, opacity: 0.7 }}
                    />
                    {/* Neck */}
                    <div
                      className="mx-auto w-10 h-4"
                      style={{ background: "rgba(255,255,255,0.4)", borderLeft: "2px solid rgba(0,0,0,0.05)", borderRight: "2px solid rgba(0,0,0,0.05)" }}
                    />
                    {/* Body */}
                    <div
                      className="mx-auto w-32 md:w-36 h-48 rounded-2xl shadow-2xl relative overflow-hidden"
                      style={{ background: product.bottleColor }}
                    >
                      {/* Glass shine */}
                      <div className="absolute top-2 left-2 w-3 h-32 bg-white/30 rounded-full blur-sm" />
                      <div className="absolute top-4 left-3 w-1 h-24 bg-white/50 rounded-full" />
                      {/* Label with logo */}
                      <div className="absolute inset-x-2 top-10 bottom-6 bg-white rounded-lg shadow-inner overflow-hidden flex items-center justify-center p-1">
                        <img
                          src={product.bottleImg}
                          alt={`${product.name} label`}
                          className="w-full h-full object-contain"
                          data-testid={`img-bottle-${product.id}`}
                        />
                      </div>
                    </div>
                    {/* Reflection */}
                    <div className="mx-auto w-24 h-2 mt-1 rounded-full bg-black/20 blur-sm" />
                  </div>
                </motion.div>

                {/* Product info */}
                <div className="flex-1 text-center md:text-left">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${product.accentColor}`}>
                    {product.tagline}
                  </p>
                  <h3 className={`text-3xl font-black mb-3 ${product.accentColor}`}>{product.name}</h3>
                  <p className="text-foreground/80 mb-5 text-sm md:text-base leading-relaxed">{product.description}</p>

                  <div className="flex items-center gap-3">
                    {product.sizes.map((s, i) => (
                      <div
                        key={i}
                        className={`flex-1 bg-white/80 backdrop-blur-sm rounded-xl py-3 px-2 border ${product.borderColor} text-center shadow-sm`}
                      >
                        <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-0.5">{s.size}</div>
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
