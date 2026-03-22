import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-restaurant.dim_1920x1080.jpg')",
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.15 0.04 45 / 0.92) 0%, oklch(0.15 0.04 45 / 0.7) 60%, oklch(0.15 0.04 45 / 0.3) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-sm tracking-[0.3em] uppercase mb-4 font-body font-medium"
            style={{ color: "oklch(0.72 0.1 70)" }}
          >
            Welcome to Shree Kanth
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ color: "oklch(0.97 0.01 68)" }}
          >
            Authentic
            <br />
            <span style={{ color: "oklch(0.82 0.09 70)" }}>Indian</span>
            <br />
            Flavors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-lg mb-10 leading-relaxed font-body"
            style={{ color: "oklch(0.85 0.02 68)" }}
          >
            Experience the rich tapestry of India's culinary heritage — crafted
            with generations-old recipes, hand-picked spices, and an unwavering
            passion for excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("#menu")}
              className="px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-105 font-body"
              style={{
                backgroundColor: "oklch(0.72 0.1 70)",
                color: "oklch(0.18 0.04 45)",
              }}
              data-ocid="hero.primary_button"
            >
              View Our Menu
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#reservations")}
              className="px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide border-2 transition-all duration-200 hover:opacity-90 hover:scale-105 font-body"
              style={{
                borderColor: "oklch(0.72 0.1 70)",
                color: "oklch(0.97 0.01 68)",
                backgroundColor: "transparent",
              }}
              data-ocid="hero.secondary_button"
            >
              Book Your Table
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "oklch(0.72 0.1 70)" }}
      >
        <span className="text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-0.5 h-8"
          style={{ backgroundColor: "oklch(0.72 0.1 70)" }}
        />
      </motion.div>
    </section>
  );
}
