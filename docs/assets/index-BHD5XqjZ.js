(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var td={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function bS(){if(Cg)return Po;Cg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var wg;function TS(){return wg||(wg=1,td.exports=bS()),td.exports}var ne=TS(),nd={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function AS(){if(Dg)return at;Dg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,M={};function S(N,K,Se){this.props=N,this.context=K,this.refs=M,this.updater=Se||A}S.prototype.isReactComponent={},S.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=S.prototype;function P(N,K,Se){this.props=N,this.context=K,this.refs=M,this.updater=Se||A}var L=P.prototype=new w;L.constructor=P,U(L,S.prototype),L.isPureReactComponent=!0;var k=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function z(N,K,Se){var Ae=Se.ref;return{$$typeof:r,type:N,key:K,ref:Ae!==void 0?Ae:null,props:Se}}function Z(N,K){return z(N.type,K,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Y(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return K[Se]})}var ue=/\/+/g;function me(N,K){return typeof N=="object"&&N!==null&&N.key!=null?Y(""+N.key):K.toString(36)}function W(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function D(N,K,Se,Ae,De){var oe=typeof N;(oe==="undefined"||oe==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(oe){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case r:case t:Me=!0;break;case x:return Me=N._init,D(Me(N._payload),K,Se,Ae,De)}}if(Me)return De=De(N),Me=Ae===""?"."+me(N,0):Ae,k(De)?(Se="",Me!=null&&(Se=Me.replace(ue,"$&/")+"/"),D(De,K,Se,"",function($e){return $e})):De!=null&&(H(De)&&(De=Z(De,Se+(De.key==null||N&&N.key===De.key?"":(""+De.key).replace(ue,"$&/")+"/")+Me)),K.push(De)),1;Me=0;var be=Ae===""?".":Ae+":";if(k(N))for(var He=0;He<N.length;He++)Ae=N[He],oe=be+me(Ae,He),Me+=D(Ae,K,Se,oe,De);else if(He=y(N),typeof He=="function")for(N=He.call(N),He=0;!(Ae=N.next()).done;)Ae=Ae.value,oe=be+me(Ae,He++),Me+=D(Ae,K,Se,oe,De);else if(oe==="object"){if(typeof N.then=="function")return D(W(N),K,Se,Ae,De);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Me}function F(N,K,Se){if(N==null)return N;var Ae=[],De=0;return D(N,Ae,"","",function(oe){return K.call(Se,oe,De++)}),Ae}function ie(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xe={map:F,forEach:function(N,K,Se){F(N,function(){K.apply(this,arguments)},Se)},count:function(N){var K=0;return F(N,function(){K++}),K},toArray:function(N){return F(N,function(K){return K})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return at.Activity=v,at.Children=xe,at.Component=S,at.Fragment=i,at.Profiler=l,at.PureComponent=P,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,at.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},at.cache=function(N){return function(){return N.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(N,K,Se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=U({},N.props),De=N.key;if(K!=null)for(oe in K.key!==void 0&&(De=""+K.key),K)!b.call(K,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&K.ref===void 0||(Ae[oe]=K[oe]);var oe=arguments.length-2;if(oe===1)Ae.children=Se;else if(1<oe){for(var Me=Array(oe),be=0;be<oe;be++)Me[be]=arguments[be+2];Ae.children=Me}return z(N.type,De,Ae)},at.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},at.createElement=function(N,K,Se){var Ae,De={},oe=null;if(K!=null)for(Ae in K.key!==void 0&&(oe=""+K.key),K)b.call(K,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=K[Ae]);var Me=arguments.length-2;if(Me===1)De.children=Se;else if(1<Me){for(var be=Array(Me),He=0;He<Me;He++)be[He]=arguments[He+2];De.children=be}if(N&&N.defaultProps)for(Ae in Me=N.defaultProps,Me)De[Ae]===void 0&&(De[Ae]=Me[Ae]);return z(N,oe,De)},at.createRef=function(){return{current:null}},at.forwardRef=function(N){return{$$typeof:h,render:N}},at.isValidElement=H,at.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:ie}},at.memo=function(N,K){return{$$typeof:p,type:N,compare:K===void 0?null:K}},at.startTransition=function(N){var K=B.T,Se={};B.T=Se;try{var Ae=N(),De=B.S;De!==null&&De(Se,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,pe)}catch(oe){pe(oe)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),B.T=K}},at.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},at.use=function(N){return B.H.use(N)},at.useActionState=function(N,K,Se){return B.H.useActionState(N,K,Se)},at.useCallback=function(N,K){return B.H.useCallback(N,K)},at.useContext=function(N){return B.H.useContext(N)},at.useDebugValue=function(){},at.useDeferredValue=function(N,K){return B.H.useDeferredValue(N,K)},at.useEffect=function(N,K){return B.H.useEffect(N,K)},at.useEffectEvent=function(N){return B.H.useEffectEvent(N)},at.useId=function(){return B.H.useId()},at.useImperativeHandle=function(N,K,Se){return B.H.useImperativeHandle(N,K,Se)},at.useInsertionEffect=function(N,K){return B.H.useInsertionEffect(N,K)},at.useLayoutEffect=function(N,K){return B.H.useLayoutEffect(N,K)},at.useMemo=function(N,K){return B.H.useMemo(N,K)},at.useOptimistic=function(N,K){return B.H.useOptimistic(N,K)},at.useReducer=function(N,K,Se){return B.H.useReducer(N,K,Se)},at.useRef=function(N){return B.H.useRef(N)},at.useState=function(N){return B.H.useState(N)},at.useSyncExternalStore=function(N,K,Se){return B.H.useSyncExternalStore(N,K,Se)},at.useTransition=function(){return B.H.useTransition()},at.version="19.2.7",at}var Ug;function wh(){return Ug||(Ug=1,nd.exports=AS()),nd.exports}var Cn=wh(),id={exports:{}},Fo={},ad={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function RS(){return Ng||(Ng=1,(function(r){function t(D,F){var ie=D.length;D.push(F);e:for(;0<ie;){var pe=ie-1>>>1,xe=D[pe];if(0<l(xe,F))D[pe]=F,D[ie]=xe,ie=pe;else break e}}function i(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var F=D[0],ie=D.pop();if(ie!==F){D[0]=ie;e:for(var pe=0,xe=D.length,N=xe>>>1;pe<N;){var K=2*(pe+1)-1,Se=D[K],Ae=K+1,De=D[Ae];if(0>l(Se,ie))Ae<xe&&0>l(De,Se)?(D[pe]=De,D[Ae]=ie,pe=Ae):(D[pe]=Se,D[K]=ie,pe=K);else if(Ae<xe&&0>l(De,ie))D[pe]=De,D[Ae]=ie,pe=Ae;else break e}}return F}function l(D,F){var ie=D.sortIndex-F.sortIndex;return ie!==0?ie:D.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,g=3,y=!1,A=!1,U=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(D){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=D)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function k(D){if(U=!1,L(D),!A)if(i(m)!==null)A=!0,O||(O=!0,Y());else{var F=i(p);F!==null&&W(k,F.startTime-D)}}var O=!1,B=-1,b=5,z=-1;function Z(){return M?!0:!(r.unstable_now()-z<b)}function H(){if(M=!1,O){var D=r.unstable_now();z=D;var F=!0;try{e:{A=!1,U&&(U=!1,w(B),B=-1),y=!0;var ie=g;try{t:{for(L(D),v=i(m);v!==null&&!(v.expirationTime>D&&Z());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,g=v.priorityLevel;var xe=pe(v.expirationTime<=D);if(D=r.unstable_now(),typeof xe=="function"){v.callback=xe,L(D),F=!0;break t}v===i(m)&&s(m),L(D)}else s(m);v=i(m)}if(v!==null)F=!0;else{var N=i(p);N!==null&&W(k,N.startTime-D),F=!1}}break e}finally{v=null,g=ie,y=!1}F=void 0}}finally{F?Y():O=!1}}}var Y;if(typeof P=="function")Y=function(){P(H)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,me=ue.port2;ue.port1.onmessage=H,Y=function(){me.postMessage(null)}}else Y=function(){S(H,0)};function W(D,F){B=S(function(){D(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(D){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ie=g;g=F;try{return D()}finally{g=ie}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ie=g;g=D;try{return F()}finally{g=ie}},r.unstable_scheduleCallback=function(D,F,ie){var pe=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?pe+ie:pe):ie=pe,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ie+xe,D={id:x++,callback:F,priorityLevel:D,startTime:ie,expirationTime:xe,sortIndex:-1},ie>pe?(D.sortIndex=ie,t(p,D),i(m)===null&&D===i(p)&&(U?(w(B),B=-1):U=!0,W(k,ie-pe))):(D.sortIndex=xe,t(m,D),A||y||(A=!0,O||(O=!0,Y()))),D},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(D){var F=g;return function(){var ie=g;g=F;try{return D.apply(this,arguments)}finally{g=ie}}}})(sd)),sd}var Lg;function CS(){return Lg||(Lg=1,ad.exports=RS()),ad.exports}var rd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function wS(){if(Og)return Nn;Og=1;var r=wh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},Nn.flushSync=function(m){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=x,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.7",Nn}var Pg;function DS(){if(Pg)return rd.exports;Pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rd.exports=wS(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function US(){if(Fg)return Fo;Fg=1;var r=CS(),t=wh(),i=DS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,o=f;break}if(R===o){_=!0,o=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=c;break}if(R===o){_=!0,o=f,a=c;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case O:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var W=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},pe=[],xe=-1;function N(e){return{current:e}}function K(e){0>xe||(e.current=pe[xe],pe[xe]=null,xe--)}function Se(e,n){xe++,pe[xe]=e.current,e.current=n}var Ae=N(null),De=N(null),oe=N(null),Me=N(null);function be(e,n){switch(Se(oe,n),Se(De,e),Se(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Q0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Q0(n),e=J0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Ae),Se(Ae,e)}function He(){K(Ae),K(De),K(oe)}function $e(e){e.memoizedState!==null&&Se(Me,e);var n=Ae.current,a=J0(n,e.type);n!==a&&(Se(De,e),Se(Ae,a))}function Qe(e){De.current===e&&(K(Ae),K(De)),Me.current===e&&(K(Me),Uo._currentValue=ie)}var kt,ft;function _t(e){if(kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);kt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+e+ft}var Dt=!1;function lt(e,n){if(!e||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var se=le}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(le){se=le}e.call(ve.prototype)}}else{try{throw Error()}catch(le){se=le}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var I=_.split(`
`),$=R.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===$.length)for(o=I.length-1,c=$.length-1;1<=o&&0<=c&&I[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==$[c]){var de=`
`+I[o].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=o&&0<=c);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_t(a):""}function an(e,n){switch(e.tag){case 26:case 27:case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return e.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return _t("Activity");default:return""}}function qt(e){try{var n="",a=null;do n+=an(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var yn=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,$t=r.unstable_cancelCallback,dt=r.unstable_shouldYield,zt=r.unstable_requestPaint,Re=r.unstable_now,Zt=r.unstable_getCurrentPriorityLevel,C=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,_e=r.unstable_LowPriority,Ee=r.unstable_IdlePriority,Ce=r.log,Le=r.unstable_setDisableYieldValue,ce=null,fe=null;function Oe(e){if(typeof Ce=="function"&&Le(e),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ce,e)}catch{}}var Pe=Math.clz32?Math.clz32:nt,Ue=Math.log,we=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(Ue(e)/we|0)|0}var it=256,ht=262144,G=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function he(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Te(o):(_&=R,_!==0?c=Te(_):a||(a=R&~e,a!==0&&(c=Te(a))))):(R=o&~f,R!==0?c=Te(R):_!==0?c=Te(_):a||(a=o&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var e=G;return G<<=1,(G&62914560)===0&&(G=4194304),e}function qe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function et(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function en(e,n,a,o,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Pe(a),ve=1<<de;R[de]=0,I[de]=-1;var se=$[de];if(se!==null)for($[de]=null,de=0;de<se.length;de++){var le=se[de];le!==null&&(le.lane&=-536870913)}a&=~ve}o!==0&&Rt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Rt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function oi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pe(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Yn(e,n){var a=n&-n;return a=(a&42)!==0?1:os(a),(a&(e.suspendedLanes|n))!==0?0:a}function os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kr(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Mg(e.type))}function Xr(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var Dn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Dn,En="__reactProps$"+Dn,Yi="__reactContainer$"+Dn,ya="__reactEvents$"+Dn,$o="__reactListeners$"+Dn,Is="__reactHandles$"+Dn,Wr="__reactResources$"+Dn,Ea="__reactMarker$"+Dn;function qr(e){delete e[sn],delete e[En],delete e[ya],delete e[$o],delete e[Is]}function ba(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=sg(e);e!==null;){if(a=e[sn])return a;e=sg(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[sn]||e[Yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ls(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Aa(e){var n=e[Wr];return n||(n=e[Wr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Ea]=!0}var el=new Set,T={};function q(e,n){ae(e,n),ae(e+"Capture",n)}function ae(e,n){for(T[e]=n,e=0;e<n.length;e++)el.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ze={};function Ve(e){return yn.call(ze,e)?!0:yn.call(te,e)?!1:ee.test(e)?ze[e]=!0:(te[e]=!0,!1)}function Fe(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ke(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bt(e){if(!e._valueTracker){var n=rt(e)?"checked":"value";e._valueTracker=je(e,n,""+e[n])}}function Kt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=rt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Nt(e){return e.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,o,c,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ze(n)):e.value!==""+Ze(n)&&(e.value=""+Ze(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?pt(e,_,Ze(n)):a!=null?pt(e,_,Ze(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Ze(R):e.removeAttribute("name")}function Un(e,n,a,o,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bt(e);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),bt(e)}function pt(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function jn(e,n,a){if(n!=null&&(n=""+Ze(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ze(a):""}function Si(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),bt(e)}function Zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Lt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Lt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Mi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Qt(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Qt(e,f,n[f])}function wt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cs(e){return Ra.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Gs=null;function Kh(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[En]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[En]||null;if(!c)throw Error(s(90));Ge(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Kt(o)}break e;case"textarea":jn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var $c=!1;function Qh(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(Hs!==null||Gs!==null)&&(Gl(),Hs&&(n=Hs,e=Gs,Gs=Hs=null,Kh(n),e)))for(n=0;n<e.length;n++)Kh(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Zi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{eu=!1}var Ca=null,tu=null,tl=null;function Jh(){if(tl)return tl;var e,n=tu,a=n.length,o,c="value"in Ca?Ca.value:Ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===c[f-o];o++);return tl=c.slice(e,1<o?1-o:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function $h(){return!1}function Hn(e){function n(a,o,c,f,_){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:$h,this.isPropagationStopped=$h,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Hn(us),Zr=v({},us,{view:0,detail:0}),yv=Hn(Zr),nu,iu,Kr,sl=v({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(nu=e.screenX-Kr.screenX,iu=e.screenY-Kr.screenY):iu=nu=0,Kr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),ep=Hn(sl),Ev=v({},sl,{dataTransfer:0}),bv=Hn(Ev),Tv=v({},Zr,{relatedTarget:0}),au=Hn(Tv),Av=v({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Hn(Av),Cv=v({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=Hn(Cv),Dv=v({},us,{data:0}),tp=Hn(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lv[e])?!!n[e]:!1}function su(){return Ov}var Pv=v({},Zr,{key:function(e){if(e.key){var n=Uv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fv=Hn(Pv),zv=v({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Hn(zv),Bv=v({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Iv=Hn(Bv),Hv=v({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=Hn(Hv),Vv=v({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=Hn(Vv),Xv=v({},us,{newState:0,oldState:0}),Wv=Hn(Xv),qv=[9,13,27,32],ru=Zi&&"CompositionEvent"in window,Qr=null;Zi&&"documentMode"in document&&(Qr=document.documentMode);var Yv=Zi&&"TextEvent"in window&&!Qr,ip=Zi&&(!ru||Qr&&8<Qr&&11>=Qr),ap=" ",sp=!1;function rp(e,n){switch(e){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vs=!1;function jv(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(sp=!0,ap);case"textInput":return e=n.data,e===ap&&sp?null:e;default:return null}}function Zv(e,n){if(Vs)return e==="compositionend"||!ru&&rp(e,n)?(e=Jh(),tl=tu=Ca=null,Vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kv[e.type]:n==="textarea"}function cp(e,n,a,o){Hs?Gs?Gs.push(o):Gs=[o]:Hs=o,n=jl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function Qv(e){W0(e,0)}function rl(e){var n=ls(e);if(Kt(n))return e}function up(e,n){if(e==="change")return n}var fp=!1;if(Zi){var ou;if(Zi){var lu="oninput"in document;if(!lu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),lu=typeof dp.oninput=="function"}ou=lu}else ou=!1;fp=ou&&(!document.documentMode||9<document.documentMode)}function hp(){Jr&&(Jr.detachEvent("onpropertychange",pp),$r=Jr=null)}function pp(e){if(e.propertyName==="value"&&rl($r)){var n=[];cp(n,$r,e,Jc(e)),Qh(Qv,n)}}function Jv(e,n,a){e==="focusin"?(hp(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",pp)):e==="focusout"&&hp()}function $v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl($r)}function ex(e,n){if(e==="click")return rl(n)}function tx(e,n){if(e==="input"||e==="change")return rl(n)}function nx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:nx;function eo(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!yn.call(n,c)||!Kn(e[c],n[c]))return!1}return!0}function mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gp(e,n){var a=mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mp(a)}}function _p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ix=Zi&&"documentMode"in document&&11>=document.documentMode,ks=null,uu=null,to=null,fu=!1;function xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||ks==null||ks!==Xt(o)||(o=ks,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=jl(uu,"onSelect"),0<o.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ks)))}function fs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},du={},Sp={};Zi&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ds(e){if(du[e])return du[e];if(!Xs[e])return e;var n=Xs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return du[e]=n[a];return e}var Mp=ds("animationend"),yp=ds("animationiteration"),Ep=ds("animationstart"),ax=ds("transitionrun"),sx=ds("transitionstart"),rx=ds("transitioncancel"),bp=ds("transitionend"),Tp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function yi(e,n){Tp.set(e,n),q(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Ws=0,pu=0;function ll(){for(var e=Ws,n=pu=Ws=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var c=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&Ap(a,c,f)}}function cl(e,n,a,o){li[Ws++]=e,li[Ws++]=n,li[Ws++]=a,li[Ws++]=o,pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mu(e,n,a,o){return cl(e,n,a,o),ul(e)}function hs(e,n){return cl(e,null,null,n),ul(e)}function Ap(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<bo)throw bo=0,Tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qs={};function ox(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new ox(e,n,a,o)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,o,c,f){var _=0;if(o=e,typeof e=="function")gu(e)&&(_=1);else if(typeof e=="string")_=dS(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case z:return e=Qn(31,a,n,c),e.elementType=z,e.lanes=f,e;case U:return ps(a.children,c,f,n);case M:_=8,c|=24;break;case S:return e=Qn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case k:return e=Qn(13,a,n,c),e.elementType=k,e.lanes=f,e;case O:return e=Qn(19,a,n,c),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break e;case w:_=9;break e;case L:_=11;break e;case B:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(_,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ps(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function _u(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Cp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var wp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=wp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qt(n)},wp.set(e,n),n)}return{value:e,source:n,stack:qt(n)}}var Ys=[],js=0,dl=null,no=0,ui=[],fi=0,wa=null,Ui=1,Ni="";function Qi(e,n){Ys[js++]=no,Ys[js++]=dl,dl=e,no=n}function Dp(e,n,a){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=wa,wa=e;var o=Ui;e=Ni;var c=32-Pe(o)-1;o&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Ui=1<<32-Pe(n)+c|a<<c|o,Ni=f+e}else Ui=1<<f|a<<c|o,Ni=e}function xu(e){e.return!==null&&(Qi(e,1),Dp(e,1,0))}function Su(e){for(;e===dl;)dl=Ys[--js],Ys[js]=null,no=Ys[--js],Ys[js]=null;for(;e===wa;)wa=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null}function Up(e,n){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=wa,Ui=n.id,Ni=n.overflow,wa=e}var bn=null,Yt=null,Mt=!1,Da=null,di=!1,Mu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ci(n,e)),Mu}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[En]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)gt(Ao[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Si(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Z0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(e,!0)}function Lp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:bn=bn.return}}function Zs(e){if(e!==bn)return!1;if(!Mt)return Lp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Yt&&Ua(e),Lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=ag(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=ag(e)}else n===27?(n=Yt,Wa(e.type)?(e=Wf,Wf=null,Yt=e):Yt=n):Yt=bn?pi(e.stateNode.nextSibling):null;return!0}function ms(){Yt=bn=null,Mt=!1}function yu(){var e=Da;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Da=null),e}function io(e){Da===null?Da=[e]:Da.push(e)}var Eu=N(null),gs=null,Ji=null;function Na(e,n,a){Se(Eu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Eu.current,K(Eu)}function bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,e),o||(_=null);break e}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),bu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ks(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=c.type;Kn(c.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(c===Me.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}c=c.return}e!==null&&Tu(n,e,a,o),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Op(gs,e)}function pl(e,n){return gs===null&&_s(e),Op(e,n)}function Op(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var lx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cx=r.unstable_scheduleCallback,ux=r.unstable_NormalPriority,un={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new lx,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&cx(ux,function(){e.controller.abort()})}var so=null,Ru=0,Qs=0,Js=null;function fx(e,n){if(so===null){var a=so=[];Ru=0,Qs=Uf(),Js={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Pp,Pp),n}function Pp(){if(--Ru===0&&so!==null){Js!==null&&(Js.status="fulfilled");var e=so;so=null,Qs=0,Js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Fp=D.S;D.S=function(e,n){x0=Re(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fx(e,n),Fp!==null&&Fp(e,n)};var vs=N(null);function Cu(){var e=vs.current;return e!==null?e:Wt.pooledCache}function ml(e,n){n===null?Se(vs,vs.current):Se(vs,n.pool)}function zp(){var e=Cu();return e===null?null:{parent:un._currentValue,pool:e}}var $s=Error(s(460)),wu=Error(s(474)),gl=Error(s(542)),_l={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gp(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gp(e),e}throw Ss=n,$s}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,$s):a}}var Ss=null;function Hp(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function Gp(e){if(e===$s||e===gl)throw Error(s(483))}var er=null,ro=0;function vl(e){var n=ro;return ro+=1,er===null&&(er=[]),Ip(er,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Vp(e){function n(j,V){if(e){var J=j.deletions;J===null?(j.deletions=[V],j.flags|=16):J.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Ki(j,V),j.index=0,j.sibling=null,j}function f(j,V,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<V?(j.flags|=67108866,V):J):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function R(j,V,J,ge){return V===null||V.tag!==6?(V=_u(J,j.mode,ge),V.return=j,V):(V=c(V,J),V.return=j,V)}function I(j,V,J,ge){var Ke=J.type;return Ke===U?de(j,V,J.props.children,ge,J.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===b&&xs(Ke)===V.type)?(V=c(V,J.props),oo(V,J),V.return=j,V):(V=fl(J.type,J.key,J.props,null,j.mode,ge),oo(V,J),V.return=j,V)}function $(j,V,J,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=vu(J,j.mode,ge),V.return=j,V):(V=c(V,J.children||[]),V.return=j,V)}function de(j,V,J,ge,Ke){return V===null||V.tag!==7?(V=ps(J,j.mode,ge,Ke),V.return=j,V):(V=c(V,J),V.return=j,V)}function ve(j,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_u(""+V,j.mode,J),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return J=fl(V.type,V.key,V.props,null,j.mode,J),oo(J,V),J.return=j,J;case A:return V=vu(V,j.mode,J),V.return=j,V;case b:return V=xs(V),ve(j,V,J)}if(W(V)||Y(V))return V=ps(V,j.mode,J,null),V.return=j,V;if(typeof V.then=="function")return ve(j,vl(V),J);if(V.$$typeof===P)return ve(j,pl(j,V),J);xl(j,V)}return null}function se(j,V,J,ge){var Ke=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ke!==null?null:R(j,V,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Ke?I(j,V,J,ge):null;case A:return J.key===Ke?$(j,V,J,ge):null;case b:return J=xs(J),se(j,V,J,ge)}if(W(J)||Y(J))return Ke!==null?null:de(j,V,J,ge,null);if(typeof J.then=="function")return se(j,V,vl(J),ge);if(J.$$typeof===P)return se(j,V,pl(j,J),ge);xl(j,J)}return null}function le(j,V,J,ge,Ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get(J)||null,R(V,j,""+ge,Ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return j=j.get(ge.key===null?J:ge.key)||null,I(V,j,ge,Ke);case A:return j=j.get(ge.key===null?J:ge.key)||null,$(V,j,ge,Ke);case b:return ge=xs(ge),le(j,V,J,ge,Ke)}if(W(ge)||Y(ge))return j=j.get(J)||null,de(V,j,ge,Ke,null);if(typeof ge.then=="function")return le(j,V,J,vl(ge),Ke);if(ge.$$typeof===P)return le(j,V,J,pl(V,ge),Ke);xl(V,ge)}return null}function We(j,V,J,ge){for(var Ke=null,Tt=null,Ye=V,ct=V=0,xt=null;Ye!==null&&ct<J.length;ct++){Ye.index>ct?(xt=Ye,Ye=null):xt=Ye.sibling;var At=se(j,Ye,J[ct],ge);if(At===null){Ye===null&&(Ye=xt);break}e&&Ye&&At.alternate===null&&n(j,Ye),V=f(At,V,ct),Tt===null?Ke=At:Tt.sibling=At,Tt=At,Ye=xt}if(ct===J.length)return a(j,Ye),Mt&&Qi(j,ct),Ke;if(Ye===null){for(;ct<J.length;ct++)Ye=ve(j,J[ct],ge),Ye!==null&&(V=f(Ye,V,ct),Tt===null?Ke=Ye:Tt.sibling=Ye,Tt=Ye);return Mt&&Qi(j,ct),Ke}for(Ye=o(Ye);ct<J.length;ct++)xt=le(Ye,j,ct,J[ct],ge),xt!==null&&(e&&xt.alternate!==null&&Ye.delete(xt.key===null?ct:xt.key),V=f(xt,V,ct),Tt===null?Ke=xt:Tt.sibling=xt,Tt=xt);return e&&Ye.forEach(function(Ka){return n(j,Ka)}),Mt&&Qi(j,ct),Ke}function Je(j,V,J,ge){if(J==null)throw Error(s(151));for(var Ke=null,Tt=null,Ye=V,ct=V=0,xt=null,At=J.next();Ye!==null&&!At.done;ct++,At=J.next()){Ye.index>ct?(xt=Ye,Ye=null):xt=Ye.sibling;var Ka=se(j,Ye,At.value,ge);if(Ka===null){Ye===null&&(Ye=xt);break}e&&Ye&&Ka.alternate===null&&n(j,Ye),V=f(Ka,V,ct),Tt===null?Ke=Ka:Tt.sibling=Ka,Tt=Ka,Ye=xt}if(At.done)return a(j,Ye),Mt&&Qi(j,ct),Ke;if(Ye===null){for(;!At.done;ct++,At=J.next())At=ve(j,At.value,ge),At!==null&&(V=f(At,V,ct),Tt===null?Ke=At:Tt.sibling=At,Tt=At);return Mt&&Qi(j,ct),Ke}for(Ye=o(Ye);!At.done;ct++,At=J.next())At=le(Ye,j,ct,At.value,ge),At!==null&&(e&&At.alternate!==null&&Ye.delete(At.key===null?ct:At.key),V=f(At,V,ct),Tt===null?Ke=At:Tt.sibling=At,Tt=At);return e&&Ye.forEach(function(ES){return n(j,ES)}),Mt&&Qi(j,ct),Ke}function Ht(j,V,J,ge){if(typeof J=="object"&&J!==null&&J.type===U&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:e:{for(var Ke=J.key;V!==null;){if(V.key===Ke){if(Ke=J.type,Ke===U){if(V.tag===7){a(j,V.sibling),ge=c(V,J.props.children),ge.return=j,j=ge;break e}}else if(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===b&&xs(Ke)===V.type){a(j,V.sibling),ge=c(V,J.props),oo(ge,J),ge.return=j,j=ge;break e}a(j,V);break}else n(j,V);V=V.sibling}J.type===U?(ge=ps(J.props.children,j.mode,ge,J.key),ge.return=j,j=ge):(ge=fl(J.type,J.key,J.props,null,j.mode,ge),oo(ge,J),ge.return=j,j=ge)}return _(j);case A:e:{for(Ke=J.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(j,V.sibling),ge=c(V,J.children||[]),ge.return=j,j=ge;break e}else{a(j,V);break}else n(j,V);V=V.sibling}ge=vu(J,j.mode,ge),ge.return=j,j=ge}return _(j);case b:return J=xs(J),Ht(j,V,J,ge)}if(W(J))return We(j,V,J,ge);if(Y(J)){if(Ke=Y(J),typeof Ke!="function")throw Error(s(150));return J=Ke.call(J),Je(j,V,J,ge)}if(typeof J.then=="function")return Ht(j,V,vl(J),ge);if(J.$$typeof===P)return Ht(j,V,pl(j,J),ge);xl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(j,V.sibling),ge=c(V,J),ge.return=j,j=ge):(a(j,V),ge=_u(J,j.mode,ge),ge.return=j,j=ge),_(j)):a(j,V)}return function(j,V,J,ge){try{ro=0;var Ke=Ht(j,V,J,ge);return er=null,Ke}catch(Ye){if(Ye===$s||Ye===gl)throw Ye;var Tt=Qn(29,Ye,null,j.mode);return Tt.lanes=ge,Tt.return=j,Tt}finally{}}}var Ms=Vp(!0),kp=Vp(!1),La=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ul(e),Ap(e,null,a),n}return cl(e,o,n,a),ul(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,oi(e,a)}}function Nu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function co(){if(Lu){var e=Js;if(e!==null)throw e}}function uo(e,n,a,o){Lu=!1;var c=e.updateQueue;La=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var I=R,$=I.next;I.next=null,_===null?f=$:_.next=$,_=I;var de=e.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==_&&(R===null?de.firstBaseUpdate=$:R.next=$,de.lastBaseUpdate=I))}if(f!==null){var ve=c.baseState;_=0,de=$=I=null,R=f;do{var se=R.lane&-536870913,le=se!==R.lane;if(le?(vt&se)===se:(o&se)===se){se!==0&&se===Qs&&(Lu=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=e,Je=R;se=n;var Ht=a;switch(Je.tag){case 1:if(We=Je.payload,typeof We=="function"){ve=We.call(Ht,ve,se);break e}ve=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Je.payload,se=typeof We=="function"?We.call(Ht,ve,se):We,se==null)break e;ve=v({},ve,se);break e;case 2:La=!0}}se=R.callback,se!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[se]:le.push(se))}else le={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?($=de=le,I=ve):de=de.next=le,_|=se;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(I=ve),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Ha|=_,e.lanes=_,e.memoizedState=ve}}function Xp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Wp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xp(a[e],n)}var tr=N(null),Sl=N(0);function qp(e,n){e=la,Se(Sl,e),Se(tr,n),la=e|n.baseLanes}function Ou(){Se(Sl,la),Se(tr,tr.current)}function Pu(){la=Sl.current,K(tr),K(Sl)}var Jn=N(null),hi=null;function Fa(e){var n=e.alternate;Se(rn,rn.current&1),Se(Jn,e),hi===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(hi=e)}function Fu(e){Se(rn,rn.current),Se(Jn,e),hi===null&&(hi=e)}function Yp(e){e.tag===22?(Se(rn,rn.current),Se(Jn,e),hi===null&&(hi=e)):za()}function za(){Se(rn,rn.current),Se(Jn,Jn.current)}function $n(e){K(Jn),hi===e&&(hi=null),K(rn)}var rn=N(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ot=null,Bt=null,fn=null,yl=!1,nr=!1,ys=!1,El=0,fo=0,ir=null,hx=0;function tn(){throw Error(s(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,o,c,f){return ea=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?Dm:$u,ys=!1,f=a(o,c),ys=!1,nr&&(f=Zp(n,a,o,c)),jp(e),f}function jp(e){D.H=mo;var n=Bt!==null&&Bt.next!==null;if(ea=0,fn=Bt=ot=null,yl=!1,fo=0,ir=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&hl(e)&&(dn=!0))}function Zp(e,n,a,o){ot=e;var c=0;do{if(nr&&(ir=null),fo=0,nr=!1,25<=c)throw Error(s(301));if(c+=1,fn=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=Um,f=n(a,o)}while(nr);return f}function px(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ot.flags|=1024),n}function Iu(){var e=El!==0;return El=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}ea=0,fn=Bt=ot=null,nr=!1,fo=El=0,ir=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ot.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(Bt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=fn===null?ot.memoizedState:fn.next;if(n!==null)fn=n,Bt=e;else{if(e===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},fn===null?ot.memoizedState=fn=e:fn=fn.next=e}return fn}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,ir===null&&(ir=[]),e=Ip(ir,e,n),n=ot,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Dm:$u),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===P)return Tn(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Z;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=on();return ku(n,Bt,e)}function ku(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=_=null,I=null,$=n,de=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(vt&ve)===ve:(ea&ve)===ve){var se=$.revertLane;if(se===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Qs&&(de=!0);else if((ea&se)===se){$=$.next,se===Qs&&(de=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(R=I=ve,_=f):I=I.next=ve,ot.lanes|=se,Ha|=se;ve=$.action,ys&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else se={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(R=I=se,_=f):I=I.next=se,ot.lanes|=ve,Ha|=ve;$=$.next}while($!==null&&$!==n);if(I===null?_=f:I.next=R,!Kn(f,e.memoizedState)&&(dn=!0,de&&(a=Js,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=I,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Kp(e,n,a){var o=ot,c=on(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Kn((Bt||c).memoizedState,a);if(_&&(c.memoizedState=a,dn=!0),c=c.queue,Yu($p.bind(null,o,c,e),[e]),c.getSnapshot!==n||_||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,ar(9,{destroy:void 0},Jp.bind(null,o,c,a,n),null),Wt===null)throw Error(s(349));f||(ea&127)!==0||Qp(o,n,a)}return a}function Qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=bl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Jp(e,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&tm(e)}function $p(e,n,a){return a(function(){em(n)&&tm(e)})}function em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function tm(e){var n=hs(e,2);n!==null&&Wn(n,e,2)}function Wu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),ys){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function nm(e,n,a,o){return e.baseState=a,ku(e,Bt,typeof o=="function"?o:ta)}function mx(e,n,a,o,c){if(wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};D.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function im(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=D.T,_={};D.T=_;try{var R=a(c,o),I=D.S;I!==null&&I(_,R),am(e,n,R)}catch($){qu(e,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),D.T=f}}else try{f=a(c,o),am(e,n,f)}catch($){qu(e,n,$)}}function am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(e,n,o)},function(o){return qu(e,n,o)}):sm(e,n,a)}function sm(e,n,a){n.status="fulfilled",n.value=a,rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,im(e,a)))}function qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,rm(n),n=n.next;while(n!==o)}e.action=null}function rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function om(e,n){return n}function lm(e,n){if(Mt){var a=Wt.formState;if(a!==null){e:{var o=ot;if(Mt){if(Yt){t:{for(var c=Yt,f=di;c.nodeType!==8;){if(!f){c=null;break t}if(c=pi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Yt=pi(c.nextSibling),o=c.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,ot,o),o.dispatch=a,o=Wu(!1),f=Ju.bind(null,ot,!1,o.queue),o=zn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=mx.bind(null,ot,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function cm(e){var n=on();return um(n,Bt,e)}function um(e,n,a){if(n=ku(e,n,om)[0],e=Al(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(_){throw _===$s?gl:_}else o=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,ar(9,{destroy:void 0},gx.bind(null,c,a),null)),[o,f,e]}function gx(e,n){e.action=n}function fm(e){var n=on(),a=Bt;if(a!==null)return um(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ar(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=bl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function dm(){return on().memoizedState}function Rl(e,n,a,o){var c=zn();ot.flags|=e,c.memoizedState=ar(1|n,{destroy:void 0},a,o===void 0?null:o)}function Cl(e,n,a,o){var c=on();o=o===void 0?null:o;var f=c.memoizedState.inst;Bt!==null&&o!==null&&zu(o,Bt.memoizedState.deps)?c.memoizedState=ar(n,f,a,o):(ot.flags|=e,c.memoizedState=ar(1|n,f,a,o))}function hm(e,n){Rl(8390656,8,e,n)}function Yu(e,n){Cl(2048,8,e,n)}function _x(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=bl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function pm(e){var n=on().memoizedState;return _x({ref:n,nextImpl:e}),function(){if((Ct&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function mm(e,n){return Cl(4,2,e,n)}function gm(e,n){return Cl(4,4,e,n)}function _m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vm(e,n,a){a=a!=null?a.concat([e]):null,Cl(4,4,_m.bind(null,n,e),a)}function ju(){}function xm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Sm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zu(n,o[1]))return o[0];if(o=e(),ys){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function Zu(e,n,a){return a===void 0||(ea&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=M0(),ot.lanes|=e,Ha|=e,a)}function Mm(e,n,a,o){return Kn(a,n)?a:tr.current!==null?(e=Zu(e,a,o),Kn(e,n)||(dn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(vt&261930)===0?(dn=!0,e.memoizedState=a):(e=M0(),ot.lanes|=e,Ha|=e,n)}function ym(e,n,a,o,c){var f=F.p;F.p=f!==0&&8>f?f:8;var _=D.T,R={};D.T=R,Ju(e,!1,n,a);try{var I=c(),$=D.S;if($!==null&&$(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=dx(I,o);po(e,n,de,ni(e))}else po(e,n,o,ni(e))}catch(ve){po(e,n,{then:function(){},status:"rejected",reason:ve},ni())}finally{F.p=f,_!==null&&R.types!==null&&(_.types=R.types),D.T=_}}function vx(){}function Ku(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Em(e).queue;ym(e,c,n,ie,a===null?vx:function(){return bm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bm(e){var n=Em(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},ni())}function Qu(){return Tn(Uo)}function Tm(){return on().memoizedState}function Am(){return on().memoizedState}function xx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Oa(a);var o=Pa(n,e,a);o!==null&&(Wn(o,n,a),lo(o,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function Sx(e,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?Cm(n,a):(a=mu(e,n,a,o),a!==null&&(Wn(a,e,o),wm(a,n,o)))}function Rm(e,n,a){var o=ni();po(e,n,a,o)}function po(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Cm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,Kn(R,_))return cl(e,n,c,0),Wt===null&&ll(),!1}catch{}finally{}if(a=mu(e,n,c,o),a!==null)return Wn(a,e,o),wm(a,n,o),!0}return!1}function Ju(e,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(s(479))}else n=mu(e,a,o,2),n!==null&&Wn(n,e,2)}function wl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function Cm(e,n){nr=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function wm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,oi(e,a)}}var mo={readContext:Tn,use:Tl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};mo.useEffectEvent=tn;var Dm={readContext:Tn,use:Tl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,_m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(ys){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var c=a(n);if(ys){Oe(!0);try{a(n)}finally{Oe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Sx.bind(null,ot,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Rm.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=zn();return Zu(a,e,n)},useTransition:function(){var e=Wu(!1);return e=ym.bind(null,ot,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ot,c=zn();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(vt&127)!==0||Qp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,hm($p.bind(null,o,f,e),[e]),o.flags|=2048,ar(9,{destroy:void 0},Jp.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=Wt.identifierPrefix;if(Mt){var a=Ni,o=Ui;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:lm,useActionState:lm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return zn().memoizedState=xx.bind(null,ot)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Tn,use:Tl,useCallback:xm,useContext:Tn,useEffect:Yu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Sm,useReducer:Al,useRef:dm,useState:function(){return Al(ta)},useDebugValue:ju,useDeferredValue:function(e,n){var a=on();return Mm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Al(ta)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:Qu,useFormState:cm,useActionState:cm,useOptimistic:function(e,n){var a=on();return nm(a,Bt,e,n)},useMemoCache:Vu,useCacheRefresh:Am};$u.useEffectEvent=pm;var Um={readContext:Tn,use:Tl,useCallback:xm,useContext:Tn,useEffect:Yu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Sm,useReducer:Xu,useRef:dm,useState:function(){return Xu(ta)},useDebugValue:ju,useDeferredValue:function(e,n){var a=on();return Bt===null?Zu(a,e,n):Mm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Xu(ta)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:Qu,useFormState:fm,useActionState:fm,useOptimistic:function(e,n){var a=on();return Bt!==null?nm(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Am};Um.useEffectEvent=pm;function ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ni(),c=Oa(o);c.payload=n,a!=null&&(c.callback=a),n=Pa(e,c,o),n!==null&&(Wn(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ni(),c=Oa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(e,c,o),n!==null&&(Wn(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(e,o,a),n!==null&&(Wn(n,e,a),lo(n,e,a))}};function Nm(e,n,a,o,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(c,f):!0}function Lm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Om(e){ol(e)}function Pm(e){console.error(e)}function Fm(e){ol(e)}function Dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nf(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(e,n)},a}function Bm(e){return e=Oa(e),e.tag=3,e}function Im(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){zm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){zm(n,a,o),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Mx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Vl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(e,o,c)),!1;case 22:return a.flags|=65536,o===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(e,o,c)),!1}throw Error(s(435,a.tag))}return Cf(e,o,c),Vl(),!1}if(Mt)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Mu&&(e=Error(s(422),{cause:o}),io(ci(e,a)))):(o!==Mu&&(n=Error(s(423),{cause:o}),io(ci(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ci(o,a),c=nf(e.stateNode,o,c),Nu(e,c),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),Eo===null?Eo=[f]:Eo.push(f),nn!==4&&(nn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=nf(a.stateNode,o,e),Nu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Bm(c),Im(c,e,a,o),Nu(a,c),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),dn=!1;function An(e,n,a,o){n.child=e===null?kp(n,null,a,o):Ms(n,e.child,a,o)}function Hm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return _s(n),o=Bu(e,n,a,_,f,c),R=Iu(),e!==null&&!dn?(Hu(e,n,c),na(e,n,c)):(Mt&&R&&xu(n),n.flags|=1,An(e,n,o,c),n.child)}function Gm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Vm(e,n,f,o,c)):(e=fl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(_,o)&&e.ref===n.ref)return na(e,n,c)}return n.flags|=1,e=Ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function Vm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(eo(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,df(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,na(e,n,c)}return sf(e,n,a,o,c)}function km(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Xm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?qp(n,f):Ou(),Yp(n);else return o=n.lanes=536870912,Xm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(ml(n,f.cachePool),qp(n,f),za(),n.memoizedState=null):(e!==null&&ml(n,null),Ou(),za());return An(e,n,c,a),n.child}function go(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xm(e,n,a,o,c){var f=Cu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),Ou(),Yp(n),e!==null&&Ks(e,n,o,!0),n.childLanes=c,null}function Ul(e,n){return n=Ll({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Wm(e,n,a){return Ms(n,e.child,null,a),e=Ul(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function yx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(o.mode==="hidden")return e=Ul(n,o),n.lanes=536870912,go(null,e);if(Fu(n),(e=Yt)?(e=ig(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Cp(e),a.return=n,n.child=a,bn=n,Yt=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Ul(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Fu(n),c)if(n.flags&256)n.flags&=-257,n=Wm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ks(e,n,a,!1),c=(a&e.childLanes)!==0,dn||c){if(o=Wt,o!==null&&(_=Yn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,hs(e,_),Wn(o,e,_),af;Vl(),n=Wm(e,n,a)}else e=f.treeContext,Yt=pi(_.nextSibling),bn=n,Mt=!0,Da=null,di=!1,e!==null&&Up(n,e),n=Ul(n,o),n.flags|=4096;return n}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,o,c){return _s(n),a=Bu(e,n,a,o,void 0,c),o=Iu(),e!==null&&!dn?(Hu(e,n,c),na(e,n,c)):(Mt&&o&&xu(n),n.flags|=1,An(e,n,a,c),n.child)}function qm(e,n,a,o,c,f){return _s(n),n.updateQueue=null,a=Zp(n,o,a,c),jp(e),o=Iu(),e!==null&&!dn?(Hu(e,n,f),na(e,n,f)):(Mt&&o&&xu(n),n.flags|=1,An(e,n,a,f),n.child)}function Ym(e,n,a,o,c){if(_s(n),n.stateNode===null){var f=qs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Du(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):qs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ef(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&tf.enqueueReplaceState(f,f.state,null),uo(n,o,f,c),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,I=Es(a,R);f.props=I;var $=f.context,de=a.contextType;_=qs,typeof de=="object"&&de!==null&&(_=Tn(de));var ve=a.getDerivedStateFromProps;de=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||$!==_)&&Lm(n,f,o,_),La=!1;var se=n.memoizedState;f.state=se,uo(n,o,f,c),co(),$=n.memoizedState,R||se!==$||La?(typeof ve=="function"&&(ef(n,a,ve,o),$=n.memoizedState),(I=La||Nm(n,a,I,o,se,$,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=_,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(e,n),_=n.memoizedProps,de=Es(a,_),f.props=de,ve=n.pendingProps,se=f.context,$=a.contextType,I=qs,typeof $=="object"&&$!==null&&(I=Tn($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ve||se!==I)&&Lm(n,f,o,I),La=!1,se=n.memoizedState,f.state=se,uo(n,o,f,c),co();var le=n.memoizedState;_!==ve||se!==le||La||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof R=="function"&&(ef(n,a,R,o),le=n.memoizedState),(de=La||Nm(n,a,de,o,se,le,I)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=I,o=de):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Nl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,c),n.child=Ms(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=na(e,n,c),e}function jm(e,n,a,o){return ms(),n.flags|=256,An(e,n,a,o),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:zp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Zm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?Fa(n):za(),(e=Yt)?(e=ig(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Cp(e),a.return=n,n.child=a,bn=n,Yt=null)):e=null,e===null)throw Ua(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(za(),c=n.mode,R=Ll({mode:"hidden",children:R},c),o=ps(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,_,a),n.memoizedState=rf,go(null,o)):(Fa(n),cf(n,R))}var I=e.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),R=o.fallback,c=n.mode,o=Ll({mode:"visible",children:o.children},c),R=ps(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,_,a),n.memoizedState=rf,n=go(null,o));else if(Fa(n),Xf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var $=_.dgst;_=$,o=Error(s(419)),o.stack="",o.digest=_,io({value:o,source:null,stack:null}),n=uf(e,n,a)}else if(dn||Ks(e,n,a,!1),_=(a&e.childLanes)!==0,dn||_){if(_=Wt,_!==null&&(o=Yn(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,hs(e,o),Wn(_,e,o),af;kf(R)||Vl(),n=uf(e,n,a)}else kf(R)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Yt=pi(R.nextSibling),bn=n,Mt=!0,Da=null,di=!1,e!==null&&Up(n,e),n=cf(n,o.children),n.flags|=4096);return n}return c?(za(),R=o.fallback,c=n.mode,I=e.child,$=I.sibling,o=Ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?R=Ki($,R):(R=ps(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,go(null,o),o=n.child,R=e.child.memoizedState,R===null?R=of(a):(c=R.cachePool,c!==null?(I=un._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=zp(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=lf(e,_,a),n.memoizedState=rf,go(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return Ms(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bu(e.return,n,a)}function ff(e,n,a,o,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Qm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var _=rn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Se(rn,_),An(e,n,o,a),o=Mt?no:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,a,n);else if(e.tag===19)Km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function Ex(e,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Na(n,un,e.memoizedState.cache),ms();break;case 27:case 5:$e(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(e,n,a):(Fa(n),e=na(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ks(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Qm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(rn,rn.current),o)break;return null;case 22:return n.lanes=0,km(e,n,a,n.pendingProps);case 24:Na(n,un,e.memoizedState.cache)}return na(e,n,a)}function Jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!df(e,a)&&(n.flags&128)===0)return dn=!1,Ex(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Mt&&(n.flags&1048576)!==0&&Dp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")gu(e)?(o=Es(e,o),n.tag=1,n=Ym(null,n,e,o,a)):(n.tag=0,n=sf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Hm(null,n,e,o,a);break e}else if(c===B){n.tag=14,n=Gm(null,n,e,o,a);break e}}throw n=me(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Es(o,n.pendingProps),Ym(e,n,o,c,a);case 3:e:{if(be(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Uu(e,n),uo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Na(n,un,o),o!==f.cache&&Tu(n,[un],a,!0),co(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=jm(e,n,o,a);break e}else if(o!==c){c=ci(Error(s(424)),n),io(c),n=jm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Yt=pi(e.firstChild),bn=n,Mt=!0,Da=null,di=!0,a=kp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ms(),o===c){n=na(e,n,a);break e}An(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,o=Zl(oe.current).createElement(a),o[sn]=n,o[En]=e,Rn(o,a,e),cn(o),n.stateNode=o):n.memoizedState=cg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $e(n),e===null&&Mt&&(o=n.stateNode=rg(n.type,n.pendingProps,oe.current),bn=n,di=!0,c=Yt,Wa(n.type)?(Wf=c,Yt=pi(o.firstChild)):Yt=c),An(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=o=Yt)&&(o=$x(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,bn=n,Yt=pi(o.firstChild),di=!1,c=!0):c=!1),c||Ua(n)),$e(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,Hf(c,f)?o=null:_!==null&&Hf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,px,null,null,a),Uo._currentValue=c),Nl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Mt&&((e=a=Yt)&&(a=eS(a,n.pendingProps,di),a!==null?(n.stateNode=a,bn=n,Yt=null,e=!0):e=!1),e||Ua(n)),null;case 13:return Zm(e,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):An(e,n,o,a),n.child;case 11:return Hm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,_s(n),c=Tn(c),o=o(c),n.flags|=1,An(e,n,o,a),n.child;case 14:return Gm(e,n,n.type,n.pendingProps,a);case 15:return Vm(e,n,n.type,n.pendingProps,a);case 19:return Qm(e,n,a);case 31:return yx(e,n,a);case 22:return km(e,n,a,n.pendingProps);case 24:return _s(n),o=Tn(un),e===null?(c=Cu(),c===null&&(c=Wt,f=Au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Du(n),Na(n,un,c)):((e.lanes&a)!==0&&(Uu(e,n),uo(n,null,null,a),co()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Na(n,un,o)):(o=f.cache,Na(n,un,o),o!==c.cache&&Tu(n,[un],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function hf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(T0())e.flags|=8192;else throw Ss=_l,wu}else e.flags&=-16777217}function $m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(n))if(T0())e.flags|=8192;else throw Ss=_l,wu}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ye():536870912,e.lanes|=n,lr|=n)}function _o(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function bx(e,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(un),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),jt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(jt(n),$m(n,f)):(jt(n),hf(n,c,null,o,a))):f?f!==e.memoizedState?(ia(n),jt(n),$m(n,f)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(n),jt(n),hf(n,c,e,o,a)),null;case 27:if(Qe(n),a=oe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}e=Ae.current,Zs(n)?Np(n):(e=rg(c,o,a),n.stateNode=e,ia(n))}return jt(n),null;case 5:if(Qe(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(f=Ae.current,Zs(n))Np(n);else{var _=Zl(oe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(c,{is:o.is}):_.createElement(c)}}f[sn]=n,f[En]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Rn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return jt(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=oe.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=bn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Z0(e.nodeValue,a)),e||Ua(n,!0)}else e=Zl(e).createTextNode(o),e[sn]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Zs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),jt(n),null);case 4:return He(),e===null&&Pf(n.stateNode.containerInfo),jt(n),null;case 10:return $i(n.type),jt(n),null;case 19:if(K(rn),o=n.memoizedState,o===null)return jt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)_o(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,_o(o,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rp(a,e),a=a.sibling;return Se(rn,rn.current&1|2),Mt&&Qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Re()>Il&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304)}else{if(!c)if(e=Ml(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return jt(n),null}else 2*Re()-o.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Re(),e.sibling=null,a=rn.current,Se(rn,c?a&1|2:a&1),Mt&&Qi(n,o.treeForkCount),e):(jt(n),null);case 22:case 23:return $n(n),Pu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&K(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(un),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Tx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(un),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(rn),null;case 4:return He(),null;case 10:return $i(n.type),null;case 22:case 23:return $n(n),Pu(),e!==null&&K(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(un),null;case 25:return null;default:return null}}function e0(e,n){switch(Su(n),n.tag){case 3:$i(un),He();break;case 26:case 27:case 5:Qe(n);break;case 4:He();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:K(rn);break;case 10:$i(n.type);break;case 22:case 23:$n(n),Pu(),e!==null&&K(vs);break;case 24:$i(un)}}function vo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==c)}}catch(R){Pt(n,n.return,R)}}function Ba(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var I=a,$=R;try{$()}catch(de){Pt(c,I,de)}}}o=o.next}while(o!==f)}}catch(de){Pt(n,n.return,de)}}function t0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Wp(n,a)}catch(o){Pt(e,e.return,o)}}}function n0(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pt(e,n,o)}}function xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Pt(e,n,c)}}function Li(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Pt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pt(e,n,c)}else a.current=null}function i0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Pt(e,e.return,c)}}function pf(e,n,a){try{var o=e.stateNode;Yx(o,e.type,a,n),o[En]=n}catch(c){Pt(e,e.return,c)}}function a0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||a0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function s0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,o,a),n[sn]=e,n[En]=a}catch(f){Pt(e,e.return,f)}}var aa=!1,hn=!1,_f=!1,r0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Ax(e,n){if(e=e.containerInfo,Bf=nc,e=vp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,I=-1,$=0,de=0,ve=e,se=null;t:for(;;){for(var le;ve!==a||c!==0&&ve.nodeType!==3||(R=_+c),ve!==f||o!==0&&ve.nodeType!==3||(I=_+o),ve.nodeType===3&&(_+=ve.nodeValue.length),(le=ve.firstChild)!==null;)se=ve,ve=le;for(;;){if(ve===e)break t;if(se===a&&++$===c&&(R=_),se===f&&++de===o&&(I=_),(le=ve.nextSibling)!==null)break;ve=se,se=ve.parentNode}ve=le}a=R===-1||I===-1?null:{start:R,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Es(a.type,c);e=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Je){Pt(a,a.return,Je)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function o0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),o&4&&vo(5,a);break;case 1:if(ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Pt(a,a.return,_)}else{var c=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Pt(a,a.return,_)}}o&64&&t0(a),o&512&&xo(a,a.return);break;case 3:if(ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wp(e,n)}catch(_){Pt(a,a.return,_)}}break;case 27:n===null&&o&4&&s0(a);case 26:case 5:ra(e,a),n===null&&o&4&&i0(a),o&512&&xo(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),o&4&&u0(e,a);break;case 13:ra(e,a),o&4&&f0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Px.bind(null,a),tS(e,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||hn,c=aa;var f=hn;aa=o,(hn=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=c,hn=f}break;case 30:break;default:ra(e,a)}}function l0(e){var n=e.alternate;n!==null&&(e.alternate=null,l0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Gn=!1;function sa(e,n,a){for(a=a.child;a!==null;)c0(e,n,a),a=a.sibling}function c0(e,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:hn||Li(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Li(a,n);var o=Jt,c=Gn;Wa(a.type)&&(Jt=a.stateNode,Gn=!1),sa(e,n,a),Co(a.stateNode),Jt=o,Gn=c;break;case 5:hn||Li(a,n);case 6:if(o=Jt,c=Gn,Jt=null,sa(e,n,a),Jt=o,Gn=c,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Pt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Pt(a,n,f)}break;case 18:Jt!==null&&(Gn?(e=Jt,tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gr(e)):tg(Jt,a.stateNode));break;case 4:o=Jt,c=Gn,Jt=a.stateNode.containerInfo,Gn=!0,sa(e,n,a),Jt=o,Gn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),sa(e,n,a);break;case 1:hn||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&n0(a,n,o)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,sa(e,n,a),hn=o;break;default:sa(e,n,a)}}function u0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gr(e)}catch(a){Pt(n,n.return,a)}}}function f0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gr(e)}catch(a){Pt(n,n.return,a)}}function Rx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new r0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new r0),n;default:throw Error(s(435,e.tag))}}function Fl(e,n){var a=Rx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Fx.bind(null,e,o);o.then(c,c)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){Jt=R.stateNode,Gn=!1;break e}break;case 5:Jt=R.stateNode,Gn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(Jt===null)throw Error(s(160));c0(f,_,c),Jt=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d0(n,e),n=n.sibling}var Ei=null;function d0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),o&4&&(Ba(3,e,e.return),vo(3,e),Ba(5,e,e.return));break;case 1:Vn(n,e),kn(e),o&512&&(hn||a===null||Li(a,a.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ei;if(Vn(n,e),kn(e),o&512&&(hn||a===null||Li(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ea]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,o,a),f[sn]=e,cn(f),o=f;break e;case"link":var _=dg("link","href",c).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;case"meta":if(_=dg("meta","content",c).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=e,cn(f),o=f}e.stateNode=o}else hg(c,e.type,e.stateNode);else e.stateNode=fg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?hg(c,e.type,e.stateNode):fg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),o&512&&(hn||a===null||Li(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),o&512&&(hn||a===null||Li(a,a.return)),e.flags&32){c=e.stateNode;try{Zn(c,"")}catch(We){Pt(e,e.return,We)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,pf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(_f=!0);break;case 6:if(Vn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(We){Pt(e,e.return,We)}}break;case 3:if(Jl=null,c=Ei,Ei=Kl(n.containerInfo),Vn(n,e),Ei=c,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(We){Pt(e,e.return,We)}_f&&(_f=!1,h0(e));break;case 4:o=Ei,Ei=Kl(e.stateNode.containerInfo),Vn(n,e),kn(e),Ei=o;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=Re()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=aa,de=hn;if(aa=$||c,hn=de||I,Vn(n,e),hn=de,aa=$,kn(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||aa||hn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=I.stateNode;var ve=I.memoizedProps.style,se=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(We){Pt(I,I.return,We)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(We){Pt(I,I.return,We)}}}else if(n.tag===18){if(a===null){I=n;try{var le=I.stateNode;c?ng(le,!0):ng(I.stateNode,!1)}catch(We){Pt(I,I.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(e,a))));break;case 19:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(a0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=mf(e);Pl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Zn(_,""),a.flags&=-33);var R=mf(e);Pl(e,R,_);break;case 3:case 4:var I=a.stateNode.containerInfo,$=mf(e);gf(e,$,I);break;default:throw Error(s(161))}}catch(de){Pt(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function h0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;h0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)o0(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),bs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&n0(n,n.return,a),bs(n);break;case 27:Co(n.stateNode);case 26:case 5:Li(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:oa(c,f,a),vo(4,f);break;case 1:if(oa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Pt(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Xp(I[c],R)}catch($){Pt(o,o.return,$)}}a&&_&64&&t0(f),xo(f,f.return);break;case 27:s0(f);case 26:case 5:oa(c,f,a),a&&o===null&&_&4&&i0(f),xo(f,f.return);break;case 12:oa(c,f,a);break;case 31:oa(c,f,a),a&&_&4&&u0(c,f);break;case 13:oa(c,f,a),a&&_&4&&f0(c,f);break;case 22:f.memoizedState===null&&oa(c,f,a),xo(f,f.return);break;case 30:break;default:oa(c,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)p0(e,n,a,o),n=n.sibling}function p0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),c&2048&&vo(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(c&2048){bi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Pt(n,n.return,I)}}else bi(e,n,a,o);break;case 31:bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,o):So(e,n):f._visibility&2?bi(e,n,a,o):(f._visibility|=2,sr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&vf(_,n);break;case 24:bi(e,n,a,o),c&2048&&xf(n.alternate,n);break;default:bi(e,n,a,o)}}function sr(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,I=o,$=_.flags;switch(_.tag){case 0:case 11:case 15:sr(f,_,R,I,c),vo(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?sr(f,_,R,I,c):So(f,_):(de._visibility|=2,sr(f,_,R,I,c)),c&&$&2048&&vf(_.alternate,_);break;case 24:sr(f,_,R,I,c),c&&$&2048&&xf(_.alternate,_);break;default:sr(f,_,R,I,c)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:So(a,o),c&2048&&vf(o.alternate,o);break;case 24:So(a,o),c&2048&&xf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function rr(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)m0(e,n,a),e=e.sibling}function m0(e,n,a){switch(e.tag){case 26:rr(e,n,a),e.flags&Mo&&e.memoizedState!==null&&hS(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:rr(e,n,a);break;case 3:case 4:var o=Ei;Ei=Kl(e.stateNode.containerInfo),rr(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,rr(e,n,a),Mo=o):rr(e,n,a));break;default:rr(e,n,a)}}function g0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,v0(o,e)}g0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_0(e),e=e.sibling}function _0(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):yo(e);break;default:yo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,v0(o,e)}g0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function v0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=e;Sn!==null;){o=Sn;var c=o.sibling,f=o.return;if(l0(o),o===a){Sn=null;break e}if(c!==null){c.return=f,Sn=c;break e}Sn=f}}}var Cx={getCacheForType:function(e){var n=Tn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Wt=null,mt=null,vt=0,Ot=0,ei=null,Ia=!1,or=!1,Sf=!1,la=0,nn=0,Ha=0,Ts=0,Mf=0,ti=0,lr=0,Eo=null,Xn=null,yf=!1,Bl=0,x0=0,Il=1/0,Hl=null,Ga=null,gn=0,Va=null,cr=null,ca=0,Ef=0,bf=null,S0=null,bo=0,Tf=null;function ni(){return(Ct&2)!==0&&vt!==0?vt&-vt:D.T!==null?Uf():kr()}function M0(){if(ti===0)if((vt&536870912)===0||Mt){var e=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),ti=e}else ti=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ti}function Wn(e,n,a){(e===Wt&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)&&(ur(e,0),ka(e,vt,ti,!1)),et(e,a),((Ct&2)===0||e!==Wt)&&(e===Wt&&((Ct&2)===0&&(Ts|=a),nn===4&&ka(e,vt,ti,!1)),Oi(e))}function y0(e,n,a){if((Ct&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),c=o?Nx(e,n):Rf(e,n,!0),f=o;do{if(c===0){or&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Dx(a)){c=Rf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;c=Eo;var I=R.current.memoizedState.isDehydrated;if(I&&(ur(R,_).flags|=256),_=Rf(R,_,!1),_!==2){if(Sf&&!I){R.errorRecoveryDisabledLanes|=f,Ts|=f,c=4;break e}f=Xn,Xn=c,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){ur(e,0),ka(e,n,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ti,!Ia);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Bl+300-Re(),10<c)){if(ka(o,n,ti,!Ia),he(o,0,!0)!==0)break e;ca=n,o.timeoutHandle=$0(E0.bind(null,o,a,Xn,Hl,yf,n,ti,Ts,lr,Ia,f,"Throttled",-0,0),c);break e}E0(o,a,Xn,Hl,yf,n,ti,Ts,lr,Ia,f,null,-0,0)}}break}while(!0);Oi(e)}function E0(e,n,a,o,c,f,_,R,I,$,de,ve,se,le){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},m0(n,f,ve);var We=(f&62914560)===f?Bl-Re():(f&4194048)===f?x0-Re():0;if(We=pS(ve,We),We!==null){ca=f,e.cancelPendingCommit=We(U0.bind(null,e,n,f,a,o,c,_,R,I,de,ve,null,se,le)),ka(e,f,_,!$);return}}U0(e,n,f,a,o,c,_,R,I)}function Dx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~Mf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),_=1<<f;o[f]=-1,c&=~_}a!==0&&Rt(e,a,n)}function Gl(){return(Ct&6)===0?(To(0),!1):!0}function Af(){if(mt!==null){if(Ot===0)var e=mt.return;else e=mt,Ji=gs=null,Gu(e),er=null,ro=0,e=mt;for(;e!==null;)e0(e.alternate,e),e=e.return;mt=null}}function ur(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Af(),Wt=e,mt=a=Ki(e.current,null),vt=n,Ot=0,ei=null,Ia=!1,or=Be(e,n),Sf=!1,lr=ti=Mf=Ts=Ha=nn=0,Xn=Eo=null,yf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Pe(o),f=1<<c;n|=e[c],o&=~f}return la=n,ll(),a}function b0(e,n){ot=null,D.H=mo,n===$s||n===gl?(n=Hp(),Ot=3):n===wu?(n=Hp(),Ot=4):Ot=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,mt===null&&(nn=1,Dl(e,ci(n,e.current)))}function T0(){var e=Jn.current;return e===null?!0:(vt&4194048)===vt?hi===null:(vt&62914560)===vt||(vt&536870912)!==0?e===hi:!1}function A0(){var e=D.H;return D.H=mo,e===null?mo:e}function R0(){var e=D.A;return D.A=Cx,e}function Vl(){nn=4,Ia||(vt&4194048)!==vt&&Jn.current!==null||(or=!0),(Ha&134217727)===0&&(Ts&134217727)===0||Wt===null||ka(Wt,vt,ti,!1)}function Rf(e,n,a){var o=Ct;Ct|=2;var c=A0(),f=R0();(Wt!==e||vt!==n)&&(Hl=null,ur(e,n)),n=!1;var _=nn;e:do try{if(Ot!==0&&mt!==null){var R=mt,I=ei;switch(Ot){case 8:Af(),_=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var $=Ot;if(Ot=0,ei=null,fr(e,R,I,$),a&&or){_=0;break e}break;default:$=Ot,Ot=0,ei=null,fr(e,R,I,$)}}Ux(),_=nn;break}catch(de){b0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Ji=gs=null,Ct=o,D.H=c,D.A=f,mt===null&&(Wt=null,vt=0,ll()),_}function Ux(){for(;mt!==null;)C0(mt)}function Nx(e,n){var a=Ct;Ct|=2;var o=A0(),c=R0();Wt!==e||vt!==n?(Hl=null,Il=Re()+500,ur(e,n)):or=Be(e,n);e:do try{if(Ot!==0&&mt!==null){n=mt;var f=ei;t:switch(Ot){case 1:Ot=0,ei=null,fr(e,n,f,1);break;case 2:case 9:if(Bp(f)){Ot=0,ei=null,w0(n);break}n=function(){Ot!==2&&Ot!==9||Wt!==e||(Ot=7),Oi(e)},f.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:Bp(f)?(Ot=0,ei=null,w0(n)):(Ot=0,ei=null,fr(e,n,f,7));break;case 5:var _=null;switch(mt.tag){case 26:_=mt.memoizedState;case 5:case 27:var R=mt;if(_?pg(_):R.stateNode.complete){Ot=0,ei=null;var I=R.sibling;if(I!==null)mt=I;else{var $=R.return;$!==null?(mt=$,kl($)):mt=null}break t}}Ot=0,ei=null,fr(e,n,f,5);break;case 6:Ot=0,ei=null,fr(e,n,f,6);break;case 8:Af(),nn=6;break e;default:throw Error(s(462))}}Lx();break}catch(de){b0(e,de)}while(!0);return Ji=gs=null,D.H=o,D.A=c,Ct=a,mt!==null?0:(Wt=null,vt=0,ll(),nn)}function Lx(){for(;mt!==null&&!dt();)C0(mt)}function C0(e){var n=Jm(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?kl(e):mt=n}function w0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Gu(n);default:e0(a,n),n=mt=Rp(n,la),n=Jm(a,n,la)}e.memoizedProps=e.pendingProps,n===null?kl(e):mt=n}function fr(e,n,a,o){Ji=gs=null,Gu(n),er=null,ro=0;var c=n.return;try{if(Mx(e,c,n,a,vt)){nn=1,Dl(e,ci(a,e.current)),mt=null;return}}catch(f){if(c!==null)throw mt=c,f;nn=1,Dl(e,ci(a,e.current)),mt=null;return}n.flags&32768?(Mt||o===1?e=!0:or||(vt&536870912)!==0?e=!1:(Ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),D0(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){D0(n,Ia);return}e=n.return;var a=bx(n.alternate,n,la);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=e}while(n!==null);nn===0&&(nn=5)}function D0(e,n){do{var a=Tx(e.alternate,e);if(a!==null){a.flags&=32767,mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){mt=e;return}mt=e=a}while(e!==null);nn=6,mt=null}function U0(e,n,a,o,c,f,_,R,I){e.cancelPendingCommit=null;do Xl();while(gn!==0);if((Ct&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,en(e,a,f,_,R,I),e===Wt&&(mt=Wt=null,vt=0),cr=n,Va=e,ca=a,Ef=f,bf=c,S0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zx(Q,function(){return F0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,c=F.p,F.p=2,_=Ct,Ct|=4;try{Ax(e,n,a)}finally{Ct=_,F.p=c,D.T=o}}gn=1,N0(),L0(),O0()}}function N0(){if(gn===1){gn=0;var e=Va,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=F.p;F.p=2;var c=Ct;Ct|=4;try{d0(n,e);var f=If,_=vp(e.containerInfo),R=f.focusedElem,I=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&_p(R.ownerDocument.documentElement,R)){if(I!==null&&cu(R)){var $=I.start,de=I.end;if(de===void 0&&(de=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(de,R.value.length);else{var ve=R.ownerDocument||document,se=ve&&ve.defaultView||window;if(se.getSelection){var le=se.getSelection(),We=R.textContent.length,Je=Math.min(I.start,We),Ht=I.end===void 0?Je:Math.min(I.end,We);!le.extend&&Je>Ht&&(_=Ht,Ht=Je,Je=_);var j=gp(R,Je),V=gp(R,Ht);if(j&&V&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var J=ve.createRange();J.setStart(j.node,j.offset),le.removeAllRanges(),Je>Ht?(le.addRange(J),le.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),le.addRange(J))}}}}for(ve=[],le=R;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ve.length;R++){var ge=ve[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}nc=!!Bf,If=Bf=null}finally{Ct=c,F.p=o,D.T=a}}e.current=n,gn=2}}function L0(){if(gn===2){gn=0;var e=Va,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=F.p;F.p=2;var c=Ct;Ct|=4;try{o0(e,n.alternate,n)}finally{Ct=c,F.p=o,D.T=a}}gn=3}}function O0(){if(gn===4||gn===3){gn=0,zt();var e=Va,n=cr,a=ca,o=S0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,cr=Va=null,P0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ga=null),Vr(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,c=F.p,F.p=2,D.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{D.T=n,F.p=c}}(ca&3)!==0&&Xl(),Oi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Tf?bo++:(bo=0,Tf=e):bo=0,To(0)}}function P0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function Xl(){return N0(),L0(),O0(),F0()}function F0(){if(gn!==5)return!1;var e=Va,n=Ef;Ef=0;var a=Vr(ca),o=D.T,c=F.p;try{F.p=32>a?32:a,D.T=null,a=bf,bf=null;var f=Va,_=ca;if(gn=0,cr=Va=null,ca=0,(Ct&6)!==0)throw Error(s(331));var R=Ct;if(Ct|=4,_0(f.current),p0(f,f.current,_,a),Ct=R,To(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{F.p=c,D.T=o,P0(e,n)}}function z0(e,n,a){n=ci(a,n),n=nf(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(et(e,2),Oi(e))}function Pt(e,n,a){if(e.tag===3)z0(e,e,a);else for(;n!==null;){if(n.tag===3){z0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=ci(a,e),a=Bm(2),o=Pa(n,a,2),o!==null&&(Im(a,o,n,e),et(o,2),Oi(o));break}}n=n.return}}function Cf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Sf=!0,c.add(a),e=Ox.bind(null,e,n,a),n.then(e,e))}function Ox(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>Re()-Bl?(Ct&2)===0&&ur(e,0):Mf|=a,lr===vt&&(lr=0)),Oi(e)}function B0(e,n){n===0&&(n=ye()),e=hs(e,n),e!==null&&(et(e,n),Oi(e))}function Px(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),B0(e,a)}function Fx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),B0(e,a)}function zx(e,n){return X(e,n)}var Wl=null,dr=null,wf=!1,ql=!1,Df=!1,Xa=0;function Oi(e){e!==dr&&e.next===null&&(dr===null?Wl=dr=e:dr=dr.next=e),ql=!0,wf||(wf=!0,Ix())}function To(e,n){if(!Df&&ql){Df=!0;do for(var a=!1,o=Wl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,V0(o,f))}else f=vt,f=he(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Be(o,f)||(a=!0,V0(o,f));o=o.next}while(a);Df=!1}}function Bx(){I0()}function I0(){ql=wf=!1;var e=0;Xa!==0&&Zx()&&(e=Xa);for(var n=Re(),a=null,o=Wl;o!==null;){var c=o.next,f=H0(o,n);f===0?(o.next=null,a===null?Wl=c:a.next=c,c===null&&(dr=a)):(a=o,(e!==0||(f&3)!==0)&&(ql=!0)),o=c}gn!==0&&gn!==5||To(e),Xa!==0&&(Xa=0)}function H0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Pe(f),R=1<<_,I=c[_];I===-1?((R&a)===0||(R&o)!==0)&&(c[_]=Ne(R,n)):I<=n&&(e.expiredLanes|=R),f&=~R}if(n=Wt,a=vt,a=he(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&$t(o),Vr(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=Ee;break;default:a=Q}return o=G0.bind(null,e),a=X(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&$t(o),e.callbackPriority=2,e.callbackNode=null,2}function G0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var o=vt;return o=he(e,e===Wt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(y0(e,o,n),H0(e,Re()),e.callbackNode!=null&&e.callbackNode===a?G0.bind(null,e):null)}function V0(e,n){if(Xl())return null;y0(e,n,!0)}function Ix(){Qx(function(){(Ct&6)!==0?X(C,Bx):I0()})}function Uf(){if(Xa===0){var e=Qs;e===0&&(e=it,it<<=1,(it&261888)===0&&(it=256)),Xa=e}return Xa}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cs(""+e)}function X0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Hx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=k0((c[En]||null).action),_=o.submitter;_&&(n=(n=_[En]||null)?k0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new al("action","action",null,o,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var I=_?X0(c,_):new FormData(c);Ku(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=_?X0(c,_):new FormData(c),Ku(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Nf=0;Nf<hu.length;Nf++){var Lf=hu[Nf],Gx=Lf.toLowerCase(),Vx=Lf[0].toUpperCase()+Lf.slice(1);yi(Gx,"on"+Vx)}yi(Mp,"onAnimationEnd"),yi(yp,"onAnimationIteration"),yi(Ep,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(ax,"onTransitionRun"),yi(sx,"onTransitionStart"),yi(rx,"onTransitionCancel"),yi(bp,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function W0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],I=R.instance,$=R.currentTarget;if(R=R.listener,I!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=$;try{f(c)}catch(de){ol(de)}c.currentTarget=null,f=I}else for(_=0;_<o.length;_++){if(R=o[_],I=R.instance,$=R.currentTarget,R=R.listener,I!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=$;try{f(c)}catch(de){ol(de)}c.currentTarget=null,f=I}}}}function gt(e,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var o=e+"__bubble";a.has(o)||(q0(n,e,2,!1),a.add(o))}function Of(e,n,a){var o=0;n&&(o|=4),q0(a,e,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Yl]){e[Yl]=!0,el.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Of("selectionchange",!1,n))}}function q0(e,n,a,o){switch(Mg(n)){case 2:var c=_S;break;case 8:c=vS;break;default:c=Kf}a=c.bind(null,n,a,e),c=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Ff(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=ba(R),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=f=_;continue e}R=R.parentNode}}o=o.return}Qh(function(){var $=f,de=Jc(a),ve=[];e:{var se=Tp.get(e);if(se!==void 0){var le=al,We=e;switch(e){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":le=Fv;break;case"focusin":We="focus",le=au;break;case"focusout":We="blur",le=au;break;case"beforeblur":case"afterblur":le=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Iv;break;case Mp:case yp:case Ep:le=Rv;break;case bp:le=Gv;break;case"scroll":case"scrollend":le=yv;break;case"wheel":le=kv;break;case"copy":case"cut":case"paste":le=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=np;break;case"toggle":case"beforetoggle":le=Wv}var Je=(n&4)!==0,Ht=!Je&&(e==="scroll"||e==="scrollend"),j=Je?se!==null?se+"Capture":null:se;Je=[];for(var V=$,J;V!==null;){var ge=V;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||j===null||(ge=Yr(V,j),ge!=null&&Je.push(Ro(V,ge,J))),Ht)break;V=V.return}0<Je.length&&(se=new le(se,We,null,a,de),ve.push({event:se,listeners:Je}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",se&&a!==Qc&&(We=a.relatedTarget||a.fromElement)&&(ba(We)||We[Yi]))break e;if((le||se)&&(se=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,le?(We=a.relatedTarget||a.toElement,le=$,We=We?ba(We):null,We!==null&&(Ht=u(We),Je=We.tag,We!==Ht||Je!==5&&Je!==27&&Je!==6)&&(We=null)):(le=null,We=$),le!==We)){if(Je=ep,ge="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Je=np,ge="onPointerLeave",j="onPointerEnter",V="pointer"),Ht=le==null?se:ls(le),J=We==null?se:ls(We),se=new Je(ge,V+"leave",le,a,de),se.target=Ht,se.relatedTarget=J,ge=null,ba(de)===$&&(Je=new Je(j,V+"enter",We,a,de),Je.target=J,Je.relatedTarget=Ht,ge=Je),Ht=ge,le&&We)t:{for(Je=Xx,j=le,V=We,J=0,ge=j;ge;ge=Je(ge))J++;ge=0;for(var Ke=V;Ke;Ke=Je(Ke))ge++;for(;0<J-ge;)j=Je(j),J--;for(;0<ge-J;)V=Je(V),ge--;for(;J--;){if(j===V||V!==null&&j===V.alternate){Je=j;break t}j=Je(j),V=Je(V)}Je=null}else Je=null;le!==null&&Y0(ve,se,le,Je,!1),We!==null&&Ht!==null&&Y0(ve,Ht,We,Je,!0)}}e:{if(se=$?ls($):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var Tt=up;else if(lp(se))if(fp)Tt=tx;else{Tt=$v;var Ye=Jv}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?$&&wt($.elementType)&&(Tt=up):Tt=ex;if(Tt&&(Tt=Tt(e,$))){cp(ve,Tt,a,de);break e}Ye&&Ye(e,se,$),e==="focusout"&&$&&se.type==="number"&&$.memoizedProps.value!=null&&pt(se,"number",se.value)}switch(Ye=$?ls($):window,e){case"focusin":(lp(Ye)||Ye.contentEditable==="true")&&(ks=Ye,uu=$,to=null);break;case"focusout":to=uu=ks=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,xp(ve,a,de);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":xp(ve,a,de)}var ct;if(ru)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Vs?rp(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(ip&&a.locale!=="ko"&&(Vs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Vs&&(ct=Jh()):(Ca=de,tu="value"in Ca?Ca.value:Ca.textContent,Vs=!0)),Ye=jl($,xt),0<Ye.length&&(xt=new tp(xt,e,null,a,de),ve.push({event:xt,listeners:Ye}),ct?xt.data=ct:(ct=op(a),ct!==null&&(xt.data=ct)))),(ct=Yv?jv(e,a):Zv(e,a))&&(xt=jl($,"onBeforeInput"),0<xt.length&&(Ye=new tp("onBeforeInput","beforeinput",null,a,de),ve.push({event:Ye,listeners:xt}),Ye.data=ct)),Hx(ve,e,$,a,de)}W0(ve,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Yr(e,a),c!=null&&o.unshift(Ro(e,c,f)),c=Yr(e,n),c!=null&&o.push(Ro(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Xx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Y0(e,n,a,o,c){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,I=R.alternate,$=R.stateNode;if(R=R.tag,I!==null&&I===o)break;R!==5&&R!==26&&R!==27||$===null||(I=$,c?($=Yr(a,f),$!=null&&_.unshift(Ro(a,$,I))):c||($=Yr(a,f),$!=null&&_.push(Ro(a,$,I)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function j0(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function Z0(e,n){return n=j0(n),j0(e)===n}function It(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Zn(e,""+o);break;case"className":Xe(e,"class",o);break;case"tabIndex":Xe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,a,o);break;case"style":Mi(e,o,f);break;case"data":if(n!=="object"){Xe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&gt("scroll",e);break;case"onScrollEnd":o!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":gt("beforetoggle",e),gt("toggle",e),Fe(e,"popover",o);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Fe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Di.get(a)||a,Fe(e,a,o))}}function zf(e,n,a,o,c,f){switch(a){case"style":Mi(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Zn(e,o):(typeof o=="number"||typeof o=="bigint")&&Zn(e,""+o);break;case"onScroll":o!=null&&gt("scroll",e);break;case"onScrollEnd":o!=null&&gt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Fe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:It(e,n,f,_,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),o&&It(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var R=f=_=c=null,I=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":c=de;break;case"type":_=de;break;case"checked":I=de;break;case"defaultChecked":$=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:It(e,n,o,de,a,null)}}Un(e,f,R,I,$,_,c,!1);return;case"select":gt("invalid",e),o=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:It(e,n,c,R,a,null)}n=f,a=_,e.multiple=!!o,n!=null?mn(e,!!o,n,!1):a!=null&&mn(e,!!o,a,!0);return;case"textarea":gt("invalid",e),f=c=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:It(e,n,_,R,a,null)}Si(e,o,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(e,n,I,o,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(o=0;o<Ao.length;o++)gt(Ao[o],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:It(e,n,$,o,a,null)}return;default:if(wt(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&zf(e,n,de,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&It(e,n,R,o,a,null))}function Yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,I=null,$=null,de=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=ve;default:o.hasOwnProperty(le)||It(e,n,le,null,o,ve)}}for(var se in o){var le=o[se];if(ve=a[se],o.hasOwnProperty(se)&&(le!=null||ve!=null))switch(se){case"type":f=le;break;case"name":c=le;break;case"checked":$=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&It(e,n,se,le,o,ve)}}Ge(e,_,R,I,$,de,f,c);return;case"select":le=_=R=se=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":le=I;default:o.hasOwnProperty(f)||It(e,n,f,null,o,I)}for(c in o)if(f=o[c],I=a[c],o.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":se=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==I&&It(e,n,c,f,o,I)}n=R,a=_,o=le,se!=null?mn(e,!!a,se,!1):!!o!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:It(e,n,R,null,o,c)}for(_ in o)if(c=o[_],f=a[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":se=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&It(e,n,_,c,o,f)}jn(e,se,le);return;case"option":for(var We in a)if(se=a[We],a.hasOwnProperty(We)&&se!=null&&!o.hasOwnProperty(We))switch(We){case"selected":e.selected=!1;break;default:It(e,n,We,null,o,se)}for(I in o)if(se=o[I],le=a[I],o.hasOwnProperty(I)&&se!==le&&(se!=null||le!=null))switch(I){case"selected":e.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:It(e,n,I,se,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)se=a[Je],a.hasOwnProperty(Je)&&se!=null&&!o.hasOwnProperty(Je)&&It(e,n,Je,null,o,se);for($ in o)if(se=o[$],le=a[$],o.hasOwnProperty($)&&se!==le&&(se!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:It(e,n,$,se,o,le)}return;default:if(wt(n)){for(var Ht in a)se=a[Ht],a.hasOwnProperty(Ht)&&se!==void 0&&!o.hasOwnProperty(Ht)&&zf(e,n,Ht,void 0,o,se);for(de in o)se=o[de],le=a[de],!o.hasOwnProperty(de)||se===le||se===void 0&&le===void 0||zf(e,n,de,se,o,le);return}}for(var j in a)se=a[j],a.hasOwnProperty(j)&&se!=null&&!o.hasOwnProperty(j)&&It(e,n,j,null,o,se);for(ve in o)se=o[ve],le=a[ve],!o.hasOwnProperty(ve)||se===le||se==null&&le==null||It(e,n,ve,se,o,le)}function K0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&K0(_)){for(_=0,R=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],$=I.startTime;if($>R)break;var de=I.transferSize,ve=I.initiatorType;de&&K0(ve)&&(I=I.responseEnd,_+=de*(I<R?1:(R-$)/(I-$)))}if(--o,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,If=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function Zx(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var $0=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(e){return eg.resolve(null).then(e).catch(Jx)}:$0;function Jx(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function tg(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),gr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ea]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Co(e.ownerDocument.body);a=c}while(a);gr(n)}function ng(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $x(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ea])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function eS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function ig(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function ag(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function sg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function rg(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qr(e)}var mi=new Map,og=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=F.d;F.d={f:nS,r:iS,D:aS,C:sS,L:rS,m:oS,X:cS,S:lS,M:uS};function nS(){var e=ua.f(),n=Gl();return e||n}function iS(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?bm(n):ua.r(e)}var hr=typeof document>"u"?null:document;function lg(e,n,a){var o=hr;if(o&&typeof n=="string"&&n){var c=Nt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),og.has(c)||(og.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Rn(n,"link",e),cn(n),o.head.appendChild(n)))}}function aS(e){ua.D(e),lg("dns-prefetch",e,null)}function sS(e,n){ua.C(e,n),lg("preconnect",e,n)}function rS(e,n,a){ua.L(e,n,a);var o=hr;if(o&&e&&n){var c='link[rel="preload"][as="'+Nt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Nt(a.imageSizes)+'"]')):c+='[href="'+Nt(e)+'"]';var f=c;switch(n){case"style":f=pr(e);break;case"script":f=mr(e)}mi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(wo(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),Rn(n,"link",e),cn(n),o.head.appendChild(n)))}}function oS(e,n){ua.m(e,n);var a=hr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Nt(o)+'"][href="'+Nt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(e)}if(!mi.has(f)&&(e=v({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),Rn(o,"link",e),cn(o),a.head.appendChild(o)}}}function lS(e,n,a){ua.S(e,n,a);var o=hr;if(o&&e){var c=Aa(o).hoistableStyles,f=pr(e);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(wo(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&qf(e,a);var I=_=o.createElement("link");cn(I),Rn(I,"link",e),I._p=new Promise(function($,de){I.onload=$,I.onerror=de}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ql(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function cS(e,n){ua.X(e,n);var a=hr;if(a&&e){var o=Aa(a).hoistableScripts,c=mr(e),f=o.get(c);f||(f=a.querySelector(Do(c)),f||(e=v({src:e,async:!0},n),(n=mi.get(c))&&Yf(e,n),f=a.createElement("script"),cn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function uS(e,n){ua.M(e,n);var a=hr;if(a&&e){var o=Aa(a).hoistableScripts,c=mr(e),f=o.get(c);f||(f=a.querySelector(Do(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=mi.get(c))&&Yf(e,n),f=a.createElement("script"),cn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function cg(e,n,a,o){var c=(c=oe.current)?Kl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Aa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=pr(a.href);var f=Aa(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(wo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||fS(c,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Aa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pr(e){return'href="'+Nt(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function ug(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function fS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),cn(n),e.head.appendChild(n))}function mr(e){return'[src="'+Nt(e)+'"]'}function Do(e){return"script[async]"+e}function fg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),Rn(o,"style",c),Ql(o,a.precedence,e),n.instance=o;case"stylesheet":c=pr(a.href);var f=e.querySelector(wo(c));if(f)return n.state.loading|=4,n.instance=f,cn(f),f;o=ug(a),(c=mi.get(c))&&qf(o,c),f=(e.ownerDocument||e).createElement("link"),cn(f);var _=f;return _._p=new Promise(function(R,I){_.onload=R,_.onerror=I}),Rn(f,"link",o),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=mr(a.src),(c=e.querySelector(Do(f)))?(n.instance=c,cn(c),c):(o=a,(c=mi.get(f))&&(o=v({},a),Yf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),cn(c),Rn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ql(o,a.precedence,e));return n.instance}function Ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function dg(e,n,a){if(Jl===null){var o=new Map,c=Jl=new Map;c.set(a,o)}else c=Jl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ea]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function dS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=pr(o.href),f=n.querySelector(wo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,cn(f);return}f=n.ownerDocument||n,o=ug(o),(c=mi.get(c))&&qf(o,c),f=f.createElement("link"),cn(f);var _=f;_._p=new Promise(function(R,I){_.onload=R,_.onerror=I}),Rn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function pS(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*jx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(mS,e),ec=null,$l.call(e))}function mS(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var o=a.get(null);else{a=new Map,ec.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,c),a.set(_,c),this.count++,o=$l.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function gS(e,n,a,o,c,f,_,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function mg(e,n,a,o,c,f,_,R,I,$,de,ve){return e=new gS(e,n,a,_,I,$,de,ve,R),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Du(f),e}function gg(e){return e?(e=qs,e):qs}function _g(e,n,a,o,c,f){c=gg(c),o.context===null?o.context=c:o.pendingContext=c,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(e,o,n),a!==null&&(Wn(a,e,n),lo(a,e,n))}function vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){vg(e,n),(e=e.alternate)&&vg(e,n)}function xg(e){if(e.tag===13||e.tag===31){var n=hs(e,67108864);n!==null&&Wn(n,e,67108864),Zf(e,67108864)}}function Sg(e){if(e.tag===13||e.tag===31){var n=ni();n=os(n);var a=hs(e,n);a!==null&&Wn(a,e,n),Zf(e,n)}}var nc=!0;function _S(e,n,a,o){var c=D.T;D.T=null;var f=F.p;try{F.p=2,Kf(e,n,a,o)}finally{F.p=f,D.T=c}}function vS(e,n,a,o){var c=D.T;D.T=null;var f=F.p;try{F.p=8,Kf(e,n,a,o)}finally{F.p=f,D.T=c}}function Kf(e,n,a,o){if(nc){var c=Qf(o);if(c===null)Ff(e,n,o,ic,a),yg(e,o);else if(SS(c,e,n,a,o))o.stopPropagation();else if(yg(e,o),n&4&&-1<xS.indexOf(e)){for(;c!==null;){var f=Ta(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Te(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var I=1<<31-Pe(_);R.entanglements[1]|=I,_&=~I}Oi(f),(Ct&6)===0&&(Il=Re()+500,To(0))}}break;case 31:case 13:R=hs(f,2),R!==null&&Wn(R,f,2),Gl(),Zf(f,2)}if(f=Qf(o),f===null&&Ff(e,n,o,ic,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Ff(e,n,o,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var ic=null;function Jf(e){if(ic=null,e=ba(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function Mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case C:return 2;case E:return 8;case Q:case _e:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var $f=!1,qa=null,Ya=null,ja=null,No=new Map,Lo=new Map,Za=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yg(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ta(n),n!==null&&xg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function SS(e,n,a,o,c){switch(n){case"focusin":return qa=Oo(qa,e,n,a,o,c),!0;case"dragenter":return Ya=Oo(Ya,e,n,a,o,c),!0;case"mouseover":return ja=Oo(ja,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return No.set(f,Oo(No.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Lo.set(f,Oo(Lo.get(f)||null,e,n,a,o,c)),!0}return!1}function Eg(e){var n=ba(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xr(e.priority,function(){Sg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xr(e.priority,function(){Sg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=Ta(a),n!==null&&xg(n),e.blockedOn=a,!1;n.shift()}return!0}function bg(e,n,a){ac(e)&&a.delete(n)}function MS(){$f=!1,qa!==null&&ac(qa)&&(qa=null),Ya!==null&&ac(Ya)&&(Ya=null),ja!==null&&ac(ja)&&(ja=null),No.forEach(bg),Lo.forEach(bg)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,MS)))}var rc=null;function Tg(e){rc!==e&&(rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function gr(e){function n(I){return sc(I,e)}qa!==null&&sc(qa,e),Ya!==null&&sc(Ya,e),ja!==null&&sc(ja,e),No.forEach(n),Lo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Eg(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],_=c[En]||null;if(typeof f=="function")_||Tg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[En]||null)R=_.formAction;else if(Jf(c)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Tg(a)}}}function Ag(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ed(e){this._internalRoot=e}oc.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();_g(a,o,e,n,null,null)},oc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_g(e.current,2,null,e,null,null),Gl(),n[Yi]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=kr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Eg(e)}};var Rg=t.version;if(Rg!=="19.2.7")throw Error(s(527,Rg,"19.2.7"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ce=lc.inject(yS),fe=lc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Om,f=Pm,_=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=mg(e,1,!1,null,null,a,o,null,c,f,_,Ag),e[Yi]=n.current,Pf(e),new ed(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=Om,_=Pm,R=Fm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=mg(e,1,!0,n,a??null,o,c,I,f,_,R,Ag),n.context=gg(null),a=n.current,o=ni(),o=os(o),c=Oa(o),c.callback=null,Pa(a,c,o),a=o,n.current.lanes=a,et(n,a),Oi(n),e[Yi]=n.current,Pf(e),new oc(n)},Fo.version="19.2.7",Fo}var zg;function NS(){if(zg)return id.exports;zg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),id.exports=US(),id.exports}var LS=NS();function OS(){const[r,t]=Cn.useState(!1),[i,s]=Cn.useState(!1);Cn.useEffect(()=>{const u=()=>t(window.scrollY>60);return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]);const l=()=>s(!1);return ne.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-700 ease-expo-out ${r?"border-b border-sand/60 bg-cream/95 backdrop-blur-sm":"border-b border-transparent bg-transparent"}`,children:[ne.jsxs("nav",{className:"mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12","aria-label":"Navigation principale",children:[ne.jsx("a",{href:"#",className:"font-display text-2xl tracking-tight",children:"Méridienne"}),ne.jsxs("div",{className:"hidden items-center gap-10 md:flex",children:[["Biens","L'Agence","Quartiers"].map(u=>ne.jsx("a",{href:`#${u.toLowerCase().replace("l'","")}`,className:"text-sm tracking-wide text-ink/60 transition-colors duration-300 ease-smooth-out hover:text-ink",children:u},u)),ne.jsx("a",{href:"#estimer",className:"border border-terracotta px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-terracotta transition-colors duration-300 ease-smooth-out hover:bg-terracotta hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream",children:"Estimer"})]}),ne.jsxs("button",{className:"flex flex-col gap-1.5 p-2 md:hidden",onClick:()=>s(u=>!u),"aria-label":i?"Fermer le menu":"Ouvrir le menu","aria-expanded":i,children:[ne.jsx("span",{className:`block h-px w-6 bg-ink transition-transform duration-500 ease-expo-out ${i?"translate-y-[7px] rotate-45":""}`}),ne.jsx("span",{className:`block h-px w-6 bg-ink transition-opacity duration-300 ${i?"opacity-0":""}`}),ne.jsx("span",{className:`block h-px w-6 bg-ink transition-transform duration-500 ease-expo-out ${i?"-translate-y-[7px] -rotate-45":""}`})]})]}),ne.jsx("div",{className:`overflow-hidden transition-[max-height,opacity] duration-500 ease-expo-out md:hidden ${i?"max-h-80 opacity-100":"max-h-0 opacity-0"}`,"aria-hidden":!i,children:ne.jsxs("div",{className:"flex flex-col gap-6 bg-cream px-6 pb-8 pt-2",children:[ne.jsx("a",{href:"#biens",className:"text-sm tracking-wide",onClick:l,children:"Biens"}),ne.jsx("a",{href:"#agence",className:"text-sm tracking-wide",onClick:l,children:"L'Agence"}),ne.jsx("a",{href:"#quartiers",className:"text-sm tracking-wide",onClick:l,children:"Quartiers"}),ne.jsx("a",{href:"#estimer",className:"inline-block self-start border border-terracotta px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-terracotta",onClick:l,children:"Estimer"})]})})]})}function ss({threshold:r=.15,rootMargin:t="0px 0px -60px 0px"}={}){const i=Cn.useRef(null),[s,l]=Cn.useState(!1);return Cn.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){l(!0);return}const d=i.current;if(!d)return;const h=new IntersectionObserver(([m])=>{m.isIntersecting&&(l(!0),h.unobserve(m.target))},{threshold:r,rootMargin:t});return h.observe(d),()=>h.unobserve(d)},[r,t]),[i,s]}function PS(){const r=Cn.useRef(null),[t,i]=ss({threshold:.05});return Cn.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=!1;const l=()=>{s||(requestAnimationFrame(()=>{r.current&&(r.current.style.transform=`translateY(${window.scrollY*.1}px)`),s=!1}),s=!0)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),ne.jsxs("section",{className:"relative flex min-h-screen items-end overflow-hidden pb-20 md:items-center md:pb-0",children:[ne.jsxs("div",{className:"absolute inset-0 md:left-[38%]","aria-hidden":"true",children:[ne.jsx("img",{ref:r,src:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",alt:"",className:"h-[115%] w-full object-cover will-change-transform",loading:"eager",fetchPriority:"high"}),ne.jsx("div",{className:"absolute inset-0 bg-cream/75 md:hero-overlay"})]}),ne.jsxs("div",{ref:t,className:`relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 transition-all duration-[1.2s] ease-expo-out ${i?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[ne.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.2em] text-ink/50",children:"Toulouse — Immobilier d'exception"}),ne.jsxs("h1",{className:"mt-5 max-w-3xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-tight",children:["L'art de vivre"," ",ne.jsx("em",{className:"font-display italic",children:"autrement"})]}),ne.jsxs("div",{className:"mt-10 flex items-center gap-5",children:[ne.jsx("span",{className:"block h-px w-16 bg-terracotta","aria-hidden":"true"}),ne.jsx("p",{className:"text-sm tracking-wide text-ink/55",children:"Biens d'exception & accompagnement sur-mesure"})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="184",FS=0,Bg=1,zS=2,Oc=1,BS=2,ko=3,rs=0,qn=1,ga=2,va=0,Lr=1,Ig=2,Hg=3,Gg=4,IS=5,Us=100,HS=101,GS=102,VS=103,kS=104,XS=200,WS=201,qS=202,YS=203,Id=204,Hd=205,jS=206,ZS=207,KS=208,QS=209,JS=210,$S=211,eM=212,tM=213,nM=214,Gd=0,Vd=1,kd=2,Pr=3,Xd=4,Wd=5,qd=6,Yd=7,H_=0,iM=1,aM=2,Hi=0,G_=1,V_=2,k_=3,X_=4,W_=5,q_=6,Y_=7,j_=300,Ps=301,Fr=302,od=303,ld=304,qc=306,jd=1e3,_a=1001,Zd=1002,wn=1003,sM=1004,cc=1005,Pn=1006,cd=1007,Ls=1008,vi=1009,Z_=1010,K_=1011,Yo=1012,Uh=1013,ki=1014,Bi=1015,Sa=1016,Nh=1017,Lh=1018,jo=1020,Q_=35902,J_=35899,$_=1021,ev=1022,wi=1023,Ma=1026,Os=1027,tv=1028,Oh=1029,Fs=1030,Ph=1031,Fh=1033,Pc=33776,Fc=33777,zc=33778,Bc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,eh=36196,th=37492,nh=37496,ih=37488,ah=37489,Hc=37490,sh=37491,rh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,Sh=36492,Mh=36494,yh=36495,Eh=36283,bh=36284,Gc=36285,Th=36286,rM=3200,Vg=0,oM=1,is="",si="srgb",Vc="srgb-linear",kc="linear",Ft="srgb",_r=7680,kg=519,lM=512,cM=513,uM=514,zh=515,fM=516,dM=517,Bh=518,hM=519,Xg=35044,Wg="300 es",Ii=2e3,Xc=2001;function pM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mM(){const r=Zo("canvas");return r.style.display="block",r}const qg={};function Yg(...r){const t="THREE."+r.shift();console.log(t,...r)}function nv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function tt(...r){r=nv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Et(...r){r=nv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Ah(...r){const t=r.join(" ");t in qg||(qg[t]=!0,tt(...r))}function gM(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const _M={[Gd]:Vd,[kd]:qd,[Xd]:Yd,[Pr]:Wd,[Vd]:Gd,[qd]:kd,[Yd]:Xd,[Wd]:Pr};class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jg=1234567;const Wo=Math.PI/180,Ko=180/Math.PI;function Ir(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function St(r,t,i){return Math.max(t,Math.min(i,r))}function Ih(r,t){return(r%t+t)%t}function vM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function xM(r,t,i){return r!==t?(i-r)/(t-r):0}function qo(r,t,i){return(1-i)*r+i*t}function SM(r,t,i,s){return qo(r,t,1-Math.exp(-i*s))}function MM(r,t=1){return t-Math.abs(Ih(r,t*2)-t)}function yM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function EM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function bM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function TM(r,t){return r+Math.random()*(t-r)}function AM(r){return r*(.5-Math.random())}function RM(r){r!==void 0&&(jg=r);let t=jg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function CM(r){return r*Wo}function wM(r){return r*Ko}function DM(r){return(r&r-1)===0&&r!==0}function UM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function NM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function LM(r,t,i,s,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((t+s)/2),x=d((t+s)/2),v=u((t-s)/2),g=d((t-s)/2),y=u((s-t)/2),A=d((s-t)/2);switch(l){case"XYX":r.set(h*x,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*x,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*x,h*p);break;case"XZX":r.set(h*x,m*A,m*y,h*p);break;case"YXY":r.set(m*y,h*x,m*A,h*p);break;case"ZYZ":r.set(m*A,m*y,h*x,h*p);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Nr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zg={DEG2RAD:Wo,RAD2DEG:Ko,generateUUID:Ir,clamp:St,euclideanModulo:Ih,mapLinear:vM,inverseLerp:xM,lerp:qo,damp:SM,pingpong:MM,smoothstep:yM,smootherstep:EM,randInt:bM,randFloat:TM,randFloatSpread:AM,seededRandom:RM,degToRad:CM,radToDeg:wM,isPowerOfTwo:DM,ceilPowerOfTwo:UM,floorPowerOfTwo:NM,setQuaternionFromProperEuler:LM,normalize:Bn,denormalize:Nr},Wh=class Wh{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;let Vt=Wh;class Hr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3],g=u[d+0],y=u[d+1],A=u[d+2],U=u[d+3];if(v!==U||m!==g||p!==y||x!==A){let M=m*g+p*y+x*A+v*U;M<0&&(g=-g,y=-y,A=-A,U=-U,M=-M);let S=1-h;if(M<.9995){const w=Math.acos(M),P=Math.sin(w);S=Math.sin(S*w)/P,h=Math.sin(h*w)/P,m=m*S+g*h,p=p*S+y*h,x=x*S+A*h,v=v*S+U*h}else{m=m*S+g*h,p=p*S+y*h,x=x*S+A*h,v=v*S+U*h;const w=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=w,p*=w,x*=w,v*=w}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=u[d],g=u[d+1],y=u[d+2],A=u[d+3];return t[i]=h*A+x*v+m*y-p*g,t[i+1]=m*A+x*g+p*v-h*y,t[i+2]=p*A+x*y+h*g-m*v,t[i+3]=x*A-h*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),v=h(u/2),g=m(s/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=g*x*v+p*y*A,this._y=p*y*v-g*x*A,this._z=p*x*A+g*y*v,this._w=p*x*v-g*y*A;break;case"YXZ":this._x=g*x*v+p*y*A,this._y=p*y*v-g*x*A,this._z=p*x*A-g*y*v,this._w=p*x*v+g*y*A;break;case"ZXY":this._x=g*x*v-p*y*A,this._y=p*y*v+g*x*A,this._z=p*x*A+g*y*v,this._w=p*x*v-g*y*A;break;case"ZYX":this._x=g*x*v-p*y*A,this._y=p*y*v+g*x*A,this._z=p*x*A-g*y*v,this._w=p*x*v+g*y*A;break;case"YZX":this._x=g*x*v+p*y*A,this._y=p*y*v+g*x*A,this._z=p*x*A-g*y*v,this._w=p*x*v-g*y*A;break;case"XZY":this._x=g*x*v-p*y*A,this._y=p*y*v-g*x*A,this._z=p*x*A+g*y*v,this._w=p*x*v+g*y*A;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],g=s+h+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(s>h&&s>v){const y=2*Math.sqrt(1+s-h-v);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-s-v);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+v-s-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-s*p,this._z=u*x+d*p+s*m-l*h,this._w=d*x-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qh=class qh{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),x=2*(h*i-u*l),v=2*(u*s-d*i);return this.x=i+m*p+d*v-h*x,this.y=s+m*x+h*p-u*v,this.z=l+m*v+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ud.copy(this).projectOnVector(t),this.sub(ud)}reflect(t){return this.sub(ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;let re=qh;const ud=new re,Kg=new Hr,Yh=class Yh{constructor(t,i,s,l,u,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],v=s[7],g=s[2],y=s[5],A=s[8],U=l[0],M=l[3],S=l[6],w=l[1],P=l[4],L=l[7],k=l[2],O=l[5],B=l[8];return u[0]=d*U+h*w+m*k,u[3]=d*M+h*P+m*O,u[6]=d*S+h*L+m*B,u[1]=p*U+x*w+v*k,u[4]=p*M+x*P+v*O,u[7]=p*S+x*L+v*B,u[2]=g*U+y*w+A*k,u[5]=g*M+y*P+A*O,u[8]=g*S+y*L+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-s*u*x+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=x*d-h*p,g=h*m-x*u,y=p*u-d*m,A=i*v+s*g+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/A;return t[0]=v*U,t[1]=(l*p-x*s)*U,t[2]=(h*s-l*d)*U,t[3]=g*U,t[4]=(x*i-l*m)*U,t[5]=(l*u-h*i)*U,t[6]=y*U,t[7]=(s*m-p*i)*U,t[8]=(d*i-s*u)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(fd.makeScale(t,i)),this}rotate(t){return this.premultiply(fd.makeRotation(-t)),this}translate(t,i){return this.premultiply(fd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yh.prototype.isMatrix3=!0;let st=Yh;const fd=new st,Qg=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OM(){const r={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ft&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ah("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ah("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vc]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ft,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const yt=OM();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class PM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{vr===void 0&&(vr=Zo("canvas")),vr.width=t.width,vr.height=t.height;const l=vr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=xa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FM=0;class Hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(dd(l[d].image)):u.push(dd(l[d]))}else u=dd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let zM=0;const hd=new re;class Fn extends Bs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=_a,l=_a,u=Pn,d=Ls,h=wi,m=vi,p=Fn.DEFAULT_ANISOTROPY,x=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Ir(),this.name="",this.source=new Hh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){tt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=j_;Fn.DEFAULT_ANISOTROPY=1;const jh=class jh{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],x=m[4],v=m[8],g=m[1],y=m[5],A=m[9],U=m[2],M=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-U)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+U)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(y+1)/2,k=(S+1)/2,O=(x+g)/4,B=(v+U)/4,b=(A+M)/4;return P>L&&P>k?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=O/s,u=B/s):L>k?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=O/l,u=b/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=B/u,l=b/u),this.set(s,l,u,i),this}let w=Math.sqrt((M-A)*(M-A)+(v-U)*(v-U)+(g-x)*(g-x));return Math.abs(w)<.001&&(w=1),this.x=(M-A)/w,this.y=(v-U)/w,this.z=(g-x)/w,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jh.prototype.isVector4=!0;let ln=jh;class BM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new Fn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends BM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class iv extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=class Wc{constructor(t,i,s,l,u,d,h,m,p,x,v,g,y,A,U,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,x,v,g,y,A,U,M)}set(t,i,s,l,u,d,h,m,p,x,v,g,y,A,U,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=g,S[3]=y,S[7]=A,S[11]=U,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/xr.setFromMatrixColumn(t,0).length(),u=1/xr.setFromMatrixColumn(t,1).length(),d=1/xr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const g=d*x,y=d*v,A=h*x,U=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=g-U*p,i[9]=-h*m,i[2]=U-g*p,i[6]=A+y*p,i[10]=d*m}else if(t.order==="YXZ"){const g=m*x,y=m*v,A=p*x,U=p*v;i[0]=g+U*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=y*h-A,i[6]=U+g*h,i[10]=d*m}else if(t.order==="ZXY"){const g=m*x,y=m*v,A=p*x,U=p*v;i[0]=g-U*h,i[4]=-d*v,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*x,i[9]=U-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const g=d*x,y=d*v,A=h*x,U=h*v;i[0]=m*x,i[4]=A*p-y,i[8]=g*p+U,i[1]=m*v,i[5]=U*p+g,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,y=d*p,A=h*m,U=h*p;i[0]=m*x,i[4]=U-g*v,i[8]=A*v+y,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*v+A,i[10]=g-U*v}else if(t.order==="XZY"){const g=d*m,y=d*p,A=h*m,U=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=g*v+U,i[5]=d*x,i[9]=y*v-A,i[2]=A*v-y,i[6]=h*x,i[10]=U*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HM,t,GM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Qa.crossVectors(s,ii),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Qa.crossVectors(s,ii)),Qa.normalize(),uc.crossVectors(ii,Qa),l[0]=Qa.x,l[4]=uc.x,l[8]=ii.x,l[1]=Qa.y,l[5]=uc.y,l[9]=ii.y,l[2]=Qa.z,l[6]=uc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],v=s[5],g=s[9],y=s[13],A=s[2],U=s[6],M=s[10],S=s[14],w=s[3],P=s[7],L=s[11],k=s[15],O=l[0],B=l[4],b=l[8],z=l[12],Z=l[1],H=l[5],Y=l[9],ue=l[13],me=l[2],W=l[6],D=l[10],F=l[14],ie=l[3],pe=l[7],xe=l[11],N=l[15];return u[0]=d*O+h*Z+m*me+p*ie,u[4]=d*B+h*H+m*W+p*pe,u[8]=d*b+h*Y+m*D+p*xe,u[12]=d*z+h*ue+m*F+p*N,u[1]=x*O+v*Z+g*me+y*ie,u[5]=x*B+v*H+g*W+y*pe,u[9]=x*b+v*Y+g*D+y*xe,u[13]=x*z+v*ue+g*F+y*N,u[2]=A*O+U*Z+M*me+S*ie,u[6]=A*B+U*H+M*W+S*pe,u[10]=A*b+U*Y+M*D+S*xe,u[14]=A*z+U*ue+M*F+S*N,u[3]=w*O+P*Z+L*me+k*ie,u[7]=w*B+P*H+L*W+k*pe,u[11]=w*b+P*Y+L*D+k*xe,u[15]=w*z+P*ue+L*F+k*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],v=t[6],g=t[10],y=t[14],A=t[3],U=t[7],M=t[11],S=t[15],w=m*y-p*g,P=h*y-p*v,L=h*g-m*v,k=d*y-p*x,O=d*g-m*x,B=d*v-h*x;return i*(U*w-M*P+S*L)-s*(A*w-M*k+S*O)+l*(A*P-U*k+S*B)-u*(A*L-U*O+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=t[9],g=t[10],y=t[11],A=t[12],U=t[13],M=t[14],S=t[15],w=i*h-s*d,P=i*m-l*d,L=i*p-u*d,k=s*m-l*h,O=s*p-u*h,B=l*p-u*m,b=x*U-v*A,z=x*M-g*A,Z=x*S-y*A,H=v*M-g*U,Y=v*S-y*U,ue=g*S-y*M,me=w*ue-P*Y+L*H+k*Z-O*z+B*b;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/me;return t[0]=(h*ue-m*Y+p*H)*W,t[1]=(l*Y-s*ue-u*H)*W,t[2]=(U*B-M*O+S*k)*W,t[3]=(g*O-v*B-y*k)*W,t[4]=(m*Z-d*ue-p*z)*W,t[5]=(i*ue-l*Z+u*z)*W,t[6]=(M*L-A*B-S*P)*W,t[7]=(x*B-g*L+y*P)*W,t[8]=(d*Y-h*Z+p*b)*W,t[9]=(s*Z-i*Y-u*b)*W,t[10]=(A*O-U*L+S*w)*W,t[11]=(v*L-x*O-y*w)*W,t[12]=(h*z-d*H-m*b)*W,t[13]=(i*H-s*z+l*b)*W,t[14]=(U*P-A*k-M*w)*W,t[15]=(x*k-v*P+g*w)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,v=h+h,g=u*p,y=u*x,A=u*v,U=d*x,M=d*v,S=h*v,w=m*p,P=m*x,L=m*v,k=s.x,O=s.y,B=s.z;return l[0]=(1-(U+S))*k,l[1]=(y+L)*k,l[2]=(A-P)*k,l[3]=0,l[4]=(y-L)*O,l[5]=(1-(g+S))*O,l[6]=(M+w)*O,l[7]=0,l[8]=(A+P)*B,l[9]=(M-w)*B,l[10]=(1-(g+U))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let d=xr.set(l[0],l[1],l[2]).length();const h=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ti.copy(this);const p=1/d,x=1/h,v=1/m;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,l,u,d,h=Ii,m=!1){const p=this.elements,x=2*u/(i-t),v=2*u/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let A,U;if(m)A=u/(d-u),U=d*u/(d-u);else if(h===Ii)A=-(d+u)/(d-u),U=-2*d*u/(d-u);else if(h===Xc)A=-d/(d-u),U=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Ii,m=!1){const p=this.elements,x=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let A,U;if(m)A=1/(d-u),U=d/(d-u);else if(h===Ii)A=-2/(d-u),U=-(d+u)/(d-u);else if(h===Xc)A=-1/(d-u),U=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Wc.prototype.isMatrix4=!0;let _n=Wc;const xr=new re,Ti=new _n,HM=new re(0,0,0),GM=new re(1,1,1),Qa=new re,uc=new re,ii=new re,$g=new _n,e_=new Hr;class zs{constructor(t=0,i=0,s=0,l=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,y),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $g.makeRotationFromQuaternion(t),this.setFromRotationMatrix($g,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return e_.setFromEuler(this),this.setFromQuaternion(e_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VM=0;const t_=new re,Sr=new Hr,fa=new _n,fc=new re,zo=new re,kM=new re,XM=new Hr,n_=new re(1,0,0),i_=new re(0,1,0),a_=new re(0,0,1),s_={type:"added"},WM={type:"removed"},Mr={type:"childadded",child:null},pd={type:"childremoved",child:null};class ri extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const t=new re,i=new zs,s=new Hr,l=new re(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new _n},normalMatrix:{value:new st}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(n_,t)}rotateY(t){return this.rotateOnAxis(i_,t)}rotateZ(t){return this.rotateOnAxis(a_,t)}translateOnAxis(t,i){return t_.copy(t).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(n_,t)}translateY(t){return this.translateOnAxis(i_,t)}translateZ(t){return this.translateOnAxis(a_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(zo,fc,this.up):fa.lookAt(fc,zo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(fa),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WM),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,kM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,XM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),v=d(t.shapes),g=d(t.skeletons),y=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ri.DEFAULT_UP=new re(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dc extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const U of t.hand.values()){const M=i.getJointPose(U,s),S=this._getHandJoint(p,U);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=x.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&g>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new dc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},hc={h:0,s:0,l:0};function gd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Gt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,yt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=yt.workingColorSpace){return this.r=t,this.g=i,this.b=s,yt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=yt.workingColorSpace){if(t=Ih(t,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=gd(d,u,t+1/3),this.g=gd(d,u,t),this.b=gd(d,u,t-1/3)}return yt.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(u){u!==void 0&&parseFloat(u)<1&&tt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:tt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=sv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return yt.workingToColorSpace(On.copy(this),t),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=yt.workingColorSpace){yt.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=yt.workingColorSpace){return yt.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=si){yt.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(hc);const s=qo(Ja.h,hc.h,i),l=qo(Ja.s,hc.s,i),u=qo(Ja.l,hc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Gt;Gt.NAMES=sv;class YM extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zs,this.environmentIntensity=1,this.environmentRotation=new zs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new re,da=new re,_d=new re,ha=new re,yr=new re,Er=new re,r_=new re,vd=new re,xd=new re,Sd=new re,Md=new ln,yd=new ln,Ed=new ln;class Ci{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ai.subVectors(l,i),da.subVectors(s,i),_d.subVectors(t,i);const d=Ai.dot(Ai),h=Ai.dot(da),m=Ai.dot(_d),p=da.dot(da),x=da.dot(_d),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const g=1/v,y=(p*m-h*x)*g,A=(d*x-h*m)*g;return u.set(1-y-A,A,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return Md.setScalar(0),yd.setScalar(0),Ed.setScalar(0),Md.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Md,u.x),d.addScaledVector(yd,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;yr.subVectors(l,s),Er.subVectors(u,s),vd.subVectors(t,s);const m=yr.dot(vd),p=Er.dot(vd);if(m<=0&&p<=0)return i.copy(s);xd.subVectors(t,l);const x=yr.dot(xd),v=Er.dot(xd);if(x>=0&&v<=x)return i.copy(l);const g=m*v-x*p;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(yr,d);Sd.subVectors(t,u);const y=yr.dot(Sd),A=Er.dot(Sd);if(A>=0&&y<=A)return i.copy(u);const U=y*p-m*A;if(U<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(Er,h);const M=x*A-y*v;if(M<=0&&v-x>=0&&y-A>=0)return r_.subVectors(u,l),h=(v-x)/(v-x+(y-A)),i.copy(l).addScaledVector(r_,h);const S=1/(M+U+g);return d=U*S,h=g*S,i.copy(s).addScaledVector(yr,d).addScaledVector(Er,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ri):Ri.fromBufferAttribute(u,d),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),mc.subVectors(this.max,Bo),br.subVectors(t.a,Bo),Tr.subVectors(t.b,Bo),Ar.subVectors(t.c,Bo),$a.subVectors(Tr,br),es.subVectors(Ar,Tr),As.subVectors(br,Ar);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-As.z,As.y,$a.z,0,-$a.x,es.z,0,-es.x,As.z,0,-As.x,-$a.y,$a.x,0,-es.y,es.x,0,-As.y,As.x,0];return!bd(i,br,Tr,Ar,mc)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,br,Tr,Ar,mc))?!1:(gc.crossVectors($a,es),i=[gc.x,gc.y,gc.z],bd(i,br,Tr,Ar,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new re,new re,new re,new re,new re,new re,new re,new re],Ri=new re,pc=new Qo,br=new re,Tr=new re,Ar=new re,$a=new re,es=new re,As=new re,Bo=new re,mc=new re,gc=new re,Rs=new re;function bd(r,t,i,s,l){for(let u=0,d=r.length-3;u<=d;u+=3){Rs.fromArray(r,u);const h=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=t.dot(Rs),p=i.dot(Rs),x=s.dot(Rs);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const pn=new re,_c=new Vt;let jM=0;class Vi extends Bs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Xg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Nr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Nr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Nr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Nr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Nr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class rv extends Vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ov extends Vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class xi extends Vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ZM=new Qo,Io=new re,Td=new re;class Gh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ZM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(Td)),this.expandByPoint(Io.copy(t.center).sub(Td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let KM=0;const gi=new _n,Ad=new ri,Rr=new re,ai=new Qo,Ho=new Qo,Mn=new re;class qi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pM(t)?ov:rv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new st().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new xi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ai.min,Ho.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Ho.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Ho.min),ai.expandByPoint(Ho.max))}ai.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Mn.fromBufferAttribute(h,p),m&&(Rr.fromBufferAttribute(t,p),Mn.add(Rr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new re,m[b]=new re;const p=new re,x=new re,v=new re,g=new Vt,y=new Vt,A=new Vt,U=new re,M=new re;function S(b,z,Z){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,z),v.fromBufferAttribute(s,Z),g.fromBufferAttribute(u,b),y.fromBufferAttribute(u,z),A.fromBufferAttribute(u,Z),x.sub(p),v.sub(p),y.sub(g),A.sub(g);const H=1/(y.x*A.y-A.x*y.y);isFinite(H)&&(U.copy(x).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(x,-A.x).multiplyScalar(H),h[b].add(U),h[z].add(U),h[Z].add(U),m[b].add(M),m[z].add(M),m[Z].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,z=w.length;b<z;++b){const Z=w[b],H=Z.start,Y=Z.count;for(let ue=H,me=H+Y;ue<me;ue+=3)S(t.getX(ue+0),t.getX(ue+1),t.getX(ue+2))}const P=new re,L=new re,k=new re,O=new re;function B(b){k.fromBufferAttribute(l,b),O.copy(k);const z=h[b];P.copy(z),P.sub(k.multiplyScalar(k.dot(z))).normalize(),L.crossVectors(O,z);const H=L.dot(m[b])<0?-1:1;d.setXYZW(b,P.x,P.y,P.z,H)}for(let b=0,z=w.length;b<z;++b){const Z=w[b],H=Z.start,Y=Z.count;for(let ue=H,me=H+Y;ue<me;ue+=3)B(t.getX(ue+0)),B(t.getX(ue+1)),B(t.getX(ue+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,x=new re,v=new re;if(t)for(let g=0,y=t.count;g<y;g+=3){const A=t.getX(g+0),U=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,U),d.fromBufferAttribute(i,M),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),h.add(x),m.add(x),p.add(x),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,v=h.normalized,g=new p.constructor(m.length*x);let y=0,A=0;for(let U=0,M=m.length;U<M;U++){h.isInterleavedBufferAttribute?y=m[U]*h.data.stride+h.offset:y=m[U]*x;for(let S=0;S<x;S++)g[A++]=p[y++]}return new Vi(g,x,v)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,v=p.length;x<v;x++){const g=p[x],y=t(g,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],v=u[p];for(let g=0,y=v.length;g<y;g++)x.push(v[g].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let QM=0;class Yc extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Lr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Hd,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){tt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Id&&(s.blendSrc=this.blendSrc),this.blendDst!==Hd&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ma=new re,Rd=new re,vc=new re,ts=new re,Cd=new re,xc=new re,wd=new re;class JM{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Rd.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Rd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(vc),h=ts.dot(this.direction),m=-ts.dot(vc),p=ts.lengthSq(),x=Math.abs(1-d*d);let v,g,y,A;if(x>0)if(v=d*m-h,g=d*h-m,A=u*x,v>=0)if(g>=-A)if(g<=A){const U=1/x;v*=U,g*=U,y=v*(v+d*g+2*h)+g*(d*v+g+2*m)+p}else g=u,v=Math.max(0,-(d*g+h)),y=-v*v+g*(g+2*m)+p;else g=-u,v=Math.max(0,-(d*g+h)),y=-v*v+g*(g+2*m)+p;else g<=-A?(v=Math.max(0,-(-d*u+h)),g=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+g*(g+2*m)+p):g<=A?(v=0,g=Math.min(Math.max(-u,-m),u),y=g*(g+2*m)+p):(v=Math.max(0,-(d*u+h)),g=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+g*(g+2*m)+p);else g=d>0?-u:u,v=Math.max(0,-(d*g+h)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Rd).addScaledVector(vc,g),y}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),x>=0?(u=(t.min.y-g.y)*x,d=(t.max.y-g.y)*x):(u=(t.max.y-g.y)*x,d=(t.min.y-g.y)*x),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,u){Cd.subVectors(i,t),xc.subVectors(s,t),wd.crossVectors(Cd,xc);let d=this.direction.dot(wd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ts.subVectors(this.origin,t);const m=h*this.direction.dot(xc.crossVectors(ts,xc));if(m<0)return null;const p=h*this.direction.dot(Cd.cross(ts));if(p<0||m+p>d)return null;const x=-h*ts.dot(wd);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vh extends Yc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zs,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const o_=new _n,Cs=new JM,Sc=new Gh,l_=new re,Mc=new re,yc=new re,Ec=new re,Dd=new re,bc=new re,c_=new re,Tc=new re;class Xi extends ri{constructor(t=new qi,i=new Vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){bc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],v=u[m];x!==0&&(Dd.fromBufferAttribute(v,t),d?bc.addScaledVector(Dd,x):bc.addScaledVector(Dd.sub(i),x))}i.add(bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(u),Cs.copy(t.ray).recast(t.near),!(Sc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Sc,l_)===null||Cs.origin.distanceToSquared(l_)>(t.far-t.near)**2))&&(o_.copy(u).invert(),Cs.copy(t.ray).applyMatrix4(o_),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,g=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,U=g.length;A<U;A++){const M=g[A],S=d[M.materialIndex],w=Math.max(M.start,y.start),P=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,k=P;L<k;L+=3){const O=h.getX(L),B=h.getX(L+1),b=h.getX(L+2);l=Ac(this,S,t,s,p,x,v,O,B,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),U=Math.min(h.count,y.start+y.count);for(let M=A,S=U;M<S;M+=3){const w=h.getX(M),P=h.getX(M+1),L=h.getX(M+2);l=Ac(this,d,t,s,p,x,v,w,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,U=g.length;A<U;A++){const M=g[A],S=d[M.materialIndex],w=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,k=P;L<k;L+=3){const O=L,B=L+1,b=L+2;l=Ac(this,S,t,s,p,x,v,O,B,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),U=Math.min(m.count,y.start+y.count);for(let M=A,S=U;M<S;M+=3){const w=M,P=M+1,L=M+2;l=Ac(this,d,t,s,p,x,v,w,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function $M(r,t,i,s,l,u,d,h){let m;if(t.side===qn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===rs,h),m===null)return null;Tc.copy(h),Tc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:r}}function Ac(r,t,i,s,l,u,d,h,m,p){r.getVertexPosition(h,Mc),r.getVertexPosition(m,yc),r.getVertexPosition(p,Ec);const x=$M(r,t,i,s,Mc,yc,Ec,c_);if(x){const v=new re;Ci.getBarycoord(c_,Mc,yc,Ec,v),l&&(x.uv=Ci.getInterpolatedAttribute(l,h,m,p,v,new Vt)),u&&(x.uv1=Ci.getInterpolatedAttribute(u,h,m,p,v,new Vt)),d&&(x.normal=Ci.getInterpolatedAttribute(d,h,m,p,v,new re),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new re,materialIndex:0};Ci.getNormal(Mc,yc,Ec,g.normal),x.face=g,x.barycoord=v}return x}class ey extends Fn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=wn,x=wn,v,g){super(null,d,h,m,p,x,l,u,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new re,ty=new re,ny=new st;class Ds{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ud.subVectors(s,i).cross(ty.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Ud),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ny.getNormalMatrix(t),l=this.coplanarPoint(Ud).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Gh,iy=new Vt(.5,.5),Rc=new re;class lv{constructor(t=new Ds,i=new Ds,s=new Ds,l=new Ds,u=new Ds,d=new Ds){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],v=u[5],g=u[6],y=u[7],A=u[8],U=u[9],M=u[10],S=u[11],w=u[12],P=u[13],L=u[14],k=u[15];if(l[0].setComponents(p-d,y-x,S-A,k-w).normalize(),l[1].setComponents(p+d,y+x,S+A,k+w).normalize(),l[2].setComponents(p+h,y+v,S+U,k+P).normalize(),l[3].setComponents(p-h,y-v,S-U,k-P).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(p-m,y-g,S-M,k-L).normalize();else if(l[4].setComponents(p-m,y-g,S-M,k-L).normalize(),i===Ii)l[5].setComponents(p+m,y+g,S+M,k+L).normalize();else if(i===Xc)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=iy.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cv extends Fn{constructor(t=[],i=Ps,s,l,u,d,h,m,p,x){super(t,i,s,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zr extends Fn{constructor(t,i,s=ki,l,u,d,h=wn,m=wn,p,x=Ma,v=1){if(x!==Ma&&x!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,u,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ay extends zr{constructor(t,i=ki,s=Ps,l,u,d=wn,h=wn,m,p=Ma){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,s,l,u,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class uv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jo extends qi{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],v=[];let g=0,y=0;A("z","y","x",-1,-1,s,i,t,d,u,0),A("z","y","x",1,-1,s,i,-t,d,u,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new xi(p,3)),this.setAttribute("normal",new xi(x,3)),this.setAttribute("uv",new xi(v,2));function A(U,M,S,w,P,L,k,O,B,b,z){const Z=L/B,H=k/b,Y=L/2,ue=k/2,me=O/2,W=B+1,D=b+1;let F=0,ie=0;const pe=new re;for(let xe=0;xe<D;xe++){const N=xe*H-ue;for(let K=0;K<W;K++){const Se=K*Z-Y;pe[U]=Se*w,pe[M]=N*P,pe[S]=me,p.push(pe.x,pe.y,pe.z),pe[U]=0,pe[M]=0,pe[S]=O>0?1:-1,x.push(pe.x,pe.y,pe.z),v.push(K/B),v.push(1-xe/b),F+=1}}for(let xe=0;xe<b;xe++)for(let N=0;N<B;N++){const K=g+N+W*xe,Se=g+N+W*(xe+1),Ae=g+(N+1)+W*(xe+1),De=g+(N+1)+W*xe;m.push(K,Se,De),m.push(Se,Ae,De),ie+=6}h.addGroup(y,ie,z),y+=ie,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jc extends qi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,v=t/h,g=i/m,y=[],A=[],U=[],M=[];for(let S=0;S<x;S++){const w=S*g-d;for(let P=0;P<p;P++){const L=P*v-u;A.push(L,-w,0),U.push(0,0,1),M.push(P/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<h;w++){const P=w+p*S,L=w+p*(S+1),k=w+1+p*(S+1),O=w+1+p*S;y.push(P,L,O),y.push(L,k,O)}this.setIndex(y),this.setAttribute("position",new xi(A,3)),this.setAttribute("normal",new xi(U,3)),this.setAttribute("uv",new xi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.width,t.height,t.widthSegments,t.heightSegments)}}class kh extends qi{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const x=[],v=new re,g=new re,y=[],A=[],U=[],M=[];for(let S=0;S<=s;S++){const w=[],P=S/s;let L=0;S===0&&d===0?L=.5/i:S===s&&m===Math.PI&&(L=-.5/i);for(let k=0;k<=i;k++){const O=k/i;v.x=-t*Math.cos(l+O*u)*Math.sin(d+P*h),v.y=t*Math.cos(d+P*h),v.z=t*Math.sin(l+O*u)*Math.sin(d+P*h),A.push(v.x,v.y,v.z),g.copy(v).normalize(),U.push(g.x,g.y,g.z),M.push(O+L,1-P),w.push(p++)}x.push(w)}for(let S=0;S<s;S++)for(let w=0;w<i;w++){const P=x[S][w+1],L=x[S][w],k=x[S+1][w],O=x[S+1][w+1];(S!==0||d>0)&&y.push(P,L,O),(S!==s-1||m<Math.PI)&&y.push(L,k,O)}this.setIndex(y),this.setAttribute("position",new xi(A,3)),this.setAttribute("normal",new xi(U,3)),this.setAttribute("uv",new xi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Br(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(u_(l))l.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(u_(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)t[l]=s[l]}return t}function u_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function sy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function fv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}const ry={clone:Br,merge:In};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Yc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=sy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class cy extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uy extends Yc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fy extends Yc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(f_(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!f_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function f_(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class dy{constructor(t,i,s){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(x){h++,u===!1&&l.onStart!==void 0&&l.onStart(x,d,h),u=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,v){return p.push(x,v),this},this.removeHandler=function(x){const v=p.indexOf(x);return v!==-1&&p.splice(v,2),this},this.getHandler=function(x){for(let v=0,g=p.length;v<g;v+=2){const y=p[v],A=p[v+1];if(y.global&&(y.lastIndex=0),y.test(x))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hy=new dy;class Xh{constructor(t){this.manager=t!==void 0?t:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr=new WeakMap;class py extends Xh{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,d=Nd.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(d),u.manager.itemEnd(t)},0);else{let v=Cr.get(d);v===void 0&&(v=[],Cr.set(d,v)),v.push({onLoad:i,onError:l})}return d}const h=Zo("img");function m(){x(),i&&i(this);const v=Cr.get(this)||[];for(let g=0;g<v.length;g++){const y=v[g];y.onLoad&&y.onLoad(this)}Cr.delete(this),u.manager.itemEnd(t)}function p(v){x(),l&&l(v),Nd.remove(`image:${t}`);const g=Cr.get(this)||[];for(let y=0;y<g.length;y++){const A=g[y];A.onError&&A.onError(v)}Cr.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function x(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Nd.add(`image:${t}`,h),u.manager.itemStart(t),h.src=t,h}}class my extends Xh{constructor(t){super(t)}load(t,i,s,l){const u=new Fn,d=new py(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}const Cc=new re,wc=new Hr,Pi=new re;class dv extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cc,wc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Cc,wc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new re,d_=new Vt,h_=new Vt;class _i extends dv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,d_,h_),i.subVectors(h_,d_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class hv extends dv{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const wr=-90,Dr=1;class gy extends ri{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(wr,Dr,t,i);l.layers=this.layers,this.add(l);const u=new _i(wr,Dr,t,i);u.layers=this.layers,this.add(u);const d=new _i(wr,Dr,t,i);d.layers=this.layers,this.add(d);const h=new _i(wr,Dr,t,i);h.layers=this.layers,this.add(h);const m=new _i(wr,Dr,t,i);m.layers=this.layers,this.add(m);const p=new _i(wr,Dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Xc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(v,g,y),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class _y extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Zh=class Zh{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};Zh.prototype.isMatrix2=!0;let p_=Zh;function m_(r,t,i,s){const l=vy(s);switch(i){case $_:return r*t;case tv:return r*t/l.components*l.byteLength;case Oh:return r*t/l.components*l.byteLength;case Fs:return r*t*2/l.components*l.byteLength;case Ph:return r*t*2/l.components*l.byteLength;case ev:return r*t*3/l.components*l.byteLength;case wi:return r*t*4/l.components*l.byteLength;case Fh:return r*t*4/l.components*l.byteLength;case Pc:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(r,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(r,8)*Math.max(t,8)/2;case eh:case th:case ih:case ah:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nh:case Hc:case sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case _h:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case vh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Sh:case Mh:case yh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Eh:case bh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gc:case Th:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vy(r){switch(r){case vi:case Z_:return{byteLength:1,components:1};case Yo:case K_:case Sa:return{byteLength:2,components:1};case Nh:case Lh:return{byteLength:2,components:4};case ki:case Uh:case Bi:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let r=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function xy(r){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const x=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,x);else{v.sort((y,A)=>y.start-A.start);let g=0;for(let y=1;y<v.length;y++){const A=v[g],U=v[y];U.start<=A.start+A.count+1?A.count=Math.max(A.count,U.start+U.count-A.start):(++g,v[g]=U)}v.length=g+1;for(let y=0,A=v.length;y<A;y++){const U=v[y];r.bufferSubData(p,U.start*x.BYTES_PER_ELEMENT,x,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,My=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ib=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Sy,alphahash_pars_fragment:My,alphamap_fragment:yy,alphamap_pars_fragment:Ey,alphatest_fragment:by,alphatest_pars_fragment:Ty,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:wy,begin_vertex:Dy,beginnormal_vertex:Uy,bsdfs:Ny,iridescence_fragment:Ly,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:zy,clipping_planes_vertex:By,color_fragment:Iy,color_pars_fragment:Hy,color_pars_vertex:Gy,color_vertex:Vy,common:ky,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:jy,emissivemap_pars_fragment:Zy,colorspace_fragment:Ky,colorspace_pars_fragment:Qy,envmap_fragment:Jy,envmap_common_pars_fragment:$y,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:_E,lights_physical_pars_fragment:vE,lights_fragment_begin:xE,lights_fragment_maps:SE,lights_fragment_end:ME,lightprobes_pars_fragment:yE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:wE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:NE,morphinstance_vertex:LE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:FE,morphtarget_vertex:zE,normal_fragment_begin:BE,normal_fragment_maps:IE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:jE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:eb,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:ab,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:ub,specularmap_pars_fragment:fb,tonemapping_fragment:db,tonemapping_pars_fragment:hb,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:xb,background_vert:Sb,background_frag:Mb,backgroundCube_vert:yb,backgroundCube_frag:Eb,cube_vert:bb,cube_frag:Tb,depth_vert:Ab,depth_frag:Rb,distance_vert:Cb,distance_frag:wb,equirect_vert:Db,equirect_frag:Ub,linedashed_vert:Nb,linedashed_frag:Lb,meshbasic_vert:Ob,meshbasic_frag:Pb,meshlambert_vert:Fb,meshlambert_frag:zb,meshmatcap_vert:Bb,meshmatcap_frag:Ib,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Vb,meshphong_frag:kb,meshphysical_vert:Xb,meshphysical_frag:Wb,meshtoon_vert:qb,meshtoon_frag:Yb,points_vert:jb,points_frag:Zb,shadow_vert:Kb,shadow_frag:Qb,sprite_vert:Jb,sprite_frag:$b},Ie={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},zi={basic:{uniforms:In([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Ie.points,Ie.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Ie.common,Ie.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Ie.sprite,Ie.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:In([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:In([Ie.lights,Ie.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Dc={r:0,b:0,g:0},eT=new _n,mv=new st;mv.set(-1,0,0,0,1,0,0,0,1);function tT(r,t,i,s,l,u){const d=new Gt(0);let h=l===!0?0:1,m,p,x=null,v=0,g=null;function y(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const L=w.backgroundBlurriness>0;P=t.get(P,L)}return P}function A(w){let P=!1;const L=y(w);L===null?M(d,h):L&&L.isColor&&(M(L,1),P=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(w,P){const L=y(P);L&&(L.isCubeTexture||L.mapping===qc)?(p===void 0&&(p=new Xi(new Jo(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Br(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(mv),p.material.toneMapped=yt.getTransfer(L.colorSpace)!==Ft,(x!==L||v!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=L,v=L.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Xi(new jc(2,2),new Wi({name:"BackgroundMaterial",uniforms:Br(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=yt.getTransfer(L.colorSpace)!==Ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||v!==L.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=L,v=L.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,P){w.getRGB(Dc,fv(r)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,P,u)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,P=1){d.set(w),h=P,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(d,h)},render:A,addToRenderList:U,dispose:S}}function nT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,d=!1;function h(H,Y,ue,me,W){let D=!1;const F=v(H,me,ue,Y);u!==F&&(u=F,p(u.object)),D=y(H,me,ue,W),D&&A(H,me,ue,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(D||d)&&(d=!1,L(H,Y,ue,me),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function x(H){return r.deleteVertexArray(H)}function v(H,Y,ue,me){const W=me.wireframe===!0;let D=s[Y.id];D===void 0&&(D={},s[Y.id]=D);const F=H.isInstancedMesh===!0?H.id:0;let ie=D[F];ie===void 0&&(ie={},D[F]=ie);let pe=ie[ue.id];pe===void 0&&(pe={},ie[ue.id]=pe);let xe=pe[W];return xe===void 0&&(xe=g(m()),pe[W]=xe),xe}function g(H){const Y=[],ue=[],me=[];for(let W=0;W<i;W++)Y[W]=0,ue[W]=0,me[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ue,attributeDivisors:me,object:H,attributes:{},index:null}}function y(H,Y,ue,me){const W=u.attributes,D=Y.attributes;let F=0;const ie=ue.getAttributes();for(const pe in ie)if(ie[pe].location>=0){const N=W[pe];let K=D[pe];if(K===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;F++}return u.attributesNum!==F||u.index!==me}function A(H,Y,ue,me){const W={},D=Y.attributes;let F=0;const ie=ue.getAttributes();for(const pe in ie)if(ie[pe].location>=0){let N=D[pe];N===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),W[pe]=K,F++}u.attributes=W,u.attributesNum=F,u.index=me}function U(){const H=u.newAttributes;for(let Y=0,ue=H.length;Y<ue;Y++)H[Y]=0}function M(H){S(H,0)}function S(H,Y){const ue=u.newAttributes,me=u.enabledAttributes,W=u.attributeDivisors;ue[H]=1,me[H]===0&&(r.enableVertexAttribArray(H),me[H]=1),W[H]!==Y&&(r.vertexAttribDivisor(H,Y),W[H]=Y)}function w(){const H=u.newAttributes,Y=u.enabledAttributes;for(let ue=0,me=Y.length;ue<me;ue++)Y[ue]!==H[ue]&&(r.disableVertexAttribArray(ue),Y[ue]=0)}function P(H,Y,ue,me,W,D,F){F===!0?r.vertexAttribIPointer(H,Y,ue,W,D):r.vertexAttribPointer(H,Y,ue,me,W,D)}function L(H,Y,ue,me){U();const W=me.attributes,D=ue.getAttributes(),F=Y.defaultAttributeValues;for(const ie in D){const pe=D[ie];if(pe.location>=0){let xe=W[ie];if(xe===void 0&&(ie==="instanceMatrix"&&H.instanceMatrix&&(xe=H.instanceMatrix),ie==="instanceColor"&&H.instanceColor&&(xe=H.instanceColor)),xe!==void 0){const N=xe.normalized,K=xe.itemSize,Se=t.get(xe);if(Se===void 0)continue;const Ae=Se.buffer,De=Se.type,oe=Se.bytesPerElement,Me=De===r.INT||De===r.UNSIGNED_INT||xe.gpuType===Uh;if(xe.isInterleavedBufferAttribute){const be=xe.data,He=be.stride,$e=xe.offset;if(be.isInstancedInterleavedBuffer){for(let Qe=0;Qe<pe.locationSize;Qe++)S(pe.location+Qe,be.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Qe=0;Qe<pe.locationSize;Qe++)M(pe.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<pe.locationSize;Qe++)P(pe.location+Qe,K/pe.locationSize,De,N,He*oe,($e+K/pe.locationSize*Qe)*oe,Me)}else{if(xe.isInstancedBufferAttribute){for(let be=0;be<pe.locationSize;be++)S(pe.location+be,xe.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let be=0;be<pe.locationSize;be++)M(pe.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let be=0;be<pe.locationSize;be++)P(pe.location+be,K/pe.locationSize,De,N,K*oe,K/pe.locationSize*be*oe,Me)}}else if(F!==void 0){const N=F[ie];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(pe.location,N);break;case 3:r.vertexAttrib3fv(pe.location,N);break;case 4:r.vertexAttrib4fv(pe.location,N);break;default:r.vertexAttrib1fv(pe.location,N)}}}}w()}function k(){z();for(const H in s){const Y=s[H];for(const ue in Y){const me=Y[ue];for(const W in me){const D=me[W];for(const F in D)x(D[F].object),delete D[F];delete me[W]}}delete s[H]}}function O(H){if(s[H.id]===void 0)return;const Y=s[H.id];for(const ue in Y){const me=Y[ue];for(const W in me){const D=me[W];for(const F in D)x(D[F].object),delete D[F];delete me[W]}}delete s[H.id]}function B(H){for(const Y in s){const ue=s[Y];for(const me in ue){const W=ue[me];if(W[H.id]===void 0)continue;const D=W[H.id];for(const F in D)x(D[F].object),delete D[F];delete W[H.id]}}}function b(H){for(const Y in s){const ue=s[Y],me=H.isInstancedMesh===!0?H.id:0,W=ue[me];if(W!==void 0){for(const D in W){const F=W[D];for(const ie in F)x(F[ie].object),delete F[ie];delete W[D]}delete ue[me],Object.keys(ue).length===0&&delete s[Y]}}}function z(){Z(),d=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:Z,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:U,enableAttribute:M,disableUnusedAttributes:w}}function iT(r,t,i){let s;function l(m){s=m}function u(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,x){x!==0&&(r.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function h(m,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let g=0;for(let y=0;y<x;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function aT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==wi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const b=B===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==vi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Bi&&!b)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(tt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:A,maxTextureSize:U,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:L,maxSamples:k,samples:O}}function sT(r){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Ds,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,y){const A=v.clippingPlanes,U=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||A===null||A.length===0||u&&!M)u?x(null):p();else{const w=u?0:s,P=w*4;let L=S.clippingState||null;m.value=L,L=x(A,g,P,y);for(let k=0;k!==P;++k)L[k]=i[k];S.clippingState=L,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(v,g,y,A){const U=v!==null?v.length:0;let M=null;if(U!==0){if(M=m.value,A!==!0||M===null){const S=y+U*4,w=g.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,L=y;P!==U;++P,L+=4)d.copy(v[P]).applyMatrix4(w,h),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,M}}const as=4,g_=[.125,.215,.35,.446,.526,.582],Ns=20,rT=256,Go=new hv,__=new Gt;let Ld=null,Od=0,Pd=0,Fd=!1;const oT=new re;class v_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=oT}=u;Ld=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Od,Pd),this._renderer.xr.enabled=Fd,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Sa,format:wi,colorSpace:Vc,depthBuffer:!1},l=x_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(u)),this._blurMaterial=uT(u,t,i),this._ggxMaterial=cT(u,t,i)}return l}_compileMaterial(t){const i=new Xi(new qi,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,s,l,u){const m=new _i(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(__),v.toneMapping=Hi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new Jo,new Vh({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,M=U.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy(__),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[P],u.y,u.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[P]));const k=this._cubeSize;Ur(l,L*k,P>2?k:0,k,k),v.setRenderTarget(l),S&&v.render(U,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ps||t.mapping===Fr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Go)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),g=0+p*1.25,y=v*g,{_lodMax:A}=this,U=this._sizeLods[s],M=3*U*(s>A-as?s-A+as:0),S=4*(this._cubeSize-U);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=A-i,Ur(u,M,S,3*U,2*U),l.setRenderTarget(u),l.render(h,Go),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,Ur(t,M,S,3*U,2*U),l.setRenderTarget(t),l.render(h,Go)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),U=u/A,M=isFinite(u)?1+Math.floor(x*U):Ns;M>Ns&&tt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ns}`);const S=[];let w=0;for(let B=0;B<Ns;++B){const b=B/U,z=Math.exp(-b*b/2);S.push(z),B===0?w+=z:B<M&&(w+=2*z)}for(let B=0;B<S.length;B++)S[B]=S[B]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:P}=this;g.dTheta.value=A,g.mipInt.value=P-s;const L=this._sizeLods[l],k=3*L*(l>P-as?l-P+as:0),O=4*(this._cubeSize-L);Ur(i,k,O,3*L,2*L),m.setRenderTarget(i),m.render(v,Go)}}function lT(r){const t=[],i=[],s=[];let l=r;const u=r-as+1+g_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>r-as?m=g_[d-r+as-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,v=1+p,g=[x,x,v,x,v,v,x,x,v,v,x,v],y=6,A=6,U=3,M=2,S=1,w=new Float32Array(U*A*y),P=new Float32Array(M*A*y),L=new Float32Array(S*A*y);for(let O=0;O<y;O++){const B=O%3*2/3-1,b=O>2?0:-1,z=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];w.set(z,U*A*O),P.set(g,M*A*O);const Z=[O,O,O,O,O,O];L.set(Z,S*A*O)}const k=new qi;k.setAttribute("position",new Vi(w,U)),k.setAttribute("uv",new Vi(P,M)),k.setAttribute("faceIndex",new Vi(L,S)),s.push(new Xi(k,null)),l>as&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function x_(r,t,i){const s=new Gi(r,t,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function cT(r,t,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function uT(r,t,i){const s=new Float32Array(Ns),l=new re(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function S_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function M_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jo(5,5,5),u=new Wi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:va});u.uniforms.tEquirect.value=i;const d=new Xi(l,u),h=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Pn),new gy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}function fT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?d(g):u(g)}function u(g){if(g&&g.isTexture){const y=g.mapping;if(y===od||y===ld)if(t.has(g)){const A=t.get(g).texture;return h(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const U=new gv(A.height);return U.fromEquirectangularTexture(r,g),t.set(g,U),g.addEventListener("dispose",p),h(U.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,A=y===od||y===ld,U=y===Ps||y===Fr;if(A||U){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new v_(r)),M=A?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const w=g.image;return A&&w&&w.height>0||U&&w&&m(w)?(s===null&&(s=new v_(r)),M=A?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",x),M.texture):null}}}return g}function h(g,y){return y===od?g.mapping=Ps:y===ld&&(g.mapping=Fr),g}function m(g){let y=0;const A=6;for(let U=0;U<A;U++)g[U]!==void 0&&y++;return y===A}function p(g){const y=g.target;y.removeEventListener("dispose",p);const A=t.get(y);A!==void 0&&(t.delete(y),A.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const A=i.get(y);A!==void 0&&(i.delete(y),A.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function dT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ah("WebGLRenderer: "+s+" extension not supported."),l}}}function hT(r,t,i,s){const l={},u=new WeakMap;function d(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const A in g.attributes)t.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const y=u.get(g);y&&(t.remove(y),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,A=v.attributes.position;let U=0;if(A===void 0)return;if(y!==null){const w=y.array;U=y.version;for(let P=0,L=w.length;P<L;P+=3){const k=w[P+0],O=w[P+1],B=w[P+2];g.push(k,O,O,B,B,k)}}else{const w=A.array;U=A.version;for(let P=0,L=w.length/3-1;P<L;P+=3){const k=P+0,O=P+1,B=P+2;g.push(k,O,O,B,B,k)}}const M=new(A.count>=65535?ov:rv)(g,1);M.version=U;const S=u.get(v);S&&t.remove(S),u.set(v,M)}function x(v){const g=u.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function pT(r,t,i){let s;function l(v){s=v}let u,d;function h(v){u=v.type,d=v.bytesPerElement}function m(v,g){r.drawElements(s,g,u,v*d),i.update(g,s,1)}function p(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,u,v*d,y),i.update(g,s,y))}function x(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,u,v,0,y);let U=0;for(let M=0;M<y;M++)U+=g[M];i.update(U,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function mT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(u/3);break;case r.LINES:i.lines+=h*(u/2);break;case r.LINE_STRIP:i.lines+=h*(u-1);break;case r.LINE_LOOP:i.lines+=h*u;break;case r.POINTS:i.points+=h*u;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gT(r,t,i){const s=new WeakMap,l=new ln;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let Z=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var y=Z;g!==void 0&&g.texture.dispose();const A=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;A===!0&&(L=1),U===!0&&(L=2),M===!0&&(L=3);let k=h.attributes.position.count*L,O=1;k>t.maxTextureSize&&(O=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const B=new Float32Array(k*O*4*v),b=new iv(B,k,O,v);b.type=Bi,b.needsUpdate=!0;const z=L*4;for(let H=0;H<v;H++){const Y=S[H],ue=w[H],me=P[H],W=k*O*4*H;for(let D=0;D<Y.count;D++){const F=D*z;A===!0&&(l.fromBufferAttribute(Y,D),B[W+F+0]=l.x,B[W+F+1]=l.y,B[W+F+2]=l.z,B[W+F+3]=0),U===!0&&(l.fromBufferAttribute(ue,D),B[W+F+4]=l.x,B[W+F+5]=l.y,B[W+F+6]=l.z,B[W+F+7]=0),M===!0&&(l.fromBufferAttribute(me,D),B[W+F+8]=l.x,B[W+F+9]=l.y,B[W+F+10]=l.z,B[W+F+11]=me.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new Vt(k,O)},s.set(h,g),h.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const U=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:u}}function _T(r,t,i,s,l){let u=new WeakMap;function d(p){const x=l.render.frame,v=p.geometry,g=t.get(p,v);if(u.get(g)!==x&&(t.update(g),u.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),u.set(p,x))),p.isSkinnedMesh){const y=p.skeleton;u.get(y)!==x&&(y.update(),u.set(y,x))}return g}function h(){u=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const vT={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[k_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function xT(r,t,i,s,l){const u=new Gi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new zr(t,i):void 0}),d=new Gi(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),h=new qi;h.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xi([0,2,0,0,2,0],2));const m=new cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Xi(h,m),x=new hv(-1,1,1,-1,0,1);let v=null,g=null,y=!1,A,U=null,M=[],S=!1;this.setSize=function(w,P){u.setSize(w,P),d.setSize(w,P);for(let L=0;L<M.length;L++){const k=M[L];k.setSize&&k.setSize(w,P)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const P=u.width,L=u.height;for(let k=0;k<M.length;k++){const O=M[k];O.setSize&&O.setSize(P,L)}},this.begin=function(w,P){if(y||w.toneMapping===Hi&&M.length===0)return!1;if(U=P,P!==null){const L=P.width,k=P.height;(u.width!==L||u.height!==k)&&this.setSize(L,k)}return S===!1&&w.setRenderTarget(u),A=w.toneMapping,w.toneMapping=Hi,!0},this.hasRenderPass=function(){return S},this.end=function(w,P){w.toneMapping=A,y=!0;let L=u,k=d;for(let O=0;O<M.length;O++){const B=M[O];if(B.enabled!==!1&&(B.render(w,k,L,P),B.needsSwap!==!1)){const b=L;L=k,k=b}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},yt.getTransfer(v)===Ft&&(m.defines.SRGB_TRANSFER="");const O=vT[g];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(U),w.render(p,x),U=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const _v=new Fn,Rh=new zr(1,1),vv=new iv,xv=new IM,Sv=new cv,y_=[],E_=[],b_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function Gr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=y_[l];if(u===void 0&&(u=new Float32Array(l),y_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(u,h)}return u}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Kc(r,t){let i=E_[t];i===void 0&&(i=new Int32Array(t),E_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ST(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function MT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function yT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function ET(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function bT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;A_.set(s),r.uniformMatrix2fv(this.addr,!1,A_),xn(i,s)}}function TT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;T_.set(s),r.uniformMatrix3fv(this.addr,!1,T_),xn(i,s)}}function AT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;b_.set(s),r.uniformMatrix4fv(this.addr,!1,b_),xn(i,s)}}function RT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function CT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function UT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function PT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Rh.compareFunction=i.isReversedDepthBuffer()?Bh:zh,u=Rh):u=_v,i.setTexture2D(t||u,l)}function FT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||xv,l)}function zT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Sv,l)}function BT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||vv,l)}function IT(r){switch(r){case 5126:return ST;case 35664:return MT;case 35665:return yT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return NT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(r,t){r.uniform1fv(this.addr,t)}function GT(r,t){const i=Gr(t,this.size,2);r.uniform2fv(this.addr,i)}function VT(r,t){const i=Gr(t,this.size,3);r.uniform3fv(this.addr,i)}function kT(r,t){const i=Gr(t,this.size,4);r.uniform4fv(this.addr,i)}function XT(r,t){const i=Gr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function WT(r,t){const i=Gr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function qT(r,t){const i=Gr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function YT(r,t){r.uniform1iv(this.addr,t)}function jT(r,t){r.uniform2iv(this.addr,t)}function ZT(r,t){r.uniform3iv(this.addr,t)}function KT(r,t){r.uniform4iv(this.addr,t)}function QT(r,t){r.uniform1uiv(this.addr,t)}function JT(r,t){r.uniform2uiv(this.addr,t)}function $T(r,t){r.uniform3uiv(this.addr,t)}function e1(r,t){r.uniform4uiv(this.addr,t)}function t1(r,t,i){const s=this.cache,l=t.length,u=Kc(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));let d;this.type===r.SAMPLER_2D_SHADOW?d=Rh:d=_v;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function n1(r,t,i){const s=this.cache,l=t.length,u=Kc(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||xv,u[d])}function i1(r,t,i){const s=this.cache,l=t.length,u=Kc(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Sv,u[d])}function a1(r,t,i){const s=this.cache,l=t.length,u=Kc(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||vv,u[d])}function s1(r){switch(r){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}class r1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=IT(i.type)}}class o1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=s1(i.type)}}class l1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function R_(r,t){r.seq.push(t),r.map[t.id]=t}function c1(r,t,i){const s=r.name,l=s.length;for(zd.lastIndex=0;;){const u=zd.exec(s),d=zd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){R_(i,p===void 0?new r1(h,r,t):new o1(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new l1(h),R_(i,v)),i=v}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);c1(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function C_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const u1=37297;let f1=0;function d1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const w_=new st;function h1(r){yt._getMatrix(w_,yt.workingColorSpace,r);const t=`mat3( ${w_.elements.map(i=>i.toFixed(4))} )`;switch(yt.getTransfer(r)){case kc:return[t,"LinearTransferOETF"];case Ft:return[t,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function D_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+d1(r.getShaderSource(t),h)}else return u}function p1(r,t){const i=h1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const m1={[G_]:"Linear",[V_]:"Reinhard",[k_]:"Cineon",[X_]:"ACESFilmic",[q_]:"AgX",[Y_]:"Neutral",[W_]:"Custom"};function g1(r,t){const i=m1[t];return i===void 0?(tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new re;function _1(){yt.getLuminanceCoefficients(Uc);const r=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function x1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function S1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),d=u.name;let h=1;u.type===r.FLOAT_MAT2&&(h=2),u.type===r.FLOAT_MAT3&&(h=3),u.type===r.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Xo(r){return r!==""}function U_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function N_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(r){return r.replace(M1,E1)}const y1=new Map;function E1(r,t){let i=ut[t];if(i===void 0){const s=y1.get(t);if(s!==void 0)i=ut[s],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ch(i)}const b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(r){return r.replace(b1,T1)}function T1(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function O_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const A1={[Oc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function R1(r){return A1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C1={[Ps]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function w1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":C1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const D1={[Fr]:"ENVMAP_MODE_REFRACTION"};function U1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":D1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N1={[H_]:"ENVMAP_BLENDING_MULTIPLY",[iM]:"ENVMAP_BLENDING_MIX",[aM]:"ENVMAP_BLENDING_ADD"};function L1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":N1[r.combine]||"ENVMAP_BLENDING_NONE"}function O1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function P1(r,t,i,s){const l=r.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=R1(i),p=w1(i),x=U1(i),v=L1(i),g=O1(i),y=v1(i),A=x1(u),U=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Xo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Xo).join(`
`),S.length>0&&(S+=`
`)):(M=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),S=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?ut.tonemapping_pars_fragment:"",i.toneMapping!==Hi?g1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,p1("linearToOutputTexel",i.outputColorSpace),_1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Ch(d),d=U_(d,i),d=N_(d,i),h=Ch(h),h=U_(h,i),h=N_(h,i),d=L_(d),h=L_(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=w+M+d,L=w+S+h,k=C_(l,l.VERTEX_SHADER,P),O=C_(l,l.FRAGMENT_SHADER,L);l.attachShader(U,k),l.attachShader(U,O),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function B(H){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(U)||"",ue=l.getShaderInfoLog(k)||"",me=l.getShaderInfoLog(O)||"",W=Y.trim(),D=ue.trim(),F=me.trim();let ie=!0,pe=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,k,O);else{const xe=D_(l,k,"vertex"),N=D_(l,O,"fragment");Et("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+xe+`
`+N)}else W!==""?tt("WebGLProgram: Program Info Log:",W):(D===""||F==="")&&(pe=!1);pe&&(H.diagnostics={runnable:ie,programLog:W,vertexShader:{log:D,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(k),l.deleteShader(O),b=new Ic(l,U),z=S1(l,U)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(U,u1)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f1++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=k,this.fragmentShader=O,this}let F1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new B1(t),i.set(t,s)),s}}class B1{constructor(t){this.id=F1++,this.code=t,this.usedTimes=0}}function I1(r){return r===Fs||r===Hc||r===Gc}function H1(r,t,i,s,l,u){const d=new av,h=new z1,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function U(b,z,Z,H,Y,ue){const me=H.fog,W=Y.geometry,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ie=t.get(b.envMap||D,F),pe=ie&&ie.mapping===qc?ie.image.height:null,xe=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&tt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const N=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,K=N!==void 0?N.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let Ae,De,oe,Me;if(xe){const et=zi[xe];Ae=et.vertexShader,De=et.fragmentShader}else Ae=b.vertexShader,De=b.fragmentShader,h.update(b),oe=h.getVertexShaderID(b),Me=h.getFragmentShaderID(b);const be=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),$e=Y.isInstancedMesh===!0,Qe=Y.isBatchedMesh===!0,kt=!!b.map,ft=!!b.matcap,_t=!!ie,Dt=!!b.aoMap,lt=!!b.lightMap,an=!!b.bumpMap,qt=!!b.normalMap,yn=!!b.displacementMap,X=!!b.emissiveMap,$t=!!b.metalnessMap,dt=!!b.roughnessMap,zt=b.anisotropy>0,Re=b.clearcoat>0,Zt=b.dispersion>0,C=b.iridescence>0,E=b.sheen>0,Q=b.transmission>0,_e=zt&&!!b.anisotropyMap,Ee=Re&&!!b.clearcoatMap,Ce=Re&&!!b.clearcoatNormalMap,Le=Re&&!!b.clearcoatRoughnessMap,ce=C&&!!b.iridescenceMap,fe=C&&!!b.iridescenceThicknessMap,Oe=E&&!!b.sheenColorMap,Pe=E&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,we=!!b.specularColorMap,nt=!!b.specularIntensityMap,it=Q&&!!b.transmissionMap,ht=Q&&!!b.thicknessMap,G=!!b.gradientMap,Te=!!b.alphaMap,he=b.alphaTest>0,Be=!!b.alphaHash,Ne=!!b.extensions;let ye=Hi;b.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ye=r.toneMapping);const qe={shaderID:xe,shaderType:b.type,shaderName:b.name,vertexShader:Ae,fragmentShader:De,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&Y._colorsTexture!==null,instancing:$e,instancingColor:$e&&Y.instanceColor!==null,instancingMorph:$e&&Y.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:kt,matcap:ft,envMap:_t,envMapMode:_t&&ie.mapping,envMapCubeUVHeight:pe,aoMap:Dt,lightMap:lt,bumpMap:an,normalMap:qt,displacementMap:yn,emissiveMap:X,normalMapObjectSpace:qt&&b.normalMapType===oM,normalMapTangentSpace:qt&&b.normalMapType===Vg,packedNormalMap:qt&&b.normalMapType===Vg&&I1(b.normalMap.format),metalnessMap:$t,roughnessMap:dt,anisotropy:zt,anisotropyMap:_e,clearcoat:Re,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Zt,iridescence:C,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:we,specularIntensityMap:nt,transmission:Q,transmissionMap:it,thicknessMap:ht,gradientMap:G,opaque:b.transparent===!1&&b.blending===Lr&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:Be,combine:b.combine,mapUv:kt&&A(b.map.channel),aoMapUv:Dt&&A(b.aoMap.channel),lightMapUv:lt&&A(b.lightMap.channel),bumpMapUv:an&&A(b.bumpMap.channel),normalMapUv:qt&&A(b.normalMap.channel),displacementMapUv:yn&&A(b.displacementMap.channel),emissiveMapUv:X&&A(b.emissiveMap.channel),metalnessMapUv:$t&&A(b.metalnessMap.channel),roughnessMapUv:dt&&A(b.roughnessMap.channel),anisotropyMapUv:_e&&A(b.anisotropyMap.channel),clearcoatMapUv:Ee&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&A(b.sheenRoughnessMap.channel),specularMapUv:Ue&&A(b.specularMap.channel),specularColorMapUv:we&&A(b.specularColorMap.channel),specularIntensityMapUv:nt&&A(b.specularIntensityMap.channel),transmissionMapUv:it&&A(b.transmissionMap.channel),thicknessMapUv:ht&&A(b.thicknessMap.channel),alphaMapUv:Te&&A(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qt||zt),vertexNormals:!!W.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(kt||Te),fog:!!me,useFog:b.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||W.attributes.normal===void 0&&qt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:He,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:kt&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:X&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ga,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(b){const z=[];if(b.shaderID?z.push(b.shaderID):(z.push(b.customVertexShaderID),z.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Z in b.defines)z.push(Z),z.push(b.defines[Z]);return b.isRawShaderMaterial===!1&&(S(z,b),w(z,b),z.push(r.outputColorSpace)),z.push(b.customProgramCacheKey),z.join()}function S(b,z){b.push(z.precision),b.push(z.outputColorSpace),b.push(z.envMapMode),b.push(z.envMapCubeUVHeight),b.push(z.mapUv),b.push(z.alphaMapUv),b.push(z.lightMapUv),b.push(z.aoMapUv),b.push(z.bumpMapUv),b.push(z.normalMapUv),b.push(z.displacementMapUv),b.push(z.emissiveMapUv),b.push(z.metalnessMapUv),b.push(z.roughnessMapUv),b.push(z.anisotropyMapUv),b.push(z.clearcoatMapUv),b.push(z.clearcoatNormalMapUv),b.push(z.clearcoatRoughnessMapUv),b.push(z.iridescenceMapUv),b.push(z.iridescenceThicknessMapUv),b.push(z.sheenColorMapUv),b.push(z.sheenRoughnessMapUv),b.push(z.specularMapUv),b.push(z.specularColorMapUv),b.push(z.specularIntensityMapUv),b.push(z.transmissionMapUv),b.push(z.thicknessMapUv),b.push(z.combine),b.push(z.fogExp2),b.push(z.sizeAttenuation),b.push(z.morphTargetsCount),b.push(z.morphAttributeCount),b.push(z.numDirLights),b.push(z.numPointLights),b.push(z.numSpotLights),b.push(z.numSpotLightMaps),b.push(z.numHemiLights),b.push(z.numRectAreaLights),b.push(z.numDirLightShadows),b.push(z.numPointLightShadows),b.push(z.numSpotLightShadows),b.push(z.numSpotLightShadowsWithMaps),b.push(z.numLightProbes),b.push(z.shadowMapType),b.push(z.toneMapping),b.push(z.numClippingPlanes),b.push(z.numClipIntersection),b.push(z.depthPacking)}function w(b,z){d.disableAll(),z.instancing&&d.enable(0),z.instancingColor&&d.enable(1),z.instancingMorph&&d.enable(2),z.matcap&&d.enable(3),z.envMap&&d.enable(4),z.normalMapObjectSpace&&d.enable(5),z.normalMapTangentSpace&&d.enable(6),z.clearcoat&&d.enable(7),z.iridescence&&d.enable(8),z.alphaTest&&d.enable(9),z.vertexColors&&d.enable(10),z.vertexAlphas&&d.enable(11),z.vertexUv1s&&d.enable(12),z.vertexUv2s&&d.enable(13),z.vertexUv3s&&d.enable(14),z.vertexTangents&&d.enable(15),z.anisotropy&&d.enable(16),z.alphaHash&&d.enable(17),z.batching&&d.enable(18),z.dispersion&&d.enable(19),z.batchingColor&&d.enable(20),z.gradientMap&&d.enable(21),z.packedNormalMap&&d.enable(22),z.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),z.fog&&d.enable(0),z.useFog&&d.enable(1),z.flatShading&&d.enable(2),z.logarithmicDepthBuffer&&d.enable(3),z.reversedDepthBuffer&&d.enable(4),z.skinning&&d.enable(5),z.morphTargets&&d.enable(6),z.morphNormals&&d.enable(7),z.morphColors&&d.enable(8),z.premultipliedAlpha&&d.enable(9),z.shadowMapEnabled&&d.enable(10),z.doubleSided&&d.enable(11),z.flipSided&&d.enable(12),z.useDepthPacking&&d.enable(13),z.dithering&&d.enable(14),z.transmission&&d.enable(15),z.sheen&&d.enable(16),z.opaque&&d.enable(17),z.pointsUvs&&d.enable(18),z.decodeVideoTexture&&d.enable(19),z.decodeVideoTextureEmissive&&d.enable(20),z.alphaToCoverage&&d.enable(21),z.numLightProbeGrids>0&&d.enable(22),b.push(d.mask)}function P(b){const z=y[b.type];let Z;if(z){const H=zi[z];Z=ry.clone(H.uniforms)}else Z=b.uniforms;return Z}function L(b,z){let Z=x.get(z);return Z!==void 0?++Z.usedTimes:(Z=new P1(r,z,b,l),p.push(Z),x.set(z,Z)),Z}function k(b){if(--b.usedTimes===0){const z=p.indexOf(b);p[z]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function O(b){h.remove(b)}function B(){h.dispose()}return{getParameters:U,getProgramCacheKey:M,getUniforms:P,acquireProgram:L,releaseProgram:k,releaseShaderCache:O,programs:p,dispose:B}}function G1(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function V1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function P_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function F_(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function h(g,y,A,U,M,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:y,material:A,materialVariant:d(g),groupOrder:U,renderOrder:g.renderOrder,z:M,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=A,w.materialVariant=d(g),w.groupOrder=U,w.renderOrder=g.renderOrder,w.z=M,w.group=S),t++,w}function m(g,y,A,U,M,S){const w=h(g,y,A,U,M,S);A.transmission>0?s.push(w):A.transparent===!0?l.push(w):i.push(w)}function p(g,y,A,U,M,S){const w=h(g,y,A,U,M,S);A.transmission>0?s.unshift(w):A.transparent===!0?l.unshift(w):i.unshift(w)}function x(g,y){i.length>1&&i.sort(g||V1),s.length>1&&s.sort(y||P_),l.length>1&&l.sort(y||P_)}function v(){for(let g=t,y=r.length;g<y;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:v,sort:x}}function k1(){let r=new WeakMap;function t(s,l){const u=r.get(s);let d;return u===void 0?(d=new F_,r.set(s,[d])):l>=u.length?(d=new F_,u.push(d)):d=u[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function X1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Gt};break;case"SpotLight":i={position:new re,direction:new re,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":i={color:new Gt,position:new re,halfWidth:new re,halfHeight:new re};break}return r[t.id]=i,i}}}function W1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let q1=0;function Y1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function j1(r){const t=new X1,i=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,u=new _n,d=new _n;function h(p){let x=0,v=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let y=0,A=0,U=0,M=0,S=0,w=0,P=0,L=0,k=0,O=0,B=0;p.sort(Y1);for(let z=0,Z=p.length;z<Z;z++){const H=p[z],Y=H.color,ue=H.intensity,me=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Fs?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=Y.r*ue,v+=Y.g*ue,g+=Y.b*ue;else if(H.isLightProbe){for(let D=0;D<9;D++)s.probe[D].addScaledVector(H.sh.coefficients[D],ue);B++}else if(H.isDirectionalLight){const D=t.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,ie=i.get(H);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,s.directionalShadow[y]=ie,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=H.shadow.matrix,w++}s.directional[y]=D,y++}else if(H.isSpotLight){const D=t.get(H);D.position.setFromMatrixPosition(H.matrixWorld),D.color.copy(Y).multiplyScalar(ue),D.distance=me,D.coneCos=Math.cos(H.angle),D.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),D.decay=H.decay,s.spot[U]=D;const F=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,F.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[U]=F.matrix,H.castShadow){const ie=i.get(H);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,s.spotShadow[U]=ie,s.spotShadowMap[U]=W,L++}U++}else if(H.isRectAreaLight){const D=t.get(H);D.color.copy(Y).multiplyScalar(ue),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=D,M++}else if(H.isPointLight){const D=t.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),D.distance=H.distance,D.decay=H.decay,H.castShadow){const F=H.shadow,ie=i.get(H);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,ie.shadowCameraNear=F.camera.near,ie.shadowCameraFar=F.camera.far,s.pointShadow[A]=ie,s.pointShadowMap[A]=W,s.pointShadowMatrix[A]=H.shadow.matrix,P++}s.point[A]=D,A++}else if(H.isHemisphereLight){const D=t.get(H);D.skyColor.copy(H.color).multiplyScalar(ue),D.groundColor.copy(H.groundColor).multiplyScalar(ue),s.hemi[S]=D,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==A||b.spotLength!==U||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==P||b.numSpotShadows!==L||b.numSpotMaps!==k||b.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=U,s.rectArea.length=M,s.point.length=A,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+k-O,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=B,b.directionalLength=y,b.pointLength=A,b.spotLength=U,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=P,b.numSpotShadows=L,b.numSpotMaps=k,b.numLightProbes=B,s.version=q1++)}function m(p,x){let v=0,g=0,y=0,A=0,U=0;const M=x.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const P=p[S];if(P.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(P.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const L=s.rectArea[A];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),d.identity(),u.copy(P.matrixWorld),u.premultiply(M),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),A++}else if(P.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const L=s.hemi[U];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),U++}}}return{setup:h,setupView:m,state:s}}function z_(r){const t=new j1(r),i=[],s=[],l=[];function u(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function x(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function Z1(r){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new z_(r),t.set(l,[h])):u>=d.length?(h=new z_(r),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J1=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],$1=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],B_=new _n,Vo=new re,Bd=new re;function eA(r,t,i){let s=new lv;const l=new Vt,u=new Vt,d=new ln,h=new uy,m=new fy,p={},x=i.maxTextureSize,v={[rs]:qn,[qn]:rs,[ga]:ga},g=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const A=new qi;A.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Xi(A,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let S=this.type;this.render=function(O,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===BS&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const z=r.getRenderTarget(),Z=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(va),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ue=S!==this.type;ue&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(W=>W.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,W=O.length;me<W;me++){const D=O[me],F=D.shadow;if(F===void 0){tt("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ie=F.getFrameExtents();l.multiply(ie),u.copy(F.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/ie.x),l.x=u.x*ie.x,F.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/ie.y),l.y=u.y*ie.y,F.mapSize.y=u.y));const pe=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=pe,F.map===null||ue===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ko){if(D.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Gi(l.x,l.y,{format:Fs,type:Sa,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new zr(l.x,l.y,Bi),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=Ma,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn}else D.isPointLight?(F.map=new gv(l.x),F.map.depthTexture=new ay(l.x,ki)):(F.map=new Gi(l.x,l.y),F.map.depthTexture=new zr(l.x,l.y,ki)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=Ma,this.type===Oc?(F.map.depthTexture.compareFunction=pe?Bh:zh,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn);F.camera.updateProjectionMatrix()}const xe=F.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<xe;N++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,N),r.clear();else{N===0&&(r.setRenderTarget(F.map),r.clear());const K=F.getViewport(N);d.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),Y.viewport(d)}if(D.isPointLight){const K=F.camera,Se=F.matrix,Ae=D.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),Vo.setFromMatrixPosition(D.matrixWorld),K.position.copy(Vo),Bd.copy(K.position),Bd.add(J1[N]),K.up.copy($1[N]),K.lookAt(Bd),K.updateMatrixWorld(),Se.makeTranslation(-Vo.x,-Vo.y,-Vo.z),B_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(B_,K.coordinateSystem,K.reversedDepth)}else F.updateMatrices(D);s=F.getFrustum(),L(B,b,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===ko&&w(F,b),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(z,Z,H)};function w(O,B){const b=t.update(U);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Gi(l.x,l.y,{format:Fs,type:Sa})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,b,g,U,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,b,y,U,null)}function P(O,B,b,z){let Z=null;const H=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)Z=H;else if(Z=b.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=Z.uuid,ue=B.uuid;let me=p[Y];me===void 0&&(me={},p[Y]=me);let W=me[ue];W===void 0&&(W=Z.clone(),me[ue]=W,B.addEventListener("dispose",k)),Z=W}if(Z.visible=B.visible,Z.wireframe=B.wireframe,z===ko?Z.side=B.shadowSide!==null?B.shadowSide:B.side:Z.side=B.shadowSide!==null?B.shadowSide:v[B.side],Z.alphaMap=B.alphaMap,Z.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Z.map=B.map,Z.clipShadows=B.clipShadows,Z.clippingPlanes=B.clippingPlanes,Z.clipIntersection=B.clipIntersection,Z.displacementMap=B.displacementMap,Z.displacementScale=B.displacementScale,Z.displacementBias=B.displacementBias,Z.wireframeLinewidth=B.wireframeLinewidth,Z.linewidth=B.linewidth,b.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Y=r.properties.get(Z);Y.light=b}return Z}function L(O,B,b,z,Z){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Z===ko)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const ue=t.update(O),me=O.material;if(Array.isArray(me)){const W=ue.groups;for(let D=0,F=W.length;D<F;D++){const ie=W[D],pe=me[ie.materialIndex];if(pe&&pe.visible){const xe=P(O,pe,z,Z);O.onBeforeShadow(r,O,B,b,ue,xe,ie),r.renderBufferDirect(b,null,ue,xe,O,ie),O.onAfterShadow(r,O,B,b,ue,xe,ie)}}}else if(me.visible){const W=P(O,me,z,Z);O.onBeforeShadow(r,O,B,b,ue,W,null),r.renderBufferDirect(b,null,ue,W,O,null),O.onAfterShadow(r,O,B,b,ue,W,null)}}const Y=O.children;for(let ue=0,me=Y.length;ue<me;ue++)L(Y[ue],B,b,z,Z)}function k(O){O.target.removeEventListener("dispose",k);for(const b in p){const z=p[b],Z=O.target.uuid;Z in z&&(z[Z].dispose(),delete z[Z])}}}function tA(r,t){function i(){let G=!1;const Te=new ln;let he=null;const Be=new ln(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!G&&(r.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ye,qe,et,en){en===!0&&(Ne*=et,ye*=et,qe*=et),Te.set(Ne,ye,qe,et),Be.equals(Te)===!1&&(r.clearColor(Ne,ye,qe,et),Be.copy(Te))},reset:function(){G=!1,he=null,Be.set(-1,0,0,0)}}}function s(){let G=!1,Te=!1,he=null,Be=null,Ne=null;return{setReversed:function(ye){if(Te!==ye){const qe=t.get("EXT_clip_control");ye?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Te=ye;const et=Ne;Ne=null,this.setClear(et)}},getReversed:function(){return Te},setTest:function(ye){ye?be(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(ye){he!==ye&&!G&&(r.depthMask(ye),he=ye)},setFunc:function(ye){if(Te&&(ye=_M[ye]),Be!==ye){switch(ye){case Gd:r.depthFunc(r.NEVER);break;case Vd:r.depthFunc(r.ALWAYS);break;case kd:r.depthFunc(r.LESS);break;case Pr:r.depthFunc(r.LEQUAL);break;case Xd:r.depthFunc(r.EQUAL);break;case Wd:r.depthFunc(r.GEQUAL);break;case qd:r.depthFunc(r.GREATER);break;case Yd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ye}},setLocked:function(ye){G=ye},setClear:function(ye){Ne!==ye&&(Ne=ye,Te&&(ye=1-ye),r.clearDepth(ye))},reset:function(){G=!1,he=null,Be=null,Ne=null,Te=!1}}}function l(){let G=!1,Te=null,he=null,Be=null,Ne=null,ye=null,qe=null,et=null,en=null;return{setTest:function(Rt){G||(Rt?be(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!G&&(r.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,oi,Yn){(he!==Rt||Be!==oi||Ne!==Yn)&&(r.stencilFunc(Rt,oi,Yn),he=Rt,Be=oi,Ne=Yn)},setOp:function(Rt,oi,Yn){(ye!==Rt||qe!==oi||et!==Yn)&&(r.stencilOp(Rt,oi,Yn),ye=Rt,qe=oi,et=Yn)},setLocked:function(Rt){G=Rt},setClear:function(Rt){en!==Rt&&(r.clearStencil(Rt),en=Rt)},reset:function(){G=!1,Te=null,he=null,Be=null,Ne=null,ye=null,qe=null,et=null,en=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},v={},g={},y=new WeakMap,A=[],U=null,M=!1,S=null,w=null,P=null,L=null,k=null,O=null,B=null,b=new Gt(0,0,0),z=0,Z=!1,H=null,Y=null,ue=null,me=null,W=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ie=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(pe)[1]),F=ie>=1):pe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),F=ie>=2);let xe=null,N={};const K=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Ae=new ln().fromArray(K),De=new ln().fromArray(Se);function oe(G,Te,he,Be){const Ne=new Uint8Array(4),ye=r.createTexture();r.bindTexture(G,ye),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<he;qe++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Te+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return ye}const Me={};Me[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(r.DEPTH_TEST),d.setFunc(Pr),an(!1),qt(Bg),be(r.CULL_FACE),Dt(va);function be(G){x[G]!==!0&&(r.enable(G),x[G]=!0)}function He(G){x[G]!==!1&&(r.disable(G),x[G]=!1)}function $e(G,Te){return g[G]!==Te?(r.bindFramebuffer(G,Te),g[G]=Te,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Qe(G,Te){let he=A,Be=!1;if(G){he=y.get(Te),he===void 0&&(he=[],y.set(Te,he));const Ne=G.textures;if(he.length!==Ne.length||he[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,qe=Ne.length;ye<qe;ye++)he[ye]=r.COLOR_ATTACHMENT0+ye;he.length=Ne.length,Be=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Be=!0);Be&&r.drawBuffers(he)}function kt(G){return U!==G?(r.useProgram(G),U=G,!0):!1}const ft={[Us]:r.FUNC_ADD,[HS]:r.FUNC_SUBTRACT,[GS]:r.FUNC_REVERSE_SUBTRACT};ft[VS]=r.MIN,ft[kS]=r.MAX;const _t={[XS]:r.ZERO,[WS]:r.ONE,[qS]:r.SRC_COLOR,[Id]:r.SRC_ALPHA,[JS]:r.SRC_ALPHA_SATURATE,[KS]:r.DST_COLOR,[jS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[Hd]:r.ONE_MINUS_SRC_ALPHA,[QS]:r.ONE_MINUS_DST_COLOR,[ZS]:r.ONE_MINUS_DST_ALPHA,[$S]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function Dt(G,Te,he,Be,Ne,ye,qe,et,en,Rt){if(G===va){M===!0&&(He(r.BLEND),M=!1);return}if(M===!1&&(be(r.BLEND),M=!0),G!==IS){if(G!==S||Rt!==Z){if((w!==Us||k!==Us)&&(r.blendEquation(r.FUNC_ADD),w=Us,k=Us),Rt)switch(G){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ig:r.blendFunc(r.ONE,r.ONE);break;case Hg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",G);break}else switch(G){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ig:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hg:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gg:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",G);break}P=null,L=null,O=null,B=null,b.set(0,0,0),z=0,S=G,Z=Rt}return}Ne=Ne||Te,ye=ye||he,qe=qe||Be,(Te!==w||Ne!==k)&&(r.blendEquationSeparate(ft[Te],ft[Ne]),w=Te,k=Ne),(he!==P||Be!==L||ye!==O||qe!==B)&&(r.blendFuncSeparate(_t[he],_t[Be],_t[ye],_t[qe]),P=he,L=Be,O=ye,B=qe),(et.equals(b)===!1||en!==z)&&(r.blendColor(et.r,et.g,et.b,en),b.copy(et),z=en),S=G,Z=!1}function lt(G,Te){G.side===ga?He(r.CULL_FACE):be(r.CULL_FACE);let he=G.side===qn;Te&&(he=!he),an(he),G.blending===Lr&&G.transparent===!1?Dt(va):Dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Be=G.stencilWrite;h.setTest(Be),Be&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),X(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(G){H!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),H=G)}function qt(G){G!==FS?(be(r.CULL_FACE),G!==Y&&(G===Bg?r.cullFace(r.BACK):G===zS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),Y=G}function yn(G){G!==ue&&(F&&r.lineWidth(G),ue=G)}function X(G,Te,he){G?(be(r.POLYGON_OFFSET_FILL),(me!==Te||W!==he)&&(me=Te,W=he,d.getReversed()&&(Te=-Te),r.polygonOffset(Te,he))):He(r.POLYGON_OFFSET_FILL)}function $t(G){G?be(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function dt(G){G===void 0&&(G=r.TEXTURE0+D-1),xe!==G&&(r.activeTexture(G),xe=G)}function zt(G,Te,he){he===void 0&&(xe===null?he=r.TEXTURE0+D-1:he=xe);let Be=N[he];Be===void 0&&(Be={type:void 0,texture:void 0},N[he]=Be),(Be.type!==G||Be.texture!==Te)&&(xe!==he&&(r.activeTexture(he),xe=he),r.bindTexture(G,Te||Me[G]),Be.type=G,Be.texture=Te)}function Re(){const G=N[xe];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Zt(){try{r.compressedTexImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function E(){try{r.texSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Q(){try{r.texSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Ce(){try{r.texStorage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Le(){try{r.texStorage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function ce(){try{r.texImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function fe(){try{r.texImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Oe(G){return v[G]!==void 0?v[G]:r.getParameter(G)}function Pe(G,Te){v[G]!==Te&&(r.pixelStorei(G,Te),v[G]=Te)}function Ue(G){Ae.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ae.copy(G))}function we(G){De.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),De.copy(G))}function nt(G,Te){let he=p.get(Te);he===void 0&&(he=new WeakMap,p.set(Te,he));let Be=he.get(G);Be===void 0&&(Be=r.getUniformBlockIndex(Te,G.name),he.set(G,Be))}function it(G,Te){const Be=p.get(Te).get(G);m.get(Te)!==Be&&(r.uniformBlockBinding(Te,Be,G.__bindingPointIndex),m.set(Te,Be))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},v={},xe=null,N={},g={},y=new WeakMap,A=[],U=null,M=!1,S=null,w=null,P=null,L=null,k=null,O=null,B=null,b=new Gt(0,0,0),z=0,Z=!1,H=null,Y=null,ue=null,me=null,W=null,Ae.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:He,bindFramebuffer:$e,drawBuffers:Qe,useProgram:kt,setBlending:Dt,setMaterial:lt,setFlipSided:an,setCullFace:qt,setLineWidth:yn,setPolygonOffset:X,setScissorTest:$t,activeTexture:dt,bindTexture:zt,unbindTexture:Re,compressedTexImage2D:Zt,compressedTexImage3D:C,texImage2D:ce,texImage3D:fe,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Ue,viewport:we,reset:ht}}function nA(r,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,x=new WeakMap,v=new Set;let g;const y=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(C,E){return A?new OffscreenCanvas(C,E):Zo("canvas")}function M(C,E,Q){let _e=1;const Ee=Zt(C);if((Ee.width>Q||Ee.height>Q)&&(_e=Q/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ce=Math.floor(_e*Ee.width),Le=Math.floor(_e*Ee.height);g===void 0&&(g=U(Ce,Le));const ce=E?U(Ce,Le):g;return ce.width=Ce,ce.height=Le,ce.getContext("2d").drawImage(C,0,0,Ce,Le),tt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Ce+"x"+Le+")."),ce}else return"data"in C&&tt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),C;return C}function S(C){return C.generateMipmaps}function w(C){r.generateMipmap(C)}function P(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(C,E,Q,_e,Ee,Ce=!1){if(C!==null){if(r[C]!==void 0)return r[C];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Le;_e&&(Le=t.get("EXT_texture_norm16"),Le||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===r.RED&&(Q===r.FLOAT&&(ce=r.R32F),Q===r.HALF_FLOAT&&(ce=r.R16F),Q===r.UNSIGNED_BYTE&&(ce=r.R8),Q===r.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),Q===r.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.R8UI),Q===r.UNSIGNED_SHORT&&(ce=r.R16UI),Q===r.UNSIGNED_INT&&(ce=r.R32UI),Q===r.BYTE&&(ce=r.R8I),Q===r.SHORT&&(ce=r.R16I),Q===r.INT&&(ce=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(ce=r.RG32F),Q===r.HALF_FLOAT&&(ce=r.RG16F),Q===r.UNSIGNED_BYTE&&(ce=r.RG8),Q===r.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),Q===r.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Q===r.UNSIGNED_INT&&(ce=r.RG32UI),Q===r.BYTE&&(ce=r.RG8I),Q===r.SHORT&&(ce=r.RG16I),Q===r.INT&&(ce=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Q===r.UNSIGNED_INT&&(ce=r.RGB32UI),Q===r.BYTE&&(ce=r.RGB8I),Q===r.SHORT&&(ce=r.RGB16I),Q===r.INT&&(ce=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Q===r.BYTE&&(ce=r.RGBA8I),Q===r.SHORT&&(ce=r.RGBA16I),Q===r.INT&&(ce=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),Q===r.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),E===r.RGBA){const fe=Ce?kc:yt.getTransfer(Ee);Q===r.FLOAT&&(ce=r.RGBA32F),Q===r.HALF_FLOAT&&(ce=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ce=fe===Ft?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),Q===r.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function k(C,E){let Q;return C?E===null||E===ki||E===jo?Q=r.DEPTH24_STENCIL8:E===Bi?Q=r.DEPTH32F_STENCIL8:E===Yo&&(Q=r.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===jo?Q=r.DEPTH_COMPONENT24:E===Bi?Q=r.DEPTH_COMPONENT32F:E===Yo&&(Q=r.DEPTH_COMPONENT16),Q}function O(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function B(C){const E=C.target;E.removeEventListener("dispose",B),z(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),H(E)}function z(C){const E=s.get(C);if(E.__webglInit===void 0)return;const Q=C.source,_e=y.get(Q);if(_e){const Ee=_e[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Z(C),Object.keys(_e).length===0&&y.delete(Q)}s.remove(C)}function Z(C){const E=s.get(C);r.deleteTexture(E.__webglTexture);const Q=C.source,_e=y.get(Q);delete _e[E.__cacheKey],d.memory.textures--}function H(C){const E=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ee=0;Ee<E.__webglFramebuffer[_e].length;Ee++)r.deleteFramebuffer(E.__webglFramebuffer[_e][Ee]);else r.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)r.deleteFramebuffer(E.__webglFramebuffer[_e]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=C.textures;for(let _e=0,Ee=Q.length;_e<Ee;_e++){const Ce=s.get(Q[_e]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),d.memory.textures--),s.remove(Q[_e])}s.remove(C)}let Y=0;function ue(){Y=0}function me(){return Y}function W(C){Y=C}function D(){const C=Y;return C>=l.maxTextures&&tt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),Y+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ie(C,E){const Q=s.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Q.__version!==C.version){const _e=C.image;if(_e===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,C,E);return}}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function pe(C,E){const Q=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){He(Q,C,E);return}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function xe(C,E){const Q=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){He(Q,C,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function N(C,E){const Q=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Q.__version!==C.version){$e(Q,C,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const K={[jd]:r.REPEAT,[_a]:r.CLAMP_TO_EDGE,[Zd]:r.MIRRORED_REPEAT},Se={[wn]:r.NEAREST,[sM]:r.NEAREST_MIPMAP_NEAREST,[cc]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[cd]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},Ae={[lM]:r.NEVER,[hM]:r.ALWAYS,[cM]:r.LESS,[zh]:r.LEQUAL,[uM]:r.EQUAL,[Bh]:r.GEQUAL,[fM]:r.GREATER,[dM]:r.NOTEQUAL};function De(C,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===cd||E.magFilter===cc||E.magFilter===Ls||E.minFilter===Pn||E.minFilter===cd||E.minFilter===cc||E.minFilter===Ls)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,K[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Se[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==cc&&E.minFilter!==Ls||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function oe(C,E){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",B));const _e=E.source;let Ee=y.get(_e);Ee===void 0&&(Ee={},y.set(_e,Ee));const Ce=F(E);if(Ce!==C.__cacheKey){Ee[Ce]===void 0&&(Ee[Ce]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Ee[Ce].usedTimes++;const Le=Ee[C.__cacheKey];Le!==void 0&&(Ee[C.__cacheKey].usedTimes--,Le.usedTimes===0&&Z(E)),C.__cacheKey=Ce,C.__webglTexture=Ee[Ce].texture}return Q}function Me(C,E,Q){return Math.floor(Math.floor(C/Q)/E)}function be(C,E,Q,_e){const Ce=C.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,_e,E.data);else{Ce.sort((Pe,Ue)=>Pe.start-Ue.start);let Le=0;for(let Pe=1;Pe<Ce.length;Pe++){const Ue=Ce[Le],we=Ce[Pe],nt=Ue.start+Ue.count,it=Me(we.start,E.width,4),ht=Me(Ue.start,E.width,4);we.start<=nt+1&&it===ht&&Me(we.start+we.count-1,E.width,4)===it?Ue.count=Math.max(Ue.count,we.start+we.count-Ue.start):(++Le,Ce[Le]=we)}Ce.length=Le+1;const ce=i.getParameter(r.UNPACK_ROW_LENGTH),fe=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Ue=Ce.length;Pe<Ue;Pe++){const we=Ce[Pe],nt=Math.floor(we.start/4),it=Math.ceil(we.count/4),ht=nt%E.width,G=Math.floor(nt/E.width),Te=it,he=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,G),i.texSubImage2D(r.TEXTURE_2D,0,ht,G,Te,he,Q,_e,E.data)}C.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ce),i.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function He(C,E,Q){let _e=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=r.TEXTURE_3D);const Ee=oe(C,E),Ce=E.source;i.bindTexture(_e,C.__webglTexture,r.TEXTURE0+Q);const Le=s.get(Ce);if(Ce.version!==Le.__version||Ee===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=yt.getPrimaries(yt.workingColorSpace),Be=E.colorSpace===is?null:yt.getPrimaries(E.colorSpace),Ne=E.colorSpace===is||he===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=M(E.image,!1,l.maxTextureSize);fe=Re(E,fe);const Oe=u.convert(E.format,E.colorSpace),Pe=u.convert(E.type);let Ue=L(E.internalFormat,Oe,Pe,E.normalized,E.colorSpace,E.isVideoTexture);De(_e,E);let we;const nt=E.mipmaps,it=E.isVideoTexture!==!0,ht=Le.__version===void 0||Ee===!0,G=Ce.dataReady,Te=O(E,fe);if(E.isDepthTexture)Ue=k(E.format===Os,E.type),ht&&(it?i.texStorage2D(r.TEXTURE_2D,1,Ue,fe.width,fe.height):i.texImage2D(r.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Oe,Pe,null));else if(E.isDataTexture)if(nt.length>0){it&&ht&&i.texStorage2D(r.TEXTURE_2D,Te,Ue,nt[0].width,nt[0].height);for(let he=0,Be=nt.length;he<Be;he++)we=nt[he],it?G&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,we.width,we.height,Oe,Pe,we.data):i.texImage2D(r.TEXTURE_2D,he,Ue,we.width,we.height,0,Oe,Pe,we.data);E.generateMipmaps=!1}else it?(ht&&i.texStorage2D(r.TEXTURE_2D,Te,Ue,fe.width,fe.height),G&&be(E,fe,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Oe,Pe,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&ht&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ue,nt[0].width,nt[0].height,fe.depth);for(let he=0,Be=nt.length;he<Be;he++)if(we=nt[he],E.format!==wi)if(Oe!==null)if(it){if(G)if(E.layerUpdates.size>0){const Ne=m_(we.width,we.height,E.format,E.type);for(const ye of E.layerUpdates){const qe=we.data.subarray(ye*Ne/we.data.BYTES_PER_ELEMENT,(ye+1)*Ne/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,ye,we.width,we.height,1,Oe,qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,fe.depth,Oe,we.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Ue,we.width,we.height,fe.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,fe.depth,Oe,Pe,we.data):i.texImage3D(r.TEXTURE_2D_ARRAY,he,Ue,we.width,we.height,fe.depth,0,Oe,Pe,we.data)}else{it&&ht&&i.texStorage2D(r.TEXTURE_2D,Te,Ue,nt[0].width,nt[0].height);for(let he=0,Be=nt.length;he<Be;he++)we=nt[he],E.format!==wi?Oe!==null?it?G&&i.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,we.width,we.height,Oe,we.data):i.compressedTexImage2D(r.TEXTURE_2D,he,Ue,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,we.width,we.height,Oe,Pe,we.data):i.texImage2D(r.TEXTURE_2D,he,Ue,we.width,we.height,0,Oe,Pe,we.data)}else if(E.isDataArrayTexture)if(it){if(ht&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ue,fe.width,fe.height,fe.depth),G)if(E.layerUpdates.size>0){const he=m_(fe.width,fe.height,E.format,E.type);for(const Be of E.layerUpdates){const Ne=fe.data.subarray(Be*he/fe.data.BYTES_PER_ELEMENT,(Be+1)*he/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Be,fe.width,fe.height,1,Oe,Pe,Ne)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(E.isData3DTexture)it?(ht&&i.texStorage3D(r.TEXTURE_3D,Te,Ue,fe.width,fe.height,fe.depth),G&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(E.isFramebufferTexture){if(ht)if(it)i.texStorage2D(r.TEXTURE_2D,Te,Ue,fe.width,fe.height);else{let he=fe.width,Be=fe.height;for(let Ne=0;Ne<Te;Ne++)i.texImage2D(r.TEXTURE_2D,Ne,Ue,he,Be,0,Oe,Pe,null),he>>=1,Be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const he=r.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),fe.parentNode!==he){he.appendChild(fe),v.add(E),he.onpaint=et=>{const en=et.changedElements;for(const Rt of v)en.includes(Rt.image)&&(Rt.needsUpdate=!0)},he.requestPaint();return}const Be=0,Ne=r.RGBA,ye=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Be,Ne,ye,qe,fe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&ht){const he=Zt(nt[0]);i.texStorage2D(r.TEXTURE_2D,Te,Ue,he.width,he.height)}for(let he=0,Be=nt.length;he<Be;he++)we=nt[he],it?G&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Oe,Pe,we):i.texImage2D(r.TEXTURE_2D,he,Ue,Oe,Pe,we);E.generateMipmaps=!1}else if(it){if(ht){const he=Zt(fe);i.texStorage2D(r.TEXTURE_2D,Te,Ue,he.width,he.height)}G&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,fe)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Oe,Pe,fe);S(E)&&w(_e),Le.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function $e(C,E,Q){if(E.image.length!==6)return;const _e=oe(C,E),Ee=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Q);const Ce=s.get(Ee);if(Ee.version!==Ce.__version||_e===!0){i.activeTexture(r.TEXTURE0+Q);const Le=yt.getPrimaries(yt.workingColorSpace),ce=E.colorSpace===is?null:yt.getPrimaries(E.colorSpace),fe=E.colorSpace===is||Le===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Oe&&!Pe?Ue[ye]=M(E.image[ye],!0,l.maxCubemapSize):Ue[ye]=Pe?E.image[ye].image:E.image[ye],Ue[ye]=Re(E,Ue[ye]);const we=Ue[0],nt=u.convert(E.format,E.colorSpace),it=u.convert(E.type),ht=L(E.internalFormat,nt,it,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Te=Ce.__version===void 0||_e===!0,he=Ee.dataReady;let Be=O(E,we);De(r.TEXTURE_CUBE_MAP,E);let Ne;if(Oe){G&&Te&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,we.width,we.height);for(let ye=0;ye<6;ye++){Ne=Ue[ye].mipmaps;for(let qe=0;qe<Ne.length;qe++){const et=Ne[qe];E.format!==wi?nt!==null?G?he&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,et.width,et.height,nt,et.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,ht,et.width,et.height,0,et.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,et.width,et.height,nt,it,et.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,ht,et.width,et.height,0,nt,it,et.data)}}}else{if(Ne=E.mipmaps,G&&Te){Ne.length>0&&Be++;const ye=Zt(Ue[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Pe){G?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,nt,it,Ue[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Ue[ye].width,Ue[ye].height,0,nt,it,Ue[ye].data);for(let qe=0;qe<Ne.length;qe++){const en=Ne[qe].image[ye].image;G?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,en.width,en.height,nt,it,en.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,ht,en.width,en.height,0,nt,it,en.data)}}else{G?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,nt,it,Ue[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,nt,it,Ue[ye]);for(let qe=0;qe<Ne.length;qe++){const et=Ne[qe];G?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,nt,it,et.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,ht,nt,it,et.image[ye])}}}S(E)&&w(r.TEXTURE_CUBE_MAP),Ce.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Qe(C,E,Q,_e,Ee,Ce){const Le=u.convert(Q.format,Q.colorSpace),ce=u.convert(Q.type),fe=L(Q.internalFormat,Le,ce,Q.normalized,Q.colorSpace),Oe=s.get(E),Pe=s.get(Q);if(Pe.__renderTarget=E,!Oe.__hasExternalTextures){const Ue=Math.max(1,E.width>>Ce),we=Math.max(1,E.height>>Ce);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,Ce,fe,Ue,we,E.depth,0,Le,ce,null):i.texImage2D(Ee,Ce,fe,Ue,we,0,Le,ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,C),dt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,0,$t(E)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(C,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const _e=E.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,Ce=k(E.stencilBuffer,Ee),Le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;dt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t(E),Ce,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t(E),Ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,C)}else{const _e=E.textures;for(let Ee=0;Ee<_e.length;Ee++){const Ce=_e[Ee],Le=u.convert(Ce.format,Ce.colorSpace),ce=u.convert(Ce.type),fe=L(Ce.internalFormat,Le,ce,Ce.normalized,Ce.colorSpace);dt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t(E),fe,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t(E),fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ft(C,E,Q){const _e=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Ee.__webglTexture===void 0){Ee.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),De(r.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=u.convert(E.depthTexture.format),Pe=u.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Ma?Ue=r.DEPTH_COMPONENT24:E.depthTexture.format===Os&&(Ue=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ue,E.width,E.height,0,Oe,Pe,null)}}else ie(E.depthTexture,0);const Ce=Ee.__webglTexture,Le=$t(E),ce=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,fe=E.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)dt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,Ce,0);else if(E.depthTexture.format===Os)dt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,Ce,0);else throw new Error("Unknown depthTexture format")}function _t(C){const E=s.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const _e=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=_e}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let _e=0;_e<6;_e++)ft(E.__webglFramebuffer[_e],C,_e);else{const _e=C.texture.mipmaps;_e&&_e.length>0?ft(E.__webglFramebuffer[0],C,0):ft(E.__webglFramebuffer,C,0)}else if(Q){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=r.createRenderbuffer(),kt(E.__webglDepthbuffer[_e],C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Ce)}}else{const _e=C.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),kt(E.__webglDepthbuffer,C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(C,E,Q){const _e=s.get(C);E!==void 0&&Qe(_e.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&_t(C)}function lt(C){const E=C.texture,Q=s.get(C),_e=s.get(E);C.addEventListener("dispose",b);const Ee=C.textures,Ce=C.isWebGLCubeRenderTarget===!0,Le=Ee.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=E.version,d.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ce]=[];for(let fe=0;fe<E.mipmaps.length;fe++)Q.__webglFramebuffer[ce][fe]=r.createFramebuffer()}else Q.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)Q.__webglFramebuffer[ce]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ce=0,fe=Ee.length;ce<fe;ce++){const Oe=s.get(Ee[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),d.memory.textures++)}if(C.samples>0&&dt(C)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ce=0;ce<Ee.length;ce++){const fe=Ee[ce];Q.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ce]);const Oe=u.convert(fe.format,fe.colorSpace),Pe=u.convert(fe.type),Ue=L(fe.internalFormat,Oe,Pe,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),we=$t(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Ue,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(Q.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),De(r.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Qe(Q.__webglFramebuffer[ce][fe],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Qe(Q.__webglFramebuffer[ce],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(E)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ce=0,fe=Ee.length;ce<fe;ce++){const Oe=Ee[ce],Pe=s.get(Oe);let Ue=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ue=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Pe.__webglTexture),De(Ue,Oe),Qe(Q.__webglFramebuffer,C,Oe,r.COLOR_ATTACHMENT0+ce,Ue,0),S(Oe)&&w(Ue)}i.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ce,_e.__webglTexture),De(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Qe(Q.__webglFramebuffer[fe],C,E,r.COLOR_ATTACHMENT0,ce,fe);else Qe(Q.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ce,0);S(E)&&w(ce),i.unbindTexture()}C.depthBuffer&&_t(C)}function an(C){const E=C.textures;for(let Q=0,_e=E.length;Q<_e;Q++){const Ee=E[Q];if(S(Ee)){const Ce=P(C),Le=s.get(Ee).__webglTexture;i.bindTexture(Ce,Le),w(Ce),i.unbindTexture()}}}const qt=[],yn=[];function X(C){if(C.samples>0){if(dt(C)===!1){const E=C.textures,Q=C.width,_e=C.height;let Ee=r.COLOR_BUFFER_BIT;const Ce=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(C),ce=E.length>1;if(ce)for(let Oe=0;Oe<E.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const fe=C.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,Q,_e,0,0,Q,_e,Ee,r.NEAREST),m===!0&&(qt.length=0,yn.length=0,qt.push(r.COLOR_ATTACHMENT0+Oe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(qt.push(Ce),yn.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,yn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<E.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function $t(C){return Math.min(l.maxSamples,C.samples)}function dt(C){const E=s.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(C){const E=d.render.frame;x.get(C)!==E&&(x.set(C,E),C.update())}function Re(C,E){const Q=C.colorSpace,_e=C.format,Ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Q!==Vc&&Q!==is&&(yt.getTransfer(Q)===Ft?(_e!==wi||Ee!==vi)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),E}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=D,this.resetTextureUnits=ue,this.getTextureUnits=me,this.setTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=pe,this.setTexture3D=xe,this.setTextureCube=N,this.rebindTextures=Dt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iA(r,t){function i(s,l=is){let u;const d=yt.getTransfer(l);if(s===vi)return r.UNSIGNED_BYTE;if(s===Nh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Q_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===J_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z_)return r.BYTE;if(s===K_)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===Uh)return r.INT;if(s===ki)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===Sa)return r.HALF_FLOAT;if(s===$_)return r.ALPHA;if(s===ev)return r.RGB;if(s===wi)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===tv)return r.RED;if(s===Oh)return r.RED_INTEGER;if(s===Fs)return r.RG;if(s===Ph)return r.RG_INTEGER;if(s===Fh)return r.RGBA_INTEGER;if(s===Pc||s===Fc||s===zc||s===Bc)if(d===Ft)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kd||s===Qd||s===Jd||s===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===eh||s===th||s===nh||s===ih||s===ah||s===Hc||s===sh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===eh||s===th)return d===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===nh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===ih)return u.COMPRESSED_R11_EAC;if(s===ah)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Hc)return u.COMPRESSED_RG11_EAC;if(s===sh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===rh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ch)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ph)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_h)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sh||s===Mh||s===yh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Sh)return d===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Eh||s===bh||s===Gc||s===Th)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Eh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===bh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Th)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new uv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wi({vertexShader:aA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xi(new jc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Bs{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,g=null,y=null,A=null;const U=typeof XRWebGLBinding<"u",M=new rA,S={},w=i.getContextAttributes();let P=null,L=null;const k=[],O=[],B=new Vt;let b=null;const z=new _i;z.viewport=new ln;const Z=new _i;Z.viewport=new ln;const H=[z,Z],Y=new _y;let ue=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Me=k[oe];return Me===void 0&&(Me=new md,k[oe]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(oe){let Me=k[oe];return Me===void 0&&(Me=new md,k[oe]=Me),Me.getGripSpace()},this.getHand=function(oe){let Me=k[oe];return Me===void 0&&(Me=new md,k[oe]=Me),Me.getHandSpace()};function W(oe){const Me=O.indexOf(oe.inputSource);if(Me===-1)return;const be=k[Me];be!==void 0&&(be.update(oe.inputSource,oe.frame,p||d),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function D(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",F);for(let oe=0;oe<k.length;oe++){const Me=O[oe];Me!==null&&(O[oe]=null,k[oe].disconnect(Me))}ue=null,me=null,M.reset();for(const oe in S)delete S[oe];t.setRenderTarget(P),y=null,g=null,v=null,l=null,L=null,De.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){u=oe,s.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,s.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&U&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",D),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(B),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,$e=null;w.depth&&($e=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=w.stencil?Os:Ma,He=w.stencil?jo:ki);const Qe={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Gi(g.textureWidth,g.textureHeight,{format:wi,type:vi,depthTexture:new zr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Gi(y.framebufferWidth,y.framebufferHeight,{format:wi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(oe){for(let Me=0;Me<oe.removed.length;Me++){const be=oe.removed[Me],He=O.indexOf(be);He>=0&&(O[He]=null,k[He].disconnect(be))}for(let Me=0;Me<oe.added.length;Me++){const be=oe.added[Me];let He=O.indexOf(be);if(He===-1){for(let Qe=0;Qe<k.length;Qe++)if(Qe>=O.length){O.push(be),He=Qe;break}else if(O[Qe]===null){O[Qe]=be,He=Qe;break}if(He===-1)break}const $e=k[He];$e&&$e.connect(be)}}const ie=new re,pe=new re;function xe(oe,Me,be){ie.setFromMatrixPosition(Me.matrixWorld),pe.setFromMatrixPosition(be.matrixWorld);const He=ie.distanceTo(pe),$e=Me.projectionMatrix.elements,Qe=be.projectionMatrix.elements,kt=$e[14]/($e[10]-1),ft=$e[14]/($e[10]+1),_t=($e[9]+1)/$e[5],Dt=($e[9]-1)/$e[5],lt=($e[8]-1)/$e[0],an=(Qe[8]+1)/Qe[0],qt=kt*lt,yn=kt*an,X=He/(-lt+an),$t=X*-lt;if(Me.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX($t),oe.translateZ(X),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),$e[10]===-1)oe.projectionMatrix.copy(Me.projectionMatrix),oe.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const dt=kt+X,zt=ft+X,Re=qt-$t,Zt=yn+(He-$t),C=_t*ft/zt*dt,E=Dt*ft/zt*dt;oe.projectionMatrix.makePerspective(Re,Zt,C,E,dt,zt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function N(oe,Me){Me===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Me.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let Me=oe.near,be=oe.far;M.texture!==null&&(M.depthNear>0&&(Me=M.depthNear),M.depthFar>0&&(be=M.depthFar)),Y.near=Z.near=z.near=Me,Y.far=Z.far=z.far=be,(ue!==Y.near||me!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ue=Y.near,me=Y.far),Y.layers.mask=oe.layers.mask|6,z.layers.mask=Y.layers.mask&-5,Z.layers.mask=Y.layers.mask&-3;const He=oe.parent,$e=Y.cameras;N(Y,He);for(let Qe=0;Qe<$e.length;Qe++)N($e[Qe],He);$e.length===2?xe(Y,z,Z):Y.projectionMatrix.copy(z.projectionMatrix),K(oe,Y,He)};function K(oe,Me,be){be===null?oe.matrix.copy(Me.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Me.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Me.projectionMatrix),oe.projectionMatrixInverse.copy(Me.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ko*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(oe){return S[oe]};let Se=null;function Ae(oe,Me){if(x=Me.getViewerPose(p||d),A=Me,x!==null){const be=x.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let He=!1;be.length!==Y.cameras.length&&(Y.cameras.length=0,He=!0);for(let ft=0;ft<be.length;ft++){const _t=be[ft];let Dt=null;if(y!==null)Dt=y.getViewport(_t);else{const an=v.getViewSubImage(g,_t);Dt=an.viewport,ft===0&&(t.setRenderTargetTextures(L,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(L))}let lt=H[ft];lt===void 0&&(lt=new _i,lt.layers.enable(ft),lt.viewport=new ln,H[ft]=lt),lt.matrix.fromArray(_t.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(_t.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ft===0&&(Y.matrix.copy(lt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),He===!0&&Y.cameras.push(lt)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){v=s.getBinding();const ft=v.getDepthInformation(be[0]);ft&&ft.isValid&&ft.texture&&M.init(ft,l.renderState)}if($e&&$e.includes("camera-access")&&U){t.state.unbindTexture(),v=s.getBinding();for(let ft=0;ft<be.length;ft++){const _t=be[ft].camera;if(_t){let Dt=S[_t];Dt||(Dt=new uv,S[_t]=Dt);const lt=v.getCameraImage(_t);Dt.sourceTexture=lt}}}}for(let be=0;be<k.length;be++){const He=O[be],$e=k[be];He!==null&&$e!==void 0&&$e.update(He,Me,p||d)}Se&&Se(oe,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),A=null}const De=new pv;De.setAnimationLoop(Ae),this.setAnimationLoop=function(oe){Se=oe},this.dispose=function(){}}}const lA=new _n,Mv=new st;Mv.set(-1,0,0,0,1,0,0,0,1);function cA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,fv(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,P,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),v(M,S)):S.isMeshPhongMaterial?(u(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,L)):S.isMeshMatcapMaterial?(u(M,S),A(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),U(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,w,P):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),P=w.envMap,L=w.envMapRotation;P&&(M.envMap.value=P,M.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Mv),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,S){S.matcap&&(M.matcap.value=S.matcap)}function U(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uA(r,t,i,s){let l={},u={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const L=P.program;s.uniformBlockBinding(w,L)}function p(w,P){let L=l[w.id];L===void 0&&(A(w),L=x(w),l[w.id]=L,w.addEventListener("dispose",M));const k=P.program;s.updateUBOMapping(w,k);const O=t.render.frame;u[w.id]!==O&&(g(w),u[w.id]=O)}function x(w){const P=v();w.__bindingPointIndex=P;const L=r.createBuffer(),k=w.__size,O=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,k,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,L),L}function v(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=l[w.id],L=w.uniforms,k=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let O=0,B=L.length;O<B;O++){const b=Array.isArray(L[O])?L[O]:[L[O]];for(let z=0,Z=b.length;z<Z;z++){const H=b[z];if(y(H,O,z,k)===!0){const Y=H.__offset,ue=Array.isArray(H.value)?H.value:[H.value];let me=0;for(let W=0;W<ue.length;W++){const D=ue[W],F=U(D);typeof D=="number"||typeof D=="boolean"?(H.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,Y+me,H.__data)):D.isMatrix3?(H.__data[0]=D.elements[0],H.__data[1]=D.elements[1],H.__data[2]=D.elements[2],H.__data[3]=0,H.__data[4]=D.elements[3],H.__data[5]=D.elements[4],H.__data[6]=D.elements[5],H.__data[7]=0,H.__data[8]=D.elements[6],H.__data[9]=D.elements[7],H.__data[10]=D.elements[8],H.__data[11]=0):ArrayBuffer.isView(D)?H.__data.set(new D.constructor(D.buffer,D.byteOffset,H.__data.length)):(D.toArray(H.__data,me),me+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(w,P,L,k){const O=w.value,B=P+"_"+L;if(k[B]===void 0)return typeof O=="number"||typeof O=="boolean"?k[B]=O:ArrayBuffer.isView(O)?k[B]=O.slice():k[B]=O.clone(),!0;{const b=k[B];if(typeof O=="number"||typeof O=="boolean"){if(b!==O)return k[B]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(b.equals(O)===!1)return b.copy(O),!0}}return!1}function A(w){const P=w.uniforms;let L=0;const k=16;for(let B=0,b=P.length;B<b;B++){const z=Array.isArray(P[B])?P[B]:[P[B]];for(let Z=0,H=z.length;Z<H;Z++){const Y=z[Z],ue=Array.isArray(Y.value)?Y.value:[Y.value];for(let me=0,W=ue.length;me<W;me++){const D=ue[me],F=U(D),ie=L%k,pe=ie%F.boundary,xe=ie+pe;L+=pe,xe!==0&&k-xe<F.storage&&(L+=k-xe),Y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=F.storage}}}const O=L%k;return O>0&&(L+=k-O),w.__size=L,w.__cache={},this}function U(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",w),P}function M(w){const P=w.target;P.removeEventListener("dispose",M);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:p,dispose:S}}const fA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function dA(){return Fi===null&&(Fi=new ey(fA,16,16,Fs,Sa),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=_a,Fi.wrapT=_a,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class hA{constructor(t={}){const{canvas:i=mM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=vi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const U=y,M=new Set([Fh,Ph,Oh]),S=new Set([vi,ki,Yo,jo,Nh,Lh]),w=new Uint32Array(4),P=new Int32Array(4),L=new re;let k=null,O=null;const B=[],b=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let H=!1,Y=null;this._outputColorSpace=si;let ue=0,me=0,W=null,D=-1,F=null;const ie=new ln,pe=new ln;let xe=null;const N=new Gt(0);let K=0,Se=i.width,Ae=i.height,De=1,oe=null,Me=null;const be=new ln(0,0,Se,Ae),He=new ln(0,0,Se,Ae);let $e=!1;const Qe=new lv;let kt=!1,ft=!1;const _t=new _n,Dt=new re,lt=new ln,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function yn(){return W===null?De:1}let X=s;function $t(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dh}`),i.addEventListener("webglcontextlost",ye,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",et,!1),X===null){const q="webgl2";if(X=$t(q,T),X===null)throw $t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Et("WebGLRenderer: "+T.message),T}let dt,zt,Re,Zt,C,E,Q,_e,Ee,Ce,Le,ce,fe,Oe,Pe,Ue,we,nt,it,ht,G,Te,he;function Be(){dt=new dT(X),dt.init(),G=new iA(X,dt),zt=new aT(X,dt,t,G),Re=new tA(X,dt),zt.reversedDepthBuffer&&g&&Re.buffers.depth.setReversed(!0),Zt=new mT(X),C=new G1,E=new nA(X,dt,Re,C,zt,G,Zt),Q=new fT(Z),_e=new xy(X),Te=new nT(X,_e),Ee=new hT(X,_e,Zt,Te),Ce=new _T(X,Ee,_e,Te,Zt),nt=new gT(X,zt,E),Pe=new sT(C),Le=new H1(Z,Q,dt,zt,Te,Pe),ce=new cA(Z,C),fe=new k1,Oe=new Z1(dt),we=new tT(Z,Q,Re,Ce,A,m),Ue=new eA(Z,Ce,zt),he=new uA(X,Zt,zt,Re),it=new iT(X,dt,Zt),ht=new pT(X,dt,Zt),Zt.programs=Le.programs,Z.capabilities=zt,Z.extensions=dt,Z.properties=C,Z.renderLists=fe,Z.shadowMap=Ue,Z.state=Re,Z.info=Zt}Be(),U!==vi&&(z=new xT(U,i.width,i.height,l,u));const Ne=new oA(Z,X);this.xr=Ne,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(T){T!==void 0&&(De=T,this.setSize(Se,Ae,!1))},this.getSize=function(T){return T.set(Se,Ae)},this.setSize=function(T,q,ae=!0){if(Ne.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=T,Ae=q,i.width=Math.floor(T*De),i.height=Math.floor(q*De),ae===!0&&(i.style.width=T+"px",i.style.height=q+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(Se*De,Ae*De).floor()},this.setDrawingBufferSize=function(T,q,ae){Se=T,Ae=q,De=ae,i.width=Math.floor(T*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(U===vi){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ie)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,q,ae,ee){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,q,ae,ee),Re.viewport(ie.copy(be).multiplyScalar(De).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,q,ae,ee){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,q,ae,ee),Re.scissor(pe.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(T){Re.setScissorTest($e=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,ae=!0){let ee=0;if(T){let te=!1;if(W!==null){const ze=W.texture.format;te=M.has(ze)}if(te){const ze=W.texture.type,Ve=S.has(ze),Fe=we.getClearColor(),Xe=we.getClearAlpha(),ke=Fe.r,Ze=Fe.g,rt=Fe.b;Ve?(w[0]=ke,w[1]=Ze,w[2]=rt,w[3]=Xe,X.clearBufferuiv(X.COLOR,0,w)):(P[0]=ke,P[1]=Ze,P[2]=rt,P[3]=Xe,X.clearBufferiv(X.COLOR,0,P))}else ee|=X.COLOR_BUFFER_BIT}q&&(ee|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Y=T},this.dispose=function(){i.removeEventListener("webglcontextlost",ye,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",et,!1),we.dispose(),fe.dispose(),Oe.dispose(),C.dispose(),Q.dispose(),Ce.dispose(),Te.dispose(),he.dispose(),Le.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",kr),Ne.removeEventListener("sessionend",Xr),Dn.stop()};function ye(T){T.preventDefault(),Yg("WebGLRenderer: Context Lost."),H=!0}function qe(){Yg("WebGLRenderer: Context Restored."),H=!1;const T=Zt.autoReset,q=Ue.enabled,ae=Ue.autoUpdate,ee=Ue.needsUpdate,te=Ue.type;Be(),Zt.autoReset=T,Ue.enabled=q,Ue.autoUpdate=ae,Ue.needsUpdate=ee,Ue.type=te}function et(T){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function en(T){const q=T.target;q.removeEventListener("dispose",en),Rt(q)}function Rt(T){oi(T),C.remove(T)}function oi(T){const q=C.get(T).programs;q!==void 0&&(q.forEach(function(ae){Le.releaseProgram(ae)}),T.isShaderMaterial&&Le.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,ae,ee,te,ze){q===null&&(q=an);const Ve=te.isMesh&&te.matrixWorld.determinant()<0,Fe=ba(T,q,ae,ee,te);Re.setMaterial(ee,Ve);let Xe=ae.index,ke=1;if(ee.wireframe===!0){if(Xe=Ee.getWireframeAttribute(ae),Xe===void 0)return;ke=2}const Ze=ae.drawRange,rt=ae.attributes.position;let je=Ze.start*ke,bt=(Ze.start+Ze.count)*ke;ze!==null&&(je=Math.max(je,ze.start*ke),bt=Math.min(bt,(ze.start+ze.count)*ke)),Xe!==null?(je=Math.max(je,0),bt=Math.min(bt,Xe.count)):rt!=null&&(je=Math.max(je,0),bt=Math.min(bt,rt.count));const Kt=bt-je;if(Kt<0||Kt===1/0)return;Te.setup(te,ee,Fe,ae,Xe);let Xt,Ut=it;if(Xe!==null&&(Xt=_e.get(Xe),Ut=ht,Ut.setIndex(Xt)),te.isMesh)ee.wireframe===!0?(Re.setLineWidth(ee.wireframeLinewidth*yn()),Ut.setMode(X.LINES)):Ut.setMode(X.TRIANGLES);else if(te.isLine){let Nt=ee.linewidth;Nt===void 0&&(Nt=1),Re.setLineWidth(Nt*yn()),te.isLineSegments?Ut.setMode(X.LINES):te.isLineLoop?Ut.setMode(X.LINE_LOOP):Ut.setMode(X.LINE_STRIP)}else te.isPoints?Ut.setMode(X.POINTS):te.isSprite&&Ut.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Nt=te._multiDrawStarts,Ge=te._multiDrawCounts,Un=te._multiDrawCount,pt=Xe?_e.get(Xe).bytesPerElement:1,mn=C.get(ee).currentProgram.getUniforms();for(let jn=0;jn<Un;jn++)mn.setValue(X,"_gl_DrawID",jn),Ut.render(Nt[jn]/pt,Ge[jn])}else if(te.isInstancedMesh)Ut.renderInstances(je,Kt,te.count);else if(ae.isInstancedBufferGeometry){const Nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ge=Math.min(ae.instanceCount,Nt);Ut.renderInstances(je,Kt,Ge)}else Ut.render(je,Kt)};function Yn(T,q,ae){T.transparent===!0&&T.side===ga&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,Is(T,q,ae),T.side=rs,T.needsUpdate=!0,Is(T,q,ae),T.side=ga):Is(T,q,ae)}this.compile=function(T,q,ae=null){ae===null&&(ae=T),O=Oe.get(ae),O.init(q),b.push(O),ae.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(O.pushLight(te),te.castShadow&&O.pushShadow(te))}),T!==ae&&T.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(O.pushLight(te),te.castShadow&&O.pushShadow(te))}),O.setupLights();const ee=new Set;return T.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const ze=te.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){const Fe=ze[Ve];Yn(Fe,ae,te),ee.add(Fe)}else Yn(ze,ae,te),ee.add(ze)}),O=b.pop(),ee},this.compileAsync=function(T,q,ae=null){const ee=this.compile(T,q,ae);return new Promise(te=>{function ze(){if(ee.forEach(function(Ve){C.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){te(T);return}setTimeout(ze,10)}dt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let os=null;function Vr(T){os&&os(T)}function kr(){Dn.stop()}function Xr(){Dn.start()}const Dn=new pv;Dn.setAnimationLoop(Vr),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(T){os=T,Ne.setAnimationLoop(T),T===null?Dn.stop():Dn.start()},Ne.addEventListener("sessionstart",kr),Ne.addEventListener("sessionend",Xr),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Y!==null&&Y.renderStart(T,q);const ae=Ne.enabled===!0&&Ne.isPresenting===!0,ee=z!==null&&(W===null||ae)&&z.begin(Z,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(q),q=Ne.getCamera()),T.isScene===!0&&T.onBeforeRender(Z,T,q,W),O=Oe.get(T,b.length),O.init(q),O.state.textureUnits=E.getTextureUnits(),b.push(O),_t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qe.setFromProjectionMatrix(_t,Ii,q.reversedDepth),ft=this.localClippingEnabled,kt=Pe.init(this.clippingPlanes,ft),k=fe.get(T,B.length),k.init(),B.push(k),Ne.enabled===!0&&Ne.isPresenting===!0){const Ve=Z.xr.getDepthSensingMesh();Ve!==null&&sn(Ve,q,-1/0,Z.sortObjects)}sn(T,q,0,Z.sortObjects),k.finish(),Z.sortObjects===!0&&k.sort(oe,Me),qt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,qt&&we.addToRenderList(k,T),this.info.render.frame++,kt===!0&&Pe.beginShadows();const te=O.state.shadowsArray;if(Ue.render(te,T,q),kt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&z.hasRenderPass())===!1){const Ve=k.opaque,Fe=k.transmissive;if(O.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Fe.length>0)for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const rt=Xe[ke];Yi(Ve,Fe,T,rt)}qt&&we.render(T);for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const rt=Xe[ke];En(k,T,rt,rt.viewport)}}else Fe.length>0&&Yi(Ve,Fe,T,q),qt&&we.render(T),En(k,T,q)}W!==null&&me===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),ee&&z.end(Z),T.isScene===!0&&T.onAfterRender(Z,T,q),Te.resetDefaultState(),D=-1,F=null,b.pop(),b.length>0?(O=b[b.length-1],E.setTextureUnits(O.state.textureUnits),kt===!0&&Pe.setGlobalState(Z.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?k=B[B.length-1]:k=null,Y!==null&&Y.renderEnd()};function sn(T,q,ae,ee){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ae=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)O.pushLightProbeGrid(T);else if(T.isLight)O.pushLight(T),T.castShadow&&O.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qe.intersectsSprite(T)){ee&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_t);const Ve=Ce.update(T),Fe=T.material;Fe.visible&&k.push(T,Ve,Fe,ae,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qe.intersectsObject(T))){const Ve=Ce.update(T),Fe=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),lt.copy(Ve.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(_t)),Array.isArray(Fe)){const Xe=Ve.groups;for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const rt=Xe[ke],je=Fe[rt.materialIndex];je&&je.visible&&k.push(T,Ve,je,ae,lt.z,rt)}}else Fe.visible&&k.push(T,Ve,Fe,ae,lt.z,null)}}const ze=T.children;for(let Ve=0,Fe=ze.length;Ve<Fe;Ve++)sn(ze[Ve],q,ae,ee)}function En(T,q,ae,ee){const{opaque:te,transmissive:ze,transparent:Ve}=T;O.setupLightsView(ae),kt===!0&&Pe.setGlobalState(Z.clippingPlanes,ae),ee&&Re.viewport(ie.copy(ee)),te.length>0&&ya(te,q,ae),ze.length>0&&ya(ze,q,ae),Ve.length>0&&ya(Ve,q,ae),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Yi(T,q,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ee.id]===void 0){const je=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ee.id]=new Gi(1,1,{generateMipmaps:!0,type:je?Sa:vi,minFilter:Ls,samples:Math.max(4,zt.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const ze=O.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||ie;ze.setSize(Ve.z*Z.transmissionResolutionScale,Ve.w*Z.transmissionResolutionScale);const Fe=Z.getRenderTarget(),Xe=Z.getActiveCubeFace(),ke=Z.getActiveMipmapLevel();Z.setRenderTarget(ze),Z.getClearColor(N),K=Z.getClearAlpha(),K<1&&Z.setClearColor(16777215,.5),Z.clear(),qt&&we.render(ae);const Ze=Z.toneMapping;Z.toneMapping=Hi;const rt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),O.setupLightsView(ee),kt===!0&&Pe.setGlobalState(Z.clippingPlanes,ee),ya(T,ae,ee),E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze),dt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let bt=0,Kt=q.length;bt<Kt;bt++){const Xt=q[bt],{object:Ut,geometry:Nt,material:Ge,group:Un}=Xt;if(Ge.side===ga&&Ut.layers.test(ee.layers)){const pt=Ge.side;Ge.side=qn,Ge.needsUpdate=!0,$o(Ut,ae,ee,Nt,Ge,Un),Ge.side=pt,Ge.needsUpdate=!0,je=!0}}je===!0&&(E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze))}Z.setRenderTarget(Fe,Xe,ke),Z.setClearColor(N,K),rt!==void 0&&(ee.viewport=rt),Z.toneMapping=Ze}function ya(T,q,ae){const ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,ze=T.length;te<ze;te++){const Ve=T[te],{object:Fe,geometry:Xe,group:ke}=Ve;let Ze=Ve.material;Ze.allowOverride===!0&&ee!==null&&(Ze=ee),Fe.layers.test(ae.layers)&&$o(Fe,q,ae,Xe,Ze,ke)}}function $o(T,q,ae,ee,te,ze){T.onBeforeRender(Z,q,ae,ee,te,ze),T.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(Z,q,ae,ee,T,ze),te.transparent===!0&&te.side===ga&&te.forceSinglePass===!1?(te.side=qn,te.needsUpdate=!0,Z.renderBufferDirect(ae,q,ee,te,T,ze),te.side=rs,te.needsUpdate=!0,Z.renderBufferDirect(ae,q,ee,te,T,ze),te.side=ga):Z.renderBufferDirect(ae,q,ee,te,T,ze),T.onAfterRender(Z,q,ae,ee,te,ze)}function Is(T,q,ae){q.isScene!==!0&&(q=an);const ee=C.get(T),te=O.state.lights,ze=O.state.shadowsArray,Ve=te.state.version,Fe=Le.getParameters(T,te.state,ze,q,ae,O.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(Fe);let ke=ee.programs;ee.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ee.envMap=Q.get(T.envMap||ee.environment,Ze),ee.envMapRotation=ee.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",en),ke=new Map,ee.programs=ke);let rt=ke.get(Xe);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===Ve)return Ea(T,Fe),rt}else Fe.uniforms=Le.getUniforms(T),Y!==null&&T.isNodeMaterial&&Y.build(T,ae,Fe),T.onBeforeCompile(Fe,Z),rt=Le.acquireProgram(Fe,Xe),ke.set(Xe,rt),ee.uniforms=Fe.uniforms;const je=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=Pe.uniform),Ea(T,Fe),ee.needsLights=ls(T),ee.lightsStateVersion=Ve,ee.needsLights&&(je.ambientLightColor.value=te.state.ambient,je.lightProbe.value=te.state.probe,je.directionalLights.value=te.state.directional,je.directionalLightShadows.value=te.state.directionalShadow,je.spotLights.value=te.state.spot,je.spotLightShadows.value=te.state.spotShadow,je.rectAreaLights.value=te.state.rectArea,je.ltc_1.value=te.state.rectAreaLTC1,je.ltc_2.value=te.state.rectAreaLTC2,je.pointLights.value=te.state.point,je.pointLightShadows.value=te.state.pointShadow,je.hemisphereLights.value=te.state.hemi,je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,je.spotLightMatrix.value=te.state.spotLightMatrix,je.spotLightMap.value=te.state.spotLightMap,je.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=O.state.lightProbeGridArray.length>0,ee.currentProgram=rt,ee.uniformsList=null,rt}function Wr(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Ic.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ea(T,q){const ae=C.get(T);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function qr(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;L.setFromMatrixPosition(q.matrixWorld);for(let ae=0,ee=T.length;ae<ee;ae++){const te=T[ae];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function ba(T,q,ae,ee,te){q.isScene!==!0&&(q=an),E.resetTextureUnits();const ze=q.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Fe=W===null?Z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:yt.workingColorSpace,Xe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,ke=Q.get(ee.envMap||Ve,Xe),Ze=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,rt=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!ae.morphAttributes.position,bt=!!ae.morphAttributes.normal,Kt=!!ae.morphAttributes.color;let Xt=Hi;ee.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=Z.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Nt=Ut!==void 0?Ut.length:0,Ge=C.get(ee),Un=O.state.lights;if(kt===!0&&(ft===!0||T!==F)){const wt=T===F&&ee.id===D;Pe.setState(ee,T,wt)}let pt=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Un.state.version||Ge.outputColorSpace!==Fe||te.isBatchedMesh&&Ge.batching===!1||!te.isBatchedMesh&&Ge.batching===!0||te.isBatchedMesh&&Ge.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ge.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ge.instancing===!1||!te.isInstancedMesh&&Ge.instancing===!0||te.isSkinnedMesh&&Ge.skinning===!1||!te.isSkinnedMesh&&Ge.skinning===!0||te.isInstancedMesh&&Ge.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ge.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ge.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ge.instancingMorph===!1&&te.morphTexture!==null||Ge.envMap!==ke||ee.fog===!0&&Ge.fog!==ze||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==rt||Ge.morphTargets!==je||Ge.morphNormals!==bt||Ge.morphColors!==Kt||Ge.toneMapping!==Xt||Ge.morphTargetsCount!==Nt||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ge.__version=ee.version);let mn=Ge.currentProgram;pt===!0&&(mn=Is(ee,q,te),Y&&ee.isNodeMaterial&&Y.onUpdateProgram(ee,mn,Ge));let jn=!1,Si=!1,Zn=!1;const Lt=mn.getUniforms(),Qt=Ge.uniforms;if(Re.useProgram(mn.program)&&(jn=!0,Si=!0,Zn=!0),ee.id!==D&&(D=ee.id,Si=!0),Ge.needsLights){const wt=qr(O.state.lightProbeGridArray,te);Ge.lightProbeGrid!==wt&&(Ge.lightProbeGrid=wt,Si=!0)}if(jn||F!==T){Re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Lt.setValue(X,"projectionMatrix",T.projectionMatrix),Lt.setValue(X,"viewMatrix",T.matrixWorldInverse);const Di=Lt.map.cameraPosition;Di!==void 0&&Di.setValue(X,Dt.setFromMatrixPosition(T.matrixWorld)),zt.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,Si=!0,Zn=!0)}if(Ge.needsLights&&(Un.state.directionalShadowMap.length>0&&Lt.setValue(X,"directionalShadowMap",Un.state.directionalShadowMap,E),Un.state.spotShadowMap.length>0&&Lt.setValue(X,"spotShadowMap",Un.state.spotShadowMap,E),Un.state.pointShadowMap.length>0&&Lt.setValue(X,"pointShadowMap",Un.state.pointShadowMap,E)),te.isSkinnedMesh){Lt.setOptional(X,te,"bindMatrix"),Lt.setOptional(X,te,"bindMatrixInverse");const wt=te.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Lt.setValue(X,"boneTexture",wt.boneTexture,E))}te.isBatchedMesh&&(Lt.setOptional(X,te,"batchingTexture"),Lt.setValue(X,"batchingTexture",te._matricesTexture,E),Lt.setOptional(X,te,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",te._indirectTexture,E),Lt.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",te._colorsTexture,E));const Mi=ae.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&nt.update(te,ae,mn),(Si||Ge.receiveShadow!==te.receiveShadow)&&(Ge.receiveShadow=te.receiveShadow,Lt.setValue(X,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(Qt.envMapIntensity.value=q.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=dA()),Si){if(Lt.setValue(X,"toneMappingExposure",Z.toneMappingExposure),Ge.needsLights&&Ta(Qt,Zn),ze&&ee.fog===!0&&ce.refreshFogUniforms(Qt,ze),ce.refreshMaterialUniforms(Qt,ee,De,Ae,O.state.transmissionRenderTarget[T.id]),Ge.needsLights&&Ge.lightProbeGrid){const wt=Ge.lightProbeGrid;Qt.probesSH.value=wt.texture,Qt.probesMin.value.copy(wt.boundingBox.min),Qt.probesMax.value.copy(wt.boundingBox.max),Qt.probesResolution.value.copy(wt.resolution)}Ic.upload(X,Wr(Ge),Qt,E)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ic.upload(X,Wr(Ge),Qt,E),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Lt.setValue(X,"center",te.center),Lt.setValue(X,"modelViewMatrix",te.modelViewMatrix),Lt.setValue(X,"normalMatrix",te.normalMatrix),Lt.setValue(X,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const wt=ee.uniformsGroups;for(let Di=0,Ra=wt.length;Di<Ra;Di++){const cs=wt[Di];he.update(cs,mn),he.bind(cs,mn)}}return mn}function Ta(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function ls(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,q,ae){const ee=C.get(T);ee.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),C.get(T.texture).__webglTexture=q,C.get(T.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const ae=C.get(T);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const Aa=X.createFramebuffer();this.setRenderTarget=function(T,q=0,ae=0){W=T,ue=q,me=ae;let ee=null,te=!1,ze=!1;if(T){const Fe=C.get(T);if(Fe.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(X.FRAMEBUFFER,Fe.__webglFramebuffer),ie.copy(T.viewport),pe.copy(T.scissor),xe=T.scissorTest,Re.viewport(ie),Re.scissor(pe),Re.setScissorTest(xe),D=-1;return}else if(Fe.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Fe.__hasExternalTextures)E.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&C.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);const ke=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ee=ke[q][ae]:ee=ke[q],te=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?ee=C.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?ee=ke[ae]:ee=ke,ie.copy(T.viewport),pe.copy(T.scissor),xe=T.scissorTest}else ie.copy(be).multiplyScalar(De).floor(),pe.copy(He).multiplyScalar(De).floor(),xe=$e;if(ae!==0&&(ee=Aa),Re.bindFramebuffer(X.FRAMEBUFFER,ee)&&Re.drawBuffers(T,ee),Re.viewport(ie),Re.scissor(pe),Re.setScissorTest(xe),te){const Fe=C.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,ae)}else if(ze){const Fe=q;for(let Xe=0;Xe<T.textures.length;Xe++){const ke=C.get(T.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,ae,Fe)}}else if(T!==null&&ae!==0){const Fe=C.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Fe.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(T,q,ae,ee,te,ze,Ve,Fe=0){if(!(T&&T.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Re.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const ke=T.textures[Fe],Ze=ke.format,rt=ke.type;if(T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe),!zt.textureFormatReadable(Ze)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(rt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ee&&ae>=0&&ae<=T.height-te&&X.readPixels(q,ae,ee,te,G.convert(Ze),G.convert(rt),ze)}finally{const ke=W!==null?C.get(W).__webglFramebuffer:null;Re.bindFramebuffer(X.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,q,ae,ee,te,ze,Ve,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(q>=0&&q<=T.width-ee&&ae>=0&&ae<=T.height-te){Re.bindFramebuffer(X.FRAMEBUFFER,Xe);const ke=T.textures[Fe],Ze=ke.format,rt=ke.type;if(T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe),!zt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.bufferData(X.PIXEL_PACK_BUFFER,ze.byteLength,X.STREAM_READ),X.readPixels(q,ae,ee,te,G.convert(Ze),G.convert(rt),0);const bt=W!==null?C.get(W).__webglFramebuffer:null;Re.bindFramebuffer(X.FRAMEBUFFER,bt);const Kt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await gM(X,Kt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ze),X.deleteBuffer(je),X.deleteSync(Kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,ae=0){const ee=Math.pow(2,-ae),te=Math.floor(T.image.width*ee),ze=Math.floor(T.image.height*ee),Ve=q!==null?q.x:0,Fe=q!==null?q.y:0;E.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,ae,0,0,Ve,Fe,te,ze),Re.unbindTexture()};const cn=X.createFramebuffer(),el=X.createFramebuffer();this.copyTextureToTexture=function(T,q,ae=null,ee=null,te=0,ze=0){let Ve,Fe,Xe,ke,Ze,rt,je,bt,Kt;const Xt=T.isCompressedTexture?T.mipmaps[ze]:T.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,Ze=ae.min.y,rt=ae.isBox3?ae.min.z:0;else{const Qt=Math.pow(2,-te);Ve=Math.floor(Xt.width*Qt),Fe=Math.floor(Xt.height*Qt),T.isDataArrayTexture?Xe=Xt.depth:T.isData3DTexture?Xe=Math.floor(Xt.depth*Qt):Xe=1,ke=0,Ze=0,rt=0}ee!==null?(je=ee.x,bt=ee.y,Kt=ee.z):(je=0,bt=0,Kt=0);const Ut=G.convert(q.format),Nt=G.convert(q.type);let Ge;q.isData3DTexture?(E.setTexture3D(q,0),Ge=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),Ge=X.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),Ge=X.TEXTURE_2D),Re.activeTexture(X.TEXTURE0),Re.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),Re.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Re.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const Un=Re.getParameter(X.UNPACK_ROW_LENGTH),pt=Re.getParameter(X.UNPACK_IMAGE_HEIGHT),mn=Re.getParameter(X.UNPACK_SKIP_PIXELS),jn=Re.getParameter(X.UNPACK_SKIP_ROWS),Si=Re.getParameter(X.UNPACK_SKIP_IMAGES);Re.pixelStorei(X.UNPACK_ROW_LENGTH,Xt.width),Re.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Xt.height),Re.pixelStorei(X.UNPACK_SKIP_PIXELS,ke),Re.pixelStorei(X.UNPACK_SKIP_ROWS,Ze),Re.pixelStorei(X.UNPACK_SKIP_IMAGES,rt);const Zn=T.isDataArrayTexture||T.isData3DTexture,Lt=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Qt=C.get(T),Mi=C.get(q),wt=C.get(Qt.__renderTarget),Di=C.get(Mi.__renderTarget);Re.bindFramebuffer(X.READ_FRAMEBUFFER,wt.__webglFramebuffer),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ra=0;Ra<Xe;Ra++)Zn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,C.get(T).__webglTexture,te,rt+Ra),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,C.get(q).__webglTexture,ze,Kt+Ra)),X.blitFramebuffer(ke,Ze,Ve,Fe,je,bt,Ve,Fe,X.DEPTH_BUFFER_BIT,X.NEAREST);Re.bindFramebuffer(X.READ_FRAMEBUFFER,null),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||T.isRenderTargetTexture||C.has(T)){const Qt=C.get(T),Mi=C.get(q);Re.bindFramebuffer(X.READ_FRAMEBUFFER,cn),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,el);for(let wt=0;wt<Xe;wt++)Zn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qt.__webglTexture,te,rt+wt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qt.__webglTexture,te),Lt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Mi.__webglTexture,ze,Kt+wt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Mi.__webglTexture,ze),te!==0?X.blitFramebuffer(ke,Ze,Ve,Fe,je,bt,Ve,Fe,X.COLOR_BUFFER_BIT,X.NEAREST):Lt?X.copyTexSubImage3D(Ge,ze,je,bt,Kt+wt,ke,Ze,Ve,Fe):X.copyTexSubImage2D(Ge,ze,je,bt,ke,Ze,Ve,Fe);Re.bindFramebuffer(X.READ_FRAMEBUFFER,null),Re.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(Ge,ze,je,bt,Kt,Ve,Fe,Xe,Ut,Nt,Xt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,ze,je,bt,Kt,Ve,Fe,Xe,Ut,Xt.data):X.texSubImage3D(Ge,ze,je,bt,Kt,Ve,Fe,Xe,Ut,Nt,Xt):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ze,je,bt,Ve,Fe,Ut,Nt,Xt.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ze,je,bt,Xt.width,Xt.height,Ut,Xt.data):X.texSubImage2D(X.TEXTURE_2D,ze,je,bt,Ve,Fe,Ut,Nt,Xt);Re.pixelStorei(X.UNPACK_ROW_LENGTH,Un),Re.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pt),Re.pixelStorei(X.UNPACK_SKIP_PIXELS,mn),Re.pixelStorei(X.UNPACK_SKIP_ROWS,jn),Re.pixelStorei(X.UNPACK_SKIP_IMAGES,Si),ze===0&&q.generateMipmaps&&X.generateMipmap(Ge),Re.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){ue=0,me=0,W=null,Re.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(t),i.unpackColorSpace=yt._getUnpackColorSpace()}}function pA({src:r,alt:t,onClose:i}){const s=Cn.useRef(null),l=Cn.useRef(null),u=Cn.useRef(null),d=Cn.useCallback(()=>{const h=s.current;if(!h)return;const m=h.clientWidth,p=h.clientHeight,x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=new YM,g=new _i(75,m/p,.1,1e3);g.position.set(0,0,.1);const y=new hA({antialias:!0});y.setSize(m,p),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.appendChild(y.domElement),l.current=y;const A=new kh(50,64,32);A.scale(-1,1,1);const M=new my().load(r);M.colorSpace=si;const S=new Vh({map:M}),w=new Xi(A,S);v.add(w);let P=!1,L=0,k=0,O=0,B=0;const b=.25,z=D=>{var F,ie,pe,xe;P=!0,L=D.clientX??((ie=(F=D.touches)==null?void 0:F[0])==null?void 0:ie.clientX)??0,k=D.clientY??((xe=(pe=D.touches)==null?void 0:pe[0])==null?void 0:xe.clientY)??0},Z=D=>{var pe,xe,N,K;if(!P)return;const F=D.clientX??((xe=(pe=D.touches)==null?void 0:pe[0])==null?void 0:xe.clientX)??0,ie=D.clientY??((K=(N=D.touches)==null?void 0:N[0])==null?void 0:K.clientY)??0;O-=(F-L)*b,B+=(ie-k)*b,B=Math.max(-85,Math.min(85,B)),L=F,k=ie},H=()=>{P=!1},Y=y.domElement;Y.addEventListener("mousedown",z),Y.addEventListener("mousemove",Z),Y.addEventListener("mouseup",H),Y.addEventListener("mouseleave",H),Y.addEventListener("touchstart",z,{passive:!0}),Y.addEventListener("touchmove",Z,{passive:!0}),Y.addEventListener("touchend",H);const ue=D=>{g.fov=Math.max(30,Math.min(90,g.fov+D.deltaY*.05)),g.updateProjectionMatrix()};Y.addEventListener("wheel",ue,{passive:!0});const me=()=>{const D=h.clientWidth,F=h.clientHeight;g.aspect=D/F,g.updateProjectionMatrix(),y.setSize(D,F)};window.addEventListener("resize",me);const W=()=>{u.current=requestAnimationFrame(W),!P&&!x&&(O+=.03);const D=Zg.degToRad(90-B),F=Zg.degToRad(O),ie=new re(50*Math.sin(D)*Math.cos(F),50*Math.cos(D),50*Math.sin(D)*Math.sin(F));g.lookAt(ie),y.render(v,g)};return W(),()=>{cancelAnimationFrame(u.current),Y.removeEventListener("mousedown",z),Y.removeEventListener("mousemove",Z),Y.removeEventListener("mouseup",H),Y.removeEventListener("mouseleave",H),Y.removeEventListener("touchstart",z),Y.removeEventListener("touchmove",Z),Y.removeEventListener("touchend",H),Y.removeEventListener("wheel",ue),window.removeEventListener("resize",me),A.dispose(),S.dispose(),M.dispose(),y.dispose(),h.contains(y.domElement)&&h.removeChild(y.domElement)}},[r]);return Cn.useEffect(()=>d(),[d]),Cn.useEffect(()=>{const h=m=>{m.key==="Escape"&&i()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[i]),ne.jsxs("div",{className:"fixed inset-0 z-[100] bg-ink/95",role:"dialog","aria-label":`Visite virtuelle — ${t}`,"aria-modal":"true",children:[ne.jsxs("div",{className:"absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-4",children:[ne.jsx("p",{className:"text-sm font-medium text-cream/80",children:t}),ne.jsx("button",{onClick:i,className:"flex h-10 w-10 items-center justify-center text-cream/60 transition-colors duration-300 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream","aria-label":"Fermer la visite virtuelle",children:ne.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[ne.jsx("line",{x1:"4",y1:"4",x2:"16",y2:"16"}),ne.jsx("line",{x1:"16",y1:"4",x2:"4",y2:"16"})]})})]}),ne.jsx("div",{ref:s,className:"h-full w-full"}),ne.jsx("div",{className:"absolute inset-x-0 bottom-6 text-center",children:ne.jsx("p",{className:"text-xs text-cream/30",children:"Glissez pour explorer · Molette pour zoomer · Échap pour fermer"})})]})}const Nc=[{id:1,title:"Hôtel particulier Saint-Étienne",surface:"320 m²",price:"1 850 000 €",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",pano:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=4096&q=80",alt:"Façade d’un hôtel particulier en briques roses avec jardin"},{id:2,title:"Penthouse Capitole",surface:"180 m²",price:"1 200 000 €",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",pano:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=4096&q=80",alt:"Salon lumineux avec grandes baies vitrées et parquet"},{id:3,title:"Villa Côte Pavée",surface:"250 m²",price:"980 000 €",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",pano:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&w=4096&q=80",alt:"Villa moderne avec jardin paysager et piscine"},{id:4,title:"Loft Les Carmes",surface:"145 m²",price:"720 000 €",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",pano:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&w=4096&q=80",alt:"Loft industriel avec mezzanine et verrière"}];function mA(){return ne.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[ne.jsx("circle",{cx:"9",cy:"9",r:"7"}),ne.jsx("ellipse",{cx:"9",cy:"9",rx:"3",ry:"7"}),ne.jsx("line",{x1:"2",y1:"9",x2:"16",y2:"9"}),ne.jsx("path",{d:"M14 4.5 L16 3 L15.5 5.5"})]})}function Lc({bien:r,className:t="",onViewPano:i}){const[s,l]=ss({threshold:.1});return ne.jsxs("article",{ref:s,className:`group relative overflow-hidden ${t} transition-all duration-[1s] ease-expo-out ${l?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[ne.jsx("img",{src:r.image,alt:r.alt,className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-expo-out group-hover:-translate-y-1",loading:"lazy"}),ne.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent"}),ne.jsx("div",{className:"absolute inset-x-0 bottom-0 p-5 md:p-7",children:ne.jsxs("div",{className:"flex items-end justify-between gap-4",children:[ne.jsxs("div",{children:[ne.jsx("h3",{className:"font-display text-lg text-cream md:text-xl",children:r.title}),ne.jsxs("div",{className:"mt-2 flex items-center gap-3 text-sm text-cream/70",children:[ne.jsx("span",{children:r.surface}),ne.jsx("span",{className:"h-px w-3 bg-cream/40","aria-hidden":"true"}),ne.jsx("span",{children:r.price})]})]}),ne.jsxs("button",{onClick:u=>{u.stopPropagation(),i(r)},className:"flex shrink-0 items-center gap-1.5 border border-cream/25 bg-ink/30 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-cream/80 backdrop-blur-sm transition-all duration-300 ease-expo-out hover:border-terracotta/60 hover:bg-terracotta/20 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta","aria-label":`Visite virtuelle 360° — ${r.title}`,children:[ne.jsx(mA,{}),ne.jsx("span",{children:"Visite 360°"})]})]})})]})}function gA(){const[r,t]=ss(),[i,s]=Cn.useState(null);return ne.jsxs("section",{id:"biens",className:"py-20 md:py-32",children:[ne.jsxs("div",{className:"mx-auto max-w-[1440px] px-6 md:px-12",children:[ne.jsxs("div",{ref:r,className:`mb-12 transition-all duration-[1s] ease-expo-out ${t?"translate-y-0 opacity-100":"translate-y-6 opacity-0"}`,children:[ne.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.2em] text-ink/40",children:"Sélection"}),ne.jsxs("h2",{className:"mt-3 font-display text-4xl tracking-tight md:text-6xl",children:["Biens ",ne.jsx("em",{className:"italic",children:"d'exception"})]})]}),ne.jsxs("div",{className:"grid auto-rows-[260px] grid-cols-12 gap-3 md:auto-rows-[300px] md:gap-4",children:[ne.jsx(Lc,{bien:Nc[0],className:"col-span-12 row-span-2 md:col-span-7",onViewPano:s}),ne.jsx(Lc,{bien:Nc[1],className:"col-span-12 md:col-span-5",onViewPano:s}),ne.jsx(Lc,{bien:Nc[2],className:"col-span-12 md:col-span-5",onViewPano:s}),ne.jsx(Lc,{bien:Nc[3],className:"col-span-12",onViewPano:s})]})]}),i&&ne.jsx(pA,{src:i.pano,alt:i.title,onClose:()=>s(null)})]})}const _A=[{value:"240",suffix:"+",label:"biens vendus"},{value:"98",suffix:"%",label:"de satisfaction"},{value:"72",suffix:"h",label:"delai moyen de vente"}];function vA(){const[r,t]=ss({threshold:.2});return ne.jsx("section",{className:"bg-ink py-28 md:py-44","aria-label":"Chiffres cles",children:ne.jsxs("div",{ref:r,className:`mx-auto max-w-[1440px] px-6 md:px-12 transition-all duration-[1.2s] ease-expo-out ${t?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[ne.jsxs("div",{className:"flex flex-col items-start gap-4 md:flex-row md:items-baseline md:gap-10",children:[ne.jsx("span",{className:"font-display text-[clamp(6rem,15vw,14rem)] leading-none text-terracotta",children:"15"}),ne.jsx("p",{className:"max-w-xs text-xl leading-relaxed text-cream/90 md:text-2xl",children:"annees d'excellence immobiliere a Toulouse"})]}),ne.jsx("div",{className:"mt-16 flex flex-wrap gap-16 md:mt-24 md:gap-24",children:_A.map(i=>ne.jsxs("div",{children:[ne.jsxs("span",{className:"font-display text-4xl text-cream md:text-5xl",children:[i.value,ne.jsx("span",{className:"text-terracotta",children:i.suffix})]}),ne.jsx("p",{className:"mt-2 text-sm text-cream/40",children:i.label})]},i.label))})]})})}function xA(){const[r,t]=ss(),[i,s]=ss({threshold:.1});return ne.jsx("section",{id:"agence",className:"py-20 md:py-40",children:ne.jsx("div",{className:"mx-auto max-w-[1440px] px-6 md:px-12",children:ne.jsxs("div",{className:"grid grid-cols-1 items-start gap-12 md:grid-cols-5 md:gap-16",children:[ne.jsxs("div",{ref:r,className:`md:col-span-3 md:pt-16 transition-all duration-[1s] ease-expo-out ${t?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[ne.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.2em] text-ink/40",children:"L'agence"}),ne.jsxs("h2",{className:"mt-3 font-display text-4xl leading-tight tracking-tight md:text-6xl",children:["Un accompagnement",ne.jsx("br",{}),ne.jsx("em",{className:"italic",children:"sur-mesure"})]}),ne.jsxs("div",{className:"mt-8 max-w-lg space-y-5 text-base leading-relaxed text-ink/60 md:text-lg",children:[ne.jsx("p",{children:"Depuis 2009, Meridienne accompagne une clientele exigeante dans la recherche de biens d'exception a Toulouse et dans toute la region Occitanie."}),ne.jsx("p",{children:"Notre approche repose sur trois piliers : une ecoute attentive de vos besoins, une discretion absolue dans chaque transaction, et une connaissance fine du marche local qui nous permet d'identifier les opportunites avant qu'elles ne soient publiques."})]}),ne.jsxs("div",{className:"mt-10 flex items-center gap-5",children:[ne.jsx("span",{className:"h-px w-8 bg-terracotta","aria-hidden":"true"}),ne.jsx("p",{className:"text-sm font-medium tracking-wide text-terracotta",children:"Caroline Verdier, fondatrice"})]})]}),ne.jsx("div",{ref:i,className:`md:col-span-2 md:-mt-12 transition-all duration-[1.2s] ease-expo-out ${s?"translate-y-0 opacity-100":"translate-y-12 opacity-0"}`,children:ne.jsx("img",{src:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",alt:"Bureau de l'agence Meridienne, espace lumineux et epure",className:"aspect-[3/4] w-full object-cover",loading:"lazy"})})]})})})}const I_=[{num:"01",name:"Capitole",desc:"Coeur vibrant de Toulouse, entre theatre, terrasses et patrimoine historique.",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"},{num:"02",name:"Saint-Etienne",desc:"Quartier bourgeois par excellence. Hotels particuliers, jardins discrets.",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"},{num:"03",name:"Cote Pavee",desc:"Residentiel et arbore. Villas d'architecte avec vue sur la Ville rose.",image:"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80"},{num:"04",name:"Les Carmes",desc:"Ruelles pavees, artisans, bistrots. L'authenticite au quotidien.",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"}];function SA(){const[r,t]=Cn.useState("01"),[i,s]=ss();return ne.jsx("section",{id:"quartiers",className:"py-20 md:py-32",children:ne.jsxs("div",{className:"mx-auto max-w-[1440px] px-6 md:px-12",children:[ne.jsxs("div",{ref:i,className:`transition-all duration-[1s] ease-expo-out ${s?"translate-y-0 opacity-100":"translate-y-6 opacity-0"}`,children:[ne.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.2em] text-ink/40",children:"Nos quartiers"}),ne.jsxs("h2",{className:"mt-3 font-display text-4xl tracking-tight md:text-6xl",children:["Toulouse, ",ne.jsx("em",{className:"italic",children:"intime"})]})]}),ne.jsxs("div",{className:"mt-16 grid grid-cols-1 md:grid-cols-5",children:[ne.jsxs("div",{className:"md:col-span-3",children:[I_.map(l=>ne.jsx("div",{className:"group cursor-default border-t border-sand py-7 md:py-9",onMouseEnter:()=>t(l.num),onFocus:()=>t(l.num),tabIndex:0,role:"listitem","aria-label":l.name,children:ne.jsxs("div",{className:"flex items-baseline gap-6",children:[ne.jsx("span",{className:"font-display text-sm text-terracotta",children:l.num}),ne.jsxs("div",{children:[ne.jsx("h3",{className:"font-display text-2xl transition-colors duration-300 ease-smooth-out group-hover:text-terracotta md:text-3xl",children:l.name}),ne.jsx("p",{className:"mt-2 max-w-sm text-sm text-ink/45",children:l.desc})]})]})},l.num)),ne.jsx("div",{className:"border-t border-sand","aria-hidden":"true"})]}),ne.jsx("div",{className:"relative hidden md:col-span-2 md:block","aria-hidden":"true",children:ne.jsx("div",{className:"sticky top-32 ml-12 aspect-[3/4] overflow-hidden",children:I_.map(l=>ne.jsx("img",{src:l.image,alt:"",className:`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-expo-out ${r===l.num?"opacity-100":"opacity-0"}`,loading:"lazy"},l.num))})})]})]})})}function MA(){const[r,t]=ss({threshold:.2});return ne.jsx("section",{id:"estimer",className:"bg-sand/40 py-28 md:py-44",children:ne.jsx("div",{ref:r,className:`mx-auto max-w-[1440px] px-6 md:px-12 transition-all duration-[1s] ease-expo-out ${t?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:ne.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[ne.jsx("h2",{className:"font-display text-4xl tracking-tight md:text-7xl",children:"Estimez votre bien"}),ne.jsx("p",{className:"mx-auto mt-6 max-w-md text-ink/50",children:"Recevez une estimation gratuite, confidentielle et personnalisee sous 48 heures."}),ne.jsxs("form",{className:"mt-12 flex flex-col gap-4 sm:flex-row",onSubmit:i=>i.preventDefault(),children:[ne.jsx("label",{htmlFor:"cta-address",className:"sr-only",children:"Adresse du bien"}),ne.jsx("input",{id:"cta-address",type:"text",placeholder:"Adresse de votre bien",className:"flex-1 border-b border-ink/20 bg-transparent px-1 py-3 text-sm placeholder:text-ink/30 transition-colors duration-300 focus:border-terracotta focus:outline-none"}),ne.jsx("button",{type:"submit",className:"border border-terracotta bg-terracotta px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors duration-300 ease-smooth-out hover:bg-terracotta-dark hover:border-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-sand",children:"Estimer"})]})]})})})}function yA(){const r=new Date().getFullYear();return ne.jsx("footer",{className:"border-t border-sand py-12 md:py-16",children:ne.jsxs("div",{className:"mx-auto max-w-[1440px] px-6 md:px-12",children:[ne.jsxs("div",{className:"flex flex-col gap-10 md:flex-row md:items-start md:justify-between",children:[ne.jsxs("div",{children:[ne.jsx("span",{className:"font-display text-xl tracking-tight",children:"Meridienne"}),ne.jsxs("p",{className:"mt-3 max-w-xs text-sm leading-relaxed text-ink/45",children:["Immobilier d'exception a Toulouse.",ne.jsx("br",{}),"Biens haut de gamme & accompagnement sur-mesure."]})]}),ne.jsxs("address",{className:"flex flex-col gap-2 text-sm not-italic text-ink/55",children:[ne.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.15em] text-ink/30",children:"Contact"}),ne.jsx("a",{href:"tel:+33561000000",className:"transition-colors duration-300 hover:text-ink",children:"05 61 00 00 00"}),ne.jsx("a",{href:"mailto:contact@meridienne-immobilier.fr",className:"transition-colors duration-300 hover:text-ink",children:"contact@meridienne-immobilier.fr"}),ne.jsx("p",{className:"mt-1",children:"12 rue de la Pomme, 31000 Toulouse"})]}),ne.jsxs("nav",{className:"flex flex-col gap-2 text-sm text-ink/55","aria-label":"Pied de page",children:[ne.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.15em] text-ink/30",children:"Navigation"}),ne.jsx("a",{href:"#biens",className:"transition-colors duration-300 hover:text-ink",children:"Biens"}),ne.jsx("a",{href:"#agence",className:"transition-colors duration-300 hover:text-ink",children:"L'Agence"}),ne.jsx("a",{href:"#quartiers",className:"transition-colors duration-300 hover:text-ink",children:"Quartiers"}),ne.jsx("a",{href:"#estimer",className:"transition-colors duration-300 hover:text-ink",children:"Estimer"})]})]}),ne.jsxs("div",{className:"mt-12 flex flex-col gap-4 border-t border-sand/60 pt-6 text-xs text-ink/30 md:flex-row md:justify-between",children:[ne.jsxs("p",{children:["© ",r," Meridienne Immobilier. Tous droits reserves."]}),ne.jsxs("div",{className:"flex gap-6",children:[ne.jsx("a",{href:"#",className:"transition-colors duration-300 hover:text-ink/50",children:"Mentions legales"}),ne.jsx("a",{href:"#",className:"transition-colors duration-300 hover:text-ink/50",children:"Politique de confidentialite"})]})]})]})})}function EA(){return ne.jsxs(ne.Fragment,{children:[ne.jsx(OS,{}),ne.jsxs("main",{children:[ne.jsx(PS,{}),ne.jsx(gA,{}),ne.jsx(vA,{}),ne.jsx(xA,{}),ne.jsx(SA,{}),ne.jsx(MA,{})]}),ne.jsx(yA,{})]})}LS.createRoot(document.getElementById("root")).render(ne.jsx(Cn.StrictMode,{children:ne.jsx(EA,{})}));
