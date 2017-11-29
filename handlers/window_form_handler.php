<?php
if(isset($_POST['formdata'])){
    $data = htmlspecialchars($_POST['formdata']);
    echo $data;
}
?>