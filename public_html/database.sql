-- Database Schema for Professor Dr. Sadia Armin Khan Website
-- Import this file into your cPanel MySQL database via phpMyAdmin.

CREATE DATABASE IF NOT EXISTS `dr_sadia_armin_khan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `dr_sadia_armin_khan`;

CREATE TABLE IF NOT EXISTS `appointments` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `patient_name` VARCHAR(150) NOT NULL,
  `mobile_number` VARCHAR(30) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `preferred_date` DATE NOT NULL,
  `preferred_time` VARCHAR(80) NOT NULL,
  `consultation_type` VARCHAR(120) NOT NULL,
  `message` TEXT DEFAULT NULL,
  `status` ENUM('pending', 'contacted', 'confirmed', 'cancelled') DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
