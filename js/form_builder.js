var LineItemCounter;

LineItemCounter = 0;

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
        '<h3>Base Location</h3>'+
        '<div class="form-group">'+
            '<label>Location</label>'+
            '<select class="form-control location_code" name="location_code[]">'+
            '</select>'+
        '</div>'+
        '<h3>Opening Size</h3>'+
        '<div class="form-group">'+
            '<label>Width</label>'+
            '<input class="form-control" type="number" name="opening_size_width[]">'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Height</label>'+
            '<input class="form-control" type="number" name="opening_size_height[]">'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Total UI</label>'+
            '<input class="form-control" type="number" name="opening_size_total_ui[]">'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Leg Height</label>'+
            '<input class="form-control" type="number" name="opening_size_leg_height[]">'+
        '</div>'+
        '<h3>Window Type</h3>'+
        '<div class="form-group">'+
            '<label>Series Code</label>'+
            '<select class="form-control series_code" name="series_code[]"></select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Style Code</label>'+
            '<select class="form-control style_code" name="style_code[]"></select>'+
        '</div>'+
        '<h3>Color</h3>'+
        '<div class="form-group">'+
            '<label>Exterior</label>'+
            '<select class="form-control exterior_color" name="exterior_color[]"></select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Interior</label>'+
            '<select class="form-control interior_color" name="interior_color[]"></select>'+
        '</div>'+
        '<h3>Grid&#40;s&#41;</h3>'+
        '<div class="form-group">'+
            '<label>Type</label>'+
            '<select class="form-control grid_type" name="grid_type[]"></select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Color</label>'+
            '<select class="form-control grid_color" name="grid_color[]"></select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Pattern</label>'+
            '<select class="form-control grid_pattern" name="grid_pattern[]"></select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Location</label>'+
            '<select class="form-control grid_location" name="grid_location[]"></select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="vertical_num">Vertical</label>'+
            '<input class="form-control" name="vertical_num" id="vertical_num" type="number">'+
        '</div>'+
        '<div class="form-group">'+
            '<label>Horizontal</label>'+
            '<input class="form-control" name="horizontal_num[]" type="number">'+
        '</div>'+
        '<h3>Obscured</h3>'+
        '<div class="form-group">'+
            '<label>Location</label>'+
            '<select class="form-control obscured_location" name="obscured_location[]"></select>'+
        '</div>'+
        '<h3>Tempered</h3>'+
        '<div class="form-group">'+
            '<label>Location</label>'+
            '<select class="form-control tempered_location" name="tempered_location[]"></select>'+
        '</div>'+
        '<h3>Unit Operation / Venting</h3>'+
        '<span class="help-block">PD, Casement, etc.</span>'+
        '<div class="form-group">'+
            '<select class="form-control handling_1" name="handling_1[]"></select>'+
            '<select class="form-control handling_2" name="handling_2[]"></select>'+
            '<select class="form-control handling_3" name="handling_3[]"></select>'+
            '<select class="form-control handling_4" name="handling_4[]"></select>'+
            '<select class="form-control handling_5" name="handling_5[]"></select>'+
        '</div>'+
        '<h3>Full Screen</h3>'+
        '<div class="form-group">'+
            '<span class="help-block">Yes/No</span>'+
            '<select class="form-control full_screen_response" name="full_screen_response[]"></select>'+
        '</div>';
        return $('#PanelBody_'+LineItemCounter).append(formstring);
}
$('#add_line_item_btn').click(function(){
    AppendAccordianPanel();
    AppendFormSection();
    AddSelectOptions();
});
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
     
};