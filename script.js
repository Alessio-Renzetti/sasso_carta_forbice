function img_ins() {
    let ele = document.querySelector("#display")
    ele.innerHTML = `<img class="fix_img_fight scale-in-center" src="img/fight-removebg-preview.png">`
}


function scontro(e) {
    console.log(e.firstElementChild.firstElementChild.src)
    let card_content = document.querySelector("#card_content")
    card_content.style = "display: none;"
    let array = [
        "img/rocciosa.png.png",
        "img/forbici.png.png",
        "img/carta.png.png"
    ]
    let rand = Math.floor(Math.random() * 3)
    let display = document.querySelector("#display")
    display.innerHTML += `<img class="fix_img slide-right" src="${e.firstElementChild.firstElementChild.src}" alt="">`
    display.innerHTML += `<img class="fix_img slide-left" src="${array[rand]}" alt="">`

    setTimeout(() => { img_ins() }, 1500)
    
    setTimeout (() => {switch (e.getAttribute("attr")) {
        case "0" :
            switch (rand) {
                case 0:
                    display.innerHTML = `<h1 class=" scale-in-center">Hai pareggiato</h1>`
                    break;
                case 1:
                    display.innerHTML = `<h1 class=" scale-in-center">HAI VINTO</h1>`
                    break;
                case 2:
                    display.innerHTML = `<h1 class=" scale-in-center">HAI PERSO</h1>`
                    break;
            }
            break;
        case "1" :
            switch (rand) {
                case 0:
                    display.innerHTML = `<h1 class=" scale-in-center">HAI PERSO</h1>`
                    break;
                case 1:
                    display.innerHTML = `<h1 class=" scale-in-center">Hai pareggiato</h1>`
                    break;
                case 2:
                    display.innerHTML = `<h1 class=" scale-in-center">HAI VINTO</h1>`
                    break;
            }
            break;
        case "2" :
            switch (rand) {
                case 0:
                    display.innerHTML = `<h1 class=" scale-in-center">HAI VINTO</h1>`
                    break;
                case 1:
                    display.innerHTML = `<h1 class=" scale-in-center">HAI PERSO</h1>`
                    break;
                case 2:
                    display.innerHTML = `<h1 class=" scale-in-center">Hai pareggiato</h1>`
                    break;
            }
            break;
    }},2500)

}