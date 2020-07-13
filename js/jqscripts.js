//----------------- Sidebar toggle script ------------------
$('#menu-toggle').click(function(event) {
  event.preventDefault();
  $("#wrapper").toggleClass("toggled");
});