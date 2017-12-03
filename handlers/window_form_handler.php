<?php
if(isset($_POST['formdata'])){
    // $data = json_decode($_POST['formdata'], true);
    $data = json_decode($_POST['formdata'], true);
    CreateCSV($data);
}

function CreateCSV($formdata){
    // Form input values
    $line_items = $formdata['LineItems'];

    // Line item data to be saved to csv
    $lineitem_data = array();
    /* Loop through form line items, create array with values, and push into local array variable.*/
    for($i = 0; $i < count($line_items); $i++){
        $line_data = array();
        foreach($line_items[$i] as $key => $value){
            array_push($line_data, $value);
        }
        array_push($lineitem_data, $line_data);
    }
    // Open csv file
    $file = fopen('windowform.csv', 'w');

    // Customer column header
    fputcsv($file, array('Customer Name', 'Completed By', 'Job Number'));
    // Save customer information
    fputcsv($file, array($formdata['customer_name'], $formdata['completed_by'], $formdata['job_number']));

    // Line item column header
    fputcsv($file, array('Location Code', 'Opening Size Width', 'Opening Size Height', 'Opening Size Total UI', 'Opening Size Leg Height', 'Series Code', 'Style Code', 'Exterior Color', 'Interior Color', 'Grid Type', 'Gride Color', 'Grid Pattern', 'Grid Location', 'Vertical Num', 'Horizontal Num', 'Obscured Location', 'Tempered Location', 'Handling 1', 'Handling 2', 'Handling 3', 'Handling 4', 'Handing 5', 'Full Screen Response'));
    // Save line item information
    foreach($lineitem_data as $row){
        fputcsv($file, $row);
    }
    // Close the file
    fclose($file);

}
?>