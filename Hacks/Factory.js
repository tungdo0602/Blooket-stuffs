function addCash(amount){return getStateNode().setState({cash: amount})}
function freeUpgrade(){
    for (let i of getStateNode().state.blooks){
        for(let p=0;p<i.price.length;p++){
            i.price[p]=0;
        }
    }
}
function getGodBlooks(){
    for(let i=0;i<8;i++){ getStateNode().state.blooks[i] = { "name": "Mega Bot", "color": "#d71f27", "class": "🤖", "rarity": "Legendary", "cash": [ 1e100, 1e100, 1e100, 1e100, 1e100 ], "time": [ 0.1, 0.1, 0.1, 0.1, 0.1 ], "price": [ 0, 0, 0, 0 ], "active": false, "level": 4, "bonus": 1.5 }; }
}
