function hf(m,f){for(var x=0;x<f.length;x++){const o=f[x];if(typeof o!="string"&&!Array.isArray(o)){for(const S in o)if(S!=="default"&&!(S in m)){const M=Object.getOwnPropertyDescriptor(o,S);M&&Object.defineProperty(m,S,M.get?M:{enumerable:!0,get:()=>o[S]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))o(S);new MutationObserver(S=>{for(const M of S)if(M.type==="childList")for(const O of M.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&o(O)}).observe(document,{childList:!0,subtree:!0});function x(S){const M={};return S.integrity&&(M.integrity=S.integrity),S.referrerPolicy&&(M.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?M.credentials="include":S.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function o(S){if(S.ep)return;S.ep=!0;const M=x(S);fetch(S.href,M)}})();function pf(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var ss={exports:{}},Ai={};var kc;function bf(){if(kc)return Ai;kc=1;var m=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function x(o,S,M){var O=null;if(M!==void 0&&(O=""+M),S.key!==void 0&&(O=""+S.key),"key"in S){M={};for(var B in S)B!=="key"&&(M[B]=S[B])}else M=S;return S=M.ref,{$$typeof:m,type:o,key:O,ref:S!==void 0?S:null,props:M}}return Ai.Fragment=f,Ai.jsx=x,Ai.jsxs=x,Ai}var fc;function yf(){return fc||(fc=1,ss.exports=bf()),ss.exports}var s=yf(),os={exports:{}},Mi={},ds={exports:{}},ms={};var hc;function vf(){return hc||(hc=1,(function(m){function f(j,N){var G=j.length;j.push(N);a:for(;0<G;){var sa=G-1>>>1,c=j[sa];if(0<S(c,N))j[sa]=N,j[G]=c,G=sa;else break a}}function x(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var N=j[0],G=j.pop();if(G!==N){j[0]=G;a:for(var sa=0,c=j.length,C=c>>>1;sa<C;){var z=2*(sa+1)-1,R=j[z],L=z+1,$=j[L];if(0>S(R,G))L<c&&0>S($,R)?(j[sa]=$,j[L]=G,sa=L):(j[sa]=R,j[z]=G,sa=z);else if(L<c&&0>S($,G))j[sa]=$,j[L]=G,sa=L;else break a}}return N}function S(j,N){var G=j.sortIndex-N.sortIndex;return G!==0?G:j.id-N.id}if(m.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;m.unstable_now=function(){return M.now()}}else{var O=Date,B=O.now();m.unstable_now=function(){return O.now()-B}}var D=[],y=[],E=1,H=null,w=3,da=!1,ba=!1,ka=!1,ya=!1,za=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,Ua=typeof setImmediate<"u"?setImmediate:null;function fe(j){for(var N=x(y);N!==null;){if(N.callback===null)o(y);else if(N.startTime<=j)o(y),N.sortIndex=N.expirationTime,f(D,N);else break;N=x(y)}}function I(j){if(ka=!1,fe(j),!ba)if(x(D)!==null)ba=!0,Za||(Za=!0,Ka());else{var N=x(y);N!==null&&Ba(I,N.startTime-j)}}var Za=!1,Pa=-1,Ja=5,ye=-1;function Vn(){return ya?!0:!(m.unstable_now()-ye<Ja)}function Re(){if(ya=!1,Za){var j=m.unstable_now();ye=j;var N=!0;try{a:{ba=!1,ka&&(ka=!1,Ee(Pa),Pa=-1),da=!0;var G=w;try{e:{for(fe(j),H=x(D);H!==null&&!(H.expirationTime>j&&Vn());){var sa=H.callback;if(typeof sa=="function"){H.callback=null,w=H.priorityLevel;var c=sa(H.expirationTime<=j);if(j=m.unstable_now(),typeof c=="function"){H.callback=c,fe(j),N=!0;break e}H===x(D)&&o(D),fe(j)}else o(D);H=x(D)}if(H!==null)N=!0;else{var C=x(y);C!==null&&Ba(I,C.startTime-j),N=!1}}break a}finally{H=null,w=G,da=!1}N=void 0}}finally{N?Ka():Za=!1}}}var Ka;if(typeof Ua=="function")Ka=function(){Ua(Re)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,Sn=vn.port2;vn.port1.onmessage=Re,Ka=function(){Sn.postMessage(null)}}else Ka=function(){za(Re,0)};function Ba(j,N){Pa=za(function(){j(m.unstable_now())},N)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(j){j.callback=null},m.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ja=0<j?Math.floor(1e3/j):5},m.unstable_getCurrentPriorityLevel=function(){return w},m.unstable_next=function(j){switch(w){case 1:case 2:case 3:var N=3;break;default:N=w}var G=w;w=N;try{return j()}finally{w=G}},m.unstable_requestPaint=function(){ya=!0},m.unstable_runWithPriority=function(j,N){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=w;w=j;try{return N()}finally{w=G}},m.unstable_scheduleCallback=function(j,N,G){var sa=m.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?sa+G:sa):G=sa,j){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=G+c,j={id:E++,callback:N,priorityLevel:j,startTime:G,expirationTime:c,sortIndex:-1},G>sa?(j.sortIndex=G,f(y,j),x(D)===null&&j===x(y)&&(ka?(Ee(Pa),Pa=-1):ka=!0,Ba(I,G-sa))):(j.sortIndex=c,f(D,j),ba||da||(ba=!0,Za||(Za=!0,Ka()))),j},m.unstable_shouldYield=Vn,m.unstable_wrapCallback=function(j){var N=w;return function(){var G=w;w=N;try{return j.apply(this,arguments)}finally{w=G}}}})(ms)),ms}var pc;function Sf(){return pc||(pc=1,ds.exports=vf()),ds.exports}var cs={exports:{}},X={};var bc;function xf(){if(bc)return X;bc=1;var m=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),O=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),H=Symbol.iterator;function w(c){return c===null||typeof c!="object"?null:(c=H&&c[H]||c["@@iterator"],typeof c=="function"?c:null)}var da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ba=Object.assign,ka={};function ya(c,C,z){this.props=c,this.context=C,this.refs=ka,this.updater=z||da}ya.prototype.isReactComponent={},ya.prototype.setState=function(c,C){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,C,"setState")},ya.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function za(){}za.prototype=ya.prototype;function Ee(c,C,z){this.props=c,this.context=C,this.refs=ka,this.updater=z||da}var Ua=Ee.prototype=new za;Ua.constructor=Ee,ba(Ua,ya.prototype),Ua.isPureReactComponent=!0;var fe=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Za=Object.prototype.hasOwnProperty;function Pa(c,C,z,R,L,$){return z=$.ref,{$$typeof:m,type:c,key:C,ref:z!==void 0?z:null,props:$}}function Ja(c,C){return Pa(c.type,C,void 0,void 0,void 0,c.props)}function ye(c){return typeof c=="object"&&c!==null&&c.$$typeof===m}function Vn(c){var C={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(z){return C[z]})}var Re=/\/+/g;function Ka(c,C){return typeof c=="object"&&c!==null&&c.key!=null?Vn(""+c.key):C.toString(36)}function vn(){}function Sn(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(vn,vn):(c.status="pending",c.then(function(C){c.status==="pending"&&(c.status="fulfilled",c.value=C)},function(C){c.status==="pending"&&(c.status="rejected",c.reason=C)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function Ba(c,C,z,R,L){var $=typeof c;($==="undefined"||$==="boolean")&&(c=null);var Q=!1;if(c===null)Q=!0;else switch($){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(c.$$typeof){case m:case f:Q=!0;break;case E:return Q=c._init,Ba(Q(c._payload),C,z,R,L)}}if(Q)return L=L(c),Q=R===""?"."+Ka(c,0):R,fe(L)?(z="",Q!=null&&(z=Q.replace(Re,"$&/")+"/"),Ba(L,C,z,"",function(Pe){return Pe})):L!=null&&(ye(L)&&(L=Ja(L,z+(L.key==null||c&&c.key===L.key?"":(""+L.key).replace(Re,"$&/")+"/")+Q)),C.push(L)),1;Q=0;var Fa=R===""?".":R+":";if(fe(c))for(var ca=0;ca<c.length;ca++)R=c[ca],$=Fa+Ka(R,ca),Q+=Ba(R,C,z,$,L);else if(ca=w(c),typeof ca=="function")for(c=ca.call(c),ca=0;!(R=c.next()).done;)R=R.value,$=Fa+Ka(R,ca++),Q+=Ba(R,C,z,$,L);else if($==="object"){if(typeof c.then=="function")return Ba(Sn(c),C,z,R,L);throw C=String(c),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Q}function j(c,C,z){if(c==null)return c;var R=[],L=0;return Ba(c,R,"","",function($){return C.call(z,$,L++)}),R}function N(c){if(c._status===-1){var C=c._result;C=C(),C.then(function(z){(c._status===0||c._status===-1)&&(c._status=1,c._result=z)},function(z){(c._status===0||c._status===-1)&&(c._status=2,c._result=z)}),c._status===-1&&(c._status=0,c._result=C)}if(c._status===1)return c._result.default;throw c._result}var G=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)};function sa(){}return X.Children={map:j,forEach:function(c,C,z){j(c,function(){C.apply(this,arguments)},z)},count:function(c){var C=0;return j(c,function(){C++}),C},toArray:function(c){return j(c,function(C){return C})||[]},only:function(c){if(!ye(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},X.Component=ya,X.Fragment=x,X.Profiler=S,X.PureComponent=Ee,X.StrictMode=o,X.Suspense=D,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,X.__COMPILER_RUNTIME={__proto__:null,c:function(c){return I.H.useMemoCache(c)}},X.cache=function(c){return function(){return c.apply(null,arguments)}},X.cloneElement=function(c,C,z){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=ba({},c.props),L=c.key,$=void 0;if(C!=null)for(Q in C.ref!==void 0&&($=void 0),C.key!==void 0&&(L=""+C.key),C)!Za.call(C,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&C.ref===void 0||(R[Q]=C[Q]);var Q=arguments.length-2;if(Q===1)R.children=z;else if(1<Q){for(var Fa=Array(Q),ca=0;ca<Q;ca++)Fa[ca]=arguments[ca+2];R.children=Fa}return Pa(c.type,L,void 0,void 0,$,R)},X.createContext=function(c){return c={$$typeof:O,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:M,_context:c},c},X.createElement=function(c,C,z){var R,L={},$=null;if(C!=null)for(R in C.key!==void 0&&($=""+C.key),C)Za.call(C,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(L[R]=C[R]);var Q=arguments.length-2;if(Q===1)L.children=z;else if(1<Q){for(var Fa=Array(Q),ca=0;ca<Q;ca++)Fa[ca]=arguments[ca+2];L.children=Fa}if(c&&c.defaultProps)for(R in Q=c.defaultProps,Q)L[R]===void 0&&(L[R]=Q[R]);return Pa(c,$,void 0,void 0,null,L)},X.createRef=function(){return{current:null}},X.forwardRef=function(c){return{$$typeof:B,render:c}},X.isValidElement=ye,X.lazy=function(c){return{$$typeof:E,_payload:{_status:-1,_result:c},_init:N}},X.memo=function(c,C){return{$$typeof:y,type:c,compare:C===void 0?null:C}},X.startTransition=function(c){var C=I.T,z={};I.T=z;try{var R=c(),L=I.S;L!==null&&L(z,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(sa,G)}catch($){G($)}finally{I.T=C}},X.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},X.use=function(c){return I.H.use(c)},X.useActionState=function(c,C,z){return I.H.useActionState(c,C,z)},X.useCallback=function(c,C){return I.H.useCallback(c,C)},X.useContext=function(c){return I.H.useContext(c)},X.useDebugValue=function(){},X.useDeferredValue=function(c,C){return I.H.useDeferredValue(c,C)},X.useEffect=function(c,C,z){var R=I.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(c,C)},X.useId=function(){return I.H.useId()},X.useImperativeHandle=function(c,C,z){return I.H.useImperativeHandle(c,C,z)},X.useInsertionEffect=function(c,C){return I.H.useInsertionEffect(c,C)},X.useLayoutEffect=function(c,C){return I.H.useLayoutEffect(c,C)},X.useMemo=function(c,C){return I.H.useMemo(c,C)},X.useOptimistic=function(c,C){return I.H.useOptimistic(c,C)},X.useReducer=function(c,C,z){return I.H.useReducer(c,C,z)},X.useRef=function(c){return I.H.useRef(c)},X.useState=function(c){return I.H.useState(c)},X.useSyncExternalStore=function(c,C,z){return I.H.useSyncExternalStore(c,C,z)},X.useTransition=function(){return I.H.useTransition()},X.version="19.1.0",X}var yc;function wl(){return yc||(yc=1,cs.exports=xf()),cs.exports}var gs={exports:{}},Va={};var vc;function Tf(){if(vc)return Va;vc=1;var m=wl();function f(D){var y="https://react.dev/errors/"+D;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+D+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var o={d:{f:x,r:function(){throw Error(f(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},S=Symbol.for("react.portal");function M(D,y,E){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:H==null?null:""+H,children:D,containerInfo:y,implementation:E}}var O=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(D,y){if(D==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Va.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Va.createPortal=function(D,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(f(299));return M(D,y,null,E)},Va.flushSync=function(D){var y=O.T,E=o.p;try{if(O.T=null,o.p=2,D)return D()}finally{O.T=y,o.p=E,o.d.f()}},Va.preconnect=function(D,y){typeof D=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(D,y))},Va.prefetchDNS=function(D){typeof D=="string"&&o.d.D(D)},Va.preinit=function(D,y){if(typeof D=="string"&&y&&typeof y.as=="string"){var E=y.as,H=B(E,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,da=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?o.d.S(D,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:H,integrity:w,fetchPriority:da}):E==="script"&&o.d.X(D,{crossOrigin:H,integrity:w,fetchPriority:da,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Va.preinitModule=function(D,y){if(typeof D=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=B(y.as,y.crossOrigin);o.d.M(D,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(D)},Va.preload=function(D,y){if(typeof D=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,H=B(E,y.crossOrigin);o.d.L(D,E,{crossOrigin:H,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Va.preloadModule=function(D,y){if(typeof D=="string")if(y){var E=B(y.as,y.crossOrigin);o.d.m(D,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(D)},Va.requestFormReset=function(D){o.d.r(D)},Va.unstable_batchedUpdates=function(D,y){return D(y)},Va.useFormState=function(D,y,E){return O.H.useFormState(D,y,E)},Va.useFormStatus=function(){return O.H.useHostTransitionStatus()},Va.version="19.1.0",Va}var Sc;function jf(){if(Sc)return gs.exports;Sc=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(f){console.error(f)}}return m(),gs.exports=Tf(),gs.exports}var xc;function Af(){if(xc)return Mi;xc=1;var m=Sf(),f=wl(),x=jf();function o(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function M(a){var e=a,n=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(n=e.return),a=e.return;while(a)}return e.tag===3?n:null}function O(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function B(a){if(M(a)!==a)throw Error(o(188))}function D(a){var e=a.alternate;if(!e){if(e=M(a),e===null)throw Error(o(188));return e!==a?null:a}for(var n=a,t=e;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return B(i),a;if(l===t)return B(i),e;l=l.sibling}throw Error(o(188))}if(n.return!==t.return)n=i,t=l;else{for(var u=!1,r=i.child;r;){if(r===n){u=!0,n=i,t=l;break}if(r===t){u=!0,t=i,n=l;break}r=r.sibling}if(!u){for(r=l.child;r;){if(r===n){u=!0,n=l,t=i;break}if(r===t){u=!0,t=l,n=i;break}r=r.sibling}if(!u)throw Error(o(189))}}if(n.alternate!==t)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?a:e}function y(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=y(a),e!==null)return e;a=a.sibling}return null}var E=Object.assign,H=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),da=Symbol.for("react.portal"),ba=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),za=Symbol.for("react.provider"),Ee=Symbol.for("react.consumer"),Ua=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),Pa=Symbol.for("react.memo"),Ja=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Vn=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function Ka(a){return a===null||typeof a!="object"?null:(a=Re&&a[Re]||a["@@iterator"],typeof a=="function"?a:null)}var vn=Symbol.for("react.client.reference");function Sn(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===vn?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case ba:return"Fragment";case ya:return"Profiler";case ka:return"StrictMode";case I:return"Suspense";case Za:return"SuspenseList";case ye:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case da:return"Portal";case Ua:return(a.displayName||"Context")+".Provider";case Ee:return(a._context.displayName||"Context")+".Consumer";case fe:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case Pa:return e=a.displayName||null,e!==null?e:Sn(a.type)||"Memo";case Ja:e=a._payload,a=a._init;try{return Sn(a(e))}catch{}}return null}var Ba=Array.isArray,j=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},sa=[],c=-1;function C(a){return{current:a}}function z(a){0>c||(a.current=sa[c],sa[c]=null,c--)}function R(a,e){c++,sa[c]=a.current,a.current=e}var L=C(null),$=C(null),Q=C(null),Fa=C(null);function ca(a,e){switch(R(Q,e),R($,a),R(L,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?Gm(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=Gm(e),a=Ym(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}z(L),R(L,a)}function Pe(){z(L),z($),z(Q)}function Zl(a){a.memoizedState!==null&&R(Fa,a);var e=L.current,n=Ym(e,a.type);e!==n&&(R($,a),R(L,n))}function Di(a){$.current===a&&(z(L),z($)),Fa.current===a&&(z(Fa),vi._currentValue=G)}var Pl=Object.prototype.hasOwnProperty,Jl=m.unstable_scheduleCallback,Fl=m.unstable_cancelCallback,Zc=m.unstable_shouldYield,Pc=m.unstable_requestPaint,ve=m.unstable_now,Jc=m.unstable_getCurrentPriorityLevel,Ss=m.unstable_ImmediatePriority,xs=m.unstable_UserBlockingPriority,Ei=m.unstable_NormalPriority,Fc=m.unstable_LowPriority,Ts=m.unstable_IdlePriority,Wc=m.log,Ic=m.unstable_setDisableYieldValue,Ct=null,Wa=null;function Je(a){if(typeof Wc=="function"&&Ic(a),Wa&&typeof Wa.setStrictMode=="function")try{Wa.setStrictMode(Ct,a)}catch{}}var Ia=Math.clz32?Math.clz32:eg,$c=Math.log,ag=Math.LN2;function eg(a){return a>>>=0,a===0?32:31-($c(a)/ag|0)|0}var Ri=256,Ni=4194304;function xn(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Oi(a,e,n){var t=a.pendingLanes;if(t===0)return 0;var i=0,l=a.suspendedLanes,u=a.pingedLanes;a=a.warmLanes;var r=t&134217727;return r!==0?(t=r&~l,t!==0?i=xn(t):(u&=r,u!==0?i=xn(u):n||(n=r&~a,n!==0&&(i=xn(n))))):(r=t&~l,r!==0?i=xn(r):u!==0?i=xn(u):n||(n=t&~a,n!==0&&(i=xn(n)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:i}function Dt(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function ng(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function js(){var a=Ri;return Ri<<=1,(Ri&4194048)===0&&(Ri=256),a}function As(){var a=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),a}function Wl(a){for(var e=[],n=0;31>n;n++)e.push(a);return e}function Et(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function tg(a,e,n,t,i,l){var u=a.pendingLanes;a.pendingLanes=n,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=n,a.entangledLanes&=n,a.errorRecoveryDisabledLanes&=n,a.shellSuspendCounter=0;var r=a.entanglements,d=a.expirationTimes,p=a.hiddenUpdates;for(n=u&~n;0<n;){var T=31-Ia(n),_=1<<T;r[T]=0,d[T]=-1;var b=p[T];if(b!==null)for(p[T]=null,T=0;T<b.length;T++){var v=b[T];v!==null&&(v.lane&=-536870913)}n&=~_}t!==0&&Ms(a,t,0),l!==0&&i===0&&a.tag!==0&&(a.suspendedLanes|=l&~(u&~e))}function Ms(a,e,n){a.pendingLanes|=e,a.suspendedLanes&=~e;var t=31-Ia(e);a.entangledLanes|=e,a.entanglements[t]=a.entanglements[t]|1073741824|n&4194090}function _s(a,e){var n=a.entangledLanes|=e;for(a=a.entanglements;n;){var t=31-Ia(n),i=1<<t;i&e|a[t]&e&&(a[t]|=e),n&=~i}}function Il(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function $l(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function Cs(){var a=N.p;return a!==0?a:(a=window.event,a===void 0?32:sc(a.type))}function ig(a,e){var n=N.p;try{return N.p=a,e()}finally{N.p=n}}var Fe=Math.random().toString(36).slice(2),Ha="__reactFiber$"+Fe,Ga="__reactProps$"+Fe,qn="__reactContainer$"+Fe,au="__reactEvents$"+Fe,lg="__reactListeners$"+Fe,ug="__reactHandles$"+Fe,Ds="__reactResources$"+Fe,Rt="__reactMarker$"+Fe;function eu(a){delete a[Ha],delete a[Ga],delete a[au],delete a[lg],delete a[ug]}function Gn(a){var e=a[Ha];if(e)return e;for(var n=a.parentNode;n;){if(e=n[qn]||n[Ha]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(a=Zm(a);a!==null;){if(n=a[Ha])return n;a=Zm(a)}return e}a=n,n=a.parentNode}return null}function Yn(a){if(a=a[Ha]||a[qn]){var e=a.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return a}return null}function Nt(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(o(33))}function wn(a){var e=a[Ds];return e||(e=a[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ma(a){a[Rt]=!0}var Es=new Set,Rs={};function Tn(a,e){Qn(a,e),Qn(a+"Capture",e)}function Qn(a,e){for(Rs[a]=e,a=0;a<e.length;a++)Es.add(e[a])}var rg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ns={},Os={};function sg(a){return Pl.call(Os,a)?!0:Pl.call(Ns,a)?!1:rg.test(a)?Os[a]=!0:(Ns[a]=!0,!1)}function zi(a,e,n){if(sg(e))if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,""+n)}}function Ui(a,e,n){if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,""+n)}}function Ne(a,e,n,t){if(t===null)a.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(n);return}a.setAttributeNS(e,n,""+t)}}var nu,zs;function Xn(a){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||"",zs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nu+a+zs}var tu=!1;function iu(a,e){if(!a||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(v){var b=v}Reflect.construct(a,[],_)}else{try{_.call()}catch(v){b=v}a.call(_.prototype)}}else{try{throw Error()}catch(v){b=v}(_=a())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(v){if(v&&b&&typeof v.stack=="string")return[v.stack,b.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),u=l[0],r=l[1];if(u&&r){var d=u.split(`
`),p=r.split(`
`);for(i=t=0;t<d.length&&!d[t].includes("DetermineComponentFrameRoot");)t++;for(;i<p.length&&!p[i].includes("DetermineComponentFrameRoot");)i++;if(t===d.length||i===p.length)for(t=d.length-1,i=p.length-1;1<=t&&0<=i&&d[t]!==p[i];)i--;for(;1<=t&&0<=i;t--,i--)if(d[t]!==p[i]){if(t!==1||i!==1)do if(t--,i--,0>i||d[t]!==p[i]){var T=`
`+d[t].replace(" at new "," at ");return a.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",a.displayName)),T}while(1<=t&&0<=i);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(n=a?a.displayName||a.name:"")?Xn(n):""}function og(a){switch(a.tag){case 26:case 27:case 5:return Xn(a.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 15:return iu(a.type,!1);case 11:return iu(a.type.render,!1);case 1:return iu(a.type,!0);case 31:return Xn("Activity");default:return""}}function Us(a){try{var e="";do e+=og(a),a=a.return;while(a);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ue(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Ks(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dg(a){var e=Ks(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,e),t=""+a[e];if(!a.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){t=""+u,l.call(this,u)}}),Object.defineProperty(a,e,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function Ki(a){a._valueTracker||(a._valueTracker=dg(a))}function Bs(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var n=e.getValue(),t="";return a&&(t=Ks(a)?a.checked?"true":"false":a.value),a=t,a!==n?(e.setValue(a),!0):!1}function Bi(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var mg=/[\n"\\]/g;function re(a){return a.replace(mg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lu(a,e,n,t,i,l,u,r){a.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?a.type=u:a.removeAttribute("type"),e!=null?u==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+ue(e)):a.value!==""+ue(e)&&(a.value=""+ue(e)):u!=="submit"&&u!=="reset"||a.removeAttribute("value"),e!=null?uu(a,u,ue(e)):n!=null?uu(a,u,ue(n)):t!=null&&a.removeAttribute("value"),i==null&&l!=null&&(a.defaultChecked=!!l),i!=null&&(a.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?a.name=""+ue(r):a.removeAttribute("name")}function Hs(a,e,n,t,i,l,u,r){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(a.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;n=n!=null?""+ue(n):"",e=e!=null?""+ue(e):n,r||e===a.value||(a.value=e),a.defaultValue=e}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,a.checked=r?a.checked:!!t,a.defaultChecked=!!t,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(a.name=u)}function uu(a,e,n){e==="number"&&Bi(a.ownerDocument)===a||a.defaultValue===""+n||(a.defaultValue=""+n)}function Zn(a,e,n,t){if(a=a.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<a.length;n++)i=e.hasOwnProperty("$"+a[n].value),a[n].selected!==i&&(a[n].selected=i),i&&t&&(a[n].defaultSelected=!0)}else{for(n=""+ue(n),e=null,i=0;i<a.length;i++){if(a[i].value===n){a[i].selected=!0,t&&(a[i].defaultSelected=!0);return}e!==null||a[i].disabled||(e=a[i])}e!==null&&(e.selected=!0)}}function Ls(a,e,n){if(e!=null&&(e=""+ue(e),e!==a.value&&(a.value=e),n==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=n!=null?""+ue(n):""}function Vs(a,e,n,t){if(e==null){if(t!=null){if(n!=null)throw Error(o(92));if(Ba(t)){if(1<t.length)throw Error(o(93));t=t[0]}n=t}n==null&&(n=""),e=n}n=ue(e),a.defaultValue=n,t=a.textContent,t===n&&t!==""&&t!==null&&(a.value=t)}function Pn(a,e){if(e){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=e;return}}a.textContent=e}var cg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qs(a,e,n){var t=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?t?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":t?a.setProperty(e,n):typeof n!="number"||n===0||cg.has(e)?e==="float"?a.cssFloat=n:a[e]=(""+n).trim():a[e]=n+"px"}function Gs(a,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(a=a.style,n!=null){for(var t in n)!n.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="");for(var i in e)t=e[i],e.hasOwnProperty(i)&&n[i]!==t&&qs(a,i,t)}else for(var l in e)e.hasOwnProperty(l)&&qs(a,l,e[l])}function ru(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(a){return kg.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var su=null;function ou(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var Jn=null,Fn=null;function Ys(a){var e=Yn(a);if(e&&(a=e.stateNode)){var n=a[Ga]||null;a:switch(a=e.stateNode,e.type){case"input":if(lu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+re(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var t=n[e];if(t!==a&&t.form===a.form){var i=t[Ga]||null;if(!i)throw Error(o(90));lu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)t=n[e],t.form===a.form&&Bs(t)}break a;case"textarea":Ls(a,n.value,n.defaultValue);break a;case"select":e=n.value,e!=null&&Zn(a,!!n.multiple,e,!1)}}}var du=!1;function ws(a,e,n){if(du)return a(e,n);du=!0;try{var t=a(e);return t}finally{if(du=!1,(Jn!==null||Fn!==null)&&(Tl(),Jn&&(e=Jn,a=Fn,Fn=Jn=null,Ys(e),a)))for(e=0;e<a.length;e++)Ys(a[e])}}function Ot(a,e){var n=a.stateNode;if(n===null)return null;var t=n[Ga]||null;if(t===null)return null;n=t[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(a=a.type,t=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!t;break a;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Oe)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){mu=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{mu=!1}var We=null,cu=null,Li=null;function Qs(){if(Li)return Li;var a,e=cu,n=e.length,t,i="value"in We?We.value:We.textContent,l=i.length;for(a=0;a<n&&e[a]===i[a];a++);var u=n-a;for(t=1;t<=u&&e[n-t]===i[l-t];t++);return Li=i.slice(a,1<t?1-t:void 0)}function Vi(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function qi(){return!0}function Xs(){return!1}function Ya(a){function e(n,t,i,l,u){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var r in a)a.hasOwnProperty(r)&&(n=a[r],this[r]=n?n(l):l[r]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qi:Xs,this.isPropagationStopped=Xs,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),e}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Ya(jn),Ut=E({},jn,{view:0,detail:0}),fg=Ya(Ut),gu,ku,Kt,Yi=E({},Ut,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Kt&&(Kt&&a.type==="mousemove"?(gu=a.screenX-Kt.screenX,ku=a.screenY-Kt.screenY):ku=gu=0,Kt=a),gu)},movementY:function(a){return"movementY"in a?a.movementY:ku}}),Zs=Ya(Yi),hg=E({},Yi,{dataTransfer:0}),pg=Ya(hg),bg=E({},Ut,{relatedTarget:0}),fu=Ya(bg),yg=E({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),vg=Ya(yg),Sg=E({},jn,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),xg=Ya(Sg),Tg=E({},jn,{data:0}),Ps=Ya(Tg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _g(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=Mg[a])?!!e[a]:!1}function hu(){return _g}var Cg=E({},Ut,{key:function(a){if(a.key){var e=jg[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=Vi(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Ag[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(a){return a.type==="keypress"?Vi(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Vi(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Dg=Ya(Cg),Eg=E({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Ya(Eg),Rg=E({},Ut,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Ng=Ya(Rg),Og=E({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=Ya(Og),Ug=E({},Yi,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=Ya(Ug),Bg=E({},jn,{newState:0,oldState:0}),Hg=Ya(Bg),Lg=[9,13,27,32],pu=Oe&&"CompositionEvent"in window,Bt=null;Oe&&"documentMode"in document&&(Bt=document.documentMode);var Vg=Oe&&"TextEvent"in window&&!Bt,Fs=Oe&&(!pu||Bt&&8<Bt&&11>=Bt),Ws=" ",Is=!1;function $s(a,e){switch(a){case"keyup":return Lg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ao(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Wn=!1;function qg(a,e){switch(a){case"compositionend":return ao(e);case"keypress":return e.which!==32?null:(Is=!0,Ws);case"textInput":return a=e.data,a===Ws&&Is?null:a;default:return null}}function Gg(a,e){if(Wn)return a==="compositionend"||!pu&&$s(a,e)?(a=Qs(),Li=cu=We=null,Wn=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fs&&e.locale!=="ko"?null:e.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eo(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!Yg[a.type]:e==="textarea"}function no(a,e,n,t){Jn?Fn?Fn.push(t):Fn=[t]:Jn=t,e=Dl(e,"onChange"),0<e.length&&(n=new Gi("onChange","change",null,n,t),a.push({event:n,listeners:e}))}var Ht=null,Lt=null;function wg(a){Bm(a,0)}function wi(a){var e=Nt(a);if(Bs(e))return a}function to(a,e){if(a==="change")return e}var io=!1;if(Oe){var bu;if(Oe){var yu="oninput"in document;if(!yu){var lo=document.createElement("div");lo.setAttribute("oninput","return;"),yu=typeof lo.oninput=="function"}bu=yu}else bu=!1;io=bu&&(!document.documentMode||9<document.documentMode)}function uo(){Ht&&(Ht.detachEvent("onpropertychange",ro),Lt=Ht=null)}function ro(a){if(a.propertyName==="value"&&wi(Lt)){var e=[];no(e,Lt,a,ou(a)),ws(wg,e)}}function Qg(a,e,n){a==="focusin"?(uo(),Ht=e,Lt=n,Ht.attachEvent("onpropertychange",ro)):a==="focusout"&&uo()}function Xg(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return wi(Lt)}function Zg(a,e){if(a==="click")return wi(e)}function Pg(a,e){if(a==="input"||a==="change")return wi(e)}function Jg(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var $a=typeof Object.is=="function"?Object.is:Jg;function Vt(a,e){if($a(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var n=Object.keys(a),t=Object.keys(e);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!Pl.call(e,i)||!$a(a[i],e[i]))return!1}return!0}function so(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function oo(a,e){var n=so(a);a=0;for(var t;n;){if(n.nodeType===3){if(t=a+n.textContent.length,a<=e&&t>=e)return{node:n,offset:e-a};a=t}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=so(n)}}function mo(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?mo(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function co(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=Bi(a.document);e instanceof a.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)a=e.contentWindow;else break;e=Bi(a.document)}return e}function vu(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var Fg=Oe&&"documentMode"in document&&11>=document.documentMode,In=null,Su=null,qt=null,xu=!1;function go(a,e,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||In==null||In!==Bi(t)||(t=In,"selectionStart"in t&&vu(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),qt&&Vt(qt,t)||(qt=t,t=Dl(Su,"onSelect"),0<t.length&&(e=new Gi("onSelect","select",null,e,n),a.push({event:e,listeners:t}),e.target=In)))}function An(a,e){var n={};return n[a.toLowerCase()]=e.toLowerCase(),n["Webkit"+a]="webkit"+e,n["Moz"+a]="moz"+e,n}var $n={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionrun:An("Transition","TransitionRun"),transitionstart:An("Transition","TransitionStart"),transitioncancel:An("Transition","TransitionCancel"),transitionend:An("Transition","TransitionEnd")},Tu={},ko={};Oe&&(ko=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Mn(a){if(Tu[a])return Tu[a];if(!$n[a])return a;var e=$n[a],n;for(n in e)if(e.hasOwnProperty(n)&&n in ko)return Tu[a]=e[n];return a}var fo=Mn("animationend"),ho=Mn("animationiteration"),po=Mn("animationstart"),Wg=Mn("transitionrun"),Ig=Mn("transitionstart"),$g=Mn("transitioncancel"),bo=Mn("transitionend"),yo=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function he(a,e){yo.set(a,e),Tn(e,[a])}var vo=new WeakMap;function se(a,e){if(typeof a=="object"&&a!==null){var n=vo.get(a);return n!==void 0?n:(e={value:a,source:e,stack:Us(e)},vo.set(a,e),e)}return{value:a,source:e,stack:Us(e)}}var oe=[],at=0,Au=0;function Qi(){for(var a=at,e=Au=at=0;e<a;){var n=oe[e];oe[e++]=null;var t=oe[e];oe[e++]=null;var i=oe[e];oe[e++]=null;var l=oe[e];if(oe[e++]=null,t!==null&&i!==null){var u=t.pending;u===null?i.next=i:(i.next=u.next,u.next=i),t.pending=i}l!==0&&So(n,i,l)}}function Xi(a,e,n,t){oe[at++]=a,oe[at++]=e,oe[at++]=n,oe[at++]=t,Au|=t,a.lanes|=t,a=a.alternate,a!==null&&(a.lanes|=t)}function Mu(a,e,n,t){return Xi(a,e,n,t),Zi(a)}function et(a,e){return Xi(a,null,null,e),Zi(a)}function So(a,e,n){a.lanes|=n;var t=a.alternate;t!==null&&(t.lanes|=n);for(var i=!1,l=a.return;l!==null;)l.childLanes|=n,t=l.alternate,t!==null&&(t.childLanes|=n),l.tag===22&&(a=l.stateNode,a===null||a._visibility&1||(i=!0)),a=l,l=l.return;return a.tag===3?(l=a.stateNode,i&&e!==null&&(i=31-Ia(n),a=l.hiddenUpdates,t=a[i],t===null?a[i]=[e]:t.push(e),e.lane=n|536870912),l):null}function Zi(a){if(50<ci)throw ci=0,Nr=null,Error(o(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var nt={};function ak(a,e,n,t){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(a,e,n,t){return new ak(a,e,n,t)}function _u(a){return a=a.prototype,!(!a||!a.isReactComponent)}function ze(a,e){var n=a.alternate;return n===null?(n=ae(a.tag,e,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=e,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&65011712,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,e=a.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n.refCleanup=a.refCleanup,n}function xo(a,e){a.flags&=65011714;var n=a.alternate;return n===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,a.type=n.type,e=n.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function Pi(a,e,n,t,i,l){var u=0;if(t=a,typeof a=="function")_u(a)&&(u=1);else if(typeof a=="string")u=nf(a,n,L.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case ye:return a=ae(31,n,e,i),a.elementType=ye,a.lanes=l,a;case ba:return _n(n.children,i,l,e);case ka:u=8,i|=24;break;case ya:return a=ae(12,n,e,i|2),a.elementType=ya,a.lanes=l,a;case I:return a=ae(13,n,e,i),a.elementType=I,a.lanes=l,a;case Za:return a=ae(19,n,e,i),a.elementType=Za,a.lanes=l,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case za:case Ua:u=10;break a;case Ee:u=9;break a;case fe:u=11;break a;case Pa:u=14;break a;case Ja:u=16,t=null;break a}u=29,n=Error(o(130,a===null?"null":typeof a,"")),t=null}return e=ae(u,n,e,i),e.elementType=a,e.type=t,e.lanes=l,e}function _n(a,e,n,t){return a=ae(7,a,t,e),a.lanes=n,a}function Cu(a,e,n){return a=ae(6,a,null,e),a.lanes=n,a}function Du(a,e,n){return e=ae(4,a.children!==null?a.children:[],a.key,e),e.lanes=n,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var tt=[],it=0,Ji=null,Fi=0,de=[],me=0,Cn=null,Ue=1,Ke="";function Dn(a,e){tt[it++]=Fi,tt[it++]=Ji,Ji=a,Fi=e}function To(a,e,n){de[me++]=Ue,de[me++]=Ke,de[me++]=Cn,Cn=a;var t=Ue;a=Ke;var i=32-Ia(t)-1;t&=~(1<<i),n+=1;var l=32-Ia(e)+i;if(30<l){var u=i-i%5;l=(t&(1<<u)-1).toString(32),t>>=u,i-=u,Ue=1<<32-Ia(e)+i|n<<i|t,Ke=l+a}else Ue=1<<l|n<<i|t,Ke=a}function Eu(a){a.return!==null&&(Dn(a,1),To(a,1,0))}function Ru(a){for(;a===Ji;)Ji=tt[--it],tt[it]=null,Fi=tt[--it],tt[it]=null;for(;a===Cn;)Cn=de[--me],de[me]=null,Ke=de[--me],de[me]=null,Ue=de[--me],de[me]=null}var qa=null,ha=null,na=!1,En=null,Se=!1,Nu=Error(o(519));function Rn(a){var e=Error(o(418,""));throw wt(se(e,a)),Nu}function jo(a){var e=a.stateNode,n=a.type,t=a.memoizedProps;switch(e[Ha]=a,e[Ga]=t,n){case"dialog":F("cancel",e),F("close",e);break;case"iframe":case"object":case"embed":F("load",e);break;case"video":case"audio":for(n=0;n<ki.length;n++)F(ki[n],e);break;case"source":F("error",e);break;case"img":case"image":case"link":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"input":F("invalid",e),Hs(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),Ki(e);break;case"select":F("invalid",e);break;case"textarea":F("invalid",e),Vs(e,t.value,t.defaultValue,t.children),Ki(e)}n=t.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||t.suppressHydrationWarning===!0||qm(e.textContent,n)?(t.popover!=null&&(F("beforetoggle",e),F("toggle",e)),t.onScroll!=null&&F("scroll",e),t.onScrollEnd!=null&&F("scrollend",e),t.onClick!=null&&(e.onclick=El),e=!0):e=!1,e||Rn(a)}function Ao(a){for(qa=a.return;qa;)switch(qa.tag){case 5:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:qa=qa.return}}function Gt(a){if(a!==qa)return!1;if(!na)return Ao(a),na=!0,!1;var e=a.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=a.type,n=!(n!=="form"&&n!=="button")||Pr(a.type,a.memoizedProps)),n=!n),n&&ha&&Rn(a),Ao(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a:{for(a=a.nextSibling,e=0;a;){if(a.nodeType===8)if(n=a.data,n==="/$"){if(e===0){ha=be(a.nextSibling);break a}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;a=a.nextSibling}ha=null}}else e===27?(e=ha,kn(a.type)?(a=Ir,Ir=null,ha=a):ha=e):ha=qa?be(a.stateNode.nextSibling):null;return!0}function Yt(){ha=qa=null,na=!1}function Mo(){var a=En;return a!==null&&(Xa===null?Xa=a:Xa.push.apply(Xa,a),En=null),a}function wt(a){En===null?En=[a]:En.push(a)}var Ou=C(null),Nn=null,Be=null;function Ie(a,e,n){R(Ou,e._currentValue),e._currentValue=n}function He(a){a._currentValue=Ou.current,z(Ou)}function zu(a,e,n){for(;a!==null;){var t=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),a===n)break;a=a.return}}function Uu(a,e,n,t){var i=a.child;for(i!==null&&(i.return=a);i!==null;){var l=i.dependencies;if(l!==null){var u=i.child;l=l.firstContext;a:for(;l!==null;){var r=l;l=i;for(var d=0;d<e.length;d++)if(r.context===e[d]){l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),zu(l.return,n,a),t||(u=null);break a}l=r.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(o(341));u.lanes|=n,l=u.alternate,l!==null&&(l.lanes|=n),zu(u,n,a),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===a){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function Qt(a,e,n,t){a=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var r=i.type;$a(i.pendingProps.value,u.value)||(a!==null?a.push(r):a=[r])}}else if(i===Fa.current){if(u=i.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(a!==null?a.push(vi):a=[vi])}i=i.return}a!==null&&Uu(e,a,n,t),e.flags|=262144}function Wi(a){for(a=a.firstContext;a!==null;){if(!$a(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function On(a){Nn=a,Be=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function La(a){return _o(Nn,a)}function Ii(a,e){return Nn===null&&On(a),_o(a,e)}function _o(a,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Be===null){if(a===null)throw Error(o(308));Be=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else Be=Be.next=e;return n}var ek=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(n,t){a.push(t)}};this.abort=function(){e.aborted=!0,a.forEach(function(n){return n()})}},nk=m.unstable_scheduleCallback,tk=m.unstable_NormalPriority,ja={$$typeof:Ua,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new ek,data:new Map,refCount:0}}function Xt(a){a.refCount--,a.refCount===0&&nk(tk,function(){a.controller.abort()})}var Zt=null,Bu=0,lt=0,ut=null;function ik(a,e){if(Zt===null){var n=Zt=[];Bu=0,lt=Lr(),ut={status:"pending",value:void 0,then:function(t){n.push(t)}}}return Bu++,e.then(Co,Co),e}function Co(){if(--Bu===0&&Zt!==null){ut!==null&&(ut.status="fulfilled");var a=Zt;Zt=null,lt=0,ut=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function lk(a,e){var n=[],t={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return a.then(function(){t.status="fulfilled",t.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(t.status="rejected",t.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),t}var Do=j.S;j.S=function(a,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ik(a,e),Do!==null&&Do(a,e)};var zn=C(null);function Hu(){var a=zn.current;return a!==null?a:ma.pooledCache}function $i(a,e){e===null?R(zn,zn.current):R(zn,e.pool)}function Eo(){var a=Hu();return a===null?null:{parent:ja._currentValue,pool:a}}var Pt=Error(o(460)),Ro=Error(o(474)),al=Error(o(542)),Lu={then:function(){}};function No(a){return a=a.status,a==="fulfilled"||a==="rejected"}function el(){}function Oo(a,e,n){switch(n=a[n],n===void 0?a.push(e):n!==e&&(e.then(el,el),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Uo(a),a;default:if(typeof e.status=="string")e.then(el,el);else{if(a=ma,a!==null&&100<a.shellSuspendCounter)throw Error(o(482));a=e,a.status="pending",a.then(function(t){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=t}},function(t){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Uo(a),a}throw Jt=e,Pt}}var Jt=null;function zo(){if(Jt===null)throw Error(o(459));var a=Jt;return Jt=null,a}function Uo(a){if(a===Pt||a===al)throw Error(o(483))}var $e=!1;function Vu(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function an(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function en(a,e,n){var t=a.updateQueue;if(t===null)return null;if(t=t.shared,(ta&2)!==0){var i=t.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e,e=Zi(a),So(a,null,n),e}return Xi(a,t,e,n),Zi(a)}function Ft(a,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var t=e.lanes;t&=a.pendingLanes,n|=t,e.lanes=n,_s(a,n)}}function Gu(a,e){var n=a.updateQueue,t=a.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?i=l=e:l=l.next=e}else i=l=e;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=e:a.next=e,n.lastBaseUpdate=e}var Yu=!1;function Wt(){if(Yu){var a=ut;if(a!==null)throw a}}function It(a,e,n,t){Yu=!1;var i=a.updateQueue;$e=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var d=r,p=d.next;d.next=null,u===null?l=p:u.next=p,u=d;var T=a.alternate;T!==null&&(T=T.updateQueue,r=T.lastBaseUpdate,r!==u&&(r===null?T.firstBaseUpdate=p:r.next=p,T.lastBaseUpdate=d))}if(l!==null){var _=i.baseState;u=0,T=p=d=null,r=l;do{var b=r.lane&-536870913,v=b!==r.lane;if(v?(W&b)===b:(t&b)===b){b!==0&&b===lt&&(Yu=!0),T!==null&&(T=T.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});a:{var Y=a,V=r;b=e;var ra=n;switch(V.tag){case 1:if(Y=V.payload,typeof Y=="function"){_=Y.call(ra,_,b);break a}_=Y;break a;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=V.payload,b=typeof Y=="function"?Y.call(ra,_,b):Y,b==null)break a;_=E({},_,b);break a;case 2:$e=!0}}b=r.callback,b!==null&&(a.flags|=64,v&&(a.flags|=8192),v=i.callbacks,v===null?i.callbacks=[b]:v.push(b))}else v={lane:b,tag:r.tag,payload:r.payload,callback:r.callback,next:null},T===null?(p=T=v,d=_):T=T.next=v,u|=b;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;v=r,r=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);T===null&&(d=_),i.baseState=d,i.firstBaseUpdate=p,i.lastBaseUpdate=T,l===null&&(i.shared.lanes=0),dn|=u,a.lanes=u,a.memoizedState=_}}function Ko(a,e){if(typeof a!="function")throw Error(o(191,a));a.call(e)}function Bo(a,e){var n=a.callbacks;if(n!==null)for(a.callbacks=null,a=0;a<n.length;a++)Ko(n[a],e)}var rt=C(null),nl=C(0);function Ho(a,e){a=Qe,R(nl,a),R(rt,e),Qe=a|e.baseLanes}function wu(){R(nl,Qe),R(rt,rt.current)}function Qu(){Qe=nl.current,z(rt),z(nl)}var nn=0,Z=null,la=null,xa=null,tl=!1,st=!1,Un=!1,il=0,$t=0,ot=null,uk=0;function va(){throw Error(o(321))}function Xu(a,e){if(e===null)return!1;for(var n=0;n<e.length&&n<a.length;n++)if(!$a(a[n],e[n]))return!1;return!0}function Zu(a,e,n,t,i,l){return nn=l,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=a===null||a.memoizedState===null?Sd:xd,Un=!1,l=n(t,i),Un=!1,st&&(l=Vo(e,n,t,i)),Lo(a),l}function Lo(a){j.H=dl;var e=la!==null&&la.next!==null;if(nn=0,xa=la=Z=null,tl=!1,$t=0,ot=null,e)throw Error(o(300));a===null||_a||(a=a.dependencies,a!==null&&Wi(a)&&(_a=!0))}function Vo(a,e,n,t){Z=a;var i=0;do{if(st&&(ot=null),$t=0,st=!1,25<=i)throw Error(o(301));if(i+=1,xa=la=null,a.updateQueue!=null){var l=a.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}j.H=gk,l=e(n,t)}while(st);return l}function rk(){var a=j.H,e=a.useState()[0];return e=typeof e.then=="function"?ai(e):e,a=a.useState()[0],(la!==null?la.memoizedState:null)!==a&&(Z.flags|=1024),e}function Pu(){var a=il!==0;return il=0,a}function Ju(a,e,n){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~n}function Fu(a){if(tl){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}tl=!1}nn=0,xa=la=Z=null,st=!1,$t=il=0,ot=null}function wa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xa===null?Z.memoizedState=xa=a:xa=xa.next=a,xa}function Ta(){if(la===null){var a=Z.alternate;a=a!==null?a.memoizedState:null}else a=la.next;var e=xa===null?Z.memoizedState:xa.next;if(e!==null)xa=e,la=a;else{if(a===null)throw Z.alternate===null?Error(o(467)):Error(o(310));la=a,a={memoizedState:la.memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},xa===null?Z.memoizedState=xa=a:xa=xa.next=a}return xa}function Wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(a){var e=$t;return $t+=1,ot===null&&(ot=[]),a=Oo(ot,a,e),e=Z,(xa===null?e.memoizedState:xa.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?Sd:xd),a}function ll(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return ai(a);if(a.$$typeof===Ua)return La(a)}throw Error(o(438,String(a)))}function Iu(a){var e=null,n=Z.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var t=Z.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Wu(),Z.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(a),t=0;t<a;t++)n[t]=Vn;return e.index++,n}function Le(a,e){return typeof e=="function"?e(a):e}function ul(a){var e=Ta();return $u(e,la,a)}function $u(a,e,n){var t=a.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=n;var i=a.baseQueue,l=t.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}e.baseQueue=i=l,t.pending=null}if(l=a.baseState,i===null)a.memoizedState=l;else{e=i.next;var r=u=null,d=null,p=e,T=!1;do{var _=p.lane&-536870913;if(_!==p.lane?(W&_)===_:(nn&_)===_){var b=p.revertLane;if(b===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),_===lt&&(T=!0);else if((nn&b)===b){p=p.next,b===lt&&(T=!0);continue}else _={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},d===null?(r=d=_,u=l):d=d.next=_,Z.lanes|=b,dn|=b;_=p.action,Un&&n(l,_),l=p.hasEagerState?p.eagerState:n(l,_)}else b={lane:_,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},d===null?(r=d=b,u=l):d=d.next=b,Z.lanes|=_,dn|=_;p=p.next}while(p!==null&&p!==e);if(d===null?u=l:d.next=r,!$a(l,a.memoizedState)&&(_a=!0,T&&(n=ut,n!==null)))throw n;a.memoizedState=l,a.baseState=u,a.baseQueue=d,t.lastRenderedState=l}return i===null&&(t.lanes=0),[a.memoizedState,t.dispatch]}function ar(a){var e=Ta(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var t=n.dispatch,i=n.pending,l=e.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do l=a(l,u.action),u=u.next;while(u!==i);$a(l,e.memoizedState)||(_a=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,t]}function qo(a,e,n){var t=Z,i=Ta(),l=na;if(l){if(n===void 0)throw Error(o(407));n=n()}else n=e();var u=!$a((la||i).memoizedState,n);u&&(i.memoizedState=n,_a=!0),i=i.queue;var r=wo.bind(null,t,i,a);if(ei(2048,8,r,[a]),i.getSnapshot!==e||u||xa!==null&&xa.memoizedState.tag&1){if(t.flags|=2048,dt(9,rl(),Yo.bind(null,t,i,n,e),null),ma===null)throw Error(o(349));l||(nn&124)!==0||Go(t,e,n)}return n}function Go(a,e,n){a.flags|=16384,a={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e=Wu(),Z.updateQueue=e,e.stores=[a]):(n=e.stores,n===null?e.stores=[a]:n.push(a))}function Yo(a,e,n,t){e.value=n,e.getSnapshot=t,Qo(e)&&Xo(a)}function wo(a,e,n){return n(function(){Qo(e)&&Xo(a)})}function Qo(a){var e=a.getSnapshot;a=a.value;try{var n=e();return!$a(a,n)}catch{return!0}}function Xo(a){var e=et(a,2);e!==null&&le(e,a,2)}function er(a){var e=wa();if(typeof a=="function"){var n=a;if(a=n(),Un){Je(!0);try{n()}finally{Je(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Le,lastRenderedState:a},e}function Zo(a,e,n,t){return a.baseState=n,$u(a,la,typeof t=="function"?t:Le)}function sk(a,e,n,t,i){if(ol(a))throw Error(o(485));if(a=e.action,a!==null){var l={payload:i,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){l.listeners.push(u)}};j.T!==null?n(!0):l.isTransition=!1,t(l),n=e.pending,n===null?(l.next=e.pending=l,Po(e,l)):(l.next=n.next,e.pending=n.next=l)}}function Po(a,e){var n=e.action,t=e.payload,i=a.state;if(e.isTransition){var l=j.T,u={};j.T=u;try{var r=n(i,t),d=j.S;d!==null&&d(u,r),Jo(a,e,r)}catch(p){nr(a,e,p)}finally{j.T=l}}else try{l=n(i,t),Jo(a,e,l)}catch(p){nr(a,e,p)}}function Jo(a,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(t){Fo(a,e,t)},function(t){return nr(a,e,t)}):Fo(a,e,n)}function Fo(a,e,n){e.status="fulfilled",e.value=n,Wo(e),a.state=n,e=a.pending,e!==null&&(n=e.next,n===e?a.pending=null:(n=n.next,e.next=n,Po(a,n)))}function nr(a,e,n){var t=a.pending;if(a.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=n,Wo(e),e=e.next;while(e!==t)}a.action=null}function Wo(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function Io(a,e){return e}function $o(a,e){if(na){var n=ma.formState;if(n!==null){a:{var t=Z;if(na){if(ha){e:{for(var i=ha,l=Se;i.nodeType!==8;){if(!l){i=null;break e}if(i=be(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){ha=be(i.nextSibling),t=i.data==="F!";break a}}Rn(t)}t=!1}t&&(e=n[0])}}return n=wa(),n.memoizedState=n.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},n.queue=t,n=bd.bind(null,Z,t),t.dispatch=n,t=er(!1),l=rr.bind(null,Z,!1,t.queue),t=wa(),i={state:e,dispatch:null,action:a,pending:null},t.queue=i,n=sk.bind(null,Z,i,l,n),i.dispatch=n,t.memoizedState=a,[e,n,!1]}function ad(a){var e=Ta();return ed(e,la,a)}function ed(a,e,n){if(e=$u(a,e,Io)[0],a=ul(Le)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=ai(e)}catch(u){throw u===Pt?al:u}else t=e;e=Ta();var i=e.queue,l=i.dispatch;return n!==e.memoizedState&&(Z.flags|=2048,dt(9,rl(),ok.bind(null,i,n),null)),[t,l,a]}function ok(a,e){a.action=e}function nd(a){var e=Ta(),n=la;if(n!==null)return ed(e,n,a);Ta(),e=e.memoizedState,n=Ta();var t=n.queue.dispatch;return n.memoizedState=a,[e,t,!1]}function dt(a,e,n,t){return a={tag:a,create:n,deps:t,inst:e,next:null},e=Z.updateQueue,e===null&&(e=Wu(),Z.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=a.next=a:(t=n.next,n.next=a,a.next=t,e.lastEffect=a),a}function rl(){return{destroy:void 0,resource:void 0}}function td(){return Ta().memoizedState}function sl(a,e,n,t){var i=wa();t=t===void 0?null:t,Z.flags|=a,i.memoizedState=dt(1|e,rl(),n,t)}function ei(a,e,n,t){var i=Ta();t=t===void 0?null:t;var l=i.memoizedState.inst;la!==null&&t!==null&&Xu(t,la.memoizedState.deps)?i.memoizedState=dt(e,l,n,t):(Z.flags|=a,i.memoizedState=dt(1|e,l,n,t))}function id(a,e){sl(8390656,8,a,e)}function ld(a,e){ei(2048,8,a,e)}function ud(a,e){return ei(4,2,a,e)}function rd(a,e){return ei(4,4,a,e)}function sd(a,e){if(typeof e=="function"){a=a();var n=e(a);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function od(a,e,n){n=n!=null?n.concat([a]):null,ei(4,4,sd.bind(null,e,a),n)}function tr(){}function dd(a,e){var n=Ta();e=e===void 0?null:e;var t=n.memoizedState;return e!==null&&Xu(e,t[1])?t[0]:(n.memoizedState=[a,e],a)}function md(a,e){var n=Ta();e=e===void 0?null:e;var t=n.memoizedState;if(e!==null&&Xu(e,t[1]))return t[0];if(t=a(),Un){Je(!0);try{a()}finally{Je(!1)}}return n.memoizedState=[t,e],t}function ir(a,e,n){return n===void 0||(nn&1073741824)!==0?a.memoizedState=e:(a.memoizedState=n,a=km(),Z.lanes|=a,dn|=a,n)}function cd(a,e,n,t){return $a(n,e)?n:rt.current!==null?(a=ir(a,n,t),$a(a,e)||(_a=!0),a):(nn&42)===0?(_a=!0,a.memoizedState=n):(a=km(),Z.lanes|=a,dn|=a,e)}function gd(a,e,n,t,i){var l=N.p;N.p=l!==0&&8>l?l:8;var u=j.T,r={};j.T=r,rr(a,!1,e,n);try{var d=i(),p=j.S;if(p!==null&&p(r,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var T=lk(d,t);ni(a,e,T,ie(a))}else ni(a,e,t,ie(a))}catch(_){ni(a,e,{then:function(){},status:"rejected",reason:_},ie())}finally{N.p=l,j.T=u}}function dk(){}function lr(a,e,n,t){if(a.tag!==5)throw Error(o(476));var i=kd(a).queue;gd(a,i,e,G,n===null?dk:function(){return fd(a),n(t)})}function kd(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Le,lastRenderedState:G},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Le,lastRenderedState:n},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function fd(a){var e=kd(a).next.queue;ni(a,e,{},ie())}function ur(){return La(vi)}function hd(){return Ta().memoizedState}function pd(){return Ta().memoizedState}function mk(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var n=ie();a=an(n);var t=en(e,a,n);t!==null&&(le(t,e,n),Ft(t,e,n)),e={cache:Ku()},a.payload=e;return}e=e.return}}function ck(a,e,n){var t=ie();n={lane:t,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ol(a)?yd(e,n):(n=Mu(a,e,n,t),n!==null&&(le(n,a,t),vd(n,e,t)))}function bd(a,e,n){var t=ie();ni(a,e,n,t)}function ni(a,e,n,t){var i={lane:t,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ol(a))yd(e,i);else{var l=a.alternate;if(a.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var u=e.lastRenderedState,r=l(u,n);if(i.hasEagerState=!0,i.eagerState=r,$a(r,u))return Xi(a,e,i,0),ma===null&&Qi(),!1}catch{}if(n=Mu(a,e,i,t),n!==null)return le(n,a,t),vd(n,e,t),!0}return!1}function rr(a,e,n,t){if(t={lane:2,revertLane:Lr(),action:t,hasEagerState:!1,eagerState:null,next:null},ol(a)){if(e)throw Error(o(479))}else e=Mu(a,n,t,2),e!==null&&le(e,a,2)}function ol(a){var e=a.alternate;return a===Z||e!==null&&e===Z}function yd(a,e){st=tl=!0;var n=a.pending;n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e}function vd(a,e,n){if((n&4194048)!==0){var t=e.lanes;t&=a.pendingLanes,n|=t,e.lanes=n,_s(a,n)}}var dl={readContext:La,use:ll,useCallback:va,useContext:va,useEffect:va,useImperativeHandle:va,useLayoutEffect:va,useInsertionEffect:va,useMemo:va,useReducer:va,useRef:va,useState:va,useDebugValue:va,useDeferredValue:va,useTransition:va,useSyncExternalStore:va,useId:va,useHostTransitionStatus:va,useFormState:va,useActionState:va,useOptimistic:va,useMemoCache:va,useCacheRefresh:va},Sd={readContext:La,use:ll,useCallback:function(a,e){return wa().memoizedState=[a,e===void 0?null:e],a},useContext:La,useEffect:id,useImperativeHandle:function(a,e,n){n=n!=null?n.concat([a]):null,sl(4194308,4,sd.bind(null,e,a),n)},useLayoutEffect:function(a,e){return sl(4194308,4,a,e)},useInsertionEffect:function(a,e){sl(4,2,a,e)},useMemo:function(a,e){var n=wa();e=e===void 0?null:e;var t=a();if(Un){Je(!0);try{a()}finally{Je(!1)}}return n.memoizedState=[t,e],t},useReducer:function(a,e,n){var t=wa();if(n!==void 0){var i=n(e);if(Un){Je(!0);try{n(e)}finally{Je(!1)}}}else i=e;return t.memoizedState=t.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:i},t.queue=a,a=a.dispatch=ck.bind(null,Z,a),[t.memoizedState,a]},useRef:function(a){var e=wa();return a={current:a},e.memoizedState=a},useState:function(a){a=er(a);var e=a.queue,n=bd.bind(null,Z,e);return e.dispatch=n,[a.memoizedState,n]},useDebugValue:tr,useDeferredValue:function(a,e){var n=wa();return ir(n,a,e)},useTransition:function(){var a=er(!1);return a=gd.bind(null,Z,a.queue,!0,!1),wa().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,n){var t=Z,i=wa();if(na){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),ma===null)throw Error(o(349));(W&124)!==0||Go(t,e,n)}i.memoizedState=n;var l={value:n,getSnapshot:e};return i.queue=l,id(wo.bind(null,t,l,a),[a]),t.flags|=2048,dt(9,rl(),Yo.bind(null,t,l,n,e),null),n},useId:function(){var a=wa(),e=ma.identifierPrefix;if(na){var n=Ke,t=Ue;n=(t&~(1<<32-Ia(t)-1)).toString(32)+n,e="«"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=uk++,e="«"+e+"r"+n.toString(32)+"»";return a.memoizedState=e},useHostTransitionStatus:ur,useFormState:$o,useActionState:$o,useOptimistic:function(a){var e=wa();e.memoizedState=e.baseState=a;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=rr.bind(null,Z,!0,n),n.dispatch=e,[a,e]},useMemoCache:Iu,useCacheRefresh:function(){return wa().memoizedState=mk.bind(null,Z)}},xd={readContext:La,use:ll,useCallback:dd,useContext:La,useEffect:ld,useImperativeHandle:od,useInsertionEffect:ud,useLayoutEffect:rd,useMemo:md,useReducer:ul,useRef:td,useState:function(){return ul(Le)},useDebugValue:tr,useDeferredValue:function(a,e){var n=Ta();return cd(n,la.memoizedState,a,e)},useTransition:function(){var a=ul(Le)[0],e=Ta().memoizedState;return[typeof a=="boolean"?a:ai(a),e]},useSyncExternalStore:qo,useId:hd,useHostTransitionStatus:ur,useFormState:ad,useActionState:ad,useOptimistic:function(a,e){var n=Ta();return Zo(n,la,a,e)},useMemoCache:Iu,useCacheRefresh:pd},gk={readContext:La,use:ll,useCallback:dd,useContext:La,useEffect:ld,useImperativeHandle:od,useInsertionEffect:ud,useLayoutEffect:rd,useMemo:md,useReducer:ar,useRef:td,useState:function(){return ar(Le)},useDebugValue:tr,useDeferredValue:function(a,e){var n=Ta();return la===null?ir(n,a,e):cd(n,la.memoizedState,a,e)},useTransition:function(){var a=ar(Le)[0],e=Ta().memoizedState;return[typeof a=="boolean"?a:ai(a),e]},useSyncExternalStore:qo,useId:hd,useHostTransitionStatus:ur,useFormState:nd,useActionState:nd,useOptimistic:function(a,e){var n=Ta();return la!==null?Zo(n,la,a,e):(n.baseState=a,[a,n.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:pd},mt=null,ti=0;function ml(a){var e=ti;return ti+=1,mt===null&&(mt=[]),Oo(mt,a,e)}function ii(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function cl(a,e){throw e.$$typeof===H?Error(o(525)):(a=Object.prototype.toString.call(e),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function Td(a){var e=a._init;return e(a._payload)}function jd(a){function e(k,g){if(a){var h=k.deletions;h===null?(k.deletions=[g],k.flags|=16):h.push(g)}}function n(k,g){if(!a)return null;for(;g!==null;)e(k,g),g=g.sibling;return null}function t(k){for(var g=new Map;k!==null;)k.key!==null?g.set(k.key,k):g.set(k.index,k),k=k.sibling;return g}function i(k,g){return k=ze(k,g),k.index=0,k.sibling=null,k}function l(k,g,h){return k.index=h,a?(h=k.alternate,h!==null?(h=h.index,h<g?(k.flags|=67108866,g):h):(k.flags|=67108866,g)):(k.flags|=1048576,g)}function u(k){return a&&k.alternate===null&&(k.flags|=67108866),k}function r(k,g,h,A){return g===null||g.tag!==6?(g=Cu(h,k.mode,A),g.return=k,g):(g=i(g,h),g.return=k,g)}function d(k,g,h,A){var U=h.type;return U===ba?T(k,g,h.props.children,A,h.key):g!==null&&(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ja&&Td(U)===g.type)?(g=i(g,h.props),ii(g,h),g.return=k,g):(g=Pi(h.type,h.key,h.props,null,k.mode,A),ii(g,h),g.return=k,g)}function p(k,g,h,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Du(h,k.mode,A),g.return=k,g):(g=i(g,h.children||[]),g.return=k,g)}function T(k,g,h,A,U){return g===null||g.tag!==7?(g=_n(h,k.mode,A,U),g.return=k,g):(g=i(g,h),g.return=k,g)}function _(k,g,h){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Cu(""+g,k.mode,h),g.return=k,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case w:return h=Pi(g.type,g.key,g.props,null,k.mode,h),ii(h,g),h.return=k,h;case da:return g=Du(g,k.mode,h),g.return=k,g;case Ja:var A=g._init;return g=A(g._payload),_(k,g,h)}if(Ba(g)||Ka(g))return g=_n(g,k.mode,h,null),g.return=k,g;if(typeof g.then=="function")return _(k,ml(g),h);if(g.$$typeof===Ua)return _(k,Ii(k,g),h);cl(k,g)}return null}function b(k,g,h,A){var U=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:r(k,g,""+h,A);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case w:return h.key===U?d(k,g,h,A):null;case da:return h.key===U?p(k,g,h,A):null;case Ja:return U=h._init,h=U(h._payload),b(k,g,h,A)}if(Ba(h)||Ka(h))return U!==null?null:T(k,g,h,A,null);if(typeof h.then=="function")return b(k,g,ml(h),A);if(h.$$typeof===Ua)return b(k,g,Ii(k,h),A);cl(k,h)}return null}function v(k,g,h,A,U){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return k=k.get(h)||null,r(g,k,""+A,U);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return k=k.get(A.key===null?h:A.key)||null,d(g,k,A,U);case da:return k=k.get(A.key===null?h:A.key)||null,p(g,k,A,U);case Ja:var P=A._init;return A=P(A._payload),v(k,g,h,A,U)}if(Ba(A)||Ka(A))return k=k.get(h)||null,T(g,k,A,U,null);if(typeof A.then=="function")return v(k,g,h,ml(A),U);if(A.$$typeof===Ua)return v(k,g,h,Ii(g,A),U);cl(g,A)}return null}function Y(k,g,h,A){for(var U=null,P=null,K=g,q=g=0,Da=null;K!==null&&q<h.length;q++){K.index>q?(Da=K,K=null):Da=K.sibling;var aa=b(k,K,h[q],A);if(aa===null){K===null&&(K=Da);break}a&&K&&aa.alternate===null&&e(k,K),g=l(aa,g,q),P===null?U=aa:P.sibling=aa,P=aa,K=Da}if(q===h.length)return n(k,K),na&&Dn(k,q),U;if(K===null){for(;q<h.length;q++)K=_(k,h[q],A),K!==null&&(g=l(K,g,q),P===null?U=K:P.sibling=K,P=K);return na&&Dn(k,q),U}for(K=t(K);q<h.length;q++)Da=v(K,k,q,h[q],A),Da!==null&&(a&&Da.alternate!==null&&K.delete(Da.key===null?q:Da.key),g=l(Da,g,q),P===null?U=Da:P.sibling=Da,P=Da);return a&&K.forEach(function(yn){return e(k,yn)}),na&&Dn(k,q),U}function V(k,g,h,A){if(h==null)throw Error(o(151));for(var U=null,P=null,K=g,q=g=0,Da=null,aa=h.next();K!==null&&!aa.done;q++,aa=h.next()){K.index>q?(Da=K,K=null):Da=K.sibling;var yn=b(k,K,aa.value,A);if(yn===null){K===null&&(K=Da);break}a&&K&&yn.alternate===null&&e(k,K),g=l(yn,g,q),P===null?U=yn:P.sibling=yn,P=yn,K=Da}if(aa.done)return n(k,K),na&&Dn(k,q),U;if(K===null){for(;!aa.done;q++,aa=h.next())aa=_(k,aa.value,A),aa!==null&&(g=l(aa,g,q),P===null?U=aa:P.sibling=aa,P=aa);return na&&Dn(k,q),U}for(K=t(K);!aa.done;q++,aa=h.next())aa=v(K,k,q,aa.value,A),aa!==null&&(a&&aa.alternate!==null&&K.delete(aa.key===null?q:aa.key),g=l(aa,g,q),P===null?U=aa:P.sibling=aa,P=aa);return a&&K.forEach(function(ff){return e(k,ff)}),na&&Dn(k,q),U}function ra(k,g,h,A){if(typeof h=="object"&&h!==null&&h.type===ba&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case w:a:{for(var U=h.key;g!==null;){if(g.key===U){if(U=h.type,U===ba){if(g.tag===7){n(k,g.sibling),A=i(g,h.props.children),A.return=k,k=A;break a}}else if(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ja&&Td(U)===g.type){n(k,g.sibling),A=i(g,h.props),ii(A,h),A.return=k,k=A;break a}n(k,g);break}else e(k,g);g=g.sibling}h.type===ba?(A=_n(h.props.children,k.mode,A,h.key),A.return=k,k=A):(A=Pi(h.type,h.key,h.props,null,k.mode,A),ii(A,h),A.return=k,k=A)}return u(k);case da:a:{for(U=h.key;g!==null;){if(g.key===U)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){n(k,g.sibling),A=i(g,h.children||[]),A.return=k,k=A;break a}else{n(k,g);break}else e(k,g);g=g.sibling}A=Du(h,k.mode,A),A.return=k,k=A}return u(k);case Ja:return U=h._init,h=U(h._payload),ra(k,g,h,A)}if(Ba(h))return Y(k,g,h,A);if(Ka(h)){if(U=Ka(h),typeof U!="function")throw Error(o(150));return h=U.call(h),V(k,g,h,A)}if(typeof h.then=="function")return ra(k,g,ml(h),A);if(h.$$typeof===Ua)return ra(k,g,Ii(k,h),A);cl(k,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,g!==null&&g.tag===6?(n(k,g.sibling),A=i(g,h),A.return=k,k=A):(n(k,g),A=Cu(h,k.mode,A),A.return=k,k=A),u(k)):n(k,g)}return function(k,g,h,A){try{ti=0;var U=ra(k,g,h,A);return mt=null,U}catch(K){if(K===Pt||K===al)throw K;var P=ae(29,K,null,k.mode);return P.lanes=A,P.return=k,P}}}var ct=jd(!0),Ad=jd(!1),ce=C(null),xe=null;function tn(a){var e=a.alternate;R(Aa,Aa.current&1),R(ce,a),xe===null&&(e===null||rt.current!==null||e.memoizedState!==null)&&(xe=a)}function Md(a){if(a.tag===22){if(R(Aa,Aa.current),R(ce,a),xe===null){var e=a.alternate;e!==null&&e.memoizedState!==null&&(xe=a)}}else ln()}function ln(){R(Aa,Aa.current),R(ce,ce.current)}function Ve(a){z(ce),xe===a&&(xe=null),z(Aa)}var Aa=C(0);function gl(a){for(var e=a;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Wr(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function sr(a,e,n,t){e=a.memoizedState,n=n(t,e),n=n==null?e:E({},e,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var or={enqueueSetState:function(a,e,n){a=a._reactInternals;var t=ie(),i=an(t);i.payload=e,n!=null&&(i.callback=n),e=en(a,i,t),e!==null&&(le(e,a,t),Ft(e,a,t))},enqueueReplaceState:function(a,e,n){a=a._reactInternals;var t=ie(),i=an(t);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=en(a,i,t),e!==null&&(le(e,a,t),Ft(e,a,t))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var n=ie(),t=an(n);t.tag=2,e!=null&&(t.callback=e),e=en(a,t,n),e!==null&&(le(e,a,n),Ft(e,a,n))}};function _d(a,e,n,t,i,l,u){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(t,l,u):e.prototype&&e.prototype.isPureReactComponent?!Vt(n,t)||!Vt(i,l):!0}function Cd(a,e,n,t){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,t),e.state!==a&&or.enqueueReplaceState(e,e.state,null)}function Kn(a,e){var n=e;if("ref"in e){n={};for(var t in e)t!=="ref"&&(n[t]=e[t])}if(a=a.defaultProps){n===e&&(n=E({},n));for(var i in a)n[i]===void 0&&(n[i]=a[i])}return n}var kl=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function Dd(a){kl(a)}function Ed(a){console.error(a)}function Rd(a){kl(a)}function fl(a,e){try{var n=a.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function Nd(a,e,n){try{var t=a.onCaughtError;t(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function dr(a,e,n){return n=an(n),n.tag=3,n.payload={element:null},n.callback=function(){fl(a,e)},n}function Od(a){return a=an(a),a.tag=3,a}function zd(a,e,n,t){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;a.payload=function(){return i(l)},a.callback=function(){Nd(e,n,t)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){Nd(e,n,t),typeof i!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})})}function kk(a,e,n,t,i){if(n.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=n.alternate,e!==null&&Qt(e,n,i,!0),n=ce.current,n!==null){switch(n.tag){case 13:return xe===null?zr():n.alternate===null&&pa===0&&(pa=3),n.flags&=-257,n.flags|=65536,n.lanes=i,t===Lu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([t]):e.add(t),Kr(a,t,i)),!1;case 22:return n.flags|=65536,t===Lu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([t]):n.add(t)),Kr(a,t,i)),!1}throw Error(o(435,n.tag))}return Kr(a,t,i),zr(),!1}if(na)return e=ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,t!==Nu&&(a=Error(o(422),{cause:t}),wt(se(a,n)))):(t!==Nu&&(e=Error(o(423),{cause:t}),wt(se(e,n))),a=a.current.alternate,a.flags|=65536,i&=-i,a.lanes|=i,t=se(t,n),i=dr(a.stateNode,t,i),Gu(a,i),pa!==4&&(pa=2)),!1;var l=Error(o(520),{cause:t});if(l=se(l,n),mi===null?mi=[l]:mi.push(l),pa!==4&&(pa=2),e===null)return!0;t=se(t,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,a=i&-i,n.lanes|=a,a=dr(n.stateNode,t,a),Gu(n,a),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(mn===null||!mn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Od(i),zd(i,a,n,t),Gu(n,i),!1}n=n.return}while(n!==null);return!1}var Ud=Error(o(461)),_a=!1;function Ea(a,e,n,t){e.child=a===null?Ad(e,null,n,t):ct(e,a.child,n,t)}function Kd(a,e,n,t,i){n=n.render;var l=e.ref;if("ref"in t){var u={};for(var r in t)r!=="ref"&&(u[r]=t[r])}else u=t;return On(e),t=Zu(a,e,n,u,l,i),r=Pu(),a!==null&&!_a?(Ju(a,e,i),qe(a,e,i)):(na&&r&&Eu(e),e.flags|=1,Ea(a,e,t,i),e.child)}function Bd(a,e,n,t,i){if(a===null){var l=n.type;return typeof l=="function"&&!_u(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,Hd(a,e,l,t,i)):(a=Pi(n.type,null,t,e,e.mode,i),a.ref=e.ref,a.return=e,e.child=a)}if(l=a.child,!br(a,i)){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:Vt,n(u,t)&&a.ref===e.ref)return qe(a,e,i)}return e.flags|=1,a=ze(l,t),a.ref=e.ref,a.return=e,e.child=a}function Hd(a,e,n,t,i){if(a!==null){var l=a.memoizedProps;if(Vt(l,t)&&a.ref===e.ref)if(_a=!1,e.pendingProps=t=l,br(a,i))(a.flags&131072)!==0&&(_a=!0);else return e.lanes=a.lanes,qe(a,e,i)}return mr(a,e,n,t,i)}function Ld(a,e,n){var t=e.pendingProps,i=t.children,l=a!==null?a.memoizedState:null;if(t.mode==="hidden"){if((e.flags&128)!==0){if(t=l!==null?l.baseLanes|n:n,a!==null){for(i=e.child=a.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;e.childLanes=l&~t}else e.childLanes=0,e.child=null;return Vd(a,e,t,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&$i(e,l!==null?l.cachePool:null),l!==null?Ho(e,l):wu(),Md(e);else return e.lanes=e.childLanes=536870912,Vd(a,e,l!==null?l.baseLanes|n:n,n)}else l!==null?($i(e,l.cachePool),Ho(e,l),ln(),e.memoizedState=null):(a!==null&&$i(e,null),wu(),ln());return Ea(a,e,i,n),e.child}function Vd(a,e,n,t){var i=Hu();return i=i===null?null:{parent:ja._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},a!==null&&$i(e,null),wu(),Md(e),a!==null&&Qt(a,e,t,!0),null}function hl(a,e){var n=e.ref;if(n===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(a===null||a.ref!==n)&&(e.flags|=4194816)}}function mr(a,e,n,t,i){return On(e),n=Zu(a,e,n,t,void 0,i),t=Pu(),a!==null&&!_a?(Ju(a,e,i),qe(a,e,i)):(na&&t&&Eu(e),e.flags|=1,Ea(a,e,n,i),e.child)}function qd(a,e,n,t,i,l){return On(e),e.updateQueue=null,n=Vo(e,t,n,i),Lo(a),t=Pu(),a!==null&&!_a?(Ju(a,e,l),qe(a,e,l)):(na&&t&&Eu(e),e.flags|=1,Ea(a,e,n,l),e.child)}function Gd(a,e,n,t,i){if(On(e),e.stateNode===null){var l=nt,u=n.contextType;typeof u=="object"&&u!==null&&(l=La(u)),l=new n(t,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=or,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=t,l.state=e.memoizedState,l.refs={},Vu(e),u=n.contextType,l.context=typeof u=="object"&&u!==null?La(u):nt,l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(sr(e,n,u,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(u=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),u!==l.state&&or.enqueueReplaceState(l,l.state,null),It(e,t,l,i),Wt(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(a===null){l=e.stateNode;var r=e.memoizedProps,d=Kn(n,r);l.props=d;var p=l.context,T=n.contextType;u=nt,typeof T=="object"&&T!==null&&(u=La(T));var _=n.getDerivedStateFromProps;T=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r||p!==u)&&Cd(e,l,t,u),$e=!1;var b=e.memoizedState;l.state=b,It(e,t,l,i),Wt(),p=e.memoizedState,r||b!==p||$e?(typeof _=="function"&&(sr(e,n,_,t),p=e.memoizedState),(d=$e||_d(e,n,d,t,b,p,u))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=p),l.props=t,l.state=p,l.context=u,t=d):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{l=e.stateNode,qu(a,e),u=e.memoizedProps,T=Kn(n,u),l.props=T,_=e.pendingProps,b=l.context,p=n.contextType,d=nt,typeof p=="object"&&p!==null&&(d=La(p)),r=n.getDerivedStateFromProps,(p=typeof r=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||b!==d)&&Cd(e,l,t,d),$e=!1,b=e.memoizedState,l.state=b,It(e,t,l,i),Wt();var v=e.memoizedState;u!==_||b!==v||$e||a!==null&&a.dependencies!==null&&Wi(a.dependencies)?(typeof r=="function"&&(sr(e,n,r,t),v=e.memoizedState),(T=$e||_d(e,n,T,t,b,v,d)||a!==null&&a.dependencies!==null&&Wi(a.dependencies))?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,v,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,v,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===a.memoizedProps&&b===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&b===a.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=v),l.props=t,l.state=v,l.context=d,t=T):(typeof l.componentDidUpdate!="function"||u===a.memoizedProps&&b===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&b===a.memoizedState||(e.flags|=1024),t=!1)}return l=t,hl(a,e),t=(e.flags&128)!==0,l||t?(l=e.stateNode,n=t&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,a!==null&&t?(e.child=ct(e,a.child,null,i),e.child=ct(e,null,n,i)):Ea(a,e,n,i),e.memoizedState=l.state,a=e.child):a=qe(a,e,i),a}function Yd(a,e,n,t){return Yt(),e.flags|=256,Ea(a,e,n,t),e.child}var cr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gr(a){return{baseLanes:a,cachePool:Eo()}}function kr(a,e,n){return a=a!==null?a.childLanes&~n:0,e&&(a|=ge),a}function wd(a,e,n){var t=e.pendingProps,i=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=a!==null&&a.memoizedState===null?!1:(Aa.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,a===null){if(na){if(i?tn(e):ln(),na){var r=ha,d;if(d=r){a:{for(d=r,r=Se;d.nodeType!==8;){if(!r){r=null;break a}if(d=be(d.nextSibling),d===null){r=null;break a}}r=d}r!==null?(e.memoizedState={dehydrated:r,treeContext:Cn!==null?{id:Ue,overflow:Ke}:null,retryLane:536870912,hydrationErrors:null},d=ae(18,null,null,0),d.stateNode=r,d.return=e,e.child=d,qa=e,ha=null,d=!0):d=!1}d||Rn(e)}if(r=e.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return Wr(r)?e.lanes=32:e.lanes=536870912,null;Ve(e)}return r=t.children,t=t.fallback,i?(ln(),i=e.mode,r=pl({mode:"hidden",children:r},i),t=_n(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,i=e.child,i.memoizedState=gr(n),i.childLanes=kr(a,u,n),e.memoizedState=cr,t):(tn(e),fr(e,r))}if(d=a.memoizedState,d!==null&&(r=d.dehydrated,r!==null)){if(l)e.flags&256?(tn(e),e.flags&=-257,e=hr(a,e,n)):e.memoizedState!==null?(ln(),e.child=a.child,e.flags|=128,e=null):(ln(),i=t.fallback,r=e.mode,t=pl({mode:"visible",children:t.children},r),i=_n(i,r,n,null),i.flags|=2,t.return=e,i.return=e,t.sibling=i,e.child=t,ct(e,a.child,null,n),t=e.child,t.memoizedState=gr(n),t.childLanes=kr(a,u,n),e.memoizedState=cr,e=i);else if(tn(e),Wr(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var p=u.dgst;u=p,t=Error(o(419)),t.stack="",t.digest=u,wt({value:t,source:null,stack:null}),e=hr(a,e,n)}else if(_a||Qt(a,e,n,!1),u=(n&a.childLanes)!==0,_a||u){if(u=ma,u!==null&&(t=n&-n,t=(t&42)!==0?1:Il(t),t=(t&(u.suspendedLanes|n))!==0?0:t,t!==0&&t!==d.retryLane))throw d.retryLane=t,et(a,t),le(u,a,t),Ud;r.data==="$?"||zr(),e=hr(a,e,n)}else r.data==="$?"?(e.flags|=192,e.child=a.child,e=null):(a=d.treeContext,ha=be(r.nextSibling),qa=e,na=!0,En=null,Se=!1,a!==null&&(de[me++]=Ue,de[me++]=Ke,de[me++]=Cn,Ue=a.id,Ke=a.overflow,Cn=e),e=fr(e,t.children),e.flags|=4096);return e}return i?(ln(),i=t.fallback,r=e.mode,d=a.child,p=d.sibling,t=ze(d,{mode:"hidden",children:t.children}),t.subtreeFlags=d.subtreeFlags&65011712,p!==null?i=ze(p,i):(i=_n(i,r,n,null),i.flags|=2),i.return=e,t.return=e,t.sibling=i,e.child=t,t=i,i=e.child,r=a.child.memoizedState,r===null?r=gr(n):(d=r.cachePool,d!==null?(p=ja._currentValue,d=d.parent!==p?{parent:p,pool:p}:d):d=Eo(),r={baseLanes:r.baseLanes|n,cachePool:d}),i.memoizedState=r,i.childLanes=kr(a,u,n),e.memoizedState=cr,t):(tn(e),n=a.child,a=n.sibling,n=ze(n,{mode:"visible",children:t.children}),n.return=e,n.sibling=null,a!==null&&(u=e.deletions,u===null?(e.deletions=[a],e.flags|=16):u.push(a)),e.child=n,e.memoizedState=null,n)}function fr(a,e){return e=pl({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function pl(a,e){return a=ae(22,a,null,e),a.lanes=0,a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},a}function hr(a,e,n){return ct(e,a.child,null,n),a=fr(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function Qd(a,e,n){a.lanes|=e;var t=a.alternate;t!==null&&(t.lanes|=e),zu(a.return,e,n)}function pr(a,e,n,t,i){var l=a.memoizedState;l===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=n,l.tailMode=i)}function Xd(a,e,n){var t=e.pendingProps,i=t.revealOrder,l=t.tail;if(Ea(a,e,t.children,n),t=Aa.current,(t&2)!==0)t=t&1|2,e.flags|=128;else{if(a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Qd(a,n,e);else if(a.tag===19)Qd(a,n,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}t&=1}switch(R(Aa,t),i){case"forwards":for(n=e.child,i=null;n!==null;)a=n.alternate,a!==null&&gl(a)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pr(e,!1,i,n,l);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(a=i.alternate,a!==null&&gl(a)===null){e.child=i;break}a=i.sibling,i.sibling=n,n=i,i=a}pr(e,!0,n,null,l);break;case"together":pr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qe(a,e,n){if(a!==null&&(e.dependencies=a.dependencies),dn|=e.lanes,(n&e.childLanes)===0)if(a!==null){if(Qt(a,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(o(153));if(e.child!==null){for(a=e.child,n=ze(a,a.pendingProps),e.child=n,n.return=e;a.sibling!==null;)a=a.sibling,n=n.sibling=ze(a,a.pendingProps),n.return=e;n.sibling=null}return e.child}function br(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&Wi(a)))}function fk(a,e,n){switch(e.tag){case 3:ca(e,e.stateNode.containerInfo),Ie(e,ja,a.memoizedState.cache),Yt();break;case 27:case 5:Zl(e);break;case 4:ca(e,e.stateNode.containerInfo);break;case 10:Ie(e,e.type,e.memoizedProps.value);break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(tn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?wd(a,e,n):(tn(e),a=qe(a,e,n),a!==null?a.sibling:null);tn(e);break;case 19:var i=(a.flags&128)!==0;if(t=(n&e.childLanes)!==0,t||(Qt(a,e,n,!1),t=(n&e.childLanes)!==0),i){if(t)return Xd(a,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(Aa,Aa.current),t)break;return null;case 22:case 23:return e.lanes=0,Ld(a,e,n);case 24:Ie(e,ja,a.memoizedState.cache)}return qe(a,e,n)}function Zd(a,e,n){if(a!==null)if(a.memoizedProps!==e.pendingProps)_a=!0;else{if(!br(a,n)&&(e.flags&128)===0)return _a=!1,fk(a,e,n);_a=(a.flags&131072)!==0}else _a=!1,na&&(e.flags&1048576)!==0&&To(e,Fi,e.index);switch(e.lanes=0,e.tag){case 16:a:{a=e.pendingProps;var t=e.elementType,i=t._init;if(t=i(t._payload),e.type=t,typeof t=="function")_u(t)?(a=Kn(t,a),e.tag=1,e=Gd(null,e,t,a,n)):(e.tag=0,e=mr(null,e,t,a,n));else{if(t!=null){if(i=t.$$typeof,i===fe){e.tag=11,e=Kd(null,e,t,a,n);break a}else if(i===Pa){e.tag=14,e=Bd(null,e,t,a,n);break a}}throw e=Sn(t)||t,Error(o(306,e,""))}}return e;case 0:return mr(a,e,e.type,e.pendingProps,n);case 1:return t=e.type,i=Kn(t,e.pendingProps),Gd(a,e,t,i,n);case 3:a:{if(ca(e,e.stateNode.containerInfo),a===null)throw Error(o(387));t=e.pendingProps;var l=e.memoizedState;i=l.element,qu(a,e),It(e,t,null,n);var u=e.memoizedState;if(t=u.cache,Ie(e,ja,t),t!==l.cache&&Uu(e,[ja],n,!0),Wt(),t=u.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Yd(a,e,t,n);break a}else if(t!==i){i=se(Error(o(424)),e),wt(i),e=Yd(a,e,t,n);break a}else for(a=e.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,ha=be(a.firstChild),qa=e,na=!0,En=null,Se=!0,n=Ad(e,null,t,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yt(),t===i){e=qe(a,e,n);break a}Ea(a,e,t,n)}e=e.child}return e;case 26:return hl(a,e),a===null?(n=Wm(e.type,null,e.pendingProps,null))?e.memoizedState=n:na||(n=e.type,a=e.pendingProps,t=Rl(Q.current).createElement(n),t[Ha]=e,t[Ga]=a,Na(t,n,a),Ma(t),e.stateNode=t):e.memoizedState=Wm(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return Zl(e),a===null&&na&&(t=e.stateNode=Pm(e.type,e.pendingProps,Q.current),qa=e,Se=!0,i=ha,kn(e.type)?(Ir=i,ha=be(t.firstChild)):ha=i),Ea(a,e,e.pendingProps.children,n),hl(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&na&&((i=t=ha)&&(t=Yk(t,e.type,e.pendingProps,Se),t!==null?(e.stateNode=t,qa=e,ha=be(t.firstChild),Se=!1,i=!0):i=!1),i||Rn(e)),Zl(e),i=e.type,l=e.pendingProps,u=a!==null?a.memoizedProps:null,t=l.children,Pr(i,l)?t=null:u!==null&&Pr(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=Zu(a,e,rk,null,null,n),vi._currentValue=i),hl(a,e),Ea(a,e,t,n),e.child;case 6:return a===null&&na&&((a=n=ha)&&(n=wk(n,e.pendingProps,Se),n!==null?(e.stateNode=n,qa=e,ha=null,a=!0):a=!1),a||Rn(e)),null;case 13:return wd(a,e,n);case 4:return ca(e,e.stateNode.containerInfo),t=e.pendingProps,a===null?e.child=ct(e,null,t,n):Ea(a,e,t,n),e.child;case 11:return Kd(a,e,e.type,e.pendingProps,n);case 7:return Ea(a,e,e.pendingProps,n),e.child;case 8:return Ea(a,e,e.pendingProps.children,n),e.child;case 12:return Ea(a,e,e.pendingProps.children,n),e.child;case 10:return t=e.pendingProps,Ie(e,e.type,t.value),Ea(a,e,t.children,n),e.child;case 9:return i=e.type._context,t=e.pendingProps.children,On(e),i=La(i),t=t(i),e.flags|=1,Ea(a,e,t,n),e.child;case 14:return Bd(a,e,e.type,e.pendingProps,n);case 15:return Hd(a,e,e.type,e.pendingProps,n);case 19:return Xd(a,e,n);case 31:return t=e.pendingProps,n=e.mode,t={mode:t.mode,children:t.children},a===null?(n=pl(t,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=ze(a.child,t),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Ld(a,e,n);case 24:return On(e),t=La(ja),a===null?(i=Hu(),i===null&&(i=ma,l=Ku(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),e.memoizedState={parent:t,cache:i},Vu(e),Ie(e,ja,i)):((a.lanes&n)!==0&&(qu(a,e),It(e,null,null,n),Wt()),i=a.memoizedState,l=e.memoizedState,i.parent!==t?(i={parent:t,cache:t},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ie(e,ja,t)):(t=l.cache,Ie(e,ja,t),t!==i.cache&&Uu(e,[ja],n,!0))),Ea(a,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Ge(a){a.flags|=4}function Pd(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!nc(e)){if(e=ce.current,e!==null&&((W&4194048)===W?xe!==null:(W&62914560)!==W&&(W&536870912)===0||e!==xe))throw Jt=Lu,Ro;a.flags|=8192}}function bl(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?As():536870912,a.lanes|=e,ht|=e)}function li(a,e){if(!na)switch(a.tailMode){case"hidden":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:t.sibling=null}}function fa(a){var e=a.alternate!==null&&a.alternate.child===a.child,n=0,t=0;if(e)for(var i=a.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=a,i=i.sibling;else for(i=a.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=a,i=i.sibling;return a.subtreeFlags|=t,a.childLanes=n,e}function hk(a,e,n){var t=e.pendingProps;switch(Ru(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fa(e),null;case 1:return fa(e),null;case 3:return n=e.stateNode,t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),He(ja),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(a===null||a.child===null)&&(Gt(e)?Ge(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mo())),fa(e),null;case 26:return n=e.memoizedState,a===null?(Ge(e),n!==null?(fa(e),Pd(e,n)):(fa(e),e.flags&=-16777217)):n?n!==a.memoizedState?(Ge(e),fa(e),Pd(e,n)):(fa(e),e.flags&=-16777217):(a.memoizedProps!==t&&Ge(e),fa(e),e.flags&=-16777217),null;case 27:Di(e),n=Q.current;var i=e.type;if(a!==null&&e.stateNode!=null)a.memoizedProps!==t&&Ge(e);else{if(!t){if(e.stateNode===null)throw Error(o(166));return fa(e),null}a=L.current,Gt(e)?jo(e):(a=Pm(i,t,n),e.stateNode=a,Ge(e))}return fa(e),null;case 5:if(Di(e),n=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==t&&Ge(e);else{if(!t){if(e.stateNode===null)throw Error(o(166));return fa(e),null}if(a=L.current,Gt(e))jo(e);else{switch(i=Rl(Q.current),a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":a=i.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?a.multiple=!0:t.size&&(a.size=t.size);break;default:a=typeof t.is=="string"?i.createElement(n,{is:t.is}):i.createElement(n)}}a[Ha]=e,a[Ga]=t;a:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break a;for(;i.sibling===null;){if(i.return===null||i.return===e)break a;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=a;a:switch(Na(a,n,t),n){case"button":case"input":case"select":case"textarea":a=!!t.autoFocus;break a;case"img":a=!0;break a;default:a=!1}a&&Ge(e)}}return fa(e),e.flags&=-16777217,null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==t&&Ge(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(o(166));if(a=Q.current,Gt(e)){if(a=e.stateNode,n=e.memoizedProps,t=null,i=qa,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}a[Ha]=e,a=!!(a.nodeValue===n||t!==null&&t.suppressHydrationWarning===!0||qm(a.nodeValue,n)),a||Rn(e)}else a=Rl(a).createTextNode(t),a[Ha]=e,e.stateNode=a}return fa(e),null;case 13:if(t=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(i=Gt(e),t!==null&&t.dehydrated!==null){if(a===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Ha]=e}else Yt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fa(e),i=!1}else i=Mo(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ve(e),e):(Ve(e),null)}if(Ve(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=t!==null,a=a!==null&&a.memoizedState!==null,n){t=e.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool);var l=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)}return n!==a&&n&&(e.child.flags|=8192),bl(e,e.updateQueue),fa(e),null;case 4:return Pe(),a===null&&Yr(e.stateNode.containerInfo),fa(e),null;case 10:return He(e.type),fa(e),null;case 19:if(z(Aa),i=e.memoizedState,i===null)return fa(e),null;if(t=(e.flags&128)!==0,l=i.rendering,l===null)if(t)li(i,!1);else{if(pa!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(l=gl(a),l!==null){for(e.flags|=128,li(i,!1),a=l.updateQueue,e.updateQueue=a,bl(e,a),e.subtreeFlags=0,a=n,n=e.child;n!==null;)xo(n,a),n=n.sibling;return R(Aa,Aa.current&1|2),e.child}a=a.sibling}i.tail!==null&&ve()>Sl&&(e.flags|=128,t=!0,li(i,!1),e.lanes=4194304)}else{if(!t)if(a=gl(l),a!==null){if(e.flags|=128,t=!0,a=a.updateQueue,e.updateQueue=a,bl(e,a),li(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!na)return fa(e),null}else 2*ve()-i.renderingStartTime>Sl&&n!==536870912&&(e.flags|=128,t=!0,li(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(a=i.last,a!==null?a.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ve(),e.sibling=null,a=Aa.current,R(Aa,t?a&1|2:a&1),e):(fa(e),null);case 22:case 23:return Ve(e),Qu(),t=e.memoizedState!==null,a!==null?a.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(n&536870912)!==0&&(e.flags&128)===0&&(fa(e),e.subtreeFlags&6&&(e.flags|=8192)):fa(e),n=e.updateQueue,n!==null&&bl(e,n.retryQueue),n=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(e.flags|=2048),a!==null&&z(zn),null;case 24:return n=null,a!==null&&(n=a.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),He(ja),fa(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function pk(a,e){switch(Ru(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return He(ja),Pe(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return Di(e),null;case 13:if(Ve(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Yt()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return z(Aa),null;case 4:return Pe(),null;case 10:return He(e.type),null;case 22:case 23:return Ve(e),Qu(),a!==null&&z(zn),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return He(ja),null;case 25:return null;default:return null}}function Jd(a,e){switch(Ru(e),e.tag){case 3:He(ja),Pe();break;case 26:case 27:case 5:Di(e);break;case 4:Pe();break;case 13:Ve(e);break;case 19:z(Aa);break;case 10:He(e.type);break;case 22:case 23:Ve(e),Qu(),a!==null&&z(zn);break;case 24:He(ja)}}function ui(a,e){try{var n=e.updateQueue,t=n!==null?n.lastEffect:null;if(t!==null){var i=t.next;n=i;do{if((n.tag&a)===a){t=void 0;var l=n.create,u=n.inst;t=l(),u.destroy=t}n=n.next}while(n!==i)}}catch(r){oa(e,e.return,r)}}function un(a,e,n){try{var t=e.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&a)===a){var u=t.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,i=e;var d=n,p=r;try{p()}catch(T){oa(i,d,T)}}}t=t.next}while(t!==l)}}catch(T){oa(e,e.return,T)}}function Fd(a){var e=a.updateQueue;if(e!==null){var n=a.stateNode;try{Bo(e,n)}catch(t){oa(a,a.return,t)}}}function Wd(a,e,n){n.props=Kn(a.type,a.memoizedProps),n.state=a.memoizedState;try{n.componentWillUnmount()}catch(t){oa(a,e,t)}}function ri(a,e){try{var n=a.ref;if(n!==null){switch(a.tag){case 26:case 27:case 5:var t=a.stateNode;break;case 30:t=a.stateNode;break;default:t=a.stateNode}typeof n=="function"?a.refCleanup=n(t):n.current=t}}catch(i){oa(a,e,i)}}function Te(a,e){var n=a.ref,t=a.refCleanup;if(n!==null)if(typeof t=="function")try{t()}catch(i){oa(a,e,i)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){oa(a,e,i)}else n.current=null}function Id(a){var e=a.type,n=a.memoizedProps,t=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&t.focus();break a;case"img":n.src?t.src=n.src:n.srcSet&&(t.srcset=n.srcSet)}}catch(i){oa(a,a.return,i)}}function yr(a,e,n){try{var t=a.stateNode;Hk(t,a.type,n,e),t[Ga]=e}catch(i){oa(a,a.return,i)}}function $d(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&kn(a.type)||a.tag===4}function vr(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||$d(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&kn(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Sr(a,e,n){var t=a.tag;if(t===5||t===6)a=a.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(t!==4&&(t===27&&kn(a.type)&&(n=a.stateNode,e=null),a=a.child,a!==null))for(Sr(a,e,n),a=a.sibling;a!==null;)Sr(a,e,n),a=a.sibling}function yl(a,e,n){var t=a.tag;if(t===5||t===6)a=a.stateNode,e?n.insertBefore(a,e):n.appendChild(a);else if(t!==4&&(t===27&&kn(a.type)&&(n=a.stateNode),a=a.child,a!==null))for(yl(a,e,n),a=a.sibling;a!==null;)yl(a,e,n),a=a.sibling}function am(a){var e=a.stateNode,n=a.memoizedProps;try{for(var t=a.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Na(e,t,n),e[Ha]=a,e[Ga]=n}catch(l){oa(a,a.return,l)}}var Ye=!1,Sa=!1,xr=!1,em=typeof WeakSet=="function"?WeakSet:Set,Ca=null;function bk(a,e){if(a=a.containerInfo,Xr=Bl,a=co(a),vu(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else a:{n=(n=a.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break a}var u=0,r=-1,d=-1,p=0,T=0,_=a,b=null;e:for(;;){for(var v;_!==n||i!==0&&_.nodeType!==3||(r=u+i),_!==l||t!==0&&_.nodeType!==3||(d=u+t),_.nodeType===3&&(u+=_.nodeValue.length),(v=_.firstChild)!==null;)b=_,_=v;for(;;){if(_===a)break e;if(b===n&&++p===i&&(r=u),b===l&&++T===t&&(d=u),(v=_.nextSibling)!==null)break;_=b,b=_.parentNode}_=v}n=r===-1||d===-1?null:{start:r,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zr={focusedElem:a,selectionRange:n},Bl=!1,Ca=e;Ca!==null;)if(e=Ca,a=e.child,(e.subtreeFlags&1024)!==0&&a!==null)a.return=e,Ca=a;else for(;Ca!==null;){switch(e=Ca,l=e.alternate,a=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((a&1024)!==0&&l!==null){a=void 0,n=e,i=l.memoizedProps,l=l.memoizedState,t=n.stateNode;try{var Y=Kn(n.type,i,n.elementType===n.type);a=t.getSnapshotBeforeUpdate(Y,l),t.__reactInternalSnapshotBeforeUpdate=a}catch(V){oa(n,n.return,V)}}break;case 3:if((a&1024)!==0){if(a=e.stateNode.containerInfo,n=a.nodeType,n===9)Fr(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Fr(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(o(163))}if(a=e.sibling,a!==null){a.return=e.return,Ca=a;break}Ca=e.return}}function nm(a,e,n){var t=n.flags;switch(n.tag){case 0:case 11:case 15:rn(a,n),t&4&&ui(5,n);break;case 1:if(rn(a,n),t&4)if(a=n.stateNode,e===null)try{a.componentDidMount()}catch(u){oa(n,n.return,u)}else{var i=Kn(n.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(i,e,a.__reactInternalSnapshotBeforeUpdate)}catch(u){oa(n,n.return,u)}}t&64&&Fd(n),t&512&&ri(n,n.return);break;case 3:if(rn(a,n),t&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Bo(a,e)}catch(u){oa(n,n.return,u)}}break;case 27:e===null&&t&4&&am(n);case 26:case 5:rn(a,n),e===null&&t&4&&Id(n),t&512&&ri(n,n.return);break;case 12:rn(a,n);break;case 13:rn(a,n),t&4&&lm(a,n),t&64&&(a=n.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(n=_k.bind(null,n),Qk(a,n))));break;case 22:if(t=n.memoizedState!==null||Ye,!t){e=e!==null&&e.memoizedState!==null||Sa,i=Ye;var l=Sa;Ye=t,(Sa=e)&&!l?sn(a,n,(n.subtreeFlags&8772)!==0):rn(a,n),Ye=i,Sa=l}break;case 30:break;default:rn(a,n)}}function tm(a){var e=a.alternate;e!==null&&(a.alternate=null,tm(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&eu(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var ga=null,Qa=!1;function we(a,e,n){for(n=n.child;n!==null;)im(a,e,n),n=n.sibling}function im(a,e,n){if(Wa&&typeof Wa.onCommitFiberUnmount=="function")try{Wa.onCommitFiberUnmount(Ct,n)}catch{}switch(n.tag){case 26:Sa||Te(n,e),we(a,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Sa||Te(n,e);var t=ga,i=Qa;kn(n.type)&&(ga=n.stateNode,Qa=!1),we(a,e,n),hi(n.stateNode),ga=t,Qa=i;break;case 5:Sa||Te(n,e);case 6:if(t=ga,i=Qa,ga=null,we(a,e,n),ga=t,Qa=i,ga!==null)if(Qa)try{(ga.nodeType===9?ga.body:ga.nodeName==="HTML"?ga.ownerDocument.body:ga).removeChild(n.stateNode)}catch(l){oa(n,e,l)}else try{ga.removeChild(n.stateNode)}catch(l){oa(n,e,l)}break;case 18:ga!==null&&(Qa?(a=ga,Xm(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.stateNode),ji(a)):Xm(ga,n.stateNode));break;case 4:t=ga,i=Qa,ga=n.stateNode.containerInfo,Qa=!0,we(a,e,n),ga=t,Qa=i;break;case 0:case 11:case 14:case 15:Sa||un(2,n,e),Sa||un(4,n,e),we(a,e,n);break;case 1:Sa||(Te(n,e),t=n.stateNode,typeof t.componentWillUnmount=="function"&&Wd(n,e,t)),we(a,e,n);break;case 21:we(a,e,n);break;case 22:Sa=(t=Sa)||n.memoizedState!==null,we(a,e,n),Sa=t;break;default:we(a,e,n)}}function lm(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{ji(a)}catch(n){oa(e,e.return,n)}}function yk(a){switch(a.tag){case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new em),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new em),e;default:throw Error(o(435,a.tag))}}function Tr(a,e){var n=yk(a);e.forEach(function(t){var i=Ck.bind(null,a,t);n.has(t)||(n.add(t),t.then(i,i))})}function ee(a,e){var n=e.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t],l=a,u=e,r=u;a:for(;r!==null;){switch(r.tag){case 27:if(kn(r.type)){ga=r.stateNode,Qa=!1;break a}break;case 5:ga=r.stateNode,Qa=!1;break a;case 3:case 4:ga=r.stateNode.containerInfo,Qa=!0;break a}r=r.return}if(ga===null)throw Error(o(160));im(l,u,i),ga=null,Qa=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)um(e,a),e=e.sibling}var pe=null;function um(a,e){var n=a.alternate,t=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ee(e,a),ne(a),t&4&&(un(3,a,a.return),ui(3,a),un(5,a,a.return));break;case 1:ee(e,a),ne(a),t&512&&(Sa||n===null||Te(n,n.return)),t&64&&Ye&&(a=a.updateQueue,a!==null&&(t=a.callbacks,t!==null&&(n=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:var i=pe;if(ee(e,a),ne(a),t&512&&(Sa||n===null||Te(n,n.return)),t&4){var l=n!==null?n.memoizedState:null;if(t=a.memoizedState,n===null)if(t===null)if(a.stateNode===null){a:{t=a.type,n=a.memoizedProps,i=i.ownerDocument||i;e:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Rt]||l[Ha]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),Na(l,t,n),l[Ha]=a,Ma(l),t=l;break a;case"link":var u=ac("link","href",i).get(t+(n.href||""));if(u){for(var r=0;r<u.length;r++)if(l=u[r],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(r,1);break e}}l=i.createElement(t),Na(l,t,n),i.head.appendChild(l);break;case"meta":if(u=ac("meta","content",i).get(t+(n.content||""))){for(r=0;r<u.length;r++)if(l=u[r],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(r,1);break e}}l=i.createElement(t),Na(l,t,n),i.head.appendChild(l);break;default:throw Error(o(468,t))}l[Ha]=a,Ma(l),t=l}a.stateNode=t}else ec(i,a.type,a.stateNode);else a.stateNode=$m(i,t,a.memoizedProps);else l!==t?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,t===null?ec(i,a.type,a.stateNode):$m(i,t,a.memoizedProps)):t===null&&a.stateNode!==null&&yr(a,a.memoizedProps,n.memoizedProps)}break;case 27:ee(e,a),ne(a),t&512&&(Sa||n===null||Te(n,n.return)),n!==null&&t&4&&yr(a,a.memoizedProps,n.memoizedProps);break;case 5:if(ee(e,a),ne(a),t&512&&(Sa||n===null||Te(n,n.return)),a.flags&32){i=a.stateNode;try{Pn(i,"")}catch(v){oa(a,a.return,v)}}t&4&&a.stateNode!=null&&(i=a.memoizedProps,yr(a,i,n!==null?n.memoizedProps:i)),t&1024&&(xr=!0);break;case 6:if(ee(e,a),ne(a),t&4){if(a.stateNode===null)throw Error(o(162));t=a.memoizedProps,n=a.stateNode;try{n.nodeValue=t}catch(v){oa(a,a.return,v)}}break;case 3:if(zl=null,i=pe,pe=Nl(e.containerInfo),ee(e,a),pe=i,ne(a),t&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(e.containerInfo)}catch(v){oa(a,a.return,v)}xr&&(xr=!1,rm(a));break;case 4:t=pe,pe=Nl(a.stateNode.containerInfo),ee(e,a),ne(a),pe=t;break;case 12:ee(e,a),ne(a);break;case 13:ee(e,a),ne(a),a.child.flags&8192&&a.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dr=ve()),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,Tr(a,t)));break;case 22:i=a.memoizedState!==null;var d=n!==null&&n.memoizedState!==null,p=Ye,T=Sa;if(Ye=p||i,Sa=T||d,ee(e,a),Sa=T,Ye=p,ne(a),t&8192)a:for(e=a.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||d||Ye||Sa||Bn(a)),n=null,e=a;;){if(e.tag===5||e.tag===26){if(n===null){d=n=e;try{if(l=d.stateNode,i)u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=d.stateNode;var _=d.memoizedProps.style,b=_!=null&&_.hasOwnProperty("display")?_.display:null;r.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(v){oa(d,d.return,v)}}}else if(e.tag===6){if(n===null){d=e;try{d.stateNode.nodeValue=i?"":d.memoizedProps}catch(v){oa(d,d.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===a)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break a;for(;e.sibling===null;){if(e.return===null||e.return===a)break a;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=a.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Tr(a,n))));break;case 19:ee(e,a),ne(a),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,Tr(a,t)));break;case 30:break;case 21:break;default:ee(e,a),ne(a)}}function ne(a){var e=a.flags;if(e&2){try{for(var n,t=a.return;t!==null;){if($d(t)){n=t;break}t=t.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,l=vr(a);yl(a,l,i);break;case 5:var u=n.stateNode;n.flags&32&&(Pn(u,""),n.flags&=-33);var r=vr(a);yl(a,r,u);break;case 3:case 4:var d=n.stateNode.containerInfo,p=vr(a);Sr(a,p,d);break;default:throw Error(o(161))}}catch(T){oa(a,a.return,T)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function rm(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;rm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),a=a.sibling}}function rn(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)nm(a,e.alternate,e),e=e.sibling}function Bn(a){for(a=a.child;a!==null;){var e=a;switch(e.tag){case 0:case 11:case 14:case 15:un(4,e,e.return),Bn(e);break;case 1:Te(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Wd(e,e.return,n),Bn(e);break;case 27:hi(e.stateNode);case 26:case 5:Te(e,e.return),Bn(e);break;case 22:e.memoizedState===null&&Bn(e);break;case 30:Bn(e);break;default:Bn(e)}a=a.sibling}}function sn(a,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,i=a,l=e,u=l.flags;switch(l.tag){case 0:case 11:case 15:sn(i,l,n),ui(4,l);break;case 1:if(sn(i,l,n),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(p){oa(t,t.return,p)}if(t=l,i=t.updateQueue,i!==null){var r=t.stateNode;try{var d=i.shared.hiddenCallbacks;if(d!==null)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)Ko(d[i],r)}catch(p){oa(t,t.return,p)}}n&&u&64&&Fd(l),ri(l,l.return);break;case 27:am(l);case 26:case 5:sn(i,l,n),n&&t===null&&u&4&&Id(l),ri(l,l.return);break;case 12:sn(i,l,n);break;case 13:sn(i,l,n),n&&u&4&&lm(i,l);break;case 22:l.memoizedState===null&&sn(i,l,n),ri(l,l.return);break;case 30:break;default:sn(i,l,n)}e=e.sibling}}function jr(a,e){var n=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(a!=null&&a.refCount++,n!=null&&Xt(n))}function Ar(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Xt(a))}function je(a,e,n,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sm(a,e,n,t),e=e.sibling}function sm(a,e,n,t){var i=e.flags;switch(e.tag){case 0:case 11:case 15:je(a,e,n,t),i&2048&&ui(9,e);break;case 1:je(a,e,n,t);break;case 3:je(a,e,n,t),i&2048&&(a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Xt(a)));break;case 12:if(i&2048){je(a,e,n,t),a=e.stateNode;try{var l=e.memoizedProps,u=l.id,r=l.onPostCommit;typeof r=="function"&&r(u,e.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(d){oa(e,e.return,d)}}else je(a,e,n,t);break;case 13:je(a,e,n,t);break;case 23:break;case 22:l=e.stateNode,u=e.alternate,e.memoizedState!==null?l._visibility&2?je(a,e,n,t):si(a,e):l._visibility&2?je(a,e,n,t):(l._visibility|=2,gt(a,e,n,t,(e.subtreeFlags&10256)!==0)),i&2048&&jr(u,e);break;case 24:je(a,e,n,t),i&2048&&Ar(e.alternate,e);break;default:je(a,e,n,t)}}function gt(a,e,n,t,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=a,u=e,r=n,d=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:gt(l,u,r,d,i),ui(8,u);break;case 23:break;case 22:var T=u.stateNode;u.memoizedState!==null?T._visibility&2?gt(l,u,r,d,i):si(l,u):(T._visibility|=2,gt(l,u,r,d,i)),i&&p&2048&&jr(u.alternate,u);break;case 24:gt(l,u,r,d,i),i&&p&2048&&Ar(u.alternate,u);break;default:gt(l,u,r,d,i)}e=e.sibling}}function si(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=a,t=e,i=t.flags;switch(t.tag){case 22:si(n,t),i&2048&&jr(t.alternate,t);break;case 24:si(n,t),i&2048&&Ar(t.alternate,t);break;default:si(n,t)}e=e.sibling}}var oi=8192;function kt(a){if(a.subtreeFlags&oi)for(a=a.child;a!==null;)om(a),a=a.sibling}function om(a){switch(a.tag){case 26:kt(a),a.flags&oi&&a.memoizedState!==null&&lf(pe,a.memoizedState,a.memoizedProps);break;case 5:kt(a);break;case 3:case 4:var e=pe;pe=Nl(a.stateNode.containerInfo),kt(a),pe=e;break;case 22:a.memoizedState===null&&(e=a.alternate,e!==null&&e.memoizedState!==null?(e=oi,oi=16777216,kt(a),oi=e):kt(a));break;default:kt(a)}}function dm(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function di(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var t=e[n];Ca=t,cm(t,a)}dm(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)mm(a),a=a.sibling}function mm(a){switch(a.tag){case 0:case 11:case 15:di(a),a.flags&2048&&un(9,a,a.return);break;case 3:di(a);break;case 12:di(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,vl(a)):di(a);break;default:di(a)}}function vl(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var t=e[n];Ca=t,cm(t,a)}dm(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:un(8,e,e.return),vl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,vl(e));break;default:vl(e)}a=a.sibling}}function cm(a,e){for(;Ca!==null;){var n=Ca;switch(n.tag){case 0:case 11:case 15:un(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var t=n.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Xt(n.memoizedState.cache)}if(t=n.child,t!==null)t.return=n,Ca=t;else a:for(n=a;Ca!==null;){t=Ca;var i=t.sibling,l=t.return;if(tm(t),t===n){Ca=null;break a}if(i!==null){i.return=l,Ca=i;break a}Ca=l}}}var vk={getCacheForType:function(a){var e=La(ja),n=e.data.get(a);return n===void 0&&(n=a(),e.data.set(a,n)),n}},Sk=typeof WeakMap=="function"?WeakMap:Map,ta=0,ma=null,J=null,W=0,ia=0,te=null,on=!1,ft=!1,Mr=!1,Qe=0,pa=0,dn=0,Hn=0,_r=0,ge=0,ht=0,mi=null,Xa=null,Cr=!1,Dr=0,Sl=1/0,xl=null,mn=null,Ra=0,cn=null,pt=null,bt=0,Er=0,Rr=null,gm=null,ci=0,Nr=null;function ie(){if((ta&2)!==0&&W!==0)return W&-W;if(j.T!==null){var a=lt;return a!==0?a:Lr()}return Cs()}function km(){ge===0&&(ge=(W&536870912)===0||na?js():536870912);var a=ce.current;return a!==null&&(a.flags|=32),ge}function le(a,e,n){(a===ma&&(ia===2||ia===9)||a.cancelPendingCommit!==null)&&(yt(a,0),gn(a,W,ge,!1)),Et(a,n),((ta&2)===0||a!==ma)&&(a===ma&&((ta&2)===0&&(Hn|=n),pa===4&&gn(a,W,ge,!1)),Ae(a))}function fm(a,e,n){if((ta&6)!==0)throw Error(o(327));var t=!n&&(e&124)===0&&(e&a.expiredLanes)===0||Dt(a,e),i=t?jk(a,e):Ur(a,e,!0),l=t;do{if(i===0){ft&&!t&&gn(a,e,0,!1);break}else{if(n=a.current.alternate,l&&!xk(n)){i=Ur(a,e,!1),l=!1;continue}if(i===2){if(l=e,a.errorRecoveryDisabledLanes&l)var u=0;else u=a.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;a:{var r=a;i=mi;var d=r.current.memoizedState.isDehydrated;if(d&&(yt(r,u).flags|=256),u=Ur(r,u,!1),u!==2){if(Mr&&!d){r.errorRecoveryDisabledLanes|=l,Hn|=l,i=4;break a}l=Xa,Xa=i,l!==null&&(Xa===null?Xa=l:Xa.push.apply(Xa,l))}i=u}if(l=!1,i!==2)continue}}if(i===1){yt(a,0),gn(a,e,0,!0);break}a:{switch(t=a,l=i,l){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:gn(t,e,ge,!on);break a;case 2:Xa=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=Dr+300-ve(),10<i)){if(gn(t,e,ge,!on),Oi(t,0,!0)!==0)break a;t.timeoutHandle=wm(hm.bind(null,t,n,Xa,xl,Cr,e,ge,Hn,ht,on,l,2,-0,0),i);break a}hm(t,n,Xa,xl,Cr,e,ge,Hn,ht,on,l,0,-0,0)}}break}while(!0);Ae(a)}function hm(a,e,n,t,i,l,u,r,d,p,T,_,b,v){if(a.timeoutHandle=-1,_=e.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(yi={stylesheets:null,count:0,unsuspend:tf},om(e),_=uf(),_!==null)){a.cancelPendingCommit=_(Tm.bind(null,a,e,l,n,t,i,u,r,d,T,1,b,v)),gn(a,l,u,!p);return}Tm(a,e,l,n,t,i,u,r,d)}function xk(a){for(var e=a;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var t=0;t<n.length;t++){var i=n[t],l=i.getSnapshot;i=i.value;try{if(!$a(l(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gn(a,e,n,t){e&=~_r,e&=~Hn,a.suspendedLanes|=e,a.pingedLanes&=~e,t&&(a.warmLanes|=e),t=a.expirationTimes;for(var i=e;0<i;){var l=31-Ia(i),u=1<<l;t[l]=-1,i&=~u}n!==0&&Ms(a,n,e)}function Tl(){return(ta&6)===0?(gi(0),!1):!0}function Or(){if(J!==null){if(ia===0)var a=J.return;else a=J,Be=Nn=null,Fu(a),mt=null,ti=0,a=J;for(;a!==null;)Jd(a.alternate,a),a=a.return;J=null}}function yt(a,e){var n=a.timeoutHandle;n!==-1&&(a.timeoutHandle=-1,Vk(n)),n=a.cancelPendingCommit,n!==null&&(a.cancelPendingCommit=null,n()),Or(),ma=a,J=n=ze(a.current,null),W=e,ia=0,te=null,on=!1,ft=Dt(a,e),Mr=!1,ht=ge=_r=Hn=dn=pa=0,Xa=mi=null,Cr=!1,(e&8)!==0&&(e|=e&32);var t=a.entangledLanes;if(t!==0)for(a=a.entanglements,t&=e;0<t;){var i=31-Ia(t),l=1<<i;e|=a[i],t&=~l}return Qe=e,Qi(),n}function pm(a,e){Z=null,j.H=dl,e===Pt||e===al?(e=zo(),ia=3):e===Ro?(e=zo(),ia=4):ia=e===Ud?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,te=e,J===null&&(pa=1,fl(a,se(e,a.current)))}function bm(){var a=j.H;return j.H=dl,a===null?dl:a}function ym(){var a=j.A;return j.A=vk,a}function zr(){pa=4,on||(W&4194048)!==W&&ce.current!==null||(ft=!0),(dn&134217727)===0&&(Hn&134217727)===0||ma===null||gn(ma,W,ge,!1)}function Ur(a,e,n){var t=ta;ta|=2;var i=bm(),l=ym();(ma!==a||W!==e)&&(xl=null,yt(a,e)),e=!1;var u=pa;a:do try{if(ia!==0&&J!==null){var r=J,d=te;switch(ia){case 8:Or(),u=6;break a;case 3:case 2:case 9:case 6:ce.current===null&&(e=!0);var p=ia;if(ia=0,te=null,vt(a,r,d,p),n&&ft){u=0;break a}break;default:p=ia,ia=0,te=null,vt(a,r,d,p)}}Tk(),u=pa;break}catch(T){pm(a,T)}while(!0);return e&&a.shellSuspendCounter++,Be=Nn=null,ta=t,j.H=i,j.A=l,J===null&&(ma=null,W=0,Qi()),u}function Tk(){for(;J!==null;)vm(J)}function jk(a,e){var n=ta;ta|=2;var t=bm(),i=ym();ma!==a||W!==e?(xl=null,Sl=ve()+500,yt(a,e)):ft=Dt(a,e);a:do try{if(ia!==0&&J!==null){e=J;var l=te;e:switch(ia){case 1:ia=0,te=null,vt(a,e,l,1);break;case 2:case 9:if(No(l)){ia=0,te=null,Sm(e);break}e=function(){ia!==2&&ia!==9||ma!==a||(ia=7),Ae(a)},l.then(e,e);break a;case 3:ia=7;break a;case 4:ia=5;break a;case 7:No(l)?(ia=0,te=null,Sm(e)):(ia=0,te=null,vt(a,e,l,7));break;case 5:var u=null;switch(J.tag){case 26:u=J.memoizedState;case 5:case 27:var r=J;if(!u||nc(u)){ia=0,te=null;var d=r.sibling;if(d!==null)J=d;else{var p=r.return;p!==null?(J=p,jl(p)):J=null}break e}}ia=0,te=null,vt(a,e,l,5);break;case 6:ia=0,te=null,vt(a,e,l,6);break;case 8:Or(),pa=6;break a;default:throw Error(o(462))}}Ak();break}catch(T){pm(a,T)}while(!0);return Be=Nn=null,j.H=t,j.A=i,ta=n,J!==null?0:(ma=null,W=0,Qi(),pa)}function Ak(){for(;J!==null&&!Zc();)vm(J)}function vm(a){var e=Zd(a.alternate,a,Qe);a.memoizedProps=a.pendingProps,e===null?jl(a):J=e}function Sm(a){var e=a,n=e.alternate;switch(e.tag){case 15:case 0:e=qd(n,e,e.pendingProps,e.type,void 0,W);break;case 11:e=qd(n,e,e.pendingProps,e.type.render,e.ref,W);break;case 5:Fu(e);default:Jd(n,e),e=J=xo(e,Qe),e=Zd(n,e,Qe)}a.memoizedProps=a.pendingProps,e===null?jl(a):J=e}function vt(a,e,n,t){Be=Nn=null,Fu(e),mt=null,ti=0;var i=e.return;try{if(kk(a,i,e,n,W)){pa=1,fl(a,se(n,a.current)),J=null;return}}catch(l){if(i!==null)throw J=i,l;pa=1,fl(a,se(n,a.current)),J=null;return}e.flags&32768?(na||t===1?a=!0:ft||(W&536870912)!==0?a=!1:(on=a=!0,(t===2||t===9||t===3||t===6)&&(t=ce.current,t!==null&&t.tag===13&&(t.flags|=16384))),xm(e,a)):jl(e)}function jl(a){var e=a;do{if((e.flags&32768)!==0){xm(e,on);return}a=e.return;var n=hk(e.alternate,e,Qe);if(n!==null){J=n;return}if(e=e.sibling,e!==null){J=e;return}J=e=a}while(e!==null);pa===0&&(pa=5)}function xm(a,e){do{var n=pk(a.alternate,a);if(n!==null){n.flags&=32767,J=n;return}if(n=a.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(a=a.sibling,a!==null)){J=a;return}J=a=n}while(a!==null);pa=6,J=null}function Tm(a,e,n,t,i,l,u,r,d){a.cancelPendingCommit=null;do Al();while(Ra!==0);if((ta&6)!==0)throw Error(o(327));if(e!==null){if(e===a.current)throw Error(o(177));if(l=e.lanes|e.childLanes,l|=Au,tg(a,n,l,u,r,d),a===ma&&(J=ma=null,W=0),pt=e,cn=a,bt=n,Er=l,Rr=i,gm=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,Dk(Ei,function(){return Cm(),null})):(a.callbackNode=null,a.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=j.T,j.T=null,i=N.p,N.p=2,u=ta,ta|=4;try{bk(a,e,n)}finally{ta=u,N.p=i,j.T=t}}Ra=1,jm(),Am(),Mm()}}function jm(){if(Ra===1){Ra=0;var a=cn,e=pt,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var t=N.p;N.p=2;var i=ta;ta|=4;try{um(e,a);var l=Zr,u=co(a.containerInfo),r=l.focusedElem,d=l.selectionRange;if(u!==r&&r&&r.ownerDocument&&mo(r.ownerDocument.documentElement,r)){if(d!==null&&vu(r)){var p=d.start,T=d.end;if(T===void 0&&(T=p),"selectionStart"in r)r.selectionStart=p,r.selectionEnd=Math.min(T,r.value.length);else{var _=r.ownerDocument||document,b=_&&_.defaultView||window;if(b.getSelection){var v=b.getSelection(),Y=r.textContent.length,V=Math.min(d.start,Y),ra=d.end===void 0?V:Math.min(d.end,Y);!v.extend&&V>ra&&(u=ra,ra=V,V=u);var k=oo(r,V),g=oo(r,ra);if(k&&g&&(v.rangeCount!==1||v.anchorNode!==k.node||v.anchorOffset!==k.offset||v.focusNode!==g.node||v.focusOffset!==g.offset)){var h=_.createRange();h.setStart(k.node,k.offset),v.removeAllRanges(),V>ra?(v.addRange(h),v.extend(g.node,g.offset)):(h.setEnd(g.node,g.offset),v.addRange(h))}}}}for(_=[],v=r;v=v.parentNode;)v.nodeType===1&&_.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<_.length;r++){var A=_[r];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Bl=!!Xr,Zr=Xr=null}finally{ta=i,N.p=t,j.T=n}}a.current=e,Ra=2}}function Am(){if(Ra===2){Ra=0;var a=cn,e=pt,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var t=N.p;N.p=2;var i=ta;ta|=4;try{nm(a,e.alternate,e)}finally{ta=i,N.p=t,j.T=n}}Ra=3}}function Mm(){if(Ra===4||Ra===3){Ra=0,Pc();var a=cn,e=pt,n=bt,t=gm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ra=5:(Ra=0,pt=cn=null,_m(a,a.pendingLanes));var i=a.pendingLanes;if(i===0&&(mn=null),$l(n),e=e.stateNode,Wa&&typeof Wa.onCommitFiberRoot=="function")try{Wa.onCommitFiberRoot(Ct,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=j.T,i=N.p,N.p=2,j.T=null;try{for(var l=a.onRecoverableError,u=0;u<t.length;u++){var r=t[u];l(r.value,{componentStack:r.stack})}}finally{j.T=e,N.p=i}}(bt&3)!==0&&Al(),Ae(a),i=a.pendingLanes,(n&4194090)!==0&&(i&42)!==0?a===Nr?ci++:(ci=0,Nr=a):ci=0,gi(0)}}function _m(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,Xt(e)))}function Al(a){return jm(),Am(),Mm(),Cm()}function Cm(){if(Ra!==5)return!1;var a=cn,e=Er;Er=0;var n=$l(bt),t=j.T,i=N.p;try{N.p=32>n?32:n,j.T=null,n=Rr,Rr=null;var l=cn,u=bt;if(Ra=0,pt=cn=null,bt=0,(ta&6)!==0)throw Error(o(331));var r=ta;if(ta|=4,mm(l.current),sm(l,l.current,u,n),ta=r,gi(0,!1),Wa&&typeof Wa.onPostCommitFiberRoot=="function")try{Wa.onPostCommitFiberRoot(Ct,l)}catch{}return!0}finally{N.p=i,j.T=t,_m(a,e)}}function Dm(a,e,n){e=se(n,e),e=dr(a.stateNode,e,2),a=en(a,e,2),a!==null&&(Et(a,2),Ae(a))}function oa(a,e,n){if(a.tag===3)Dm(a,a,n);else for(;e!==null;){if(e.tag===3){Dm(e,a,n);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(mn===null||!mn.has(t))){a=se(n,a),n=Od(2),t=en(e,n,2),t!==null&&(zd(n,t,e,a),Et(t,2),Ae(t));break}}e=e.return}}function Kr(a,e,n){var t=a.pingCache;if(t===null){t=a.pingCache=new Sk;var i=new Set;t.set(e,i)}else i=t.get(e),i===void 0&&(i=new Set,t.set(e,i));i.has(n)||(Mr=!0,i.add(n),a=Mk.bind(null,a,e,n),e.then(a,a))}function Mk(a,e,n){var t=a.pingCache;t!==null&&t.delete(e),a.pingedLanes|=a.suspendedLanes&n,a.warmLanes&=~n,ma===a&&(W&n)===n&&(pa===4||pa===3&&(W&62914560)===W&&300>ve()-Dr?(ta&2)===0&&yt(a,0):_r|=n,ht===W&&(ht=0)),Ae(a)}function Em(a,e){e===0&&(e=As()),a=et(a,e),a!==null&&(Et(a,e),Ae(a))}function _k(a){var e=a.memoizedState,n=0;e!==null&&(n=e.retryLane),Em(a,n)}function Ck(a,e){var n=0;switch(a.tag){case 13:var t=a.stateNode,i=a.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=a.stateNode;break;case 22:t=a.stateNode._retryCache;break;default:throw Error(o(314))}t!==null&&t.delete(e),Em(a,n)}function Dk(a,e){return Jl(a,e)}var Ml=null,St=null,Br=!1,_l=!1,Hr=!1,Ln=0;function Ae(a){a!==St&&a.next===null&&(St===null?Ml=St=a:St=St.next=a),_l=!0,Br||(Br=!0,Rk())}function gi(a,e){if(!Hr&&_l){Hr=!0;do for(var n=!1,t=Ml;t!==null;){if(a!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var u=t.suspendedLanes,r=t.pingedLanes;l=(1<<31-Ia(42|a)+1)-1,l&=i&~(u&~r),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,zm(t,l))}else l=W,l=Oi(t,t===ma?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||Dt(t,l)||(n=!0,zm(t,l));t=t.next}while(n);Hr=!1}}function Ek(){Rm()}function Rm(){_l=Br=!1;var a=0;Ln!==0&&(Lk()&&(a=Ln),Ln=0);for(var e=ve(),n=null,t=Ml;t!==null;){var i=t.next,l=Nm(t,e);l===0?(t.next=null,n===null?Ml=i:n.next=i,i===null&&(St=n)):(n=t,(a!==0||(l&3)!==0)&&(_l=!0)),t=i}gi(a)}function Nm(a,e){for(var n=a.suspendedLanes,t=a.pingedLanes,i=a.expirationTimes,l=a.pendingLanes&-62914561;0<l;){var u=31-Ia(l),r=1<<u,d=i[u];d===-1?((r&n)===0||(r&t)!==0)&&(i[u]=ng(r,e)):d<=e&&(a.expiredLanes|=r),l&=~r}if(e=ma,n=W,n=Oi(a,a===e?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),t=a.callbackNode,n===0||a===e&&(ia===2||ia===9)||a.cancelPendingCommit!==null)return t!==null&&t!==null&&Fl(t),a.callbackNode=null,a.callbackPriority=0;if((n&3)===0||Dt(a,n)){if(e=n&-n,e===a.callbackPriority)return e;switch(t!==null&&Fl(t),$l(n)){case 2:case 8:n=xs;break;case 32:n=Ei;break;case 268435456:n=Ts;break;default:n=Ei}return t=Om.bind(null,a),n=Jl(n,t),a.callbackPriority=e,a.callbackNode=n,e}return t!==null&&t!==null&&Fl(t),a.callbackPriority=2,a.callbackNode=null,2}function Om(a,e){if(Ra!==0&&Ra!==5)return a.callbackNode=null,a.callbackPriority=0,null;var n=a.callbackNode;if(Al()&&a.callbackNode!==n)return null;var t=W;return t=Oi(a,a===ma?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),t===0?null:(fm(a,t,e),Nm(a,ve()),a.callbackNode!=null&&a.callbackNode===n?Om.bind(null,a):null)}function zm(a,e){if(Al())return null;fm(a,e,!0)}function Rk(){qk(function(){(ta&6)!==0?Jl(Ss,Ek):Rm()})}function Lr(){return Ln===0&&(Ln=js()),Ln}function Um(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Hi(""+a)}function Km(a,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,a.id&&n.setAttribute("form",a.id),e.parentNode.insertBefore(n,e),a=new FormData(a),n.parentNode.removeChild(n),a}function Nk(a,e,n,t,i){if(e==="submit"&&n&&n.stateNode===i){var l=Um((i[Ga]||null).action),u=t.submitter;u&&(e=(e=u[Ga]||null)?Um(e.formAction):u.getAttribute("formAction"),e!==null&&(l=e,u=null));var r=new Gi("action","action",null,t,i);a.push({event:r,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Ln!==0){var d=u?Km(i,u):new FormData(i);lr(n,{pending:!0,data:d,method:i.method,action:l},null,d)}}else typeof l=="function"&&(r.preventDefault(),d=u?Km(i,u):new FormData(i),lr(n,{pending:!0,data:d,method:i.method,action:l},l,d))},currentTarget:i}]})}}for(var Vr=0;Vr<ju.length;Vr++){var qr=ju[Vr],Ok=qr.toLowerCase(),zk=qr[0].toUpperCase()+qr.slice(1);he(Ok,"on"+zk)}he(fo,"onAnimationEnd"),he(ho,"onAnimationIteration"),he(po,"onAnimationStart"),he("dblclick","onDoubleClick"),he("focusin","onFocus"),he("focusout","onBlur"),he(Wg,"onTransitionRun"),he(Ig,"onTransitionStart"),he($g,"onTransitionCancel"),he(bo,"onTransitionEnd"),Qn("onMouseEnter",["mouseout","mouseover"]),Qn("onMouseLeave",["mouseout","mouseover"]),Qn("onPointerEnter",["pointerout","pointerover"]),Qn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uk=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));function Bm(a,e){e=(e&4)!==0;for(var n=0;n<a.length;n++){var t=a[n],i=t.event;t=t.listeners;a:{var l=void 0;if(e)for(var u=t.length-1;0<=u;u--){var r=t[u],d=r.instance,p=r.currentTarget;if(r=r.listener,d!==l&&i.isPropagationStopped())break a;l=r,i.currentTarget=p;try{l(i)}catch(T){kl(T)}i.currentTarget=null,l=d}else for(u=0;u<t.length;u++){if(r=t[u],d=r.instance,p=r.currentTarget,r=r.listener,d!==l&&i.isPropagationStopped())break a;l=r,i.currentTarget=p;try{l(i)}catch(T){kl(T)}i.currentTarget=null,l=d}}}}function F(a,e){var n=e[au];n===void 0&&(n=e[au]=new Set);var t=a+"__bubble";n.has(t)||(Hm(e,a,2,!1),n.add(t))}function Gr(a,e,n){var t=0;e&&(t|=4),Hm(n,a,t,e)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Yr(a){if(!a[Cl]){a[Cl]=!0,Es.forEach(function(n){n!=="selectionchange"&&(Uk.has(n)||Gr(n,!1,a),Gr(n,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[Cl]||(e[Cl]=!0,Gr("selectionchange",!1,e))}}function Hm(a,e,n,t){switch(sc(e)){case 2:var i=of;break;case 8:i=df;break;default:i=ts}n=i.bind(null,e,n,a),i=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),t?i!==void 0?a.addEventListener(e,n,{capture:!0,passive:i}):a.addEventListener(e,n,!0):i!==void 0?a.addEventListener(e,n,{passive:i}):a.addEventListener(e,n,!1)}function wr(a,e,n,t,i){var l=t;if((e&1)===0&&(e&2)===0&&t!==null)a:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var r=t.stateNode.containerInfo;if(r===i)break;if(u===4)for(u=t.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;r!==null;){if(u=Gn(r),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){t=l=u;continue a}r=r.parentNode}}t=t.return}ws(function(){var p=l,T=ou(n),_=[];a:{var b=yo.get(a);if(b!==void 0){var v=Gi,Y=a;switch(a){case"keypress":if(Vi(n)===0)break a;case"keydown":case"keyup":v=Dg;break;case"focusin":Y="focus",v=fu;break;case"focusout":Y="blur",v=fu;break;case"beforeblur":case"afterblur":v=fu;break;case"click":if(n.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ng;break;case fo:case ho:case po:v=vg;break;case bo:v=zg;break;case"scroll":case"scrollend":v=fg;break;case"wheel":v=Kg;break;case"copy":case"cut":case"paste":v=xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Js;break;case"toggle":case"beforetoggle":v=Hg}var V=(e&4)!==0,ra=!V&&(a==="scroll"||a==="scrollend"),k=V?b!==null?b+"Capture":null:b;V=[];for(var g=p,h;g!==null;){var A=g;if(h=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||h===null||k===null||(A=Ot(g,k),A!=null&&V.push(fi(g,A,h))),ra)break;g=g.return}0<V.length&&(b=new v(b,Y,null,n,T),_.push({event:b,listeners:V}))}}if((e&7)===0){a:{if(b=a==="mouseover"||a==="pointerover",v=a==="mouseout"||a==="pointerout",b&&n!==su&&(Y=n.relatedTarget||n.fromElement)&&(Gn(Y)||Y[qn]))break a;if((v||b)&&(b=T.window===T?T:(b=T.ownerDocument)?b.defaultView||b.parentWindow:window,v?(Y=n.relatedTarget||n.toElement,v=p,Y=Y?Gn(Y):null,Y!==null&&(ra=M(Y),V=Y.tag,Y!==ra||V!==5&&V!==27&&V!==6)&&(Y=null)):(v=null,Y=p),v!==Y)){if(V=Zs,A="onMouseLeave",k="onMouseEnter",g="mouse",(a==="pointerout"||a==="pointerover")&&(V=Js,A="onPointerLeave",k="onPointerEnter",g="pointer"),ra=v==null?b:Nt(v),h=Y==null?b:Nt(Y),b=new V(A,g+"leave",v,n,T),b.target=ra,b.relatedTarget=h,A=null,Gn(T)===p&&(V=new V(k,g+"enter",Y,n,T),V.target=h,V.relatedTarget=ra,A=V),ra=A,v&&Y)e:{for(V=v,k=Y,g=0,h=V;h;h=xt(h))g++;for(h=0,A=k;A;A=xt(A))h++;for(;0<g-h;)V=xt(V),g--;for(;0<h-g;)k=xt(k),h--;for(;g--;){if(V===k||k!==null&&V===k.alternate)break e;V=xt(V),k=xt(k)}V=null}else V=null;v!==null&&Lm(_,b,v,V,!1),Y!==null&&ra!==null&&Lm(_,ra,Y,V,!0)}}a:{if(b=p?Nt(p):window,v=b.nodeName&&b.nodeName.toLowerCase(),v==="select"||v==="input"&&b.type==="file")var U=to;else if(eo(b))if(io)U=Pg;else{U=Xg;var P=Qg}else v=b.nodeName,!v||v.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?p&&ru(p.elementType)&&(U=to):U=Zg;if(U&&(U=U(a,p))){no(_,U,n,T);break a}P&&P(a,b,p),a==="focusout"&&p&&b.type==="number"&&p.memoizedProps.value!=null&&uu(b,"number",b.value)}switch(P=p?Nt(p):window,a){case"focusin":(eo(P)||P.contentEditable==="true")&&(In=P,Su=p,qt=null);break;case"focusout":qt=Su=In=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,go(_,n,T);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":go(_,n,T)}var K;if(pu)a:{switch(a){case"compositionstart":var q="onCompositionStart";break a;case"compositionend":q="onCompositionEnd";break a;case"compositionupdate":q="onCompositionUpdate";break a}q=void 0}else Wn?$s(a,n)&&(q="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(Fs&&n.locale!=="ko"&&(Wn||q!=="onCompositionStart"?q==="onCompositionEnd"&&Wn&&(K=Qs()):(We=T,cu="value"in We?We.value:We.textContent,Wn=!0)),P=Dl(p,q),0<P.length&&(q=new Ps(q,a,null,n,T),_.push({event:q,listeners:P}),K?q.data=K:(K=ao(n),K!==null&&(q.data=K)))),(K=Vg?qg(a,n):Gg(a,n))&&(q=Dl(p,"onBeforeInput"),0<q.length&&(P=new Ps("onBeforeInput","beforeinput",null,n,T),_.push({event:P,listeners:q}),P.data=K)),Nk(_,a,p,n,T)}Bm(_,e)})}function fi(a,e,n){return{instance:a,listener:e,currentTarget:n}}function Dl(a,e){for(var n=e+"Capture",t=[];a!==null;){var i=a,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ot(a,n),i!=null&&t.unshift(fi(a,i,l)),i=Ot(a,e),i!=null&&t.push(fi(a,i,l))),a.tag===3)return t;a=a.return}return[]}function xt(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Lm(a,e,n,t,i){for(var l=e._reactName,u=[];n!==null&&n!==t;){var r=n,d=r.alternate,p=r.stateNode;if(r=r.tag,d!==null&&d===t)break;r!==5&&r!==26&&r!==27||p===null||(d=p,i?(p=Ot(n,l),p!=null&&u.unshift(fi(n,p,d))):i||(p=Ot(n,l),p!=null&&u.push(fi(n,p,d)))),n=n.return}u.length!==0&&a.push({event:e,listeners:u})}var Kk=/\r\n?/g,Bk=/\u0000|\uFFFD/g;function Vm(a){return(typeof a=="string"?a:""+a).replace(Kk,`
`).replace(Bk,"")}function qm(a,e){return e=Vm(e),Vm(a)===e}function El(){}function ua(a,e,n,t,i,l){switch(n){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Pn(a,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Pn(a,""+t);break;case"className":Ui(a,"class",t);break;case"tabIndex":Ui(a,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(a,n,t);break;case"style":Gs(a,t,l);break;case"data":if(e!=="object"){Ui(a,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||n!=="href")){a.removeAttribute(n);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){a.removeAttribute(n);break}t=Hi(""+t),a.setAttribute(n,t);break;case"action":case"formAction":if(typeof t=="function"){a.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&ua(a,e,"name",i.name,i,null),ua(a,e,"formEncType",i.formEncType,i,null),ua(a,e,"formMethod",i.formMethod,i,null),ua(a,e,"formTarget",i.formTarget,i,null)):(ua(a,e,"encType",i.encType,i,null),ua(a,e,"method",i.method,i,null),ua(a,e,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){a.removeAttribute(n);break}t=Hi(""+t),a.setAttribute(n,t);break;case"onClick":t!=null&&(a.onclick=El);break;case"onScroll":t!=null&&F("scroll",a);break;case"onScrollEnd":t!=null&&F("scrollend",a);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(o(61));if(n=t.__html,n!=null){if(i.children!=null)throw Error(o(60));a.innerHTML=n}}break;case"multiple":a.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":a.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){a.removeAttribute("xlink:href");break}n=Hi(""+t),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(n,""+t):a.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(n,""):a.removeAttribute(n);break;case"capture":case"download":t===!0?a.setAttribute(n,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(n,t):a.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?a.setAttribute(n,t):a.removeAttribute(n);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?a.removeAttribute(n):a.setAttribute(n,t);break;case"popover":F("beforetoggle",a),F("toggle",a),zi(a,"popover",t);break;case"xlinkActuate":Ne(a,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Ne(a,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Ne(a,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Ne(a,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Ne(a,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Ne(a,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Ne(a,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Ne(a,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Ne(a,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":zi(a,"is",t);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gg.get(n)||n,zi(a,n,t))}}function Qr(a,e,n,t,i,l){switch(n){case"style":Gs(a,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(o(61));if(n=t.__html,n!=null){if(i.children!=null)throw Error(o(60));a.innerHTML=n}}break;case"children":typeof t=="string"?Pn(a,t):(typeof t=="number"||typeof t=="bigint")&&Pn(a,""+t);break;case"onScroll":t!=null&&F("scroll",a);break;case"onScrollEnd":t!=null&&F("scrollend",a);break;case"onClick":t!=null&&(a.onclick=El);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rs.hasOwnProperty(n))a:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),l=a[Ga]||null,l=l!=null?l[n]:null,typeof l=="function"&&a.removeEventListener(e,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(n in a?a[n]=null:a.hasAttribute(n)&&a.removeAttribute(n)),a.addEventListener(e,t,i);break a}n in a?a[n]=t:t===!0?a.setAttribute(n,""):zi(a,n,t)}}}function Na(a,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",a),F("load",a);var t=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var u=n[l];if(u!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:ua(a,e,l,u,n,null)}}i&&ua(a,e,"srcSet",n.srcSet,n,null),t&&ua(a,e,"src",n.src,n,null);return;case"input":F("invalid",a);var r=l=u=i=null,d=null,p=null;for(t in n)if(n.hasOwnProperty(t)){var T=n[t];if(T!=null)switch(t){case"name":i=T;break;case"type":u=T;break;case"checked":d=T;break;case"defaultChecked":p=T;break;case"value":l=T;break;case"defaultValue":r=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:ua(a,e,t,T,n,null)}}Hs(a,l,r,d,p,u,i,!1),Ki(a);return;case"select":F("invalid",a),t=u=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":u=r;break;case"multiple":t=r;default:ua(a,e,i,r,n,null)}e=l,n=u,a.multiple=!!t,e!=null?Zn(a,!!t,e,!1):n!=null&&Zn(a,!!t,n,!0);return;case"textarea":F("invalid",a),l=i=t=null;for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case"value":t=r;break;case"defaultValue":i=r;break;case"children":l=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:ua(a,e,u,r,n,null)}Vs(a,t,i,l),Ki(a);return;case"option":for(d in n)n.hasOwnProperty(d)&&(t=n[d],t!=null)&&(d==="selected"?a.selected=t&&typeof t!="function"&&typeof t!="symbol":ua(a,e,d,t,n,null));return;case"dialog":F("beforetoggle",a),F("toggle",a),F("cancel",a),F("close",a);break;case"iframe":case"object":F("load",a);break;case"video":case"audio":for(t=0;t<ki.length;t++)F(ki[t],a);break;case"image":F("error",a),F("load",a);break;case"details":F("toggle",a);break;case"embed":case"source":case"link":F("error",a),F("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in n)if(n.hasOwnProperty(p)&&(t=n[p],t!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:ua(a,e,p,t,n,null)}return;default:if(ru(e)){for(T in n)n.hasOwnProperty(T)&&(t=n[T],t!==void 0&&Qr(a,e,T,t,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(t=n[r],t!=null&&ua(a,e,r,t,n,null))}function Hk(a,e,n,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,u=null,r=null,d=null,p=null,T=null;for(v in n){var _=n[v];if(n.hasOwnProperty(v)&&_!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":d=_;default:t.hasOwnProperty(v)||ua(a,e,v,null,t,_)}}for(var b in t){var v=t[b];if(_=n[b],t.hasOwnProperty(b)&&(v!=null||_!=null))switch(b){case"type":l=v;break;case"name":i=v;break;case"checked":p=v;break;case"defaultChecked":T=v;break;case"value":u=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(137,e));break;default:v!==_&&ua(a,e,b,v,t,_)}}lu(a,u,r,d,p,T,l,i);return;case"select":v=u=r=b=null;for(l in n)if(d=n[l],n.hasOwnProperty(l)&&d!=null)switch(l){case"value":break;case"multiple":v=d;default:t.hasOwnProperty(l)||ua(a,e,l,null,t,d)}for(i in t)if(l=t[i],d=n[i],t.hasOwnProperty(i)&&(l!=null||d!=null))switch(i){case"value":b=l;break;case"defaultValue":r=l;break;case"multiple":u=l;default:l!==d&&ua(a,e,i,l,t,d)}e=r,n=u,t=v,b!=null?Zn(a,!!n,b,!1):!!t!=!!n&&(e!=null?Zn(a,!!n,e,!0):Zn(a,!!n,n?[]:"",!1));return;case"textarea":v=b=null;for(r in n)if(i=n[r],n.hasOwnProperty(r)&&i!=null&&!t.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ua(a,e,r,null,t,i)}for(u in t)if(i=t[u],l=n[u],t.hasOwnProperty(u)&&(i!=null||l!=null))switch(u){case"value":b=i;break;case"defaultValue":v=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==l&&ua(a,e,u,i,t,l)}Ls(a,b,v);return;case"option":for(var Y in n)b=n[Y],n.hasOwnProperty(Y)&&b!=null&&!t.hasOwnProperty(Y)&&(Y==="selected"?a.selected=!1:ua(a,e,Y,null,t,b));for(d in t)b=t[d],v=n[d],t.hasOwnProperty(d)&&b!==v&&(b!=null||v!=null)&&(d==="selected"?a.selected=b&&typeof b!="function"&&typeof b!="symbol":ua(a,e,d,b,t,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in n)b=n[V],n.hasOwnProperty(V)&&b!=null&&!t.hasOwnProperty(V)&&ua(a,e,V,null,t,b);for(p in t)if(b=t[p],v=n[p],t.hasOwnProperty(p)&&b!==v&&(b!=null||v!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,e));break;default:ua(a,e,p,b,t,v)}return;default:if(ru(e)){for(var ra in n)b=n[ra],n.hasOwnProperty(ra)&&b!==void 0&&!t.hasOwnProperty(ra)&&Qr(a,e,ra,void 0,t,b);for(T in t)b=t[T],v=n[T],!t.hasOwnProperty(T)||b===v||b===void 0&&v===void 0||Qr(a,e,T,b,t,v);return}}for(var k in n)b=n[k],n.hasOwnProperty(k)&&b!=null&&!t.hasOwnProperty(k)&&ua(a,e,k,null,t,b);for(_ in t)b=t[_],v=n[_],!t.hasOwnProperty(_)||b===v||b==null&&v==null||ua(a,e,_,b,t,v)}var Xr=null,Zr=null;function Rl(a){return a.nodeType===9?a:a.ownerDocument}function Gm(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function Pr(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jr=null;function Lk(){var a=window.event;return a&&a.type==="popstate"?a===Jr?!1:(Jr=a,!0):(Jr=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,Vk=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,qk=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(a){return Qm.resolve(null).then(a).catch(Gk)}:wm;function Gk(a){setTimeout(function(){throw a})}function kn(a){return a==="head"}function Xm(a,e){var n=e,t=0,i=0;do{var l=n.nextSibling;if(a.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<t&&8>t){n=t;var u=a.ownerDocument;if(n&1&&hi(u.documentElement),n&2&&hi(u.body),n&4)for(n=u.head,hi(n),u=n.firstChild;u;){var r=u.nextSibling,d=u.nodeName;u[Rt]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=r}}if(i===0){a.removeChild(l),ji(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:t=n.charCodeAt(0)-48;else t=0;n=l}while(n);ji(e)}function Fr(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Fr(n),eu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}a.removeChild(n)}}function Yk(a,e,n,t){for(;a.nodeType===1;){var i=n;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(t){if(!a[Rt])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(l=a.getAttribute("rel"),l==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(l!==i.rel||a.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||a.getAttribute("title")!==(i.title==null?null:i.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(l=a.getAttribute("src"),(l!==(i.src==null?null:i.src)||a.getAttribute("type")!==(i.type==null?null:i.type)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&a.getAttribute("name")===l)return a}else return a;if(a=be(a.nextSibling),a===null)break}return null}function wk(a,e,n){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!n||(a=be(a.nextSibling),a===null))return null;return a}function Wr(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState==="complete"}function Qk(a,e){var n=a.ownerDocument;if(a.data!=="$?"||n.readyState==="complete")e();else{var t=function(){e(),n.removeEventListener("DOMContentLoaded",t)};n.addEventListener("DOMContentLoaded",t),a._reactRetry=t}}function be(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return a}var Ir=null;function Zm(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return a;e--}else n==="/$"&&e++}a=a.previousSibling}return null}function Pm(a,e,n){switch(e=Rl(n),a){case"html":if(a=e.documentElement,!a)throw Error(o(452));return a;case"head":if(a=e.head,!a)throw Error(o(453));return a;case"body":if(a=e.body,!a)throw Error(o(454));return a;default:throw Error(o(451))}}function hi(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);eu(a)}var ke=new Map,Jm=new Set;function Nl(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Xe=N.d;N.d={f:Xk,r:Zk,D:Pk,C:Jk,L:Fk,m:Wk,X:$k,S:Ik,M:af};function Xk(){var a=Xe.f(),e=Tl();return a||e}function Zk(a){var e=Yn(a);e!==null&&e.tag===5&&e.type==="form"?fd(e):Xe.r(a)}var Tt=typeof document>"u"?null:document;function Fm(a,e,n){var t=Tt;if(t&&typeof e=="string"&&e){var i=re(e);i='link[rel="'+a+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Jm.has(i)||(Jm.add(i),a={rel:a,crossOrigin:n,href:e},t.querySelector(i)===null&&(e=t.createElement("link"),Na(e,"link",a),Ma(e),t.head.appendChild(e)))}}function Pk(a){Xe.D(a),Fm("dns-prefetch",a,null)}function Jk(a,e){Xe.C(a,e),Fm("preconnect",a,e)}function Fk(a,e,n){Xe.L(a,e,n);var t=Tt;if(t&&a&&e){var i='link[rel="preload"][as="'+re(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+re(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+re(n.imageSizes)+'"]')):i+='[href="'+re(a)+'"]';var l=i;switch(e){case"style":l=jt(a);break;case"script":l=At(a)}ke.has(l)||(a=E({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:a,as:e},n),ke.set(l,a),t.querySelector(i)!==null||e==="style"&&t.querySelector(pi(l))||e==="script"&&t.querySelector(bi(l))||(e=t.createElement("link"),Na(e,"link",a),Ma(e),t.head.appendChild(e)))}}function Wk(a,e){Xe.m(a,e);var n=Tt;if(n&&a){var t=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+re(t)+'"][href="'+re(a)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=At(a)}if(!ke.has(l)&&(a=E({rel:"modulepreload",href:a},e),ke.set(l,a),n.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(bi(l)))return}t=n.createElement("link"),Na(t,"link",a),Ma(t),n.head.appendChild(t)}}}function Ik(a,e,n){Xe.S(a,e,n);var t=Tt;if(t&&a){var i=wn(t).hoistableStyles,l=jt(a);e=e||"default";var u=i.get(l);if(!u){var r={loading:0,preload:null};if(u=t.querySelector(pi(l)))r.loading=5;else{a=E({rel:"stylesheet",href:a,"data-precedence":e},n),(n=ke.get(l))&&$r(a,n);var d=u=t.createElement("link");Ma(d),Na(d,"link",a),d._p=new Promise(function(p,T){d.onload=p,d.onerror=T}),d.addEventListener("load",function(){r.loading|=1}),d.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ol(u,e,t)}u={type:"stylesheet",instance:u,count:1,state:r},i.set(l,u)}}}function $k(a,e){Xe.X(a,e);var n=Tt;if(n&&a){var t=wn(n).hoistableScripts,i=At(a),l=t.get(i);l||(l=n.querySelector(bi(i)),l||(a=E({src:a,async:!0},e),(e=ke.get(i))&&as(a,e),l=n.createElement("script"),Ma(l),Na(l,"link",a),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function af(a,e){Xe.M(a,e);var n=Tt;if(n&&a){var t=wn(n).hoistableScripts,i=At(a),l=t.get(i);l||(l=n.querySelector(bi(i)),l||(a=E({src:a,async:!0,type:"module"},e),(e=ke.get(i))&&as(a,e),l=n.createElement("script"),Ma(l),Na(l,"link",a),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function Wm(a,e,n,t){var i=(i=Q.current)?Nl(i):null;if(!i)throw Error(o(446));switch(a){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=jt(n.href),n=wn(i).hoistableStyles,t=n.get(e),t||(t={type:"style",instance:null,count:0,state:null},n.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){a=jt(n.href);var l=wn(i).hoistableStyles,u=l.get(a);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(a,u),(l=i.querySelector(pi(a)))&&!l._p&&(u.instance=l,u.state.loading=5),ke.has(a)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ke.set(a,n),l||ef(i,a,n,u.state))),e&&t===null)throw Error(o(528,""));return u}if(e&&t!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=At(n),n=wn(i).hoistableScripts,t=n.get(e),t||(t={type:"script",instance:null,count:0,state:null},n.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,a))}}function jt(a){return'href="'+re(a)+'"'}function pi(a){return'link[rel="stylesheet"]['+a+"]"}function Im(a){return E({},a,{"data-precedence":a.precedence,precedence:null})}function ef(a,e,n,t){a.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=a.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Na(e,"link",n),Ma(e),a.head.appendChild(e))}function At(a){return'[src="'+re(a)+'"]'}function bi(a){return"script[async]"+a}function $m(a,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var t=a.querySelector('style[data-href~="'+re(n.href)+'"]');if(t)return e.instance=t,Ma(t),t;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return t=(a.ownerDocument||a).createElement("style"),Ma(t),Na(t,"style",i),Ol(t,n.precedence,a),e.instance=t;case"stylesheet":i=jt(n.href);var l=a.querySelector(pi(i));if(l)return e.state.loading|=4,e.instance=l,Ma(l),l;t=Im(n),(i=ke.get(i))&&$r(t,i),l=(a.ownerDocument||a).createElement("link"),Ma(l);var u=l;return u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Na(l,"link",t),e.state.loading|=4,Ol(l,n.precedence,a),e.instance=l;case"script":return l=At(n.src),(i=a.querySelector(bi(l)))?(e.instance=i,Ma(i),i):(t=n,(i=ke.get(l))&&(t=E({},n),as(t,i)),a=a.ownerDocument||a,i=a.createElement("script"),Ma(i),Na(i,"link",t),a.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,Ol(t,n.precedence,a));return e.instance}function Ol(a,e,n){for(var t=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,u=0;u<t.length;u++){var r=t[u];if(r.dataset.precedence===e)l=r;else if(l!==i)break}l?l.parentNode.insertBefore(a,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(a,e.firstChild))}function $r(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function as(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var zl=null;function ac(a,e,n){if(zl===null){var t=new Map,i=zl=new Map;i.set(n,t)}else i=zl,t=i.get(n),t||(t=new Map,i.set(n,t));if(t.has(a))return t;for(t.set(a,null),n=n.getElementsByTagName(a),i=0;i<n.length;i++){var l=n[i];if(!(l[Rt]||l[Ha]||a==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var u=l.getAttribute(e)||"";u=a+u;var r=t.get(u);r?r.push(l):t.set(u,[l])}}return t}function ec(a,e,n){a=a.ownerDocument||a,a.head.insertBefore(n,e==="title"?a.querySelector("head > title"):null)}function nf(a,e,n){if(n===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(a=e.disabled,typeof e.precedence=="string"&&a==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function nc(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}var yi=null;function tf(){}function lf(a,e,n){if(yi===null)throw Error(o(475));var t=yi;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=jt(n.href),l=a.querySelector(pi(i));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Ul.bind(t),a.then(t,t)),e.state.loading|=4,e.instance=l,Ma(l);return}l=a.ownerDocument||a,n=Im(n),(i=ke.get(i))&&$r(n,i),l=l.createElement("link"),Ma(l);var u=l;u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Na(l,"link",n),e.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Ul.bind(t),a.addEventListener("load",e),a.addEventListener("error",e))}}function uf(){if(yi===null)throw Error(o(475));var a=yi;return a.stylesheets&&a.count===0&&es(a,a.stylesheets),0<a.count?function(e){var n=setTimeout(function(){if(a.stylesheets&&es(a,a.stylesheets),a.unsuspend){var t=a.unsuspend;a.unsuspend=null,t()}},6e4);return a.unsuspend=e,function(){a.unsuspend=null,clearTimeout(n)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)es(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Kl=null;function es(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Kl=new Map,e.forEach(rf,a),Kl=null,Ul.call(a))}function rf(a,e){if(!(e.state.loading&4)){var n=Kl.get(a);if(n)var t=n.get(null);else{n=new Map,Kl.set(a,n);for(var i=a.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var u=i[l];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),t=u)}t&&n.set(null,t)}i=e.instance,u=i.getAttribute("data-precedence"),l=n.get(u)||t,l===t&&n.set(null,i),n.set(u,i),this.count++,t=Ul.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(i,a.firstChild)),e.state.loading|=4}}var vi={$$typeof:Ua,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function sf(a,e,n,t,i,l,u,r){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.hiddenUpdates=Wl(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function tc(a,e,n,t,i,l,u,r,d,p,T,_){return a=new sf(a,e,n,u,r,d,p,_),e=1,l===!0&&(e|=24),l=ae(3,null,null,e),a.current=l,l.stateNode=a,e=Ku(),e.refCount++,a.pooledCache=e,e.refCount++,l.memoizedState={element:t,isDehydrated:n,cache:e},Vu(l),a}function ic(a){return a?(a=nt,a):nt}function lc(a,e,n,t,i,l){i=ic(i),t.context===null?t.context=i:t.pendingContext=i,t=an(e),t.payload={element:n},l=l===void 0?null:l,l!==null&&(t.callback=l),n=en(a,t,e),n!==null&&(le(n,a,e),Ft(n,a,e))}function uc(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<e?n:e}}function ns(a,e){uc(a,e),(a=a.alternate)&&uc(a,e)}function rc(a){if(a.tag===13){var e=et(a,67108864);e!==null&&le(e,a,67108864),ns(a,67108864)}}var Bl=!0;function of(a,e,n,t){var i=j.T;j.T=null;var l=N.p;try{N.p=2,ts(a,e,n,t)}finally{N.p=l,j.T=i}}function df(a,e,n,t){var i=j.T;j.T=null;var l=N.p;try{N.p=8,ts(a,e,n,t)}finally{N.p=l,j.T=i}}function ts(a,e,n,t){if(Bl){var i=is(t);if(i===null)wr(a,e,t,Hl,n),oc(a,t);else if(cf(i,a,e,n,t))t.stopPropagation();else if(oc(a,t),e&4&&-1<mf.indexOf(a)){for(;i!==null;){var l=Yn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var u=xn(l.pendingLanes);if(u!==0){var r=l;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var d=1<<31-Ia(u);r.entanglements[1]|=d,u&=~d}Ae(l),(ta&6)===0&&(Sl=ve()+500,gi(0))}}break;case 13:r=et(l,2),r!==null&&le(r,l,2),Tl(),ns(l,2)}if(l=is(t),l===null&&wr(a,e,t,Hl,n),l===i)break;i=l}i!==null&&t.stopPropagation()}else wr(a,e,t,null,n)}}function is(a){return a=ou(a),ls(a)}var Hl=null;function ls(a){if(Hl=null,a=Gn(a),a!==null){var e=M(a);if(e===null)a=null;else{var n=e.tag;if(n===13){if(a=O(e),a!==null)return a;a=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return Hl=a,null}function sc(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jc()){case Ss:return 2;case xs:return 8;case Ei:case Fc:return 32;case Ts:return 268435456;default:return 32}default:return 32}}var us=!1,fn=null,hn=null,pn=null,Si=new Map,xi=new Map,bn=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oc(a,e){switch(a){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(e.pointerId)}}function Ti(a,e,n,t,i,l){return a===null||a.nativeEvent!==l?(a={blockedOn:e,domEventName:n,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},e!==null&&(e=Yn(e),e!==null&&rc(e)),a):(a.eventSystemFlags|=t,e=a.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),a)}function cf(a,e,n,t,i){switch(e){case"focusin":return fn=Ti(fn,a,e,n,t,i),!0;case"dragenter":return hn=Ti(hn,a,e,n,t,i),!0;case"mouseover":return pn=Ti(pn,a,e,n,t,i),!0;case"pointerover":var l=i.pointerId;return Si.set(l,Ti(Si.get(l)||null,a,e,n,t,i)),!0;case"gotpointercapture":return l=i.pointerId,xi.set(l,Ti(xi.get(l)||null,a,e,n,t,i)),!0}return!1}function dc(a){var e=Gn(a.target);if(e!==null){var n=M(e);if(n!==null){if(e=n.tag,e===13){if(e=O(n),e!==null){a.blockedOn=e,ig(a.priority,function(){if(n.tag===13){var t=ie();t=Il(t);var i=et(n,t);i!==null&&le(i,n,t),ns(n,t)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Ll(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var n=is(a.nativeEvent);if(n===null){n=a.nativeEvent;var t=new n.constructor(n.type,n);su=t,n.target.dispatchEvent(t),su=null}else return e=Yn(n),e!==null&&rc(e),a.blockedOn=n,!1;e.shift()}return!0}function mc(a,e,n){Ll(a)&&n.delete(e)}function gf(){us=!1,fn!==null&&Ll(fn)&&(fn=null),hn!==null&&Ll(hn)&&(hn=null),pn!==null&&Ll(pn)&&(pn=null),Si.forEach(mc),xi.forEach(mc)}function Vl(a,e){a.blockedOn===e&&(a.blockedOn=null,us||(us=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,gf)))}var ql=null;function cc(a){ql!==a&&(ql=a,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){ql===a&&(ql=null);for(var e=0;e<a.length;e+=3){var n=a[e],t=a[e+1],i=a[e+2];if(typeof t!="function"){if(ls(t||n)===null)continue;break}var l=Yn(n);l!==null&&(a.splice(e,3),e-=3,lr(l,{pending:!0,data:i,method:n.method,action:t},t,i))}}))}function ji(a){function e(d){return Vl(d,a)}fn!==null&&Vl(fn,a),hn!==null&&Vl(hn,a),pn!==null&&Vl(pn,a),Si.forEach(e),xi.forEach(e);for(var n=0;n<bn.length;n++){var t=bn[n];t.blockedOn===a&&(t.blockedOn=null)}for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)dc(n),n.blockedOn===null&&bn.shift();if(n=(a.ownerDocument||a).$$reactFormReplay,n!=null)for(t=0;t<n.length;t+=3){var i=n[t],l=n[t+1],u=i[Ga]||null;if(typeof l=="function")u||cc(n);else if(u){var r=null;if(l&&l.hasAttribute("formAction")){if(i=l,u=l[Ga]||null)r=u.formAction;else if(ls(i)!==null)continue}else r=u.action;typeof r=="function"?n[t+1]=r:(n.splice(t,3),t-=3),cc(n)}}}function rs(a){this._internalRoot=a}Gl.prototype.render=rs.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,t=ie();lc(n,t,a,e,null,null)},Gl.prototype.unmount=rs.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;lc(a.current,2,null,a,null,null),Tl(),e[qn]=null}};function Gl(a){this._internalRoot=a}Gl.prototype.unstable_scheduleHydration=function(a){if(a){var e=Cs();a={blockedOn:null,target:a,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,a),n===0&&dc(a)}};var gc=f.version;if(gc!=="19.1.0")throw Error(o(527,gc,"19.1.0"));N.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=D(e),a=a!==null?y(a):null,a=a===null?null:a.stateNode,a};var kf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Ct=Yl.inject(kf),Wa=Yl}catch{}}return Mi.createRoot=function(a,e){if(!S(a))throw Error(o(299));var n=!1,t="",i=Dd,l=Ed,u=Rd,r=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(r=e.unstable_transitionCallbacks)),e=tc(a,1,!1,null,null,n,t,i,l,u,r,null),a[qn]=e.current,Yr(a),new rs(e)},Mi.hydrateRoot=function(a,e,n){if(!S(a))throw Error(o(299));var t=!1,i="",l=Dd,u=Ed,r=Rd,d=null,p=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(d=n.unstable_transitionCallbacks),n.formState!==void 0&&(p=n.formState)),e=tc(a,1,!0,e,n??null,t,i,l,u,r,d,p),e.context=ic(null),n=e.current,t=ie(),t=Il(t),i=an(t),i.callback=null,en(n,i,t),n=t,e.current.lanes=n,Et(e,n),Ae(e),a[qn]=e.current,Yr(a),new Gl(e)},Mi.version="19.1.0",Mi}var Tc;function Mf(){if(Tc)return os.exports;Tc=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(f){console.error(f)}}return m(),os.exports=Af(),os.exports}var _f=Mf();function Cf(m,f){if(m instanceof RegExp)return{keys:!1,pattern:m};var x,o,S,M,O=[],B="",D=m.split("/");for(D[0]||D.shift();S=D.shift();)x=S[0],x==="*"?(O.push(x),B+=S[1]==="?"?"(?:/(.*))?":"/(.*)"):x===":"?(o=S.indexOf("?",1),M=S.indexOf(".",1),O.push(S.substring(1,~o?o:~M?M:S.length)),B+=~o&&!~M?"(?:/([^/]+?))?":"/([^/]+?)",~M&&(B+=(~o?"?":"")+"\\"+S.substring(M))):B+="/"+S;return{keys:O,pattern:new RegExp("^"+B+(f?"(?=$|/)":"/?$"),"i")}}var ea=wl();const Df=pf(ea),Ef=hf({__proto__:null,default:Df},[ea]);var ks={exports:{}},fs={};var jc;function Rf(){if(jc)return fs;jc=1;var m=wl();function f(H,w){return H===w&&(H!==0||1/H===1/w)||H!==H&&w!==w}var x=typeof Object.is=="function"?Object.is:f,o=m.useState,S=m.useEffect,M=m.useLayoutEffect,O=m.useDebugValue;function B(H,w){var da=w(),ba=o({inst:{value:da,getSnapshot:w}}),ka=ba[0].inst,ya=ba[1];return M(function(){ka.value=da,ka.getSnapshot=w,D(ka)&&ya({inst:ka})},[H,da,w]),S(function(){return D(ka)&&ya({inst:ka}),H(function(){D(ka)&&ya({inst:ka})})},[H]),O(da),da}function D(H){var w=H.getSnapshot;H=H.value;try{var da=w();return!x(H,da)}catch{return!0}}function y(H,w){return w()}var E=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:B;return fs.useSyncExternalStore=m.useSyncExternalStore!==void 0?m.useSyncExternalStore:E,fs}var Ac;function Nf(){return Ac||(Ac=1,ks.exports=Rf()),ks.exports}var Of=Nf();const zf=Ef.useInsertionEffect,Uf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kf=Uf?ea.useLayoutEffect:ea.useEffect,Bf=zf||Kf,Uc=m=>{const f=ea.useRef([m,(...x)=>f[0](...x)]).current;return Bf(()=>{f[0]=m}),f[1]},Hf="popstate",ys="pushState",vs="replaceState",Lf="hashchange",Mc=[Hf,ys,vs,Lf],Vf=m=>{for(const f of Mc)addEventListener(f,m);return()=>{for(const f of Mc)removeEventListener(f,m)}},Kc=(m,f)=>Of.useSyncExternalStore(Vf,m,f),_c=()=>location.search,qf=({ssrSearch:m}={})=>Kc(_c,m!=null?()=>m:_c),Cc=()=>location.pathname,Gf=({ssrPath:m}={})=>Kc(Cc,m!=null?()=>m:Cc),Yf=(m,{replace:f=!1,state:x=null}={})=>history[f?vs:ys](x,"",m),wf=(m={})=>[Gf(m),Yf],Dc=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Dc]>"u"){for(const m of[ys,vs]){const f=history[m];history[m]=function(){const x=f.apply(this,arguments),o=new Event(m);return o.arguments=arguments,dispatchEvent(o),x}}Object.defineProperty(window,Dc,{value:!0})}const Qf=(m,f)=>f.toLowerCase().indexOf(m.toLowerCase())?"~"+f:f.slice(m.length)||"/",Bc=(m="")=>m==="/"?"":m,Xf=(m,f)=>m[0]==="~"?m.slice(1):Bc(f)+m,Zf=(m="",f)=>Qf(bs(Bc(m)),bs(f)),Pf=m=>m[0]==="?"?m.slice(1):m,bs=m=>{try{return decodeURI(m)}catch{return m}},Jf=m=>bs(Pf(m)),Hc={hook:wf,searchHook:qf,parser:Cf,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:m=>m,aroundNav:(m,f,x)=>m(f,x)},Lc=ea.createContext(Hc),_t=()=>ea.useContext(Lc),Vc={},qc=ea.createContext(Vc),Ff=()=>ea.useContext(qc),Ql=m=>{const[f,x]=m.hook(m);return[Zf(m.base,f),Uc((o,S)=>m.aroundNav(x,Xf(o,m.base),S))]},Wf=()=>Ql(_t()),Gc=()=>{const m=_t();return Jf(m.searchHook(m))},Yc=(m,f,x,o)=>{const{pattern:S,keys:M}=f instanceof RegExp?{keys:!1,pattern:f}:m(f||"*",o),O=S.exec(x)||[],[B,...D]=O;return B!==void 0?[!0,(()=>{const y=M!==!1?Object.fromEntries(M.map((H,w)=>[H,D[w]])):O.groups;let E={...D};return y&&Object.assign(E,y),E})(),...o?[B]:[]]:[!1,null]},wc=({children:m,...f})=>{const x=_t(),o=f.hook?Hc:x;let S=o;const[M,O=f.ssrSearch??""]=f.ssrPath?.split("?")??[];M&&(f.ssrSearch=O,f.ssrPath=M),f.hrefs=f.hrefs??f.hook?.hrefs,f.searchHook=f.searchHook??f.hook?.searchHook;let B=ea.useRef({}),D=B.current,y=D;for(let E in o){const H=E==="base"?o[E]+(f[E]??""):f[E]??o[E];D===y&&H!==y[E]&&(B.current=y={...y}),y[E]=H,(H!==o[E]||H!==S[E])&&(S=y)}return ea.createElement(Lc.Provider,{value:S,children:m})},Ec=({children:m,component:f},x)=>f?ea.createElement(f,{params:x}):typeof m=="function"?m(x):m,If=m=>{let f=ea.useRef(Vc);const x=f.current;return f.current=Object.keys(m).length!==Object.keys(x).length||Object.entries(m).some(([o,S])=>S!==x[o])?m:x},Me=({path:m,nest:f,match:x,...o})=>{const S=_t(),[M]=Ql(S),[O,B,D]=x??Yc(S.parser,m,M,f),y=If({...Ff(),...B});if(!O)return null;const E=D?ea.createElement(wc,{base:D},Ec(o,y)):Ec(o,y);return ea.createElement(qc.Provider,{value:y,children:E})},Oa=ea.forwardRef((m,f)=>{const x=_t(),[o,S]=Ql(x),{to:M="",href:O=M,onClick:B,asChild:D,children:y,className:E,replace:H,state:w,transition:da,...ba}=m,ka=Uc(za=>{za.ctrlKey||za.metaKey||za.altKey||za.shiftKey||za.button!==0||(B?.(za),za.defaultPrevented||(za.preventDefault(),S(O,m)))}),ya=x.hrefs(O[0]==="~"?O.slice(1):x.base+O,x);return D&&ea.isValidElement(y)?ea.cloneElement(y,{onClick:ka,href:ya}):ea.createElement("a",{...ba,onClick:ka,href:ya,className:E?.call?E(o===O):E,children:y,ref:f})}),Qc=m=>Array.isArray(m)?m.flatMap(f=>Qc(f&&f.type===ea.Fragment?f.props.children:f)):[m],$f=({children:m,location:f})=>{const x=_t(),[o]=Ql(x);for(const S of Qc(m)){let M=0;if(ea.isValidElement(S)&&(M=Yc(x.parser,S.props.path,f||o,S.props.nest))[0])return ea.cloneElement(S,{match:M})}return null};const ah=m=>m.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eh=m=>m.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,x,o)=>o?o.toUpperCase():x.toLowerCase()),Rc=m=>{const f=eh(m);return f.charAt(0).toUpperCase()+f.slice(1)},Xc=(...m)=>m.filter((f,x,o)=>!!f&&f.trim()!==""&&o.indexOf(f)===x).join(" ").trim(),nh=m=>{for(const f in m)if(f.startsWith("aria-")||f==="role"||f==="title")return!0};var th={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ih=ea.forwardRef(({color:m="currentColor",size:f=24,strokeWidth:x=2,absoluteStrokeWidth:o,className:S="",children:M,iconNode:O,...B},D)=>ea.createElement("svg",{ref:D,...th,width:f,height:f,stroke:m,strokeWidth:o?Number(x)*24/Number(f):x,className:Xc("lucide",S),...!M&&!nh(B)&&{"aria-hidden":"true"},...B},[...O.map(([y,E])=>ea.createElement(y,E)),...Array.isArray(M)?M:[M]]));const De=(m,f)=>{const x=ea.forwardRef(({className:o,...S},M)=>ea.createElement(ih,{ref:M,iconNode:f,className:Xc(`lucide-${ah(Rc(m))}`,`lucide-${m}`,o),...S}));return x.displayName=Rc(m),x};const lh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],uh=De("arrow-left",lh);const rh=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],sh=De("calendar",rh);const oh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ci=De("clock",oh);const dh=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mh=De("github",dh);const ch=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],gh=De("linkedin",ch);const kh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],fh=De("mail",kh);const hh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ph=De("menu",hh);const bh=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],yh=De("rss",bh);const vh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Sh=De("search",vh);const xh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Th=De("x",xh),_e={name:"Putra Adhiguna",title:"Electrical & Industrial Engineer",bio:"Seorang engineer dengan passion di bidang otomasi industri dan sistem kelistrikan. Mengubah konsep teknikal yang kompleks menjadi panduan yang bisa langsung dipraktikkan.",bio2:"Ahli di bidang sistem motor listrik, panel kontrol, pneumatik, dan PLC. Saya percaya bahwa pemahaman mendalam atas dasar-dasar teknik adalah kunci memecahkan masalah paling kompleks sekalipun.",github:"https://github.com/balenetizien",linkedin:"https://id.linkedin.com/in/putraadhiguna",email:"mailto:jagoanpapih2@gmail.com"},Nc=[{href:"/",label:"Beranda"},{href:"/about",label:"Tentang"},{href:"/kategori",label:"Per Kategori"},{href:"/arsip",label:"Arsip"}];function jh({children:m}){const[f,x]=ea.useState(!1),[o,S]=ea.useState(""),[M,O]=ea.useState(!1),[,B]=Wf();function D(y){y.preventDefault(),o.trim()&&(B(`/cari?q=${encodeURIComponent(o.trim())}`),x(!1),S(""))}return s.jsxs("div",{className:"min-h-screen flex flex-col",style:{background:"hsl(220 26% 14%)"},children:[s.jsxs("header",{style:{borderBottom:"1px solid hsl(220 15% 22%)"},className:"sticky top-0 z-50",children:[s.jsxs("div",{style:{background:"hsl(220 26% 14%)"},className:"max-w-5xl mx-auto px-4 py-3 flex items-center justify-between",children:[s.jsxs(Oa,{href:"/",className:"text-white font-bold text-sm sm:text-base tracking-tight hover:no-underline",children:["ElektroTeknik"," ",s.jsx("span",{className:"font-normal text-[hsl(199_89%_48%)]",children:"— Panduan Praktis Dunia Industri"})]}),s.jsxs("nav",{className:"hidden md:flex items-center gap-1",children:[Nc.map(y=>s.jsx(Oa,{href:y.href,className:"px-3 py-1.5 text-sm text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_65%)] hover:no-underline transition-colors rounded",children:y.label},y.href)),s.jsx("button",{onClick:()=>x(y=>!y),className:"ml-1 p-1.5 text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_65%)] transition-colors","aria-label":"Cari",children:s.jsx(Sh,{size:16})})]}),s.jsx("button",{className:"md:hidden p-1.5 text-[hsl(215_14%_65%)]",onClick:()=>O(y=>!y),children:M?s.jsx(Th,{size:20}):s.jsx(ph,{size:20})})]}),f&&s.jsx("div",{style:{background:"hsl(220 22% 18%)",borderTop:"1px solid hsl(220 15% 22%)"},children:s.jsxs("form",{onSubmit:D,className:"max-w-5xl mx-auto px-4 py-2 flex gap-2",children:[s.jsx("input",{autoFocus:!0,value:o,onChange:y=>S(y.target.value),placeholder:"Cari artikel...",className:"flex-1 bg-transparent text-sm text-white placeholder-[hsl(215_14%_45%)] outline-none"}),s.jsx("button",{type:"submit",className:"text-xs text-[hsl(199_89%_48%)] hover:underline",children:"Cari"})]})}),M&&s.jsx("div",{style:{background:"hsl(220 22% 18%)",borderTop:"1px solid hsl(220 15% 22%)"},className:"md:hidden",children:s.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-2 flex flex-col gap-1",children:[Nc.map(y=>s.jsx(Oa,{href:y.href,onClick:()=>O(!1),className:"py-2 text-sm text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_65%)] hover:no-underline",children:y.label},y.href)),s.jsxs("form",{onSubmit:D,className:"flex gap-2 pt-2 pb-1",children:[s.jsx("input",{value:o,onChange:y=>S(y.target.value),placeholder:"Cari artikel...",className:"flex-1 bg-transparent text-sm text-white placeholder-[hsl(215_14%_45%)] outline-none border-b border-[hsl(220_15%_28%)] pb-1"}),s.jsx("button",{type:"submit",className:"text-xs text-[hsl(199_89%_48%)]",children:"Go"})]})]})})]}),s.jsxs("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 py-8 flex flex-col md:flex-row gap-8",children:[s.jsx("div",{className:"flex-1 min-w-0",children:m}),s.jsxs("aside",{className:"w-full md:w-64 shrink-0 flex flex-col gap-6",children:[s.jsxs("div",{style:{background:"hsl(220 22% 18%)",border:"1px solid hsl(220 15% 22%)",borderRadius:"6px"},className:"p-4",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-[hsl(199_89%_30%)] flex items-center justify-center mb-3 text-white font-bold text-2xl",children:"⚡"}),s.jsx("div",{className:"font-semibold text-[hsl(210_30%_88%)] text-sm mb-1",children:_e.name}),s.jsx("div",{className:"text-xs text-[hsl(215_14%_55%)] mb-3",children:_e.title}),s.jsx("p",{className:"text-xs text-[hsl(215_14%_65%)] leading-relaxed mb-2",children:_e.bio}),s.jsx("p",{className:"text-xs text-[hsl(215_14%_65%)] leading-relaxed",children:_e.bio2}),s.jsxs("div",{className:"mt-4 flex items-center gap-3",children:[s.jsx("a",{href:_e.github,target:"_blank",rel:"noreferrer",className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"GitHub",children:s.jsx(mh,{size:16})}),s.jsx("a",{href:_e.linkedin,target:"_blank",rel:"noreferrer",className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"LinkedIn",children:s.jsx(gh,{size:16})}),s.jsx("a",{href:_e.email,className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"Email",children:s.jsx(fh,{size:16})}),s.jsx("a",{href:"/rss.xml",className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"RSS Feed",children:s.jsx(yh,{size:16})})]})]}),s.jsxs("div",{style:{background:"hsl(220 22% 18%)",border:"1px solid hsl(220 15% 22%)",borderRadius:"6px"},className:"p-4",children:[s.jsx("div",{className:"text-xs font-semibold text-[hsl(210_30%_75%)] uppercase tracking-wider mb-3",children:"Kategori"}),s.jsx("div",{className:"flex flex-col gap-1",children:[["Motor Industri","7"],["Rangkaian Listrik","7"],["Motor 3 Phase","2"],["Dasar Teknik Elektro","1"],["Motor 1 Phase","1"],["Pneumatik","1"]].map(([y,E])=>s.jsxs(Oa,{href:`/kategori?k=${encodeURIComponent(y)}`,className:"flex justify-between text-xs text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_60%)] hover:no-underline py-0.5 transition-colors",children:[s.jsx("span",{children:y}),s.jsx("span",{className:"text-[hsl(215_14%_45%)]",children:E})]},y))})]}),s.jsxs("div",{style:{background:"hsl(220 22% 18%)",border:"1px solid hsl(220 15% 22%)",borderRadius:"6px"},className:"p-4",children:[s.jsx("div",{className:"text-xs font-semibold text-[hsl(210_30%_75%)] uppercase tracking-wider mb-3",children:"Tag Populer"}),s.jsx("div",{className:"flex flex-wrap gap-1.5",children:["motor induksi","star-delta","VFD","kontaktor","PLC","pneumatik","troubleshooting","nameplate","rangkaian kontrol","silinder","IE3","hukum ohm"].map(y=>s.jsx(Oa,{href:`/cari?q=${encodeURIComponent(y)}`,className:"tag-badge hover:no-underline",children:y},y))})]})]})]}),s.jsx("footer",{style:{borderTop:"1px solid hsl(220 15% 22%)"},className:"py-6",children:s.jsxs("div",{className:"max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[hsl(215_14%_45%)]",children:[s.jsxs("div",{className:"flex flex-wrap gap-x-3 gap-y-1 items-center",children:[s.jsx("a",{href:_e.github,target:"_blank",rel:"noreferrer",className:"hover:text-[hsl(199_89%_60%)]",children:"GitHub"}),s.jsx("span",{children:"—"}),s.jsx("a",{href:_e.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-[hsl(199_89%_60%)]",children:"LinkedIn"}),s.jsx("span",{children:"—"}),s.jsx("a",{href:_e.email,className:"hover:text-[hsl(199_89%_60%)]",children:"Email"}),s.jsx("span",{children:"—"}),s.jsx(Oa,{href:"/privacy-policy",className:"hover:text-[hsl(199_89%_60%)] hover:no-underline",children:"Kebijakan Privasi"}),s.jsx("span",{children:"—"}),s.jsx("a",{href:"/rss.xml",className:"hover:text-[hsl(199_89%_60%)]",children:"RSS"})]}),s.jsxs("div",{children:["© ",new Date().getFullYear()," Putra Adhiguna / ElektroTeknik"]})]})})]})}const Ze=[{slug:"pengantar-motor-induksi-3-phase",title:"Pengantar Motor Induksi 3 Phase: Cara Kerja dan Aplikasinya di Industri",date:"2026-04-10",readTime:"8 menit",category:"Motor 3 Phase",tags:["motor induksi","3 phase","industri","dasar"],excerpt:"Motor induksi 3 phase adalah tulang punggung dunia industri modern. Artikel ini membahas prinsip kerja, konstruksi, dan penerapannya secara mendalam.",content:`
Motor induksi 3 phase merupakan salah satu mesin listrik yang paling banyak digunakan di dunia industri. Mulai dari pompa air, kompresor, conveyor, hingga mesin produksi—hampir semuanya menggunakan motor ini sebagai penggerak utama. Namun, banyak teknisi lapangan yang hanya mengenal cara pakainya saja, tanpa benar-benar memahami cara kerjanya.

Artikel ini akan membahas secara mendetail bagaimana motor induksi 3 phase bekerja, mulai dari fisika dasarnya hingga implikasi praktis di lapangan.

## Apa Itu Motor Induksi?

Motor induksi adalah motor AC (Alternating Current) yang bekerja berdasarkan prinsip **induksi elektromagnetik**. Berbeda dengan motor DC yang memerlukan sikat karbon dan komutator, motor induksi tidak memiliki kontak geser mekanis—sehingga lebih handal dan perawatannya lebih mudah.

Dinamakan "induksi" karena arus pada rotor tidak disuplai secara langsung, melainkan diinduksikan dari medan magnet yang berputar di stator.

## Konstruksi Dasar

Motor induksi 3 phase terdiri dari dua bagian utama:

**1. Stator (Bagian Diam)**
Stator adalah bagian luar yang diam. Di dalamnya terdapat belitan kawat tembaga yang disusun secara simetris dan terhubung ke sumber 3 phase. Ketika diberi tegangan, ketiga belitan ini menghasilkan medan magnet yang berputar.

**2. Rotor (Bagian Berputar)**
Ada dua jenis rotor yang umum digunakan:
- **Squirrel Cage Rotor** (Rotor Sangkar Tupai): Terdiri dari batang konduktor aluminium atau tembaga yang dihubungkan oleh cincin pada kedua ujungnya. Jenis ini paling banyak digunakan karena konstruksinya sederhana dan kuat.
- **Wound Rotor** (Rotor Belitan): Memiliki belitan tiga phase pada rotor yang ujungnya dihubungkan ke slip ring. Digunakan pada aplikasi yang memerlukan torsi awal tinggi atau kontrol kecepatan.

## Prinsip Medan Magnet Berputar (Rotating Magnetic Field)

Ini adalah konsep paling fundamental yang harus dipahami. Ketika tiga phase tegangan AC diberikan ke stator, masing-masing fase bergeser 120° satu sama lain. Ketiga belitan yang terpisah 120° secara fisik ini, saat dialiri arus yang bergeser 120°, menghasilkan **medan magnet resultan yang besarnya konstan namun arahnya berputar**.

Kecepatan putar medan magnet ini disebut **kecepatan sinkron** dan dirumuskan:

\`\`\`
Ns = (120 × f) / P
\`\`\`

Di mana:
- \`Ns\` = Kecepatan sinkron (rpm)
- \`f\` = Frekuensi sumber (Hz), di Indonesia 50 Hz
- \`P\` = Jumlah kutub motor

Contoh: Motor 4 kutub di jaringan 50 Hz → Ns = (120 × 50) / 4 = **1500 rpm**

## Konsep Slip

Rotor tidak pernah mencapai kecepatan sinkron saat berbeban. Jika rotor berputar dengan kecepatan sinkron yang sama persis, tidak ada perbedaan antara kecepatan medan magnet dan kecepatan rotor—sehingga tidak ada GGL induksi, tidak ada arus rotor, dan tidak ada torsi. Motor akan berhenti.

Oleh karena itu, selalu ada perbedaan kecepatan yang disebut **slip**:

\`\`\`
s = (Ns - Nr) / Ns × 100%
\`\`\`

Di mana \`Nr\` adalah kecepatan rotor aktual. Pada kondisi beban penuh, slip tipikal motor induksi adalah **3–8%**.

Jadi motor 4 kutub yang "1500 rpm" sebenarnya berputar sekitar 1440–1460 rpm saat berbeban.

## Kelas Efisiensi

Sejak regulasi IEC 60034-30-1 berlaku, motor listrik diklasifikasikan berdasarkan efisiensinya:

| Kelas | Keterangan |
|-------|-----------|
| IE1   | Standard Efficiency |
| IE2   | High Efficiency |
| IE3   | Premium Efficiency |
| IE4   | Super Premium Efficiency |

Perbedaan efisiensi beberapa persen saja bisa berdampak besar pada konsumsi energi jangka panjang. Motor IE3 atau IE4 sangat direkomendasikan untuk aplikasi yang berjalan kontinu.

## Metode Starting

Motor induksi memiliki arus starting yang sangat besar—bisa 5–8 kali arus nominalnya. Ini bisa mengganggu sistem kelistrikan. Beberapa metode yang umum digunakan:

- **DOL (Direct On Line)**: Motor langsung dihubungkan ke sumber. Sederhana tapi arus starting besar.
- **Star-Delta**: Motor di-start dalam konfigurasi bintang (arus turun 1/3), lalu beralih ke delta saat sudah berputar.
- **Soft Starter**: Menggunakan thyristor untuk menaikkan tegangan secara bertahap.
- **VFD (Variable Frequency Drive)**: Mengontrol frekuensi dan tegangan secara penuh, memberikan kontrol kecepatan yang fleksibel.

## Kesimpulan

Motor induksi 3 phase adalah mesin yang elegan secara fisika—bekerja berdasarkan hukum induksi Faraday tanpa kontak mekanis langsung antara bagian bergerak dan bagian diam. Memahami konsep slip, kecepatan sinkron, dan metode starting adalah fondasi penting bagi siapa pun yang bekerja di lingkungan industri.

Artikel berikutnya akan membahas secara mendalam tentang **metode Star-Delta** dan kapan sebaiknya menggunakannya.
    `},{slug:"starting-star-delta-penjelasan-lengkap",title:"Star-Delta Starting: Mengapa, Bagaimana, dan Kapan Menggunakannya",date:"2026-03-28",readTime:"6 menit",category:"Motor 3 Phase",tags:["star-delta","starting","kontrol motor","panel listrik"],excerpt:"Star-Delta adalah metode starting motor yang paling umum di industri. Artikel ini menjelaskan cara kerjanya, keunggulan, dan limitasinya secara praktikal.",content:`
Star-Delta adalah salah satu metode starting motor yang paling sering ditemui di panel kontrol industri. Hampir setiap teknisi listrik pernah memasang atau memperbaiki rangkaian ini. Namun, apakah Anda benar-benar memahami mengapa metode ini efektif dan apa batasannya?

## Mengapa Arus Starting Motor Besar?

Saat motor pertama kali dinyalakan, rotor dalam keadaan diam. Artinya, slip = 1 (100%). Pada kondisi ini, GGL balik (back-EMF) dari rotor masih nol, sehingga impedansi rangkaian sangat rendah. Arus yang mengalir bisa mencapai **5–8 kali arus nominal**.

Arus ini menyebabkan:
- Voltage drop pada jaringan listrik
- Gangguan pada peralatan lain yang terhubung
- Tekanan mekanis pada komponen motor dan kopling

## Prinsip Kerja Star-Delta

Ketika motor dihubungkan dalam konfigurasi **bintang (Y)**, tegangan yang dirasakan oleh masing-masing belitan motor adalah:

\`\`\`
V_belitan = V_line / √3
\`\`\`

Jika tegangan line adalah 380V (standar Indonesia), maka tegangan per belitan hanya **220V**.

Daya yang diterima dan arus starting pun turun menjadi **1/3** dari nilai DOL. Setelah motor mencapai sekitar 80–90% kecepatan nominalnya, kontaktor berpindah ke konfigurasi **delta (Δ)** di mana setiap belitan menerima tegangan line penuh (380V).

## Skema Rangkaian

Rangkaian Star-Delta tipikal terdiri dari:

- **KM1** — Main contactor (selalu aktif saat motor ON)
- **KM2** — Star contactor (aktif saat starting)
- **KM3** — Delta contactor (aktif saat running)
- **Timer** — Mengatur durasi fase bintang (biasanya 5–15 detik)
- **TOR (Thermal Overload Relay)** — Proteksi arus lebih

**Urutan kerja:**
1. Tekan tombol START → KM1 dan KM2 aktif (mode bintang)
2. Timer berjalan selama waktu yang diset
3. Timer selesai → KM2 mati, KM3 aktif (mode delta)
4. Motor berjalan normal

**Penting:** KM2 dan KM3 harus saling interlock (tidak boleh aktif bersamaan) untuk mencegah short circuit.

## Keunggulan dan Kekurangan

**Keunggulan:**
- Biaya murah dan konstruksi relatif sederhana
- Mengurangi arus starting menjadi 1/3 dari DOL
- Handal dan sudah teruji di berbagai aplikasi

**Kekurangan:**
- Torsi starting juga turun menjadi 1/3—tidak cocok untuk beban dengan inersia tinggi
- Ada transien arus saat perpindahan bintang ke delta (current spike)
- Memerlukan motor dengan 6 terminal yang bisa diakses

## Kapan Menggunakan Star-Delta?

Star-Delta **cocok** untuk:
- Pompa sentrifugal
- Fan dan blower
- Conveyor belt ringan
- Kompresor dengan unloader

Star-Delta **tidak cocok** untuk:
- Beban dengan torsi awal tinggi (crusher, mesin press)
- Motor yang harus langsung berbeban saat starting
- Aplikasi yang memerlukan kontrol kecepatan

## Mengatur Waktu Timer

Memilih waktu timer yang tepat sangat penting. Terlalu singkat → motor belum cukup cepat saat berpindah ke delta → arus spike besar. Terlalu lama → belitan star mengalami tekanan panas berlebih.

Aturan praktis: Set timer sehingga arus pada ammeter sudah turun mendekati arus nominal sebelum perpindahan terjadi. Biasanya 5–10 detik untuk motor 15–75 kW.

## Penutup

Star-Delta tetap menjadi solusi yang ekonomis dan handal untuk banyak aplikasi. Memahami batasannya akan membantu Anda memilih metode yang tepat dan mencegah masalah di lapangan. Jika kebutuhan Anda adalah kontrol kecepatan atau torsi starting tinggi, pertimbangkan Soft Starter atau VFD.
    `},{slug:"motor-1-phase-kapasitor-dan-prinsip-kerja",title:"Motor 1 Phase: Jenis, Kapasitor, dan Cara Kerjanya",date:"2026-03-15",readTime:"7 menit",category:"Motor 1 Phase",tags:["motor 1 phase","kapasitor","split phase","CSIR","CSCR"],excerpt:"Motor 1 phase tidak sesederhana yang terlihat. Ada beberapa jenis dengan karakteristik yang sangat berbeda. Pahami perbedaan kapasitor start, kapasitor run, dan shaded pole.",content:`
Motor satu phase sering dianggap "saudara kecil" dari motor tiga phase, tapi sebenarnya motor ini memiliki tantangan fisika tersendiri yang menarik. Masalah utamanya: satu fase tunggal tidak bisa menghasilkan medan magnet berputar secara natural. Lalu bagaimana motor ini bisa berputar?

## Problem Fundamental Motor 1 Phase

Sumber listrik satu phase hanya menghasilkan medan magnet yang **berosilasi bolak-balik** (bukan berputar). Medan ini bisa diuraikan menjadi dua komponen yang berputar berlawanan arah dengan kecepatan yang sama. Hasilnya, torsi bersih pada rotor yang diam adalah **nol**—motor tidak bisa self-starting.

Solusinya adalah membuat **fase kedua** secara artifisial menggunakan berbagai metode. Inilah yang membedakan jenis-jenis motor satu phase.

## Jenis-Jenis Motor 1 Phase

### 1. Split Phase Motor

Menggunakan dua belitan: belitan utama (main winding) dan belitan bantu (auxiliary/start winding). Belitan bantu dirancang dengan resistansi tinggi sehingga arusnya lebih awal fase dari belitan utama—menciptakan perbedaan fase yang cukup untuk menghasilkan torsi awal.

Setelah mencapai ~75% kecepatan sinkron, centrifugal switch memutus belitan bantu.

**Karakteristik:**
- Torsi starting: Sedang (150% nominal)
- Arus starting: Tinggi
- Cocok untuk: Mesin cuci, kipas angin kecil

### 2. Capacitor Start (CSIR — Capacitor Start Inductor Run)

Mirip dengan split phase, tapi belitan bantu dihubungkan seri dengan kapasitor. Kapasitor menggeser fase arus bantu hampir 90° terhadap arus utama, menghasilkan torsi starting yang jauh lebih baik.

Kapasitor ini adalah **kapasitor elektrolit** (polarized) berukuran besar—hanya dirancang untuk operasi singkat. Centrifugal switch memutusnya setelah motor mencapai kecepatan kerja.

**Karakteristik:**
- Torsi starting: Tinggi (275–350% nominal)
- Arus starting: Moderat
- Cocok untuk: Kompresor, pompa, peralatan dengan beban awal tinggi

### 3. Capacitor Start Capacitor Run (CSCR)

Menggunakan **dua kapasitor**: kapasitor besar untuk starting (elektrolit, diputus centrifugal switch) dan kapasitor kecil untuk running (kapasitor film/metalised polypropylene, tetap terhubung).

Kapasitor run membuat motor beroperasi lebih efisien dan faktor daya lebih baik saat running.

**Karakteristik:**
- Torsi starting: Tinggi
- Efisiensi running: Terbaik di antara semua jenis
- Suara: Lebih halus
- Cocok untuk: AC split, pompa air premium, peralatan yang butuh running efisien

### 4. Permanent Split Capacitor (PSC)

Hanya satu kapasitor yang selalu terhubung (tidak ada centrifugal switch). Kapasitor ini berukuran kecil dan dirancang untuk operasi kontinyu.

**Karakteristik:**
- Torsi starting: Rendah
- Running: Sangat efisien dan halus
- Keandalan: Tinggi (tidak ada switch mekanis)
- Cocok untuk: Fan AC, pompa sirkulasi, motor-motor yang jarang distartkan berulang kali

### 5. Shaded Pole Motor

Menggunakan "cincin bayangan" (shaded ring) — loop tembaga yang dipasang di salah satu sisi kutub stator. Loop ini menginduksikan arus yang membuat sebagian kutub mengalami pergeseran fase, menciptakan efek berputar yang sangat lemah.

**Karakteristik:**
- Torsi starting: Sangat rendah
- Efisiensi: Rendah (hanya 20–30%)
- Keunggulan: Sangat murah, tidak ada komponen mekanis
- Cocok untuk: Kipas kecil, peralatan rumah tangga daya rendah

## Memilih Kapasitor yang Tepat

Kapasitor rusak adalah salah satu penyebab motor 1 phase tidak mau jalan atau mengumam tanpa berputar. Berikut panduan memilih pengganti:

| Parameter | Kapasitor Start | Kapasitor Run |
|-----------|----------------|---------------|
| Jenis | Elektrolit (AC) | Film/Metalised |
| Rating | µF besar (50-500µF) | µF kecil (1-50µF) |
| Tegangan | 125V atau 250V AC | 370V atau 440V AC |
| Duty | Intermittent | Continuous |

**Ciri kapasitor rusak:**
- Motor tidak mau start (hanya mendengung)
- Motor lambat mencapai kecepatan penuh
- Motor terlalu panas

Mengukur kapasitor: Gunakan multimeter dengan fungsi kapasitansi dan bandingkan dengan rating di label kapasitor. Toleransi ±10% masih acceptable.

## Arah Putaran

Arah putaran motor kapasitor bisa dibalik dengan **membalik koneksi belitan bantu terhadap belitan utama** (atau sebaliknya). Caranya: tukar dua terminal dari belitan bantu.

Ini berguna untuk pompa sumur yang dipasang terbalik atau mesin yang membutuhkan reversing.

## Penutup

Motor satu phase memang lebih kompleks dari yang terlihat. Memahami perbedaan jenis-jenisnya akan sangat membantu dalam troubleshooting dan memilih motor yang tepat untuk suatu aplikasi. Di artikel selanjutnya, kita akan membahas cara membaca nameplate motor dan apa arti setiap parameternya.
    `},{slug:"membaca-nameplate-motor-listrik",title:"Cara Membaca Nameplate Motor Listrik: Panduan Lengkap untuk Teknisi",date:"2026-03-05",readTime:"5 menit",category:"Motor Industri",tags:["nameplate","motor listrik","spesifikasi","IE3"],excerpt:"Nameplate motor mengandung semua informasi penting yang Anda butuhkan. Pelajari cara membaca setiap parameter: daya, tegangan, arus, efisiensi, kelas insulasi, dan IP rating.",content:`
Nameplate atau plat nama motor listrik adalah dokumen teknis terkompak yang pernah ada. Dalam ruang seukuran kartu nama, ia menyimpan semua informasi yang dibutuhkan untuk mengoperasikan, melindungi, dan mengganti motor dengan benar.

Sayangnya, banyak teknisi yang hanya memperhatikan dua hal: **daya (kW)** dan **tegangan (V)**. Padahal ada parameter lain yang sama pentingnya.

## Contoh Nameplate Tipikal

\`\`\`
ABB Motors
Type: M3BP 132 SMA 2
IEC 60034
Frame: 132S
3~ Motor / 50Hz
kW: 7.5     HP: 10
Volt: 380/660    Amp: 16.2/9.4
RPM: 2930    cos φ: 0.87
Ins. Cl.: F    IP: 55
IE3    S1    75kg
\`\`\`

Mari kita bedah satu per satu.

## Parameter Utama

### Daya (kW / HP)
Daya output mekanis motor pada poros. **7.5 kW = 10 HP**. Ini adalah daya yang tersedia untuk memutar beban, bukan daya listrik yang dikonsumsi.

Daya input listrik selalu lebih besar karena ada rugi-rugi:
\`\`\`
P_input = P_output / η
\`\`\`
Untuk motor IE3 7.5 kW, efisiensi sekitar 91%, maka input ≈ 8.24 kW.

### Tegangan (V) dan Arus (A)
Contoh: **380/660V — 16.2/9.4A**

Ini berarti motor bisa dikonfigurasi dua cara:
- **Delta (Δ)** pada 380V → arus 16.2A (jaringan 3 phase Indonesia standar)
- **Star (Y)** pada 660V → arus 9.4A

Kedua konfigurasi menghasilkan daya yang sama. Pemilihan tergantung pada tegangan jaringan yang tersedia.

### Frekuensi (Hz)
50 Hz untuk Indonesia, Eropa, Australia. 60 Hz untuk Amerika Utara. Jangan pernah mengoperasikan motor 50 Hz pada sistem 60 Hz tanpa VFD atau penyesuaian—kecepatan dan arus akan berbeda dari spesifikasi.

### Kecepatan (RPM)
Kecepatan rotor saat **berbeban penuh**. Pada contoh: 2930 rpm menunjukkan motor 2 kutub (kecepatan sinkron 3000 rpm, slip ~2.3%).

### Power Factor (cos φ)
Rasio daya aktif terhadap daya semu. cos φ = 0.87 berarti 87% dari daya semu yang ditarik dari jaringan benar-benar dikonversi menjadi kerja. Sisanya adalah daya reaktif yang harus dikompensasi dengan kapasitor bank jika diperlukan.

## Parameter Proteksi dan Lingkungan

### Kelas Insulasi (Insulation Class)
Menentukan suhu maksimum yang boleh dicapai belitan motor:

| Kelas | Suhu Max Belitan |
|-------|-----------------|
| A     | 105°C           |
| B     | 130°C           |
| F     | 155°C           |
| H     | 180°C           |

Kelas F adalah standar modern. Penting untuk pemilihan relay proteksi thermal.

### IP Rating
IP (Ingress Protection) rating terdiri dari dua angka:
- **Digit pertama**: Proteksi terhadap benda padat (0-6)
- **Digit kedua**: Proteksi terhadap air (0-9)

**IP55**: Terlindung dari debu dan semprotan air dari segala arah — standar untuk motor industri umum.
**IP65**: Terlindung penuh dari debu dan semprotan air bertekanan rendah.

### Kelas Efisiensi (IE)
- **IE1**: Standard
- **IE2**: High
- **IE3**: Premium (wajib di banyak negara untuk daya tertentu)
- **IE4**: Super Premium

### Duty Cycle (S1–S9)
**S1** = Continuous duty — motor beroperasi dengan beban konstan tanpa batas waktu. Ini yang paling umum.
**S2** = Short time duty — hanya beroperasi dalam durasi terbatas.
**S3, S4, dst.** = Berbagai siklus intermittent.

## Informasi Frame

Frame code **132S** mengikuti standar IEC dan menentukan dimensi fisik motor:
- Tinggi poros (shaft height) dari kaki = 132mm
- "S" = ukuran bodi short (ada S, M, L)

Ini penting saat penggantian motor karena menentukan apakah motor baru akan pas dengan dudukan yang ada.

## Tips Praktis

1. **Foto nameplate sebelum motor dipasang** — setelah terpasang, nameplate sering sulit dibaca.
2. **Simpan data di sistem CMMS** — sangat berguna untuk perencanaan spare part dan penggantian.
3. **Periksa tegangan jaringan aktual** — tegangan turun 10% dari nominal bisa meningkatkan arus 10–15%.
4. **Jangan pernah mengganti motor berdasarkan daya saja** — cocokkan juga frame, kelas insulasi, dan IP rating.

Memahami nameplate adalah langkah pertama menuju pengelolaan motor yang profesional.
    `},{slug:"dasar-rangkaian-kontrol-motor-industri",title:"Dasar Rangkaian Kontrol Motor Industri: Dari Tombol Push ke Kontaktor",date:"2026-02-20",readTime:"9 menit",category:"Rangkaian Listrik",tags:["rangkaian kontrol","kontaktor","relay","push button","panel"],excerpt:"Sebelum bisa membaca diagram kontrol yang kompleks, Anda perlu memahami blok bangunan dasarnya: kontak NO/NC, latching circuit, dan interlocking.",content:`
Setiap panel kontrol industri, seberapapun kompleksnya, dibangun dari komponen dan logika yang sama. Jika Anda memahami konsep dasar ini, Anda bisa membaca hampir semua diagram kontrol motor.

## Kontak Normally Open (NO) dan Normally Closed (NC)

Ini adalah fondasi dari semua rangkaian kontrol.

**Normally Open (NO)**: Kontak terbuka (rangkaian terbuka/tidak mengalir) dalam kondisi normal/tidak diaktifkan. Ketika coil diaktifkan, kontak **menutup**.

**Normally Closed (NC)**: Kontak tertutup (rangkaian mengalir) dalam kondisi normal. Ketika coil diaktifkan, kontak **membuka**.

Pada simbol diagram:
- NO digambarkan dengan dua garis paralel tanpa sambungan
- NC digambarkan dengan dua garis paralel dengan garis diagonal

Prinsip yang sama berlaku untuk:
- Tombol push button
- Kontak kontaktor
- Kontak relay
- Thermal overload relay

## Rangkaian Direct On Line (DOL) Sederhana

Ini adalah rangkaian paling mendasar untuk menghidupkan dan mematikan motor.

**Komponen:**
- S0: Tombol STOP (NC)
- S1: Tombol START (NO)
- KM1: Main Contactor
- F2: Thermal Overload Relay (NC contact)

**Cara kerja:**
1. Tekan S1 (NO) → arus mengalir melalui F2(NC) - S0(NC) - S1(NO) → coil KM1 energized
2. KM1 menutup kontak utama → motor berputar
3. Lepas S1 → motor **berhenti** (belum ada latching!)

Ini adalah masalah: kita harus menahan tombol START terus agar motor jalan. Solusinya adalah **rangkaian latching**.

## Latching Circuit (Self-Holding)

Latching circuit menggunakan kontak bantu (auxiliary contact) NO dari kontaktor itu sendiri untuk "mengunci" posisi ON setelah tombol START dilepas.

\`\`\`
Rangkaian kontrol:
  F2(NC) ─┬─ S0(NC) ─┬─ KM1 coil
           │          │
  S1(NO) ──┘  KM1-aux(NO) ─┘
\`\`\`

Kontak bantu KM1 (NO) dipasang **paralel** dengan S1. Ketika S1 ditekan:
1. KM1 energized
2. KM1-aux menutup → "mengunci" rangkaian
3. S1 dilepas → rangkaian tetap terkunci melalui KM1-aux
4. Motor tetap jalan

Motor baru berhenti ketika S0 (STOP, NC) ditekan → rangkaian terbuka → KM1 de-energized → KM1-aux terbuka → latching lepas.

## Interlocking

Interlocking adalah mekanisme keselamatan yang memastikan dua atau lebih kondisi tidak bisa aktif bersamaan. Contoh paling penting: interlocking antara kontaktor Forward dan Reverse.

**Electrical Interlock:**
Kontak NC dari KM_Forward dipasang seri di rangkaian coil KM_Reverse, dan sebaliknya. Jika salah satu aktif, secara fisik tidak mungkin yang lain ikut aktif.

**Mechanical Interlock:**
Menggunakan mekanisme fisik pada kontaktor (tersedia sebagai aksesori) yang secara mekanis memblokir kontaktor lain saat satu aktif.

Untuk aplikasi kritis (Forward-Reverse, Star-Delta), selalu gunakan **keduanya** — electrical dan mechanical interlock.

## Thermal Overload Relay (TOR)

TOR adalah perangkat proteksi yang melindungi motor dari arus lebih yang berkelanjutan. Cara kerjanya:

1. Elemen bimetal dipanaskan oleh arus yang melaluinya
2. Saat arus melebihi setting terlalu lama, bimetal melentur
3. Mekanisme trip membuka kontak NC yang ada di rangkaian kontrol
4. KM1 de-energized → motor berhenti

**Setting arus TOR:** Harus diset pada arus nominal motor (dari nameplate). Biasanya ada range penyesuaian, misalnya 12–18A.

**Reset manual vs otomatis:** Pilih reset manual untuk keamanan—motor tidak akan restart sendiri setelah trip. Perbaiki penyebab overload terlebih dahulu.

## Emergency Stop (E-Stop)

E-Stop adalah kategori khusus yang harus mengikuti standar keselamatan (IEC 60947-5-5, ISO 13850). Karakteristik E-Stop:
- Tombol berwarna **merah** dengan latar **kuning**
- Berupa mushroom head (kepala jamur) yang mudah ditekan
- Latching — tetap tertekan setelah dilepas (harus di-reset manual dengan memutar)
- Kontak NC, dipasang langsung memutus coil kontaktor atau safety relay

Posisi E-Stop dalam rangkaian: **di awal** rangkaian kontrol, sebelum semua kontrol lain. Sehingga selalu menjadi yang pertama memutus.

## Membaca Diagram Kontrol

Tips membaca diagram tangga (ladder diagram):
1. **Baca dari atas ke bawah, kiri ke kanan**
2. **Rail kiri** = fase L (tegangan)
3. **Rail kanan** = Netral/PE
4. **Setiap rung** (baris) adalah satu rangkaian seri
5. Komponen **seri** = logika AND (semua harus terpenuhi)
6. Komponen **paralel** = logika OR (salah satu cukup)

Latching circuit dalam bahasa logika: Motor ON jika (S1 OR KM1-aux) AND S0 AND F2.

## Penutup

Dengan memahami NO/NC, latching, dan interlocking, Anda sudah menguasai 80% dari logika yang digunakan dalam rangkaian kontrol motor. Artikel berikutnya akan membahas bagaimana PLC menggantikan fungsi-fungsi relay konvensional ini dan mengapa itu menguntungkan.
    `},{slug:"sistem-pneumatik-dasar-komponen-dan-cara-kerja",title:"Sistem Pneumatik Dasar: Komponen, Cara Kerja, dan Troubleshooting",date:"2026-02-08",readTime:"10 menit",category:"Pneumatik",tags:["pneumatik","silinder pneumatik","katup solenoid","FRL unit","kompresor"],excerpt:"Pneumatik adalah teknologi yang mengubah udara bertekanan menjadi gerakan mekanis. Pelajari komponen utama, rangkaian dasar, dan cara troubleshooting sistem pneumatik industri.",content:`
Pneumatik — dari kata Yunani *pneuma* yang berarti udara atau napas — adalah teknologi yang memanfaatkan udara terkompresi sebagai media untuk melakukan kerja mekanis. Hampir di setiap pabrik modern, Anda akan menemukan sistem pneumatik: dari buka-tutup katup, clamping pada mesin CNC, robot pick-and-place, hingga sistem pengereman di bus.

Dibandingkan sistem hidrolik, pneumatik lebih bersih, lebih murah, dan lebih mudah dirawat. Dibandingkan aktuator elektrik, pneumatik memberikan rasio daya-berat yang sangat baik dan bisa dioperasikan di lingkungan yang berpotensi mudah terbakar.

## Elemen Utama Sistem Pneumatik

### 1. Kompresor Udara

Sumber energi seluruh sistem. Kompresor mengkonversi energi mekanis (dari motor listrik) menjadi energi potensial dalam bentuk udara bertekanan.

Jenis umum di industri:
- **Reciprocating (Piston)**: Sederhana, cocok untuk kebutuhan intermittent
- **Rotary Screw**: Aliran udara kontinu, lebih efisien untuk kebutuhan besar
- **Centrifugal**: Kapasitas sangat besar, untuk plant-scale system

Tekanan kerja standar industri: **6–7 bar** (87–102 psi). Beberapa aplikasi membutuhkan hingga 10 bar.

### 2. FRL Unit (Filter-Regulator-Lubricator)

Ini adalah "kondisioner udara" yang harus dipasang sebelum udara masuk ke peralatan. FRL terdiri dari tiga modul:

**Filter (F)**: Memisahkan partikel padat, air, dan kontaminan dari udara terkompresi. Elemen filter biasanya bisa dibersihkan atau diganti. Air yang lolos ke sistem adalah penyebab utama korosi dan kerusakan komponen.

**Regulator (R)**: Menjaga tekanan output konstan pada nilai yang diinginkan, terlepas dari fluktuasi tekanan supply. Komponen ini dilengkapi gauge untuk memantau tekanan output. Pengaturan yang tepat penting untuk konsistensi gaya dan kecepatan aktuator.

**Lubricator (L)**: Menyuntikkan kabut oli ke udara untuk melumasi komponen yang bergerak (katup, silinder). Catatan: banyak silinder dan katup modern bersifat *self-lubricating* dan bahkan **tidak boleh** menggunakan lubricator — periksa datasheetnya.

### 3. Katup Solenoid (Directional Control Valve)

Katup solenoid adalah otak dari sistem pneumatik — ia menentukan ke mana udara mengalir dan dengan demikian mengontrol gerakan aktuator.

**Nomenklatur katup:**
- **2/2**: 2 port, 2 posisi (ON/OFF sederhana)
- **3/2**: 3 port, 2 posisi (untuk silinder single-acting)
- **5/2**: 5 port, 2 posisi (untuk silinder double-acting) — paling umum
- **5/3**: 5 port, 3 posisi (dengan posisi tengah)

**Aktuasi:**
- **Solenoid tunggal (single acting)**: Satu solenoid + spring return
- **Solenoid ganda (double acting)**: Dua solenoid, masing-masing untuk satu posisi

Tegangan solenoid standar: 24VDC (paling umum di industri modern), 110VAC, 220VAC.

### 4. Silinder Pneumatik

Aktuator yang mengkonversi energi tekanan udara menjadi gerakan linear.

**Tipe berdasarkan aksi:**
- **Single Acting (SA)**: Udara hanya masuk dari satu sisi; kembali dengan pegas. Digunakan untuk clamping, stamping.
- **Double Acting (DA)**: Udara masuk bergantian dari kedua sisi; kontrol penuh atas kedua arah. Paling umum.

**Parameter penting silinder:**
- **Bore (diameter dalam)**: Menentukan gaya yang dihasilkan
- **Stroke (langkah)**: Jarak gerakan maksimum
- **Operating pressure**: Tekanan kerja rated

**Gaya silinder:**
\`\`\`
F = P × A
\`\`\`
Di mana:
- \`F\` = Gaya (Newton)
- \`P\` = Tekanan (Pascal atau N/m²)
- \`A\` = Luas penampang piston (m²)

Contoh: Silinder bore 80mm, tekanan 6 bar:
- A = π × (0.04)² = 0.005 m²
- F = 600,000 × 0.005 = **3,000 N = 3 kN**

### 5. Flow Control Valve (Throttle)

Mengatur kecepatan gerakan silinder dengan membatasi aliran udara. Ada dua cara pemasangan:

- **Meter In**: Throttle di sisi masuk udara. Kontrol lebih halus tapi kurang stabil.
- **Meter Out**: Throttle di sisi keluar udara. Lebih stabil, **direkomendasikan** untuk sebagian besar aplikasi.

## Rangkaian Dasar: Silinder Double Acting dengan Katup 5/2

Rangkaian paling fundamental:

1. Udara dari kompresor → FRL unit
2. FRL → Port 1 (supply) katup 5/2
3. Saat solenoid A aktif → Port 1 terhubung ke Port 4 → udara masuk ke sisi rod silinder → silinder **masuk**
4. Saat solenoid B aktif → Port 1 terhubung ke Port 2 → udara masuk ke sisi cap silinder → silinder **keluar**
5. Udara yang keluar dari sisi lain dibuang melalui Port 3 atau 5 (melalui silencer)

## Sensor Posisi Silinder

Silinder industri modern biasanya dilengkapi groove (alur) di bodi untuk memasang **reed switch** atau **proximity sensor**. Sensor ini mendeteksi posisi magnet yang ada di piston dan mengirimkan sinyal ke PLC.

Jenis sensor:
- **Reed Switch**: Menggunakan medan magnet, kontak mekanis, harga murah
- **Hall Effect**: Solid state, lebih andal, tidak ada bounce
- **Magneto-resistive**: Presisi tinggi, bisa mendeteksi posisi analog

## Troubleshooting Umum

| Masalah | Kemungkinan Penyebab | Solusi |
|---------|---------------------|--------|
| Silinder tidak bergerak | Tekanan terlalu rendah, solenoid tidak aktif, seal bocor | Cek tekanan, cek sinyal listrik ke solenoid, cek kebocoran |
| Silinder bergerak lambat | Flow control terlalu tertutup, tekanan rendah | Buka flow control, cek tekanan FRL |
| Silinder goyang/tidak stabil | Meter in dipasang, cushion tidak tepat | Ganti ke meter out, adjust cushion screw |
| Kebocoran udara di silinder | Seal piston atau rod seal aus | Ganti repair kit seal |
| Solenoid panas berlebihan | Coil rusak, tegangan tidak sesuai, duty cycle terlalu tinggi | Ukur arus, cek tegangan, ganti coil |
| Air di sistem | Filter tidak berfungsi, kondensasi | Ganti elemen filter, pasang auto drain |

## Perawatan Sistem Pneumatik

- **Harian**: Cek level oli di lubricator, drain manual jika perlu, cek tekanan
- **Mingguan**: Cek seluruh koneksi dari kebocoran (dengan air sabun atau leak detector)
- **Bulanan**: Bersihkan elemen filter, cek kondisi selang dan fitting
- **Tahunan**: Ganti elemen filter, cek kondisi solenoid dan aktuator

Kebocoran udara sering dianggap "normal" di pabrik — padahal tidak. Kebocoran 10% dari kapasitas kompresor bisa menghabiskan jutaan rupiah per tahun dalam biaya listrik.

## Penutup

Sistem pneumatik adalah kombinasi yang elegan dari fisika tekanan, mekanika fluida, dan kontrol logika. Dengan memahami fungsi setiap komponen dan cara mereka berinteraksi, Anda bisa merancang, mengoperasikan, dan memperbaiki sistem pneumatik dengan percaya diri.
    `},{slug:"vfd-variable-frequency-drive-panduan-teknisi",title:"VFD (Variable Frequency Drive): Panduan Teknisi dari Instalasi hingga Parameter",date:"2026-01-22",readTime:"11 menit",category:"Motor Industri",tags:["VFD","inverter","kontrol kecepatan","harmonisa","parameter"],excerpt:"VFD adalah salah satu teknologi paling berdampak dalam efisiensi energi industri. Artikel ini membahas cara kerja, instalasi yang benar, parameter penting, dan cara menghindari masalah umum.",content:`
Variable Frequency Drive (VFD) — juga dikenal sebagai inverter, variable speed drive, atau adjustable frequency drive — adalah perangkat elektronika daya yang mengontrol kecepatan motor AC dengan mengubah frekuensi dan tegangan yang diberikan ke motor.

Investasi pada VFD bisa memberikan penghematan energi 20–50% pada aplikasi yang tepat, terutama pompa dan fan yang beroperasi dengan beban parsial.

## Cara Kerja VFD

VFD bekerja dalam tiga tahap konversi:

**1. Rectifier (AC → DC)**
Input AC dari jaringan diubah menjadi DC menggunakan diode bridge rectifier. Hasilnya adalah tegangan DC dengan riple yang masih cukup besar.

**2. DC Bus (Filter/Capacitor Bank)**
Kapasitor besar meratakan tegangan DC dan menyimpan energi. Tegangan DC bus biasanya sekitar 1.35× tegangan AC input (misal: 380V AC → ~513V DC).

**3. Inverter (DC → Variable AC)**
IGBT (Insulated Gate Bipolar Transistor) switching dengan sangat cepat menggunakan teknik PWM (Pulse Width Modulation) untuk menghasilkan gelombang AC sinusoidal semu dengan frekuensi dan tegangan yang bisa diatur.

Dengan mengatur frekuensi output, kita bisa mengatur kecepatan motor karena:
\`\`\`
N ∝ f
\`\`\`
Kecepatan motor berbanding lurus dengan frekuensi sumber.

Tegangan juga harus dikontrol proporsional dengan frekuensi (rasio V/f konstan) agar fluks magnet di motor tetap optimal.

## Benefit VFD

### Penghematan Energi
Untuk pompa dan fan, daya yang dikonsumsi berbanding dengan **pangkat tiga** dari kecepatan (Affinity Laws):

\`\`\`
P₂/P₁ = (N₂/N₁)³
\`\`\`

Artinya: Mengurangi kecepatan 20% → daya turun menjadi (0.8)³ = **51%** dari daya semula!

Ini mengapa VFD pada pompa air chiller, cooling tower, dan supply air AHU sangat menguntungkan.

### Soft Starting
VFD bisa menaikkan frekuensi secara bertahap dari 0Hz, sehingga arus starting hanya sekitar **100–150% nominal** — jauh lebih kecil dari DOL (500–800%).

### Kontrol Presisi
Kecepatan bisa diatur hingga 0.1% akurasi. Sangat berguna untuk proses yang membutuhkan kecepatan tepat: ekstruder plastik, mesin kertas, conveyor.

### Proteksi Motor Terintegrasi
VFD modern memiliki proteksi built-in: overload, overvoltage, undervoltage, phase loss, overheat motor (dengan PTC input), ground fault.

## Instalasi yang Benar

### Jarak Kabel Motor

Panjang kabel antara VFD dan motor adalah parameter kritis yang sering diabaikan. PWM dari VFD menghasilkan tegangan transien (voltage spikes) yang amplitudonya bergantung pada panjang kabel. Kabel panjang bisa menyebabkan:
- Tegangan spike melebihi rating insulasi motor
- Bearing erosion akibat arus parasit
- Interferensi EMC

**Rekomendasi:**
- < 20 meter: Biasanya tidak ada masalah
- 20–100 meter: Pertimbangkan output choke atau dV/dt filter
- > 100 meter: Wajib gunakan output choke dan/atau sinewave filter; gunakan motor "inverter duty"

### Grounding

Grounding yang benar adalah kunci menghindari masalah EMC dan melindungi peralatan:
- Pasang kabel PE (ground) terpisah dari kabel motor
- Gunakan kabel berpelindung (shielded cable) untuk kabel kontrol sinyal analog
- Ground shield **hanya di sisi VFD**, bukan di motor
- Hindari ground loop

### Ventilasi

VFD menghasilkan panas yang signifikan (tipikal efisiensi VFD 97–98%, artinya 2–3% daya dibuang sebagai panas). Pastikan panel dikondisikan dengan baik:
- Clearance minimum di atas dan bawah VFD sesuai manual
- Suhu ambient tidak melebihi rating (biasanya 40°C tanpa derating)
- Filter panel dibersihkan rutin

## Parameter Penting

Ini adalah parameter yang harus dikonfigurasi dengan benar saat commissioning:

### Motor Nameplate Parameters
Masukkan data dari nameplate motor dengan tepat:
- Rated voltage (V)
- Rated current (A)
- Rated frequency (Hz)
- Rated power (kW)
- Rated speed (RPM)

VFD menggunakan data ini untuk kalkulasi proteksi dan kontrol vektor.

### Acceleration/Deceleration Time
- **Accel time**: Waktu dari 0 ke frekuensi maksimum. Terlalu cepat → overcurrent trip.
- **Decel time**: Waktu dari maks ke 0. Terlalu cepat → overvoltage trip (energi regeneratif dari motor mengisi kapasitor DC bus).

Mulai dengan nilai aman (10–30 detik), lalu turunkan sesuai kebutuhan proses.

### Minimum dan Maximum Frequency
- **Min frequency**: Pertimbangkan batas pendinginan motor (fan internal berputar lebih lambat). Biasanya 15–25 Hz untuk motor standar.
- **Max frequency**: Jangan melebihi rating mekanis motor dan beban (bearing, balance).

### V/f Pattern atau Kontrol Vektor
- **V/f Control**: Sederhana, cocok untuk fan/pump tanpa tuntutan dinamis tinggi
- **Sensorless Vector Control (SVC)**: Respons lebih baik, cocok untuk conveyor, mesin produksi
- **Closed Loop Vector (dengan encoder)**: Presisi tinggi, untuk mesin CNC atau winding tension control

### Current Limit
Set pada 110–120% dari arus nominal motor. Melindungi motor saat beban mendadak.

## Masalah Harmonisa

VFD adalah beban non-linear yang menghasilkan harmonisa arus pada jaringan listrik. Harmonisa ini bisa menyebabkan:
- Panas berlebih pada transformator dan kabel
- Interferensi dengan peralatan sensitif (PLC, sensor)
- Error pada pengukuran energi

**Solusi:**
- **Line reactor (AC choke)** di input VFD: Mengurangi harmonisa secara efektif dan murah
- **Active Front End (AFE)**: Untuk sistem besar, memberikan PF mendekati 1.0 dan harmonisa sangat rendah
- **Filter harmonisa pasif**: Tuned untuk harmonisa tertentu (5th, 7th)

## Perawatan VFD

- **Bulanan**: Bersihkan filter udara, cek koneksi terminal (retorque jika perlu)
- **Tahunan**: Cek kondisi kapasitor DC bus (catat log jam operasi)
- **3–5 tahun**: Ganti kapasitor DC bus jika jam operasi sudah tinggi atau ada tanda-tanda degradasi
- **Selalu**: Simpan log fault history dan analisis pola fault

## Penutup

VFD bukan sekadar alat penghemat energi — ia adalah alat kontrol yang memberikan fleksibilitas dan presisi yang tidak mungkin dicapai dengan starter konvensional. Namun, seperti semua teknologi canggih, hasilnya sangat bergantung pada instalasi dan commissioning yang benar.
    `},{slug:"proteksi-motor-listrik-relay-dan-circuit-breaker",title:"Proteksi Motor Listrik: Relay, Circuit Breaker, dan Koordinasi Proteksi",date:"2026-01-10",readTime:"8 menit",category:"Rangkaian Listrik",tags:["proteksi motor","MPCB","relay","circuit breaker","koordinasi proteksi"],excerpt:"Motor yang tidak terlindungi dengan baik adalah motor yang menunggu untuk rusak. Pelajari berbagai jenis proteksi, cara kerjanya, dan bagaimana memilih yang tepat.",content:`
Proteksi motor listrik adalah investasi yang melindungi aset yang jauh lebih mahal. Sebuah motor 7.5 kW mungkin berharga 5–10 juta rupiah; downtime dan penggantian bisa jauh lebih mahal lagi. Sistem proteksi yang tepat adalah perbedaan antara trip yang cepat diselesaikan dan kegagalan katastrofik.

## Ancaman Utama pada Motor

Sebelum memilih proteksi, pahami dulu apa yang bisa merusak motor:

**1. Arus Lebih (Overload)**
Penyebab paling umum kerusakan motor. Arus lebih menyebabkan panas berlebih pada belitan, mempercepat degradasi insulasi. Setiap kenaikan 10°C di atas rating insulasi memotong setengah umur insulasi (Montsinger Rule).

Penyebab overload: beban mekanis terlalu berat, motor underrated, phase loss (motor 3 phase beroperasi dengan 2 phase).

**2. Arus Hubung Singkat (Short Circuit)**
Arus sangat besar dalam waktu sangat singkat. Bisa terjadi karena kegagalan insulasi, kesalahan kabel, atau kerusakan komponen. Proteksi harus sangat cepat.

**3. Phase Failure / Phase Unbalance**
Salah satu phase hilang → motor mencoba beroperasi dengan 2 phase → arus naik drastis di dua belitan yang tersisa → terbakar. Ini penyebab banyak kerusakan motor 3 phase.

Ketidakseimbangan phase > 2% dapat menyebabkan peningkatan suhu motor yang signifikan.

**4. Under/Over Voltage**
Tegangan rendah → arus naik untuk mempertahankan daya. Tegangan tinggi → saturasi magnetik, arus magnetisasi naik.

**5. Stall / Locked Rotor**
Motor tidak berputar tapi diberi tegangan → arus sangat besar (5–8× nominal). Dalam beberapa detik bisa menyebabkan kerusakan.

## Perangkat Proteksi

### Thermal Overload Relay (TOR)

Perangkat klasik berbasis elemen bimetal. Cara kerja: elemen bimetal dipanaskan oleh arus, melengkung saat panas berlebih, mentrigger kontak trip.

**Kelebihan:** Murah, sederhana, andal
**Kekurangan:** 
- Hanya melindungi terhadap overload
- Tidak bisa proteksi phase loss secara efektif (beberapa model ada)
- Waktu trip bergantung pada sejarah thermal (thermal memory)
- Tidak akurat untuk kondisi starting yang panjang

**Setting:** Biasanya diset pada 100–110% arus nominal motor.

### Motor Protection Circuit Breaker (MPCB)

Kombinasi circuit breaker dan overload relay dalam satu unit. Memberikan proteksi:
- **Overload**: Via bimetal (seperti TOR)
- **Short circuit**: Via magnetic trip (instantaneous)
- **Switching**: Bisa digunakan sebagai isolator (jika sesuai rated)

Untuk panel motor kecil (hingga ~45 kW), MPCB + kontaktor adalah solusi yang populer.

### Electronic / Digital Motor Protection Relay

Relay proteksi berbasis mikroprosesor yang memberikan proteksi komprehensif. Contoh fungsi:

- **Overload (49)**: Thermal model, lebih akurat dari bimetal
- **Phase loss (46)**: Deteksi kehilangan satu phase
- **Phase unbalance (46)**: Deteksi ketidakseimbangan arus
- **Stall protection (48/51LR)**: Arus besar pada kecepatan rendah
- **Undercurrent (37)**: Deteksi kehilangan beban (cavitasi pompa, belt putus)
- **Ground fault (50N/51N)**: Arus bocor ke bumi

Relay digital biasanya juga memiliki komunikasi (Modbus, Profibus) sehingga bisa diintegrasikan ke sistem monitoring.

### Thermal Monitoring (PTC/PT100)

Untuk motor kritis, sensor suhu langsung di belitan motor memberikan proteksi terbaik:

**PTC Thermistor**: Resistansi naik tajam saat mencapai suhu kritis. Dihubungkan ke relay khusus yang akan trip jika resistansi melebihi threshold. Murah dan efektif.

**PT100**: Resistansi meningkat linear dengan suhu. Lebih akurat, bisa dimonitoring secara kontinyu. Digunakan pada motor besar atau kritis.

## Koordinasi Proteksi

Koordinasi adalah konsep yang memastikan saat terjadi gangguan, proteksi yang paling dekat dengan titik gangguan yang trip terlebih dahulu — bukan proteksi yang lebih hulu.

Tujuannya: **minimalisasi area pemadaman**. Satu mesin yang bermasalah seharusnya tidak mematikan seluruh panel atau plant.

**Selective Coordination:**
- Fuse atau MPCB di feeder motor harus trip sebelum MPCB distribusi di atasnya
- Setting waktu relay di panel distribusi harus lebih lambat dari relay di panel lokal

**Cara memeriksa koordinasi:**
Gunakan time-current characteristic curve dari semua perangkat proteksi dan plot di atas satu grafik. Kurva yang benar tidak boleh saling berpotongan (yang upstream harus selalu di atas yang downstream pada semua level arus).

## Pemilihan Proteksi yang Tepat

| Aplikasi | Rekomendasi Proteksi |
|----------|---------------------|
| Motor kecil (<5.5 kW) | MPCB + kontaktor |
| Motor menengah (5.5–55 kW) | MPCB atau CB + Kontaktor + TOR |
| Motor besar (>55 kW) | CB + Kontaktor + Digital Motor Protection Relay |
| Motor kritis (pompa utama, kompresor utama) | CB + Kontaktor + Digital Relay + PTC/PT100 |
| Motor di area berbahaya (Ex zone) | Sesuai spesifikasi ATEX/Ex, digital relay Ex-rated |

## Commissioning Proteksi Motor

Setelah instalasi, verifikasi proteksi:

1. **Cek setting TOR/relay** sesuai arus nominal nameplate
2. **Lakukan primary injection test** untuk overload (jika diperlukan)
3. **Test phase loss**: Matikan satu phase, pastikan relay trip
4. **Test emergency stop**: Pastikan rangkaian E-Stop berfungsi
5. **Dokumentasikan semua setting** — simpan dalam sistem manajemen aset

## Penutup

Proteksi motor yang baik bukan tentang memilih relay yang paling mahal, tapi tentang memahami ancaman yang spesifik pada aplikasi Anda dan memilih solusi yang tepat sasaran. Investasi 10% dari harga motor untuk proteksi yang baik bisa menghindarkan Anda dari kerugian jauh lebih besar.
    `},{slug:"troubleshooting-motor-tidak-mau-jalan",title:"Troubleshooting Motor Tidak Mau Jalan: Pendekatan Sistematis di Lapangan",date:"2025-12-28",readTime:"7 menit",category:"Motor Industri",tags:["troubleshooting","motor rusak","diagnosa","multimeter","megger"],excerpt:"Motor mati di tengah produksi adalah situasi yang menegangkan. Artikel ini memberikan pendekatan troubleshooting yang sistematis agar Anda bisa diagnosa masalah dengan cepat dan akurat.",content:`
Motor berhenti. Produksi terganggu. Semua orang menunggu Anda untuk memberikan jawaban. Situasi seperti ini membutuhkan kepala yang dingin dan pendekatan yang sistematis — bukan kepanikan dan mengganti komponen secara acak.

Artikel ini memberikan framework troubleshooting yang bisa diterapkan di lapangan dengan peralatan yang tersedia.

## Langkah 1: Amati dan Kumpulkan Informasi

Sebelum menyentuh apapun, kumpulkan informasi sebanyak mungkin:

- **Apa yang terjadi saat motor berhenti?** Trip relay? Langsung mati? Asap? Suara aneh?
- **Kapan terakhir motor berfungsi normal?**
- **Ada perubahan apa sebelum motor mati?** Perawatan, perubahan produksi, perubahan beban?
- **Kondisi motor saat ditemukan?** Terlalu panas? Bau terbakar? Ada kerusakan fisik?

Informasi ini seringkali langsung menunjuk ke akar masalah.

## Langkah 2: Cek Panel Kontrol Terlebih Dahulu

80% masalah "motor mati" sebenarnya ada di sistem kontrol, bukan di motor itu sendiri. Cek secara berurutan:

**Proteksi yang trip:**
- Apakah TOR (Thermal Overload Relay) dalam posisi trip? Reset dan coba hidupkan sambil amati arus.
- Apakah MPCB trip? Kenapa? Overload atau short circuit?
- Apakah ada alarm di display panel?

**Power supply:**
- Ukur tegangan di terminal input panel: Tiga phase seimbang?
- Ukur tegangan di output kontaktor ke motor saat ON.
- Cek MCB/fuse di feeder panel.

**Rangkaian kontrol:**
- Apakah ada tegangan di supply kontrol (biasanya 24VDC atau 220VAC)?
- Saat tombol START ditekan, apakah coil kontaktor mendapat tegangan?
- Cek kondisi tombol push button, kontak relay, dan kabel kontrol.

**Kontaktor:**
- Saat coil diberi tegangan, apakah kontaktor menutup?
- Ukur resistansi coil (buka panel, matikan daya terlebih dahulu).
- Cek kondisi kontak utama — karbon, terbakar, atau aus?

## Langkah 3: Cek Kabel dan Koneksi

Setelah panel OK, periksa jalur kabel ke motor:

- **Cek terminal koneksi di motor**: Apakah ada yang longgar, terbakar, atau korosi?
- **Cek kabel secara visual**: Ada yang terjepit, terpotong, atau isolasi rusak?
- **Ukur kontinuitas kabel** (dengan power OFF, motor dilepas) menggunakan multimeter.
- **Ukur insulasi kabel** dengan megger (insulation resistance tester).

## Langkah 4: Ukur Resistansi Belitan Motor

Dengan power OFF dan motor dilepas dari panel, ukur resistansi antara terminal motor menggunakan multimeter:

Untuk motor 3 phase (terminal U, V, W):
- U-V, V-W, U-W: Harus sama/simetris (selisih < 5%)
- U-PE, V-PE, W-PE: Harus sangat tinggi (> 1MΩ minimal)

Jika ada perbedaan besar atau hubungan ke PE → indikasi kerusakan belitan.

## Langkah 5: Insulation Resistance Test (Megger Test)

Ini adalah tes wajib untuk diagnosa kondisi insulasi motor. Gunakan insulation resistance tester (megger) dengan tegangan tes 500V DC untuk motor 380V.

**Prosedur:**
1. Pastikan motor benar-benar terputus dari semua sumber daya
2. Hubungkan semua terminal motor jadi satu (U+V+W)
3. Ukur resistansi ke ground (PE/bodi motor)
4. Catat hasil dalam MΩ

**Interpretasi hasil:**

| Nilai IR | Kondisi |
|---------|---------|
| > 100 MΩ | Sangat baik |
| 10–100 MΩ | Baik |
| 1–10 MΩ | Perlu perhatian, monitor berkala |
| 0.5–1 MΩ | Buruk, rencanakan perbaikan |
| < 0.5 MΩ | Berbahaya, jangan dioperasikan |

Untuk motor lama yang sudah beroperasi, nilai 1 MΩ masih bisa diterima untuk operasi singkat darurat, tapi harus segera diperbaiki.

## Langkah 6: Cek Mekanis

Motor bisa terhambat oleh masalah mekanis:

- **Cek apakah poros bisa diputar dengan tangan** (motor dimatikan). Harusnya bisa berputar dengan mulus.
- **Dengarkan suara abnormal** saat diputar: Suara gesekan → bearing rusak atau rotor menyentuh stator.
- **Cek kopling atau V-belt**: Apakah ada yang macet atau putus?
- **Cek beban**: Apakah pompa/fan/conveyor macet?

## Kesimpulan Diagnosa Umum

| Gejala | Kemungkinan Penyebab |
|--------|---------------------|
| Motor tidak jalan, tidak ada suara | Tidak ada power, kontaktor tidak menutup, kabel putus |
| Motor mendengung tapi tidak jalan | Fase hilang, beban terlalu berat, bearing macet, kapasitor rusak (motor 1 phase) |
| Motor jalan lalu trip | Overload, phase unbalance, motor terlalu panas |
| Motor bau terbakar | Insulasi rusak, motor locked saat beroperasi |
| Arus tidak seimbang | Phase unbalance dari jaringan, belitan tidak simetris |
| Motor bergetar berlebihan | Unbalance pada beban, bearing aus, rotor bengkok, alignment buruk |

## Tip Penting: Jangan Langsung Ganti Motor

Banyak motor diganti karena dianggap "rusak" padahal masalahnya ada di kapasitor (motor 1 phase), bearing, atau kontaktor. Selalu lakukan diagnosa sistematis terlebih dahulu.

Jika motor terbakar, jangan langsung dibuang — analisis penyebabnya. Jika penyebabnya tidak diperbaiki, motor pengganti akan bernasib sama.

## Penutup

Troubleshooting yang efektif bukan soal pengalaman saja, tapi soal pendekatan yang terstruktur. Dengan mengikuti urutan yang benar — panel → kabel → motor → mekanis — Anda bisa menemukan masalah dengan lebih cepat dan akurat, bahkan dalam situasi tekanan tinggi di lapangan.
    `},{slug:"hukum-ohm-dan-kirchhoff-aplikasi-praktis",title:"Hukum Ohm dan Kirchhoff: Dari Teori ke Aplikasi Nyata di Lapangan",date:"2025-12-15",readTime:"6 menit",category:"Rangkaian Listrik",tags:["hukum ohm","kirchhoff","KVL","KCL","dasar listrik"],excerpt:"Hukum Ohm dan Kirchhoff bukan sekadar rumus untuk ujian. Pahami bagaimana hukum-hukum ini bisa diaplikasikan langsung untuk menganalisis rangkaian dan troubleshooting di lapangan.",content:`
Hukum Ohm dan Hukum Kirchhoff adalah dua pilar yang menopang seluruh analisis rangkaian listrik. Meski terdengar akademis, pemahaman yang solid tentang kedua hukum ini akan langsung berguna saat Anda menganalisis masalah di panel atau mengukur tegangan drop di kabel panjang.

## Hukum Ohm: Lebih dari Sekedar V = IR

Semua orang tahu V = IR. Tapi seberapa dalam Anda memahami implikasinya?

**Hukum Ohm:**
\`\`\`
V = I × R
I = V / R
R = V / I
\`\`\`

**Implikasi praktis yang sering diabaikan:**

### 1. Voltage Drop pada Kabel

Kabel memiliki resistansi. Kabel tembaga 2.5mm² memiliki resistansi sekitar 7.4 mΩ/m. Untuk kabel panjang 50 meter bolak-balik (total 100m):

\`\`\`
R = 7.4 mΩ/m × 100 m = 740 mΩ = 0.74 Ω
\`\`\`

Motor dengan arus 20A akan menyebabkan voltage drop:
\`\`\`
V_drop = I × R = 20 × 0.74 = 14.8 V
\`\`\`

Tegangan di motor hanya 380 - 14.8 = **365.2V** — sudah turun hampir 4%!

Untuk motor, voltage drop > 5% dari nominal sudah mulai berpengaruh pada performa. Itulah mengapa pemilihan ukuran kabel yang tepat sangat penting, terutama untuk kabel panjang.

### 2. Arus Saat Resistansi Berubah

Jika insulasi motor mulai bocor (ground fault dengan resistansi), arus kebocoran bisa dihitung:

Motor dengan insulasi 1 MΩ ke ground, supply 380V:
\`\`\`
I_bocor = V / R = 380 / 1,000,000 = 0.38 mA
\`\`\`

Masih sangat kecil dan tidak terdeteksi oleh proteksi biasa, tapi cukup untuk mempercepat degradasi insulasi lebih lanjut.

## Hukum Kirchhoff I (KCL): Hukum Arus

*"Jumlah arus yang masuk ke sebuah titik (node) sama dengan jumlah arus yang keluar."*

Dalam notasi matematika:
\`\`\`
ΣI_masuk = ΣI_keluar
\`\`\`

**Aplikasi praktis:**

Mengukur arus di panel distribusi: jika arus di incoming = 100A dan Anda punya 4 cabang, jumlah arus di 4 cabang tersebut harus = 100A. Jika tidak, ada kabel yang tidak terukur (atau ada sambungan ilegal).

Dalam rangkaian paralel, arus total = jumlah arus masing-masing cabang:
\`\`\`
I_total = I₁ + I₂ + I₃ + ...
\`\`\`

## Hukum Kirchhoff II (KVL): Hukum Tegangan

*"Jumlah aljabar semua tegangan dalam sebuah loop tertutup sama dengan nol."*

\`\`\`
ΣV = 0 (dalam satu loop)
\`\`\`

Atau dengan cara lain: Jumlah voltage drop = Jumlah tegangan sumber.

**Aplikasi praktis:**

Analisis rangkaian kontrol: tegangan supply 24VDC mengalir melalui kabel (drop 0.5V), kontak relay (drop 0.2V), kontak push button (drop 0.1V), dan coil kontaktor. Maka tegangan di coil kontaktor = 24 - 0.5 - 0.2 - 0.1 = **23.2V**.

Jika coil membutuhkan minimal 20V untuk operasi, sistem masih aman. Tapi jika ada tambahan resistansi (kontak kotor, kabel longgar), tegangan di coil bisa turun di bawah threshold dan kontaktor tidak bisa pull-in dengan andal.

## Rangkaian Seri vs Paralel

### Rangkaian Seri
- Arus sama di semua komponen: I₁ = I₂ = I₃
- Tegangan terbagi: V_total = V₁ + V₂ + V₃
- Resistansi total: R_total = R₁ + R₂ + R₃

**Contoh praktis:** Dua lampu seri dengan sumber yang sama → jika satu putus, keduanya mati.

### Rangkaian Paralel
- Tegangan sama di semua cabang: V₁ = V₂ = V₃
- Arus terbagi: I_total = I₁ + I₂ + I₃
- Resistansi total: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃

**Contoh praktis:** Beban-beban di rumah/pabrik semuanya paralel terhadap tegangan supply — tegangan di setiap beban sama, arus totalnya dijumlah.

## Mengukur Voltage Drop di Lapangan

Teknik pengukuran voltage drop yang benar:
1. Ukur tegangan di titik supply (terminal panel)
2. Ukur tegangan di titik beban (terminal motor)
3. Selisihnya adalah voltage drop

Pastikan motor beroperasi dengan beban normal saat pengukuran — resistansi kabel konstan tapi arus berubah dengan beban.

Voltage drop pada kabel kontrol 24VDC sering menjadi penyebab kontaktor tidak mau pull-in atau relay tidak aktif — terutama pada instalasi lama dengan kabel tipis dan koneksi yang sudah terkorosi.

## Daya Listrik: Ekstensi Hukum Ohm

Dari hukum Ohm, daya bisa dinyatakan dalam tiga cara:
\`\`\`
P = V × I
P = I² × R    (rugi-rugi panas pada resistansi)
P = V² / R
\`\`\`

**I² × R** adalah formula kunci untuk menghitung panas yang dihasilkan oleh hambatan (termasuk hambatan kabel dan hambatan kontak). Ini menjelaskan mengapa arus besar sangat berbahaya — panas naik kuadrat terhadap arus.

## Penutup

Hukum Ohm dan Kirchhoff bukan sekadar hafalan untuk ujian. Mereka adalah alat analisis yang bekerja setiap hari di setiap rangkaian listrik. Dengan membiasakan diri berpikir dalam framework KVL dan KCL, Anda akan lebih cepat menemukan akar masalah di lapangan dan lebih akurat dalam merancang atau memperbaiki sistem kelistrikan.
    `},{slug:"pengenalan-plc-siemens-s7-1200",title:"Pengantar PLC Siemens S7-1200: Dari Wiring hingga Program Pertama",date:"2025-12-01",readTime:"12 menit",category:"Motor Industri",tags:["PLC","Siemens","S7-1200","ladder diagram","TIA Portal"],excerpt:"PLC adalah otak dari sistem otomasi modern. Artikel ini memperkenalkan PLC Siemens S7-1200 — hardware-nya, cara wiring I/O, dan membuat program kontrol motor pertama Anda.",content:`
PLC (Programmable Logic Controller) adalah komputer industri yang dirancang khusus untuk mengontrol proses otomasi. Berbeda dengan komputer biasa, PLC dirancang untuk beroperasi di lingkungan industri yang keras: getaran, suhu ekstrem, debu, dan interferensi elektromagnetik.

Artikel ini menggunakan Siemens SIMATIC S7-1200 sebagai referensi, salah satu PLC paling populer di industri kecil-menengah.

## Mengapa PLC Menggantikan Relay Konvensional?

Rangkaian relay konvensional memiliki keterbatasan:
- Modifikasi logika = bongkar dan pasang ulang kabel fisik
- Panel besar dan kompleks untuk logika yang rumit
- Debugging sulit — harus trace satu per satu
- Tidak ada data logging atau komunikasi jaringan

PLC menyelesaikan semua masalah ini:
- Ubah logika = edit program di software
- Panel lebih kecil (I/O module menggantikan banyak relay)
- Monitoring real-time, force I/O untuk testing
- Komunikasi Ethernet, Profibus, Modbus built-in

## Anatomi Siemens S7-1200

### CPU Module
Otak PLC. Berisi processor, memory program (Work Memory), dan sejumlah I/O onboard. Seri S7-1200 ada beberapa CPU:
- **CPU 1211C**: I/O onboard terkecil, cocok untuk aplikasi sederhana
- **CPU 1214C**: I/O lebih banyak, paling populer
- **CPU 1215C**: Dengan Ethernet port kedua, cocok untuk HMI + SCADA

Setiap CPU memiliki tiga jenis I/O onboard:
- **DI** (Digital Input): 24VDC, deteksi sensor/tombol
- **DQ** (Digital Output): Transistor atau relay, untuk kontaktor/solenoid
- **AI** (Analog Input): 0-10V atau 4-20mA, untuk sensor analog (beberapa CPU)

### Signal Module (SM)
Modul ekspansi untuk menambah I/O. Dipasang di sebelah CPU. Ada SM untuk:
- Digital input/output tambahan
- Analog input/output
- High-speed counter
- Motion control

### Signal Board (SB)
Modul mini yang dipasang langsung di dalam housing CPU, untuk ekspansi I/O kecil tanpa menggunakan slot SM.

### Communication Module (CM)
Untuk komunikasi: RS232, RS485 (Modbus RTU), PROFIBUS, AS-i.

## Power Supply dan Wiring Dasar

### Power Supply PLC
S7-1200 beroperasi pada **24VDC** (dari power supply eksternal, biasanya 24VDC switching power supply). Ini juga digunakan sebagai tegangan I/O.

Untuk panel yang lebih besar, pisahkan power supply untuk:
- PLC dan I/O digital
- Output yang langsung menggerakkan kontaktor/solenoid (terutama jika ada beban induktif besar)

### Wiring Digital Input

Input S7-1200 menggunakan tegangan **24VDC**:
- Terminal **M** = 0V (minus)
- Terminal **1M** = Common untuk group input pertama
- Terminal **I0.0, I0.1, dst.** = Titik input

**Wiring sensor/tombol (sink wiring tipikal):**
\`\`\`
+24V ─── [Tombol/Sensor] ─── I0.0
M ─────────────────────────── 1M
\`\`\`

Tombol NO: Saat ditekan → 24V masuk ke Ix.x → bit input = 1

### Wiring Digital Output Transistor

Output transistor S7-1200 adalah NPN (sink) atau PNP (source) tergantung varian:
- Terminal **1L+** = +24V supply untuk group output
- Terminal **Q0.0, Q0.1, dst.** = Titik output

**Wiring ke relay/kontaktor (coil 24VDC):**
\`\`\`
+24V ─── [Coil Kontaktor] ─── Q0.0 ─── M (0V)
\`\`\`

Saat bit output = 1 → Q0.x menutup ke M → arus mengalir melalui coil → kontaktor aktif.

**Catatan penting:** Pasang dioda freewheeling (snubber dioda) paralel dengan coil relay/kontaktor untuk melindungi output transistor dari tegangan balik (back-EMF).

## TIA Portal: Software Programming

Siemens SIMATIC TIA Portal (Totally Integrated Automation) adalah software engineering untuk semua produk Siemens. Untuk S7-1200, download **TIA Portal V17** atau yang lebih baru.

### Membuat Project Baru

1. Buka TIA Portal → Create New Project
2. Add Device → Controller → SIMATIC S7-1200 → pilih CPU yang sesuai
3. Konfigurasikan hardware sesuai fisik (tambahkan SM jika ada)

### Tag Table (PLC Variables)

Sebelum membuat program, definisikan semua I/O dengan nama yang bermakna:

| Name | Data Type | Address | Comment |
|------|-----------|---------|---------|
| Start_PB | Bool | %I0.0 | Tombol START |
| Stop_PB | Bool | %I0.1 | Tombol STOP |
| E_Stop | Bool | %I0.2 | Emergency Stop NC |
| TOR_OK | Bool | %I0.3 | Thermal Overload (NC) |
| KM1_Coil | Bool | %Q0.0 | Kontaktor Utama |
| KM1_Run | Bool | %M0.0 | Internal: Motor Running |

### Program Kontrol Motor Sederhana (Ladder)

Network 1: E-Stop dan TOR sebagai kondisi global
\`\`\`ladder
    E_Stop    TOR_OK
  ──| |────────| |──── (kondisi proteksi)
\`\`\`

Network 2: Logika Start-Stop dengan latching
\`\`\`ladder
    Start_PB    Stop_PB(NC)    E_Stop    TOR_OK
  ──| |──┐ ───────|/|────────── | |────── | |────(KM1_Coil)
  KM1_Coil│
  ──| |───┘
\`\`\`

Penjelasan:
- Start_PB (NO) ATAU KM1_Coil (latch, NO) — ini OR
- Seri dengan Stop_PB (NC) — jika ditekan, buka rangkaian
- Seri dengan E_Stop (NC di fisik → NO di PLC karena input = 1 saat normal)
- Seri dengan TOR_OK (NC di fisik → NO di PLC)

**Catatan penting:** Input dari kontak NC (seperti E-Stop dan TOR) di PLC diprogram sebagai normally closed instruction (/NC/) karena secara fisik mereka NC — saat normal, 24V masuk ke PLC = bit = 1. Saat trip/ditekan, kontak membuka → bit = 0.

### Download dan Online Monitoring

1. Hubungkan laptop ke PLC via kabel Ethernet
2. Set IP address yang sama subnet dengan PLC
3. TIA Portal → Download to Device
4. Online → Monitor All → perhatikan bit yang aktif (highlight hijau)

Mode online memungkinkan Anda melihat state setiap contact dan coil secara real-time — ini adalah keunggulan besar PLC dibanding relay konvensional.

## Keamanan Fungsional

Untuk aplikasi yang memerlukan keamanan fungsional (SIL rating), jangan mengandalkan PLC standar saja. Gunakan:
- **Safety PLC** (Siemens SIMATIC S7-1500F/ET200SP F) untuk fungsi safety
- **Safety relay** seperti Siemens SIRIUS 3SK untuk E-Stop sederhana

Program safety terpisah dari program standard dan dieksekusi dengan cara yang berbeda (redundancy, diverse programming).

## Penutup

PLC Siemens S7-1200 adalah platform yang sangat capable untuk aplikasi industri. Memulai dengan kontrol motor sederhana seperti yang dibahas di atas adalah langkah yang tepat sebelum masuk ke fitur yang lebih advance seperti motion control, PID, atau komunikasi jaringan.

Di artikel berikutnya, kita akan membahas bagaimana mengimplementasikan kontrol Star-Delta di S7-1200 menggunakan timer dan urutan logika yang tepat.
    `},{slug:"cara-membaca-wiring-diagram-panel-kontrol",title:"Cara Membaca Wiring Diagram Panel Kontrol Industri: Panduan Lengkap",date:"2026-04-14",readTime:"10 menit",category:"Rangkaian Listrik",tags:["wiring diagram","panel kontrol","schematic","ladder diagram","kontaktor"],excerpt:"Wiring diagram adalah bahasa universal dunia kelistrikan industri. Artikel ini mengajarkan cara membaca, menginterpretasikan, dan menggunakan diagram rangkaian panel kontrol secara sistematis.",content:`
Kemampuan membaca wiring diagram adalah keterampilan fundamental yang membedakan seorang teknisi biasa dengan teknisi handal. Tanpa kemampuan ini, proses troubleshooting, instalasi, dan modifikasi panel menjadi pekerjaan tebak-tebakan yang berbahaya.

Artikel ini membahas secara sistematis bagaimana memahami dan menginterpretasikan wiring diagram panel kontrol industri.

## Jenis-Jenis Diagram dalam Kelistrikan Industri

Sebelum masuk ke cara membacanya, penting untuk mengenal jenis-jenis diagram yang umum digunakan:

**1. Schematic Diagram (Diagram Skematik)**
Menampilkan rangkaian secara logis menggunakan simbol standar. Tidak merepresentasikan posisi fisik komponen. Ini adalah yang paling umum untuk dokumentasi panel kontrol.

**2. Wiring Diagram (Diagram Pengawatan)**
Menampilkan koneksi fisik antara komponen, termasuk warna kabel dan nomor terminal. Digunakan saat instalasi atau troubleshooting lapangan.

**3. Ladder Diagram**
Format khusus untuk kontrol industri—menyerupai tangga horizontal. Sisi kiri adalah rel daya (L1), sisi kanan adalah netral/L2. Setiap "anak tangga" (rung) mewakili satu alur logika kontrol.

**4. Single Line Diagram**
Representasi sederhana dari sistem distribusi daya. Satu garis mewakili seluruh sistem 3 phase.

## Simbol Standar yang Wajib Diketahui

Simbol-simbol berikut mengikuti standar IEC 60617 (internasional) atau standar NFPA 79 (Amerika):

| Komponen | Simbol IEC | Keterangan |
|----------|-----------|-----------|
| Normally Open Contact | —/ /— | Terbuka saat tidak aktif |
| Normally Closed Contact | —/—/— | Tertutup saat tidak aktif |
| Coil Relay/Kontaktor | —( )— | Kumparan elektromagnet |
| Motor | Lingkaran M | Beban motor |
| Tombol NO | Simbol push NO | Start button |
| Tombol NC | Simbol push NC | Stop button |
| TOR | Simbol bimetal | Thermal overload |

## Metodologi Membaca Ladder Diagram

### Langkah 1: Identifikasi Sumber Daya

Selalu mulai dari kiri atas. Rel kiri adalah **Phase (L1)** dan rel kanan adalah **Netral (N) atau L2**. Arus mengalir dari kiri ke kanan melalui setiap rung.

### Langkah 2: Baca Setiap Rung dari Atas ke Bawah

Setiap rung adalah pernyataan logika: "Jika kondisi ini terpenuhi, maka output ini aktif."

Contoh rung sederhana:
\`\`\`
L1 ──[START (NO)]──[STOP (NC)]──[KM1 contact (NO)]──( KM1 )── L2
\`\`\`

Artinya:
- Tekan START (NO menutup) DAN
- STOP tidak ditekan (NC tetap tertutup) DAN
- KM1 sudah aktif sebelumnya (self-holding)
- → Maka KM1 aktif

### Langkah 3: Ikuti Alur Self-Holding

Self-holding (pengunci diri) adalah konsep kritis. Kontak KM1 NO yang dipasang paralel dengan tombol START memungkinkan motor tetap jalan meskipun START dilepas. Ini adalah pola yang SELALU ada di setiap rangkaian kontrol motor.

### Langkah 4: Trace Power Circuit Terpisah

Selalu baca power circuit (rangkaian daya) terpisah dari control circuit (rangkaian kontrol). Power circuit menampilkan bagaimana arus utama mengalir ke motor melalui kontaktor utama.

## Penomoran Kabel dan Terminal

Sistem penomoran kabel yang terstandarisasi sangat membantu dalam troubleshooting:

- **Kabel Power:** Biasanya L1, L2, L3 untuk phase; PE untuk earth/ground
- **Kabel Kontrol 24VDC:** Biasanya dimulai angka 100-an
- **Kabel Kontrol 220VAC:** Biasanya dimulai angka 200-an
- **Kabel Signal/Sensor:** Biasanya dimulai angka 300-an atau 400-an

Terminal block diberi nomor sesuai kabel yang terhubung. Ini memudahkan penelusuran—cukup ikuti nomor kabelnya.

## Teknik Troubleshooting Menggunakan Wiring Diagram

### Metode Half-Split

1. Identifikasi masalah: "Motor tidak mau jalan"
2. Gunakan diagram untuk menemukan titik tengah rangkaian kontrol
3. Ukur tegangan di titik tengah tersebut
4. Jika ada tegangan → masalah di bagian hilir
5. Jika tidak ada → masalah di bagian hulu
6. Ulangi proses ini hingga masalah terisolasi

### Checklist Troubleshooting Sistematis

Selalu lakukan dalam urutan ini:
1. Cek sumber daya utama (MCB, Fuse)
2. Cek tegangan kontrol (trafo kontrol, PSU 24V)
3. Trace rangkaian kontrol dari Start hingga output
4. Cek power circuit dari fuse ke kontaktor ke motor

## Tips Membuat Dokumentasi yang Baik

Dokumentasi yang buruk adalah sumber masalah terbesar di lapangan. Berikut standar dokumentasi wiring diagram yang baik:

- **Revisi dan tanggal** harus selalu dicantumkan
- **As-built drawing** harus diperbarui setiap ada modifikasi
- **Bill of Material (BOM)** disertakan untuk memudahkan pengadaan spare part
- **Nomor referensi komponen** harus sesuai antara diagram dan label fisik di panel

## Kesimpulan

Membaca wiring diagram adalah keterampilan yang diasah melalui latihan dan pengalaman. Mulailah dengan rangkaian sederhana—DOL starter—kemudian tingkatkan ke Star-Delta, lalu ke rangkaian yang melibatkan PLC. Setiap kali menemui panel baru, biasakan untuk selalu membawa dan membaca diagramnya sebelum menyentuh apapun.

Kebiasaan ini bukan hanya soal efisiensi—ini juga soal keselamatan kerja.
    `},{slug:"kontaktor-magnetik-pemilihan-dan-cara-kerja",title:"Kontaktor Magnetik: Cara Kerja, Spesifikasi, dan Tips Pemilihan yang Tepat",date:"2026-04-12",readTime:"9 menit",category:"Rangkaian Listrik",tags:["kontaktor","magnetic contactor","AC3","coil","panel kontrol"],excerpt:"Kontaktor adalah jantung dari panel kontrol motor. Memilih kontaktor yang salah bisa berakibat fatal pada instalasi. Pelajari cara kerja, spesifikasi, dan tips pemilihan yang benar.",content:`
Kontaktor magnetik adalah saklar elektromekanis yang dirancang untuk menyambung dan memutus sirkuit listrik daya tinggi secara berulang-ulang. Berbeda dengan circuit breaker yang berfungsi sebagai proteksi, kontaktor adalah komponen kontrol yang bisa diaktifkan ribuan kali dalam siklus kerjanya.

Pemilihan kontaktor yang tepat adalah hal yang sering diremehkan namun krusial untuk umur panjang instalasi.

## Prinsip Kerja Kontaktor

Kontaktor bekerja berdasarkan prinsip elektromagnetisme:

1. **Coil** (kumparan) dialiri arus AC atau DC sesuai tegangan kontrol (umumnya 24VDC, 110VAC, atau 220VAC)
2. Coil menghasilkan medan magnet yang menarik **armature** (inti besi bergerak)
3. Armature bergerak menyebabkan **kontak utama** (main contact) menutup → arus daya mengalir ke motor
4. Bersamaan, **kontak bantu** (auxiliary contact) juga berubah posisi (NO menjadi NC atau sebaliknya)
5. Saat coil tidak dialiri arus, pegas mengembalikan armature ke posisi semula → kontak membuka

## Anatomi Kontaktor

**Kontak Utama (Main Contact)**
- Tiga pasang kontak untuk 3 phase (A1/A2 adalah terminal coil)
- Diberi penamaan: 1/L1, 3/L2, 5/L3 (input) dan 2/T1, 4/T2, 6/T3 (output)
- Terbuat dari paduan perak-cadmium oksida atau perak-tin oksida untuk daya tahan

**Kontak Bantu (Auxiliary Contact)**
- Kontak kecil untuk sirkuit kontrol (arus rendah)
- Standar: 13/14 (NO) dan 21/22 (NC)
- Bisa ditambah modul tambahan jika dibutuhkan lebih banyak kontak

**Coil**
- Tegangan dan frekuensi harus sesuai dengan sumber kontrol
- Konsumsi daya coil: biasanya 4–15 VA (AC) atau 5–10 W (DC)

## Klasifikasi Penggunaan (Utilization Category)

Ini adalah spesifikasi yang sering diabaikan namun sangat penting:

| Kategori | Aplikasi | Kondisi Switching |
|----------|---------|-----------------|
| AC-1 | Beban resistif, oven, pemanas | I_on ≈ I_rated |
| AC-2 | Motor slip ring, starting & plugging | I_on = 2.5 × I_rated |
| **AC-3** | **Motor squirrel cage, on/off normal** | **I_on = 6 × I_rated** |
| AC-4 | Motor squirrel cage, inching/plugging | I_on = 6 × I_rated (sering) |

**Motor induksi squirrel cage hampir selalu menggunakan AC-3.** Jangan menggunakan kontaktor AC-1 untuk motor—meski arus nominalnya sama, kemampuan make/break-nya berbeda jauh.

## Cara Menentukan Ukuran Kontaktor

### Metode 1: Berdasarkan Arus Motor

\`\`\`
I_contactor ≥ I_rated_motor
\`\`\`

Pilih kontaktor dengan rating arus (Ie) minimal sama dengan arus nominal motor pada kategori AC-3.

### Metode 2: Berdasarkan Daya Motor

Tabel referensi cepat untuk 380V, AC-3:

| Daya Motor | Min. Rating Kontaktor |
|-----------|---------------------|
| 5.5 kW | 12A |
| 11 kW | 25A |
| 22 kW | 40A |
| 37 kW | 65A |
| 55 kW | 95A |
| 75 kW | 115A |

Selalu berikan faktor keamanan minimal 10–15%.

## Tegangan Coil dan Kompatibilitas

Pastikan tegangan coil sesuai dengan sumber kontrol:

- **24VDC**: Umum di sistem dengan PLC atau panel modern. Lebih aman untuk personel.
- **220VAC**: Paling umum di instalasi lama Indonesia. Diambil dari phase R/S/T ke netral.
- **110VAC**: Standar di Amerika dan beberapa sistem impor.

**Perhatian:** Kontaktor AC (coil AC) tidak bisa digunakan langsung dengan sumber DC dan sebaliknya. Pastikan ini sebelum pemesanan.

## Umur Pakai dan Perawatan

Kontaktor memiliki dua jenis umur pakai:

**1. Umur Mekanis**
Berapa kali kontaktor bisa membuka/menutup secara mekanis. Biasanya 10–30 juta operasi.

**2. Umur Listrik (AC-3)**
Berapa kali bisa switching di bawah kondisi AC-3. Biasanya 1–2 juta operasi untuk kontaktor standar.

Tanda-tanda kontaktor perlu diganti:
- Kontak tampak terbakar atau berlubang
- Suara "buzz" keras dari coil
- Motor sering trip tanpa sebab jelas
- Kontak bantu tidak respons meski coil aktif

## Kesalahan Umum dalam Pemilihan Kontaktor

1. **Memilih berdasarkan daya nominal saja** tanpa memperhatikan kategori penggunaan
2. **Tidak memeriksa tegangan coil** — hasilnya coil terbakar atau tidak menarik
3. **Menggunakan kontaktor untuk beban kapasitor** tanpa derating — kapasitor punya arus inrush sangat tinggi
4. **Tidak memasang interlock** pada aplikasi Star-Delta — bisa menyebabkan short circuit

## Kesimpulan

Kontaktor adalah komponen yang bekerja keras tanpa banyak perhatian—sampai ia rusak. Pemilihan yang tepat berdasarkan kategori penggunaan, rating arus yang sesuai, dan tegangan coil yang benar akan memastikan instalasi Anda berumur panjang dan andal.

Investasi pada kontaktor berkualitas dari brand terpercaya (Schneider, Siemens, ABB, Fuji Electric) jauh lebih hemat dibanding biaya downtime akibat kegagalan prematur.
    `},{slug:"thermal-overload-relay-setting-dan-troubleshooting",title:"Thermal Overload Relay: Fungsi, Cara Setting, dan Troubleshooting di Lapangan",date:"2026-04-09",readTime:"8 menit",category:"Rangkaian Listrik",tags:["thermal overload relay","TOR","proteksi motor","setting relay","overcurrent"],excerpt:"Thermal Overload Relay adalah garda terdepan perlindungan motor dari beban lebih. Salah setting bisa membuat motor terbakar atau relay sering trip palsu. Pelajari cara yang benar.",content:`
Thermal Overload Relay (TOR) adalah komponen proteksi yang wajib ada di setiap instalasi motor listrik. Fungsinya sederhana namun kritis: memutus rangkaian kontrol saat motor mengalami arus berlebih dalam durasi tertentu, melindungi motor dari kerusakan akibat panas berlebih.

Namun, TOR yang setting-nya salah bisa menjadi sumber masalah: motor terbakar karena setting terlalu tinggi, atau produksi terhenti karena trip palsu akibat setting terlalu rendah.

## Prinsip Kerja TOR

TOR bekerja berdasarkan prinsip termobimetal:

1. Tiga elemen bimetal dipanaskan oleh arus yang mengalir ke motor
2. Saat arus berlebih berlangsung cukup lama, elemen bimetal melengkung karena pemuaian termal
3. Lengkungan ini menggerakkan mekanisme trip yang membuka kontak NC (95-96) pada rangkaian kontrol
4. Kontaktor utama kehilangan daya → motor mati
5. Setelah TOR dingin (manual atau otomatis), bisa di-reset

**Karakteristik penting:** TOR bekerja berdasarkan akumulasi panas. Arus dua kali nominal mungkin tidak langsung trip—ia membutuhkan waktu tertentu. Ini adalah perlindungan termal, bukan perlindungan arus lebih instan (untuk itu digunakan MCCB atau fuse).

## Kelas Trip (Tripping Class)

Standar IEC 60947-4-1 mendefinisikan kelas trip:

| Kelas | Waktu Trip pada 7.2× I_set |
|-------|--------------------------|
| 10A | < 2 detik |
| 10 | 2–10 detik |
| 20 | 4–10 detik |
| 30 | 6–20 detik |

**Kelas 10** adalah yang paling umum dan cocok untuk sebagian besar motor squirrel cage standar.

**Kelas 20 atau 30** digunakan untuk motor dengan inersia tinggi (seperti crusher atau centrifuge) yang membutuhkan waktu starting lebih lama.

## Cara Setting TOR yang Benar

### Langkah 1: Baca Nameplate Motor

Ambil nilai **Amps (A)** atau **FLA (Full Load Ampere)** dari nameplate motor. Ini adalah arus nominal motor saat berbeban penuh.

Contoh: Motor 11 kW, 380V, cos φ 0.85, η 88%

\`\`\`
I_nominal = P / (√3 × V × cos φ × η)
I_nominal = 11000 / (1.732 × 380 × 0.85 × 0.88)
I_nominal ≈ 24.8 A
\`\`\`

Atau langsung baca dari nameplate: misalnya tertulis 25A.

### Langkah 2: Atur Dial TOR

Setting TOR = I_nominal motor

Jika nameplate motor menunjukkan 25A, set TOR ke 25A. Gunakan tengah-tengah range jika TOR memiliki range, misalnya TOR range 20–32A diset ke 25A.

### Langkah 3: Pertimbangkan Faktor Koreksi

- **Motor dengan sering start-stop** atau beban intermittent: set 5–10% di bawah I_nominal
- **Lingkungan panas (>40°C):** kurangi setting karena TOR sendiri lebih panas → trip lebih cepat
- **Motor dengan kelas isolasi tinggi (F, H):** bisa set sedikit lebih tinggi dengan pertimbangan matang

## Mode Operasi: Manual vs Otomatis

TOR modern umumnya bisa diset ke dua mode:

**Manual Reset:**
Setelah trip, harus ditekan tombol RESET secara manual. **Ini mode yang direkomendasikan** untuk keselamatan—memastikan ada orang yang mengecek penyebab trip sebelum motor dijalankan kembali.

**Auto Reset:**
TOR otomatis reset setelah dingin. Berguna untuk aplikasi remote atau unattended, tapi berbahaya jika penyebab trip tidak ditangani—motor bisa start-stop berulang dan memperparah kerusakan.

## Kontak TOR dan Penggunaannya

| Terminal | Jenis | Fungsi |
|---------|-------|--------|
| 95-96 | NC (Normally Closed) | Seri dengan coil kontaktor — memutus motor saat trip |
| 97-98 | NO (Normally Open) | Untuk alarm atau indikator trip |

**Kesalahan umum:** Menghubungkan TOR di power circuit saja tanpa menghubungkan kontak 95-96 ke rangkaian kontrol. Akibatnya motor tidak akan trip meski TOR bekerja.

## Troubleshooting TOR

### TOR Sering Trip Padahal Motor Normal

Kemungkinan penyebab:
1. **Setting terlalu rendah** — cek dan sesuaikan dengan arus actual
2. **Motor overload** — ukur arus dengan clamp meter, bandingkan dengan nameplate
3. **Koneksi tidak baik** — satu phase longgar menyebabkan beban tidak seimbang
4. **Lingkungan terlalu panas** — perbaiki ventilasi panel

### TOR Tidak Trip Meski Motor Panas

Kemungkinan penyebab:
1. **Setting terlalu tinggi**
2. **Elemen bimetal rusak** — TOR lama atau pernah terkena arus sangat tinggi
3. **Motor arus single-phase** tapi TOR 3-phase — salah satu elemen tidak terlewat arus

### Setelah Trip, Motor Tidak Bisa Start Kembali

1. Pastikan tombol RESET ditekan (mode manual)
2. Tunggu TOR cukup dingin (5–10 menit)
3. Cek apakah kontak 95-96 kembali ke posisi NC
4. Jika TOR tidak bisa di-reset sama sekali, kemungkinan rusak dan perlu diganti

## Umur Pakai dan Penggantian

TOR yang baik bisa bertahan 10–20 tahun dalam kondisi normal. Pertimbangkan penggantian jika:
- Trip tidak konsisten (kadang trip di arus X, kadang tidak)
- Setting dial sudah tidak presisi
- Pernah terkena arus hubung singkat yang besar
- Kontak 95/96 atau 97/98 sering gagal

## Kesimpulan

Setting TOR yang benar adalah garis pertahanan utama motor Anda. Aturan sederhananya: **set sesuai arus nominal motor dari nameplate, gunakan mode manual reset, dan gunakan kelas trip yang sesuai dengan karakteristik beban**. Kombinasi ini memberikan proteksi optimal tanpa gangguan trip palsu yang tidak perlu.
    `},{slug:"motor-servo-vs-motor-stepper-perbedaan-dan-aplikasi",title:"Motor Servo vs Motor Stepper: Perbedaan Mendasar dan Panduan Pemilihan",date:"2026-04-06",readTime:"9 menit",category:"Motor Industri",tags:["motor servo","motor stepper","motion control","CNC","otomasi"],excerpt:"Motor servo dan stepper sering membuat bingung. Keduanya digunakan untuk kontrol posisi, tapi mekanisme dan karakteristiknya sangat berbeda. Artikel ini membantu Anda memilih yang tepat.",content:`
Di dunia otomasi dan mesin CNC, dua jenis motor mendominasi aplikasi kontrol posisi dan gerak presisi: **motor servo** dan **motor stepper**. Keduanya bisa melakukan pekerjaan serupa—menggerakkan aktuator ke posisi tertentu dengan presisi—tapi cara kerjanya fundamental berbeda, dan pemilihan yang salah bisa berdampak pada performa mesin.

## Motor Stepper: Bekerja dalam Langkah

### Prinsip Kerja

Motor stepper bergerak dalam langkah-langkah diskrit. Setiap pulsa listrik yang diberikan ke driver memutar motor satu "step"—biasanya 1.8° per step untuk motor standar (200 step per putaran).

Stator motor stepper memiliki banyak gigi (poles) yang diaktifkan secara berurutan oleh driver. Rotor, yang terbuat dari magnet permanen atau bahan feromagnetik bergigi, "melompat" dari satu posisi stabil ke posisi stabil berikutnya.

**Karakteristik utama:**
- Bergerak dalam step diskrit yang terukur
- Kontrol loop terbuka (umumnya) — tidak butuh encoder untuk posisi dasar
- Torsi maksimum di posisi diam (holding torque tinggi)
- Torsi menurun drastis seiring naiknya kecepatan

### Micro-Stepping

Driver modern bisa memecah satu step menjadi 1/2, 1/4, 1/8, hingga 1/256 step (microstepping). Ini menghasilkan gerakan lebih halus, mengurangi resonansi, tapi torsi per micro-step juga berkurang.

### Kelebihan Motor Stepper

- **Harga lebih murah** — baik motor maupun driver-nya
- **Kontrol sederhana** — bisa digunakan tanpa feedback
- **Akurasi posisi baik** pada kecepatan rendah tanpa mekanisme tambahan
- **Tidak ada drift saat diam** — posisi terkunci oleh arus statis

### Kekurangan Motor Stepper

- **Bisa "skip step"** pada beban berlebih tanpa terdeteksi
- **Torsi sangat berkurang di kecepatan tinggi**
- **Panas berlebih** — mengonsumsi arus penuh bahkan saat diam
- **Resonansi** pada frekuensi tertentu bisa menyebabkan kehilangan langkah

## Motor Servo: Kontrol Loop Tertutup

### Prinsip Kerja

Motor servo adalah motor (bisa AC atau DC, atau BLDC) yang dilengkapi dengan **encoder** di belakang shaft. Encoder terus-menerus melaporkan posisi aktual rotor ke **servo driver (amplifier)**. Driver membandingkan posisi aktual dengan posisi target dan mengkoreksi secara real-time.

Ini adalah sistem **closed-loop** — motor selalu "tahu" di mana ia berada.

**Karakteristik utama:**
- Feedback encoder memastikan akurasi tinggi
- Bisa memberikan torsi penuh di hampir semua kecepatan
- Respons dinamis sangat cepat
- Bisa mendeteksi dan melaporkan kesalahan posisi (following error)

### Tipe Motor Servo

**AC Servo:** Menggunakan motor AC (umumnya permanent magnet synchronous motor / PMSM). Efisiensi tinggi, torsi besar, kecepatan tinggi. Paling umum di industri.

**DC Servo:** Lebih tua, menggunakan motor DC dengan sikat karbon. Lebih simpel tapi perawatan lebih banyak.

**BLDC Servo:** Brushless DC dengan encoder. Hybrid antara keduanya—kompak, efisien.

### Kelebihan Motor Servo

- **Torsi konstan di berbagai kecepatan**
- **Tidak bisa "kehilangan posisi"** — closed-loop selalu mengoreksi
- **Kecepatan lebih tinggi** dengan torsi yang tetap baik
- **Lebih efisien** — hanya mengkonsumsi arus sesuai kebutuhan beban
- **Diagnostik lengkap** — error bisa dideteksi dan dilaporkan

### Kekurangan Motor Servo

- **Harga lebih mahal** — motor, driver, encoder, dan kabel encoder
- **Tuning diperlukan** — parameter PID harus diset dengan benar
- **Lebih kompleks** secara sistem dan wiring

## Perbandingan Langsung

| Parameter | Motor Stepper | Motor Servo |
|-----------|-------------|------------|
| Loop kontrol | Terbuka (umumnya) | Tertutup |
| Akurasi | Baik di kecepatan rendah | Sangat baik di semua kecepatan |
| Torsi saat diam | Sangat tinggi | Sedang |
| Torsi di kecepatan tinggi | Menurun tajam | Relatif konstan |
| Skip/stall detection | Tidak ada (standar) | Otomatis |
| Harga | Lebih murah | Lebih mahal |
| Kompleksitas | Sederhana | Sedang-tinggi |
| Panas saat idle | Tinggi | Rendah |
| Aplikasi tipikal | 3D printer, CNC kecil | Robot industri, CNC besar |

## Panduan Pemilihan

### Pilih Motor Stepper Jika:

- Anggaran terbatas
- Kecepatan operasi rendah (< 300 rpm umumnya)
- Torsi beban dapat diprediksi dan stabil
- Akurasi posisi tidak harus perfect (toleransi ±1-2 step bisa diterima)
- Aplikasi: 3D printer, laser engraver, plotter, conveyor presisi sederhana

### Pilih Motor Servo Jika:

- Kecepatan tinggi atau bervariasi dibutuhkan
- Torsi beban tidak konsisten (perlu adaptasi real-time)
- Akurasi dan repeatability sangat kritis
- Kehilangan posisi tidak bisa ditoleransi
- Aplikasi: robot industri, mesin CNC besar, pick-and-place, injection molding

## Tren: Stepper dengan Encoder (Closed-Loop Stepper)

Ada opsi hybrid yang mulai populer: stepper motor dengan encoder. Ini menggabungkan harga murah stepper dengan keandalan closed-loop servo. Meski tidak sepenuhnya setara servo dalam hal torsi kecepatan tinggi, cukup baik untuk aplikasi menengah dengan budget terbatas.

## Kesimpulan

Tidak ada jawaban universal "yang mana lebih baik"—semuanya tergantung aplikasi. Untuk mesin dengan kecepatan sedang-tinggi dan tuntutan akurasi tinggi, servo adalah jawabannya. Untuk mesin sederhana dengan budget terbatas dan kecepatan rendah, stepper adalah pilihan yang rasional dan sudah terbukti.

Yang penting: pahami karakteristik beban Anda sebelum memilih aktuator.
    `},{slug:"panel-mcc-motor-control-center-komponen-dan-konfigurasi",title:"Panel MCC (Motor Control Center): Komponen, Konfigurasi, dan Standar Pemasangan",date:"2026-04-04",readTime:"11 menit",category:"Motor Industri",tags:["MCC","motor control center","panel industri","busbar","incoming"],excerpt:"MCC adalah pusat kontrol motor dalam skala industri. Memahami komponen, konfigurasi, dan standar pemasangannya adalah kompetensi wajib bagi engineer dan teknisi industri.",content:`
Motor Control Center (MCC) adalah sebuah sistem panel listrik terintegrasi yang memusatkan kontrol dan proteksi beberapa motor listrik dalam satu unit atau serangkaian unit terstruktur. Di pabrik, fasilitas pengolahan, atau gedung besar, MCC adalah "jantung" sistem distribusi daya ke motor-motor yang bertebaran di seluruh fasilitas.

Memahami MCC—dari komponen hingga standar pemasangannya—adalah kompetensi kunci bagi siapa pun yang bekerja di lingkungan industri berat.

## Fungsi Utama MCC

MCC dirancang untuk melayani empat fungsi sekaligus:

1. **Distribusi Daya** — Membagi daya dari sumber utama ke banyak motor melalui busbar
2. **Proteksi** — Setiap motor memiliki proteksi individual (MCCB, fuse, TOR)
3. **Kontrol** — Starting, stopping, dan pengendalian motor dari satu titik
4. **Monitoring** — Pembacaan arus, status on/off, alarm dapat dipusatkan

## Komponen Utama MCC

### 1. Incoming Section (Feeder)

Bagian ini menerima daya dari sumber utama (transformator atau panel distribusi utama). Terdiri dari:

- **Main Circuit Breaker (MCB/MCCB)** — Proteksi utama keseluruhan MCC
- **Current Transformer (CT)** — Untuk pengukuran arus keseluruhan
- **Voltmeter dan Ammeter** — Monitoring tegangan dan arus incoming
- **Busbar** — Konduktor tembaga atau aluminium yang mendistribusikan daya ke semua unit

### 2. Busbar System

Busbar adalah konduktor utama yang membentang sepanjang MCC. Spesifikasi busbar ditentukan oleh:

\`\`\`
Rating Busbar (A) ≥ Total beban terpasang × Demand factor × 1.25 (faktor keamanan)
\`\`\`

Jenis busbar dalam MCC:
- **Horizontal Busbar** — Membawa daya ke seluruh kompartemen
- **Vertical Busbar** — Mendistribusikan ke setiap unit dalam satu kolom
- **Ground Busbar** — Untuk earthing semua komponen metal

### 3. Feeder Unit

Setiap motor memiliki unit tersendiri yang biasanya berisi:

- **MCCB (Molded Case Circuit Breaker)** — Proteksi hubung singkat dan beban lebih
- **Kontaktor** — Elemen switching utama
- **Thermal Overload Relay (TOR)** — Proteksi arus lebih termis
- **Control Transformer** — Mengubah tegangan 380V ke 220V atau 24V untuk kontrol
- **Terminal Block** — Titik koneksi kabel lapangan
- **Pilot Lamp** — Indikator status ON/OFF/TRIP

### 4. Busway (Bus Duct)

Untuk kapasitas besar (di atas 1600A), busbar konvensional diganti dengan busway—sistem busbar terenkapsulasi yang lebih aman dan mudah dimodifikasi.

## Konfigurasi MCC

### Single Bus Configuration

Semua unit terhubung ke satu busbar horizontal. Sederhana dan murah, namun jika busbar utama bermasalah, seluruh sistem mati.

### Double Bus Configuration (Duplex)

Dua busbar independen dengan transfer switch. Jika satu feeder bermasalah, unit bisa dipindahkan ke feeder cadangan. Lebih mahal tapi lebih andal untuk proses kritis.

### Main-Tie-Main Configuration

Dua incoming power source dengan bus tie breaker di tengah. Umum di industri farmasi, migas, dan fasilitas yang tidak boleh berhenti.

## Sistem Withdrawal (Draw-out)

MCC modern menggunakan sistem draw-out atau plug-in untuk unitnya. Artinya, setiap unit motor (MCCB + kontaktor + TOR) bisa ditarik keluar dari panel tanpa memutus busbar.

Keuntungannya:
- Penggantian atau perbaikan bisa dilakukan saat panel tetap berenergi (live maintenance dengan prosedur keselamatan ketat)
- Standarisasi — satu unit rusak bisa diganti dengan unit spare yang identik
- Pengurangan downtime secara signifikan

## Standar dan Regulasi

MCC di Indonesia harus mengikuti:
- **SNI 04-0225-2011 (PUIL 2011)** — Persyaratan Umum Instalasi Listrik Indonesia
- **IEC 61439** — Low-voltage switchgear and controlgear assemblies
- **IEC 60947** — Untuk komponen individual (MCCB, kontaktor, TOR)

Untuk industri tertentu:
- **NEMA ICS 18** — Standar MCC Amerika (umum di industri migas)
- **IP Rating** — Enclosure harus sesuai dengan lingkungan (IP54 minimum untuk area berdebu)

## Pelabelan dan Dokumentasi

MCC yang baik harus memiliki:

- **Tag Number** yang unik untuk setiap unit (misal: MCC-01-A03 = MCC pertama, kolom A, unit ke-3)
- **Single Line Diagram** yang dipasang di pintu panel
- **Wiring Diagram** tersedia di dalam atau terlampir
- **Load List** — Daftar semua motor yang dikendalikan
- **Label bahaya** yang jelas di semua pintu

## Tips Perawatan MCC

**Bulanan:**
- Cek visual kebersihan interior (debu, kelembapan)
- Verifikasi lampu indikator berfungsi
- Cek suhu permukaan busbar dengan thermal gun (idealnya < 40°C di atas ambient)

**6 Bulanan:**
- Torsi ulang semua koneksi busbar dan terminal (sesuai spesifikasi)
- Cek kondisi isolasi kabel
- Uji fungsi semua trip relay (TOR, proteksi termometer jika ada)

**Tahunan:**
- Thermography scanning seluruh MCC dalam kondisi berbeban
- Insulation resistance test seluruh feeder
- Kalibrasi measuring instrument

## Bahaya dan Keselamatan Kerja

MCC beroperasi pada tegangan rendah (380V) namun daya yang tersimpan sangat besar. Bahaya utama:

- **Arc Flash** — Busur listrik dari hubung singkat bisa sangat intens
- **Shock** — Tegangan 380V sangat mematikan
- **Flash Burn** — Dari arc flash bahkan tanpa kontak langsung

Prosedur wajib sebelum masuk ke kompartemen:
1. Lock Out Tag Out (LOTO) pada semua sumber
2. Verifikasi tegangan = nol dengan alat ukur kalibrasi
3. Gunakan APD sesuai level Arc Flash yang dihitung (NFPA 70E atau IEC 61482)

## Kesimpulan

MCC adalah infrastruktur kritis yang menjaga seluruh sistem motor industri berjalan andal. Pemahaman mendalam tentang komponen, konfigurasi, dan prosedur perawatannya bukan hanya meningkatkan kompetensi teknis—tapi juga memastikan keselamatan seluruh tim yang bekerja di sekitarnya.

Investasi waktu untuk memahami MCC secara mendalam akan selalu terbayar di lapangan.
    `},{slug:"sistem-grounding-instalasi-listrik-industri",title:"Sistem Grounding Instalasi Listrik Industri: Teori, Standar, dan Praktik",date:"2026-03-31",readTime:"9 menit",category:"Rangkaian Listrik",tags:["grounding","earthing","proteksi","instalasi listrik","PUIL","keselamatan"],excerpt:"Grounding yang buruk adalah penyebab diam-diam di balik banyak kerusakan peralatan dan kecelakaan kerja. Pelajari cara merancang dan memverifikasi sistem grounding yang benar.",content:`
Grounding (atau earthing) adalah salah satu aspek instalasi listrik yang paling sering dianggap sepele namun paling kritis. Sistem grounding yang buruk tidak hanya menyebabkan kerusakan peralatan—ia bisa mengancam nyawa manusia.

Di lingkungan industri dengan motor-motor besar, inverter, dan beban non-linear lainnya, sistem grounding yang baik menjadi semakin penting.

## Mengapa Grounding Diperlukan?

Grounding memiliki tiga fungsi utama:

**1. Proteksi Jiwa (Safety)**
Jika terjadi gangguan isolasi dan bagian logam peralatan bertegangan, grounding memastikan arus bocor mengalir ke bumi—bukan melalui tubuh manusia yang menyentuh peralatan tersebut. Dikombinasikan dengan RCCB/ELCB, ini menjadi sistem proteksi yang sangat efektif.

**2. Proteksi Peralatan**
Arus hubung singkat ke bumi harus mengalir dengan impedansi cukup rendah sehingga proteksi (fuse/MCB) bisa trip dengan cepat. Jika grounding buruk, arus bocor bisa bertahan lama dan merusak isolasi peralatan secara perlahan.

**3. Kestabilan Referensi Tegangan**
Terutama penting untuk sistem elektronik sensitif—PLC, sensor, inverter. Ground yang bersih dan stabil memastikan referensi sinyal tidak terdistorsi oleh noise.

## Jenis-Jenis Sistem Grounding (Sistem TN, TT, IT)

Standar IEC 60364 mendefinisikan sistem pembumian berdasarkan dua huruf:
- Huruf pertama: kondisi netral sumber (T=Terra/dibumikan, I=Isolated/tidak dibumikan)
- Huruf kedua: kondisi body/casing peralatan (T=dibumikan lokal, N=terhubung ke netral)

**Sistem TN (Terra-Neutral)**
Netral transformator dibumikan, dan seluruh body peralatan terhubung ke konduktor grounding yang sama. Tiga varian: TN-S, TN-C, TN-C-S.

- **TN-S:** Konduktor Netral (N) dan Protective Earth (PE) terpisah sepanjang instalasi. Ini **direkomendasikan** untuk industri modern karena meminimalkan noise.
- **TN-C:** N dan PE digabung menjadi satu konduktor (PEN). Lebih murah tapi tidak direkomendasikan untuk instalasi baru.
- **TN-C-S:** Kombinasi TN-C di bagian sumber dan TN-S di bagian beban (instalasi).

**Sistem TT**
Netral transformator dibumikan, body peralatan dibumikan secara terpisah. Umum di instalasi rumah tangga dan komersial di Indonesia.

**Sistem IT**
Tidak ada titik yang dibumikan langsung (via impedansi). Gangguan pertama tidak menyebabkan arus bocor besar. Digunakan di lingkungan khusus (rumah sakit, pertambangan).

## Elektroda Grounding

Elektroda grounding adalah konduktor yang berkontak langsung dengan tanah:

**Rod Electrode (Elektroda Batang)**
Batang baja berlapis tembaga (copper bonded) ditanam vertikal ke dalam tanah. Dimensi standar: diameter 5/8 inch (16mm), panjang 1.5–3 meter.

Resistansi elektroda tunggal:
\`\`\`
R ≈ (ρ / 2πL) × ln(4L/d)
\`\`\`
Di mana ρ adalah resistivitas tanah (Ω·m), L adalah panjang (m), d adalah diameter (m).

**Plate Electrode (Elektroda Plat)**
Plat tembaga atau besi berlapis seng, ditanam horizontal. Kurang umum karena membutuhkan galian lebih luas.

**Ring Electrode (Elektroda Cincin)**
Konduktor tembaga atau baja galvanis yang dilingkarkan mengelilingi fondasi bangunan. Sangat efektif karena area kontak yang luas.

## Nilai Resistansi Grounding yang Dipersyaratkan

PUIL 2011 dan standar internasional mensyaratkan:

| Aplikasi | Resistansi Maksimum |
|---------|-------------------|
| Sistem distribusi umum | ≤ 5 Ω |
| Peralatan sensitif (IT/PLC) | ≤ 1 Ω |
| Penangkal petir | ≤ 10 Ω |
| Sistem telekomunikasi | ≤ 1 Ω |

**Untuk industri dengan inverter dan PLC, targetkan ≤ 1 Ω.**

## Cara Mengukur Resistansi Grounding

Gunakan metode **Fall of Potential (3-pole method)**:

1. Pasang elektroda grounding yang diuji (C1/P1)
2. Pasang elektroda arus bantu (C2) sejauh 30–50 meter
3. Pasang elektroda potensial (P2) di 62% jarak antara C1 dan C2
4. Earth tester menginjeksi arus AC frekuensi rendah dan mengukur perbedaan potensial

Alat yang digunakan: **Earth Resistance Tester** (Fluke 1623, Kyoritsu 4105A, dll.)

**Catatan:** Pengukuran harus dilakukan saat musim kering (resistivitas tanah lebih tinggi) untuk mendapatkan nilai terburuk.

## Grounding untuk Inverter/VFD

Inverter menghasilkan **high-frequency noise** melalui kapasitansi parasitik kabel motor. Tanpa grounding yang baik, noise ini bisa mengganggu PLC, sensor, dan instrumen lain.

Tips khusus grounding untuk sistem dengan inverter:
- Gunakan kabel motor berpelindung (shielded cable) dan hubungkan shield ke ground di kedua ujung
- Grounding VFD dan motor harus ke titik yang sama (single point grounding)
- Pisahkan grounding sistem daya dan grounding instrumen/sinyal jika memungkinkan
- Jangan menggunakan PEN (gabungan netral-ground) di bagian beban inverter

## Common Mistakes dalam Sistem Grounding

1. **Menggunakan kabel grounding terlalu kecil** — Kabel PE harus sesuai tabel standar (umumnya ≥ 50% penampang kabel daya)
2. **Tidak melakukan pengujian** — Grounding dipasang tapi tidak pernah diukur resistansinya
3. **Star grounding tidak benar** — Multiple grounding point yang tidak terhubung baik menciptakan ground loop
4. **Korosi pada sambungan grounding** — Sambungan yang teroksidasi meningkatkan resistansi secara signifikan
5. **Elektroda yang terlalu pendek** — Harus mencapai lapisan tanah yang lembap dan stabil

## Pemeliharaan Sistem Grounding

- **Tahunan:** Ukur resistansi semua elektroda utama
- **5 Tahunan:** Gali dan inspeksi visual kondisi elektroda dan sambungan
- **Setelah gangguan besar:** Re-test semua sistem grounding

## Kesimpulan

Grounding bukan sekadar kewajiban regulasi—ia adalah fondasi keselamatan dan keandalan seluruh instalasi listrik Anda. Investasi pada sistem grounding yang benar, pengujian rutin, dan dokumentasi yang baik adalah langkah yang tidak akan pernah Anda sesali.

Saat ada kerusakan peralatan yang misterius atau sensor yang memberikan pembacaan aneh, selalu masukkan grounding dalam daftar investigasi pertama Anda.
    `},{slug:"cara-setting-vfd-untuk-aplikasi-pompa-sentrifugal",title:"Cara Setting VFD untuk Pompa Sentrifugal: Parameter Kritis dan Tips Optimasi",date:"2026-03-26",readTime:"10 menit",category:"Motor Industri",tags:["VFD","inverter","pompa sentrifugal","setting parameter","energy saving"],excerpt:"Pompa sentrifugal adalah aplikasi paling umum VFD. Setting yang benar bukan hanya soal motor jalan—tapi tentang efisiensi energi, umur pompa, dan keandalan sistem.",content:`
Pompa sentrifugal dan VFD (Variable Frequency Drive) adalah kombinasi yang sangat populer di industri. Pompa adalah beban quadratic—artinya daya yang dibutuhkan berbanding lurus dengan **kubik** dari kecepatannya. Ini berarti mengurangi kecepatan sedikit saja menghasilkan penghematan energi yang signifikan.

Namun, commissioning VFD untuk pompa bukan sekadar "colok dan jalankan." Ada serangkaian parameter yang harus diset dengan benar untuk mendapatkan performa optimal dan umur sistem yang panjang.

## Mengapa Pompa Sentrifugal Ideal untuk VFD?

### Hukum Affinity (Kemiripan Pompa)

Hubungan antara kecepatan dan performa pompa sentrifugal dirumuskan dengan **Hukum Affinity**:

\`\`\`
Q₂/Q₁ = N₂/N₁           (Kapasitas aliran)
H₂/H₁ = (N₂/N₁)²        (Head/tekanan)
P₂/P₁ = (N₂/N₁)³        (Daya)
\`\`\`

Contoh nyata: Jika kecepatan pompa dikurangi 20% (dari 1500 rpm ke 1200 rpm):
- Aliran berkurang 20%
- Head berkurang 36%
- **Daya berkurang 49%!**

Ini adalah potensi penghematan energi yang sangat besar hanya dengan menurunkan kecepatan.

## Parameter Utama yang Harus Diset

### 1. Motor Nameplate Parameters

Ini adalah langkah pertama dan paling fundamental. Masukkan data dari nameplate motor secara akurat:

| Parameter | Nilai dari Nameplate |
|-----------|-------------------|
| Rated Voltage | 380V / 400V |
| Rated Current | xxx A |
| Rated Frequency | 50 Hz |
| Rated Speed | 1480 rpm (misal) |
| Motor Power | xx kW |
| Power Factor (cos φ) | 0.85 (misal) |

Jika tersedia, lakukan **auto-tuning** (motor ID) setelah memasukkan nameplate data. Fitur ini ada di semua VFD modern (Siemens, ABB, Schneider, Danfoss). Auto-tuning mengukur karakteristik motor secara otomatis untuk kontrol yang lebih presisi.

### 2. Maximum dan Minimum Frequency

**Maximum Frequency:** Biasanya 50–60 Hz untuk pompa standar. Hati-hati menaikkan di atas 50 Hz — cek spesifikasi pompa dan motor untuk kemampuan overspeed.

**Minimum Frequency:** Untuk pompa sentrifugal, jangan set terlalu rendah. Di bawah 15–20 Hz, impeller tidak menghasilkan tekanan yang cukup dan bisa menyebabkan kavitasi atau sirkulasi balik. Rekomendasi: **minimum 20 Hz** untuk pompa sentrifugal umum.

### 3. Acceleration dan Deceleration Time

**Acceleration Time (Ramp-up):**
Untuk pompa, waktu akselerasi 10–30 detik umumnya cukup. Terlalu cepat bisa menyebabkan water hammer (hantaman air) pada sistem perpipaan, terutama jika ada katup check.

\`\`\`
Rekomendasi: 15–30 detik untuk pompa besar
             10–15 detik untuk pompa kecil
\`\`\`

**Deceleration Time (Ramp-down):**
Lebih kritis dari akselerasi. Pompa dengan head tinggi yang berhenti mendadak bisa menyebabkan water hammer parah. Set lebih lambat dari akselerasi:

\`\`\`
Rekomendasi: 20–60 detik tergantung sistem perpipaan
\`\`\`

Pada aplikasi dengan risiko water hammer, gunakan **S-curve ramp** yang tersedia di VFD modern—akselerasi/deselerasi berbentuk kurva S, lebih halus dari linear.

### 4. Kontrol Mode

**V/f Control (Scalar Control):**
Paling sederhana. Cocok untuk pompa sentrifugal umum karena bebannya predictable. Set V/f characteristic sesuai motor (linear atau quadratic).

**Untuk pompa sentrifugal, gunakan V/f Quadratic (Parabolic):**
Ini mengikuti karakteristik beban pompa—tegangan dikurangi secara kuadratik seiring turunnya frekuensi. Hasilnya: efisiensi lebih tinggi dan motor lebih dingin di kecepatan rendah.

**Vector Control:**
Untuk pompa presisi tinggi atau pompa vertikal dengan beban gravitasi, vector control memberikan kontrol torsi yang lebih baik.

### 5. Motor Overload Protection

Pastikan TOR virtual di VFD diset ke arus nominal motor:
\`\`\`
I_overload = 1.0 × I_rated (untuk pompa continuous duty)
\`\`\`

Tentukan juga waktu trip-nya. Gunakan **Class 10** untuk pompa standar.

### 6. Proteksi Tambahan untuk Pompa

**Dry Run Protection (Anti-Cavitation):**
Saat pompa berjalan tanpa air (pipa kosong), arus motor akan turun di bawah normal. Manfaatkan ini:
- Set parameter "Underload protection" atau "No-flow detection"
- Jika arus turun di bawah threshold selama X detik → alarm atau trip

**High Temperature Alarm:**
Hubungkan sensor temperatur bearing atau winding jika ada ke input analog VFD untuk monitoring.

## Setting PID untuk Pressure Control

Banyak aplikasi pompa menggunakan VFD dengan kontrol PID—VFD mengatur kecepatan pompa secara otomatis untuk mempertahankan tekanan tertentu (constant pressure system).

**Input:** Sensor tekanan (4–20mA atau 0–10V) ke input analog VFD
**Setpoint:** Tekanan target (misalnya 4 bar = 80% dari sensor range 0–5 bar = 64% setpoint)
**Output:** Frekuensi VFD yang berubah-ubah mengikuti kebutuhan

Parameter PID yang perlu diset:

| Parameter | Nilai Awal Rekomendasi |
|-----------|----------------------|
| P-gain | 2–5 |
| I-time | 5–15 detik |
| D-time | 0 (biasanya tidak diperlukan) |
| Sampling time | 0.5–2 detik |

Lakukan tuning iteratif: start dengan P-gain rendah, naikkan hingga respons cepat tapi tidak oscillating, lalu tambahkan I-time untuk eliminasi steady-state error.

## Tips Optimasi Energi

1. **Hilangkan throttle valve** — Banyak sistem pompa lama menggunakan katup untuk mengatur aliran. Dengan VFD, atur kecepatan pompa langsung—katup dibuka penuh.

2. **Sleep mode:** Aktifkan fitur sleep di VFD—jika demand sangat rendah (tekanan sudah tercapai), VFD otomatis matikan pompa dan hidup kembali saat tekanan turun.

3. **Pump cascade control:** Untuk sistem dengan 2–4 pompa paralel, gunakan VFD hanya pada satu pompa (lead pump) dan pompa lainnya on/off. Ini efisien dan lebih murah dari VFD pada semua pompa.

4. **Ukur baseline:** Sebelum pasang VFD, catat konsumsi energi (kWh) selama seminggu. Setelah komisioning, bandingkan. Anda bisa mengklaim penghematan energi yang nyata.

## Troubleshooting Umum VFD-Pompa

**Fault: Overcurrent saat starting**
- Tambah waktu akselerasi
- Cek setting V/f, pastikan tidak terlalu tinggi
- Verifikasi arus nominal yang dimasukkan benar

**Fault: Undervoltage**
- Tegangan supply terlalu rendah atau tidak stabil
- Cek tegangan incoming, bisa jadi masalah jaringan

**Pompa bergetar dan berisik di kecepatan tertentu**
- Resonansi mekanis di frekuensi tertentu
- Gunakan "skip frequency" untuk menghindari frekuensi bermasalah (misal skip 27–33 Hz)

**Pompa tidak mencapai tekanan target (PID mode)**
- Cek arah kontrol PID (direct vs inverse)
- Cek wiring sensor tekanan
- Cek setpoint sudah benar (unit engineering, scaling)

## Kesimpulan

Setting VFD untuk pompa sentrifugal yang optimal membutuhkan pemahaman tentang karakteristik beban pompa, parameter motor yang akurat, dan konfigurasi proteksi yang tepat. Hasilnya: penghematan energi yang signifikan, umur pompa lebih panjang, dan sistem yang lebih andal.

Jangan lupa mendokumentasikan semua parameter yang diset—ini sangat berharga saat VFD perlu diganti atau di-reset di masa depan.
    `},{slug:"representasi-sinyal-dan-sistem-dasar-teknik-elektro",title:"Representasi Sinyal dan Sistem: Dasar Penting Teknik Elektro yang Wajib Dikuasai",date:"2026-04-16",readTime:"12 menit",category:"Dasar Teknik Elektro",tags:["sinyal","sistem","sinyal kontinyu","sinyal diskrit","undak satuan","teknik elektro"],excerpt:"Sinyal dan sistem adalah fondasi dari seluruh cabang teknik elektro modern. Dari komunikasi hingga kendali industri, pemahaman representasi sinyal—diskrit maupun kontinyu—adalah kunci memahami cara kerja perangkat elektronik secara mendalam.",content:`
Konsep sinyal dan sistem adalah salah satu fondasi terpenting dalam teknik elektro. Hampir setiap bidang—dari komunikasi, otomasi industri, pengolahan suara, hingga sistem kendali proses—berdiri di atas konsep ini. Namun sayangnya, banyak praktisi yang melewati dasar ini begitu saja dan langsung ke aplikasi, sehingga ketika menghadapi masalah yang lebih dalam, mereka kesulitan menemukan akar permasalahannya.

Artikel ini membahas secara terstruktur apa itu sinyal, bagaimana mengklasifikasikannya, dan bagaimana cara merepresentasikannya secara matematis—lengkap dengan contoh soal yang dipraktikkan langkah demi langkah.

## Apa Itu Sinyal?

**Sinyal** adalah variabel atau besaran fisik yang dapat dideteksi dan mengandung informasi tentang perilaku suatu fenomena. Sinyal bisa berupa tegangan listrik, arus, tekanan udara, suhu, kecepatan, getaran, dan sebagainya.

Di antara berbagai jenis sinyal, **sinyal elektrik** adalah yang paling mudah diukur, diproses, dan ditransmisikan. Itulah mengapa dalam rekayasa modern, banyak besaran fisik dikonversi menjadi sinyal elektrik—misalnya sensor suhu mengubah panas menjadi tegangan, sensor tekanan mengubah gaya menjadi arus, dan sebagainya.

**Sistem** adalah suatu entitas yang memproses sinyal masukan (input) dan menghasilkan sinyal keluaran (output) sesuai dengan perilaku yang dirancang. Contoh sistem: filter elektronik, amplifier, motor listrik dengan kontroler, bahkan sistem komunikasi radio.

Hubungan antara input dan output sistem inilah yang menjadi inti analisa sinyal dan sistem.

## Klasifikasi Sinyal: Kontinyu vs Diskrit

Ini adalah pembagian paling fundamental dalam teori sinyal.

### Sinyal Kontinyu (Continuous-Time Signal)

Sinyal kontinyu adalah sinyal yang memiliki nilai **tak terputus** sepanjang waktu. Nilai sinyal ada di setiap titik waktu, tidak ada celah.

Ditulis sebagai **x(t)** di mana **t** adalah variabel waktu kontinu (bisa berupa bilangan real apa pun).

**Contoh sinyal kontinyu:**
- Tegangan jala-jala listrik AC 220V/50Hz
- Gelombang suara dari mikrofon
- Sinyal keluaran thermocouple

Persamaan umum sinyal sinusoidal kontinyu:

\`\`\`
x(t) = A · sin(2πft + φ)
\`\`\`

Di mana:
- **A** = amplitudo (nilai puncak)
- **f** = frekuensi (Hz)
- **φ** = fasa awal (radian)

### Sinyal Diskrit (Discrete-Time Signal)

Sinyal diskrit hanya memiliki nilai pada titik-titik waktu tertentu yang bernilai **bilangan bulat**. Sinyal ini ditulis sebagai **x(n)** di mana **n** adalah bilangan bulat.

Sinyal diskrit biasanya muncul dari proses **sampling** (pencuplikan) sinyal kontinyu. Misalnya, ADC (Analog-to-Digital Converter) mencuplik sinyal analog dengan frekuensi sampling tertentu dan menghasilkan urutan sampel diskrit.

\`\`\`
Sinyal diskrit: x(n), n ∈ {…, -2, -1, 0, 1, 2, …}
\`\`\`

**Teorema Sampling Nyquist-Shannon** menyatakan bahwa untuk merekonstruksi sinyal kontinyu secara sempurna dari sampel diskritnya, frekuensi sampling harus **minimal dua kali frekuensi tertinggi** dalam sinyal tersebut:

\`\`\`
fs ≥ 2 × fmax
\`\`\`

Ini adalah alasan mengapa audio CD menggunakan frekuensi sampling 44.1 kHz (karena batas pendengaran manusia sekitar 20 kHz).

## Sinyal-Sinyal Dasar yang Wajib Diketahui

Beberapa sinyal sederhana berikut menjadi "blok bangunan" untuk menyusun sinyal yang lebih kompleks. Memahami sinyal-sinyal ini adalah prasyarat analisa sistem.

### a) Sinyal Undak Satuan Kontinyu — u(t)

Sinyal undak satuan (unit step) didefinisikan sebagai:

\`\`\`
u(t) = 1,  untuk t ≥ 0
u(t) = 0,  untuk t < 0
\`\`\`

Sinyal ini sangat berguna untuk **merepresentasikan kapan sebuah sinyal mulai dan berhenti**. Jika ingin menunjukkan bahwa sinyal tertentu aktif mulai dari t = a hingga t = b, kita cukup mengalikan sinyal itu dengan **[u(t − a) − u(t − b)]**.

Contoh penggunaan: sinyal e^(-t) yang hanya aktif dari t = 1 hingga t = 5 dapat ditulis:

\`\`\`
x(t) = e^(-t) · [u(t − 1) − u(t − 5)]
\`\`\`

### b) Sinyal Undak Satuan Diskrit — u(n)

Versi diskrit dari unit step:

\`\`\`
u(n) = 1,  untuk n ≥ 0
u(n) = 0,  untuk n < 0
\`\`\`

### c) Sinyal Kotak — Π(t)

Sinyal kotak (rectangular pulse) memiliki nilai konstan (biasanya 1) dalam interval waktu tertentu dan nol di luar interval tersebut. Sinyal ini sering digunakan untuk merepresentasikan jendela waktu (windowing) dalam analisa spektral.

### d) Sinyal Segitiga — Λ(t)

Sinyal segitiga memiliki bentuk naik linear lalu turun linear ke nol. Sinyal ini muncul secara alami sebagai hasil konvolusi dua sinyal kotak.

### e) Sinyal Pulsa Satuan Diskrit — δ(n)

Ini adalah sinyal paling fundamental dalam sistem diskrit:

\`\`\`
δ(n) = 1,  untuk n = 0
δ(n) = 0,  untuk n ≠ 0
\`\`\`

Sinyal δ(n) digunakan untuk:
1. **Mengkarakterisasi sistem** — respons sistem terhadap δ(n) disebut respons impuls (impulse response), yang sepenuhnya menggambarkan perilaku sistem linear
2. **Menyatakan sinyal sembarang** sebagai superposisi dari pulsa satuan yang digeser:

\`\`\`
x(n) = Σ x(k) · δ(n − k),  untuk k dari -∞ hingga ∞
\`\`\`

## Representasi Sinyal: Cara Mengekspresikan Sinyal dalam Persamaan

Salah satu keterampilan penting adalah mampu mengekspresikan sinyal yang diberikan secara grafis ke dalam bentuk persamaan matematis, dan sebaliknya.

### Langkah-Langkah Umum

1. **Identifikasi interval** — di mana saja sinyal memiliki nilai berbeda?
2. **Tentukan persamaan di setiap interval** menggunakan metode persamaan garis atau pola sinyal standar
3. **Gabungkan** menggunakan u(t-a) dan u(t-b) untuk awal dan akhir masing-masing segmen

### Contoh Soal 1: Representasi Sinyal Majemuk

**Soal:** Sebuah sinyal kontinyu x(t) memiliki karakteristik berikut:
- Pada interval 0 < t < 2: sinyal naik linear dari 0 ke 1
- Pada interval 2 < t < 3: sinyal bernilai konstan 1
- Di luar interval tersebut: sinyal bernilai 0

**Langkah penyelesaian:**

**Segmen 1 (0 < t < 2):** Sinyal naik linear dari (0, 0) ke (2, 1).

Gunakan rumus persamaan garis antara dua titik (t₁, x₁) = (0, 0) dan (t₂, x₂) = (2, 1):

\`\`\`
x(t) = (x₂ - x₁)/(t₂ - t₁) × (t - t₁) + x₁
x(t) = (1 - 0)/(2 - 0) × (t - 0) + 0
x(t) = 0.5t
\`\`\`

**Segmen 2 (2 < t < 3):** Sinyal bernilai konstan 1.

\`\`\`
x(t) = 1
\`\`\`

**Segmen 3 (selain interval di atas):** x(t) = 0

Maka persamaan penuh:

\`\`\`
         0.5t,   untuk 0 < t < 2
x(t) =   1,      untuk 2 < t < 3
         0,      untuk yang lain
\`\`\`

### Contoh Soal 2: Penulisan dalam Satu Persamaan

Untuk menulis sinyal di atas dalam satu persamaan menggunakan fungsi undak satuan:

Ingat prinsip: sinyal yang bernilai f(t) mulai dari t = a hingga t = b dapat ditulis sebagai:

\`\`\`
f(t) · [u(t − a) − u(t − b)]
\`\`\`

Maka:
- Segmen 1 (0.5t dari t=0 hingga t=2): **0.5t · [u(t) − u(t − 2)]**
- Segmen 2 (1 dari t=2 hingga t=3): **1 · [u(t − 2) − u(t − 3)]**

Gabungkan keduanya:

\`\`\`
x(t) = 0.5t · [u(t) − u(t − 2)] + 1 · [u(t − 2) − u(t − 3)]
\`\`\`

Sederhanakan:

\`\`\`
x(t) = 0.5t · u(t) − 0.5t · u(t − 2) + u(t − 2) − u(t − 3)
\`\`\`

Ini adalah **satu persamaan kompak** yang merepresentasikan seluruh sinyal, termasuk kapan mulai dan kapan berhenti—tanpa perlu menulis kasus per kasus.

## Mengapa Representasi Sinyal Penting di Industri?

Mungkin Anda bertanya-tanya: apa hubungannya teori sinyal ini dengan pekerjaan di lapangan industri?

**Jawaban: sangat erat.**

**1. Analisa Getaran Mesin**
Sensor accelerometer pada motor atau pompa menghasilkan sinyal getaran. Untuk mendeteksi kerusakan bearing atau ketidakseimbangan rotor, sinyal ini harus dianalisa di domain frekuensi (FFT). Tanpa memahami sinyal dan sistem, analisa ini mustahil dilakukan dengan benar.

**2. Kontrol PID**
Kontroler PID bekerja berdasarkan sinyal error (selisih setpoint dan aktual). Respons sistem terhadap berbagai jenis input (step, ramp, sinusoidal) menentukan bagaimana kita men-tuning parameter P, I, dan D.

**3. Filter dan Noise Reduction**
Sensor industri seringkali menghasilkan sinyal dengan noise. Desain filter (low-pass, high-pass, band-pass) membutuhkan pemahaman mendalam tentang karakteristik sinyal di domain frekuensi.

**4. Komunikasi Industri**
Protokol seperti HART (4-20mA + sinyal digital), PROFIBUS, atau EtherCAT semuanya berurusan dengan representasi dan pengiriman sinyal informasi.

**5. VFD dan Harmonisa**
Inverter menghasilkan harmonisa (komponen frekuensi kelipatan dari frekuensi dasar) yang bisa mengganggu jaringan listrik. Memahami komposisi frekuensi sinyal adalah kunci menganalisa dan memitigasi masalah ini.

## Sifat-Sifat Sistem Linear

Selain memahami sinyal, penting juga mengenal sifat sistem. Sistem **linear** memiliki dua sifat kunci:

**1. Homogenitas (Scaling)**
Jika input dikalikan konstanta c, output juga dikalikan c:
\`\`\`
Jika x(t) → y(t), maka c·x(t) → c·y(t)
\`\`\`

**2. Superposisi (Additivity)**
Respons terhadap penjumlahan dua input sama dengan penjumlahan dua respons individual:
\`\`\`
Jika x₁(t) → y₁(t) dan x₂(t) → y₂(t),
maka x₁(t) + x₂(t) → y₁(t) + y₂(t)
\`\`\`

Kombinasi kedua sifat ini disebut **prinsip superposisi** — fondasi dari hampir seluruh analisa sistem linear.

Sistem yang bersifat linear sangat mudah dianalisa karena kita bisa mengurai sinyal kompleks menjadi komponen sederhana, menganalisa masing-masing, lalu menjumlahkan hasilnya.

## Ringkasan Konsep Kunci

| Konsep | Definisi Singkat |
|--------|----------------|
| Sinyal | Besaran yang mengandung informasi |
| Sistem | Entitas yang memproses sinyal input → output |
| Sinyal kontinyu x(t) | Nilai ada di semua titik waktu real |
| Sinyal diskrit x(n) | Nilai hanya ada di bilangan bulat n |
| Unit step u(t) | Mendefinisikan kapan sinyal mulai/berhenti |
| Impulse δ(n) | Blok penyusun sinyal diskrit, menggambarkan sistem |
| Linearitas | Homogenitas + superposisi |

## Penutup

Memahami representasi sinyal dan sistem bukan hanya untuk kepentingan akademis. Di era industri 4.0 yang mengandalkan sensor, kontrol digital, dan komunikasi data, fondasi ini menjadi semakin relevan bagi engineer dan teknisi yang ingin bekerja lebih dalam—bukan sekadar mengoperasikan perangkat, tapi benar-benar memahami apa yang terjadi di baliknya.

Artikel berikutnya dalam seri ini akan membahas **transformasi Fourier** dan bagaimana menggunakannya untuk menganalisa sinyal di domain frekuensi—termasuk aplikasi praktisnya dalam analisa harmonisa jaringan listrik industri.
    `}],Ah=[...new Set(Ze.map(m=>m.category))];function Mh(m){return Ze.filter(f=>f.category===m)}function _h(m){return Ze.find(f=>f.slug===m)}function Mt(m){return new Date(m).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}const hs="ElektroTeknik",Ch="https://balenetizien.github.io";function Ce(m,f,x){let o=document.querySelector(`meta[${m}="${f}"]`);o||(o=document.createElement("meta"),o.setAttribute(m,f),document.head.appendChild(o)),o.content=x}function Xl({title:m,description:f,url:x,type:o="website",structuredData:S}){const M=m===hs?m:`${m} — ${hs}`;ea.useEffect(()=>{document.title=M,Ce("name","description",f),Ce("property","og:title",M),Ce("property","og:description",f),Ce("property","og:type",o),Ce("property","og:site_name",hs),Ce("property","og:locale","id_ID"),x&&Ce("property","og:url",`${Ch}${x}`),Ce("name","twitter:card","summary"),Ce("name","twitter:title",M),Ce("name","twitter:description",f);const O="json-ld-structured-data";let B=document.getElementById(O);return S?(B||(B=document.createElement("script"),B.id=O,B.type="application/ld+json",document.head.appendChild(B)),B.textContent=JSON.stringify(S)):B&&B.remove(),()=>{const D=document.getElementById(O);D&&D.remove()}},[M,f,x])}const ps=5;function Dh(){Xl({title:"ElektroTeknik — Panduan Praktis Kelistrikan & Otomasi Industri",description:"Panduan teknis mendalam tentang motor listrik, panel kontrol, VFD, pneumatik, PLC, dan otomasi industri. Ditulis oleh engineer berpengalaman dalam Bahasa Indonesia.",url:"/",type:"website"});const[m,f]=ea.useState(1),x=[...Ze].sort((M,O)=>O.date.localeCompare(M.date)),o=Math.ceil(x.length/ps),S=x.slice((m-1)*ps,m*ps);return s.jsxs("div",{children:[s.jsx("h2",{className:"text-xs font-semibold text-[hsl(215_14%_55%)] uppercase tracking-widest mb-5",children:"Artikel Terbaru"}),s.jsx("div",{className:"flex flex-col gap-8",children:S.map(M=>s.jsxs("article",{style:{borderBottom:"1px solid hsl(220 15% 22%)"},className:"pb-7",children:[s.jsx("div",{className:"flex items-center gap-2 mb-2",children:s.jsx("span",{className:"tag-badge",children:M.category})}),s.jsx(Oa,{href:`/artikel/${M.slug}`,className:"block group hover:no-underline",children:s.jsx("h3",{className:"text-[hsl(210_30%_88%)] font-semibold text-base sm:text-lg leading-snug group-hover:text-[hsl(199_89%_60%)] transition-colors mb-2",children:M.title})}),s.jsxs("div",{className:"flex items-center gap-3 text-xs text-[hsl(215_14%_50%)] mb-3",children:[s.jsx(Ci,{size:11}),s.jsx("span",{children:M.readTime}),s.jsx("span",{children:"·"}),s.jsx("span",{children:Mt(M.date)})]}),s.jsx("p",{className:"text-sm text-[hsl(215_14%_62%)] leading-relaxed",children:M.excerpt}),s.jsx("div",{className:"mt-3 flex flex-wrap gap-1",children:M.tags.slice(0,4).map(O=>s.jsx(Oa,{href:`/cari?q=${encodeURIComponent(O)}`,className:"tag-badge hover:no-underline",children:O},O))})]},M.slug))}),o>1&&s.jsxs("div",{className:"flex items-center gap-2 mt-8",children:[s.jsx("button",{onClick:()=>f(M=>Math.max(1,M-1)),disabled:m===1,className:"px-3 py-1.5 text-xs border border-[hsl(220_15%_25%)] rounded text-[hsl(215_14%_60%)] disabled:opacity-40 hover:border-[hsl(199_89%_40%)] hover:text-[hsl(199_89%_60%)] transition-colors",children:"← Sebelumnya"}),Array.from({length:o},(M,O)=>O+1).map(M=>s.jsx("button",{onClick:()=>f(M),className:`w-8 h-8 text-xs rounded border transition-colors ${M===m?"border-[hsl(199_89%_48%)] text-[hsl(199_89%_60%)] bg-[hsl(199_89%_10%)]":"border-[hsl(220_15%_25%)] text-[hsl(215_14%_60%)] hover:border-[hsl(199_89%_40%)]"}`,children:M},M)),s.jsx("button",{onClick:()=>f(M=>Math.min(o,M+1)),disabled:m===o,className:"px-3 py-1.5 text-xs border border-[hsl(220_15%_25%)] rounded text-[hsl(215_14%_60%)] disabled:opacity-40 hover:border-[hsl(199_89%_40%)] hover:text-[hsl(199_89%_60%)] transition-colors",children:"Berikutnya →"})]})]})}function Oc(){return Xl({title:"Tentang Penulis — Putra Adhiguna",description:"Putra Adhiguna adalah Electrical & Industrial Engineer yang menulis panduan teknis mendalam tentang motor listrik, panel kontrol, pneumatik, dan otomasi industri dalam Bahasa Indonesia.",url:"/about",type:"website",structuredData:{"@context":"https://schema.org","@type":"Person",name:"Putra Adhiguna",url:"https://balenetizien.github.io/about",sameAs:["https://github.com/balenetizien","https://id.linkedin.com/in/putraadhiguna"],jobTitle:"Electrical & Industrial Engineer",description:"Engineer spesialis sistem motor listrik, panel kontrol industri, pneumatik, dan PLC."}}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-6",children:"Tentang Blog Ini"}),s.jsxs("div",{className:"prose-blog",children:[s.jsxs("p",{children:["Selamat datang di ",s.jsx("strong",{children:"ElektroTeknik"})," — blog teknikal yang membahas dunia kelistrikan industri, sistem motor, pneumatik, dan otomasi secara serius dan mendalam. Semua artikel di sini ditulis oleh ",s.jsx("strong",{children:"Putra Adhiguna"}),", seorang Electrical & Industrial Engineer yang sudah malang-melintang di industri manufaktur, pengolahan, dan otomasi."]}),s.jsx("h2",{children:"Siapa Saya?"}),s.jsxs("p",{children:["Nama saya ",s.jsx("strong",{children:"Putra Adhiguna"}),". Saya seorang engineer yang berspesialisasi di bidang sistem kontrol motor, panel MCC (Motor Control Center), sistem pneumatik industri, dan pemrograman PLC. Latar belakang saya mencakup instalasi, komisioning, dan troubleshooting di berbagai sektor: manufaktur, food processing, dan fasilitas produksi skala menengah ke atas."]}),s.jsx("p",{children:"Perjalanan saya di dunia teknik mengajarkan satu hal yang konsisten: banyak sekali masalah di lapangan yang sebenarnya berakar dari kesalahpahaman konsep dasar. Panel yang salah ukuran, motor yang sering trip, VFD yang tidak optimal — semuanya hampir selalu bisa ditelusuri ke pemahaman yang tidak cukup dalam tentang prinsip dasarnya."}),s.jsx("p",{children:"Itulah motivasi blog ini hadir."}),s.jsx("h2",{children:"Apa yang Dibahas di Sini?"}),s.jsx("p",{children:"Konten di sini bukan ringkasan Wikipedia atau terjemahan dari datasheet. Setiap artikel ditulis dengan perspektif praktis lapangan, menggunakan angka nyata, contoh kasus, dan pembahasan yang langsung ke inti. Topik yang dicover meliputi:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Motor Listrik 1 Phase & 3 Phase"})," — prinsip kerja, konstruksi, jenis starting, dan troubleshooting sistematis"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Motor Industri"})," — VFD/inverter, membaca nameplate, sistem proteksi, dan panduan pemilihan motor yang benar"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Rangkaian Kontrol"})," — ladder diagram, wiring diagram, panel MCC, kontaktor, relay, dan thermal overload"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Pneumatik"})," — komponen sistem udara bertekanan, katup solenoid, silinder, dan troubleshooting sirkuit pneumatik"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Dasar Kelistrikan & Sinyal"})," — hukum-hukum fisika yang berlaku setiap hari di lapangan, teori sinyal untuk engineer"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"PLC & Otomasi"})," — pengantar pemrograman PLC, implementasi kontrol motor berbasis ladder logic"]})]}),s.jsx("h2",{children:"Filosofi Penulisan"}),s.jsxs("p",{children:["Saya menulis untuk pembaca yang serius — teknisi dan engineer yang ingin benar-benar mengerti, bukan sekadar hafal prosedur. Artikel di sini tidak menghindari matematika atau konsep yang sedikit rumit, tapi selalu diikat dengan konteks praktis: ",s.jsx("em",{children:"ini relevansinya di lapangan, ini implikasinya kalau Anda mengabaikannya."})]}),s.jsx("p",{children:"Saya juga percaya pada dokumentasi yang jujur. Kalau ada keterbatasan dari suatu metode atau pendekatan, saya akan tulis apa adanya. Tidak semua solusi cocok untuk semua kondisi, dan menutup-nutupi itu justru merugikan pembaca."}),s.jsx("h2",{children:"Konten Asli, Bukan Hasil Salin-Tempel"}),s.jsx("p",{children:"Setiap artikel di blog ini adalah hasil pemikiran dan penulisan original. Saya tidak menyalin dari sumber lain, tidak men-translate artikel asing kata per kata, dan tidak mengisi halaman dengan konten generik hanya untuk kepentingan volume. Kalau saya tidak punya cukup pengalaman atau pemahaman untuk menulis tentang sesuatu secara mendalam, saya tidak menulisnya."}),s.jsx("h2",{children:"Kontak"}),s.jsx("p",{children:"Jika Anda punya pertanyaan teknis, koreksi terhadap isi artikel, atau topik yang ingin dibahas lebih dalam, silakan hubungi melalui:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Email:"})," ",s.jsx("a",{href:"mailto:jagoanpapih2@gmail.com",style:{color:"hsl(199 89% 60%)"},children:"jagoanpapih2@gmail.com"})]}),s.jsxs("li",{children:[s.jsx("strong",{children:"LinkedIn:"})," ",s.jsx("a",{href:"https://id.linkedin.com/in/putraadhiguna",target:"_blank",rel:"noreferrer",style:{color:"hsl(199 89% 60%)"},children:"Putra Adhiguna"})]}),s.jsxs("li",{children:[s.jsx("strong",{children:"GitHub:"})," ",s.jsx("a",{href:"https://github.com/balenetizien",target:"_blank",rel:"noreferrer",style:{color:"hsl(199 89% 60%)"},children:"balenetizien"})]})]}),s.jsx("p",{children:"Saya membaca semua pesan yang masuk. Untuk pertanyaan yang sifatnya umum dan mungkin bermanfaat bagi banyak orang, saya akan pertimbangkan untuk dijadikan artikel tersendiri."})]})]})}function Eh(){const m=Gc(),x=new URLSearchParams(m).get("k")||"",o=x?Mh(x):Ze;return s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:"Artikel per Kategori"}),s.jsx("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-6",children:x?`Menampilkan artikel dalam kategori: "${x}"`:"Semua kategori"}),s.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[s.jsx(Oa,{href:"/kategori",className:`px-3 py-1 text-xs rounded border transition-colors hover:no-underline ${x?"border-[hsl(220_15%_25%)] text-[hsl(215_14%_60%)] hover:border-[hsl(199_89%_40%)]":"border-[hsl(199_89%_48%)] text-[hsl(199_89%_60%)] bg-[hsl(199_89%_8%)]"}`,children:"Semua"}),Ah.map(S=>s.jsx(Oa,{href:`/kategori?k=${encodeURIComponent(S)}`,className:`px-3 py-1 text-xs rounded border transition-colors hover:no-underline ${x===S?"border-[hsl(199_89%_48%)] text-[hsl(199_89%_60%)] bg-[hsl(199_89%_8%)]":"border-[hsl(220_15%_25%)] text-[hsl(215_14%_60%)] hover:border-[hsl(199_89%_40%)]"}`,children:S},S))]}),s.jsx("div",{className:"flex flex-col gap-5",children:o.sort((S,M)=>M.date.localeCompare(S.date)).map(S=>s.jsxs("div",{style:{borderBottom:"1px solid hsl(220 15% 20%)"},className:"pb-5",children:[s.jsx("div",{className:"flex items-center gap-2 mb-1",children:s.jsx("span",{className:"tag-badge",children:S.category})}),s.jsx(Oa,{href:`/artikel/${S.slug}`,className:"block hover:no-underline group",children:s.jsx("h3",{className:"text-[hsl(210_25%_85%)] text-sm sm:text-base font-semibold group-hover:text-[hsl(199_89%_60%)] transition-colors leading-snug",children:S.title})}),s.jsxs("div",{className:"flex items-center gap-3 text-xs text-[hsl(215_14%_50%)] mt-1.5",children:[s.jsx(Ci,{size:10}),s.jsx("span",{children:S.readTime}),s.jsx("span",{children:"·"}),s.jsx("span",{children:Mt(S.date)})]})]},S.slug))})]})}function Rh(){const m=[...Ze].sort((o,S)=>S.date.localeCompare(o.date)),f={};for(const o of m){const S=o.date.slice(0,4);f[S]||(f[S]=[]),f[S].push(o)}const x=Object.keys(f).sort((o,S)=>Number(S)-Number(o));return s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:"Arsip Artikel"}),s.jsxs("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-8",children:[Ze.length," artikel sejak pertama kali blog ini hadir."]}),s.jsx("div",{className:"flex flex-col gap-10",children:x.map(o=>s.jsxs("div",{children:[s.jsxs("h2",{className:"text-base font-semibold text-[hsl(199_89%_55%)] mb-4 pb-2",style:{borderBottom:"1px solid hsl(220 15% 22%)"},children:[o,s.jsxs("span",{className:"ml-2 text-xs font-normal text-[hsl(215_14%_50%)]",children:["(",f[o].length," artikel)"]})]}),s.jsx("div",{className:"flex flex-col gap-3",children:f[o].map(S=>s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"text-xs text-[hsl(215_14%_45%)] shrink-0 mt-0.5 w-24",children:Mt(S.date).split(" ").slice(0,2).join(" ")}),s.jsxs("div",{className:"flex-1",children:[s.jsx(Oa,{href:`/artikel/${S.slug}`,className:"text-sm text-[hsl(210_25%_82%)] hover:text-[hsl(199_89%_60%)] leading-snug hover:no-underline",children:S.title}),s.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[s.jsx("span",{className:"text-xs text-[hsl(215_14%_45%)]",children:S.category}),s.jsx("span",{className:"text-[hsl(215_14%_35%)]",children:"·"}),s.jsxs("span",{className:"flex items-center gap-1 text-xs text-[hsl(215_14%_45%)]",children:[s.jsx(Ci,{size:10})," ",S.readTime]})]})]})]},S.slug))})]},o))})]})}function Nh(){const m=Gc(),x=new URLSearchParams(m).get("q")||"",o=x?Ze.filter(S=>S.title.toLowerCase().includes(x.toLowerCase())||S.excerpt.toLowerCase().includes(x.toLowerCase())||S.tags.some(M=>M.toLowerCase().includes(x.toLowerCase()))||S.category.toLowerCase().includes(x.toLowerCase())):[];return s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:x?`Hasil pencarian: "${x}"`:"Cari Artikel"}),x&&s.jsx("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-6",children:o.length>0?`Ditemukan ${o.length} artikel`:"Tidak ada artikel yang cocok"}),!x&&s.jsx("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-6",children:"Gunakan bilah pencarian di atas untuk menemukan artikel."}),s.jsx("div",{className:"flex flex-col gap-5",children:o.map(S=>s.jsxs("div",{style:{borderBottom:"1px solid hsl(220 15% 20%)"},className:"pb-5",children:[s.jsx("div",{className:"flex items-center gap-2 mb-1",children:s.jsx("span",{className:"tag-badge",children:S.category})}),s.jsx(Oa,{href:`/artikel/${S.slug}`,className:"block hover:no-underline group",children:s.jsx("h3",{className:"text-[hsl(210_25%_85%)] text-sm sm:text-base font-semibold group-hover:text-[hsl(199_89%_60%)] transition-colors leading-snug",children:S.title})}),s.jsxs("div",{className:"flex items-center gap-3 text-xs text-[hsl(215_14%_50%)] mt-1.5 mb-2",children:[s.jsx(Ci,{size:10}),s.jsx("span",{children:S.readTime}),s.jsx("span",{children:"·"}),s.jsx("span",{children:Mt(S.date)})]}),s.jsx("p",{className:"text-sm text-[hsl(215_14%_60%)]",children:S.excerpt})]},S.slug))})]})}function _i(m){return m.replace(/\*\*(.+?)\*\*/g,'<strong style="color:hsl(210 25% 88%);font-weight:600">$1</strong>').replace(/\*([^*]+?)\*/g,"<em>$1</em>").replace(/`([^`]+?)`/g,'<code style="background:hsl(220 22% 22%);padding:0.1em 0.4em;border-radius:3px;font-size:0.875em">$1</code>')}function Oh(m){const f=m.trim().split(`
`),x=[];let o=0,S=0;for(;o<f.length;){const M=f[o];if(M.startsWith("## "))x.push(s.jsx("h2",{children:M.slice(3)},S++)),o++;else if(M.startsWith("### "))x.push(s.jsx("h3",{children:M.slice(4)},S++)),o++;else if(M.startsWith("```")){const O=M.slice(3).trim();o++;const B=[];for(;o<f.length&&!f[o].startsWith("```");)B.push(f[o]),o++;o++,x.push(s.jsxs("pre",{children:[O&&s.jsx("span",{style:{display:"block",fontSize:"0.7rem",color:"hsl(215 14% 45%)",marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:O}),s.jsx("code",{children:B.join(`
`)})]},S++))}else if(M.startsWith("| ")){const O=[];for(;o<f.length&&f[o].startsWith("| ");)O.push(f[o]),o++;const[B,,...D]=O,y=B.split("|").filter(Boolean).map(E=>E.trim());x.push(s.jsxs("table",{children:[s.jsx("thead",{children:s.jsx("tr",{children:y.map((E,H)=>s.jsx("th",{children:E},H))})}),s.jsx("tbody",{children:D.map((E,H)=>s.jsx("tr",{children:E.split("|").filter(Boolean).map((w,da)=>s.jsx("td",{dangerouslySetInnerHTML:{__html:_i(w.trim())}},da))},H))})]},S++))}else if(M.startsWith("- ")||M.startsWith("* ")){const O=[];for(;o<f.length&&(f[o].startsWith("- ")||f[o].startsWith("* "));)O.push(f[o].slice(2)),o++;x.push(s.jsx("ul",{children:O.map((B,D)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:_i(B)}},D))},S++))}else if(/^\d+\. /.test(M)){const O=[];for(;o<f.length&&/^\d+\. /.test(f[o]);)O.push(f[o].replace(/^\d+\. /,"")),o++;x.push(s.jsx("ol",{children:O.map((B,D)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:_i(B)}},D))},S++))}else M.startsWith("> ")?(x.push(s.jsx("blockquote",{children:s.jsx("span",{dangerouslySetInnerHTML:{__html:_i(M.slice(2))}})},S++)),o++):(M.trim()===""||x.push(s.jsx("p",{dangerouslySetInnerHTML:{__html:_i(M)}},S++)),o++)}return x}function zh({slug:m}){const f=_h(m);if(Xl(f?{title:f.title,description:f.excerpt,url:`/artikel/${f.slug}`,type:"article",publishedTime:f.date,tags:f.tags,structuredData:{"@context":"https://schema.org","@type":"Article",headline:f.title,description:f.excerpt,datePublished:f.date,dateModified:f.date,keywords:f.tags.join(", "),articleSection:f.category,inLanguage:"id-ID",author:{"@type":"Person",name:"Putra Adhiguna",url:"https://id.linkedin.com/in/putraadhiguna"},publisher:{"@type":"Organization",name:"ElektroTeknik",url:"https://balenetizien.github.io"},mainEntityOfPage:{"@type":"WebPage","@id":`https://balenetizien.github.io/artikel/${f.slug}`}}}:{title:"Artikel tidak ditemukan",description:"Halaman ini tidak tersedia."}),!f)return s.jsxs("div",{className:"text-center py-20",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🔌"}),s.jsx("h2",{className:"text-lg font-semibold text-[hsl(210_30%_80%)] mb-2",children:"Artikel tidak ditemukan"}),s.jsx(Oa,{href:"/",className:"text-sm text-[hsl(199_89%_48%)]",children:"← Kembali ke beranda"})]});const x=Ze.filter(o=>o.slug!==f.slug&&o.category===f.category).slice(0,3);return s.jsxs("div",{children:[s.jsxs(Oa,{href:"/",className:"inline-flex items-center gap-1.5 text-xs text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] hover:no-underline mb-6 transition-colors",children:[s.jsx(uh,{size:12})," Kembali"]}),s.jsx("div",{className:"mb-2 flex items-center gap-2",children:s.jsx("span",{className:"tag-badge",children:f.category})}),s.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-[hsl(210_30%_90%)] leading-snug mb-4",children:f.title}),s.jsxs("div",{className:"flex items-center gap-4 text-xs text-[hsl(215_14%_50%)] mb-2 pb-6",style:{borderBottom:"1px solid hsl(220 15% 22%)"},children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(sh,{size:11})," ",Mt(f.date)]}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Ci,{size:11})," ",f.readTime," baca"]})]}),s.jsx("p",{className:"text-sm text-[hsl(215_14%_60%)] leading-relaxed italic mb-6",children:f.excerpt}),s.jsx("div",{className:"prose-blog",children:Oh(f.content)}),s.jsx("div",{className:"mt-8 pt-6 flex flex-wrap gap-1.5",style:{borderTop:"1px solid hsl(220 15% 22%)"},children:f.tags.map(o=>s.jsxs(Oa,{href:`/cari?q=${encodeURIComponent(o)}`,className:"tag-badge hover:no-underline",children:["#",o]},o))}),x.length>0&&s.jsxs("div",{className:"mt-8 pt-6",style:{borderTop:"1px solid hsl(220 15% 22%)"},children:[s.jsx("h3",{className:"text-xs font-semibold text-[hsl(215_14%_55%)] uppercase tracking-widest mb-4",children:"Artikel Terkait"}),s.jsx("div",{className:"flex flex-col gap-3",children:x.map(o=>s.jsxs(Oa,{href:`/artikel/${o.slug}`,className:"block hover:no-underline group",children:[s.jsx("div",{className:"text-sm text-[hsl(210_25%_82%)] group-hover:text-[hsl(199_89%_60%)] transition-colors leading-snug",children:o.title}),s.jsx("div",{className:"text-xs text-[hsl(215_14%_50%)] mt-0.5",children:Mt(o.date)})]},o.slug))})]})]})}function zc(){return Xl({title:"Kebijakan Privasi",description:"Kebijakan privasi ElektroTeknik menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pengunjung blog ini.",url:"/privacy-policy",type:"website"}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:"Kebijakan Privasi"}),s.jsxs("p",{className:"text-xs text-[hsl(215_14%_50%)] mb-6",children:["Terakhir diperbarui: ","16 April 2026"]}),s.jsxs("div",{className:"prose-blog",children:[s.jsxs("p",{children:["Selamat datang di ",s.jsx("strong",{children:"ElektroTeknik"})," (dapat diakses di"," ",s.jsx("a",{href:"https://balenetizien.github.io",style:{color:"hsl(199 89% 60%)"},children:"https://balenetizien.github.io"}),"). Halaman ini menjelaskan kebijakan privasi kami terkait pengumpulan, penggunaan, dan perlindungan informasi yang Anda berikan saat menggunakan blog ini."]}),s.jsx("p",{children:"Dengan mengakses dan menggunakan blog ini, Anda menyetujui kebijakan privasi yang tercantum di halaman ini."}),s.jsx("h2",{children:"1. Informasi yang Kami Kumpulkan"}),s.jsx("p",{children:"Blog ini adalah situs statis yang tidak memiliki sistem registrasi akun atau formulir pengumpulan data pengguna secara langsung. Namun, layanan pihak ketiga yang kami gunakan mungkin mengumpulkan informasi tertentu secara otomatis, antara lain:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Data Analitik:"})," Informasi tentang bagaimana pengunjung berinteraksi dengan situs, termasuk halaman yang dikunjungi, durasi kunjungan, dan sumber lalu lintas. Data ini dikumpulkan secara anonim dan agregat."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Data Teknis:"})," Alamat IP, jenis browser, sistem operasi, dan referrer URL yang dikumpulkan secara otomatis oleh server hosting (GitHub Pages)."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Cookie:"})," Layanan iklan pihak ketiga (Google AdSense) mungkin menggunakan cookie untuk menyajikan iklan yang relevan berdasarkan kunjungan Anda sebelumnya ke situs ini dan situs lain di internet."]})]}),s.jsx("h2",{children:"2. Penggunaan Google AdSense"}),s.jsxs("p",{children:["Blog ini menggunakan ",s.jsx("strong",{children:"Google AdSense"})," untuk menampilkan iklan. Google menggunakan cookie DART untuk menampilkan iklan kepada pengunjung berdasarkan kunjungan mereka ke situs ini dan situs lain di internet. Pengunjung dapat memilih untuk tidak menggunakan cookie DART dengan mengunjungi halaman Kebijakan Privasi jaringan iklan dan konten Google di:"," ",s.jsx("a",{href:"https://policies.google.com/technologies/ads",target:"_blank",rel:"noreferrer",style:{color:"hsl(199 89% 60%)"},children:"https://policies.google.com/technologies/ads"}),"."]}),s.jsxs("p",{children:["Beberapa mitra iklan pihak ketiga kami memiliki kebijakan privasi mereka sendiri terkait data pengguna. Untuk informasi lebih lanjut, silakan merujuk ke daftar mitra iklan bersertifikat di:"," ",s.jsx("a",{href:"https://support.google.com/admanager/answer/9012903",target:"_blank",rel:"noreferrer",style:{color:"hsl(199 89% 60%)"},children:"halaman kebijakan Google"}),"."]}),s.jsx("h2",{children:"3. Cookie dan Web Beacon"}),s.jsx("p",{children:"Blog ElektroTeknik menggunakan cookie. Cookie adalah file teks kecil yang disimpan di komputer Anda dan digunakan oleh browser web untuk menyimpan preferensi Anda. Sebagian besar browser modern memungkinkan Anda mengontrol cookie melalui pengaturan browser. Namun, menonaktifkan cookie dapat memengaruhi beberapa fungsi situs."}),s.jsx("p",{children:"Mitra iklan dan afiliasi kami mungkin menggunakan cookie, JavaScript, atau web beacon dalam iklan mereka. Cookie ini dikirimkan langsung ke browser Anda oleh situs web terkait. ElektroTeknik tidak memiliki akses atau kontrol atas cookie pihak ketiga ini."}),s.jsx("h2",{children:"4. Kebijakan Privasi Pihak Ketiga"}),s.jsx("p",{children:"Kebijakan privasi ElektroTeknik tidak berlaku untuk pengiklan atau situs web lain. Kami menyarankan Anda membaca kebijakan privasi masing-masing server iklan pihak ketiga untuk informasi lebih lengkap. Ini termasuk praktik dan instruksi mereka tentang cara memilih keluar dari opsi tertentu."}),s.jsx("p",{children:"Anda dapat memilih untuk menonaktifkan cookie melalui opsi browser individual Anda. Untuk mengetahui lebih lanjut tentang manajemen cookie di browser tertentu, kunjungi situs web resmi browser yang Anda gunakan."}),s.jsx("h2",{children:"5. Hak Privasi Anak-Anak (COPPA)"}),s.jsx("p",{children:"Blog ElektroTeknik ditujukan untuk pembaca dewasa — teknisi, engineer, dan pelajar teknik elektro. Kami tidak secara sadar mengumpulkan Informasi Pribadi yang Dapat Diidentifikasi dari anak-anak di bawah usia 13 tahun. Jika Anda yakin bahwa anak Anda telah memberikan informasi semacam itu di situs kami, kami mendorong Anda untuk segera menghubungi kami dan kami akan melakukan upaya terbaik untuk segera menghapus informasi tersebut."}),s.jsx("h2",{children:"6. Hak Pengguna (GDPR untuk Pembaca Eropa)"}),s.jsx("p",{children:"Jika Anda berada di wilayah Eropa, Anda memiliki hak-hak berikut terkait data pribadi Anda:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Hak untuk mengakses data pribadi yang kami miliki tentang Anda"}),s.jsx("li",{children:"Hak untuk meminta koreksi data yang tidak akurat"}),s.jsx("li",{children:"Hak untuk meminta penghapusan data Anda"}),s.jsx("li",{children:"Hak untuk menolak pemrosesan data Anda"}),s.jsx("li",{children:"Hak atas portabilitas data"})]}),s.jsx("p",{children:"Karena blog ini tidak mengumpulkan data pengguna secara langsung, sebagian besar hak ini harus diajukan langsung ke layanan pihak ketiga (Google, GitHub) yang memproses data terkait penggunaan situs ini."}),s.jsx("h2",{children:"7. Informasi Kontak"}),s.jsx("p",{children:"Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau praktik data kami, silakan hubungi kami melalui:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Email:"})," ",s.jsx("a",{href:"mailto:jagoanpapih2@gmail.com",style:{color:"hsl(199 89% 60%)"},children:"jagoanpapih2@gmail.com"})]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Website:"})," ",s.jsx("a",{href:"https://balenetizien.github.io",style:{color:"hsl(199 89% 60%)"},children:"https://balenetizien.github.io"})]})]}),s.jsx("h2",{children:"8. Perubahan Kebijakan Privasi"}),s.jsx("p",{children:'Kami berhak untuk mengubah kebijakan privasi ini kapan saja. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Kami mendorong Anda untuk meninjau halaman ini secara berkala untuk mengetahui pembaruan terbaru. Tanggal "Terakhir diperbarui" di bagian atas halaman ini menunjukkan kapan kebijakan ini terakhir direvisi.'}),s.jsx("p",{children:"Dengan terus menggunakan blog ElektroTeknik setelah perubahan dipublikasikan, Anda dianggap menyetujui perubahan tersebut."})]})]})}function Uh(){return s.jsxs("div",{className:"text-center py-20",children:[s.jsx("div",{className:"text-5xl mb-4",children:"⚡"}),s.jsx("h2",{className:"text-lg font-semibold text-[hsl(210_30%_82%)] mb-2",children:"Halaman tidak ditemukan"}),s.jsx("a",{href:"/",className:"text-sm text-[hsl(199_89%_48%)]",children:"Kembali ke beranda"})]})}function Kh(){return s.jsx(jh,{children:s.jsxs($f,{children:[s.jsx(Me,{path:"/",component:Dh}),s.jsx(Me,{path:"/about",component:Oc}),s.jsx(Me,{path:"/tentang",component:Oc}),s.jsx(Me,{path:"/kategori",component:Eh}),s.jsx(Me,{path:"/arsip",component:Rh}),s.jsx(Me,{path:"/cari",component:Nh}),s.jsx(Me,{path:"/artikel/:slug",children:m=>s.jsx(zh,{slug:m.slug})}),s.jsx(Me,{path:"/privacy-policy",component:zc}),s.jsx(Me,{path:"/kebijakan-privasi",component:zc}),s.jsx(Me,{component:Uh})]})})}function Bh(){return s.jsx(wc,{base:"/".replace(/\/$/,""),children:s.jsx(Kh,{})})}_f.createRoot(document.getElementById("root")).render(s.jsx(Bh,{}));
