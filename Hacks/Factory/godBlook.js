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
function bypass(){
    let _bypass = document.createElement("iframe");
    _bypass.style.display = 'none';
    document.body.appendChild(_bypass);
    return {window: _bypass.contentWindow, document: _bypass.contentDocument}
}
function findByProp(p){
return Object.values(webpackJsonp.push([
    [], {
        ['']: (_, a, b) => {
            a.cache = b.c
        },
    },
    [
        ['']
    ],
]).cache).find((x)=>{
    if(x.exports&&x.exports.a&&x.exports.a[p])return x.exports.a
}).exports.a}
for(let i=0;i<10;i++){ getStateNode().state.blooks[i] = { "name": "Rainbow Astronaut", "color": "#000000", "class": "👨‍🦽", "rarity": "Mystical", "cash": [ 1e100, 1e100, 1e100, 1e100, 1e100 ], "time": [ 0.1, 0.1, 0.1, 0.1, 0.1 ], "price": [ 0, 0, 0, 0 ], "active": true, "level": 4, "bonus": 1.65 }}
getStateNode().forceUpdate();
})();
