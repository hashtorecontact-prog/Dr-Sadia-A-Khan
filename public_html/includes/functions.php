<?php
require_once __DIR__ . '/config.php';

/**
 * Get PDO Database Connection
 * Returns null if database is not yet configured so the public site still renders gracefully.
 */
function getDBConnection(): ?PDO {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    if (DB_NAME === 'your_cpanel_db_name' || empty(DB_NAME)) {
        return null;
    }

    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch (PDOException $e) {
        error_log("Database Connection Error: " . $e->getMessage());
        return null;
    }
}

/**
 * Sanitize user input
 */
function sanitizeInput(string $data): string {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate Bangladesh Mobile Number
 * Accepts formats: 01XXXXXXXXX, +8801XXXXXXXXX, 8801XXXXXXXXX
 */
function isValidBDMobile(string $phone): bool {
    $cleaned = preg_replace('/[\s\-\(\)]/', '', $phone);
    return (bool) preg_match('/^(?:\+?88)?01[3-9]\d{8}$/', $cleaned);
}

/**
 * Check if current page matches nav item
 */
function isActivePage(string $pageName): string {
    $current = basename($_SERVER['PHP_SELF']);
    return ($current === $pageName) ? 'active' : '';
}
