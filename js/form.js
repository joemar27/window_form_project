var location_code = {
     "BASE": "Basement",
     "BATH": "Bathroom",
     "BED": "Bedroom",
     "CL": "Closet",
     "DEN": "Den",
     "FOY": "Foyer",
     "GR": "Game Room",
     "GAR": "Garage",
     "KIT": "Kitchen",
     "LIV": "Living Room",
     "OFF": "Office",
     "SUN": "Sunroom",
     "UR": "Utility Room"
};

var series_code = {
     "FS": "Founder Series",
     "365": "Comfort 365"
};

var style_code = {
     "AWN": "Awning",
     "GW": "Garden Window",
     "CS": "Casement Single",
     "CS2": "Casement Double",
     "CS3": "Casement Triple Lite",
     "CS4": "Casement Four Lite",
     "CS5": "Casement Five Lite",
     "DH": "Double Hung",
     "DHO": "Double Hung Orial",
     "SHO": "Single Hung Orial",
     "HOP": "Hopper",
     "PW": "Picture Window",
     "DHP": "Picture w/2 DH Flank",
     "2P": "Slider",
     "3P": "Slider 3 Panel",
     "DHBOW": "Double Hung Bow",
     "CSBOW": "Casement Box",
     "DHBAY": "Double Hung Bay",
     "CT": "Circle Top",
     "CTX": "Extended Circle Top",
     "EB": "Eyebrow",
     "EP": "Ellipse",
     "EPX": "Ext Ellipse",
     "FC": "Full Circle",
     "HEB": "Half Eyebrow",
     "HEX": "Hexagon",
     "OCT": "Octagon",
     "OCTX": "Ext Octagon",
     "PEN": "Pentagon",
     "TRAP": "Trapazoid",
     "90TRI": "90 Deg Triangle",
     "ISOS": "Isosceles Triangle"
};

var colors = {
     "WH": "White",
     "TAN": "Tan",
     "ADB": "Adobe",
     "BRZ": "Bronze",
     "CB": "Colonial Blue",
     "CH": "Cherry",
     "CG": "Cottage Grey",
     "EO": "English Oak",
     "DO": "Dark Oak"
};

var grid_type = {
     "Flate": "Flate",
     "Sculptured": "Sculptured"
};

var grid_pattern = {
     "PR": "Prarie",
     "OPR": "Open Prarie",
     "COL": "Colonial",
     "DMD": "Diamond",
     "NONE": "None"
};

var handling = {
     "X": "Fixed",
     "O": "Operable",
     "L": "Left",
     "R": "Right"
};

var sub_location = {
     "L": "Left",
     "R": "Right",
     "T": "Top",
     "B": "Bottom",
     "A": "All",
     "F": "Flankers"
};

var yes_no = {
     "Y": "Yes",
     "N": "No"
};

(function(){
     //  Location Value Loader
     for(var key in location_code){
          if(location_code.hasOwnProperty(key)){
               $('#location_code').append("<option value="+key+"-"+location_code[key]+">"+location_code[key]+"</option>");
          }
     }
     //  Series Code Loader
     for(var key in series_code){
          if(series_code.hasOwnProperty(key)){
               $('#series_code').append("<option value="+key+"-"+series_code[key]+">"+series_code[key]+"</option>");
          }
     }
     //  Style Code Loader
     for(var key in style_code){
          if(style_code.hasOwnProperty(key)){
               $('#style_code').append("<option value="+key+"-"+style_code[key]+">"+style_code[key]+"</option>");
          }
     }
     //  Color Code Loader
     for(var key in colors){
          if(colors.hasOwnProperty(key)){
               $('#exterior_color, #interior_color, #grid_color').append("<option value="+key+"-"+colors[key]+">"+colors[key]+"</option>");
          }
     }
     //  Grid Type Loader
     for(var key in grid_type){
          if(grid_type.hasOwnProperty(key)){
               $('#grid_type').append("<option value="+key+"-"+grid_type[key]+">"+grid_type[key]+"</option>");
          }
     }
     //  Grid Pattern Loader
     for(var key in grid_pattern){
          if(grid_pattern.hasOwnProperty(key)){
               $('#grid_pattern').append("<option value="+key+"-"+grid_pattern[key]+">"+grid_pattern[key]+"</option>");
          }
     }
     //  Grid Location Loader
     for(var key in sub_location){
          if(sub_location.hasOwnProperty(key)){
               $('#grid_location, #obscured_location, #tempered_location').append("<option value="+key+"-"+sub_location[key]+">"+sub_location[key]+"</option>");
          }
     }
     //  Handling Loader
     for(var key in handling){
          if(handling.hasOwnProperty(key)){
               $('#handling_1, #handling_2, #handling_3, #handling_4, #handling_5').append("<option value="+key+"-"+handling[key]+">"+handling[key]+"</option>");
          }
     }
     //  Yes/No Loader
     for(var key in yes_no){
          if(yes_no.hasOwnProperty(key)){
               $('#full_screen_response').append("<option value="+key+"-"+yes_no[key]+">"+yes_no[key]+"</option>");
          }
     }
     
})();