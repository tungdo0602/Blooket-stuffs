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

    let pname = bypass().window.prompt("Player Name");
    let gold = bypass().window.prompt("Gold");
    getStateNode().props.liveGameController.setVal({
        path: "c/" + getStateNode().props.client.name,
        val: {
            b: getStateNode().props.client.blook,
            g: getStateNode().state.gold,
            tat: pname + ":swap:" + gold
    }
});
})();
