
//connect querys for the input field and the button

const generateButton = document.querySelector('button');

//stored number function

let storedNumber;
const storeInputValue = () => {
   let inputField = document.querySelector('input').value;
   storedNumber = inputField;
   if (storedNumber < 1 || storedNumber > 100){
    alert('Sorry, this number is out of range. Please try a number between 1 and 100');
    storedNumber = 0;
   }
   else{

   }
}

// clear canvas function

const clearCanvas = document.querySelector('.clear-canvas');
clearCanvas.addEventListener('click', () => {
  container.innerHTML = '';
});

//generate canvas function

generateButton.addEventListener('click', () => {
    storeInputValue();
    container.innerHTML = '';
    drawGrid(storedNumber, storedNumber);
});

//Canvas creation logic function

const container = document.querySelector('.container');
function drawGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    }
  }
  
// hover feature for canvas that changes the background color of the div

const colorPicker = document.querySelector('.color-picker');
colorPicker.addEventListener('input', () =>{
  let theColor;
  theColor = colorPicker.value;
  for (const gridColor of document.querySelectorAll('.grid-item')){
    gridColor.addEventListener('mouseover', () => {
      gridColor.style.backgroundColor = theColor;
    });
  };
});

// eraser feature

const eraserFunction = document.querySelector('.eraser');
eraserFunction.addEventListener('click', () => {
  for (const gridColor of document.querySelectorAll('.grid-item')){
    gridColor.addEventListener('mouseover', () => {
      gridColor.style.backgroundColor = 'white';
    });
  };
});

