# Blooket-stuffs

## Hack Template
```js
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


})();
```

## Functions
### Get stateNode
#### Description: Important function to execute most of code here.
```js
function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
```

### Bypass disable dommands
#### Description: Bypass Some disable command like prompt() (important)
```js
function bypass(){
    let _bypass = document.createElement("iframe");
    _bypass.style.display = 'none';
    document.body.appendChild(_bypass);
    return {window: _bypass.contentWindow, document: _bypass.contentDocument}
}
```

### Webpack
```js
Object.values(webpackJsonp.push([
    [], {
        ['']: (_, a, b) => {
            a.cache = b.c
        },
    },
    [
        ['']
    ],
]).cache)
```

### FindByProp
```js
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
```

## How to debug function
### To find some hack (like swap,...), you need to find it's set value and things. So you can do it by patch the function and force it log value.
#### Example
```js
if(!typeof oldsv){
    const oldsv = getStateNode().props.liveGameController.setVal;
}
getStateNode().props.liveGameController.setVal = function(e,t){
    console.log(e)
    console.log(t)
    return oldsv.apply(this, arguments)
}
```
