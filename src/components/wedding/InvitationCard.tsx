import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { wedding } from "@/lib/wedding";
import { useWedding } from "@/lib/wedding-context";
import { Ornament, Sparkles } from "./Decorations";
import gallery6 from "@/assets/gallery-6.jpg";

export const InvitationCard = () => {
  const { lang } = useWedding();
  const isEn = lang === "en";

  // State for Name and Title
  const [guestName, setGuestName] = useState("");
  // Default title eka widihata meka thiyanawa, URL eken dunnoth meka wenas wenawa
  const [guestTitle, setGuestTitle] = useState("Mr. & Mrs. / Mrs. / Mr. / Miss. / Family");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    
    // Name eka gannawa
    const name = searchParams.get("name");
    if (name) {
      setGuestName(name);
    }

    // Title eka gannawa
    const title = searchParams.get("title");
    if (title) {
      setGuestTitle(title);
    }
  }, []);

  return (
    <section className="relative lg:py-24 bg-gradient-soft">
      <div className="container max-w-3xl relative">
        
        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/30 via-primary/5 to-primary/30 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card bg-card/95 backdrop-blur-xl rounded-[2rem] p-10 md:p-16 text-center overflow-hidden border border-primary/50 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] ring-1 ring-inset ring-white/50"
        >
          <Sparkles count={8} />
          
          <img src={gallery6} alt="" aria-hidden className="absolute -top-12 -left-12 w-40 opacity-30 mix-blend-multiply dark:mix-blend-screen rotate-12" />
          <img src={gallery6} alt="" aria-hidden className="absolute -bottom-12 -right-12 w-40 opacity-30 mix-blend-multiply dark:mix-blend-screen -rotate-180" />

          <h3 className={`font-script text-4xl md:text-5xl text-gold-gradient mb-2 relative z-10 ${!isEn ? "font-sinhala font-semibold" : ""}`}>
            {isEn ? wedding.invitationHeader.en : wedding.invitationHeader.si}
          </h3>

          {/* Dynamic Guest Name & Title Section */}
          {guestName && (
            <div className="relative z-10 my-6 flex flex-col items-center justify-center animate-fade-in">
              <p className={`text-foreground/80 text-sm md:text-base uppercase tracking-widest mb-1 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                Request the honour of your presence
              </p>
              
              {/* Dynamic Title Eka Methanata Damma */}
              <p className={`text-foreground/70 text-xs md:text-sm uppercase tracking-wider mb-5 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                {guestTitle}
              </p>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-deep border-b-[2px] border-dotted border-primary/60 pb-2 mb-5 px-8 min-w-[250px] inline-block text-center font-display">
                {guestName}
              </h2>
              
              <p className={`text-foreground/80 text-sm md:text-base uppercase tracking-widest mt-1 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                To celebrate our marriage of
              </p>
            </div>
          )}

          <Ornament className="text-primary w-40 mx-auto mb-8 relative z-10" />

          <p className={`text-foreground/85 text-base md:text-lg mb-2 leading-relaxed relative z-10 ${!isEn ? "font-sinhala" : "font-serif italic"}`}>
            {isEn ? wedding.brideParents.en : wedding.brideParents.si}
          </p>
          <h2 className={`text-6xl md:text-7xl text-gold-gradient leading-tight my-3 relative z-10 drop-shadow-sm ${!isEn ? "font-sinhala font-bold" : "font-couple"}`}>
            {isEn ? wedding.bride.en : wedding.bride.si}
          </h2>

          <p className={`text-foreground/85 text-base md:text-lg my-4 leading-relaxed relative z-10 ${!isEn ? "font-sinhala" : "font-serif italic"}`}>
            {isEn ? wedding.groomParents.en : wedding.groomParents.si}
          </p>
          <h2 className={`text-6xl md:text-7xl text-gold-gradient leading-tight my-3 relative z-10 drop-shadow-sm ${!isEn ? "font-sinhala font-bold" : "font-couple"}`}>
            {isEn ? wedding.groom.en : wedding.groom.si}
          </h2>

          <p className={`text-foreground/90 font-medium text-base md:text-lg mt-6 relative z-10 ${!isEn ? "font-sinhala" : "font-serif italic"}`}>
            {isEn ? wedding.invitationWording.en : wedding.invitationWording.si}
          </p>

          <Ornament className="text-primary w-48 mx-auto mt-8 mb-6 relative z-10" />

          <div className={`text-xl md:text-2xl text-primary-deep font-bold relative z-10 ${!isEn ? "font-sinhala" : "font-display tracking-[0.2em]"}`}>
            {isEn ? wedding.ceremony.date : wedding.ceremony.dateSi}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-foreground/90 max-w-md mx-auto relative z-10 bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <div className={`${!isEn ? "font-sinhala" : "font-serif"}`}>
              <div className="text-sm text-primary uppercase tracking-widest mb-1">{isEn ? "Venue" : "ස්ථානය"}</div>
              <div className="text-lg font-semibold">{isEn ? wedding.ceremony.venue : wedding.ceremony.venueSi}</div>
              <div className="text-sm mt-1 text-foreground/70">{isEn ? wedding.ceremony.address : wedding.ceremony.addressSi}</div>
            </div>
            <div className={`${!isEn ? "font-sinhala" : "font-serif"}`}>
              <div className="text-sm text-primary uppercase tracking-widest mb-1">{isEn ? "Time" : "වේලාව"}</div>
              <div className="text-lg font-semibold">{isEn ? wedding.ceremony.time : wedding.ceremony.timeSi}</div>
              <div className="text-sm mt-1 text-foreground/70">{isEn ? wedding.reception.time : wedding.reception.timeSi}</div>
            </div>
          </div>

          <p className={`mt-8 text-foreground/80 max-w-xl mx-auto relative z-10 ${!isEn ? "font-sinhala" : "font-serif italic"}`}>
            {isEn ? wedding.invitedBy.en : wedding.invitedBy.si}
          </p>

          <a
            href={wedding.ceremony.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-display text-xs tracking-[0.25em] uppercase shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1"
          >
            <FaMapMarkerAlt className="w-4 h-4" />
            {isEn ? "View Hotel Location" : "හෝටල් ස්ථානය බලන්න"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};