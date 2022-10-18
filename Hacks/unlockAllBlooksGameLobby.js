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
getStateNode().state.unlocks = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x=>x.exports?.a?.toString().includes('UFO')).exports.a.toString().split('"').filter(b => !(b.startsWith(';') || b.startsWith(':') || b.startsWith('function') || b.startsWith('}')))
})();
