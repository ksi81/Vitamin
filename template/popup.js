$(document).ready(function () {

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()

  });


  $("#flip").click(function () {
    $("#panel").slideUp("slow");
    windows.scrollTo(0, 5000);


  });
});