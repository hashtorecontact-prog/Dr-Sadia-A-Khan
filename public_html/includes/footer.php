  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-profile-head">
            <img src="assets/svg/doctor-portrait-placeholder.svg" alt="<?php echo htmlspecialchars(DOCTOR_NAME_EN); ?>" class="footer-avatar">
            <div>
              <h3 class="footer-title" style="margin-bottom: 2px;" data-i18n="brand_name"><?php echo htmlspecialchars(DOCTOR_NAME_BN); ?></h3>
              <p style="font-size: 0.85rem; opacity: 0.9;" data-i18n="hero_designation"><?php echo htmlspecialchars(DOCTOR_DESIGNATION_BN); ?></p>
            </div>
          </div>
          <p class="num-font" style="font-size: 0.88rem; opacity: 0.9; margin-bottom: 10px;">
            <?php echo htmlspecialchars(DOCTOR_QUALIFICATIONS); ?>
          </p>
          <p style="font-size: 0.9rem; line-height: 1.6; opacity: 0.9;" data-i18n="hero_hospital">
            <?php echo htmlspecialchars(DOCTOR_HOSPITAL_BN); ?>
          </p>
        </div>

        <div>
          <h4 class="footer-title" data-i18n="footer_quick_links">দ্রুত লিংক</h4>
          <ul class="footer-links">
            <li><a href="index.php" data-i18n="nav_home">হোম</a></li>
            <li><a href="about.php" data-i18n="nav_about">পরিচিতি</a></li>
            <li><a href="services.php" data-i18n="nav_services">সেবাসমূহ</a></li>
            <li><a href="blogs.php" data-i18n="nav_blogs">ব্লগ</a></li>
            <li><a href="journals.php" data-i18n="nav_journals">জার্নাল</a></li>
            <li><a href="gallery.php" data-i18n="nav_gallery">গ্যালারি</a></li>
            <li><a href="contact.php" data-i18n="nav_contact">যোগাযোগ</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title" data-i18n="footer_services">সেবাসমূহ</h4>
          <ul class="footer-links">
            <li><a href="services.php#breast-surgery" data-i18n="srv_breast_surgery_title">ব্রেস্ট সার্জারি</a></li>
            <li><a href="services.php#breast-eval" data-i18n="srv_breast_eval_title">ব্রেস্ট ডিজিজ ইভ্যালুয়েশন</a></li>
            <li><a href="services.php#breast-abscess" data-i18n="srv_breast_abscess_title">ব্রেস্ট ইনফেকশন ও অ্যাবসেস চিকিৎসা</a></li>
            <li><a href="services.php#piles" data-i18n="srv_piles_title">পাইলস চিকিৎসা</a></li>
            <li><a href="services.php#laparoscopic" data-i18n="srv_laparoscopic_title">ল্যাপারোস্কোপিক সার্জারি</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title" data-i18n="footer_contact">যোগাযোগের তথ্য</h4>
          <ul class="footer-links">
            <li data-lang-block="bn">
              <strong><?php echo htmlspecialchars(CHAMBER_NAME_BN); ?></strong><br>
              <?php echo htmlspecialchars(CHAMBER_ADDRESS_BN); ?>
            </li>
            <li data-lang-block="en" style="display:none;">
              <strong><?php echo htmlspecialchars(CHAMBER_NAME_EN); ?></strong><br>
              <?php echo htmlspecialchars(CHAMBER_ADDRESS_EN); ?>
            </li>
            <li class="num-font"><strong><?php echo htmlspecialchars(CLINIC_PHONE); ?></strong></li>
            <li data-lang-block="bn"><?php echo htmlspecialchars(SCHEDULE_BN); ?></li>
            <li data-lang-block="en" style="display:none;"><?php echo htmlspecialchars(SCHEDULE_EN); ?></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p data-i18n="footer_disclaimer">
          চিকিৎসা সংক্রান্ত তথ্য শুধুমাত্র সাধারণ সচেতনতার জন্য। জরুরি চিকিৎসা সেবার জন্য অনুগ্রহ করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যোগাযোগ করুন।
        </p>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <a href="privacy-policy.php" data-i18n="footer_privacy">গোপনীয়তা নীতি</a>
          <span>&copy; <?php echo date('Y'); ?> <?php echo htmlspecialchars(DOCTOR_NAME_EN); ?>. <span data-i18n="footer_rights">সর্বস্বত্ব সংরক্ষিত।</span></span>
        </div>
      </div>
      <div style="border-top: 1px solid rgba(255, 255, 255, 0.12); margin-top: 16px; padding-top: 14px; text-align: center; font-size: 0.8rem; color: rgba(231, 245, 246, 0.85);">
        Presented by <strong style="color: #FFFFFF;">Hashtore</strong>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Button (Icon Only) -->
  <a href="https://wa.me/<?php echo htmlspecialchars(WHATSAPP_NUMBER); ?>"
     class="whatsapp-float"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.188.109-1.922-.125-.453-.141-1.031-.328-1.766-.656-3.094-1.344-5.109-4.469-5.266-4.672-.156-.203-1.266-1.688-1.266-3.219s.797-2.281 1.078-2.594c.281-.313.609-.391.813-.391.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.328-.313.516-.156.188-.328.406-.469.547-.156.156-.313.328-.141.625.172.297.766 1.266 1.656 2.047 1.141 1.016 2.094 1.328 2.391 1.484.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.703.813 1.984.953.281.141.469.219.547.344.078.125.078.734-.172 1.438z"/>
    </svg>
  </a>

  <script src="assets/js/i18n.js"></script>
</body>
</html>
