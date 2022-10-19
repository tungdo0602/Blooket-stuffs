// ==UserScript==
// @name         Blooket lobby blook unlocker
// @namespace    https://github.com/tungdo0602/Blooket-stuffs
// @version      0.1
// @description  Unlock all blooks on game lobby.
// @author       tungdo0602 (https://github.com/tungdo0602)
// @match        *://play.blooket.com/play/lobby
// @icon         https://www.google.com/s2/favicons?domain=https://blooket.com/
// @grant        none
// @run-at       document-end
// @supportURL   https://github.com/tungdo0602/Blooket-stuffs/issues
// @license      MIT
// @source       https://github.com/tungdo0602/Blooket-stuffs/blob/main/userscripts/unlockBlooks.user.js
// ==/UserScript==

(function() {
    'use strict';

(function(){ function getStateNode(){ for(let i of Object.keys(document.querySelector("#app>div>div"))){ if(i.toString().includes("__reactEventHandlers")){ for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){ if(p._owner&&p._owner.stateNode)return p._owner.stateNode } } } } function findByProp(p){ return Object.values(window.webpackJsonp.push([ [], { ['']: (_, a, b) => { a.cache = b.c }, }, [ [''] ], ]).cache).find((x)=>{ if(x.exports&&x.exports.a&&x.exports.a[p])return x.exports.a }).exports.a} getStateNode().state.unlocks = Object.keys(findByProp("Astronaut")); getStateNode().forceUpdate(); })();
})();
