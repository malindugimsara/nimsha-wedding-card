import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import { wedding } from "@/lib/wedding";
import { useWedding } from "@/lib/wedding-context";
import { mapsUrl } from "@/lib/calendar";
import { Ornament } from "./Decorations";
import heroFloral from "@/assets/hero-floral.png"; // .png හෝ .jpg ඔබ සතුව ඇති extension එක භාවිතා කරන්න
import { LotusDivider } from "./Ornaments";

export const EventDetails = () => {
  const { lang } = useWedding();
  const isEn = lang === "en";
  
  // පෝරුව මංගල්‍යය පමණක් ඇතුළත් කර ඇත
  const events = [wedding.ceremony];

  return (
    <section id="events" className="relative lg:py-24 py-16 bg-gradient-soft overflow-hidden">
      
      {/* Background with floral image and soft gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFloral}
          alt=""
          className="w-full h-full object-cover opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/95" />
      </div>

      {/* Floating Lotus Petals for traditional theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`event-petal-${i}`}
            className="absolute text-rose-300/30 text-xl"
            initial={{ top: "-10%", left: `${25 * i + Math.random() * 20}%` }}
            animate={{ top: "110%", rotate: [0, 200, 360], x: [0, 40, -40, 0] }}
            transition={{ duration: 18 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 3 }}
          >
            ✿
          </motion.div>
        ))}
      </div>
      
      <div className="container max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          
           <LotusDivider  width="w-20 sm:w-28  mt-4" />
          <Ornament className="text-primary w-40 md:w-56 mx-auto" />
        </div>

        {/* Event Card */}
        <div className="flex justify-center px-4">
          {events.map((ev, i) => {
            // භාෂාවට අනුව දත්ත තෝරාගැනීම
            const title = isEn ? ev.title.en : ev.title.si;
            const date = isEn ? ev.date : ev.dateSi;
            const time = isEn ? ev.time : ev.timeSi;
            const venue = isEn ? ev.venue : ev.venueSi;
            const address = isEn ? ev.address : ev.addressSi;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="relative glass-card w-full max-w-md rounded-[2rem] p-8 md:p-12 text-center shadow-elegant hover:shadow-glow transition-shadow group border border-rose-200/50 dark:border-amber-900/30 overflow-hidden"
              >
                {/* Traditional Corner Accents on Card */}
                <LotusCorner className="absolute top-2 left-2 w-16 text-primary/20" />
                <LotusCorner className="absolute top-2 right-2 w-16 text-primary/20 scale-x-[-1]" />
                <LotusCorner className="absolute bottom-2 left-2 w-16 text-primary/20 scale-y-[-1]" />
                <LotusCorner className="absolute bottom-2 right-2 w-16 text-primary/20 scale-x-[-1] scale-y-[-1]" />

                
                <h3 className={`text-gold-gradient mb-2 py-2 drop-shadow-sm ${isEn ? "font-script text-4xl md:text-5xl" : "font-sinhala font-bold text-2xl md:text-3xl"}`}>
                  {title}
                </h3>

               
                <Ornament className="text-primary w-32 mx-auto mb-8 opacity-70" />

                <div className="space-y-6 text-left max-w-[280px] mx-auto relative z-10 bg-white/30 dark:bg-black/20 p-6 rounded-2xl border border-white/40 dark:border-white/5 backdrop-blur-sm">
                  <Detail icon={<FaClock />} label={date} value={time} isEn={isEn} />
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4"></div>
                  <Detail icon={<FaMapMarkerAlt />} label={venue} value={address} isEn={isEn} />
                </div>

                <a
                  href={(ev as any).mapsUrl || mapsUrl(ev.mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-10 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground transition-all shadow-md hover:shadow-glow active:scale-95 uppercase w-full md:w-auto relative z-10 ${isEn ? "font-display text-[11px] tracking-widest" : "font-sinhala font-bold text-sm tracking-wide"}`}
                >
                  <FaMapMarkerAlt className="w-4 h-4" />
                  {isEn ? "Open in Maps" : "සිතියම් විවෘත කරන්න"}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Coordinator Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12 max-w-3xl mx-auto pb-4 px-4 relative z-10"
        >
          <div className="glass-card rounded-[1.5rem] p-5 md:p-6 flex items-center gap-5 w-full sm:max-w-md border border-rose-200/50 shadow-soft">
            <div className="w-14 h-14 shrink-0 rounded-full bg-gold-gradient grid place-items-center text-primary-foreground shadow-inner">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <div className={`uppercase text-primary mb-1 ${isEn ? "font-display text-[10px] tracking-widest" : "font-sinhala font-bold text-xs tracking-wider"}`}>
                {isEn ? "Coordinator" : "සම්බන්ධීකාරක"}
              </div>
              <div className={`text-foreground/90 ${isEn ? "font-serif text-base" : "font-sinhala font-medium text-sm"}`}>
                {wedding.contact.name}
              </div>
              <div className={`text-muted-foreground mt-0.5 ${isEn ? "font-serif text-sm" : "font-sans text-sm"}`}>
                {wedding.contact.phone}
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

// Detail Component with Language Support
const Detail = ({ icon, label, value, isEn }: { icon: React.ReactNode; label: string; value: string; isEn: boolean }) => (
  <div className="flex items-start gap-4">
    <div className="text-primary mt-1 text-lg drop-shadow-sm">{icon}</div>
    <div>
      <div className={`text-foreground ${isEn ? "font-serif font-medium text-base" : "font-sinhala font-semibold text-sm leading-relaxed"}`}>
        {label}
      </div>
      <div className={`text-muted-foreground mt-0.5 ${isEn ? "font-serif text-sm" : "font-sinhala text-sm"}`}>
        {value}
      </div>
    </div>
  </div>
);

// Small Lotus Corner SVG for the Event Card
const LotusCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden>
    <path d="M5 5 Q 30 15 45 45 Q 60 75 95 95" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <path d="M5 5 Q 10 30 45 45" />
    <path d="M25 25 Q 35 30 45 45" />
  </svg>
);