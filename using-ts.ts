const first = document.getElementById('first-number');
const second = document.getElementById('second-number');
const btn = document.querySelector('button');

const add = (num1, num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + numb2;
    } else {
        return +num1 + +num2;
    }
}

btn.addEventListener('click', function() {
    console.log(add(first.value, second.value));
});[]