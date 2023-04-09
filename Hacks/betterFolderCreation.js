//https://dashboard.blooket.com/my-sets
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
function findByProp(prop,first=true){
const wp = Object.values(webpackJsonp.push([
        [], {
            ['']: (_, a, b) => {
                a.cache = b.c
            },
        },
        [
            ['']
        ],
    ]).cache);
if(first){
    return wp.find((x)=>x.exports&&x.exports.a&&x.exports.a[prop]).exports.a;
}else{
    return wp.filter(x=>x.exports?.a&&x.exports?.a[prop]).map(n=>n.exports.a)
}
}

window.setInterval(()=>{
        if(!document.querySelector("#folderColorPicker")){
            try{
        document.querySelector("div[class*='colorsHolder']").innerHTML = `<input id="folderColorPicker" style="margin: 0 auto;" type="color">`
document.querySelector("#folderColorPicker").onchange = function(e){
    getStateNode().setState({folderColor: e.target.value})
}
            }catch{}
    }
    })
    Array.from(document.querySelectorAll("div")).filter(x=>x.className.includes("FolderButton")).map(x=>x[Object.keys(x).filter(x=>x.includes("EventHandler"))]).map(x=>x.onClick=function(){
    getStateNode().setState({
        creatingFolder: true
    });
});
})();
