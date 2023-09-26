const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {

    while(document.querySelector("button") !== null){
        document.querySelector("button").remove();
    }
     

    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () =>{
            square.style.backgroundColor = "blue";
        })

    }
    createButton();
}
