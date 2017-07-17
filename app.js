function showAthlete() {
  console.log("testinginginging");
  $(".athlete__background").addClass("athlete__background--show");
  $(".main__container").addClass("main__container--frozen");
  $(".nav").addClass("nav--frozen");
}

$( document ).ready(function() {
  // $(".athlete__background").addClass("athlete__background--show");
  // $(".main__container").addClass("main__container--frozen");
  // $(".nav").addClass("nav--frozen");
  $( ".athlete__background" ).click(function() {
    console.log("poop");
    $(".athlete__background").removeClass("athlete__background--show");
    $(".main__container").removeClass("main__container--frozen");
    $(".nav").removeClass("nav--frozen");
  });
  $( ".athlete__container" ).click(function(e) {
    e.stopPropagation();
  });
});
