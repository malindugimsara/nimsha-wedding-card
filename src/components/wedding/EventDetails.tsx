import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaTshirt, FaPhone } from "react-icons/fa";
import { wedding } from "@/lib/wedding";
import { useWedding } from "@/lib/wedding-context";
import { mapsUrl } from "@/lib/calendar";
import { Ornament } from "./Decorations";

export const EventDetails = () => {
  const { lang } = useWedding();
  // Filtered to only include the ceremony
  const events = [wedding.ceremony];

  return (
    <section id="events" className="relative lg:py-24 bg-gradient-radial">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary-deep mb-3">
            {lang === "en" ? "Save the Moments" : "මොහොත සුරකින්න"}
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-gold-gradient py-4 px-2">
            {lang === "en" ? "The Celebrations" : "උත්සවය"}
          </h2>
          <Ornament className="text-primary w-48 mx-auto mt-2" />
        </div>

        {/* Changed from grid-cols-2 to flex center to center the single event card */}
        <div className="flex justify-center">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              // Added max-w-md and w-full so the card doesn't stretch across the whole screen
              className="glass-card w-full max-w-md rounded-3xl p-8 md:p-10 text-center hover:shadow-glow transition-shadow group"
            >
              <div className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
                {lang === "en" ? "Ceremony" : "මංගල්‍යය"}
              </div>
              <h3 className="font-script text-4xl md:text-5xl text-gold-gradient mb-2 py-4">
                {lang === "en" ? ev.title.en : ev.title.si}
              </h3>
              <Ornament className="text-primary w-32 mx-auto mb-6 opacity-60" />

              <div className="space-y-4 text-left max-w-xs mx-auto">
                <Detail icon={<FaClock />} label={ev.date} value={ev.time} />
                <Detail icon={<FaMapMarkerAlt />} label={ev.venue} value={ev.address} />
              </div>

              <a
                href={(ev as any).mapsUrl || mapsUrl(ev.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-display text-xs tracking-widest uppercase"
              >
                <FaMapMarkerAlt className="w-3 h-3" />
                {lang === "en" ? "Open in Maps" : "සිතියම් විවෘත කරන්න"}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 max-w-3xl mx-auto pb-4">
          <div className="glass-card rounded-2xl p-6 flex items-center gap-4 w-full sm:max-w-md">
            <div className="w-12 h-12 rounded-full bg-gold-gradient grid place-items-center text-primary-foreground">
              <FaPhone />
            </div>
            <div>
              <div className="font-display text-xs tracking-widest uppercase text-primary">
                {lang === "en" ? "Coordinator" : "සම්බන්ධීකාරක"}
              </div>
              <div className="font-serif">
                {wedding.contact.name} · <br /> {wedding.contact.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Detail = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="text-primary mt-1">{icon}</div>
    <div>
      <div className="font-serif text-foreground">{label}</div>
      <div className="font-serif text-sm text-muted-foreground">{value}</div>
    </div>
  </div>
);