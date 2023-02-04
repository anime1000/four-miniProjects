const body = document.querySelector('.body');
const textColor = document.querySelector('#hex-code');
let = btnChange = document.querySelector('.btn').addEventListener('click', ()=>{
    let a = Math.floor(Math.random() * (254));
    let b = Math.floor(Math.random() * (254));
    let c = Math.floor(Math.random() * (254));
    let n = Math.random() * 1;
    body.style.backgroundColor = `rgba(${a}, ${b}, ${c}, ${n.toFixed(1)})`;
    textColor.innerHTML = `${a},${b},${c},${n.toFixed(1)}`;
});