const shop = document.getElementById("shop");
const searchResults = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
let num = 0;

function createShopItem(num = 1){
    
    for(let i = 0; i < num; i++){
        const shopItem = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("p");
        const price = document.createElement("h4");
        const button = document.createElement("button");

        text.textContent = "Insert text here";
        price.textContent = "$$$"
        button.textContent = "Buy"
        image.alt = "Image of a pokemon card"
        shopItem.className = "pkmnCard";
        shopItem.id = `${i + 1}`; 
        image.id = `img${i + 1}`;
        text.id = `txt${i + 1}`;
        price.id = `price${i + 1}`;
        price.className = "cardPrice"

        shop.appendChild(shopItem);
        shopItem.appendChild(image);
        shopItem.appendChild(text);
        shopItem.appendChild(price)
        shopItem.appendChild(button)
    }
    
    return num; 
}

let totalNum = createShopItem(3);
const pkmnCards =[]; 
const allPkmnCards = getPokeCard();

async function getPokeCard(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); //remember jsonData has all the arrays of cards. could be used somehow for a search feature
    const allPkmnCards = jsonData.data;

    pkmnCards.push(jsonData.data[223])
    pkmnCards.push(jsonData.data[244])
    pkmnCards.push(jsonData.data[137])
    
    console.log(jsonData.data);
    console.log(pkmnCards);
    
    pkmnCards.forEach((card, idx) => {
        const cardImg = document.getElementById(`img${idx + 1}`);
        const cardText = document.getElementById(`txt${idx +1 }`);
        const cardPrice = document.getElementById(`price${idx +1 }`);
        
        cardImg.src = card.images.small; 
        cardText.textContent = card.flavorText;
        cardPrice.textContent = `$${card.cardmarket.prices.averageSellPrice}`; 
    })

    
    let text = document.createElement("p");
    text.textContent = jsonData.data[223].types[0];
    searchResults.appendChild(text);

    //searchByType(allPkmnCards, "Grass")  
    console.log(`type ${jsonData.data[223].types[0]}`)
    
    return jsonData.data;
    
    
}

searchBtn.addEventListener("click", ()=> {
    console.log(allPkmnCards);
    // allPkmnCards.forEach((card) => {
    //     if(card.types[0] === "Grass"){
    //         let text = document.createElement("p");
    //         text.textContent = card.types[0];
    //         searchResults.appendChild(text);
    //     }
    // }) //this block of code is trying to loop through array of obj to grab all the ones that have the searched for type
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

 
getPokeCard();
console.log(pkmnCards);
console.log(totalNum);



