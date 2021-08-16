let income = document.getElementById('income');
let plus = document.getElementById('plus');
let addMoney = document.getElementById('add');

let expense = document.getElementById('expense');
let removeMoney = document.getElementById('remove');
let minus = document.getElementById('minus');

let balance = document.getElementById('balance');

let taka=0;

addMoney.addEventListener('submit', e => {
    income.innerText = plus.value;
    taka += parseInt(plus.value);
    balance.innerText = taka;
    plus.value = "";
    e.preventDefault();
})

removeMoney.addEventListener('submit', e => {
    console.log(typeof(taka))
    if (taka <= parseInt(minus.value)) {
        alert('huru bettta')
    }
    else {
        expense.innerText = minus.value;
        taka -= parseInt(minus.value);
        balance.innerText = taka;
    }
    minus.value = "";
    e.preventDefault();
})

