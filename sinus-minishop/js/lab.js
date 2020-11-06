/* 
btn original color: #222;

*/



// reset knapp
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET'

// reset functionen
function resetAll(){
    // reset art1 background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white'

    // reset art2 h2
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = "Sinus Hoodie"

    // reset art2 img
    let art2Img = document.querySelector('.art-2 img');
    art2Img.src = "img/hoodie-fire.png"
    art2Img.style.width = "80%"

    // reset middle button färg
    let middleBtn = document.querySelector('.art-2 button')
    middleBtn.style.backgroundColor = '#222'

    // reset art2 text
    let art2P = document.querySelector('.art-2 p')
    art2P.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!"
}

// sätt event listner på reset knappen
reset.addEventListener('click', resetAll)

/********** HÄR SLUTAR RESET SECTIONEN ***********/

/* här sker ändringar på sidan */

// sätt even listner på första knappen
let darkModeBtn = btns[0];
darkModeBtn.innerText = "Dark"
darkModeBtn.addEventListener('click', 
    function(e){
        changeArt1ToGrey();
        changeH2inArt2();
        changeImgArt2();
        redButton();
        changeArt2Text();
    }
);

// byt ut bilden på article 2
function changeImgArt2(){
    let art2Img = document.querySelector('.art-2 img');
    art2Img.src = "https://i.pinimg.com/originals/e1/6e/4b/e16e4bdf1c9ee17f1d268b567451d755.png"
    art2Img.style.width = "60%"
}


// byt ut rubriken på article 2
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = "Tokyo Ghoul"
}


// function som ändrar art-1 färg till mörkgrå
function changeArt1ToGrey(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = '#4e4f4f'
}

// ändra färg på knappen i art1
function redButton(){
    let middleBtn = document.querySelector('.art-2 button')
    middleBtn.style.backgroundColor = 'crimson'
}

// ändra text på art2
function changeArt2Text(){
    let art2P = document.querySelector('.art-2 p')
    art2P.innerText = "JA! jag kollar på anime.... låt mig va :("
}