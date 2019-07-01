

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












jQuery(document).ready(function(){
            jQuery('#bappt').click(function(e){
               e.preventDefault();
               

               		 var name = $("#name").val();
			  		if (name == "") {
				        alert("Name not Filled")
				        return false;
				      }
			  	  var email = $("#email").val();
			  		if (email == "") {
				        alert("Email not Filled")
				        return false;
				      }
			  	  var phone = $("#phone").val();
			  		if (phone == "") {
				       alert("Phone number not Filled")
				        return false;
				     }

				   var proposed_date = $("#proposed_date").val();
			  		if (proposed_date == "") {
				        alert("Proposed Date not Filled")
				        return false;
				      }

				   var subject = $("#subject").val();
			  		if (subject == "") {
				        alert("subject not Filled")
				        return false;
				      }

				   var message = $("#message").val();
			  		if (message == "") {
				        alert("message not Filled")
				        return false;
				      }



               jQuery.ajax({

                type: 'POST',
                url: "sendemail.php",
                data: {
                     name: jQuery('#name').val(),
                     email: jQuery('#email').val(),
                     subject: jQuery('#subject').val(),
                     phone: jQuery('#phone').val(),
                     proposed_date: jQuery('#proposed_date').val(),
                     message: jQuery('#message').val(),
                    
                  },
                  success: function(result){
                    

                    jQuery('#name').val("") 
                    jQuery('#email').val("")
                    jQuery('#subject').val("")
                    jQuery('#message').val("")
                    jQuery('#phone').val("")
                    jQuery('#proposed_date').val("")
                    
                     alert(result);
            }});
            });



            
               
    });