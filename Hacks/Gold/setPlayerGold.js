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

    pname = bypass().window.prompt("Player Name");
    gold = bypass().window.prompt("Gold");
    getStateNode().props.liveGameController.setVal({
        path: "c/" + getStateNode().props.client.name,
        val: {
            b: getStateNode().props.client.blook,
            g: getStateNode().state.gold,
            tat: pname + ":swap:" + gold
    }
});
})();
