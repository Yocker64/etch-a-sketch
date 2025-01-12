function getInputValue() {
    let inputVal = document.getElementById("myInput").value;
    createGrid(inputVal)
}



function createGrid(dimensions){

    const gridElement = document.getElementById('grid');

    if (gridElement) {
    gridElement.remove();
}
    let grid= document.createElement('div');
    grid.id = 'grid';
    document.body.appendChild(grid);


    
    for (let i = 0; i < dimensions; i++) {
        let line = document.createElement('div');
        line.style.display = 'flex';
        for (let j = 0; j < dimensions; j++) {
            let square = document.createElement('div');
            square.style.backgroundColor = 'gray';
            square.style.height = `${800 / dimensions}px`;
            square.style.width = `${800 / dimensions}px`;
            square.addEventListener('mouseover', ()=> {
                if (square.style.backgroundColor == 'gray') {
                    square.style.backgroundColor = undefined;
                    square.style.backgroundColor = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, 1)`;


                }else{
                    const currentOpacity = parseFloat(square.style.opacity) || 0;
                    square.style.opacity = Math.min(currentOpacity + 0.1, 1);
                }
            });
            line.appendChild(square);
        }
        grid.appendChild(line);
    }
}