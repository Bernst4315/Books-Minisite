const pkmnCardImg = document.getElementById("img1")

async function getPokeCard(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); //remember jsonData has all the arrays of cards. could be used somehow for a search feature
    console.log(jsonData.data[159]);
}



getPokeCard();