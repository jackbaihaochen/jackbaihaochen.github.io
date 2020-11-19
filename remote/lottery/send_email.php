<?php
require 'vendor/autoload.php';

$data = $_GET;
$coupon_code = $data['coupon_code'];
$coupon_link = $data['coupon_link'];
$email_addr = $data['email_addr'];
$email_msg = $data['email_msg'];
$email_name = $data['email_name'];

$email = new \SendGrid\Mail\Mail();
$email->setFrom("himalayajp@em971.kikihodai.com","himalaya Japan");
$email->setSubject("himalaya聴き放題のクーポンをご利用ください");
$email->addTo("{$email_addr}","{$email_name}");
$email->addContent("text/html","<p>{$email_msg}</p>");

$sendgrid =  new \SendGrid("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");

try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage() . "\n";
}