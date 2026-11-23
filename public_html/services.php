<?php
$pageTitle = 'Services | Professor Dr. Sadia Armin Khan';
$pageDesc  = 'Specialized surgical services: Breast Surgery, Breast Disease Evaluation, Breast Infection & Abscess Treatment, Piles Treatment, Colorectal Surgery, and Laparoscopic Surgery.';
include __DIR__ . '/includes/header.php';

$services = [
  [
    'id' => 'breast-surgery',
    'num' => '01',
    'cat' => 'breast',
    'icon' => 'assets/svg/breast-care.svg',
    'conditions_bn' => 'স্তনের চাকা · ফাইব্রোএডেনোমা · সিস্ট',
    'conditions_en' => 'Breast Lump · Fibroadenoma · Cyst',
    'title_bn' => 'ব্রেস্ট সার্জারি',
    'title_en' => 'Breast Surgery',
    'desc_bn' => 'স্তনের টিউমার, চাকা এবং অন্যান্য সার্জিক্যাল সমস্যার আধুনিক, নিরাপদ ও গোপনীয় চিকিৎসা।',
    'desc_en' => 'Modern, evidence-based surgical care for breast lumps, benign tumors, and breast conditions with utmost privacy.',
    'when_bn' => 'স্তনে কোনো নতুন চাকা, আকারের পরিবর্তন বা চিকিৎসকের পরামর্শ অনুযায়ী সার্জারির প্রয়োজন হলে।',
    'when_en' => 'When you notice a persistent breast lump, structural change, or require surgical evaluation.'
  ],
  [
    'id' => 'breast-eval',
    'num' => '02',
    'cat' => 'breast',
    'icon' => 'assets/svg/breast-eval.svg',
    'conditions_bn' => 'স্তনে ব্যথা · নিপল ডিসচার্জ · স্ক্রিনিং',
    'conditions_en' => 'Mastalgia · Nipple Discharge · Screening',
    'title_bn' => 'ব্রেস্ট ডিজিজ ইভ্যালুয়েশন',
    'title_en' => 'Breast Disease Evaluation',
    'desc_bn' => 'স্তনের ব্যথা, চাকা বা অস্বাভাবিক পরিবর্তনের সঠিক ক্লিনিক্যাল পরীক্ষা ও রোগ নির্ণয়।',
    'desc_en' => 'Structured clinical examination and ultrasound/diagnostic evaluation for breast pain, lumps, or nipple discharge.',
    'when_bn' => 'দীর্ঘস্থায়ী স্তনে ব্যথা, চামড়ার পরিবর্তন বা নিয়মিত স্তন স্বাস্থ্য পরীক্ষার জন্য।',
    'when_en' => 'For persistent breast pain, skin changes, or routine specialist breast health screening.'
  ],
  [
    'id' => 'breast-abscess',
    'num' => '03',
    'cat' => 'breast',
    'icon' => 'assets/svg/breast-abscess.svg',
    'conditions_bn' => 'ম্যাস্টাইটিস · অ্যাবসেস · ড্রেইনেজ',
    'conditions_en' => 'Mastitis · Breast Abscess · Drainage',
    'title_bn' => 'ব্রেস্ট ইনফেকশন ও অ্যাবসেস চিকিৎসা',
    'title_en' => 'Breast Infection & Abscess Treatment',
    'desc_bn' => 'স্তনের সংক্রমণ ও ফোঁড়ার (অ্যাবসেস) নিরাপদ অ্যাসপিরেশন, ড্রেইনেজ ও সঠিক চিকিৎসা।',
    'desc_en' => 'Safe, evidence-based medical and minimally invasive drainage management of mastitis and breast abscesses.',
    'when_bn' => 'স্তনে লালচে ভাব, ফোলা, তীব্র ব্যথা বা জ্বর অনুভব করলে দ্রুত পরামর্শ নিন।',
    'when_en' => 'Seek prompt consultation if you experience redness, swelling, localized warmth, or fever.'
  ],
  [
    'id' => 'piles',
    'num' => '04',
    'cat' => 'colorectal',
    'icon' => 'assets/svg/piles-care.svg',
    'conditions_bn' => 'পাইলস · এনাল ফিশার · ফিস্টুলা',
    'conditions_en' => 'Hemorrhoids · Anal Fissure · Fistula',
    'title_bn' => 'পাইলস চিকিৎসা',
    'title_en' => 'Piles Treatment',
    'desc_bn' => 'অর্শ বা পাইলস, ফিশার ও ফিস্টুলার আধুনিক, কম ব্যথাদায়ক ও গোপনীয় চিকিৎসাসেবা।',
    'desc_en' => 'Modern, patient-friendly treatment options for hemorrhoids (piles), anal fissures, and fistulas.',
    'when_bn' => 'মলত্যাগের সময় রক্তপাত, ব্যথা বা পায়ুপথে মাংসপিণ্ডের মতো অনুভূত হলে।',
    'when_en' => 'If you experience rectal bleeding, pain during bowel movements, or prolapse.'
  ],
  [
    'id' => 'colorectal',
    'num' => '05',
    'cat' => 'colorectal',
    'icon' => 'assets/svg/colorectal-care.svg',
    'conditions_bn' => 'কোলন · রেকটাম · অ্যানোরেক্টাল কেয়ার',
    'conditions_en' => 'Colon · Rectum · Anorectal Care',
    'title_bn' => 'কলোরেক্টাল সার্জারি',
    'title_en' => 'Colorectal Surgery',
    'desc_bn' => 'বৃহদন্ত্র ও পায়ুপথের বিভিন্ন জটিল সার্জিক্যাল সমস্যার বিশেষায়িত চিকিৎসা।',
    'desc_en' => 'Specialized surgical care for complex conditions of the colon, rectum, and anus.',
    'when_bn' => 'দীর্ঘমেয়াদী কোষ্ঠকাঠিন্য, মলত্যাগের অভ্যাসে পরিবর্তন বা রক্তপাত দেখা দিলে।',
    'when_en' => 'For persistent changes in bowel habits, unexplained bleeding, or colorectal symptoms.'
  ],
  [
    'id' => 'laparoscopic',
    'num' => '06',
    'cat' => 'laparoscopic',
    'icon' => 'assets/svg/laparoscopic-surgery.svg',
    'conditions_bn' => 'পিত্তথলির পাথর · অ্যাপেন্ডিসাইটিস · হার্নিয়া',
    'conditions_en' => 'Gallstones · Appendicitis · Hernia',
    'title_bn' => 'ল্যাপারোস্কোপিক সার্জারি',
    'title_en' => 'Laparoscopic Surgery',
    'desc_bn' => 'ছোট ছিদ্রের মাধ্যমে আধুনিক মিনিম্যালি ইনভেসিভ সার্জারি, যা কম ব্যথা ও দ্রুত আরোগ্য লাভে সহায়ক।',
    'desc_en' => 'Minimally invasive keyhole surgical procedures designed to reduce pain and support faster recovery.',
    'when_bn' => 'পিত্তথলির পাথর, অ্যাপেন্ডিসাইটিস বা হার্নিয়ার মতো সমস্যায় আধুনিক সার্জারির পরামর্শের জন্য।',
    'when_en' => 'For gallstones, appendicitis, hernias, and other conditions suitable for minimally invasive surgery.'
  ]
];
?>

