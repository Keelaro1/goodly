document.addEventListener("click", function(event) {
  let hiddenInfo = event.target.closest(".goods__hidden-info");
  if (event.target.id == "goods__hidden-close") {
    hiddenInfo.style.display = "none";
  }
});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("goods__info-link")) {
    event.preventDefault();
    let hiddenInfo =
      event.target.parentElement.parentElement.parentElement.nextElementSibling
        .firstElementChild;
    if (hiddenInfo.style.display == "none" || hiddenInfo.style.display == "") {
      hiddenInfo.style.display = "block";
    } else {
      hiddenInfo.style.display = "none";
    }
  }
});
