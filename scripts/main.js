

$(function() { 

     var navMain = $("#navbarContent");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });

 });