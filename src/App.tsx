import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowUp,
  Globe,
  CheckCircle2,
  Facebook,
  Microscope,
  Activity,
  FileText,
  ArrowRight,
  ArrowLeft,
  Search,
  PlayCircle,
  ChevronDown,
  HelpCircle,
  Download,
  ExternalLink
} from 'lucide-react';
import ChamberMap from './components/ChamberMap';
import breastCareSvg from '../public_html/assets/svg/breast-care.svg';
import breastEvalSvg from '../public_html/assets/svg/breast-eval.svg';
import breastAbscessSvg from '../public_html/assets/svg/breast-abscess.svg';
import pilesCareSvg from '../public_html/assets/svg/piles-care.svg';
import colorectalCareSvg from '../public_html/assets/svg/colorectal-care.svg';
import laparoscopicSurgerySvg from '../public_html/assets/svg/laparoscopic-surgery.svg';
import consultationSvg from '../public_html/assets/svg/consultation.svg';

type View = 'home' | 'about' | 'services' | 'blogs' | 'journals' | 'gallery' | 'contact';
type Lang = 'en' | 'bn';

const T = {
  en: {
    doctorName: 'Professor Dr. Sadia Armin Khan',
    shortName: 'Prof. Dr. Sadia Armin Khan',
    designation: 'Professor (CC), Department of Surgery',
    qualifications: 'MBBS (DMC) · FCPS (Surgery) · MRCS (Edin) · FMAS (India)',
    hospital: 'Holy Family Red Crescent Medical College Hospital',
    chamberName: 'Popular Diagnostic Centre Ltd.',
    chamberAddr: 'Building-1, Room No-503, House-16, Road-2, Dhanmondi, Dhaka, Bangladesh.',
    visitingTime: 'Saturday to Thursday: 6:00 PM – 9:00 PM | Friday & Govt. Holidays: Closed',
    phone: '+880 1779-224452',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      blogs: 'Blogs',
      journals: 'Journals',
      gallery: 'Gallery',
      contact: 'Contact',
      appointment: 'Appointment'
    },
    heroKicker: 'Surgical Consultation & Minimally Invasive Care',
    heroQuote: 'Evidence-based surgical care with a calm, patient-first approach in Breast Surgery, Piles Treatment, and Laparoscopic Surgery.',
    ctaAppointment: 'Book Appointment',
    ctaServices: 'Explore Services',
    specialtiesKicker: 'Surgical Expertise',
    specialtiesTitle: 'Specialized Surgical Care',
    specialtiesSub: 'Select a clinical specialty below to understand our diagnostic and surgical approach.',
    processKicker: 'Patient Journey',
    processTitle: 'How Your Consultation Works',
    aboutTitle: 'About Professor Dr. Sadia Armin Khan',
    aboutP1: 'Professor Dr. Sadia Armin Khan is a senior female surgeon and medical professor in Bangladesh, currently serving as Professor (CC) in the Department of Surgery at Holy Family Red Crescent Medical College Hospital.',
    aboutP2: 'With verified qualifications including MBBS (DMC), FCPS (Surgery), MRCS (Edin), and FMAS (India), she combines surgical precision with compassionate, patient-centered care.',
    expTitle: 'Academic & Clinical Experience',
    expSub: 'Verified medical teaching and specialist surgical roles.',
    servicesTitle: 'Specialized Surgical Services',
    servicesSub: 'Comprehensive clinical evaluation and modern surgical management.',
    blogsTitle: 'Health Awareness & Blogs',
    journalsTitle: 'Academic Journals & Publications',
    journalsNotice: 'Peer-reviewed surgical research publications and clinical studies by Professor Dr. Sadia Armin Khan.',
    galleryTitle: 'Gallery & Professional Activities',
    contactTitle: 'Chamber & Appointment Request',
    contactSub: 'Chamber Information',
    formTitle: 'Send Appointment Request via WhatsApp',
    formName: 'Patient Name *',
    formPhone: 'Mobile Number (Bangladesh) *',
    formDate: 'Preferred Date *',
    formDept: 'Consultation Specialty',
    formMsg: 'Brief Note (Optional)',
    formConsent: 'I consent to my submitted information being used solely for appointment coordination. *',
    formSubmit: 'Send Request via WhatsApp',
    disclaimer: 'Medical information on this website is for general awareness only. For medical emergencies, please contact your nearest hospital emergency department.',
    rights: 'All rights reserved.'
  },
  bn: {
    doctorName: 'অধ্যাপক ডা. সাদিয়া আরমিন খান',
    shortName: 'অধ্যাপক ডা. সাদিয়া আরমিন খান',
    designation: 'অধ্যাপক (সিসি), সার্জারি বিভাগ',
    qualifications: 'MBBS (DMC) · FCPS (Surgery) · MRCS (Edin) · FMAS (India)',
    hospital: 'হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল',
    chamberName: 'পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড',
    chamberAddr: 'ভবন-1, রুম নং-503, বাড়ি-16, রোড-2, ধানমন্ডি, ঢাকা।',
    visitingTime: 'শনিবার থেকে বৃহস্পতিবার: সন্ধ্যা 6:00 PM – রাত 9:00 PM | শুক্রবার ও সরকারি ছুটির দিন বন্ধ',
    phone: '+880 1779-224452',
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      services: 'সেবাসমূহ',
      blogs: 'ব্লগ',
      journals: 'জার্নাল',
      gallery: 'গ্যালারি',
      contact: 'যোগাযোগ',
      appointment: 'অ্যাপয়েন্টমেন্ট'
    },
    heroKicker: 'সার্জিক্যাল পরামর্শ ও আধুনিক চিকিৎসাসেবা',
    heroQuote: 'ব্রেস্ট সার্জারি, পাইলস চিকিৎসা এবং ল্যাপারোস্কোপিক সার্জারিতে আধুনিক, নিরাপদ ও রোগী-কেন্দ্রিক বিশেষজ্ঞ সার্জিক্যাল সেবা।',
    ctaAppointment: 'অ্যাপয়েন্টমেন্ট নিন',
    ctaServices: 'সেবাসমূহ দেখুন',
    specialtiesKicker: 'সার্জিক্যাল বিশেষজ্ঞতা',
    specialtiesTitle: 'বিশেষায়িত সার্জারি সেবাসমূহ',
    specialtiesSub: 'বিস্তারিত জানতে নিচের যেকোনো একটি চিকিৎসা বিভাগ নির্বাচন করুন।',
    processKicker: 'চিকিৎসা প্রক্রিয়া',
    processTitle: 'পরামর্শ ও চিকিৎসা ধাপসমূহ',
    aboutTitle: 'অধ্যাপক ডা. সাদিয়া আরমিন খান সম্পর্কে',
    aboutP1: 'অধ্যাপক ডা. সাদিয়া আরমিন খান বাংলাদেশের একজন অভিজ্ঞ নারী সার্জন এবং মেডিকেল অধ্যাপক। তিনি বর্তমানে হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতালের সার্জারি বিভাগে অধ্যাপক (সিসি) হিসেবে দায়িত্ব পালন করছেন।',
    aboutP2: 'MBBS (DMC), FCPS (Surgery), MRCS (Edin) এবং FMAS (India) ডিগ্রিধারী এই বিশেষজ্ঞ সার্জন রোগীদের প্রতি আন্তরিকতা ও আধুনিক সার্জিক্যাল দক্ষতার সমন্বয়ে সেবা প্রদান করে থাকেন।',
    expTitle: 'অভিজ্ঞতা ও একাডেমিক পরিচিতি',
    expSub: 'যাচাইকৃত একাডেমিক ও ক্লিনিক্যাল সার্জিক্যাল পথচলা।',
    servicesTitle: 'বিশেষায়িত সার্জিক্যাল সেবাসমূহ',
    servicesSub: 'সঠিক রোগ নির্ণয় থেকে শুরু করে আধুনিক সার্জারি ও পরবর্তী যত্ন।',
    blogsTitle: 'স্বাস্থ্য সচেতনতা ও ব্লগ',
    journalsTitle: 'একাডেমিক জার্নাল ও প্রকাশনা',
    journalsNotice: 'অধ্যাপক ডা. সাদিয়া আরমিন খানের পিয়ার-রিভিউড সার্জিক্যাল গবেষণা প্রবন্ধ ও ক্লিনিক্যাল স্টাডিসমূহ।',
    galleryTitle: 'গ্যালারি ও পেশাগত কার্যক্রম',
    contactTitle: 'চেম্বার ও অ্যাপয়েন্টমেন্ট অনুরোধ',
    contactSub: 'চেম্বার তথ্য',
    formTitle: 'WhatsApp-এ অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান',
    formName: 'রোগীর নাম *',
    formPhone: 'মোবাইল নম্বর (বাংলাদেশ) *',
    formDate: 'পছন্দের তারিখ *',
    formDept: 'পরামর্শের বিভাগ',
    formMsg: 'সংক্ষিপ্ত বার্তা (ঐচ্ছিক)',
    formConsent: 'আমি সম্মতি দিচ্ছি যে আমার প্রদত্ত তথ্য শুধুমাত্র অ্যাপয়েন্টমেন্ট যোগাযোগের জন্য ব্যবহৃত হবে। *',
    formSubmit: 'WhatsApp-এ অনুরোধ পাঠান',
    disclaimer: 'চিকিৎসা সংক্রান্ত তথ্য শুধুমাত্র সাধারণ সচেতনতার জন্য। জরুরি চিকিৎসা সেবার জন্য অনুগ্রহ করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যোগাযোগ করুন।',
    rights: 'সর্বস্বত্ব সংরক্ষিত।'
  }
};

const SPECIALTIES = [
  {
    id: 'breast',
    num: '01',
    icon: breastCareSvg,
    en: 'Breast Surgery & Evaluation',
    bn: 'ব্রেস্ট সার্জারি ও ইভ্যালুয়েশন',
    deptValue: 'Breast Surgery',
    summaryEn: 'Comprehensive clinical evaluation, lump diagnosis, mastitis/abscess care, and targeted breast surgery.',
    summaryBn: 'স্তনের চাকা, ব্যথা, সংক্রমণ বা অ্যাবসেসের আধুনিক ক্লিনিক্যাল পরীক্ষা ও নিরাপদ সার্জিক্যাল চিকিৎসা।',
    pointsEn: [
      'Clinical evaluation of breast lumps & pain',
      'Breast infection & abscess drainage management',
      'Compassionate, female-surgeon-led private consultation'
    ],
    pointsBn: [
      'স্তনের চাকা ও ব্যথার সঠিক ক্লিনিক্যাল পরীক্ষা',
      'ব্রেস্ট ইনফেকশন ও অ্যাবসেসের নিরাপদ চিকিৎসা',
      'নারী সার্জনের তত্ত্বাবধানে যত্নশীল ও গোপনীয় পরামর্শ'
    ]
  },
  {
    id: 'piles',
    num: '02',
    icon: colorectalCareSvg,
    en: 'Piles & Colorectal Surgery',
    bn: 'পাইলস ও কলোরেক্টাল সার্জারি',
    deptValue: 'Piles & Colorectal Surgery',
    summaryEn: 'Patient-friendly, low-pain diagnostic and surgical options for piles (hemorrhoids), anal fissures, and fistulas.',
    summaryBn: 'অর্শ বা পাইলস, ফিশার, ফিস্টুলা ও কলোরেক্টাল সমস্যার আধুনিক ও কম ব্যথাদায়ক চিকিৎসা।',
    pointsEn: [
      'Modern management of hemorrhoids (piles)',
      'Anal fissure & fistula surgical care',
      'Dietary & preventive post-treatment guidance'
    ],
    pointsBn: [
      'পাইলস বা অর্শ রোগের আধুনিক চিকিৎসা পদ্ধতি',
      'ফিশার ও ফিস্টুলার বিশেষায়িত সার্জিক্যাল সেবা',
      'চিকিৎসা পরবর্তী খাদ্যাভ্যাস ও প্রতিরোধ পরামর্শ'
    ]
  },
  {
    id: 'laparoscopic',
    num: '03',
    icon: laparoscopicSurgerySvg,
    en: 'Laparoscopic Surgery',
    bn: 'ল্যাপারোস্কোপিক সার্জারি',
    deptValue: 'Laparoscopic Surgery',
    summaryEn: 'Minimally invasive keyhole surgical procedures designed to reduce post-operative discomfort and speed recovery.',
    summaryBn: 'ছোট ছিদ্রের মাধ্যমে আধুনিক মিনিম্যালি ইনভেসিভ সার্জারি, যা কম ব্যথা ও দ্রুত আরোগ্য লাভে সহায়ক।',
    pointsEn: [
      'Small-incision minimally invasive technique',
      'Reduced post-operative pain & minimal scarring',
      'Faster return to normal daily activities'
    ],
    pointsBn: [
      'ছোট ছিদ্রের মাধ্যমে আধুনিক সার্জারি পদ্ধতি',
      'অপারেশন পরবর্তী কম ব্যথা ও দ্রুত সুস্থতা',
      'অল্প সময়ে স্বাভাবিক জীবনযাত্রায় ফেরার সুবিধা'
    ]
  }
];

