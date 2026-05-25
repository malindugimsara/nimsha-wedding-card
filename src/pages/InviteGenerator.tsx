import React, { useState } from "react";
import { FaWhatsapp, FaLink } from "react-icons/fa";

export const InviteGenerator = () => {
  const [guestName, setGuestName] = useState("");
  const [title, setTitle] = useState("Mr. & Mrs.");
  const [generatedLink, setGeneratedLink] = useState("");

  const titles = [
    "Mr.",
    "Mrs.",
    "Miss.",
    "Mr. & Mrs.",
    "Family"
  ];

  // Link eka generate karala WhatsApp open karana function eka
  const handleWhatsAppShare = () => {
    if (!guestName.trim()) {
      alert("Please enter a guest name!");
      return;
    }

    // Site eke URL eka auto gannawa (e.g., localhost:5173 hari vercel URL eka hari)
    const baseUrl = window.location.origin;
    
    // URL safe wenna encode karala link eka hadanawa
    const inviteLink = `${baseUrl}/?name=${encodeURIComponent(guestName)}&title=${encodeURIComponent(title)}`;
    
    // WhatsApp eken yawana message eka (Oyata oni widihata wenas karaganna)
    const message = `Hello ${title} ${guestName},
    We warmly invite you to celebrate our wedding with us! ✨💍
    ආයුබෝවන් ${title} ${guestName},
    අපගේ විවාහ උත්සවටය ඔබට ආදරයෙන් ආරාධනා කරමු!
    Please click the link below to view your invitation:
    පහත ලින්ක් එකෙන් ආරාධනා පත බලන්න:
    ${inviteLink}`;    // WhatsApp API URL eka
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Aluth tab ekaka WhatsApp open karanawa
    window.open(whatsappUrl, "_blank");
  };

  // Nikan link eka copy karaganna oni nam
  const handleCopyLink = () => {
    if (!guestName.trim()) return;
    const baseUrl = window.location.origin;
    const link = `${baseUrl}/?name=${encodeURIComponent(guestName)}&title=${encodeURIComponent(title)}`;
    navigator.clipboard.writeText(link);
    setGeneratedLink(link);
    setTimeout(() => setGeneratedLink(""), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/5 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-primary/20">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary-deep font-serif">
          Invite Generator
        </h2>

        {/* Title Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Title
          </label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          >
            {titles.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Guest Name Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guest Name
          </label>
          <input
            type="text"
            placeholder="e.g., Yasit"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleWhatsAppShare}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-3 px-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            Share via WhatsApp
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition-all"
          >
            <FaLink />
            {generatedLink ? "Link Copied!" : "Copy Link Only"}
          </button>
        </div>
      </div>
    </div>
  );
};