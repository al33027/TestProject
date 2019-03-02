//mix-mosaic

function tileBox() {
  let boxTiles = document.getElementById("box-tiles"),
    tileImage = document.getElementById("tile-image");

  //Create Tiles
  for (let i = 0; i < 18; i++) {
    boxTiles.innerHTML += '<a href="#"><div id="tile-image" class="p-3 bd-highlight tile"></div></a>';
  }
}

tileBox();

function toggleNav() {
  let toggleNavStatus = false;
  let menuButton = document.getElementById("menu-button");
  let menuList = document.getElementById("menu-list");

  menuButton.addEventListener("click", function () {
    menuList.classList.toggle("open");
    menuButton.classList.toggle("active");
  });

  window.addEventListener("mouseup", function (event) {
    if (event.target != menuList && event.target.parentNode != menuList && event.target != menuButton && event.target.parentNode != menuButton) {
      menuList.classList.remove("open");
      menuButton.classList.remove("active");
    }
  });
}

toggleNav();