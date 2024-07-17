let watchClickOutside = false;

function onClickOutside(event) {
  if (watchClickOutside) {
    const el = document.querySelector("aside")
    if (el.style.width == '70%' && el && !(el === event.target || el.contains(event.target))) {
      document.querySelector("aside").style.width = '0px';
    }
    document.removeEventListener('click', onClickOutside);
    watchClickOutside = false
  } else {
    watchClickOutside = true
  }
}

document.querySelector(".btn-menu").addEventListener("click", function() {
  document.querySelector("aside").style.width = '70%';
  document.addEventListener('click', onClickOutside);
}, { passive: true });

document.querySelector(".btn-close").addEventListener("click", function() {
  document.querySelector("aside").style.width = '0px';
}, { passive: true })

document.querySelectorAll(".mobile-menu-item").forEach(item =>{
  item.addEventListener("click", function() {
    document.querySelector("aside").style.width = '0px';
  }, { passive: true });
});

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var headerPosition = document.querySelector("header").offsetTop;

document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var navbar = document.querySelector("nav");
  
  if (window.innerWidth <= 991) {
    if (scrolled < headerPosition || scrolled > lastScrollTop) {
      navbar.style.position = "relative";
      } else if (scrolled < lastScrollTop) {
      navbar.style.position = "absolute";
      navbar.style["z-index"] = "98";
      navbar.style.position = "fixed";
      navbar.style.top = "0px";
      navbar.style.left = "0px";
      navbar.style.right = "0px";
    }
    lastScrollTop =
      scrolled <= 0 ? 0 : scrolled;
  }
}, { passive: true });