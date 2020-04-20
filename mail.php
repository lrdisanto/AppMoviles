<?php

if (isset($_POST['enviar'])) {
    if (!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($POST['msg']) && !empty($_POST['email'])) {
        $name= $POST_['name'];
        $asunto= $POST_['asunto'];
        $msg= $POST_['msg'];
        $email= $POST_['email'];

        $header = "From: noreply@example.com" . "\r\n";

        $header .= "Reply-To: noreply@example.com" . "\r\n";

        $header .= "X-mailer: PHP/". phpversion();
        $mail= @mail($email, $asunto, $msj, $header);

        if ($mail) {
            echo "<h4> Mail enviado exitosamente</h4";
        }


    } 
}



