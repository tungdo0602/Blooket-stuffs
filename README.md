# Blooket-stuffs
# This project will give you functions to modify blooket so don't ask for hack script or fix script error...
## Note Before use any script here for another place:
#### 1. You should credit me in the script
#### 2. The template is for developing lol
## Things
#### Userscript: https://greasyfork.org/en/scripts/453539-blooket-utilities
## Main Function
```js
function getStateNode(){return Object.values(document.querySelector("#app>div>div")).find((e=>e.children)).children.find((e=>e._owner&&e._owner.stateNode))._owner.stateNode}function bypass(){let e=document.createElement("iframe");return e.style.display="none",document.body.appendChild(e),{window:e.contentWindow,document:e.contentDocument}}
```

## Hack Template
```js
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

// Your code here

})();
```

## Debugging Functions
### Get stateNode
#### Description: Important function that use to access to most of blooket game data.
```js
function getStateNode() {
    return Object.values(document.querySelector("#app>div>div")).find(e=>e.children).children.find(m=>m._owner&&m._owner.stateNode)._owner.stateNode
}
```

### Bypass
#### Description: Bypass Some disable functions like prompt()
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

```

### FindByProp
```js

```
