var LineItemCounter, WindowFormData;

LineItemCounter = 0;
WindowFormData = {};

function AppendAccordianPanel(){
    //  Check for previous line item and close it if it exists.
    var id = "collapse" + LineItemCounter;
    // if(!(document.getElementById(id) === null)){
    //     $('#'+id).collapse('toggle');
    // }
    for(var a = 1; a <= LineItemCounter; a++){
        if($('#collapse'+a).hasClass('show')){
            $('#collapse'+a).collapse('toggle');
        }
    }
    //  Add 1 to the line item count then create html node.
    LineItemCounter++
    var panel = '<div class="panel panel-default">' +
                    '<div class="panel-heading" role="tab" id="heading'+LineItemCounter+'">' +
                        '<h4 class="panel-title">' +
                            '<a role="button" data-toggle="collapse" ' + 'data-parent="#accordion" href="#collapse'+LineItemCounter+'" ' + 'aria-expanded="true" aria-controls="collapse'+LineItemCounter+'">'+
                                'Line Item #'+ LineItemCounter +
                            '</a>' +
                        '</h4>' +
                    '</div>' +
                    '<div id="collapse'+LineItemCounter+'" class="panel-collapse collapse show" role="tabpanel" aria-labelledby="heading'+LineItemCounter+'">'+
                    '   <div class="panel-body" id=PanelBody_'+LineItemCounter+'>'+
                        '</div>'+
                    '</div>'+
                '</div>';
    return $('#accordion').append(panel);
}

function AppendFormSection(){
    var formstring;
    formstring = 
        base_location_section + opening_size_section + window_type_section + color_section + grid_section + obscured_section + tempered_section + unit_operation_section + full_screen_section;

        return $('#PanelBody_'+LineItemCounter).append(formstring);
}

function AddSelectOptions(){
     //  Location Value Loader
     for(var key in location_code){
          if(location_code.hasOwnProperty(key)){
               $('.location_code').append("<option value="+key+"-"+location_code[key]+">"+location_code[key]+"</option>");
          }
     }
     //  Series Code Loader
     for(var key in series_code){
          if(series_code.hasOwnProperty(key)){
               $('.series_code').append("<option value="+key+"-"+series_code[key]+">"+series_code[key]+"</option>");
          }
     }
     //  Style Code Loader
     for(var key in style_code){
          if(style_code.hasOwnProperty(key)){
               $('.style_code').append("<option value="+key+"-"+style_code[key]+">"+style_code[key]+"</option>");
          }
     }
     //  Color Code Loader
     for(var key in colors){
          if(colors.hasOwnProperty(key)){
               $('.exterior_color, .interior_color, .grid_color').append("<option value="+key+"-"+colors[key]+">"+colors[key]+"</option>");
          }
     }
     //  Grid Type Loader
     for(var key in grid_type){
          if(grid_type.hasOwnProperty(key)){
               $('.grid_type').append("<option value="+key+"-"+grid_type[key]+">"+grid_type[key]+"</option>");
          }
     }
     //  Grid Pattern Loader
     for(var key in grid_pattern){
          if(grid_pattern.hasOwnProperty(key)){
               $('.grid_pattern').append("<option value="+key+"-"+grid_pattern[key]+">"+grid_pattern[key]+"</option>");
          }
     }
     //  Grid Location Loader
     for(var key in sub_location){
          if(sub_location.hasOwnProperty(key)){
               $('.grid_location, .obscured_location, .tempered_location').append("<option value="+key+"-"+sub_location[key]+">"+sub_location[key]+"</option>");
          }
     }
     //  Handling Loader
     for(var key in handling){
          if(handling.hasOwnProperty(key)){
               $('.handling_1, .handling_2, .handling_3, .handling_4, .handling_5').append("<option value="+key+"-"+handling[key]+">"+handling[key]+"</option>");
          }
     }
     //  Yes/No Loader
     for(var key in yes_no){
          if(yes_no.hasOwnProperty(key)){
               $('.full_screen_response').append("<option value="+key+"-"+yes_no[key]+">"+yes_no[key]+"</option>");
          }
     }
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

function CollectFormData(){
    var customer_name, completed_by, job_number, line_item;
    customer_name = $('#customer_name').val();
    completed_by = $('#completed_by').val();
    job_number = $('#job_number').val();

    WindowFormData['customer_name'] = customer_name
    WindowFormData['completed_by'] = completed_by
    WindowFormData['job_number'] = job_number

    WindowFormData['LineItems'] = [];
    for(var i=1;i <= LineItemCounter; i++){
        var lineitem_obj = {};
        $('#PanelBody_'+i+' input,select').each(function () {
            var name = this.name;
            var value = this.value;
            lineitem_obj[name] = value;
        });
        WindowFormData['LineItems'].push(lineitem_obj);
    }

    $.ajax({
        method: "POST",
        url: "handlers/window_form_handler.php",
        data: { formdata: JSON.stringify(WindowFormData) },
        success: function(data){
            GetCSV();
        }
    });
}

function GetCSV(){
    $.ajax({
        url: "handlers/download_file.php",
        type: "POST",
        success: function(){
            window.location = 'handlers/download_file.php';
        }
    });
}

//  Event Listeners
$('#add_line_item_btn').click(function(){
    AppendAccordianPanel();
    AppendFormSection();
    AddSelectOptions();
});

$('#window_form').submit(function(event){
    event.preventDefault();
    CollectFormData();
    // var result = isEmpty(WindowFormData);
});

/* customer_name, completed_by, job_number, location_code[], opening_size_width[], opening_size_height[], opening_size_total_ui[], opening_size_leg_height[], series_code[], style_code[], exterior_color[], interior_color[], grid_type[], grid_color[], grid_pattern[], grid_location[], vertical_num[], horizontal_num[], obscured_location[], tempered_location[], handling_1[], handling_2[], handling_3[], handling_4[], handling_5[], full_screen_response[]*/