<main>
  <section class="page-banner">
    <div class="container">
      <h1 data-i18n="sec_services_title">বিশেষায়িত সার্জিক্যাল সেবাসমূহ</h1>
      <p data-i18n="sec_services_sub">রোগ নির্ণয় থেকে শুরু করে আধুনিক সার্জারি ও পরবর্তী যত্ন।</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="grid-3" style="gap: 26px;">
        <?php foreach ($services as $srv): ?>
          <article class="card" id="<?php echo htmlspecialchars($srv['id']); ?>" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="background: var(--soft-aqua); padding: 18px 20px; border-bottom: 1px solid var(--border-color);">
                <img src="<?php echo htmlspecialchars($srv['icon']); ?>" alt="<?php echo htmlspecialchars($srv['title_en']); ?>" style="width: 100%; height: 150px; object-fit: contain;">
              </div>
              <div style="padding: 22px 24px 12px;">
                <div class="card-meta" style="margin-bottom: 8px;">
                  <span class="num-font" style="font-weight: 700; color: var(--teal-primary);"><?php echo htmlspecialchars($srv['num']); ?></span>
                  <span aria-hidden="true">·</span>
                  <span data-lang-block="bn"><?php echo htmlspecialchars($srv['conditions_bn']); ?></span>
                  <span data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($srv['conditions_en']); ?></span>
                </div>
                <h2 class="card-title" style="font-size: 1.25rem; margin-bottom: 8px;">
                  <span data-lang-block="bn"><?php echo htmlspecialchars($srv['title_bn']); ?></span>
                  <span data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($srv['title_en']); ?></span>
                </h2>
                <p class="card-text" style="margin-bottom: 14px;">
                  <span data-lang-block="bn"><?php echo htmlspecialchars($srv['desc_bn']); ?></span>
                  <span data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($srv['desc_en']); ?></span>
                </p>
                <div style="padding-top: 12px; border-top: 1px solid var(--border-color);">
                  <strong style="font-size: 0.85rem; color: var(--deep-teal);" data-lang-block="bn">কখন পরামর্শ নেবেন:</strong>
                  <strong style="font-size: 0.85rem; color: var(--deep-teal); display:none;" data-lang-block="en">When to Seek Consultation:</strong>
                  <p style="font-size: 0.88rem; color: var(--muted-text); margin-top: 4px;">
                    <span data-lang-block="bn"><?php echo htmlspecialchars($srv['when_bn']); ?></span>
                    <span data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($srv['when_en']); ?></span>
                  </p>
                </div>
              </div>
            </div>
            <div style="padding: 10px 24px 22px;">
              <a href="contact.php#appointment" class="card-link" data-i18n="hero_cta_appointment">অ্যাপয়েন্টমেন্ট অনুরোধ &rarr;</a>
            </div>
          </article>
        <?php endforeach; ?>
      </div>

      <!-- Specialist Consultation Banner with Doctor Photo -->
      <div class="card" style="margin-top: 42px; padding: 0; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); align-items: stretch;">
        <div style="background: var(--soft-aqua); min-height: 260px;">
          <img src="https://lh3.googleusercontent.com/d/1PMbrVvC3LsVHQP-0LNVqqfDr7i9hzZLn" alt="<?php echo htmlspecialchars(DOCTOR_NAME_EN); ?>" referrerpolicy="no-referrer" style="width: 100%; height: 100%; max-height: 380px; object-fit: cover; object-position: top;">
        </div>
        <div style="padding: 32px; display: flex; flex-direction: column; justify-content: center;">
          <span class="section-kicker" data-lang-block="bn">বিশেষজ্ঞ সার্জিক্যাল পরামর্শ</span>
          <span class="section-kicker" data-lang-block="en" style="display:none;">Specialist Surgical Consultation</span>
          <h2 style="margin: 6px 0 8px;" data-lang-block="bn"><?php echo htmlspecialchars(DOCTOR_NAME_BN); ?></h2>
          <h2 style="margin: 6px 0 8px; display:none;" data-lang-block="en"><?php echo htmlspecialchars(DOCTOR_NAME_EN); ?></h2>
          <p class="num-font" style="color: var(--teal-primary); font-weight: 600; font-size: 0.92rem; margin-bottom: 12px;"><?php echo htmlspecialchars(DOCTOR_QUALIFICATIONS); ?></p>
          <p class="card-text" style="margin-bottom: 20px;" data-lang-block="bn">প্রতিটি রোগীর অবস্থা ধৈর্য সহকারে পরীক্ষা করে, প্রয়োজনীয় ডায়াগনস্টিক পর্যালোচনা ও আধুনিক ন্যূনতম ব্যথাদায়ক সার্জিক্যাল পরামর্শ প্রদান করা হয়।</p>
          <p class="card-text" style="margin-bottom: 20px; display:none;" data-lang-block="en">Every condition is evaluated carefully with clear diagnostics and patient-centered surgical guidance.</p>
          <div>
            <a href="contact.php#appointment" class="btn btn-primary" data-i18n="hero_cta_appointment">অ্যাপয়েন্টমেন্ট অনুরোধ</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
