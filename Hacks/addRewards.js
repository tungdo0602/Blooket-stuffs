(function(){
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
function bypass(){
    let _bypass = document.createElement("iframe");
    _bypass.style.display = 'none';
    document.body.appendChild(_bypass);
    return {window: _bypass.contentWindow, document: _bypass.contentDocument}
}
if(!location.host.includes("play.blooket.com")){
    bypass().window.alert("Redirect you to the correct page. Please paste the code again.");
    location.replace("https://play.blooket.com/play");
}else{
    findByProp("put").put("https://play.blooket.com/api/users/add-rewards", {
        addedTokens: 500,
        addedXp: 500
    }).then((res)=>{
        if(res.status==200){
            bypass().window.alert("Added max tokens and xp.")
        }else{
            bypass().window.alert("Failed to add token and xp.")
        }
    });
}
})();
