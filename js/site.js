//mix-mosaic

let boxTiles = document.getElementById('box-tiles');

function tileBox(){

    //Create Tiles
    for ( let i = 0; i < 18; i++ ){
        boxTiles.innerHTML += '<a href="#"><div' + + 'class="p-3 bd-highlight tile">' + + '</div></a>';
    };
}

window.onload = tileBox();