//https://dashboard.blooket.com/blooks
(()=>{
    function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
let blooks = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x=>x.exports?.a?.toString().includes('UFO')).exports.a.toString().split('"').filter(b => !(b.startsWith(';') || b.startsWith(':') || b.startsWith('function') || b.startsWith('}')))
let dict = {}
for(let i of Object.values(blooks)){
    dict[i] = 1;
}
getStateNode().setState({blookData: dict});
})();
