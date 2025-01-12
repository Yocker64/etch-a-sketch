//Creates the grid when the "Create grid" button is pressed
function getInputValue() {
    let inputVal = document.getElementById("myInput").value;
    createGrid(inputVal)
}



//Creates main grid of <dimensions> dimension
function createGrid(dimensions){

    const gridElement = document.getElementById('grid');
    
    if (gridElement) {
    gridElement.remove();
}
    let grid= document.createElement('div');
    grid.id = 'grid';
    document.body.appendChild(grid);

    let isMouseDown = false;

grid.addEventListener("mousedown", (event) => {
    if (event.button === 0) { // 0 = left mouse button
        isMouseDown = true;
        console.log("Mouse button pressed.");
    }
});

document.addEventListener("mouseup", () => {
    if (isMouseDown) {
        isMouseDown = false;
        console.log("Mouse button released.");
    }
});


    
    //Creates the main grid with all the event listeners
    for (let i = 0; i < dimensions; i++) {
        let line = document.createElement('div');
        line.style.display = 'flex';
        for (let j = 0; j < dimensions; j++) {
            let square = document.createElement('div');
            square.style.backgroundColor = 'gray';
            square.style.height = `${800 / dimensions}px`;
            square.style.width = `${800 / dimensions}px`;
            square.addEventListener('mouseover', (event)=> {
                //Changes the initial color of the tile from gray to another randomly generated color with .10 of opacity
                if (isMouseDown) {
                    if (square.style.backgroundColor == 'gray') {
                        square.style.backgroundColor = undefined;
                        square.style.backgroundColor = randomRGBA();
                        square.style.opacity = '0.1';
                    }else{
    
                        //Change the color of the tile every interaction
                        const currentOpacity = parseFloat(square.style.opacity);
                        square.style.backgroundColor = randomRGBA();
    
                        console.log(currentOpacity)
                        //Makes the tile .10 more opaque until a roof value of 1 (maximum)
                        square.style.opacity = Math.min(currentOpacity + 0.1, 1);
                    }  
                }
                
            });
            line.appendChild(square);
        }
        grid.appendChild(line);
    }

    //Creates the random color and with .10/1 of opacity
    function randomRGBA() {
        return `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, 1)`;

    }
}