
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  Facebook, 
  Youtube, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Stethoscope, 
  Heart, 
  Users, 
  Award,
  BookOpen,
  Bell,
  MessageCircle,
  ArrowUp,
  Globe
} from 'lucide-react';

// --- Types ---
type View = 'home' | 'about' | 'services' | 'experience' | 'blog' | 'contact';

// --- Translation Dictionary ---
const translations = {
  bn: {
    doctorName: "ডা. নার্গিস সুলতানা সুমি",
    designation: "প্রসূতি ও স্ত্রীরোগ বিশেষজ্ঞ ও ল্যাপারোস্কোপিক সার্জন",
    role: "সহযোগী অধ্যাপক, প্রসূতি ও স্ত্রীরোগ বিভাগ",
    workplace: "মুগদা মেডিকেল কলেজ ও হাসপাতাল, ঢাকা",
    address: "পপুলার ডায়াগনস্টিক সেন্টার | ভবন-৩ (ইস্টার্ন প্লাজা মার্কেটের বিপরীতে), | শান্তিনগর, ঢাকা",
    visitingTime: "প্রতি শনিবার থেকে বৃহস্পতিবার | (শুক্রবার বন্ধ) | বিকাল ৫টা থেকে রাত ৯টা",
    navAbout: "পরিচিতি",
    navServices: "সেবাসমূহ",
    navExperience: "অভিজ্ঞতা",
    navBlog: "ব্লগ",
    navContact: "যোগাযোগ",
    btnSerial: "চেম্বার তথ্য",
    heroBadge: "নারী স্বাস্থ্যে যত্নশীল চিকিৎসাসেবা",
    heroQuote: "“নারী স্বাস্থ্যের যত্নে অভিজ্ঞ ও বিশ্বস্ত চিকিৎসাসেবায়-\nডা. নার্গিস সুলতানা সুমি আপনার প্রতিটি সমস্যার সমাধানে পাশে আছেন আন্তরিকতার সাথে।”",
    statPatients: "সফল চিকিৎসা",
    statExp: "অভিজ্ঞতা",
    feat1Title: "অভিজ্ঞ চিকিৎসক",
    feat1Desc: "দীর্ঘ ২৫ বছরের বেশি ক্লিনিকাল অভিজ্ঞতা",
    feat2Title: "আধুনিক চিকিৎসা",
    feat2Desc: "উন্নত প্রযুক্তিতে স্বাস্থ্যসেবা",
    feat3Title: "যত্নশীল সেবা",
    feat3Desc: "রোগীর প্রতি মানবিক ব্যবহার",
    aboutTitle: "ব্যক্তিগত ও পেশাগত পরিচিতি",
    aboutPara1: "ডাঃ নার্গিস সুলতানা সুমি খুলনা জেলার এক সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন। তিনি রাজশাহী মেডিকেল কলেজ থেকে এমবিবিএস ডিগ্রী অর্জনের পর বিসিএস পরীক্ষায় কৃতিত্বের সাথে কৃতকার্য হয়ে দেশের বিভিন্ন উপজেলা স্বাস্থ্য কমপ্লেক্স এবং মেডিকেল কলেজ হাসপাতালে চিকিৎসা সেবা দিয়েছেন এবং এ ধারা এখনো অব্যাহত রয়েছে।",
    aboutPara2: "তিনি গাইনী এন্ড অবস বিষয়ে এম.সি.পি.এস এবং এফ.সি.পি.এস ডিগ্রী অর্জনের পর দেশে এবং বিদেশে বন্ধ্যাত্ব বিদ্যা এবং গাইনী ল্যাপরোস্কোপিক সার্জারির উপর উচ্চতর প্রশিক্ষণ লাভ করেন। এছাড়া তিনি আমেরিকান কলেজ অফ সার্জনস থেকে প্রেস্টিজিয়াস এফ.এ.সি.এস ডিগ্রী অর্জন করেন এবং ভারতের দিল্লি থেকে গাইনী এন্ডোস্কোপিক (ল্যাপারোসকপি এবং হিসটেরোসকপি) সার্জারীতে মাস্টার্স ডিগ্রী সম্পন্ন করেন।",
    aboutPara3: "তিনি রিপ্রোডাকটিভ মেডিসিন এবং এ আর টি (টেস্ট টিউব বেবী) বিষয়ে ফেলোশীপ ডিগ্রী অর্জন করেন। তার চিকিৎসায় শত শত দম্পতির মা-বাবা হওয়ার স্বপ্ন পূরণ হয়েছে। বিভিন্ন জটিল স্ত্রী-রোগের অপারেশন তিনি ল্যাপারস্কোপির মাধ্যমে অত্যন্ত দক্ষতা ও সফলতার সাথে সম্পন্ন করেছেন।",
    serviceTitle: "বিশেষায়িত সেবাসমূহ",
    serviceDesc: "বিশ্বমানের চিকিৎসা সরঞ্জাম ও আন্তরিক সেবার মাধ্যমে নারীদের সুস্থতা নিশ্চিত করা হয়।",
    service1: "প্রসূতি ও স্ত্রীরোগ চিকিৎসা",
    service1D: "নারীদের প্রজননতন্ত্রের বিভিন্ন জটিল রোগের আধুনিক সমাধান।",
    service2: "বন্ধ্যাত্ব চিকিৎসা",
    service2D: "নিঃসন্তান দম্পতিদের জন্য বৈজ্ঞানিক ও কার্যকরী বন্ধ্যাত্ব নিরসন সেবা।",
    service3: "নিরাপদ গর্ভকালীন সেবা",
    service3D: "মা ও শিশুর সুস্থতা নিশ্চিত করতে নিয়মিত প্রসবপূর্ব যত্ন।",
    contactTitle: "চেম্বার তথ্যের জন্য সরাসরি কল করুন",
    contactSubtitle: "চেম্বার তথ্য",
    contactAddress: "চেম্বার ঠিকানা",
    contactTime: "দেখার সময়",
    contactPhone: "সরাসরি কথা বলুন",
    footerText: "নারীদের আধুনিক ও নির্ভরযোগ্য চিকিৎসা নিশ্চিত করতে ডা. নার্গিস সুলতানা সুমি বদ্ধপরিকর। প্রতিটি রোগীর জন্য আলাদা সময় ও সঠিক নির্দেশিকা প্রদানই উনার মূল বৈশিষ্ট্য।",
    emergencyWarning: "সতর্কতা: এই ওয়েবসাইটটি শুধুমাত্র তথ্য প্রদানের জন্য। কোনো জরুরি অবস্থায় সরাসরি চিকিৎসকের সাথে যোগাযোগ করুন।",
    formName: "নাম",
    formPhone: "ফোন",
    formDept: "বিভাগ",
    formMsg: "বার্তা",
    formBtn: "অনলাইন রিকোয়েস্ট পাঠান",
    viewMore: "আরও দেখুন",
    viewAllServices: "সবগুলো সেবা দেখুন",
    viewAllExperience: "বিস্তারিত অভিজ্ঞতা",
    viewAllPosts: "সবগুলো পোস্ট দেখুন",
    viewDetails: "বিস্তারিত দেখুন",
    journals: "জার্নালস",
    journalDesc: "প্রকাশিত কিছু গুরুত্বপূর্ণ মেডিকেল জার্নাল ও গবেষণাপত্র।",
    contactOverview: "সরাসরি যোগাযোগ ও চেম্বার তথ্য",
    galleryTitle: "ফটো গ্যালারি",
    serviceBlogLink: "বিস্তারিত পড়ুন",
    serviceConsultLink: "পরামর্শ নিন",
  },
  en: {
    doctorName: "Dr. Nargis Sultana Sumi",
    designation: "Gynecology, Obstetrics & Laparoscopic Surgeon",
    role: "Associate Professor, Dept. of Gynecology & Obstetrics",
    workplace: "Mugda Medical College & Hospital, Dhaka",
    address: "Popular Diagnostic Center | Building-3 (Opposite Eastern Plaza), | Shantinagar, Dhaka",
    visitingTime: "Sat to Thu | (Fri Closed) | 5:00 PM to 9:00 PM",
    navAbout: "About Me",
    navServices: "Services",
    navExperience: "Experience",
    navBlog: "Health Tips",
    navContact: "Contact",
    btnSerial: "Chamber Info",
    heroBadge: "Trusted Care for Women's Health",
    heroQuote: "“Experienced and compassionate care for women's health.\nDr. Nargis Sultana Sumi is dedicated to providing the best treatment for your well-being.”",
    statPatients: "Successful Cases",
    statExp: "Experience",
    feat1Title: "Expert Specialist",
    feat1Desc: "Over 25+ years of clinical excellence",
    feat2Title: "Modern Tech",
    feat2Desc: "Advanced healthcare technology",
    feat3Title: "Caring Support",
    feat3Desc: "Compassionate patient-doctor relationship",
    aboutTitle: "Personal & Professional Profile",
    aboutPara1: "Dr. Nargis Sultana Sumi was born into a respected Muslim family in the Khulna district. After obtaining her MBBS degree from Rajshahi Medical College, she successfully passed the BCS examination with distinction. She has provided medical services in various Upazila Health Complexes and Medical College Hospitals across the country, a journey that continues to this day.",
    aboutPara2: "After earning her MCPS and FCPS degrees in Gynecology & Obstetrics, she received advanced training in Infertility and Gynecological Laparoscopic Surgery both at home and abroad. Additionally, she earned the prestigious FACS degree from the American College of Surgeons and completed a Master's degree in Gynecological Endoscopic (Laparoscopy and Hysteroscopy) Surgery from Delhi, India.",
    aboutPara3: "She achieved a Fellowship degree in Reproductive Medicine and ART (Test Tube Baby). Her treatment has fulfilled the dreams of hundreds of couples to become parents. She has performed various complex gynecological operations through laparoscopy with great skill and success.",
    serviceTitle: "Specialized Services",
    serviceDesc: "Ensuring women's wellness through world-class medical equipment and dedicated care.",
    service1: "Gynecology & Obstetrics",
    service1D: "Modern solutions for complex reproductive health issues.",
    service2: "Infertility Treatment",
    service2D: "Scientific and effective care for couples aspiring for parenthood.",
    service3: "Safe Pregnancy Care",
    service3D: "Regular prenatal care to ensure healthy mothers and babies.",
    contactTitle: "Call Directly for Chamber Info",
    contactSubtitle: "Chamber Info",
    contactAddress: "Chamber Address",
    contactTime: "Visiting Hours",
    contactPhone: "Direct Contact",
    footerText: "Dr. Nargis Sultana Sumi is committed to providing reliable healthcare for women. Personalized care and proper guidance are her core values.",
    emergencyWarning: "Warning: This website is for informational purposes only. In case of emergency, contact a doctor directly.",
    formName: "Name",
    formPhone: "Phone",
    formDept: "Department",
    formMsg: "Message",
    formBtn: "Send Online Request",
    viewMore: "View More",
    viewAllServices: "View All Services",
    viewAllExperience: "View Full Experience",
    viewAllPosts: "View All Posts",
    viewDetails: "View Details",
    journals: "Journals",
    journalDesc: "Published medical journals and research papers.",
    contactOverview: "Contact & Chamber Info",
    galleryTitle: "Photo Gallery",
    serviceBlogLink: "Read Details",
    serviceConsultLink: "Consult Now",
  }
};

