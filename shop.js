export function createShopItem(num = 0){
    
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