var slideIndex = 1;

var imageSet = [
  { alt: "ตลาดน้ำเหล่าต๊กลัก", img: "1MVzdv07bmXMw_JCTUUPKRSB-fO7I5W1j" },
  { alt: "ตลาดน้ำเหล่าต๊กลัก", img: "1y7JNGy-8-u13YCNzGvX_Fh0zOUBW2kVG" },
  { alt: "อุทยานหินเขางู", img: "1K2HRW7qqMjMObXfPPXYunsKHfQHbkVdT" },
  { alt: "อุทยานหินเขางู", img: "1TUhDhj9lCO5peWFkyhz6QKZ5YQzLm55k" },
  { alt: "อุทยานหินเขางู", img: "1skJolPlDyOF_tGOAebPyExfpl-YDqBOm" },
  { alt: "อุทยานหินเขางู", img: "1uhz8-frai9ohRk1b18RlhCHgdmGXDb4e" },
  { alt: "อุทยานหินเขางู", img: "1IIu6IwE0Q8ox6rBkMD8h9ah-8YjKno6z" },
  { alt: "อุทยานหินเขางู", img: "14xLX5fkhHrp9tooJ4apvsvcTBdzUUZ5O" },
  { alt: "อุทยานหินเขางู", img: "1mNOYwyXjmaSBUaiPtAxbqBxTrkT560-_" },
  { alt: "อุทยานหินเขางู", img: "1Fnhz0zj21OXsUEcez5LRh-F1LCeSXK9l" },
  { alt: "อุทยานหินเขางู", img: "1xcY8BpzEvyjWehwT3_-LEjXARCWZlXsc" },
  { alt: "อุทยานหินเขางู", img: "1eNx2E1K7uDnPx6IQkmt824fWmWeIWv9S" },
  { alt: "ถ้ำเขาบิน", img: "1ZE1vUkxmrI7KGVxunRFWcsd7sNqG8Pjx" },
  { alt: "ถ้ำเขาบิน", img: "1xxyrL8FMlt0sf1x4qqLUOe3TYaDpaUCJ" },
  { alt: "ถ้ำเขาบิน", img: "1JwpwfagDyEVD8BA1Woq20pnyexhyiX4E" },
  { alt: "ถ้ำเขาบิน", img: "1U_2O4QiqaYDzTWVxc0hFu82QlOsezQ_P" },
  { alt: "ถ้ำเขาบิน", img: "1GwS6CB2z9KE7Q_RC2Ae6883aWQOPwmNh" },
  { alt: "ถ้ำเขาบิน", img: "1af3-6nl2AdIpamUCAXY_ki5MMKOshoik" },
  { alt: "CORO Field", img: "1VEl4CyX-vk6QyRtsK-8QW3UIdVmrTBm8" },
  { alt: "CORO Field", img: "1MfNZX1iw_yrzskKnqbL2quLcxJfEFvaR" },
  { alt: "CORO Field", img: "1wVJrDGJtMU8wTNUSiAAwqne2Hkk8m0Nw" },
  { alt: "CORO Field", img: "1RQ1YKttsXR7Jv05iz87jijCGajb2Izo3" },
];

var imageSet2 = [
  { alt: "ตลาด", img: "1MVzdv07bmXMw_JCTUUPKRSB-fO7I5W1j" },
  { alt: "ตลาด", img: "1y7JNGy-8-u13YCNzGvX_Fh0zOUBW2kVG" },
  { alt: "ตลาด", img: "1K2HRW7qqMjMObXfPPXYunsKHfQHbkVdT" },
];

function openModal(img) {
  let imgSet;
  switch (img) {
    case 0:
      imgSet = imageSet;
      break;
    case 1:
      imgSet = imageSet2;
      break;
    default:
      imgSet = imageSet;
  }
  var gallaryHtml = "";
  var demoHtml = "";
  for (let i = 0; i < imgSet.length; i++) {
    gallaryHtml +=
      '<div class="mySlides"> <div class="numbertext">' +
      (i + 1) +
      " / " +
      imgSet.length +
      '</div> <div class="imgbox"> <img class="center-fit" src="https://drive.google.com/uc?export=view&id=' +
      imgSet[i]["img"] +
      '"/></div></div>';

    demoHtml +=
      '<div class="column"><div class="imgbox"><img class="center-fit-demo demo" src="https://drive.google.com/uc?export=view&id=' +
      imgSet[i]["img"] +
      '"onclick="currentSlide(' +
      (i + 1) +
      ')" alt="' +
      imgSet[i]["alt"] +
      '"' +
      "/></div></div>";
  }
  document.getElementById("main-gallary").innerHTML = gallaryHtml;
  document.getElementById("demo-gallary").innerHTML = demoHtml;
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
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

window.onclick = function (event) {
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
