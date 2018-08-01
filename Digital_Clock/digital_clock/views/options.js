
function SetState(){
  en = !document.getElementById('alarm_on').checked;
  document.getElementById('alarm_desc').disabled = en;
  document.getElementById('alarm_time').disabled = en;
}


function save() {  
  localStorage["font_color"] = document.getElementById("font_color").value;
  localStorage["alarm_on"] = document.getElementById('alarm_on').checked ? "1" : "";
  
  time = document.getElementById("alarm_time").value;  
  localStorage["alarm_hour"] = time.substring(0, 2);  
  localStorage["alarm_min"] = time.substring(3, 5);
    
  localStorage["alarm_desc"] = document.getElementById("alarm_desc").value;

  localStorage["first_dropdown"] = document.getElementById("first").value;
  localStorage["second_dropdown"] = document.getElementById("second").value;
  localStorage["third_dropdown"] = document.getElementById("third").value;

  var cdate = new Date();
  var i = 1;
  var str = "";
  var answer = "";

  if((GetIni("first_dropdown") != GetIni("second_dropdown") && GetIni("second_dropdown") != GetIni("third_dropdown")) && (GetIni("first_dropdown") != GetIni("third_dropdown")))
  {
    do {
     
      if (i == 1) {
        answer = GetIni("first_dropdown");
      }
      if (i == 2) {
        answer = GetIni("second_dropdown");
      }
      if (i == 3) {
        answer = GetIni("third_dropdown");
      }

      switch(answer){
        case "1":
         str += cdate.getMonth()+1;
         break;
        case "2":
         str += cdate.getFullYear();
         break;
        case "3":
         str += cdate.getDate();
         break;
      }
      str += " ";

    } while (i++ < 3);
  }
  else
  {
    alert("Cannot have duplicate entries in the time");
    window.open("options.html", "_self")
          return false;
  }

  localStorage["dateformatstring"] = str;
  //window.close("options.html", "_self");
  window.open("index.html", "_self" );
//alert("HELLO");
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('OK').addEventListener('click', save);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('alarm_on').addEventListener('click', SetState);
});

//document.addEventListener('DOMContentLoaded', function () {
 // document.getElementById('am_pm').addEventListener('click', ChangeAmPm);
//});







