import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding";
import { useWedding } from "@/lib/wedding-context";
import { Ornament } from "./Decorations";

const calc = (target: Date) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Countdown = () => {
  const { lang } = useWedding();
  const [t, setT] = useState(() => calc(wedding.date));
  useEffect(() => {
    const id = setInterval(() => setT(calc(wedding.date)), 1000);
    return () => clearInterval(id);
  }, []);

  const labels = lang === "en"
    ? { d: "Days", h: "Hours", m: "Minutes", s: "Seconds", title: "Counting Down to Forever" }
    : { d: "දින", h: "පැය", m: "මිනිත්තු", s: "තත්පර", title: "සදාකාලයට ගණන් කරමින්" };

  const items = [
    { v: t.days, l: labels.d },
    { v: t.hours, l: labels.h },
    { v: t.minutes, l: labels.m },
    { v: t.seconds, l: labels.s },
  ];

  return (
    <section className="relative py-24 bg-gradient-radial overflow-hidden">
      <div className="container text-center relative">
        <Ornament className="text-primary w-40 mx-auto mb-4" />
        <h2 className="font-script text-4xl md:text-6xl text-gold-gradient mb-2">{labels.title}</h2>
        <p className="font-serif italic text-muted-foreground mb-12">
          {wedding.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 md:p-8 relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gold-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
              <motion.div
                key={it.v}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-display text-4xl md:text-6xl text-gold-gradient font-semibold tabular-nums"
              >
                {String(it.v).padStart(2, "0")}
              </motion.div>
              <div className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {it.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
