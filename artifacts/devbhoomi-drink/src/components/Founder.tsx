import { motion } from "framer-motion";
import { Mountain, Leaf, Star } from "lucide-react";

export function Founder() {
  return (
    <section
      id="founder"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d3b1e 0%, #1a6b3a 50%, #0a2e18 100%)" }}
      data-testid="section-founder"
    >
      {/* Background SVG mountain decoration */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path d="M0,200 L0,120 L200,60 L400,110 L600,40 L800,90 L1000,50 L1200,100 L1440,60 L1440,200Z" fill="white" />
      </svg>

      {/* Floating cherry blossoms decoration */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${10 + i * 15}%`, top: `${10 + (i % 3) * 20}%` }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          <svg width="22" height="22" viewBox="0 0 36 36" fill="none" opacity="0.35">
            <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFB7C5" transform="rotate(0 18 18)" />
            <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFD0DA" transform="rotate(72 18 18)" />
            <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFB7C5" transform="rotate(144 18 18)" />
            <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFD0DA" transform="rotate(216 18 18)" />
            <ellipse cx="18" cy="8" rx="5" ry="8" fill="#FFB7C5" transform="rotate(288 18 18)" />
            <circle cx="18" cy="18" r="4" fill="#FFF0F5" />
            <circle cx="18" cy="18" r="2.5" fill="#FF69B4" />
          </svg>
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-yellow-300 bg-white/10 border border-white/20 mb-4">
            The Visionary Behind the Brand
          </span>
          <h2
            className="text-4xl md:text-6xl font-black text-white leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            Meet the Founder
          </h2>
        </motion.div>

        {/* Main card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left — portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Avatar illustration */}
            <div className="relative">
              <div
                className="w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300/40 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a6b3a, #2d9b52)" }}
              >
                {/* Abstract mountain portrait */}
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                  {/* Background circle gradient */}
                  <circle cx="80" cy="80" r="80" fill="url(#bg)" />
                  {/* Mountains */}
                  <path d="M20,130 L55,60 L80,90 L110,45 L140,130Z" fill="rgba(255,255,255,0.08)" />
                  <path d="M0,140 L40,80 L65,105 L90,55 L115,95 L140,65 L160,140Z" fill="rgba(255,255,255,0.12)" />
                  {/* Person silhouette */}
                  <circle cx="80" cy="52" r="22" fill="#fde68a" />
                  <path d="M45,140 C45,110 62,95 80,95 C98,95 115,110 115,140Z" fill="#fde68a" />
                  {/* Pahadi topi hat */}
                  <ellipse cx="80" cy="34" rx="26" ry="10" fill="#c0392b" />
                  <rect x="58" y="24" width="44" height="14" rx="3" fill="#e74c3c" />
                  <path d="M64 24 C64 14 96 14 96 24" fill="#c0392b" />
                  <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="160" y2="160">
                      <stop offset="0%" stopColor="#1a6b3a" />
                      <stop offset="100%" stopColor="#2d9b52" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-300/30 scale-110 pointer-events-none" />
            </div>

            {/* Name & title */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white">Sachin Gairola</h3>
              <p className="text-yellow-300 font-semibold mt-1 text-sm tracking-wide uppercase">
                Founder &amp; CEO, Devbhoomi Drink
              </p>
              <p className="text-white/60 text-sm mt-1">Rishikesh, Uttarakhand</p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-xs">
              {[
                { label: "Products", value: "2+" },
                { label: "States", value: "All India" },
                { label: "Dream", value: "Pahadi" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center bg-white/10 rounded-2xl py-3 px-2 border border-white/10"
                >
                  <span className="text-yellow-300 font-black text-lg leading-none">{stat.value}</span>
                  <span className="text-white/60 text-xs mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Big quote */}
            <blockquote className="relative">
              <svg className="absolute -top-3 -left-3 text-yellow-300/40 w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <p className="text-white text-xl md:text-2xl font-bold leading-relaxed pl-8 italic">
                "India drinks artificial. I want India to drink real — real mountains, real flowers, real fruit. That's Devbhoomi Drink."
              </p>
            </blockquote>

            {/* Story cards */}
            {[
              {
                icon: <Mountain className="w-5 h-5 text-yellow-300" />,
                title: "Born from the Mountains",
                text: "Sachin grew up surrounded by Malta orchards and Buransh forests in Uttarakhand — a land whose incredible natural flavors never made it to the mainstream market.",
              },
              {
                icon: <Leaf className="w-5 h-5 text-green-300" />,
                title: "Fighting the Unhealthy Market",
                text: "He saw a generation drinking chemical-laden packaged juices with no real fruit — and decided to change that. Devbhoomi Drink is his answer: pure, natural, and proudly Pahadi.",
              },
              {
                icon: <Star className="w-5 h-5 text-pink-300" />,
                title: "All of India, One Sip at a Time",
                text: "With a central FSSAI license and a burning passion, Sachin is taking Uttarakhand's authentic taste to every corner of India — from local retail outlets to your doorstep.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex gap-4 bg-white/8 rounded-2xl p-5 border border-white/10 hover:bg-white/12 transition-colors"
                data-testid={`card-founder-story-${i}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Instagram CTA */}
            <motion.a
              href="https://www.instagram.com/devbhoomidrink?igsh=MW0zenhkeW54emo0dw=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 self-start px-6 py-3 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all hover:scale-105 active:scale-95"
              data-testid="link-founder-instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow on Instagram
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
