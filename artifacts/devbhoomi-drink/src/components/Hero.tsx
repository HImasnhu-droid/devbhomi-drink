import { motion } from "framer-motion";
import { useMemo } from "react";

/* ── SVG falling element types ── */
type FallingItem = {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  type: "orange" | "pomegranate" | "cherry-blossom" | "mango" | "buransh" | "leaf" | "droplet";
};

function OrangeSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" fill="#FF8C00" />
      <circle cx="20" cy="20" r="14" fill="#FFA500" />
      <line x1="20" y1="6" x2="20" y2="34" stroke="#FF6600" strokeWidth="1.5" opacity="0.5" />
      <line x1="6" y1="20" x2="34" y2="20" stroke="#FF6600" strokeWidth="1.5" opacity="0.5" />
      <line x1="10" y1="10" x2="30" y2="30" stroke="#FF6600" strokeWidth="1.2" opacity="0.4" />
      <line x1="30" y1="10" x2="10" y2="30" stroke="#FF6600" strokeWidth="1.2" opacity="0.4" />
      <path d="M20 2 C22 0 24 1 22 4" stroke="#3a7d00" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function PomegranateSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 44" fill="none">
      <ellipse cx="20" cy="24" rx="17" ry="18" fill="#C0392B" />
      <ellipse cx="20" cy="24" rx="13" ry="14" fill="#E74C3C" />
      <circle cx="13" cy="20" r="2" fill="#922B21" opacity="0.7" />
      <circle cx="20" cy="17" r="2" fill="#922B21" opacity="0.7" />
      <circle cx="27" cy="20" r="2" fill="#922B21" opacity="0.7" />
      <circle cx="15" cy="27" r="2" fill="#922B21" opacity="0.7" />
      <circle cx="24" cy="27" r="2" fill="#922B21" opacity="0.7" />
      <path d="M16 6 C18 1 22 1 24 6 C22 4 18 4 16 6Z" fill="#8B0000" />
      <path d="M20 0 C22 -2 26 0 24 3" stroke="#8B0000" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function CherryBlossomSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFB7C5" transform="rotate(0 18 18)" />
      <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFB7C5" transform="rotate(72 18 18)" />
      <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFD0DA" transform="rotate(144 18 18)" />
      <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFB7C5" transform="rotate(216 18 18)" />
      <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFD0DA" transform="rotate(288 18 18)" />
      <circle cx="18" cy="18" r="4" fill="#FFF0F5" />
      <circle cx="18" cy="18" r="2.5" fill="#FF69B4" />
    </svg>
  );
}

function MangoSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 44" fill="none">
      <ellipse cx="18" cy="26" rx="14" ry="17" fill="#FFB300" />
      <ellipse cx="16" cy="25" rx="10" ry="13" fill="#FFCA28" />
      <path d="M18 10 C20 6 25 8 22 14" stroke="#3a7d00" strokeWidth="1.8" fill="none" />
      <path d="M18 10 C20 6 26 7 22 14" fill="#4CAF50" opacity="0.8" />
    </svg>
  );
}

function BuranshSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none">
      <ellipse cx="19" cy="10" rx="5" ry="9" fill="#C0392B" transform="rotate(0 19 19)" />
      <ellipse cx="19" cy="10" rx="5" ry="9" fill="#E74C3C" transform="rotate(60 19 19)" />
      <ellipse cx="19" cy="10" rx="5" ry="9" fill="#C0392B" transform="rotate(120 19 19)" />
      <ellipse cx="19" cy="10" rx="5" ry="9" fill="#E74C3C" transform="rotate(180 19 19)" />
      <ellipse cx="19" cy="10" rx="5" ry="9" fill="#C0392B" transform="rotate(240 19 19)" />
      <ellipse cx="19" cy="10" rx="5" ry="9" fill="#E74C3C" transform="rotate(300 19 19)" />
      <circle cx="19" cy="19" r="5" fill="#FFEE58" />
    </svg>
  );
}

function LeafSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 28 40" fill="none">
      <path d="M14 38 C14 38 2 22 4 12 C6 2 14 2 14 2 C14 2 22 2 24 12 C26 22 14 38 14 38Z" fill="#4CAF50" />
      <path d="M14 38 C14 38 2 22 4 12 C6 2 14 2 14 2 C14 2 22 2 24 12 C26 22 14 38 14 38Z" fill="#66BB6A" opacity="0.5" />
      <line x1="14" y1="6" x2="14" y2="36" stroke="#2E7D32" strokeWidth="1.2" />
      <line x1="14" y1="15" x2="8" y2="22" stroke="#2E7D32" strokeWidth="0.8" opacity="0.7" />
      <line x1="14" y1="15" x2="20" y2="22" stroke="#2E7D32" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

function DropletSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 24 32" fill="none">
      <path d="M12 2 C12 2 2 14 2 20 C2 26.6 6.5 30 12 30 C17.5 30 22 26.6 22 20 C22 14 12 2 12 2Z" fill="#4FC3F7" opacity="0.85" />
      <path d="M7 20 C7 16 10 12 12 10" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function FallingElement({ item }: { item: FallingItem }) {
  const sharedProps = {
    initial: { y: -120, opacity: 0, rotate: 0 },
    animate: {
      y: "105vh",
      opacity: [0, 0.92, 0.92, 0],
      rotate: item.rotate,
    },
    transition: {
      duration: item.duration,
      delay: item.delay,
      repeat: Infinity,
      ease: "linear",
    },
    className: "absolute top-0",
    style: { left: item.left },
  };

  switch (item.type) {
    case "orange": return <motion.div {...sharedProps}><OrangeSVG size={item.size} /></motion.div>;
    case "pomegranate": return <motion.div {...sharedProps}><PomegranateSVG size={item.size} /></motion.div>;
    case "cherry-blossom": return <motion.div {...sharedProps}><CherryBlossomSVG size={item.size} /></motion.div>;
    case "mango": return <motion.div {...sharedProps}><MangoSVG size={item.size} /></motion.div>;
    case "buransh": return <motion.div {...sharedProps}><BuranshSVG size={item.size} /></motion.div>;
    case "leaf": return <motion.div {...sharedProps}><LeafSVG size={item.size} /></motion.div>;
    case "droplet": return <motion.div {...sharedProps}><DropletSVG size={item.size} /></motion.div>;
    default: return null;
  }
}

const SEED: FallingItem[] = [
  { id: 0,  left: "5%",   delay: 0,    duration: 9,  size: 38, rotate: 200,  type: "orange" },
  { id: 1,  left: "12%",  delay: 1.5,  duration: 11, size: 28, rotate: -150, type: "cherry-blossom" },
  { id: 2,  left: "22%",  delay: 0.5,  duration: 10, size: 34, rotate: 280,  type: "mango" },
  { id: 3,  left: "32%",  delay: 2.5,  duration: 12, size: 26, rotate: 180,  type: "cherry-blossom" },
  { id: 4,  left: "41%",  delay: 0.8,  duration: 8,  size: 36, rotate: -220, type: "pomegranate" },
  { id: 5,  left: "52%",  delay: 3.0,  duration: 10, size: 30, rotate: 320,  type: "buransh" },
  { id: 6,  left: "61%",  delay: 1.0,  duration: 11, size: 32, rotate: -200, type: "orange" },
  { id: 7,  left: "70%",  delay: 2.0,  duration: 9,  size: 24, rotate: 160,  type: "cherry-blossom" },
  { id: 8,  left: "79%",  delay: 0.3,  duration: 12, size: 36, rotate: -300, type: "mango" },
  { id: 9,  left: "88%",  delay: 1.8,  duration: 10, size: 28, rotate: 240,  type: "pomegranate" },
  { id: 10, left: "95%",  delay: 3.5,  duration: 9,  size: 26, rotate: -180, type: "cherry-blossom" },
  { id: 11, left: "8%",   delay: 4.0,  duration: 13, size: 22, rotate: 200,  type: "leaf" },
  { id: 12, left: "17%",  delay: 5.0,  duration: 10, size: 20, rotate: -140, type: "droplet" },
  { id: 13, left: "27%",  delay: 4.5,  duration: 11, size: 26, rotate: 180,  type: "cherry-blossom" },
  { id: 14, left: "48%",  delay: 5.5,  duration: 9,  size: 36, rotate: -250, type: "buransh" },
  { id: 15, left: "58%",  delay: 4.2,  duration: 12, size: 22, rotate: 280,  type: "leaf" },
  { id: 16, left: "74%",  delay: 6.0,  duration: 10, size: 28, rotate: 200,  type: "cherry-blossom" },
  { id: 17, left: "83%",  delay: 4.8,  duration: 11, size: 20, rotate: -200, type: "droplet" },
  { id: 18, left: "38%",  delay: 6.5,  duration: 8,  size: 40, rotate: 300,  type: "orange" },
  { id: 19, left: "92%",  delay: 5.8,  duration: 10, size: 32, rotate: -220, type: "mango" },
];

