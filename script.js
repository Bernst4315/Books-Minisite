const pkmnCardImg1 = document.getElementById("img1")
const pkmnCardImg2 = document.getElementById("img2")
const pkmnCardImg3 = document.getElementById("img3")
const pkmnCards =[]; 

async function getPokeCard(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); //remember jsonData has all the arrays of cards. could be used somehow for a search feature
    pkmnCards.push(jsonData.data[223].images.small)
    pkmnCards.push(jsonData.data[244].images.small)
    pkmnCards.push(jsonData.data[137].images.small)
    
    pkmnCardImg1.src = pkmnCards[0];
    pkmnCardImg2.src = pkmnCards[1];
    pkmnCardImg3.src = pkmnCards[2];

    console.log(jsonData.data);
    
}

getPokeCard();
//let url = pkmnCards[0];
//console.log(url);


