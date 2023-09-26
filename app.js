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

function createButton(){
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "20px";
    //buttonDiv.style.textAlightn ="center";
    buttonDiv.appendChild(resetButton);

resetButton.addEventListener('click', () =>{
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
    let userGridInput = prompt ("please enter the number of grid squares per side (max: 100):");
    if (userGridInput > 100) {
        alert("your Dumb Af.");
        return;
    }
    rows = userGridInput;
    columns = userGridInput;
    makeGrid(rows, columns);
})
}



makeGrid(16, 16);