<?php

$email = $__POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );

    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if (IsInjected($email)) {
    echo "Bad Email Value!";
    exit;
}

if(!isset($_POST['submit'])) {
    echo "error; you need to submit the form!";
}


if(empty($email) || empty($subject) || empty($message)) {
    echo "Please fill in all fields";
    exit;
}

$to = "miaf@sas.upenn.edu";
$email_subject = "New Form Submission: $subject";
$email_body = "New Message from $email.\n \n \n $message";
$headers = "From $email\n";

if (mail($to, $email_subject, $message, $headers)) {
    echo "The email was sent!";
} else {
    echo "The email failed to send :( ";
}

?>