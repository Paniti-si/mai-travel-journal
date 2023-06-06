function fade(element, isNone = true, time = 10, multiplyer = 0.3) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.001) {
      clearInterval(timer);
      if (isNone) {
        element.style.display = "none";
      }
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * multiplyer;
  }, time);
}

function unfade(element, time = 10, multiplyer = 0.3, startOp = 0.1) {
  var op = startOp; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * multiplyer;
  }, time);
}

// function bannerAnimation() {
//   var banner = document.getElementById("front-banner");
//   var bannerText = document.getElementById("banner-text");
//   var bannerImage = document.getElementById("banner-image");

//   setTimeout(function () {
//     bannerText.style.fontSize = "5vw";
//     bannerText.innerHTML = "Suan Phueng, Ratchaburi";
//   }, 2000);

//   setTimeout(function () {
//     bannerText.style.fontSize = "10vw";
//     bannerText.innerHTML = "Solo Trip";
//   }, 4000);

//   setTimeout(function () {
//     fade(banner, false, 50, 0.1);
//     unfade(bannerImage, 20, 0.1, 0.5);
//   }, 6000);
// }
