const next = document.querySelector('#next').addEventListener('click', ()=>{
    showImage(1);
});
const prev = document.querySelector('#back').addEventListener('click', ()=>{
    showImage(-1);
});

let index = 0;

showImage(0);

function showImage(i){
    index += i;
    let images = document.querySelectorAll('.image');

    for (let i = 0; i<images.length; i++){
        images[i].style.display = 'none';
    }

    if (index > images.length -1){
        index = 0;
    }

    if (index < 0){
        index = images.length -1;
    }

    images[index].style.display = 'block';
}
