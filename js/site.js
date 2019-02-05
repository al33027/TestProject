//mix-mosaic

let boxTiles = document.getElementById('box-tiles'),
tileImage = document.getElementById('tile-image');


function tileBox(){

    //Create Tiles
    for ( let i = 0; i < 18; i++ ){
        boxTiles.innerHTML += '<a href="#"><div id="tile-image" class="p-3 bd-highlight tile"></div></a>';
    };

    function loadImage(){
        tileImage = "img/";

        
    }
}

window.onload = tileBox();