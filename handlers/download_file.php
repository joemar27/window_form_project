<?php
    $attachment_location = $_SERVER["DOCUMENT_ROOT"] . "/window_form_project/handlers/windowform.csv";
    if (file_exists($attachment_location)) {

        header($_SERVER["SERVER_PROTOCOL"] . " 200 OK");
        header("Cache-Control: public"); // needed for internet explorer
        header("Content-Type: application/csv");
        header("Content-Transfer-Encoding: Binary");
        // header("Content-Length:".filesize($attachment_location));
        header("Content-Disposition: attachment; filename=windowform.csv");
        readfile($attachment_location);
        die();
    } else {
        die("Error: File not found.");
    }
?>