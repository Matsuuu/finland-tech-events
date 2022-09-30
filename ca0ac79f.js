/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const e=window,i=e.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,o="?"+n,l=`<${o}>`,r=document,h=(t="")=>r.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,a=t=>d(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,c=/-->/g,_=/>/g,u=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),v=/'/g,p=/"/g,g=/^(?:script|style|textarea|title)$/i,f=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),m=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),H=new WeakMap,x=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=o._$litPart$;if(void 0===l){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new T(e.insertBefore(h(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l},N=r.createTreeWalker(r,129,null,!1),C=(t,e)=>{const i=t.length-1,o=[];let r,h=2===e?"<svg>":"",$=A;for(let e=0;e<i;e++){const i=t[e];let s,d,a=-1,f=0;for(;f<i.length&&($.lastIndex=f,d=$.exec(i),null!==d);)f=$.lastIndex,$===A?"!--"===d[1]?$=c:void 0!==d[1]?$=_:void 0!==d[2]?(g.test(d[2])&&(r=RegExp("</"+d[2],"g")),$=u):void 0!==d[3]&&($=u):$===u?">"===d[0]?($=null!=r?r:A,a=-1):void 0===d[1]?a=-2:(a=$.lastIndex-d[2].length,s=d[1],$=void 0===d[3]?u:'"'===d[3]?p:v):$===p||$===v?$=u:$===c||$===_?$=A:($=u,r=void 0);const m=$===u&&t[e+1].startsWith("/>")?" ":"";h+=$===A?i+l:a>=0?(o.push(s),i.slice(0,a)+"$lit$"+i.slice(a)+n+m):i+n+(-2===a?(o.push(void 0),e):m)}const d=h+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(d):d,o]};class b{constructor({strings:t,_$litType$:e},s){let l;this.parts=[];let r=0,$=0;const d=t.length-1,a=this.parts,[A,c]=C(t,e);if(this.el=b.createElement(A,s),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(l=N.nextNode())&&a.length<d;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const e of l.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(n)){const i=c[$++];if(t.push(e),void 0!==i){const t=l.getAttribute(i.toLowerCase()+"$lit$").split(n),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?P:"@"===e[1]?B:w})}else a.push({type:6,index:r})}for(const e of t)l.removeAttribute(e)}if(g.test(l.tagName)){const t=l.textContent.split(n),e=t.length-1;if(e>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<e;i++)l.append(t[i],h()),N.nextNode(),a.push({type:2,index:++r});l.append(t[e],h())}}}else if(8===l.nodeType)if(l.data===o)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=l.data.indexOf(n,t+1));)a.push({type:7,index:r}),t+=n.length-1}r++}}static createElement(t,e){const i=r.createElement("template");return i.innerHTML=t,i}}function S(t,e,i=t,s){var n,o,l,r;if(e===m)return e;let h=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const d=$(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==d&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===d?h=void 0:(h=new d(t),h._$AT(t,i,s)),void 0!==s?(null!==(l=(r=i)._$Cl)&&void 0!==l?l:r._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=S(t,h._$AS(t,e.values),h,s)),e}class M{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:r).importNode(i,!0);N.currentNode=n;let o=N.nextNode(),l=0,h=0,$=s[0];for(;void 0!==$;){if(l===$.index){let e;2===$.type?e=new T(o,o.nextSibling,this,t):1===$.type?e=new $.ctor(o,$.name,$.strings,this,t):6===$.type&&(e=new U(o,this,t)),this.v.push(e),$=s[++h]}l!==(null==$?void 0:$.index)&&(o=N.nextNode(),l++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{constructor(t,e,i,s){var n;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),$(t)?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==m&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):a(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==y&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(r.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=b.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new M(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new b(t)),e}O(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new T(this.S(h()),this.S(h()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class w{constructor(t,e,i,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=S(this,t,e,0),o=!$(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const s=t;let l,r;for(t=n[0],l=0;l<n.length-1;l++)r=S(this,s[i+l],e,l),r===m&&(r=this._$AH[l]),o||(o=!$(r)||r!==this._$AH[l]),r===y?t=y:t!==y&&(t+=(null!=r?r:"")+n[l+1]),this._$AH[l]=r}o&&!s&&this.P(t)}P(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends w{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===y?void 0:t}}const E=i?i.emptyScript:"";class P extends w{constructor(){super(...arguments),this.type=4}P(t){t&&t!==y?this.element.setAttribute(this.name,E):this.element.removeAttribute(this.name)}}class B extends w{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=S(this,t,e,0))&&void 0!==i?i:y)===m)return;const s=this._$AH,n=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==y&&(s===y||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class U{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const R={A:"$lit$",M:n,C:o,L:1,R:C,D:M,V:a,I:S,H:T,N:w,U:P,B:B,F:I,W:U},L=e.litHtmlPolyfillSupport;null==L||L(b,T),(null!==(t=e.litHtmlVersions)&&void 0!==t?t:e.litHtmlVersions=[]).push("2.3.1");export{x as A,m as x,f as y,R as z};