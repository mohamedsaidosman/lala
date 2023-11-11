const pageFooter = document.querySelector(".page-footer");

setInterval(function () {
  const dimensions = document
    .querySelector(".main-container")
    .getBoundingClientRect();
  pageFooter.style.bottom = dimensions.top + "px";
  pageFooter.style.width = dimensions.width + "px";
}, 50);
