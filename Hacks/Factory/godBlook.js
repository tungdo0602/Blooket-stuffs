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
for(let i=0;i<10;i++){ getStateNode().state.blooks[i] = { "name": "Rainbow Astronaut", "color": "#000000", "class": "👨‍🦽", "rarity": "Mystical", "cash": [ 1e100, 1e100, 1e100, 1e100, 1e100 ], "time": [ 0.1, 0.1, 0.1, 0.1, 0.1 ], "price": [ 0, 0, 0, 0 ], "active": true, "level": 4, "bonus": 1.65 }}
getStateNode().forceUpdate();
})();
