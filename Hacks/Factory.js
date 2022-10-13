function addCash(amount){return getStateNode()[0]._owner.stateNode.setState({cash: amount})}
function freeUpgrade(){
    for (let i of getStateNode()[0]._owner.stateNode.state.blooks){
        for(let p=0;p<i.price.length;p++){
            i.price[p]=0;
        }
    }
}
function getModMaxBlook(){
    for(let i=0;i<8;i++){ getStateNode()[0]._owner.stateNode.state.blooks[i] = { "name": "Mega Bot", "color": "#d71f27", "class": "🤖", "rarity": "Legendary", "cash": [ 1e100, 1e100, 1e100, 1e100, 1e100 ], "time": [ 0.1, 0.1, 0.1, 0.1, 0.1 ], "price": [ 0, 0, 0, 0 ], "active": false, "level": 4, "bonus": 1.5 }; }
}
