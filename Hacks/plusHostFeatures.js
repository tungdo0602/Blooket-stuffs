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
if(location.host==='play.blooket.com'&&location.href.includes("/host")){
getStateNode().props.user.data.plan = 'Plus Flex';
getStateNode().state.isBen = getStateNode().state.plus = getStateNode().state.canPlusHost = true;
getStateNode().forceUpdate();
}else{
    bypass().window.alert("You should run it when host a game.");
}
})();
