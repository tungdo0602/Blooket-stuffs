# Blooket-stuffs
## Get stateNode
```js
let getStateNode = (p) => {if(p){{for(let i of Object.values(document.querySelector("#app>div>div"))[1].children.filter(n=>n)){if(i._owner&&i._owner.stateNode[p])return i._owner.stateNode[p]}}}else{return Object.values(document.querySelector("#app>div>div"))[1].children.filter(n=>n)}}
```
