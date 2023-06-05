var imageSet = [
  "1G7qVWH_nHRx261Bx25FnIn9FqOT_qpx4",
  "1KFSXNeZP3ulPG_9qImHjlsWmRTvcRUzb",
];

function createContent() {
  var gallaryHtml = "";
  var demoHtml = "";
  console.log("test", gallaryHtml);
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
}

createContent();
