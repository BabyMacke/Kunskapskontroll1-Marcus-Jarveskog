/* 
btn original color: #222;

*/



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

    // reset middle button färg
    let middleBtn = document.querySelector('.art-2 button')
    middleBtn.style.backgroundColor = '#222'

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
        changeArtToGrey();
        redButton();
        changeArt2Text();
        removeMenuItems();
    }
);

// event på knappen i mitten för att ta bort footer och lägga till y list
let middleBtn = document.querySelector('.art-2 button');
middleBtn.addEventListener('click', function(e){
    removeFooterContent();
    addList();
});

//event på bilden i mitten för att byta bild
let middleImg = document.querySelector('.art-2 img');
middleImg.addEventListener('click', function(e){
    changeImgArt2();
    changeH2inArt2();
})

// byt ut bilden på article 2
function changeImgArt2(){
    middleImg.src = "https://i.pinimg.com/originals/5c/85/0c/5c850c07dbeb97237a1ffa9975c125c6.png"
    middleImg.style.width = "70%"
}


// byt ut rubriken på article 2
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = "Dark side"
}


// function som ändrar mainArticles backgrunds färger till mörkgrå och text färg till vit
function changeArtToGrey(){
    let mainArticles = document.querySelectorAll('main article');
    for(i = 0; i < mainArticles.length; i++){
        mainArticles[i].style.backgroundColor = "red";
        mainArticles[i].style.color = "#ffffff"
    }

}

// ändra färg på knappen i art1
function redButton(){
    let middleBtn = document.querySelector('.art-2 button')
    middleBtn.style.backgroundColor = 'crimson'
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
        li.style.borderBottom = "solid crimson"
        li.style.width = "100vw"
        li.style.textAlign = "center"
        li.style.color = "white"
    }
}