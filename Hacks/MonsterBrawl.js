function setXP(amount){return getStateNode()[0]._owner.stateNode.setState({totalXp: amount, xp: amount})}
function setLevel(amount){return getStateNode()[0]._owner.stateNode.setState({level: amount})}
