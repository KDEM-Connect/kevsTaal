//Validating the time of visit is not like of appointment date
 var useradmin="admin"
 var useradmin="admin"

 document.getElementById("login").addEventListener("click",function(){
      var us = document.getElementById("inputEmail3").value;
      var pw = document.getElementById("inputPassword3").value
     if(us==useradmin && pw==useradmin){
         window.location.href="administrator.html"
     }else{
         alert("incorrect password")
     }
 })

 function logou(){
     window.location.href="admin.html"
 }
 function homess(){
     window.location.href="index.html"

 }

 function admiss(){
   window.location.href="admin.html"
 }
 
function mehome(){
    window.location.href="apoint.html"
}