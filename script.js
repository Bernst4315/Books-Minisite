console.log("hello")

async function getPokeCard(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/`)
    const jsonData = await response.json(); 
    console.log(jsonData.data[159]);
}

getPokeCard();