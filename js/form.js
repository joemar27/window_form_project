

(function(){
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
     
})();