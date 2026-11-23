<?php
require_once __DIR__ . '/includes/functions.php';

$successMsg = '';
$errorMsg   = '';
$waRedirectUrl = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Honeypot anti-spam check
    if (!empty($_POST['website_url'])) {
        $errorMsg = 'Invalid submission detected.';
    } else {
        $name    = sanitizeInput($_POST['patient_name'] ?? '');
        $phone   = sanitizeInput($_POST['mobile_number'] ?? '');
        $email   = sanitizeInput($_POST['email'] ?? '');
        $date    = sanitizeInput($_POST['preferred_date'] ?? '');
        $time    = sanitizeInput($_POST['preferred_time'] ?? '');
        $dept    = sanitizeInput($_POST['consultation_type'] ?? '');
        $message = sanitizeInput($_POST['message'] ?? '');
        $consent = isset($_POST['privacy_consent']);

        if (empty($name) || empty($phone) || empty($date) || empty($time) || empty($dept) || !$consent) {
            $errorMsg = 'অনুগ্রহ করে সকল প্রয়োজনীয় ঘর পূরণ করুন এবং সম্মতি প্রদান করুন। (Please fill in all required fields and accept the privacy consent.)';
        } elseif (!isValidBDMobile($phone)) {
            $errorMsg = 'অনুগ্রহ করে একটি সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)। (Please enter a valid Bangladesh mobile number.)';
        } elseif (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errorMsg = 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন। (Please enter a valid email address.)';
        } else {
            // Save to MySQL if configured
            $pdo = getDBConnection();
            if ($pdo !== null) {
                try {
                    $stmt = $pdo->prepare(
                        "INSERT INTO appointments (patient_name, mobile_number, email, preferred_date, preferred_time, consultation_type, message, status, created_at)
                         VALUES (:name, :phone, :email, :pdate, :ptime, :dept, :msg, 'pending', NOW())"
                    );
                    $stmt->execute([
                        ':name'  => $name,
                        ':phone' => $phone,
                        ':email' => $email,
                        ':pdate' => $date,
                        ':ptime' => $time,
                        ':dept'  => $dept,
                        ':msg'   => $message
                    ]);
                } catch (PDOException $e) {
                    error_log("Appointment Insert Error: " . $e->getMessage());
                }
            }

            // Send Email Notification
            $to      = NOTIFICATION_EMAIL;
            $subject = "New Appointment Request: $name";
            $body    = "Patient Name: $name\nMobile: $phone\nEmail: $email\nPreferred Date: $date\nPreferred Time: $time\nConsultation Type: $dept\nMessage: $message\n";
            $headers = "From: noreply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n";
            @mail($to, $subject, $body, $headers);

            $waText = "Appointment Request\n"
                    . "-------------------\n"
                    . "Patient Name: $name\n"
                    . "Mobile: $phone\n"
                    . (!empty($email) ? "Email: $email\n" : "")
                    . "Preferred Date: $date\n"
                    . "Preferred Time: $time\n"
                    . "Consultation Type: $dept\n"
                    . (!empty($message) ? "Message: $message\n" : "");

            $waRedirectUrl = "https://wa.me/" . WHATSAPP_NUMBER . "?text=" . rawurlencode($waText);
            $successMsg = 'আপনার অ্যাপয়েন্টমেন্ট অনুরোধ প্রস্তুত হয়েছে। অনুগ্রহ করে নিচের বাটনে ক্লিক করে WhatsApp-এ পাঠান। (Your appointment request is ready to send via WhatsApp.)';
        }
    }
}

