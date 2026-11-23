<?php
/**
 * Central Website, Doctor Profile & Database Configuration
 * Professor Dr. Sadia Armin Khan
 * 
 * All doctor details, chamber address, schedule, contact numbers,
 * and social media links are managed from this single file.
 */

// Site Settings
define('SITE_NAME', 'Professor Dr. Sadia Armin Khan');
define('SITE_URL', 'https://yourdomain.com'); // Update with your actual domain (no trailing slash)

// Doctor Profile (Verified)
define('DOCTOR_NAME_EN', 'Professor Dr. Sadia Armin Khan');
define('DOCTOR_NAME_BN', 'অধ্যাপক ডা. সাদিয়া আরমিন খান');
define('DOCTOR_QUALIFICATIONS', 'MBBS (DMC), FCPS (Surgery), MRCS (Edin), FMAS (India)');
define('DOCTOR_DESIGNATION_EN', 'Professor (CC), Department of Surgery');
define('DOCTOR_DESIGNATION_BN', 'অধ্যাপক (সিসি), সার্জারি বিভাগ');
define('DOCTOR_HOSPITAL_EN', 'Holy Family Red Crescent Medical College Hospital');
define('DOCTOR_HOSPITAL_BN', 'হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ হাসপাতাল');

// Chamber & Schedule (Verified)
define('CHAMBER_NAME_EN', 'Popular Diagnostic Centre Ltd.');
define('CHAMBER_NAME_BN', 'পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড');
define('CHAMBER_ADDRESS_EN', 'Building-1, Room No-503, House-16, Road-2, Dhanmondi, Dhaka, Bangladesh.');
define('CHAMBER_ADDRESS_BN', 'ভবন-1, রুম নং-503, বাড়ি-16, রোড-2, ধানমন্ডি, ঢাকা।');
define('SCHEDULE_EN', 'Saturday to Thursday: 6:00 PM – 9:00 PM (Friday & Govt. Holidays: Closed)');
define('SCHEDULE_BN', 'শনিবার থেকে বৃহস্পতিবার: সন্ধ্যা 6:00 PM – রাত 9:00 PM (শুক্রবার ও সরকারি ছুটির দিন বন্ধ)');

// Contact & WhatsApp Configuration
define('CLINIC_PHONE', '+880 1779-224452');
define('WHATSAPP_NUMBER', '8801779224452'); // International format without +, spaces, or hyphens
define('NOTIFICATION_EMAIL', 'appointments@yourdomain.com'); // Email to receive appointment requests

// Social Media URLs (Leave empty '' to hide a platform; add valid URLs to display)
define('SOCIAL_FACEBOOK', 'https://www.facebook.com/sadiaarmindr/');
define('SOCIAL_YOUTUBE', '');
define('SOCIAL_INSTAGRAM', '');
define('SOCIAL_LINKEDIN', '');

// Google Maps Platform (Maps Embed API key restricted to HTTP referrers; leave empty until configured on server)
define('GOOGLE_MAPS_API_KEY', '');

// Database Configuration (cPanel MySQL)
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_cpanel_db_name');
define('DB_USER', 'your_cpanel_db_user');
define('DB_PASS', 'your_cpanel_db_password');
define('DB_CHARSET', 'utf8mb4');

// Timezone
date_default_timezone_set('Asia/Dhaka');

// Error Reporting (Set to 0 in production)
ini_set('display_errors', 0);
error_reporting(E_ALL);
