(function(){
function getStateNode() {
    return Object.values(document.querySelector("#app>div>div")).find(e=>e.children).children.find(m=>m._owner&&m._owner.stateNode)._owner.stateNode;
}
function bypass(){
    let _bypass = document.createElement("iframe");
    _bypass.style.display = 'none';
    document.body.appendChild(_bypass);
    return {window: _bypass.contentWindow, document: _bypass.contentDocument}
}
    window.setInterval(()=>{
        try{
        getStateNode().enemies.map(n=>n.health=n.maxHealth=0);
        }catch{
            
        }
    }, 10);
})();
