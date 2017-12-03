var base_location_section, opening_size_section, window_type_section, color_section, grid_section, obscured_section, tempered_section, unit_operation_section, full_screen_section;

base_location_section = 
    '<h3>Base Location</h3>'+
    '<div class="form-group">'+
        '<label>Location</label>'+
        '<select class="form-control location_code" name="location_code">'+
        '</select>'+
    '</div>';

opening_size_section = 
    '<h3>Opening Size</h3>'+
    '<div class="form-group">'+
        '<label>Width</label>'+
        '<input class="form-control" type="number" name="opening_size_width">'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Height</label>'+
        '<input class="form-control" type="number" name="opening_size_height">'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Total UI</label>'+
        '<input class="form-control" type="number" name="opening_size_total_ui">'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Leg Height</label>'+
        '<input class="form-control" type="number" name="opening_size_leg_height">'+
    '</div>';

window_type_section = 
    '<h3>Window Type</h3>'+
    '<div class="form-group">'+
        '<label>Series Code</label>'+
        '<select class="form-control series_code" name="series_code"></select>'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Style Code</label>'+
        '<select class="form-control style_code" name="style_code"></select>'+
    '</div>';

color_section = 
    '<h3>Color</h3>'+
    '<div class="form-group">'+
        '<label>Exterior</label>'+
        '<select class="form-control exterior_color" name="exterior_color"></select>'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Interior</label>'+
        '<select class="form-control interior_color" name="interior_color"></select>'+
    '</div>';

grid_section = 
    '<h3>Grid&#40;s&#41;</h3>'+
    '<div class="form-group">'+
        '<label>Type</label>'+
        '<select class="form-control grid_type" name="grid_type"></select>'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Color</label>'+
        '<select class="form-control grid_color" name="grid_color"></select>'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Pattern</label>'+
        '<select class="form-control grid_pattern" name="grid_pattern"></select>'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Location</label>'+
        '<select class="form-control grid_location" name="grid_location"></select>'+
    '</div>'+
    '<div class="form-group">'+
        '<label for="vertical_num">Vertical</label>'+
        '<input class="form-control" name="vertical_num" id="vertical_num" type="number">'+
    '</div>'+
    '<div class="form-group">'+
        '<label>Horizontal</label>'+
        '<input class="form-control" name="horizontal_num" type="number">'+
    '</div>';

obscured_section =
    '<h3>Obscured</h3>'+
    '<div class="form-group">'+
        '<label>Location</label>'+
        '<select class="form-control obscured_location" name="obscured_location"></select>'+
    '</div>';

tempered_section = 
    '<h3>Tempered</h3>'+
    '<div class="form-group">'+
        '<label>Location</label>'+
        '<select class="form-control tempered_location" name="tempered_location"></select>'+
    '</div>';

unit_operation_section = 
    '<h3>Unit Operation / Venting</h3>'+
    '<span class="help-block">PD, Casement, etc.</span>'+
    '<div class="form-group">'+
        '<select class="form-control handling_1" name="handling_1"></select>'+
        '<select class="form-control handling_2" name="handling_2"></select>'+
        '<select class="form-control handling_3" name="handling_3"></select>'+
        '<select class="form-control handling_4" name="handling_4"></select>'+
        '<select class="form-control handling_5" name="handling_5"></select>'+
    '</div>';

full_screen_section = 
    '<h3>Full Screen</h3>'+
    '<div class="form-group">'+
        '<span class="help-block">Yes/No</span>'+
        '<select class="form-control full_screen_response" name="full_screen_response"></select>'+
    '</div>';