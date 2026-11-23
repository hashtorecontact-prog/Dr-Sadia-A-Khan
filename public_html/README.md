# Professor Dr. Sadia Armin Khan — Official Website (cPanel PHP 8+ Deployment)

## 1. Upload Files to cPanel
1. Log in to your **cPanel** account.
2. Open **File Manager** and navigate to `public_html/`.
3. Upload all contents inside the `/public_html` folder of this project directly into your server's `public_html/` directory.

## 2. Create MySQL Database & User
1. In cPanel, go to **MySQL® Databases**.
2. Create a new database (e.g., `cpaneluser_drsadia`).
3. Create a new database user with a strong password.
4. Add the user to the database and grant **ALL PRIVILEGES**.

## 3. Import `database.sql`
1. In cPanel, open **phpMyAdmin**.
2. Select your newly created database from the left sidebar.
3. Click **Import**, choose `database.sql` from your computer, and click **Go**.

## 4. Configure `includes/config.php`
Open `public_html/includes/config.php` and update:
- `SITE_URL`: Your domain (e.g., `https://drsadiaarminkhan.com`)
- `CLINIC_PHONE`: Your chamber phone number
- `WHATSAPP_NUMBER`: Your WhatsApp number in international format without `+` (e.g., `88017XXXXXXXX`)
- `NOTIFICATION_EMAIL`: Email address to receive appointment requests
- `DB_NAME`, `DB_USER`, `DB_PASS`: Your MySQL database credentials

## 5. Replace Doctor Portrait & Gallery Images
- Replace `assets/svg/doctor-portrait-placeholder.svg` (or update the `<img>` `src` in `index.php` and `about.php`) with the high-resolution portrait of Professor Dr. Sadia Armin Khan.
- Replace vector placeholders in `gallery.php` with actual clinic/seminar photographs as needed.
