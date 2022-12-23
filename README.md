# Blooket-stuffs
## Note Before use any script here for another place:
#### 1. You should credit me in the script
#### 2. The template is for developing lol
## Things
#### Userscript: https://greasyfork.org/en/scripts/453539-blooket-utilities
## Debug Stuffs
```js
function getStateNode(){for(let e of Object.keys(document.querySelector("#app>div>div")))if(e.toString().includes("__reactEventHandlers")){for(let t of Object.values(document.querySelector("#app>div>div")[e].children.filter(e=>e)))if(t._owner&&t._owner.stateNode)return t._owner.stateNode}}function findByProp(e,t=!0){let o=Object.values(webpackJsonp.push([[],{""(e,t,o){t.cache=o.c}},[[""]],]).cache);return t?o.find(t=>t.exports&&t.exports.a&&t.exports.a[e]).exports.a:o.filter(t=>t.exports?.a&&t.exports?.a[e]).map(e=>e.exports.a)}function bypass(){let e=document.createElement("iframe");return e.style.display="none",document.body.appendChild(e),{window:e.contentWindow,document:e.contentDocument}}
```

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

## Debugging Functions
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
