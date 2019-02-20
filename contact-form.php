<?php
    // define variables and set to empty error values
    $nameErr = $emailErr = $phoneErr = $subjectErr = $messageErr = "";

    function sanitize_input($input) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input);
        return $input;
    }

    function hasErrors($expected, $array){
        for ($i=0; $i < count($array); $i++) { 
            if ($array[$i] != $expected) return true;
        }
        return false;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        if (empty($_POST['name'])) {
            $nameErr = "You must enter your name";
        } else {
            $name = sanitize_input($_POST['name']);
            // check if it only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",  $name)) {
                $nameErr = "Only letters and spaces are allowed"; 
            }
        }

        if (empty($_POST['phone'])) {
            $phone = "";
        } else {
            $phone = sanitize_input($_POST['phone']);
        }

        if (empty($_POST['email'])) {
            $emailErr = "You must enter your email";
        } else {
            $email_visitor = sanitize_input($_POST['email']);
            if (!filter_var($email_visitor, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Invalid email format"; 
            }
        }

        if (empty($_POST['subject'])) {
            $subjectErr = "You must enter the subject";
        } else {
            $subject = sanitize_input($_POST['subject']);
        }

        if (empty($_POST['message'])) {
            $messageErr = "You must enter the message";
        } else {
            $message = sanitize_input($_POST['message']);
        }

    }

    $arrayErr = array($nameErr, $emailErr, $phoneErr, $subjectErr, $messageErr);

    // Se tra tutti gli errori NON troviamo un valore diverso da "" (vuoto) vuol dire che non ci sono errori
    if (!hasErrors("", $arrayErr)) {
        // Prepariamo l'email...
        $mydate = getdate(date("U"));

        $to = "davide.ciulla@ticino.com"; // Ricevente
        $headers   = array();
        $headers[] = "From: davide.ciulla@ticino.com";
        $headers[] = "Reply-To: davide.ciulla@ticino.com";
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-Type: text/html; charset=UTF-8";
        $header = implode("\r\n", $headers);

        $contenuto_email = ""
            . "<b>Date:</b> $mydate[weekday] $mydate[mday] $mydate[month] $mydate[year]"
            . "<br><b>Time:</b> $mydate[hours]:$mydate[minutes]:$mydate[seconds]"
            . "<br><br><b>Sender:</b>"
            . "<br>$name"
            . "<br>$email"
            . "<br>$phone"
            . "<br><br><b>Message:</b><br>"
            . nl2br($message);

        // ...possiamo quindi inviare l'email...
        mail($to, $subject, $email_content, $header);
        // ...e reindirizzarci alla pagina di contatto
        header('Location: contact.html');
    } else {
        // Se no facciamo una lista di errori e la stampiamo a schermo
        echo "<ul>";
        for ($i=0; $i < count($arrayErr); $i++) { 
            if ($arrayErr[$i] != "") echo "<li>" . $arrayErr[$i] . "</li>";
        }
        echo "</ul>";
    }
?>
