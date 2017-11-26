<?php
$location_code= $_POST['location_code'];

foreach($location_code as $location){
    echo "location: " . $location . "<br>";
}
?>