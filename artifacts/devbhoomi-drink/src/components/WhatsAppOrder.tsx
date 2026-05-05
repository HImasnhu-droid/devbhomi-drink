import { useState } from "react";
import { motion } from "framer-motion";

export function WhatsAppOrder() {
  const [flavor, setFlavor] = useState<"Malta" | "Buransh" | "Both">("Malta");
  const [size, setSize] = useState<"Small (₹10)" | "Large (₹20)">("Small (₹10)");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function buildWhatsAppLink() {
    const text = [
      `🌿 *Devbhoomi Drink Order*`,
      ``,
      `🧃 Flavor: ${flavor}`,
      `📦 Size: ${size}`,
      `🔢 Quantity: ${quantity}`,
      message ? `📝 Message: ${message}` : null,
      ``,
      `Please confirm my order. Thank you!`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    return `https://wa.me/919997744311?text=${encodeURIComponent(text)}`;
  }

  return (
    <section
      id="order"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #052210 0%, #0d3b1e 40%, #0a1f0f 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #25d366 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #128c7e 0%, transparent 70%)" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-green-300 bg-white/10 border border-white/20 mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-3"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Place Your Order
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-md mx-auto">
            Pick your flavor, size, and quantity — we'll open WhatsApp with your order ready to send.
          </p>
        </motion.div>

        {/* Order card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl border border-white/10 p-6 md:p-10 flex flex-col gap-7"
          style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
        >
          {/* Flavor */}
          <div>
            <label className="block text-white/80 text-sm font-bold uppercase tracking-widest mb-3">
              Choose Flavor
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["Malta", "Buransh", "Both"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFlavor(f)}
                  className={`py-3 px-2 rounded-2xl border-2 text-sm font-bold transition-all duration-200 flex flex-col items-center gap-1.5 ${
                    flavor === f
                      ? "border-green-400 bg-green-400/15 text-white scale-105 shadow-lg shadow-green-900/30"
                      : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="text-xl">
                    {f === "Malta" ? "🟠" : f === "Buransh" ? "🔴" : "🍹"}
                  </span>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="block text-white/80 text-sm font-bold uppercase tracking-widest mb-3">
              Choose Size
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["Small (₹10)", "Large (₹20)"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-3 px-4 rounded-2xl border-2 text-sm font-bold transition-all duration-200 ${
                    size === s
                      ? "border-yellow-400 bg-yellow-400/15 text-white scale-105 shadow-lg shadow-yellow-900/30"
                      : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-white/80 text-sm font-bold uppercase tracking-widest mb-3">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-11 h-11 rounded-full border-2 border-white/20 text-white text-xl font-bold flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all active:scale-90"
              >
                −
              </button>
              <span className="text-3xl font-black text-white w-12 text-center tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-11 h-11 rounded-full border-2 border-white/20 text-white text-xl font-bold flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all active:scale-90"
              >
                +
              </button>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white/80 text-sm font-bold uppercase tracking-widest mb-3">
              Any Special Note? <span className="text-white/30 font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Deliver before 6pm, COD preferred, etc."
              className="w-full rounded-2xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm p-4 resize-none focus:outline-none focus:border-green-400/60 focus:bg-white/12 transition-all"
            />
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-lg text-white shadow-2xl transition-all"
            style={{
              background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
              boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Order on WhatsApp
          </motion.a>

          <p className="text-center text-white/35 text-xs">
            Opens WhatsApp with your order pre-filled · Call us: <a href="tel:9997744311" className="text-white/55 underline underline-offset-2">9997744311</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
