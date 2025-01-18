export async function getPokeCard(){
    const pkmnCards = [];
    
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); //remember jsonData has all the arrays of cards. could be used somehow for a search feature
    const allPkmnCards = jsonData.data;

    pkmnCards.push(jsonData.data[223])
    pkmnCards.push(jsonData.data[244])
    pkmnCards.push(jsonData.data[137])
    
    // console.log(jsonData.data);
    // console.log(pkmnCards);
    
    pkmnCards.forEach((card, idx) => {
        const cardImg = document.getElementById(`img${idx + 1}`);
        const cardText = document.getElementById(`txt${idx +1 }`);
        const cardPrice = document.getElementById(`price${idx +1 }`);
        
        cardImg.src = card.images.small; 
        cardText.textContent = card.flavorText;
        cardPrice.textContent = `$${card.cardmarket.prices.averageSellPrice}`; 
    })

    
    // let text = document.createElement("p");
    // text.textContent = jsonData.data[223].types[0];
    // searchResults.appendChild(text);

    //searchByType(allPkmnCards, "Grass")  
    //console.log(`type ${jsonData.data[223].types[0]}`)
    
    return jsonData.data;
    
    
}