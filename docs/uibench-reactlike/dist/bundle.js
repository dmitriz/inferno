!function(){"use strict";function e(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var t=Array.isArray;function r(e){var n=typeof e;return"string"===n||"number"===n}function o(e){return void 0===e||null===e}function l(e){return null===e||!1===e||!0===e||void 0===e}function i(e){return"function"===typeof e}function a(e){return"string"===typeof e}function u(e){return null===e}function c(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}var s={};function f(e){return e.substr(2).toLowerCase()}function d(e,n){e.appendChild(n)}function p(e,n,t){u(t)?d(e,n):e.insertBefore(n,t)}function h(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function v(e,n,t){e.replaceChild(n,t)}function g(e,n){e.removeChild(n)}function m(e){for(var n;void 0!==(n=e.shift());)n()}function y(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function b(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=y(e,n,t)}return null}function k(e,n){do{var t=e.flags;if(2033&t)return void g(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var o=0,l=r.length;o<l;++o)k(r[o],n);return}e=r}}while(e)}function $(e,n,t){do{var r=e.flags;if(2033&r)return void p(n,e.dom,t);var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)$(o[l],n,t);return}e=o}}while(e)}function C(e,n,t){if(e.constructor.getDerivedStateFromProps)return c(t,e.constructor.getDerivedStateFromProps(n,t));return t}var w={v:!1},U={componentComparator:null,createVNode:null,renderComplete:null};function x(e,n){e.textContent=n}function S(e,n){return e&&n&&typeof e===typeof n&&e.event===n.event&&e.data===n.data}function P(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}var F="$";function L(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function N(e,n,t,r,o,l,i,a){var u=void 0===o?1:o,c=new L(u,r,t,e,i,l,a,n);return 0===u&&R(c,c.children),c}function V(e,n,t){if(4&e)return t;var r=(32768&e?n.render:n).defaultHooks;if(o(r))return t;if(o(t))return r;return P(t,r)}function I(e,n,t){var r=(32768&e?n.render:n).defaultProps;if(o(r))return t;if(o(t))return c(r,null);return P(t,r)}function B(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function M(e,n,t,r,o){return new L(1,null,null,e=B(e,n),r,I(e,n,t),V(e,n,o),n)}function T(e,n){return new L(1,o(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function A(e,n,t){var r=N(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=W(),r.childFlags=2;break;case 16:r.children=[T(e)],r.childFlags=4}return r}function D(e){var n,t=e.children,r=e.childFlags;if(2===r)n=E(t);else if(12&r){n=[];for(var o=0,l=t.length;o<l;++o)n.push(E(t[o]))}return A(n,r,e.key)}function E(e){var n=-16385&e.flags,t=e.props;if(14&n&&!u(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new L(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return D(e)}function W(){return T("",null)}function O(e,n,o,i){for(var c=e.length;o<c;o++){var s=e[o];if(!l(s)){var f=i+F+o;if(t(s))O(s,n,0,f);else{if(r(s))s=T(s,f);else{var d=s.key,p=a(d)&&d[0]===F;(81920&s.flags||p)&&(s=E(s)),s.flags|=65536,p?d.substring(0,i.length)!==i&&(s.key=i+d):u(d)?s.key=f:s.key=i+d}n.push(s)}}}}function R(e,n){var o,i=1;if(l(n))o=n;else if(r(n))i=16,o=n;else if(t(n)){for(var c=n.length,s=0;s<c;++s){var f=n[s];if(l(f)||t(f)){o=o||n.slice(0,s),O(n,o,s,"");break}if(r(f))(o=o||n.slice(0,s)).push(T(f,F+s));else{var d=f.key,p=(81920&f.flags)>0,h=u(d),v=a(d)&&d[0]===F;p||h||v?(o=o||n.slice(0,s),(p||v)&&(f=E(f)),(h||v)&&(f.key=F+s),o.push(f)):o&&o.push(f),f.flags|=65536}}i=0===(o=o||n).length?1:8}else(o=n).flags|=65536,81920&n.flags&&(o=E(n)),i=2;return e.children=o,e.childFlags=i,e}var _="http://www.w3.org/1999/xlink",j="http://www.w3.org/XML/1998/namespace",H={"xlink:actuate":_,"xlink:arcrole":_,"xlink:href":_,"xlink:role":_,"xlink:show":_,"xlink:title":_,"xlink:type":_,"xml:base":j,"xml:lang":j,"xml:space":j};function Q(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var X=Q(0),G=Q(null),K=Q(!0);function q(e,n,t){var r=t.$EV;n?(0===X[e]&&(G[e]=re(e)),r||(r=t.$EV=Q(null)),r[e]||++X[e],r[e]=n):r&&r[e]&&(0===--X[e]&&(document.removeEventListener(f(e),G[e]),G[e]=null),r[e]=null)}function J(e,n,t,r,o){var l=n;do{if(t&&l.disabled)return;var i=l.$EV;if(i){var a=i[r];if(a&&(o.dom=l,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}l=l.parentNode}while(!u(l))}function z(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function Y(){return this.defaultPrevented}function Z(){return this.cancelBubble}function ee(e){var n={dom:document};return Object.defineProperties(e,{currentTarget:{get:function(){return n.dom}},isDefaultPrevented:{value:Y},isPropagationStopped:{value:Z},stopPropagation:{value:z}}),n}function ne(e){return function(n){if(0!==n.button)return void n.stopPropagation();J(n,n.target,!0,e,ee(n))}}function te(e){return function(n){J(n,n.target,!1,e,ee(n))}}function re(e){var n="onClick"===e||"onDblClick"===e?ne(e):te(e);return document.addEventListener(f(e),n),n}function oe(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function le(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function ie(e,n){var t=function(t){var r=this.$V;if(!r)return;var o=r.props||s,l=r.dom;if(a(e))le(o,e,t);else for(var u=0;u<e.length;++u)le(o,e[u],t);if(i(n)){var c=this.$V,f=c.props||s;n(f,l,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ae(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener.apply(e,o),e[r]=null}i(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ue(e){return"checkbox"===e||"radio"===e}var ce=ie("onInput",pe),se=ie(["onClick","onChange"],pe);function fe(e){e.stopPropagation()}function de(e,n){ue(n.type)?(ae(e,"change",se),ae(e,"click",fe)):ae(e,"input",ce)}function pe(e,n){var t=e.type,r=e.value,l=e.checked,i=e.multiple,a=e.defaultValue,u=!o(r);t&&t!==n.type&&n.setAttribute("type",t),o(i)||i===n.multiple||(n.multiple=i),o(a)||u||(n.defaultValue=a+""),ue(t)?(u&&(n.value=r),o(l)||(n.checked=l)):u&&n.value!==r?(n.defaultValue=r,n.value=r):o(l)||(n.checked=l)}function he(e,n){if("option"===e.type)ve(e,n);else{var t=e.children,r=e.flags;if(4&r)he(t.$LI,n);else if(8&r)he(t,n);else if(2===e.childFlags)he(t,n);else if(12&e.childFlags)for(var o=0,l=t.length;o<l;++o)he(t[o],n)}}function ve(e,n){var r=e.props||s,l=e.dom;l.value=r.value,r.value===n||t(n)&&-1!==n.indexOf(r.value)?l.selected=!0:o(n)&&o(r.selected)||(l.selected=r.selected||!1)}fe.wrapped=!0;var ge=ie("onChange",ye);function me(e){ae(e,"change",ge)}function ye(e,n,t,r){var l=Boolean(e.multiple);o(e.multiple)||l===n.multiple||(n.multiple=l);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==r.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),t&&o(a)&&(a=e.defaultValue),he(r,a)}}var be,ke,$e=ie("onInput",Ue),Ce=ie("onChange");function we(e,n){ae(e,"input",$e),n.onChange&&ae(e,"change",Ce)}function Ue(e,n,t){var r=e.value,l=n.value;if(o(r)){if(t){var i=e.defaultValue;o(i)||i===l||(n.defaultValue=i,n.value=i)}}else l!==r&&(n.defaultValue=r,n.value=r)}function xe(e,n,t,r,o,l){64&e?pe(r,t):256&e?ye(r,t,o,n):128&e&&Ue(r,t,o),l&&(t.$V=n)}function Se(e,n,t){64&e?de(n,t):256&e?me(n):128&e&&we(n,t)}function Pe(e){return e.type&&ue(e.type)?!o(e.checked):!o(e.value)}function Fe(e){e&&(i(e)?e(null):e.current&&(e.current=null))}function Le(e,n,t){e&&(i(e)||void 0!==e.current)&&t.push(function(){i(e)?e(n):void 0!==e.current&&(e.current=n)})}function Ne(e,n){Ve(e),n&&k(e,n)}function Ve(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var l=e.props;Fe(n);var a=e.childFlags;if(!u(l))for(var c=Object.keys(l),f=0,d=c.length;f<d;f++){var p=c[f];K[p]&&q(p,null,e.dom)}12&a?Ie(r):2===a&&Ve(r)}else r&&(4&t?(i(r.componentWillUnmount)&&r.componentWillUnmount(),Fe(e.ref),r.$UN=!0,Ve(r.$LI)):8&t?(!o(n=e.ref)&&i(n.onComponentWillUnmount)&&n.onComponentWillUnmount(b(e,!0),e.props||s),Ve(r)):1024&t?Ne(r,e.ref):8192&t&&12&e.childFlags&&Ie(r))}function Ie(e){for(var n=0,t=e.length;n<t;++n)Ve(e[n])}function Be(e){e.textContent=""}function Me(e,n,t){Ie(t),8192&n.flags?k(n,e):Be(e)}function Te(e,n){return function(t){e(n.data,t)}}function Ae(e,n,t,r){if("object"!==typeof t||u(t))ae(r,f(e),t);else{var o=t.event;S(n,t)||ae(r,f(e),Te(o,t))}}function De(e,n,t){if(o(n))return void t.removeAttribute("style");var r,l,i=t.style;if(a(n))return void(i.cssText=n);if(o(e)||a(e))for(r in n)l=n[r],i.setProperty(r,l);else{for(r in n)(l=n[r])!==e[r]&&i.setProperty(r,l);for(r in e)o(n[r])&&i.removeProperty(r)}}function Ee(e,n,t,r){var l=e&&e.__html||"",i=n&&n.__html||"";l!==i&&(o(i)||oe(r,i)||(u(t)||(12&t.childFlags?Ie(t.children):2===t.childFlags&&Ve(t.children),t.children=null,t.childFlags=1),r.innerHTML=i))}function We(e,n,t,r,l,i,a){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===e)break;var u=o(t)?"":t;r[e]!==u&&(r[e]=u);break;case"style":De(n,t,r);break;case"dangerouslySetInnerHTML":Ee(n,t,a,r);break;default:K[e]?S(n,t)||q(e,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ae(e,n,t,r):o(t)?r.removeAttribute(e):l&&H[e]?r.setAttributeNS(H[e],e,t):r.setAttribute(e,t)}}function Oe(e,n,t,r,o){var l=!1,i=(448&n)>0;for(var a in i&&(l=Pe(t))&&Se(n,r,t),t)We(a,null,t[a],r,o,l,null);i&&xe(n,e,r,t,!0,l)}function Re(e,n,t){var r=je(e.render(n,e.state,t)),o=t;return i(e.getChildContext)&&(o=c(t,e.getChildContext())),e.$CX=o,r}function _e(e,n,t,r,o,l){var a=new n(t,r),c=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=o,a.$L=l,e.children=a,a.$BS=!1,a.context=r,a.props===s&&(a.props=t),c)a.state=C(a,t,a.state);else if(i(a.componentWillMount)){a.$BR=!0,a.componentWillMount();var f=a.$PS;if(!u(f)){var d=a.state;if(u(d))a.state=f;else for(var p in f)d[p]=f[p];a.$PS=null}a.$BR=!1}return a.$LI=Re(a,t,r),a}function je(e){if(l(e)||r(e))return T(e,null);if(t(e))return A(e,0,null);return 16384&e.flags?E(e):e}function He(e,n,t,r,o,l){var i=e.flags|=16384;481&i?Ke(e,n,t,r,o,l):4&i?Je(e,n,t,r,o,l):8&i?ze(e,n,t,r,o,l):512&i||16&i?Ge(e,n,o):8192&i?Xe(e,n,t,r,o,l):1024&i&&Qe(e,t,n,o,l)}function Qe(e,n,t,r,o){He(e.children,e.ref,n,!1,null,o);var l=W();Ge(l,t,r),e.dom=l.dom}function Xe(e,n,t,r,o,l){var i=e.children,a=e.childFlags;12&a&&0===i.length&&(a=e.childFlags=2,i=e.children=W()),2===a?He(i,n,o,r,o,l):qe(i,n,t,r,o,l)}function Ge(e,n,t){var r=e.dom=document.createTextNode(e.children);u(n)||p(n,r,t)}function Ke(e,n,t,r,l,i){var a=e.flags,c=e.props,s=e.className,f=e.children,d=e.childFlags,v=e.dom=h(e.type,r=r||(32&a)>0);if(o(s)||""===s||(r?v.setAttribute("class",s):v.className=s),16===d)x(v,f);else if(1!==d){var g=r&&"foreignObject"!==e.type;2===d?(16384&f.flags&&(e.children=f=E(f)),He(f,v,t,g,null,i)):8!==d&&4!==d||qe(f,v,t,g,null,i)}u(n)||p(n,v,l),u(c)||Oe(e,a,c,v,r),Le(e.ref,v,i)}function qe(e,n,t,r,o,l){for(var i=0;i<e.length;++i){var a=e[i];16384&a.flags&&(e[i]=a=E(a)),He(a,n,t,r,o,l)}}function Je(e,n,t,r,o,l){var i=_e(e,e.type,e.props||s,t,r,l);He(i.$LI,n,i.$CX,r,o,l),Ze(e.ref,i,l)}function ze(e,n,t,r,o,l){var i=e.type,a=e.props||s,u=e.ref;He(e.children=je(32768&e.flags?i.render(a,u,t):i(a,t)),n,t,r,o,l),nn(a,u,e,l)}function Ye(e){return function(){e.componentDidMount()}}function Ze(e,n,t){Le(e,n,t),i(n.componentDidMount)&&t.push(Ye(n))}function en(e,n,t){return function(){e.onComponentDidMount(b(n,!0),t)}}function nn(e,n,t,r){o(n)||(i(n.onComponentWillMount)&&n.onComponentWillMount(e),i(n.onComponentDidMount)&&r.push(en(n,t,e)))}function tn(e,n,t,r,o,l){Ve(e),0!==(n.flags&e.flags&2033)?(He(n,null,r,o,null,l),v(t,n.dom,e.dom)):(He(n,t,r,o,b(e,!0),l),k(e,t))}function rn(e,n,t,r,o,l,i){var a=n.flags|=16384;e.flags!==a||e.type!==n.type||e.key!==n.key||2048&a?16384&e.flags?tn(e,n,t,r,o,i):He(n,t,r,o,l,i):481&a?cn(e,n,r,o,a,i):4&a?hn(e,n,t,r,o,l,i):8&a?vn(e,n,t,r,o,l,i):16&a?gn(e,n):512&a?n.dom=e.dom:8192&a?an(e,n,t,r,o,i):un(e,n,r,i)}function on(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:x(t,n))}function ln(e,n){e.textContent!==n&&(e.textContent=n)}function an(e,n,t,r,o,l){var i=e.children,a=n.children,u=e.childFlags,c=n.childFlags,s=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=W());var f=0!==(2&c);if(12&u){var d=i.length;(8&u&&8&c||f||!f&&a.length>d)&&(s=b(i[d-1],!1).nextSibling)}fn(u,c,i,a,t,r,o,s,e,l)}function un(e,n,t,r){var o=e.ref,i=n.ref,a=n.children;if(fn(e.childFlags,n.childFlags,e.children,a,o,t,!1,null,e,r),n.dom=e.dom,o!==i&&!l(a)){var u=a.dom;g(o,u),d(i,u)}}function cn(e,n,t,r,l,i){var a,u=n.dom=e.dom,c=e.props,f=n.props,d=!1,p=!1;if(r=r||(32&l)>0,c!==f){var h=c||s;if((a=f||s)!==s)for(var v in(d=(448&l)>0)&&(p=Pe(a)),a){var g=h[v],m=a[v];g!==m&&We(v,g,m,u,r,p,e)}if(h!==s)for(var y in h)o(a[y])&&!o(h[y])&&We(y,h[y],null,u,r,p,e)}var b=n.children,k=n.className;e.className!==k&&(o(k)?u.removeAttribute("class"):r?u.setAttribute("class",k):u.className=k),4096&l?ln(u,b):fn(e.childFlags,n.childFlags,e.children,b,u,t,r&&"foreignObject"!==n.type,null,e,i),d&&xe(l,n,u,a,!1,p);var $=n.ref,C=e.ref;C!==$&&(Fe(C),Le($,u,i))}function sn(e,n,t,r,o,l){Ve(e),qe(n,t,r,o,b(e,!0),l),k(e,t)}function fn(e,n,t,r,o,l,i,a,u,c){switch(e){case 2:switch(n){case 2:rn(t,r,o,l,i,a,c);break;case 1:Ne(t,o);break;case 16:Ve(t),x(o,r);break;default:sn(t,r,o,l,i,c)}break;case 1:switch(n){case 2:He(r,o,l,i,a,c);break;case 1:break;case 16:x(o,r);break;default:qe(r,o,l,i,a,c)}break;case 16:switch(n){case 16:on(t,r,o);break;case 2:Be(o),He(r,o,l,i,a,c);break;case 1:Be(o);break;default:Be(o),qe(r,o,l,i,a,c)}break;default:switch(n){case 16:Ie(t),x(o,r);break;case 2:Me(o,u,t),He(r,o,l,i,a,c);break;case 1:Me(o,u,t);break;default:var s=0|t.length,f=0|r.length;0===s?f>0&&qe(r,o,l,i,a,c):0===f?Me(o,u,t):8===n&&8===e?yn(t,r,o,l,i,s,f,a,u,c):mn(t,r,o,l,i,s,f,a,c)}}}function dn(e,n,t,r,o){o.push(function(){e.componentDidUpdate(n,t,r)})}function pn(e,n,t,r,o,l,a,u,s){var f=e.state,d=e.props,p=Boolean(e.$N),h=i(e.shouldComponentUpdate);if(p&&(n=C(e,t,n!==f?c(f,n):n)),a||!h||h&&e.shouldComponentUpdate(t,n,o)){!p&&i(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var v=null,g=Re(e,t,o);p&&i(e.getSnapshotBeforeUpdate)&&(v=e.getSnapshotBeforeUpdate(d,f)),rn(e.$LI,g,r,e.$CX,l,u,s),e.$LI=g,i(e.componentDidUpdate)&&dn(e,d,f,v,s)}else e.props=t,e.state=n,e.context=o}function hn(e,n,t,r,o,l,a){var f=n.children=e.children;if(u(f))return;f.$L=a;var d=n.props||s,p=n.ref,h=e.ref,v=f.state;if(!f.$N){if(i(f.componentWillReceiveProps)){if(f.$BR=!0,f.componentWillReceiveProps(d,r),f.$UN)return;f.$BR=!1}u(f.$PS)||(v=c(v,f.$PS),f.$PS=null)}pn(f,v,d,t,r,o,!1,l,a),h!==p&&(Fe(h),Le(p,f,a))}function vn(e,n,t,r,l,a,u){var c=!0,f=n.props||s,d=n.ref,p=e.props,h=!o(d),v=e.children;if(h&&i(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,f)),!1!==c){h&&i(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,f);var g=n.type,m=je(32768&n.flags?g.render(f,d,r):g(f,r));rn(v,m,t,r,l,a,u),n.children=m,h&&i(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,f)}else n.children=v}function gn(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function mn(e,n,t,r,o,l,i,a,u){for(var c,s,f=l>i?i:l,d=0;d<f;++d)c=n[d],s=e[d],16384&c.flags&&(c=n[d]=E(c)),rn(s,c,t,r,o,a,u),e[d]=c;if(l<i)for(d=f;d<i;++d)16384&(c=n[d]).flags&&(c=n[d]=E(c)),He(c,t,r,o,a,u);else if(l>i)for(d=f;d<l;++d)Ne(e[d],t)}function yn(e,n,t,r,o,l,i,a,u,c){var s,f,d=l-1,p=i-1,h=0,v=e[h],g=n[h];e:{for(;v.key===g.key;){if(16384&g.flags&&(n[h]=g=E(g)),rn(v,g,t,r,o,a,c),e[h]=g,++h>d||h>p)break e;v=e[h],g=n[h]}for(v=e[d],g=n[p];v.key===g.key;){if(16384&g.flags&&(n[p]=g=E(g)),rn(v,g,t,r,o,a,c),e[d]=g,p--,h>--d||h>p)break e;v=e[d],g=n[p]}}if(h>d){if(h<=p)for(f=(s=p+1)<i?b(n[s],!0):a;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=E(g)),++h,He(g,t,r,o,f,c)}else if(h>p)for(;h<=d;)Ne(e[h++],t);else bn(e,n,r,l,i,d,p,h,t,o,a,u,c)}function bn(e,n,t,r,o,l,i,a,u,c,s,f,d){var p,h,v,g=0,m=a,y=a,k=l-a+1,C=i-a+1,w=new Int32Array(C+1),U=k===r,x=!1,S=0,P=0;if(o<4||(k|C)<32)for(g=m;g<=l;++g)if(p=e[g],P<C){for(a=y;a<=i;a++)if(h=n[a],p.key===h.key){if(w[a-y]=g+1,U)for(U=!1;m<g;)Ne(e[m++],u);S>a?x=!0:S=a,16384&h.flags&&(n[a]=h=E(h)),rn(p,h,u,t,c,s,d),++P;break}!U&&a>i&&Ne(p,u)}else U||Ne(p,u);else{var F={};for(g=y;g<=i;++g)F[n[g].key]=g;for(g=m;g<=l;++g)if(p=e[g],P<C)if(void 0!==(a=F[p.key])){if(U)for(U=!1;g>m;)Ne(e[m++],u);w[a-y]=g+1,S>a?x=!0:S=a,16384&(h=n[a]).flags&&(n[a]=h=E(h)),rn(p,h,u,t,c,s,d),++P}else U||Ne(p,u);else U||Ne(p,u)}if(U)Me(u,f,e),qe(n,u,t,c,s,d);else if(x){var L=$n(w);for(a=L.length-1,g=C-1;g>=0;g--)0===w[g]?(16384&(h=n[S=g+y]).flags&&(n[S]=h=E(h)),He(h,u,t,c,(v=S+1)<o?b(n[v],!0):s,d)):a<0||g!==L[a]?$(h=n[S=g+y],u,(v=S+1)<o?b(n[v],!0):s):a--}else if(P!==C)for(g=C-1;g>=0;g--)0===w[g]&&(16384&(h=n[S=g+y]).flags&&(n[S]=h=E(h)),He(h,u,t,c,(v=S+1)<o?b(n[v],!0):s,d))}var kn=0;function $n(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(u>kn&&(kn=u,be=new Int32Array(u),ke=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=be[o]]<n){ke[t]=r,be[++o]=t;continue}for(l=0,i=o;l<i;)e[be[a=l+i>>1]]<n?l=a+1:i=a;n<e[be[l]]&&(l>0&&(ke[t]=be[l-1]),be[l]=t)}l=o+1;var c=new Int32Array(l);for(i=be[l-1];l-- >0;)c[l]=i,i=ke[i],be[l]=0;return c}function Cn(e,n,t,r){var l=[],a=n.$V;w.v=!0,o(a)?o(e)||(16384&e.flags&&(e=E(e)),He(e,n,r,!1,null,l),n.$V=e,a=e):o(e)?(Ne(a,n),n.$V=null):(16384&e.flags&&(e=E(e)),rn(a,e,n,r,!1,null,l),a=n.$V=e),l.length>0&&m(l),w.v=!1,i(t)&&t(),i(U.renderComplete)&&U.renderComplete(a,n)}function wn(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=s),Cn(e,n,t,r)}"undefined"!==typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null);var Un=[],xn="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Sn=!1;function Pn(e,n,t,r){var l=e.$PS;if(i(n)&&(n=n(l?c(e.state,l):e.state,e.props,e.context)),o(l))e.$PS=n;else for(var a in n)l[a]=n[a];if(e.$BR)i(t)&&e.$L.push(t.bind(e));else{if(!w.v&&0===Un.length)return void Nn(e,r,t);if(-1===Un.indexOf(e)&&Un.push(e),Sn||(Sn=!0,xn(Ln)),i(t)){var u=e.$QU;u||(u=e.$QU=[]),u.push(t)}}}function Fn(e){for(var n=e.$QU,t=0,r=n.length;t<r;++t)n[t].call(e);e.$QU=null}function Ln(){var e;for(Sn=!1;e=Un.pop();)Nn(e,!1,e.$QU?Fn.bind(null,e):null)}function Nn(e,n,t){if(e.$UN)return;if(n||!e.$BR){var r=e.$PS;e.$PS=null;var o=[];w.v=!0,pn(e,c(e.state,r),e.props,b(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,o),o.length>0&&m(o),w.v=!1}else e.state=e.$PS,e.$PS=null;i(t)&&t.call(e)}var Vn=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.props=e||s,this.context=n||s};Vn.prototype.forceUpdate=function(e){if(this.$UN)return;Pn(this,{},e,!0)},Vn.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||Pn(this,e,n,!1)},Vn.prototype.render=function(e,n,t){return null},uibench.init("Inferno [same as react]","7.1.13");var In=function(t){function r(e){var r;return(r=t.call(this,e)||this).onClick=r.onClick.bind(n(r)),r}e(r,t);var o=r.prototype;return o.shouldComponentUpdate=function(e,n){return this.props.text!==e.text},o.onClick=function(e){console.log("Clicked"+this.props.text),e.stopPropagation()},o.render=function(){return N(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},r}(Vn),Bn=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data,n=e.active?"TableRow active":"TableRow",t=e.props,r=[M(2,In,{text:"#"+e.id},-1,null)],o=0;o<t.length;o++)r.push(M(2,In,{text:t[o]},o,null));return N(1,"tr",n,r,0,{"data-id":e.id},null,null)},t}(Vn),Mn=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(M(2,Bn,{data:r},r.id,null))}return N(1,"table","Table",N(1,"tbody",null,n,0,null,null,null),2,null,null,null)},t}(Vn),Tn=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){var e=this.props.data,n=e.time,t={"border-radius":(n%10).toString()+"px",background:"rgba(0,0,0,"+(.5+n%10/10).toString()+")"};return N(1,"div","AnimBox",null,1,{"data-id":e.id,style:t},null,null)},t}(Vn),An=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(M(2,Tn,{data:r},r.id,null))}return N(1,"div","Anim",n,0,null,null,null)},t}(Vn),Dn=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){return N(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},t}(Vn),En=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data,n=[],r=0;r<e.children.length;r++){var o=e.children[r];o.container?n.push(M(2,t,{data:o},o.id,null)):n.push(M(2,Dn,{data:o},o.id,null))}return N(1,"ul","TreeNode",n,0,null,null,null)},t}(Vn),Wn=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){return N(1,"div","Tree",M(2,En,{data:this.props.data.root},null,null),2,null,null,null)},t}(Vn),On=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){var e,n=this.props.data,t=n.location;return"table"===t?e=M(2,Mn,{data:n.table},null,null):"anim"===t?e=M(2,An,{data:n.anim},null,null):"tree"===t&&(e=M(2,Wn,{data:n.tree},null,null)),N(1,"div","Main",e,0,null,null,null)},t}(Vn);document.addEventListener("DOMContentLoaded",function(e){var n=document.querySelector("#App");uibench.run(function(e){wn(M(2,On,{data:e},null,null),n)},function(e){wn(N(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)})})}();
