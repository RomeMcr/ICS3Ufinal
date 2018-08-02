

  function OnResize(){//just make the style of the objects
    obj = document.getElementById('time');
    obj.style.fontSize = Math.max( 8, document.documentElement.clientWidth/3 )+"px";
    obj = document.getElementById('day_of_week');
    obj.style.fontSize = Math.max( 6, document.documentElement.clientWidth/20 )+"px";
    obj = document.getElementById('date');
    obj.style.fontSize = Math.max( 6, document.documentElement.clientWidth/20 )+"px";
    obj = document.getElementById('am_pm');
    obj.style.fontSize = Math.max( 6, document.documentElement.clientWidth/20 )+"px";
    obj = document.getElementById('alarm');    
    obj.style.fontSize = Math.max( 6, document.documentElement.clientWidth/20 )+"px";    
    obj = document.getElementById('sec');    
    obj.style.fontSize = Math.max( 6, document.documentElement.clientWidth/20 )+"px";
    
    tableObj = document.getElementById('tableObj');    
    tmp = Math.max( 0, (document.documentElement.clientHeight-tableObj.offsetHeight)/2 )+"px";
    tableObj.style.paddingTop = tmp;         
  }

  function format2(i) {
    return i < 10 ? "0"+i : i;//return i is smaller than 10 then "0" plus i else just i 
  }
  
  function formatTime( hour, min, sec) {  
    am_pm_text = "";    
    if( am_pm ){
      if( hour >= 12 ){
        hour -= 12;//if hours is bigger or equel to 12 then display pm
        am_pm_text = " PM";
      }else{
        am_pm_text = " AM";//else display am
      }
      if( hour == 0 )
        hour = 12; //if hours equel equels 0 then hour equel to 12     
    }
    delim = ":";
    if( sec != -1 && (sec&1)) 
      delim = " ";//this make the ":" appear and dispear just like a real alarm clock would do
    
    str = "" + hour + delim + format2(min) ; //make a string and it display the time 
    ret = Array( str, am_pm_text);
    return ret; // then return
    
  }

  function CheckInt( num, min, max ){
    if( isNaN( num ) ){
      return false;//if isNaN num then return equel to false
    }else{
      num = parseInt( num );
      return min <= num && num <= max;//else num equel to The parseInt() function parses a string and 
      //returns the min is last then num and/or num is smmaller than max
    }    
  }
    
  function OnTimer(){
    am_pm = GetIni("am_pm");    
        
    date = new Date();
       
    
    time = formatTime( date.getHours(), date.getMinutes(), date.getSeconds());
    document.getElementById('time').innerHTML = time[0];
    document.getElementById('am_pm').innerHTML = time[1];
    time = formatTime( date.getHours(), date.getMinutes(), -1);
    document.title = time[0] + " " + time[1] + " Digital Clock ";
 
     
    str = format2(date.getSeconds());
    document.getElementById('sec').innerHTML = str;
    
    str = months[ date.getMonth() ] +" "+ date.getDate() +" "+ date.getFullYear();
    //document.getElementById('date').innerHTML = str;
    str = dayOfWeek[ date.getDate() ]; 
    document.getElementById('day_of_week').innerHTML = str; 
    

    //document.getElementById('date').innerHTML = str;
   

    var str2 = GetIni("dateformatstring");
    document.getElementById('date').innerHTML = str2;  

    alarm_on = GetIni("alarm_on");    
    if( CheckInt(GetIni("alarm_hour"), 0, 23) && CheckInt(GetIni("alarm_min"), 0, 59) ){
      alarm_hour = parseInt( GetIni("alarm_hour") );
      alarm_min = parseInt( GetIni("alarm_min") );
    }else{
      alarm_on = 0;
    }
       
    if( alarm_on ){
      time = formatTime( alarm_hour, alarm_min, -1);
      document.getElementById('alarm').innerHTML = "Alarm: "+time[0]+" "+time[1];     
      if( alarm_hour == date.getHours() && alarm_min == date.getMinutes() && date.getSeconds() == 0){
        alarm_go = 1;
        alarm_duration = 0;
        //notify_message         
      }
      
      if( alarm_go == 1 ){
        if ( alarm_duration == 1){
          alert( "alarm_desc");
        }
        document.title = "Alarm!";    
        document.getElementById('alarm').innerHTML = "Alarm: "+time[0]+" "+time[1];
        alarm_duration  = alarm_duration + 1;
        if ( alarm_duration == 10 ){
          alarm_go = 0;
          localStorage["alarm_on"] = ""
          alarm_on = 0;
          alarm_duration = 0;
          document.getElementById('alarm').innerHTML = "";
        }
      }
    }
    if (  alarm_on != 1 ){
      document.getElementById('alarm').innerHTML = "";
    }
    }
    
    document.getElementById('tableObj').style.color = GetIni("font_color");
    var anchors = document.getElementsByTagName( 'A' );
    for( var i = 0, numAnchors = anchors.length; i < numAnchors; i++ ) {
      anchors[ i ].style.color = localStorage["font_color"];
    }                       
  
 
  function OnClick(){
    //localStorage["alarm_on"] = "";
    //alarm_go = 0;
  }
  
  function Init(){    
    document.getElementById('options').onclick = function (){
      window.open("options.html", "_self")
      return false;
    };
    OnTimer();
    OnResize();        
    setInterval( OnTimer, 1000);
    document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('click', OnClick);
    });        
  }
  
  window.onresize = OnResize;    
  dayOfWeek = Array( "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  months = Array("January","February","March","April","May","June","July","August","September","October","November","December");
  alarm_go = 0;  
  Init();    
