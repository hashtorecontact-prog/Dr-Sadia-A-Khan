<?php
$pageTitle = 'Gallery | Professor Dr. Sadia Armin Khan';
$pageDesc  = 'Professional portraits, clinical practice, and academic activities of Professor Dr. Sadia Armin Khan.';
include __DIR__ . '/includes/header.php';

$galleryItems = [
  [
    'src' => 'https://lh3.googleusercontent.com/d/1xAxp0z7c53MA6c2J6f4dGWEizdVMY9aw',
    'title_bn' => 'অধ্যাপক ডা. সাদিয়া আরমিন খান',
    'title_en' => 'Professor Dr. Sadia Armin Khan',
    'desc_bn'  => 'প্রফেসর (সিসি), সার্জারি বিভাগ, হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল।',
    'desc_en'  => 'Professor (CC), Department of Surgery, Holy Family Red Crescent Medical College Hospital.'
  ],
  [
    'src' => 'https://lh3.googleusercontent.com/d/1ExuvmSm1cIlSFUuwk87VfLIrRdprte78',
    'title_bn' => 'ক্লিনিক্যাল ও একাডেমিক কার্যক্রম',
    'title_en' => 'Clinical & Academic Presence',
    'desc_bn'  => 'চিকিৎসা সেবা ও মেডিকেল একাডেমিক কার্যক্রম।',
    'desc_en'  => 'Clinical practice and medical academic engagement.'
  ],
  [
    'src' => 'https://lh3.googleusercontent.com/d/1fLMl87gmJEaJC8QQ3Bdb5KAeVaeMWz5M',
    'title_bn' => 'প্রফেশনাল পোর্ট্রেট',
    'title_en' => 'Professional Portrait',
    'desc_bn'  => 'ব্রেস্ট, পাইলস ও ল্যাপারোস্কোপিক সার্জারি বিশেষজ্ঞ।',
    'desc_en'  => 'Specialist in Breast, Piles & Laparoscopic Surgery.'
  ],
  [
    'src' => 'https://lh3.googleusercontent.com/d/1PMbrVvC3LsVHQP-0LNVqqfDr7i9hzZLn',
    'title_bn' => 'সার্জিক্যাল পরামর্শ ও চেম্বার',
    'title_en' => 'Surgical Consultation & Chamber',
    'desc_bn'  => 'পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড, ধানমন্ডি চেম্বার।',
    'desc_en'  => 'Popular Diagnostic Centre Ltd., Dhanmondi Chamber.'
  ],
  [
    'src' => 'https://lh3.googleusercontent.com/d/1AGm-Jsp6H5x6wZi7N0GD8uBI8Et0yh1S',
    'title_bn' => 'মেডিকেল শিক্ষার্থীদের সাথে একাডেমিক কার্যক্রম',
    'title_en' => 'Academic Mentoring with Medical Students',
    'desc_bn'  => 'সার্জারি বিভাগের মেডিকেল শিক্ষার্থীদের সাথে একাডেমিক ও শিক্ষাদান সেশন।',
    'desc_en'  => 'Academic mentoring and surgical teaching session with medical students.'
  ],
  [
    'src' => 'https://lh3.googleusercontent.com/d/1ewQikdPzsIobb7ximHhh4GjgLpCWiSQe',
    'title_bn' => 'মেডিকেল শিক্ষার্থীদের সাথে ক্লিনিক্যাল টিচিং',
    'title_en' => 'Clinical Teaching & Student Session',
    'desc_bn'  => 'হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতালে শিক্ষার্থীদের সাথে ক্লিনিক্যাল কার্যক্রম।',
    'desc_en'  => 'Clinical teaching session with medical students at Holy Family Red Crescent Medical College Hospital.'
  ]
];
?>

<main>
  <section class="page-banner">
    <div class="container">
      <h1 data-i18n="gallery_title">গ্যালারি ও পেশাগত কার্যক্রম</h1>
      <p data-i18n="gallery_sub">হাসপাতালের পরিবেশ, স্বাস্থ্য সচেতনতা কার্যক্রম এবং একাডেমিক সেমিনার।</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="grid-2" style="gap: 24px;">
        <?php foreach ($galleryItems as $item): ?>
          <div class="card gallery-item" style="cursor: pointer;"
               data-src="<?php echo htmlspecialchars($item['src']); ?>"
               data-title="<?php echo htmlspecialchars($item['title_en']); ?>"
               data-desc="<?php echo htmlspecialchars($item['desc_en']); ?>">
            <img src="<?php echo htmlspecialchars($item['src']); ?>" alt="<?php echo htmlspecialchars($item['title_en']); ?>" referrerpolicy="no-referrer" style="width: 100%; height: 340px; object-fit: cover; object-position: top; border-radius: 12px; margin-bottom: 14px;">
            <h3 class="card-title" data-lang-block="bn"><?php echo htmlspecialchars($item['title_bn']); ?></h3>
            <h3 class="card-title" data-lang-block="en" style="display:none;"><?php echo htmlspecialchars($item['title_en']); ?></h3>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <div class="lightbox" id="galleryLightbox" role="dialog" aria-modal="true" aria-label="Image Preview">
    <div class="lightbox-content">
      <button type="button" class="lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>
      <img id="lightboxImg" src="" alt="Preview" referrerpolicy="no-referrer" style="width: 100%; max-height: 400px; object-fit: contain; margin-bottom: 16px;">
      <h3 id="lightboxTitle" style="margin-bottom: 6px;"></h3>
      <p id="lightboxDesc" class="card-text"></p>
    </div>
  </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
