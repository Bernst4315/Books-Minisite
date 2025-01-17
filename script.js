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

        shop.appendChild(shopItem);
        shopItem.appendChild(image);
        shopItem.appendChild(text);
        shopItem.appendChild(price)
        shopItem.appendChild(button)
    }
    
    return num; 
}

let totalNum = createShopItem(3);


// const pkmnCardImg1 = document.getElementById("img1")
// const pkmnCardImg2 = document.getElementById("img2")
// const pkmnCardImg3 = document.getElementById("img3")

// const Card1 = document.getElementById("card1")
// const Card2 = document.getElementById("card2")
// const Card3 = document.getElementById("card3")

const pkmnCards =[]; 

async function getPokeCard(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); //remember jsonData has all the arrays of cards. could be used somehow for a search feature

    pkmnCards.push(jsonData.data[223])
    pkmnCards.push(jsonData.data[244])
    pkmnCards.push(jsonData.data[137])
    
    // pkmnCardImg1.src = pkmnCards[0].images.small;
    // pkmnCardImg2.src = pkmnCards[1].images.small;
    // pkmnCardImg3.src = pkmnCards[2].images.small;

    // const text = document.createElement("p")
    // text = pkmnCards[0].flavorText;
    // card1.appendChild(text);
    // card2.appendChild(pkmnCards[1].flavorText);
    // card3.appendChild(pkmnCards[2].flavorText);
     
    console.log(jsonData.data[137].cardmarket.prices.averageSellPrice);
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

//let url = pkmnCards[0];
//console.log(url);


