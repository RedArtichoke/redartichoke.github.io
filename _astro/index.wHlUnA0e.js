import{g as An,R as Me}from"./index.CqrSl2Gl.js";var dt={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt;function kn(){if(Zt)return $;Zt=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,i){var o=null;if(i!==void 0&&(o=""+i),r.key!==void 0&&(o=""+r.key),"key"in r){i={};for(var s in r)s!=="key"&&(i[s]=r[s])}else i=r;return r=i.ref,{$$typeof:t,type:a,key:o,ref:r!==void 0?r:null,props:i}}return $.Fragment=e,$.jsx=n,$.jsxs=n,$}var te;function Pn(){return te||(te=1,dt.exports=kn()),dt.exports}var Hr=Pn();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function wn(t,e,n){return(e=Sn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ee(Object(n),!0).forEach(function(a){wn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function On(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sn(t){var e=On(t,"string");return typeof e=="symbol"?e:e+""}const ne=()=>{};let Ut={},Re={},Le=null,ze={mark:ne,measure:ne};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(Re=document),typeof MutationObserver<"u"&&(Le=MutationObserver),typeof performance<"u"&&(ze=performance)}catch{}const{userAgent:ae=""}=Ut.navigator||{},R=Ut,h=Re,re=Le,tt=ze;R.document;const F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",je=~ae.indexOf("MSIE")||~ae.indexOf("Trident/");var En=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Cn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,De={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},In={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},We=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",st="duotone",Tn="sharp",Nn="sharp-duotone",Ye=[A,st,Tn,Nn],_n={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Fn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Mn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Rn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ln=["fak","fa-kit","fakd","fa-kit-duotone"],ie={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zn=["kit"],jn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Dn=["fak","fakd"],Wn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},oe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Un=["fak","fa-kit","fakd","fa-kit-duotone"],Hn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Gn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Xn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$n=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],wt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Yn,...$n],qn=["solid","regular","light","thin","duotone","brands"],Ue=[1,2,3,4,5,6,7,8,9,10],Vn=Ue.concat([11,12,13,14,15,16,17,18,19,20]),Bn=[...Object.keys(Xn),...qn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Ue.map(t=>"".concat(t,"x"))).concat(Vn.map(t=>"w-".concat(t))),Kn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const N="___FONT_AWESOME___",Ot=16,He="fa",Ge="svg-inline--fa",D="data-fa-i2svg",St="data-fa-pseudo-element",Jn="data-fa-pseudo-element-pending",Ht="data-prefix",Gt="data-icon",se="fontawesome-i2svg",Qn="async",Zn=["HTML","HEAD","STYLE","SCRIPT"],Xe=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const $e=l({},De);$e[A]=l(l(l(l({},{"fa-duotone":"duotone"}),De[A]),ie.kit),ie["kit-duotone"]);const ta=Q($e),Et=l({},Rn);Et[A]=l(l(l(l({},{duotone:"fad"}),Et[A]),oe.kit),oe["kit-duotone"]);const le=Q(Et),Ct=l({},Pt);Ct[A]=l(l({},Ct[A]),Wn.kit);const Xt=Q(Ct),It=l({},Gn);It[A]=l(l({},It[A]),jn.kit);Q(It);const ea=En,qe="fa-layers-text",na=Cn,aa=l({},_n);Q(aa);const ra=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt=In,ia=[...zn,...Bn],V=R.FontAwesomeConfig||{};function oa(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=sa(oa(n));r!=null&&(V[a]=r)});const Ve={styleDefault:"solid",familyDefault:A,cssPrefix:He,replacementClass:Ge,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);const G=l(l({},Ve),V);G.autoReplaceSvg||(G.observeMutations=!1);const c={};Object.keys(Ve).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){G[t]=e,B.forEach(n=>n(c))},get:function(){return G[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,B.forEach(e=>e(c))},get:function(){return G.cssPrefix}});R.FontAwesomeConfig=c;const B=[];function la(t){return B.push(t),()=>{B.splice(B.indexOf(t),1)}}const M=Ot,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fa(t){if(!t||!F)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}const ca="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){let t=12,e="";for(;t-- >0;)e+=ca[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $t(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ua(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Be(t[n]),'" '),"").trim()}function lt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function ma(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function da(t){let{transform:e,width:n=Ot,height:a=Ot,startCentered:r=!1}=t,i="";return r&&je?i+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):i+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),i+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var pa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ke(){const t=He,e=Ge,n=c.cssPrefix,a=c.replacementClass;let r=pa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let fe=!1;function gt(){c.autoAddCss&&!fe&&(fa(Ke()),fe=!0)}var ga={mixout(){return{dom:{css:Ke,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}};const _=R||{};_[N]||(_[N]={});_[N].styles||(_[N].styles={});_[N].hooks||(_[N].hooks={});_[N].shims||(_[N].shims=[]);var I=_[N];const Je=[],Qe=function(){h.removeEventListener("DOMContentLoaded",Qe),rt=1,Je.map(t=>t())};let rt=!1;F&&(rt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),rt||h.addEventListener("DOMContentLoaded",Qe));function ha(t){F&&(rt?setTimeout(t,0):Je.push(t))}function Z(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Be(t):"<".concat(e," ").concat(ua(n),">").concat(a.map(Z).join(""),"</").concat(e,">")}function ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ht=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,u,f,m;for(a===void 0?(u=1,m=e[i[0]]):(u=0,m=a);u<o;u++)f=i[u],m=s(m,e[f],f,e);return m};function ba(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=ba(t);return e.length===1?e[0].toString(16):null}function ya(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ue(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Nt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ue(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,ue(e)):I.styles[t]=l(l({},I.styles[t]||{}),r),t==="fas"&&Nt("fa",e)}const{styles:J,shims:va}=I,Ze=Object.keys(Xt),xa=Ze.reduce((t,e)=>(t[e]=Object.keys(Xt[e]),t),{});let Vt=null,tn={},en={},nn={},an={},rn={};function Aa(t){return~ia.indexOf(t)}function ka(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Aa(r)?r:null}const on=()=>{const t=a=>ht(J,(r,i,o)=>(r[o]=ht(i,a,{}),r),{});tn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),en=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),rn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in J||c.autoFetchSvg,n=ht(va,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});nn=n.names,an=n.unicodes,Vt=ft(c.styleDefault,{family:c.familyDefault})};la(t=>{Vt=ft(t.styleDefault,{family:c.familyDefault})});on();function Bt(t,e){return(tn[t]||{})[e]}function Pa(t,e){return(en[t]||{})[e]}function j(t,e){return(rn[t]||{})[e]}function sn(t){return nn[t]||{prefix:null,iconName:null}}function wa(t){const e=an[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function L(){return Vt}const ln=()=>({prefix:null,iconName:null,rest:[]});function Oa(t){let e=A;const n=Ze.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return Ye.forEach(a=>{(t.includes(n[a])||t.some(r=>xa[a].includes(r)))&&(e=a)}),e}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=ta[n][t];if(n===st&&!t)return"fad";const r=le[n][t]||le[n][a],i=t in I.styles?t:null;return r||i||null}function Sa(t){let e=[],n=null;return t.forEach(a=>{const r=ka(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function me(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ct(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=wt.concat(Un),i=me(t.filter(g=>r.includes(g))),o=me(t.filter(g=>!wt.includes(g))),s=i.filter(g=>(a=g,!We.includes(g))),[u=null]=s,f=Oa(i),m=l(l({},Sa(o)),{},{prefix:ft(u,{family:f})});return l(l(l({},m),Ta({values:t,family:f,styles:J,config:c,canonical:m,givenPrefix:a})),Ea(n,a,m))}function Ea(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?sn(r):{},o=j(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!J.far&&J.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ca=Ye.filter(t=>t!==A||t!==st),Ia=Object.keys(Pt).filter(t=>t!==A).map(t=>Object.keys(Pt[t])).flat();function Ta(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===st,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||f||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ca.includes(n)&&(Object.keys(i).find(d=>Ia.includes(d))||o.autoFetchSvg)){const d=Mn.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=j(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=L()||"fas"),a}class Na{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Nt(i,r[i]);const o=Xt[A][i];o&&Nt(o,r[i]),on()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}}let de=[],Y={};const H={},_a=Object.keys(H);function Fa(t,e){let{mixoutsTo:n}=e;return de=t,Y={},Object.keys(H).forEach(a=>{_a.indexOf(a)===-1&&delete H[a]}),de.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{Y[o]||(Y[o]=[]),Y[o].push(i[o])})}a.provides&&a.provides(H)}),n}function _t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Y[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Y[t]||[]).forEach(i=>{i.apply(null,n)})}function z(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||L();if(e)return e=j(n,e)||e,ce(fn.definitions,n,e)||ce(I.styles,n,e)}const fn=new Na,Ma=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,W("noAuto")},Ra={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(W("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ha(()=>{za({autoReplaceSvgRoot:e}),W("watch",t)})}},La={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ft(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(ea))){const e=ct(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||L(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=L();return{prefix:e,iconName:j(e,t)||t}}}},w={noAuto:Ma,config:c,dom:Ra,parse:La,library:fn,findIconDefinition:Ft,toHtml:Z},za=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(I.styles).length>0||c.autoFetchSvg)&&F&&c.autoReplaceSvg&&w.dom.i2svg({node:e})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Z(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ja(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(qt(o)&&n.found&&!a.found){const{width:s,height:u}=n,f={x:s/u/2,y:.5};r.style=lt(l(l({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Da(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Kt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:u,titleId:f,extra:m,watchable:g=!1}=t,{width:d,height:y}=n.found?n:e,P=Dn.includes(a),O=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(S=>m.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(m.classes).join(" ");let b={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(y)})};const x=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/y*16*.0625,"em")}:{};g&&(b.attributes[D]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||K())},children:[s]}),delete b.attributes.title);const v=l(l({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:l(l({},x),m.styles)}),{children:k,attributes:T}=n.found&&e.found?z("generateAbstractMask",v)||{children:[],attributes:{}}:z("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=k,v.attributes=T,o?Da(v):ja(v)}function pe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,u=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[D]="");const f=l({},o.styles);qt(r)&&(f.transform=da({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=lt(f);m.length>0&&(u.style=m);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Wa(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=lt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:bt}=I;function Mt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ya={found:!1,width:512,height:512};function Ua(t,e){!Xe&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=L()),new Promise((a,r)=>{if(n==="fa"){const i=sn(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&bt[e]&&bt[e][t]){const i=bt[e][t];return a(Mt(i))}Ua(t,e),a(l(l({},Ya),{},{icon:c.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}const ge=()=>{},Lt=c.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:ge,measure:ge},q='FA "6.7.2"',Ha=t=>(Lt.mark("".concat(q," ").concat(t," begins")),()=>cn(t)),cn=t=>{Lt.mark("".concat(q," ").concat(t," ends")),Lt.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))};var Jt={begin:Ha,end:cn};const nt=()=>{};function he(t){return typeof(t.getAttribute?t.getAttribute(D):null)=="string"}function Ga(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Gt):null;return e&&n}function Xa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function $a(){return c.autoReplaceSvg===!0?at.replace:at[c.autoReplaceSvg]||at.replace}function qa(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Va(t){return h.createElement(t)}function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?qa:Va}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(un(i,{ceFn:n}))}),a}function Ba(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const at={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(un(n),e)}),e.getAttribute(D)===null&&c.keepOriginalSource){let n=h.createComment(Ba(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$t(e).indexOf(c.replacementClass))return at.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===c.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Z(i)).join(`
`);e.setAttribute(D,""),e.innerHTML=r}};function be(t){t()}function mn(t,e){const n=typeof e=="function"?e:nt;if(t.length===0)n();else{let a=be;c.mutateApproach===Qn&&(a=R.requestAnimationFrame||be),a(()=>{const r=$a(),i=Jt.begin("mutate");t.map(r),i(),n()})}}let Qt=!1;function dn(){Qt=!0}function zt(){Qt=!1}let it=null;function ye(t){if(!re||!c.observeMutations)return;const{treeCallback:e=nt,nodeCallback:n=nt,pseudoElementsCallback:a=nt,observeMutationsRoot:r=h}=t;it=new re(i=>{if(Qt)return;const o=L();X(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!he(s.addedNodes[0])&&(c.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&he(s.target)&&~ra.indexOf(s.attributeName))if(s.attributeName==="class"&&Ga(s.target)){const{prefix:u,iconName:f}=ct($t(s.target));s.target.setAttribute(Ht,u||o),f&&s.target.setAttribute(Gt,f)}else Xa(s.target)&&n(s.target)})}),F&&it.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ka(){it&&it.disconnect()}function Ja(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Qa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ct($t(t));return r.prefix||(r.prefix=L()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Pa(r.prefix,t.innerText)||Bt(r.prefix,Tt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Za(t){const e=X(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||K()):(e["aria-hidden"]="true",e.focusable="false")),e}function tr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Qa(t),i=Za(t),o=_t("parseNodeAttributes",{},t);let s=e.styleParser?Ja(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:er}=I;function pn(t){const e=c.autoReplaceSvg==="nest"?ve(t,{styleParser:!1}):ve(t);return~e.extra.classes.indexOf(qe)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}function nr(){return[...Ln,...wt]}function xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=h.documentElement.classList,a=m=>n.add("".concat(se,"-").concat(m)),r=m=>n.remove("".concat(se,"-").concat(m)),i=c.autoFetchSvg?nr():We.concat(Object.keys(er));i.includes("fa")||i.push("fa");const o=[".".concat(qe,":not([").concat(D,"])")].concat(i.map(m=>".".concat(m,":not([").concat(D,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=X(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Jt.begin("onTree"),f=s.reduce((m,g)=>{try{const d=pn(g);d&&m.push(d)}catch(d){Xe||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,g)=>{Promise.all(f).then(d=>{mn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),m()})}).catch(d=>{u(),g(d)})})}function ar(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(n=>{n&&mn([n],e)})}function rr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ft(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ft(r||{})),t(a,l(l({},n),{},{mask:r}))}}const ir=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:g,iconName:d,icon:y}=t;return ut(l({type:"icon"},t),()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||K()):(f["aria-hidden"]="true",f.focusable="false")),Kt({icons:{main:Mt(y),mask:r?Mt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:l(l({},C),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:m,classes:u}})))};var or={mixout(){return{icon:rr(ir)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=xe,t.nodeCallback=ar,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return xe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:u,mask:f,maskId:m,extra:g}=n;return new Promise((d,y)=>{Promise.all([Rt(a,o),f.iconName?Rt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[O,b]=P;d([e,Kt({icons:{main:O,mask:b},prefix:o,iconName:a,transform:s,symbol:u,maskId:m,title:r,titleId:i,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=lt(o);s.length>0&&(a.style=s);let u;return qt(i)&&(u=z("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},sr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ut({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},lr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ut({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),Wa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},fr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return ut({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),pe({content:t,transform:l(l({},C),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(je){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,s=f.height/u}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,pe({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const cr=new RegExp('"',"ug"),Ae=[1105920,1112319],ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Fn),Kn),Hn),jt=Object.keys(ke).reduce((t,e)=>(t[e.toLowerCase()]=ke[e],t),{}),ur=Object.keys(jt).reduce((t,e)=>{const n=jt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function mr(t){const e=t.replace(cr,""),n=ya(e,0),a=n>=Ae[0]&&n<=Ae[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function dr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(jt[n]||{})[r]||ur[n]}function Pe(t,e){const n="".concat(Jn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=X(t.children).filter(d=>d.getAttribute(St)===e)[0],s=R.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),f=u.match(na),m=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&g!=="none"&&g!==""){const d=s.getPropertyValue("content");let y=dr(u,m);const{value:P,isSecondary:O}=mr(d),b=f[0].startsWith("FontAwesome");let x=Bt(y,P),v=x;if(b){const k=wa(P);k.iconName&&k.prefix&&(x=k.iconName,y=k.prefix)}if(x&&!O&&(!o||o.getAttribute(Ht)!==y||o.getAttribute(Gt)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const k=tr(),{extra:T}=k;T.attributes[St]=e,Rt(x,y).then(S=>{const vn=Kt(l(l({},k),{},{icons:{main:S,mask:ln()},prefix:y,iconName:v,extra:T,watchable:!0})),mt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=vn.map(xn=>Z(xn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function pr(t){return Promise.all([Pe(t,"::before"),Pe(t,"::after")])}function gr(t){return t.parentNode!==document.head&&!~Zn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(St)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function we(t){if(F)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(gr).map(pr),r=Jt.begin("searchPseudoElements");dn(),Promise.all(a).then(()=>{r(),zt(),e()}).catch(()=>{r(),zt(),n()})})}var hr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=we,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;c.searchPseudoElements&&we(n)}}};let Oe=!1;var br={mixout(){return{dom:{unwatch(){dn(),Oe=!0}}}},hooks(){return{bootstrap(){ye(_t("mutationObserverCallbacks",{}))},noAuto(){Ka()},watch(t){const{observeMutationsRoot:e}=t;Oe?zt():ye(_t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Se=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var yr={mixout(){return{parse:{transform:t=>Se(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Se(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:m,path:g};return{tag:"g",attributes:l({},d.outer),children:[{tag:"g",attributes:l({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),d.path)}]}]}}}};const yt={x:0,y:0,width:"100%",height:"100%"};function Ee(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vr(t){return t.tag==="g"?t.children:[t]}var xr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ct(n.split(" ").map(r=>r.trim())):ln();return a.prefix||(a.prefix=L()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:u,icon:f}=r,{width:m,icon:g}=i,d=ma({transform:s,containerWidth:m,iconWidth:u}),y={tag:"rect",attributes:l(l({},yt),{},{fill:"white"})},P=f.children?{children:f.children.map(Ee)}:{},O={tag:"g",attributes:l({},d.inner),children:[Ee(l({tag:f.tag,attributes:l(l({},f.attributes),d.path)},P))]},b={tag:"g",attributes:l({},d.outer),children:[O]},x="mask-".concat(o||K()),v="clip-".concat(o||K()),k={tag:"mask",attributes:l(l({},yt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:vr(g)},k]};return n.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},yt)}),{children:n,attributes:a}}}},Ar={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},kr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Pr=[ga,or,sr,lr,fr,hr,br,yr,xr,Ar,kr];Fa(Pr,{mixoutsTo:w});w.noAuto;w.config;w.library;w.dom;const Dt=w.parse;w.findIconDefinition;w.toHtml;const wr=w.icon;w.layer;w.text;w.counter;var vt={exports:{}},xt,Ce;function Or(){if(Ce)return xt;Ce=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xt=t,xt}var At,Ie;function Sr(){if(Ie)return At;Ie=1;var t=Or();function e(){}function n(){}return n.resetWarningCache=e,At=function(){function a(o,s,u,f,m,g){if(g!==t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},At}var Te;function Er(){return Te||(Te=1,vt.exports=Sr()()),vt.exports}var Cr=Er();const p=An(Cr);function Ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(n),!0).forEach(function(a){U(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ir(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Tr(t,e){if(t==null)return{};var n=Ir(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Wt(t){return Nr(t)||_r(t)||Fr(t)||Mr()}function Nr(t){if(Array.isArray(t))return Yt(t)}function _r(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fr(t,e){if(t){if(typeof t=="string")return Yt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yt(t,e)}}function Yt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Mr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,u=t.spin,f=t.spinPulse,m=t.spinReverse,g=t.pulse,d=t.fixedWidth,y=t.inverse,P=t.border,O=t.listItem,b=t.flip,x=t.size,v=t.rotation,k=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":d,"fa-inverse":y,"fa-border":P,"fa-li":O,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},U(e,"fa-".concat(x),typeof x<"u"&&x!==null),U(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),U(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),U(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function Lr(t){return t=t-0,t===t}function gn(t){return Lr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var zr=["style"];function jr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Dr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=gn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[jr(r)]=i:e[r]=i,e},{})}function hn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return hn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var m=e.attributes[f];switch(f){case"class":u.attrs.className=m,delete e.attributes.class;break;case"style":u.attrs.style=Dr(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[gn(f)]=m}return u},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Tr(n,zr);return r.attrs.style=E(E({},r.attrs.style),o),t.apply(void 0,[e.tag,E(E({},r.attrs),s)].concat(Wt(a)))}var bn=!1;try{bn=!0}catch{}function Wr(){if(!bn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _e(t){if(t&&ot(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dt.icon)return Dt.icon(t);if(t===null)return null;if(t&&ot(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?U({},t,e):{}}var Fe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},yn=Me.forwardRef(function(t,e){var n=E(E({},Fe),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,u=n.titleId,f=n.maskId,m=_e(a),g=kt("classes",[].concat(Wt(Rr(n)),Wt((o||"").split(" ")))),d=kt("transform",typeof n.transform=="string"?Dt.transform(n.transform):n.transform),y=kt("mask",_e(r)),P=wr(m,E(E(E(E({},g),d),y),{},{symbol:i,title:s,titleId:u,maskId:f}));if(!P)return Wr("Could not find icon",m),null;var O=P.abstract,b={ref:e};return Object.keys(n).forEach(function(x){Fe.hasOwnProperty(x)||(b[x]=n[x])}),Yr(O[0],b)});yn.displayName="FontAwesomeIcon";yn.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Yr=hn.bind(null,Me.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Gr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Xr={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},$r={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"]},qr={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};export{yn as F,Xr as a,qr as b,$r as c,Gr as f,Hr as j};
