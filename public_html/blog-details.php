<?php
include __DIR__ . '/includes/blogs-data.php';

$slug = $_GET['slug'] ?? '';
$id   = isset($_GET['id']) ? (int)$_GET['id'] : 0;

$article = $BLOG_ARTICLES[1];
foreach ($BLOG_ARTICLES as $item) {
  if (($slug && $item['slug'] === $slug) || ($id && $item['id'] === $id)) {
    $article = $item;
    break;
  }
}

$pageTitle = $article['title_bn'] . ' | Professor Dr. Sadia Armin Khan';
$pageDesc  = $article['intro_bn'];
include __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-banner">
    <div class="container">
      <div class="card-meta" style="justify-content: center; margin-bottom: 10px;">
        <span><?php echo htmlspecialchars($article['category_bn']); ?></span>
        <span aria-hidden="true">·</span>
        <span class="num-font"><?php echo htmlspecialchars($article['slug']); ?></span>
      </div>
      <h1><?php echo htmlspecialchars($article['title_bn']); ?></h1>
    </div>
  </section>

  <section class="section-pad">
    <div class="container" style="max-width: 820px;">
      <div class="card">
        <p style="font-size: 1.08rem; line-height: 1.85; color: var(--dark-text); margin-bottom: 22px;">
          <?php echo htmlspecialchars($article['intro_bn']); ?>
        </p>

        <?php foreach ($article['sections_bn'] as $sec): ?>
          <div style="margin-bottom: 22px;">
            <h2 style="font-size: 1.25rem; color: var(--deep-teal); margin-bottom: 10px;"><?php echo htmlspecialchars($sec['heading']); ?></h2>
            <?php if (!empty($sec['bullets'])): ?>
              <ul style="padding-left: 20px; line-height: 1.9; color: var(--dark-text);">
                <?php foreach ($sec['bullets'] as $b): ?>
                  <li><?php echo htmlspecialchars($b); ?></li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
            <?php if (!empty($sec['paragraphs'])): ?>
              <?php foreach ($sec['paragraphs'] as $p): ?>
                <p style="line-height: 1.85; color: var(--dark-text); margin-bottom: 10px;"><?php echo htmlspecialchars($p); ?></p>
              <?php endforeach; ?>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>

        <div style="margin-top: 24px; padding: 14px 16px; background-color: var(--soft-aqua); border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--dark-text);">
          <strong>Medical Disclaimer:</strong> এই ব্লগগুলো সাধারণ স্বাস্থ্যসচেতনতামূলক তথ্যের জন্য। এগুলো ব্যক্তিগত রোগ নির্ণয় বা চিকিৎসকের সরাসরি পরামর্শের বিকল্প নয়।
        </div>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <a href="blogs.php" class="btn btn-outline" data-i18n="btn_all_blogs">সব প্রবন্ধ দেখুন</a>
          <a href="contact.php#appointment" class="btn btn-primary" data-i18n="hero_cta_appointment">অ্যাপয়েন্টমেন্ট অনুরোধ</a>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
