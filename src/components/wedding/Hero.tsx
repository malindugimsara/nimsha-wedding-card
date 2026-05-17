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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
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

      <div className="relative container z-20 text-center px-6 py-32">
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
          className="font-display text-xs md:text-sm tracking-[0.4em] uppercase text-primary-deep mb-6"
        >
          {lang === "en" ? "You are warmly invited" : "ඔබට ආදරයෙන් ආරාධනා කරමි"}
        </motion.p>

        <Ornament className="text-primary w-48 md:w-64 mx-auto mb-6" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-couple text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] text-gold-gradient animate-heartbeat"
        >
          {lang === "en" ? wedding.bride.en : wedding.bride.si}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-display text-2xl md:text-3xl my-3 text-primary tracking-widest"
        >
          &
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-couple text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] text-gold-gradient animate-heartbeat"
        >
          {lang === "en" ? wedding.groom.en : wedding.groom.si}
        </motion.h1>

        <Ornament className="text-primary w-48 md:w-64 mx-auto mt-8 mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-display tracking-[0.25em] text-sm md:text-base text-foreground/80 uppercase"
        >
          {dateStr}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-serif italic text-base md:text-lg text-muted-foreground mt-2"
        >
          {wedding.ceremony.venue} · {wedding.ceremony.address}
        </motion.p>

        {false && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            onClick={onOpenInvitation}
            className="group mt-12 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold-gradient text-primary-foreground font-display text-xs tracking-[0.3em] uppercase shadow-elegant hover:shadow-glow transition-all hover:scale-105 shimmer"
          >
            {lang === "en" ? "Open Invitation" : "ආරාධනය විවෘත කරන්න"}
            <span className="inline-block group-hover:translate-x-1 transition-transform">✦</span>
          </motion.button>
        )}

        {!opened && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            onClick={onOpenInvitation}
            className="group mt-12 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold-gradient text-primary-foreground font-display text-xs tracking-[0.3em] uppercase shadow-elegant hover:shadow-glow transition-all hover:scale-105 shimmer"
          >
            {lang === "en" ? "Open Invitation" : "ආරාධනය විවෘත කරන්න"}
            <span className="inline-block group-hover:translate-x-1 transition-transform">✦</span>
          </motion.button>
        )}
      </div>

     {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer group"
      >
        {/* Animated Mouse Icon */}
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary/40 rounded-full flex justify-center p-1 group-hover:border-primary/80 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 md:w-1.5 md:h-2 bg-primary/80 rounded-full"
          />
        </div>
        
        {/* Pulsing Text */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary text-[10px] md:text-xs font-display tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap mt-1"
        >
          {lang === "en" ? "Scroll to Explore" : "පහළට බලන්න"}
        </motion.div>
      </motion.div>
    </section>
  );
};