const BLOG_POSTS = [
  {
    title: "গর্ভাবস্থায় দেখা দিতে পারে",
    img: "https://lh3.googleusercontent.com/d/1hjfjWXnyH0OeQPmnFadMa8m5rPspuXHY",
    link: "https://www.facebook.com/share/p/1FXomn1MEs/"
  },
  {
    title: "ল্যাপারোস্কোপিক সার্জারির জনপ্রিয়তার",
    img: "https://lh3.googleusercontent.com/d/1UWu3rXY3cYaqTiGQy_Bg4ppRhiiiD_yR",
    link: "https://www.facebook.com/share/p/1AbGYKhA63/"
  },
  {
    title: "একটি মেয়ে গর্ভবতী",
    img: "https://lh3.googleusercontent.com/d/1PeQvkDxbpWUZ5G4LNpPmRgVykne6PzDS",
    link: "https://www.facebook.com/share/p/17jVzRNWoh/"
  },
  {
    title: "মাসিকের অনিয়ম!",
    img: "https://lh3.googleusercontent.com/d/1LOQ7yDvx6psUf0-nIyieOfQ0qd8jtWp2",
    link: "https://www.facebook.com/share/p/1DnMEz8DoV/"
  },
  {
    title: "এক বছরের বেশি সময়",
    img: "https://lh3.googleusercontent.com/d/17IeT4zQBkTmhyX_sSd66BZMyGsSR2NlF",
    link: "https://www.facebook.com/share/p/17jVzRNWoh/"
  },
  {
    title: "গর্ভাবস্থায় মা ও শিশুর সুরক্ষায়",
    img: "https://lh3.googleusercontent.com/d/1xoV8Jz3XYWL1WsYBkFlO2R9x4Cs5OJp5",
    link: "https://www.facebook.com/share/p/1Ckc1gfFSK/"
  },
  {
    title: "বেশিরভাগ ক্ষেত্রেই পুরুষের",
    img: "https://lh3.googleusercontent.com/d/1g9cqjDYIy-JgEe_xu29lIT1o1IR-r9kL",
    link: "https://www.facebook.com/share/p/17YyJgGA6N/"
  },
  {
    title: "গর্ভবতীর চেকআপ",
    img: "https://lh3.googleusercontent.com/d/1LjzsGzZosGbDBX4gj12hYislAiJ1g4Iz",
    link: "https://www.facebook.com/share/p/1BERHzfcsD/"
  },
  {
    title: "ইউটেরাইন ফাইব্রয়েডস",
    img: "https://lh3.googleusercontent.com/d/1lnps0WqqkcSDgBeqRcjAk8mVHr3HzePr",
    link: "https://www.facebook.com/share/p/1CW1kow4Ze/"
  },
  {
    title: "সন্তান প্রসবের পরিকল্পনা ও প্রস্তুতি",
    img: "https://lh3.googleusercontent.com/d/1fsX1c28i78lHRIqVnRZ2iTxDt5EWbhIm",
    link: "https://www.facebook.com/share/p/18MuotQjpF/"
  },
  {
    title: "মাসিক চলাকালীন সময়ে",
    img: "https://lh3.googleusercontent.com/d/12XFae7ebzjejLzfeiqXs16Bih8aCaRFU",
    link: "https://www.facebook.com/share/p/171HHguG7T/"
  },
  {
    title: "প্রসবকালে মা ও শিশুমৃত্যুর",
    img: "https://lh3.googleusercontent.com/d/1jN55I1203JgYhyxKrSqdym4VwoZwcRDk",
    link: "https://www.facebook.com/share/p/1XJJKG6nFu/"
  },
  {
    title: "গর্ভকালে প্রতি চার নারীর",
    img: "https://lh3.googleusercontent.com/d/1E-dOg_f9mXL67RzsURfIb5zJw_iC4YNY",
    link: "https://www.facebook.com/share/p/185X4dZeEp/"
  },
  {
    title: "অতিরিক্ত ব্যথাযুক্ত মাসিক",
    img: "https://lh3.googleusercontent.com/d/1WS88mQUhLoBibFZkrleQyX-U1OxGPKTc",
    link: "https://www.facebook.com/share/p/185PY8pV4V/"
  },
  {
    title: "বন্ধ্যাত্ব এড়াতে করণীয়",
    img: "https://lh3.googleusercontent.com/d/1-Vv2pwo3mVdj1RsNVbapr1aH0mDD537C",
    link: "https://www.facebook.com/share/p/1DDH7KH9rC/"
  },
  {
    title: "প্রেগন্যান্সি ও হাইজিন",
    img: "https://lh3.googleusercontent.com/d/18KRKIVrljQ_ab5_uabVlWMSz_BGbgGDY",
    link: "https://www.facebook.com/share/p/1B4nvxGSgn/"
  },
  {
    title: "বন্ধ্যাত্ব চিকিৎসায় দম্পতিকে",
    img: "https://lh3.googleusercontent.com/d/1t-TnvMR7eynyqYeU3iEUX_qcZk5RSXlf",
    link: "https://www.facebook.com/share/p/178TSBLKQc/"
  },
  {
    title: "বন্ধ্যাত্ব চিকিৎসায় মানসিক",
    img: "https://lh3.googleusercontent.com/d/1nhrU7r3po58_m0DP5v8pMWpfCpyjI6ia",
    link: "https://www.facebook.com/share/p/188gJA7BLi/"
  },
  {
    title: "মাসিক চলাকালীন সময়",
    img: "https://lh3.googleusercontent.com/d/1oy4IWWYaI_iH3LkHVjU1Vb8QGDa7QVVs",
    link: "https://www.facebook.com/share/p/1NXnPRfqnd/"
  },
  {
    title: "বন্ধ্যাত্ব দূরীকরণে ওভুলেশন ইন্ডাকশন",
    img: "https://lh3.googleusercontent.com/d/1N2qmmVn2R_6Tt-frK4_KGvqCIhMg1ZT3",
    link: "https://www.facebook.com/share/p/14YSBFh3J6E/"
  },
  {
    title: "গর্ভাবস্থায় সাদা স্রাব",
    img: "https://lh3.googleusercontent.com/d/1qePgo-HL_UzIJ_nSIctcNPludgOZeH9_",
    link: "https://www.facebook.com/share/p/15pgHsnGuX/"
  },
  {
    title: "ভ্যাজাইনাল সমস্যা বিষয়ে",
    img: "https://lh3.googleusercontent.com/d/1vZztO-YA9-vu09pajr6iQ7H-EXDRLPcK",
    link: "https://www.facebook.com/share/p/1AoKTUo2Ei/"
  },
  {
    title: "ইন্ট্রাসাইটোপ্লাজমিক স্পার্ম ইনজেকশন (ICSI)",
    img: "https://lh3.googleusercontent.com/d/1on3oz5Tj63-sbtWWfWrSeXi7eXr7lmlc",
    link: "https://www.facebook.com/share/p/1D5QXcWYZv/"
  },
  {
    title: "সার্ভাইক্যাল ক্যান্সার!",
    img: "https://lh3.googleusercontent.com/d/1lZYN99qQTUHrQus3Ukc2YZ4HStVvigmS",
    link: "https://www.facebook.com/share/p/1BuxbHZCNa/"
  },
  {
    title: "নারীর স্বাস্থ্য সুরক্ষা",
    img: "https://lh3.googleusercontent.com/d/1RwxpjEI0-pRpZEaGhc3c7CzbkYQpHuKr",
    link: "https://www.facebook.com/share/p/16Y8Kj3eNC/"
  },
  {
    title: "গাইনোকোলজিক্যাল স্বাস্থ্য সুরক্ষায় ওজন",
    img: "https://lh3.googleusercontent.com/d/1Hwy5BEdIVNKzXDXYZjffMKEN-OWBNLNe",
    link: "https://www.facebook.com/share/p/1HGfXQ6kFQ/"
  },
  {
    title: "স্বাভাবিকের চেয়ে বেশি রক্তপাত",
    img: "https://lh3.googleusercontent.com/d/1qjapTKBvGjxujuw5J9_gj9x5p6Pmv7DJ",
    link: "https://www.facebook.com/share/p/18GbsHMQNU/"
  },
  {
    title: "গর্ভপাতের পর মায়ের মানসিক যত্ন",
    img: "https://lh3.googleusercontent.com/d/1Ygf_LRpCBYBekqtY2DLJ_XgsQ28pqVWy",
    link: "https://www.facebook.com/share/p/1GEJvzqvnf/"
  },
  {
    title: "IVF কি",
    img: "https://lh3.googleusercontent.com/d/1SP1KUjYSzhMOEcmZOdijHCln9Vw20_YB",
    link: "https://www.facebook.com/share/p/186LF45ToH/"
  },
  {
    title: "মেনোপজের পর রক্ত পড়া",
    img: "https://lh3.googleusercontent.com/d/1khNDnQY4X3WAvlIkZXzJdO74HsZq8WJT",
    link: "https://www.facebook.com/share/p/1CgY4wNDkP/"
  },
  {
    title: "নারীদের সাধারণ ৮টি গাইনোকলজিক্যাল সমস্যা",
    img: "https://lh3.googleusercontent.com/d/1OeWzF_1fRHoCMENJa_EHyB3Q6Rgjo0pN",
    link: "https://www.facebook.com/share/p/1Anf8UFRwo/"
  },
  {
    title: "নারীর বন্ধ্যাত্বের সাধারণ কারণ",
    img: "https://lh3.googleusercontent.com/d/1PMAuZob6f2Y7UHYLOdDW7kSXGwgH71pC",
    link: "https://www.facebook.com/share/p/1DrAqkBi88/"
  },
  {
    title: "গর্ভবতী মা মানেই দ্বিগুণ সতর্কতা!",
    img: "https://lh3.googleusercontent.com/d/1ccPzOffBHAs6_dHoSV3_6cxq2fqEOopl",
    link: "https://www.facebook.com/share/p/1CXE2HsUWr/"
  },
  {
    title: "আবার গর্ভবতী",
    img: "https://lh3.googleusercontent.com/d/137SNgEJo5C4APucPa1k_699-AdloIeXb",
    link: "https://www.facebook.com/share/p/1AaKMHBcsq/"
  },
  {
    title: "রক্তস্রাব vs সাদাস্রাব",
    img: "https://lh3.googleusercontent.com/d/1Pkd3S6gjA41cmHCKrdymPl-M9qwvN9v3",
    link: "https://www.facebook.com/share/p/1GRu1WvjkD/"
  },
  {
    title: "ইউটেরাইন ফাইব্রয়েড",
    img: "https://lh3.googleusercontent.com/d/1en9YOBXu0Ts21JnL7TG2Nyu5xrxGeZJ6",
    link: "https://www.facebook.com/share/p/1GpDED2dv8/"
  },
  {
    title: "এপিডিউরাল অ্যানালজেসিয়া",
    img: "https://lh3.googleusercontent.com/d/1GPW3aKwOg8HGQn0gWSJgFIzIlhkrAP9g",
    link: "https://www.facebook.com/share/p/1CLXSLLTGo/"
  },
  {
    title: "একসাথে দুটি প্রাণ",
    img: "https://lh3.googleusercontent.com/d/1gC2FPf_ueR5fepEaj9fYArm1VNuOxGQt",
    link: "https://www.facebook.com/share/p/1BPtVt8T9m/"
  },
  {
    title: "পি.আর.পি. কী",
    img: "https://lh3.googleusercontent.com/d/1LrcxbIk3yhtTPb30GMjTJjfQPWX5MPRy",
    link: "https://www.facebook.com/share/p/171G9nTCyp/"
  }
];

