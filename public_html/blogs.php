<?php
$pageTitle = 'Health Blogs | Professor Dr. Sadia Armin Khan';
$pageDesc  = 'Medical awareness articles on breast health, breast cancer diagnosis, breast infection, piles, and gallbladder stones.';
include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/blogs-data.php';
?>

<main>
  <section class="page-banner">
    <div class="container">
      <h1 data-i18n="sec_blogs_title">সর্বশেষ স্বাস্থ্য প্রবন্ধ ও ব্লগ</h1>
      <p data-i18n="sec_edu_desc">সঠিক সময়ে রোগ নির্ণয় এবং বিশেষজ্ঞ চিকিৎসকের পরামর্শ গ্রহণ সুস্থ জীবনের চাবিকাঠি।</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="filter-toolbar">
        <div class="filter-tabs" role="tablist">
          <button type="button" class="filter-tab active" data-filter="all" data-i18n="filter_all">All</button>
          <button type="button" class="filter-tab" data-filter="breast">Breast Health</button>
          <button type="button" class="filter-tab" data-filter="breast-cancer">Breast Cancer Awareness</button>
          <button type="button" class="filter-tab" data-filter="colorectal">Piles & Colorectal Surgery</button>
          <button type="button" class="filter-tab" data-filter="laparoscopy">Laparoscopic Surgery</button>
        </div>
        <input type="search" id="blogSearchInput" class="search-input" data-i18n-placeholder="blog_search_ph" placeholder="প্রবন্ধ খুঁজুন...">
      </div>

      <div class="grid-3">
        <?php foreach ($BLOG_ARTICLES as $art): ?>
          <article class="card blog-card" data-category="<?php echo htmlspecialchars($art['category_key']); ?>">
            <img src="<?php echo htmlspecialchars($art['icon']); ?>" alt="<?php echo htmlspecialchars($art['category_en']); ?>" class="card-icon">
            <div class="card-meta">
              <span><?php echo htmlspecialchars($art['category_bn']); ?></span>
              <span aria-hidden="true">·</span>
              <span class="num-font">Blog 0<?php echo (int)$art['id']; ?></span>
            </div>
            <h2 class="card-title"><?php echo htmlspecialchars($art['title_bn']); ?></h2>
            <p class="card-text"><?php echo htmlspecialchars($art['intro_bn']); ?></p>
            <a href="blog-details.php?slug=<?php echo urlencode($art['slug']); ?>" class="card-link" data-i18n="btn_read_article">পুরো প্রবন্ধ পড়ুন &rarr;</a>
          </article>
        <?php endforeach; ?>
      </div>

      <div style="margin-top: 28px; padding: 16px 20px; background-color: var(--soft-aqua); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--dark-text);">
        <strong>Medical Disclaimer:</strong> এই ব্লগগুলো সাধারণ স্বাস্থ্যসচেতনতামূলক তথ্যের জন্য। এগুলো ব্যক্তিগত রোগ নির্ণয় বা চিকিৎসকের সরাসরি পরামর্শের বিকল্প নয়।
      </div>

      <!-- Featured Facebook Health Awareness Posts -->
      <div style="margin-top: 38px; padding-top: 28px; border-top: 1px solid var(--border-color);">
        <h2 style="font-size: 1.45rem; color: var(--dark-text); margin-bottom: 18px;" data-lang-block="bn">অফিসিয়াল ফেসবুক পেজ থেকে স্বাস্থ্য সচেতনতা পোস্ট</h2>
        <h2 style="font-size: 1.45rem; color: var(--dark-text); margin-bottom: 18px; display:none;" data-lang-block="en">Latest Health Awareness Posts on Facebook</h2>

        <div class="grid-2" style="gap: 24px;">
          <a href="https://www.facebook.com/photo.php?fbid=122145584031360253&set=pb.61590807591353.-2207520000&type=3" target="_blank" rel="noopener noreferrer" class="card" style="padding: 0; overflow: hidden; text-decoration: none;">
            <div style="background: var(--soft-aqua); aspect-ratio: 16 / 10; overflow: hidden; border-bottom: 1px solid var(--border-color);">
              <img src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/906399115_122145584037360253_5221663369491665802_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s8BhjIiU0lIQ7kNvwEeBl7n&_nc_oc=AdplWj0XBsSGxGkA3Sibo7CSkLb6R3uf6yNrEE7BWp9Ld1-yiBFcd9zp4xeHDyBCD9Q&_nc_zt=23&_nc_ht=scontent.fdac11-1.fna&_nc_gid=gBg6V5pi_H_a4T2Wbo-FrA&_nc_ss=7b2a8&oh=00_AQRGJ72_8gBGttPuLHUPcjX73FWJe0dEVwSuhCm7gO7F8g&oe=6B037F4A" alt="Specialist Surgical Awareness Update" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/svg/breast-care.svg';" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 20px;">
              <h3 class="card-title" data-lang-block="bn">বিশেষজ্ঞ সার্জিক্যাল স্বাস্থ্য সচেতনতা ও পরামর্শ পোস্ট</h3>
              <h3 class="card-title" data-lang-block="en" style="display:none;">Specialist Surgical Awareness & Consultation Update</h3>
              <span class="card-link" data-lang-block="bn">ফেসবুকে পোস্টটি দেখুন &rarr;</span>
              <span class="card-link" data-lang-block="en" style="display:none;">Read Post on Facebook &rarr;</span>
            </div>
          </a>

          <a href="https://www.facebook.com/photo/?fbid=122146611153360253&set=pb.61590807591353.-2207520000" target="_blank" rel="noopener noreferrer" class="card" style="padding: 0; overflow: hidden; text-decoration: none;">
            <div style="background: var(--soft-aqua); aspect-ratio: 16 / 10; overflow: hidden; border-bottom: 1px solid var(--border-color);">
              <img src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/912581986_122146611159360253_652159310539106556_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4Da5PMc9io8Q7kNvwE3vN0J&_nc_oc=Adq09HePsMlLLMZPZz0XtloaOT4oxHGCidP9yTrFPYPoIIXVpZYvGhjmClbfKFkhXos&_nc_zt=23&_nc_ht=scontent.fdac11-1.fna&_nc_gid=qbcJTgJZOWdnvoVshrk_OQ&_nc_ss=7b2a8&oh=00_AQSXn8QAsAKxorzqnAezNwBfj7MWwnlLdwjL4e_8LZtkpQ&oe=6B039854" alt="Patient Education & Early Diagnosis Guide" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/svg/laparoscopic-surgery.svg';" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 20px;">
              <h3 class="card-title" data-lang-block="bn">রোগী সচেতনতা ও সময়মতো রোগ নির্ণয় গাইড</h3>
              <h3 class="card-title" data-lang-block="en" style="display:none;">Patient Education & Early Diagnosis Guide</h3>
              <span class="card-link" data-lang-block="bn">ফেসবুকে পোস্টটি দেখুন &rarr;</span>
              <span class="card-link" data-lang-block="en" style="display:none;">Read Post on Facebook &rarr;</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Doctor Health Awareness Videos -->
      <div style="margin-top: 38px; padding-top: 28px; border-top: 1px solid var(--border-color);">
        <h2 style="font-size: 1.45rem; color: var(--dark-text); margin-bottom: 18px;" data-lang-block="bn">চিকিৎসকের স্বাস্থ্য সচেতনতামূলক ভিডিও</h2>
        <h2 style="font-size: 1.45rem; color: var(--dark-text); margin-bottom: 18px; display:none;" data-lang-block="en">Doctor Health Awareness Videos</h2>

        <div class="grid-2" style="gap: 24px; align-items: stretch;">
          <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="background: var(--soft-aqua); padding: 18px; display: flex; align-items: center; justify-content: center; flex: 1; border-bottom: 1px solid var(--border-color);">
              <div style="width: 100%; max-width: 560px; aspect-ratio: 560 / 314; border-radius: 12px; overflow: hidden;">
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1381748053933325%2F&show_text=false&width=560&t=0" width="560" height="314" style="width:100%;height:100%;border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
              </div>
            </div>
            <div style="padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <span class="num-font" style="font-size: 0.78rem; font-weight: 700; color: var(--teal-primary);">Video 01</span>
                <h3 class="card-title" style="margin: 2px 0 0;" data-lang-block="bn">স্বাস্থ্য সচেতনতা ও সময়মতো পরামর্শ</h3>
                <h3 class="card-title" style="margin: 2px 0 0; display:none;" data-lang-block="en">Health Awareness & Early Consultation</h3>
              </div>
              <a href="https://www.facebook.com/reel/1381748053933325/" target="_blank" rel="noopener noreferrer" class="card-link">Facebook Reel &rarr;</a>
            </div>
          </div>

          <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="background: var(--soft-aqua); padding: 18px; display: flex; align-items: center; justify-content: center; flex: 1; border-bottom: 1px solid var(--border-color);">
              <div style="width: 267px; max-width: 100%; aspect-ratio: 267 / 476; border-radius: 12px; overflow: hidden;">
                <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1138323695222653%2F&show_text=false&width=267&t=0" width="267" height="476" style="width:100%;height:100%;border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
              </div>
            </div>
            <div style="padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <span class="num-font" style="font-size: 0.78rem; font-weight: 700; color: var(--teal-primary);">Video 02</span>
                <h3 class="card-title" style="margin: 2px 0 0;" data-lang-block="bn">রোগী সচেতনতা সংক্ষিপ্ত ভিডিও</h3>
                <h3 class="card-title" style="margin: 2px 0 0; display:none;" data-lang-block="en">Patient Awareness Short Reel</h3>
              </div>
              <a href="https://www.facebook.com/reel/1138323695222653/" target="_blank" rel="noopener noreferrer" class="card-link">Facebook Reel &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <a href="<?php echo htmlspecialchars(SOCIAL_FACEBOOK); ?>" target="_blank" rel="noopener noreferrer" style="margin-top: 28px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; padding: 26px 30px; background: linear-gradient(135deg, var(--teal-primary), var(--deep-teal)); color: #ffffff; border-radius: var(--radius-lg); text-decoration: none; box-shadow: var(--shadow-md);">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(255,255,255,0.16); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
          </div>
          <div>
            <h3 style="color: #ffffff; margin: 0 0 4px; font-size: 1.15rem;" data-lang-block="bn">নিয়মিত স্বাস্থ্য পরামর্শের জন্য ফেসবুকে যুক্ত হোন</h3>
            <h3 style="color: #ffffff; margin: 0 0 4px; font-size: 1.15rem; display:none;" data-lang-block="en">Follow on Facebook for Daily Health Tips</h3>
            <p class="num-font" style="margin: 0; font-size: 0.9rem; color: var(--soft-aqua);">facebook.com/sadiaarmindr</p>
          </div>
        </div>
        <span style="background: #ffffff; color: var(--deep-teal); padding: 10px 20px; border-radius: var(--radius-sm); font-weight: 700; font-size: 0.9rem;" data-lang-block="bn">ফেসবুক পেজ দেখুন</span>
        <span style="background: #ffffff; color: var(--deep-teal); padding: 10px 20px; border-radius: var(--radius-sm); font-weight: 700; font-size: 0.9rem; display:none;" data-lang-block="en">Visit Facebook Page</span>
      </a>
    </div>
  </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
