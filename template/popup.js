$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
  
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").toggle("slow");
    
    
  });
});

function scrollWin() {
  window.scrollTo(0, 25000);
}