//mix-mosaic

let tile = 12;

function mosaicTile(boxTiles){
    let tileContainer = document.createElement("div");
    let text = "Hello World";
    let blockDiv, textSpan;

    div.className = "p-3 flex-md-grow-1 flex-fill align-content-stretch bd-highlight text-left p1-text";
    document.getElementById(boxTiles.replace("#", "")).appendChild(tileContainer);

    for(let i = 0; i < tile; i++){
        blockDiv = document.createElement("div");
        blockDiv.className = "block";
        textSpan = document.createElement("span");
        textSpan.append(text);
        blockDiv.append(textSpan);
        tileContainer.append(blockDiv);
    }
}