import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useWedding } from "@/lib/wedding-context";
import { Ornament } from "./Decorations";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";

const images = [g1, g2, g3, g4, g5, g6];

export const Gallery = () => {
  const { lang } = useWedding();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 bg-gradient-radial overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary-deep mb-3">
            {lang === "en" ? "Captured Moments" : "සිහිවටන"}
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-gold-gradient py-4 px-2">
            {lang === "en" ? "Our Gallery" : "ගැලරිය"}
          </h2>
          <Ornament className="text-primary w-48 mx-auto mt-4" />
        </div>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 120, modifier: 1.5, slideShadows: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="!pb-14"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="!w-[280px] sm:!w-[360px] md:!w-[420px]">
              <button
                onClick={() => setLightbox(src)}
                className="block w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-elegant group relative"
              >
                <img
                  src={src}
                  alt={`Wedding moment ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute inset-x-0 bottom-4 text-center font-script text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  ✦
                </div> */}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-background/95 backdrop-blur-md grid place-items-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 grid place-items-center rounded-full glass-card"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[95vw] rounded-2xl shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
