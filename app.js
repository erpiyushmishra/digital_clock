var hour=document.getElementById("hrs");
var min=document.getElementById("min");
var sec=document.getElementById("sec");



var currentTime=new Date();
hour.innerHTML=currentTime.getHours();
min.innerHTML=currentTime.getMinutes();
sec.innerHTML=currentTime.getSeconds();


setInterval(()=>{
    var currentTime=new Date();
    hour.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

},1000)