<?php
require_once __DIR__ . '/functions.php';
$pageTitle = $pageTitle ?? 'Professor Dr. Sadia Armin Khan | Department of Surgery';
$pageDesc  = $pageDesc  ?? 'Official website of Professor Dr. Sadia Armin Khan — Professor (CC), Department of Surgery, Holy Family Red Crescent Medical College Hospital.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageDesc); ?>">
  <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
  <meta property="og:description" content="<?php echo htmlspecialchars($pageDesc); ?>">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Professor Dr. Sadia Armin Khan",
    "medicalSpecialty": ["Surgery", "Breast Surgery", "Colorectal Surgery", "Laparoscopic Surgery"],
    "affiliation": {
      "@type": "Hospital",
      "name": "Holy Family Red Crescent Medical College Hospital"
    },
    "url": "<?php echo SITE_URL; ?>"
  }
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.php" class="brand-mark" data-i18n="brand_name">প্রফেসর ডা. সাদিয়া আরমিন খান</a>

      <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="index.php" class="nav-link <?php echo isActivePage('index.php'); ?>" data-i18n="nav_home">হোম</a>
        <a href="about.php" class="nav-link <?php echo isActivePage('about.php'); ?>" data-i18n="nav_about">পরিচিতি</a>
        <a href="services.php" class="nav-link <?php echo isActivePage('services.php'); ?>" data-i18n="nav_services">সেবাসমূহ</a>
        <a href="blogs.php" class="nav-link <?php echo isActivePage('blogs.php'); ?>" data-i18n="nav_blogs">ব্লগ</a>
        <a href="journals.php" class="nav-link <?php echo isActivePage('journals.php'); ?>" data-i18n="nav_journals">জার্নাল</a>
        <a href="gallery.php" class="nav-link <?php echo isActivePage('gallery.php'); ?>" data-i18n="nav_gallery">গ্যালারি</a>
        <a href="contact.php" class="nav-link <?php echo isActivePage('contact.php'); ?>" data-i18n="nav_contact">যোগাযোগ</a>
      </nav>

      <div class="header-actions">
        <div class="lang-switcher" role="group" aria-label="Language Switcher">
          <button type="button" class="lang-btn active" data-lang="en">English</button>
          <button type="button" class="lang-btn" data-lang="bn">বাংলা</button>
        </div>
        <a href="contact.php#appointment" class="btn btn-primary header-cta" data-i18n="nav_appointment">অ্যাপয়েন্টমেন্ট</a>
        <button type="button" class="mobile-toggle" id="mobileMenuToggle" aria-label="Toggle Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>
