const containerDiv = document.querySelector("#container");

function makeRows(rows, columns) {
    containerDIV.style.setProperty("--grid-rows", rows);
    containerDIV.style.setProperty("--grid-columns", columns);
    for (i = 0; i <(rows * columns); i++) {
        let square = document.createElement("div");
       // cell.innerText = (c + 1);//
        containerDIV.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
            console.log(square);
        })
    }
}

makeRows(16, 16);