const ALL_SERVICES = [
  {
    id: 'breast-surgery',
    num: '01',
    cat: 'breast',
    icon: breastCareSvg,
    en: 'Breast Surgery',
    bn: 'ব্রেস্ট সার্জারি',
    dept: 'Breast Surgery',
    conditionsEn: 'Breast Lump · Fibroadenoma · Cyst',
    conditionsBn: 'স্তনের চাকা · ফাইব্রোএডেনোমা · সিস্ট',
    descEn: 'Modern, evidence-based surgical care for breast lumps, benign tumors, and breast conditions with utmost privacy.',
    descBn: 'স্তনের টিউমার, চাকা এবং অন্যান্য সার্জিক্যাল সমস্যার আধুনিক, নিরাপদ ও গোপনীয় চিকিৎসা।',
    symptomsEn: ['Painless or tender breast lump', 'Skin dimpling or nipple changes', 'Localized swelling in breast or underarm'],
    symptomsBn: ['স্তনে নতুন চাকা বা গুটি অনুভব করা', 'স্তনের আকার বা ত্বকে পরিবর্তন', 'বগলের নিচে ফোলা বা গুটি'],
    careEn: 'Targeted clinical exam, imaging review, and tissue-preserving excision when required.',
    careBn: 'নির্ভুল ক্লিনিক্যাল পরীক্ষা, আল্ট্রাসাউন্ড/ম্যামোগ্রাম পর্যালোচনা ও প্রয়োজন অনুযায়ী নিরাপদ সার্জারি।',
    whenEn: 'When you notice a persistent lump, structural change, or require specialist surgical advice.',
    whenBn: 'স্তনে কোনো নতুন চাকা বা পরিবর্তন অনুভব করলে।'
  },
  {
    id: 'breast-eval',
    num: '02',
    cat: 'breast',
    icon: breastEvalSvg,
    en: 'Breast Disease Evaluation',
    bn: 'ব্রেস্ট ডিজিজ ইভ্যালুয়েশন',
    dept: 'Breast Surgery',
    conditionsEn: 'Mastalgia · Nipple Discharge · Screening',
    conditionsBn: 'স্তনে ব্যথা · নিপল ডিসচার্জ · স্ক্রিনিং',
    descEn: 'Structured clinical assessment, ultrasound correlation, and diagnostic planning for breast pain or nipple changes.',
    descBn: 'স্তনের ব্যথা, চাকা বা অস্বাভাবিক পরিবর্তনের সঠিক ক্লিনিক্যাল পরীক্ষা ও রোগ নির্ণয়।',
    symptomsEn: ['Cyclical or persistent breast pain', 'Abnormal or bloody nipple discharge', 'Routine preventive breast screening'],
    symptomsBn: ['দীর্ঘস্থায়ী বা মাসিক-সংক্রান্ত স্তনে ব্যথা', 'নিপল দিয়ে অস্বাভাবিক তরল বা রক্ত পড়া', 'নিয়মিত স্তন স্বাস্থ্য পরীক্ষা'],
    careEn: 'Step-by-step triple assessment: clinical breast exam, targeted imaging, and biopsy guidance if needed.',
    careBn: 'ক্লিনিক্যাল পরীক্ষা, আল্ট্রাসাউন্ড/ম্যামোগ্রাম ও প্রয়োজন অনুযায়ী বায়োপসি নির্দেশনা।',
    whenEn: 'For persistent breast discomfort, unusual discharge, or routine specialist screening.',
    whenBn: 'দীর্ঘস্থায়ী স্তনে ব্যথা বা নিয়মিত স্বাস্থ্য পরীক্ষার জন্য।'
  },
  {
    id: 'breast-abscess',
    num: '03',
    cat: 'breast',
    icon: breastAbscessSvg,
    en: 'Breast Infection & Abscess',
    bn: 'ব্রেস্ট ইনফেকশন ও অ্যাবসেস',
    dept: 'Breast Surgery',
    conditionsEn: 'Mastitis · Breast Abscess · Aspiration',
    conditionsBn: 'ম্যাস্টাইটিস · অ্যাবসেস · ড্রেনেজ',
    descEn: 'Safe medical and minimally invasive drainage management for lactational or non-lactational mastitis and abscesses.',
    descBn: 'স্তনের সংক্রমণ ও ফোঁড়ার (অ্যাবসেস) নিরাপদ অ্যাসপিরেশন, ড্রেইনেজ ও সঠিক চিকিৎসা।',
    symptomsEn: ['Localized redness, warmth & throbbing pain', 'Fever or body chills', 'Firm, tender swelling with pus collection'],
    symptomsBn: ['স্তনে লালচে ভাব, গরম ও তীব্র ব্যথা', 'জ্বর বা শরীর কাঁপুনি', 'ফুলে যাওয়া বা পুঁজ জমার লক্ষণ'],
    careEn: 'Targeted antibiotic therapy, ultrasound-guided needle aspiration, or gentle surgical drainage.',
    careBn: 'সঠিক অ্যান্টিবায়োটিক চিকিৎসা, নিডল অ্যাসপিরেশন অথবা নিরাপদ সার্জিক্যাল ড্রেইনেজ।',
    whenEn: 'Seek prompt care if you experience redness, swelling, localized warmth, or fever.',
    whenBn: 'স্তনে লালচে ভাব, ফোলা, ব্যথা বা জ্বর অনুভব করলে।'
  },
  {
    id: 'piles',
    num: '04',
    cat: 'colorectal',
    icon: pilesCareSvg,
    en: 'Piles Treatment',
    bn: 'পাইলস চিকিৎসা',
    dept: 'Piles & Colorectal Surgery',
    conditionsEn: 'Hemorrhoids · Anal Fissure · Fistula',
    conditionsBn: 'পাইলস · এনাল ফিশার · ফিস্টুলা',
    descEn: 'Patient-friendly, low-pain diagnostic and modern surgical care for hemorrhoids (piles), anal fissures, and fistulas.',
    descBn: 'অর্শ বা পাইলস, ফিশার ও ফিস্টুলার আধুনিক, কম ব্যথাদায়ক ও গোপনীয় চিকিৎসাসেবা।',
    symptomsEn: ['Painless bleeding during bowel movements', 'Perianal swelling, itching, or discomfort', 'Pain during or after passing stool'],
    symptomsBn: ['পায়খানার সময় রক্ত যাওয়া', 'মলদ্বারে চুলকানি বা ফোলা ভাব', 'মলত্যাগের সময় বা পরে ব্যথা'],
    careEn: 'Dietary modification, medical management, and modern minimally invasive surgical options.',
    careBn: 'খাদ্যাভ্যাস নির্দেশনা, ওষুধ এবং প্রয়োজন অনুযায়ী আধুনিক ও কম ব্যথার সার্জারি।',
    whenEn: 'If you notice bleeding, swelling, or persistent pain during bowel movements.',
    whenBn: 'মলত্যাগের সময় রক্তপাত বা ব্যথা অনুভূত হলে।'
  },
  {
    id: 'colorectal',
    num: '05',
    cat: 'colorectal',
    icon: colorectalCareSvg,
    en: 'Colorectal Surgery',
    bn: 'কলোরেক্টাল সার্জারি',
    dept: 'Piles & Colorectal Surgery',
    conditionsEn: 'Colon · Rectum · Anorectal Care',
    conditionsBn: 'কোলন · রেকটাম · অ্যানোরেক্টাল কেয়ার',
    descEn: 'Specialized diagnostic and surgical evaluation for complex conditions involving the colon, rectum, and anal canal.',
    descBn: 'বৃহদন্ত্র ও পায়ুপথের জটিল সার্জিক্যাল সমস্যার বিশেষায়িত পরীক্ষা ও আধুনিক চিকিৎসা।',
    symptomsEn: ['Persistent change in bowel habits', 'Unexplained rectal bleeding', 'Chronic constipation or abdominal discomfort'],
    symptomsBn: ['মলত্যাগের অভ্যাসে দীর্ঘমেয়াদী পরিবর্তন', 'কারণহীন রক্তপাত', 'দীর্ঘমেয়াদী কোষ্ঠকাঠিন্য বা পেটে অস্বস্তি'],
    careEn: 'Comprehensive anorectal examination, diagnostic guidance, and tailored surgical planning.',
    careBn: 'সঠিক অ্যানোরেক্টাল পরীক্ষা, রোগ নির্ণয় এবং ব্যক্তিগতকৃত সার্জিক্যাল পরিকল্পনা।',
    whenEn: 'For persistent bowel habit changes, unexplained bleeding, or colorectal symptoms.',
    whenBn: 'দীর্ঘমেয়াদী কোষ্ঠকাঠিন্য বা রক্তপাত দেখা দিলে।'
  },
  {
    id: 'laparoscopic',
    num: '06',
    cat: 'laparoscopic',
    icon: laparoscopicSurgerySvg,
    en: 'Laparoscopic Surgery',
    bn: 'ল্যাপারোস্কোপিক সার্জারি',
    dept: 'Laparoscopic Surgery',
    conditionsEn: 'Gallstones · Appendicitis · Hernia',
    conditionsBn: 'পিত্তথলির পাথর · অ্যাপেন্ডিসাইটিস · হার্নিয়া',
    descEn: 'Minimally invasive keyhole surgery (FMAS trained) designed for smaller incisions, reduced pain, and quicker recovery.',
    descBn: 'পিত্তথলির পাথর, অ্যাপেন্ডিসাইটিস বা হার্নিয়ার ছোট ছিদ্রের মাধ্যমে আধুনিক ল্যাপারোস্কোপিক সার্জারি।',
    symptomsEn: ['Upper right abdominal pain after fatty meals', 'Nausea, vomiting, or radiating back pain', 'Abdominal wall bulge or groin hernia'],
    symptomsBn: ['তৈলাক্ত খাবারের পর পেটের ডান পাশে ব্যথা', 'বমি বমি ভাব বা পিঠের দিকে ব্যথা ছড়ানো', 'পেট বা কুঁচকিতে ফোলা (হার্নিয়া)'],
    careEn: 'Keyhole laparoscopic cholecystectomy, appendectomy, and hernia repair with early discharge.',
    careBn: 'ছোট ছিদ্রের মাধ্যমে ল্যাপারোস্কোপিক সার্জারি, কম ব্যথা ও দ্রুত সুস্থ হয়ে বাড়ি ফেরা।',
    whenEn: 'When minimally invasive keyhole surgical evaluation is advised.',
    whenBn: 'আধুনিক মিনিম্যালি ইনভেসিভ সার্জারির পরামর্শের জন্য।'
  }
];

const FACEBOOK_BLOG_POSTS = [
  {
    id: 'fb-1',
    img: 'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/906399115_122145584037360253_5221663369491665802_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s8BhjIiU0lIQ7kNvwEeBl7n&_nc_oc=AdplWj0XBsSGxGkA3Sibo7CSkLb6R3uf6yNrEE7BWp9Ld1-yiBFcd9zp4xeHDyBCD9Q&_nc_zt=23&_nc_ht=scontent.fdac11-1.fna&_nc_gid=gBg6V5pi_H_a4T2Wbo-FrA&_nc_ss=7b2a8&oh=00_AQRGJ72_8gBGttPuLHUPcjX73FWJe0dEVwSuhCm7gO7F8g&oe=6B037F4A',
    link: 'https://www.facebook.com/photo.php?fbid=122145584031360253&set=pb.61590807591353.-2207520000&type=3',
    fallbackIcon: breastCareSvg,
    cat: 'Facebook Health Post · Breast & Surgical Awareness',
    titleEn: 'Specialist Surgical Awareness & Consultation Update',
    titleBn: 'বিশেষজ্ঞ সার্জিক্যাল স্বাস্থ্য সচেতনতা ও পরামর্শ পোস্ট',
    descEn: 'Read the full awareness update directly on Professor Dr. Sadia Armin Khan’s official Facebook page.',
    descBn: 'অধ্যাপক ডা. সাদিয়া আরমিন খানের অফিসিয়াল ফেসবুক পেজে প্রকাশিত স্বাস্থ্য সচেতনতামূলক পোস্টটি দেখুন।'
  },
  {
    id: 'fb-2',
    img: 'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/912581986_122146611159360253_652159310539106556_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4Da5PMc9io8Q7kNvwE3vN0J&_nc_oc=Adq09HePsMlLLMZPZz0XtloaOT4oxHGCidP9yTrFPYPoIIXVpZYvGhjmClbfKFkhXos&_nc_zt=23&_nc_ht=scontent.fdac11-1.fna&_nc_gid=qbcJTgJZOWdnvoVshrk_OQ&_nc_ss=7b2a8&oh=00_AQSXn8QAsAKxorzqnAezNwBfj7MWwnlLdwjL4e_8LZtkpQ&oe=6B039854',
    link: 'https://www.facebook.com/photo/?fbid=122146611153360253&set=pb.61590807591353.-2207520000',
    fallbackIcon: laparoscopicSurgerySvg,
    cat: 'Facebook Health Post · Patient Education',
    titleEn: 'Patient Education & Early Diagnosis Guide',
    titleBn: 'রোগী সচেতনতা ও সময়মতো রোগ নির্ণয় গাইড',
    descEn: 'View the full educational visual and guidance published on our official Facebook page.',
    descBn: 'সময়মতো পরীক্ষা ও সচেতনতার গুরুত্ব নিয়ে প্রকাশিত অফিসিয়াল ফেসবুক পোস্টটি দেখুন।'
  }
];

