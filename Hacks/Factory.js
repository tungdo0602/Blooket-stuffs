function addCash(amount){return getStateNode()[0]._owner.stateNode.setState({cash: amount})}
function freeUpgrade(){
    for (let i of getStateNode()[0]._owner.stateNode.state.blooks){
        for(let p=0;p<i.price.length;p++){
            i.price[p]=0;
        }
    }
}
