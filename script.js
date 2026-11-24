const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");


function createGrid(size) {
    
    container.innerHTML = "";

    
    const squareSize = 640 / size;


    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

    
        container.appendChild(square);
    }
}


resizeBtn.addEventListener("click", () => {
    let newSize = prompt("Her kenarda kaç kare olsun? (En fazla 100):");
    newSize = Number(newSize); // Yazıyı sayıya çevir

    
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Lütfen 1 ile 100 arasında bir sayı girin!");
    }
});


createGrid(16);
