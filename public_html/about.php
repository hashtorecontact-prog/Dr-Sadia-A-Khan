<?php
$pageTitle = 'About | Professor Dr. Sadia Armin Khan';
$pageDesc  = 'Biography, verified qualifications, and clinical expertise of Professor Dr. Sadia Armin Khan.';
include __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-banner">
    <div class="container">
      <h1 data-i18n="sec_about_title">প্রফেসর ডা. সাদিয়া আরমিন খান সম্পর্কে</h1>
      <p data-i18n="hero_designation">প্রফেসর (সিসি), সার্জারি বিভাগ — হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container hero-grid">
      <div class="hero-portrait-wrap">
        <img src="assets/svg/doctor-portrait-placeholder.svg" alt="Professor Dr. Sadia Armin Khan" width="400" height="480">
      </div>

      <div>
        <span class="section-kicker" data-i18n="sec_about_kicker">ডাক্তার পরিচিতি</span>
        <h2 style="margin-bottom: 16px;" data-i18n="hero_name">প্রফেসর ডা. সাদিয়া আরমিন খান</h2>

        <div data-lang-block="bn">
          <p class="card-text" style="margin-bottom: 16px;">
            প্রফেসর ডা. সাদিয়া আরমিন খান বাংলাদেশের একজন সুপরিচিত ও অভিজ্ঞ নারী সার্জন এবং মেডিকেল অধ্যাপক। তিনি বর্তমানে হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতালের সার্জারি বিভাগে প্রফেসর (সিসি) হিসেবে কর্মরত আছেন।
          </p>
          <p class="card-text" style="margin-bottom: 24px;">
            রোগীদের প্রতি আন্তরিকতা, আধুনিক সার্জিক্যাল দক্ষতা এবং চিকিৎসা শিক্ষায় তাঁর অবদান উল্লেখযোগ্য। বিশেষ করে নারী রোগীদের স্তন স্বাস্থ্য, পাইলস ও কলোরেক্টাল সমস্যা এবং ল্যাপারোস্কোপিক সার্জারিতে তিনি বিশেষজ্ঞ সেবা প্রদান করে থাকেন।
          </p>
        </div>

        <div data-lang-block="en" style="display:none;">
          <p class="card-text" style="margin-bottom: 16px;">
            Professor Dr. Sadia Armin Khan is a senior female surgeon and medical professor in Bangladesh. She currently serves as Professor (CC) in the Department of Surgery at Holy Family Red Crescent Medical College Hospital.
          </p>
          <p class="card-text" style="margin-bottom: 24px;">
            Known for her compassionate, patient-centered approach and surgical precision, she specializes in Breast Surgery, Piles and Colorectal Surgery, and Laparoscopic Surgery.
          </p>
        </div>

        <div class="card" style="margin-bottom: 24px;">
          <h3 class="card-title" data-lang-block="bn">শিক্ষাগত যোগ্যতা</h3>
          <h3 class="card-title" data-lang-block="en" style="display:none;">Educational Qualifications</h3>
          <ul class="num-font" style="padding-left: 20px; color: var(--muted-grey); line-height: 1.9;">
            <li><strong>MBBS (DMC)</strong> — Dhaka Medical College</li>
            <li><strong>FCPS (Surgery)</strong> — Bangladesh College of Physicians and Surgeons</li>
            <li><strong>MRCS (Edin)</strong> — Royal College of Surgeons of Edinburgh</li>
            <li><strong>FMAS (India)</strong> — Fellowship in Minimal Access Surgery</li>
          </ul>
        </div>

        <a href="contact.php#appointment" class="btn btn-primary" data-i18n="hero_cta_appointment">অ্যাপয়েন্টমেন্ট অনুরোধ</a>
      </div>
    </div>
  </section>

  <!-- Frequently Asked Questions Section -->
  <section class="section-pad" id="faq" style="background: var(--soft-aqua); border-top: 1px solid var(--border-mist);">
    <div class="container" style="max-width: 900px;">
      <div class="section-header" style="text-align: center; margin-bottom: 36px;">
        <span class="section-kicker" data-lang-block="bn">রোগীদের সাধারণ জিজ্ঞাসা</span>
        <span class="section-kicker" data-lang-block="en" style="display:none;">Patient Guidance</span>
        <h2 data-lang-block="bn">সাধারণ জিজ্ঞাসা (FAQ)</h2>
        <h2 data-lang-block="en" style="display:none;">Frequently Asked Questions</h2>
        <p class="card-text" data-lang-block="bn">পরামর্শ প্রস্তুতি, সার্জারির আগের নিয়ম এবং বিলিং ও ইন্স্যুরেন্স সংক্রান্ত প্রয়োজনীয় প্রশ্নের উত্তর।</p>
        <p class="card-text" data-lang-block="en" style="display:none;">Helpful answers regarding consultation preparation, surgery readiness, and billing/insurance queries.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <details class="card" open style="padding: 18px 22px; cursor: pointer;">
          <summary style="font-weight: 700; color: var(--deep-teal); font-size: 1.05rem; list-style: none; display: flex; justify-content: space-between; align-items: center;">
            <span data-lang-block="bn">১. কনসালটেশনে আসার সময় কী কী সঙ্গে আনতে হবে?</span>
            <span data-lang-block="en" style="display:none;">1. What should I bring to my consultation?</span>
            <span style="color: var(--primary-teal); font-weight: 700;">+</span>
          </summary>
          <p class="card-text num-font" data-lang-block="bn" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            পূর্বের প্রেসক্রিপশন, সাম্প্রতিক রক্ত পরীক্ষার রিপোর্ট, আল্ট্রাসাউন্ড/ম্যামোগ্রাম/সিটি বা এমআরআই রিপোর্ট ও ফিল্ম, কোনো বায়োপসি বা FNAC রিপোর্ট থাকলে তা এবং বর্তমানে নিয়মিত খাওয়া ওষুধের (বিশেষত রক্ত পাতলা করার ওষুধ, ডায়াবেটিস ও প্রেশারের ওষুধ) তালিকা সঙ্গে নিয়ে আসবেন।
          </p>
          <p class="card-text num-font" data-lang-block="en" style="display:none; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            Please bring previous prescriptions, recent lab reports, imaging films and reports (Ultrasound, Mammogram, CT, or MRI), any prior biopsy/FNAC reports, and a complete list of your current medications (especially blood thinners, diabetes, or blood pressure medicines).
          </p>
        </details>

        <details class="card" style="padding: 18px 22px; cursor: pointer;">
          <summary style="font-weight: 700; color: var(--deep-teal); font-size: 1.05rem; list-style: none; display: flex; justify-content: space-between; align-items: center;">
            <span data-lang-block="bn">২. নির্ধারিত অপারেশন বা সার্জারির আগে কীভাবে প্রস্তুতি নিতে হয়?</span>
            <span data-lang-block="en" style="display:none;">2. How should I prepare for a scheduled surgery?</span>
            <span style="color: var(--primary-teal); font-weight: 700;">+</span>
          </summary>
          <p class="card-text num-font" data-lang-block="bn" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            অপারেশনের আগে অ্যানেস্থেশিয়া ফিটনেস পরীক্ষার (CBC, ব্লাড সুগার, ECG, Chest X-Ray ইত্যাদি) রিপোর্ট যাচাই করা হয়। চিকিৎসকের নির্দেশনা অনুযায়ী অপারেশনের আগে সাধারণত 6–8 ঘণ্টা খালি পেটে থাকতে হয়। রক্ত পাতলা করার ওষুধ থাকলে ডাক্তারের পরামর্শ অনুযায়ী বিরতি দিন এবং ভর্তির সময় একজন অভিভাবক সঙ্গে রাখুন।
          </p>
          <p class="card-text num-font" data-lang-block="en" style="display:none; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            Pre-operative anesthesia fitness tests (such as CBC, blood sugar, ECG, and chest X-ray) are reviewed beforehand. Follow fasting instructions carefully (typically 6–8 hours without food or water as directed), adjust blood thinners only upon medical advice, and bring a family attendant on admission day.
          </p>
        </details>

        <details class="card" style="padding: 18px 22px; cursor: pointer;">
          <summary style="font-weight: 700; color: var(--deep-teal); font-size: 1.05rem; list-style: none; display: flex; justify-content: space-between; align-items: center;">
            <span data-lang-block="bn">৩. পরামর্শ ফি, সার্জারির বিলিং ও মেডিকেল ইন্স্যুরেন্সের নিয়ম কী?</span>
            <span data-lang-block="en" style="display:none;">3. How do consultation fees, surgical billing, and medical insurance work?</span>
            <span style="color: var(--primary-teal); font-weight: 700;">+</span>
          </summary>
          <p class="card-text num-font" data-lang-block="bn" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            চেম্বার পরামর্শ ফি পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড (ধানমন্ডি)-এর রিসেপশন ডেস্কে জমা দিতে হয়। অপারেশন প্রয়োজন হলে ভর্তির আগেই হাসপাতাল ও সার্জারির সম্ভাব্য খরচের ধারণা দেওয়া হয়। কর্পোরেট বা হেলথ ইন্স্যুরেন্স ক্লেইমের জন্য প্রয়োজনীয় বিল, ডিসচার্জ সামারি ও মেডিকেল সনদ সরবরাহ করা হয়—কভারেজের বিষয়ে আপনার ইন্স্যুরেন্স কোম্পানি ও হাসপাতাল বিলিং ডেস্কে আগে থেকেই যাচাই করুন।
          </p>
          <p class="card-text num-font" data-lang-block="en" style="display:none; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            Chamber consultation fees are settled at the Popular Diagnostic Centre Ltd. (Dhanmondi) reception desk. If surgery is advised, estimated hospital and surgical package details are explained prior to admission. Itemized bills and discharge summaries are provided for corporate/health insurance reimbursement; please confirm policy coverage with your insurer and the hospital billing desk.
          </p>
        </details>

        <details class="card" style="padding: 18px 22px; cursor: pointer;">
          <summary style="font-weight: 700; color: var(--deep-teal); font-size: 1.05rem; list-style: none; display: flex; justify-content: space-between; align-items: center;">
            <span data-lang-block="bn">৪. ব্রেস্ট ও পাইলস পরীক্ষায় কি গোপনীয়তা বজায় রাখা হয়?</span>
            <span data-lang-block="en" style="display:none;">4. Is privacy maintained during breast and colorectal examinations?</span>
            <span style="color: var(--primary-teal); font-weight: 700;">+</span>
          </summary>
          <p class="card-text" data-lang-block="bn" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            হ্যাঁ। অধ্যাপক ডা. সাদিয়া আরমিন খানের তত্ত্বাবধানে প্রতিটি রোগীর পরামর্শ ও পরীক্ষা সম্পূর্ণ গোপনীয়তা ও প্রয়োজনীয় নারী সহকারীর উপস্থিতিতে সম্পন্ন করা হয়।
          </p>
          <p class="card-text" data-lang-block="en" style="display:none; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            Yes. All consultations and physical examinations are conducted in a calm, respectful, private environment led by Professor Dr. Sadia Armin Khan with female clinical assistance whenever needed.
          </p>
        </details>

        <details class="card" style="padding: 18px 22px; cursor: pointer;">
          <summary style="font-weight: 700; color: var(--deep-teal); font-size: 1.05rem; list-style: none; display: flex; justify-content: space-between; align-items: center;">
            <span data-lang-block="bn">৫. ল্যাপারোস্কোপিক সার্জারির পর সুস্থ হতে কতদিন লাগে ও চেম্বার কখন খোলা থাকে?</span>
            <span data-lang-block="en" style="display:none;">5. What is recovery time after laparoscopic surgery and what are chamber hours?</span>
            <span style="color: var(--primary-teal); font-weight: 700;">+</span>
          </summary>
          <p class="card-text num-font" data-lang-block="bn" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            ছোট ছিদ্রের ল্যাপারোস্কোপিক সার্জারির পর সাধারণত ২৪–৪৮ ঘণ্টার মধ্যে ছুটি এবং ১–২ সপ্তাহে হালকা স্বাভাবিক কাজে ফেরা সম্ভব হয়। ধানমন্ডি চেম্বারে শনিবার থেকে বৃহস্পতিবার সন্ধ্যা 6:00 PM – রাত 9:00 PM পর্যন্ত রোগী দেখা হয় (শুক্রবার ও সরকারি ছুটির দিন বন্ধ)।
          </p>
          <p class="card-text num-font" data-lang-block="en" style="display:none; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-mist);">
            Minimally invasive laparoscopic procedures typically involve shorter hospital stays (24–48 hours) and a return to light daily activities within 1–2 weeks. Dhanmondi chamber hours are Saturday to Thursday, 6:00 PM – 9:00 PM (closed Friday & Govt. Holidays).
          </p>
        </details>
      </div>
    </div>
  </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
