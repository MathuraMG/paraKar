function showAthlete(obj) {
  var id = obj.getAttribute('data-id');
  var athleteId = "#athlete-" + id;
  $(".athlete").hide();
  $(athleteId).show();
  $(".athlete__background").addClass("athlete__background--show");
  $(".main__container").addClass("main__container--frozen");
  $(".nav").addClass("nav--frozen");
}

function hideAthlete() {
  $(".athlete__background").removeClass("athlete__background--show");
  $(".main__container").removeClass("main__container--frozen");
  $(".nav").removeClass("nav--frozen");
}

$( document ).ready(function() {
  // $(".athlete__background").addClass("athlete__background--show");
  // $(".main__container").addClass("main__container--frozen");
  // $(".nav").addClass("nav--frozen");
  $( ".athlete__background" ).click(function() {
    hideAthlete();
  });
  $( ".athlete__container" ).click(function(e) {
    e.stopPropagation();
  });
});`
`
