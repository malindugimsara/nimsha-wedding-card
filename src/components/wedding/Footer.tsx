import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaHeart } from "react-icons/fa";
import { wedding } from "@/lib/wedding";
import { useWedding } from "@/lib/wedding-context";
import { Ornament } from "./Decorations";

// IMPORT YOUR IMAGE HERE:
import cornerArt from "@/assets/footerImage.webp"; 

export const Footer = () => {
  const { lang } = useWedding();
  const isEn = lang === "en";
  
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  
  // භාෂාවට අනුව WhatsApp පණිවිඩය වෙනස් වීම
  const waMsgEn = `You're invited to ${wedding.bride.en} & ${wedding.groom.en}'s wedding! ${shareUrl}`;
  const waMsgSi = `${wedding.bride.si} සහ ${wedding.groom.si} ගේ මංගල්‍යයට ඔබට ආදරයෙන් ආරාධනා කරමු! ${shareUrl}`;
  const waMsg = encodeURIComponent(isEn ? waMsgEn : waMsgSi);

  return (
    <footer className="relative py-16 lg:py-20 bg-gradient-soft border-t border-rose-200/50 dark:border-primary/20 overflow-hidden font-sans">
      
      {/* Subtle Background Theme Element */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 z-0 flex justify-center items-end">
        <div className="w-[40rem] h-[20rem] border-t-[1px] border-primary/20 rounded-t-full translate-y-1/2" />
      </div>

      {/* --- iOS OPTIMIZED: BACKGROUND LAYER --- */}
      {/* Added 'isolate' to stop mix-blend-mode from lagging the whole page on scroll */}
      <div className="absolute inset-0 pointer-events-none z-0 isolate overflow-hidden">
        
        {/* Left Corner */}
        <img 
          src={cornerArt} 
          alt="Corner Design"
          // Added iOS hardware acceleration classes
          className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-56 opacity-40 dark:opacity-30 mix-blend-multiply dark:invert transform-gpu will-change-transform [backface-visibility:hidden]"
        />
        
        {/* Right Corner */}
        <img 
          src={cornerArt} 
          alt="Corner Design"
          // Added iOS hardware acceleration classes
          className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-56 opacity-40 dark:opacity-30 mix-blend-multiply dark:invert scale-x-[-1] transform-gpu will-change-transform [backface-visibility:hidden]"
        />

        {/* Floating Background Hearts (Also hardware accelerated) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`footer-heart-${i}`}
            // Added transform-gpu for buttery smooth 60fps animation on mobile
            className="absolute text-rose-300/40 dark:text-rose-900/40 text-sm md:text-base drop-shadow-sm transform-gpu"
            initial={{ 
              bottom: "-10%", 
              left: `${15 * i + Math.random() * 10}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              bottom: "120%", 
              x: [0, 20, -20, 0],
              rotate: [0, 45, -45, 0]
            }}
            transition={{ 
              duration: 12 + Math.random() * 8, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>
      {/* ------------------------------------------- */}

      <div className="container text-center relative z-10">
        <Ornament className="text-primary w-40 md:w-48 mx-auto mb-6 opacity-80" />
        
        {/* Sweet Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 transform-gpu"
        >
          <p className={`text-foreground/70 italic ${isEn ? "font-serif text-lg" : "font-sinhala text-base"}`}>
            {isEn ? "Thank you for being a part of our story." : "අපගේ ආදර කතාවේ කොටස්කරුවෙකු වීම ගැන ස්තූතියි."}
          </p>
        </motion.div>
        
        {/* භාෂාවට අනුව නම් දර්ශනය වීම */}
        <h3 className={`py-2 px-2 text-gold-gradient drop-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 ${isEn ? "font-script text-5xl md:text-6xl" : "font-sinhala font-bold text-4xl md:text-5xl"}`}>
          <span>{isEn ? wedding.bride.en : wedding.bride.si}</span> 
          
          {/* Pulsing Ampersand */}
          <motion.span 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-primary/80 text-4xl md:text-5xl transform-gpu"
          >
            &
          </motion.span> 
          
          <span>{isEn ? wedding.groom.en : wedding.groom.si}</span>
        </h3>
        
        <p className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mt-4">
          {wedding.hashtag}
        </p>

        {/* Social Share Buttons (Themed) */}
        <div className="flex justify-center gap-5 mt-10">
          <a
            href={`https://wa.me/94788536767?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on WhatsApp"
            className="w-12 h-12 grid place-items-center rounded-full bg-white/60 dark:bg-black/20 border border-primary/30 text-primary-deep hover:bg-gold-gradient hover:text-white hover:border-transparent hover:shadow-glow transition-all hover:-translate-y-1 active:scale-95"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          
          <a 
            href="https://www.facebook.com/profile.php?id=61589021800561" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Facebook" 
            className="w-12 h-12 grid place-items-center rounded-full bg-white/60 dark:bg-black/20 border border-primary/30 text-primary-deep hover:bg-gold-gradient hover:text-white hover:border-transparent hover:shadow-glow transition-all hover:-translate-y-1 active:scale-95"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
        </div>

        {/* Credits Section */}
        <div className="mt-12 pt-8 border-t border-primary/15 flex flex-col items-center">
          <p className="font-serif italic text-foreground/70 flex items-center justify-center gap-2 text-sm">
            Design with <FaHeart className="text-rose-400 drop-shadow-sm animate-pulse transform-gpu" /> by CodeCraft
          </p>
          <p className="font-display text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-3">
            © {new Date().getFullYear()} CodeCraft. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};