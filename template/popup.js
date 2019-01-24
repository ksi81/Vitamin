$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
  
});

$(document).ready(function(){
  $("#flip").click(function(){
    
    $("#panel").toggle("fast", function(){
          window.scrollTo(500, 2000);
    });
  });
   
 
});


