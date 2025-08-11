
$(document).ready(function () {
  // ========================
  // Theme toggle logic
  // ========================
  if (localStorage.getItem("theme") === "dark") {
    $("body").addClass("dark-theme");
    $(".light-icon").hide();
    $(".dark-icon").show();
  } else {
    $(".light-icon").show();
    $(".dark-icon").hide();
  }

  $(".theme-toggle").click(function () {
    $("body").toggleClass("dark-theme");

    if ($("body").hasClass("dark-theme")) {
      localStorage.setItem("theme", "dark");
      $(".light-icon").hide();
      $(".dark-icon").show();
    } else {
      localStorage.setItem("theme", "light");
      $(".light-icon").show();
      $(".dark-icon").hide();
    }
  });

  // ========================
  // Smooth scrolling for anchor links
  // ========================
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  });

  // ========================
  // Responsive navbar toggle
  // ========================
  $("#hamburger").click(function () {
    $("#nav-links").toggleClass("active");
  });
});
