const incrementbtn = document.querySelector('#increment');
const decrementbtn = document.querySelector('#decrement');

const ulElement = document.getElementById('list-items');
let counter = 0;

function incrementCounter(){
    const counterElement = document.getElementById('counter');
    counter++;
    counterElement.innerText = counter;

    const li = document.createElement('li');
    // const textNode = document.createTextNode('incremented by '+ counter);
    // li.appendChild(textNode);

    li.setAttribute('data-counter', counter);

    li.innerHTML = 'Incremented by ' + counter;
    ulElement.appendChild(li);

}
function decrementCounter(){
    const counterElement = document.getElementById('counter');
    const li = ulElement.querySelector('[data-counter="'+counter+'"]');
    li.remove();


    counter--;
    counterElement.innerText = counter;
}

incrementbtn.addEventListener('click', incrementCounter);
decrementbtn.addEventListener('click', decrementCounter);