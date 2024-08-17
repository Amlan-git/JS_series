const incrementbtn = document.querySelector('#increment');
const decrementbtn = document.querySelector('#decrement');

let counter = 0;

function incrementCounter(){
    const counterElement = document.getElementById('counter');
    counter++;
    counterElement.innerText = counter;
}
function decrementCounter(){
    const counterElement = document.getElementById('counter');
    counter--;
    counterElement.innerText = counter;
}

incrementbtn.addEventListener('click', incrementCounter);
decrementbtn.addEventListener('click', decrementCounter);