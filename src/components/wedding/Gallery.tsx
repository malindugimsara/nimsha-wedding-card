import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useWedding } from "@/lib/wedding-context";
import { Ornament } from "./Decorations";
import { LotusDivider } from "./Ornaments";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";
import g7 from "@/assets/gallery-7.png";

const images = [g1, g2, g3, g4, g5, g6, g7];

export const Gallery = () => {
  const { lang } = useWedding();
  const isEn = lang === "en";
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-16 lg:py-24 bg-gradient-soft overflow-hidden font-sans">
      
      {/* Background Water Ripples for Theme Continuity */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[45rem] h-[45rem] border-[1px] border-primary/20 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] border-[1px] border-primary/30 rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`uppercase text-primary-deep mb-3 ${isEn ? "font-display text-xs tracking-[0.4em]" : "font-sinhala font-semibold tracking-widest text-sm"}`}
          >
            {isEn ? "Captured Moments" : "සිහිවටන"}
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-gold-gradient py-2 px-2 drop-shadow-sm ${isEn ? "font-script text-5xl md:text-7xl" : "font-sinhala font-bold text-4xl md:text-6xl"}`}
          >
            {isEn ? "Our Gallery" : "ගැලරිය"}
          </motion.h2>
          
          <div className="flex justify-center mt-2 mb-2">
            <LotusDivider width="w-20 sm:w-28" />
          </div>
          <Ornament className="text-primary w-40 md:w-48 mx-auto opacity-80" />
        </div>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 20, stretch: 0, depth: 150, modifier: 1.5, slideShadows: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="!pb-16"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="!w-[280px] sm:!w-[360px] md:!w-[420px]">
              <button
                onClick={() => setLightbox(src)}
                // Traditional Photo Frame Look (White background padding with thin gold border)
                className="block w-full aspect-[3/4] overflow-hidden rounded-2xl bg-white dark:bg-black/50 p-2 md:p-3 border border-rose-200/50 dark:border-primary/20 shadow-elegant group relative"
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl border border-primary/10">
                  <img
                    src={src}
                    alt={`Wedding moment ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                     <span className="font-script text-3xl text-white drop-shadow-md">✦</span>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox / Fullscreen Image Viewer */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-white/95 dark:bg-black/95 backdrop-blur-xl grid place-items-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 grid place-items-center rounded-full bg-rose-50/50 dark:bg-white/10 border border-primary/30 text-primary-deep hover:bg-primary/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <HiX className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-card p-3 md:p-4 rounded-3xl shadow-2xl border border-rose-200 dark:border-primary/20 max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lotus Corners for the Lightbox Image Frame */}
              <LotusCorner className="absolute top-4 left-4 w-10 text-primary/40 z-10 drop-shadow-sm pointer-events-none" />
              <LotusCorner className="absolute top-4 right-4 w-10 text-primary/40 scale-x-[-1] z-10 drop-shadow-sm pointer-events-none" />
              <LotusCorner className="absolute bottom-4 left-4 w-10 text-primary/40 scale-y-[-1] z-10 drop-shadow-sm pointer-events-none" />
              <LotusCorner className="absolute bottom-4 right-4 w-10 text-primary/40 scale-x-[-1] scale-y-[-1] z-10 drop-shadow-sm pointer-events-none" />

              <img
                src={lightbox}
                alt="Enlarged wedding moment"
                className="max-h-[80vh] max-w-[90vw] md:max-w-[75vw] rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Small Lotus Corner SVG for Lightbox Frame
const LotusCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden>
    <path d="M5 5 Q 30 15 45 45 Q 60 75 95 95" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <path d="M5 5 Q 10 30 45 45" />
    <path d="M25 25 Q 35 30 45 45" />
  </svg>
);