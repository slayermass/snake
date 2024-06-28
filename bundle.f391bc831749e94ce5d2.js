(()=>{"use strict";var e={715:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,'body{margin:10px}.game{width:calc(50px*var(--fieldNumber) + 1px*var(--fieldNumber) - 1px);display:grid;grid-template-columns:repeat(var(--fieldNumber), 1fr);border:1px solid #000;grid-gap:1px;background-color:#000}.game .cell{background-color:#fff;width:50px;height:50px}.game .cell[data-class=food]:before{background-color:#c33;border-radius:50%;display:flex;content:"";width:50px;height:50px}.game .cell[data-class=snake]:before{background-color:#0c0;border-radius:50%;display:flex;content:"";width:50px;height:50px}.game .cell[data-class=snakeHead]:before{background-color:#090;border-radius:50%;display:flex;content:"";width:50px;height:50px;justify-content:center;align-items:center;content:"head"}',""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},601:e=>{e.exports=function(e){return e[1]}},2:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),d=n.n(s),l=n(56),c=n.n(l),u=n(540),f=n.n(u),m=n(113),g=n.n(m),p=n(715),v={};v.styleTagTransform=g(),v.setAttributes=c(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),a()(p.A,v);const k=p.A&&p.A.locals?p.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],l=r.base?d[0]+r.base:d[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var f=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var g=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var d=r(e,a),l=0;l<o.length;l++){var c=n(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},316:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.regenerateSnake=t.generateSnake=t.createGameField=t.regenerateGameField=t.syncSnakeWithGameField=t.clearGameFieldBlock=t.render=t.markBlock=void 0;const a=n(266),o=n(491),i=r(n(975));t.markBlock=(e,t)=>{const{gameField:n}=i.default;n[e[0]][e[1]]=t,i.default.gameField=n},t.render=()=>{i.default.isDebugEnabled&&(()=>{let e="";const{gameField:t}=i.default;for(let n=0;n<t.length;n+=1)e+=`${t[n].join(" ")}\n`;const n=[`gameField: \n${e}`,`current snake's length: ${i.default.snake.length}`,`current snake's speed: ${i.default.snakeMovingSpeed}`];console.info(n.join("\n"))})();const e=document.querySelector(".game"),t={x:0,y:-1};for(let n=0;n<e.children.length;n+=1){t.y+=1,t.y===o.fieldSize&&(t.x+=1,t.y=0);const r=e.children[n],a="data-class";switch(i.default.gameField[t.x][t.y]){case 1:r.setAttribute(a,"food");break;case 2:r.setAttribute(a,"snake");break;case 3:r.setAttribute(a,"snakeHead");break;default:r.removeAttribute(a)}}},t.clearGameFieldBlock=e=>{(0,t.markBlock)(e,0)},t.syncSnakeWithGameField=()=>{const{snake:e}=i.default;for(let n=0;n<e.length;n+=1)(0,t.markBlock)([e[n][0],e[n][1]],0===n?3:2)},t.regenerateGameField=()=>{const e=[];for(let t=0;t<o.fieldSize;t+=1){const t=[];for(let e=0;e<o.fieldSize;e+=1)t.push(0);e.push(t)}i.default.gameField=e},t.createGameField=()=>{const e=document.querySelector("#root");if(!e)return;const n=document.createElement("div");n.className="game",(0,t.regenerateGameField)();let r="";for(let e=0;e<o.fieldSize;e+=1)for(let e=0;e<o.fieldSize;e+=1)r+='<div class="cell"></div>';n.innerHTML=r,e.appendChild(n),document.documentElement.style.setProperty("--fieldNumber",o.fieldSize.toString())},t.generateSnake=()=>{const e=Math.floor((o.fieldSize-1)/2);for(let t=-1;t<o.snakeStartLength-1;t+=1)i.default.snake.push([e+(0,a.getAddition)("x",t,o.snakeStartPosition),e+(0,a.getAddition)("y",t,o.snakeStartPosition)]);(0,t.syncSnakeWithGameField)(),(0,t.render)()},t.regenerateSnake=()=>{i.default.snake=[],(0,t.generateSnake)()}},620:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.winOfGame=t.endOfGame=t.restartGame=t.startNewGame=void 0;const a=n(708),o=r(n(975)),i=n(316),s=n(130);t.startNewGame=e=>{o.default.isDebugEnabled=e?.debug||!1,(0,i.createGameField)(),(0,i.generateSnake)(),(0,a.createNewBlockInRandomPlace)(),(0,s.subscribeOnArrows)()},t.restartGame=()=>{(0,s.unsubscribeOnArrows)(),(0,s.subscribeOnArrows)(),(0,i.regenerateGameField)(),(0,i.regenerateSnake)(),(0,a.createNewBlockInRandomPlace)(),(0,i.render)()},t.endOfGame=()=>{(0,s.unsubscribeOnArrows)(),(0,s.unsubscribeMoveSnake)(),confirm("Lose. Restart?")&&(0,t.restartGame)()},t.winOfGame=()=>{(0,s.unsubscribeOnArrows)(),(0,s.unsubscribeMoveSnake)(),confirm("Win. Restart?")&&(0,t.restartGame)()}},708:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.moveSnake=t.isEmptyBlock=t.ifAteFood=t.isMovingToBorderLine=t.isMovingToItself=t.isMovingBack=t.createNewBlockInRandomPlace=void 0;const a=n(620),o=n(316),i=n(266),s=r(n(975)),d=n(491);t.createNewBlockInRandomPlace=()=>{const e=[];for(let t=0;t<d.fieldSize;t+=1)for(let n=0;n<d.fieldSize;n+=1)0===s.default.gameField[t][n]&&e.push([t,n]);if(0===e.length)(0,a.endOfGame)();else{const t=(0,i.getRandomNumber)(1,e.length)-1;(0,o.markBlock)(e[t],1),(0,o.render)()}},t.isMovingBack=e=>s.default.snake[1][0]===e[0]&&s.default.snake[1][1]===e[1],t.isMovingToItself=e=>{for(let t=0;t<s.default.snake.length;t+=1)if(s.default.snake[t][0]===e[0]&&s.default.snake[t][1]===e[1])return!1;return!0},t.isMovingToBorderLine=e=>{const{snakeMovingDirection:t}=s.default;return!("horizontalTop"===t&&0===e[0]||"horizontalBottom"===t&&e[0]===d.fieldSize-1||"verticalRight"===t&&e[1]===d.fieldSize-1||"verticalLeft"===t&&0===e[1])},t.ifAteFood=e=>{1===s.default.gameField[e[0]][e[1]]&&((()=>{const{snake:e}=s.default,t=e.at(-1),n=[t[0]+(0,i.getAddition)("x",1),t[1]+(0,i.getAddition)("y",1)];e.push(n)})(),(0,o.markBlock)(e,0),(0,t.createNewBlockInRandomPlace)(),s.default.snakeMovingSpeed+=d.snakeMovingSpeedIncreaseByEatenFood)},t.isEmptyBlock=()=>{const{gameField:e}=s.default;for(let t=0;t<e.length;t+=1)for(let n=0;n<d.fieldSize;n+=1)if(0===e[t][n])return!0;return!1},t.moveSnake=()=>{const e=s.default.snake[0],n=[e[0]-(0,i.getAddition)("x",1),e[1]-(0,i.getAddition)("y",1)];(0,t.isMovingBack)(n)?(0,a.endOfGame)():(0,t.isMovingToItself)(n)&&(0,t.isMovingToBorderLine)(e)?(0,t.isEmptyBlock)()?((0,t.ifAteFood)(n),s.default.snake.unshift(n),(0,o.clearGameFieldBlock)(s.default.snake.pop()),(0,o.syncSnakeWithGameField)(),(0,o.render)()):(0,a.winOfGame)():(0,a.endOfGame)()}},130:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.unsubscribeOnArrows=t.subscribeOnArrows=t.unsubscribeMoveSnake=t.subscribeMoveSnake=void 0;const a=n(708),o=r(n(975));let i;t.subscribeMoveSnake=()=>{clearTimeout(i),i=window.setTimeout((()=>{window.requestAnimationFrame(a.moveSnake),(0,t.subscribeMoveSnake)()}),1e3/o.default.snakeMovingSpeed)},t.unsubscribeMoveSnake=()=>{clearTimeout(i)};const s=e=>{switch(e.key){case"ArrowUp":o.default.snakeMovingDirection="horizontalTop",void 0===i&&(0,t.subscribeMoveSnake)();break;case"ArrowDown":o.default.snakeMovingDirection="horizontalBottom";break;case"ArrowLeft":o.default.snakeMovingDirection="verticalLeft";break;case"ArrowRight":o.default.snakeMovingDirection="verticalRight"}};t.subscribeOnArrows=()=>{window.addEventListener("keydown",s)},t.unsubscribeOnArrows=()=>{window.removeEventListener("keydown",s)}},491:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.snakeMovingSpeedIncreaseByEatenFood=t.snakeMovingSpeed=t.snakeStartPosition=t.snakeStartLength=t.fieldSize=void 0,t.fieldSize=11,t.snakeStartLength=4,t.snakeStartPosition="horizontalTop",t.snakeMovingSpeed=2,t.snakeMovingSpeedIncreaseByEatenFood=.1},266:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getAddition=t.getRandomNumber=void 0;const a=r(n(975));t.getRandomNumber=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,t.getAddition=(e,t,n=a.default.snakeMovingDirection)=>"x"===e&&"horizontalTop"===n?t:"x"===e&&"horizontalBottom"===n?-t:"y"===e&&"verticalLeft"===n?t:"y"===e&&"verticalRight"===n?-t:0},975:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(491),a={get snakeMovingDirection(){return this._snakeMovingDirection},set snakeMovingDirection(e){this._snakeMovingDirection=e},get isDebugEnabled(){return this._isDebugEnabled},set isDebugEnabled(e){this._isDebugEnabled=e},get gameField(){return this._gameField},set gameField(e){this._gameField=e},get snake(){return this._snake},set snake(e){this._snake=e},get snakeMovingSpeed(){return this._snakeMovingSpeed},set snakeMovingSpeed(e){this._snakeMovingSpeed=+e.toFixed(1)}};a.snakeMovingDirection=r.snakeStartPosition,a.isDebugEnabled=!1,a.gameField=[],a.snake=[],a.snakeMovingSpeed=r.snakeMovingSpeed,t.default=a}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{n(2);const e=n(620);window.addEventListener("load",(()=>{(0,e.startNewGame)({debug:!0})}))})()})();