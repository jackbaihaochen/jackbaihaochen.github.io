-- phpMyAdmin SQL Dump
-- version 3.3.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 28, 2020 at 10:36 AM
-- Server version: 5.1.50
-- PHP Version: 5.2.14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wp_lottery`
--

-- --------------------------------------------------------

--
-- Table structure for table `coupon_log`
--

CREATE TABLE IF NOT EXISTS `coupon_log` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `coupon_id` int(30) NOT NULL,
  `release_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'ip address',
  `userAgent` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'browser',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `coupon_log`
--

INSERT INTO `coupon_log` (`id`, `coupon_id`, `release_time`, `user_ip`, `userAgent`) VALUES
(14, 7, '2020-10-27 16:41:42', '127.0.0.1', ''),
(15, 8, '2020-10-27 16:45:10', '127.0.0.1', ''),
(16, 10, '2020-10-27 16:45:31', '127.0.0.1', ''),
(17, 10, '2020-10-27 16:45:36', '127.0.0.1', ''),
(18, 6, '2020-10-27 16:46:24', '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhon'),
(19, 10, '2020-10-27 16:47:47', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'),
(20, 3, '2020-10-27 17:34:08', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'),
(21, 3, '2020-10-27 17:38:15', '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'),
(22, 7, '2020-10-27 17:49:08', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'),
(23, 10, '2020-10-27 17:50:02', '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'),
(24, 8, '2020-10-27 17:51:54', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'),
(25, 6, '2020-10-27 18:28:35', '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1');

-- --------------------------------------------------------

--
-- Table structure for table `coupon_sheet`
--

CREATE TABLE IF NOT EXISTS `coupon_sheet` (
  `id` int(30) NOT NULL AUTO_INCREMENT COMMENT 'coupon_id',
  `received_num` int(10) NOT NULL COMMENT '1:1-year-coupon;2:2-year-coupon;3:no-coupon;',
  `coupon_link` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'coupon_link',
  `coupon_code` int(30) NOT NULL COMMENT 'coupon_code',
  `effective_until` date NOT NULL COMMENT 'effective_until_date',
  `released_num` int(10) NOT NULL COMMENT 'the number of coupon released',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `coupon_sheet`
--

INSERT INTO `coupon_sheet` (`id`, `received_num`, `coupon_link`, `coupon_code`, `effective_until`, `released_num`) VALUES
(1, 1, 'first_prize_link_1', 101, '2020-12-31', 0),
(2, 1, 'first_prize_link_2', 102, '2020-12-31', 0),
(3, 1, 'first_prize_link_3', 103, '2020-12-31', 2),
(4, 1, 'first_prize_link_4', 104, '2020-12-31', 0),
(5, 1, 'first_prize_link_5', 105, '2020-12-31', 0),
(6, 2, 'second_prize_link_1', 201, '2020-12-31', 2),
(7, 2, 'second_prize_link_2', 202, '2020-12-31', 2),
(8, 2, 'second_prize_link_3', 203, '2020-12-31', 2),
(9, 2, 'second_prize_link_4', 204, '2020-12-31', 0),
(10, 2, 'second_prize_link_5', 205, '2020-12-31', 4);