function SafeMediaImage({
  src,
  alt,
  fallbackIcon,
  className
}: {
  src: string;
  alt: string;
  fallbackIcon: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#E7F5F6] to-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
        <img src={fallbackIcon} alt={alt} className="w-32 h-24 object-contain mb-2" />
        <span className="text-xs font-semibold text-[#087F8C]">{alt}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

type BlogSection = {
  headingBn: string;
  headingEn: string;
  bulletsBn?: string[];
  bulletsEn?: string[];
  numberedBn?: { num: string; title: string; desc: string }[];
  numberedEn?: { num: string; title: string; desc: string }[];
  paragraphsBn?: string[];
  paragraphsEn?: string[];
};

type BlogArticle = {
  id: number;
  num: string;
  slug: string;
  category: 'Breast Health' | 'Breast Cancer Awareness' | 'Piles & Colorectal Surgery' | 'Laparoscopic Surgery';
  dept: string;
  icon: string;
  titleBn: string;
  titleEn: string;
  introBn: string;
  introEn: string;
  sections: BlogSection[];
};

const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 1,
    num: '01',
    slug: 'breast-lump-causes-and-treatment',
    category: 'Breast Health',
    dept: 'Breast Surgery',
    icon: breastCareSvg,
    titleBn: 'ব্রেস্টে চাকা বা গুটি অনুভব করলে কী করবেন?',
    titleEn: 'What to Do If You Feel a Breast Lump?',
    introBn: 'ব্রেস্টে চাকা বা গুটি অনুভব করলে অনেক নারীই আতঙ্কিত হয়ে পড়েন। তবে মনে রাখতে হবে, ব্রেস্টে সব ধরনের চাকা বা গুটি ক্যান্সার নয়। সিস্ট, ফাইব্রোএডেনোমা বা ইনফেকশনের কারণেও এমন হতে পারে।',
    introEn: 'Many women feel anxious upon discovering a breast lump. However, not all breast lumps are cancer—benign conditions like cysts, fibroadenomas, or infections can also cause lumps.',
    sections: [
      {
        headingBn: 'যেসব লক্ষণ খেয়াল রাখবেন:',
        headingEn: 'Symptoms to Watch For:',
        bulletsBn: [
          'ব্রেস্টে নতুন কোনো চাকা বা গুটি অনুভব করা।',
          'ব্রেস্টের আকার বা আকৃতিতে পরিবর্তন।',
          'ত্বকে লালচে ভাব, টান পড়া বা গর্তের মতো পরিবর্তন।',
          'নিপল ভেতরের দিকে ঢুকে যাওয়া।',
          'নিপল দিয়ে অস্বাভাবিক তরল বা রক্ত বের হওয়া।',
          'বগলের নিচে গুটি অনুভব করা।'
        ],
        bulletsEn: [
          'Feeling a new lump or thickening in the breast.',
          'Changes in the size or shape of the breast.',
          'Skin redness, tightness, or dimpling.',
          'Nipple turning inward (retraction).',
          'Unusual fluid or bloody discharge from the nipple.',
          'Feeling a lump or swelling under the armpit.'
        ]
      },
      {
        headingBn: 'করণীয় কী?',
        headingEn: 'What Should You Do?',
        paragraphsBn: [
          'ব্রেস্টে নতুন কোনো পরিবর্তন দেখা দিলে নিজে নিজে রোগ নির্ণয় না করে চিকিৎসকের পরামর্শ নিন। প্রয়োজন অনুযায়ী Clinical Breast Examination, Ultrasound, Mammogram বা Biopsy করা হতে পারে।',
          'মনে রাখবেন, সময়মতো পরীক্ষা ও সঠিক রোগ নির্ণয় অত্যন্ত গুরুত্বপূর্ণ।'
        ],
        paragraphsEn: [
          'If you notice any new breast change, avoid self-diagnosis and consult a specialist. Depending on your evaluation, a Clinical Breast Examination, Ultrasound, Mammogram, or Biopsy may be recommended.',
          'Remember, timely examination and accurate diagnosis are essential.'
        ]
      }
    ]
  },
  {
    id: 2,
    num: '02',
    slug: 'breast-cancer-diagnosis-tests',
    category: 'Breast Cancer Awareness',
    dept: 'Breast Surgery',
    icon: consultationSvg,
    titleBn: 'ব্রেস্ট ক্যান্সার শনাক্ত করতে কী কী পরীক্ষা করা হয়?',
    titleEn: 'Diagnostic Tests Used to Detect Breast Cancer',
    introBn: 'ব্রেস্ট ক্যান্সার শনাক্ত করার জন্য রোগীর বয়স, উপসর্গ ও শারীরিক অবস্থা অনুযায়ী বিভিন্ন পরীক্ষা করা হয়। ব্রেস্টে অস্বাভাবিক চাকা, গুটি বা অন্য কোনো পরিবর্তন দেখা দিলে চিকিৎসকের পরামর্শ নেওয়া জরুরি।',
    introEn: 'Diagnostic tests for breast cancer are selected based on the patient’s age, symptoms, and clinical findings. Prompt consultation is vital if you notice any unusual lump or change.',
    sections: [
      {
        headingBn: 'প্রধান পরীক্ষাগুলো হলো:',
        headingEn: 'Primary Diagnostic Tests:',
        numberedBn: [
          { num: '1.', title: 'Clinical Breast Examination:', desc: 'চিকিৎসক ব্রেস্ট ও বগলের আশপাশ পরীক্ষা করে অস্বাভাবিক কোনো পরিবর্তন আছে কি না দেখেন।' },
          { num: '2.', title: 'Breast Ultrasound:', desc: 'ব্রেস্টের ভেতরে কোনো চাকা বা অস্বাভাবিকতা রয়েছে কি না তা মূল্যায়ন করা হয়।' },
          { num: '3.', title: 'Mammogram:', desc: 'বিশেষ ধরনের এক্স-রে পরীক্ষার মাধ্যমে ব্রেস্টের ভেতরের অস্বাভাবিক পরিবর্তন শনাক্ত করা যায়।' },
          { num: '4.', title: 'Breast MRI:', desc: 'নির্দিষ্ট কিছু ক্ষেত্রে ব্রেস্টের বিস্তারিত ছবি পাওয়ার জন্য MRI করা হয়।' },
          { num: '5.', title: 'Biopsy:', desc: 'সন্দেহজনক স্থান থেকে টিস্যুর নমুনা সংগ্রহ করে পরীক্ষা করা হয়। ক্যান্সার নিশ্চিত করার জন্য সাধারণত Biopsy প্রয়োজন হয়।' }
        ],
        numberedEn: [
          { num: '1.', title: 'Clinical Breast Examination:', desc: 'The doctor examines the breasts and underarms for any unusual lumps or changes.' },
          { num: '2.', title: 'Breast Ultrasound:', desc: 'Uses sound waves to evaluate whether a lump is solid or fluid-filled.' },
          { num: '3.', title: 'Mammogram:', desc: 'A specialized X-ray imaging test that detects abnormal changes inside breast tissue.' },
          { num: '4.', title: 'Breast MRI:', desc: 'Used in selected cases to obtain detailed cross-sectional breast images.' },
          { num: '5.', title: 'Biopsy:', desc: 'A small tissue sample is collected and tested; typically required to confirm a diagnosis.' }
        ]
      },
      {
        headingBn: 'গুরুত্বপূর্ণ পরামর্শ:',
        headingEn: 'Key Advice:',
        paragraphsBn: [
          'সব রোগীর জন্য সব পরীক্ষা প্রয়োজন হয় না। চিকিৎসক রোগীর অবস্থা অনুযায়ী প্রয়োজনীয় পরীক্ষা নির্ধারণ করেন।',
          'ব্রেস্টের অস্বাভাবিক পরিবর্তন অবহেলা করবেন না। সচেতন হোন, সময়মতো চিকিৎসকের পরামর্শ নিন।'
        ],
        paragraphsEn: [
          'Not every patient needs every test. Your surgeon determines the appropriate tests based on your clinical condition.',
          'Never ignore unusual changes in your breast. Stay aware and seek timely specialist advice.'
        ]
      }
    ]
  },
  {
    id: 3,
    num: '03',
    slug: 'breast-infection-and-abscess',
    category: 'Breast Health',
    dept: 'Breast Surgery',
    icon: breastAbscessSvg,
    titleBn: 'ব্রেস্ট ইনফেকশন ও ব্রেস্ট অ্যাবসেস কী? লক্ষণ ও করণীয়',
    titleEn: 'Breast Infection & Breast Abscess: Symptoms and Care',
    introBn: 'ব্রেস্টে ইনফেকশন হলে ব্যথা, লালচে ভাব, ফুলে যাওয়া এবং স্পর্শে অস্বস্তি দেখা দিতে পারে। কখনো কখনো ইনফেকশনের কারণে ব্রেস্টের ভেতরে পুঁজ জমে, যাকে Breast Abscess বলা হয়।',
    introEn: 'A breast infection can cause pain, redness, swelling, and tenderness. Sometimes an infection leads to a localized collection of pus inside the breast, known as a Breast Abscess.',
    sections: [
      {
        headingBn: 'ব্রেস্ট ইনফেকশনের লক্ষণ:',
        headingEn: 'Symptoms of Breast Infection:',
        bulletsBn: [
          'ব্রেস্টে ব্যথা ও ফুলে যাওয়া।',
          'আক্রান্ত স্থানে লালচে ভাব ও গরম অনুভূত হওয়া।',
          'জ্বর বা শরীর কাঁপুনি।',
          'ব্রেস্টে শক্ত ও ব্যথাযুক্ত গুটি।',
          'কখনো পুঁজ জমা বা নিপল দিয়ে অস্বাভাবিক তরল বের হওয়া।'
        ],
        bulletsEn: [
          'Breast pain and noticeable swelling.',
          'Redness and warmth over the affected area.',
          'Fever or chills.',
          'A firm, tender, painful lump in the breast.',
          'Possible pus collection or abnormal nipple discharge.'
        ]
      },
      {
        headingBn: 'করণীয় কী?',
        headingEn: 'Recommended Action:',
        paragraphsBn: [
          'এ ধরনের লক্ষণ দেখা দিলে চিকিৎসকের পরামর্শ নেওয়া জরুরি। প্রয়োজন অনুযায়ী পরীক্ষা করে চিকিৎসক অ্যান্টিবায়োটিক, Needle Aspiration অথবা Surgical Drainage-এর মতো চিকিৎসা পদ্ধতি বিবেচনা করতে পারেন।',
          'নিজে থেকে অ্যান্টিবায়োটিক গ্রহণ বা আক্রান্ত স্থানে চাপ দিয়ে পুঁজ বের করার চেষ্টা করবেন না।',
          'ব্রেস্টে ব্যথা, ফোলা বা ইনফেকশনের লক্ষণ দেখা দিলে অবহেলা না করে চিকিৎসা নিন।'
        ],
        paragraphsEn: [
          'Seek medical evaluation promptly if these symptoms appear. After examination, your surgeon may consider antibiotics, Needle Aspiration, or Surgical Drainage.',
          'Do not take antibiotics without a prescription or attempt to squeeze pus out of the affected area.',
          'Do not neglect breast pain, swelling, or signs of infection—seek timely care.'
        ]
      }
    ]
  },
  {
    id: 4,
    num: '04',
    slug: 'piles-symptoms-and-treatment',
    category: 'Piles & Colorectal Surgery',
    dept: 'Piles & Colorectal Surgery',
    icon: pilesCareSvg,
    titleBn: 'পাইলসের লক্ষণ ও কখন চিকিৎসকের পরামর্শ নেবেন?',
    titleEn: 'Piles Symptoms & When to See a Specialist',
    introBn: 'পাইলস বা হেমোরয়েড হলো মলদ্বার ও রেকটামের নিচের অংশের রক্তনালি ফুলে যাওয়ার একটি সমস্যা। এটি অনেকের মধ্যে দেখা যায় এবং কিছু ক্ষেত্রে দৈনন্দিন জীবনযাত্রায় অস্বস্তি তৈরি করে।',
    introEn: 'Piles (hemorrhoids) are swollen blood vessels around the anus and lower rectum. It is a common condition that can cause significant daily discomfort if left unaddressed.',
    sections: [
      {
        headingBn: 'পাইলসের সাধারণ লক্ষণ:',
        headingEn: 'Common Symptoms of Piles:',
        bulletsBn: [
          'পায়খানার সময় রক্ত যাওয়া।',
          'মলদ্বারে চুলকানি বা অস্বস্তি।',
          'মলদ্বারের আশপাশে ফোলা বা গুটি অনুভব করা।',
          'পায়খানার সময় ব্যথা বা অস্বস্তি।',
          'মলত্যাগের পরও অস্বস্তি অনুভব করা।'
        ],
        bulletsEn: [
          'Bleeding during bowel movements.',
          'Itching or irritation around the anal region.',
          'Swelling or a lump felt around the anus.',
          'Pain or discomfort during defecation.',
          'Persistent discomfort even after passing stool.'
        ]
      },
      {
        headingBn: 'কী করবেন?',
        headingEn: 'What Should You Do?',
        paragraphsBn: [
          'আঁশযুক্ত খাবার গ্রহণ, পর্যাপ্ত পানি পান এবং নিয়মিত শারীরিক পরিশ্রম কোষ্ঠকাঠিন্য কমাতে সহায়ক হতে পারে।',
          'তবে পায়খানার সঙ্গে রক্ত গেলেই সেটি পাইলস ধরে নেওয়া ঠিক নয়। অন্যান্য রোগের কারণেও রক্তপাত হতে পারে। তাই সঠিক রোগ নির্ণয়ের জন্য চিকিৎসকের পরামর্শ নিন।',
          'রোগীর অবস্থা অনুযায়ী ওষুধ, অন্যান্য চিকিৎসা অথবা সার্জারির প্রয়োজন হতে পারে।'
        ],
        paragraphsEn: [
          'Eating fiber-rich foods, staying hydrated, and regular physical activity can help reduce constipation.',
          'However, rectal bleeding should not automatically be assumed to be piles, as other conditions can also cause bleeding. Consult a specialist for accurate diagnosis.',
          'Depending on your condition, medication, office procedures, or surgery may be advised.'
        ]
      }
    ]
  },
  {
    id: 5,
    num: '05',
    slug: 'gallbladder-stone-symptoms-and-treatment',
    category: 'Laparoscopic Surgery',
    dept: 'Laparoscopic Surgery',
    icon: laparoscopicSurgerySvg,
    titleBn: 'পিত্তথলিতে পাথর হলে কী করবেন?',
    titleEn: 'Gallbladder Stones: Symptoms and Treatment Options',
    introBn: 'পিত্তথলিতে পাথর বা Gallstones একটি পরিচিত স্বাস্থ্যসমস্যা। অনেকের ক্ষেত্রে কোনো লক্ষণ দেখা যায় না। তবে পাথরের কারণে সমস্যা তৈরি হলে পেটের ডান পাশের ওপরের দিকে ব্যথা, বমি বমি ভাব বা বমি হতে পারে।',
    introEn: 'Gallbladder stones (gallstones) are a common condition. While some patients remain symptom-free, symptomatic gallstones can cause upper right abdominal pain, nausea, or vomiting.',
    sections: [
      {
        headingBn: 'পিত্তথলিতে পাথরের সম্ভাব্য লক্ষণ:',
        headingEn: 'Possible Symptoms of Gallstones:',
        bulletsBn: [
          'পেটের ডান পাশের ওপরের অংশে ব্যথা।',
          'তৈলাক্ত খাবার খাওয়ার পর পেটব্যথা।',
          'বমি বমি ভাব বা বমি।',
          'ব্যথা পিঠ বা ডান কাঁধের দিকে ছড়িয়ে পড়া।'
        ],
        bulletsEn: [
          'Pain in the upper right side of the abdomen.',
          'Abdominal pain triggered after eating oily or fatty foods.',
          'Nausea or vomiting.',
          'Pain radiating toward the back or right shoulder blade.'
        ]
      },
      {
        headingBn: 'চিকিৎসা কী?',
        headingEn: 'Treatment Approach:',
        paragraphsBn: [
          'সব পিত্তথলির পাথরের ক্ষেত্রে অপারেশন প্রয়োজন হয় না। তবে উপসর্গযুক্ত পাথর বা জটিলতা দেখা দিলে চিকিৎসক রোগীর অবস্থা অনুযায়ী চিকিৎসার সিদ্ধান্ত নেন।',
          'প্রয়োজন হলে Laparoscopic Cholecystectomy বা ছোট ছিদ্রের মাধ্যমে পিত্তথলি অপসারণের অপারেশন করা হতে পারে।',
          'তীব্র পেটব্যথা, জ্বর বা চোখ-ত্বক হলুদ হয়ে গেলে দ্রুত চিকিৎসা নিন।',
          'সঠিক সময়ে রোগ নির্ণয় ও উপযুক্ত চিকিৎসা জটিলতা এড়াতে সহায়ক।'
        ],
        paragraphsEn: [
          'Not all gallstones require surgery. However, when stones cause symptoms or complications, your surgeon evaluates and recommends appropriate care.',
          'When indicated, Laparoscopic Cholecystectomy (keyhole gallbladder removal) is performed using small incisions.',
          'Seek urgent medical care if you develop severe abdominal pain, fever, or yellowing of the eyes or skin (jaundice).',
          'Timely diagnosis and appropriate surgical management help prevent complications.'
        ]
      }
    ]
  }
];

interface FaqItem {
  id: string;
  cat: 'consultation' | 'surgery' | 'billing';
  catEn: string;
  catBn: string;
  qEn: string;
  qBn: string;
  aEn: string;
  aBn: string;
}