const YOUTUBE_VIDEOS = [
  "5XXObZYpi8s", "JPC8_gdo-F4", "Yq6V4f6O2r0", "Z_pSMjccEO0", "Xieo1N0oHPg",
  "S_Shd9qlv6g", "1jm5YOjcnHU", "th_tr_ZYEZw", "aFmK1E1JXMM", "qOAylMKcQGg",
  "xnlo4eqoDOw", "PLJMSLzPhHg", "bm1m2-tXnsE", "gqoyrKg9IKc", "tscd9DZt-K4",
  "T8AQ2ekSvis", "5CA9cYAKo7k", "RW82yu4lvpY"
];

// --- Components ---

const Navbar = ({ 
  lang, 
  setLang, 
  currentView, 
  setView 
}: { 
  lang: 'bn' | 'en', 
  setLang: (l: 'bn' | 'en') => void, 
  currentView: View, 
  setView: (v: View) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const menuItems: { name: string, id: View }[] = [
    { name: t.navAbout, id: 'about' },
    { name: t.navServices, id: 'services' },
    { name: t.navExperience, id: 'experience' },
    { name: t.navBlog, id: 'blog' },
    { name: t.navContact, id: 'contact' },
  ];

  const handleNav = (v: View) => {
    setView(v);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <button 
            onClick={() => handleNav('home')} 
            className="flex flex-col group cursor-pointer text-left"
          >
            <span className={`text-pink-600 font-bold tracking-tight transition-all group-hover:scale-105 ${lang === 'en' ? 'text-[17px] md:text-2xl' : 'text-xl md:text-2xl'}`}>{t.doctorName}</span>
            <span className={`text-[10px] uppercase tracking-widest text-slate-500 hidden md:block transition-opacity opacity-80`}>Gynecology & Infertility Specialist</span>
          </button>

          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => handleNav(item.id)}
                  className={`transition-all font-semibold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 after:transition-all hover:after:w-full ${currentView === item.id ? 'text-pink-600 after:w-full' : 'text-slate-600 hover:text-pink-600'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
              className="flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full transition-all border border-slate-200 group"
              title="Switch Language"
            >
              <Globe size={16} className="mr-1.5 text-pink-500 group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-wider">{lang === 'bn' ? 'EN' : 'BN'}</span>
            </button>

            <button 
              onClick={() => handleNav('contact')}
              className="hidden sm:block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full shadow-lg shadow-pink-200 transition-all transform hover:scale-105 active:scale-95 font-bold text-sm"
            >
              {t.btnSerial}
            </button>

            <button className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-white transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <button onClick={() => handleNav('home')} className={`text-pink-600 font-bold text-left ${lang === 'en' ? 'text-xl' : 'text-2xl'}`}>{t.doctorName}</button>
            <button className="p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNav(item.id)} 
                className={`text-3xl font-bold py-2 border-b border-slate-50 flex justify-between items-center text-left ${currentView === item.id ? 'text-pink-600' : 'text-slate-800'}`}
              >
                {item.name}
                <ChevronRight size={24} className="text-pink-500" />
              </button>
            ))}
          </div>
          <div className="mt-auto pb-10 space-y-6">
            <div className="flex justify-center">
              <button onClick={() => { setLang(lang === 'bn' ? 'en' : 'bn'); setIsOpen(false); }} className="flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-2xl font-bold text-slate-700">
                <Globe size={20} className="text-pink-500" />
                <span>{lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = ({ lang, setView }: { lang: 'bn' | 'en', setView: (v: View) => void }) => {
  const t = translations[lang];
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-medical-pastel animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-6 animate-pulse">
            <Heart size={16} className="mr-2 fill-pink-500" /> {t.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            {t.doctorName}
          </h1>
          <h2 className="text-xl md:text-2xl text-pink-600 font-semibold mb-6">
            {t.designation}
          </h2>

          {/* Mobile Image - Shown only on mobile, hidden on desktop */}
          <div className="lg:hidden mb-12 relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-tr from-pink-200 to-indigo-100 rounded-[60px] overflow-hidden rotate-2 shadow-2xl border-[10px] border-white">
               <img src="https://lh3.googleusercontent.com/d/1i6DS1UX5sgBDa0YpKLnwQwNfG9eeA_Ze" alt={t.doctorName} className="w-full h-full object-cover -rotate-2" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center space-x-3">
               <div className="bg-pink-100 p-2 rounded-xl text-pink-600"><Users size={20} /></div>
               <div>
                 <p className="text-xl font-black text-slate-900 leading-none">10k+</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{t.statPatients}</p>
               </div>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed italic whitespace-pre-line">
            {t.heroQuote}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button 
              onClick={() => { setView('contact'); window.scrollTo(0, 0); }}
              className="flex items-center justify-center bg-pink-500 text-white px-10 py-4 rounded-2xl shadow-2xl shadow-pink-200 hover:bg-pink-600 transition-all font-bold text-lg hover:-translate-y-1"
            >
              <Calendar size={22} className="mr-2" /> {t.btnSerial}
            </button>
            <a href="tel:01893245288" className="flex items-center justify-center bg-white border-2 border-slate-100 text-slate-700 px-10 py-4 rounded-2xl hover:border-pink-200 transition-all font-bold text-lg hover:-translate-y-1">
              <Phone size={22} className="mr-2" /> {lang === 'bn' ? 'কল করুন' : 'Call Now'}
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="w-64 h-64 md:w-[480px] md:h-[480px] mx-auto bg-gradient-to-tr from-pink-200 to-indigo-100 rounded-[80px] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl border-[12px] border-white">
             <img src="https://lh3.googleusercontent.com/d/1i6DS1UX5sgBDa0YpKLnwQwNfG9eeA_Ze" alt={t.doctorName} className="w-full h-full object-cover -rotate-2 hover:rotate-0 transition-all duration-700" />
          </div>
          <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 animate-bounce duration-[3000ms]">
             <div className="flex items-center space-x-4">
               <div className="bg-pink-100 p-3 rounded-2xl text-pink-600"><Users size={28} /></div>
               <div>
                 <p className="text-2xl font-black text-slate-900 leading-none">10k+</p>
                 <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-tighter">{t.statPatients}</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = ({ lang }: { lang: 'bn' | 'en' }) => {
  const t = translations[lang];
  const feats = [
    { title: t.feat1Title, desc: t.feat1Desc, icon: <Stethoscope />, color: 'bg-pink-50 text-pink-600' },
    { title: t.feat2Title, desc: t.feat2Desc, icon: <Award />, color: 'bg-indigo-50 text-indigo-600' },
    { title: t.feat3Title, desc: t.feat3Desc, icon: <Heart />, color: 'bg-rose-50 text-rose-600' },
  ];
  return (
    <section className="py-12 -mt-16 relative z-10 animate-in slide-in-from-bottom-10 duration-1000">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feats.map((f, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] card-shadow border border-slate-50 flex flex-col items-center text-center hover:translate-y-[-10px] transition-all duration-300">
              <div className={`${f.color} p-5 rounded-3xl mb-6 shadow-sm`}>{f.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutView = ({ lang }: { lang: 'bn' | 'en' }) => {
  const t = translations[lang];
  return (
    <section className="py-32 bg-white min-h-[70vh] animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{t.aboutTitle}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t.aboutPara1}</p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t.aboutPara2}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t.aboutPara3}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-5 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="bg-pink-100 p-2 rounded-lg text-pink-600"><BookOpen size={20} /></div>
                <span className="font-bold text-slate-700">{t.role}</span>
              </div>
              <div className="flex items-center space-x-4 p-5 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Stethoscope size={20} /></div>
                <span className="font-bold text-slate-700">{lang === 'bn' ? 'ল্যাপারোস্কোপিক সার্জন' : 'Laparoscopic Surgeon'}</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative p-4 max-w-md w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-[50px] blur-xl opacity-20 animate-pulse"></div>
              <img src="https://lh3.googleusercontent.com/d/1gKla6msXcqiYFjEABIvK0S2ZpCVKvHmR" alt="Dr. Nargis Sultana Sumi" className="relative rounded-[45px] shadow-2xl border-[10px] border-white w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesView = ({ lang, setView }: { lang: 'bn' | 'en', setView: (v: View) => void }) => {
  const t = translations[lang];
  const serviceList = [
    { name: t.service1, desc: t.service1D },
    { name: t.service2, desc: t.service2D },
    { name: t.service3, desc: t.service3D },
    { name: lang === 'bn' ? 'PCOS ও হরমোন সমস্যা' : 'PCOS & Hormonal Care', desc: lang === 'bn' ? 'হরমোনের ভারসাম্যহীনতা প্রতিকার।' : 'Treatment for hormonal imbalances.' },
    { name: lang === 'bn' ? 'মাসিকজনিত সমস্যা' : 'Menstrual Disorders', desc: lang === 'bn' ? 'অনিয়মিত মাসিকের দীর্ঘমেয়াদী চিকিৎসা।' : 'Long-term care for menstrual irregularities.' },
    { name: lang === 'bn' ? 'ল্যাপারোস্কোপিক সার্জারি' : 'Laparoscopic Surgery', desc: lang === 'bn' ? 'অত্যাধুনিক প্রযুক্তিতে রক্তপাতহীন অপারেশন।' : 'Minimally invasive keyhole surgery.' },
  ];
  return (
    <section className="py-32 bg-slate-50 min-h-[70vh] animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t.serviceTitle}</h2>
          <p className="text-lg text-slate-500 font-medium">{t.serviceDesc}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((s, i) => (
            <div key={i} className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 transition-all hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 group text-left">
              <div className="bg-pink-50 w-20 h-20 rounded-[28px] flex items-center justify-center text-pink-500 mb-8 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <Stethoscope size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-600 transition-colors">{s.name}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">{s.desc}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => { setView('contact'); window.scrollTo(0, 0); }}
                  className="flex-1 flex items-center justify-center bg-pink-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-pink-600 transition-all shadow-md shadow-pink-100"
                >
                  {t.serviceConsultLink}
                </button>
                <button 
                  onClick={() => { setView('blog'); window.scrollTo(0, 0); }}
                  className="flex-1 flex items-center justify-center bg-white border-2 border-slate-100 text-slate-600 px-4 py-2.5 rounded-xl text-sm font-bold hover:border-pink-200 hover:text-pink-600 transition-all"
                >
                  {t.serviceBlogLink}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceView = ({ lang }: { lang: 'bn' | 'en' }) => {
  const t = translations[lang];
  const galleryImages = [
    "https://lh3.googleusercontent.com/d/1uOhC7RjJGReBA8G1w2jBJam912JuLEuP",
    "https://lh3.googleusercontent.com/d/1BGLO3qsBKQ3F0L9vq44ikUix1JEq1_Am",
    "https://lh3.googleusercontent.com/d/1quW8gBfCh1tpjKgAJil-UHPoD9lhJYue"
  ];

  return (
    <section className="py-32 bg-white min-h-[70vh] animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.navExperience}</h2>
            <p className="text-slate-500 font-medium">{lang === 'bn' ? 'দীর্ঘ পথচলায় অসংখ্য রোগীর আস্থার প্রতীক' : 'A symbol of trust across many years of service'}</p>
          </div>
          <div className="space-y-12 relative mb-24">
            <div className="absolute left-[30px] md:left-[115px] top-6 bottom-6 w-0.5 bg-pink-100 hidden sm:block"></div>
            {[
              { year: lang === 'bn' ? 'বর্তমান' : 'Present', title: translations[lang].role, org: translations[lang].workplace },
              { year: lang === 'bn' ? '২৫+ বছর' : '25+ Years', title: lang === 'bn' ? 'বিশেষজ্ঞ চিকিৎসক' : 'Specialist Consultant', org: lang === 'bn' ? 'দীর্ঘ ক্লিনিকাল অভিজ্ঞতা' : 'Extensive clinical experience' },
              { year: lang === 'bn' ? 'বিশেষজ্ঞ' : 'Expert', title: lang === 'bn' ? 'ল্যাপারোস্কোপিক সার্জন' : 'Laparoscopic Surgeon', org: lang === 'bn' ? 'উন্নত প্রশিক্ষণ প্রাপ্ত' : 'Advanced fellowship trained' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 sm:gap-12 relative z-10 group">
                 <div className="bg-white border-4 border-pink-50 text-pink-600 px-6 py-3 rounded-2xl font-black h-fit min-w-[180px] text-center shadow-sm group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all uppercase tracking-tighter">
                   {item.year}
                 </div>
                 <div className="flex-1 bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                   <h3 className="text-2xl font-bold mb-2 text-slate-800">{item.title}</h3>
                   <p className="text-slate-600 text-lg font-medium">{item.org}</p>
                 </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery Section */}
          <div className="mt-20">
            <div className="flex items-center space-x-4 mb-12 justify-center">
              <div className="h-1 w-12 bg-pink-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.galleryTitle}</h2>
              <div className="h-1 w-12 bg-pink-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, i) => (
                <div key={i} className="group relative overflow-hidden rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/5] bg-slate-100">
                  <img 
                    src={src} 
                    alt={`Gallery ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogView = ({ lang }: { lang: 'bn' | 'en' }) => {
  const t = translations[lang];
  const journals = [
    { title: lang === 'bn' ? 'জার্নাল ১' : 'Journal 1', url: 'https://drive.google.com/file/d/1I3M26o_iyDW3MeoEPtbwq7xqP_D_ycJQ/view?usp=sharing' },
    { title: lang === 'bn' ? 'জার্নাল ২' : 'Journal 2', url: 'https://drive.google.com/file/d/1psO986Ifw-MAdOUjrDRHhfhBI5Ebbxn2/view?usp=sharing' },
  ];

  const [videoIndex, setVideoIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const pageSize = isMobile ? 6 : 9;
  const totalPages = Math.ceil(BLOG_POSTS.length / pageSize);
  const paginatedPosts = BLOG_POSTS.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const blogSection = document.getElementById('blog-posts-grid');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPaginationRange = () => {
    const delta = isMobile ? 1 : 2;
    const range = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  const visibleVideos = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(YOUTUBE_VIDEOS[(videoIndex + i) % YOUTUBE_VIDEOS.length]);
    }
    return result;
  };

  return (
    <section className="py-32 bg-white min-h-[70vh] animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        {/* Journals Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-1 w-12 bg-pink-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.journals}</h2>
          </div>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl">{t.journalDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {journals.map((j, i) => (
              <a 
                key={i} 
                href={j.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="bg-pink-100 p-4 rounded-2xl text-pink-600 mr-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <BookOpen size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{j.title}</h3>
                  <p className="text-pink-500 font-bold text-sm flex items-center">
                    {lang === 'bn' ? 'পিডিএফ দেখুন' : 'View PDF'} <ChevronRight size={16} className="ml-1" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Video Slider Section */}
        <div 
          className="mb-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(true)}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-pink-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold">{lang === 'bn' ? 'ভিডিও পরামর্শ' : 'Video Advice'}</h2>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={(e) => { e.stopPropagation(); setVideoIndex((prev) => (prev - 1 + YOUTUBE_VIDEOS.length) % YOUTUBE_VIDEOS.length); setIsPaused(true); }}
                className="p-3 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length); setIsPaused(true); }}
                className="p-3 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleVideos().map((id, idx) => (
              <div key={`${id}-${idx}`} className="group relative bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden aspect-video shadow-lg hover:shadow-2xl transition-all animate-in fade-in slide-in-from-right-4 duration-500">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            {YOUTUBE_VIDEOS.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setVideoIndex(idx); setIsPaused(true); }}
                className={`h-2 rounded-full transition-all ${videoIndex === idx ? 'w-8 bg-pink-500' : 'w-2 bg-slate-200 hover:bg-pink-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left gap-6" id="blog-posts-grid">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.navBlog}</h2>
            <p className="text-slate-500 text-lg">{lang === 'bn' ? 'আপনার সুস্থতায় নিয়মিত পড়ুন আমাদের বিশেষজ্ঞ পরামর্শ।' : 'Read expert medical advice for your well-being.'}</p>
          </div>
          <a 
            href="https://www.youtube.com/@dr.nargissumi2735/videos" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all flex items-center"
          >
            {lang === 'bn' ? 'আরও দেখুন' : 'View More'} <ChevronRight className="ml-2" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {paginatedPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer bg-white rounded-2xl md:rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
              <img src={post.img} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
              <div className="p-4 md:p-8">
                <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-pink-600 transition-colors line-clamp-2">{post.title}</h3>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-black text-pink-500 flex items-center text-xs md:text-base"
                >
                  {lang === 'bn' ? 'বিস্তারিত' : 'Read More'} <ChevronRight size={16} className="md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-1 md:space-x-2">
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 md:p-3 rounded-xl border transition-all ${currentPage === 1 ? 'text-slate-300 border-slate-100 cursor-not-allowed' : 'text-slate-600 border-slate-200 hover:border-pink-500 hover:text-pink-500'}`}
            >
              <ChevronLeft size={isMobile ? 18 : 20} />
            </button>
            
            {getPaginationRange().map((page, idx) => (
              page === '...' ? (
                <span key={`dots-${idx}`} className="px-2 md:px-4 text-slate-400 font-bold">...</span>
              ) : (
                <button 
                  key={page}
                  onClick={() => handlePageChange(page as number)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl font-bold transition-all text-sm md:text-base ${currentPage === page ? 'bg-pink-500 text-white shadow-lg shadow-pink-200' : 'bg-white text-slate-600 border border-slate-200 hover:border-pink-500 hover:text-pink-500'}`}
                >
                  {page}
                </button>
              )
            ))}

            <button 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 md:p-3 rounded-xl border transition-all ${currentPage === totalPages ? 'text-slate-300 border-slate-100 cursor-not-allowed' : 'text-slate-600 border-slate-200 hover:border-pink-500 hover:text-pink-500'}`}
            >
              <ChevronRight size={isMobile ? 18 : 20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ContactView = ({ lang }: { lang: 'bn' | 'en' }) => {
  const t = translations[lang];
  const contacts = ["01893-245288", "09666787803"];
  const mapUrl = "https://maps.app.goo.gl/bg1i2jVrNLDveFrH9";

  return (
    <section className="py-20 md:py-32 bg-medical-pastel min-h-[70vh] animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border-[6px] md:border-[10px] border-white">
          {/* Left Side: Direct Contact */}
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 text-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs md:text-sm font-bold mb-6 w-fit mx-auto lg:mx-0">{t.contactSubtitle}</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 md:mb-12 leading-tight text-center lg:text-left">{t.contactTitle}</h2>
            
            <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[30px] md:rounded-[40px] hover:bg-white/10 transition-all duration-500 group transform hover:-translate-y-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 text-center sm:text-left">
                <div className="bg-pink-500 p-4 md:p-5 rounded-2xl md:rounded-3xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-pink-500/20">
                  <Phone size={28} className="md:w-8 md:h-8" />
                </div>
                <h4 className="font-black text-xl md:text-2xl uppercase tracking-tighter text-pink-400 pt-1">{t.contactPhone}</h4>
              </div>
              <div className="space-y-4 text-center sm:text-left">
                {contacts.map(c => (
                  <a 
                    key={c} 
                    href={`tel:${c.replace(/-/g, '')}`} 
                    className="block text-2xl sm:text-4xl md:text-5xl font-black text-white hover:text-pink-400 transition-colors tracking-tighter break-words"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Chamber Info & Map Button */}
          <div className="lg:w-1/2 bg-white p-8 md:p-16 lg:p-20 flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="group p-6 md:p-8 bg-slate-50 rounded-[30px] md:rounded-[40px] border-2 border-transparent hover:border-pink-100 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="bg-pink-100 p-4 rounded-2xl text-pink-600 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-500 shrink-0">
                  <MapPin size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-black text-lg md:text-xl mb-2 text-slate-900 uppercase tracking-tighter">{t.contactAddress}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-medium">
                    {t.address.split('|').map((part, index) => (
                      <span key={index} className={`block ${index === 0 ? 'text-emerald-800 font-bold' : ''}`}>
                        {part.trim()}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 md:p-8 bg-slate-50 rounded-[30px] md:rounded-[40px] border-2 border-transparent hover:border-pink-100 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="bg-indigo-100 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-500 shrink-0">
                  <Clock size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-black text-lg md:text-xl mb-2 text-slate-900 uppercase tracking-tighter">{t.contactTime}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-medium">
                    {t.visitingTime.split('|').map((part, index) => (
                      <span key={index} className="block">
                        {part.trim()}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-slate-900 text-white px-8 py-5 md:px-10 md:py-6 rounded-[25px] md:rounded-[30px] font-black shadow-2xl hover:bg-pink-600 transition-all w-full text-lg md:text-xl group"
              >
                <MapPin size={22} className="mr-3 group-hover:animate-bounce" /> {lang === 'bn' ? 'গুগল ম্যাপে দেখুন' : 'View on Google Maps'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang, setView }: { lang: 'bn' | 'en', setView: (v: View) => void }) => {
  const t = translations[lang];
  
  const handleNav = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <button onClick={() => handleNav('home')} className="text-3xl font-black text-pink-500 mb-8 hover:text-white transition-colors text-left">{t.doctorName}</button>
            <p className="text-slate-400 max-w-md leading-relaxed mb-10 text-lg mx-auto md:mx-0">{t.footerText}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/CareForInfertileCouple" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl text-pink-500 hover:bg-pink-500 hover:text-white transition-all"><Facebook size={24} /></a>
              <a href="https://www.youtube.com/@dr.nargissumi2735" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl text-pink-500 hover:bg-pink-500 hover:text-white transition-all"><Youtube size={24} /></a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-black text-xl mb-8 uppercase tracking-widest">{lang === 'bn' ? 'দ্রুত লিঙ্ক' : 'Quick Links'}</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><button onClick={() => handleNav('about')} className="hover:text-pink-500 transition-colors text-center md:text-left w-full md:w-auto">{t.navAbout}</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-pink-500 transition-colors text-center md:text-left w-full md:w-auto">{t.navServices}</button></li>
              <li><button onClick={() => handleNav('experience')} className="hover:text-pink-500 transition-colors text-center md:text-left w-full md:w-auto">{t.navExperience}</button></li>
              <li><button onClick={() => handleNav('blog')} className="hover:text-pink-500 transition-colors text-center md:text-left w-full md:w-auto">{t.navBlog}</button></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-black text-xl mb-8 uppercase tracking-widest">{lang === 'bn' ? 'জরুরি' : 'Support'}</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><button onClick={() => handleNav('contact')} className="hover:text-pink-500 transition-colors text-center md:text-left w-full md:w-auto">{t.btnSerial}</button></li>
              <li><a href="tel:01893245288" className="hover:text-pink-500 transition-colors block text-center md:text-left">{lang === 'bn' ? 'সরাসরি কল' : 'Call Directly'}</a></li>
              <li><a href="https://maps.app.goo.gl/bg1i2jVrNLDveFrH9" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors block text-center md:text-left">{lang === 'bn' ? 'ম্যাপ লোকেশন' : 'Map Location'}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 text-center">
          <div className="p-6 bg-red-500/10 text-red-400 rounded-3xl inline-block max-w-4xl border border-red-500/20 mb-8 font-bold text-sm">
            {t.emergencyWarning}
          </div>
          <p className="text-slate-500 font-bold text-sm">
            © 2026 {t.doctorName}. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All Rights Reserved.'} 
            <br />
            Built by Hashtore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [currentView, setCurrentView] = useState<View>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to render current view
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="space-y-0">
            <Hero lang={lang} setView={setCurrentView} />
            <Features lang={lang} />
            
            {/* About Overview */}
            <div className="bg-white py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{translations[lang].aboutTitle}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed line-clamp-3">{translations[lang].aboutPara1}</p>
                    <button 
                      onClick={() => { setCurrentView('about'); window.scrollTo(0, 0); }}
                      className="bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600 transition-all flex items-center"
                    >
                      {translations[lang].viewMore} <ChevronRight className="ml-2" />
                    </button>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <img src="https://lh3.googleusercontent.com/d/1gKla6msXcqiYFjEABIvK0S2ZpCVKvHmR" alt="About" className="rounded-3xl shadow-xl w-full max-w-sm aspect-[3/4] object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-slate-50 py-20">
              <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">{translations[lang].serviceTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    { name: translations[lang].service1, desc: translations[lang].service1D },
                    { name: translations[lang].service2, desc: translations[lang].service2D },
                    { name: translations[lang].service3, desc: translations[lang].service3D },
                  ].map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-left">
                      <div className="bg-pink-50 w-12 h-12 rounded-xl flex items-center justify-center text-pink-500 mb-6">
                        <Stethoscope size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                      <p className="text-slate-500 mb-4 line-clamp-2">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => { setCurrentView('services'); window.scrollTo(0, 0); }}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all"
                >
                  {translations[lang].viewAllServices}
                </button>
              </div>
            </div>

            {/* Experience Overview */}
            <div className="bg-white py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-12">{translations[lang].navExperience}</h2>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10 text-left">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><Award size={24} /></div>
                      <div>
                        <h3 className="text-xl font-bold">{translations[lang].role}</h3>
                        <p className="text-slate-500">{translations[lang].workplace}</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setCurrentView('experience'); window.scrollTo(0, 0); }}
                    className="text-pink-600 font-bold hover:underline flex items-center mx-auto"
                  >
                    {translations[lang].viewAllExperience} <ChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Overview */}
            <div className="bg-slate-50 py-20">
              <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{translations[lang].navBlog}</h2>
                
                {/* YouTube Videos on Homepage */}
                <div className="mb-16">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {YOUTUBE_VIDEOS.slice(0, 4).map((id, idx) => (
                      <div key={idx} className="bg-slate-900 rounded-2xl overflow-hidden aspect-video shadow-lg">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/${id}`}
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
                  {BLOG_POSTS.slice(0, 4).map((post, i) => (
                    <div key={i} className="bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-sm border border-slate-100">
                      <img src={post.img} className="w-full aspect-square object-cover" alt={post.title} />
                      <div className="p-4 md:p-6 flex flex-col justify-center">
                        <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-4 line-clamp-2">{post.title}</h3>
                        <a 
                          href={post.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-500 font-bold flex items-center text-xs md:text-base"
                        >
                          {translations[lang].viewDetails} <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <button 
                    onClick={() => { setCurrentView('blog'); window.scrollTo(0, 0); }}
                    className="inline-block bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all"
                  >
                    {translations[lang].viewMore}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Overview */}
            <div className="bg-white py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">{translations[lang].contactOverview}</h2>
                  <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
                    <span className="text-emerald-400 font-bold">{translations[lang].address.split(',')[0]}</span>,
                    {translations[lang].address.split(',').slice(1).join(',')}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => { setCurrentView('contact'); window.scrollTo(0, 0); }}
                      className="bg-pink-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all"
                    >
                      {translations[lang].btnSerial}
                    </button>
                    <a href="tel:01893245288" className="bg-white/10 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10">
                      {lang === 'bn' ? 'সরাসরি কল করুন' : 'Call Now'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'about':
        return <AboutView lang={lang} />;
      case 'services':
        return <ServicesView lang={lang} setView={setCurrentView} />;
      case 'experience':
        return <ExperienceView lang={lang} />;
      case 'blog':
        return <BlogView lang={lang} />;
      case 'contact':
        return <ContactView lang={lang} />;
      default:
        return <Hero lang={lang} setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-pink-100 selection:text-pink-600 flex flex-col">
      <Navbar lang={lang} setLang={setLang} currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer lang={lang} setView={setCurrentView} />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
         {showScrollTop && (
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
             className="bg-white text-pink-600 p-4 rounded-full shadow-2xl border border-slate-100 hover:bg-pink-600 hover:text-white transition-all"
             aria-label="Back to top"
           >
             <ArrowUp size={24} />
           </button>
         )}
         <a href="tel:01893245288" className="bg-pink-600 text-white p-5 rounded-full shadow-2xl hover:bg-slate-900 transition-all transform hover:scale-110 md:hidden">
           <Phone size={28} />
         </a>
      </div>
    </div>
  );
}

