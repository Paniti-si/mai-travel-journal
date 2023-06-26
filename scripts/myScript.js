var header = document.getElementById("header");
var sticky = header.offsetTop;

window.onscroll = function () {
  stickyHeader();
};

function stickyHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
