import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useCreateReservation } from "../hooks/useQueries";

export function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const {
    mutate: createReservation,
    isPending,
    isSuccess,
    isError,
  } = useCreateReservation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createReservation({
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: Number.parseInt(form.guests) || 2,
      specialRequests: form.specialRequests,
    });
  };

  const inputStyle = {
    backgroundColor: "oklch(0.97 0.01 68)",
    borderColor: "oklch(0.84 0.025 68)",
    color: "oklch(0.22 0.05 45)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  return (
    <section
      id="reservations"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.955 0.015 68)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card"
        >
          {/* Left: Food image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] lg:min-h-0"
          >
            <img
              src="/assets/generated/reservation-ambiance.dim_800x900.jpg"
              alt="Restaurant dining ambiance"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, oklch(0.2 0.05 45 / 0.4) 100%)",
              }}
            />
            <div className="absolute bottom-8 left-8">
              <p
                className="font-serif text-2xl font-bold"
                style={{ color: "oklch(0.97 0.01 68)" }}
              >
                Reserve Your
              </p>
              <p
                className="font-serif text-2xl font-bold italic"
                style={{ color: "oklch(0.82 0.09 70)" }}
              >
                Perfect Evening
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="p-8 lg:p-12"
            style={{ backgroundColor: "oklch(0.22 0.05 45)" }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-2 font-body"
              style={{ color: "oklch(0.72 0.1 70)" }}
            >
              Reservations
            </p>
            <h2
              className="font-serif text-3xl font-bold mb-2"
              style={{ color: "oklch(0.97 0.01 68)" }}
            >
              Book a Table
            </h2>
            <p
              className="text-sm mb-8 font-body"
              style={{ color: "oklch(0.75 0.02 68)" }}
            >
              Join us for an unforgettable dining experience.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
                data-ocid="reservation.success_state"
              >
                <CheckCircle
                  className="mx-auto mb-4 w-12 h-12"
                  style={{ color: "oklch(0.72 0.1 70)" }}
                />
                <h3
                  className="font-serif text-2xl font-bold mb-2"
                  style={{ color: "oklch(0.97 0.01 68)" }}
                >
                  Reservation Confirmed!
                </h3>
                <p
                  className="font-body text-sm"
                  style={{ color: "oklch(0.75 0.02 68)" }}
                >
                  We look forward to welcoming you. A confirmation will be sent
                  shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="reservation.modal"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      className="text-xs font-semibold tracking-wide mb-1.5 block font-body"
                      style={{ color: "oklch(0.8 0.02 68)" }}
                    >
                      Full Name *
                    </Label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      style={inputStyle}
                      data-ocid="reservation.input"
                    />
                  </div>
                  <div>
                    <Label
                      className="text-xs font-semibold tracking-wide mb-1.5 block font-body"
                      style={{ color: "oklch(0.8 0.02 68)" }}
                    >
                      Phone *
                    </Label>
                    <Input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 99999 00000"
                      style={inputStyle}
                      data-ocid="reservation.input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      className="text-xs font-semibold tracking-wide mb-1.5 block font-body"
                      style={{ color: "oklch(0.8 0.02 68)" }}
                    >
                      Date *
                    </Label>
                    <Input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      style={inputStyle}
                      data-ocid="reservation.input"
                    />
                  </div>
                  <div>
                    <Label
                      className="text-xs font-semibold tracking-wide mb-1.5 block font-body"
                      style={{ color: "oklch(0.8 0.02 68)" }}
                    >
                      Time *
                    </Label>
                    <Input
                      required
                      type="time"
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      style={inputStyle}
                      data-ocid="reservation.input"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    className="text-xs font-semibold tracking-wide mb-1.5 block font-body"
                    style={{ color: "oklch(0.8 0.02 68)" }}
                  >
                    Number of Guests *
                  </Label>
                  <Select
                    required
                    value={form.guests}
                    onValueChange={(val) => handleChange("guests", val)}
                  >
                    <SelectTrigger
                      style={inputStyle}
                      data-ocid="reservation.select"
                    >
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="9">9+ Guests (call us)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    className="text-xs font-semibold tracking-wide mb-1.5 block font-body"
                    style={{ color: "oklch(0.8 0.02 68)" }}
                  >
                    Special Requests
                  </Label>
                  <Textarea
                    value={form.specialRequests}
                    onChange={(e) =>
                      handleChange("specialRequests", e.target.value)
                    }
                    placeholder="Dietary requirements, special occasions, seating preferences..."
                    rows={3}
                    style={inputStyle}
                    data-ocid="reservation.textarea"
                  />
                </div>

                {isError && (
                  <p
                    className="text-sm font-body"
                    style={{ color: "oklch(0.7 0.2 27)" }}
                    data-ocid="reservation.error_state"
                  >
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 rounded-sm text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2 font-body mt-2"
                  style={{
                    backgroundColor: "oklch(0.72 0.1 70)",
                    color: "oklch(0.18 0.04 45)",
                    opacity: isPending ? 0.7 : 1,
                  }}
                  data-ocid="reservation.submit_button"
                >
                  {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isPending ? "Confirming..." : "Confirm Reservation"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
