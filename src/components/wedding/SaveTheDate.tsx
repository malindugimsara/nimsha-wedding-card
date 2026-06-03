import { motion } from "framer-motion";
import { FaGoogle, FaCalendarAlt } from "react-icons/fa";
import { useWedding } from "@/lib/wedding-context";
import { buildGoogleCalendarUrl, downloadICS } from "@/lib/calendar";
import { Ornament } from "./Decorations";

export const SaveTheDate = () => {
  const { lang } = useWedding();
  return (
    <section className="relative py-24 bg-gradient-radial overflow-hidden">
      <div className="container max-w-3xl text-center">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-primary-deep mb-3">
          {lang === "en" ? "Don't Miss It" : "අමතක නොකරන්න"}
        </p>
        <h2 className="font-script text-5xl md:text-7xl text-gold-gradient mb-3 py-4 px-2">
          {lang === "en" ? "Save Our Date" : "දිනය සුරකින්න"}
        </h2>
        <Ornament className="text-primary w-48 mx-auto mb-6" />
        <p className="font-serif text-lg text-foreground/80 max-w-xl mx-auto mb-10">
          {lang === "en"
            ? "Add our wedding to your calendar — we'll even remind you 2 days before, so you have time to find that perfect outfit."
            : "අපගේ විවාහ දිනය ඔබගේ දින දර්ශනයට එක් කරන්න — දින 2කට පෙර අපි ඔබට මතක් කරන්නෙමු."}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={buildGoogleCalendarUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-display text-xs tracking-[0.25em] uppercase shadow-elegant hover:shadow-glow transition-all hover:scale-105 shimmer"
          >
            <FaGoogle /> {lang === "en" ? "Google Calendar" : "Google දින දර්ශනය"}
          </a>
          <button
            onClick={downloadICS}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display text-xs tracking-[0.25em] uppercase transition-all hover:scale-105"
          >
            <FaCalendarAlt /> {lang === "en" ? "Apple / Outlook (.ics)" : "Apple / Outlook"}
          </button>
        </motion.div>

        <p className="font-serif italic text-sm text-muted-foreground mt-8">
          {lang === "en" ? "Reminder set for 2 days before · Works on iPhone, Android, Outlook" : "දින 2කට පෙර මතක්වීමක්"}
        </p>
      </div>
    </section>
  );
};
