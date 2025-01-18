import { createShopItem } from "./shop.js"
import { getPokeCard } from "./event.js";

const shop = document.getElementById("shop");
const searchResults = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");


createShopItem()

let totalNum = createShopItem(3);
const pkmnCards =[]; 

getPokeCard();
const allPkmnCards = getPokeCard();

searchBtn.addEventListener("click", ()=> {
    console.log("click") 
    console.log(allPkmnCards); //seems like this is stuck within a promise

    // allPkmnCards.forEach((card) => {
    //     if(card.types[0] === "Grass"){
    //         let text = document.createElement("p");
    //         text.textContent = card.name;
    //         searchResults.appendChild(text);
    //     }
    // })
     //this block of code is trying to loop through array of obj to grab all the ones that have the searched for type
    //(currently hardcoded) and make a list of results in the HTML
    //would eventually try to make it work via user input
 })


// async function searchByType(cards, type){
    
//     cards.forEach((card) => {
//         if(card.types[0] === type){
//             let text = document.createElement("p");
//             text.textContent = cards.name;
//             searchResults.appendChild(text)
//         }
//     })   
    
// }

 

// console.log(pkmnCards);
// console.log(totalNum);



