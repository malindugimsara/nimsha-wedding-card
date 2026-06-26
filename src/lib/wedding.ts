// Central wedding configuration — change names, dates, venues here.
export const wedding = {
  bride: { en: "Nimsha", si: "නිම්ෂා" },
  groom: { en: "Sandeepa", si: "සන්දීප" },
  brideParents: {
    en: "Loving Daughter of Mr. & Mrs. Wijesooriya",
    si: "විජේසූරිය මැතිතුමාගේ සහ එම මැතිනියගේ ආදරණීය දියණිය",
  },
  groomParents: {
    en: "Loving Son of Mr. & Mrs. Gamage",
    si: "ගමගේ මැතිතුමාගේ සහ එම මැතිනියගේ ආදරණීය පුත්",
  },
  // 11 July 2026, Poruwa Ceremony at 11:20 AM (Sri Lanka time)
  date: new Date("2026-07-11T11:20:00+05:30"),
  hashtag: "#SandeepaAndNimsha2026",

  invitationHeader: { en: "Together with our families", si: "අපගේ පවුල්වල අය සමඟ" },
  invitationWording: {
    en: "Request the honour of your presence to celebrate our marriage",
    si: "සමඟ අතිනත ගැනීමේ ප්‍රීතිය නිමිත්තෙන්",
  },
  invitedBy: {
    en: "Cordially invite you to share in our joy.",
    si: "පැවැත්වෙන ප්‍රිය සම්භාෂණයට සහභාගී වන මෙන් කැරෙන හෘදයාංගම ඇරයුමයි.",
  },

  ceremony: {
    title: { en: "The Poruwa Ceremony", si: "පෝරුව මංගල්‍යය" },
    time: "11:20 AM",
    timeSi: "පූර්ව භාග 11.20",
    date: "Monday, July 11, 2026",
    dateSi: "2026 ජූලි මස 11 වන දින",
    venue: "Hotel Grand Palace",
    venueSi: "හෝටල් ග්‍රෑන්ඩ් පැලස්",
    address: "Hikkaduwa",
    addressSi: "හික්කඩුව",
    mapsQuery: "Hotel+Grand+Palace+Hikkaduwa",
    mapsUrl: "https://maps.app.goo.gl/LEhhEW4zdi6o5Fbi9",
  },
  reception: {
    title: { en: "Reception", si: "ස්වාගත සංග්‍රහය" },
    time: "10:00 AM to 04:00 PM",
    timeSi: "පෙ.ව.10.00 සිට ප.ව.04.00 දක්වා",
    date: "Monday, July 11, 2026",
    dateSi: "2026 ජූලි මස 11 වන දින",
    venue: "Hotel Grand Palace",
    venueSi: "හෝටල් ග්‍රෑන්ඩ් පැලස්",
    address: "Hikkaduwa",
    addressSi: "හික්කඩුව",
    mapsQuery: "Hotel+Grand+Palace+Hikkaduwa",
    mapsUrl: "https://maps.app.goo.gl/LEhhEW4zdi6o5Fbi9",
  },
  dressCode: {
    en: "Traditional",
    si: "සාම්ප්‍රදායික ඇඳුම්",
  },
  contact: { name: "Sandeepa & Nimsha", phone: "0710328728 / 0763986498" },

  story: [
    { year: "2019", title: { en: "How We Met", si: "අපි මුණගැහුණා" }, text: { en: "A chance meeting that turned one conversation into endless ones.", si: "එක් කතා බසක් අනන්ත කතාබස් බවට පත් වූ අහඹු හමුවීමක්." } },
    { year: "2021", title: { en: "First Trip Together", si: "පළමු ගමන" }, text: { en: "Watching the sunrise over the hills — that's when we knew.", si: "කඳුකරයේ හිරු උදාව බැලූ දින — එතැනදී අපි දැන ගත්තා." } },
    { year: "2024", title: { en: "The Proposal", si: "යෝජනාව" }, text: { en: "Under a sky full of stars, he asked. She said yes.", si: "තරු පිරුණු අහස යට, ඔහු ඇසුවා. ඇය එකඟ වුණා." } },
    { year: "2026", title: { en: "Forever Begins", si: "සදාකාලය ආරම්භ වේ" }, text: { en: "Today we begin our forever — surrounded by everyone we love.", si: "අද අපගේ සදාකාලය ආරම්භ වේ — අප ආදරය කරන සියල්ලන් මැද." } },
  ],
} as const;

export type Lang = "en" | "si";