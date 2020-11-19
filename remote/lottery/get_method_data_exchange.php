<?php
header("content-type:text/html;charset='utf-8'");

$responseData = array("code" => 0, "message" => "");

$data = $_GET;

//get IP
function get_real_ip()
{
    $ip = FALSE;
    //客户端IP 或 NONE
    if (!empty($_SERVER["HTTP_CLIENT_IP"])) {
        $ip = $_SERVER["HTTP_CLIENT_IP"];
    }
    //多重代理服务器下的客户端真实IP地址（可能伪造）,如果没有使用代理，此字段为空
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode(", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
        if ($ip) {
            array_unshift($ips, $ip);
            $ip = FALSE;
        }
        for ($i = 0; $i < count($ips); $i++) {
            if (!preg_match("^(10│172.16│192.168).", $ips[$i])) {
                $ip = $ips[$i];
                break;
            }
        }
    }
    //客户端IP 或 (最后一个)代理服务器 IP
    return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
}
$ip_address = get_real_ip();

// 1. make connection to mysql
$link = mysqli_connect("localhost", "pub_kikihodai_co", "wsFb3pTExbAAjKbX");

// 2. check connection
if (!$link) {
    $responseData["code"] = 1;
    $responseData["message"] = "エラー：データベースにアクセス出来ない。";
    echo json_encode($responseData);
    exit;
}

//3. set charset
// $link->mysqli_set_charset("utf8");

//4. select database
mysqli_select_db($link ,"pub_kikihodai_co");

//a：核对传入number，根据number从coupon_sheet中筛选出coupon；
//b：从获得的5个coupon中随机返回一个/未抽中，返回message；
//c：向coupon_log中传入本次获取coupon的数据+coupon_sheet的计数加一；
//d：将获取到的coupon返回给前端；

//5. prepare sql
//a：核对传入number，根据number从coupon_sheet中筛选出coupon；
$number = $data['number'];
$coupon_id = null;
$sql_get_coupon = "select coupon_link,coupon_code,id from coupon_sheet where received_num='{$number}' and CURDATE()<effective_until";

//6. execute sql
$return_get_coupon = mysqli_query($link ,$sql_get_coupon);

//7. deal with returned sql data
//b：从获得的5个coupon中随机返回一个/未抽中，返回message；
$arr = array();
if (!$result_get_coupon = mysqli_fetch_assoc($return_get_coupon)) {
    $responseData["code"] = 2;
    $responseData["message"] = "残念ですが、外れ！";
    echo json_encode($responseData);
    exit;
} else {
    array_push($arr, $result_get_coupon);
    while ($result_get_coupon = mysqli_fetch_assoc($return_get_coupon)) {
        array_push($arr, $result_get_coupon);
    }
    $arr = $arr[mt_rand(0, 4)];

    //c：向coupon_log中传入本次获取coupon的数据+coupon_sheet的计数加一；
    //同时记录用户的ip和browser；
    $coupon_id = $arr["id"];
    $browser = $data["browser"];
    $sql_insert_coupon_log = "insert into coupon_log(coupon_id,user_ip,userAgent) values('{$coupon_id}','{$ip_address}','{$browser}');";
    $sql_update_coupon_sheet = "update coupon_sheet set released_num=(released_num+1) where id='{$coupon_id}';";
    $return_insert_coupon_log = mysqli_query($link ,$sql_insert_coupon_log);
    if (!$return_insert_coupon_log) {
        $responseData["code"] = 3;
        $responseData["message"] = "データ入力失敗";
        echo json_encode($responseData);
        exit;
    } else {
        $return_update_coupon_sheet = mysqli_query($link ,$sql_update_coupon_sheet);
        if (!$return_update_coupon_sheet) {
            $responseData["code"] = 4;
            $responseData["message"] = "データ入力失敗";
            echo json_encode($responseData);
            exit;
        } else {
            //d：将获取到的coupon返回给前端；
            echo json_encode($arr);
        }
    }
}

// 8. close mysql
mysqli_close($link);
