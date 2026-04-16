function mk(c,b){for(var x=0;x<b.length;x++){const s=b[x];if(typeof s!="string"&&!Array.isArray(s)){for(const S in s)if(S!=="default"&&!(S in c)){const C=Object.getOwnPropertyDescriptor(s,S);C&&Object.defineProperty(c,S,C.get?C:{enumerable:!0,get:()=>s[S]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))s(S);new MutationObserver(S=>{for(const C of S)if(C.type==="childList")for(const N of C.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&s(N)}).observe(document,{childList:!0,subtree:!0});function x(S){const C={};return S.integrity&&(C.integrity=S.integrity),S.referrerPolicy&&(C.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?C.credentials="include":S.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function s(S){if(S.ep)return;S.ep=!0;const C=x(S);fetch(S.href,C)}})();function gk(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var us={exports:{}},xi={};var cm;function fk(){if(cm)return xi;cm=1;var c=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function x(s,S,C){var N=null;if(C!==void 0&&(N=""+C),S.key!==void 0&&(N=""+S.key),"key"in S){C={};for(var V in S)V!=="key"&&(C[V]=S[V])}else C=S;return S=C.ref,{$$typeof:c,type:s,key:N,ref:S!==void 0?S:null,props:C}}return xi.Fragment=b,xi.jsx=x,xi.jsxs=x,xi}var mm;function kk(){return mm||(mm=1,us.exports=fk()),us.exports}var d=kk(),rs={exports:{}},Ai={},ss={exports:{}},os={};var gm;function hk(){return gm||(gm=1,(function(c){function b(M,O){var G=M.length;M.push(O);a:for(;0<G;){var sa=G-1>>>1,m=M[sa];if(0<S(m,O))M[sa]=O,M[G]=m,G=sa;else break a}}function x(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var O=M[0],G=M.pop();if(G!==O){M[0]=G;a:for(var sa=0,m=M.length,_=m>>>1;sa<_;){var z=2*(sa+1)-1,R=M[z],H=z+1,$=M[H];if(0>S(R,G))H<m&&0>S($,R)?(M[sa]=$,M[H]=G,sa=H):(M[sa]=R,M[z]=G,sa=z);else if(H<m&&0>S($,G))M[sa]=$,M[H]=G,sa=H;else break a}}return O}function S(M,O){var G=M.sortIndex-O.sortIndex;return G!==0?G:M.id-O.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;c.unstable_now=function(){return C.now()}}else{var N=Date,V=N.now();c.unstable_now=function(){return N.now()-V}}var D=[],p=[],E=1,B=null,w=3,da=!1,ma=!1,ga=!1,ya=!1,Oa=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,za=typeof setImmediate<"u"?setImmediate:null;function ke(M){for(var O=x(p);O!==null;){if(O.callback===null)s(p);else if(O.startTime<=M)s(p),O.sortIndex=O.expirationTime,b(D,O);else break;O=x(p)}}function I(M){if(ga=!1,ke(M),!ma)if(x(D)!==null)ma=!0,Za||(Za=!0,Ua());else{var O=x(p);O!==null&&Ka(I,O.startTime-M)}}var Za=!1,Ja=-1,Pa=5,ye=-1;function Ln(){return ya?!0:!(c.unstable_now()-ye<Pa)}function De(){if(ya=!1,Za){var M=c.unstable_now();ye=M;var O=!0;try{a:{ma=!1,ga&&(ga=!1,_e(Ja),Ja=-1),da=!0;var G=w;try{e:{for(ke(M),B=x(D);B!==null&&!(B.expirationTime>M&&Ln());){var sa=B.callback;if(typeof sa=="function"){B.callback=null,w=B.priorityLevel;var m=sa(B.expirationTime<=M);if(M=c.unstable_now(),typeof m=="function"){B.callback=m,ke(M),O=!0;break e}B===x(D)&&s(D),ke(M)}else s(D);B=x(D)}if(B!==null)O=!0;else{var _=x(p);_!==null&&Ka(I,_.startTime-M),O=!1}}break a}finally{B=null,w=G,da=!1}O=void 0}}finally{O?Ua():Za=!1}}}var Ua;if(typeof za=="function")Ua=function(){za(De)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,vn=yn.port2;yn.port1.onmessage=De,Ua=function(){vn.postMessage(null)}}else Ua=function(){Oa(De,0)};function Ka(M,O){Ja=Oa(function(){M(c.unstable_now())},O)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(M){M.callback=null},c.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pa=0<M?Math.floor(1e3/M):5},c.unstable_getCurrentPriorityLevel=function(){return w},c.unstable_next=function(M){switch(w){case 1:case 2:case 3:var O=3;break;default:O=w}var G=w;w=O;try{return M()}finally{w=G}},c.unstable_requestPaint=function(){ya=!0},c.unstable_runWithPriority=function(M,O){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var G=w;w=M;try{return O()}finally{w=G}},c.unstable_scheduleCallback=function(M,O,G){var sa=c.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?sa+G:sa):G=sa,M){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=G+m,M={id:E++,callback:O,priorityLevel:M,startTime:G,expirationTime:m,sortIndex:-1},G>sa?(M.sortIndex=G,b(p,M),x(D)===null&&M===x(p)&&(ga?(_e(Ja),Ja=-1):ga=!0,Ka(I,G-sa))):(M.sortIndex=m,b(D,M),ma||da||(ma=!0,Za||(Za=!0,Ua()))),M},c.unstable_shouldYield=Ln,c.unstable_wrapCallback=function(M){var O=w;return function(){var G=w;w=O;try{return M.apply(this,arguments)}finally{w=G}}}})(os)),os}var fm;function pk(){return fm||(fm=1,ss.exports=hk()),ss.exports}var ds={exports:{}},X={};var km;function bk(){if(km)return X;km=1;var c=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),B=Symbol.iterator;function w(m){return m===null||typeof m!="object"?null:(m=B&&m[B]||m["@@iterator"],typeof m=="function"?m:null)}var da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ma=Object.assign,ga={};function ya(m,_,z){this.props=m,this.context=_,this.refs=ga,this.updater=z||da}ya.prototype.isReactComponent={},ya.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},ya.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Oa(){}Oa.prototype=ya.prototype;function _e(m,_,z){this.props=m,this.context=_,this.refs=ga,this.updater=z||da}var za=_e.prototype=new Oa;za.constructor=_e,ma(za,ya.prototype),za.isPureReactComponent=!0;var ke=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Za=Object.prototype.hasOwnProperty;function Ja(m,_,z,R,H,$){return z=$.ref,{$$typeof:c,type:m,key:_,ref:z!==void 0?z:null,props:$}}function Pa(m,_){return Ja(m.type,_,void 0,void 0,void 0,m.props)}function ye(m){return typeof m=="object"&&m!==null&&m.$$typeof===c}function Ln(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(z){return _[z]})}var De=/\/+/g;function Ua(m,_){return typeof m=="object"&&m!==null&&m.key!=null?Ln(""+m.key):_.toString(36)}function yn(){}function vn(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(yn,yn):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Ka(m,_,z,R,H){var $=typeof m;($==="undefined"||$==="boolean")&&(m=null);var Q=!1;if(m===null)Q=!0;else switch($){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(m.$$typeof){case c:case b:Q=!0;break;case E:return Q=m._init,Ka(Q(m._payload),_,z,R,H)}}if(Q)return H=H(m),Q=R===""?"."+Ua(m,0):R,ke(H)?(z="",Q!=null&&(z=Q.replace(De,"$&/")+"/"),Ka(H,_,z,"",function(Xe){return Xe})):H!=null&&(ye(H)&&(H=Pa(H,z+(H.key==null||m&&m.key===H.key?"":(""+H.key).replace(De,"$&/")+"/")+Q)),_.push(H)),1;Q=0;var Fa=R===""?".":R+":";if(ke(m))for(var fa=0;fa<m.length;fa++)R=m[fa],$=Fa+Ua(R,fa),Q+=Ka(R,_,z,$,H);else if(fa=w(m),typeof fa=="function")for(m=fa.call(m),fa=0;!(R=m.next()).done;)R=R.value,$=Fa+Ua(R,fa++),Q+=Ka(R,_,z,$,H);else if($==="object"){if(typeof m.then=="function")return Ka(vn(m),_,z,R,H);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Q}function M(m,_,z){if(m==null)return m;var R=[],H=0;return Ka(m,R,"","",function($){return _.call(z,$,H++)}),R}function O(m){if(m._status===-1){var _=m._result;_=_(),_.then(function(z){(m._status===0||m._status===-1)&&(m._status=1,m._result=z)},function(z){(m._status===0||m._status===-1)&&(m._status=2,m._result=z)}),m._status===-1&&(m._status=0,m._result=_)}if(m._status===1)return m._result.default;throw m._result}var G=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function sa(){}return X.Children={map:M,forEach:function(m,_,z){M(m,function(){_.apply(this,arguments)},z)},count:function(m){var _=0;return M(m,function(){_++}),_},toArray:function(m){return M(m,function(_){return _})||[]},only:function(m){if(!ye(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},X.Component=ya,X.Fragment=x,X.Profiler=S,X.PureComponent=_e,X.StrictMode=s,X.Suspense=D,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,X.__COMPILER_RUNTIME={__proto__:null,c:function(m){return I.H.useMemoCache(m)}},X.cache=function(m){return function(){return m.apply(null,arguments)}},X.cloneElement=function(m,_,z){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var R=ma({},m.props),H=m.key,$=void 0;if(_!=null)for(Q in _.ref!==void 0&&($=void 0),_.key!==void 0&&(H=""+_.key),_)!Za.call(_,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&_.ref===void 0||(R[Q]=_[Q]);var Q=arguments.length-2;if(Q===1)R.children=z;else if(1<Q){for(var Fa=Array(Q),fa=0;fa<Q;fa++)Fa[fa]=arguments[fa+2];R.children=Fa}return Ja(m.type,H,void 0,void 0,$,R)},X.createContext=function(m){return m={$$typeof:N,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:C,_context:m},m},X.createElement=function(m,_,z){var R,H={},$=null;if(_!=null)for(R in _.key!==void 0&&($=""+_.key),_)Za.call(_,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(H[R]=_[R]);var Q=arguments.length-2;if(Q===1)H.children=z;else if(1<Q){for(var Fa=Array(Q),fa=0;fa<Q;fa++)Fa[fa]=arguments[fa+2];H.children=Fa}if(m&&m.defaultProps)for(R in Q=m.defaultProps,Q)H[R]===void 0&&(H[R]=Q[R]);return Ja(m,$,void 0,void 0,null,H)},X.createRef=function(){return{current:null}},X.forwardRef=function(m){return{$$typeof:V,render:m}},X.isValidElement=ye,X.lazy=function(m){return{$$typeof:E,_payload:{_status:-1,_result:m},_init:O}},X.memo=function(m,_){return{$$typeof:p,type:m,compare:_===void 0?null:_}},X.startTransition=function(m){var _=I.T,z={};I.T=z;try{var R=m(),H=I.S;H!==null&&H(z,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(sa,G)}catch($){G($)}finally{I.T=_}},X.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},X.use=function(m){return I.H.use(m)},X.useActionState=function(m,_,z){return I.H.useActionState(m,_,z)},X.useCallback=function(m,_){return I.H.useCallback(m,_)},X.useContext=function(m){return I.H.useContext(m)},X.useDebugValue=function(){},X.useDeferredValue=function(m,_){return I.H.useDeferredValue(m,_)},X.useEffect=function(m,_,z){var R=I.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(m,_)},X.useId=function(){return I.H.useId()},X.useImperativeHandle=function(m,_,z){return I.H.useImperativeHandle(m,_,z)},X.useInsertionEffect=function(m,_){return I.H.useInsertionEffect(m,_)},X.useLayoutEffect=function(m,_){return I.H.useLayoutEffect(m,_)},X.useMemo=function(m,_){return I.H.useMemo(m,_)},X.useOptimistic=function(m,_){return I.H.useOptimistic(m,_)},X.useReducer=function(m,_,z){return I.H.useReducer(m,_,z)},X.useRef=function(m){return I.H.useRef(m)},X.useState=function(m){return I.H.useState(m)},X.useSyncExternalStore=function(m,_,z){return I.H.useSyncExternalStore(m,_,z)},X.useTransition=function(){return I.H.useTransition()},X.version="19.1.0",X}var hm;function Yl(){return hm||(hm=1,ds.exports=bk()),ds.exports}var cs={exports:{}},La={};var pm;function yk(){if(pm)return La;pm=1;var c=Yl();function b(D){var p="https://react.dev/errors/"+D;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+D+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var s={d:{f:x,r:function(){throw Error(b(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},S=Symbol.for("react.portal");function C(D,p,E){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:B==null?null:""+B,children:D,containerInfo:p,implementation:E}}var N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(D,p){if(D==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return La.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,La.createPortal=function(D,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(b(299));return C(D,p,null,E)},La.flushSync=function(D){var p=N.T,E=s.p;try{if(N.T=null,s.p=2,D)return D()}finally{N.T=p,s.p=E,s.d.f()}},La.preconnect=function(D,p){typeof D=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(D,p))},La.prefetchDNS=function(D){typeof D=="string"&&s.d.D(D)},La.preinit=function(D,p){if(typeof D=="string"&&p&&typeof p.as=="string"){var E=p.as,B=V(E,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,da=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(D,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:B,integrity:w,fetchPriority:da}):E==="script"&&s.d.X(D,{crossOrigin:B,integrity:w,fetchPriority:da,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},La.preinitModule=function(D,p){if(typeof D=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=V(p.as,p.crossOrigin);s.d.M(D,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(D)},La.preload=function(D,p){if(typeof D=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,B=V(E,p.crossOrigin);s.d.L(D,E,{crossOrigin:B,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},La.preloadModule=function(D,p){if(typeof D=="string")if(p){var E=V(p.as,p.crossOrigin);s.d.m(D,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(D)},La.requestFormReset=function(D){s.d.r(D)},La.unstable_batchedUpdates=function(D,p){return D(p)},La.useFormState=function(D,p,E){return N.H.useFormState(D,p,E)},La.useFormStatus=function(){return N.H.useHostTransitionStatus()},La.version="19.1.0",La}var bm;function vk(){if(bm)return cs.exports;bm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(b){console.error(b)}}return c(),cs.exports=yk(),cs.exports}var ym;function Sk(){if(ym)return Ai;ym=1;var c=pk(),b=Yl(),x=vk();function s(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function C(a){var e=a,n=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(n=e.return),a=e.return;while(a)}return e.tag===3?n:null}function N(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function V(a){if(C(a)!==a)throw Error(s(188))}function D(a){var e=a.alternate;if(!e){if(e=C(a),e===null)throw Error(s(188));return e!==a?null:a}for(var n=a,t=e;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return V(i),a;if(l===t)return V(i),e;l=l.sibling}throw Error(s(188))}if(n.return!==t.return)n=i,t=l;else{for(var u=!1,r=i.child;r;){if(r===n){u=!0,n=i,t=l;break}if(r===t){u=!0,t=i,n=l;break}r=r.sibling}if(!u){for(r=l.child;r;){if(r===n){u=!0,n=l,t=i;break}if(r===t){u=!0,t=l,n=i;break}r=r.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==t)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?a:e}function p(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=p(a),e!==null)return e;a=a.sibling}return null}var E=Object.assign,B=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),da=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),Oa=Symbol.for("react.provider"),_e=Symbol.for("react.consumer"),za=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),Pa=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Ln=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function Ua(a){return a===null||typeof a!="object"?null:(a=De&&a[De]||a["@@iterator"],typeof a=="function"?a:null)}var yn=Symbol.for("react.client.reference");function vn(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===yn?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case ma:return"Fragment";case ya:return"Profiler";case ga:return"StrictMode";case I:return"Suspense";case Za:return"SuspenseList";case ye:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case da:return"Portal";case za:return(a.displayName||"Context")+".Provider";case _e:return(a._context.displayName||"Context")+".Consumer";case ke:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case Ja:return e=a.displayName||null,e!==null?e:vn(a.type)||"Memo";case Pa:e=a._payload,a=a._init;try{return vn(a(e))}catch{}}return null}var Ka=Array.isArray,M=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},sa=[],m=-1;function _(a){return{current:a}}function z(a){0>m||(a.current=sa[m],sa[m]=null,m--)}function R(a,e){m++,sa[m]=a.current,a.current=e}var H=_(null),$=_(null),Q=_(null),Fa=_(null);function fa(a,e){switch(R(Q,e),R($,a),R(H,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?Lc(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=Lc(e),a=Vc(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}z(H),R(H,a)}function Xe(){z(H),z($),z(Q)}function Ql(a){a.memoizedState!==null&&R(Fa,a);var e=H.current,n=Vc(e,a.type);e!==n&&(R($,a),R(H,n))}function Ci(a){$.current===a&&(z(H),z($)),Fa.current===a&&(z(Fa),yi._currentValue=G)}var Xl=Object.prototype.hasOwnProperty,Zl=c.unstable_scheduleCallback,Jl=c.unstable_cancelCallback,Ym=c.unstable_shouldYield,wm=c.unstable_requestPaint,ve=c.unstable_now,Qm=c.unstable_getCurrentPriorityLevel,bs=c.unstable_ImmediatePriority,ys=c.unstable_UserBlockingPriority,_i=c.unstable_NormalPriority,Xm=c.unstable_LowPriority,vs=c.unstable_IdlePriority,Zm=c.log,Jm=c.unstable_setDisableYieldValue,Ct=null,Wa=null;function Ze(a){if(typeof Zm=="function"&&Jm(a),Wa&&typeof Wa.setStrictMode=="function")try{Wa.setStrictMode(Ct,a)}catch{}}var Ia=Math.clz32?Math.clz32:Wm,Pm=Math.log,Fm=Math.LN2;function Wm(a){return a>>>=0,a===0?32:31-(Pm(a)/Fm|0)|0}var Di=256,Ei=4194304;function Sn(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Ri(a,e,n){var t=a.pendingLanes;if(t===0)return 0;var i=0,l=a.suspendedLanes,u=a.pingedLanes;a=a.warmLanes;var r=t&134217727;return r!==0?(t=r&~l,t!==0?i=Sn(t):(u&=r,u!==0?i=Sn(u):n||(n=r&~a,n!==0&&(i=Sn(n))))):(r=t&~l,r!==0?i=Sn(r):u!==0?i=Sn(u):n||(n=t&~a,n!==0&&(i=Sn(n)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:i}function _t(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function Im(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var a=Di;return Di<<=1,(Di&4194048)===0&&(Di=256),a}function Ts(){var a=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),a}function Pl(a){for(var e=[],n=0;31>n;n++)e.push(a);return e}function Dt(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function $m(a,e,n,t,i,l){var u=a.pendingLanes;a.pendingLanes=n,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=n,a.entangledLanes&=n,a.errorRecoveryDisabledLanes&=n,a.shellSuspendCounter=0;var r=a.entanglements,o=a.expirationTimes,h=a.hiddenUpdates;for(n=u&~n;0<n;){var T=31-Ia(n),j=1<<T;r[T]=0,o[T]=-1;var y=h[T];if(y!==null)for(h[T]=null,T=0;T<y.length;T++){var v=y[T];v!==null&&(v.lane&=-536870913)}n&=~j}t!==0&&Ms(a,t,0),l!==0&&i===0&&a.tag!==0&&(a.suspendedLanes|=l&~(u&~e))}function Ms(a,e,n){a.pendingLanes|=e,a.suspendedLanes&=~e;var t=31-Ia(e);a.entangledLanes|=e,a.entanglements[t]=a.entanglements[t]|1073741824|n&4194090}function xs(a,e){var n=a.entangledLanes|=e;for(a=a.entanglements;n;){var t=31-Ia(n),i=1<<t;i&e|a[t]&e&&(a[t]|=e),n&=~i}}function Fl(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Wl(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function As(){var a=O.p;return a!==0?a:(a=window.event,a===void 0?32:lm(a.type))}function ag(a,e){var n=O.p;try{return O.p=a,e()}finally{O.p=n}}var Je=Math.random().toString(36).slice(2),Ba="__reactFiber$"+Je,Ga="__reactProps$"+Je,Vn="__reactContainer$"+Je,Il="__reactEvents$"+Je,eg="__reactListeners$"+Je,ng="__reactHandles$"+Je,js="__reactResources$"+Je,Et="__reactMarker$"+Je;function $l(a){delete a[Ba],delete a[Ga],delete a[Il],delete a[eg],delete a[ng]}function qn(a){var e=a[Ba];if(e)return e;for(var n=a.parentNode;n;){if(e=n[Vn]||n[Ba]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(a=wc(a);a!==null;){if(n=a[Ba])return n;a=wc(a)}return e}a=n,n=a.parentNode}return null}function Gn(a){if(a=a[Ba]||a[Vn]){var e=a.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return a}return null}function Rt(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(s(33))}function Yn(a){var e=a[js];return e||(e=a[js]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ja(a){a[Et]=!0}var Cs=new Set,_s={};function Tn(a,e){wn(a,e),wn(a+"Capture",e)}function wn(a,e){for(_s[a]=e,a=0;a<e.length;a++)Cs.add(e[a])}var tg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ds={},Es={};function ig(a){return Xl.call(Es,a)?!0:Xl.call(Ds,a)?!1:tg.test(a)?Es[a]=!0:(Ds[a]=!0,!1)}function Ni(a,e,n){if(ig(e))if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,""+n)}}function Oi(a,e,n){if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,""+n)}}function Ee(a,e,n,t){if(t===null)a.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(n);return}a.setAttributeNS(e,n,""+t)}}var au,Rs;function Qn(a){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||"",Rs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+au+a+Rs}var eu=!1;function nu(a,e){if(!a||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(v){var y=v}Reflect.construct(a,[],j)}else{try{j.call()}catch(v){y=v}a.call(j.prototype)}}else{try{throw Error()}catch(v){y=v}(j=a())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),u=l[0],r=l[1];if(u&&r){var o=u.split(`
`),h=r.split(`
`);for(i=t=0;t<o.length&&!o[t].includes("DetermineComponentFrameRoot");)t++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(t===o.length||i===h.length)for(t=o.length-1,i=h.length-1;1<=t&&0<=i&&o[t]!==h[i];)i--;for(;1<=t&&0<=i;t--,i--)if(o[t]!==h[i]){if(t!==1||i!==1)do if(t--,i--,0>i||o[t]!==h[i]){var T=`
`+o[t].replace(" at new "," at ");return a.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",a.displayName)),T}while(1<=t&&0<=i);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(n=a?a.displayName||a.name:"")?Qn(n):""}function lg(a){switch(a.tag){case 26:case 27:case 5:return Qn(a.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 15:return nu(a.type,!1);case 11:return nu(a.type.render,!1);case 1:return nu(a.type,!0);case 31:return Qn("Activity");default:return""}}function Ns(a){try{var e="";do e+=lg(a),a=a.return;while(a);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ue(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Os(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ug(a){var e=Os(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,e),t=""+a[e];if(!a.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){t=""+u,l.call(this,u)}}),Object.defineProperty(a,e,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function zi(a){a._valueTracker||(a._valueTracker=ug(a))}function zs(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var n=e.getValue(),t="";return a&&(t=Os(a)?a.checked?"true":"false":a.value),a=t,a!==n?(e.setValue(a),!0):!1}function Ui(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var rg=/[\n"\\]/g;function re(a){return a.replace(rg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function tu(a,e,n,t,i,l,u,r){a.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?a.type=u:a.removeAttribute("type"),e!=null?u==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+ue(e)):a.value!==""+ue(e)&&(a.value=""+ue(e)):u!=="submit"&&u!=="reset"||a.removeAttribute("value"),e!=null?iu(a,u,ue(e)):n!=null?iu(a,u,ue(n)):t!=null&&a.removeAttribute("value"),i==null&&l!=null&&(a.defaultChecked=!!l),i!=null&&(a.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?a.name=""+ue(r):a.removeAttribute("name")}function Us(a,e,n,t,i,l,u,r){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(a.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;n=n!=null?""+ue(n):"",e=e!=null?""+ue(e):n,r||e===a.value||(a.value=e),a.defaultValue=e}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,a.checked=r?a.checked:!!t,a.defaultChecked=!!t,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(a.name=u)}function iu(a,e,n){e==="number"&&Ui(a.ownerDocument)===a||a.defaultValue===""+n||(a.defaultValue=""+n)}function Xn(a,e,n,t){if(a=a.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<a.length;n++)i=e.hasOwnProperty("$"+a[n].value),a[n].selected!==i&&(a[n].selected=i),i&&t&&(a[n].defaultSelected=!0)}else{for(n=""+ue(n),e=null,i=0;i<a.length;i++){if(a[i].value===n){a[i].selected=!0,t&&(a[i].defaultSelected=!0);return}e!==null||a[i].disabled||(e=a[i])}e!==null&&(e.selected=!0)}}function Ks(a,e,n){if(e!=null&&(e=""+ue(e),e!==a.value&&(a.value=e),n==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=n!=null?""+ue(n):""}function Bs(a,e,n,t){if(e==null){if(t!=null){if(n!=null)throw Error(s(92));if(Ka(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),e=n}n=ue(e),a.defaultValue=n,t=a.textContent,t===n&&t!==""&&t!==null&&(a.value=t)}function Zn(a,e){if(e){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=e;return}}a.textContent=e}var sg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hs(a,e,n){var t=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?t?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":t?a.setProperty(e,n):typeof n!="number"||n===0||sg.has(e)?e==="float"?a.cssFloat=n:a[e]=(""+n).trim():a[e]=n+"px"}function Ls(a,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(a=a.style,n!=null){for(var t in n)!n.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="");for(var i in e)t=e[i],e.hasOwnProperty(i)&&n[i]!==t&&Hs(a,i,t)}else for(var l in e)e.hasOwnProperty(l)&&Hs(a,l,e[l])}function lu(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var og=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(a){return dg.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var uu=null;function ru(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var Jn=null,Pn=null;function Vs(a){var e=Gn(a);if(e&&(a=e.stateNode)){var n=a[Ga]||null;a:switch(a=e.stateNode,e.type){case"input":if(tu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+re(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var t=n[e];if(t!==a&&t.form===a.form){var i=t[Ga]||null;if(!i)throw Error(s(90));tu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)t=n[e],t.form===a.form&&zs(t)}break a;case"textarea":Ks(a,n.value,n.defaultValue);break a;case"select":e=n.value,e!=null&&Xn(a,!!n.multiple,e,!1)}}}var su=!1;function qs(a,e,n){if(su)return a(e,n);su=!0;try{var t=a(e);return t}finally{if(su=!1,(Jn!==null||Pn!==null)&&(Sl(),Jn&&(e=Jn,a=Pn,Pn=Jn=null,Vs(e),a)))for(e=0;e<a.length;e++)Vs(a[e])}}function Nt(a,e){var n=a.stateNode;if(n===null)return null;var t=n[Ga]||null;if(t===null)return null;n=t[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(a=a.type,t=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!t;break a;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Re)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{ou=!1}var Pe=null,du=null,Bi=null;function Gs(){if(Bi)return Bi;var a,e=du,n=e.length,t,i="value"in Pe?Pe.value:Pe.textContent,l=i.length;for(a=0;a<n&&e[a]===i[a];a++);var u=n-a;for(t=1;t<=u&&e[n-t]===i[l-t];t++);return Bi=i.slice(a,1<t?1-t:void 0)}function Hi(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function Li(){return!0}function Ys(){return!1}function Ya(a){function e(n,t,i,l,u){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var r in a)a.hasOwnProperty(r)&&(n=a[r],this[r]=n?n(l):l[r]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Li:Ys,this.isPropagationStopped=Ys,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),e}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Ya(Mn),zt=E({},Mn,{view:0,detail:0}),cg=Ya(zt),cu,mu,Ut,qi=E({},zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Ut&&(Ut&&a.type==="mousemove"?(cu=a.screenX-Ut.screenX,mu=a.screenY-Ut.screenY):mu=cu=0,Ut=a),cu)},movementY:function(a){return"movementY"in a?a.movementY:mu}}),ws=Ya(qi),mg=E({},qi,{dataTransfer:0}),gg=Ya(mg),fg=E({},zt,{relatedTarget:0}),gu=Ya(fg),kg=E({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Ya(kg),pg=E({},Mn,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),bg=Ya(pg),yg=E({},Mn,{data:0}),Qs=Ya(yg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=Tg[a])?!!e[a]:!1}function fu(){return Mg}var xg=E({},zt,{key:function(a){if(a.key){var e=vg[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=Hi(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Sg[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(a){return a.type==="keypress"?Hi(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Hi(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Ag=Ya(xg),jg=E({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=Ya(jg),Cg=E({},zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),_g=Ya(Cg),Dg=E({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=Ya(Dg),Rg=E({},qi,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=Ya(Rg),Og=E({},Mn,{newState:0,oldState:0}),zg=Ya(Og),Ug=[9,13,27,32],ku=Re&&"CompositionEvent"in window,Kt=null;Re&&"documentMode"in document&&(Kt=document.documentMode);var Kg=Re&&"TextEvent"in window&&!Kt,Zs=Re&&(!ku||Kt&&8<Kt&&11>=Kt),Js=" ",Ps=!1;function Fs(a,e){switch(a){case"keyup":return Ug.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Fn=!1;function Bg(a,e){switch(a){case"compositionend":return Ws(e);case"keypress":return e.which!==32?null:(Ps=!0,Js);case"textInput":return a=e.data,a===Js&&Ps?null:a;default:return null}}function Hg(a,e){if(Fn)return a==="compositionend"||!ku&&Fs(a,e)?(a=Gs(),Bi=du=Pe=null,Fn=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zs&&e.locale!=="ko"?null:e.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!Lg[a.type]:e==="textarea"}function $s(a,e,n,t){Jn?Pn?Pn.push(t):Pn=[t]:Jn=t,e=Cl(e,"onChange"),0<e.length&&(n=new Vi("onChange","change",null,n,t),a.push({event:n,listeners:e}))}var Bt=null,Ht=null;function Vg(a){zc(a,0)}function Gi(a){var e=Rt(a);if(zs(e))return a}function ao(a,e){if(a==="change")return e}var eo=!1;if(Re){var hu;if(Re){var pu="oninput"in document;if(!pu){var no=document.createElement("div");no.setAttribute("oninput","return;"),pu=typeof no.oninput=="function"}hu=pu}else hu=!1;eo=hu&&(!document.documentMode||9<document.documentMode)}function to(){Bt&&(Bt.detachEvent("onpropertychange",io),Ht=Bt=null)}function io(a){if(a.propertyName==="value"&&Gi(Ht)){var e=[];$s(e,Ht,a,ru(a)),qs(Vg,e)}}function qg(a,e,n){a==="focusin"?(to(),Bt=e,Ht=n,Bt.attachEvent("onpropertychange",io)):a==="focusout"&&to()}function Gg(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Gi(Ht)}function Yg(a,e){if(a==="click")return Gi(e)}function wg(a,e){if(a==="input"||a==="change")return Gi(e)}function Qg(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var $a=typeof Object.is=="function"?Object.is:Qg;function Lt(a,e){if($a(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var n=Object.keys(a),t=Object.keys(e);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!Xl.call(e,i)||!$a(a[i],e[i]))return!1}return!0}function lo(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function uo(a,e){var n=lo(a);a=0;for(var t;n;){if(n.nodeType===3){if(t=a+n.textContent.length,a<=e&&t>=e)return{node:n,offset:e-a};a=t}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=lo(n)}}function ro(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?ro(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function so(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=Ui(a.document);e instanceof a.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)a=e.contentWindow;else break;e=Ui(a.document)}return e}function bu(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var Xg=Re&&"documentMode"in document&&11>=document.documentMode,Wn=null,yu=null,Vt=null,vu=!1;function oo(a,e,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||Wn==null||Wn!==Ui(t)||(t=Wn,"selectionStart"in t&&bu(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Vt&&Lt(Vt,t)||(Vt=t,t=Cl(yu,"onSelect"),0<t.length&&(e=new Vi("onSelect","select",null,e,n),a.push({event:e,listeners:t}),e.target=Wn)))}function xn(a,e){var n={};return n[a.toLowerCase()]=e.toLowerCase(),n["Webkit"+a]="webkit"+e,n["Moz"+a]="moz"+e,n}var In={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},Su={},co={};Re&&(co=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function An(a){if(Su[a])return Su[a];if(!In[a])return a;var e=In[a],n;for(n in e)if(e.hasOwnProperty(n)&&n in co)return Su[a]=e[n];return a}var mo=An("animationend"),go=An("animationiteration"),fo=An("animationstart"),Zg=An("transitionrun"),Jg=An("transitionstart"),Pg=An("transitioncancel"),ko=An("transitionend"),ho=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function he(a,e){ho.set(a,e),Tn(e,[a])}var po=new WeakMap;function se(a,e){if(typeof a=="object"&&a!==null){var n=po.get(a);return n!==void 0?n:(e={value:a,source:e,stack:Ns(e)},po.set(a,e),e)}return{value:a,source:e,stack:Ns(e)}}var oe=[],$n=0,Mu=0;function Yi(){for(var a=$n,e=Mu=$n=0;e<a;){var n=oe[e];oe[e++]=null;var t=oe[e];oe[e++]=null;var i=oe[e];oe[e++]=null;var l=oe[e];if(oe[e++]=null,t!==null&&i!==null){var u=t.pending;u===null?i.next=i:(i.next=u.next,u.next=i),t.pending=i}l!==0&&bo(n,i,l)}}function wi(a,e,n,t){oe[$n++]=a,oe[$n++]=e,oe[$n++]=n,oe[$n++]=t,Mu|=t,a.lanes|=t,a=a.alternate,a!==null&&(a.lanes|=t)}function xu(a,e,n,t){return wi(a,e,n,t),Qi(a)}function at(a,e){return wi(a,null,null,e),Qi(a)}function bo(a,e,n){a.lanes|=n;var t=a.alternate;t!==null&&(t.lanes|=n);for(var i=!1,l=a.return;l!==null;)l.childLanes|=n,t=l.alternate,t!==null&&(t.childLanes|=n),l.tag===22&&(a=l.stateNode,a===null||a._visibility&1||(i=!0)),a=l,l=l.return;return a.tag===3?(l=a.stateNode,i&&e!==null&&(i=31-Ia(n),a=l.hiddenUpdates,t=a[i],t===null?a[i]=[e]:t.push(e),e.lane=n|536870912),l):null}function Qi(a){if(50<ci)throw ci=0,Er=null,Error(s(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var et={};function Fg(a,e,n,t){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(a,e,n,t){return new Fg(a,e,n,t)}function Au(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Ne(a,e){var n=a.alternate;return n===null?(n=ae(a.tag,e,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=e,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&65011712,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,e=a.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n.refCleanup=a.refCleanup,n}function yo(a,e){a.flags&=65011714;var n=a.alternate;return n===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,a.type=n.type,e=n.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function Xi(a,e,n,t,i,l){var u=0;if(t=a,typeof a=="function")Au(a)&&(u=1);else if(typeof a=="string")u=$f(a,n,H.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case ye:return a=ae(31,n,e,i),a.elementType=ye,a.lanes=l,a;case ma:return jn(n.children,i,l,e);case ga:u=8,i|=24;break;case ya:return a=ae(12,n,e,i|2),a.elementType=ya,a.lanes=l,a;case I:return a=ae(13,n,e,i),a.elementType=I,a.lanes=l,a;case Za:return a=ae(19,n,e,i),a.elementType=Za,a.lanes=l,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Oa:case za:u=10;break a;case _e:u=9;break a;case ke:u=11;break a;case Ja:u=14;break a;case Pa:u=16,t=null;break a}u=29,n=Error(s(130,a===null?"null":typeof a,"")),t=null}return e=ae(u,n,e,i),e.elementType=a,e.type=t,e.lanes=l,e}function jn(a,e,n,t){return a=ae(7,a,t,e),a.lanes=n,a}function ju(a,e,n){return a=ae(6,a,null,e),a.lanes=n,a}function Cu(a,e,n){return e=ae(4,a.children!==null?a.children:[],a.key,e),e.lanes=n,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var nt=[],tt=0,Zi=null,Ji=0,de=[],ce=0,Cn=null,Oe=1,ze="";function _n(a,e){nt[tt++]=Ji,nt[tt++]=Zi,Zi=a,Ji=e}function vo(a,e,n){de[ce++]=Oe,de[ce++]=ze,de[ce++]=Cn,Cn=a;var t=Oe;a=ze;var i=32-Ia(t)-1;t&=~(1<<i),n+=1;var l=32-Ia(e)+i;if(30<l){var u=i-i%5;l=(t&(1<<u)-1).toString(32),t>>=u,i-=u,Oe=1<<32-Ia(e)+i|n<<i|t,ze=l+a}else Oe=1<<l|n<<i|t,ze=a}function _u(a){a.return!==null&&(_n(a,1),vo(a,1,0))}function Du(a){for(;a===Zi;)Zi=nt[--tt],nt[tt]=null,Ji=nt[--tt],nt[tt]=null;for(;a===Cn;)Cn=de[--ce],de[ce]=null,ze=de[--ce],de[ce]=null,Oe=de[--ce],de[ce]=null}var qa=null,pa=null,ea=!1,Dn=null,Se=!1,Eu=Error(s(519));function En(a){var e=Error(s(418,""));throw Yt(se(e,a)),Eu}function So(a){var e=a.stateNode,n=a.type,t=a.memoizedProps;switch(e[Ba]=a,e[Ga]=t,n){case"dialog":F("cancel",e),F("close",e);break;case"iframe":case"object":case"embed":F("load",e);break;case"video":case"audio":for(n=0;n<gi.length;n++)F(gi[n],e);break;case"source":F("error",e);break;case"img":case"image":case"link":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"input":F("invalid",e),Us(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),zi(e);break;case"select":F("invalid",e);break;case"textarea":F("invalid",e),Bs(e,t.value,t.defaultValue,t.children),zi(e)}n=t.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||t.suppressHydrationWarning===!0||Hc(e.textContent,n)?(t.popover!=null&&(F("beforetoggle",e),F("toggle",e)),t.onScroll!=null&&F("scroll",e),t.onScrollEnd!=null&&F("scrollend",e),t.onClick!=null&&(e.onclick=_l),e=!0):e=!1,e||En(a)}function To(a){for(qa=a.return;qa;)switch(qa.tag){case 5:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:qa=qa.return}}function qt(a){if(a!==qa)return!1;if(!ea)return To(a),ea=!0,!1;var e=a.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=a.type,n=!(n!=="form"&&n!=="button")||Xr(a.type,a.memoizedProps)),n=!n),n&&pa&&En(a),To(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a:{for(a=a.nextSibling,e=0;a;){if(a.nodeType===8)if(n=a.data,n==="/$"){if(e===0){pa=be(a.nextSibling);break a}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;a=a.nextSibling}pa=null}}else e===27?(e=pa,mn(a.type)?(a=Fr,Fr=null,pa=a):pa=e):pa=qa?be(a.stateNode.nextSibling):null;return!0}function Gt(){pa=qa=null,ea=!1}function Mo(){var a=Dn;return a!==null&&(Xa===null?Xa=a:Xa.push.apply(Xa,a),Dn=null),a}function Yt(a){Dn===null?Dn=[a]:Dn.push(a)}var Ru=_(null),Rn=null,Ue=null;function Fe(a,e,n){R(Ru,e._currentValue),e._currentValue=n}function Ke(a){a._currentValue=Ru.current,z(Ru)}function Nu(a,e,n){for(;a!==null;){var t=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),a===n)break;a=a.return}}function Ou(a,e,n,t){var i=a.child;for(i!==null&&(i.return=a);i!==null;){var l=i.dependencies;if(l!==null){var u=i.child;l=l.firstContext;a:for(;l!==null;){var r=l;l=i;for(var o=0;o<e.length;o++)if(r.context===e[o]){l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),Nu(l.return,n,a),t||(u=null);break a}l=r.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(s(341));u.lanes|=n,l=u.alternate,l!==null&&(l.lanes|=n),Nu(u,n,a),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===a){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function wt(a,e,n,t){a=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var r=i.type;$a(i.pendingProps.value,u.value)||(a!==null?a.push(r):a=[r])}}else if(i===Fa.current){if(u=i.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(a!==null?a.push(yi):a=[yi])}i=i.return}a!==null&&Ou(e,a,n,t),e.flags|=262144}function Pi(a){for(a=a.firstContext;a!==null;){if(!$a(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Nn(a){Rn=a,Ue=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Ha(a){return xo(Rn,a)}function Fi(a,e){return Rn===null&&Nn(a),xo(a,e)}function xo(a,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ue===null){if(a===null)throw Error(s(308));Ue=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else Ue=Ue.next=e;return n}var Wg=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(n,t){a.push(t)}};this.abort=function(){e.aborted=!0,a.forEach(function(n){return n()})}},Ig=c.unstable_scheduleCallback,$g=c.unstable_NormalPriority,xa={$$typeof:za,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Wg,data:new Map,refCount:0}}function Qt(a){a.refCount--,a.refCount===0&&Ig($g,function(){a.controller.abort()})}var Xt=null,Uu=0,it=0,lt=null;function af(a,e){if(Xt===null){var n=Xt=[];Uu=0,it=Br(),lt={status:"pending",value:void 0,then:function(t){n.push(t)}}}return Uu++,e.then(Ao,Ao),e}function Ao(){if(--Uu===0&&Xt!==null){lt!==null&&(lt.status="fulfilled");var a=Xt;Xt=null,it=0,lt=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function ef(a,e){var n=[],t={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return a.then(function(){t.status="fulfilled",t.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(t.status="rejected",t.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),t}var jo=M.S;M.S=function(a,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&af(a,e),jo!==null&&jo(a,e)};var On=_(null);function Ku(){var a=On.current;return a!==null?a:ca.pooledCache}function Wi(a,e){e===null?R(On,On.current):R(On,e.pool)}function Co(){var a=Ku();return a===null?null:{parent:xa._currentValue,pool:a}}var Zt=Error(s(460)),_o=Error(s(474)),Ii=Error(s(542)),Bu={then:function(){}};function Do(a){return a=a.status,a==="fulfilled"||a==="rejected"}function $i(){}function Eo(a,e,n){switch(n=a[n],n===void 0?a.push(e):n!==e&&(e.then($i,$i),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,No(a),a;default:if(typeof e.status=="string")e.then($i,$i);else{if(a=ca,a!==null&&100<a.shellSuspendCounter)throw Error(s(482));a=e,a.status="pending",a.then(function(t){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=t}},function(t){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,No(a),a}throw Jt=e,Zt}}var Jt=null;function Ro(){if(Jt===null)throw Error(s(459));var a=Jt;return Jt=null,a}function No(a){if(a===Zt||a===Ii)throw Error(s(483))}var We=!1;function Hu(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Ie(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function $e(a,e,n){var t=a.updateQueue;if(t===null)return null;if(t=t.shared,(ta&2)!==0){var i=t.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e,e=Qi(a),bo(a,null,n),e}return wi(a,t,e,n),Qi(a)}function Pt(a,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var t=e.lanes;t&=a.pendingLanes,n|=t,e.lanes=n,xs(a,n)}}function Vu(a,e){var n=a.updateQueue,t=a.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?i=l=e:l=l.next=e}else i=l=e;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=e:a.next=e,n.lastBaseUpdate=e}var qu=!1;function Ft(){if(qu){var a=lt;if(a!==null)throw a}}function Wt(a,e,n,t){qu=!1;var i=a.updateQueue;We=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var o=r,h=o.next;o.next=null,u===null?l=h:u.next=h,u=o;var T=a.alternate;T!==null&&(T=T.updateQueue,r=T.lastBaseUpdate,r!==u&&(r===null?T.firstBaseUpdate=h:r.next=h,T.lastBaseUpdate=o))}if(l!==null){var j=i.baseState;u=0,T=h=o=null,r=l;do{var y=r.lane&-536870913,v=y!==r.lane;if(v?(W&y)===y:(t&y)===y){y!==0&&y===it&&(qu=!0),T!==null&&(T=T.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});a:{var Y=a,L=r;y=e;var ra=n;switch(L.tag){case 1:if(Y=L.payload,typeof Y=="function"){j=Y.call(ra,j,y);break a}j=Y;break a;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=L.payload,y=typeof Y=="function"?Y.call(ra,j,y):Y,y==null)break a;j=E({},j,y);break a;case 2:We=!0}}y=r.callback,y!==null&&(a.flags|=64,v&&(a.flags|=8192),v=i.callbacks,v===null?i.callbacks=[y]:v.push(y))}else v={lane:y,tag:r.tag,payload:r.payload,callback:r.callback,next:null},T===null?(h=T=v,o=j):T=T.next=v,u|=y;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;v=r,r=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);T===null&&(o=j),i.baseState=o,i.firstBaseUpdate=h,i.lastBaseUpdate=T,l===null&&(i.shared.lanes=0),sn|=u,a.lanes=u,a.memoizedState=j}}function Oo(a,e){if(typeof a!="function")throw Error(s(191,a));a.call(e)}function zo(a,e){var n=a.callbacks;if(n!==null)for(a.callbacks=null,a=0;a<n.length;a++)Oo(n[a],e)}var ut=_(null),al=_(0);function Uo(a,e){a=Ye,R(al,a),R(ut,e),Ye=a|e.baseLanes}function Gu(){R(al,Ye),R(ut,ut.current)}function Yu(){Ye=al.current,z(ut),z(al)}var an=0,Z=null,la=null,Ta=null,el=!1,rt=!1,zn=!1,nl=0,It=0,st=null,nf=0;function va(){throw Error(s(321))}function wu(a,e){if(e===null)return!1;for(var n=0;n<e.length&&n<a.length;n++)if(!$a(a[n],e[n]))return!1;return!0}function Qu(a,e,n,t,i,l){return an=l,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=a===null||a.memoizedState===null?bd:yd,zn=!1,l=n(t,i),zn=!1,rt&&(l=Bo(e,n,t,i)),Ko(a),l}function Ko(a){M.H=sl;var e=la!==null&&la.next!==null;if(an=0,Ta=la=Z=null,el=!1,It=0,st=null,e)throw Error(s(300));a===null||Ca||(a=a.dependencies,a!==null&&Pi(a)&&(Ca=!0))}function Bo(a,e,n,t){Z=a;var i=0;do{if(rt&&(st=null),It=0,rt=!1,25<=i)throw Error(s(301));if(i+=1,Ta=la=null,a.updateQueue!=null){var l=a.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}M.H=df,l=e(n,t)}while(rt);return l}function tf(){var a=M.H,e=a.useState()[0];return e=typeof e.then=="function"?$t(e):e,a=a.useState()[0],(la!==null?la.memoizedState:null)!==a&&(Z.flags|=1024),e}function Xu(){var a=nl!==0;return nl=0,a}function Zu(a,e,n){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~n}function Ju(a){if(el){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}el=!1}an=0,Ta=la=Z=null,rt=!1,It=nl=0,st=null}function wa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ta===null?Z.memoizedState=Ta=a:Ta=Ta.next=a,Ta}function Ma(){if(la===null){var a=Z.alternate;a=a!==null?a.memoizedState:null}else a=la.next;var e=Ta===null?Z.memoizedState:Ta.next;if(e!==null)Ta=e,la=a;else{if(a===null)throw Z.alternate===null?Error(s(467)):Error(s(310));la=a,a={memoizedState:la.memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},Ta===null?Z.memoizedState=Ta=a:Ta=Ta.next=a}return Ta}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $t(a){var e=It;return It+=1,st===null&&(st=[]),a=Eo(st,a,e),e=Z,(Ta===null?e.memoizedState:Ta.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?bd:yd),a}function tl(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return $t(a);if(a.$$typeof===za)return Ha(a)}throw Error(s(438,String(a)))}function Fu(a){var e=null,n=Z.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var t=Z.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Pu(),Z.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(a),t=0;t<a;t++)n[t]=Ln;return e.index++,n}function Be(a,e){return typeof e=="function"?e(a):e}function il(a){var e=Ma();return Wu(e,la,a)}function Wu(a,e,n){var t=a.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=n;var i=a.baseQueue,l=t.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}e.baseQueue=i=l,t.pending=null}if(l=a.baseState,i===null)a.memoizedState=l;else{e=i.next;var r=u=null,o=null,h=e,T=!1;do{var j=h.lane&-536870913;if(j!==h.lane?(W&j)===j:(an&j)===j){var y=h.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),j===it&&(T=!0);else if((an&y)===y){h=h.next,y===it&&(T=!0);continue}else j={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(r=o=j,u=l):o=o.next=j,Z.lanes|=y,sn|=y;j=h.action,zn&&n(l,j),l=h.hasEagerState?h.eagerState:n(l,j)}else y={lane:j,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(r=o=y,u=l):o=o.next=y,Z.lanes|=j,sn|=j;h=h.next}while(h!==null&&h!==e);if(o===null?u=l:o.next=r,!$a(l,a.memoizedState)&&(Ca=!0,T&&(n=lt,n!==null)))throw n;a.memoizedState=l,a.baseState=u,a.baseQueue=o,t.lastRenderedState=l}return i===null&&(t.lanes=0),[a.memoizedState,t.dispatch]}function Iu(a){var e=Ma(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var t=n.dispatch,i=n.pending,l=e.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do l=a(l,u.action),u=u.next;while(u!==i);$a(l,e.memoizedState)||(Ca=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,t]}function Ho(a,e,n){var t=Z,i=Ma(),l=ea;if(l){if(n===void 0)throw Error(s(407));n=n()}else n=e();var u=!$a((la||i).memoizedState,n);u&&(i.memoizedState=n,Ca=!0),i=i.queue;var r=qo.bind(null,t,i,a);if(ai(2048,8,r,[a]),i.getSnapshot!==e||u||Ta!==null&&Ta.memoizedState.tag&1){if(t.flags|=2048,ot(9,ll(),Vo.bind(null,t,i,n,e),null),ca===null)throw Error(s(349));l||(an&124)!==0||Lo(t,e,n)}return n}function Lo(a,e,n){a.flags|=16384,a={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e=Pu(),Z.updateQueue=e,e.stores=[a]):(n=e.stores,n===null?e.stores=[a]:n.push(a))}function Vo(a,e,n,t){e.value=n,e.getSnapshot=t,Go(e)&&Yo(a)}function qo(a,e,n){return n(function(){Go(e)&&Yo(a)})}function Go(a){var e=a.getSnapshot;a=a.value;try{var n=e();return!$a(a,n)}catch{return!0}}function Yo(a){var e=at(a,2);e!==null&&le(e,a,2)}function $u(a){var e=wa();if(typeof a=="function"){var n=a;if(a=n(),zn){Ze(!0);try{n()}finally{Ze(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:a},e}function wo(a,e,n,t){return a.baseState=n,Wu(a,la,typeof t=="function"?t:Be)}function lf(a,e,n,t,i){if(rl(a))throw Error(s(485));if(a=e.action,a!==null){var l={payload:i,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){l.listeners.push(u)}};M.T!==null?n(!0):l.isTransition=!1,t(l),n=e.pending,n===null?(l.next=e.pending=l,Qo(e,l)):(l.next=n.next,e.pending=n.next=l)}}function Qo(a,e){var n=e.action,t=e.payload,i=a.state;if(e.isTransition){var l=M.T,u={};M.T=u;try{var r=n(i,t),o=M.S;o!==null&&o(u,r),Xo(a,e,r)}catch(h){ar(a,e,h)}finally{M.T=l}}else try{l=n(i,t),Xo(a,e,l)}catch(h){ar(a,e,h)}}function Xo(a,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(t){Zo(a,e,t)},function(t){return ar(a,e,t)}):Zo(a,e,n)}function Zo(a,e,n){e.status="fulfilled",e.value=n,Jo(e),a.state=n,e=a.pending,e!==null&&(n=e.next,n===e?a.pending=null:(n=n.next,e.next=n,Qo(a,n)))}function ar(a,e,n){var t=a.pending;if(a.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=n,Jo(e),e=e.next;while(e!==t)}a.action=null}function Jo(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function Po(a,e){return e}function Fo(a,e){if(ea){var n=ca.formState;if(n!==null){a:{var t=Z;if(ea){if(pa){e:{for(var i=pa,l=Se;i.nodeType!==8;){if(!l){i=null;break e}if(i=be(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){pa=be(i.nextSibling),t=i.data==="F!";break a}}En(t)}t=!1}t&&(e=n[0])}}return n=wa(),n.memoizedState=n.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},n.queue=t,n=kd.bind(null,Z,t),t.dispatch=n,t=$u(!1),l=lr.bind(null,Z,!1,t.queue),t=wa(),i={state:e,dispatch:null,action:a,pending:null},t.queue=i,n=lf.bind(null,Z,i,l,n),i.dispatch=n,t.memoizedState=a,[e,n,!1]}function Wo(a){var e=Ma();return Io(e,la,a)}function Io(a,e,n){if(e=Wu(a,e,Po)[0],a=il(Be)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=$t(e)}catch(u){throw u===Zt?Ii:u}else t=e;e=Ma();var i=e.queue,l=i.dispatch;return n!==e.memoizedState&&(Z.flags|=2048,ot(9,ll(),uf.bind(null,i,n),null)),[t,l,a]}function uf(a,e){a.action=e}function $o(a){var e=Ma(),n=la;if(n!==null)return Io(e,n,a);Ma(),e=e.memoizedState,n=Ma();var t=n.queue.dispatch;return n.memoizedState=a,[e,t,!1]}function ot(a,e,n,t){return a={tag:a,create:n,deps:t,inst:e,next:null},e=Z.updateQueue,e===null&&(e=Pu(),Z.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=a.next=a:(t=n.next,n.next=a,a.next=t,e.lastEffect=a),a}function ll(){return{destroy:void 0,resource:void 0}}function ad(){return Ma().memoizedState}function ul(a,e,n,t){var i=wa();t=t===void 0?null:t,Z.flags|=a,i.memoizedState=ot(1|e,ll(),n,t)}function ai(a,e,n,t){var i=Ma();t=t===void 0?null:t;var l=i.memoizedState.inst;la!==null&&t!==null&&wu(t,la.memoizedState.deps)?i.memoizedState=ot(e,l,n,t):(Z.flags|=a,i.memoizedState=ot(1|e,l,n,t))}function ed(a,e){ul(8390656,8,a,e)}function nd(a,e){ai(2048,8,a,e)}function td(a,e){return ai(4,2,a,e)}function id(a,e){return ai(4,4,a,e)}function ld(a,e){if(typeof e=="function"){a=a();var n=e(a);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function ud(a,e,n){n=n!=null?n.concat([a]):null,ai(4,4,ld.bind(null,e,a),n)}function er(){}function rd(a,e){var n=Ma();e=e===void 0?null:e;var t=n.memoizedState;return e!==null&&wu(e,t[1])?t[0]:(n.memoizedState=[a,e],a)}function sd(a,e){var n=Ma();e=e===void 0?null:e;var t=n.memoizedState;if(e!==null&&wu(e,t[1]))return t[0];if(t=a(),zn){Ze(!0);try{a()}finally{Ze(!1)}}return n.memoizedState=[t,e],t}function nr(a,e,n){return n===void 0||(an&1073741824)!==0?a.memoizedState=e:(a.memoizedState=n,a=cc(),Z.lanes|=a,sn|=a,n)}function od(a,e,n,t){return $a(n,e)?n:ut.current!==null?(a=nr(a,n,t),$a(a,e)||(Ca=!0),a):(an&42)===0?(Ca=!0,a.memoizedState=n):(a=cc(),Z.lanes|=a,sn|=a,e)}function dd(a,e,n,t,i){var l=O.p;O.p=l!==0&&8>l?l:8;var u=M.T,r={};M.T=r,lr(a,!1,e,n);try{var o=i(),h=M.S;if(h!==null&&h(r,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var T=ef(o,t);ei(a,e,T,ie(a))}else ei(a,e,t,ie(a))}catch(j){ei(a,e,{then:function(){},status:"rejected",reason:j},ie())}finally{O.p=l,M.T=u}}function rf(){}function tr(a,e,n,t){if(a.tag!==5)throw Error(s(476));var i=cd(a).queue;dd(a,i,e,G,n===null?rf:function(){return md(a),n(t)})}function cd(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:G},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:n},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function md(a){var e=cd(a).next.queue;ei(a,e,{},ie())}function ir(){return Ha(yi)}function gd(){return Ma().memoizedState}function fd(){return Ma().memoizedState}function sf(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var n=ie();a=Ie(n);var t=$e(e,a,n);t!==null&&(le(t,e,n),Pt(t,e,n)),e={cache:zu()},a.payload=e;return}e=e.return}}function of(a,e,n){var t=ie();n={lane:t,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},rl(a)?hd(e,n):(n=xu(a,e,n,t),n!==null&&(le(n,a,t),pd(n,e,t)))}function kd(a,e,n){var t=ie();ei(a,e,n,t)}function ei(a,e,n,t){var i={lane:t,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(a))hd(e,i);else{var l=a.alternate;if(a.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var u=e.lastRenderedState,r=l(u,n);if(i.hasEagerState=!0,i.eagerState=r,$a(r,u))return wi(a,e,i,0),ca===null&&Yi(),!1}catch{}if(n=xu(a,e,i,t),n!==null)return le(n,a,t),pd(n,e,t),!0}return!1}function lr(a,e,n,t){if(t={lane:2,revertLane:Br(),action:t,hasEagerState:!1,eagerState:null,next:null},rl(a)){if(e)throw Error(s(479))}else e=xu(a,n,t,2),e!==null&&le(e,a,2)}function rl(a){var e=a.alternate;return a===Z||e!==null&&e===Z}function hd(a,e){rt=el=!0;var n=a.pending;n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e}function pd(a,e,n){if((n&4194048)!==0){var t=e.lanes;t&=a.pendingLanes,n|=t,e.lanes=n,xs(a,n)}}var sl={readContext:Ha,use:tl,useCallback:va,useContext:va,useEffect:va,useImperativeHandle:va,useLayoutEffect:va,useInsertionEffect:va,useMemo:va,useReducer:va,useRef:va,useState:va,useDebugValue:va,useDeferredValue:va,useTransition:va,useSyncExternalStore:va,useId:va,useHostTransitionStatus:va,useFormState:va,useActionState:va,useOptimistic:va,useMemoCache:va,useCacheRefresh:va},bd={readContext:Ha,use:tl,useCallback:function(a,e){return wa().memoizedState=[a,e===void 0?null:e],a},useContext:Ha,useEffect:ed,useImperativeHandle:function(a,e,n){n=n!=null?n.concat([a]):null,ul(4194308,4,ld.bind(null,e,a),n)},useLayoutEffect:function(a,e){return ul(4194308,4,a,e)},useInsertionEffect:function(a,e){ul(4,2,a,e)},useMemo:function(a,e){var n=wa();e=e===void 0?null:e;var t=a();if(zn){Ze(!0);try{a()}finally{Ze(!1)}}return n.memoizedState=[t,e],t},useReducer:function(a,e,n){var t=wa();if(n!==void 0){var i=n(e);if(zn){Ze(!0);try{n(e)}finally{Ze(!1)}}}else i=e;return t.memoizedState=t.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:i},t.queue=a,a=a.dispatch=of.bind(null,Z,a),[t.memoizedState,a]},useRef:function(a){var e=wa();return a={current:a},e.memoizedState=a},useState:function(a){a=$u(a);var e=a.queue,n=kd.bind(null,Z,e);return e.dispatch=n,[a.memoizedState,n]},useDebugValue:er,useDeferredValue:function(a,e){var n=wa();return nr(n,a,e)},useTransition:function(){var a=$u(!1);return a=dd.bind(null,Z,a.queue,!0,!1),wa().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,n){var t=Z,i=wa();if(ea){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),ca===null)throw Error(s(349));(W&124)!==0||Lo(t,e,n)}i.memoizedState=n;var l={value:n,getSnapshot:e};return i.queue=l,ed(qo.bind(null,t,l,a),[a]),t.flags|=2048,ot(9,ll(),Vo.bind(null,t,l,n,e),null),n},useId:function(){var a=wa(),e=ca.identifierPrefix;if(ea){var n=ze,t=Oe;n=(t&~(1<<32-Ia(t)-1)).toString(32)+n,e="«"+e+"R"+n,n=nl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=nf++,e="«"+e+"r"+n.toString(32)+"»";return a.memoizedState=e},useHostTransitionStatus:ir,useFormState:Fo,useActionState:Fo,useOptimistic:function(a){var e=wa();e.memoizedState=e.baseState=a;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lr.bind(null,Z,!0,n),n.dispatch=e,[a,e]},useMemoCache:Fu,useCacheRefresh:function(){return wa().memoizedState=sf.bind(null,Z)}},yd={readContext:Ha,use:tl,useCallback:rd,useContext:Ha,useEffect:nd,useImperativeHandle:ud,useInsertionEffect:td,useLayoutEffect:id,useMemo:sd,useReducer:il,useRef:ad,useState:function(){return il(Be)},useDebugValue:er,useDeferredValue:function(a,e){var n=Ma();return od(n,la.memoizedState,a,e)},useTransition:function(){var a=il(Be)[0],e=Ma().memoizedState;return[typeof a=="boolean"?a:$t(a),e]},useSyncExternalStore:Ho,useId:gd,useHostTransitionStatus:ir,useFormState:Wo,useActionState:Wo,useOptimistic:function(a,e){var n=Ma();return wo(n,la,a,e)},useMemoCache:Fu,useCacheRefresh:fd},df={readContext:Ha,use:tl,useCallback:rd,useContext:Ha,useEffect:nd,useImperativeHandle:ud,useInsertionEffect:td,useLayoutEffect:id,useMemo:sd,useReducer:Iu,useRef:ad,useState:function(){return Iu(Be)},useDebugValue:er,useDeferredValue:function(a,e){var n=Ma();return la===null?nr(n,a,e):od(n,la.memoizedState,a,e)},useTransition:function(){var a=Iu(Be)[0],e=Ma().memoizedState;return[typeof a=="boolean"?a:$t(a),e]},useSyncExternalStore:Ho,useId:gd,useHostTransitionStatus:ir,useFormState:$o,useActionState:$o,useOptimistic:function(a,e){var n=Ma();return la!==null?wo(n,la,a,e):(n.baseState=a,[a,n.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:fd},dt=null,ni=0;function ol(a){var e=ni;return ni+=1,dt===null&&(dt=[]),Eo(dt,a,e)}function ti(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function dl(a,e){throw e.$$typeof===B?Error(s(525)):(a=Object.prototype.toString.call(e),Error(s(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function vd(a){var e=a._init;return e(a._payload)}function Sd(a){function e(f,g){if(a){var k=f.deletions;k===null?(f.deletions=[g],f.flags|=16):k.push(g)}}function n(f,g){if(!a)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function t(f){for(var g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(f,g){return f=Ne(f,g),f.index=0,f.sibling=null,f}function l(f,g,k){return f.index=k,a?(k=f.alternate,k!==null?(k=k.index,k<g?(f.flags|=67108866,g):k):(f.flags|=67108866,g)):(f.flags|=1048576,g)}function u(f){return a&&f.alternate===null&&(f.flags|=67108866),f}function r(f,g,k,A){return g===null||g.tag!==6?(g=ju(k,f.mode,A),g.return=f,g):(g=i(g,k),g.return=f,g)}function o(f,g,k,A){var U=k.type;return U===ma?T(f,g,k.props.children,A,k.key):g!==null&&(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Pa&&vd(U)===g.type)?(g=i(g,k.props),ti(g,k),g.return=f,g):(g=Xi(k.type,k.key,k.props,null,f.mode,A),ti(g,k),g.return=f,g)}function h(f,g,k,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=Cu(k,f.mode,A),g.return=f,g):(g=i(g,k.children||[]),g.return=f,g)}function T(f,g,k,A,U){return g===null||g.tag!==7?(g=jn(k,f.mode,A,U),g.return=f,g):(g=i(g,k),g.return=f,g)}function j(f,g,k){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=ju(""+g,f.mode,k),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case w:return k=Xi(g.type,g.key,g.props,null,f.mode,k),ti(k,g),k.return=f,k;case da:return g=Cu(g,f.mode,k),g.return=f,g;case Pa:var A=g._init;return g=A(g._payload),j(f,g,k)}if(Ka(g)||Ua(g))return g=jn(g,f.mode,k,null),g.return=f,g;if(typeof g.then=="function")return j(f,ol(g),k);if(g.$$typeof===za)return j(f,Fi(f,g),k);dl(f,g)}return null}function y(f,g,k,A){var U=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return U!==null?null:r(f,g,""+k,A);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return k.key===U?o(f,g,k,A):null;case da:return k.key===U?h(f,g,k,A):null;case Pa:return U=k._init,k=U(k._payload),y(f,g,k,A)}if(Ka(k)||Ua(k))return U!==null?null:T(f,g,k,A,null);if(typeof k.then=="function")return y(f,g,ol(k),A);if(k.$$typeof===za)return y(f,g,Fi(f,k),A);dl(f,k)}return null}function v(f,g,k,A,U){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return f=f.get(k)||null,r(g,f,""+A,U);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return f=f.get(A.key===null?k:A.key)||null,o(g,f,A,U);case da:return f=f.get(A.key===null?k:A.key)||null,h(g,f,A,U);case Pa:var J=A._init;return A=J(A._payload),v(f,g,k,A,U)}if(Ka(A)||Ua(A))return f=f.get(k)||null,T(g,f,A,U,null);if(typeof A.then=="function")return v(f,g,k,ol(A),U);if(A.$$typeof===za)return v(f,g,k,Fi(g,A),U);dl(g,A)}return null}function Y(f,g,k,A){for(var U=null,J=null,K=g,q=g=0,Da=null;K!==null&&q<k.length;q++){K.index>q?(Da=K,K=null):Da=K.sibling;var aa=y(f,K,k[q],A);if(aa===null){K===null&&(K=Da);break}a&&K&&aa.alternate===null&&e(f,K),g=l(aa,g,q),J===null?U=aa:J.sibling=aa,J=aa,K=Da}if(q===k.length)return n(f,K),ea&&_n(f,q),U;if(K===null){for(;q<k.length;q++)K=j(f,k[q],A),K!==null&&(g=l(K,g,q),J===null?U=K:J.sibling=K,J=K);return ea&&_n(f,q),U}for(K=t(K);q<k.length;q++)Da=v(K,f,q,k[q],A),Da!==null&&(a&&Da.alternate!==null&&K.delete(Da.key===null?q:Da.key),g=l(Da,g,q),J===null?U=Da:J.sibling=Da,J=Da);return a&&K.forEach(function(pn){return e(f,pn)}),ea&&_n(f,q),U}function L(f,g,k,A){if(k==null)throw Error(s(151));for(var U=null,J=null,K=g,q=g=0,Da=null,aa=k.next();K!==null&&!aa.done;q++,aa=k.next()){K.index>q?(Da=K,K=null):Da=K.sibling;var pn=y(f,K,aa.value,A);if(pn===null){K===null&&(K=Da);break}a&&K&&pn.alternate===null&&e(f,K),g=l(pn,g,q),J===null?U=pn:J.sibling=pn,J=pn,K=Da}if(aa.done)return n(f,K),ea&&_n(f,q),U;if(K===null){for(;!aa.done;q++,aa=k.next())aa=j(f,aa.value,A),aa!==null&&(g=l(aa,g,q),J===null?U=aa:J.sibling=aa,J=aa);return ea&&_n(f,q),U}for(K=t(K);!aa.done;q++,aa=k.next())aa=v(K,f,q,aa.value,A),aa!==null&&(a&&aa.alternate!==null&&K.delete(aa.key===null?q:aa.key),g=l(aa,g,q),J===null?U=aa:J.sibling=aa,J=aa);return a&&K.forEach(function(ck){return e(f,ck)}),ea&&_n(f,q),U}function ra(f,g,k,A){if(typeof k=="object"&&k!==null&&k.type===ma&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case w:a:{for(var U=k.key;g!==null;){if(g.key===U){if(U=k.type,U===ma){if(g.tag===7){n(f,g.sibling),A=i(g,k.props.children),A.return=f,f=A;break a}}else if(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Pa&&vd(U)===g.type){n(f,g.sibling),A=i(g,k.props),ti(A,k),A.return=f,f=A;break a}n(f,g);break}else e(f,g);g=g.sibling}k.type===ma?(A=jn(k.props.children,f.mode,A,k.key),A.return=f,f=A):(A=Xi(k.type,k.key,k.props,null,f.mode,A),ti(A,k),A.return=f,f=A)}return u(f);case da:a:{for(U=k.key;g!==null;){if(g.key===U)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(f,g.sibling),A=i(g,k.children||[]),A.return=f,f=A;break a}else{n(f,g);break}else e(f,g);g=g.sibling}A=Cu(k,f.mode,A),A.return=f,f=A}return u(f);case Pa:return U=k._init,k=U(k._payload),ra(f,g,k,A)}if(Ka(k))return Y(f,g,k,A);if(Ua(k)){if(U=Ua(k),typeof U!="function")throw Error(s(150));return k=U.call(k),L(f,g,k,A)}if(typeof k.then=="function")return ra(f,g,ol(k),A);if(k.$$typeof===za)return ra(f,g,Fi(f,k),A);dl(f,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,g!==null&&g.tag===6?(n(f,g.sibling),A=i(g,k),A.return=f,f=A):(n(f,g),A=ju(k,f.mode,A),A.return=f,f=A),u(f)):n(f,g)}return function(f,g,k,A){try{ni=0;var U=ra(f,g,k,A);return dt=null,U}catch(K){if(K===Zt||K===Ii)throw K;var J=ae(29,K,null,f.mode);return J.lanes=A,J.return=f,J}}}var ct=Sd(!0),Td=Sd(!1),me=_(null),Te=null;function en(a){var e=a.alternate;R(Aa,Aa.current&1),R(me,a),Te===null&&(e===null||ut.current!==null||e.memoizedState!==null)&&(Te=a)}function Md(a){if(a.tag===22){if(R(Aa,Aa.current),R(me,a),Te===null){var e=a.alternate;e!==null&&e.memoizedState!==null&&(Te=a)}}else nn()}function nn(){R(Aa,Aa.current),R(me,me.current)}function He(a){z(me),Te===a&&(Te=null),z(Aa)}var Aa=_(0);function cl(a){for(var e=a;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Pr(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ur(a,e,n,t){e=a.memoizedState,n=n(t,e),n=n==null?e:E({},e,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var rr={enqueueSetState:function(a,e,n){a=a._reactInternals;var t=ie(),i=Ie(t);i.payload=e,n!=null&&(i.callback=n),e=$e(a,i,t),e!==null&&(le(e,a,t),Pt(e,a,t))},enqueueReplaceState:function(a,e,n){a=a._reactInternals;var t=ie(),i=Ie(t);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=$e(a,i,t),e!==null&&(le(e,a,t),Pt(e,a,t))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var n=ie(),t=Ie(n);t.tag=2,e!=null&&(t.callback=e),e=$e(a,t,n),e!==null&&(le(e,a,n),Pt(e,a,n))}};function xd(a,e,n,t,i,l,u){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(t,l,u):e.prototype&&e.prototype.isPureReactComponent?!Lt(n,t)||!Lt(i,l):!0}function Ad(a,e,n,t){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,t),e.state!==a&&rr.enqueueReplaceState(e,e.state,null)}function Un(a,e){var n=e;if("ref"in e){n={};for(var t in e)t!=="ref"&&(n[t]=e[t])}if(a=a.defaultProps){n===e&&(n=E({},n));for(var i in a)n[i]===void 0&&(n[i]=a[i])}return n}var ml=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function jd(a){ml(a)}function Cd(a){console.error(a)}function _d(a){ml(a)}function gl(a,e){try{var n=a.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function Dd(a,e,n){try{var t=a.onCaughtError;t(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function sr(a,e,n){return n=Ie(n),n.tag=3,n.payload={element:null},n.callback=function(){gl(a,e)},n}function Ed(a){return a=Ie(a),a.tag=3,a}function Rd(a,e,n,t){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;a.payload=function(){return i(l)},a.callback=function(){Dd(e,n,t)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){Dd(e,n,t),typeof i!="function"&&(on===null?on=new Set([this]):on.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})})}function cf(a,e,n,t,i){if(n.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=n.alternate,e!==null&&wt(e,n,i,!0),n=me.current,n!==null){switch(n.tag){case 13:return Te===null?Nr():n.alternate===null&&ba===0&&(ba=3),n.flags&=-257,n.flags|=65536,n.lanes=i,t===Bu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([t]):e.add(t),zr(a,t,i)),!1;case 22:return n.flags|=65536,t===Bu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([t]):n.add(t)),zr(a,t,i)),!1}throw Error(s(435,n.tag))}return zr(a,t,i),Nr(),!1}if(ea)return e=me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,t!==Eu&&(a=Error(s(422),{cause:t}),Yt(se(a,n)))):(t!==Eu&&(e=Error(s(423),{cause:t}),Yt(se(e,n))),a=a.current.alternate,a.flags|=65536,i&=-i,a.lanes|=i,t=se(t,n),i=sr(a.stateNode,t,i),Vu(a,i),ba!==4&&(ba=2)),!1;var l=Error(s(520),{cause:t});if(l=se(l,n),di===null?di=[l]:di.push(l),ba!==4&&(ba=2),e===null)return!0;t=se(t,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,a=i&-i,n.lanes|=a,a=sr(n.stateNode,t,a),Vu(n,a),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(on===null||!on.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ed(i),Rd(i,a,n,t),Vu(n,i),!1}n=n.return}while(n!==null);return!1}var Nd=Error(s(461)),Ca=!1;function Ea(a,e,n,t){e.child=a===null?Td(e,null,n,t):ct(e,a.child,n,t)}function Od(a,e,n,t,i){n=n.render;var l=e.ref;if("ref"in t){var u={};for(var r in t)r!=="ref"&&(u[r]=t[r])}else u=t;return Nn(e),t=Qu(a,e,n,u,l,i),r=Xu(),a!==null&&!Ca?(Zu(a,e,i),Le(a,e,i)):(ea&&r&&_u(e),e.flags|=1,Ea(a,e,t,i),e.child)}function zd(a,e,n,t,i){if(a===null){var l=n.type;return typeof l=="function"&&!Au(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,Ud(a,e,l,t,i)):(a=Xi(n.type,null,t,e,e.mode,i),a.ref=e.ref,a.return=e,e.child=a)}if(l=a.child,!hr(a,i)){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:Lt,n(u,t)&&a.ref===e.ref)return Le(a,e,i)}return e.flags|=1,a=Ne(l,t),a.ref=e.ref,a.return=e,e.child=a}function Ud(a,e,n,t,i){if(a!==null){var l=a.memoizedProps;if(Lt(l,t)&&a.ref===e.ref)if(Ca=!1,e.pendingProps=t=l,hr(a,i))(a.flags&131072)!==0&&(Ca=!0);else return e.lanes=a.lanes,Le(a,e,i)}return or(a,e,n,t,i)}function Kd(a,e,n){var t=e.pendingProps,i=t.children,l=a!==null?a.memoizedState:null;if(t.mode==="hidden"){if((e.flags&128)!==0){if(t=l!==null?l.baseLanes|n:n,a!==null){for(i=e.child=a.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;e.childLanes=l&~t}else e.childLanes=0,e.child=null;return Bd(a,e,t,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&Wi(e,l!==null?l.cachePool:null),l!==null?Uo(e,l):Gu(),Md(e);else return e.lanes=e.childLanes=536870912,Bd(a,e,l!==null?l.baseLanes|n:n,n)}else l!==null?(Wi(e,l.cachePool),Uo(e,l),nn(),e.memoizedState=null):(a!==null&&Wi(e,null),Gu(),nn());return Ea(a,e,i,n),e.child}function Bd(a,e,n,t){var i=Ku();return i=i===null?null:{parent:xa._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},a!==null&&Wi(e,null),Gu(),Md(e),a!==null&&wt(a,e,t,!0),null}function fl(a,e){var n=e.ref;if(n===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(a===null||a.ref!==n)&&(e.flags|=4194816)}}function or(a,e,n,t,i){return Nn(e),n=Qu(a,e,n,t,void 0,i),t=Xu(),a!==null&&!Ca?(Zu(a,e,i),Le(a,e,i)):(ea&&t&&_u(e),e.flags|=1,Ea(a,e,n,i),e.child)}function Hd(a,e,n,t,i,l){return Nn(e),e.updateQueue=null,n=Bo(e,t,n,i),Ko(a),t=Xu(),a!==null&&!Ca?(Zu(a,e,l),Le(a,e,l)):(ea&&t&&_u(e),e.flags|=1,Ea(a,e,n,l),e.child)}function Ld(a,e,n,t,i){if(Nn(e),e.stateNode===null){var l=et,u=n.contextType;typeof u=="object"&&u!==null&&(l=Ha(u)),l=new n(t,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=rr,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=t,l.state=e.memoizedState,l.refs={},Hu(e),u=n.contextType,l.context=typeof u=="object"&&u!==null?Ha(u):et,l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(ur(e,n,u,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(u=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),u!==l.state&&rr.enqueueReplaceState(l,l.state,null),Wt(e,t,l,i),Ft(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(a===null){l=e.stateNode;var r=e.memoizedProps,o=Un(n,r);l.props=o;var h=l.context,T=n.contextType;u=et,typeof T=="object"&&T!==null&&(u=Ha(T));var j=n.getDerivedStateFromProps;T=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r||h!==u)&&Ad(e,l,t,u),We=!1;var y=e.memoizedState;l.state=y,Wt(e,t,l,i),Ft(),h=e.memoizedState,r||y!==h||We?(typeof j=="function"&&(ur(e,n,j,t),h=e.memoizedState),(o=We||xd(e,n,o,t,y,h,u))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=h),l.props=t,l.state=h,l.context=u,t=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{l=e.stateNode,Lu(a,e),u=e.memoizedProps,T=Un(n,u),l.props=T,j=e.pendingProps,y=l.context,h=n.contextType,o=et,typeof h=="object"&&h!==null&&(o=Ha(h)),r=n.getDerivedStateFromProps,(h=typeof r=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==j||y!==o)&&Ad(e,l,t,o),We=!1,y=e.memoizedState,l.state=y,Wt(e,t,l,i),Ft();var v=e.memoizedState;u!==j||y!==v||We||a!==null&&a.dependencies!==null&&Pi(a.dependencies)?(typeof r=="function"&&(ur(e,n,r,t),v=e.memoizedState),(T=We||xd(e,n,T,t,y,v,o)||a!==null&&a.dependencies!==null&&Pi(a.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,v,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,v,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===a.memoizedProps&&y===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&y===a.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=v),l.props=t,l.state=v,l.context=o,t=T):(typeof l.componentDidUpdate!="function"||u===a.memoizedProps&&y===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&y===a.memoizedState||(e.flags|=1024),t=!1)}return l=t,fl(a,e),t=(e.flags&128)!==0,l||t?(l=e.stateNode,n=t&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,a!==null&&t?(e.child=ct(e,a.child,null,i),e.child=ct(e,null,n,i)):Ea(a,e,n,i),e.memoizedState=l.state,a=e.child):a=Le(a,e,i),a}function Vd(a,e,n,t){return Gt(),e.flags|=256,Ea(a,e,n,t),e.child}var dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cr(a){return{baseLanes:a,cachePool:Co()}}function mr(a,e,n){return a=a!==null?a.childLanes&~n:0,e&&(a|=ge),a}function qd(a,e,n){var t=e.pendingProps,i=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=a!==null&&a.memoizedState===null?!1:(Aa.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,a===null){if(ea){if(i?en(e):nn(),ea){var r=pa,o;if(o=r){a:{for(o=r,r=Se;o.nodeType!==8;){if(!r){r=null;break a}if(o=be(o.nextSibling),o===null){r=null;break a}}r=o}r!==null?(e.memoizedState={dehydrated:r,treeContext:Cn!==null?{id:Oe,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},o=ae(18,null,null,0),o.stateNode=r,o.return=e,e.child=o,qa=e,pa=null,o=!0):o=!1}o||En(e)}if(r=e.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return Pr(r)?e.lanes=32:e.lanes=536870912,null;He(e)}return r=t.children,t=t.fallback,i?(nn(),i=e.mode,r=kl({mode:"hidden",children:r},i),t=jn(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,i=e.child,i.memoizedState=cr(n),i.childLanes=mr(a,u,n),e.memoizedState=dr,t):(en(e),gr(e,r))}if(o=a.memoizedState,o!==null&&(r=o.dehydrated,r!==null)){if(l)e.flags&256?(en(e),e.flags&=-257,e=fr(a,e,n)):e.memoizedState!==null?(nn(),e.child=a.child,e.flags|=128,e=null):(nn(),i=t.fallback,r=e.mode,t=kl({mode:"visible",children:t.children},r),i=jn(i,r,n,null),i.flags|=2,t.return=e,i.return=e,t.sibling=i,e.child=t,ct(e,a.child,null,n),t=e.child,t.memoizedState=cr(n),t.childLanes=mr(a,u,n),e.memoizedState=dr,e=i);else if(en(e),Pr(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var h=u.dgst;u=h,t=Error(s(419)),t.stack="",t.digest=u,Yt({value:t,source:null,stack:null}),e=fr(a,e,n)}else if(Ca||wt(a,e,n,!1),u=(n&a.childLanes)!==0,Ca||u){if(u=ca,u!==null&&(t=n&-n,t=(t&42)!==0?1:Fl(t),t=(t&(u.suspendedLanes|n))!==0?0:t,t!==0&&t!==o.retryLane))throw o.retryLane=t,at(a,t),le(u,a,t),Nd;r.data==="$?"||Nr(),e=fr(a,e,n)}else r.data==="$?"?(e.flags|=192,e.child=a.child,e=null):(a=o.treeContext,pa=be(r.nextSibling),qa=e,ea=!0,Dn=null,Se=!1,a!==null&&(de[ce++]=Oe,de[ce++]=ze,de[ce++]=Cn,Oe=a.id,ze=a.overflow,Cn=e),e=gr(e,t.children),e.flags|=4096);return e}return i?(nn(),i=t.fallback,r=e.mode,o=a.child,h=o.sibling,t=Ne(o,{mode:"hidden",children:t.children}),t.subtreeFlags=o.subtreeFlags&65011712,h!==null?i=Ne(h,i):(i=jn(i,r,n,null),i.flags|=2),i.return=e,t.return=e,t.sibling=i,e.child=t,t=i,i=e.child,r=a.child.memoizedState,r===null?r=cr(n):(o=r.cachePool,o!==null?(h=xa._currentValue,o=o.parent!==h?{parent:h,pool:h}:o):o=Co(),r={baseLanes:r.baseLanes|n,cachePool:o}),i.memoizedState=r,i.childLanes=mr(a,u,n),e.memoizedState=dr,t):(en(e),n=a.child,a=n.sibling,n=Ne(n,{mode:"visible",children:t.children}),n.return=e,n.sibling=null,a!==null&&(u=e.deletions,u===null?(e.deletions=[a],e.flags|=16):u.push(a)),e.child=n,e.memoizedState=null,n)}function gr(a,e){return e=kl({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function kl(a,e){return a=ae(22,a,null,e),a.lanes=0,a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},a}function fr(a,e,n){return ct(e,a.child,null,n),a=gr(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function Gd(a,e,n){a.lanes|=e;var t=a.alternate;t!==null&&(t.lanes|=e),Nu(a.return,e,n)}function kr(a,e,n,t,i){var l=a.memoizedState;l===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=n,l.tailMode=i)}function Yd(a,e,n){var t=e.pendingProps,i=t.revealOrder,l=t.tail;if(Ea(a,e,t.children,n),t=Aa.current,(t&2)!==0)t=t&1|2,e.flags|=128;else{if(a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Gd(a,n,e);else if(a.tag===19)Gd(a,n,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}t&=1}switch(R(Aa,t),i){case"forwards":for(n=e.child,i=null;n!==null;)a=n.alternate,a!==null&&cl(a)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kr(e,!1,i,n,l);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(a=i.alternate,a!==null&&cl(a)===null){e.child=i;break}a=i.sibling,i.sibling=n,n=i,i=a}kr(e,!0,n,null,l);break;case"together":kr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Le(a,e,n){if(a!==null&&(e.dependencies=a.dependencies),sn|=e.lanes,(n&e.childLanes)===0)if(a!==null){if(wt(a,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(s(153));if(e.child!==null){for(a=e.child,n=Ne(a,a.pendingProps),e.child=n,n.return=e;a.sibling!==null;)a=a.sibling,n=n.sibling=Ne(a,a.pendingProps),n.return=e;n.sibling=null}return e.child}function hr(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&Pi(a)))}function mf(a,e,n){switch(e.tag){case 3:fa(e,e.stateNode.containerInfo),Fe(e,xa,a.memoizedState.cache),Gt();break;case 27:case 5:Ql(e);break;case 4:fa(e,e.stateNode.containerInfo);break;case 10:Fe(e,e.type,e.memoizedProps.value);break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(en(e),e.flags|=128,null):(n&e.child.childLanes)!==0?qd(a,e,n):(en(e),a=Le(a,e,n),a!==null?a.sibling:null);en(e);break;case 19:var i=(a.flags&128)!==0;if(t=(n&e.childLanes)!==0,t||(wt(a,e,n,!1),t=(n&e.childLanes)!==0),i){if(t)return Yd(a,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(Aa,Aa.current),t)break;return null;case 22:case 23:return e.lanes=0,Kd(a,e,n);case 24:Fe(e,xa,a.memoizedState.cache)}return Le(a,e,n)}function wd(a,e,n){if(a!==null)if(a.memoizedProps!==e.pendingProps)Ca=!0;else{if(!hr(a,n)&&(e.flags&128)===0)return Ca=!1,mf(a,e,n);Ca=(a.flags&131072)!==0}else Ca=!1,ea&&(e.flags&1048576)!==0&&vo(e,Ji,e.index);switch(e.lanes=0,e.tag){case 16:a:{a=e.pendingProps;var t=e.elementType,i=t._init;if(t=i(t._payload),e.type=t,typeof t=="function")Au(t)?(a=Un(t,a),e.tag=1,e=Ld(null,e,t,a,n)):(e.tag=0,e=or(null,e,t,a,n));else{if(t!=null){if(i=t.$$typeof,i===ke){e.tag=11,e=Od(null,e,t,a,n);break a}else if(i===Ja){e.tag=14,e=zd(null,e,t,a,n);break a}}throw e=vn(t)||t,Error(s(306,e,""))}}return e;case 0:return or(a,e,e.type,e.pendingProps,n);case 1:return t=e.type,i=Un(t,e.pendingProps),Ld(a,e,t,i,n);case 3:a:{if(fa(e,e.stateNode.containerInfo),a===null)throw Error(s(387));t=e.pendingProps;var l=e.memoizedState;i=l.element,Lu(a,e),Wt(e,t,null,n);var u=e.memoizedState;if(t=u.cache,Fe(e,xa,t),t!==l.cache&&Ou(e,[xa],n,!0),Ft(),t=u.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Vd(a,e,t,n);break a}else if(t!==i){i=se(Error(s(424)),e),Yt(i),e=Vd(a,e,t,n);break a}else for(a=e.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,pa=be(a.firstChild),qa=e,ea=!0,Dn=null,Se=!0,n=Td(e,null,t,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gt(),t===i){e=Le(a,e,n);break a}Ea(a,e,t,n)}e=e.child}return e;case 26:return fl(a,e),a===null?(n=Jc(e.type,null,e.pendingProps,null))?e.memoizedState=n:ea||(n=e.type,a=e.pendingProps,t=Dl(Q.current).createElement(n),t[Ba]=e,t[Ga]=a,Na(t,n,a),ja(t),e.stateNode=t):e.memoizedState=Jc(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return Ql(e),a===null&&ea&&(t=e.stateNode=Qc(e.type,e.pendingProps,Q.current),qa=e,Se=!0,i=pa,mn(e.type)?(Fr=i,pa=be(t.firstChild)):pa=i),Ea(a,e,e.pendingProps.children,n),fl(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&ea&&((i=t=pa)&&(t=Vf(t,e.type,e.pendingProps,Se),t!==null?(e.stateNode=t,qa=e,pa=be(t.firstChild),Se=!1,i=!0):i=!1),i||En(e)),Ql(e),i=e.type,l=e.pendingProps,u=a!==null?a.memoizedProps:null,t=l.children,Xr(i,l)?t=null:u!==null&&Xr(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=Qu(a,e,tf,null,null,n),yi._currentValue=i),fl(a,e),Ea(a,e,t,n),e.child;case 6:return a===null&&ea&&((a=n=pa)&&(n=qf(n,e.pendingProps,Se),n!==null?(e.stateNode=n,qa=e,pa=null,a=!0):a=!1),a||En(e)),null;case 13:return qd(a,e,n);case 4:return fa(e,e.stateNode.containerInfo),t=e.pendingProps,a===null?e.child=ct(e,null,t,n):Ea(a,e,t,n),e.child;case 11:return Od(a,e,e.type,e.pendingProps,n);case 7:return Ea(a,e,e.pendingProps,n),e.child;case 8:return Ea(a,e,e.pendingProps.children,n),e.child;case 12:return Ea(a,e,e.pendingProps.children,n),e.child;case 10:return t=e.pendingProps,Fe(e,e.type,t.value),Ea(a,e,t.children,n),e.child;case 9:return i=e.type._context,t=e.pendingProps.children,Nn(e),i=Ha(i),t=t(i),e.flags|=1,Ea(a,e,t,n),e.child;case 14:return zd(a,e,e.type,e.pendingProps,n);case 15:return Ud(a,e,e.type,e.pendingProps,n);case 19:return Yd(a,e,n);case 31:return t=e.pendingProps,n=e.mode,t={mode:t.mode,children:t.children},a===null?(n=kl(t,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Ne(a.child,t),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Kd(a,e,n);case 24:return Nn(e),t=Ha(xa),a===null?(i=Ku(),i===null&&(i=ca,l=zu(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),e.memoizedState={parent:t,cache:i},Hu(e),Fe(e,xa,i)):((a.lanes&n)!==0&&(Lu(a,e),Wt(e,null,null,n),Ft()),i=a.memoizedState,l=e.memoizedState,i.parent!==t?(i={parent:t,cache:t},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Fe(e,xa,t)):(t=l.cache,Fe(e,xa,t),t!==i.cache&&Ou(e,[xa],n,!0))),Ea(a,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Ve(a){a.flags|=4}function Qd(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!$c(e)){if(e=me.current,e!==null&&((W&4194048)===W?Te!==null:(W&62914560)!==W&&(W&536870912)===0||e!==Te))throw Jt=Bu,_o;a.flags|=8192}}function hl(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?Ts():536870912,a.lanes|=e,kt|=e)}function ii(a,e){if(!ea)switch(a.tailMode){case"hidden":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:t.sibling=null}}function ha(a){var e=a.alternate!==null&&a.alternate.child===a.child,n=0,t=0;if(e)for(var i=a.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=a,i=i.sibling;else for(i=a.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=a,i=i.sibling;return a.subtreeFlags|=t,a.childLanes=n,e}function gf(a,e,n){var t=e.pendingProps;switch(Du(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ha(e),null;case 1:return ha(e),null;case 3:return n=e.stateNode,t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ke(xa),Xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(a===null||a.child===null)&&(qt(e)?Ve(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mo())),ha(e),null;case 26:return n=e.memoizedState,a===null?(Ve(e),n!==null?(ha(e),Qd(e,n)):(ha(e),e.flags&=-16777217)):n?n!==a.memoizedState?(Ve(e),ha(e),Qd(e,n)):(ha(e),e.flags&=-16777217):(a.memoizedProps!==t&&Ve(e),ha(e),e.flags&=-16777217),null;case 27:Ci(e),n=Q.current;var i=e.type;if(a!==null&&e.stateNode!=null)a.memoizedProps!==t&&Ve(e);else{if(!t){if(e.stateNode===null)throw Error(s(166));return ha(e),null}a=H.current,qt(e)?So(e):(a=Qc(i,t,n),e.stateNode=a,Ve(e))}return ha(e),null;case 5:if(Ci(e),n=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==t&&Ve(e);else{if(!t){if(e.stateNode===null)throw Error(s(166));return ha(e),null}if(a=H.current,qt(e))So(e);else{switch(i=Dl(Q.current),a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":a=i.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?a.multiple=!0:t.size&&(a.size=t.size);break;default:a=typeof t.is=="string"?i.createElement(n,{is:t.is}):i.createElement(n)}}a[Ba]=e,a[Ga]=t;a:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break a;for(;i.sibling===null;){if(i.return===null||i.return===e)break a;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=a;a:switch(Na(a,n,t),n){case"button":case"input":case"select":case"textarea":a=!!t.autoFocus;break a;case"img":a=!0;break a;default:a=!1}a&&Ve(e)}}return ha(e),e.flags&=-16777217,null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==t&&Ve(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(s(166));if(a=Q.current,qt(e)){if(a=e.stateNode,n=e.memoizedProps,t=null,i=qa,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}a[Ba]=e,a=!!(a.nodeValue===n||t!==null&&t.suppressHydrationWarning===!0||Hc(a.nodeValue,n)),a||En(e)}else a=Dl(a).createTextNode(t),a[Ba]=e,e.stateNode=a}return ha(e),null;case 13:if(t=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(i=qt(e),t!==null&&t.dehydrated!==null){if(a===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ba]=e}else Gt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ha(e),i=!1}else i=Mo(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(He(e),e):(He(e),null)}if(He(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=t!==null,a=a!==null&&a.memoizedState!==null,n){t=e.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool);var l=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)}return n!==a&&n&&(e.child.flags|=8192),hl(e,e.updateQueue),ha(e),null;case 4:return Xe(),a===null&&qr(e.stateNode.containerInfo),ha(e),null;case 10:return Ke(e.type),ha(e),null;case 19:if(z(Aa),i=e.memoizedState,i===null)return ha(e),null;if(t=(e.flags&128)!==0,l=i.rendering,l===null)if(t)ii(i,!1);else{if(ba!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(l=cl(a),l!==null){for(e.flags|=128,ii(i,!1),a=l.updateQueue,e.updateQueue=a,hl(e,a),e.subtreeFlags=0,a=n,n=e.child;n!==null;)yo(n,a),n=n.sibling;return R(Aa,Aa.current&1|2),e.child}a=a.sibling}i.tail!==null&&ve()>yl&&(e.flags|=128,t=!0,ii(i,!1),e.lanes=4194304)}else{if(!t)if(a=cl(l),a!==null){if(e.flags|=128,t=!0,a=a.updateQueue,e.updateQueue=a,hl(e,a),ii(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ea)return ha(e),null}else 2*ve()-i.renderingStartTime>yl&&n!==536870912&&(e.flags|=128,t=!0,ii(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(a=i.last,a!==null?a.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ve(),e.sibling=null,a=Aa.current,R(Aa,t?a&1|2:a&1),e):(ha(e),null);case 22:case 23:return He(e),Yu(),t=e.memoizedState!==null,a!==null?a.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(n&536870912)!==0&&(e.flags&128)===0&&(ha(e),e.subtreeFlags&6&&(e.flags|=8192)):ha(e),n=e.updateQueue,n!==null&&hl(e,n.retryQueue),n=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(e.flags|=2048),a!==null&&z(On),null;case 24:return n=null,a!==null&&(n=a.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ke(xa),ha(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function ff(a,e){switch(Du(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return Ke(xa),Xe(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return Ci(e),null;case 13:if(He(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Gt()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return z(Aa),null;case 4:return Xe(),null;case 10:return Ke(e.type),null;case 22:case 23:return He(e),Yu(),a!==null&&z(On),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return Ke(xa),null;case 25:return null;default:return null}}function Xd(a,e){switch(Du(e),e.tag){case 3:Ke(xa),Xe();break;case 26:case 27:case 5:Ci(e);break;case 4:Xe();break;case 13:He(e);break;case 19:z(Aa);break;case 10:Ke(e.type);break;case 22:case 23:He(e),Yu(),a!==null&&z(On);break;case 24:Ke(xa)}}function li(a,e){try{var n=e.updateQueue,t=n!==null?n.lastEffect:null;if(t!==null){var i=t.next;n=i;do{if((n.tag&a)===a){t=void 0;var l=n.create,u=n.inst;t=l(),u.destroy=t}n=n.next}while(n!==i)}}catch(r){oa(e,e.return,r)}}function tn(a,e,n){try{var t=e.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&a)===a){var u=t.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,i=e;var o=n,h=r;try{h()}catch(T){oa(i,o,T)}}}t=t.next}while(t!==l)}}catch(T){oa(e,e.return,T)}}function Zd(a){var e=a.updateQueue;if(e!==null){var n=a.stateNode;try{zo(e,n)}catch(t){oa(a,a.return,t)}}}function Jd(a,e,n){n.props=Un(a.type,a.memoizedProps),n.state=a.memoizedState;try{n.componentWillUnmount()}catch(t){oa(a,e,t)}}function ui(a,e){try{var n=a.ref;if(n!==null){switch(a.tag){case 26:case 27:case 5:var t=a.stateNode;break;case 30:t=a.stateNode;break;default:t=a.stateNode}typeof n=="function"?a.refCleanup=n(t):n.current=t}}catch(i){oa(a,e,i)}}function Me(a,e){var n=a.ref,t=a.refCleanup;if(n!==null)if(typeof t=="function")try{t()}catch(i){oa(a,e,i)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){oa(a,e,i)}else n.current=null}function Pd(a){var e=a.type,n=a.memoizedProps,t=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&t.focus();break a;case"img":n.src?t.src=n.src:n.srcSet&&(t.srcset=n.srcSet)}}catch(i){oa(a,a.return,i)}}function pr(a,e,n){try{var t=a.stateNode;Uf(t,a.type,n,e),t[Ga]=e}catch(i){oa(a,a.return,i)}}function Fd(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&mn(a.type)||a.tag===4}function br(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Fd(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&mn(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function yr(a,e,n){var t=a.tag;if(t===5||t===6)a=a.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(t!==4&&(t===27&&mn(a.type)&&(n=a.stateNode,e=null),a=a.child,a!==null))for(yr(a,e,n),a=a.sibling;a!==null;)yr(a,e,n),a=a.sibling}function pl(a,e,n){var t=a.tag;if(t===5||t===6)a=a.stateNode,e?n.insertBefore(a,e):n.appendChild(a);else if(t!==4&&(t===27&&mn(a.type)&&(n=a.stateNode),a=a.child,a!==null))for(pl(a,e,n),a=a.sibling;a!==null;)pl(a,e,n),a=a.sibling}function Wd(a){var e=a.stateNode,n=a.memoizedProps;try{for(var t=a.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Na(e,t,n),e[Ba]=a,e[Ga]=n}catch(l){oa(a,a.return,l)}}var qe=!1,Sa=!1,vr=!1,Id=typeof WeakSet=="function"?WeakSet:Set,_a=null;function kf(a,e){if(a=a.containerInfo,wr=Ul,a=so(a),bu(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else a:{n=(n=a.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break a}var u=0,r=-1,o=-1,h=0,T=0,j=a,y=null;e:for(;;){for(var v;j!==n||i!==0&&j.nodeType!==3||(r=u+i),j!==l||t!==0&&j.nodeType!==3||(o=u+t),j.nodeType===3&&(u+=j.nodeValue.length),(v=j.firstChild)!==null;)y=j,j=v;for(;;){if(j===a)break e;if(y===n&&++h===i&&(r=u),y===l&&++T===t&&(o=u),(v=j.nextSibling)!==null)break;j=y,y=j.parentNode}j=v}n=r===-1||o===-1?null:{start:r,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qr={focusedElem:a,selectionRange:n},Ul=!1,_a=e;_a!==null;)if(e=_a,a=e.child,(e.subtreeFlags&1024)!==0&&a!==null)a.return=e,_a=a;else for(;_a!==null;){switch(e=_a,l=e.alternate,a=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((a&1024)!==0&&l!==null){a=void 0,n=e,i=l.memoizedProps,l=l.memoizedState,t=n.stateNode;try{var Y=Un(n.type,i,n.elementType===n.type);a=t.getSnapshotBeforeUpdate(Y,l),t.__reactInternalSnapshotBeforeUpdate=a}catch(L){oa(n,n.return,L)}}break;case 3:if((a&1024)!==0){if(a=e.stateNode.containerInfo,n=a.nodeType,n===9)Jr(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Jr(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(s(163))}if(a=e.sibling,a!==null){a.return=e.return,_a=a;break}_a=e.return}}function $d(a,e,n){var t=n.flags;switch(n.tag){case 0:case 11:case 15:ln(a,n),t&4&&li(5,n);break;case 1:if(ln(a,n),t&4)if(a=n.stateNode,e===null)try{a.componentDidMount()}catch(u){oa(n,n.return,u)}else{var i=Un(n.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(i,e,a.__reactInternalSnapshotBeforeUpdate)}catch(u){oa(n,n.return,u)}}t&64&&Zd(n),t&512&&ui(n,n.return);break;case 3:if(ln(a,n),t&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{zo(a,e)}catch(u){oa(n,n.return,u)}}break;case 27:e===null&&t&4&&Wd(n);case 26:case 5:ln(a,n),e===null&&t&4&&Pd(n),t&512&&ui(n,n.return);break;case 12:ln(a,n);break;case 13:ln(a,n),t&4&&nc(a,n),t&64&&(a=n.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(n=xf.bind(null,n),Gf(a,n))));break;case 22:if(t=n.memoizedState!==null||qe,!t){e=e!==null&&e.memoizedState!==null||Sa,i=qe;var l=Sa;qe=t,(Sa=e)&&!l?un(a,n,(n.subtreeFlags&8772)!==0):ln(a,n),qe=i,Sa=l}break;case 30:break;default:ln(a,n)}}function ac(a){var e=a.alternate;e!==null&&(a.alternate=null,ac(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&$l(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var ka=null,Qa=!1;function Ge(a,e,n){for(n=n.child;n!==null;)ec(a,e,n),n=n.sibling}function ec(a,e,n){if(Wa&&typeof Wa.onCommitFiberUnmount=="function")try{Wa.onCommitFiberUnmount(Ct,n)}catch{}switch(n.tag){case 26:Sa||Me(n,e),Ge(a,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Sa||Me(n,e);var t=ka,i=Qa;mn(n.type)&&(ka=n.stateNode,Qa=!1),Ge(a,e,n),ki(n.stateNode),ka=t,Qa=i;break;case 5:Sa||Me(n,e);case 6:if(t=ka,i=Qa,ka=null,Ge(a,e,n),ka=t,Qa=i,ka!==null)if(Qa)try{(ka.nodeType===9?ka.body:ka.nodeName==="HTML"?ka.ownerDocument.body:ka).removeChild(n.stateNode)}catch(l){oa(n,e,l)}else try{ka.removeChild(n.stateNode)}catch(l){oa(n,e,l)}break;case 18:ka!==null&&(Qa?(a=ka,Yc(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.stateNode),Mi(a)):Yc(ka,n.stateNode));break;case 4:t=ka,i=Qa,ka=n.stateNode.containerInfo,Qa=!0,Ge(a,e,n),ka=t,Qa=i;break;case 0:case 11:case 14:case 15:Sa||tn(2,n,e),Sa||tn(4,n,e),Ge(a,e,n);break;case 1:Sa||(Me(n,e),t=n.stateNode,typeof t.componentWillUnmount=="function"&&Jd(n,e,t)),Ge(a,e,n);break;case 21:Ge(a,e,n);break;case 22:Sa=(t=Sa)||n.memoizedState!==null,Ge(a,e,n),Sa=t;break;default:Ge(a,e,n)}}function nc(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Mi(a)}catch(n){oa(e,e.return,n)}}function hf(a){switch(a.tag){case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new Id),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new Id),e;default:throw Error(s(435,a.tag))}}function Sr(a,e){var n=hf(a);e.forEach(function(t){var i=Af.bind(null,a,t);n.has(t)||(n.add(t),t.then(i,i))})}function ee(a,e){var n=e.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t],l=a,u=e,r=u;a:for(;r!==null;){switch(r.tag){case 27:if(mn(r.type)){ka=r.stateNode,Qa=!1;break a}break;case 5:ka=r.stateNode,Qa=!1;break a;case 3:case 4:ka=r.stateNode.containerInfo,Qa=!0;break a}r=r.return}if(ka===null)throw Error(s(160));ec(l,u,i),ka=null,Qa=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)tc(e,a),e=e.sibling}var pe=null;function tc(a,e){var n=a.alternate,t=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ee(e,a),ne(a),t&4&&(tn(3,a,a.return),li(3,a),tn(5,a,a.return));break;case 1:ee(e,a),ne(a),t&512&&(Sa||n===null||Me(n,n.return)),t&64&&qe&&(a=a.updateQueue,a!==null&&(t=a.callbacks,t!==null&&(n=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:var i=pe;if(ee(e,a),ne(a),t&512&&(Sa||n===null||Me(n,n.return)),t&4){var l=n!==null?n.memoizedState:null;if(t=a.memoizedState,n===null)if(t===null)if(a.stateNode===null){a:{t=a.type,n=a.memoizedProps,i=i.ownerDocument||i;e:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Et]||l[Ba]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),Na(l,t,n),l[Ba]=a,ja(l),t=l;break a;case"link":var u=Wc("link","href",i).get(t+(n.href||""));if(u){for(var r=0;r<u.length;r++)if(l=u[r],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(r,1);break e}}l=i.createElement(t),Na(l,t,n),i.head.appendChild(l);break;case"meta":if(u=Wc("meta","content",i).get(t+(n.content||""))){for(r=0;r<u.length;r++)if(l=u[r],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(r,1);break e}}l=i.createElement(t),Na(l,t,n),i.head.appendChild(l);break;default:throw Error(s(468,t))}l[Ba]=a,ja(l),t=l}a.stateNode=t}else Ic(i,a.type,a.stateNode);else a.stateNode=Fc(i,t,a.memoizedProps);else l!==t?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,t===null?Ic(i,a.type,a.stateNode):Fc(i,t,a.memoizedProps)):t===null&&a.stateNode!==null&&pr(a,a.memoizedProps,n.memoizedProps)}break;case 27:ee(e,a),ne(a),t&512&&(Sa||n===null||Me(n,n.return)),n!==null&&t&4&&pr(a,a.memoizedProps,n.memoizedProps);break;case 5:if(ee(e,a),ne(a),t&512&&(Sa||n===null||Me(n,n.return)),a.flags&32){i=a.stateNode;try{Zn(i,"")}catch(v){oa(a,a.return,v)}}t&4&&a.stateNode!=null&&(i=a.memoizedProps,pr(a,i,n!==null?n.memoizedProps:i)),t&1024&&(vr=!0);break;case 6:if(ee(e,a),ne(a),t&4){if(a.stateNode===null)throw Error(s(162));t=a.memoizedProps,n=a.stateNode;try{n.nodeValue=t}catch(v){oa(a,a.return,v)}}break;case 3:if(Nl=null,i=pe,pe=El(e.containerInfo),ee(e,a),pe=i,ne(a),t&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(e.containerInfo)}catch(v){oa(a,a.return,v)}vr&&(vr=!1,ic(a));break;case 4:t=pe,pe=El(a.stateNode.containerInfo),ee(e,a),ne(a),pe=t;break;case 12:ee(e,a),ne(a);break;case 13:ee(e,a),ne(a),a.child.flags&8192&&a.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cr=ve()),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,Sr(a,t)));break;case 22:i=a.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,h=qe,T=Sa;if(qe=h||i,Sa=T||o,ee(e,a),Sa=T,qe=h,ne(a),t&8192)a:for(e=a.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||o||qe||Sa||Kn(a)),n=null,e=a;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(l=o.stateNode,i)u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=o.stateNode;var j=o.memoizedProps.style,y=j!=null&&j.hasOwnProperty("display")?j.display:null;r.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(v){oa(o,o.return,v)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(v){oa(o,o.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===a)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break a;for(;e.sibling===null;){if(e.return===null||e.return===a)break a;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=a.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Sr(a,n))));break;case 19:ee(e,a),ne(a),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,Sr(a,t)));break;case 30:break;case 21:break;default:ee(e,a),ne(a)}}function ne(a){var e=a.flags;if(e&2){try{for(var n,t=a.return;t!==null;){if(Fd(t)){n=t;break}t=t.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,l=br(a);pl(a,l,i);break;case 5:var u=n.stateNode;n.flags&32&&(Zn(u,""),n.flags&=-33);var r=br(a);pl(a,r,u);break;case 3:case 4:var o=n.stateNode.containerInfo,h=br(a);yr(a,h,o);break;default:throw Error(s(161))}}catch(T){oa(a,a.return,T)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function ic(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;ic(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),a=a.sibling}}function ln(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)$d(a,e.alternate,e),e=e.sibling}function Kn(a){for(a=a.child;a!==null;){var e=a;switch(e.tag){case 0:case 11:case 14:case 15:tn(4,e,e.return),Kn(e);break;case 1:Me(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Jd(e,e.return,n),Kn(e);break;case 27:ki(e.stateNode);case 26:case 5:Me(e,e.return),Kn(e);break;case 22:e.memoizedState===null&&Kn(e);break;case 30:Kn(e);break;default:Kn(e)}a=a.sibling}}function un(a,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,i=a,l=e,u=l.flags;switch(l.tag){case 0:case 11:case 15:un(i,l,n),li(4,l);break;case 1:if(un(i,l,n),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){oa(t,t.return,h)}if(t=l,i=t.updateQueue,i!==null){var r=t.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)Oo(o[i],r)}catch(h){oa(t,t.return,h)}}n&&u&64&&Zd(l),ui(l,l.return);break;case 27:Wd(l);case 26:case 5:un(i,l,n),n&&t===null&&u&4&&Pd(l),ui(l,l.return);break;case 12:un(i,l,n);break;case 13:un(i,l,n),n&&u&4&&nc(i,l);break;case 22:l.memoizedState===null&&un(i,l,n),ui(l,l.return);break;case 30:break;default:un(i,l,n)}e=e.sibling}}function Tr(a,e){var n=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(a!=null&&a.refCount++,n!=null&&Qt(n))}function Mr(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Qt(a))}function xe(a,e,n,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lc(a,e,n,t),e=e.sibling}function lc(a,e,n,t){var i=e.flags;switch(e.tag){case 0:case 11:case 15:xe(a,e,n,t),i&2048&&li(9,e);break;case 1:xe(a,e,n,t);break;case 3:xe(a,e,n,t),i&2048&&(a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Qt(a)));break;case 12:if(i&2048){xe(a,e,n,t),a=e.stateNode;try{var l=e.memoizedProps,u=l.id,r=l.onPostCommit;typeof r=="function"&&r(u,e.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(o){oa(e,e.return,o)}}else xe(a,e,n,t);break;case 13:xe(a,e,n,t);break;case 23:break;case 22:l=e.stateNode,u=e.alternate,e.memoizedState!==null?l._visibility&2?xe(a,e,n,t):ri(a,e):l._visibility&2?xe(a,e,n,t):(l._visibility|=2,mt(a,e,n,t,(e.subtreeFlags&10256)!==0)),i&2048&&Tr(u,e);break;case 24:xe(a,e,n,t),i&2048&&Mr(e.alternate,e);break;default:xe(a,e,n,t)}}function mt(a,e,n,t,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=a,u=e,r=n,o=t,h=u.flags;switch(u.tag){case 0:case 11:case 15:mt(l,u,r,o,i),li(8,u);break;case 23:break;case 22:var T=u.stateNode;u.memoizedState!==null?T._visibility&2?mt(l,u,r,o,i):ri(l,u):(T._visibility|=2,mt(l,u,r,o,i)),i&&h&2048&&Tr(u.alternate,u);break;case 24:mt(l,u,r,o,i),i&&h&2048&&Mr(u.alternate,u);break;default:mt(l,u,r,o,i)}e=e.sibling}}function ri(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=a,t=e,i=t.flags;switch(t.tag){case 22:ri(n,t),i&2048&&Tr(t.alternate,t);break;case 24:ri(n,t),i&2048&&Mr(t.alternate,t);break;default:ri(n,t)}e=e.sibling}}var si=8192;function gt(a){if(a.subtreeFlags&si)for(a=a.child;a!==null;)uc(a),a=a.sibling}function uc(a){switch(a.tag){case 26:gt(a),a.flags&si&&a.memoizedState!==null&&ek(pe,a.memoizedState,a.memoizedProps);break;case 5:gt(a);break;case 3:case 4:var e=pe;pe=El(a.stateNode.containerInfo),gt(a),pe=e;break;case 22:a.memoizedState===null&&(e=a.alternate,e!==null&&e.memoizedState!==null?(e=si,si=16777216,gt(a),si=e):gt(a));break;default:gt(a)}}function rc(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function oi(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var t=e[n];_a=t,oc(t,a)}rc(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)sc(a),a=a.sibling}function sc(a){switch(a.tag){case 0:case 11:case 15:oi(a),a.flags&2048&&tn(9,a,a.return);break;case 3:oi(a);break;case 12:oi(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,bl(a)):oi(a);break;default:oi(a)}}function bl(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var t=e[n];_a=t,oc(t,a)}rc(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:tn(8,e,e.return),bl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,bl(e));break;default:bl(e)}a=a.sibling}}function oc(a,e){for(;_a!==null;){var n=_a;switch(n.tag){case 0:case 11:case 15:tn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var t=n.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Qt(n.memoizedState.cache)}if(t=n.child,t!==null)t.return=n,_a=t;else a:for(n=a;_a!==null;){t=_a;var i=t.sibling,l=t.return;if(ac(t),t===n){_a=null;break a}if(i!==null){i.return=l,_a=i;break a}_a=l}}}var pf={getCacheForType:function(a){var e=Ha(xa),n=e.data.get(a);return n===void 0&&(n=a(),e.data.set(a,n)),n}},bf=typeof WeakMap=="function"?WeakMap:Map,ta=0,ca=null,P=null,W=0,ia=0,te=null,rn=!1,ft=!1,xr=!1,Ye=0,ba=0,sn=0,Bn=0,Ar=0,ge=0,kt=0,di=null,Xa=null,jr=!1,Cr=0,yl=1/0,vl=null,on=null,Ra=0,dn=null,ht=null,pt=0,_r=0,Dr=null,dc=null,ci=0,Er=null;function ie(){if((ta&2)!==0&&W!==0)return W&-W;if(M.T!==null){var a=it;return a!==0?a:Br()}return As()}function cc(){ge===0&&(ge=(W&536870912)===0||ea?Ss():536870912);var a=me.current;return a!==null&&(a.flags|=32),ge}function le(a,e,n){(a===ca&&(ia===2||ia===9)||a.cancelPendingCommit!==null)&&(bt(a,0),cn(a,W,ge,!1)),Dt(a,n),((ta&2)===0||a!==ca)&&(a===ca&&((ta&2)===0&&(Bn|=n),ba===4&&cn(a,W,ge,!1)),Ae(a))}function mc(a,e,n){if((ta&6)!==0)throw Error(s(327));var t=!n&&(e&124)===0&&(e&a.expiredLanes)===0||_t(a,e),i=t?Sf(a,e):Or(a,e,!0),l=t;do{if(i===0){ft&&!t&&cn(a,e,0,!1);break}else{if(n=a.current.alternate,l&&!yf(n)){i=Or(a,e,!1),l=!1;continue}if(i===2){if(l=e,a.errorRecoveryDisabledLanes&l)var u=0;else u=a.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;a:{var r=a;i=di;var o=r.current.memoizedState.isDehydrated;if(o&&(bt(r,u).flags|=256),u=Or(r,u,!1),u!==2){if(xr&&!o){r.errorRecoveryDisabledLanes|=l,Bn|=l,i=4;break a}l=Xa,Xa=i,l!==null&&(Xa===null?Xa=l:Xa.push.apply(Xa,l))}i=u}if(l=!1,i!==2)continue}}if(i===1){bt(a,0),cn(a,e,0,!0);break}a:{switch(t=a,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:cn(t,e,ge,!rn);break a;case 2:Xa=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Cr+300-ve(),10<i)){if(cn(t,e,ge,!rn),Ri(t,0,!0)!==0)break a;t.timeoutHandle=qc(gc.bind(null,t,n,Xa,vl,jr,e,ge,Bn,kt,rn,l,2,-0,0),i);break a}gc(t,n,Xa,vl,jr,e,ge,Bn,kt,rn,l,0,-0,0)}}break}while(!0);Ae(a)}function gc(a,e,n,t,i,l,u,r,o,h,T,j,y,v){if(a.timeoutHandle=-1,j=e.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(bi={stylesheets:null,count:0,unsuspend:ak},uc(e),j=nk(),j!==null)){a.cancelPendingCommit=j(vc.bind(null,a,e,l,n,t,i,u,r,o,T,1,y,v)),cn(a,l,u,!h);return}vc(a,e,l,n,t,i,u,r,o)}function yf(a){for(var e=a;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var t=0;t<n.length;t++){var i=n[t],l=i.getSnapshot;i=i.value;try{if(!$a(l(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(a,e,n,t){e&=~Ar,e&=~Bn,a.suspendedLanes|=e,a.pingedLanes&=~e,t&&(a.warmLanes|=e),t=a.expirationTimes;for(var i=e;0<i;){var l=31-Ia(i),u=1<<l;t[l]=-1,i&=~u}n!==0&&Ms(a,n,e)}function Sl(){return(ta&6)===0?(mi(0),!1):!0}function Rr(){if(P!==null){if(ia===0)var a=P.return;else a=P,Ue=Rn=null,Ju(a),dt=null,ni=0,a=P;for(;a!==null;)Xd(a.alternate,a),a=a.return;P=null}}function bt(a,e){var n=a.timeoutHandle;n!==-1&&(a.timeoutHandle=-1,Bf(n)),n=a.cancelPendingCommit,n!==null&&(a.cancelPendingCommit=null,n()),Rr(),ca=a,P=n=Ne(a.current,null),W=e,ia=0,te=null,rn=!1,ft=_t(a,e),xr=!1,kt=ge=Ar=Bn=sn=ba=0,Xa=di=null,jr=!1,(e&8)!==0&&(e|=e&32);var t=a.entangledLanes;if(t!==0)for(a=a.entanglements,t&=e;0<t;){var i=31-Ia(t),l=1<<i;e|=a[i],t&=~l}return Ye=e,Yi(),n}function fc(a,e){Z=null,M.H=sl,e===Zt||e===Ii?(e=Ro(),ia=3):e===_o?(e=Ro(),ia=4):ia=e===Nd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,te=e,P===null&&(ba=1,gl(a,se(e,a.current)))}function kc(){var a=M.H;return M.H=sl,a===null?sl:a}function hc(){var a=M.A;return M.A=pf,a}function Nr(){ba=4,rn||(W&4194048)!==W&&me.current!==null||(ft=!0),(sn&134217727)===0&&(Bn&134217727)===0||ca===null||cn(ca,W,ge,!1)}function Or(a,e,n){var t=ta;ta|=2;var i=kc(),l=hc();(ca!==a||W!==e)&&(vl=null,bt(a,e)),e=!1;var u=ba;a:do try{if(ia!==0&&P!==null){var r=P,o=te;switch(ia){case 8:Rr(),u=6;break a;case 3:case 2:case 9:case 6:me.current===null&&(e=!0);var h=ia;if(ia=0,te=null,yt(a,r,o,h),n&&ft){u=0;break a}break;default:h=ia,ia=0,te=null,yt(a,r,o,h)}}vf(),u=ba;break}catch(T){fc(a,T)}while(!0);return e&&a.shellSuspendCounter++,Ue=Rn=null,ta=t,M.H=i,M.A=l,P===null&&(ca=null,W=0,Yi()),u}function vf(){for(;P!==null;)pc(P)}function Sf(a,e){var n=ta;ta|=2;var t=kc(),i=hc();ca!==a||W!==e?(vl=null,yl=ve()+500,bt(a,e)):ft=_t(a,e);a:do try{if(ia!==0&&P!==null){e=P;var l=te;e:switch(ia){case 1:ia=0,te=null,yt(a,e,l,1);break;case 2:case 9:if(Do(l)){ia=0,te=null,bc(e);break}e=function(){ia!==2&&ia!==9||ca!==a||(ia=7),Ae(a)},l.then(e,e);break a;case 3:ia=7;break a;case 4:ia=5;break a;case 7:Do(l)?(ia=0,te=null,bc(e)):(ia=0,te=null,yt(a,e,l,7));break;case 5:var u=null;switch(P.tag){case 26:u=P.memoizedState;case 5:case 27:var r=P;if(!u||$c(u)){ia=0,te=null;var o=r.sibling;if(o!==null)P=o;else{var h=r.return;h!==null?(P=h,Tl(h)):P=null}break e}}ia=0,te=null,yt(a,e,l,5);break;case 6:ia=0,te=null,yt(a,e,l,6);break;case 8:Rr(),ba=6;break a;default:throw Error(s(462))}}Tf();break}catch(T){fc(a,T)}while(!0);return Ue=Rn=null,M.H=t,M.A=i,ta=n,P!==null?0:(ca=null,W=0,Yi(),ba)}function Tf(){for(;P!==null&&!Ym();)pc(P)}function pc(a){var e=wd(a.alternate,a,Ye);a.memoizedProps=a.pendingProps,e===null?Tl(a):P=e}function bc(a){var e=a,n=e.alternate;switch(e.tag){case 15:case 0:e=Hd(n,e,e.pendingProps,e.type,void 0,W);break;case 11:e=Hd(n,e,e.pendingProps,e.type.render,e.ref,W);break;case 5:Ju(e);default:Xd(n,e),e=P=yo(e,Ye),e=wd(n,e,Ye)}a.memoizedProps=a.pendingProps,e===null?Tl(a):P=e}function yt(a,e,n,t){Ue=Rn=null,Ju(e),dt=null,ni=0;var i=e.return;try{if(cf(a,i,e,n,W)){ba=1,gl(a,se(n,a.current)),P=null;return}}catch(l){if(i!==null)throw P=i,l;ba=1,gl(a,se(n,a.current)),P=null;return}e.flags&32768?(ea||t===1?a=!0:ft||(W&536870912)!==0?a=!1:(rn=a=!0,(t===2||t===9||t===3||t===6)&&(t=me.current,t!==null&&t.tag===13&&(t.flags|=16384))),yc(e,a)):Tl(e)}function Tl(a){var e=a;do{if((e.flags&32768)!==0){yc(e,rn);return}a=e.return;var n=gf(e.alternate,e,Ye);if(n!==null){P=n;return}if(e=e.sibling,e!==null){P=e;return}P=e=a}while(e!==null);ba===0&&(ba=5)}function yc(a,e){do{var n=ff(a.alternate,a);if(n!==null){n.flags&=32767,P=n;return}if(n=a.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(a=a.sibling,a!==null)){P=a;return}P=a=n}while(a!==null);ba=6,P=null}function vc(a,e,n,t,i,l,u,r,o){a.cancelPendingCommit=null;do Ml();while(Ra!==0);if((ta&6)!==0)throw Error(s(327));if(e!==null){if(e===a.current)throw Error(s(177));if(l=e.lanes|e.childLanes,l|=Mu,$m(a,n,l,u,r,o),a===ca&&(P=ca=null,W=0),ht=e,dn=a,pt=n,_r=l,Dr=i,dc=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,jf(_i,function(){return Ac(),null})):(a.callbackNode=null,a.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=M.T,M.T=null,i=O.p,O.p=2,u=ta,ta|=4;try{kf(a,e,n)}finally{ta=u,O.p=i,M.T=t}}Ra=1,Sc(),Tc(),Mc()}}function Sc(){if(Ra===1){Ra=0;var a=dn,e=ht,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var t=O.p;O.p=2;var i=ta;ta|=4;try{tc(e,a);var l=Qr,u=so(a.containerInfo),r=l.focusedElem,o=l.selectionRange;if(u!==r&&r&&r.ownerDocument&&ro(r.ownerDocument.documentElement,r)){if(o!==null&&bu(r)){var h=o.start,T=o.end;if(T===void 0&&(T=h),"selectionStart"in r)r.selectionStart=h,r.selectionEnd=Math.min(T,r.value.length);else{var j=r.ownerDocument||document,y=j&&j.defaultView||window;if(y.getSelection){var v=y.getSelection(),Y=r.textContent.length,L=Math.min(o.start,Y),ra=o.end===void 0?L:Math.min(o.end,Y);!v.extend&&L>ra&&(u=ra,ra=L,L=u);var f=uo(r,L),g=uo(r,ra);if(f&&g&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==g.node||v.focusOffset!==g.offset)){var k=j.createRange();k.setStart(f.node,f.offset),v.removeAllRanges(),L>ra?(v.addRange(k),v.extend(g.node,g.offset)):(k.setEnd(g.node,g.offset),v.addRange(k))}}}}for(j=[],v=r;v=v.parentNode;)v.nodeType===1&&j.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<j.length;r++){var A=j[r];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Ul=!!wr,Qr=wr=null}finally{ta=i,O.p=t,M.T=n}}a.current=e,Ra=2}}function Tc(){if(Ra===2){Ra=0;var a=dn,e=ht,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var t=O.p;O.p=2;var i=ta;ta|=4;try{$d(a,e.alternate,e)}finally{ta=i,O.p=t,M.T=n}}Ra=3}}function Mc(){if(Ra===4||Ra===3){Ra=0,wm();var a=dn,e=ht,n=pt,t=dc;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ra=5:(Ra=0,ht=dn=null,xc(a,a.pendingLanes));var i=a.pendingLanes;if(i===0&&(on=null),Wl(n),e=e.stateNode,Wa&&typeof Wa.onCommitFiberRoot=="function")try{Wa.onCommitFiberRoot(Ct,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=M.T,i=O.p,O.p=2,M.T=null;try{for(var l=a.onRecoverableError,u=0;u<t.length;u++){var r=t[u];l(r.value,{componentStack:r.stack})}}finally{M.T=e,O.p=i}}(pt&3)!==0&&Ml(),Ae(a),i=a.pendingLanes,(n&4194090)!==0&&(i&42)!==0?a===Er?ci++:(ci=0,Er=a):ci=0,mi(0)}}function xc(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,Qt(e)))}function Ml(a){return Sc(),Tc(),Mc(),Ac()}function Ac(){if(Ra!==5)return!1;var a=dn,e=_r;_r=0;var n=Wl(pt),t=M.T,i=O.p;try{O.p=32>n?32:n,M.T=null,n=Dr,Dr=null;var l=dn,u=pt;if(Ra=0,ht=dn=null,pt=0,(ta&6)!==0)throw Error(s(331));var r=ta;if(ta|=4,sc(l.current),lc(l,l.current,u,n),ta=r,mi(0,!1),Wa&&typeof Wa.onPostCommitFiberRoot=="function")try{Wa.onPostCommitFiberRoot(Ct,l)}catch{}return!0}finally{O.p=i,M.T=t,xc(a,e)}}function jc(a,e,n){e=se(n,e),e=sr(a.stateNode,e,2),a=$e(a,e,2),a!==null&&(Dt(a,2),Ae(a))}function oa(a,e,n){if(a.tag===3)jc(a,a,n);else for(;e!==null;){if(e.tag===3){jc(e,a,n);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(on===null||!on.has(t))){a=se(n,a),n=Ed(2),t=$e(e,n,2),t!==null&&(Rd(n,t,e,a),Dt(t,2),Ae(t));break}}e=e.return}}function zr(a,e,n){var t=a.pingCache;if(t===null){t=a.pingCache=new bf;var i=new Set;t.set(e,i)}else i=t.get(e),i===void 0&&(i=new Set,t.set(e,i));i.has(n)||(xr=!0,i.add(n),a=Mf.bind(null,a,e,n),e.then(a,a))}function Mf(a,e,n){var t=a.pingCache;t!==null&&t.delete(e),a.pingedLanes|=a.suspendedLanes&n,a.warmLanes&=~n,ca===a&&(W&n)===n&&(ba===4||ba===3&&(W&62914560)===W&&300>ve()-Cr?(ta&2)===0&&bt(a,0):Ar|=n,kt===W&&(kt=0)),Ae(a)}function Cc(a,e){e===0&&(e=Ts()),a=at(a,e),a!==null&&(Dt(a,e),Ae(a))}function xf(a){var e=a.memoizedState,n=0;e!==null&&(n=e.retryLane),Cc(a,n)}function Af(a,e){var n=0;switch(a.tag){case 13:var t=a.stateNode,i=a.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=a.stateNode;break;case 22:t=a.stateNode._retryCache;break;default:throw Error(s(314))}t!==null&&t.delete(e),Cc(a,n)}function jf(a,e){return Zl(a,e)}var xl=null,vt=null,Ur=!1,Al=!1,Kr=!1,Hn=0;function Ae(a){a!==vt&&a.next===null&&(vt===null?xl=vt=a:vt=vt.next=a),Al=!0,Ur||(Ur=!0,_f())}function mi(a,e){if(!Kr&&Al){Kr=!0;do for(var n=!1,t=xl;t!==null;){if(a!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var u=t.suspendedLanes,r=t.pingedLanes;l=(1<<31-Ia(42|a)+1)-1,l&=i&~(u&~r),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Rc(t,l))}else l=W,l=Ri(t,t===ca?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||_t(t,l)||(n=!0,Rc(t,l));t=t.next}while(n);Kr=!1}}function Cf(){_c()}function _c(){Al=Ur=!1;var a=0;Hn!==0&&(Kf()&&(a=Hn),Hn=0);for(var e=ve(),n=null,t=xl;t!==null;){var i=t.next,l=Dc(t,e);l===0?(t.next=null,n===null?xl=i:n.next=i,i===null&&(vt=n)):(n=t,(a!==0||(l&3)!==0)&&(Al=!0)),t=i}mi(a)}function Dc(a,e){for(var n=a.suspendedLanes,t=a.pingedLanes,i=a.expirationTimes,l=a.pendingLanes&-62914561;0<l;){var u=31-Ia(l),r=1<<u,o=i[u];o===-1?((r&n)===0||(r&t)!==0)&&(i[u]=Im(r,e)):o<=e&&(a.expiredLanes|=r),l&=~r}if(e=ca,n=W,n=Ri(a,a===e?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),t=a.callbackNode,n===0||a===e&&(ia===2||ia===9)||a.cancelPendingCommit!==null)return t!==null&&t!==null&&Jl(t),a.callbackNode=null,a.callbackPriority=0;if((n&3)===0||_t(a,n)){if(e=n&-n,e===a.callbackPriority)return e;switch(t!==null&&Jl(t),Wl(n)){case 2:case 8:n=ys;break;case 32:n=_i;break;case 268435456:n=vs;break;default:n=_i}return t=Ec.bind(null,a),n=Zl(n,t),a.callbackPriority=e,a.callbackNode=n,e}return t!==null&&t!==null&&Jl(t),a.callbackPriority=2,a.callbackNode=null,2}function Ec(a,e){if(Ra!==0&&Ra!==5)return a.callbackNode=null,a.callbackPriority=0,null;var n=a.callbackNode;if(Ml()&&a.callbackNode!==n)return null;var t=W;return t=Ri(a,a===ca?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),t===0?null:(mc(a,t,e),Dc(a,ve()),a.callbackNode!=null&&a.callbackNode===n?Ec.bind(null,a):null)}function Rc(a,e){if(Ml())return null;mc(a,e,!0)}function _f(){Hf(function(){(ta&6)!==0?Zl(bs,Cf):_c()})}function Br(){return Hn===0&&(Hn=Ss()),Hn}function Nc(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Ki(""+a)}function Oc(a,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,a.id&&n.setAttribute("form",a.id),e.parentNode.insertBefore(n,e),a=new FormData(a),n.parentNode.removeChild(n),a}function Df(a,e,n,t,i){if(e==="submit"&&n&&n.stateNode===i){var l=Nc((i[Ga]||null).action),u=t.submitter;u&&(e=(e=u[Ga]||null)?Nc(e.formAction):u.getAttribute("formAction"),e!==null&&(l=e,u=null));var r=new Vi("action","action",null,t,i);a.push({event:r,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Hn!==0){var o=u?Oc(i,u):new FormData(i);tr(n,{pending:!0,data:o,method:i.method,action:l},null,o)}}else typeof l=="function"&&(r.preventDefault(),o=u?Oc(i,u):new FormData(i),tr(n,{pending:!0,data:o,method:i.method,action:l},l,o))},currentTarget:i}]})}}for(var Hr=0;Hr<Tu.length;Hr++){var Lr=Tu[Hr],Ef=Lr.toLowerCase(),Rf=Lr[0].toUpperCase()+Lr.slice(1);he(Ef,"on"+Rf)}he(mo,"onAnimationEnd"),he(go,"onAnimationIteration"),he(fo,"onAnimationStart"),he("dblclick","onDoubleClick"),he("focusin","onFocus"),he("focusout","onBlur"),he(Zg,"onTransitionRun"),he(Jg,"onTransitionStart"),he(Pg,"onTransitionCancel"),he(ko,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function zc(a,e){e=(e&4)!==0;for(var n=0;n<a.length;n++){var t=a[n],i=t.event;t=t.listeners;a:{var l=void 0;if(e)for(var u=t.length-1;0<=u;u--){var r=t[u],o=r.instance,h=r.currentTarget;if(r=r.listener,o!==l&&i.isPropagationStopped())break a;l=r,i.currentTarget=h;try{l(i)}catch(T){ml(T)}i.currentTarget=null,l=o}else for(u=0;u<t.length;u++){if(r=t[u],o=r.instance,h=r.currentTarget,r=r.listener,o!==l&&i.isPropagationStopped())break a;l=r,i.currentTarget=h;try{l(i)}catch(T){ml(T)}i.currentTarget=null,l=o}}}}function F(a,e){var n=e[Il];n===void 0&&(n=e[Il]=new Set);var t=a+"__bubble";n.has(t)||(Uc(e,a,2,!1),n.add(t))}function Vr(a,e,n){var t=0;e&&(t|=4),Uc(n,a,t,e)}var jl="_reactListening"+Math.random().toString(36).slice(2);function qr(a){if(!a[jl]){a[jl]=!0,Cs.forEach(function(n){n!=="selectionchange"&&(Nf.has(n)||Vr(n,!1,a),Vr(n,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[jl]||(e[jl]=!0,Vr("selectionchange",!1,e))}}function Uc(a,e,n,t){switch(lm(e)){case 2:var i=lk;break;case 8:i=uk;break;default:i=es}n=i.bind(null,e,n,a),i=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),t?i!==void 0?a.addEventListener(e,n,{capture:!0,passive:i}):a.addEventListener(e,n,!0):i!==void 0?a.addEventListener(e,n,{passive:i}):a.addEventListener(e,n,!1)}function Gr(a,e,n,t,i){var l=t;if((e&1)===0&&(e&2)===0&&t!==null)a:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var r=t.stateNode.containerInfo;if(r===i)break;if(u===4)for(u=t.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;r!==null;){if(u=qn(r),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){t=l=u;continue a}r=r.parentNode}}t=t.return}qs(function(){var h=l,T=ru(n),j=[];a:{var y=ho.get(a);if(y!==void 0){var v=Vi,Y=a;switch(a){case"keypress":if(Hi(n)===0)break a;case"keydown":case"keyup":v=Ag;break;case"focusin":Y="focus",v=gu;break;case"focusout":Y="blur",v=gu;break;case"beforeblur":case"afterblur":v=gu;break;case"click":if(n.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_g;break;case mo:case go:case fo:v=hg;break;case ko:v=Eg;break;case"scroll":case"scrollend":v=cg;break;case"wheel":v=Ng;break;case"copy":case"cut":case"paste":v=bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xs;break;case"toggle":case"beforetoggle":v=zg}var L=(e&4)!==0,ra=!L&&(a==="scroll"||a==="scrollend"),f=L?y!==null?y+"Capture":null:y;L=[];for(var g=h,k;g!==null;){var A=g;if(k=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||k===null||f===null||(A=Nt(g,f),A!=null&&L.push(fi(g,A,k))),ra)break;g=g.return}0<L.length&&(y=new v(y,Y,null,n,T),j.push({event:y,listeners:L}))}}if((e&7)===0){a:{if(y=a==="mouseover"||a==="pointerover",v=a==="mouseout"||a==="pointerout",y&&n!==uu&&(Y=n.relatedTarget||n.fromElement)&&(qn(Y)||Y[Vn]))break a;if((v||y)&&(y=T.window===T?T:(y=T.ownerDocument)?y.defaultView||y.parentWindow:window,v?(Y=n.relatedTarget||n.toElement,v=h,Y=Y?qn(Y):null,Y!==null&&(ra=C(Y),L=Y.tag,Y!==ra||L!==5&&L!==27&&L!==6)&&(Y=null)):(v=null,Y=h),v!==Y)){if(L=ws,A="onMouseLeave",f="onMouseEnter",g="mouse",(a==="pointerout"||a==="pointerover")&&(L=Xs,A="onPointerLeave",f="onPointerEnter",g="pointer"),ra=v==null?y:Rt(v),k=Y==null?y:Rt(Y),y=new L(A,g+"leave",v,n,T),y.target=ra,y.relatedTarget=k,A=null,qn(T)===h&&(L=new L(f,g+"enter",Y,n,T),L.target=k,L.relatedTarget=ra,A=L),ra=A,v&&Y)e:{for(L=v,f=Y,g=0,k=L;k;k=St(k))g++;for(k=0,A=f;A;A=St(A))k++;for(;0<g-k;)L=St(L),g--;for(;0<k-g;)f=St(f),k--;for(;g--;){if(L===f||f!==null&&L===f.alternate)break e;L=St(L),f=St(f)}L=null}else L=null;v!==null&&Kc(j,y,v,L,!1),Y!==null&&ra!==null&&Kc(j,ra,Y,L,!0)}}a:{if(y=h?Rt(h):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var U=ao;else if(Is(y))if(eo)U=wg;else{U=Gg;var J=qg}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&lu(h.elementType)&&(U=ao):U=Yg;if(U&&(U=U(a,h))){$s(j,U,n,T);break a}J&&J(a,y,h),a==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&iu(y,"number",y.value)}switch(J=h?Rt(h):window,a){case"focusin":(Is(J)||J.contentEditable==="true")&&(Wn=J,yu=h,Vt=null);break;case"focusout":Vt=yu=Wn=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,oo(j,n,T);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":oo(j,n,T)}var K;if(ku)a:{switch(a){case"compositionstart":var q="onCompositionStart";break a;case"compositionend":q="onCompositionEnd";break a;case"compositionupdate":q="onCompositionUpdate";break a}q=void 0}else Fn?Fs(a,n)&&(q="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(Zs&&n.locale!=="ko"&&(Fn||q!=="onCompositionStart"?q==="onCompositionEnd"&&Fn&&(K=Gs()):(Pe=T,du="value"in Pe?Pe.value:Pe.textContent,Fn=!0)),J=Cl(h,q),0<J.length&&(q=new Qs(q,a,null,n,T),j.push({event:q,listeners:J}),K?q.data=K:(K=Ws(n),K!==null&&(q.data=K)))),(K=Kg?Bg(a,n):Hg(a,n))&&(q=Cl(h,"onBeforeInput"),0<q.length&&(J=new Qs("onBeforeInput","beforeinput",null,n,T),j.push({event:J,listeners:q}),J.data=K)),Df(j,a,h,n,T)}zc(j,e)})}function fi(a,e,n){return{instance:a,listener:e,currentTarget:n}}function Cl(a,e){for(var n=e+"Capture",t=[];a!==null;){var i=a,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Nt(a,n),i!=null&&t.unshift(fi(a,i,l)),i=Nt(a,e),i!=null&&t.push(fi(a,i,l))),a.tag===3)return t;a=a.return}return[]}function St(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Kc(a,e,n,t,i){for(var l=e._reactName,u=[];n!==null&&n!==t;){var r=n,o=r.alternate,h=r.stateNode;if(r=r.tag,o!==null&&o===t)break;r!==5&&r!==26&&r!==27||h===null||(o=h,i?(h=Nt(n,l),h!=null&&u.unshift(fi(n,h,o))):i||(h=Nt(n,l),h!=null&&u.push(fi(n,h,o)))),n=n.return}u.length!==0&&a.push({event:e,listeners:u})}var Of=/\r\n?/g,zf=/\u0000|\uFFFD/g;function Bc(a){return(typeof a=="string"?a:""+a).replace(Of,`
`).replace(zf,"")}function Hc(a,e){return e=Bc(e),Bc(a)===e}function _l(){}function ua(a,e,n,t,i,l){switch(n){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Zn(a,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Zn(a,""+t);break;case"className":Oi(a,"class",t);break;case"tabIndex":Oi(a,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(a,n,t);break;case"style":Ls(a,t,l);break;case"data":if(e!=="object"){Oi(a,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||n!=="href")){a.removeAttribute(n);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){a.removeAttribute(n);break}t=Ki(""+t),a.setAttribute(n,t);break;case"action":case"formAction":if(typeof t=="function"){a.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&ua(a,e,"name",i.name,i,null),ua(a,e,"formEncType",i.formEncType,i,null),ua(a,e,"formMethod",i.formMethod,i,null),ua(a,e,"formTarget",i.formTarget,i,null)):(ua(a,e,"encType",i.encType,i,null),ua(a,e,"method",i.method,i,null),ua(a,e,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){a.removeAttribute(n);break}t=Ki(""+t),a.setAttribute(n,t);break;case"onClick":t!=null&&(a.onclick=_l);break;case"onScroll":t!=null&&F("scroll",a);break;case"onScrollEnd":t!=null&&F("scrollend",a);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(n=t.__html,n!=null){if(i.children!=null)throw Error(s(60));a.innerHTML=n}}break;case"multiple":a.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":a.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){a.removeAttribute("xlink:href");break}n=Ki(""+t),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(n,""+t):a.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(n,""):a.removeAttribute(n);break;case"capture":case"download":t===!0?a.setAttribute(n,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(n,t):a.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?a.setAttribute(n,t):a.removeAttribute(n);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?a.removeAttribute(n):a.setAttribute(n,t);break;case"popover":F("beforetoggle",a),F("toggle",a),Ni(a,"popover",t);break;case"xlinkActuate":Ee(a,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Ee(a,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Ee(a,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Ee(a,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Ee(a,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Ee(a,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Ee(a,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Ee(a,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Ee(a,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ni(a,"is",t);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=og.get(n)||n,Ni(a,n,t))}}function Yr(a,e,n,t,i,l){switch(n){case"style":Ls(a,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(n=t.__html,n!=null){if(i.children!=null)throw Error(s(60));a.innerHTML=n}}break;case"children":typeof t=="string"?Zn(a,t):(typeof t=="number"||typeof t=="bigint")&&Zn(a,""+t);break;case"onScroll":t!=null&&F("scroll",a);break;case"onScrollEnd":t!=null&&F("scrollend",a);break;case"onClick":t!=null&&(a.onclick=_l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_s.hasOwnProperty(n))a:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),l=a[Ga]||null,l=l!=null?l[n]:null,typeof l=="function"&&a.removeEventListener(e,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(n in a?a[n]=null:a.hasAttribute(n)&&a.removeAttribute(n)),a.addEventListener(e,t,i);break a}n in a?a[n]=t:t===!0?a.setAttribute(n,""):Ni(a,n,t)}}}function Na(a,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",a),F("load",a);var t=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var u=n[l];if(u!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:ua(a,e,l,u,n,null)}}i&&ua(a,e,"srcSet",n.srcSet,n,null),t&&ua(a,e,"src",n.src,n,null);return;case"input":F("invalid",a);var r=l=u=i=null,o=null,h=null;for(t in n)if(n.hasOwnProperty(t)){var T=n[t];if(T!=null)switch(t){case"name":i=T;break;case"type":u=T;break;case"checked":o=T;break;case"defaultChecked":h=T;break;case"value":l=T;break;case"defaultValue":r=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,e));break;default:ua(a,e,t,T,n,null)}}Us(a,l,r,o,h,u,i,!1),zi(a);return;case"select":F("invalid",a),t=u=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":u=r;break;case"multiple":t=r;default:ua(a,e,i,r,n,null)}e=l,n=u,a.multiple=!!t,e!=null?Xn(a,!!t,e,!1):n!=null&&Xn(a,!!t,n,!0);return;case"textarea":F("invalid",a),l=i=t=null;for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case"value":t=r;break;case"defaultValue":i=r;break;case"children":l=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:ua(a,e,u,r,n,null)}Bs(a,t,i,l),zi(a);return;case"option":for(o in n)n.hasOwnProperty(o)&&(t=n[o],t!=null)&&(o==="selected"?a.selected=t&&typeof t!="function"&&typeof t!="symbol":ua(a,e,o,t,n,null));return;case"dialog":F("beforetoggle",a),F("toggle",a),F("cancel",a),F("close",a);break;case"iframe":case"object":F("load",a);break;case"video":case"audio":for(t=0;t<gi.length;t++)F(gi[t],a);break;case"image":F("error",a),F("load",a);break;case"details":F("toggle",a);break;case"embed":case"source":case"link":F("error",a),F("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(t=n[h],t!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:ua(a,e,h,t,n,null)}return;default:if(lu(e)){for(T in n)n.hasOwnProperty(T)&&(t=n[T],t!==void 0&&Yr(a,e,T,t,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(t=n[r],t!=null&&ua(a,e,r,t,n,null))}function Uf(a,e,n,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,u=null,r=null,o=null,h=null,T=null;for(v in n){var j=n[v];if(n.hasOwnProperty(v)&&j!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=j;default:t.hasOwnProperty(v)||ua(a,e,v,null,t,j)}}for(var y in t){var v=t[y];if(j=n[y],t.hasOwnProperty(y)&&(v!=null||j!=null))switch(y){case"type":l=v;break;case"name":i=v;break;case"checked":h=v;break;case"defaultChecked":T=v;break;case"value":u=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,e));break;default:v!==j&&ua(a,e,y,v,t,j)}}tu(a,u,r,o,h,T,l,i);return;case"select":v=u=r=y=null;for(l in n)if(o=n[l],n.hasOwnProperty(l)&&o!=null)switch(l){case"value":break;case"multiple":v=o;default:t.hasOwnProperty(l)||ua(a,e,l,null,t,o)}for(i in t)if(l=t[i],o=n[i],t.hasOwnProperty(i)&&(l!=null||o!=null))switch(i){case"value":y=l;break;case"defaultValue":r=l;break;case"multiple":u=l;default:l!==o&&ua(a,e,i,l,t,o)}e=r,n=u,t=v,y!=null?Xn(a,!!n,y,!1):!!t!=!!n&&(e!=null?Xn(a,!!n,e,!0):Xn(a,!!n,n?[]:"",!1));return;case"textarea":v=y=null;for(r in n)if(i=n[r],n.hasOwnProperty(r)&&i!=null&&!t.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ua(a,e,r,null,t,i)}for(u in t)if(i=t[u],l=n[u],t.hasOwnProperty(u)&&(i!=null||l!=null))switch(u){case"value":y=i;break;case"defaultValue":v=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&ua(a,e,u,i,t,l)}Ks(a,y,v);return;case"option":for(var Y in n)y=n[Y],n.hasOwnProperty(Y)&&y!=null&&!t.hasOwnProperty(Y)&&(Y==="selected"?a.selected=!1:ua(a,e,Y,null,t,y));for(o in t)y=t[o],v=n[o],t.hasOwnProperty(o)&&y!==v&&(y!=null||v!=null)&&(o==="selected"?a.selected=y&&typeof y!="function"&&typeof y!="symbol":ua(a,e,o,y,t,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in n)y=n[L],n.hasOwnProperty(L)&&y!=null&&!t.hasOwnProperty(L)&&ua(a,e,L,null,t,y);for(h in t)if(y=t[h],v=n[h],t.hasOwnProperty(h)&&y!==v&&(y!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(137,e));break;default:ua(a,e,h,y,t,v)}return;default:if(lu(e)){for(var ra in n)y=n[ra],n.hasOwnProperty(ra)&&y!==void 0&&!t.hasOwnProperty(ra)&&Yr(a,e,ra,void 0,t,y);for(T in t)y=t[T],v=n[T],!t.hasOwnProperty(T)||y===v||y===void 0&&v===void 0||Yr(a,e,T,y,t,v);return}}for(var f in n)y=n[f],n.hasOwnProperty(f)&&y!=null&&!t.hasOwnProperty(f)&&ua(a,e,f,null,t,y);for(j in t)y=t[j],v=n[j],!t.hasOwnProperty(j)||y===v||y==null&&v==null||ua(a,e,j,y,t,v)}var wr=null,Qr=null;function Dl(a){return a.nodeType===9?a:a.ownerDocument}function Lc(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vc(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function Xr(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zr=null;function Kf(){var a=window.event;return a&&a.type==="popstate"?a===Zr?!1:(Zr=a,!0):(Zr=null,!1)}var qc=typeof setTimeout=="function"?setTimeout:void 0,Bf=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(a){return Gc.resolve(null).then(a).catch(Lf)}:qc;function Lf(a){setTimeout(function(){throw a})}function mn(a){return a==="head"}function Yc(a,e){var n=e,t=0,i=0;do{var l=n.nextSibling;if(a.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<t&&8>t){n=t;var u=a.ownerDocument;if(n&1&&ki(u.documentElement),n&2&&ki(u.body),n&4)for(n=u.head,ki(n),u=n.firstChild;u;){var r=u.nextSibling,o=u.nodeName;u[Et]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=r}}if(i===0){a.removeChild(l),Mi(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:t=n.charCodeAt(0)-48;else t=0;n=l}while(n);Mi(e)}function Jr(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jr(n),$l(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}a.removeChild(n)}}function Vf(a,e,n,t){for(;a.nodeType===1;){var i=n;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(t){if(!a[Et])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(l=a.getAttribute("rel"),l==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(l!==i.rel||a.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||a.getAttribute("title")!==(i.title==null?null:i.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(l=a.getAttribute("src"),(l!==(i.src==null?null:i.src)||a.getAttribute("type")!==(i.type==null?null:i.type)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&a.getAttribute("name")===l)return a}else return a;if(a=be(a.nextSibling),a===null)break}return null}function qf(a,e,n){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!n||(a=be(a.nextSibling),a===null))return null;return a}function Pr(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState==="complete"}function Gf(a,e){var n=a.ownerDocument;if(a.data!=="$?"||n.readyState==="complete")e();else{var t=function(){e(),n.removeEventListener("DOMContentLoaded",t)};n.addEventListener("DOMContentLoaded",t),a._reactRetry=t}}function be(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return a}var Fr=null;function wc(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return a;e--}else n==="/$"&&e++}a=a.previousSibling}return null}function Qc(a,e,n){switch(e=Dl(n),a){case"html":if(a=e.documentElement,!a)throw Error(s(452));return a;case"head":if(a=e.head,!a)throw Error(s(453));return a;case"body":if(a=e.body,!a)throw Error(s(454));return a;default:throw Error(s(451))}}function ki(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);$l(a)}var fe=new Map,Xc=new Set;function El(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var we=O.d;O.d={f:Yf,r:wf,D:Qf,C:Xf,L:Zf,m:Jf,X:Ff,S:Pf,M:Wf};function Yf(){var a=we.f(),e=Sl();return a||e}function wf(a){var e=Gn(a);e!==null&&e.tag===5&&e.type==="form"?md(e):we.r(a)}var Tt=typeof document>"u"?null:document;function Zc(a,e,n){var t=Tt;if(t&&typeof e=="string"&&e){var i=re(e);i='link[rel="'+a+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Xc.has(i)||(Xc.add(i),a={rel:a,crossOrigin:n,href:e},t.querySelector(i)===null&&(e=t.createElement("link"),Na(e,"link",a),ja(e),t.head.appendChild(e)))}}function Qf(a){we.D(a),Zc("dns-prefetch",a,null)}function Xf(a,e){we.C(a,e),Zc("preconnect",a,e)}function Zf(a,e,n){we.L(a,e,n);var t=Tt;if(t&&a&&e){var i='link[rel="preload"][as="'+re(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+re(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+re(n.imageSizes)+'"]')):i+='[href="'+re(a)+'"]';var l=i;switch(e){case"style":l=Mt(a);break;case"script":l=xt(a)}fe.has(l)||(a=E({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:a,as:e},n),fe.set(l,a),t.querySelector(i)!==null||e==="style"&&t.querySelector(hi(l))||e==="script"&&t.querySelector(pi(l))||(e=t.createElement("link"),Na(e,"link",a),ja(e),t.head.appendChild(e)))}}function Jf(a,e){we.m(a,e);var n=Tt;if(n&&a){var t=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+re(t)+'"][href="'+re(a)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=xt(a)}if(!fe.has(l)&&(a=E({rel:"modulepreload",href:a},e),fe.set(l,a),n.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(pi(l)))return}t=n.createElement("link"),Na(t,"link",a),ja(t),n.head.appendChild(t)}}}function Pf(a,e,n){we.S(a,e,n);var t=Tt;if(t&&a){var i=Yn(t).hoistableStyles,l=Mt(a);e=e||"default";var u=i.get(l);if(!u){var r={loading:0,preload:null};if(u=t.querySelector(hi(l)))r.loading=5;else{a=E({rel:"stylesheet",href:a,"data-precedence":e},n),(n=fe.get(l))&&Wr(a,n);var o=u=t.createElement("link");ja(o),Na(o,"link",a),o._p=new Promise(function(h,T){o.onload=h,o.onerror=T}),o.addEventListener("load",function(){r.loading|=1}),o.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Rl(u,e,t)}u={type:"stylesheet",instance:u,count:1,state:r},i.set(l,u)}}}function Ff(a,e){we.X(a,e);var n=Tt;if(n&&a){var t=Yn(n).hoistableScripts,i=xt(a),l=t.get(i);l||(l=n.querySelector(pi(i)),l||(a=E({src:a,async:!0},e),(e=fe.get(i))&&Ir(a,e),l=n.createElement("script"),ja(l),Na(l,"link",a),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function Wf(a,e){we.M(a,e);var n=Tt;if(n&&a){var t=Yn(n).hoistableScripts,i=xt(a),l=t.get(i);l||(l=n.querySelector(pi(i)),l||(a=E({src:a,async:!0,type:"module"},e),(e=fe.get(i))&&Ir(a,e),l=n.createElement("script"),ja(l),Na(l,"link",a),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function Jc(a,e,n,t){var i=(i=Q.current)?El(i):null;if(!i)throw Error(s(446));switch(a){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Mt(n.href),n=Yn(i).hoistableStyles,t=n.get(e),t||(t={type:"style",instance:null,count:0,state:null},n.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){a=Mt(n.href);var l=Yn(i).hoistableStyles,u=l.get(a);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(a,u),(l=i.querySelector(hi(a)))&&!l._p&&(u.instance=l,u.state.loading=5),fe.has(a)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},fe.set(a,n),l||If(i,a,n,u.state))),e&&t===null)throw Error(s(528,""));return u}if(e&&t!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=xt(n),n=Yn(i).hoistableScripts,t=n.get(e),t||(t={type:"script",instance:null,count:0,state:null},n.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,a))}}function Mt(a){return'href="'+re(a)+'"'}function hi(a){return'link[rel="stylesheet"]['+a+"]"}function Pc(a){return E({},a,{"data-precedence":a.precedence,precedence:null})}function If(a,e,n,t){a.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=a.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Na(e,"link",n),ja(e),a.head.appendChild(e))}function xt(a){return'[src="'+re(a)+'"]'}function pi(a){return"script[async]"+a}function Fc(a,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var t=a.querySelector('style[data-href~="'+re(n.href)+'"]');if(t)return e.instance=t,ja(t),t;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return t=(a.ownerDocument||a).createElement("style"),ja(t),Na(t,"style",i),Rl(t,n.precedence,a),e.instance=t;case"stylesheet":i=Mt(n.href);var l=a.querySelector(hi(i));if(l)return e.state.loading|=4,e.instance=l,ja(l),l;t=Pc(n),(i=fe.get(i))&&Wr(t,i),l=(a.ownerDocument||a).createElement("link"),ja(l);var u=l;return u._p=new Promise(function(r,o){u.onload=r,u.onerror=o}),Na(l,"link",t),e.state.loading|=4,Rl(l,n.precedence,a),e.instance=l;case"script":return l=xt(n.src),(i=a.querySelector(pi(l)))?(e.instance=i,ja(i),i):(t=n,(i=fe.get(l))&&(t=E({},n),Ir(t,i)),a=a.ownerDocument||a,i=a.createElement("script"),ja(i),Na(i,"link",t),a.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,Rl(t,n.precedence,a));return e.instance}function Rl(a,e,n){for(var t=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,u=0;u<t.length;u++){var r=t[u];if(r.dataset.precedence===e)l=r;else if(l!==i)break}l?l.parentNode.insertBefore(a,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(a,e.firstChild))}function Wr(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function Ir(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var Nl=null;function Wc(a,e,n){if(Nl===null){var t=new Map,i=Nl=new Map;i.set(n,t)}else i=Nl,t=i.get(n),t||(t=new Map,i.set(n,t));if(t.has(a))return t;for(t.set(a,null),n=n.getElementsByTagName(a),i=0;i<n.length;i++){var l=n[i];if(!(l[Et]||l[Ba]||a==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var u=l.getAttribute(e)||"";u=a+u;var r=t.get(u);r?r.push(l):t.set(u,[l])}}return t}function Ic(a,e,n){a=a.ownerDocument||a,a.head.insertBefore(n,e==="title"?a.querySelector("head > title"):null)}function $f(a,e,n){if(n===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(a=e.disabled,typeof e.precedence=="string"&&a==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function $c(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}var bi=null;function ak(){}function ek(a,e,n){if(bi===null)throw Error(s(475));var t=bi;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Mt(n.href),l=a.querySelector(hi(i));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Ol.bind(t),a.then(t,t)),e.state.loading|=4,e.instance=l,ja(l);return}l=a.ownerDocument||a,n=Pc(n),(i=fe.get(i))&&Wr(n,i),l=l.createElement("link"),ja(l);var u=l;u._p=new Promise(function(r,o){u.onload=r,u.onerror=o}),Na(l,"link",n),e.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Ol.bind(t),a.addEventListener("load",e),a.addEventListener("error",e))}}function nk(){if(bi===null)throw Error(s(475));var a=bi;return a.stylesheets&&a.count===0&&$r(a,a.stylesheets),0<a.count?function(e){var n=setTimeout(function(){if(a.stylesheets&&$r(a,a.stylesheets),a.unsuspend){var t=a.unsuspend;a.unsuspend=null,t()}},6e4);return a.unsuspend=e,function(){a.unsuspend=null,clearTimeout(n)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)$r(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var zl=null;function $r(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,zl=new Map,e.forEach(tk,a),zl=null,Ol.call(a))}function tk(a,e){if(!(e.state.loading&4)){var n=zl.get(a);if(n)var t=n.get(null);else{n=new Map,zl.set(a,n);for(var i=a.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var u=i[l];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),t=u)}t&&n.set(null,t)}i=e.instance,u=i.getAttribute("data-precedence"),l=n.get(u)||t,l===t&&n.set(null,i),n.set(u,i),this.count++,t=Ol.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(i,a.firstChild)),e.state.loading|=4}}var yi={$$typeof:za,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function ik(a,e,n,t,i,l,u,r){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.hiddenUpdates=Pl(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function am(a,e,n,t,i,l,u,r,o,h,T,j){return a=new ik(a,e,n,u,r,o,h,j),e=1,l===!0&&(e|=24),l=ae(3,null,null,e),a.current=l,l.stateNode=a,e=zu(),e.refCount++,a.pooledCache=e,e.refCount++,l.memoizedState={element:t,isDehydrated:n,cache:e},Hu(l),a}function em(a){return a?(a=et,a):et}function nm(a,e,n,t,i,l){i=em(i),t.context===null?t.context=i:t.pendingContext=i,t=Ie(e),t.payload={element:n},l=l===void 0?null:l,l!==null&&(t.callback=l),n=$e(a,t,e),n!==null&&(le(n,a,e),Pt(n,a,e))}function tm(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<e?n:e}}function as(a,e){tm(a,e),(a=a.alternate)&&tm(a,e)}function im(a){if(a.tag===13){var e=at(a,67108864);e!==null&&le(e,a,67108864),as(a,67108864)}}var Ul=!0;function lk(a,e,n,t){var i=M.T;M.T=null;var l=O.p;try{O.p=2,es(a,e,n,t)}finally{O.p=l,M.T=i}}function uk(a,e,n,t){var i=M.T;M.T=null;var l=O.p;try{O.p=8,es(a,e,n,t)}finally{O.p=l,M.T=i}}function es(a,e,n,t){if(Ul){var i=ns(t);if(i===null)Gr(a,e,t,Kl,n),um(a,t);else if(sk(i,a,e,n,t))t.stopPropagation();else if(um(a,t),e&4&&-1<rk.indexOf(a)){for(;i!==null;){var l=Gn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var u=Sn(l.pendingLanes);if(u!==0){var r=l;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var o=1<<31-Ia(u);r.entanglements[1]|=o,u&=~o}Ae(l),(ta&6)===0&&(yl=ve()+500,mi(0))}}break;case 13:r=at(l,2),r!==null&&le(r,l,2),Sl(),as(l,2)}if(l=ns(t),l===null&&Gr(a,e,t,Kl,n),l===i)break;i=l}i!==null&&t.stopPropagation()}else Gr(a,e,t,null,n)}}function ns(a){return a=ru(a),ts(a)}var Kl=null;function ts(a){if(Kl=null,a=qn(a),a!==null){var e=C(a);if(e===null)a=null;else{var n=e.tag;if(n===13){if(a=N(e),a!==null)return a;a=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return Kl=a,null}function lm(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qm()){case bs:return 2;case ys:return 8;case _i:case Xm:return 32;case vs:return 268435456;default:return 32}default:return 32}}var is=!1,gn=null,fn=null,kn=null,vi=new Map,Si=new Map,hn=[],rk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function um(a,e){switch(a){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":vi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(e.pointerId)}}function Ti(a,e,n,t,i,l){return a===null||a.nativeEvent!==l?(a={blockedOn:e,domEventName:n,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},e!==null&&(e=Gn(e),e!==null&&im(e)),a):(a.eventSystemFlags|=t,e=a.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),a)}function sk(a,e,n,t,i){switch(e){case"focusin":return gn=Ti(gn,a,e,n,t,i),!0;case"dragenter":return fn=Ti(fn,a,e,n,t,i),!0;case"mouseover":return kn=Ti(kn,a,e,n,t,i),!0;case"pointerover":var l=i.pointerId;return vi.set(l,Ti(vi.get(l)||null,a,e,n,t,i)),!0;case"gotpointercapture":return l=i.pointerId,Si.set(l,Ti(Si.get(l)||null,a,e,n,t,i)),!0}return!1}function rm(a){var e=qn(a.target);if(e!==null){var n=C(e);if(n!==null){if(e=n.tag,e===13){if(e=N(n),e!==null){a.blockedOn=e,ag(a.priority,function(){if(n.tag===13){var t=ie();t=Fl(t);var i=at(n,t);i!==null&&le(i,n,t),as(n,t)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Bl(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var n=ns(a.nativeEvent);if(n===null){n=a.nativeEvent;var t=new n.constructor(n.type,n);uu=t,n.target.dispatchEvent(t),uu=null}else return e=Gn(n),e!==null&&im(e),a.blockedOn=n,!1;e.shift()}return!0}function sm(a,e,n){Bl(a)&&n.delete(e)}function ok(){is=!1,gn!==null&&Bl(gn)&&(gn=null),fn!==null&&Bl(fn)&&(fn=null),kn!==null&&Bl(kn)&&(kn=null),vi.forEach(sm),Si.forEach(sm)}function Hl(a,e){a.blockedOn===e&&(a.blockedOn=null,is||(is=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ok)))}var Ll=null;function om(a){Ll!==a&&(Ll=a,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ll===a&&(Ll=null);for(var e=0;e<a.length;e+=3){var n=a[e],t=a[e+1],i=a[e+2];if(typeof t!="function"){if(ts(t||n)===null)continue;break}var l=Gn(n);l!==null&&(a.splice(e,3),e-=3,tr(l,{pending:!0,data:i,method:n.method,action:t},t,i))}}))}function Mi(a){function e(o){return Hl(o,a)}gn!==null&&Hl(gn,a),fn!==null&&Hl(fn,a),kn!==null&&Hl(kn,a),vi.forEach(e),Si.forEach(e);for(var n=0;n<hn.length;n++){var t=hn[n];t.blockedOn===a&&(t.blockedOn=null)}for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)rm(n),n.blockedOn===null&&hn.shift();if(n=(a.ownerDocument||a).$$reactFormReplay,n!=null)for(t=0;t<n.length;t+=3){var i=n[t],l=n[t+1],u=i[Ga]||null;if(typeof l=="function")u||om(n);else if(u){var r=null;if(l&&l.hasAttribute("formAction")){if(i=l,u=l[Ga]||null)r=u.formAction;else if(ts(i)!==null)continue}else r=u.action;typeof r=="function"?n[t+1]=r:(n.splice(t,3),t-=3),om(n)}}}function ls(a){this._internalRoot=a}Vl.prototype.render=ls.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,t=ie();nm(n,t,a,e,null,null)},Vl.prototype.unmount=ls.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;nm(a.current,2,null,a,null,null),Sl(),e[Vn]=null}};function Vl(a){this._internalRoot=a}Vl.prototype.unstable_scheduleHydration=function(a){if(a){var e=As();a={blockedOn:null,target:a,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,a),n===0&&rm(a)}};var dm=b.version;if(dm!=="19.1.0")throw Error(s(527,dm,"19.1.0"));O.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(s(188)):(a=Object.keys(a).join(","),Error(s(268,a)));return a=D(e),a=a!==null?p(a):null,a=a===null?null:a.stateNode,a};var dk={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Ct=ql.inject(dk),Wa=ql}catch{}}return Ai.createRoot=function(a,e){if(!S(a))throw Error(s(299));var n=!1,t="",i=jd,l=Cd,u=_d,r=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(r=e.unstable_transitionCallbacks)),e=am(a,1,!1,null,null,n,t,i,l,u,r,null),a[Vn]=e.current,qr(a),new ls(e)},Ai.hydrateRoot=function(a,e,n){if(!S(a))throw Error(s(299));var t=!1,i="",l=jd,u=Cd,r=_d,o=null,h=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(o=n.unstable_transitionCallbacks),n.formState!==void 0&&(h=n.formState)),e=am(a,1,!0,e,n??null,t,i,l,u,r,o,h),e.context=em(null),n=e.current,t=ie(),t=Fl(t),i=Ie(t),i.callback=null,$e(n,i,t),n=t,e.current.lanes=n,Dt(e,n),Ae(e),a[Vn]=e.current,qr(a),new Vl(e)},Ai.version="19.1.0",Ai}var vm;function Tk(){if(vm)return rs.exports;vm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(b){console.error(b)}}return c(),rs.exports=Sk(),rs.exports}var Mk=Tk();function xk(c,b){if(c instanceof RegExp)return{keys:!1,pattern:c};var x,s,S,C,N=[],V="",D=c.split("/");for(D[0]||D.shift();S=D.shift();)x=S[0],x==="*"?(N.push(x),V+=S[1]==="?"?"(?:/(.*))?":"/(.*)"):x===":"?(s=S.indexOf("?",1),C=S.indexOf(".",1),N.push(S.substring(1,~s?s:~C?C:S.length)),V+=~s&&!~C?"(?:/([^/]+?))?":"/([^/]+?)",~C&&(V+=(~s?"?":"")+"\\"+S.substring(C))):V+="/"+S;return{keys:N,pattern:new RegExp("^"+V+(b?"(?=$|/)":"/?$"),"i")}}var na=Yl();const Ak=gk(na),jk=mk({__proto__:null,default:Ak},[na]);var ms={exports:{}},gs={};var Sm;function Ck(){if(Sm)return gs;Sm=1;var c=Yl();function b(B,w){return B===w&&(B!==0||1/B===1/w)||B!==B&&w!==w}var x=typeof Object.is=="function"?Object.is:b,s=c.useState,S=c.useEffect,C=c.useLayoutEffect,N=c.useDebugValue;function V(B,w){var da=w(),ma=s({inst:{value:da,getSnapshot:w}}),ga=ma[0].inst,ya=ma[1];return C(function(){ga.value=da,ga.getSnapshot=w,D(ga)&&ya({inst:ga})},[B,da,w]),S(function(){return D(ga)&&ya({inst:ga}),B(function(){D(ga)&&ya({inst:ga})})},[B]),N(da),da}function D(B){var w=B.getSnapshot;B=B.value;try{var da=w();return!x(B,da)}catch{return!0}}function p(B,w){return w()}var E=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:V;return gs.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:E,gs}var Tm;function _k(){return Tm||(Tm=1,ms.exports=Ck()),ms.exports}var Dk=_k();const Ek=jk.useInsertionEffect,Rk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nk=Rk?na.useLayoutEffect:na.useEffect,Ok=Ek||Nk,Rm=c=>{const b=na.useRef([c,(...x)=>b[0](...x)]).current;return Ok(()=>{b[0]=c}),b[1]},zk="popstate",hs="pushState",ps="replaceState",Uk="hashchange",Mm=[zk,hs,ps,Uk],Kk=c=>{for(const b of Mm)addEventListener(b,c);return()=>{for(const b of Mm)removeEventListener(b,c)}},Nm=(c,b)=>Dk.useSyncExternalStore(Kk,c,b),xm=()=>location.search,Bk=({ssrSearch:c}={})=>Nm(xm,c!=null?()=>c:xm),Am=()=>location.pathname,Hk=({ssrPath:c}={})=>Nm(Am,c!=null?()=>c:Am),Lk=(c,{replace:b=!1,state:x=null}={})=>history[b?ps:hs](x,"",c),Vk=(c={})=>[Hk(c),Lk],jm=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[jm]>"u"){for(const c of[hs,ps]){const b=history[c];history[c]=function(){const x=b.apply(this,arguments),s=new Event(c);return s.arguments=arguments,dispatchEvent(s),x}}Object.defineProperty(window,jm,{value:!0})}const qk=(c,b)=>b.toLowerCase().indexOf(c.toLowerCase())?"~"+b:b.slice(c.length)||"/",Om=(c="")=>c==="/"?"":c,Gk=(c,b)=>c[0]==="~"?c.slice(1):Om(b)+c,Yk=(c="",b)=>qk(ks(Om(c)),ks(b)),wk=c=>c[0]==="?"?c.slice(1):c,ks=c=>{try{return decodeURI(c)}catch{return c}},Qk=c=>ks(wk(c)),zm={hook:Vk,searchHook:Bk,parser:xk,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:c=>c,aroundNav:(c,b,x)=>c(b,x)},Um=na.createContext(zm),jt=()=>na.useContext(Um),Km={},Bm=na.createContext(Km),Xk=()=>na.useContext(Bm),wl=c=>{const[b,x]=c.hook(c);return[Yk(c.base,b),Rm((s,S)=>c.aroundNav(x,Gk(s,c.base),S))]},Zk=()=>wl(jt()),Hm=()=>{const c=jt();return Qk(c.searchHook(c))},Lm=(c,b,x,s)=>{const{pattern:S,keys:C}=b instanceof RegExp?{keys:!1,pattern:b}:c(b||"*",s),N=S.exec(x)||[],[V,...D]=N;return V!==void 0?[!0,(()=>{const p=C!==!1?Object.fromEntries(C.map((B,w)=>[B,D[w]])):N.groups;let E={...D};return p&&Object.assign(E,p),E})(),...s?[V]:[]]:[!1,null]},Vm=({children:c,...b})=>{const x=jt(),s=b.hook?zm:x;let S=s;const[C,N=b.ssrSearch??""]=b.ssrPath?.split("?")??[];C&&(b.ssrSearch=N,b.ssrPath=C),b.hrefs=b.hrefs??b.hook?.hrefs,b.searchHook=b.searchHook??b.hook?.searchHook;let V=na.useRef({}),D=V.current,p=D;for(let E in s){const B=E==="base"?s[E]+(b[E]??""):b[E]??s[E];D===p&&B!==p[E]&&(V.current=p={...p}),p[E]=B,(B!==s[E]||B!==S[E])&&(S=p)}return na.createElement(Um.Provider,{value:S,children:c})},Cm=({children:c,component:b},x)=>b?na.createElement(b,{params:x}):typeof c=="function"?c(x):c,Jk=c=>{let b=na.useRef(Km);const x=b.current;return b.current=Object.keys(c).length!==Object.keys(x).length||Object.entries(c).some(([s,S])=>S!==x[s])?c:x},bn=({path:c,nest:b,match:x,...s})=>{const S=jt(),[C]=wl(S),[N,V,D]=x??Lm(S.parser,c,C,b),p=Jk({...Xk(),...V});if(!N)return null;const E=D?na.createElement(Vm,{base:D},Cm(s,p)):Cm(s,p);return na.createElement(Bm.Provider,{value:p,children:E})},Va=na.forwardRef((c,b)=>{const x=jt(),[s,S]=wl(x),{to:C="",href:N=C,onClick:V,asChild:D,children:p,className:E,replace:B,state:w,transition:da,...ma}=c,ga=Rm(Oa=>{Oa.ctrlKey||Oa.metaKey||Oa.altKey||Oa.shiftKey||Oa.button!==0||(V?.(Oa),Oa.defaultPrevented||(Oa.preventDefault(),S(N,c)))}),ya=x.hrefs(N[0]==="~"?N.slice(1):x.base+N,x);return D&&na.isValidElement(p)?na.cloneElement(p,{onClick:ga,href:ya}):na.createElement("a",{...ma,onClick:ga,href:ya,className:E?.call?E(s===N):E,children:p,ref:b})}),qm=c=>Array.isArray(c)?c.flatMap(b=>qm(b&&b.type===na.Fragment?b.props.children:b)):[c],Pk=({children:c,location:b})=>{const x=jt(),[s]=wl(x);for(const S of qm(c)){let C=0;if(na.isValidElement(S)&&(C=Lm(x.parser,S.props.path,b||s,S.props.nest))[0])return na.cloneElement(S,{match:C})}return null};const Fk=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wk=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(b,x,s)=>s?s.toUpperCase():x.toLowerCase()),_m=c=>{const b=Wk(c);return b.charAt(0).toUpperCase()+b.slice(1)},Gm=(...c)=>c.filter((b,x,s)=>!!b&&b.trim()!==""&&s.indexOf(b)===x).join(" ").trim(),Ik=c=>{for(const b in c)if(b.startsWith("aria-")||b==="role"||b==="title")return!0};var $k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ah=na.forwardRef(({color:c="currentColor",size:b=24,strokeWidth:x=2,absoluteStrokeWidth:s,className:S="",children:C,iconNode:N,...V},D)=>na.createElement("svg",{ref:D,...$k,width:b,height:b,stroke:c,strokeWidth:s?Number(x)*24/Number(b):x,className:Gm("lucide",S),...!C&&!Ik(V)&&{"aria-hidden":"true"},...V},[...N.map(([p,E])=>na.createElement(p,E)),...Array.isArray(C)?C:[C]]));const Ce=(c,b)=>{const x=na.forwardRef(({className:s,...S},C)=>na.createElement(ah,{ref:C,iconNode:b,className:Gm(`lucide-${Fk(_m(c))}`,`lucide-${c}`,s),...S}));return x.displayName=_m(c),x};const eh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nh=Ce("arrow-left",eh);const th=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ih=Ce("calendar",th);const lh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ji=Ce("clock",lh);const uh=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],rh=Ce("github",uh);const sh=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],oh=Ce("linkedin",sh);const dh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ch=Ce("mail",dh);const mh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],gh=Ce("menu",mh);const fh=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],kh=Ce("rss",fh);const hh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ph=Ce("search",hh);const bh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yh=Ce("x",bh),je={name:"Putra Adhiguna",title:"Electrical & Industrial Engineer",bio:"Seorang engineer dengan passion di bidang otomasi industri dan sistem kelistrikan. Mengubah konsep teknikal yang kompleks menjadi panduan yang bisa langsung dipraktikkan.",bio2:"Ahli di bidang sistem motor listrik, panel kontrol, pneumatik, dan PLC. Saya percaya bahwa pemahaman mendalam atas dasar-dasar teknik adalah kunci memecahkan masalah paling kompleks sekalipun.",github:"https://github.com/balenetizien",linkedin:"https://id.linkedin.com/in/putraadhiguna",email:"mailto:jagoanpapih2@gmail.com"},Dm=[{href:"/",label:"Beranda"},{href:"/about",label:"Tentang"},{href:"/kategori",label:"Per Kategori"},{href:"/arsip",label:"Arsip"}];function vh({children:c}){const[b,x]=na.useState(!1),[s,S]=na.useState(""),[C,N]=na.useState(!1),[,V]=Zk();function D(p){p.preventDefault(),s.trim()&&(V(`/cari?q=${encodeURIComponent(s.trim())}`),x(!1),S(""))}return d.jsxs("div",{className:"min-h-screen flex flex-col",style:{background:"hsl(220 26% 14%)"},children:[d.jsxs("header",{style:{borderBottom:"1px solid hsl(220 15% 22%)"},className:"sticky top-0 z-50",children:[d.jsxs("div",{style:{background:"hsl(220 26% 14%)"},className:"max-w-5xl mx-auto px-4 py-3 flex items-center justify-between",children:[d.jsxs(Va,{href:"/",className:"text-white font-bold text-sm sm:text-base tracking-tight hover:no-underline",children:["ElektroTeknik"," ",d.jsx("span",{className:"font-normal text-[hsl(199_89%_48%)]",children:"— Panduan Praktis Dunia Industri"})]}),d.jsxs("nav",{className:"hidden md:flex items-center gap-1",children:[Dm.map(p=>d.jsx(Va,{href:p.href,className:"px-3 py-1.5 text-sm text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_65%)] hover:no-underline transition-colors rounded",children:p.label},p.href)),d.jsx("button",{onClick:()=>x(p=>!p),className:"ml-1 p-1.5 text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_65%)] transition-colors","aria-label":"Cari",children:d.jsx(ph,{size:16})})]}),d.jsx("button",{className:"md:hidden p-1.5 text-[hsl(215_14%_65%)]",onClick:()=>N(p=>!p),children:C?d.jsx(yh,{size:20}):d.jsx(gh,{size:20})})]}),b&&d.jsx("div",{style:{background:"hsl(220 22% 18%)",borderTop:"1px solid hsl(220 15% 22%)"},children:d.jsxs("form",{onSubmit:D,className:"max-w-5xl mx-auto px-4 py-2 flex gap-2",children:[d.jsx("input",{autoFocus:!0,value:s,onChange:p=>S(p.target.value),placeholder:"Cari artikel...",className:"flex-1 bg-transparent text-sm text-white placeholder-[hsl(215_14%_45%)] outline-none"}),d.jsx("button",{type:"submit",className:"text-xs text-[hsl(199_89%_48%)] hover:underline",children:"Cari"})]})}),C&&d.jsx("div",{style:{background:"hsl(220 22% 18%)",borderTop:"1px solid hsl(220 15% 22%)"},className:"md:hidden",children:d.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-2 flex flex-col gap-1",children:[Dm.map(p=>d.jsx(Va,{href:p.href,onClick:()=>N(!1),className:"py-2 text-sm text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_65%)] hover:no-underline",children:p.label},p.href)),d.jsxs("form",{onSubmit:D,className:"flex gap-2 pt-2 pb-1",children:[d.jsx("input",{value:s,onChange:p=>S(p.target.value),placeholder:"Cari artikel...",className:"flex-1 bg-transparent text-sm text-white placeholder-[hsl(215_14%_45%)] outline-none border-b border-[hsl(220_15%_28%)] pb-1"}),d.jsx("button",{type:"submit",className:"text-xs text-[hsl(199_89%_48%)]",children:"Go"})]})]})})]}),d.jsxs("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 py-8 flex flex-col md:flex-row gap-8",children:[d.jsx("div",{className:"flex-1 min-w-0",children:c}),d.jsxs("aside",{className:"w-full md:w-64 shrink-0 flex flex-col gap-6",children:[d.jsxs("div",{style:{background:"hsl(220 22% 18%)",border:"1px solid hsl(220 15% 22%)",borderRadius:"6px"},className:"p-4",children:[d.jsx("div",{className:"w-16 h-16 rounded-full bg-[hsl(199_89%_30%)] flex items-center justify-center mb-3 text-white font-bold text-2xl",children:"⚡"}),d.jsx("div",{className:"font-semibold text-[hsl(210_30%_88%)] text-sm mb-1",children:je.name}),d.jsx("div",{className:"text-xs text-[hsl(215_14%_55%)] mb-3",children:je.title}),d.jsx("p",{className:"text-xs text-[hsl(215_14%_65%)] leading-relaxed mb-2",children:je.bio}),d.jsx("p",{className:"text-xs text-[hsl(215_14%_65%)] leading-relaxed",children:je.bio2}),d.jsxs("div",{className:"mt-4 flex items-center gap-3",children:[d.jsx("a",{href:je.github,target:"_blank",rel:"noreferrer",className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"GitHub",children:d.jsx(rh,{size:16})}),d.jsx("a",{href:je.linkedin,target:"_blank",rel:"noreferrer",className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"LinkedIn",children:d.jsx(oh,{size:16})}),d.jsx("a",{href:je.email,className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"Email",children:d.jsx(ch,{size:16})}),d.jsx("a",{href:"/rss.xml",className:"text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] transition-colors","aria-label":"RSS Feed",children:d.jsx(kh,{size:16})})]})]}),d.jsxs("div",{style:{background:"hsl(220 22% 18%)",border:"1px solid hsl(220 15% 22%)",borderRadius:"6px"},className:"p-4",children:[d.jsx("div",{className:"text-xs font-semibold text-[hsl(210_30%_75%)] uppercase tracking-wider mb-3",children:"Kategori"}),d.jsx("div",{className:"flex flex-col gap-1",children:[["Motor 3 Phase","2"],["Motor Industri","7"],["Rangkaian Listrik","7"],["Motor 1 Phase","1"],["Pneumatik","1"]].map(([p,E])=>d.jsxs(Va,{href:`/kategori?k=${encodeURIComponent(p)}`,className:"flex justify-between text-xs text-[hsl(215_14%_65%)] hover:text-[hsl(199_89%_60%)] hover:no-underline py-0.5 transition-colors",children:[d.jsx("span",{children:p}),d.jsx("span",{className:"text-[hsl(215_14%_45%)]",children:E})]},p))})]}),d.jsxs("div",{style:{background:"hsl(220 22% 18%)",border:"1px solid hsl(220 15% 22%)",borderRadius:"6px"},className:"p-4",children:[d.jsx("div",{className:"text-xs font-semibold text-[hsl(210_30%_75%)] uppercase tracking-wider mb-3",children:"Tag Populer"}),d.jsx("div",{className:"flex flex-wrap gap-1.5",children:["motor induksi","star-delta","VFD","kontaktor","PLC","pneumatik","troubleshooting","nameplate","rangkaian kontrol","silinder","IE3","hukum ohm"].map(p=>d.jsx(Va,{href:`/cari?q=${encodeURIComponent(p)}`,className:"tag-badge hover:no-underline",children:p},p))})]})]})]}),d.jsx("footer",{style:{borderTop:"1px solid hsl(220 15% 22%)"},className:"py-6",children:d.jsxs("div",{className:"max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[hsl(215_14%_45%)]",children:[d.jsxs("div",{children:["IKUTI:"," ",d.jsx("a",{href:je.github,target:"_blank",rel:"noreferrer",className:"hover:text-[hsl(199_89%_60%)]",children:"GITHUB"})," ","—"," ",d.jsx("a",{href:je.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-[hsl(199_89%_60%)]",children:"LINKEDIN"})," ","—"," ",d.jsx("a",{href:je.email,className:"hover:text-[hsl(199_89%_60%)]",children:"EMAIL"})]}),d.jsxs("div",{children:["© ",new Date().getFullYear()," ElektroTeknik. Dibuat dengan sepenuh hati."]})]})})]})}const Qe=[{slug:"pengantar-motor-induksi-3-phase",title:"Pengantar Motor Induksi 3 Phase: Cara Kerja dan Aplikasinya di Industri",date:"2026-04-10",readTime:"8 menit",category:"Motor 3 Phase",tags:["motor induksi","3 phase","industri","dasar"],excerpt:"Motor induksi 3 phase adalah tulang punggung dunia industri modern. Artikel ini membahas prinsip kerja, konstruksi, dan penerapannya secara mendalam.",content:`
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
    `}],Sh=[...new Set(Qe.map(c=>c.category))];function Th(c){return Qe.filter(b=>b.category===c)}function Mh(c){return Qe.find(b=>b.slug===c)}function At(c){return new Date(c).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}const fs=5;function xh(){const[c,b]=na.useState(1),x=[...Qe].sort((C,N)=>N.date.localeCompare(C.date)),s=Math.ceil(x.length/fs),S=x.slice((c-1)*fs,c*fs);return d.jsxs("div",{children:[d.jsx("h2",{className:"text-xs font-semibold text-[hsl(215_14%_55%)] uppercase tracking-widest mb-5",children:"Artikel Terbaru"}),d.jsx("div",{className:"flex flex-col gap-8",children:S.map(C=>d.jsxs("article",{style:{borderBottom:"1px solid hsl(220 15% 22%)"},className:"pb-7",children:[d.jsx("div",{className:"flex items-center gap-2 mb-2",children:d.jsx("span",{className:"tag-badge",children:C.category})}),d.jsx(Va,{href:`/artikel/${C.slug}`,className:"block group hover:no-underline",children:d.jsx("h3",{className:"text-[hsl(210_30%_88%)] font-semibold text-base sm:text-lg leading-snug group-hover:text-[hsl(199_89%_60%)] transition-colors mb-2",children:C.title})}),d.jsxs("div",{className:"flex items-center gap-3 text-xs text-[hsl(215_14%_50%)] mb-3",children:[d.jsx(ji,{size:11}),d.jsx("span",{children:C.readTime}),d.jsx("span",{children:"·"}),d.jsx("span",{children:At(C.date)})]}),d.jsx("p",{className:"text-sm text-[hsl(215_14%_62%)] leading-relaxed",children:C.excerpt}),d.jsx("div",{className:"mt-3 flex flex-wrap gap-1",children:C.tags.slice(0,4).map(N=>d.jsx(Va,{href:`/cari?q=${encodeURIComponent(N)}`,className:"tag-badge hover:no-underline",children:N},N))})]},C.slug))}),s>1&&d.jsxs("div",{className:"flex items-center gap-2 mt-8",children:[d.jsx("button",{onClick:()=>b(C=>Math.max(1,C-1)),disabled:c===1,className:"px-3 py-1.5 text-xs border border-[hsl(220_15%_25%)] rounded text-[hsl(215_14%_60%)] disabled:opacity-40 hover:border-[hsl(199_89%_40%)] hover:text-[hsl(199_89%_60%)] transition-colors",children:"← Sebelumnya"}),Array.from({length:s},(C,N)=>N+1).map(C=>d.jsx("button",{onClick:()=>b(C),className:`w-8 h-8 text-xs rounded border transition-colors ${C===c?"border-[hsl(199_89%_48%)] text-[hsl(199_89%_60%)] bg-[hsl(199_89%_10%)]":"border-[hsl(220_15%_25%)] text-[hsl(215_14%_60%)] hover:border-[hsl(199_89%_40%)]"}`,children:C},C)),d.jsx("button",{onClick:()=>b(C=>Math.min(s,C+1)),disabled:c===s,className:"px-3 py-1.5 text-xs border border-[hsl(220_15%_25%)] rounded text-[hsl(215_14%_60%)] disabled:opacity-40 hover:border-[hsl(199_89%_40%)] hover:text-[hsl(199_89%_60%)] transition-colors",children:"Berikutnya →"})]})]})}function Em(){return d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-6",children:"Tentang ElektroTeknik"}),d.jsxs("div",{className:"prose-blog",children:[d.jsxs("p",{children:["Selamat datang di ",d.jsx("strong",{children:"ElektroTeknik"})," — blog teknikal yang berfokus pada dunia kelistrikan industri, sistem motor, pneumatik, dan otomasi. Blog ini dibuat oleh seorang electrical engineer yang percaya bahwa dokumentasi teknikal yang baik adalah aset yang sama pentingnya dengan skill lapangan itu sendiri."]}),d.jsx("h2",{children:"Siapa Saya?"}),d.jsx("p",{children:"Saya adalah seorang Electrical & Industrial Engineer dengan pengalaman di bidang sistem kontrol motor, panel MCC (Motor Control Center), sistem pneumatik industri, dan PLC. Saya telah bekerja di berbagai sektor industri: manufaktur, oil & gas, dan food processing."}),d.jsxs("p",{children:["Dalam perjalanan karir, saya menyadari bahwa banyak konten teknikal yang tersedia di internet berbahasa Indonesia masih sangat dangkal — seringkali hanya mengulang definisi tanpa menjelaskan ",d.jsx("em",{children:"mengapa"})," dan ",d.jsx("em",{children:"bagaimana"})," dalam konteks praktis. Blog ini hadir untuk mengisi celah tersebut."]}),d.jsx("h2",{children:"Apa yang Akan Anda Temukan di Sini?"}),d.jsx("p",{children:"Semua konten di sini ditulis berdasarkan pengalaman nyata di lapangan, bukan hanya rangkuman buku teks. Topik yang dibahas meliputi:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Motor Listrik 1 Phase & 3 Phase"})," — prinsip kerja, konstruksi, jenis starting, troubleshooting"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Motor Industri"})," — VFD/inverter, nameplate, proteksi, pemilihan motor"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Rangkaian Kontrol"})," — ladder diagram, panel MCC, kontaktor, relay"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Pneumatik"})," — komponen sistem, wiring solenoid, troubleshooting sirkuit udara"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Dasar Kelistrikan"})," — hukum-hukum fisika yang berlaku setiap hari di lapangan"]})]}),d.jsx("h2",{children:"Filosofi Penulisan"}),d.jsx("p",{children:"Saya menulis dengan asumsi bahwa pembaca adalah teknisi atau engineer yang cerdas, bukan pemula yang perlu dipandu step-by-step untuk setiap hal kecil. Artikel di sini langsung ke inti masalah, menggunakan contoh angka nyata, dan tidak ragu membahas keterbatasan atau nuansa dari setiap pendekatan."}),d.jsxs("p",{children:["Saya percaya pada prinsip: ",d.jsx("em",{children:'"Understand the fundamentals deeply enough, and the advanced topics will take care of themselves."'})," Itulah mengapa banyak artikel di sini kembali ke fisika dan prinsip dasar, bukan hanya prosedur."]}),d.jsx("h2",{children:"Tidak Ada Jalan Pintas AI"}),d.jsx("p",{children:"Setiap kata di blog ini ditulis secara manual berdasarkan pengalaman dan pemahaman pribadi. Tidak ada konten yang di-generate secara otomatis atau sekadar menyalin-menempel. Ini adalah komitmen saya terhadap kualitas dan integritas konten."}),d.jsx("h2",{children:"Kontak"}),d.jsx("p",{children:"Jika Anda memiliki pertanyaan, koreksi, atau topik yang ingin dibahas, silakan hubungi melalui email atau LinkedIn. Saya membaca semua pesan, meski mungkin tidak selalu bisa membalas dengan cepat."})]})]})}function Ah(){const c=Hm(),x=new URLSearchParams(c).get("k")||"",s=x?Th(x):Qe;return d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:"Artikel per Kategori"}),d.jsx("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-6",children:x?`Menampilkan artikel dalam kategori: "${x}"`:"Semua kategori"}),d.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[d.jsx(Va,{href:"/kategori",className:`px-3 py-1 text-xs rounded border transition-colors hover:no-underline ${x?"border-[hsl(220_15%_25%)] text-[hsl(215_14%_60%)] hover:border-[hsl(199_89%_40%)]":"border-[hsl(199_89%_48%)] text-[hsl(199_89%_60%)] bg-[hsl(199_89%_8%)]"}`,children:"Semua"}),Sh.map(S=>d.jsx(Va,{href:`/kategori?k=${encodeURIComponent(S)}`,className:`px-3 py-1 text-xs rounded border transition-colors hover:no-underline ${x===S?"border-[hsl(199_89%_48%)] text-[hsl(199_89%_60%)] bg-[hsl(199_89%_8%)]":"border-[hsl(220_15%_25%)] text-[hsl(215_14%_60%)] hover:border-[hsl(199_89%_40%)]"}`,children:S},S))]}),d.jsx("div",{className:"flex flex-col gap-5",children:s.sort((S,C)=>C.date.localeCompare(S.date)).map(S=>d.jsxs("div",{style:{borderBottom:"1px solid hsl(220 15% 20%)"},className:"pb-5",children:[d.jsx("div",{className:"flex items-center gap-2 mb-1",children:d.jsx("span",{className:"tag-badge",children:S.category})}),d.jsx(Va,{href:`/artikel/${S.slug}`,className:"block hover:no-underline group",children:d.jsx("h3",{className:"text-[hsl(210_25%_85%)] text-sm sm:text-base font-semibold group-hover:text-[hsl(199_89%_60%)] transition-colors leading-snug",children:S.title})}),d.jsxs("div",{className:"flex items-center gap-3 text-xs text-[hsl(215_14%_50%)] mt-1.5",children:[d.jsx(ji,{size:10}),d.jsx("span",{children:S.readTime}),d.jsx("span",{children:"·"}),d.jsx("span",{children:At(S.date)})]})]},S.slug))})]})}function jh(){const c=[...Qe].sort((s,S)=>S.date.localeCompare(s.date)),b={};for(const s of c){const S=s.date.slice(0,4);b[S]||(b[S]=[]),b[S].push(s)}const x=Object.keys(b).sort((s,S)=>Number(S)-Number(s));return d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:"Arsip Artikel"}),d.jsxs("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-8",children:[Qe.length," artikel sejak pertama kali blog ini hadir."]}),d.jsx("div",{className:"flex flex-col gap-10",children:x.map(s=>d.jsxs("div",{children:[d.jsxs("h2",{className:"text-base font-semibold text-[hsl(199_89%_55%)] mb-4 pb-2",style:{borderBottom:"1px solid hsl(220 15% 22%)"},children:[s,d.jsxs("span",{className:"ml-2 text-xs font-normal text-[hsl(215_14%_50%)]",children:["(",b[s].length," artikel)"]})]}),d.jsx("div",{className:"flex flex-col gap-3",children:b[s].map(S=>d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"text-xs text-[hsl(215_14%_45%)] shrink-0 mt-0.5 w-24",children:At(S.date).split(" ").slice(0,2).join(" ")}),d.jsxs("div",{className:"flex-1",children:[d.jsx(Va,{href:`/artikel/${S.slug}`,className:"text-sm text-[hsl(210_25%_82%)] hover:text-[hsl(199_89%_60%)] leading-snug hover:no-underline",children:S.title}),d.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[d.jsx("span",{className:"text-xs text-[hsl(215_14%_45%)]",children:S.category}),d.jsx("span",{className:"text-[hsl(215_14%_35%)]",children:"·"}),d.jsxs("span",{className:"flex items-center gap-1 text-xs text-[hsl(215_14%_45%)]",children:[d.jsx(ji,{size:10})," ",S.readTime]})]})]})]},S.slug))})]},s))})]})}function Ch(){const c=Hm(),x=new URLSearchParams(c).get("q")||"",s=x?Qe.filter(S=>S.title.toLowerCase().includes(x.toLowerCase())||S.excerpt.toLowerCase().includes(x.toLowerCase())||S.tags.some(C=>C.toLowerCase().includes(x.toLowerCase()))||S.category.toLowerCase().includes(x.toLowerCase())):[];return d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-bold text-[hsl(210_30%_90%)] mb-2",children:x?`Hasil pencarian: "${x}"`:"Cari Artikel"}),x&&d.jsx("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-6",children:s.length>0?`Ditemukan ${s.length} artikel`:"Tidak ada artikel yang cocok"}),!x&&d.jsx("p",{className:"text-sm text-[hsl(215_14%_55%)] mb-6",children:"Gunakan bilah pencarian di atas untuk menemukan artikel."}),d.jsx("div",{className:"flex flex-col gap-5",children:s.map(S=>d.jsxs("div",{style:{borderBottom:"1px solid hsl(220 15% 20%)"},className:"pb-5",children:[d.jsx("div",{className:"flex items-center gap-2 mb-1",children:d.jsx("span",{className:"tag-badge",children:S.category})}),d.jsx(Va,{href:`/artikel/${S.slug}`,className:"block hover:no-underline group",children:d.jsx("h3",{className:"text-[hsl(210_25%_85%)] text-sm sm:text-base font-semibold group-hover:text-[hsl(199_89%_60%)] transition-colors leading-snug",children:S.title})}),d.jsxs("div",{className:"flex items-center gap-3 text-xs text-[hsl(215_14%_50%)] mt-1.5 mb-2",children:[d.jsx(ji,{size:10}),d.jsx("span",{children:S.readTime}),d.jsx("span",{children:"·"}),d.jsx("span",{children:At(S.date)})]}),d.jsx("p",{className:"text-sm text-[hsl(215_14%_60%)]",children:S.excerpt})]},S.slug))})]})}function _h(c){const b=c.trim().split(`
`),x=[];let s=0,S=0;function C(){return S++}for(;s<b.length;){const N=b[s];if(N.startsWith("## "))x.push(d.jsx("h2",{children:N.slice(3)},C())),s++;else if(N.startsWith("### "))x.push(d.jsx("h3",{children:N.slice(4)},C())),s++;else if(N.startsWith("**")&&N.endsWith("**"))x.push(d.jsx("p",{children:d.jsx("strong",{style:{color:"hsl(210 25% 85%)"},children:N.slice(2,-2)})},C())),s++;else if(N.startsWith("```")){const V=N.slice(3);s++;const D=[];for(;s<b.length&&!b[s].startsWith("```");)D.push(b[s]),s++;s++,x.push(d.jsxs("pre",{children:[V&&d.jsx("span",{style:{display:"block",fontSize:"0.7rem",color:"hsl(215 14% 45%)",marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:V}),d.jsx("code",{children:D.join(`
`)})]},C()))}else if(N.startsWith("| ")){const V=[];for(;s<b.length&&b[s].startsWith("| ");)V.push(b[s]),s++;const[D,,...p]=V,E=D.split("|").filter(Boolean).map(B=>B.trim());x.push(d.jsxs("table",{children:[d.jsx("thead",{children:d.jsx("tr",{children:E.map((B,w)=>d.jsx("th",{children:B},w))})}),d.jsx("tbody",{children:p.map((B,w)=>{const da=B.split("|").filter(Boolean).map(ma=>ma.trim());return d.jsx("tr",{children:da.map((ma,ga)=>d.jsx("td",{children:ma},ga))},w)})})]},C()))}else if(N.startsWith("- ")||N.startsWith("* ")){const V=[];for(;s<b.length&&(b[s].startsWith("- ")||b[s].startsWith("* "));)V.push(b[s].slice(2)),s++;x.push(d.jsx("ul",{children:V.map((D,p)=>d.jsx("li",{dangerouslySetInnerHTML:{__html:Gl(D)}},p))},C()))}else if(/^\d+\. /.test(N)){const V=[];for(;s<b.length&&/^\d+\. /.test(b[s]);)V.push(b[s].replace(/^\d+\. /,"")),s++;x.push(d.jsx("ol",{children:V.map((D,p)=>d.jsx("li",{dangerouslySetInnerHTML:{__html:Gl(D)}},p))},C()))}else N.startsWith("> ")?(x.push(d.jsx("blockquote",{children:d.jsx("span",{dangerouslySetInnerHTML:{__html:Gl(N.slice(2))}})},C())),s++):(N.trim()===""||x.push(d.jsx("p",{dangerouslySetInnerHTML:{__html:Gl(N)}},C())),s++)}return x}function Gl(c){return c.replace(/\*\*(.+?)\*\*/g,'<strong style="color:hsl(210 25% 85%)">$1</strong>').replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,"<code>$1</code>")}function Dh({slug:c}){const b=Mh(c);if(!b)return d.jsxs("div",{className:"text-center py-20",children:[d.jsx("div",{className:"text-4xl mb-4",children:"🔌"}),d.jsx("h2",{className:"text-lg font-semibold text-[hsl(210_30%_80%)] mb-2",children:"Artikel tidak ditemukan"}),d.jsx(Va,{href:"/",className:"text-sm text-[hsl(199_89%_48%)]",children:"← Kembali ke beranda"})]});const x=Qe.filter(s=>s.slug!==b.slug&&s.category===b.category).slice(0,3);return d.jsxs("div",{children:[d.jsxs(Va,{href:"/",className:"inline-flex items-center gap-1.5 text-xs text-[hsl(215_14%_55%)] hover:text-[hsl(199_89%_60%)] hover:no-underline mb-6 transition-colors",children:[d.jsx(nh,{size:12})," Kembali"]}),d.jsx("div",{className:"mb-2 flex items-center gap-2",children:d.jsx("span",{className:"tag-badge",children:b.category})}),d.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-[hsl(210_30%_90%)] leading-snug mb-4",children:b.title}),d.jsxs("div",{className:"flex items-center gap-4 text-xs text-[hsl(215_14%_50%)] mb-6 pb-6",style:{borderBottom:"1px solid hsl(220 15% 22%)"},children:[d.jsxs("span",{className:"flex items-center gap-1.5",children:[d.jsx(ih,{size:11})," ",At(b.date)]}),d.jsxs("span",{className:"flex items-center gap-1.5",children:[d.jsx(ji,{size:11})," ",b.readTime," baca"]})]}),d.jsx("div",{className:"prose-blog",children:_h(b.content)}),d.jsx("div",{className:"mt-8 pt-6 flex flex-wrap gap-1.5",style:{borderTop:"1px solid hsl(220 15% 22%)"},children:b.tags.map(s=>d.jsxs(Va,{href:`/cari?q=${encodeURIComponent(s)}`,className:"tag-badge hover:no-underline",children:["#",s]},s))}),x.length>0&&d.jsxs("div",{className:"mt-8 pt-6",style:{borderTop:"1px solid hsl(220 15% 22%)"},children:[d.jsx("h3",{className:"text-xs font-semibold text-[hsl(215_14%_55%)] uppercase tracking-widest mb-4",children:"Artikel Terkait"}),d.jsx("div",{className:"flex flex-col gap-3",children:x.map(s=>d.jsxs(Va,{href:`/artikel/${s.slug}`,className:"block hover:no-underline group",children:[d.jsx("div",{className:"text-sm text-[hsl(210_25%_82%)] group-hover:text-[hsl(199_89%_60%)] transition-colors leading-snug",children:s.title}),d.jsx("div",{className:"text-xs text-[hsl(215_14%_50%)] mt-0.5",children:At(s.date)})]},s.slug))})]})]})}function Eh(){return d.jsxs("div",{className:"text-center py-20",children:[d.jsx("div",{className:"text-5xl mb-4",children:"⚡"}),d.jsx("h2",{className:"text-lg font-semibold text-[hsl(210_30%_82%)] mb-2",children:"Halaman tidak ditemukan"}),d.jsx("a",{href:"/",className:"text-sm text-[hsl(199_89%_48%)]",children:"Kembali ke beranda"})]})}function Rh(){return d.jsx(vh,{children:d.jsxs(Pk,{children:[d.jsx(bn,{path:"/",component:xh}),d.jsx(bn,{path:"/about",component:Em}),d.jsx(bn,{path:"/tentang",component:Em}),d.jsx(bn,{path:"/kategori",component:Ah}),d.jsx(bn,{path:"/arsip",component:jh}),d.jsx(bn,{path:"/cari",component:Ch}),d.jsx(bn,{path:"/artikel/:slug",children:c=>d.jsx(Dh,{slug:c.slug})}),d.jsx(bn,{component:Eh})]})})}function Nh(){return d.jsx(Vm,{base:"/".replace(/\/$/,""),children:d.jsx(Rh,{})})}Mk.createRoot(document.getElementById("root")).render(d.jsx(Nh,{}));
