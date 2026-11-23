<?php
$pageTitle = 'Professor Dr. Sadia Armin Khan | Department of Surgery';
$pageDesc  = 'Official medical portfolio of Professor Dr. Sadia Armin Khan — Breast Surgery, Piles & Colorectal Surgery, and Laparoscopic Surgery.';
include __DIR__ . '/includes/header.php';
?>

<main>
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div>
        <p class="hero-designation" data-i18n="hero_designation">প্রফেসর (সিসি), সার্জারি বিভাগ</p>
        <h1 class="hero-title" data-i18n="hero_name">প্রফেসর ডা. সাদিয়া আরমিন খান</h1>
        <p class="hero-qualifications num-font" data-i18n="hero_qualifications">MBBS (DMC), FCPS (Surgery), MRCS (Edin), FMAS (India)</p>
        <p class="hero-hospital" data-i18n="hero_hospital">হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল</p>

        <div class="hero-actions">
          <a href="contact.php#appointment" class="btn btn-primary" data-i18n="hero_cta_appointment">অ্যাপয়েন্টমেন্ট অনুরোধ</a>
          <a href="services.php" class="btn btn-outline" data-i18n="hero_cta_services">সেবাসমূহ দেখুন</a>
        </div>

        <div class="hero-expertise-list">
          <span data-i18n="hero_exp_1">ব্রেস্ট সার্জারি</span>
          <span aria-hidden="true">·</span>
          <span data-i18n="hero_exp_2">পাইলস ও কলোরেক্টাল সার্জারি</span>
          <span aria-hidden="true">·</span>
          <span data-i18n="hero_exp_3">ল্যাপারোস্কোপিক সার্জারি</span>
        </div>
      </div>

      <div class="hero-portrait-wrap">
        <img src="assets/svg/doctor-portrait-placeholder.svg" alt="Professor Dr. Sadia Armin Khan" width="400" height="480">
      </div>
    </div>
  </section>

  <!-- Medical Expertise Cards -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker" data-i18n="sec_expertise_kicker">বিশেষজ্ঞতা</span>
        <h2 data-i18n="sec_expertise_title">চিকিৎসা ও সার্জারি বিশেষজ্ঞতা</h2>
        <p class="section-subtitle" data-i18n="sec_expertise_sub">আধুনিক, নিরাপদ এবং রোগী-কেন্দ্রিক সার্জিক্যাল চিকিৎসা সেবা।</p>
      </div>

      <div class="grid-3">
        <div class="card">
          <img src="assets/svg/breast-care.svg" alt="Breast Surgery" class="card-icon">
          <h3 class="card-title" data-i18n="srv_breast_surgery_title">ব্রেস্ট সার্জারি</h3>
          <p class="card-text" data-i18n="srv_breast_surgery_desc">স্তনের টিউমার, চাকা এবং অন্যান্য সার্জিক্যাল সমস্যার আধুনিক ও যত্নশীল চিকিৎসা।</p>
          <a href="services.php#breast-surgery" class="card-link" data-i18n="btn_read_more">বিস্তারিত জানুন &rarr;</a>
        </div>

        <div class="card">
          <img src="assets/svg/colorectal-care.svg" alt="Piles and Colorectal Surgery" class="card-icon">
          <h3 class="card-title" data-i18n="srv_colorectal_title">কলোরেক্টাল সার্জারি</h3>
          <p class="card-text" data-i18n="srv_colorectal_desc">বৃহদন্ত্র ও পায়ুপথের বিভিন্ন জটিল সার্জিক্যাল সমস্যার বিশেষায়িত চিকিৎসা।</p>
          <a href="services.php#colorectal" class="card-link" data-i18n="btn_read_more">বিস্তারিত জানুন &rarr;</a>
        </div>

        <div class="card">
          <img src="assets/svg/laparoscopic-surgery.svg" alt="Laparoscopic Surgery" class="card-icon">
          <h3 class="card-title" data-i18n="srv_laparoscopic_title">ল্যাপারোস্কোপিক সার্জারি</h3>
          <p class="card-text" data-i18n="srv_laparoscopic_desc">ছোট ছিদ্রের মাধ্যমে আধুনিক মিনিম্যালি ইনভেসিভ সার্জারি, যা দ্রুত আরোগ্য লাভে সহায়ক।</p>
          <a href="services.php#laparoscopic" class="card-link" data-i18n="btn_read_more">বিস্তারিত জানুন &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- About Preview -->
  <section class="section-pad" style="background-color: var(--white); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
    <div class="container hero-grid">
      <div style="max-width: 360px; margin: 0 auto;">
        <img src="assets/svg/consultation.svg" alt="Doctor Consultation" style="width: 100%; border-radius: 16px;">
      </div>
      <div>
        <span class="section-kicker" data-i18n="sec_about_kicker">ডাক্তার পরিচিতি</span>
        <h2 style="margin-bottom: 16px;" data-i18n="sec_about_title">প্রফেসর ডা. সাদিয়া আরমিন খান সম্পর্কে</h2>
        <p class="card-text" style="font-size: 1.02rem; margin-bottom: 24px;" data-i18n="sec_about_desc">
          প্রফেসর ডা. সাদিয়া আরমিন খান বাংলাদেশের একজন অভিজ্ঞ নারী সার্জন এবং মেডিকেল শিক্ষক। তিনি বর্তমানে হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতালের সার্জারি বিভাগে প্রফেসর (সিসি) হিসেবে দায়িত্ব পালন করছেন।
        </p>
        <a href="about.php" class="btn btn-outline" data-i18n="btn_read_more">বিস্তারিত জানুন</a>
      </div>
    </div>
  </section>

  <!-- Featured Services -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker" data-i18n="sec_services_kicker">চিকিৎসা সেবাসমূহ</span>
        <h2 data-i18n="sec_services_title">বিশেষায়িত সার্জিক্যাল সেবাসমূহ</h2>
        <p class="section-subtitle" data-i18n="sec_services_sub">রোগ নির্ণয় থেকে শুরু করে আধুনিক সার্জারি ও পরবর্তী যত্ন।</p>
      </div>

      <div class="grid-3">
        <div class="card">
          <h3 class="card-title" data-i18n="srv_breast_eval_title">ব্রেস্ট ডিজিজ ইভ্যালুয়েশন</h3>
          <p class="card-text" data-i18n="srv_breast_eval_desc">স্তনের ব্যথা, চাকা বা অস্বাভাবিক পরিবর্তনের সঠিক ক্লিনিক্যাল পরীক্ষা ও রোগ নির্ণয়।</p>
        </div>
        <div class="card">
          <h3 class="card-title" data-i18n="srv_breast_abscess_title">ব্রেস্ট ইনফেকশন ও অ্যাবসেস চিকিৎসা</h3>
          <p class="card-text" data-i18n="srv_breast_abscess_desc">স্তনের সংক্রমণ ও ফোঁড়ার (অ্যাবসেস) নিরাপদ চিকিৎসা এবং সঠিক পরামর্শ।</p>
        </div>
        <div class="card">
          <h3 class="card-title" data-i18n="srv_piles_title">পাইলস চিকিৎসা</h3>
          <p class="card-text" data-i18n="srv_piles_desc">অর্শ বা পাইলস, ফিশার ও ফিস্টুলার আধুনিক ও কম ব্যথাদায়ক চিকিৎসা পদ্ধতি।</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 36px;">
        <a href="services.php" class="btn btn-primary" data-i18n="btn_all_services">সকল সেবা দেখুন</a>
      </div>
    </div>
  </section>

  <!-- Latest Blogs Preview -->
  <?php include_once __DIR__ . '/includes/blogs-data.php'; ?>
  <section class="section-pad" style="background-color: var(--white); border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker" data-i18n="sec_blogs_kicker">স্বাস্থ্য সচেতনতা</span>
        <h2 data-i18n="sec_blogs_title">সর্বশেষ স্বাস্থ্য প্রবন্ধ ও ব্লগ</h2>
      </div>

      <div class="grid-3">
        <?php foreach ([1, 4, 5] as $featuredId):
          $art = $BLOG_ARTICLES[$featuredId]; ?>
          <article class="card">
            <div class="card-meta">
              <span><?php echo htmlspecialchars($art['category_bn']); ?></span>
              <span aria-hidden="true">·</span>
              <span class="num-font">Blog 0<?php echo (int)$art['id']; ?></span>
            </div>
            <h3 class="card-title" data-lang-block="bn"><?php echo htmlspecialchars($art['title_bn']); ?></h3>
            <h3 class="card-title" data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($art['title_en']); ?></h3>
            <p class="card-text" data-lang-block="bn"><?php echo htmlspecialchars($art['intro_bn']); ?></p>
            <p class="card-text" data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($art['intro_en']); ?></p>
            <a href="blog-details.php?slug=<?php echo urlencode($art['slug']); ?>" class="card-link" data-i18n="btn_read_article">পুরো প্রবন্ধ পড়ুন &rarr;</a>
          </article>
        <?php endforeach; ?>
      </div>

      <div style="text-align: center; margin-top: 36px;">
        <a href="blogs.php" class="btn btn-outline" data-i18n="btn_all_blogs">সব প্রবন্ধ দেখুন</a>
      </div>
    </div>
  </section>

  <!-- Compact Doctor Promo Video Frame -->
  <section class="section-pad">
    <div class="container">
      <div class="card" style="padding: 0; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); align-items: center;">
        <div style="padding: 30px 32px;">
          <span class="section-kicker" data-lang-block="bn">চিকিৎসক পরিচিতি ভিডিও</span>
          <span class="section-kicker" data-lang-block="en" style="display:none;">Doctor Video Introduction</span>
          <h2 style="margin: 6px 0 12px;" data-lang-block="bn">অধ্যাপক ডা. সাদিয়া আরমিন খানের পরামর্শ বার্তা</h2>
          <h2 style="margin: 6px 0 12px; display:none;" data-lang-block="en">Meet Professor Dr. Sadia Armin Khan</h2>
          <p class="card-text" style="margin-bottom: 18px;" data-lang-block="bn">ব্রেস্ট, পাইলস এবং ল্যাপারোস্কোপিক সার্জারি ও সময়মতো বিশেষজ্ঞ পরামর্শ সম্পর্কে সংক্ষিপ্ত ভিডিও বার্তা দেখুন।</p>
          <p class="card-text" style="margin-bottom: 18px; display:none;" data-lang-block="en">Watch a brief overview on specialist breast, piles, and laparoscopic surgical care.</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <a href="contact.php#appointment" class="btn btn-primary" data-i18n="hero_cta_appointment">অ্যাপয়েন্টমেন্ট অনুরোধ</a>
            <a href="https://www.facebook.com/reel/1700092954574932/" target="_blank" rel="noopener noreferrer" class="card-link" data-lang-block="bn">ফেসবুকে দেখুন &rarr;</a>
            <a href="https://www.facebook.com/reel/1700092954574932/" target="_blank" rel="noopener noreferrer" class="card-link" style="display:none;" data-lang-block="en">Open on Facebook &rarr;</a>
          </div>
        </div>
        <div style="background: var(--soft-aqua); padding: 20px; display: flex; justify-content: center; border-left: 1px solid var(--border-color);">
          <div style="width: 100%; max-width: 560px; aspect-ratio: 560 / 314; border-radius: 14px; overflow: hidden; border: 1px solid var(--border-color);">
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1700092954574932%2F&show_text=false&width=560&t=0" width="560" height="314" style="width:100%;height:100%;border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Appointment CTA -->
  <section class="section-pad">
    <div class="container">
      <div class="cta-banner">
        <h2 data-i18n="cta_title">বিশেষজ্ঞ সার্জিক্যাল পরামর্শের জন্য অ্যাপয়েন্টমেন্ট অনুরোধ করুন</h2>
        <p data-i18n="cta_desc">অনলাইনে আপনার পছন্দের তারিখ ও সময় উল্লেখ করে অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান। আমাদের ক্লিনিক টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।</p>
        <a href="contact.php#appointment" class="btn btn-white" data-i18n="cta_btn">অ্যাপয়েন্টমেন্ট বুকিং ফর্ম</a>
      </div>
    </div>
  </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
