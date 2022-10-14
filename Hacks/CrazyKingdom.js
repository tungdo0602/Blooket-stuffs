function maxAll(){return getStateNode().setState({materials: Number.MAX_VALUE, people: Number.MAX_VALUE, happiness: Number.MAX_VALUE, gold: Number.MAX_VALUE})}
function setScore(amount){
    return getStateNode().setState({guestScore: amount})
}
