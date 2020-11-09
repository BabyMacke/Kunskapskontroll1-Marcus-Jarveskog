


// reset knapp
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET'

// reset functionen
function resetAll(){
    // reset articles colors
    let mainArticles = document.querySelectorAll('main article');
    for(i = 0; i < mainArticles.length; i++){
        mainArticles[i].style.backgroundColor = "#ffffff";
        mainArticles[i].style.color = "#000000"
    }

    // reset art2 h2
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = "Sinus Hoodie"

    // reset art2 img
    let art2Img = document.querySelector('.art-2 img');
    art2Img.src = "img/hoodie-fire.png"
    art2Img.style.width = "80%"
    art2Img.style.paddingBottom = "0px"

    // reset middle button färg och text
    let middleBtn = document.querySelector('.art-2 button')
    middleBtn.style.backgroundColor = '#222'
    middleBtn.innerText = "Buy"

    // reset art2 text
    let art2P = document.querySelector('.art-2 p')
    art2P.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!"

    // reset menu item
    let menu = document.querySelector('#header-navigation')
    let firstMenuItem = document.querySelector('#header-navigation a')
    let menuItem = document.createElement('a')
    menuItem.innerText = "Home"
    if(firstMenuItem.innerText == "Products"){
        firstMenuItem.insertAdjacentElement('beforebegin', menuItem)
    }

    // reset footer content
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <section>
    <article>
        <h3>Menu</h3>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
    </article>
    <article>
        <h3>Where we are</h3>
        <p>Sinus skateboards <br>
        Railsvägen 13 <br>
        133 37, Rampnäs</p>
    </article>
    <article>
        <h3>Social media</h3>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
    </article>
</section>`

    //reset body och footer
    let body = document.querySelector('body')
    body.style.backgroundColor = "#ffffff"
    footer.style.backgroundColor = ""

    //reset backgrund bakom bilder
    let figure = document.querySelectorAll('figure')
    for(i = 0; i < figure.length; i++){
        figure[i].style.backgroundColor = "rgb(244, 182, 10)";
       
    }
    
}

// sätt event listner på reset knappen
reset.addEventListener('click', resetAll)

/********** HÄR SLUTAR RESET SECTIONEN ***********/

/* här sker ändringar på sidan */

// sätt even listner på första knappen(enables darkmode)
let darkModeBtn = btns[0];
darkModeBtn.innerText = "Dark"
darkModeBtn.addEventListener('click', 
    function(e){
        changeArtToDark();
        redButton();
        changeBodyToDark();
        changeFigureToDark();

    }
);

// event på knappen i mitten för att ta bort footer och lägga till list
let middleBtn = document.querySelector('.art-2 button');
middleBtn.addEventListener('click', function(e){
    removeFooterContent();
    addList();
});

//event på bilden i mitten för att byta bild
let middleImg = document.querySelector('.art-2 img');
middleImg.addEventListener('click', function(e){
    changeImgArt2();
    
})

//event på art 2 heading för att ändra texten på art 2 (art2h2 kinda fits the theme im going with, no pun intended)
let art2h2 = document.querySelector('.art-2 h2');
art2h2.style.cursor = "pointer"
art2h2.addEventListener('click', function(e){
    changeH2inArt2();
    changeArt2Text();
})


//event på shoppingbag för att ta bort home
let shoppingBag = document.querySelector('nav img');
shoppingBag.addEventListener('click', function(e){
    removeMenuItems();
})

// byt ut bilden på article 2
function changeImgArt2(){
    middleImg.src = "https://static.wikia.nocookie.net/starwars/images/2/2e/Imperial_Emblem.svg/revision/latest?cb=20080220004323"
    middleImg.style.width = "80%"
    middleImg.style.paddingBottom = "18px"
}


// byt ut rubriken på article 2
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = "Dark side"
}


// function som ändrar mainArticles backgrunds färger till mörkgrå
function changeArtToDark(){
    let mainArticles = document.querySelectorAll('main article');
    for(i = 0; i < mainArticles.length; i++){
        mainArticles[i].style.backgroundColor = "#3a3b3b";
    }
}

// gör bakgrund mörk
function changeBodyToDark(){
    let body = document.querySelector('body')
    body.style.backgroundColor = "#4e4f4f"
    let footer = document.querySelector('footer')
    footer.style.backgroundColor = "#4a4a4a"
}

// ändra backgrundfärg bakom bilderna
function changeFigureToDark(){
    let figure = document.querySelectorAll('figure')
    for(i = 0; i < figure.length; i++){
        figure[i].style.backgroundColor = "#2e2e2e";
    }
}

// ändra färg och text på knappen i art1
function redButton(){
    let middleBtn = document.querySelector('.art-2 button')
    middleBtn.style.backgroundColor = '#591313'
    middleBtn.innerText = "Try me"
}

// ändra text på art2
function changeArt2Text(){
    let art2P = document.querySelector('.art-2 p')
    art2P.innerText = "Now you know the power of the dark side!"
}

// ta bort Home i menyn
function removeMenuItems(){
    let menu = document.querySelector('#header-navigation')
    let menuItem = document.querySelector('#header-navigation a')
    if(menuItem.innerText == "Home"){
        menu.removeChild(menuItem);
    } 
}

// ta bort footer listor
function removeFooterContent(){
    let footerSection = document.querySelector('footer section');
    footerSection.remove();
}


//skapa och lägg till en en ny lista på sidan
function addList(){
    let newList = document.createElement('ul')
    let listItem = document.createElement('li')
    let footer = document.querySelector('footer');
    footer.appendChild(newList)

    // loopa fram 5 list items
    for(let i = 1; i <= 5; i++) {
        let li = document.createElement('li');
        li.innerHTML = `Epic List Item ${i}`;
        newList.appendChild(li);

        li.style.listStyle = "none";
        li.style.borderBottom = "solid #3a3b3b"
        li.style.width = "80vw"
        li.style.textAlign = "center"
        li.style.color = "white"
    }
}