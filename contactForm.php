<?php 
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'asaloh@mail.com';
    $headers = "FRom: ".$mailFrom;
    $txt = "yuo have recieved an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailSend");
}