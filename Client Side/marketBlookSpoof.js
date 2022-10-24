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
let blooks = findByProp("Astronaut");
let blookData = getStateNode().state.blookData;
for(let i of Object.keys(blooks)){
    if(!blookData[i]){
        blookData[i]=1
    }
}
getStateNode().setState({blookData: blookData});
})();
