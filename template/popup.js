$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
  
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});