$pageTitle = 'Contact & Appointment | Professor Dr. Sadia Armin Khan';
$pageDesc  = 'Chamber information, consultation schedule, and online appointment request form.';
include __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-banner">
    <div class="container">
      <h1 data-i18n="contact_title">যোগাযোগ ও অ্যাপয়েন্টমেন্ট অনুরোধ</h1>
      <p data-i18n="contact_sub">চেম্বারের সময়সূচি, ঠিকানা এবং অনলাইন অ্যাপয়েন্টমেন্ট অনুরোধ ফর্ম।</p>
    </div>
  </section>

  <section class="section-pad" id="appointment">
    <div class="container grid-2" style="align-items: start;">
      <!-- Left: Chamber Info -->
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="card">
          <h2 class="card-title" data-i18n="chamber_info">চেম্বার ও হাসপাতালের তথ্য</h2>
          <p class="card-text" style="margin-bottom: 12px;">
            <strong data-i18n="hero_name">প্রফেসর ডা. সাদিয়া আরমিন খান</strong><br>
            <span data-i18n="hero_designation">প্রফেসর (সিসি), সার্জারি বিভাগ</span><br>
            <span data-i18n="hero_hospital">হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল</span>
          </p>
          <div style="background: var(--soft-aqua); border: 1px solid var(--border-mist); border-radius: 12px; padding: 14px; margin-bottom: 14px;">
            <p style="font-weight: 700; color: var(--deep-teal); margin-bottom: 4px;"><?php echo htmlspecialchars(CHAMBER_NAME_EN); ?></p>
            <p class="num-font" style="font-size: 0.92rem; color: var(--dark-slate); margin: 0;"><?php echo htmlspecialchars(CHAMBER_ADDRESS_EN); ?></p>
            <p class="num-font" style="font-size: 0.85rem; color: var(--muted-grey); margin: 6px 0 0;"><?php echo htmlspecialchars(CHAMBER_ADDRESS_BN); ?></p>
          </div>
          <p class="num-font" style="color: var(--primary-teal); font-weight: 600; margin-bottom: 12px;">
            Phone: <?php echo htmlspecialchars(CLINIC_PHONE); ?>
          </p>
          <a href="https://wa.me/<?php echo htmlspecialchars(WHATSAPP_NUMBER); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline" data-i18n="whatsapp_tooltip">
            হোয়াটসঅ্যাপ অ্যাপয়েন্টমেন্ট
          </a>
        </div>

        <div class="card">
          <h3 class="card-title" data-i18n="schedule_title">রোগী দেখার সময়সূচি</h3>
          <p class="num-font card-text" style="font-weight: 600; color: var(--deep-teal); margin-bottom: 6px;"><?php echo htmlspecialchars(SCHEDULE_EN); ?></p>
          <p class="card-text" data-i18n="schedule_note">সময়সূচি পরিবর্তনশীল। অনুগ্রহ করে আসার আগে ফোন বা হোয়াটসঅ্যাপে নিশ্চিত হয়ে নিন।</p>
        </div>

        <!-- Chamber Location Map below Chamber Information -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="background-color: var(--deep-teal); color: #fff; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
            <strong style="font-size: 0.95rem;">Chamber Location Map — Dhanmondi</strong>
            <a href="https://www.google.com/maps/search/?api=1&query=<?php echo rawurlencode(CHAMBER_NAME_EN . ', House-16, Road-2, Dhanmondi, Dhaka, Bangladesh'); ?>" target="_blank" rel="noopener noreferrer" style="color: #E7F5F6; font-size: 0.85rem; font-weight: 600; text-decoration: underline;">
              Open in Google Maps
            </a>
          </div>
          <?php if (defined('GOOGLE_MAPS_API_KEY') && GOOGLE_MAPS_API_KEY !== ''): ?>
            <iframe
              width="100%"
              height="320"
              frameborder="0"
              style="border: 0; display: block; min-height: 260px;"
              referrerpolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps/embed/v1/place?key=<?php echo rawurlencode(GOOGLE_MAPS_API_KEY); ?>&q=<?php echo rawurlencode(CHAMBER_NAME_EN . ', House 16, Road 2, Dhanmondi, Dhaka, Bangladesh'); ?>&zoom=16&solution_id=gmp_mcp_codeassist_v1_aistudio"
              allowfullscreen
              loading="lazy"
              title="Popular Diagnostic Centre Ltd., Dhanmondi Chamber Location Map">
            </iframe>
          <?php else: ?>
            <div style="background-color: var(--soft-aqua); padding: 32px 24px; text-align: center;">
              <p style="font-weight: 700; color: var(--deep-teal); margin-bottom: 6px;"><?php echo htmlspecialchars(CHAMBER_NAME_EN); ?></p>
              <p class="num-font card-text" style="font-size: 0.9rem; margin-bottom: 16px;"><?php echo htmlspecialchars(CHAMBER_ADDRESS_EN); ?></p>
              <a href="https://www.google.com/maps/search/?api=1&query=<?php echo rawurlencode(CHAMBER_NAME_EN . ', House-16, Road-2, Dhanmondi, Dhaka, Bangladesh'); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                View Chamber on Google Maps
              </a>
            </div>
          <?php endif; ?>
        </div>
      </div>

      <!-- Right: Appointment Form -->
      <div class="card">
        <h2 class="card-title" data-i18n="form_title">অ্যাপয়েন্টমেন্ট অনুরোধ ফর্ম</h2>

        <?php if ($successMsg): ?>
          <div class="alert alert-success">
            <p style="margin-bottom: 10px;"><?php echo htmlspecialchars($successMsg); ?></p>
            <?php if (!empty($waRedirectUrl)): ?>
              <a href="<?php echo htmlspecialchars($waRedirectUrl); ?>" id="waAutoLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Send Appointment Request via WhatsApp
              </a>
              <script>
                (function() {
                  var link = document.getElementById('waAutoLink');
                  if (link) { link.click(); }
                })();
              </script>
            <?php endif; ?>
          </div>
        <?php endif; ?>

        <?php if ($errorMsg): ?>
          <div class="alert alert-error"><?php echo htmlspecialchars($errorMsg); ?></div>
        <?php endif; ?>

        <form method="POST" action="contact.php#appointment" novalidate>
          <!-- Honeypot field -->
          <div style="display:none;" aria-hidden="true">
            <input type="text" name="website_url" tabindex="-1" autocomplete="off">
          </div>

          <div class="form-group">
            <label for="patient_name" class="form-label" data-i18n="form_name">রোগীর নাম *</label>
            <input type="text" id="patient_name" name="patient_name" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="mobile_number" class="form-label" data-i18n="form_phone">মোবাইল নম্বর (বাংলাদেশ) *</label>
            <input type="tel" id="mobile_number" name="mobile_number" class="form-control num-font" placeholder="01XXXXXXXXX" required>
          </div>

          <div class="form-group">
            <label for="email" class="form-label" data-i18n="form_email">ইমেইল ঠিকানা (ঐচ্ছিক)</label>
            <input type="email" id="email" name="email" class="form-control">
          </div>

          <div class="grid-2" style="gap: 14px;">
            <div class="form-group">
              <label for="preferred_date" class="form-label" data-i18n="form_date">পছন্দের তারিখ *</label>
              <input type="date" id="preferred_date" name="preferred_date" class="form-control num-font" required>
            </div>
            <div class="form-group">
              <label for="preferred_time" class="form-label" data-i18n="form_time">পছন্দের সময় *</label>
              <select id="preferred_time" name="preferred_time" class="form-control" required>
                <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="consultation_type" class="form-label" data-i18n="form_dept">পরামর্শের ধরন / বিভাগ *</label>
            <select id="consultation_type" name="consultation_type" class="form-control" required>
              <option value="Breast Surgery">Breast Surgery / ব্রেস্ট সার্জারি</option>
              <option value="Piles & Colorectal Surgery">Piles & Colorectal Surgery / পাইলস ও কলোরেক্টাল</option>
              <option value="Laparoscopic Surgery">Laparoscopic Surgery / ল্যাপারোস্কোপিক সার্জারি</option>
              <option value="General Surgical Consultation">General Surgical Consultation / সাধারণ সার্জারি পরামর্শ</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message" class="form-label" data-i18n="form_msg">সংক্ষিপ্ত বার্তা বা সমস্যার বিবরণ</label>
            <textarea id="message" name="message" rows="3" class="form-control"></textarea>
          </div>

          <div class="form-group" style="display: flex; align-items: flex-start; gap: 10px;">
            <input type="checkbox" id="privacy_consent" name="privacy_consent" required style="margin-top: 4px;">
            <label for="privacy_consent" style="font-size: 0.88rem; color: var(--muted-grey);" data-i18n="form_consent">
              আমি সম্মতি দিচ্ছি যে আমার প্রদত্ত তথ্য শুধুমাত্র অ্যাপয়েন্টমেন্ট যোগাযোগের জন্য ব্যবহৃত হবে। *
            </label>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%;" data-i18n="form_submit">অ্যাপয়েন্টমেন্ট অনুরোধ পাঠান</button>
          <p style="font-size: 0.85rem; color: var(--muted-grey); margin-top: 12px;" data-i18n="form_note">
            বিঃদ্রঃ এটি একটি অ্যাপয়েন্টমেন্ট অনুরোধ মাত্র। আমাদের ক্লিনিক থেকে ফোন করে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করা হবে।
          </p>
        </form>
      </div>
    </div>
  </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
