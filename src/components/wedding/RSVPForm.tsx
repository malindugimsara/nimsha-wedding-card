// src/components/RSVPForm.tsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useWedding } from "@/lib/wedding-context"; // භාෂාව ලබාගන්න context එක import කිරීම

interface FormData {
  name: string;
  attendance: string;
  guests: string;
  message: string;
}

export default function RSVPForm() {
  const { lang } = useWedding();
  const isEn = lang === "en"; // English ද Sinhala ද යන්න පරීක්ෂා කිරීම

  const [formData, setFormData] = useState<FormData>({
    name: '',
    attendance: 'Yes',
    guests: '1',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlName = params.get('name');
      const urlTitle = params.get('title');

      if (urlName) {
        const fullName = urlTitle && urlTitle !== 'Family' 
          ? `${urlTitle} ${urlName}` 
          : urlName;

        setFormData(prevData => ({
          ...prevData,
          name: fullName
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([
          { 
            name: formData.name, 
            attendance: formData.attendance, 
            guests: parseInt(formData.guests), 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      // Toast message එකත් භාෂාවට අනුව වෙනස් වීම
      toast.success(isEn ? 'Thank you for confirming your presence!' : 'ඔබගේ පැමිණීම තහවුරු කළා! ස්තූතියි!', {
        style: { borderRadius: '10px', background: '#333', color: '#fff' }
      });
      
      setFormData({ name: '', attendance: 'Yes', guests: '1', message: '' });
      window.history.replaceState({}, document.title, window.location.pathname);
      
    } catch (error: any) {
      toast.error(isEn ? 'Failed to send RSVP. Please try again.' : 'පණිවිඩය යැවීමට නොහැකි විය. නැවත උත්සාහ කරන්න.');
      console.error("Error inserting data: ", error.message);
    }
    
    setLoading(false);
  };

  return (
    <section className="relative lg:py-24 bg-gradient-soft font-sans" id="rsvp">
      <div className="container max-w-2xl relative mx-auto px-4">
        
        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/30 via-primary/5 to-primary/30 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card bg-card/95 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 overflow-hidden border border-primary/50 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] ring-1 ring-inset ring-white/50"
        >
          
          <div className="text-center mb-8 relative z-10">
            <h2 className="py-2 text-4xl md:text-5xl text-gold-gradient mb-2 font-semibold font-script">
              RSVP
            </h2>
            <p className={`text-foreground/80 text-sm md:text-base uppercase tracking-widest ${!isEn ? "font-sinhala" : "font-serif"}`}>
              {isEn ? "Please confirm your presence at our wedding" : "අපගේ විවාහ මංගල්‍යයට ඔබගේ පැමිණීම තහවුරු කරන්න"}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <label className={`block text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-1.5 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                {isEn ? "Your Name" : "ඔබගේ නම"}
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder={isEn ? "Enter your name" : "ඔබගේ නම ඇතුළත් කරන්න"}
                className={`w-full p-4 bg-white/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm placeholder:text-foreground/40 text-foreground/90 font-medium ${!isEn && formData.name === '' ? "font-sinhala" : ""}`} 
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-1.5 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                {isEn ? "Will you attend?" : "සහභාගී වෙනවද?"}
              </label>
              <select 
                name="attendance" 
                value={formData.attendance} 
                onChange={handleChange}
                className={`w-full p-4 bg-white/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm text-foreground/90 font-medium appearance-none cursor-pointer ${!isEn ? "font-sinhala" : "font-sans"}`}
              >
                <option value="Yes">{isEn ? "Yes, I will attend" : "ඔව්, අනිවාර්යයෙන්ම එනවා"}</option>
                <option value="No">{isEn ? "No, I can't make it" : "නැහැ, එන්න විදිහක් නැහැ"}</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-1.5 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                {isEn ? "Number of Guests" : "සහභාගී වන ගණන"}
              </label>
              <input 
                type="number" 
                name="guests" 
                min="1" 
                max="10" 
                value={formData.guests} 
                onChange={handleChange} 
                required
                className="w-full p-4 bg-white/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm text-foreground/90 font-medium" 
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-1.5 ${!isEn ? "font-sinhala" : "font-serif"}`}>
                {isEn ? "Wishes (Optional)" : "සුබ පැතුම් (Optional)"}
              </label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={3}
                placeholder={isEn ? "Your wishes or message..." : "ඔබගේ සුබ පැතුම් හෝ පණිවිඩය..."}
                className={`w-full p-4 bg-white/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm placeholder:text-foreground/40 text-foreground/90 font-medium resize-none ${!isEn && formData.message === '' ? "font-sinhala" : ""}`}
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit" 
                disabled={loading}
                className={`inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gold-gradient text-primary-foreground font-display text-sm tracking-[0.25em] uppercase shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1 w-full md:w-auto disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed ${!isEn ? "font-sinhala font-bold" : ""}`}
              >
                {loading 
                  ? (isEn ? 'Processing...' : 'සැකසෙමින් පවතී...') 
                  : (isEn ? 'Confirm (Submit)' : 'තහවුරු කරන්න')}
              </button>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
}