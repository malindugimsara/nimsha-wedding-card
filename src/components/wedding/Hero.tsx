import { motion } from "framer-motion";
import { useWedding } from "@/lib/wedding-context";
import { wedding } from "@/lib/wedding";
import { Ornament, Sparkles } from "./Decorations";
import heroFloral from "@/assets/hero-floral.jpg";

interface Props { onOpenInvitation: () => void; opened: boolean; }

export const Hero = ({ onOpenInvitation, opened }: Props) => {
  const { lang, guestName } = useWedding();
  const dateStr = wedding.date.toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Background floral */}
      <div className="absolute inset-0">
        <img
          src={heroFloral}
          alt=""
          className="w-full h-full object-cover opacity-40 dark:opacity-25"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>
      <Sparkles count={10} />

      <div className="relative container z-20 text-center px-4 sm:px-6 flex-1 flex flex-col justify-center pb-24">
        {guestName && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-script text-2xl md:text-3xl text-primary mb-4"
          >
            {lang === "en" ? `Dear ${guestName},` : `ආදරණීය ${guestName},`}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary-deep mb-6"
        >
          {lang === "en" ? "You are warmly invited" : "ඔබට ආදරයෙන් ආරාධනා කරමි"}
        </motion.p>

        <Ornament className="text-primary w-40 md:w-64 mx-auto mb-6" />

        {/* Mobile optimized text sizes for names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-couple text-6xl min-[375px]:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] text-gold-gradient animate-heartbeat"
        >
          {lang === "en" ? wedding.bride.en : wedding.bride.si}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-display text-xl md:text-3xl my-2 text-primary tracking-widest"
        >
          &
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-couple text-6xl min-[375px]:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] text-gold-gradient animate-heartbeat"
        >
          {lang === "en" ? wedding.groom.en : wedding.groom.si}
        </motion.h1>

        <Ornament className="text-primary w-40 md:w-64 mx-auto mt-8 mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-display tracking-[0.2em] md:tracking-[0.25em] text-xs md:text-base text-foreground/80 uppercase"
        >
          {dateStr}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-serif italic text-sm md:text-lg text-muted-foreground mt-2 px-4"
        >
          {wedding.ceremony.venue} · {wedding.ceremony.address}
        </motion.p>

        {!opened && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            onClick={onOpenInvitation}
            className="group mt-10 mx-auto inline-flex items-center justify-center gap-3 w-[85vw] max-w-[300px] md:w-auto md:px-10 py-4 rounded-full bg-gold-gradient text-primary-foreground font-display text-[11px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase shadow-elegant hover:shadow-glow transition-all active:scale-95 shimmer border border-amber-300/40"
          >
            {lang === "en" ? "Open Invitation" : "ආරාධනය විවෘත කරන්න"}
            <span className="inline-block group-hover:translate-x-1 transition-transform">✦</span>
          </motion.button>
        )}
      </div>

      {/* Centered Mobile-Optimized Swipe/Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: "-50%" }} // මෙතනට x: "-50%" එකතු කළා
        animate={{ opacity: 1, y: 0, x: "-50%" }}  // මෙතනටත් x: "-50%" එකතු කළා
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        // -translate-x-1/2 අයින් කරලා left-1/2 විතරක් තිබ්බා
        className="absolute bottom-6 left-1/2 z-20 cursor-pointer"
      >
        <div className="flex flex-col items-center px-6 py-2.5 rounded-[2rem] bg-background/40 backdrop-blur-md border border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] active:scale-95 transition-transform whitespace-nowrap">
          
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary text-[10px] md:text-xs font-display tracking-[0.2em] md:tracking-[0.3em] uppercase mb-0.5"
          >
            {lang === "en" ? "Swipe to Explore" : "පහළට යන්න"}
          </motion.div>

          {/* Double Animated Chevrons for Mobile */}
          <div className="flex flex-col items-center -space-y-3.5 mt-0.5">
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary drop-shadow-[0_2px_4px_rgba(217,119,6,0.4)]">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary drop-shadow-[0_2px_4px_rgba(217,119,6,0.4)]">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
};