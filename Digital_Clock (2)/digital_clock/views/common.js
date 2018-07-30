  function IsSet(varname){
    return typeof varname != "undefined";
  }
  
  function GetDefIni( name ){    
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
      return localStorage[name];
    }else{
      return GetDefIni(name);
    } 
  }