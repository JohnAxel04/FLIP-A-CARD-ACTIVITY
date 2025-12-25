const card = document.querySelector('.whole');

card.addEventListener('click', function() {
    card.classList.toggle('flipped');
});

const card1 = document.querySelector('.whale1');
card1.addEventListener('click', function() {
    card1.classList.toggle('flipped1');
});
const card2 = document.querySelector('.whole2');
card2.addEventListener('click', function() {
    card2.classList.toggle('flp_1');
});

let intro = document.querySelector('.main');
let logo = document.querySelector('._Header');
let logoSpan = document.querySelectorAll('.hed');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span , idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50); 

            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-102vh';
        }, 2300);

    },0);

})