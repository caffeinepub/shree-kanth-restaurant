import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.955 0.015 68)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3 font-body"
              style={{ color: "oklch(0.72 0.1 70)" }}
            >
              Our Story
            </p>
            <h2
              className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "oklch(0.22 0.05 45)" }}
            >
              A Legacy of
              <br />
              <em>Authentic Taste</em>
            </h2>
            <p
              className="text-base leading-relaxed mb-5 font-body"
              style={{ color: "oklch(0.38 0.04 50)" }}
            >
              Founded in 1998, Shree Kanth Restaurant has been the heart of
              authentic Indian dining for over two decades. Our kitchen is led
              by master chef Rajesh Kanth, whose recipes are rooted in centuries
              of tradition passed down through generations.
            </p>
            <p
              className="text-base leading-relaxed mb-8 font-body"
              style={{ color: "oklch(0.38 0.04 50)" }}
            >
              We source our spices directly from the markets of Rajasthan and
              Kerala, ensuring every dish carries the unmistakable essence of
              India's diverse culinary landscape. From our tandoor breads to our
              slow-cooked curries, each plate tells a story.
            </p>
            <div className="flex gap-8 mb-8">
              <div>
                <p
                  className="font-serif text-3xl font-bold"
                  style={{ color: "oklch(0.72 0.1 70)" }}
                >
                  25+
                </p>
                <p
                  className="text-xs uppercase tracking-wider font-body"
                  style={{ color: "oklch(0.45 0.04 50)" }}
                >
                  Years of Excellence
                </p>
              </div>
              <div>
                <p
                  className="font-serif text-3xl font-bold"
                  style={{ color: "oklch(0.72 0.1 70)" }}
                >
                  80+
                </p>
                <p
                  className="text-xs uppercase tracking-wider font-body"
                  style={{ color: "oklch(0.45 0.04 50)" }}
                >
                  Signature Dishes
                </p>
              </div>
              <div>
                <p
                  className="font-serif text-3xl font-bold"
                  style={{ color: "oklch(0.72 0.1 70)" }}
                >
                  5★
                </p>
                <p
                  className="text-xs uppercase tracking-wider font-body"
                  style={{ color: "oklch(0.45 0.04 50)" }}
                >
                  Guest Rating
                </p>
              </div>
            </div>
            <button
              type="button"
              className="px-7 py-3 rounded-sm text-sm font-semibold tracking-wide border-2 transition-all duration-200 hover:opacity-80 font-body"
              style={{
                borderColor: "oklch(0.72 0.1 70)",
                color: "oklch(0.22 0.05 45)",
                backgroundColor: "transparent",
              }}
            >
              Learn More About Us
            </button>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[3/4]">
              <img
                src="/assets/generated/about-spices.dim_600x500.jpg"
                alt="Indian spices and ingredients"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[3/4] mt-8">
              <img
                src="/assets/generated/about-chef.dim_600x500.jpg"
                alt="Head chef preparing dishes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
