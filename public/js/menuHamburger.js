$(document).ready(function () {
  // باز شدن منو
  $("#navaHamburger").click(function () {
    $(".nava-sidebar").stop(true).animate(
      {
        right: 0,
      },
      500,
    );

    $("html").css("overflow", "hidden");
  });

  // بسته شدن منو
  $("#navaClose").click(function () {
    $(".nava-sidebar").stop(true).animate(
      {
        right: "-100rem",
      },
      500,
    );

    $("html").css("overflow", "auto");
  });
});
