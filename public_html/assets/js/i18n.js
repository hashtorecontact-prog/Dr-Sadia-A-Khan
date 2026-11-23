/**
 * Bilingual Translation System (Bangla Default & English) + Interactive UI Handlers
 * Professor Dr. Sadia Armin Khan
 */

const TRANSLATIONS = {
  bn: {
    brand_name: "প্রফেসর ডা. সাদিয়া আরমিন খান",
    nav_home: "হোম",
    nav_about: "পরিচিতি",
    nav_services: "সেবাসমূহ",
    nav_blogs: "ব্লগ",
    nav_journals: "জার্নাল",
    nav_gallery: "গ্যালারি",
    nav_contact: "যোগাযোগ",
    nav_appointment: "অ্যাপয়েন্টমেন্ট",

    hero_designation: "প্রফেসর (সিসি), সার্জারি বিভাগ",
    hero_name: "প্রফেসর ডা. সাদিয়া আরমিন খান",
    hero_qualifications: "MBBS (DMC), FCPS (Surgery), MRCS (Edin), FMAS (India)",
    hero_hospital: "হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল",
    hero_cta_appointment: "অ্যাপয়েন্টমেন্ট অনুরোধ",
    hero_cta_services: "সেবাসমূহ দেখুন",
    hero_exp_1: "ব্রেস্ট সার্জারি",
    hero_exp_2: "পাইলস ও কলোরেক্টাল সার্জারি",
    hero_exp_3: "ল্যাপারোস্কোপিক সার্জারি",

    sec_expertise_kicker: "বিশেষজ্ঞতা",
    sec_expertise_title: "চিকিৎসা ও সার্জারি বিশেষজ্ঞতা",
    sec_expertise_sub: "আধুনিক, নিরাপদ এবং রোগী-কেন্দ্রিক সার্জিক্যাল চিকিৎসা সেবা।",

    sec_about_kicker: "ডাক্তার পরিচিতি",
    sec_about_title: "প্রফেসর ডা. সাদিয়া আরমিন খান সম্পর্কে",
    sec_about_desc: "প্রফেসর ডা. সাদিয়া আরমিন খান বাংলাদেশের একজন অভিজ্ঞ নারী সার্জন এবং মেডিকেল শিক্ষক। তিনি বর্তমানে হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতালের সার্জারি বিভাগে প্রফেসর (সিসি) হিসেবে দায়িত্ব পালন করছেন।",
    btn_read_more: "বিস্তারিত জানুন",

    sec_services_kicker: "চিকিৎসা সেবাসমূহ",
    sec_services_title: "বিশেষায়িত সার্জিক্যাল সেবাসমূহ",
    sec_services_sub: "রোগ নির্ণয় থেকে শুরু করে আধুনিক সার্জারি ও পরবর্তী যত্ন।",
    btn_all_services: "সকল সেবা দেখুন",

    srv_breast_surgery_title: "ব্রেস্ট সার্জারি",
    srv_breast_surgery_desc: "স্তনের টিউমার, চাকা এবং অন্যান্য সার্জিক্যাল সমস্যার আধুনিক ও যত্নশীল চিকিৎসা।",
    srv_breast_eval_title: "ব্রেস্ট ডিজিজ ইভ্যালুয়েশন",
    srv_breast_eval_desc: "স্তনের ব্যথা, চাকা বা অস্বাভাবিক পরিবর্তনের সঠিক ক্লিনিক্যাল পরীক্ষা ও রোগ নির্ণয়।",
    srv_breast_abscess_title: "ব্রেস্ট ইনফেকশন ও অ্যাবসেস চিকিৎসা",
    srv_breast_abscess_desc: "স্তনের সংক্রমণ ও ফোঁড়ার (অ্যাবসেস) নিরাপদ চিকিৎসা এবং সঠিক পরামর্শ।",
    srv_piles_title: "পাইলস চিকিৎসা",
    srv_piles_desc: "অর্শ বা পাইলস, ফিশার ও ফিস্টুলার আধুনিক ও কম ব্যথাদায়ক চিকিৎসা পদ্ধতি।",
    srv_colorectal_title: "কলোরেক্টাল সার্জারি",
    srv_colorectal_desc: "বৃহদন্ত্র ও পায়ুপথের বিভিন্ন জটিল সার্জিক্যাল সমস্যার বিশেষায়িত চিকিৎসা।",
    srv_laparoscopic_title: "ল্যাপারোস্কোপিক সার্জারি",
    srv_laparoscopic_desc: "ছোট ছিদ্রের মাধ্যমে আধুনিক মিনিম্যালি ইনভেসিভ সার্জারি, যা দ্রুত আরোগ্য লাভে সহায়ক।",

    sec_blogs_kicker: "স্বাস্থ্য সচেতনতা",
    sec_blogs_title: "সর্বশেষ স্বাস্থ্য প্রবন্ধ ও ব্লগ",
    btn_all_blogs: "সব প্রবন্ধ দেখুন",
    btn_read_article: "পুরো প্রবন্ধ পড়ুন",

    sec_edu_kicker: "রোগী সচেতনতা",
    sec_edu_title: "নারী স্বাস্থ্য ও সার্জারি সচেতনতা",
    sec_edu_desc: "সঠিক সময়ে রোগ নির্ণয় এবং বিশেষজ্ঞ চিকিৎসকের পরামর্শ গ্রহণ সুস্থ জীবনের চাবিকাঠি। স্তন স্বাস্থ্য বা পায়ুপথের যেকোনো সমস্যায় সংকোচ না করে দ্রুত পরামর্শ নিন।",

    cta_title: "বিশেষজ্ঞ সার্জিক্যাল পরামর্শের জন্য অ্যাপয়েন্টমেন্ট অনুরোধ করুন",
    cta_desc: "অনলাইনে আপনার পছন্দের তারিখ ও সময় উল্লেখ করে অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান। আমাদের ক্লিনিক টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।",
    cta_btn: "অ্যাপয়েন্টমেন্ট বুকিং ফর্ম",

    footer_about: "প্রফেসর ডা. সাদিয়া আরমিন খান — প্রফেসর (সিসি), সার্জারি বিভাগ, হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল।",
    footer_quick_links: "দ্রুত লিংক",
    footer_services: "সেবাসমূহ",
    footer_contact: "যোগাযোগের তথ্য",
    footer_disclaimer: "চিকিৎসা সংক্রান্ত তথ্য শুধুমাত্র সাধারণ সচেতনতার জন্য। জরুরি চিকিৎসা সেবার জন্য অনুগ্রহ করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যোগাযোগ করুন।",
    footer_privacy: "গোপনীয়তা নীতি",
    footer_rights: "সর্বস্বত্ব সংরক্ষিত।",
    whatsapp_tooltip: "হোয়াটসঅ্যাপ অ্যাপয়েন্টমেন্ট",

    // Contact & Appointment Form
    contact_title: "যোগাযোগ ও অ্যাপয়েন্টমেন্ট অনুরোধ",
    contact_sub: "চেম্বারের সময়সূচি, ঠিকানা এবং অনলাইন অ্যাপয়েন্টমেন্ট অনুরোধ ফর্ম।",
    chamber_info: "চেম্বার ও হাসপাতালের তথ্য",
    schedule_title: "রোগী দেখার সময়সূচি",
    schedule_note: "সময়সূচি পরিবর্তনশীল। অনুগ্রহ করে আসার আগে ফোন বা হোয়াটসঅ্যাপে নিশ্চিত হয়ে নিন।",
    form_title: "অ্যাপয়েন্টমেন্ট অনুরোধ ফর্ম",
    form_name: "রোগীর নাম *",
    form_phone: "মোবাইল নম্বর (বাংলাদেশ) *",
    form_email: "ইমেইল ঠিকানা (ঐচ্ছিক)",
    form_date: "পছন্দের তারিখ *",
    form_time: "পছন্দের সময় *",
    form_dept: "পরামর্শের ধরন / বিভাগ *",
    form_msg: "সংক্ষিপ্ত বার্তা বা সমস্যার বিবরণ",
    form_consent: "আমি সম্মতি দিচ্ছি যে আমার প্রদত্ত তথ্য শুধুমাত্র অ্যাপয়েন্টমেন্ট যোগাযোগের জন্য ব্যবহৃত হবে। *",
    form_submit: "অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান",
    form_note: "বিঃদ্রঃ এটি একটি অ্যাপয়েন্টমেন্ট অনুরোধ মাত্র। আমাদের ক্লিনিক থেকে ফোন করে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করা হবে।",

    // Blogs & Journals & Gallery
    blog_search_ph: "প্রবন্ধ খুঁজুন...",
    filter_all: "সবগুলো",
    filter_breast: "স্তন স্বাস্থ্য",
    filter_colorectal: "কলোরেক্টাল ও পাইলস",
    filter_lap: "ল্যাপারোস্কোপি",
    journal_notice: "নোট: নিচে প্রদর্শিত জার্নাল ও প্রকাশনাগুলো নমুনা (Placeholder) হিসেবে রাখা হয়েছে। প্রকৃত গবেষণা প্রবন্ধ ও DOI তথ্য যুক্ত হলে তা এখানে হালনাগাদ করা হবে।",
    gallery_title: "গ্যালারি ও পেশাগত কার্যক্রম",
    gallery_sub: "হাসপাতালের পরিবেশ, স্বাস্থ্য সচেতনতা কার্যক্রম এবং একাডেমিক সেমিনার।"
  },
  en: {
    brand_name: "Prof. Dr. Sadia Armin Khan",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_blogs: "Blogs",
    nav_journals: "Journals",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_appointment: "Appointment",

    hero_designation: "Professor (CC), Department of Surgery",
    hero_name: "Professor Dr. Sadia Armin Khan",
    hero_qualifications: "MBBS (DMC), FCPS (Surgery), MRCS (Edin), FMAS (India)",
    hero_hospital: "Holy Family Red Crescent Medical College Hospital",
    hero_cta_appointment: "Appointment Request",
    hero_cta_services: "View Services",
    hero_exp_1: "Breast Surgery",
    hero_exp_2: "Piles & Colorectal Surgery",
    hero_exp_3: "Laparoscopic Surgery",

    sec_expertise_kicker: "Areas of Expertise",
    sec_expertise_title: "Clinical & Surgical Expertise",
    sec_expertise_sub: "Modern, safe, and patient-centered surgical care.",

    sec_about_kicker: "About the Doctor",
    sec_about_title: "About Professor Dr. Sadia Armin Khan",
    sec_about_desc: "Professor Dr. Sadia Armin Khan is an experienced female surgeon and medical professor in Bangladesh. She currently serves as Professor (CC), Department of Surgery at Holy Family Red Crescent Medical College Hospital.",
    btn_read_more: "Read More",

    sec_services_kicker: "Medical Services",
    sec_services_title: "Specialized Surgical Services",
    sec_services_sub: "Comprehensive care from accurate evaluation to modern surgical management.",
    btn_all_services: "View All Services",

    srv_breast_surgery_title: "Breast Surgery",
    srv_breast_surgery_desc: "Modern and compassionate surgical care for breast lumps, tumors, and related conditions.",
    srv_breast_eval_title: "Breast Disease Evaluation",
    srv_breast_eval_desc: "Thorough clinical assessment and diagnostic evaluation for breast pain, lumps, or changes.",
    srv_breast_abscess_title: "Breast Infection & Abscess Treatment",
    srv_breast_abscess_desc: "Safe, evidence-based management of breast infections and abscesses.",
    srv_piles_title: "Piles Treatment",
    srv_piles_desc: "Modern, minimally invasive treatment options for piles (hemorrhoids), fissures, and fistulas.",
    srv_colorectal_title: "Colorectal Surgery",
    srv_colorectal_desc: "Specialized surgical care for complex colorectal and anorectal conditions.",
    srv_laparoscopic_title: "Laparoscopic Surgery",
    srv_laparoscopic_desc: "Keyhole minimally invasive surgical procedures designed for faster recovery.",

    sec_blogs_kicker: "Health Awareness",
    sec_blogs_title: "Latest Health Articles & Blogs",
    btn_all_blogs: "View All Articles",
    btn_read_article: "Read Full Article",

    sec_edu_kicker: "Patient Education",
    sec_edu_title: "Women's Health & Surgical Awareness",
    sec_edu_desc: "Timely diagnosis and specialist consultation are key to a healthy life. Do not hesitate to seek early medical advice for breast health or colorectal concerns.",

    cta_title: "Request an Appointment for Specialist Surgical Consultation",
    cta_desc: "Submit your preferred date and time online. Our clinic team will contact you to confirm your appointment.",
    cta_btn: "Appointment Request Form",

    footer_about: "Professor Dr. Sadia Armin Khan — Professor (CC), Department of Surgery, Holy Family Red Crescent Medical College Hospital.",
    footer_quick_links: "Quick Links",
    footer_services: "Services",
    footer_contact: "Contact Info",
    footer_disclaimer: "Medical information on this website is for general awareness only. For medical emergencies, please contact your nearest hospital emergency department.",
    footer_privacy: "Privacy Policy",
    footer_rights: "All rights reserved.",
    whatsapp_tooltip: "WhatsApp Appointment",

    // Contact & Appointment Form
    contact_title: "Contact & Appointment Request",
    contact_sub: "Chamber schedule, hospital location, and online appointment request form.",
    chamber_info: "Chamber & Hospital Information",
    schedule_title: "Consultation Schedule",
    schedule_note: "Schedule is subject to change. Please confirm via phone or WhatsApp before visiting.",
    form_title: "Appointment Request Form",
    form_name: "Patient Name *",
    form_phone: "Mobile Number (Bangladesh) *",
    form_email: "Email Address (Optional)",
    form_date: "Preferred Appointment Date *",
    form_time: "Preferred Appointment Time *",
    form_dept: "Consultation Type / Department *",
    form_msg: "Brief Message",
    form_consent: "I consent to my submitted information being used solely for appointment coordination. *",
    form_submit: "Submit Appointment Request",
    form_note: "Note: This is an appointment request only. Our clinic will contact you to confirm the final schedule.",

    // Blogs & Journals & Gallery
    blog_search_ph: "Search articles...",
    filter_all: "All",
    filter_breast: "Breast Health",
    filter_colorectal: "Colorectal & Piles",
    filter_lap: "Laparoscopy",
    journal_notice: "Note: The journal entries below are clearly labeled sample placeholders until actual publication details and DOIs are provided.",
    gallery_title: "Gallery & Professional Activities",
    gallery_sub: "Hospital environment, medical awareness activities, and academic seminars."
  }
};

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.bn;
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('site_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Toggle bilingual blocks
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    const blockLang = el.getAttribute('data-lang-block');
    el.style.display = (blockLang === lang) ? '' : 'none';
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('site_lang') || 'en';
  applyLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Blog Category Filter & Search
  const filterTabs = document.querySelectorAll('.filter-tab[data-filter]');
  const blogCards = document.querySelectorAll('.blog-card[data-category]');
  const searchInput = document.getElementById('blogSearchInput');

  function filterBlogs() {
    const activeTab = document.querySelector('.filter-tab.active');
    const category = activeTab ? activeTab.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    blogCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();
      const matchesCat = (category === 'all' || cardCat === category);
      const matchesSearch = (!query || text.includes(query));
      card.style.display = (matchesCat && matchesSearch) ? '' : 'none';
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterBlogs();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterBlogs);
  }

  // Gallery Lightbox
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      if (!lightbox) return;
      lightboxTitle.textContent = item.getAttribute('data-title') || '';
      lightboxDesc.textContent = item.getAttribute('data-desc') || '';
      lightboxImg.setAttribute('src', item.getAttribute('data-src') || '');
      lightbox.classList.add('open');
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
  }
});
