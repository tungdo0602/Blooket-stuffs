(function(){
    function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
    window.setInterval(()=>{
        try{
            Array.from(document.querySelectorAll("div")).find(n=>n.innerText===getStateNode().state.correctPassword).click()}
        catch{
            
        }
    },10);
})();
