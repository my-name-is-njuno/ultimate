

$(function() { 

     var navMain = $("#navbarContent");

     var nb = $(".navbar-brand");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });

     nb.on("click", function () {
         navMain.collapse('hide');
     });

 });