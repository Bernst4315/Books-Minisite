const shop = document.getElementById("shop");
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

async function getPokeCard(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); //remember jsonData has all the arrays of cards. could be used somehow for a search feature

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
    
}

getPokeCard();
console.log(pkmnCards);
console.log(totalNum);



