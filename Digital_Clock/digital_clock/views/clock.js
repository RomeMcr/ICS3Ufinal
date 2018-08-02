

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
    return i < 10 ? "0"+i : i;//return i is smaller than 10 then "0" plus i else just i (minutes)
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
   // function run() {
    // body...
   
   //// date = new Date(date);
    //var choice = "";
   // var str;
   // choice = GetIni("time_dropdown");

    // switch(choice) {
    // case "Toronto":
   //    str = "America/Toronto";
    //   break;
    //  case "Vancouver":
    //   str = "America/Vancouver";
    //   break;
   //   case "Winnipeg":
   //    str = "America/Winnipeg";
    //   break;
   //  case "Edmonton":
    //   str = "America/Edmonton";
    //   break;
    //  case "Halifax":
    //   str = "America/Halifax";
    //   break;
    //  case "St_John":
    //   str = "America/St_Johns";
    //   break;
   // }
  //   var run = document.getElementById("time").innerHTML = new Date().toLocaleString("en-US", {timeZone: str});//make the varable date equel to new date()

 //}
  function OnTimer(){ //get the date 
    am_pm = GetIni("am_pm");

    date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles" });
    date = new Date(date);   
    
    function Toronto(){
      new Date().toLocaleString("en-US", {timeZone: "America/Toronto"});//make the varable date equel to new date()
    }

    function Vancouver(){
      new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});//make the varable date equel to new date()
    }

    function Winnipeg(){
      new Date().toLocaleString("en-US", {timeZone: "America/Winnipeg"});//make the varable date equel to new date()
    }

    function Edmonton(){
      new Date().toLocaleString("en-US", {timeZone: "America/Edmonton"});//make the varable date equel to new date()
    }


    function Halifax(){
      new Date().toLocaleString("en-US", {timeZone: "America/Halifax"});//make the varable date equel to new date()
    }


    function St_John(){
      new Date().toLocaleString("en-US", {timeZone: "America/St_Johns"});//make the varable date equel to new date()
    }


  

  time = formatTime( date.getHours(), date.getMinutes(), date.getSeconds());//print out the time and hours goes frist then minutes and then second
    document.getElementById('time').innerHTML = time[0];
    document.getElementById('am_pm').innerHTML = time[1];
    time = formatTime( date.getHours(), date.getMinutes(), -1);
    document.title = time[0] + " " + time[1] + " Digital Clock ";//the title so the time shows up on the title
 
     
    str = format2(date.getSeconds());
    document.getElementById('sec').innerHTML = str;//the minute will work based on the second
    
    str = months[ date.getMonth() ] +" "+ date.getDate() +" "+ date.getFullYear();
    //document.getElementById('date').innerHTML = str;
    str = dayOfWeek[ date.getDate() ]; 
    document.getElementById('day_of_week').innerHTML = str; //day of the week in the string
    

    //document.getElementById('date').innerHTML = str;
   

    var str2 = GetIni("dateformatstring");
    document.getElementById('date').innerHTML = str2;//date formating string  

    alarm_on = GetIni("alarm_on");  //Open the ini file and retrieve the data as a character variable.
    if( CheckInt(GetIni("alarm_hour"), 0, 23) && CheckInt(GetIni("alarm_min"), 0, 59) ){
      alarm_hour = parseInt( GetIni("alarm_hour") );
      alarm_min = parseInt( GetIni("alarm_min") );//if a person set the alarm then show the time
    }else{
      alarm_on = 0;//else the alarm equel to 0 means the alarm is off
    }
       
    if( alarm_on ){
      time = formatTime( alarm_hour, alarm_min, -1);
      document.getElementById('alarm').innerHTML = "Alarm: "+time[0]+" "+time[1]; //if the alarm is on then show "Alarm: 9:30"or whatever time you set to    
      if( alarm_hour == date.getHours() && alarm_min == date.getMinutes() && date.getSeconds() == 0){
        alarm_go = 1;
        alarm_duration = 0;
        //notify_message         
      }
      
      if( alarm_go == 1 ){ //if alarm_go equel to 1 (ture)
        if ( alarm_duration == 1){
          alert( "alarm_desc");//if alarm duration equel to 1 (meaning if the time equel to the time u set your alarm to )then alert the message
        }
        document.title = "Alarm!";    
        document.getElementById('alarm').innerHTML = "Alarm: "+time[0]+" "+time[1];//an then the title will say "Alarm!" and it will flash too
        alarm_duration  = alarm_duration + 1;
        if ( alarm_duration == 10 ){//after the pop up shows the alarm will dispear in 10 second
          alarm_go = 0;
          localStorage["alarm_on"] = ""
          alarm_on = 0;
          alarm_duration = 0;
          document.getElementById('alarm').innerHTML = "";//then it reset the alarm
        }
      }
    }
    if (  alarm_on != 1 ){ //if the alarm not equel to 
      document.getElementById('alarm').innerHTML = "";//
    }
    }
    
    document.getElementById('tableObj').style.color = GetIni("font_color");
    var anchors = document.getElementsByTagName( 'A' );
    for( var i = 0, numAnchors = anchors.length; i < numAnchors; i++ ) {
      anchors[ i ].style.color = localStorage["font_color"];//change the font colour 
    }                       
  
 
  function OnClick(){
    //localStorage["alarm_on"] = "";
    //alarm_go = 0;
  }
  
  function Init(){    
    document.getElementById('options').onclick = function (){//when u click  the alarm setting button 
      window.open("options.html", "_self")//open the options page in the same tab
      return false;//then equel to false
    };
    OnTimer();
    OnResize();        
    setInterval( OnTimer, 1000);//1000 ms = 1 second. calls the time function at specified intervals (in milliseconds).
    document.addEventListener('DOMContentLoaded', function () {// is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 
      document.addEventListener('click', OnClick);
    });        
  }
  
  window.onresize = OnResize;  //resize the browser window to display the windows height and width.  
  dayOfWeek = Array( "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");//dsy of the week 
  months = Array("January","February","March","April","May","June","July","August","September","October","November","December");// just ingnor this line
  alarm_go = 0;  //then the alarm equel to 0
  Init();    
