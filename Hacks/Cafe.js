function setCash(amount){return getStateNode().setState({cafeCash: amount})}
function maxFood(){
for(let i of Object.values(getStateNode().state.foods)){
    i.level = 5
    i.stock = Number.MAX_VALUE
}
}
function setDay(amount){return getStateNode().setState({day: amount})}
