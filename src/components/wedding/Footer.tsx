import { FaWhatsapp, FaInstagram, FaFacebookF, FaHeart } from "react-icons/fa";
import { wedding } from "@/lib/wedding";
import { useWedding } from "@/lib/wedding-context";
import { Ornament } from "./Decorations";

export const Footer = () => {
  const { lang } = useWedding();
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const waMsg = encodeURIComponent(
    `You're invited to ${wedding.bride.en} & ${wedding.groom.en}'s wedding! ${shareUrl}`
  );

  return (
    <footer className="relative py-16 bg-gradient-radial border-t border-primary/20">
      <div className="container text-center">
        <Ornament className="text-primary w-48 mx-auto mb-6" />
        <h3 className="font-script text-5xl md:text-6xl text-gold-gradient">
          {wedding.bride.en} & {wedding.groom.en}
        </h3>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mt-2">
          {wedding.hashtag}
        </p>

        <div className="flex justify-center gap-3 mt-8">
          <a
            href={`https://wa.me/94788536767?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on WhatsApp"
            className="w-11 h-11 grid place-items-center rounded-full glass-card hover:bg-gold-gradient hover:text-primary-foreground transition-all hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          {/* <a href="#" aria-label="Instagram" className="w-11 h-11 grid place-items-center rounded-full glass-card hover:bg-gold-gradient hover:text-primary-foreground transition-all hover:scale-110">
            <FaInstagram />
          </a> */}
          <a href="https://www.facebook.com/profile.php?id=61589021800561" aria-label="Facebook" className="w-11 h-11 grid place-items-center rounded-full glass-card hover:bg-gold-gradient hover:text-primary-foreground transition-all hover:scale-110">
            <FaFacebookF />
          </a>
        </div>

        <p className="mt-10 font-serif italic text-foreground/70 flex items-center justify-center gap-2">
          CodeCraft - Design with <FaHeart className="text-red-500" /> by Malindu
        </p>
        <p className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3">
          © {new Date().getFullYear()} MG. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