const ABOUT_FAQS: FaqItem[] = [
  {
    id: 'bring-consultation',
    cat: 'consultation',
    catEn: 'Consultation',
    catBn: 'পরামর্শ প্রস্তুতি',
    qEn: 'What should I bring to my consultation?',
    qBn: 'কনসালটেশনে আসার সময় কী কী সঙ্গে আনতে হবে?',
    aEn: 'Please bring your previous prescriptions, recent blood test reports, imaging films and reports (Ultrasound, Mammogram, CT, or MRI), any prior biopsy/FNAC reports, and a list of all current medications (especially blood thinners, diabetes, or blood pressure medicines).',
    aBn: 'অনুগ্রহ করে আপনার পূর্বের প্রেসক্রিপশন, সাম্প্রতিক রক্ত পরীক্ষার রিপোর্ট, আল্ট্রাসাউন্ড/ম্যামোগ্রাম/সিটি বা এমআরআই রিপোর্ট ও ফিল্ম, কোনো বায়োপসি বা এফএনএসি (FNAC) রিপোর্ট থাকলে তা এবং বর্তমানে নিয়মিত যে ওষুধগুলো খাচ্ছেন (বিশেষত রক্ত পাতলা করার ওষুধ, ডায়াবেটিস বা উচ্চ রক্তচাপের ওষুধ) তার তালিকা সঙ্গে নিয়ে আসবেন।'
  },
  {
    id: 'prepare-surgery',
    cat: 'surgery',
    catEn: 'Surgery Prep',
    catBn: 'অপারেশন প্রস্তুতি',
    qEn: 'How should I prepare for a scheduled surgery?',
    qBn: 'নির্ধারিত সার্জারি বা অপারেশনের আগে কী ধরনের প্রস্তুতি নিতে হয়?',
    aEn: 'Before surgery, routine pre-anesthetic fitness investigations (such as CBC, blood sugar, ECG, and chest X-ray) are reviewed. Follow fasting instructions carefully (typically no solid food or water for 6 to 8 hours before anesthesia as directed), only pause blood-thinning medications if specifically advised by your doctor, wear comfortable clothing, and arrive with a family attendant.',
    aBn: 'অপারেশনের আগে অ্যানেস্থেশিয়া ফিটনেস যাচাইয়ের জন্য প্রয়োজনীয় রুটিন পরীক্ষা (যেমন: সিবিসি, ব্লাড সুগার, ইসিজি ও চেস্ট এক্স-রে) সম্পন্ন করা হয়। চিকিৎসকের নির্দেশনা অনুযায়ী অপারেশনের আগে সাধারণত ৬ থেকে ৮ ঘণ্টা না খেয়ে (খালি পেটে) থাকতে হয়। রক্ত পাতলা করার কোনো ওষুধ চললে তা বন্ধ করার বিষয়ে আগে থেকেই ডাক্তারের পরামর্শ নিন এবং ভর্তির সময় একজন অভিভাবক বা অ্যাটেনডেন্ট সঙ্গে রাখুন।'
  },
  {
    id: 'insurance-billing',
    cat: 'billing',
    catEn: 'Insurance & Billing',
    catBn: 'বিলিং ও ইন্স্যুরেন্স',
    qEn: 'How do consultation fees, surgical billing, and medical insurance work?',
    qBn: 'চেম্বার ফি, সার্জারির বিলিং এবং মেডিকেল ইন্স্যুরেন্স সংক্রান্ত নিয়মকানুন কী?',
    aEn: 'Chamber consultation fees are settled directly at the Popular Diagnostic Centre Ltd. (Dhanmondi) reception desk. If surgery is advised, an estimated breakdown of hospital, anesthesia, and surgical charges is explained beforehand based on the hospital category. Official itemized bills, discharge summaries, and medical certificates are provided for patients claiming corporate or private health insurance reimbursement—please check specific policy coverage with your insurer and the hospital billing desk.',
    aBn: 'চেম্বার পরামর্শ ফি পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড (ধানমন্ডি)-এর রিসেপশন ডেস্কে জমা দিতে হয়। কোনো অপারেশনের প্রয়োজন হলে ভর্তির আগেই হাসপাতাল, অ্যানেস্থেশিয়া ও সার্জারি সংক্রান্ত সম্ভাব্য খরচের ধারণা প্রদান করা হয়। কর্পোরেট বা প্রাইভেট স্বাস্থ্য ইন্স্যুরেন্স রিইম্বার্সমেন্টের জন্য প্রয়োজনীয় অফিশিয়াল বিল, ডিসচার্জ সামারি ও মেডিকেল সনদ সরবরাহ করা হয়; তবে নির্দিষ্ট কভারেজের বিষয়ে আপনার ইন্স্যুরেন্স কোম্পানি ও হাসপাতাল বিলিং ডেস্কের সাথে আগে থেকেই যাচাই করে নেওয়ার অনুরোধ করা হচ্ছে।'
  },
  {
    id: 'privacy-female-surgeon',
    cat: 'consultation',
    catEn: 'Consultation',
    catBn: 'পরামর্শ প্রস্তুতি',
    qEn: 'Is privacy maintained during breast and colorectal examinations?',
    qBn: 'ব্রেস্ট বা পাইলস সংক্রান্ত পরীক্ষায় কি সম্পূর্ণ গোপনীয়তা বজায় রাখা হয়?',
    aEn: 'Yes. Consultations and physical examinations are conducted in a calm, respectful, private environment led by Professor Dr. Sadia Armin Khan with female clinical assistance whenever required so female patients feel completely comfortable.',
    aBn: 'হ্যাঁ। অধ্যাপক ডা. সাদিয়া আরমিন খানের তত্ত্বাবধানে প্রতিটি রোগীর পরামর্শ ও শারীরিক পরীক্ষা সম্পূর্ণ গোপনীয়তা, মর্যাদা ও নারী সহকারীর উপস্থিতিতে নিরাপদ পরিবেশে সম্পন্ন করা হয়, যাতে রোগীরা নিশ্চিন্তে তাঁদের সমস্যার কথা বলতে পারেন।'
  },
  {
    id: 'recovery-laparoscopic',
    cat: 'surgery',
    catEn: 'Surgery Prep',
    catBn: 'অপারেশন প্রস্তুতি',
    qEn: 'How long is recovery after laparoscopic (keyhole) surgery?',
    qBn: 'ল্যাপারোস্কোপিক সার্জারির পর সুস্থ হয়ে স্বাভাবিক কাজে ফিরতে কতদিন লাগে?',
    aEn: 'Because laparoscopic surgery uses tiny incisions, most patients experience less post-operative discomfort, shorter hospital stays (often 24 to 48 hours depending on the procedure), and a faster return to light daily activities within 1 to 2 weeks, along with scheduled post-op follow-up.',
    aBn: 'ল্যাপারোস্কোপিক সার্জারি ছোট ছিদ্রের মাধ্যমে করা হয় বলে অপারেশন পরবর্তী ব্যথা তুলনামূলক কম হয়। অধিকাংশ ক্ষেত্রে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে হাসপাতাল থেকে ছুটি পাওয়া যায় এবং ১ থেকে ২ সপ্তাহের মধ্যেই হালকা স্বাভাবিক কাজকর্মে ফেরা সম্ভব হয়—তবে নির্ধারিত ফলো-আপ পরামর্শ মেনে চলা জরুরি।'
  },
  {
    id: 'chamber-booking',
    cat: 'billing',
    catEn: 'Appointment & Chamber',
    catBn: 'অ্যাপয়েন্টমেন্ট ও চেম্বার',
    qEn: 'How do I book an appointment or confirm chamber hours?',
    qBn: 'অ্যাপয়েন্টমেন্ট বুকিং এবং চেম্বারের সময়সূচি কীভাবে নিশ্চিত করবেন?',
    aEn: 'Chamber consultations are held Saturday to Thursday from 6:00 PM to 9:00 PM (closed on Friday and government holidays) at Popular Diagnostic Centre Ltd., Building-1, Room No-503, House-16, Road-2, Dhanmondi, Dhaka. You can submit an appointment request directly to WhatsApp from our Contact page or call +880 1779-224452.',
    aBn: 'শনিবার থেকে বৃহস্পতিবার সন্ধ্যা 6:00 PM থেকে রাত 9:00 PM পর্যন্ত (শুক্রবার ও সরকারি ছুটির দিন বন্ধ) পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড, ভবন-1, রুম নং-503, বাড়ি-16, রোড-2, ধানমন্ডি, ঢাকা-তে রোগী দেখা হয়। অ্যাপয়েন্টমেন্টের জন্য ওয়েবসাইটের Contact পেজ থেকে WhatsApp-এ অনুরোধ পাঠাতে পারেন অথবা +880 1779-224452 নম্বরে কল করতে পারেন।'
  }
];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [view, setView] = useState<View>('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSpecialty, setActiveSpecialty] = useState(0);
  const [serviceFilter, setServiceFilter] = useState<'all' | 'breast' | 'colorectal' | 'laparoscopic'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('breast-surgery');
  const [isServiceSliderPaused, setIsServiceSliderPaused] = useState(false);
  const [blogFilter, setBlogFilter] = useState<'all' | BlogArticle['category']>('all');
  const [blogSearch, setBlogSearch] = useState('');
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; msg: string; waUrl?: string } | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', dept: 'Breast Surgery', time: '6:00 PM – 9:00 PM', date: '', message: '', consent: false });
  const [gmpQuotaExceeded, setGmpQuotaExceeded] = useState(false);
  const [faqCategory, setFaqCategory] = useState<'all' | 'consultation' | 'surgery' | 'billing'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('bring-consultation');

  const t = T[lang];

  useEffect(() => {
    const onQuotaExceeded = () => setGmpQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', onQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', onQuotaExceeded);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (view !== 'services' || isServiceSliderPaused) return;
    const list = serviceFilter === 'all' ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.cat === serviceFilter);
    if (list.length <= 1) return;
    const timer = window.setInterval(() => {
      setSelectedServiceId((prev) => {
        const idx = list.findIndex((s) => s.id === prev);
        const nextIdx = idx === -1 ? 0 : (idx + 1) % list.length;
        return list[nextIdx].id;
      });
    }, 4200);
    return () => window.clearInterval(timer);
  }, [view, serviceFilter, isServiceSliderPaused]);

  const navigate = (v: View, prefillDept?: string, blogId: number | null = null) => {
    if (prefillDept) {
      setFormData((prev) => ({ ...prev, dept: prefillDept }));
    }
    setSelectedBlogId(v === 'blogs' ? blogId : null);
    setView(v);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = formData.phone.replace(/[\s\-()]/g, '');
    const validBD = /^(?:\+?88)?01[3-9]\d{8}$/.test(cleaned);
    if (!formData.name || !formData.phone || !formData.date || !formData.consent) {
      setFormStatus({ type: 'error', msg: lang === 'bn' ? 'অনুগ্রহ করে সকল প্রয়োজনীয় ঘর পূরণ করুন এবং সম্মতি প্রদান করুন।' : 'Please fill in all required fields and accept consent.' });
      return;
    }
    if (!validBD) {
      setFormStatus({ type: 'error', msg: lang === 'bn' ? 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)।' : 'Please enter a valid Bangladesh mobile number.' });
      return;
    }

    const waText = [
      'Appointment Request',
      '-------------------',
      'Doctor: Professor Dr. Sadia Armin Khan',
      `Patient Name: ${formData.name}`,
      `Mobile: ${formData.phone}`,
      `Preferred Date: ${formData.date}`,
      `Preferred Time: ${formData.time}`,
      `Department: ${formData.dept}`,
      formData.message ? `Message: ${formData.message}` : ''
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/8801779224452?text=${encodeURIComponent(waText)}`;
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setFormStatus({
      type: 'success',
      waUrl,
      msg: lang === 'bn'
        ? 'আপনার অ্যাপয়েন্টমেন্ট অনুরোধের তথ্য WhatsApp-এ পাঠানো হচ্ছে। যদি WhatsApp স্বয়ংক্রিয়ভাবে না খোলে, নিচের বাটনে ক্লিক করুন।'
        : 'Your appointment request details are ready on WhatsApp. If WhatsApp did not open automatically, click the button below.'
    });
  };

  const selectedSpec = SPECIALTIES[activeSpecialty];
  const filteredServices = serviceFilter === 'all' ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.cat === serviceFilter);
  const filteredBlogs = BLOG_ARTICLES.filter((b) => {
    const matchesCat = blogFilter === 'all' || b.category === blogFilter;
    const q = blogSearch.trim().toLowerCase();
    const matchesQuery =
      !q ||
      b.titleBn.toLowerCase().includes(q) ||
      b.titleEn.toLowerCase().includes(q) ||
      b.introBn.toLowerCase().includes(q) ||
      b.introEn.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.slug.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });
  const activeBlog = selectedBlogId !== null ? BLOG_ARTICLES.find((b) => b.id === selectedBlogId) ?? null : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172B35] flex flex-col selection:bg-[#E7F5F6] selection:text-[#008C9E]">
      {gmpQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-[60] shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}
      {/* Sticky Surgical Navigation Bar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || view !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DCE7EA] py-3' : 'bg-white/80 backdrop-blur-sm border-b border-[#DCE7EA]/60 py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center gap-4">
          <button onClick={() => navigate('home')} className="flex items-center gap-2.5 text-left group shrink-0" aria-label={t.doctorName}>
            <div className="w-10 h-10 rounded-xl bg-[#E7F5F6] border border-[#DCE7EA] flex items-center justify-center text-[#008C9E] group-hover:bg-[#008C9E] group-hover:text-white transition-colors">
              <Stethoscope size={21} />
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {(['home', 'about', 'services', 'blogs', 'journals', 'gallery', 'contact'] as const).map((item) => (
              <button
                key={item}
                onClick={() => navigate(item)}
                className={`relative py-1.5 text-sm font-semibold whitespace-nowrap transition-colors ${view === item ? 'text-[#008C9E]' : 'text-[#64748B] hover:text-[#172B35]'}`}
              >
                {t.nav[item]}
                {view === item && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#008C9E] rounded-full"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher: English first, then Bangla */}
            <div className="flex items-center bg-[#E7F5F6] p-1 rounded-xl border border-[#DCE7EA]">
              <Globe size={14} className="text-[#008C9E] ml-1.5 mr-1 hidden sm:block" />
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-[#008C9E] shadow-sm' : 'text-[#64748B] hover:text-[#172B35]'}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${lang === 'bn' ? 'bg-white text-[#008C9E] shadow-sm' : 'text-[#64748B] hover:text-[#172B35]'}`}
              >
                বাংলা
              </button>
            </div>

            <button
              onClick={() => navigate('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#008C9E] hover:bg-[#087F8C] text-white px-4 py-2 rounded-xl shadow-sm shadow-[#008C9E]/20 font-semibold text-sm whitespace-nowrap"
            >
              <Calendar size={15} />
              <span>{t.nav.appointment}</span>
            </button>

            <button className="lg:hidden p-2 text-[#172B35] hover:bg-[#E7F5F6] rounded-xl border border-[#DCE7EA]" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[#DCE7EA] overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4 space-y-2">
                {(['home', 'about', 'services', 'blogs', 'journals', 'gallery', 'contact'] as const).map((item) => (
                  <button
                    key={item}
                    onClick={() => navigate(item)}
                    className={`block w-full text-left py-2.5 px-3 rounded-xl font-semibold text-sm ${view === item ? 'bg-[#E7F5F6] text-[#008C9E]' : 'text-[#172B35]'}`}
                  >
                    {t.nav[item]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content with Smooth Transition */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${view}-${lang}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {view === 'home' && (
              <>
                {/* Authoritative Surgical Hero */}
                <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#F3FAFA] via-[#E4F4F5] to-[#C8EAEE] bg-surgical-grid border-b border-[#DCE7EA] overflow-hidden">
                  {/* Subtle Medical & Surgical Linear Background Graphics */}
                  <div className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                    {/* Enhanced soft ambient radial glows */}
                    <div className="absolute -top-24 -right-16 w-[500px] h-[500px] rounded-full bg-[#008C9E]/[0.16] blur-3xl" />
                    <div className="absolute -bottom-28 -left-20 w-[440px] h-[440px] rounded-full bg-[#087F8C]/[0.13] blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] rounded-full bg-white/35 blur-3xl" />

                    {/* Clean linear medical & precision surgical SVG layer */}
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 1440 680"
                      preserveAspectRatio="xMidYMid slice"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="heroEcgFade" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#008C9E" stopOpacity="0" />
                          <stop offset="28%" stopColor="#008C9E" stopOpacity="0.11" />
                          <stop offset="72%" stopColor="#087F8C" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#087F8C" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="heroArcFade" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#008C9E" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#087F8C" stopOpacity="0.04" />
                        </linearGradient>
                      </defs>

                      {/* Precision concentric orbital rings framing portrait zone */}
                      <circle cx="1115" cy="340" r="245" stroke="url(#heroArcFade)" strokeWidth="1.4" />
                      <circle cx="1115" cy="340" r="315" stroke="#008C9E" strokeOpacity="0.11" strokeWidth="1.3" strokeDasharray="6 8" />
                      <circle cx="1115" cy="340" r="395" stroke="#087F8C" strokeOpacity="0.07" strokeWidth="1.1" />

                      {/* Subtle architectural curved contour lines along outer edges */}
                      <path
                        d="M -60 88 Q 260 22 560 95 T 1180 65"
                        stroke="#008C9E"
                        strokeOpacity="0.10"
                        strokeWidth="1.25"
                      />
                      <path
                        d="M -80 605 Q 240 545 520 610 T 1140 575"
                        stroke="#087F8C"
                        strokeOpacity="0.09"
                        strokeWidth="1.25"
                      />

                      {/* Smooth ECG / Vital Pulse linear rhythm near lower band */}
                      <path
                        d="M 0 545 L 210 545 L 228 545 L 242 522 L 256 565 L 274 478 L 292 588 L 308 534 L 324 545 L 740 545 L 758 545 L 770 526 L 784 562 L 798 492 L 814 580 L 828 535 L 844 545 L 1440 545"
                        stroke="url(#heroEcgFade)"
                        strokeWidth="1.65"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Minimal surgical cross outlines */}
                      <g stroke="#008C9E" strokeOpacity="0.14" strokeWidth="1.45">
                        <path d="M 88 74 H 100 V 62 H 112 V 74 H 124 V 86 H 112 V 98 H 100 V 86 H 88 Z" />
                        <path d="M 1320 96 H 1330 V 86 H 1340 V 96 H 1350 V 106 H 1340 V 116 H 1330 V 106 H 1320 Z" />
                      </g>

                      {/* Delicate clinical crosshair markers */}
                      <g stroke="#087F8C" strokeOpacity="0.15" strokeWidth="1.25" strokeLinecap="round">
                        <path d="M 655 68 V 82 M 648 75 H 662" />
                        <path d="M 865 612 V 626 M 858 619 H 872" />
                        <path d="M 1345 520 V 534 M 1338 527 H 1352" />
                        <circle cx="805" cy="118" r="5" />
                        <circle cx="510" cy="624" r="4" />
                      </g>
                    </svg>
                  </div>

                  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="lg:col-span-7 text-center lg:text-left"
                    >
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DCE7EA] text-[#087F8C] text-xs font-bold mb-4 shadow-xs">
                        <HeartPulse size={15} className="text-[#008C9E]" />
                        <span>{t.heroKicker}</span>
                      </div>

                      <h1 className="text-[19px] sm:text-3xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#172B35] leading-tight mb-3 whitespace-nowrap tracking-tight">
                        {t.doctorName}
                      </h1>

                      {/* Mobile portrait right below H1 */}
                      <div className="lg:hidden my-5 flex justify-center">
                        <div className="w-56 h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
                          <img
                            src="https://lh3.googleusercontent.com/d/1xAxp0z7c53MA6c2J6f4dGWEizdVMY9aw"
                            alt={t.doctorName}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <p className="text-base sm:text-xl text-[#008C9E] font-bold mb-1.5">{t.designation}</p>
                      <p className="num-font text-xs sm:text-sm font-semibold text-[#087F8C] mb-1.5">{t.qualifications}</p>
                      <p className="text-sm sm:text-base text-[#475569] mb-5">{t.hospital}</p>

                      {/* Glassmorphic transparent text box tile solely for paragraph text */}
                      <div className="bg-white/65 backdrop-blur-md border border-white/85 rounded-2xl px-5 py-4 mb-7 max-w-xl mx-auto lg:mx-0 shadow-[0_10px_30px_-12px_rgba(8,127,140,0.16)]">
                        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                          {t.heroQuote}
                        </p>
                      </div>

                      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-2.5">
                        <button
                          onClick={() => navigate('contact')}
                          className="btn-compact inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-5 lg:px-5 py-3 rounded-xl shadow-lg shadow-[#008C9E]/20 font-bold text-sm whitespace-nowrap hover:-translate-y-0.5"
                        >
                          <Calendar size={16} />
                          <span>{t.ctaAppointment}</span>
                        </button>
                        <button
                          onClick={() => navigate('services')}
                          className="btn-compact inline-flex items-center gap-2 bg-white/95 border border-[#DCE7EA] text-[#172B35] hover:border-[#008C9E] hover:text-[#008C9E] px-5 lg:px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap shadow-xs hover:-translate-y-0.5"
                        >
                          <Microscope size={16} className="text-[#008C9E]" />
                          <span>{t.ctaServices}</span>
                        </button>
                      </div>
                    </motion.div>

                    {/* Desktop Portrait */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.55, delay: 0.1 }}
                      className="hidden lg:flex lg:col-span-5 justify-center relative"
                    >
                      <div className="relative w-80 xl:w-96">
                        <div className="rounded-[36px] overflow-hidden border-[8px] border-white shadow-2xl bg-white">
                          <img
                            src="https://lh3.googleusercontent.com/d/1xAxp0z7c53MA6c2J6f4dGWEizdVMY9aw"
                            alt={t.doctorName}
                            referrerPolicy="no-referrer"
                            className="w-full h-[430px] object-cover hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                        <div className="animate-float-slow absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#DCE7EA] flex items-center gap-3">
                          <div className="bg-[#E7F5F6] p-2.5 rounded-xl text-[#008C9E]">
                            <ShieldCheck size={22} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#172B35]">{t.chamberName}</p>
                            <p className="num-font text-[11px] text-[#64748B]">Room 503 · Dhanmondi</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Instant Chamber & Schedule Strip */}
                <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-7 relative z-10">
                  <div className="bg-white rounded-2xl border border-[#DCE7EA] shadow-md p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-5 divide-y md:divide-y-0 md:divide-x divide-[#DCE7EA]">
                    <div className="flex items-start gap-3.5 pt-1 md:pt-0">
                      <div className="p-2.5 rounded-xl bg-[#E7F5F6] text-[#008C9E] shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#008C9E] mb-0.5">{t.chamberName}</p>
                        <p className="num-font text-xs sm:text-sm text-[#475569] leading-snug">{t.chamberAddr}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-5">
                      <div className="p-2.5 rounded-xl bg-[#E7F5F6] text-[#008C9E] shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#008C9E] mb-0.5">{lang === 'en' ? 'Visiting Hours' : 'চেম্বারের সময়'}</p>
                        <div className="num-font text-xs sm:text-sm text-[#475569] leading-snug">
                          {t.visitingTime.split('|').map((part, i) => (
                            <span key={i} className="block">{part.trim()}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 md:pt-0 md:pl-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#E7F5F6] text-[#008C9E] shrink-0">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#008C9E]">{lang === 'en' ? 'Appointment Line' : 'অ্যাপয়েন্টমেন্ট নম্বর'}</p>
                          <a href="tel:+8801779224452" className="num-font text-sm sm:text-base font-extrabold text-[#172B35] hover:text-[#008C9E]">
                            {t.phone}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate('contact')}
                        className="bg-[#008C9E] hover:bg-[#087F8C] text-white text-xs font-bold px-3.5 py-2 rounded-xl shrink-0"
                      >
                        {lang === 'en' ? 'Book' : 'বুক করুন'}
                      </button>
                    </div>
                  </div>
                </section>

                {/* Interactive Surgical Specialties Explorer */}
                <section className="py-16 md:py-24">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-2xl mb-10">
                      <span className="text-xs font-bold text-[#008C9E] tracking-wide block mb-2">{t.specialtiesKicker}</span>
                      <h2 className="text-2xl md:text-4xl font-bold text-[#172B35] mb-3">{t.specialtiesTitle}</h2>
                      <p className="text-sm md:text-base text-[#64748B]">{t.specialtiesSub}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      {/* Left Selector Tabs */}
                      <div className="lg:col-span-5 flex flex-col gap-3">
                        {SPECIALTIES.map((spec, idx) => {
                          const isActive = activeSpecialty === idx;
                          return (
                            <button
                              key={spec.id}
                              onClick={() => setActiveSpecialty(idx)}
                              className={`text-left p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${isActive ? 'bg-[#008C9E] text-white border-[#008C9E] shadow-lg shadow-[#008C9E]/20' : 'bg-white text-[#172B35] border-[#DCE7EA] hover:border-[#00A6B7] hover:bg-[#E7F5F6]/40'}`}
                            >
                              <div className="flex items-center gap-4">
                                <span className={`num-font text-sm font-extrabold px-2.5 py-1 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-[#E7F5F6] text-[#008C9E]'}`}>
                                  {spec.num}
                                </span>
                                <div>
                                  <h3 className={`font-bold text-base sm:text-lg ${isActive ? 'text-white' : 'text-[#172B35]'}`}>
                                    {lang === 'en' ? spec.en : spec.bn}
                                  </h3>
                                  <p className={`text-xs line-clamp-1 mt-0.5 ${isActive ? 'text-[#E7F5F6]' : 'text-[#64748B]'}`}>
                                    {lang === 'en' ? spec.summaryEn : spec.summaryBn}
                                  </p>
                                </div>
                              </div>
                              <ChevronRight size={18} className={`shrink-0 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-[#64748B]'}`} />
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Interactive Detail Card */}
                      <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedSpec.id}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.22 }}
                            className="h-full bg-white rounded-3xl border border-[#DCE7EA] p-6 sm:p-9 shadow-sm flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-4 mb-5">
                                <img src={selectedSpec.icon} alt={selectedSpec.en} className="w-20 h-14 p-1.5 object-contain bg-[#E7F5F6] rounded-2xl border border-[#DCE7EA]" />
                                <div>
                                  <span className="num-font text-xs font-bold text-[#008C9E]">{selectedSpec.num} · {lang === 'en' ? 'Clinical Focus' : 'চিকিৎসা বিশেষজ্ঞতা'}</span>
                                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B35]">
                                    {lang === 'en' ? selectedSpec.en : selectedSpec.bn}
                                  </h3>
                                </div>
                              </div>

                              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                                {lang === 'en' ? selectedSpec.summaryEn : selectedSpec.summaryBn}
                              </p>

                              <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-[#DCE7EA] mb-6 space-y-2.5">
                                {(lang === 'en' ? selectedSpec.pointsEn : selectedSpec.pointsBn).map((pt, i) => (
                                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#172B35]">
                                    <CheckCircle2 size={17} className="text-[#008C9E] shrink-0 mt-0.5" />
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                              <button
                                onClick={() => navigate('contact', selectedSpec.deptValue)}
                                className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-6 py-3 rounded-xl font-bold text-sm"
                              >
                                <Calendar size={16} />
                                <span>{lang === 'en' ? 'Book Consultation for This' : 'এই বিষয়ে পরামর্শ নিন'}</span>
                              </button>
                              <button
                                onClick={() => navigate('services')}
                                className="text-sm font-bold text-[#008C9E] hover:underline inline-flex items-center gap-1"
                              >
                                <span>{lang === 'en' ? 'View All 6 Services' : 'সকল 6টি সেবা দেখুন'}</span>
                                <ArrowRight size={15} />
                              </button>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Surgical Care 3-Step Patient Flow */}
                <section className="py-16 bg-white border-y border-[#DCE7EA]">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                      <span className="text-xs font-bold text-[#008C9E] block mb-2">{t.processKicker}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#172B35]">{t.processTitle}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          step: '01',
                          icon: <FileText size={22} />,
                          enTitle: 'Clinical Evaluation',
                          bnTitle: 'সঠিক রোগ নির্ণয় ও পরীক্ষা',
                          enDesc: 'Thorough history review and physical assessment in a calm, respectful setting.',
                          bnDesc: 'ধৈর্য সহকারে রোগীর সমস্যার বিবরণ শোনা ও প্রয়োজনীয় ক্লিনিক্যাল পরীক্ষা সম্পন্ন করা।'
                        },
                        {
                          step: '02',
                          icon: <Activity size={22} />,
                          enTitle: 'Clear Surgical Plan',
                          bnTitle: 'সঠিক চিকিৎসা পরিকল্পনা',
                          enDesc: 'Transparent explanation of non-surgical vs. surgical options tailored to your condition.',
                          bnDesc: 'ওষুধ বা সার্জারি—রোগীর অবস্থার ওপর ভিত্তি করে সহজ ও স্পষ্ট চিকিৎসা পরামর্শ প্রদান।'
                        },
                        {
                          step: '03',
                          icon: <ShieldCheck size={22} />,
                          enTitle: 'Safe Care & Follow-Up',
                          bnTitle: 'নিরাপদ সার্জারি ও পরবর্তী যত্ন',
                          enDesc: 'Evidence-based surgical precision with structured post-operative recovery guidance.',
                          bnDesc: 'আধুনিক ও নিরাপদ সার্জারি এবং দ্রুত সুস্থতার জন্য নিয়মিত ফলো-আপ পরামর্শ।'
                        }
                      ].map((step) => (
                        <div key={step.step} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#DCE7EA] hover:border-[#00A6B7] transition-all">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#E7F5F6] text-[#008C9E] flex items-center justify-center">
                              {step.icon}
                            </div>
                            <span className="num-font text-2xl font-extrabold text-[#DCE7EA]">{step.step}</span>
                          </div>
                          <h3 className="font-bold text-lg text-[#172B35] mb-2">{lang === 'en' ? step.enTitle : step.bnTitle}</h3>
                          <p className="text-sm text-[#64748B] leading-relaxed">{lang === 'en' ? step.enDesc : step.bnDesc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* About Preview + Experience Timeline */}
                <section className="py-16 md:py-24">
                  <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                    <div className="lg:col-span-5 flex justify-center">
                      <img
                        src="https://lh3.googleusercontent.com/d/1ExuvmSm1cIlSFUuwk87VfLIrRdprte78"
                        alt={t.doctorName}
                        referrerPolicy="no-referrer"
                        className="w-72 sm:w-80 rounded-3xl shadow-xl border-4 border-white object-cover"
                      />
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#172B35]">{t.aboutTitle}</h2>
                      <p className="text-[#475569] text-base md:text-lg mb-4 leading-relaxed">{t.aboutP1}</p>
                      <p className="text-[#64748B] text-base mb-6 leading-relaxed">{t.aboutP2}</p>
                      <button
                        onClick={() => navigate('about')}
                        className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-6 py-3 rounded-xl font-bold text-sm"
                      >
                        <span>{lang === 'en' ? 'Read Full Biography' : 'সম্পূর্ণ পরিচিতি দেখুন'}</span>
                        <ChevronRight size={17} />
                      </button>
                    </div>
                  </div>

                  {/* Experience Timeline inside Homepage with View More */}
                  <div className="max-w-4xl mx-auto px-4 md:px-8 pt-12 border-t border-[#DCE7EA]">
                    <div className="text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#172B35] mb-2">{t.expTitle}</h2>
                      <p className="text-sm text-[#64748B]">{t.expSub}</p>
                    </div>

                    <div className="space-y-5 relative mb-10">
                      <div className="absolute left-[90px] top-6 bottom-6 w-0.5 bg-[#DCE7EA] hidden sm:block"></div>
                      {[
                        { badge: lang === 'en' ? 'Present' : 'বর্তমান', title: t.designation, org: t.hospital },
                        { badge: lang === 'en' ? 'Expertise' : 'বিশেষজ্ঞ', title: lang === 'en' ? 'Breast, Piles & Laparoscopic Surgeon' : 'ব্রেস্ট, পাইলস ও ল্যাপারোস্কোপিক সার্জন', org: lang === 'en' ? 'Specialist Surgical Care' : 'বিশেষায়িত সার্জিক্যাল চিকিৎসাসেবা' },
                        { badge: lang === 'en' ? 'Credentials' : 'যোগ্যতা', title: 'FCPS (Surgery), MRCS (Edin), FMAS (India)', org: 'MBBS (DMC)' }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-2.5 sm:gap-8 relative z-10 group items-start sm:items-center">
                          <div className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold sm:min-w-[180px] text-center shadow-xs transition-all border border-[#DCE7EA] bg-white text-[#008C9E] group-hover:border-[#008C9E] group-hover:bg-[#008C9E] group-hover:text-white">
                            {item.badge}
                          </div>
                          <div className="flex-1 w-full bg-white p-4 sm:p-6 rounded-2xl border border-[#DCE7EA] group-hover:border-[#00A6B7] group-hover:shadow-md transition-all">
                            <h3 className="num-font text-base sm:text-lg font-bold text-[#172B35] mb-0.5">{item.title}</h3>
                            <p className="num-font text-xs sm:text-sm text-[#64748B]">{item.org}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <button
                        onClick={() => navigate('about')}
                        className="inline-flex items-center gap-1.5 bg-white border border-[#008C9E] text-[#008C9E] hover:bg-[#008C9E] hover:text-white px-7 py-3 rounded-xl font-bold text-sm transition-all"
                      >
                        <span>{lang === 'en' ? 'View More' : 'আরও দেখুন'}</span>
                        <ChevronRight size={17} />
                      </button>
                    </div>
                  </div>
                </section>

                {/* Latest Health Awareness Blogs Preview */}
                <section className="py-16 bg-white border-t border-[#DCE7EA]">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                      <div>
                        <span className="text-xs font-bold text-[#008C9E] block mb-2">{lang === 'en' ? 'Patient Education' : 'স্বাস্থ্য সচেতনতা'}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#172B35]">{t.blogsTitle}</h2>
                      </div>
                      <button
                        onClick={() => navigate('blogs')}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#008C9E] hover:underline shrink-0"
                      >
                        <span>{lang === 'en' ? 'View All 5 Articles' : 'সবগুলো ব্লগ দেখুন'}</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[BLOG_ARTICLES[0], BLOG_ARTICLES[3], BLOG_ARTICLES[4]].map((b) => (
                        <div
                          key={b.id}
                          className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#DCE7EA] hover:border-[#00A6B7] hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <img src={b.icon} alt={b.category} className="w-16 h-11 p-1.5 object-contain bg-[#E7F5F6] rounded-xl" />
                              <span className="num-font text-xs font-bold text-[#008C9E] bg-white px-2.5 py-1 rounded-lg border border-[#DCE7EA]">
                                Blog {b.num}
                              </span>
                            </div>
                            <p className="text-xs font-bold text-[#087F8C] mb-1.5">{b.category}</p>
                            <h3 className="text-base sm:text-lg font-bold text-[#172B35] mb-2 leading-snug">
                              {lang === 'en' ? b.titleEn : b.titleBn}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#64748B] line-clamp-3 leading-relaxed mb-4">
                              {lang === 'en' ? b.introEn : b.introBn}
                            </p>
                          </div>
                          <button
                            onClick={() => navigate('blogs', undefined, b.id)}
                            className="inline-flex items-center gap-1 text-sm font-bold text-[#008C9E] hover:underline"
                          >
                            <span>{lang === 'en' ? 'Read Full Article' : 'পুরো প্রবন্ধ পড়ুন'}</span>
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Compact Doctor Promo Video Frame */}
                <section className="py-12 md:py-16">
                  <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="bg-white rounded-3xl border border-[#DCE7EA] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-xs">
                      <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008C9E] mb-2">
                          <PlayCircle size={15} />
                          <span>{lang === 'en' ? 'Doctor Video Introduction' : 'চিকিৎসক পরিচিতি ভিডিও'}</span>
                        </span>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#172B35] mb-3">
                          {lang === 'en' ? 'Meet Professor Dr. Sadia Armin Khan' : 'অধ্যাপক ডা. সাদিয়া আরমিন খানের পরামর্শ বার্তা'}
                        </h2>
                        <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                          {lang === 'en'
                            ? 'Watch a brief overview on specialist breast, piles, and laparoscopic surgical care and early consultation.'
                            : 'ব্রেস্ট, পাইলস এবং ল্যাপারোস্কোপিক সার্জারি ও সময়মতো বিশেষজ্ঞ পরামর্শ সম্পর্কে সংক্ষিপ্ত ভিডিও বার্তা দেখুন।'}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => navigate('contact')}
                            className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm"
                          >
                            <Calendar size={15} />
                            <span>{t.ctaAppointment}</span>
                          </button>
                          <a
                            href="https://www.facebook.com/reel/1700092954574932/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087F8C] hover:text-[#008C9E] hover:underline"
                          >
                            <Facebook size={15} />
                            <span>{lang === 'en' ? 'Open on Facebook' : 'ফেসবুকে দেখুন'}</span>
                          </a>
                        </div>
                      </div>

                      <div className="lg:col-span-7 bg-[#E7F5F6]/70 p-4 sm:p-6 flex justify-center border-t lg:border-t-0 lg:border-l border-[#DCE7EA]">
                        <div className="w-full max-w-[560px] aspect-[560/314] rounded-2xl overflow-hidden bg-slate-900/5 border border-[#DCE7EA] shadow-sm">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1700092954574932%2F&show_text=false&width=560&t=0"
                            title={lang === 'en' ? 'Professor Dr. Sadia Armin Khan Promo Video' : 'অধ্যাপক ডা. সাদিয়া আরমিন খান পরিচিতি ভিডিও'}
                            className="w-full h-full border-0 overflow-hidden"
                            scrolling="no"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Direct Appointment CTA Banner */}
                <section className="pb-20">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="bg-gradient-to-r from-[#087F8C] to-[#008C9E] rounded-3xl p-8 md:p-14 text-white text-center shadow-xl">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">{lang === 'en' ? 'Schedule Your Surgical Consultation' : 'অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করুন'}</h2>
                      <p className="num-font text-[#E7F5F6] mb-7 max-w-2xl mx-auto text-sm md:text-base">
                        {t.chamberName} — {t.chamberAddr}
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <button
                          onClick={() => navigate('contact')}
                          className="bg-white text-[#087F8C] hover:bg-[#E7F5F6] px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base"
                        >
                          {t.ctaAppointment}
                        </button>
                        <a
                          href="tel:+8801779224452"
                          className="num-font bg-white/15 hover:bg-white/25 text-white border border-white/30 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base inline-flex items-center gap-2"
                        >
                          <Phone size={17} />
                          <span>{t.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {view === 'about' && (
              <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-5/12 flex justify-center">
                    <div className="w-72 sm:w-96 rounded-3xl overflow-hidden border-8 border-white shadow-xl bg-white">
                      <img src="https://lh3.googleusercontent.com/d/1fLMl87gmJEaJC8QQ3Bdb5KAeVaeMWz5M" alt={t.doctorName} referrerPolicy="no-referrer" className="w-full object-cover" />
                    </div>
                  </div>
                  <div className="lg:w-7/12">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3">{t.aboutTitle}</h1>
                    <p className="text-[#008C9E] font-bold mb-4">{t.designation} — {t.hospital}</p>
                    <p className="text-[#475569] text-base md:text-lg mb-4 leading-relaxed">{t.aboutP1}</p>
                    <p className="text-[#64748B] text-base mb-6 leading-relaxed">{t.aboutP2}</p>
                    <div className="bg-white p-6 rounded-2xl border border-[#DCE7EA] mb-6">
                      <h3 className="font-bold text-lg mb-3 text-[#172B35]">{lang === 'en' ? 'Verified Qualifications' : 'শিক্ষাগত যোগ্যতা'}</h3>
                      <ul className="num-font space-y-2.5 text-[#475569] text-sm md:text-base">
                        <li className="flex items-center gap-2.5"><CheckCircle2 size={17} className="text-[#008C9E] shrink-0" /> <span><strong>MBBS (DMC)</strong> — Dhaka Medical College</span></li>
                        <li className="flex items-center gap-2.5"><CheckCircle2 size={17} className="text-[#008C9E] shrink-0" /> <span><strong>FCPS (Surgery)</strong> — Bangladesh College of Physicians & Surgeons</span></li>
                        <li className="flex items-center gap-2.5"><CheckCircle2 size={17} className="text-[#008C9E] shrink-0" /> <span><strong>MRCS (Edin)</strong> — Royal College of Surgeons of Edinburgh</span></li>
                        <li className="flex items-center gap-2.5"><CheckCircle2 size={17} className="text-[#008C9E] shrink-0" /> <span><strong>FMAS (India)</strong> — Fellowship in Minimal Access Surgery</span></li>
                      </ul>
                    </div>
                    <button onClick={() => navigate('contact')} className="bg-[#008C9E] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#087F8C]">
                      {t.ctaAppointment}
                    </button>
                  </div>
                </div>

                {/* Experience Section inside About Page */}
                <div className="max-w-4xl mx-auto px-4 md:px-8 mt-16 pt-14 border-t border-[#DCE7EA]">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#172B35]">{t.expTitle}</h2>
                    <p className="text-sm text-[#64748B]">{t.expSub}</p>
                  </div>
                  <div className="space-y-5 relative">
                    <div className="absolute left-[90px] top-6 bottom-6 w-0.5 bg-[#DCE7EA] hidden sm:block"></div>
                    {[
                      { badge: lang === 'en' ? 'Present' : 'বর্তমান', title: t.designation, org: t.hospital },
                      { badge: lang === 'en' ? 'Expertise' : 'বিশেষজ্ঞ', title: lang === 'en' ? 'Breast, Piles & Laparoscopic Surgeon' : 'ব্রেস্ট, পাইলস ও ল্যাপারোস্কোপিক সার্জন', org: lang === 'en' ? 'Specialist Surgical Care' : 'বিশেষায়িত সার্জিক্যাল চিকিৎসাসেবা' },
                      { badge: lang === 'en' ? 'Credentials' : 'যোগ্যতা', title: 'FCPS (Surgery), MRCS (Edin), FMAS (India)', org: 'MBBS (DMC)' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-2.5 sm:gap-8 relative z-10 group items-start sm:items-center">
                        <div className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold sm:min-w-[180px] text-center shadow-xs transition-all border border-[#DCE7EA] bg-white text-[#008C9E] group-hover:border-[#008C9E] group-hover:bg-[#008C9E] group-hover:text-white">
                          {item.badge}
                        </div>
                        <div className="flex-1 w-full bg-white p-4 sm:p-6 rounded-2xl border border-[#DCE7EA] group-hover:border-[#00A6B7] group-hover:shadow-md transition-all">
                          <h3 className="num-font text-base sm:text-lg font-bold text-[#172B35] mb-0.5">{item.title}</h3>
                          <p className="num-font text-xs sm:text-sm text-[#64748B]">{item.org}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frequently Asked Questions Section inside About Page */}
                <div id="faq" className="max-w-4xl mx-auto px-4 md:px-8 mt-16 pt-14 border-t border-[#DCE7EA]">
                  <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008C9E] bg-[#E7F5F6] border border-[#DCE7EA] px-3.5 py-1 rounded-full mb-3">
                      <HelpCircle size={14} />
                      <span>{lang === 'en' ? 'Patient Guidance' : 'রোগীদের সাধারণ জিজ্ঞাসা'}</span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#172B35]">
                      {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা ও পরামর্শ নির্দেশিকা'}
                    </h2>
                    <p className="text-sm text-[#64748B] max-w-2xl mx-auto">
                      {lang === 'en'
                        ? 'Clear answers on consultation preparation, surgery readiness, and billing/insurance procedures to help you prepare confidently.'
                        : 'কনসালটেশন প্রস্তুতি, অপারেশনের আগের নিয়মকানুন এবং বিলিং ও ইন্স্যুরেন্স সংক্রান্ত প্রয়োজনীয় প্রশ্নের উত্তর।'}
                    </p>
                  </div>

                  {/* Category Filter Tabs */}
                  <div className="flex flex-wrap justify-center gap-2 mb-7">
                    {([
                      { id: 'all', en: 'All Questions', bn: 'সব প্রশ্ন' },
                      { id: 'consultation', en: 'Consultation Prep', bn: 'পরামর্শ প্রস্তুতি' },
                      { id: 'surgery', en: 'Preparation for Surgery', bn: 'অপারেশন প্রস্তুতি' },
                      { id: 'billing', en: 'Insurance & Billing', bn: 'বিলিং ও ইন্স্যুরেন্স' }
                    ] as const).map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setFaqCategory(cat.id);
                          const firstMatch = cat.id === 'all' ? ABOUT_FAQS[0] : ABOUT_FAQS.find((f) => f.cat === cat.id);
                          if (firstMatch) setOpenFaqId(firstMatch.id);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                          faqCategory === cat.id
                            ? 'bg-[#008C9E] text-white border-[#008C9E] shadow-xs'
                            : 'bg-white text-[#475569] border-[#DCE7EA] hover:border-[#008C9E] hover:text-[#087F8C]'
                        }`}
                      >
                        {lang === 'en' ? cat.en : cat.bn}
                      </button>
                    ))}
                  </div>

                  {/* FAQ Accordion List */}
                  <div className="space-y-3.5">
                    {ABOUT_FAQS.filter((f) => faqCategory === 'all' || f.cat === faqCategory).map((faq) => {
                      const isOpenFaq = openFaqId === faq.id;
                      return (
                        <div
                          key={faq.id}
                          className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                            isOpenFaq ? 'border-[#008C9E] shadow-md' : 'border-[#DCE7EA] hover:border-[#00A6B7]'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqId(isOpenFaq ? null : faq.id)}
                            aria-expanded={isOpenFaq}
                            className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <span className="inline-block text-[11px] font-bold text-[#008C9E] bg-[#E7F5F6] px-2.5 py-0.5 rounded-md">
                                {lang === 'en' ? faq.catEn : faq.catBn}
                              </span>
                              <h3 className="text-base sm:text-lg font-bold text-[#172B35] leading-snug">
                                {lang === 'en' ? faq.qEn : faq.qBn}
                              </h3>
                            </div>
                            <span
                              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                isOpenFaq ? 'bg-[#008C9E] text-white rotate-180' : 'bg-[#E7F5F6] text-[#087F8C]'
                              }`}
                            >
                              <ChevronDown size={18} />
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpenFaq && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: 'easeOut' }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#E7F5F6]">
                                  <p className="num-font text-sm sm:text-base text-[#475569] leading-relaxed">
                                    {lang === 'en' ? faq.aEn : faq.aBn}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quick Follow-Up CTA */}
                  <div className="mt-8 bg-[#E7F5F6] border border-[#DCE7EA] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-[#172B35] text-sm sm:text-base">
                        {lang === 'en' ? 'Still have a question before your visit?' : 'ভিজিটের আগে আরও কোনো প্রশ্ন আছে?'}
                      </p>
                      <p className="num-font text-xs sm:text-sm text-[#475569] mt-0.5">
                        {lang === 'en'
                          ? 'Contact our Dhanmondi chamber desk directly on +880 1779-224452 or send an appointment request.'
                          : 'সরাসরি কল করুন +880 1779-224452 নম্বরে অথবা অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান।'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('contact')}
                      className="bg-[#008C9E] hover:bg-[#087F8C] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-all"
                    >
                      {t.ctaAppointment}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {view === 'services' && (() => {
              const activeServiceItem = filteredServices.find((s) => s.id === selectedServiceId) || filteredServices[0] || ALL_SERVICES[0];
              return (
                <section className="py-14 md:py-20">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Header + Segmented Specialty Filter */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#DCE7EA]">
                      <div className="max-w-2xl">
                        <span className="text-xs font-bold text-[#008C9E] tracking-wide block mb-2">
                          {lang === 'en' ? 'Clinical & Surgical Capabilities' : 'ক্লিনিক্যাল ও সার্জিক্যাল সেবাসমূহ'}
                        </span>
                        <h1 className="text-2xl md:text-4xl font-extrabold text-[#172B35] mb-3" style={{ textWrap: 'balance' }}>
                          {t.servicesTitle}
                        </h1>
                        <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">{t.servicesSub}</p>
                      </div>

                      <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#E7F5F6] rounded-xl border border-[#DCE7EA] self-start">
                        {([
                          { id: 'all', en: 'All Services', bn: 'সবগুলো সেবা' },
                          { id: 'breast', en: 'Breast Care', bn: 'ব্রেস্ট কেয়ার' },
                          { id: 'colorectal', en: 'Piles & Colorectal', bn: 'পাইলস ও কলোরেক্টাল' },
                          { id: 'laparoscopic', en: 'Laparoscopic', bn: 'ল্যাপারোস্কোপি' }
                        ] as const).map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setServiceFilter(tab.id);
                              const firstMatch = tab.id === 'all' ? ALL_SERVICES[0] : ALL_SERVICES.find((x) => x.cat === tab.id);
                              if (firstMatch) setSelectedServiceId(firstMatch.id);
                            }}
                            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                              serviceFilter === tab.id
                                ? 'bg-white text-[#008C9E] shadow-xs'
                                : 'text-[#475569] hover:text-[#172B35]'
                            }`}
                          >
                            {lang === 'en' ? tab.en : tab.bn}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Clinical Fade Slider Stage */}
                    <div
                      onMouseEnter={() => setIsServiceSliderPaused(true)}
                      onMouseLeave={() => setIsServiceSliderPaused(false)}
                      className="bg-white rounded-3xl border border-[#DCE7EA] overflow-hidden mb-12"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeServiceItem.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.45, ease: 'easeInOut' }}
                          className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
                        >
                          <div className="lg:col-span-5 bg-[#E7F5F6]/70 p-6 sm:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#DCE7EA]">
                            <img
                              src={activeServiceItem.icon}
                              alt={lang === 'en' ? activeServiceItem.en : activeServiceItem.bn}
                              className="w-full max-w-[340px] h-auto drop-shadow-xs"
                            />
                          </div>

                          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-6">
                            <div>
                              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#087F8C] mb-3">
                                <span className="num-font text-[#008C9E]">{activeServiceItem.num}.</span>
                                <span aria-hidden="true">·</span>
                                <span>{lang === 'en' ? activeServiceItem.conditionsEn : activeServiceItem.conditionsBn}</span>
                              </div>

                              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B35] mb-3">
                                {lang === 'en' ? activeServiceItem.en : activeServiceItem.bn}
                              </h2>
                              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                                {lang === 'en' ? activeServiceItem.descEn : activeServiceItem.descBn}
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-[#DCE7EA]">
                                <div>
                                  <p className="text-xs font-bold text-[#008C9E] mb-2.5">
                                    {lang === 'en' ? 'Key Symptoms & Presentations' : 'প্রধান লক্ষণসমূহ'}
                                  </p>
                                  <ul className="space-y-2">
                                    {(lang === 'en' ? activeServiceItem.symptomsEn : activeServiceItem.symptomsBn).map((sym, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#172B35]">
                                        <CheckCircle2 size={15} className="text-[#008C9E] shrink-0 mt-0.5" />
                                        <span>{sym}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <p className="text-xs font-bold text-[#008C9E] mb-2.5">
                                    {lang === 'en' ? 'Clinical Evaluation & Care' : 'পরামর্শ ও চিকিৎসা পদ্ধতি'}
                                  </p>
                                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                                    {lang === 'en' ? activeServiceItem.careEn : activeServiceItem.careBn}
                                  </p>
                                  <p className="text-xs text-[#64748B] leading-relaxed">
                                    <strong className="text-[#087F8C]">{lang === 'en' ? 'When to Consult: ' : 'কখন দেখাবেন: '}</strong>
                                    {lang === 'en' ? activeServiceItem.whenEn : activeServiceItem.whenBn}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#DCE7EA]">
                              <button
                                onClick={() => navigate('contact', activeServiceItem.dept)}
                                className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors whitespace-nowrap shrink-0"
                              >
                                <Calendar size={16} />
                                <span>{t.ctaAppointment}</span>
                              </button>
                              <a
                                href="tel:+8801779224452"
                                className="num-font text-sm font-bold text-[#087F8C] hover:text-[#008C9E] inline-flex items-center gap-1.5 whitespace-nowrap"
                              >
                                <Phone size={15} />
                                <span>{t.phone}</span>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Fade Slider Navigation Bar */}
                      {filteredServices.length > 1 && (
                        <div className="bg-[#F8FAFC] px-6 py-3.5 border-t border-[#DCE7EA] flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            {filteredServices.map((item) => {
                              const active = activeServiceItem.id === item.id;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => setSelectedServiceId(item.id)}
                                  aria-label={lang === 'en' ? item.en : item.bn}
                                  className={`num-font h-8 px-2.5 rounded-lg text-xs font-bold transition-all ${
                                    active
                                      ? 'bg-[#008C9E] text-white shadow-xs'
                                      : 'bg-white text-[#64748B] border border-[#DCE7EA] hover:border-[#008C9E] hover:text-[#172B35]'
                                  }`}
                                >
                                  {item.num}
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                const idx = filteredServices.findIndex((s) => s.id === activeServiceItem.id);
                                const prevIdx = (idx - 1 + filteredServices.length) % filteredServices.length;
                                setSelectedServiceId(filteredServices[prevIdx].id);
                              }}
                              aria-label="Previous service"
                              className="w-8 h-8 rounded-lg bg-white border border-[#DCE7EA] hover:border-[#008C9E] text-[#172B35] flex items-center justify-center transition-colors"
                            >
                              <ChevronLeft size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const idx = filteredServices.findIndex((s) => s.id === activeServiceItem.id);
                                const nextIdx = (idx + 1) % filteredServices.length;
                                setSelectedServiceId(filteredServices[nextIdx].id);
                              }}
                              aria-label="Next service"
                              className="w-8 h-8 rounded-lg bg-white border border-[#DCE7EA] hover:border-[#008C9E] text-[#172B35] flex items-center justify-center transition-colors"
                            >
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Disease-Vector Visual Service Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
                      {filteredServices.map((s) => {
                        const isSelected = activeServiceItem.id === s.id;
                        return (
                          <div
                            key={s.id}
                            onClick={() => setSelectedServiceId(s.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setSelectedServiceId(s.id);
                              }
                            }}
                            className={`cursor-pointer bg-white rounded-2xl border overflow-hidden transition-all flex flex-col justify-between group ${
                              isSelected
                                ? 'border-[#008C9E] ring-2 ring-[#008C9E]/15 shadow-md'
                                : 'border-[#DCE7EA] hover:border-[#00A6B7] hover:-translate-y-1 hover:shadow-md'
                            }`}
                          >
                            <div>
                              <div className="bg-[#E7F5F6]/65 px-5 pt-5 pb-4 border-b border-[#DCE7EA]">
                                <img
                                  src={s.icon}
                                  alt={lang === 'en' ? s.en : s.bn}
                                  className="w-full h-36 object-contain group-hover:scale-[1.03] transition-transform duration-300"
                                />
                              </div>

                              <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2">
                                  <span className="num-font font-bold text-[#008C9E]">{s.num}</span>
                                  <span aria-hidden="true">·</span>
                                  <span className="truncate">{lang === 'en' ? s.conditionsEn : s.conditionsBn}</span>
                                </div>

                                <h3 className="text-lg font-bold text-[#172B35] mb-2">
                                  {lang === 'en' ? s.en : s.bn}
                                </h3>
                                <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                                  {lang === 'en' ? s.descEn : s.descBn}
                                </p>

                                <div className="pt-4 border-t border-[#DCE7EA]/80 text-xs text-[#475569] leading-relaxed">
                                  <span className="font-bold text-[#087F8C] block mb-1">
                                    {lang === 'en' ? 'When to Consult' : 'কখন পরামর্শ নেবেন'}
                                  </span>
                                  <span>{lang === 'en' ? s.whenEn : s.whenBn}</span>
                                </div>
                              </div>
                            </div>

                            <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate('contact', s.dept);
                                }}
                                className="text-[#008C9E] font-bold text-sm inline-flex items-center gap-1 hover:underline"
                              >
                                <span>{t.ctaAppointment}</span>
                                <ChevronRight size={16} />
                              </button>
                              <span className="text-xs font-semibold text-[#64748B]">
                                {isSelected
                                  ? lang === 'en' ? 'Selected' : 'নির্বাচিত'
                                  : lang === 'en' ? 'Inspect' : 'বিস্তারিত'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Specialist Surgical Consultation Feature Card (New Doctor Photo) */}
                    <div className="bg-white rounded-3xl border border-[#DCE7EA] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      <div className="lg:col-span-5 bg-[#E7F5F6] min-h-[280px]">
                        <img
                          src="https://lh3.googleusercontent.com/d/1PMbrVvC3LsVHQP-0LNVqqfDr7i9hzZLn"
                          alt={t.doctorName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full max-h-[420px] object-cover object-top"
                        />
                      </div>
                      <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
                        <span className="text-xs font-bold text-[#008C9E] mb-2 block">
                          {lang === 'en' ? 'Specialist Surgical Consultation' : 'বিশেষজ্ঞ সার্জিক্যাল পরামর্শ'}
                        </span>
                        <h2 className="text-xl sm:text-3xl font-extrabold text-[#172B35] mb-2">{t.doctorName}</h2>
                        <p className="num-font text-xs sm:text-sm font-semibold text-[#087F8C] mb-4">{t.qualifications}</p>
                        <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                          {lang === 'en'
                            ? 'Every surgical condition is evaluated with clear diagnostics, unhurried discussion of non-surgical versus minimally invasive options, and compassionate post-operative follow-up.'
                            : 'প্রতিটি রোগীর অবস্থা ধৈর্য সহকারে পরীক্ষা করে, প্রয়োজনীয় ডায়াগনস্টিক পর্যালোচনা ও আধুনিক ন্যূনতম ব্যথাদায়ক সার্জিক্যাল পরামর্শ প্রদান করা হয়।'}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => navigate('contact')}
                            className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-6 py-3 rounded-xl font-bold text-sm"
                          >
                            <Calendar size={16} />
                            <span>{t.ctaAppointment}</span>
                          </button>
                          <button
                            onClick={() => navigate('about')}
                            className="inline-flex items-center gap-1.5 border border-[#DCE7EA] hover:border-[#008C9E] text-[#172B35] px-5 py-3 rounded-xl font-bold text-sm"
                          >
                            <span>{lang === 'en' ? 'View Full Credentials' : 'শিক্ষাগত ও কর্মক্ষেত্রের তথ্য'}</span>
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })()}

            {view === 'blogs' && (
              <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  {activeBlog ? (
                    <div className="max-w-3xl mx-auto">
                      <button
                        onClick={() => {
                          setSelectedBlogId(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#008C9E] hover:text-[#087F8C] mb-6 bg-white border border-[#DCE7EA] px-4 py-2 rounded-xl shadow-xs"
                      >
                        <ArrowLeft size={16} />
                        <span>{lang === 'en' ? 'Back to All Blogs' : 'সব ব্লগে ফিরে যান'}</span>
                      </button>

                      <article className="bg-white rounded-3xl border border-[#DCE7EA] shadow-sm p-6 sm:p-10">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="num-font text-xs font-extrabold bg-[#008C9E] text-white px-3 py-1 rounded-lg">
                            Blog {activeBlog.num}
                          </span>
                          <span className="text-xs font-bold bg-[#E7F5F6] text-[#087F8C] px-3 py-1 rounded-lg">
                            {activeBlog.category}
                          </span>
                          <span className="num-font text-xs text-[#64748B] bg-[#F8FAFC] border border-[#DCE7EA] px-3 py-1 rounded-lg">
                            /{activeBlog.slug}
                          </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172B35] leading-snug mb-5">
                          {lang === 'en' ? activeBlog.titleEn : activeBlog.titleBn}
                        </h1>

                        <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-7 pb-6 border-b border-[#DCE7EA]">
                          {lang === 'en' ? activeBlog.introEn : activeBlog.introBn}
                        </p>

                        <div className="space-y-7">
                          {activeBlog.sections.map((sec, sIdx) => (
                            <div key={sIdx}>
                              <h2 className="text-lg sm:text-xl font-bold text-[#087F8C] mb-3">
                                {lang === 'en' ? sec.headingEn : sec.headingBn}
                              </h2>

                              {sec.bulletsBn && (
                                <ul className="space-y-2.5">
                                  {(lang === 'en' && sec.bulletsEn ? sec.bulletsEn : sec.bulletsBn).map((pt, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#172B35] leading-relaxed">
                                      <CheckCircle2 size={17} className="text-[#008C9E] shrink-0 mt-1" />
                                      <span>{pt}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {sec.numberedBn && (
                                <div className="space-y-3">
                                  {(lang === 'en' && sec.numberedEn ? sec.numberedEn : sec.numberedBn).map((item, nIdx) => (
                                    <div key={nIdx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#DCE7EA] flex items-start gap-3">
                                      <span className="num-font text-sm font-extrabold text-[#008C9E] bg-[#E7F5F6] px-2.5 py-1 rounded-lg shrink-0">
                                        {item.num}
                                      </span>
                                      <p className="text-sm sm:text-base text-[#172B35] leading-relaxed">
                                        <strong className="num-font text-[#087F8C]">{item.title}</strong> {item.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {sec.paragraphsBn && (
                                <div className="space-y-3">
                                  {(lang === 'en' && sec.paragraphsEn ? sec.paragraphsEn : sec.paragraphsBn).map((p, pIdx) => (
                                    <p key={pIdx} className="text-sm sm:text-base text-[#334155] leading-relaxed">
                                      {p}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Medical Disclaimer */}
                        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#E7F5F6] border border-[#DCE7EA] text-xs sm:text-sm text-[#172B35] leading-relaxed">
                          <strong className="text-[#087F8C]">Medical Disclaimer:</strong>{' '}
                          {lang === 'en'
                            ? 'These blogs are intended for general health awareness only. They are not a substitute for personal diagnosis or direct medical consultation.'
                            : 'এই ব্লগগুলো সাধারণ স্বাস্থ্যসচেতনতামূলক তথ্যের জন্য। এগুলো ব্যক্তিগত রোগ নির্ণয় বা চিকিৎসকের সরাসরি পরামর্শের বিকল্প নয়।'}
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#DCE7EA] flex flex-wrap items-center justify-between gap-3">
                          <button
                            onClick={() => setSelectedBlogId(null)}
                            className="inline-flex items-center gap-2 border border-[#DCE7EA] hover:border-[#008C9E] text-[#172B35] px-5 py-3 rounded-xl font-bold text-sm"
                          >
                            <ArrowLeft size={16} />
                            <span>{lang === 'en' ? 'All Articles' : 'সব প্রবন্ধ'}</span>
                          </button>
                          <button
                            onClick={() => navigate('contact', activeBlog.dept)}
                            className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-6 py-3 rounded-xl font-bold text-sm"
                          >
                            <Calendar size={16} />
                            <span>{t.ctaAppointment}</span>
                          </button>
                        </div>
                      </article>
                    </div>
                  ) : (
                    <>
                      <div className="text-center max-w-2xl mx-auto mb-10">
                        <h1 className="text-2xl md:text-4xl font-bold mb-3">{t.blogsTitle}</h1>
                        <p className="text-[#64748B] text-sm sm:text-base">
                          {lang === 'en'
                            ? 'Evidence-based patient awareness articles on breast health, piles, colorectal care, and laparoscopic surgery.'
                            : 'ব্রেস্ট স্বাস্থ্য, পাইলস, কলোরেক্টাল ও ল্যাপারোস্কোপিক সার্জারি বিষয়ক নির্ভরযোগ্য স্বাস্থ্য সচেতনতামূলক প্রবন্ধ।'}
                        </p>
                      </div>

                      {/* Category Tabs & Search Toolbar */}
                      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-9">
                        <div className="flex flex-wrap gap-2">
                          {(
                            [
                              'all',
                              'Breast Health',
                              'Breast Cancer Awareness',
                              'Piles & Colorectal Surgery',
                              'Laparoscopic Surgery'
                            ] as const
                          ).map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setBlogFilter(cat)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                                blogFilter === cat
                                  ? 'bg-[#008C9E] text-white border-[#008C9E] shadow-xs'
                                  : 'bg-white text-[#64748B] border-[#DCE7EA] hover:border-[#008C9E]'
                              }`}
                            >
                              {cat === 'all' ? (lang === 'en' ? 'All Articles' : 'সবগুলো') : cat}
                            </button>
                          ))}
                        </div>

                        <div className="relative w-full lg:w-72 shrink-0">
                          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
                          <input
                            type="search"
                            value={blogSearch}
                            onChange={(e) => setBlogSearch(e.target.value)}
                            placeholder={lang === 'en' ? 'Search articles...' : 'প্রবন্ধ খুঁজুন...'}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCE7EA] bg-white text-sm focus:outline-none focus:border-[#008C9E]"
                          />
                        </div>
                      </div>

                      {filteredBlogs.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-[#DCE7EA] p-10 text-center mb-10">
                          <p className="text-[#64748B] mb-4">
                            {lang === 'en' ? 'No matching articles found.' : 'কোনো প্রবন্ধ খুঁজে পাওয়া যায়নি।'}
                          </p>
                          <button
                            onClick={() => {
                              setBlogFilter('all');
                              setBlogSearch('');
                            }}
                            className="bg-[#008C9E] text-white px-5 py-2.5 rounded-xl text-sm font-bold"
                          >
                            {lang === 'en' ? 'Show All Articles' : 'সব প্রবন্ধ দেখুন'}
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                          {filteredBlogs.map((b) => (
                            <article
                              key={b.id}
                              className="bg-white p-7 rounded-2xl border border-[#DCE7EA] shadow-xs hover:shadow-lg hover:border-[#00A6B7] hover:-translate-y-1 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                  <img src={b.icon} alt={b.category} className="w-20 h-13 p-1.5 object-contain bg-[#E7F5F6] rounded-2xl" />
                                  <span className="num-font text-xs font-extrabold text-[#008C9E] bg-[#E7F5F6] px-3 py-1 rounded-lg">
                                    Blog {b.num}
                                  </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                                  <span className="text-xs font-bold text-[#087F8C]">{b.category}</span>
                                </div>
                                <h2 className="text-lg font-bold text-[#172B35] mb-2.5 leading-snug">
                                  {lang === 'en' ? b.titleEn : b.titleBn}
                                </h2>
                                <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3 mb-4">
                                  {lang === 'en' ? b.introEn : b.introBn}
                                </p>
                              </div>

                              <div className="pt-4 border-t border-[#DCE7EA]/70 flex items-center justify-between gap-2">
                                <button
                                  onClick={() => {
                                    setSelectedBlogId(b.id);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className="text-[#008C9E] font-bold text-sm inline-flex items-center gap-1 hover:underline"
                                >
                                  <span>{lang === 'en' ? 'Read Full Article' : 'পুরো প্রবন্ধ পড়ুন'}</span>
                                  <ChevronRight size={16} />
                                </button>
                                <span className="num-font text-[11px] text-[#64748B] truncate max-w-[130px]" title={b.slug}>
                                  /{b.slug}
                                </span>
                              </div>
                            </article>
                          ))}
                        </div>
                      )}

                      {/* Medical Disclaimer */}
                      <div className="mb-10 p-5 rounded-2xl bg-[#E7F5F6] border border-[#DCE7EA] text-xs sm:text-sm text-[#172B35] leading-relaxed">
                        <strong className="text-[#087F8C]">Medical Disclaimer:</strong>{' '}
                        {lang === 'en'
                          ? 'These blogs are intended for general health awareness only. They are not a substitute for personal diagnosis or direct medical consultation.'
                          : 'এই ব্লগগুলো সাধারণ স্বাস্থ্যসচেতনতামূলক তথ্যের জন্য। এগুলো ব্যক্তিগত রোগ নির্ণয় বা চিকিৎসকের সরাসরি পরামর্শের বিকল্প নয়।'}
                      </div>
                    </>
                  )}

                  {/* Featured Facebook Health Awareness Posts */}
                  <div className="mt-10 pt-10 border-t border-[#DCE7EA]">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                      <div>
                        <span className="text-xs font-bold text-[#008C9E] block mb-1">
                          {lang === 'en' ? 'Featured Social Updates' : 'ফেসবুক স্বাস্থ্য সচেতনতা পোস্ট'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#172B35]">
                          {lang === 'en' ? 'Latest Health Awareness Posts on Facebook' : 'অফিসিয়াল ফেসবুক পেজ থেকে স্বাস্থ্য সচেতনতা'}
                        </h2>
                      </div>
                      <a
                        href="https://www.facebook.com/sadiaarmindr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#008C9E] hover:underline inline-flex items-center gap-1.5 shrink-0"
                      >
                        <Facebook size={16} />
                        <span>facebook.com/sadiaarmindr</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {FACEBOOK_BLOG_POSTS.map((fbPost) => (
                        <a
                          key={fbPost.id}
                          href={fbPost.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-white rounded-2xl border border-[#DCE7EA] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#00A6B7] transition-all flex flex-col"
                        >
                          <div className="aspect-[16/10] bg-[#E7F5F6] overflow-hidden border-b border-[#DCE7EA]">
                            <SafeMediaImage
                              src={fbPost.img}
                              alt={lang === 'en' ? fbPost.titleEn : fbPost.titleBn}
                              fallbackIcon={fbPost.fallbackIcon}
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <p className="text-xs font-bold text-[#087F8C] mb-1.5">{fbPost.cat}</p>
                              <h3 className="text-lg font-bold text-[#172B35] mb-2 leading-snug">
                                {lang === 'en' ? fbPost.titleEn : fbPost.titleBn}
                              </h3>
                              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                                {lang === 'en' ? fbPost.descEn : fbPost.descBn}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#008C9E] group-hover:underline">
                              <Facebook size={15} />
                              <span>{lang === 'en' ? 'Read Post on Facebook' : 'ফেসবুকে পোস্টটি দেখুন'}</span>
                              <ArrowRight size={15} />
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Doctor Health Awareness Videos */}
                  <div className="mt-10 pt-10 border-t border-[#DCE7EA] mb-10">
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008C9E] mb-1">
                        <PlayCircle size={15} />
                        <span>{lang === 'en' ? 'Video Awareness Series' : 'স্বাস্থ্য সচেতনতা ভিডিও'}</span>
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#172B35]">
                        {lang === 'en' ? 'Doctor Health Awareness Videos' : 'চিকিৎসকের স্বাস্থ্য সচেতনতামূলক ভিডিও'}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      {/* Awareness Video 1 (Landscape 560x314) */}
                      <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DCE7EA] overflow-hidden flex flex-col justify-between">
                        <div className="bg-[#E7F5F6]/70 p-4 sm:p-6 flex items-center justify-center flex-1 border-b border-[#DCE7EA]">
                          <div className="w-full max-w-[560px] aspect-[560/314] rounded-xl overflow-hidden bg-slate-900/5 border border-[#DCE7EA]">
                            <iframe
                              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1381748053933325%2F&show_text=false&width=560&t=0"
                              title={lang === 'en' ? 'Surgical Awareness Video 01' : 'স্বাস্থ্য সচেতনতা ভিডিও ০১'}
                              className="w-full h-full border-0 overflow-hidden"
                              scrolling="no"
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              allowFullScreen={true}
                            />
                          </div>
                        </div>
                        <div className="p-6 flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="num-font text-xs font-bold text-[#008C9E]">Video 01</span>
                            <h3 className="text-base sm:text-lg font-bold text-[#172B35]">
                              {lang === 'en' ? 'Health Awareness & Early Consultation' : 'স্বাস্থ্য সচেতনতা ও সময়মতো পরামর্শ'}
                            </h3>
                          </div>
                          <a
                            href="https://www.facebook.com/reel/1381748053933325/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#008C9E] hover:underline shrink-0"
                          >
                            <Facebook size={15} />
                            <span>{lang === 'en' ? 'Watch on Facebook' : 'ফেসবুকে দেখুন'}</span>
                          </a>
                        </div>
                      </div>

                      {/* Awareness Video 2 (Vertical Reel 267x476) */}
                      <div className="lg:col-span-5 bg-white rounded-2xl border border-[#DCE7EA] overflow-hidden flex flex-col justify-between">
                        <div className="bg-[#E7F5F6]/70 p-4 sm:p-6 flex items-center justify-center flex-1 border-b border-[#DCE7EA]">
                          <div className="w-[267px] max-w-full aspect-[267/476] rounded-xl overflow-hidden bg-slate-900/5 border border-[#DCE7EA] shadow-xs">
                            <iframe
                              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1138323695222653%2F&show_text=false&width=267&t=0"
                              title={lang === 'en' ? 'Surgical Awareness Video 02' : 'স্বাস্থ্য সচেতনতা ভিডিও ০২'}
                              className="w-full h-full border-0 overflow-hidden"
                              scrolling="no"
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              allowFullScreen={true}
                            />
                          </div>
                        </div>
                        <div className="p-6 flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="num-font text-xs font-bold text-[#008C9E]">Video 02</span>
                            <h3 className="text-base sm:text-lg font-bold text-[#172B35]">
                              {lang === 'en' ? 'Patient Awareness Short Reel' : 'রোগী সচেতনতা সংক্ষিপ্ত ভিডিও'}
                            </h3>
                          </div>
                          <a
                            href="https://www.facebook.com/reel/1138323695222653/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#008C9E] hover:underline shrink-0"
                          >
                            <Facebook size={15} />
                            <span>{lang === 'en' ? 'Watch on Facebook' : 'ফেসবুকে দেখুন'}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Page Tile */}
                  <a
                    href="https://www.facebook.com/sadiaarmindr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#008C9E] to-[#087F8C] text-white p-7 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                        <Facebook size={28} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">{lang === 'en' ? 'Follow on Facebook for Daily Health Tips' : 'নিয়মিত স্বাস্থ্য পরামর্শের জন্য ফেসবুকে যুক্ত হোন'}</h3>
                        <p className="num-font text-sm text-[#E7F5F6]">facebook.com/sadiaarmindr</p>
                      </div>
                    </div>
                    <span className="bg-white text-[#087F8C] px-6 py-3 rounded-xl font-bold text-sm shrink-0">
                      {lang === 'en' ? 'Visit Facebook Page' : 'ফেসবুক পেজ দেখুন'}
                    </span>
                  </a>
                </div>
              </section>
            )}

            {view === 'journals' && (
              <section className="py-14 md:py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                  <h1 className="text-2xl md:text-4xl font-bold text-center mb-3">{t.journalsTitle}</h1>
                  <p className="text-center text-[#64748B] text-sm sm:text-base mb-10">{t.journalsNotice}</p>

                  <div className="space-y-6">
                    {[
                      {
                        num: '01',
                        journal: 'Volume 9, Number 1 · January 2021',
                        title: 'Clinical Research Publication · 2021',
                        headline: 'Nipple Discharge: Evidence-Based Observation from Department of Surgery, Ad-din Hospital',
                        subHeadline: "A Prospective Study Assessing the Causes, Clinical Presentation, Diagnostic Findings, and Management of Nipple Discharge in Patients Attending Ad-din Women's Medical College Hospital.",
                        viewUrl: 'https://drive.google.com/file/d/1nnykPzmLQx7SCReIh3Ub2jnIiauXN-Sj/view?usp=drive_link',
                        downloadUrl: 'https://drive.google.com/uc?export=download&id=1nnykPzmLQx7SCReIh3Ub2jnIiauXN-Sj'
                      },
                      {
                        num: '02',
                        journal: 'Volume 9, Number 1 · January 2021',
                        title: 'Clinical Research Publication · 2021',
                        headline: 'Nipple Discharge: Evidence-Based Observation from Department of Surgery, Ad-din Hospital',
                        subHeadline: "A Prospective Study Assessing the Causes, Clinical Presentation, Diagnostic Findings, and Management of Nipple Discharge in Patients Attending Ad-din Women's Medical College Hospital.",
                        viewUrl: 'https://drive.google.com/file/d/1nYwk8_jT2xe-RChLR92cG0CSRzyo_05k/view?usp=drive_link',
                        downloadUrl: 'https://drive.google.com/uc?export=download&id=1nYwk8_jT2xe-RChLR92cG0CSRzyo_05k'
                      }
                    ].map((pub, idx) => (
                      <article
                        key={idx}
                        className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE7EA] hover:border-[#008C9E] shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5"
                      >
                        <div className="bg-[#E7F5F6] p-3.5 rounded-xl text-[#008C9E] shrink-0 flex flex-col items-center justify-center border border-[#DCE7EA]">
                          <BookOpen size={22} />
                          <span className="num-font text-[10px] font-extrabold text-[#087F8C] mt-1">{pub.num}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="num-font inline-flex items-center px-3 py-1 rounded-lg bg-[#E7F5F6] text-[#087F8C] text-xs font-bold border border-[#DCE7EA]">
                              {pub.journal}
                            </span>
                            <span className="num-font text-xs font-semibold text-[#008C9E]">
                              {pub.title}
                            </span>
                          </div>
                          <h2 className="text-lg sm:text-xl font-bold text-[#172B35] leading-snug mb-2">
                            {pub.headline}
                          </h2>
                          <p className="text-sm text-[#475569] leading-relaxed mb-5">
                            {pub.subHeadline}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <a
                              href={pub.downloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#008C9E] hover:bg-[#087F8C] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all"
                            >
                              <Download size={15} />
                              <span>{lang === 'en' ? 'Download Publication' : 'ডাউনলোড করুন'}</span>
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {view === 'gallery' && (
              <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">{t.galleryTitle}</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { src: 'https://lh3.googleusercontent.com/d/1xAxp0z7c53MA6c2J6f4dGWEizdVMY9aw', en: 'Professor Dr. Sadia Armin Khan', bn: 'অধ্যাপক ডা. সাদিয়া আরমিন খান' },
                      { src: 'https://lh3.googleusercontent.com/d/1ExuvmSm1cIlSFUuwk87VfLIrRdprte78', en: 'Clinical & Academic Presence', bn: 'ক্লিনিক্যাল ও একাডেমিক কার্যক্রম' },
                      { src: 'https://lh3.googleusercontent.com/d/1fLMl87gmJEaJC8QQ3Bdb5KAeVaeMWz5M', en: 'Professional Portrait', bn: 'প্রফেশনাল পোর্ট্রেট' },
                      { src: 'https://lh3.googleusercontent.com/d/1PMbrVvC3LsVHQP-0LNVqqfDr7i9hzZLn', en: 'Surgical Consultation & Chamber', bn: 'সার্জিক্যাল পরামর্শ ও চেম্বার' },
                      { src: 'https://lh3.googleusercontent.com/d/1AGm-Jsp6H5x6wZi7N0GD8uBI8Et0yh1S', en: 'Academic Mentoring with Medical Students', bn: 'মেডিকেল শিক্ষার্থীদের সাথে একাডেমিক কার্যক্রম' },
                      { src: 'https://lh3.googleusercontent.com/d/1ewQikdPzsIobb7ximHhh4GjgLpCWiSQe', en: 'Clinical Teaching & Student Session', bn: 'মেডিকেল শিক্ষার্থীদের সাথে ক্লিনিক্যাল টিচিং' }
                    ].map((g, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxImg({ src: g.src, title: lang === 'en' ? g.en : g.bn })}
                        className="text-left bg-white p-4 rounded-2xl border border-[#DCE7EA] shadow-xs hover:shadow-xl transition-all group overflow-hidden"
                      >
                        <div className="overflow-hidden rounded-xl mb-3 bg-[#E7F5F6]">
                          <img src={g.src} alt={g.en} referrerPolicy="no-referrer" className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="font-bold text-center text-sm sm:text-base">{lang === 'en' ? g.en : g.bn}</h3>
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {view === 'contact' && (
              <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-[#087F8C] text-white p-7 md:p-10 rounded-3xl shadow-xl flex flex-col justify-start space-y-6">
                    <span className="inline-block bg-white/15 px-3.5 py-1 rounded-full text-xs font-bold w-fit">{t.contactSub}</span>
                    <h1 className="text-2xl md:text-3xl font-bold">{t.contactTitle}</h1>
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="shrink-0 mt-1 text-[#E7F5F6]" />
                        <div>
                          <p className="font-bold">{t.chamberName}</p>
                          <p className="num-font text-sm text-[#E7F5F6]">{t.chamberAddr}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="shrink-0 mt-1 text-[#E7F5F6]" />
                        <div className="num-font text-sm text-[#E7F5F6]">
                          {t.visitingTime.split('|').map((part, idx) => (
                            <span key={idx} className="block">{part.trim()}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <Phone size={20} className="shrink-0 text-[#E7F5F6]" />
                        <a href="tel:+8801779224452" className="num-font text-xl sm:text-2xl font-extrabold tracking-tight hover:underline">{t.phone}</a>
                      </div>
                      <div className="pt-2">
                        <a
                          href="https://www.facebook.com/sadiaarmindr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all"
                        >
                          <Facebook size={18} />
                          <span>{lang === 'en' ? 'Facebook Page' : 'ফেসবুক পেজ'}</span>
                        </a>
                      </div>
                    </div>

                    {/* Interactive Chamber Map directly below Chamber Information */}
                    <ChamberMap
                      lang={lang}
                      chamberName={t.chamberName}
                      chamberAddress={t.chamberAddr}
                    />
                  </div>

                  <div className="bg-white p-7 md:p-10 rounded-3xl border border-[#DCE7EA] shadow-sm">
                    <h2 className="text-xl sm:text-2xl font-bold mb-5">{t.formTitle}</h2>
                    {formStatus && (
                      <div className={`p-4 rounded-xl mb-5 text-sm font-medium ${formStatus.type === 'success' ? 'bg-teal-50 text-teal-800 border border-teal-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        <p>{formStatus.msg}</p>
                        {formStatus.waUrl && (
                          <a
                            href={formStatus.waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm transition-all"
                          >
                            {lang === 'en' ? 'Send via WhatsApp' : 'WhatsApp-এ পাঠান'}
                          </a>
                        )}
                      </div>
                    )}
                    <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">{t.formName}</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#DCE7EA] focus:outline-none focus:border-[#008C9E]" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">{t.formPhone}</label>
                        <input type="tel" placeholder="01XXXXXXXXX" className="num-font w-full px-4 py-3 rounded-xl border border-[#DCE7EA] focus:outline-none focus:border-[#008C9E]" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-1.5">{t.formDate}</label>
                          <input type="date" className="num-font w-full px-4 py-3 rounded-xl border border-[#DCE7EA] focus:outline-none focus:border-[#008C9E]" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1.5">{t.formDept}</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-[#DCE7EA] bg-white focus:outline-none focus:border-[#008C9E]" value={formData.dept} onChange={(e) => setFormData({ ...formData, dept: e.target.value })}>
                            <option value="Breast Surgery">{lang === 'en' ? 'Breast Surgery' : 'ব্রেস্ট সার্জারি'}</option>
                            <option value="Piles & Colorectal Surgery">{lang === 'en' ? 'Piles & Colorectal Surgery' : 'পাইলস ও কলোরেক্টাল সার্জারি'}</option>
                            <option value="Laparoscopic Surgery">{lang === 'en' ? 'Laparoscopic Surgery' : 'ল্যাপারোস্কোপিক সার্জারি'}</option>
                            <option value="General Surgical Consultation">{lang === 'en' ? 'General Surgical Consultation' : 'সাধারণ সার্জারি পরামর্শ'}</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">{t.formMsg}</label>
                        <textarea rows={2} className="w-full px-4 py-3 rounded-xl border border-[#DCE7EA] focus:outline-none focus:border-[#008C9E]" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                      </div>
                      <div className="flex items-start gap-2.5">
                        <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} className="mt-1" />
                        <span className="text-xs text-[#64748B]">{t.formConsent}</span>
                      </div>
                      <button type="submit" className="w-full bg-[#008C9E] hover:bg-[#087F8C] text-white py-3.5 rounded-xl font-bold transition-all">
                        {t.formSubmit}
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[120] bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl max-w-lg w-full p-5 relative shadow-2xl">
              <button onClick={() => setLightboxImg(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#E7F5F6] text-[#172B35] flex items-center justify-center font-bold">
                <X size={18} />
              </button>
              <img src={lightboxImg.src} alt={lightboxImg.title} referrerPolicy="no-referrer" className="w-full max-h-[70vh] object-contain rounded-2xl mb-3" />
              <p className="font-bold text-center text-[#172B35]">{lightboxImg.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep Teal 4-Column Footer */}
      <footer className="bg-gradient-to-b from-[#087F8C] to-[#055862] text-[#E7F5F6] pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src="https://lh3.googleusercontent.com/d/1xAxp0z7c53MA6c2J6f4dGWEizdVMY9aw" alt={t.doctorName} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover bg-white border-2 border-white/30" />
                <div>
                  <h3 className="font-bold text-white text-base">{t.doctorName}</h3>
                  <p className="text-xs opacity-90">{t.designation}</p>
                </div>
              </div>
              <p className="num-font text-xs opacity-90 mb-2">{t.qualifications}</p>
              <p className="text-xs opacity-85">{t.hospital}</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">{lang === 'en' ? 'Quick Links' : 'দ্রুত লিংক'}</h4>
              <ul className="space-y-2 text-sm">
                {(['home', 'about', 'services', 'blogs', 'journals', 'gallery', 'contact'] as const).map((p) => (
                  <li key={p}>
                    <button onClick={() => navigate(p)} className="hover:text-white hover:underline">{t.nav[p]}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm">
                {ALL_SERVICES.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <button onClick={() => navigate('services')} className="hover:text-white hover:underline">{lang === 'en' ? s.en : s.bn}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">{t.nav.contact}</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>{t.chamberName}</strong><br /><span className="num-font">{t.chamberAddr}</span></li>
                <li className="num-font font-bold text-white">{t.phone}</li>
                <li className="num-font text-xs opacity-90">
                  {t.visitingTime.split('|').map((part, idx) => (
                    <span key={idx} className="block">{part.trim()}</span>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-90">
            <p>{t.disclaimer}</p>
            <span className="num-font">&copy; {new Date().getFullYear()} Professor Dr. Sadia Armin Khan. {t.rights}</span>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center text-xs text-[#E7F5F6]/80">
            Presented by <span className="font-semibold text-white">Hashtore</span>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 bg-white text-[#008C9E] p-3 rounded-full shadow-lg border border-[#DCE7EA] hover:bg-[#008C9E] hover:text-white transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating WhatsApp Button — Icon Only */}
      <a
        href="https://wa.me/8801779224452"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 hover:scale-105 transition-all"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.188.109-1.922-.125-.453-.141-1.031-.328-1.766-.656-3.094-1.344-5.109-4.469-5.266-4.672-.156-.203-1.266-1.688-1.266-3.219s.797-2.281 1.078-2.594c.281-.313.609-.391.813-.391.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.328-.313.516-.156.188-.328.406-.469.547-.156.156-.313.328-.141.625.172.297.766 1.266 1.656 2.047 1.141 1.016 2.094 1.328 2.391 1.484.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.703.813 1.984.953.281.141.469.219.547.344.078.125.078.734-.172 1.438z" />
        </svg>
      </a>
    </div>
  );
}