export function Hero() {
  const items = useMemo(() => SEED, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(165deg, #0d3b1e 0%, #1a6b3a 25%, #2d8a52 45%, #1b5e35 65%, #0a2e18 100%)",
      }}
      data-testid="section-hero"
    >
      {/* Mountain silhouette background layers */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 340"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,340 L0,200 L120,100 L240,170 L380,60 L520,140 L640,40 L760,120 L900,50 L1040,130 L1180,70 L1320,150 L1440,100 L1440,340 Z" fill="rgba(5,30,15,0.55)" />
        <path d="M0,340 L0,240 L100,180 L200,220 L320,150 L440,200 L560,140 L680,185 L800,145 L920,180 L1040,155 L1160,200 L1280,165 L1440,210 L1440,340 Z" fill="rgba(5,30,15,0.35)" />
        <path d="M0,340 L0,285 L180,250 L360,270 L540,240 L720,265 L900,245 L1080,265 L1260,250 L1440,265 L1440,340 Z" fill="rgba(5,30,15,0.25)" />
      </svg>

      {/* Stars / light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Falling fruits, cherry blossoms & elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {items.map((item) => (
          <FallingElement key={item.id} item={item} />
        ))}
      </div>

      {/* Main hero text */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24">
        {/* Logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <img
            src="/logo-main.jpg"
            alt="Devbhoomi Drink Logo"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-white/30 shadow-2xl"
          />
        </motion.div>

        {/* देवभूमि — Devanagari, bold + italic + cycling color animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: [-10, 10, -10] }}
          transition={{ opacity: { duration: 0.8 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
        >
          <motion.h1
            className="font-black leading-none select-none"
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: "clamp(72px, 16vw, 180px)",
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}
            animate={{
              color: ["#FFD700", "#FF8C00", "#FF4444", "#FF69B4", "#FF8C00", "#FFD700"],
              textShadow: [
                "0 0 40px rgba(255,215,0,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                "0 0 40px rgba(255,140,0,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                "0 0 40px rgba(255,68,68,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                "0 0 40px rgba(255,105,180,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                "0 0 40px rgba(255,140,0,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                "0 0 40px rgba(255,215,0,0.6), 0 4px 30px rgba(0,0,0,0.6)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            data-testid="text-hero-devanagari"
          >
            देवभूमि
          </motion.h1>
        </motion.div>

        {/* "drink" in cursive */}
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="-mt-4 md:-mt-6"
        >
          <h2
            className="drop-shadow-xl select-none"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(48px, 10vw, 110px)",
              fontWeight: 700,
              color: "#FFB7C5",
              filter: "drop-shadow(0 2px 16px rgba(255,105,180,0.45))",
              letterSpacing: "0.04em",
            }}
            data-testid="text-hero-drink"
          >
            drink
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-6 md:mt-8 max-w-md text-base md:text-xl font-medium text-white/80 leading-relaxed"
          data-testid="text-hero-tagline"
        >
          Pure Malta &amp; Buransh juices from the heart of Uttarakhand — now all across India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#products"
            data-testid="button-hero-taste-magic"
            className="px-8 py-4 rounded-full font-bold text-base md:text-lg text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #1a6b3a, #2d9b52)" }}
          >
            Taste the Magic
          </a>
          <a
            href="#outlet"
            data-testid="button-hero-find-outlet"
            className="px-8 py-4 rounded-full font-bold text-base md:text-lg border-2 border-white/50 text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Find Pahadi Punch
          </a>
        </motion.div>

        {/* Instagram badge */}
        <motion.a
          href="https://www.instagram.com/devbhoomidrink?igsh=MW0zenhkeW54emo0dw=="
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          data-testid="link-hero-instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          @devbhoomidrink
        </motion.a>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 2 L8 16 M3 11 L8 16 L13 11" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>
    </section>
  );
}
