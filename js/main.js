/**
 * Mobile Menu.
 * Hides the desktop menu and show the mobile.
 * @param - buttonOpen, buttonClose, menuContainer.
 * @return Mobile Menu.
 */
var openMenu = document.getElementById("buttonOpen");
var closeMenu = document.getElementById("buttonClose");
var menuWrapper = document.getElementById("menuContainer");

// Open Menu Wrapper with Open Button
function toggleMenu() {
    if (menuWrapper.style.display = "none") {
        menuWrapper.style.display = "table";
    } else {
        menuWrapper.style.display = "none";
    }
}

// Close Menu Wrapper with Close Button
function toggleMenuClose() {
    menuWrapper.style.display = "none";
}

// Close Menu Wrapper by choosing an item
function menuItemsClose() {
    var menuItems = [].slice.call(document.getElementsByClassName("nav__item"));
  
    menuItems.forEach(function(element, index) {
      element.addEventListener("click", function() {
        menuWrapper.style.display = "none";
      });
    });
  }

// Add Event Listener Click
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenuClose);
menuItemsClose();




/**
 * Slider.
 *Slider functionality.
 * @param - slider-container.
 */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-container");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "flex"; 
}