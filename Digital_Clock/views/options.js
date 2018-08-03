
function SetState(){//the state of the alarm 
  en = !document.getElementById('alarm_on').checked;
  document.getElementById('alarm_desc').disabled = en;
  document.getElementById('alarm_time').disabled = en;
}


function save() {  //whennu click the save button this fuction will save everychanges u made
  localStorage["font_color"] = document.getElementById("font_color").value;
  localStorage["alarm_on"] = document.getElementById('alarm_on').checked ? "1" : "";
  
  time = document.getElementById("alarm_time").value;  
  localStorage["alarm_hour"] = time.substring(0, 2);  
  localStorage["alarm_min"] = time.substring(3, 5);
    
  localStorage["alarm_desc"] = document.getElementById("alarm_desc").value;


  localStorage["first_dropdown"] = document.getElementById("first").value;
  localStorage["second_dropdown"] = document.getElementById("second").value;
  localStorage["third_dropdown"] = document.getElementById("third").value;


  //Update the date on the screen
 //document.getElementById("time").innerHTML = new Date().toLocaleString("en-US", {timeZone: str});//make the varable date equel to new date()
 


  var cdate = new Date();//the part that make the order of the day month and year work 
  var i = 1;
  var str = "";
  var answer = "";

  if((GetIni("first_dropdown") != GetIni("second_dropdown") && GetIni("second_dropdown") != GetIni("third_dropdown")) && (GetIni("first_dropdown") != GetIni("third_dropdown")))
  {//if there is a duplicate value will have a popup saying that u cant have two same values
    do {//if there is no duplicated value do this
     
      if (i == 1) {
        answer = GetIni("first_dropdown");//it put the answer in to the dropdown boxes
      }
      if (i == 2) {
        answer = GetIni("second_dropdown");//it put the answer in to the dropdown boxes
      }
      if (i == 3){
       answer = GetIni("third_dropdown");//it put the answer in to the dropdown boxes
      }

      switch(answer){
        case "1":
         str += cdate.getMonth()+1;//chioce one is monthe and put that in side of a stiring
         break;
        case "2":
         str += cdate.getFullYear();//chioce one is monthe and put that in side of a stiring
         break;
        case "3":
         str += cdate.getDate();//chioce one is monthe and put that in side of a stiring
         break;
      }
      str += " ";

    } while (i++ < 3);//do this 3 time
  }
  else
  {
    alert("Cannot have duplicate entries in the time");//here is the popup
    window.open("options.html", "_self")//anf it will reload the page
          return false;//and set return to false insted of ture
  }

  localStorage["dateformatstring"] = str;//then it will print the date inside of a string
  //window.close("options.html", "_self");
  window.open("index.html", "_self" );//it will go back to the homepage but everychanges u do will be saved
//alert("HELLO");
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('OK').addEventListener('click', save);// is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('alarm_on').addEventListener('click', SetState);// is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
});

//document.addEventListener('DOMContentLoaded', function () {
 // document.getElementById('am_pm').addEventListener('click', ChangeAmPm);
//});







