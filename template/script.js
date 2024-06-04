$(function() {
  // Load partials
  // $("header").load("./partials/header.html");
  // $("main").load("./partials/main.html");
  // $("footer").load("./partials/footer.html");

  /* Menu add to append body */
  $("body").on("click", ".menu-mobile-icon", function() {
    $(this).toggleClass("active-bar").parent(".menu").find(".navigation").toggleClass("show-nav hide-nav");

    if ($("body").has("div.navigation").length > 0) {
      $("body").find("div.navigation").addClass("close-menu").delay(300);
      setTimeout(() => {$("body > div.navigation").remove()}, 300);
    } else {
      navigationElement();
    }

    if (!$("body").hasClass("hide--scroll")) {
      $("body").addClass("hide--scroll");
    } else {
      setTimeout(() => {$("body").removeClass("hide--scroll")}, 300);
    }
  });

  /* Search icon */
  $("body").on("click", ".navigation .nav-icons li .search-icon-mobile img, header .menu .nav-icons li .search-icon-desktop img", function() {
    $(this).prev("input").toggleClass("search");
  });
});


// Slider
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
      perPage: 3,
      focus  : 0,
      omitEnd: false
  } );

  splide.mount();
});


// Lightbox
new SimpleLightbox('.gallery a', { 
  overlayOpacity: 0.9
});

let navigationElement = () => {
  let nav = 
    `<div class="navigation">
      <nav class="nav-pages">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-icons">
        <ul>
            <li><a href="#"><img src="images/icons/mdi_account-alert-outline.svg" alt="Account alert"></a></li>
            <li><a href="#" class="search-icon-mobile"><input type="search" name="search" id=""><img src="images/icons/akar-icons_search.svg" alt="Search"></a></li>
            <li><a href="#"><img src="images/icons/akar-icons_heart.svg" alt="Like"></a></li>
            <li><a href="#"><img src="images/icons/ant-design_shopping-cart-outlined.svg" alt="Buy"></a></li>
        </ul>
      </div>
    </div>`;

  $("body").append(nav);
}
