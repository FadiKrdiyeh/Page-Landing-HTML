$(window).on("resize", function () {
  // Change The Height Of Background Image And Overlay When Resize Document
  let windowHeight = $(window).height();
  $(".home .homebg").outerHeight(windowHeight);
  $(".home .image-overlay").outerHeight(windowHeight);
});

$(document).ready(function () {
  let homeDiv = $("#home");
  let ourServicesDiv = $("#ourServices");
  let ourWorksDiv = $("#ourWorks");
  let ourClientsDiv = $("#ourClients");
  let contactUsDiv = $("#contactUs");
  let footer = $("#footer");
  let position = window.scrollY;
  let windowHeight = $(window).height();

  $(window).on("scroll", function () {
    let position = window.scrollY;
    let windowHeight = $(window).height();

    // Change Opacity For Header When Scroll
    if (position < 100) {
      let opacity = 0;
      $(".header .navbar").css(
        "background",
        "rgba(30, 30, 30," + opacity + ")"
      );
      $(".header .navbar .navbar-collapse").css(
        "background",
        "rgba(30, 30, 30," + opacity + ")"
      );
      // console.log(opacity);
    } else if (position < ourServicesDiv.position().top) {
      let homeHeight = $("#home").height();
      let opacity =
        1 - ((homeHeight + 100 - position) / (windowHeight * 100)) * 100;
      $(".header .navbar").css(
        "background",
        "rgba(30, 30, 30," + opacity + ")"
      );
      $(".header .navbar .navbar-collapse").css(
        "background",
        "rgba(30, 30, 30," + opacity + ")"
      );
      // console.log(opacity);
    } else {
      let opacity = 1;
      $(".header .navbar").css(
        "background",
        "rgba(30, 30, 30," + opacity + ")"
      );
      $(".header .navbar .navbar-collapse").css(
        "background",
        "rgba(30, 30, 30," + opacity + ")"
      );
      // console.log(opacity);
    }

    // Add And Remove Class Active From Links When Scroll
    if (position < ourServicesDiv.position().top) {
      $(".navbar .nav-item .nav-link").removeClass("active");
      $(".home-link").addClass("active");
      window.history.pushState("state", "Home", "/#home");
      // return;
    } else if (
      position >= ourServicesDiv.position().top &&
      position < ourWorksDiv.position().top
    ) {
      $(".navbar .nav-item .nav-link").removeClass("active");
      $(".our-services-link").addClass("active");
      window.history.pushState("state", "Our Services", "/#ourServices");
      // return;
    } else if (
      position >= ourWorksDiv.position().top &&
      position < ourClientsDiv.position().top
    ) {
      $(".navbar .nav-item .nav-link").removeClass("active");
      $(".our-works-link").addClass("active");
      window.history.pushState("state", "Our Works", "/#ourWorks");
      // return;
    } else if (
      position >= ourClientsDiv.position().top &&
      position < contactUsDiv.position().top
    ) {
      $(".navbar .nav-item .nav-link").removeClass("active");
      $(".our-clients-link").addClass("active");
      window.history.pushState("state", "Our Clients", "/#ourClients");
      // return;
    } else if (
      position >= contactUsDiv.position().top &&
      position < footer.position().top
    ) {
      $(".navbar .nav-item .nav-link").removeClass("active");
      $(".contact-us-link").addClass("active");
      window.history.pushState("state", "Contact Us", "/#contactUs");
      // return;
    } else {
      $(".navbar .nav-item .nav-link").removeClass("active");
      $(".home-link").addClass("active");
      window.history.pushState("state", "Home", "/#home");
      // return;
    }
  });

  // Change Opacity For Header
  if (position < 100) {
    let opacity = 0;
    $(".header .navbar").css("background", "rgba(30, 30, 30," + opacity + ")");

    $(".header .navbar .navbar-collapse").css(
      "background",
      "rgba(30, 30, 30," + opacity + ")"
    );
  } else if (position < ourServicesDiv.position().top) {
    let homeHeight = $("#home").height();
    let opacity =
      1 - ((homeHeight + 100 - position) / (windowHeight * 100)) * 100;
    $(".header .navbar").css("background", "rgba(30, 30, 30," + opacity + ")");
    $(".header .navbar .navbar-collapse").css(
      "background",
      "rgba(30, 30, 30," + opacity + ")"
    );
  } else {
    let opacity = 1;
    $(".header .navbar").css("background", "rgba(30, 30, 30," + opacity + ")");
    $(".header .navbar .navbar-collapse").css(
      "background",
      "rgba(30, 30, 30," + opacity + ")"
    );
  }

  // Set The Height Of Background Image And Overlay When Document Ready
  $(".home .homebg").outerHeight(windowHeight);
  $(".home .image-overlay").outerHeight(windowHeight);

  // Show And Hide dropdown Menu On Hover
  $(".navbar .nav-item.dropdown").hover(
    function () {
      $(".navbar .nav-item .dropdown-menu").addClass("show");
    },
    function () {
      $(".navbar .nav-item .dropdown-menu").removeClass("show");
    }
  );

  // Add And Remove Class active From Links
  $(".navbar .nav-item .add-active-onclick").on("click", function () {
    $(".navbar .nav-item .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".btn-custom").on("mousemove", function (e) {
    const x = e.pageX - $(this).offset().left;
    const y = e.pageY - $(this).offset().top;

    $(".btn-custom").css({
      "--x": x + "px",
      "--y": y + "px",
    });
  });

  // Prev And Next Buttons In Our Works Part
  let count = 0;
  // let $elem = $(".nav-tabs");
  $(".our-works-nav .prev-chevron-nav").on("click", function () {
    if (count < 0) {
      count += 200;
      $(".nav-tabs").scrollLeft(count);
      console.log(count);
    }
  });

  $(".our-works-nav .next-chevron-nav").on("click", function () {
    if (
      count > -($(".nav-tabs")[0].scrollWidth - $(".nav-tabs")[0].clientWidth)
    ) {
      count -= 200;
      $(".nav-tabs").scrollLeft(count);
      console.log(count);
    }
  });

  // Vanillajs
  VanillaTilt.init(document.querySelectorAll(".clients-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
  });
});
