import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer id="contact" style={{ backgroundColor: "oklch(0.28 0.07 38)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand + Address */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-serif"
                style={{
                  backgroundColor: "oklch(0.72 0.1 70)",
                  color: "oklch(0.2 0.05 45)",
                }}
              >
                SK
              </div>
              <div>
                <p
                  className="font-serif text-base font-bold tracking-wide"
                  style={{ color: "oklch(0.72 0.1 70)" }}
                >
                  Shree Kanth
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "oklch(0.7 0.03 68)" }}
                >
                  Fine Indian Cuisine
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5 font-body"
              style={{ color: "oklch(0.72 0.03 68)" }}
            >
              Bringing the authentic flavors of India to your table since 1998.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.72 0.1 70)" }}
                />
                <p
                  className="text-sm font-body"
                  style={{ color: "oklch(0.72 0.03 68)" }}
                >
                  12, MG Road, Connaught Place
                  <br />
                  New Delhi – 110001
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: "oklch(0.72 0.1 70)" }} />
                <a
                  href="tel:+911123456789"
                  className="text-sm hover:opacity-80 font-body"
                  style={{ color: "oklch(0.72 0.03 68)" }}
                >
                  +91 11 2345 6789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: "oklch(0.72 0.1 70)" }} />
                <a
                  href="mailto:hello@shreekanth.com"
                  className="text-sm hover:opacity-80 font-body"
                  style={{ color: "oklch(0.72 0.03 68)" }}
                >
                  hello@shreekanth.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-serif text-base font-bold mb-5 tracking-wide"
              style={{ color: "oklch(0.97 0.01 68)" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Menu", href: "#menu" },
                { label: "About Us", href: "#about" },
                { label: "Reservations", href: "#reservations" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm hover:opacity-80 transition-opacity font-body text-left"
                  style={{ color: "oklch(0.72 0.03 68)" }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h4
              className="font-serif text-base font-bold mb-5 tracking-wide"
              style={{ color: "oklch(0.97 0.01 68)" }}
            >
              Opening Hours
            </h4>
            <div className="space-y-3">
              {[
                { days: "Monday – Friday", hours: "12:00 PM – 3:00 PM" },
                { days: "", hours: "7:00 PM – 11:00 PM" },
                { days: "Saturday – Sunday", hours: "12:00 PM – 11:00 PM" },
              ].map((item) => (
                <div key={item.days + item.hours}>
                  {item.days && (
                    <p
                      className="text-xs uppercase tracking-wider font-semibold font-body"
                      style={{ color: "oklch(0.72 0.1 70)" }}
                    >
                      {item.days}
                    </p>
                  )}
                  <p
                    className="text-sm font-body"
                    style={{ color: "oklch(0.72 0.03 68)" }}
                  >
                    <Clock
                      size={12}
                      className="inline mr-1.5"
                      style={{ color: "oklch(0.72 0.1 70)" }}
                    />
                    {item.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4
              className="font-serif text-base font-bold mb-5 tracking-wide"
              style={{ color: "oklch(0.97 0.01 68)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Twitter, label: "Twitter / X", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{
                    backgroundColor: "oklch(0.35 0.07 42)",
                    color: "oklch(0.72 0.1 70)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p
              className="text-xs leading-relaxed font-body"
              style={{ color: "oklch(0.65 0.03 68)" }}
            >
              Stay connected for daily specials, events, and behind-the-scenes
              glimpses of our kitchen.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ borderTop: "1px solid oklch(0.38 0.07 42)" }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs font-body"
            style={{ color: "oklch(0.55 0.03 68)" }}
          >
            © {year} Shree Kanth Restaurant. All rights reserved.
          </p>
          <p
            className="text-xs font-body"
            style={{ color: "oklch(0.55 0.03 68)" }}
          >
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.72 0.1 70)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
