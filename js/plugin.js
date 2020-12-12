$(document).ready(function () {
  //initial when start
  $(".section1").fadeIn(200);
  $(".sidebar ul li a[data-section='section1']").children(".arrow").fadeIn(200);

  $(".sidebar ul li a").on("click", function () {
    var linkSection = $(this).data("section");
    //show the arrow
    showArrow($(this));
    //show the section
    showSection($("." + linkSection));
  });

  //function show arrow of the clicked link and remove it from other links
  function showArrow(el) {
    $(".sidebar").find(".arrow").fadeOut(200);
    el.children(".arrow").fadeIn(200);
  }

  //function show section of the clicked link and remove other sections
  function showSection(el) {
    $(".content").fadeOut(50);
    setTimeout(function () {
      el.fadeIn(200);
    }, 100);
  }
});
