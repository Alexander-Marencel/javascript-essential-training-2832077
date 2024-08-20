/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const entireGridOutline = function (){
    let gridContainer = document.querySelector(".grid");
    gridContainer.addEventListener("mouseover", () => {gridContainer.style.outline = "6px solid red"} );
    gridContainer.addEventListener("mouseout", () => {gridContainer.style.outline = ""} );
};

const eachCellOutline = function (){
    let gridContainer = document.querySelectorAll(".grid .cell");
    for (let i = 0; i < gridContainer.length; i++) {
        let cell = gridContainer[i];
        cell.addEventListener("mouseover", () => {cell.style.outline = "6px solid red"} );
        cell.addEventListener("mouseout", () => {cell.style.outline = ""} );
    };
};

const eachCellBackground = function (){
    let gridContainer = document.querySelectorAll(".grid .cell");
    for (let i = 0; i < gridContainer.length; i++) {
        let cell = gridContainer[i];
        cell.addEventListener("click", () => {cell.style.backgroundColor = "red"} );
        cell.addEventListener("dblclick", () => {cell.style.backgroundColor = ""} );
    };
};

const dim = function(event){
    if (event.key === "-"){
        console.log(event.key)
    }

}

const changeBackground = function(){
    let bodyContainer = document.querySelector("body");
    hue = 0;
    sat = 100;
    light = 100;
    bodyContainer.addEventListener("keypress", (event) => {
        if ((event.key === "-" || event.key === "_") && light > 0){
            light--;
            bodyContainer.style.backgroundColor = "hsl("+hue+","+sat+"% ,"+light+"%)";
            console.log("Light value:", light)
        }

        if ((event.key === "+" || event.key === "=") && light < 100){
            light++;
            bodyContainer.style.backgroundColor = "hsl("+hue+","+sat+"% ,"+light+"%)";
            console.log("Light value:", light)
        }

        if (event.key === "h" || event.key === "H"){
            if (hue == 356){hue=0} 
            hue++;
            bodyContainer.style.backgroundColor = "hsl("+hue+","+sat+"% ,"+light+"%)";
            console.log("Hue value:", hue)
        }
    
    })

};

entireGridOutline();
eachCellOutline();
eachCellBackground();
changeBackground();