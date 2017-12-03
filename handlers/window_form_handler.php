<?php
if(isset($_POST['formdata'])){
    // $data = json_decode($_POST['formdata'], true);
    $data = $_POST['formdata'];
    CreateCSV($data);
}

function CreateCSV($formdata){
    $lineitem = $formdata['LineItem_1'];
    echo $lineitem['location_code'];
    // open the file "demosaved.csv" for writing
    // $file = fopen('windowform.csv', 'w');

    // save the column headers
    // fputcsv($file, array('Customer Name', 'Completed By', 'Job Number'));
    // fputcsv($file, array($formdata['customer_name'], $formdata['completed_by'], $formdata['job_number']));
/*
'Location Code', 'Opening Size Width', 'Opening Size Height', 'Opening Size Total UI', 'Opening Size Leg Height', 'Series Code', 'Style Code', 'Exterior Color', 'Interior Color', 'Grid Type', 'Gride Color', 'Grid Pattern', 'Grid Location', 'Vertical Num', 'Horizontal Num', 'Obscured Location', 'Tempered Location', 'Handling 1', 'Handling 2', 'Handling 3', 'Handling 4', 'Handing 5', 'Full Screen Response'
*/
/* customer_name, completed_by, job_number, location_code[], opening_size_width[], opening_size_height[], opening_size_total_ui[], opening_size_leg_height[], series_code[], style_code[], exterior_color[], interior_color[], grid_type[], grid_color[], grid_pattern[], grid_location[], vertical_num[], horizontal_num[], obscured_location[], tempered_location[], handling_1[], handling_2[], handling_3[], handling_4[], handling_5[], full_screen_response[]*/

    // Sample data. This can be fetched from mysql too
    // $data = array(
    // array('Data 11', 'Data 12', 'Data 13', 'Data 14', 'Data 15')
    // );

    // save each row of the data
    // foreach ($data as $row)
    // {
    //     fputcsv($file, $row);
    // }

    // Close the file
    // fclose($file);
}
/* 
{"customer_name":"Joe","completed_by":"Steve","job_number":"1","LineItem_1":{"location_code":"BASE-Basement","opening_size_width":"","opening_size_height":"","opening_size_total_ui":"","opening_size_leg_height":"","series_code":"365-Comfort","style_code":"AWN-Awning","exterior_color":"WH-White","interior_color":"WH-White","grid_type":"Flate-Flate","grid_color":"WH-White","grid_pattern":"PR-Prarie","grid_location":"L-Left","vertical_num":"","horizontal_num":"","obscured_location":"L-Left","tempered_location":"L-Left","handling_1":"X-Fixed","handling_2":"X-Fixed","handling_3":"X-Fixed","handling_4":"X-Fixed","handling_5":"X-Fixed","full_screen_response":"Y-Yes"}}
*/
?>