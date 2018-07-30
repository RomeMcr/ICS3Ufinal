
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
  
  window.close();
}

document.getElementById("font_color").value = GetIni("font_color");
document.getElementById("alarm_on").checked = GetIni("alarm_on");
document.getElementById("alarm_time").value = GetIni("alarm_hour")+":"+GetIni("alarm_min");
document.getElementById("alarm_desc").value = GetIni("alarm_desc");
SetState();
//alert("HELLO");


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('OK').addEventListener('click', save);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('alarm_on').addEventListener('click', SetState);
});
