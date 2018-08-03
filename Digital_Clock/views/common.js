
    function IsSet(varname){
    return typeof varname != "undefined";//this function makes use of the typeof operator, which returns the string "undetfined", when a variable is not defined
  }
  
  function GetDefIni( name ){   //this function just reset everything back to it was before 
    switch( name ){
      case "alarm_on": return 0;
      case "alarm_hour": return 0;
      case "alarm_min": return 0;      
      case "am_pm": return 1;
      case "font_color": return "#00FF00";
      default: return "";
    }
  }
  
  function GetIni( name ){        
    if( IsSet(localStorage[name]) ){
      return localStorage[name];//if local storage [name] is set somewhere then return local strorage [name]
    }else{
      return GetDefIni(name);//else  it set it to false
    } 
  }
