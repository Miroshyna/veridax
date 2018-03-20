<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>


<?php
if(!empty($_POST['email'] ))
{
    $to = "hello@atricore.com"; // YOUR email!
    $from = 'veridax@gmail.com';  // FROM... (email from site - for mail-client)
    $subject = "Subscribe";
    $message = 'EMAIL: '.$_POST['email'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <veridax@gmail.com>\r\n"; // mail header (FROM...)
    $result = mail($to, $subject, $message, $headers);

    if ($result){
        echo "<p>THANK YOU!</p>";
    }
    else{
        echo "<p>ERROR! Try again please.</p>";
    }
}
else {
    echo "<p>We need your email...</p>";
}
?>

</body>
</html>