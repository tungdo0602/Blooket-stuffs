function setTokens(amount){return getStateNode().setState({tokens: amount})}
function setDmg(amount){return getStateNode().setState({totalDmg: amount})}
function setRound(amount){return getStateNode().setState({round: amount})}
function setHealth(amount){return getStateNode().setState({health: amount})}
function setGodTower(){
    return getStateNode().setState({towerSelected: {
        alive: true,
        blastRadius: 100,
        cost: 0,
        damage: 1e100,
        finalUpgrade: 0,
        level: 3,
        range: 100,
        totalCost: 0
    }});
}
