$(document).ready(function () {
  $("#before1").click(function () {
    $("#after1").show();
    $("#before1").hide();
  });
  $("#after1").click(function () {
    $("#before1").show();
    $("#after1").hide();
  });
});
