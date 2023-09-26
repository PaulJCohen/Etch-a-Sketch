const containerDiv = document.querySelector("#container");

function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    for (i = 0; i <(rows * columns); i++) {
        let square = document.createElement("div");

        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
            console.log(square);
        })
    }
}

makeRows(16, 16);