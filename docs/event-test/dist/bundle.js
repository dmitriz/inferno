!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function H(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function R(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function h(e){return"object"==typeof e}function w(e,n){var l={};if(e)for(var t in e)l[t]=e[t];if(n)for(var r in n)l[r]=n[r];return l}var _={};function m(e){return e.substr(2).toLowerCase()}function $(e,n){e.appendChild(n)}function K(e,n,l){X(l)?$(e,n):e.insertBefore(n,l)}function F(e,n){e.removeChild(n)}function q(e,n){for(var l,t;e;){if(2033&(l=e.flags))return e.dom;t=e.children,e=8192&l?2===e.childFlags?t:t[n?0:t.length-1]:4&l?t.$LI:t}return null}function x(e,n){var l=e.flags;if(2033&l)F(n,e.dom);else{var t=e.children;if(4&l)x(t.$LI,n);else if(8&l)x(t,n);else if(8192&l)if(2===e.childFlags)x(t,n);else for(var r=0,o=t.length;r<o;++r)x(t[r],n)}}function V(e,n,l){var t=e.flags;if(2033&t)K(n,e.dom,l);else{var r=e.children;if(4&t)V(r.$LI,n,l);else if(8&t)V(r,n,l);else if(8192&t)if(2===e.childFlags)V(r,n,l);else for(var o=0,a=r.length;o<a;++o)V(r[o],n,l)}}function G(e,n,l){return e.constructor.getDerivedStateFromProps?w(l,e.constructor.getDerivedStateFromProps(n,l)):l}var g={componentComparator:null,createVNode:null,renderComplete:null};function z(e,n){e.textContent=n}function y(e,n){return e&&n&&h(e)&&h(n)&&e.event===n.event&&e.data===n.data}var k="$";function b(e,n,l,t,r,o,a,i){this.childFlags=e,this.children=n,this.className=l,this.dom=null,this.flags=t,this.key=void 0===r?null:r,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=i}function s(e,n,l,t,r,o,a,i){var u=void 0===r?1:r,s=new b(u,t,l,e,a,o,i,n),c=g.createVNode;return R(c)&&c(s),0===u&&function(e,n){var l,t=1;if(C(n))l=n;else if(d(n))t=16,l=n;else if(f(n)){for(var r=n.length,o=0;o<r;++o){var a=n[o];if(C(a)||f(a)){M(n,l=l||n.slice(0,o),o,"");break}if(d(a))(l=l||n.slice(0,o)).push(L(a,k+o));else{var i=a.key,u=0<(81920&a.flags),s=X(i),c=!s&&p(i)&&i[0]===k;u||s||c?(l=l||n.slice(0,o),(u||c)&&(a=J(a)),(s||c)&&(a.key=k+o),l.push(a)):l&&l.push(a),a.flags|=65536}}t=0===(l=l||n).length?1:8}else(l=n).flags|=65536,81920&n.flags&&(l=J(n)),t=2;e.children=l,e.childFlags=t}(s,s.children),s}function S(e,n,l,t,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var o=n.defaultProps;if(!H(o))for(var a in l||(l={}),o)v(l[a])&&(l[a]=o[a]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!H(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var s=new b(1,null,null,e,t,l,r,n),c=g.createVNode;return R(c)&&c(s),s}function L(e,n){return new b(1,H(e)?"":e,null,16,n,null,null,null)}function a(e,n,l){var t=s(8192,8192,null,e,n,null,l,null);switch(t.childFlags){case 1:t.children=Q(),t.childFlags=2;break;case 16:t.children=[L(e)],t.childFlags=4}return t}function J(e){var n=-16385&e.flags,l=e.props;if(14&n&&!X(l)){var t=l;for(var r in l={},t)l[r]=t[r]}return 0==(8192&n)?new b(e.childFlags,e.children,e.className,n,e.key,l,e.ref,e.type):function(e){var n,l=e.children,t=e.childFlags;if(2===t)n=J(l);else if(12&t){n=[];for(var r=0,o=l.length;r<o;++r)n.push(J(l[r]))}return a(n,t,e.key)}(e)}function Q(){return L("",null)}function M(e,n,l,t){for(var r=e.length;l<r;l++){var o=e[l];if(!C(o)){var a=t+k+l;if(f(o))M(o,n,0,a);else{if(d(o))o=L(o,a);else{var i=o.key,u=p(i)&&i[0]===k;(81920&o.flags||u)&&(o=J(o)),o.flags|=65536,X(i)||u?o.key=a:o.key=t+i}n.push(o)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",N={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function i(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var u=i(0),c=i(null),P=i(true);function U(e,n,l){var t,r,o=l.$EV;n?(0===u[e]&&(c[e]=(t=e,r=function(e){var n="onClick"===t||"onDblClick"===t;if(n&&0!==e.button)e.stopPropagation();else{e.stopPropagation=I;var l={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return l.dom}}),function(e,n,l,t,r){for(var o=n;!X(o);){if(l&&o.disabled)return;var a=o.$EV;if(a){var i=a[t];if(i&&(r.dom=o,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}o=o.parentNode}}(e,e.target,n,t,l)}},document.addEventListener(m(t),r),r)),o||(o=l.$EV=i(null)),o[e]||++u[e],o[e]=n):o&&o[e]&&(0==--u[e]&&(document.removeEventListener(m(e),c[e]),c[e]=null),o[e]=null)}function I(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function A(e,n,l){if(e[n]){var t=e[n];t.event?t.event(t.data,l):t(l)}else{var r=n.toLowerCase();e[r]&&e[r](l)}}function l(i,u){var e=function(e){var n=this.$V;if(n){var l=n.props||_,t=n.dom;if(p(i))A(l,i,e);else for(var r=0;r<i.length;++r)A(l,i[r],e);if(R(u)){var o=this.$V,a=o.props||_;u(a,t,false,o)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,l){var t="$"+n,r=e[t];r&&r[1].wrapped||(r&&(e.removeEventListener.apply(e,r),e[t]=null),R(l)&&(e.addEventListener(n,l),e[t]=[n,l]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=l("onInput",T),ne=l(["onClick","onChange"],T);function le(e){e.stopPropagation()}function T(e,n){var l=e.type,t=e.value,r=e.checked,o=e.multiple,a=e.defaultValue,i=!H(t);l&&l!==n.type&&n.setAttribute("type",l),H(o)||o===n.multiple||(n.multiple=o),H(a)||i||(n.defaultValue=a+""),Z(l)?(i&&(n.value=t),H(r)||(n.checked=r)):i&&n.value!==t?(n.defaultValue=t,n.value=t):H(r)||(n.checked=r)}le.wrapped=true;var te=l("onChange",E);function E(e,n,l,t){var r=Boolean(e.multiple);H(e.multiple)||r===n.multiple||(n.multiple=r);var o=e.selectedIndex;if(-1===o&&(n.selectedIndex=-1),1!==t.childFlags){var a=e.value;"number"==typeof o&&-1<o&&n.options[o]&&(a=n.options[o].value),l&&H(a)&&(a=e.defaultValue),function e(n,l){if("option"===n.type)u=l,s=(i=n).props||_,(c=i.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:H(u)&&H(s.selected)||(c.selected=s.selected||false);else{var t=n.children,r=n.flags;if(4&r)e(t.$LI,l);else if(8&r)e(t,l);else if(2===n.childFlags)e(t,l);else if(12&n.childFlags)for(var o=0,a=t.length;o<a;++o)e(t[o],l)}var i,u,s,c}(t,a)}}var D,B,re=l("onInput",W),oe=l("onChange");function W(e,n,l){var t=e.value,r=n.value;if(H(t)){if(l){var o=e.defaultValue;H(o)||o===r||(n.defaultValue=o,n.value=o)}}else r!==t&&(n.defaultValue=t,n.value=t)}function ae(e,n,l,t,r,o){64&e?T(t,l):256&e?E(t,l,r,n):128&e&&W(t,l,r),o&&(l.$V=n)}function ie(e){return e.type&&Z(e.type)?!H(e.checked):!H(e.value)}function O(e){e&&(R(e)?e(null):e.current&&(e.current=null))}function ue(e,n,l){var t,r;e&&(R(e)?(t=n,r=e,l.push(function(){r(t)})):void 0!==e.current&&(e.current=n))}function j(e,n){se(e),n&&x(e,n)}function se(e){var n,l=e.flags,t=e.children;if(481&l){n=e.ref;var r=e.props;O(n);var o=e.childFlags;if(!X(r))for(var a=Object.keys(r),i=0,u=a.length;i<u;i++){var s=a[i];P[s]&&U(s,null,e.dom)}12&o?ce(t):2===o&&se(t)}else t&&(4&l?(R(t.componentWillUnmount)&&t.componentWillUnmount(),O(e.ref),t.$UN=true,se(t.$LI)):8&l?(!H(n=e.ref)&&R(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),se(t)):1024&l?j(t,e.ref):8192&l&&12&e.childFlags&&ce(t))}function ce(e){for(var n=0,l=e.length;n<l;++n)se(e[n])}function fe(e){e.textContent=""}function de(e,n,l){ce(l),8192&n.flags?x(n,e):fe(e)}function pe(u,e,n,l,t,r,o){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":l.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":l[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var a=H(n)?"":n;l[u]!==a&&(l[u]=a);break;case"style":!function(e,n,l){if(H(n))l.removeAttribute("style");else{var t,r,o=l.style;if(p(n))o.cssText=n;else if(H(e)||p(e))for(t in n)r=n[t],o.setProperty(t,r);else{for(t in n)(r=n[t])!==e[t]&&o.setProperty(t,r);for(t in e)H(n[t])&&o.removeProperty(t)}}}(e,n,l);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(H(s)||(c=l,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(X(o)||(12&o.childFlags?ce(o.children):2===o.childFlags&&se(o.children),o.children=null,o.childFlags=1),l.innerHTML=s));break;default:P[u]?y(e,n)||U(u,n,l):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,l,t){var r,o,a=m(u);if(h(l)&&!X(l)){var i=l.event;y(n,l)||Y(t,a,(r=i,o=l,function(e){r(o.data,e)}))}else Y(t,a,l)}(0,e,n,l):H(n)?l.removeAttribute(u):t&&N[u]?l.setAttributeNS(N[u],u,n):l.setAttribute(u,n)}var c,f,d}function ve(e,n,l){var t=he(e.render(n,e.state,l)),r=l;return R(e.getChildContext)&&(r=w(l,e.getChildContext())),e.$CX=r,t}function he(e){return C(e)?e=Q():d(e)?e=L(e,null):f(e)?e=a(e,0,null):16384&e.flags&&(e=J(e)),e}function me(e,n,l,t,r,o){var a,i,u,s,c,f,d,p,v,h,m,g,y,k,b,C,w,$,F,x,S,L,M,V,N,P,U,I,A,T,E,D,B,W,O,j=e.flags|=16384;481&j?function(e,n,l,t,r,o){var a=e.flags,i=e.props,u=e.className,s=e.ref,c=e.children,f=e.childFlags;t=t||0<(32&a);var d,p=(d=e.type,t?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,H(u)||""===u||(t?p.setAttribute("class",u):p.className=u),16===f)z(p,c);else if(1!==f){var v=t&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=J(c)),me(c,p,l,v,null,o)):8!==f&&4!==f||ye(c,p,l,v,null,o)}X(n)||K(n,p,r),X(i)||function(e,n,l,t,r){var o,a,i,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=ie(l))&&(a=t,i=l,c=s=u=void 0,64&(o=n)?(c=a,Z(i.type)?(Y(c,"change",ne),Y(c,"click",le)):Y(c,"input",ee)):256&o?Y(a,"change",te):128&o&&(s=i,Y(u=a,"input",re),s.onChange&&Y(u,"change",oe))),l)pe(p,null,l[p],t,r,f,null);d&&ae(n,e,t,l,true,f)}(e,a,i,p,t),ue(s,p,o)}(e,n,l,t,r,o):4&j?(F=n,x=l,S=t,L=r,M=o,me((V=function(e,n,l,t,r,o){var a=new n(l,t),i=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=r,a.$L=o,(e.children=a).$BS=false,a.context=t,a.props===_&&(a.props=l),i)a.state=G(a,l,a.state);else if(R(a.componentWillMount)){a.$BR=true,a.componentWillMount();var u=a.$PS;if(!X(u)){var s=a.state;if(X(s))a.state=u;else for(var c in u)s[c]=u[c];a.$PS=null}a.$BR=false}return a.$LI=ve(a,l,t),a}($=e,$.type,$.props||_,x,S,M)).$LI,F,V.$CX,S,L,M),ue($.ref,N=V,P=M),R(N.componentDidMount)&&P.push((U=N,function(){U.componentDidMount()}))):8&j?(i=n,u=l,s=t,c=r,f=o,d=(a=e).type,p=a.props||_,v=a.ref,h=he(32768&a.flags?d(p,v,u):d(p,u)),me(a.children=h,i,u,s,c,f),m=p,y=a,k=f,H(g=v)||(R(g.onComponentWillMount)&&g.onComponentWillMount(m),R(g.onComponentDidMount)&&k.push((b=g,C=y,w=m,function(){b.onComponentDidMount(q(C,true),w)})))):512&j||16&j?ge(e,n,r):8192&j?(A=n,T=l,E=t,D=r,B=o,W=(I=e).children,12&(O=I.childFlags)&&0===W.length&&(O=I.childFlags=2,W=I.children=Q()),2===O?me(W,A,D,E,D,B):ye(W,A,T,E,D,B)):1024&j&&function(e,n,l,t,r){me(e.children,e.ref,n,false,null,r);var o=Q();ge(o,l,t),e.dom=o.dom}(e,l,n,r,o)}function ge(e,n,l){var t=e.dom=document.createTextNode(e.children);X(n)||K(n,t,l)}function ye(e,n,l,t,r,o){for(var a=0,i=e.length;a<i;++a){var u=e[a];16384&u.flags&&(e[a]=u=J(u)),me(u,n,l,t,r,o)}}function ke(e,n,l,t,r,o,a){var i,u,s,c,f,d,p,v,h,m,g,y,k,b=n.flags|=16384;e.flags!==b||e.type!==n.type||e.key!==n.key||0!=(2048&b)?16384&e.flags?(u=n,s=l,c=t,f=r,d=a,se(i=e),0!=(u.flags&i.flags&2033)?(me(u,null,c,f,null,d),p=s,v=u.dom,h=i.dom,p.replaceChild(v,h)):(me(u,s,c,f,q(i,true),d),x(i,s))):me(n,l,t,r,o,a):481&b?function(e,n,l,t,r,o){var a,i=e.dom,u=e.props,s=n.props,c=false,f=false;if(n.dom=i,t=t||0<(32&r),u!==s){var d=u||_;if((a=s||_)!==_)for(var p in(c=0<(448&r))&&(f=ie(a)),a){var v=d[p],h=a[p];v!==h&&pe(p,v,h,i,t,f,e)}if(d!==_)for(var m in d)H(a[m])&&!H(d[m])&&pe(m,d[m],null,i,t,f,e)}var g,y,k=n.children,b=n.className;e.className!==b&&(H(b)?i.removeAttribute("class"):t?i.setAttribute("class",b):i.className=b),4096&r?(y=k,(g=i).textContent!==y&&(g.textContent=y)):be(e.childFlags,n.childFlags,e.children,k,i,l,t&&"foreignObject"!==n.type,null,e,o),c&&ae(r,n,i,a,false,f);var C=n.ref,w=e.ref;w!==C&&(O(w),ue(C,i,o))}(e,n,t,r,b,a):4&b?function(e,n,l,t,r,o,a){var i=n.children=e.children;if(!X(i)){i.$L=a;var u=n.props||_,s=n.ref,c=e.ref,f=i.state;if(!i.$N){if(R(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,t),i.$UN)return;i.$BR=false}X(i.$PS)||(f=w(f,i.$PS),i.$PS=null)}(function(e,n,l,t,r,o,a,i,u){var s,c,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=R(e.shouldComponentUpdate);if(h&&(n=G(e,l,n!==p?w(p,n):n)),!m||m&&e.shouldComponentUpdate(l,n,r)){!h&&R(e.componentWillUpdate)&&e.componentWillUpdate(l,n,r),e.props=l,e.state=n,e.context=r;var g=null,y=ve(e,l,r);h&&R(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),ke(e.$LI,y,t,e.$CX,o,i,u),e.$LI=y,R(e.componentDidUpdate)&&(s=e,c=v,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=l,e.state=n,e.context=r})(i,f,u,l,t,r,0,o,a),c!==s&&(O(c),ue(s,i,a))}}(e,n,l,t,r,o,a):8&b?function(e,n,l,t,r,o,a){var i=true,u=n.props||_,s=n.ref,c=e.props,f=!H(s),d=e.children;if(f&&R(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(c,u)),false!==i){f&&R(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=n.type,v=he(32768&n.flags?p(u,s,t):p(u,t));ke(d,v,l,t,r,o,a),n.children=v,f&&R(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,l,t,r,o,a):16&b?(m=e,y=(g=n).children,k=m.dom,y!==m.children&&(k.nodeValue=y),g.dom=k):512&b?n.dom=e.dom:8192&b?function(e,n,l,t,r,o){var a=e.children,i=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=Q());var f=0!=(2&s);if(12&u){var d=a.length;(8&u&&8&s||f||!f&&i.length>d)&&(c=q(a[d-1],false).nextSibling)}be(u,s,a,i,l,t,r,c,e,o)}(e,n,l,t,r,a):function(e,n,l,t){var r=e.ref,o=n.ref,a=n.children;if(be(e.childFlags,n.childFlags,e.children,a,r,l,false,null,e,t),n.dom=e.dom,r!==o&&!C(a)){var i=a.dom;F(r,i),$(o,i)}}(e,n,t,a)}function be(e,n,l,t,r,o,a,i,u,s){switch(e){case 2:switch(n){case 2:ke(l,t,r,o,a,i,s);break;case 1:j(l,r);break;case 16:se(l),z(r,t);break;default:m=t,g=r,y=o,k=a,b=s,se(h=l),ye(m,g,y,k,q(h,true),b),x(h,g)}break;case 1:switch(n){case 2:me(t,r,o,a,i,s);break;case 1:break;case 16:z(r,t);break;default:ye(t,r,o,a,i,s)}break;case 16:switch(n){case 16:v=r,(d=l)!==(p=t)&&(""!==d?v.firstChild.nodeValue=p:z(v,p));break;case 2:fe(r),me(t,r,o,a,i,s);break;case 1:fe(r);break;default:fe(r),ye(t,r,o,a,i,s)}break;default:switch(n){case 16:ce(l),z(r,t);break;case 2:de(r,u,l),me(t,r,o,a,i,s);break;case 1:de(r,u,l);break;default:var c=0|l.length,f=0|t.length;0===c?0<f&&ye(t,r,o,a,i,s):0===f?de(r,u,l):8===n&&8===e?function(e,n,l,t,r,o,a,i,u,s){var c,f,d=o-1,p=a-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=J(g)),ke(m,g,l,t,r,i,s),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=J(g)),ke(m,g,l,t,r,i,s),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<a?q(n[c],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=J(g)),++h,me(g,l,t,r,f,s)}else if(p<h)for(;h<=d;)j(e[h++],l);else{var y=h,k=h,b=d-h+1,C=p-h+1,w=new Int32Array(C-v+1);v=C+2;var $=b===o,F=false,x=0,S=0;if(a<4||(b|C)<32)for(v=y;v<=d;++v)if(m=e[v],S<C){for(h=k;h<=p;h++)if(g=n[h],m.key===g.key){if(w[h-k]=v+1,$)for($=false;y<v;)j(e[y++],l);h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),ke(m,g,l,t,r,i,s),++S;break}!$&&p<h&&j(m,l)}else $||j(m,l);else{var L={};for(v=k;v<=p;++v)L[n[v].key]=v;for(v=y;v<=d;++v)if(m=e[v],S<C)if(void 0!==(h=L[m.key])){if($)for($=false;y<v;)j(e[y++],l);g=n[h],w[h-k]=v+1,h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),ke(m,g,l,t,r,i,s),++S}else $||j(m,l);else $||j(m,l)}if($)de(l,u,e),ye(n,l,t,r,i,s);else if(F){var M=function(e){var n=0,l=0,t=0,r=0,o=0,a=0,i=0,u=e.length;for(Ce<u&&(D=new Int32Array(Ce=u),B=new Int32Array(u));l<u;++l)if(0!==(n=e[l])){if(e[t=D[r]]<n){B[l]=t,D[++r]=l;continue}for(o=0,a=r;o<a;)e[D[i=o+a>>1]]<n?o=i+1:a=i;n<e[D[o]]&&(0<o&&(B[l]=D[o-1]),D[o]=l)}o=l=r+1;var s=new Int32Array(o);for(a=D[o-1];0<o--;)s[o]=a,a=B[a];for(;0<l--;)D[l]=0;return s}(w);for(h=M.length-1,v=C-1;0<=v;v--)0===w[v]?(16384&(g=n[x=v+k]).flags&&(n[x]=g=J(g)),me(g,l,t,r,(c=x+1)<a?q(n[c],true):i,s)):h<0||v!==M[h]?V(g=n[x=v+k],l,(c=x+1)<a?q(n[c],true):i):h--}else if(S!==C)for(v=C-1;0<=v;v--)0===w[v]&&(16384&(g=n[x=v+k]).flags&&(n[x]=g=J(g)),me(g,l,t,r,(c=x+1)<a?q(n[c],true):i,s))}}(l,t,r,o,a,c,f,i,u,s):function(e,n,l,t,r,o,a,i,u){for(var s,c,f=a<o?a:o,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=J(s)),ke(c,s,l,t,r,i,u),e[d]=s;if(o<a)for(d=f;d<a;++d)16384&(s=n[d]).flags&&(s=n[d]=J(s)),me(s,l,t,r,i,u);else if(a<o)for(d=f;d<o;++d)j(e[d],l)}(l,t,r,o,a,c,f,i,s)}}var d,p,v,h,m,g,y,k,b}var Ce=0;function we(e,n,l,t){var r,o,a,i,u,s;void 0===l&&(l=null),void 0===t&&(t=_),r=e,a=l,i=t,u=[],H(s=(o=n).$V)?H(r)||(16384&r.flags&&(r=J(r)),me(r,o,i,false,null,u),s=o.$V=r):H(r)?(j(s,o),o.$V=null):(16384&r.flags&&(r=J(r)),ke(s,r,o,i,false,null,u),s=o.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),R(a)&&a(),R(g.renderComplete)&&g.renderComplete(s,o)}function r(e){console.log("ok",e)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window);var $e=[function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e,n,l=[],t=0;t<500;t++)l.push(s(1,"li",null,t,16,{onclick:(e=t,n=r,R(n)?{data:e,event:n}:null)},null,null));return s(1,"ul",null,l,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onClick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:function(){console.log("ok")}},null,null));return s(1,"ul",null,e,4,null,null,null)}],Fe=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"],xe=function(e){return e.reduce(function(e,n){return e+n},0)/e.length},Se=function(e){return Math.min.apply(Math,e)},Le=function(e){return Math.max.apply(Math,e)};function Me(e){for(var n=e.results,l=[],t=0;t<n.length;t++){var r=n[t],o=["mount","patch","unmount"];l.push(s(1,"div","test-name",r.name,0,null,null,null));for(var a=0;a<o.length;a++){var i=o[a],u=r[i];l.push(s(1,"div","test-part",i,0,null,null,null)),l.push(s(1,"div","test-result",[L("Avg: "),u.avg],0,null,null,null)),l.push(s(1,"div","test-result",[L("Min: "),u.min],0,null,null,null)),l.push(s(1,"div","test-result",[L("Max: "),u.max],0,null,null,null))}}return s(1,"div","results",l,4,null,null,null)}document.addEventListener("DOMContentLoaded",function(e){for(var r=document.querySelector("#App"),n=[],t=[],o=[],a=[],i=0,l=0;l<3;l++)for(var u=0;u<$e.length;u++)we(S(8,$e[u]),r);function s(e){var n=performance.now();we(S(8,$e[i]),r);var l=performance.now();t.push(l-n),setTimeout(c,30,e)}function c(e){for(var n=performance.now(),l=0;l<7;l++)we(S(8,$e[i]),r);var t=performance.now();o.push(t-n),setTimeout(f,30,e)}function f(e){var n=performance.now();we(null,r);var l=performance.now();a.push(l-n),setTimeout(e,30)}we(null,r);var d=0;!function e(){d<10&&i<$e.length?(d++,setTimeout(s,30,e)):i<$e.length?(n.push({name:Fe[i],mount:{min:Se(t),avg:xe(t),max:Le(t)},patch:{min:Se(o),avg:xe(o),max:Le(o)},unmount:{min:Se(a),avg:xe(a),max:Le(a)}}),t=[],o=[],a=[],i++,d=0,e()):setTimeout(function(){we(S(2,Me,{results:n},null,null),r)},1e3)}()})}();