var slideIndex = 1;

var imageSet = [
  "1G7qVWH_nHRx261Bx25FnIn9FqOT_qpx4",
  "1KFSXNeZP3ulPG_9qImHjlsWmRTvcRUzb",
  "1iSCaYxx922nAaPAKb1rXpv5L2VUPrD4K",
];

function openModal() {
  var gallaryHtml = "";
  var demoHtml = "";
  // console.log("test", gallaryHtml);
  for (let i = 0; i < imageSet.length; i++) {
    gallaryHtml +=
      '<div class="mySlides"> <div class="numbertext">' +
      (i + 1) +
      " / " +
      imageSet.length +
      '</div> <div class="imgbox"> <img class="center-fit" src="https://drive.google.com/uc?export=view&id=' +
      imageSet[i] +
      '"/></div></div>';

    demoHtml +=
      '<div class="column"><div class="imgbox"><img class="center-fit-demo demo" src="https://drive.google.com/uc?export=view&id=' +
      imageSet[i] +
      '"onclick="currentSlide(' +
      (i + 1) +
      ')"/></div></div>';
  }
  document.getElementById("main-gallary").innerHTML = gallaryHtml;
  document.getElementById("demo-gallary").innerHTML = demoHtml;
  showSlides(slideIndex);
  unfade(document.getElementById("myModal"));
}

// Close the Modal
function closeModal() {
  fade(document.getElementById("myModal"), true);
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.onclick = function (event) {
  // console.log("asd", event);
  if (event.target.id === "myModal") {
    fade(document.getElementById("myModal"), true);
  }
};

function fade(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.3;
  }, 10);
}

function unfade(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.3;
  }, 10);
}
