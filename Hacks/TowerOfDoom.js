function setCoins(amount){return getStateNode().setState({coins: amount})}
function maxCardStats(){
    let myCards = getStateNode().state.myCards
    for(let i of Object.values(myCards)){
        i.strength = i.charisma = i.wisdom = Number.MAX_VALUE;
    }
    return getStateNode().setState({myCards: myCards})
}
function maxHealth(){
    return getStateNode().setState({myLife: Number.MAX_VALUE})
}
