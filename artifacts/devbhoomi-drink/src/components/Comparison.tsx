import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Leaf, Factory, Sparkles, Skull } from "lucide-react";

const comparisonData = [
  { trait: "Ingredients", us: "Real Pahadi Fruit & Flowers", them: "Artificial Flavors & Extracts" },
  { trait: "Origin", us: "Uttarakhand Mountains", them: "Industrial Factories" },
  { trait: "Health", us: "Natural Goodness", them: "Heavy Sugar & Preservatives" },
  { trait: "Colors", us: "100% Natural", them: "Synthetic Dyes" },
];

function FreshBottle() {
  return (
    <motion.svg
      width="180"
      height="260"
      viewBox="0 0 180 260"
      fill="none"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.35))", transformOrigin: "center bottom", willChange: "transform" }}
    >
      {/* Cap */}
      <rect x="70" y="10" width="40" height="22" rx="4" fill="#3d6b1f" />
      <rect x="65" y="28" width="50" height="6" rx="2" fill="#2d4f17" />
      {/* Neck */}
      <rect x="78" y="34" width="24" height="18" fill="#a8d77c" opacity="0.6" />
      {/* Body */}
      <path
        d="M55 60 Q55 50 65 50 L115 50 Q125 50 125 60 L130 220 Q130 245 105 245 L75 245 Q50 245 50 220 Z"
        fill="url(#freshGrad)"
      />
      {/* Shine */}
      <path d="M62 65 Q60 130 65 220" stroke="white" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M68 70 L70 200" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
      {/* Label */}
      <rect x="58" y="110" width="64" height="80" rx="6" fill="white" opacity="0.95" />
      <text x="90" y="142" textAnchor="middle" fontSize="11" fontWeight="900" fill="#0d3b1e" fontFamily="sans-serif">DEVBHOOMI</text>
      <text x="90" y="156" textAnchor="middle" fontSize="8" fill="#0d3b1e" fontFamily="sans-serif">DRINK</text>
      <circle cx="90" cy="172" r="8" fill="#ff7a18" />
      <text x="90" y="184" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0d3b1e">100% NATURAL</text>
      {/* Leaves around */}
      <ellipse cx="40" cy="80" rx="14" ry="6" fill="#4ade80" transform="rotate(-30 40 80)" />
      <ellipse cx="145" cy="95" rx="12" ry="5" fill="#22c55e" transform="rotate(40 145 95)" />
      <defs>
        <linearGradient id="freshGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

function FactoryCan() {
  return (
    <motion.svg
      width="160"
      height="260"
      viewBox="0 0 160 260"
      fill="none"
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.4))", transformOrigin: "center bottom", willChange: "transform" }}
    >
      {/* Top of can */}
      <ellipse cx="80" cy="35" rx="55" ry="10" fill="#3a3a3a" />
      <ellipse cx="80" cy="33" rx="55" ry="10" fill="#5a5a5a" />
      {/* Pull tab */}
      <rect x="68" y="20" width="24" height="6" rx="2" fill="#888" />
      {/* Body */}
      <path
        d="M25 35 L25 230 Q25 245 80 245 Q135 245 135 230 L135 35 Z"
        fill="url(#canGrad)"
      />
      {/* Highlights */}
      <rect x="32" y="40" width="3" height="200" fill="white" opacity="0.15" />
      <rect x="123" y="40" width="4" height="200" fill="black" opacity="0.2" />
      {/* Label band */}
      <rect x="25" y="90" width="110" height="80" fill="#7f1d1d" />
      <text x="80" y="120" textAnchor="middle" fontSize="14" fontWeight="900" fill="#fef08a" fontFamily="sans-serif">FAKE</text>
      <text x="80" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif">FIZZY</text>
      <text x="80" y="158" textAnchor="middle" fontSize="9" fill="#fca5a5">SUGAR + CHEMICALS</text>
      {/* Warning skull */}
      <circle cx="80" cy="200" r="14" fill="#1f1f1f" />
      <text x="80" y="206" textAnchor="middle" fontSize="16" fill="#fca5a5">☠</text>
      <defs>
        <linearGradient id="canGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#525252" />
          <stop offset="50%" stopColor="#737373" />
          <stop offset="100%" stopColor="#404040" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function Comparison() {
  return (
    <section
      id="comparison"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #052e16 100%)" }}
      data-testid="section-comparison"
    >
      {/* Animated dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      {/* Floating sparkles on the green/fresh side */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute pointer-events-none text-yellow-300"
          style={{ left: `${5 + i * 5}%`, top: `${20 + (i % 4) * 15}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 180, 360] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      ))}

      {/* Floating "smoke" dots on the factory side */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`smoke-${i}`}
          className="absolute pointer-events-none rounded-full bg-stone-400/30 blur-md"
          style={{ right: `${5 + i * 5}%`, top: `${25 + (i % 3) * 20}%`, width: `${20 + i * 6}px`, height: `${20 + i * 6}px` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-yellow-300 bg-white/10 border border-yellow-300/30 mb-4">
            The Honest Truth
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            Nature <span className="text-red-400 italic">vs.</span> Factory
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Step away from corporate colas. <span className="text-yellow-300 font-bold">Taste the real difference.</span>
          </p>
        </motion.div>

        {/* Side-by-side battle */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* US — Devbhoomi */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-8 overflow-hidden border-2 border-green-300/40 shadow-2xl"
            style={{
              background:
                "linear-gradient(160deg, rgba(34,197,94,0.25) 0%, rgba(132,204,22,0.15) 50%, rgba(34,197,94,0.2) 100%)",
              backdropFilter: "blur(8px)",
            }}
            data-testid="card-comparison-us"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-yellow-300/20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shadow-lg">
                  <Leaf className="w-6 h-6 text-green-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Devbhoomi Drink</h3>
                  <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest">Pahadi & Pure</p>
                </div>
              </div>

              <div className="flex justify-center my-4">
                <FreshBottle />
              </div>

              <ul className="space-y-3">
                {comparisonData.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className="flex items-start gap-3 bg-white/10 rounded-xl p-3 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] text-yellow-300 uppercase tracking-widest font-bold mb-0.5">{item.trait}</div>
                      <div className="text-white font-semibold text-sm md:text-base">{item.us}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* THEM — Mass Market */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative rounded-3xl p-8 overflow-hidden border-2 border-red-500/30 shadow-2xl"
            style={{
              background:
                "linear-gradient(160deg, rgba(60,60,60,0.6) 0%, rgba(30,30,30,0.7) 50%, rgba(60,30,30,0.6) 100%)",
              backdropFilter: "blur(8px)",
            }}
            data-testid="card-comparison-them"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-red-500/20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Mass Market Drinks</h3>
                  <p className="text-red-300 text-xs font-bold uppercase tracking-widest">Factory Made</p>
                </div>
              </div>

              <div className="flex justify-center my-4">
                <FactoryCan />
              </div>

              <ul className="space-y-3">
                {comparisonData.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.08 }}
                    className="flex items-start gap-3 bg-black/30 rounded-xl p-3 border border-red-500/20"
                  >
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] text-red-300 uppercase tracking-widest font-bold mb-0.5">{item.trait}</div>
                      <div className="text-white/70 font-semibold text-sm md:text-base line-through decoration-red-400/60">{item.them}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* VS badge floating in center */}
        <motion.div
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center shadow-2xl border-4 border-white/40">
            <span className="text-2xl font-black text-green-900 italic">VS</span>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-300 text-green-900 font-black shadow-2xl">
            <Skull className="w-5 h-5 hidden" />
            Choose what your body deserves
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
