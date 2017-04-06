<?php
$recepient = "mrvershynin@gmail.com";
$sitename = "AZMT Production";

$email = trim($_GET["email"]);
$name = trim($_GET["name"]);
$msg = trim($_GET["msg"]);

if ($name!='' and $email!='' and $msg!='') {
    $message = "$email $name $msg";
    $res = mail($recepient, 'You letter from AZMT', $message);
    if ($res) {
        echo 1;
    } else {
        echo 0;
    }
}
else {
    echo 0;
}

?>