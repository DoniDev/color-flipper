// Get the button
const btn = document.querySelector('.btn');
const textColor = document.querySelector('.color')

// add listener
btn.addEventListener('click', changeBackground);

// color array
const colorArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function changeBackground() {
    let color = '#'
    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * colorArray.length)
        color += colorArray[randomIndex]
    }
    textColor.textContent = color;
    textColor.style.color = color;
    document.body.style.backgroundColor = color;
}
