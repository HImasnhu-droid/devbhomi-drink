import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

export function Offers() {
  return (
    <section
      id="offers"
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fef3c7 0%, #fed7aa 30%, #fecaca 70%, #fef3c7 100%)",
      }}
      data-testid="section-offers"
    >
      {/* Decorative blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-rose-300/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-rose-700 bg-white/80 border border-rose-200 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Limited Stock — Jaldi Karo!
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 leading-tight mb-3">
            Aaj ka Special Offer
          </h2>
          <p className="text-stone-700 text-lg max-w-2xl mx-auto">
            Sample available hai — pehle try karo, phir order karo. Made with love from Uttarakhand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Offers banner image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/60 bg-white">
              <img
                src="/offers.png"
                alt="Devbhoomi Drink — Buransh & Malta Juice Offer"
                className="w-full h-auto block"
                data-testid="img-offers"
              />
              {/* Shine sweep */}
              <motion.div
                className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                animate={{ left: ["-50%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Order callout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">100% Natural</p>
              <h3 className="text-2xl font-black text-stone-800 mb-3">Pure & Fresh, Pahadon se Seedha</h3>
              <ul className="space-y-2 text-sm text-stone-700 mb-5">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Preservative add hai</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Sugar add hai</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Healthy & energizing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Made with love from Uttarakhand</li>
              </ul>
              <a
                href="tel:9997744311"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-rose-600 to-orange-600 text-white font-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                data-testid="button-order-call"
              >
                <Phone className="w-5 h-5" /> Order Now: 9997744311
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-green-900 text-white rounded-2xl p-5 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-yellow-300 font-bold mb-1">Sample Available Hai!</p>
              <p className="text-sm text-white/90">Pehle try karo, phir order karo. Pure pahadi swaad ki guarantee.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
