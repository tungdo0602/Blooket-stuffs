//https://dashboard.blooket.com/my-sets
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
