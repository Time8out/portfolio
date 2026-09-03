(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))d(U);new MutationObserver(U=>{for(const N of U)if(N.type==="childList")for(const V of N.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&d(V)}).observe(document,{childList:!0,subtree:!0});function H(U){const N={};return U.integrity&&(N.integrity=U.integrity),U.referrerPolicy&&(N.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?N.credentials="include":U.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function d(U){if(U.ep)return;U.ep=!0;const N=H(U);fetch(U.href,N)}})();var ss={exports:{}},zn={};var xf;function l1(){if(xf)return zn;xf=1;var v=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function H(d,U,N){var V=null;if(N!==void 0&&(V=""+N),U.key!==void 0&&(V=""+U.key),"key"in U){N={};for(var w in U)w!=="key"&&(N[w]=U[w])}else N=U;return U=N.ref,{$$typeof:v,type:d,key:V,ref:U!==void 0?U:null,props:N}}return zn.Fragment=A,zn.jsx=H,zn.jsxs=H,zn}var yf;function n1(){return yf||(yf=1,ss.exports=l1()),ss.exports}var c=n1(),rs={exports:{}},Y={};var Sf;function i1(){if(Sf)return Y;Sf=1;var v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),V=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),me=Symbol.iterator;function Je(f){return f===null||typeof f!="object"?null:(f=me&&f[me]||f["@@iterator"],typeof f=="function"?f:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,Tt={};function We(f,j,T){this.props=f,this.context=j,this.refs=Tt,this.updater=T||ke}We.prototype.isReactComponent={},We.prototype.setState=function(f,j){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,j,"setState")},We.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Wt(){}Wt.prototype=We.prototype;function Ce(f,j,T){this.props=f,this.context=j,this.refs=Tt,this.updater=T||ke}var ot=Ce.prototype=new Wt;ot.constructor=Ce,He(ot,We.prototype),ot.isPureReactComponent=!0;var zt=Array.isArray;function Re(){}var F={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function jt(f,j,T){var C=T.ref;return{$$typeof:v,type:f,key:j,ref:C!==void 0?C:null,props:T}}function Xa(f,j){return jt(f.type,j,f.props)}function Mt(f){return typeof f=="object"&&f!==null&&f.$$typeof===v}function Ye(f){var j={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(T){return j[T]})}var Sa=/\/+/g;function Dt(f,j){return typeof f=="object"&&f!==null&&f.key!=null?Ye(""+f.key):j.toString(36)}function vt(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Re,Re):(f.status="pending",f.then(function(j){f.status==="pending"&&(f.status="fulfilled",f.value=j)},function(j){f.status==="pending"&&(f.status="rejected",f.reason=j)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function y(f,j,T,C,L){var Q=typeof f;(Q==="undefined"||Q==="boolean")&&(f=null);var ae=!1;if(f===null)ae=!0;else switch(Q){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(f.$$typeof){case v:case A:ae=!0;break;case te:return ae=f._init,y(ae(f._payload),j,T,C,L)}}if(ae)return L=L(f),ae=C===""?"."+Dt(f,0):C,zt(L)?(T="",ae!=null&&(T=ae.replace(Sa,"$&/")+"/"),y(L,j,T,"",function(El){return El})):L!=null&&(Mt(L)&&(L=Xa(L,T+(L.key==null||f&&f.key===L.key?"":(""+L.key).replace(Sa,"$&/")+"/")+ae)),j.push(L)),1;ae=0;var Ue=C===""?".":C+":";if(zt(f))for(var be=0;be<f.length;be++)C=f[be],Q=Ue+Dt(C,be),ae+=y(C,j,T,Q,L);else if(be=Je(f),typeof be=="function")for(f=be.call(f),be=0;!(C=f.next()).done;)C=C.value,Q=Ue+Dt(C,be++),ae+=y(C,j,T,Q,L);else if(Q==="object"){if(typeof f.then=="function")return y(vt(f),j,T,C,L);throw j=String(f),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ae}function E(f,j,T){if(f==null)return f;var C=[],L=0;return y(f,C,"","",function(Q){return j.call(T,Q,L++)}),C}function q(f){if(f._status===-1){var j=f._result;j=j(),j.then(function(T){(f._status===0||f._status===-1)&&(f._status=1,f._result=T)},function(T){(f._status===0||f._status===-1)&&(f._status=2,f._result=T)}),f._status===-1&&(f._status=0,f._result=j)}if(f._status===1)return f._result.default;throw f._result}var ie=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},re={map:E,forEach:function(f,j,T){E(f,function(){j.apply(this,arguments)},T)},count:function(f){var j=0;return E(f,function(){j++}),j},toArray:function(f){return E(f,function(j){return j})||[]},only:function(f){if(!Mt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return Y.Activity=R,Y.Children=re,Y.Component=We,Y.Fragment=H,Y.Profiler=U,Y.PureComponent=Ce,Y.StrictMode=d,Y.Suspense=D,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Y.__COMPILER_RUNTIME={__proto__:null,c:function(f){return F.H.useMemoCache(f)}},Y.cache=function(f){return function(){return f.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(f,j,T){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var C=He({},f.props),L=f.key;if(j!=null)for(Q in j.key!==void 0&&(L=""+j.key),j)!qe.call(j,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&j.ref===void 0||(C[Q]=j[Q]);var Q=arguments.length-2;if(Q===1)C.children=T;else if(1<Q){for(var ae=Array(Q),Ue=0;Ue<Q;Ue++)ae[Ue]=arguments[Ue+2];C.children=ae}return jt(f.type,L,C)},Y.createContext=function(f){return f={$$typeof:V,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:N,_context:f},f},Y.createElement=function(f,j,T){var C,L={},Q=null;if(j!=null)for(C in j.key!==void 0&&(Q=""+j.key),j)qe.call(j,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(L[C]=j[C]);var ae=arguments.length-2;if(ae===1)L.children=T;else if(1<ae){for(var Ue=Array(ae),be=0;be<ae;be++)Ue[be]=arguments[be+2];L.children=Ue}if(f&&f.defaultProps)for(C in ae=f.defaultProps,ae)L[C]===void 0&&(L[C]=ae[C]);return jt(f,Q,L)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(f){return{$$typeof:w,render:f}},Y.isValidElement=Mt,Y.lazy=function(f){return{$$typeof:te,_payload:{_status:-1,_result:f},_init:q}},Y.memo=function(f,j){return{$$typeof:M,type:f,compare:j===void 0?null:j}},Y.startTransition=function(f){var j=F.T,T={};F.T=T;try{var C=f(),L=F.S;L!==null&&L(T,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(Re,ie)}catch(Q){ie(Q)}finally{j!==null&&T.types!==null&&(j.types=T.types),F.T=j}},Y.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Y.use=function(f){return F.H.use(f)},Y.useActionState=function(f,j,T){return F.H.useActionState(f,j,T)},Y.useCallback=function(f,j){return F.H.useCallback(f,j)},Y.useContext=function(f){return F.H.useContext(f)},Y.useDebugValue=function(){},Y.useDeferredValue=function(f,j){return F.H.useDeferredValue(f,j)},Y.useEffect=function(f,j){return F.H.useEffect(f,j)},Y.useEffectEvent=function(f){return F.H.useEffectEvent(f)},Y.useId=function(){return F.H.useId()},Y.useImperativeHandle=function(f,j,T){return F.H.useImperativeHandle(f,j,T)},Y.useInsertionEffect=function(f,j){return F.H.useInsertionEffect(f,j)},Y.useLayoutEffect=function(f,j){return F.H.useLayoutEffect(f,j)},Y.useMemo=function(f,j){return F.H.useMemo(f,j)},Y.useOptimistic=function(f,j){return F.H.useOptimistic(f,j)},Y.useReducer=function(f,j,T){return F.H.useReducer(f,j,T)},Y.useRef=function(f){return F.H.useRef(f)},Y.useState=function(f){return F.H.useState(f)},Y.useSyncExternalStore=function(f,j,T){return F.H.useSyncExternalStore(f,j,T)},Y.useTransition=function(){return F.H.useTransition()},Y.version="19.2.4",Y}var zf;function hs(){return zf||(zf=1,rs.exports=i1()),rs.exports}var bt=hs(),us={exports:{}},jn={},fs={exports:{}},ds={};var jf;function o1(){return jf||(jf=1,(function(v){function A(y,E){var q=y.length;y.push(E);e:for(;0<q;){var ie=q-1>>>1,re=y[ie];if(0<U(re,E))y[ie]=E,y[q]=re,q=ie;else break e}}function H(y){return y.length===0?null:y[0]}function d(y){if(y.length===0)return null;var E=y[0],q=y.pop();if(q!==E){y[0]=q;e:for(var ie=0,re=y.length,f=re>>>1;ie<f;){var j=2*(ie+1)-1,T=y[j],C=j+1,L=y[C];if(0>U(T,q))C<re&&0>U(L,T)?(y[ie]=L,y[C]=q,ie=C):(y[ie]=T,y[j]=q,ie=j);else if(C<re&&0>U(L,q))y[ie]=L,y[C]=q,ie=C;else break e}}return E}function U(y,E){var q=y.sortIndex-E.sortIndex;return q!==0?q:y.id-E.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;v.unstable_now=function(){return N.now()}}else{var V=Date,w=V.now();v.unstable_now=function(){return V.now()-w}}var D=[],M=[],te=1,R=null,me=3,Je=!1,ke=!1,He=!1,Tt=!1,We=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function ot(y){for(var E=H(M);E!==null;){if(E.callback===null)d(M);else if(E.startTime<=y)d(M),E.sortIndex=E.expirationTime,A(D,E);else break;E=H(M)}}function zt(y){if(He=!1,ot(y),!ke)if(H(D)!==null)ke=!0,Re||(Re=!0,Ye());else{var E=H(M);E!==null&&vt(zt,E.startTime-y)}}var Re=!1,F=-1,qe=5,jt=-1;function Xa(){return Tt?!0:!(v.unstable_now()-jt<qe)}function Mt(){if(Tt=!1,Re){var y=v.unstable_now();jt=y;var E=!0;try{e:{ke=!1,He&&(He=!1,Wt(F),F=-1),Je=!0;var q=me;try{t:{for(ot(y),R=H(D);R!==null&&!(R.expirationTime>y&&Xa());){var ie=R.callback;if(typeof ie=="function"){R.callback=null,me=R.priorityLevel;var re=ie(R.expirationTime<=y);if(y=v.unstable_now(),typeof re=="function"){R.callback=re,ot(y),E=!0;break t}R===H(D)&&d(D),ot(y)}else d(D);R=H(D)}if(R!==null)E=!0;else{var f=H(M);f!==null&&vt(zt,f.startTime-y),E=!1}}break e}finally{R=null,me=q,Je=!1}E=void 0}}finally{E?Ye():Re=!1}}}var Ye;if(typeof Ce=="function")Ye=function(){Ce(Mt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,Dt=Sa.port2;Sa.port1.onmessage=Mt,Ye=function(){Dt.postMessage(null)}}else Ye=function(){We(Mt,0)};function vt(y,E){F=We(function(){y(v.unstable_now())},E)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(y){y.callback=null},v.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<y?Math.floor(1e3/y):5},v.unstable_getCurrentPriorityLevel=function(){return me},v.unstable_next=function(y){switch(me){case 1:case 2:case 3:var E=3;break;default:E=me}var q=me;me=E;try{return y()}finally{me=q}},v.unstable_requestPaint=function(){Tt=!0},v.unstable_runWithPriority=function(y,E){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var q=me;me=y;try{return E()}finally{me=q}},v.unstable_scheduleCallback=function(y,E,q){var ie=v.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,y){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=q+re,y={id:te++,callback:E,priorityLevel:y,startTime:q,expirationTime:re,sortIndex:-1},q>ie?(y.sortIndex=q,A(M,y),H(D)===null&&y===H(M)&&(He?(Wt(F),F=-1):He=!0,vt(zt,q-ie))):(y.sortIndex=re,A(D,y),ke||Je||(ke=!0,Re||(Re=!0,Ye()))),y},v.unstable_shouldYield=Xa,v.unstable_wrapCallback=function(y){var E=me;return function(){var q=me;me=E;try{return y.apply(this,arguments)}finally{me=q}}}})(ds)),ds}var Mf;function c1(){return Mf||(Mf=1,fs.exports=o1()),fs.exports}var ms={exports:{}},Oe={};var Af;function s1(){if(Af)return Oe;Af=1;var v=hs();function A(D){var M="https://react.dev/errors/"+D;if(1<arguments.length){M+="?args[]="+encodeURIComponent(arguments[1]);for(var te=2;te<arguments.length;te++)M+="&args[]="+encodeURIComponent(arguments[te])}return"Minified React error #"+D+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(){}var d={d:{f:H,r:function(){throw Error(A(522))},D:H,C:H,L:H,m:H,X:H,S:H,M:H},p:0,findDOMNode:null},U=Symbol.for("react.portal");function N(D,M,te){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:R==null?null:""+R,children:D,containerInfo:M,implementation:te}}var V=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(D,M){if(D==="font")return"";if(typeof M=="string")return M==="use-credentials"?M:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Oe.createPortal=function(D,M){var te=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error(A(299));return N(D,M,null,te)},Oe.flushSync=function(D){var M=V.T,te=d.p;try{if(V.T=null,d.p=2,D)return D()}finally{V.T=M,d.p=te,d.d.f()}},Oe.preconnect=function(D,M){typeof D=="string"&&(M?(M=M.crossOrigin,M=typeof M=="string"?M==="use-credentials"?M:"":void 0):M=null,d.d.C(D,M))},Oe.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},Oe.preinit=function(D,M){if(typeof D=="string"&&M&&typeof M.as=="string"){var te=M.as,R=w(te,M.crossOrigin),me=typeof M.integrity=="string"?M.integrity:void 0,Je=typeof M.fetchPriority=="string"?M.fetchPriority:void 0;te==="style"?d.d.S(D,typeof M.precedence=="string"?M.precedence:void 0,{crossOrigin:R,integrity:me,fetchPriority:Je}):te==="script"&&d.d.X(D,{crossOrigin:R,integrity:me,fetchPriority:Je,nonce:typeof M.nonce=="string"?M.nonce:void 0})}},Oe.preinitModule=function(D,M){if(typeof D=="string")if(typeof M=="object"&&M!==null){if(M.as==null||M.as==="script"){var te=w(M.as,M.crossOrigin);d.d.M(D,{crossOrigin:te,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0})}}else M==null&&d.d.M(D)},Oe.preload=function(D,M){if(typeof D=="string"&&typeof M=="object"&&M!==null&&typeof M.as=="string"){var te=M.as,R=w(te,M.crossOrigin);d.d.L(D,te,{crossOrigin:R,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0,type:typeof M.type=="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority=="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy=="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet=="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes=="string"?M.imageSizes:void 0,media:typeof M.media=="string"?M.media:void 0})}},Oe.preloadModule=function(D,M){if(typeof D=="string")if(M){var te=w(M.as,M.crossOrigin);d.d.m(D,{as:typeof M.as=="string"&&M.as!=="script"?M.as:void 0,crossOrigin:te,integrity:typeof M.integrity=="string"?M.integrity:void 0})}else d.d.m(D)},Oe.requestFormReset=function(D){d.d.r(D)},Oe.unstable_batchedUpdates=function(D,M){return D(M)},Oe.useFormState=function(D,M,te){return V.H.useFormState(D,M,te)},Oe.useFormStatus=function(){return V.H.useHostTransitionStatus()},Oe.version="19.2.4",Oe}var Nf;function r1(){if(Nf)return ms.exports;Nf=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(A){console.error(A)}}return v(),ms.exports=s1(),ms.exports}var wf;function u1(){if(wf)return jn;wf=1;var v=c1(),A=hs(),H=r1();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function N(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function V(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(N(e)!==e)throw Error(d(188))}function M(e){var t=e.alternate;if(!t){if(t=N(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return D(n),e;if(i===l)return D(n),t;i=i.sibling}throw Error(d(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,l=i;break}if(s===l){o=!0,l=n,a=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===a){o=!0,a=i,l=n;break}if(s===l){o=!0,l=i,a=n;break}s=s.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function te(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=te(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,me=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),Tt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),jt=Symbol.for("react.activity"),Xa=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case We:return"Profiler";case Tt:return"StrictMode";case zt:return"Suspense";case Re:return"SuspenseList";case jt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case Ce:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var vt=Array.isArray,y=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ie=[],re=-1;function f(e){return{current:e}}function j(e){0>re||(e.current=ie[re],ie[re]=null,re--)}function T(e,t){re++,ie[re]=e.current,e.current=t}var C=f(null),L=f(null),Q=f(null),ae=f(null);function Ue(e,t){switch(T(Q,t),T(L,e),T(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=L0(t),e=G0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(C),T(C,e)}function be(){j(C),j(L),j(Q)}function El(e){e.memoizedState!==null&&T(ae,e);var t=C.current,a=G0(t,e.type);t!==a&&(T(L,e),T(C,a))}function Mn(e){L.current===e&&(j(C),j(L)),ae.current===e&&(j(ae),vn._currentValue=q)}var Xi,bs;function za(e){if(Xi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||"",bs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+bs}var Vi=!1;function Qi(e,t){if(!e||Vi)return"";Vi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(b){var h=b}Reflect.construct(e,[],z)}else{try{z.call()}catch(b){h=b}e.call(z.prototype)}}else{try{throw Error()}catch(b){h=b}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(b){if(b&&h&&typeof b.stack=="string")return[b.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var r=o.split(`
`),p=s.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===p.length)for(l=r.length-1,n=p.length-1;1<=l&&0<=n&&r[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==p[n]){var x=`
`+r[l].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=l&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?za(a):""}function Hf(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return za("Activity");default:return""}}function vs(e){try{var t="",a=null;do t+=Hf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=v.unstable_scheduleCallback,Ji=v.unstable_cancelCallback,Uf=v.unstable_shouldYield,Bf=v.unstable_requestPaint,Fe=v.unstable_now,kf=v.unstable_getCurrentPriorityLevel,xs=v.unstable_ImmediatePriority,ys=v.unstable_UserBlockingPriority,An=v.unstable_NormalPriority,Rf=v.unstable_LowPriority,Ss=v.unstable_IdlePriority,qf=v.log,Yf=v.unstable_setDisableYieldValue,Tl=null,$e=null;function Ft(e){if(typeof qf=="function"&&Yf(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Tl,e)}catch{}}var Ie=Math.clz32?Math.clz32:Xf,Lf=Math.log,Gf=Math.LN2;function Xf(e){return e>>>=0,e===0?32:31-(Lf(e)/Gf|0)|0}var Nn=256,wn=262144,En=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=ja(l):(o&=s,o!==0?n=ja(o):a||(a=s&~e,a!==0&&(n=ja(a))))):(s=l&~i,s!==0?n=ja(s):o!==0?n=ja(o):a||(a=l&~e,a!==0&&(n=ja(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zs(){var e=En;return En<<=1,(En&62914560)===0&&(En=4194304),e}function Wi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qf(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var x=31-Ie(a),z=1<<x;s[x]=0,r[x]=-1;var h=p[x];if(h!==null)for(p[x]=null,x=0;x<h.length;x++){var b=h[x];b!==null&&(b.lane&=-536870913)}a&=~z}l!==0&&js(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function js(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ms(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ie(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function As(e,t){var a=t&-t;return a=(a&42)!==0?1:Fi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $i(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ns(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:df(e.type))}function ws(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var $t=Math.random().toString(36).slice(2),we="__reactFiber$"+$t,Le="__reactProps$"+$t,Va="__reactContainer$"+$t,Ii="__reactEvents$"+$t,Zf="__reactListeners$"+$t,Kf="__reactHandles$"+$t,Es="__reactResources$"+$t,Cl="__reactMarker$"+$t;function Pi(e){delete e[we],delete e[Le],delete e[Ii],delete e[Zf],delete e[Kf]}function Qa(e){var t=e[we];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Va]||a[we]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=W0(e);e!==null;){if(a=e[we])return a;e=W0(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[we]||e[Va]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ka(e){var t=e[Es];return t||(t=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[Cl]=!0}var Ts=new Set,Ds={};function Ma(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(Ds[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Jf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_s={},Cs={};function Wf(e){return Zi.call(Cs,e)?!0:Zi.call(_s,e)?!1:Jf.test(e)?Cs[e]=!0:(_s[e]=!0,!1)}function Dn(e,t,a){if(Wf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function _n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Os(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ff(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){if(!e._valueTracker){var t=Os(e)?"checked":"value";e._valueTracker=Ff(e,t,""+e[t])}}function Hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Os(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $f=/[\n"\\]/g;function st(e){return e.replace($f,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function to(e,t,a,l,n,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?ao(e,o,ct(t)):a!=null?ao(e,o,ct(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+ct(s):e.removeAttribute("name")}function Us(e,t,a,l,n,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){eo(e);return}a=a!=null?""+ct(a):"",t=t!=null?""+ct(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),eo(e)}function ao(e,t,a){t==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Bs(e,t,a){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ct(a):""}function ks(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(d(92));if(vt(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ct(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),eo(e)}function Fa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var If=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rs(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||If.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qs(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Rs(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Rs(e,i,t[i])}function lo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(e){return e2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ct(){}var no=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Ia=null;function Ys(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(to(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Le]||null;if(!n)throw Error(d(90));to(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Hs(l)}break e;case"textarea":Bs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var oo=!1;function Ls(e,t,a){if(oo)return e(t,a);oo=!0;try{var l=e(t);return l}finally{if(oo=!1,($a!==null||Ia!==null)&&(yi(),$a&&(t=$a,e=Ia,Ia=$a=null,Ys(t),e)))for(t=0;t<e.length;t++)Ys(e[t])}}function Hl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Le]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=!1;if(Ot)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){co=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{co=!1}var It=null,so=null,Hn=null;function Gs(){if(Hn)return Hn;var e,t=so,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return Hn=n.slice(e,1<l?1-l:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Xs(){return!1}function Ge(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:Xs,this.isPropagationStopped=Xs,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Ge(Aa),Bl=R({},Aa,{view:0,detail:0}),t2=Ge(Bl),ro,uo,kl,Rn=R({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(ro=e.screenX-kl.screenX,uo=e.screenY-kl.screenY):uo=ro=0,kl=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),Vs=Ge(Rn),a2=R({},Rn,{dataTransfer:0}),l2=Ge(a2),n2=R({},Bl,{relatedTarget:0}),fo=Ge(n2),i2=R({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),o2=Ge(i2),c2=R({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s2=Ge(c2),r2=R({},Aa,{data:0}),Qs=Ge(r2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d2[e])?!!t[e]:!1}function mo(){return m2}var g2=R({},Bl,{key:function(e){if(e.key){var t=u2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p2=Ge(g2),h2=R({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zs=Ge(h2),b2=R({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),v2=Ge(b2),x2=R({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),y2=Ge(x2),S2=R({},Rn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z2=Ge(S2),j2=R({},Aa,{newState:0,oldState:0}),M2=Ge(j2),A2=[9,13,27,32],go=Ot&&"CompositionEvent"in window,Rl=null;Ot&&"documentMode"in document&&(Rl=document.documentMode);var N2=Ot&&"TextEvent"in window&&!Rl,Ks=Ot&&(!go||Rl&&8<Rl&&11>=Rl),Js=" ",Ws=!1;function Fs(e,t){switch(e){case"keyup":return A2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function w2(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(Ws=!0,Js);case"textInput":return e=t.data,e===Js&&Ws?null:e;default:return null}}function E2(e,t){if(Pa)return e==="compositionend"||!go&&Fs(e,t)?(e=Gs(),Hn=so=It=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var T2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!T2[e.type]:t==="textarea"}function Ps(e,t,a,l){$a?Ia?Ia.push(l):Ia=[l]:$a=l,t=wi(t,"onChange"),0<t.length&&(a=new kn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,Yl=null;function D2(e){U0(e,0)}function qn(e){var t=Ol(e);if(Hs(t))return e}function er(e,t){if(e==="change")return t}var tr=!1;if(Ot){var po;if(Ot){var ho="oninput"in document;if(!ho){var ar=document.createElement("div");ar.setAttribute("oninput","return;"),ho=typeof ar.oninput=="function"}po=ho}else po=!1;tr=po&&(!document.documentMode||9<document.documentMode)}function lr(){ql&&(ql.detachEvent("onpropertychange",nr),Yl=ql=null)}function nr(e){if(e.propertyName==="value"&&qn(Yl)){var t=[];Ps(t,Yl,e,io(e)),Ls(D2,t)}}function _2(e,t,a){e==="focusin"?(lr(),ql=t,Yl=a,ql.attachEvent("onpropertychange",nr)):e==="focusout"&&lr()}function C2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Yl)}function O2(e,t){if(e==="click")return qn(t)}function H2(e,t){if(e==="input"||e==="change")return qn(t)}function U2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:U2;function Ll(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Zi.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function or(e,t){var a=ir(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ir(a)}}function cr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Cn(e.document)}return t}function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B2=Ot&&"documentMode"in document&&11>=document.documentMode,el=null,vo=null,Gl=null,xo=!1;function rr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xo||el==null||el!==Cn(l)||(l=el,"selectionStart"in l&&bo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&Ll(Gl,l)||(Gl=l,l=wi(vo,"onSelect"),0<l.length&&(t=new kn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Na(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},yo={},ur={};Ot&&(ur=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function wa(e){if(yo[e])return yo[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ur)return yo[e]=t[a];return e}var fr=wa("animationend"),dr=wa("animationiteration"),mr=wa("animationstart"),k2=wa("transitionrun"),R2=wa("transitionstart"),q2=wa("transitioncancel"),gr=wa("transitionend"),pr=new Map,So="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");So.push("scrollEnd");function xt(e,t){pr.set(e,t),Ma(t,[e])}var Yn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rt=[],al=0,zo=0;function Ln(){for(var e=al,t=zo=al=0;t<e;){var a=rt[t];rt[t++]=null;var l=rt[t];rt[t++]=null;var n=rt[t];rt[t++]=null;var i=rt[t];if(rt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&hr(a,n,i)}}function Gn(e,t,a,l){rt[al++]=e,rt[al++]=t,rt[al++]=a,rt[al++]=l,zo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function jo(e,t,a,l){return Gn(e,t,a,l),Xn(e)}function Ea(e,t){return Gn(e,null,null,t),Xn(e)}function hr(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Ie(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Xn(e){if(50<fn)throw fn=0,Cc=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function Y2(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Y2(e,t,a,l)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function br(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vn(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Mo(e)&&(o=1);else if(typeof e=="string")o=Qd(e,a,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case jt:return e=et(31,a,t,n),e.elementType=jt,e.lanes=i,e;case He:return Ta(a.children,n,i,t);case Tt:o=8,n|=24;break;case We:return e=et(12,a,t,n|2),e.elementType=We,e.lanes=i,e;case zt:return e=et(13,a,t,n),e.elementType=zt,e.lanes=i,e;case Re:return e=et(19,a,t,n),e.elementType=Re,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:o=10;break e;case Wt:o=9;break e;case ot:o=11;break e;case F:o=14;break e;case qe:o=16,l=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=et(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ta(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function Ao(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function vr(e){var t=et(18,null,null,0);return t.stateNode=e,t}function No(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xr=new WeakMap;function ut(e,t){if(typeof e=="object"&&e!==null){var a=xr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:vs(t)},xr.set(e,t),t)}return{value:e,source:t,stack:vs(t)}}var nl=[],il=0,Qn=null,Xl=0,ft=[],dt=0,Pt=null,At=1,Nt="";function Ut(e,t){nl[il++]=Xl,nl[il++]=Qn,Qn=e,Xl=t}function yr(e,t,a){ft[dt++]=At,ft[dt++]=Nt,ft[dt++]=Pt,Pt=e;var l=At;e=Nt;var n=32-Ie(l)-1;l&=~(1<<n),a+=1;var i=32-Ie(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,At=1<<32-Ie(t)+n|a<<n|l,Nt=i+e}else At=1<<i|a<<n|l,Nt=e}function wo(e){e.return!==null&&(Ut(e,1),yr(e,1,0))}function Eo(e){for(;e===Qn;)Qn=nl[--il],nl[il]=null,Xl=nl[--il],nl[il]=null;for(;e===Pt;)Pt=ft[--dt],ft[dt]=null,Nt=ft[--dt],ft[dt]=null,At=ft[--dt],ft[dt]=null}function Sr(e,t){ft[dt++]=At,ft[dt++]=Nt,ft[dt++]=Pt,At=t.id,Nt=t.overflow,Pt=e}var Ee=null,fe=null,$=!1,ea=null,mt=!1,To=Error(d(519));function ta(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(ut(t,e)),To}function zr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[we]=e,t[Le]=l,a){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)K(mn[a],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Us(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),ks(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||q0(t.textContent,a)?(l.popover!=null&&(K("beforetoggle",t),K("toggle",t)),l.onScroll!=null&&K("scroll",t),l.onScrollEnd!=null&&K("scrollend",t),l.onClick!=null&&(t.onclick=Ct),t=!0):t=!1,t||ta(e,!0)}function jr(e){for(Ee=e.return;Ee;)switch(Ee.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Ee=Ee.return}}function ol(e){if(e!==Ee)return!1;if(!$)return jr(e),$=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kc(e.type,e.memoizedProps)),a=!a),a&&fe&&ta(e),jr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));fe=J0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));fe=J0(e)}else t===27?(t=fe,pa(e.type)?(e=Ic,Ic=null,fe=e):fe=t):fe=Ee?pt(e.stateNode.nextSibling):null;return!0}function Da(){fe=Ee=null,$=!1}function Do(){var e=ea;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),ea=null),e}function Vl(e){ea===null?ea=[e]:ea.push(e)}var _o=f(null),_a=null,Bt=null;function aa(e,t,a){T(_o,t._currentValue),t._currentValue=a}function kt(e){e._currentValue=_o.current,j(_o)}function Co(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Oo(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Co(i.return,a,e),l||(o=null);break e}i=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(d(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Co(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function cl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var s=n.type;Pe(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===ae.current){if(o=n.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Oo(t,e,a,l),t.flags|=262144}function Zn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){_a=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Te(e){return Mr(_a,e)}function Kn(e,t){return _a===null&&Ca(e),Mr(e,t)}function Mr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(d(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var L2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},G2=v.unstable_scheduleCallback,X2=v.unstable_NormalPriority,ye={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ho(){return{controller:new L2,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&G2(X2,function(){e.controller.abort()})}var Zl=null,Uo=0,sl=0,rl=null;function V2(e,t){if(Zl===null){var a=Zl=[];Uo=0,sl=Rc(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Uo++,t.then(Ar,Ar),t}function Ar(){if(--Uo===0&&Zl!==null){rl!==null&&(rl.status="fulfilled");var e=Zl;Zl=null,sl=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Q2(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Nr=y.S;y.S=function(e,t){r0=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&V2(e,t),Nr!==null&&Nr(e,t)};var Oa=f(null);function Bo(){var e=Oa.current;return e!==null?e:ue.pooledCache}function Jn(e,t){t===null?T(Oa,Oa.current):T(Oa,t.pool)}function wr(){var e=Bo();return e===null?null:{parent:ye._currentValue,pool:e}}var ul=Error(d(460)),ko=Error(d(474)),Wn=Error(d(542)),Fn={then:function(){}};function Er(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ct,Ct),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_r(e),e;default:if(typeof t.status=="string")t.then(Ct,Ct);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_r(e),e}throw Ua=t,ul}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,ul):a}}var Ua=null;function Dr(){if(Ua===null)throw Error(d(459));var e=Ua;return Ua=null,e}function _r(e){if(e===ul||e===Wn)throw Error(d(483))}var fl=null,Kl=0;function $n(e){var t=Kl;return Kl+=1,fl===null&&(fl=[]),Tr(fl,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===me?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cr(e){function t(m,u){if(e){var g=m.deletions;g===null?(m.deletions=[u],m.flags|=16):g.push(u)}}function a(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function l(m){for(var u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function n(m,u){return m=Ht(m,u),m.index=0,m.sibling=null,m}function i(m,u,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<u?(m.flags|=67108866,u):g):(m.flags|=67108866,u)):(m.flags|=1048576,u)}function o(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function s(m,u,g,S){return u===null||u.tag!==6?(u=Ao(g,m.mode,S),u.return=m,u):(u=n(u,g),u.return=m,u)}function r(m,u,g,S){var B=g.type;return B===He?x(m,u,g.props.children,S,g.key):u!==null&&(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===qe&&Ha(B)===u.type)?(u=n(u,g.props),Jl(u,g),u.return=m,u):(u=Vn(g.type,g.key,g.props,null,m.mode,S),Jl(u,g),u.return=m,u)}function p(m,u,g,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=No(g,m.mode,S),u.return=m,u):(u=n(u,g.children||[]),u.return=m,u)}function x(m,u,g,S,B){return u===null||u.tag!==7?(u=Ta(g,m.mode,S,B),u.return=m,u):(u=n(u,g),u.return=m,u)}function z(m,u,g){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Ao(""+u,m.mode,g),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Je:return g=Vn(u.type,u.key,u.props,null,m.mode,g),Jl(g,u),g.return=m,g;case ke:return u=No(u,m.mode,g),u.return=m,u;case qe:return u=Ha(u),z(m,u,g)}if(vt(u)||Ye(u))return u=Ta(u,m.mode,g,null),u.return=m,u;if(typeof u.then=="function")return z(m,$n(u),g);if(u.$$typeof===Ce)return z(m,Kn(m,u),g);In(m,u)}return null}function h(m,u,g,S){var B=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return B!==null?null:s(m,u,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Je:return g.key===B?r(m,u,g,S):null;case ke:return g.key===B?p(m,u,g,S):null;case qe:return g=Ha(g),h(m,u,g,S)}if(vt(g)||Ye(g))return B!==null?null:x(m,u,g,S,null);if(typeof g.then=="function")return h(m,u,$n(g),S);if(g.$$typeof===Ce)return h(m,u,Kn(m,g),S);In(m,g)}return null}function b(m,u,g,S,B){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return m=m.get(g)||null,s(u,m,""+S,B);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Je:return m=m.get(S.key===null?g:S.key)||null,r(u,m,S,B);case ke:return m=m.get(S.key===null?g:S.key)||null,p(u,m,S,B);case qe:return S=Ha(S),b(m,u,g,S,B)}if(vt(S)||Ye(S))return m=m.get(g)||null,x(u,m,S,B,null);if(typeof S.then=="function")return b(m,u,g,$n(S),B);if(S.$$typeof===Ce)return b(m,u,g,Kn(u,S),B);In(u,S)}return null}function _(m,u,g,S){for(var B=null,I=null,O=u,X=u=0,W=null;O!==null&&X<g.length;X++){O.index>X?(W=O,O=null):W=O.sibling;var P=h(m,O,g[X],S);if(P===null){O===null&&(O=W);break}e&&O&&P.alternate===null&&t(m,O),u=i(P,u,X),I===null?B=P:I.sibling=P,I=P,O=W}if(X===g.length)return a(m,O),$&&Ut(m,X),B;if(O===null){for(;X<g.length;X++)O=z(m,g[X],S),O!==null&&(u=i(O,u,X),I===null?B=O:I.sibling=O,I=O);return $&&Ut(m,X),B}for(O=l(O);X<g.length;X++)W=b(O,m,X,g[X],S),W!==null&&(e&&W.alternate!==null&&O.delete(W.key===null?X:W.key),u=i(W,u,X),I===null?B=W:I.sibling=W,I=W);return e&&O.forEach(function(ya){return t(m,ya)}),$&&Ut(m,X),B}function k(m,u,g,S){if(g==null)throw Error(d(151));for(var B=null,I=null,O=u,X=u=0,W=null,P=g.next();O!==null&&!P.done;X++,P=g.next()){O.index>X?(W=O,O=null):W=O.sibling;var ya=h(m,O,P.value,S);if(ya===null){O===null&&(O=W);break}e&&O&&ya.alternate===null&&t(m,O),u=i(ya,u,X),I===null?B=ya:I.sibling=ya,I=ya,O=W}if(P.done)return a(m,O),$&&Ut(m,X),B;if(O===null){for(;!P.done;X++,P=g.next())P=z(m,P.value,S),P!==null&&(u=i(P,u,X),I===null?B=P:I.sibling=P,I=P);return $&&Ut(m,X),B}for(O=l(O);!P.done;X++,P=g.next())P=b(O,m,X,P.value,S),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?X:P.key),u=i(P,u,X),I===null?B=P:I.sibling=P,I=P);return e&&O.forEach(function(a1){return t(m,a1)}),$&&Ut(m,X),B}function se(m,u,g,S){if(typeof g=="object"&&g!==null&&g.type===He&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Je:e:{for(var B=g.key;u!==null;){if(u.key===B){if(B=g.type,B===He){if(u.tag===7){a(m,u.sibling),S=n(u,g.props.children),S.return=m,m=S;break e}}else if(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===qe&&Ha(B)===u.type){a(m,u.sibling),S=n(u,g.props),Jl(S,g),S.return=m,m=S;break e}a(m,u);break}else t(m,u);u=u.sibling}g.type===He?(S=Ta(g.props.children,m.mode,S,g.key),S.return=m,m=S):(S=Vn(g.type,g.key,g.props,null,m.mode,S),Jl(S,g),S.return=m,m=S)}return o(m);case ke:e:{for(B=g.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){a(m,u.sibling),S=n(u,g.children||[]),S.return=m,m=S;break e}else{a(m,u);break}else t(m,u);u=u.sibling}S=No(g,m.mode,S),S.return=m,m=S}return o(m);case qe:return g=Ha(g),se(m,u,g,S)}if(vt(g))return _(m,u,g,S);if(Ye(g)){if(B=Ye(g),typeof B!="function")throw Error(d(150));return g=B.call(g),k(m,u,g,S)}if(typeof g.then=="function")return se(m,u,$n(g),S);if(g.$$typeof===Ce)return se(m,u,Kn(m,g),S);In(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,u!==null&&u.tag===6?(a(m,u.sibling),S=n(u,g),S.return=m,m=S):(a(m,u),S=Ao(g,m.mode,S),S.return=m,m=S),o(m)):a(m,u)}return function(m,u,g,S){try{Kl=0;var B=se(m,u,g,S);return fl=null,B}catch(O){if(O===ul||O===Wn)throw O;var I=et(29,O,null,m.mode);return I.lanes=S,I.return=m,I}}}var Ba=Cr(!0),Or=Cr(!1),la=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ee&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Xn(e),hr(e,null,a),t}return Gn(e,l,t,a),Xn(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ms(e,a)}}function Yo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Lo=!1;function Fl(){if(Lo){var e=rl;if(e!==null)throw e}}function $l(e,t,a,l){Lo=!1;var n=e.updateQueue;la=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,p=r.next;r.next=null,o===null?i=p:o.next=p,o=r;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==o&&(s===null?x.firstBaseUpdate=p:s.next=p,x.lastBaseUpdate=r))}if(i!==null){var z=n.baseState;o=0,x=p=r=null,s=i;do{var h=s.lane&-536870913,b=h!==s.lane;if(b?(J&h)===h:(l&h)===h){h!==0&&h===sl&&(Lo=!0),x!==null&&(x=x.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var _=e,k=s;h=t;var se=a;switch(k.tag){case 1:if(_=k.payload,typeof _=="function"){z=_.call(se,z,h);break e}z=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=k.payload,h=typeof _=="function"?_.call(se,z,h):_,h==null)break e;z=R({},z,h);break e;case 2:la=!0}}h=s.callback,h!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[h]:b.push(h))}else b={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(p=x=b,r=z):x=x.next=b,o|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);x===null&&(r=z),n.baseState=r,n.firstBaseUpdate=p,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),ua|=o,e.lanes=o,e.memoizedState=z}}function Hr(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Ur(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hr(a[e],t)}var dl=f(null),Pn=f(0);function Br(e,t){e=Zt,T(Pn,e),T(dl,t),Zt=e|t.baseLanes}function Go(){T(Pn,Zt),T(dl,dl.current)}function Xo(){Zt=Pn.current,j(dl),j(Pn)}var tt=f(null),gt=null;function oa(e){var t=e.alternate;T(ve,ve.current&1),T(tt,e),gt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(gt=e)}function Vo(e){T(ve,ve.current),T(tt,e),gt===null&&(gt=e)}function kr(e){e.tag===22?(T(ve,ve.current),T(tt,e),gt===null&&(gt=e)):ca()}function ca(){T(ve,ve.current),T(tt,tt.current)}function at(e){j(tt),gt===e&&(gt=null),j(ve)}var ve=f(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Fc(a)||$c(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rt=0,G=null,oe=null,Se=null,ti=!1,ml=!1,ka=!1,ai=0,Il=0,gl=null,Z2=0;function pe(){throw Error(d(321))}function Qo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function Zo(e,t,a,l,n,i){return Rt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?yu:cc,ka=!1,i=a(l,n),ka=!1,ml&&(i=qr(t,a,l,n)),Rr(e),i}function Rr(e){y.H=tn;var t=oe!==null&&oe.next!==null;if(Rt=0,Se=oe=G=null,ti=!1,Il=0,gl=null,t)throw Error(d(300));e===null||ze||(e=e.dependencies,e!==null&&Zn(e)&&(ze=!0))}function qr(e,t,a,l){G=e;var n=0;do{if(ml&&(gl=null),Il=0,ml=!1,25<=n)throw Error(d(301));if(n+=1,Se=oe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Su,i=t(a,l)}while(ml);return i}function K2(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(G.flags|=1024),t}function Ko(){var e=ai!==0;return ai=0,e}function Jo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Wo(e){if(ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ti=!1}Rt=0,Se=oe=G=null,ml=!1,Il=ai=0,gl=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?G.memoizedState=Se=e:Se=Se.next=e,Se}function xe(){if(oe===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=Se===null?G.memoizedState:Se.next;if(t!==null)Se=t,oe=e;else{if(e===null)throw G.alternate===null?Error(d(467)):Error(d(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},Se===null?G.memoizedState=Se=e:Se=Se.next=e}return Se}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,gl===null&&(gl=[]),e=Tr(gl,e,t),t=G,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?yu:cc),e}function ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===Ce)return Te(e)}throw Error(d(438,String(e)))}function Fo(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=G.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=li(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Xa;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=xe();return $o(t,oe,e)}function $o(e,t,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=o=null,r=null,p=t,x=!1;do{var z=p.lane&-536870913;if(z!==p.lane?(J&z)===z:(Rt&z)===z){var h=p.revertLane;if(h===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),z===sl&&(x=!0);else if((Rt&h)===h){p=p.next,h===sl&&(x=!0);continue}else z={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=z,o=i):r=r.next=z,G.lanes|=h,ua|=h;z=p.action,ka&&a(i,z),i=p.hasEagerState?p.eagerState:a(i,z)}else h={lane:z,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=h,o=i):r=r.next=h,G.lanes|=z,ua|=z;p=p.next}while(p!==null&&p!==t);if(r===null?o=i:r.next=s,!Pe(i,e.memoizedState)&&(ze=!0,x&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Io(e){var t=xe(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);Pe(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Yr(e,t,a){var l=G,n=xe(),i=$;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!Pe((oe||n).memoizedState,a);if(o&&(n.memoizedState=a,ze=!0),n=n.queue,tc(Xr.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,pl(9,{destroy:void 0},Gr.bind(null,l,n,a,t),null),ue===null)throw Error(d(349));i||(Rt&127)!==0||Lr(l,t,a)}return a}function Lr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=li(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gr(e,t,a,l){t.value=a,t.getSnapshot=l,Vr(t)&&Qr(e)}function Xr(e,t,a){return a(function(){Vr(t)&&Qr(e)})}function Vr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function Qr(e){var t=Ea(e,2);t!==null&&Ke(t,e,2)}function Po(e){var t=Be();if(typeof e=="function"){var a=e;if(e=a(),ka){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Zr(e,t,a,l){return e.baseState=a,$o(e,oe,typeof l=="function"?l:qt)}function J2(e,t,a,l,n){if(si(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};y.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Kr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Kr(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=y.T,o={};y.T=o;try{var s=a(n,l),r=y.S;r!==null&&r(o,s),Jr(e,t,s)}catch(p){ec(e,t,p)}finally{i!==null&&o.types!==null&&(i.types=o.types),y.T=i}}else try{i=a(n,l),Jr(e,t,i)}catch(p){ec(e,t,p)}}function Jr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wr(e,t,l)},function(l){return ec(e,t,l)}):Wr(e,t,a)}function Wr(e,t,a){t.status="fulfilled",t.value=a,Fr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Kr(e,a)))}function ec(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Fr(t),t=t.next;while(t!==l)}e.action=null}function Fr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $r(e,t){return t}function Ir(e,t){if($){var a=ue.formState;if(a!==null){e:{var l=G;if($){if(fe){t:{for(var n=fe,i=mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=pt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){fe=pt(n.nextSibling),l=n.data==="F!";break e}}ta(l)}l=!1}l&&(t=a[0])}}return a=Be(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:t},a.queue=l,a=bu.bind(null,G,l),l.dispatch=a,l=Po(!1),i=oc.bind(null,G,!1,l.queue),l=Be(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=J2.bind(null,G,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Pr(e){var t=xe();return eu(t,oe,e)}function eu(e,t,a){if(t=$o(e,t,$r)[0],e=ii(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(o){throw o===ul?Wn:o}else l=t;t=xe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(G.flags|=2048,pl(9,{destroy:void 0},W2.bind(null,n,a),null)),[l,i,e]}function W2(e,t){e.action=t}function tu(e){var t=xe(),a=oe;if(a!==null)return eu(t,a,e);xe(),t=t.memoizedState,a=xe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function pl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=G.updateQueue,t===null&&(t=li(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function au(){return xe().memoizedState}function oi(e,t,a,l){var n=Be();G.flags|=e,n.memoizedState=pl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ci(e,t,a,l){var n=xe();l=l===void 0?null:l;var i=n.memoizedState.inst;oe!==null&&l!==null&&Qo(l,oe.memoizedState.deps)?n.memoizedState=pl(t,i,a,l):(G.flags|=e,n.memoizedState=pl(1|t,i,a,l))}function lu(e,t){oi(8390656,8,e,t)}function tc(e,t){ci(2048,8,e,t)}function F2(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=li(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function nu(e){var t=xe().memoizedState;return F2({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function iu(e,t){return ci(4,2,e,t)}function ou(e,t){return ci(4,4,e,t)}function cu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function su(e,t,a){a=a!=null?a.concat([e]):null,ci(4,4,cu.bind(null,t,e),a)}function ac(){}function ru(e,t){var a=xe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Qo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function uu(e,t){var a=xe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Qo(t,l[1]))return l[0];if(l=e(),ka){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function lc(e,t,a){return a===void 0||(Rt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=f0(),G.lanes|=e,ua|=e,a)}function fu(e,t,a,l){return Pe(a,t)?a:dl.current!==null?(e=lc(e,a,l),Pe(e,t)||(ze=!0),e):(Rt&42)===0||(Rt&1073741824)!==0&&(J&261930)===0?(ze=!0,e.memoizedState=a):(e=f0(),G.lanes|=e,ua|=e,t)}function du(e,t,a,l,n){var i=E.p;E.p=i!==0&&8>i?i:8;var o=y.T,s={};y.T=s,oc(e,!1,t,a);try{var r=n(),p=y.S;if(p!==null&&p(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=Q2(r,l);en(e,t,x,it(e))}else en(e,t,l,it(e))}catch(z){en(e,t,{then:function(){},status:"rejected",reason:z},it())}finally{E.p=i,o!==null&&s.types!==null&&(o.types=s.types),y.T=o}}function $2(){}function nc(e,t,a,l){if(e.tag!==5)throw Error(d(476));var n=mu(e).queue;du(e,n,t,q,a===null?$2:function(){return gu(e),a(l)})}function mu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gu(e){var t=mu(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},it())}function ic(){return Te(vn)}function pu(){return xe().memoizedState}function hu(){return xe().memoizedState}function I2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var l=ia(t,e,a);l!==null&&(Ke(l,t,a),Wl(l,t,a)),t={cache:Ho()},e.payload=t;return}t=t.return}}function P2(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},si(e)?vu(t,a):(a=jo(e,t,a,l),a!==null&&(Ke(a,e,l),xu(a,t,l)))}function bu(e,t,a){var l=it();en(e,t,a,l)}function en(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(si(e))vu(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,a);if(n.hasEagerState=!0,n.eagerState=s,Pe(s,o))return Gn(e,t,n,0),ue===null&&Ln(),!1}catch{}if(a=jo(e,t,n,l),a!==null)return Ke(a,e,l),xu(a,t,l),!0}return!1}function oc(e,t,a,l){if(l={lane:2,revertLane:Rc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},si(e)){if(t)throw Error(d(479))}else t=jo(e,a,l,2),t!==null&&Ke(t,e,2)}function si(e){var t=e.alternate;return e===G||t!==null&&t===G}function vu(e,t){ml=ti=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ms(e,a)}}var tn={readContext:Te,use:ni,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe};tn.useEffectEvent=pe;var yu={readContext:Te,use:ni,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:lu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,oi(4194308,4,cu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){oi(4,2,e,t)},useMemo:function(e,t){var a=Be();t=t===void 0?null:t;var l=e();if(ka){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Be();if(a!==void 0){var n=a(t);if(ka){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=P2.bind(null,G,e),[l.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:function(e){e=Po(e);var t=e.queue,a=bu.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ac,useDeferredValue:function(e,t){var a=Be();return lc(a,e,t)},useTransition:function(){var e=Po(!1);return e=du.bind(null,G,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=G,n=Be();if($){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),ue===null)throw Error(d(349));(J&127)!==0||Lr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,lu(Xr.bind(null,l,i,e),[e]),l.flags|=2048,pl(9,{destroy:void 0},Gr.bind(null,l,i,a,t),null),a},useId:function(){var e=Be(),t=ue.identifierPrefix;if($){var a=Nt,l=At;a=(l&~(1<<32-Ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Z2++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:Ir,useActionState:Ir,useOptimistic:function(e){var t=Be();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=oc.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Be().memoizedState=I2.bind(null,G)},useEffectEvent:function(e){var t=Be(),a={impl:e};return t.memoizedState=a,function(){if((ee&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},cc={readContext:Te,use:ni,useCallback:ru,useContext:Te,useEffect:tc,useImperativeHandle:su,useInsertionEffect:iu,useLayoutEffect:ou,useMemo:uu,useReducer:ii,useRef:au,useState:function(){return ii(qt)},useDebugValue:ac,useDeferredValue:function(e,t){var a=xe();return fu(a,oe.memoizedState,e,t)},useTransition:function(){var e=ii(qt)[0],t=xe().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Yr,useId:pu,useHostTransitionStatus:ic,useFormState:Pr,useActionState:Pr,useOptimistic:function(e,t){var a=xe();return Zr(a,oe,e,t)},useMemoCache:Fo,useCacheRefresh:hu};cc.useEffectEvent=nu;var Su={readContext:Te,use:ni,useCallback:ru,useContext:Te,useEffect:tc,useImperativeHandle:su,useInsertionEffect:iu,useLayoutEffect:ou,useMemo:uu,useReducer:Io,useRef:au,useState:function(){return Io(qt)},useDebugValue:ac,useDeferredValue:function(e,t){var a=xe();return oe===null?lc(a,e,t):fu(a,oe.memoizedState,e,t)},useTransition:function(){var e=Io(qt)[0],t=xe().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Yr,useId:pu,useHostTransitionStatus:ic,useFormState:tu,useActionState:tu,useOptimistic:function(e,t){var a=xe();return oe!==null?Zr(a,oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fo,useCacheRefresh:hu};Su.useEffectEvent=nu;function sc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Ke(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Ke(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=na(a);l.tag=2,t!=null&&(l.callback=t),t=ia(e,l,a),t!==null&&(Ke(t,e,a),Wl(t,e,a))}};function zu(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ll(a,l)||!Ll(n,i):!0}function ju(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Mu(e){Yn(e)}function Au(e){console.error(e)}function Nu(e){Yn(e)}function ri(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function wu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){ri(e,t)},a}function Eu(e){return e=na(e),e.tag=3,e}function Tu(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){wu(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){wu(t,a,l),typeof n!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function ed(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&cl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return gt===null?Si():a.alternate===null&&he===0&&(he=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Uc(e,l,n)),!1;case 22:return a.flags|=65536,l===Fn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Uc(e,l,n)),!1}throw Error(d(435,a.tag))}return Uc(e,l,n),Si(),!1}if($)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==To&&(e=Error(d(422),{cause:l}),Vl(ut(e,a)))):(l!==To&&(t=Error(d(423),{cause:l}),Vl(ut(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ut(l,a),n=uc(e.stateNode,l,n),Yo(e,n),he!==4&&(he=2)),!1;var i=Error(d(520),{cause:l});if(i=ut(i,a),un===null?un=[i]:un.push(i),he!==4&&(he=2),t===null)return!0;l=ut(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=uc(a.stateNode,l,e),Yo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Eu(n),Tu(n,e,a,l),Yo(a,n),!1}a=a.return}while(a!==null);return!1}var fc=Error(d(461)),ze=!1;function De(e,t,a,l){t.child=e===null?Or(t,null,a,l):Ba(t,e.child,a,l)}function Du(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return Ca(t),l=Zo(e,t,a,o,i,n),s=Ko(),e!==null&&!ze?(Jo(e,t,n),Yt(e,t,n)):($&&s&&wo(t),t.flags|=1,De(e,t,l,n),t.child)}function _u(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Mo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Cu(e,t,i,l,n)):(e=Vn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!xc(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(o,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Ht(i,l),e.ref=t.ref,e.return=t,t.child=e}function Cu(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Ll(i,l)&&e.ref===t.ref)if(ze=!1,t.pendingProps=l=i,xc(e,n))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return dc(e,t,a,l,n)}function Ou(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Hu(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,i!==null?i.cachePool:null),i!==null?Br(t,i):Go(),kr(t);else return l=t.lanes=536870912,Hu(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Jn(t,i.cachePool),Br(t,i),ca(),t.memoizedState=null):(e!==null&&Jn(t,null),Go(),ca());return De(e,t,n,a),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hu(e,t,a,l,n){var i=Bo();return i=i===null?null:{parent:ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Jn(t,null),Go(),kr(t),e!==null&&cl(e,t,l,!0),t.childLanes=n,null}function ui(e,t){return t=di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uu(e,t,a){return Ba(t,e.child,null,a),e=ui(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function td(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($){if(l.mode==="hidden")return e=ui(t,l),t.lanes=536870912,an(null,e);if(Vo(t),(e=fe)?(e=K0(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vr(e),a.return=t,t.child=a,Ee=t,fe=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return ui(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Vo(t),n)if(t.flags&256)t.flags&=-257,t=Uu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(ze||cl(e,t,a,!1),n=(a&e.childLanes)!==0,ze||n){if(l=ue,l!==null&&(o=As(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ea(e,o),Ke(l,e,o),fc;Si(),t=Uu(e,t,a)}else e=i.treeContext,fe=pt(o.nextSibling),Ee=t,$=!0,ea=null,mt=!1,e!==null&&Sr(t,e),t=ui(t,l),t.flags|=4096;return t}return e=Ht(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function dc(e,t,a,l,n){return Ca(t),a=Zo(e,t,a,l,void 0,n),l=Ko(),e!==null&&!ze?(Jo(e,t,n),Yt(e,t,n)):($&&l&&wo(t),t.flags|=1,De(e,t,a,n),t.child)}function Bu(e,t,a,l,n,i){return Ca(t),t.updateQueue=null,a=qr(t,l,a,n),Rr(e),l=Ko(),e!==null&&!ze?(Jo(e,t,i),Yt(e,t,i)):($&&l&&wo(t),t.flags|=1,De(e,t,a,i),t.child)}function ku(e,t,a,l,n){if(Ca(t),t.stateNode===null){var i=ll,o=a.contextType;typeof o=="object"&&o!==null&&(i=Te(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ro(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Te(o):ll,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(sc(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&rc.enqueueReplaceState(i,i.state,null),$l(t,l,i,n),Fl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Ra(a,s);i.props=r;var p=i.context,x=a.contextType;o=ll,typeof x=="object"&&x!==null&&(o=Te(x));var z=a.getDerivedStateFromProps;x=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||p!==o)&&ju(t,i,l,o),la=!1;var h=t.memoizedState;i.state=h,$l(t,l,i,n),Fl(),p=t.memoizedState,s||h!==p||la?(typeof z=="function"&&(sc(t,a,z,l),p=t.memoizedState),(r=la||zu(t,a,r,l,h,p,o))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=o,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,qo(e,t),o=t.memoizedProps,x=Ra(a,o),i.props=x,z=t.pendingProps,h=i.context,p=a.contextType,r=ll,typeof p=="object"&&p!==null&&(r=Te(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==z||h!==r)&&ju(t,i,l,r),la=!1,h=t.memoizedState,i.state=h,$l(t,l,i,n),Fl();var b=t.memoizedState;o!==z||h!==b||la||e!==null&&e.dependencies!==null&&Zn(e.dependencies)?(typeof s=="function"&&(sc(t,a,s,l),b=t.memoizedState),(x=la||zu(t,a,x,l,h,b,r)||e!==null&&e.dependencies!==null&&Zn(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=b),i.props=l,i.state=b,i.context=r,l=x):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,fi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ba(t,e.child,null,n),t.child=Ba(t,null,a,n)):De(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Yt(e,t,n),e}function Ru(e,t,a,l){return Da(),t.flags|=256,De(e,t,a,l),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:wr()}}function pc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function qu(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if($){if(n?oa(t):ca(),(e=fe)?(e=K0(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vr(e),a.return=t,t.child=a,Ee=t,fe=null)):e=null,e===null)throw ta(t);return $c(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ca(),n=t.mode,s=di({mode:"hidden",children:s},n),l=Ta(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=gc(a),l.childLanes=pc(e,o,a),t.memoizedState=mc,an(null,l)):(oa(t),hc(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(oa(t),t.flags&=-257,t=bc(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),s=l.fallback,n=t.mode,l=di({mode:"visible",children:l.children},n),s=Ta(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Ba(t,e.child,null,a),l=t.child,l.memoizedState=gc(a),l.childLanes=pc(e,o,a),t.memoizedState=mc,t=an(null,l));else if(oa(t),$c(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var p=o.dgst;o=p,l=Error(d(419)),l.stack="",l.digest=o,Vl({value:l,source:null,stack:null}),t=bc(e,t,a)}else if(ze||cl(e,t,a,!1),o=(a&e.childLanes)!==0,ze||o){if(o=ue,o!==null&&(l=As(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ea(e,l),Ke(o,e,l),fc;Fc(s)||Si(),t=bc(e,t,a)}else Fc(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,fe=pt(s.nextSibling),Ee=t,$=!0,ea=null,mt=!1,e!==null&&Sr(t,e),t=hc(t,l.children),t.flags|=4096);return t}return n?(ca(),s=l.fallback,n=t.mode,r=e.child,p=r.sibling,l=Ht(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,p!==null?s=Ht(p,s):(s=Ta(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,an(null,l),l=t.child,s=e.child.memoizedState,s===null?s=gc(a):(n=s.cachePool,n!==null?(r=ye._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=wr(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=pc(e,o,a),t.memoizedState=mc,an(e.child,l)):(oa(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function hc(e,t){return t=di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function di(e,t){return e=et(22,e,null,t),e.lanes=0,e}function bc(e,t,a){return Ba(t,e.child,null,a),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yu(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Co(e.return,t,a)}function vc(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function Lu(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=ve.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,T(ve,o),De(e,t,l,a),l=$?Xl:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,a,t);else if(e.tag===19)Yu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}vc(t,!0,a,null,i,l);break;case"together":vc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function xc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zn(e)))}function ad(e,t,a){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),aa(t,ye,e.memoizedState.cache),Da();break;case 27:case 5:El(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qu(e,t,a):(oa(t),e=Yt(e,t,a),e!==null?e.sibling:null);oa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(cl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Lu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),T(ve,ve.current),l)break;return null;case 22:return t.lanes=0,Ou(e,t,a,t.pendingProps);case 24:aa(t,ye,e.memoizedState.cache)}return Yt(e,t,a)}function Gu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!xc(e,a)&&(t.flags&128)===0)return ze=!1,ad(e,t,a);ze=(e.flags&131072)!==0}else ze=!1,$&&(t.flags&1048576)!==0&&yr(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")Mo(e)?(l=Ra(e,l),t.tag=1,t=ku(null,t,e,l,a)):(t.tag=0,t=dc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ot){t.tag=11,t=Du(null,t,e,l,a);break e}else if(n===F){t.tag=14,t=_u(null,t,e,l,a);break e}}throw t=Dt(e)||e,Error(d(306,t,""))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ra(l,t.pendingProps),ku(e,t,l,n,a);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,qo(e,t),$l(t,l,null,a);var o=t.memoizedState;if(l=o.cache,aa(t,ye,l),l!==i.cache&&Oo(t,[ye],a,!0),Fl(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ru(e,t,l,a);break e}else if(l!==n){n=ut(Error(d(424)),t),Vl(n),t=Ru(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,fe=pt(e.firstChild),Ee=t,$=!0,ea=null,mt=!0,a=Or(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Da(),l===n){t=Yt(e,t,a);break e}De(e,t,l,a)}t=t.child}return t;case 26:return fi(e,t),e===null?(a=P0(t.type,null,t.pendingProps,null))?t.memoizedState=a:$||(a=t.type,e=t.pendingProps,l=Ei(Q.current).createElement(a),l[we]=t,l[Le]=e,_e(l,a,e),Ae(l),t.stateNode=l):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return El(t),e===null&&$&&(l=t.stateNode=F0(t.type,t.pendingProps,Q.current),Ee=t,mt=!0,n=fe,pa(t.type)?(Ic=n,fe=pt(l.firstChild)):fe=n),De(e,t,t.pendingProps.children,a),fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$&&((n=l=fe)&&(l=Cd(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,Ee=t,fe=pt(l.firstChild),mt=!1,n=!0):n=!1),n||ta(t)),El(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Kc(n,i)?l=null:o!==null&&Kc(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=Zo(e,t,K2,null,null,a),vn._currentValue=n),fi(e,t),De(e,t,l,a),t.child;case 6:return e===null&&$&&((e=a=fe)&&(a=Od(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Ee=t,fe=null,e=!0):e=!1),e||ta(t)),null;case 13:return qu(e,t,a);case 4:return Ue(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ba(t,null,l,a):De(e,t,l,a),t.child;case 11:return Du(e,t,t.type,t.pendingProps,a);case 7:return De(e,t,t.pendingProps,a),t.child;case 8:return De(e,t,t.pendingProps.children,a),t.child;case 12:return De(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,aa(t,t.type,l.value),De(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ca(t),n=Te(n),l=l(n),t.flags|=1,De(e,t,l,a),t.child;case 14:return _u(e,t,t.type,t.pendingProps,a);case 15:return Cu(e,t,t.type,t.pendingProps,a);case 19:return Lu(e,t,a);case 31:return td(e,t,a);case 22:return Ou(e,t,a,t.pendingProps);case 24:return Ca(t),l=Te(ye),e===null?(n=Bo(),n===null&&(n=ue,i=Ho(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Ro(t),aa(t,ye,n)):((e.lanes&a)!==0&&(qo(e,t),$l(t,null,null,a),Fl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),aa(t,ye,l)):(l=i.cache,aa(t,ye,l),l!==n.cache&&Oo(t,[ye],a,!0))),De(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Lt(e){e.flags|=4}function yc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(p0())e.flags|=8192;else throw Ua=Fn,ko}else e.flags&=-16777217}function Xu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nf(t))if(p0())e.flags|=8192;else throw Ua=Fn,ko}function mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zs():536870912,e.lanes|=t,xl|=t)}function ln(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ld(e,t,a){var l=t.pendingProps;switch(Eo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return de(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kt(ye),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ol(t)?Lt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Do())),de(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Lt(t),i!==null?(de(t),Xu(t,i)):(de(t),yc(t,n,null,l,a))):i?i!==e.memoizedState?(Lt(t),de(t),Xu(t,i)):(de(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Lt(t),de(t),yc(t,n,e,l,a)),null;case 27:if(Mn(t),a=Q.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return de(t),null}e=C.current,ol(t)?zr(t):(e=F0(n,l,a),t.stateNode=e,Lt(t))}return de(t),null;case 5:if(Mn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return de(t),null}if(i=C.current,ol(t))zr(t);else{var o=Ei(Q.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[we]=t,i[Le]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(_e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Lt(t)}}return de(t),yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=Q.current,ol(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ee,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[we]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||q0(e.nodeValue,a)),e||ta(t,!0)}else e=Ei(e).createTextNode(l),e[we]=t,t.stateNode=e}return de(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ol(t),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[we]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;de(t),e=!1}else a=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(d(558))}return de(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ol(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[we]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;de(t),n=!1}else n=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),mi(t,t.updateQueue),de(t),null);case 4:return be(),e===null&&Gc(t.stateNode.containerInfo),de(t),null;case 10:return kt(t.type),de(t),null;case 19:if(j(ve),l=t.memoizedState,l===null)return de(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ei(e),i!==null){for(t.flags|=128,ln(l,!1),e=i.updateQueue,t.updateQueue=e,mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)br(a,e),a=a.sibling;return T(ve,ve.current&1|2),$&&Ut(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>vi&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304)}else{if(!n)if(e=ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,mi(t,e),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!$)return de(t),null}else 2*Fe()-l.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=ve.current,T(ve,n?a&1|2:a&1),$&&Ut(t,l.treeForkCount),e):(de(t),null);case 22:case 23:return at(t),Xo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),a=t.updateQueue,a!==null&&mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&j(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kt(ye),de(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function nd(e,t){switch(Eo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(ye),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(d(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(ve),null;case 4:return be(),null;case 10:return kt(t.type),null;case 22:case 23:return at(t),Xo(),e!==null&&j(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(ye),null;case 25:return null;default:return null}}function Vu(e,t){switch(Eo(t),t.tag){case 3:kt(ye),be();break;case 26:case 27:case 5:Mn(t);break;case 4:be();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:j(ve);break;case 10:kt(t.type);break;case 22:case 23:at(t),Xo(),e!==null&&j(Oa);break;case 24:kt(ye)}}function nn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(s){ne(t,t.return,s)}}function sa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var r=a,p=s;try{p()}catch(x){ne(n,r,x)}}}l=l.next}while(l!==i)}}catch(x){ne(t,t.return,x)}}function Qu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ur(t,a)}catch(l){ne(e,e.return,l)}}}function Zu(e,t,a){a.props=Ra(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ne(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ne(e,t,n)}}function wt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ne(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ne(e,t,n)}else a.current=null}function Ku(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ne(e,e.return,n)}}function Sc(e,t,a){try{var l=e.stateNode;Nd(l,e.type,a,t),l[Le]=t}catch(n){ne(e,e.return,n)}}function Ju(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ct));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(jc(e,t,a),e=e.sibling;e!==null;)jc(e,t,a),e=e.sibling}function gi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gi(e,t,a),e=e.sibling;e!==null;)gi(e,t,a),e=e.sibling}function Wu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_e(t,l,a),t[we]=e,t[Le]=a}catch(i){ne(e,e.return,i)}}var Gt=!1,je=!1,Mc=!1,Fu=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function id(e,t){if(e=e.containerInfo,Qc=Ui,e=sr(e),bo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,s=-1,r=-1,p=0,x=0,z=e,h=null;t:for(;;){for(var b;z!==a||n!==0&&z.nodeType!==3||(s=o+n),z!==i||l!==0&&z.nodeType!==3||(r=o+l),z.nodeType===3&&(o+=z.nodeValue.length),(b=z.firstChild)!==null;)h=z,z=b;for(;;){if(z===e)break t;if(h===a&&++p===n&&(s=o),h===i&&++x===l&&(r=o),(b=z.nextSibling)!==null)break;z=h,h=z.parentNode}z=b}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zc={focusedElem:e,selectionRange:a},Ui=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var _=Ra(a.type,n);e=l.getSnapshotBeforeUpdate(_,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(k){ne(a,a.return,k)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Wc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function $u(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Vt(e,a),l&4&&nn(5,a);break;case 1:if(Vt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ne(a,a.return,o)}else{var n=Ra(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(a,a.return,o)}}l&64&&Qu(a),l&512&&on(a,a.return);break;case 3:if(Vt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ur(e,t)}catch(o){ne(a,a.return,o)}}break;case 27:t===null&&l&4&&Wu(a);case 26:case 5:Vt(e,a),t===null&&l&4&&Ku(a),l&512&&on(a,a.return);break;case 12:Vt(e,a);break;case 31:Vt(e,a),l&4&&e0(e,a);break;case 13:Vt(e,a),l&4&&t0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gd.bind(null,a),Hd(e,a))));break;case 22:if(l=a.memoizedState!==null||Gt,!l){t=t!==null&&t.memoizedState!==null||je,n=Gt;var i=je;Gt=l,(je=t)&&!i?Qt(e,a,(a.subtreeFlags&8772)!==0):Vt(e,a),Gt=n,je=i}break;case 30:break;default:Vt(e,a)}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Xe=!1;function Xt(e,t,a){for(a=a.child;a!==null;)Pu(e,t,a),a=a.sibling}function Pu(e,t,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Tl,a)}catch{}switch(a.tag){case 26:je||wt(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||wt(a,t);var l=ge,n=Xe;pa(a.type)&&(ge=a.stateNode,Xe=!1),Xt(e,t,a),pn(a.stateNode),ge=l,Xe=n;break;case 5:je||wt(a,t);case 6:if(l=ge,n=Xe,ge=null,Xt(e,t,a),ge=l,Xe=n,ge!==null)if(Xe)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(i){ne(a,t,i)}else try{ge.removeChild(a.stateNode)}catch(i){ne(a,t,i)}break;case 18:ge!==null&&(Xe?(e=ge,Q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wl(e)):Q0(ge,a.stateNode));break;case 4:l=ge,n=Xe,ge=a.stateNode.containerInfo,Xe=!0,Xt(e,t,a),ge=l,Xe=n;break;case 0:case 11:case 14:case 15:sa(2,a,t),je||sa(4,a,t),Xt(e,t,a);break;case 1:je||(wt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zu(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:je=(l=je)||a.memoizedState!==null,Xt(e,t,a),je=l;break;default:Xt(e,t,a)}}function e0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wl(e)}catch(a){ne(t,t.return,a)}}}function t0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(a){ne(t,t.return,a)}}function od(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fu),t;default:throw Error(d(435,e.tag))}}function pi(e,t){var a=od(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=pd.bind(null,e,l);l.then(n,n)}})}function Ve(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){ge=s.stateNode,Xe=!1;break e}break;case 5:ge=s.stateNode,Xe=!1;break e;case 3:case 4:ge=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(ge===null)throw Error(d(160));Pu(i,o,n),ge=null,Xe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)a0(t,e),t=t.sibling}var yt=null;function a0(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ve(t,e),Qe(e),l&4&&(sa(3,e,e.return),nn(3,e),sa(5,e,e.return));break;case 1:Ve(t,e),Qe(e),l&512&&(je||a===null||wt(a,a.return)),l&64&&Gt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=yt;if(Ve(t,e),Qe(e),l&512&&(je||a===null||wt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cl]||i[we]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),_e(i,l,a),i[we]=e,Ae(i),l=i;break e;case"link":var o=af("link","href",n).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}i=n.createElement(l),_e(i,l,a),n.head.appendChild(i);break;case"meta":if(o=af("meta","content",n).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}i=n.createElement(l),_e(i,l,a),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[we]=e,Ae(i),l=i}e.stateNode=l}else lf(n,e.type,e.stateNode);else e.stateNode=tf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?lf(n,e.type,e.stateNode):tf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ve(t,e),Qe(e),l&512&&(je||a===null||wt(a,a.return)),a!==null&&l&4&&Sc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ve(t,e),Qe(e),l&512&&(je||a===null||wt(a,a.return)),e.flags&32){n=e.stateNode;try{Fa(n,"")}catch(_){ne(e,e.return,_)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Sc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Mc=!0);break;case 6:if(Ve(t,e),Qe(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(_){ne(e,e.return,_)}}break;case 3:if(_i=null,n=yt,yt=Ti(t.containerInfo),Ve(t,e),yt=n,Qe(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(_){ne(e,e.return,_)}Mc&&(Mc=!1,l0(e));break;case 4:l=yt,yt=Ti(e.stateNode.containerInfo),Ve(t,e),Qe(e),yt=l;break;case 12:Ve(t,e),Qe(e);break;case 31:Ve(t,e),Qe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 13:Ve(t,e),Qe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bi=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,p=Gt,x=je;if(Gt=p||n,je=x||r,Ve(t,e),je=x,Gt=p,Qe(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Gt||je||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var z=r.memoizedProps.style,h=z!=null&&z.hasOwnProperty("display")?z.display:null;s.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(_){ne(r,r.return,_)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(_){ne(r,r.return,_)}}}else if(t.tag===18){if(a===null){r=t;try{var b=r.stateNode;n?Z0(b,!0):Z0(r.stateNode,!1)}catch(_){ne(r,r.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pi(e,a))));break;case 19:Ve(t,e),Qe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 30:break;case 21:break;default:Ve(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ju(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,i=zc(e);gi(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(Fa(o,""),a.flags&=-33);var s=zc(e);gi(e,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,p=zc(e);jc(e,p,r);break;default:throw Error(d(161))}}catch(x){ne(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;l0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$u(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),qa(t);break;case 1:wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zu(t,t.return,a),qa(t);break;case 27:pn(t.stateNode);case 26:case 5:wt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Qt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Qt(n,i,a),nn(4,i);break;case 1:if(Qt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ne(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Hr(r[n],s)}catch(p){ne(l,l.return,p)}}a&&o&64&&Qu(i),on(i,i.return);break;case 27:Wu(i);case 26:case 5:Qt(n,i,a),a&&l===null&&o&4&&Ku(i),on(i,i.return);break;case 12:Qt(n,i,a);break;case 31:Qt(n,i,a),a&&o&4&&e0(n,i);break;case 13:Qt(n,i,a),a&&o&4&&t0(n,i);break;case 22:i.memoizedState===null&&Qt(n,i,a),on(i,i.return);break;case 30:break;default:Qt(n,i,a)}t=t.sibling}}function Ac(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function Nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function St(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(e,t,a,l),t=t.sibling}function n0(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,l),n&2048&&nn(9,t);break;case 1:St(e,t,a,l);break;case 3:St(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e)));break;case 12:if(n&2048){St(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){ne(t,t.return,r)}}else St(e,t,a,l);break;case 31:St(e,t,a,l);break;case 13:St(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,l):cn(e,t):i._visibility&2?St(e,t,a,l):(i._visibility|=2,hl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(o,t);break;case 24:St(e,t,a,l),n&2048&&Nc(t.alternate,t);break;default:St(e,t,a,l)}}function hl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=a,r=l,p=o.flags;switch(o.tag){case 0:case 11:case 15:hl(i,o,s,r,n),nn(8,o);break;case 23:break;case 22:var x=o.stateNode;o.memoizedState!==null?x._visibility&2?hl(i,o,s,r,n):cn(i,o):(x._visibility|=2,hl(i,o,s,r,n)),n&&p&2048&&Ac(o.alternate,o);break;case 24:hl(i,o,s,r,n),n&&p&2048&&Nc(o.alternate,o);break;default:hl(i,o,s,r,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:cn(a,l),n&2048&&Ac(l.alternate,l);break;case 24:cn(a,l),n&2048&&Nc(l.alternate,l);break;default:cn(a,l)}t=t.sibling}}var sn=8192;function bl(e,t,a){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)i0(e,t,a),e=e.sibling}function i0(e,t,a){switch(e.tag){case 26:bl(e,t,a),e.flags&sn&&e.memoizedState!==null&&Zd(a,yt,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,a);break;case 3:case 4:var l=yt;yt=Ti(e.stateNode.containerInfo),bl(e,t,a),yt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=sn,sn=16777216,bl(e,t,a),sn=l):bl(e,t,a));break;default:bl(e,t,a)}}function o0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ne=l,s0(l,e)}o0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)c0(e),e=e.sibling}function c0(e){switch(e.tag){case 0:case 11:case 15:rn(e),e.flags&2048&&sa(9,e,e.return);break;case 3:rn(e);break;case 12:rn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hi(e)):rn(e);break;default:rn(e)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ne=l,s0(l,e)}o0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),hi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,hi(t));break;default:hi(t)}e=e.sibling}}function s0(e,t){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else e:for(a=e;Ne!==null;){l=Ne;var n=l.sibling,i=l.return;if(Iu(l),l===a){Ne=null;break e}if(n!==null){n.return=i,Ne=n;break e}Ne=i}}}var cd={getCacheForType:function(e){var t=Te(ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Te(ye).controller.signal}},sd=typeof WeakMap=="function"?WeakMap:Map,ee=0,ue=null,Z=null,J=0,le=0,lt=null,ra=!1,vl=!1,wc=!1,Zt=0,he=0,ua=0,Ya=0,Ec=0,nt=0,xl=0,un=null,Ze=null,Tc=!1,bi=0,r0=0,vi=1/0,xi=null,fa=null,Me=0,da=null,yl=null,Kt=0,Dc=0,_c=null,u0=null,fn=0,Cc=null;function it(){return(ee&2)!==0&&J!==0?J&-J:y.T!==null?Rc():Ns()}function f0(){if(nt===0)if((J&536870912)===0||$){var e=wn;wn<<=1,(wn&3932160)===0&&(wn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,a){(e===ue&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ma(e,J,nt,!1)),_l(e,a),((ee&2)===0||e!==ue)&&(e===ue&&((ee&2)===0&&(Ya|=a),he===4&&ma(e,J,nt,!1)),Et(e))}function d0(e,t,a){if((ee&6)!==0)throw Error(d(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?fd(e,t):Hc(e,t,!0),i=l;do{if(n===0){vl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!rd(a)){n=Hc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=un;var r=s.current.memoizedState.isDehydrated;if(r&&(Sl(s,o).flags|=256),o=Hc(s,o,!1),o!==2){if(wc&&!r){s.errorRecoveryDisabledLanes|=i,Ya|=i,n=4;break e}i=Ze,Ze=n,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!ra);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=bi+300-Fe(),10<n)){if(ma(l,t,nt,!ra),Tn(l,0,!0)!==0)break e;Kt=t,l.timeoutHandle=X0(m0.bind(null,l,a,Ze,xi,Tc,t,nt,Ya,xl,ra,i,"Throttled",-0,0),n);break e}m0(l,a,Ze,xi,Tc,t,nt,Ya,xl,ra,i,null,-0,0)}}break}while(!0);Et(e)}function m0(e,t,a,l,n,i,o,s,r,p,x,z,h,b){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ct},i0(t,i,z);var _=(i&62914560)===i?bi-Fe():(i&4194048)===i?r0-Fe():0;if(_=Kd(z,_),_!==null){Kt=i,e.cancelPendingCommit=_(S0.bind(null,e,t,i,a,l,n,o,s,r,x,z,null,h,b)),ma(e,i,o,!p);return}}S0(e,t,i,a,l,n,o,s,r)}function rd(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~Ec,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Ie(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&js(e,a,t)}function yi(){return(ee&6)===0?(dn(0),!1):!0}function Oc(){if(Z!==null){if(le===0)var e=Z.return;else e=Z,Bt=_a=null,Wo(e),fl=null,Kl=0,e=Z;for(;e!==null;)Vu(e.alternate,e),e=e.return;Z=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Td(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Kt=0,Oc(),ue=e,Z=a=Ht(e.current,null),J=t,le=0,lt=null,ra=!1,vl=Dl(e,t),wc=!1,xl=nt=Ec=Ya=ua=he=0,Ze=un=null,Tc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ie(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,Ln(),a}function g0(e,t){G=null,y.H=tn,t===ul||t===Wn?(t=Dr(),le=3):t===ko?(t=Dr(),le=4):le=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,Z===null&&(he=1,ri(e,ut(t,e.current)))}function p0(){var e=tt.current;return e===null?!0:(J&4194048)===J?gt===null:(J&62914560)===J||(J&536870912)!==0?e===gt:!1}function h0(){var e=y.H;return y.H=tn,e===null?tn:e}function b0(){var e=y.A;return y.A=cd,e}function Si(){he=4,ra||(J&4194048)!==J&&tt.current!==null||(vl=!0),(ua&134217727)===0&&(Ya&134217727)===0||ue===null||ma(ue,J,nt,!1)}function Hc(e,t,a){var l=ee;ee|=2;var n=h0(),i=b0();(ue!==e||J!==t)&&(xi=null,Sl(e,t)),t=!1;var o=he;e:do try{if(le!==0&&Z!==null){var s=Z,r=lt;switch(le){case 8:Oc(),o=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var p=le;if(le=0,lt=null,zl(e,s,r,p),a&&vl){o=0;break e}break;default:p=le,le=0,lt=null,zl(e,s,r,p)}}ud(),o=he;break}catch(x){g0(e,x)}while(!0);return t&&e.shellSuspendCounter++,Bt=_a=null,ee=l,y.H=n,y.A=i,Z===null&&(ue=null,J=0,Ln()),o}function ud(){for(;Z!==null;)v0(Z)}function fd(e,t){var a=ee;ee|=2;var l=h0(),n=b0();ue!==e||J!==t?(xi=null,vi=Fe()+500,Sl(e,t)):vl=Dl(e,t);e:do try{if(le!==0&&Z!==null){t=Z;var i=lt;t:switch(le){case 1:le=0,lt=null,zl(e,t,i,1);break;case 2:case 9:if(Er(i)){le=0,lt=null,x0(t);break}t=function(){le!==2&&le!==9||ue!==e||(le=7),Et(e)},i.then(t,t);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:Er(i)?(le=0,lt=null,x0(t)):(le=0,lt=null,zl(e,t,i,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var s=Z;if(o?nf(o):s.stateNode.complete){le=0,lt=null;var r=s.sibling;if(r!==null)Z=r;else{var p=s.return;p!==null?(Z=p,zi(p)):Z=null}break t}}le=0,lt=null,zl(e,t,i,5);break;case 6:le=0,lt=null,zl(e,t,i,6);break;case 8:Oc(),he=6;break e;default:throw Error(d(462))}}dd();break}catch(x){g0(e,x)}while(!0);return Bt=_a=null,y.H=l,y.A=n,ee=a,Z!==null?0:(ue=null,J=0,Ln(),he)}function dd(){for(;Z!==null&&!Uf();)v0(Z)}function v0(e){var t=Gu(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?zi(e):Z=t}function x0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Bu(a,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Bu(a,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Wo(t);default:Vu(a,t),t=Z=br(t,Zt),t=Gu(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?zi(e):Z=t}function zl(e,t,a,l){Bt=_a=null,Wo(t),fl=null,Kl=0;var n=t.return;try{if(ed(e,n,t,a,J)){he=1,ri(e,ut(a,e.current)),Z=null;return}}catch(i){if(n!==null)throw Z=n,i;he=1,ri(e,ut(a,e.current)),Z=null;return}t.flags&32768?($||l===1?e=!0:vl||(J&536870912)!==0?e=!1:(ra=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),y0(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){y0(t,ra);return}e=t.return;var a=ld(t.alternate,t,Zt);if(a!==null){Z=a;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);he===0&&(he=5)}function y0(e,t){do{var a=nd(e.alternate,e);if(a!==null){a.flags&=32767,Z=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=a}while(e!==null);he=6,Z=null}function S0(e,t,a,l,n,i,o,s,r){e.cancelPendingCommit=null;do ji();while(Me!==0);if((ee&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=zo,Qf(e,a,i,o,s,r),e===ue&&(Z=ue=null,J=0),yl=t,da=e,Kt=a,Dc=i,_c=n,u0=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hd(An,function(){return N0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,n=E.p,E.p=2,o=ee,ee|=4;try{id(e,t,a)}finally{ee=o,E.p=n,y.T=l}}Me=1,z0(),j0(),M0()}}function z0(){if(Me===1){Me=0;var e=da,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var l=E.p;E.p=2;var n=ee;ee|=4;try{a0(t,e);var i=Zc,o=sr(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&cr(s.ownerDocument.documentElement,s)){if(r!==null&&bo(s)){var p=r.start,x=r.end;if(x===void 0&&(x=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(x,s.value.length);else{var z=s.ownerDocument||document,h=z&&z.defaultView||window;if(h.getSelection){var b=h.getSelection(),_=s.textContent.length,k=Math.min(r.start,_),se=r.end===void 0?k:Math.min(r.end,_);!b.extend&&k>se&&(o=se,se=k,k=o);var m=or(s,k),u=or(s,se);if(m&&u&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==u.node||b.focusOffset!==u.offset)){var g=z.createRange();g.setStart(m.node,m.offset),b.removeAllRanges(),k>se?(b.addRange(g),b.extend(u.node,u.offset)):(g.setEnd(u.node,u.offset),b.addRange(g))}}}}for(z=[],b=s;b=b.parentNode;)b.nodeType===1&&z.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<z.length;s++){var S=z[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ui=!!Qc,Zc=Qc=null}finally{ee=n,E.p=l,y.T=a}}e.current=t,Me=2}}function j0(){if(Me===2){Me=0;var e=da,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var l=E.p;E.p=2;var n=ee;ee|=4;try{$u(e,t.alternate,t)}finally{ee=n,E.p=l,y.T=a}}Me=3}}function M0(){if(Me===4||Me===3){Me=0,Bf();var e=da,t=yl,a=Kt,l=u0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Me=5:(Me=0,yl=da=null,A0(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(fa=null),$i(a),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=y.T,n=E.p,E.p=2,y.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var s=l[o];i(s.value,{componentStack:s.stack})}}finally{y.T=t,E.p=n}}(Kt&3)!==0&&ji(),Et(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Cc?fn++:(fn=0,Cc=e):fn=0,dn(0)}}function A0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function ji(){return z0(),j0(),M0(),N0()}function N0(){if(Me!==5)return!1;var e=da,t=Dc;Dc=0;var a=$i(Kt),l=y.T,n=E.p;try{E.p=32>a?32:a,y.T=null,a=_c,_c=null;var i=da,o=Kt;if(Me=0,yl=da=null,Kt=0,(ee&6)!==0)throw Error(d(331));var s=ee;if(ee|=4,c0(i.current),n0(i,i.current,o,a),ee=s,dn(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Tl,i)}catch{}return!0}finally{E.p=n,y.T=l,A0(e,t)}}function w0(e,t,a){t=ut(a,t),t=uc(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(_l(e,2),Et(e))}function ne(e,t,a){if(e.tag===3)w0(e,e,a);else for(;t!==null;){if(t.tag===3){w0(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))){e=ut(a,e),a=Eu(2),l=ia(t,a,2),l!==null&&(Tu(a,l,t,e),_l(l,2),Et(l));break}}t=t.return}}function Uc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new sd;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(wc=!0,n.add(a),e=md.bind(null,e,t,a),t.then(e,e))}function md(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(J&a)===a&&(he===4||he===3&&(J&62914560)===J&&300>Fe()-bi?(ee&2)===0&&Sl(e,0):Ec|=a,xl===J&&(xl=0)),Et(e)}function E0(e,t){t===0&&(t=zs()),e=Ea(e,t),e!==null&&(_l(e,t),Et(e))}function gd(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),E0(e,a)}function pd(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),E0(e,a)}function hd(e,t){return Ki(e,t)}var Mi=null,jl=null,Bc=!1,Ai=!1,kc=!1,ga=0;function Et(e){e!==jl&&e.next===null&&(jl===null?Mi=jl=e:jl=jl.next=e),Ai=!0,Bc||(Bc=!0,vd())}function dn(e,t){if(!kc&&Ai){kc=!0;do for(var a=!1,l=Mi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-Ie(42|e)+1)-1,i&=n&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,C0(l,i))}else i=J,i=Tn(l,l===ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,C0(l,i));l=l.next}while(a);kc=!1}}function bd(){T0()}function T0(){Ai=Bc=!1;var e=0;ga!==0&&Ed()&&(e=ga);for(var t=Fe(),a=null,l=Mi;l!==null;){var n=l.next,i=D0(l,t);i===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(jl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ai=!0)),l=n}Me!==0&&Me!==5||dn(e),ga!==0&&(ga=0)}function D0(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-Ie(i),s=1<<o,r=n[o];r===-1?((s&a)===0||(s&l)!==0)&&(n[o]=Vf(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=ue,a=J,a=Tn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ji(l),$i(a)){case 2:case 8:a=ys;break;case 32:a=An;break;case 268435456:a=Ss;break;default:a=An}return l=_0.bind(null,e),a=Ki(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ji(l),e.callbackPriority=2,e.callbackNode=null,2}function _0(e,t){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ji()&&e.callbackNode!==a)return null;var l=J;return l=Tn(e,e===ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(d0(e,l,t),D0(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?_0.bind(null,e):null)}function C0(e,t){if(ji())return null;d0(e,t,!0)}function vd(){Dd(function(){(ee&6)!==0?Ki(xs,bd):T0()})}function Rc(){if(ga===0){var e=sl;e===0&&(e=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),ga=e}return ga}function O0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:On(""+e)}function H0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xd(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=O0((n[Le]||null).action),o=l.submitter;o&&(t=(t=o[Le]||null)?O0(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new kn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var r=o?H0(n,o):new FormData(n);nc(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=o?H0(n,o):new FormData(n),nc(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var qc=0;qc<So.length;qc++){var Yc=So[qc],yd=Yc.toLowerCase(),Sd=Yc[0].toUpperCase()+Yc.slice(1);xt(yd,"on"+Sd)}xt(fr,"onAnimationEnd"),xt(dr,"onAnimationIteration"),xt(mr,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(k2,"onTransitionRun"),xt(R2,"onTransitionStart"),xt(q2,"onTransitionCancel"),xt(gr,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function U0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var s=l[o],r=s.instance,p=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=p;try{i(n)}catch(x){Yn(x)}n.currentTarget=null,i=r}else for(o=0;o<l.length;o++){if(s=l[o],r=s.instance,p=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=p;try{i(n)}catch(x){Yn(x)}n.currentTarget=null,i=r}}}}function K(e,t){var a=t[Ii];a===void 0&&(a=t[Ii]=new Set);var l=e+"__bubble";a.has(l)||(B0(t,e,2,!1),a.add(l))}function Lc(e,t,a){var l=0;t&&(l|=4),B0(a,e,l,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[Ni]){e[Ni]=!0,Ts.forEach(function(a){a!=="selectionchange"&&(zd.has(a)||Lc(a,!1,e),Lc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Lc("selectionchange",!1,t))}}function B0(e,t,a,l){switch(df(t)){case 2:var n=Fd;break;case 8:n=$d;break;default:n=ls}a=n.bind(null,t,a,e),n=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Xc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=l.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Qa(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){l=i=o;continue e}s=s.parentNode}}l=l.return}Ls(function(){var p=i,x=io(a),z=[];e:{var h=pr.get(e);if(h!==void 0){var b=kn,_=e;switch(e){case"keypress":if(Un(a)===0)break e;case"keydown":case"keyup":b=p2;break;case"focusin":_="focus",b=fo;break;case"focusout":_="blur",b=fo;break;case"beforeblur":case"afterblur":b=fo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=l2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=v2;break;case fr:case dr:case mr:b=o2;break;case gr:b=y2;break;case"scroll":case"scrollend":b=t2;break;case"wheel":b=z2;break;case"copy":case"cut":case"paste":b=s2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Zs;break;case"toggle":case"beforetoggle":b=M2}var k=(t&4)!==0,se=!k&&(e==="scroll"||e==="scrollend"),m=k?h!==null?h+"Capture":null:h;k=[];for(var u=p,g;u!==null;){var S=u;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||m===null||(S=Hl(u,m),S!=null&&k.push(gn(u,S,g))),se)break;u=u.return}0<k.length&&(h=new b(h,_,null,a,x),z.push({event:h,listeners:k}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&a!==no&&(_=a.relatedTarget||a.fromElement)&&(Qa(_)||_[Va]))break e;if((b||h)&&(h=x.window===x?x:(h=x.ownerDocument)?h.defaultView||h.parentWindow:window,b?(_=a.relatedTarget||a.toElement,b=p,_=_?Qa(_):null,_!==null&&(se=N(_),k=_.tag,_!==se||k!==5&&k!==27&&k!==6)&&(_=null)):(b=null,_=p),b!==_)){if(k=Vs,S="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Zs,S="onPointerLeave",m="onPointerEnter",u="pointer"),se=b==null?h:Ol(b),g=_==null?h:Ol(_),h=new k(S,u+"leave",b,a,x),h.target=se,h.relatedTarget=g,S=null,Qa(x)===p&&(k=new k(m,u+"enter",_,a,x),k.target=g,k.relatedTarget=se,S=k),se=S,b&&_)t:{for(k=jd,m=b,u=_,g=0,S=m;S;S=k(S))g++;S=0;for(var B=u;B;B=k(B))S++;for(;0<g-S;)m=k(m),g--;for(;0<S-g;)u=k(u),S--;for(;g--;){if(m===u||u!==null&&m===u.alternate){k=m;break t}m=k(m),u=k(u)}k=null}else k=null;b!==null&&k0(z,h,b,k,!1),_!==null&&se!==null&&k0(z,se,_,k,!0)}}e:{if(h=p?Ol(p):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var I=er;else if(Is(h))if(tr)I=H2;else{I=C2;var O=_2}else b=h.nodeName,!b||b.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&lo(p.elementType)&&(I=er):I=O2;if(I&&(I=I(e,p))){Ps(z,I,a,x);break e}O&&O(e,h,p),e==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&ao(h,"number",h.value)}switch(O=p?Ol(p):window,e){case"focusin":(Is(O)||O.contentEditable==="true")&&(el=O,vo=p,Gl=null);break;case"focusout":Gl=vo=el=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,rr(z,a,x);break;case"selectionchange":if(B2)break;case"keydown":case"keyup":rr(z,a,x)}var X;if(go)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Pa?Fs(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(Ks&&a.locale!=="ko"&&(Pa||W!=="onCompositionStart"?W==="onCompositionEnd"&&Pa&&(X=Gs()):(It=x,so="value"in It?It.value:It.textContent,Pa=!0)),O=wi(p,W),0<O.length&&(W=new Qs(W,e,null,a,x),z.push({event:W,listeners:O}),X?W.data=X:(X=$s(a),X!==null&&(W.data=X)))),(X=N2?w2(e,a):E2(e,a))&&(W=wi(p,"onBeforeInput"),0<W.length&&(O=new Qs("onBeforeInput","beforeinput",null,a,x),z.push({event:O,listeners:W}),O.data=X)),xd(z,e,p,a,x)}U0(z,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Hl(e,a),n!=null&&l.unshift(gn(e,n,i)),n=Hl(e,t),n!=null&&l.push(gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function jd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k0(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var s=a,r=s.alternate,p=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||p===null||(r=p,n?(p=Hl(a,i),p!=null&&o.unshift(gn(a,p,r))):n||(p=Hl(a,i),p!=null&&o.push(gn(a,p,r)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Md=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function R0(e){return(typeof e=="string"?e:""+e).replace(Md,`
`).replace(Ad,"")}function q0(e,t){return t=R0(t),R0(e)===t}function ce(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Fa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Fa(e,""+l);break;case"className":_n(e,"class",l);break;case"tabIndex":_n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,a,l);break;case"style":qs(e,l,i);break;case"data":if(t!=="object"){_n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ce(e,t,"name",n.name,n,null),ce(e,t,"formEncType",n.formEncType,n,null),ce(e,t,"formMethod",n.formMethod,n,null),ce(e,t,"formTarget",n.formTarget,n,null)):(ce(e,t,"encType",n.encType,n,null),ce(e,t,"method",n.method,n,null),ce(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ct);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=On(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":K("beforetoggle",e),K("toggle",e),Dn(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pf.get(a)||a,Dn(e,a,l))}}function Vc(e,t,a,l,n,i){switch(a){case"style":qs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Fa(e,l):(typeof l=="number"||typeof l=="bigint")&&Fa(e,""+l);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ct);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Le]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Dn(e,a,l)}}}function _e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ce(e,t,i,o,a,null)}}n&&ce(e,t,"srcSet",a.srcSet,a,null),l&&ce(e,t,"src",a.src,a,null);return;case"input":K("invalid",e);var s=i=o=n=null,r=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":o=x;break;case"checked":r=x;break;case"defaultChecked":p=x;break;case"value":i=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,t));break;default:ce(e,t,l,x,a,null)}}Us(e,i,s,r,p,o,n,!1);return;case"select":K("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:ce(e,t,n,s,a,null)}t=i,a=o,e.multiple=!!l,t!=null?Wa(e,!!l,t,!1):a!=null&&Wa(e,!!l,a,!0);return;case"textarea":K("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:ce(e,t,o,s,a,null)}ks(e,l,n,i);return;case"option":for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null)&&(r==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ce(e,t,r,l,a,null));return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)K(mn[l],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ce(e,t,p,l,a,null)}return;default:if(lo(t)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&Vc(e,t,x,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ce(e,t,s,l,a,null))}function Nd(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,s=null,r=null,p=null,x=null;for(b in a){var z=a[b];if(a.hasOwnProperty(b)&&z!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=z;default:l.hasOwnProperty(b)||ce(e,t,b,null,l,z)}}for(var h in l){var b=l[h];if(z=a[h],l.hasOwnProperty(h)&&(b!=null||z!=null))switch(h){case"type":i=b;break;case"name":n=b;break;case"checked":p=b;break;case"defaultChecked":x=b;break;case"value":o=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:b!==z&&ce(e,t,h,b,l,z)}}to(e,o,s,r,p,x,i,n);return;case"select":b=o=s=h=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":b=r;default:l.hasOwnProperty(i)||ce(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":h=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==r&&ce(e,t,n,i,l,r)}t=s,a=o,l=b,h!=null?Wa(e,!!a,h,!1):!!l!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":b=h=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ce(e,t,s,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":h=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&ce(e,t,o,n,l,i)}Bs(e,h,b);return;case"option":for(var _ in a)h=a[_],a.hasOwnProperty(_)&&h!=null&&!l.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:ce(e,t,_,null,l,h));for(r in l)h=l[r],b=a[r],l.hasOwnProperty(r)&&h!==b&&(h!=null||b!=null)&&(r==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ce(e,t,r,h,l,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in a)h=a[k],a.hasOwnProperty(k)&&h!=null&&!l.hasOwnProperty(k)&&ce(e,t,k,null,l,h);for(p in l)if(h=l[p],b=a[p],l.hasOwnProperty(p)&&h!==b&&(h!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,t));break;default:ce(e,t,p,h,l,b)}return;default:if(lo(t)){for(var se in a)h=a[se],a.hasOwnProperty(se)&&h!==void 0&&!l.hasOwnProperty(se)&&Vc(e,t,se,void 0,l,h);for(x in l)h=l[x],b=a[x],!l.hasOwnProperty(x)||h===b||h===void 0&&b===void 0||Vc(e,t,x,h,l,b);return}}for(var m in a)h=a[m],a.hasOwnProperty(m)&&h!=null&&!l.hasOwnProperty(m)&&ce(e,t,m,null,l,h);for(z in l)h=l[z],b=a[z],!l.hasOwnProperty(z)||h===b||h==null&&b==null||ce(e,t,z,h,l,b)}function Y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wd(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,s=n.duration;if(i&&s&&Y0(o)){for(o=0,s=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],p=r.startTime;if(p>s)break;var x=r.transferSize,z=r.initiatorType;x&&Y0(z)&&(r=r.responseEnd,o+=x*(r<s?1:(s-p)/(r-p)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qc=null,Zc=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Ed(){var e=window.event;return e&&e.type==="popstate"?e===Jc?!1:(Jc=e,!0):(Jc=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,Td=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,Dd=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(e){return V0.resolve(null).then(e).catch(_d)}:X0;function _d(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Q0(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),wl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[Cl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&pn(e.ownerDocument.body);a=n}while(a);wl(t)}function Z0(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wc(a),Pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cd(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function Od(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pt(e.nextSibling),e===null))return null;return e}function K0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$?"||e.data==="$~"}function $c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hd(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function J0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function W0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function F0(e,t,a){switch(t=Ei(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pi(e)}var ht=new Map,$0=new Set;function Ti(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=E.d;E.d={f:Ud,r:Bd,D:kd,C:Rd,L:qd,m:Yd,X:Gd,S:Ld,M:Xd};function Ud(){var e=Jt.f(),t=yi();return e||t}function Bd(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?gu(t):Jt.r(e)}var Ml=typeof document>"u"?null:document;function I0(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$0.has(n)||($0.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),_e(t,"link",e),Ae(t),l.head.appendChild(t)))}}function kd(e){Jt.D(e),I0("dns-prefetch",e,null)}function Rd(e,t){Jt.C(e,t),I0("preconnect",e,t)}function qd(e,t,a){Jt.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=Al(e);break;case"script":i=Nl(e)}ht.has(i)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ht.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(hn(i))||t==="script"&&l.querySelector(bn(i))||(t=l.createElement("link"),_e(t,"link",e),Ae(t),l.head.appendChild(t)))}}function Yd(e,t){Jt.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nl(e)}if(!ht.has(i)&&(e=R({rel:"modulepreload",href:e},t),ht.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(i)))return}l=a.createElement("link"),_e(l,"link",e),Ae(l),a.head.appendChild(l)}}}function Ld(e,t,a){Jt.S(e,t,a);var l=Ml;if(l&&e){var n=Ka(l).hoistableStyles,i=Al(e);t=t||"default";var o=n.get(i);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(hn(i)))s.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ht.get(i))&&Pc(e,a);var r=o=l.createElement("link");Ae(r),_e(r,"link",e),r._p=new Promise(function(p,x){r.onload=p,r.onerror=x}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Di(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(i,o)}}}function Gd(e,t){Jt.X(e,t);var a=Ml;if(a&&e){var l=Ka(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=R({src:e,async:!0},t),(t=ht.get(n))&&es(e,t),i=a.createElement("script"),Ae(i),_e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Xd(e,t){Jt.M(e,t);var a=Ml;if(a&&e){var l=Ka(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=R({src:e,async:!0,type:"module"},t),(t=ht.get(n))&&es(e,t),i=a.createElement("script"),Ae(i),_e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function P0(e,t,a,l){var n=(n=Q.current)?Ti(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=Ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var i=Ka(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(hn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ht.set(e,a),i||Vd(n,e,a,o.state))),t&&l===null)throw Error(d(528,""));return o}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(a),a=Ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Al(e){return'href="'+st(e)+'"'}function hn(e){return'link[rel="stylesheet"]['+e+"]"}function ef(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Vd(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_e(t,"link",a),Ae(t),e.head.appendChild(t))}function Nl(e){return'[src="'+st(e)+'"]'}function bn(e){return"script[async]"+e}function tf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return t.instance=l,Ae(l),l;var n=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),_e(l,"style",n),Di(l,a.precedence,e),t.instance=l;case"stylesheet":n=Al(a.href);var i=e.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,Ae(i),i;l=ef(a),(n=ht.get(n))&&Pc(l,n),i=(e.ownerDocument||e).createElement("link"),Ae(i);var o=i;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),_e(i,"link",l),t.state.loading|=4,Di(i,a.precedence,e),t.instance=i;case"script":return i=Nl(a.src),(n=e.querySelector(bn(i)))?(t.instance=n,Ae(n),n):(l=a,(n=ht.get(i))&&(l=R({},a),es(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),_e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Di(l,a.precedence,e));return t.instance}function Di(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _i=null;function af(e,t,a){if(_i===null){var l=new Map,n=_i=new Map;n.set(a,l)}else n=_i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Cl]||i[we]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=l.get(o);s?s.push(i):l.set(o,[i])}}return l}function lf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Qd(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zd(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Al(l.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ci.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ae(i);return}i=t.ownerDocument||t,l=ef(l),(n=ht.get(n))&&Pc(l,n),i=i.createElement("link"),Ae(i);var o=i;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),_e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ci.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ts=0;function Kd(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ts===0&&(ts=62500*wd());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ts?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ci(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oi=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oi=new Map,t.forEach(Jd,e),Oi=null,Ci.call(e))}function Jd(e,t){if(!(t.state.loading&4)){var a=Oi.get(e);if(a)var l=a.get(null);else{a=new Map,Oi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Ci.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Wd(e,t,a,l,n,i,o,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function of(e,t,a,l,n,i,o,s,r,p,x,z){return e=new Wd(e,t,a,o,r,p,x,z,s),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=Ho(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Ro(i),e}function cf(e){return e?(e=ll,e):ll}function sf(e,t,a,l,n,i){n=cf(n),l.context===null?l.context=n:l.pendingContext=n,l=na(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ia(e,l,t),a!==null&&(Ke(a,e,t),Wl(a,e,t))}function rf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function as(e,t){rf(e,t),(e=e.alternate)&&rf(e,t)}function uf(e){if(e.tag===13||e.tag===31){var t=Ea(e,67108864);t!==null&&Ke(t,e,67108864),as(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=it();t=Fi(t);var a=Ea(e,t);a!==null&&Ke(a,e,t),as(e,t)}}var Ui=!0;function Fd(e,t,a,l){var n=y.T;y.T=null;var i=E.p;try{E.p=2,ls(e,t,a,l)}finally{E.p=i,y.T=n}}function $d(e,t,a,l){var n=y.T;y.T=null;var i=E.p;try{E.p=8,ls(e,t,a,l)}finally{E.p=i,y.T=n}}function ls(e,t,a,l){if(Ui){var n=ns(l);if(n===null)Xc(e,t,l,Bi,a),mf(e,l);else if(Pd(n,e,t,a,l))l.stopPropagation();else if(mf(e,l),t&4&&-1<Id.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=ja(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Ie(o);s.entanglements[1]|=r,o&=~r}Et(i),(ee&6)===0&&(vi=Fe()+500,dn(0))}}break;case 31:case 13:s=Ea(i,2),s!==null&&Ke(s,i,2),yi(),as(i,2)}if(i=ns(l),i===null&&Xc(e,t,l,Bi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Xc(e,t,l,null,a)}}function ns(e){return e=io(e),is(e)}var Bi=null;function is(e){if(Bi=null,e=Qa(e),e!==null){var t=N(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=V(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bi=e,null}function df(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kf()){case xs:return 2;case ys:return 8;case An:case Rf:return 32;case Ss:return 268435456;default:return 32}default:return 32}}var os=!1,ha=null,ba=null,va=null,xn=new Map,yn=new Map,xa=[],Id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mf(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function Sn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Pd(e,t,a,l,n){switch(t){case"focusin":return ha=Sn(ha,e,t,a,l,n),!0;case"dragenter":return ba=Sn(ba,e,t,a,l,n),!0;case"mouseover":return va=Sn(va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return xn.set(i,Sn(xn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,yn.set(i,Sn(yn.get(i)||null,e,t,a,l,n)),!0}return!1}function gf(e){var t=Qa(e.target);if(t!==null){var a=N(t);if(a!==null){if(t=a.tag,t===13){if(t=V(a),t!==null){e.blockedOn=t,ws(e.priority,function(){ff(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,ws(e.priority,function(){ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ns(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);no=l,a.target.dispatchEvent(l),no=null}else return t=Za(a),t!==null&&uf(t),e.blockedOn=a,!1;t.shift()}return!0}function pf(e,t,a){ki(e)&&a.delete(t)}function e1(){os=!1,ha!==null&&ki(ha)&&(ha=null),ba!==null&&ki(ba)&&(ba=null),va!==null&&ki(va)&&(va=null),xn.forEach(pf),yn.forEach(pf)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,os||(os=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,e1)))}var qi=null;function hf(e){qi!==e&&(qi=e,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){qi===e&&(qi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(is(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,nc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function wl(e){function t(r){return Ri(r,e)}ha!==null&&Ri(ha,e),ba!==null&&Ri(ba,e),va!==null&&Ri(va,e),xn.forEach(t),yn.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)gf(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Le]||null;if(typeof i=="function")o||hf(a);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Le]||null)s=o.formAction;else if(is(n)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),hf(a)}}}function bf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cs(e){this._internalRoot=e}Yi.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,l=it();sf(a,l,e,t,null,null)},Yi.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sf(e.current,2,null,e,null,null),yi(),t[Va]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ns();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&gf(e)}};var vf=A.version;if(vf!=="19.2.4")throw Error(d(527,vf,"19.2.4"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=M(t),e=e!==null?te(e):null,e=e===null?null:e.stateNode,e};var t1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Tl=Li.inject(t1),$e=Li}catch{}}return jn.createRoot=function(e,t){if(!U(e))throw Error(d(299));var a=!1,l="",n=Mu,i=Au,o=Nu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=of(e,1,!1,null,null,a,l,null,n,i,o,bf),e[Va]=t.current,Gc(e),new cs(t)},jn.hydrateRoot=function(e,t,a){if(!U(e))throw Error(d(299));var l=!1,n="",i=Mu,o=Au,s=Nu,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=of(e,1,!0,t,a??null,l,n,r,i,o,s,bf),t.context=cf(null),a=t.current,l=it(),l=Fi(l),n=na(l),n.callback=null,ia(a,n,l),a=l,t.current.lanes=a,_l(t,a),Et(t),e[Va]=t.current,Gc(e),new Yi(t)},jn.version="19.2.4",jn}var Ef;function f1(){if(Ef)return us.exports;Ef=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(A){console.error(A)}}return v(),us.exports=u1(),us.exports}var d1=f1();const ps="/portfolio/assets/Gemini_Generated_Image_n8fs5qn8fs5qn8fs-Photoroom-C3DaP8dh.png",gs=[{label:"Home",target:"home"},{label:"About",target:"about"},{label:"Dev",target:"dev"},{label:"Graphics",target:"graphics"},{label:"Experience",target:"experience"},{label:"Tools",target:"tools"},{label:"Contact",target:"contact"}];function m1(){const[v,A]=bt.useState(!1),[H,d]=bt.useState(!1),[U,N]=bt.useState("home");bt.useEffect(()=>{const w=()=>{d(window.scrollY>20);for(const D of[...gs].reverse()){const M=document.getElementById(D.target);if(M&&window.scrollY>=M.offsetTop-120){N(D.target);break}}};return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]),bt.useEffect(()=>(document.body.style.overflow=v?"hidden":"",()=>{document.body.style.overflow=""}),[v]);const V=w=>{const D=document.getElementById(w);D&&(D.scrollIntoView({behavior:"smooth"}),N(w)),A(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 0 1.5rem;
          font-family: 'DM Sans', sans-serif;
        }

        .header.scrolled {
          background: rgba(8, 8, 12, 0.94);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 200, 80, 0.12);
          box-shadow: 0 4px 40px rgba(0,0,0,0.6);
        }

        .header-inner {
          max-width: 1300px;
          margin: 0 auto;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        /* ── Logo ── */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }

        .avatar-ring {
          width: 42px; height: 42px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #ffc850, #ff8c00);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .logo:hover .avatar-ring { transform: scale(1.08); }

        .avatar-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a22;
        }

        .avatar-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-align: left;
        }

        .logo-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.08em;
          color: #fff;
          transition: color 0.2s;
        }

        .logo:hover .logo-name { color: #ffc850; }

        .logo-tagline {
          font-size: 0.58rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ffc850;
          margin-top: 3px;
        }

        /* ── Desktop Nav ── */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .nav-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.45rem 0.7rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
          white-space: nowrap;
        }

        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px;
          background: #ffc850;
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-btn:hover { color: #fff; }
        .nav-btn:hover::after { width: 60%; }
        .nav-btn.active { color: #ffc850; }
        .nav-btn.active::after { width: 60%; }

        .cta-btn {
          margin-left: 0.75rem;
          padding: 0.5rem 1.1rem;
          background: #ffc850;
          color: #08080c;
          border: none;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .cta-btn:hover {
          background: #fff;
          transform: translateY(-1px);
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
          flex-shrink: 0;
        }

        .hamburger span {
          display: block;
          width: 26px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          background: #ffc850;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          background: #ffc850;
        }

        /* ── Mobile full-screen menu ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #08080c;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          overflow: hidden;
          padding: 2rem 1.5rem;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-avatar {
          width: 60px; height: 60px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #ffc850, #ff8c00);
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }

        .mobile-avatar-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a22;
        }

        .mobile-avatar-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .mobile-nav-btn {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 7vw, 2.6rem);
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.18);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
          line-height: 1.25;
          padding: 0;
          width: 100%;
          text-align: center;
        }

        .mobile-nav-btn:hover,
        .mobile-nav-btn.active {
          color: #ffc850;
          transform: translateX(8px);
        }

        .mobile-divider {
          width: 60px; height: 1px;
          background: rgba(255,200,80,0.3);
          margin: 0.85rem 0;
          flex-shrink: 0;
        }

        .mobile-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        /* ── Hire me button in mobile menu ── */
        .mobile-cta {
          margin-top: 0.5rem;
          padding: 0.65rem 2rem;
          background: #ffc850;
          color: #08080c;
          border: none;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .mobile-cta:hover { background: #fff; }

        /* ── Breakpoints ── */
        @media (max-width: 1060px) {
          .nav-btn { padding: 0.45rem 0.5rem; font-size: 0.65rem; }
        }

        @media (max-width: 860px) {
          .nav-desktop { display: none; }
          .hamburger { display: flex; }
        }
      `}),c.jsx("header",{className:`header${H?" scrolled":""}`,children:c.jsxs("div",{className:"header-inner",children:[c.jsxs("button",{className:"logo",onClick:()=>V("home"),children:[c.jsx("div",{className:"avatar-ring",children:c.jsx("div",{className:"avatar-inner",children:c.jsx("img",{src:ps,alt:"Marlon Ampoon"})})}),c.jsxs("div",{className:"logo-text",children:[c.jsx("span",{className:"logo-name",children:"Marlon Ampoon"}),c.jsx("span",{className:"logo-tagline",children:"Web Dev · Graphic Artist"})]})]}),c.jsxs("nav",{className:"nav-desktop",children:[gs.map(w=>c.jsx("button",{className:`nav-btn${U===w.target?" active":""}`,onClick:()=>V(w.target),children:w.label},w.target)),c.jsx("button",{className:"cta-btn",onClick:()=>V("contact"),children:"Hire Me"})]}),c.jsxs("button",{className:`hamburger${v?" open":""}`,onClick:()=>A(!v),"aria-label":"Toggle menu",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})}),c.jsxs("div",{className:`mobile-menu${v?" open":""}`,children:[c.jsx("div",{className:"mobile-avatar",children:c.jsx("div",{className:"mobile-avatar-inner",children:c.jsx("img",{src:ps,alt:"Marlon Ampoon"})})}),gs.map(w=>c.jsx("button",{className:`mobile-nav-btn${U===w.target?" active":""}`,onClick:()=>V(w.target),children:w.label},w.target)),c.jsx("div",{className:"mobile-divider"}),c.jsx("button",{className:"mobile-cta",onClick:()=>V("contact"),children:"Hire Me"}),c.jsx("div",{className:"mobile-divider",style:{marginTop:"0.85rem"}}),c.jsx("span",{className:"mobile-tagline",children:"Web Dev · Graphic Artist"})]})]})}function g1(){const v=[{num:"5+",label:"Years Experience"},{num:"5",label:"Projects Completed"},{num:"8+",label:"Happy Clients"},{num:"5",label:"Fields of Mastery"}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ══════════════════════════════════════════════════════════════
           ABOUT — BASE (Desktop first, then scale down)
        ══════════════════════════════════════════════════════════════ */
        .about-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .about-wrapper::before {
          content: '';
          position: absolute;
          bottom: -15%; right: -8%;
          width: 650px; height: 650px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 68%);
          pointer-events: none;
        }

        .about-wrapper::after {
          content: '';
          position: absolute;
          top: -10%; left: -10%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Layout container ── */
        .about-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        /* ══════════════════════════════════════
           LEFT COLUMN
        ══════════════════════════════════════ */
        .about-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .about-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .about-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .about-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }

        .about-section-heading span { color: #ffc850; }

        /* ══════════════════════════════════════
           RIGHT COLUMN
        ══════════════════════════════════════ */
        .about-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        /* ── Pills ── */
        .about-intro-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .about-intro-pill {
          padding: 0.3rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }

        /* ── Bio ── */
        .about-bio-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.02rem);
          color: rgba(255,255,255,0.52);
          line-height: 1.9;
          font-weight: 300;
        }

        .about-bio strong { color: #fff; font-weight: 500; }
        .about-bio em     { color: #ffc850; font-style: normal; }

        /* ── VA callout ── */
        .about-secondary {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.2rem 1.4rem;
          border: 1px solid rgba(255,255,255,0.07);
          border-left: 2px solid rgba(255,200,80,0.45);
          border-radius: 2px;
          background: rgba(255,200,80,0.03);
          transition: background 0.25s, border-left-color 0.25s;
        }

        .about-secondary:hover {
          background: rgba(255,200,80,0.05);
          border-left-color: rgba(255,200,80,0.7);
        }

        .about-secondary-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 1px;
          opacity: 0.75;
        }

        .about-secondary p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          font-weight: 300;
          margin: 0;
        }

        .about-secondary p strong {
          color: rgba(255,255,255,0.62);
          font-weight: 500;
        }

        /* ── Divider ── */
        .about-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Stats ── */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .about-stat {
          padding: 1.2rem 1rem;
          background: rgba(8,8,12,0.95);
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: background 0.2s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .about-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #ffc850;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .about-stat:hover { background: rgba(255,200,80,0.05); }
        .about-stat:hover::before { transform: scaleX(1); }

        .about-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #ffc850;
          line-height: 1;
        }

        .about-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── CTA ── */
        .about-cta {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .about-cta-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
        }

        .about-cta-btn {
          padding: 0.7rem 1.6rem;
          background: transparent;
          color: #ffc850;
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.25s, border-color 0.25s;
        }

        .about-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ffc850;
          transform: translateX(-101%);
          transition: transform 0.25s ease;
          z-index: 0;
        }

        .about-cta-btn span {
          position: relative;
          z-index: 1;
        }

        .about-cta-btn:hover::before { transform: translateX(0); }
        .about-cta-btn:hover { color: #08080c; border-color: #ffc850; }


        /* ══════════════════════════════════════════════════════════════
           TABLET  ≤ 900px
           — unstick left, keep side-by-side but tighten gap
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .about-inner {
            padding: 5rem 2.5rem;
            gap: 3rem;
          }

          .about-left {
            position: static;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           MOBILE  ≤ 680px
           — stack into single column
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .about-inner {
            padding: 4.5rem 1.5rem 5rem;
            flex-direction: column;
            gap: 0;
          }

          /* Left block becomes a compact header */
          .about-left {
            margin-bottom: 2rem;
          }

          .about-section-heading {
            font-size: clamp(3.2rem, 16vw, 4.5rem);
            line-height: 0.88;
          }

          /* Slightly tighter content spacing on mobile */
          .about-right {
            gap: 1.5rem;
          }

          .about-bio {
            font-size: 0.95rem;
          }

          /* Stats: 2-column on mobile */
          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-stat {
            padding: 1.1rem 1rem;
          }

          /* CTA stacks cleanly */
          .about-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }

          .about-cta-btn {
            width: 100%;
            text-align: center;
            padding: 0.85rem 1rem;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 400px) {
          .about-inner {
            padding: 4rem 1.25rem 4.5rem;
          }

          .about-section-heading {
            font-size: 3rem;
          }

          .about-intro-pill {
            font-size: 0.56rem;
            padding: 0.25rem 0.65rem;
          }

          .about-stat-num {
            font-size: 1.75rem;
          }

          .about-stat-label {
            font-size: 0.5rem;
          }

          .about-secondary {
            padding: 1rem 1rem;
          }

          .about-secondary p {
            font-size: 0.78rem;
          }
        }
      `}),c.jsx("section",{className:"about-wrapper",id:"about",children:c.jsxs("div",{className:"about-inner",children:[c.jsxs("div",{className:"about-left",children:[c.jsx("span",{className:"about-section-tag",children:"Who I Am"}),c.jsxs("h2",{className:"about-section-heading",children:["About",c.jsx("br",{}),c.jsx("span",{children:"Me"})]})]}),c.jsxs("div",{className:"about-right",children:[c.jsxs("div",{className:"about-intro-line",children:[c.jsx("span",{className:"about-intro-pill",children:"Web Developer"}),c.jsx("span",{className:"about-intro-pill",children:"Graphic Artist"})]}),c.jsxs("div",{className:"about-bio-block",children:[c.jsxs("p",{className:"about-bio",children:["I'm ",c.jsx("strong",{children:"Marlon Ampoon"})," — a ",c.jsx("em",{children:"Web Developer"})," and ",c.jsx("em",{children:"Graphic Artist"})," passionate about helping people and businesses succeed online. I build websites that don't just look great — they work smoothly, load fast, and make a real impact for the people behind them."]}),c.jsxs("p",{className:"about-bio",children:["I find genuine fulfillment in taking ",c.jsx("strong",{children:"technical challenges"})," and transforming them into clean, functional solutions. Whether it's crafting a responsive frontend from scratch, designing a cohesive brand identity, or producing bold digital graphics — I bring both the"," ",c.jsx("strong",{children:"engineering precision"})," and the ",c.jsx("strong",{children:"visual sensibility"}),"."]}),c.jsxs("p",{className:"about-bio",children:["Every project I take on gets my full commitment — not just to meet the brief, but to"," ",c.jsx("em",{children:"exceed it"}),". I believe great work comes from clear communication, attention to detail, and a genuine willingness to go the extra mile. If there's a way I can help you achieve your goals, I'd be honored to be a part of that journey."]})]}),c.jsxs("div",{className:"about-secondary",children:[c.jsx("span",{className:"about-secondary-icon",children:"💼"}),c.jsxs("p",{children:["I also offer ",c.jsx("strong",{children:"Virtual Assistant support"})," as a secondary service — drawing on my background in organization, clear communication, and adaptability to help clients with day-to-day operational tasks when needed."]})]}),c.jsx("div",{className:"about-divider"}),c.jsx("div",{className:"about-stats",children:v.map(A=>c.jsxs("div",{className:"about-stat",children:[c.jsx("span",{className:"about-stat-num",children:A.num}),c.jsx("span",{className:"about-stat-label",children:A.label})]},A.label))}),c.jsxs("div",{className:"about-cta",children:[c.jsx("span",{className:"about-cta-text",children:"Interested in working together?"}),c.jsx("button",{className:"about-cta-btn",onClick:()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),children:c.jsx("span",{children:"Let's Talk →"})})]})]})]})})]})}const p1="/portfolio/assets/Screenshot%202026-08-17%20132006-lbDnbE5J.png",h1="/portfolio/assets/Screenshot%202026-08-17%20132015-DJ1d2r8m.png",b1="/portfolio/assets/Screenshot%202026-08-17%20132024-Di7Nr3mP.png",v1="/portfolio/assets/Screenshot%202026-08-17%20132038-BHH5YG9r.png",x1="/portfolio/assets/Screenshot%202026-08-17%20132046-CtimeaKX.png",y1="/portfolio/assets/Screenshot%202026-08-17%20132055-Cor9CroS.png",S1="/portfolio/assets/Screenshot%202026-08-17%20132109-BK1lPokE.png",z1="/portfolio/assets/Screenshot%202026-08-17%20132117-BfOCWzCj.png",j1="/portfolio/assets/Screenshot%202026-08-17%20132124-11FEJ0ce.png",M1="/portfolio/assets/Screenshot%202026-08-17%20132133-ClXrjYiS.png",A1="/portfolio/assets/Screenshot%202026-08-17%20132140-DyMbqCH9.png",N1="/portfolio/assets/Screenshot%202026-08-17%20132148-D4wN7855.png",w1="/portfolio/assets/Screenshot%202026-08-17%20132158-gKn6laJ6.png",E1="/portfolio/assets/Screenshot%202026-08-17%20132208-DB243JjA.png",T1="/portfolio/assets/Screenshot%202026-08-17%20132216-mB_CbCna.png",D1="/portfolio/assets/Screenshot%202026-08-17%20132230-CK2jIJJz.png",_1="/portfolio/assets/Screenshot%202026-08-17%20132238-D1_Ey7vv.png",C1="/portfolio/assets/Screenshot%202026-02-28%20022631-BSz9lo5z.png",O1="/portfolio/assets/Screenshot%202026-02-28%20023155-CYkn5XM7.png",H1="/portfolio/assets/Screenshot%202026-02-28%20023643-X0tgNWxq.png",U1="/portfolio/assets/657520324_122128339581079271_413717394934998652_n-CgPtK1AR.jpg",B1="/portfolio/assets/657523475_122128339845079271_5936915331887691005_n-BxS4bllb.jpg",k1="/portfolio/assets/657525265_122128339719079271_5688376841275939431_n-D_hD4lUJ.jpg",R1="/portfolio/assets/657675461_122128340217079271_103663688234942863_n-D9D7admp.jpg",q1="/portfolio/assets/658154758_122128340319079271_8594505295325550939_n-DlOIgt0c.jpg",Y1="/portfolio/assets/658221870_122128339755079271_3023340636135234144_n-_Veqr_GL.jpg",L1="/portfolio/assets/659130268_122128339677079271_3786608590482122565_n-BlTcnOON.jpg",G1="/portfolio/assets/659172919_122128339545079271_8074764372666652035_n-oFM9etvk.jpg",X1="/portfolio/assets/659566311_122128339803079271_3539499664342588014_n-BzB5FVQi.jpg",V1="/portfolio/assets/659642222_122128340115079271_7906012138457610164_n-DA5GPuqE.jpg",Q1="/portfolio/assets/659700554_122128339635079271_4434395129980663555_n-DtlqQhKe.jpg",Z1="/portfolio/assets/659876406_122128339965079271_2556805708608569485_n-CDR4_RZz.jpg",K1="/portfolio/assets/660295965_122128339503079271_8104245686776742900_n-PSFGTrf9.jpg",J1="/portfolio/assets/660403233_122128340061079271_7486745113921762045_n-DHINQK07.jpg",W1="/portfolio/assets/660537003_122128340265079271_6786351733289619190_n-BzKxGs3c.jpg",F1="/portfolio/assets/660616485_122128340163079271_6893266438101061807_n-Dbv4ZCpS.jpg",$1="/portfolio/assets/660995204_122128339911079271_5549167849317527942_n-jocLfbn6.jpg",I1="/portfolio/assets/661803070_122128340013079271_7204857263889233147_n-CyOdlzxs.jpg",P1="/portfolio/assets/Screenshot%202026-08-24%20012038-ByJ44Ybg.png",em="/portfolio/assets/Screenshot%202026-08-24%20012049-B83IE7D2.png",tm="/portfolio/assets/Screenshot%202026-08-24%20012057-D2OsEZfN.png",am="/portfolio/assets/Screenshot%202026-08-24%20012108-DwW3Wv-X.png",lm="/portfolio/assets/Screenshot%202026-08-24%20012119-nNnwqEW4.png",nm="/portfolio/assets/Screenshot%202026-08-24%20012134-CZkfSCeS.png",im="/portfolio/assets/Screenshot%202026-08-24%20012142-D5BsqzJg.png",om="/portfolio/assets/Screenshot%202026-08-24%20012149-DMoY6waD.png",cm="/portfolio/assets/Screenshot%202026-08-24%20012203-C38I8elS.png",sm="/portfolio/assets/Screenshot%202026-08-24%20012214-C7GWm0sc.png",rm="/portfolio/assets/Screenshot%202026-08-22%20003203-RPhh3jeb.png",um="/portfolio/assets/Screenshot%202026-08-24%20015939-VfzopeGu.png",fm="/portfolio/assets/Screenshot%202026-08-24%20015950-CEzCn_QJ.png",dm="/portfolio/assets/Screenshot%202026-08-24%20015957-mAxd-_Oj.png",mm="/portfolio/assets/Screenshot%202026-08-24%20020005-BOXy2VFE.png",gm="/portfolio/assets/Screenshot%202026-08-24%20020044-CqMi_ieY.png",pm="/portfolio/assets/Screenshot%202026-08-24%20020051-C_Iw8M8M.png",hm="/portfolio/assets/Screenshot%202026-08-24%20020058-BbimO6pQ.png",bm="/portfolio/assets/Screenshot%202026-08-24%20020107-8jJ1qRch.png",vm="/portfolio/assets/Screenshot%202026-08-24%20020129-BYtGKhNh.png",xm="/portfolio/assets/Screenshot%202026-08-24%20020137-Bs0at7tC.png",ym="/portfolio/assets/Screenshot%202026-08-24%20020144-0grJgM4d.png",Sm="/portfolio/assets/Screenshot%202026-08-24%20020154-CbsT0dR-.png",zm="/portfolio/assets/Screenshot%202026-08-24%20020201-CY4PG4GW.png",jm="/portfolio/assets/Screenshot%202026-08-24%20020217-B2fdxwKY.png",Mm="/portfolio/assets/Screenshot%202026-08-24%20020227-Dl5U-FGh.png",Am="/portfolio/assets/Screenshot%202026-08-24%20020234-SPlw5WRI.png",Nm="/portfolio/assets/Screenshot%202026-08-24%20020242-uYS5a60d.png",wm="/portfolio/assets/Screenshot%202026-08-24%20020250-DGpeNlD5.png",Em="/portfolio/assets/Screenshot%202026-08-24%20020300-DvI3ei-7.png",Tm="/portfolio/assets/Screenshot%202026-08-24%20020310-DtleR87N.png",Dm="/portfolio/assets/Screenshot%202026-08-24%20020324-C6b8Qv7A.png",_m="/portfolio/assets/Screenshot%202026-08-24%20020337-6IeIqEYB.png",Cm="/portfolio/assets/track8out-01-CSisHVdk.jpg",Om="/portfolio/assets/track8out-02-CRcSOi71.jpg",Hm="/portfolio/assets/track8out-03-DaVqX3IU.jpg",Um="/portfolio/assets/track8out-04-CCg_7iB7.jpg",Bm="/portfolio/assets/track8out-05-CB3mNWIa.jpg",km="/portfolio/assets/track8out-06-D7TzHjXJ.jpg",Rm="/portfolio/assets/track8out-07-u8ZLbQod.jpg",qm="/portfolio/assets/track8out-08-CxkRFGFm.jpg",Ym="/portfolio/assets/track8out-09-CNNUr7oO.jpg",Lm="/portfolio/assets/track8out-10-BrmlUEMI.jpg",Gm="/portfolio/assets/track8out-11-C8R1H5_M.jpg",Xm="/portfolio/assets/track8out-12-CmwCKxbo.jpg",Vm="/portfolio/assets/track8out-13-naBmCtf0.jpg",Qm="/portfolio/assets/track8out-14-CBmOxvbP.jpg",Zm="/portfolio/assets/track8out-15-BfvvDyRU.jpg",Km="/portfolio/assets/track8out-16-BsCm98RU.jpg",Jm="/portfolio/assets/track8out-17-BPGijN8Z.jpg",Wm="/portfolio/assets/track8out-18-Dj62GGjL.jpg",Fm="/portfolio/assets/track8out-19-CWB2jwFf.jpg",$m="/portfolio/assets/track8out-20-BCSRidx2.jpg",Im="/portfolio/assets/track8out-21-D7R6Of0w.jpg",Pm="/portfolio/assets/track8out-22-DrtCOUY0.jpg",e5="/portfolio/assets/track8out-23-CNj-GenI.jpg",t5="/portfolio/assets/track8out-24-DDz4GBRR.jpg",La=[{id:6,images:[Bm,Cm,Om,Hm,Um,km,Rm,qm,Ym,Lm,Gm,Xm,Vm,Qm,Zm,Km,Jm,Wm,Fm,$m,Im,Pm,e5,t5],title:"Track8out",subtitle:"Budget, Expense & Savings Tracker",description:"A mobile budget tracking app that helps users monitor monthly income, expenditures, and savings in one place. Log transactions by category, review recent activity, and keep a running pulse on personal finances — track today, plan tomorrow.",tags:["Mobile App","iOS / Android","Budget & Finance","Expense Tracking"],type:"Mobile Application",year:"2026",carousel:!0,link:{label:"Download APK",url:"https://drive.google.com/file/d/1xACkvQmTqA1zIyj2rB5l6BZckzVorJcb/view?usp=drive_link"}},{id:4,images:[U1,B1,k1,R1,q1,Y1,L1,G1,X1,V1,Q1,Z1,K1,J1,W1,F1,$1,I1],title:"Tetelestai Bible",subtitle:"Scripture Reading & Study Companion",description:"A mobile Bible app for reading, bookmarking, and journaling scripture. Lets users save verses, tag personal notes as General, Prayer, Study, or Reflection, and revisit their spiritual journey through a clean, distraction-free reading experience.",tags:["Mobile App","iOS / Android","Faith & Reading","Notes & Bookmarks"],type:"Mobile Application",year:"2026",carousel:!0,link:{label:"Download APK",url:"https://drive.google.com/file/d/1jQZBy2oId9BuqMHeB9NTXVmEgBCt2WLx/view?usp=drivesdk"}},{id:7,images:[P1,em,tm,am,lm,nm,im,om,cm,sm],title:"ARK System",subtitle:"Church Membership Management System",description:"A membership management system built for a local church in Baguio. Keeps track of member records, attendance, and church activities in one organized platform, replacing manual, paper-based tracking with a simple digital workflow.",tags:["Web App","Membership Management","Community","Church"],type:"Membership Management System",year:"2026",link:{label:"Visit Site",url:"https://time8out.github.io/ARK/"}},{id:0,images:[p1,h1,b1,v1,x1,y1,S1,z1,j1,M1,A1,N1,w1,E1,T1,D1,_1],title:"Time8out",subtitle:"Employee Time & Payroll Management Platform",description:"Time8out is an employee time management platform built for small businesses. Handles shift logging, break tracking, automatic deduction computation, and real-time payslip generation — giving employers a live dashboard of who's clocked in, on break, and accruing pay.",tags:["Web App","SaaS","Time Tracking","Payroll"],type:"Time & Payroll Platform",year:"2026",link:{label:"Visit Site",url:"https://time8out.com/"}},{id:1,images:[C1],title:"Steinposner Century 21 (WordPress)",subtitle:"All-in-One Agent Marketing Hub — Original Build",description:"A centralized marketing platform built exclusively for Century 21 Steinposner agents. Consolidates vendor hiring, flyer creation, postcard delivery, email marketing, and social media boosting — all under one roof. Eliminates the need for agents to juggle multiple platforms to fulfill their listing and marketing needs.",tags:["Web App","WordPress","E-Commerce","Real Estate"],type:"Marketing Platform (WordPress)",year:"2025",link:{label:"Visit Site",url:"https://spagenthub.com/"}},{id:8,images:[um,fm,dm,mm,gm,pm,hm,bm,vm,xm,ym,Sm,zm,jm,Mm,Am,Nm,wm,Em,Tm,Dm,_m],title:"Steinposner Century 21 (React)",subtitle:"All-in-One Agent Marketing Hub — React.js Rebuild",description:"A ground-up rebuild of the Steinposner Century 21 agent marketing hub as a React.js single-page app, replacing the original WordPress site. Same core toolset — vendor hiring, flyer creation, postcard delivery, email marketing, and social media boosting — now running on a faster, more maintainable modern stack.",tags:["Web App","React.js","SPA","Real Estate"],type:"Marketing Platform (React Rebuild)",year:"2026",link:{label:"Visit Site",url:"https://sp-agent-hub-service.onrender.com/"}},{id:2,images:[O1],title:"Women's Health & Cosmetics",subtitle:"Health & Beauty Storefront",description:"An e-commerce store dedicated to women's health and well-being. Features a curated catalog of cosmetic and healthcare products with a clean, confidence-inspiring shopping experience designed to resonate with its target audience.",tags:["E-Commerce","Health & Beauty","Storefront","UI Design"],type:"E-Commerce Store",year:"2025",link:{label:"Visit Site",url:"https://themedpsahb.com/"}},{id:3,images:[H1],title:"Salon Beauty Supply",subtitle:"Professional Beauty E-Commerce",description:"A professional e-commerce store for salon-grade beauty supplies. Built for both retail customers and salon professionals, offering a streamlined product browsing and purchasing experience for hair, skin, and beauty essentials.",tags:["E-Commerce","Beauty Supply","Retail","Storefront"],type:"E-Commerce Store",year:"2024",link:{label:"Visit Site",url:"https://alfalfanailsupply.com/"}},{id:5,images:[rm],title:"ReDoIt",subtitle:"Visual Markup & Revision Tool",description:"A browser-based markup tool for project managers and teams. Load any website, drop doodles, arrows, boxes, pins, and written instructions directly onto the page, then save the annotated view as a screenshot to send to the team for faster, clearer revisions.",tags:["Web App","Collaboration","Feedback Tool","Productivity"],type:"Markup & Review Tool",year:"2026",link:{label:"Visit Site",url:"https://redoit.onrender.com/"}}],a5="/portfolio/assets/933cd4_1aafcabfda344c27bef126f787c6b836~mv2-C_-aS_qq.avif",l5="/portfolio/assets/933cd4_2869364afdcf4eb5b9e299e8bda32877~mv2-CuDmyAXB.avif",n5="/portfolio/assets/933cd4_5944f00d1bba47d9b716947b730ddbb6~mv2-een8vvRJ.avif",i5="/portfolio/assets/933cd4_7bbffb687d614ddaac513b5a4e311fca~mv2-M9SgtDLT.avif",o5="/portfolio/assets/933cd4_926983c740894abb8ac182274902944d~mv2-DfIpsNzm.avif",c5="/portfolio/assets/933cd4_dbf9407c2a644000b8d166788f5912b4~mv2-20830coT.avif",s5="/portfolio/assets/933cd4_f316234cf9234290b7ed386311f25f51~mv2-BAU8Ye_R.avif",r5="/portfolio/assets/933cd4_3ac0114869eb44d0855219d595bfecad~mv2-DO6FPEcl.avif",u5="/portfolio/assets/933cd4_3b3dd834628c4f339ffa0cf74dd08ff1~mv2-PwzQdHPs.avif",f5="/portfolio/assets/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2-BS6j50fD.avif",d5="/portfolio/assets/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2-BS6j50fD.avif",m5="/portfolio/assets/933cd4_8438c1598fe245c39abd32a4f94cf9d8~mv2-BiJANzbf.avif",Tf="/portfolio/assets/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2-DrlBuFEo.avif",g5="/portfolio/assets/933cd4_9d4f19587062449ebb358c1ef4385016~mv2-BGBD0Qql.avif",p5="/portfolio/assets/933cd4_a743d93c251e4706a8cc00391c99df64~mv2-Cx0-4rjh.avif",h5="/portfolio/assets/933cd4_a992971364804dff87196a63b69c4f95~mv2-DfqSCJJe.avif",b5="/portfolio/assets/933cd4_c067371c694c4909b2b85af0a079a9da~mv2-DAQj04yC.avif",v5="/portfolio/assets/933cd4_e456be50e7c04c3583dcc3ccc1020392~mv2-ZCu8JcxC.avif",x5="/portfolio/assets/933cd4_e94abbd068ae4805bf54fa0955ab17bf~mv2-DEIP6fUt.avif",y5="/portfolio/assets/933cd4_21c532d84e3d4e70b75d90b228d3fcec~mv2-DLVeynxV.avif",S5="/portfolio/assets/933cd4_237a1548a9d84782b4b3fb357eee1351~mv2-D_vb4LkL.avif",z5="/portfolio/assets/933cd4_23b5a8291d49458895bdc6351beb3d71~mv2-Dt6AEH1U.avif",j5="/portfolio/assets/933cd4_465dfcaeb0034e2abcba48e9e5acc899~mv2-uPMi1wso.avif",M5="/portfolio/assets/933cd4_64d72ab1b3ba4e82adf270f22f4be246~mv2-DmGqF8EJ.avif",A5="/portfolio/assets/933cd4_92b20642a46240b2934aeea1d0554c76~mv2-BjxJ8z-3.avif",N5="/portfolio/assets/933cd4_dc21b0c2a23f48288a3c11f39cae1e6e~mv2-B5iT4xTb.avif",w5="/portfolio/assets/933cd4_eaffa2e625054aeb813084cfeccf5b86~mv2-BEfmqeHp.avif",E5="/portfolio/assets/933cd4_f8cb313e7c3d4ce0a4090950e859c161~mv2-25ZNlKZ5.avif",T5=La.map((v,A)=>({id:A+1,src:v.images[0],gallery:v.images,category:"projects",label:v.title,tag:v.type})),D5=[{id:0,src:a5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:l5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:n5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:i5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:o5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:c5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:s5,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:0,src:r5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:u5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:f5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:d5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:m5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:Tf,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:Tf,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:g5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:p5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:h5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:b5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:v5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:x5,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:0,src:y5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:S5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:z5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:j5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:M5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:A5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:N5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:w5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:0,src:E5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"}],Ga=[...T5,...D5].map((v,A)=>({...v,id:A+1})),_5=[{value:"all",label:"All Work",count:Ga.length},{value:"projects",label:"Projects",count:Ga.filter(v=>v.category==="projects").length},{value:"webdesign",label:"Web Design",count:Ga.filter(v=>v.category==="webdesign").length},{value:"marketing",label:"Marketing",count:Ga.filter(v=>v.category==="marketing").length},{value:"shirtdesign",label:"Apparel",count:Ga.filter(v=>v.category==="shirtdesign").length}];function Of(v){const A=v.match(/\/d\/([^/]+)/);return`https://drive.google.com/file/d/${A?A[1]:""}/preview`}const C5=["https://drive.google.com/file/d/1M-89wlBCi-OL9qXZBBlFqyQ_AXRkCtg7/view?usp=sharing","https://drive.google.com/file/d/1ikg5AzfSzJhJaAUtMVgBXFTLjKkrQsaV/view?usp=sharing"],O5=["https://drive.google.com/file/d/1uaKcOgRY2XXKwPlTjRqtAAAts9F6AqmK/view?usp=sharing","https://drive.google.com/file/d/1hc36cdMC6HG4lrLeAaUP-KJXqDor8rca/view?usp=sharing","https://drive.google.com/file/d/1xyz473-S3dK4EPj_-0bzqcmgxxAA5SG-/view?usp=sharing","https://drive.google.com/file/d/1Yby5yzQ00Gt2okleXT11ameX-Zc4efP2/view?usp=sharing","https://drive.google.com/file/d/1CY9Y8bVU5luniPb6spEMysm48qPcxNdi/view?usp=sharing"],Df=C5.map((v,A)=>({id:A+1,embed:Of(v)})),_f=O5.map((v,A)=>({id:A+1,embed:Of(v)}));function H5(){const[v,A]=bt.useState("projects"),[H,d]=bt.useState(null),U=v==="all"?Ga:Ga.filter(w=>w.category===v),N=w=>{if(!H)return;const D=(H.idx+w+H.images.length)%H.images.length;d({...H,idx:D})},V=w=>{w.key==="ArrowRight"&&N(1),w.key==="ArrowLeft"&&N(-1),w.key==="Escape"&&d(null)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root overflow lock ── */
        .gfx-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* this must stay */
}

        .gfx-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 5rem 2rem;
          display: flex;
          gap: 5rem;
          align-items: flex-start;
          overflow-x: hidden;
        }

        /* ── Left sticky label ── */
        .gfx-left {
          flex: 0 0 160px;
          width: 160px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: sticky;
          top: 5rem;
        }
        .gfx-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .gfx-eyebrow::before {
          content: '';
          width: 24px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
          display: inline-block;
        }
        .gfx-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 4vw, 4.5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .gfx-heading span { color: #ffc850; }
        .gfx-count {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .gfx-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #ffc850;
          line-height: 1;
        }
        .gfx-count-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── Right content ── */
        .gfx-right {
  flex: 1 1 0;
  min-width: 0;
  max-width: 100%;
  /* DELETE: overflow-x: hidden; */
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

        /* Pills */
        .gfx-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          min-width: 0;
        }
        .gfx-pill {
          padding: 0.28rem 0.8rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffc850;
        }

        /* Bio */
        .gfx-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.85;
          font-weight: 300;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
          min-width: 0;
        }
        .gfx-bio strong { color: #fff; font-weight: 500; }
        .gfx-bio em     { color: #ffc850; font-style: normal; }

        .gfx-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Filter tabs ── */
        .gfx-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          width: 100%;
          min-width: 0;
        }
        .gfx-filter-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
          min-height: 40px;
        }
        .gfx-filter-btn:hover {
          border-color: rgba(255,200,80,0.35);
          color: rgba(255,200,80,0.8);
        }
        .gfx-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.45);
          color: #ffc850;
        }
        .gfx-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 16px;
          height: 14px;
          padding: 0 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          font-size: 0.52rem;
          color: rgba(255,255,255,0.35);
        }
        .gfx-filter-btn.active .gfx-chip {
          background: rgba(255,200,80,0.2);
          color: #ffc850;
        }

        /* ── Grid ── */
        .gfx-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
          min-width: 0;
        }
        .gfx-card {
          position: relative;
          min-width: 0;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: rgba(8,8,12,0.95);
          cursor: pointer;
        }
        .gfx-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.82) saturate(0.85);
          transition: transform 0.5s, filter 0.4s;
        }
        .gfx-card:hover img { transform: scale(1.07); filter: brightness(1) saturate(1.1); }
        .gfx-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(4,4,8,0.88) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.75rem;
          gap: 2px;
          z-index: 2;
        }
        .gfx-card:hover .gfx-card-overlay { opacity: 1; }
        .gfx-card-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }
        .gfx-card-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .gfx-card-num {
          position: absolute;
          bottom: 0.6rem; right: 0.6rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.5);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gfx-card:hover .gfx-card-num { opacity: 1; }

        /* ── Lightbox ── */
        .gfx-lb {
          position: fixed; inset: 0;
          background: rgba(2,2,6,0.94);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(20px); opacity:0 } to { transform:translateY(0); opacity:1 } }

        .gfx-lb-img { animation: slideUp 0.3s ease; }
        .gfx-lb-img img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 3px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.8);
          display: block;
        }
        .gfx-lb-close {
          position: fixed; top: 1rem; right: 1rem;
          width: 40px; height: 40px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850; font-size: 0.9rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }
        .gfx-lb-close:hover { background: rgba(255,200,80,0.12); }
        .gfx-lb-nav {
          position: fixed; top: 50%;
          transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          color: #ffc850; font-size: 1.3rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }
        .gfx-lb-nav:hover { background: rgba(255,200,80,0.1); }
        .gfx-lb-prev { left: 0.75rem; }
        .gfx-lb-next { right: 0.75rem; }
        .gfx-lb-label {
          position: fixed; bottom: 1.25rem; left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }
        .gfx-lb-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.08em;
          color: #fff;
        }
        .gfx-lb-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .gfx-lb-counter span { color: #ffc850; }

        /* ── Video Creations section ── */
        .gfx-video-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }
        .gfx-video-group {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .gfx-video-subheading {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .gfx-video-subheading::before {
          content: '';
          width: 18px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
          display: inline-block;
        }
        .gfx-video-grid {
          display: grid;
          gap: 1rem;
          width: 100%;
          min-width: 0;
        }
        .gfx-video-grid-long {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .gfx-video-grid-short {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .gfx-video-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(8,8,12,0.95);
        }
        .gfx-video-card iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          background: #000;
        }
        .gfx-video-card-long { aspect-ratio: 16 / 9; }
        .gfx-video-card-short { aspect-ratio: 9 / 19.5; }

        /* ─────────── TABLET (≤ 860px) ─────────── */
        @media (max-width: 860px) {
          .gfx-inner {
            flex-direction: column;
            gap: 2rem;
            padding: 3.5rem 1.5rem;
          }
          .gfx-left {
            position: static;
            flex-direction: row;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 1.5rem;
            flex: unset;
            width: 100%;
          }
          .gfx-count { margin-top: 0; }
          .gfx-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .gfx-video-grid-long { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .gfx-video-grid-short { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        /* ─────────── MOBILE (≤ 600px) ─────────── */
        @media (max-width: 600px) {
          .gfx-inner {
            padding: 2rem 1rem;
            gap: 1.25rem;
          }

          /* Header: full width, stacked */
          .gfx-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
            width: 100%;
            flex: unset;
          }
          .gfx-heading { font-size: clamp(2.4rem, 10vw, 3rem); }

          /* Bio: contained, wrapping */
          .gfx-bio {
            font-size: 0.85rem;
            line-height: 1.75;
          }

          /* Pills wrap */
          .gfx-pills { gap: 0.35rem; }
          .gfx-pill  { font-size: 0.52rem; padding: 0.22rem 0.6rem; }

          /* Grid: always 2 cols on mobile */
          .gfx-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          /* Video grids: stack long form, keep short form scannable */
          .gfx-video-grid-long { grid-template-columns: minmax(0, 1fr); }
          .gfx-video-grid-short { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          /* Lightbox */
          .gfx-lb { padding: 0.75rem 0.4rem; }
          .gfx-lb-img img { max-width: 96vw; max-height: 72vh; }
          .gfx-lb-prev { left: 0.2rem; }
          .gfx-lb-next { right: 0.2rem; }
          .gfx-lb-close { top: 0.5rem; right: 0.5rem; width: 36px; height: 36px; font-size: 0.8rem; }
          .gfx-lb-nav   { width: 36px; height: 36px; font-size: 1.1rem; }
        }

        /* ─────────── SMALL PHONES (≤ 390px) ─────────── */
        @media (max-width: 390px) {
          .gfx-heading { font-size: clamp(2rem, 12vw, 2.6rem); }
          .gfx-grid { grid-template-columns: minmax(0, 1fr); }
          .gfx-video-grid-short { grid-template-columns: minmax(0, 1fr); }
        }
      `}),H&&c.jsxs("div",{className:"gfx-lb",onClick:()=>d(null),onKeyDown:V,tabIndex:0,children:[c.jsx("button",{className:"gfx-lb-close",onClick:()=>d(null),children:"✕"}),c.jsx("button",{className:"gfx-lb-nav gfx-lb-prev",onClick:w=>{w.stopPropagation(),N(-1)},children:"‹"}),c.jsx("div",{className:"gfx-lb-img",onClick:w=>w.stopPropagation(),children:c.jsx("img",{src:H.images[H.idx],alt:H.title})}),c.jsx("button",{className:"gfx-lb-nav gfx-lb-next",onClick:w=>{w.stopPropagation(),N(1)},children:"›"}),c.jsxs("div",{className:"gfx-lb-label",children:[c.jsx("span",{className:"gfx-lb-title",children:H.title}),c.jsxs("span",{className:"gfx-lb-counter",children:[c.jsx("span",{children:H.idx+1})," / ",H.images.length]})]})]}),c.jsx("section",{className:"gfx-wrap",id:"graphics",children:c.jsxs("div",{className:"gfx-inner",children:[c.jsxs("div",{className:"gfx-left",children:[c.jsx("span",{className:"gfx-eyebrow",children:"My Work"}),c.jsxs("h2",{className:"gfx-heading",children:["Graphic",c.jsx("br",{}),c.jsx("span",{children:"Work"})]}),c.jsxs("div",{className:"gfx-count",children:[c.jsx("span",{className:"gfx-count-num",children:U.length}),c.jsx("span",{className:"gfx-count-lbl",children:v==="all"?"Total Pieces":"In Category"})]})]}),c.jsxs("div",{className:"gfx-right",children:[c.jsxs("div",{className:"gfx-pills",children:[c.jsx("span",{className:"gfx-pill",children:"Projects"}),c.jsx("span",{className:"gfx-pill",children:"Web Design"}),c.jsx("span",{className:"gfx-pill",children:"Marketing"}),c.jsx("span",{className:"gfx-pill",children:"Apparel"})]}),c.jsxs("p",{className:"gfx-bio",children:["A selection of ",c.jsx("em",{children:"visual work"})," spanning shipped ",c.jsx("strong",{children:"app & web projects"}),",",c.jsx("strong",{children:" website UI design"}),", print & digital ",c.jsx("strong",{children:"marketing materials"}),", and custom ",c.jsx("strong",{children:"shirt / apparel graphics"}),". Every piece is crafted with intention — designed to communicate clearly and leave a lasting impression."]}),c.jsx("div",{className:"gfx-divider"}),c.jsx("div",{className:"gfx-filters",children:_5.map(w=>c.jsxs("button",{className:`gfx-filter-btn${v===w.value?" active":""}`,onClick:()=>A(w.value),children:[w.label,c.jsx("span",{className:"gfx-chip",children:w.count})]},w.value))}),c.jsx("div",{className:"gfx-grid",children:U.map((w,D)=>c.jsxs("div",{className:"gfx-card",onClick:()=>d(w.gallery?{images:w.gallery,idx:0,title:w.label}:{images:U.map(M=>M.src),idx:D,title:w.label}),children:[c.jsx("img",{src:w.src,alt:w.label,loading:"lazy"}),c.jsxs("div",{className:"gfx-card-overlay",children:[c.jsx("span",{className:"gfx-card-tag",children:w.tag}),c.jsx("span",{className:"gfx-card-label",children:w.label})]}),c.jsx("span",{className:"gfx-card-num",children:String(D+1).padStart(2,"0")})]},w.id))})]})]})}),c.jsx("section",{className:"gfx-wrap",id:"videos",children:c.jsxs("div",{className:"gfx-inner",children:[c.jsxs("div",{className:"gfx-left",children:[c.jsx("span",{className:"gfx-eyebrow",children:"My Work"}),c.jsxs("h2",{className:"gfx-heading",children:["Video",c.jsx("br",{}),c.jsx("span",{children:"Creations"})]}),c.jsxs("div",{className:"gfx-count",children:[c.jsx("span",{className:"gfx-count-num",children:Df.length+_f.length}),c.jsx("span",{className:"gfx-count-lbl",children:"Total Videos"})]})]}),c.jsxs("div",{className:"gfx-right",children:[c.jsxs("p",{className:"gfx-bio",children:["A mix of ",c.jsx("em",{children:"long form"})," and ",c.jsx("em",{children:"short form"})," video work — hosted on Google Drive and embedded directly below, from full-length pieces to quick, punchy cuts made for social."]}),c.jsx("div",{className:"gfx-divider"}),c.jsxs("div",{className:"gfx-video-section",children:[c.jsxs("div",{className:"gfx-video-group",children:[c.jsx("h3",{className:"gfx-video-subheading",children:"Long Form"}),c.jsx("div",{className:"gfx-video-grid gfx-video-grid-long",children:Df.map((w,D)=>c.jsx("div",{className:"gfx-video-card gfx-video-card-long",children:c.jsx("iframe",{src:w.embed,title:`Long Form Video ${D+1}`,allow:"autoplay; fullscreen",allowFullScreen:!0,loading:"lazy"})},w.id))})]}),c.jsxs("div",{className:"gfx-video-group",children:[c.jsx("h3",{className:"gfx-video-subheading",children:"Short Form"}),c.jsx("div",{className:"gfx-video-grid gfx-video-grid-short",children:_f.map((w,D)=>c.jsx("div",{className:"gfx-video-card gfx-video-card-short",children:c.jsx("iframe",{src:w.embed,title:`Short Form Video ${D+1}`,allow:"autoplay; fullscreen",allowFullScreen:!0,loading:"lazy"})},w.id))})]})]})]})]})})]})}const U5=5;function B5({images:v,offset:A,title:H,onNext:d}){const U=Array.from({length:Math.min(U5,v.length)},(N,V)=>v[(A+V)%v.length]);return c.jsxs("div",{className:"dev-carousel",children:[c.jsx("div",{className:"dev-carousel-track",children:U.map((N,V)=>c.jsx("img",{src:N,alt:`${H} screenshot ${(A+V)%v.length+1}`,className:"dev-carousel-img",loading:"lazy"},`${A}-${V}`))}),c.jsx("button",{type:"button",className:"dev-carousel-next",onClick:N=>{N.stopPropagation(),d()},"aria-label":"Show next screenshots",children:"→"})]})}function k5(){const[v,A]=bt.useState(null),[H,d]=bt.useState({}),U=N=>{if(!v)return;const V=La[v.projectIdx].images,w=(v.imageIdx+N+V.length)%V.length;A({projectIdx:v.projectIdx,imageIdx:w})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ═══════════════════════════════════════════════════════════════
           DEV SECTION — Showcase Layout
        ═══════════════════════════════════════════════════════════════ */
        .dev-wrapper {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 6rem 0 8rem;
        }

        /* noise texture overlay */
        .dev-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
        }

        /* ── Section header ── */
        .dev-header {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-header-left {}

        .dev-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .dev-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
        }

        .dev-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          letter-spacing: 0.03em;
          line-height: 0.88;
          color: #fff;
          margin: 0;
        }

        .dev-section-heading span { color: #ffc850; }

        .dev-header-right {
          max-width: 340px;
        }

        .dev-header-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
        }

        .dev-header-bio strong { color: rgba(255,255,255,0.7); font-weight: 500; }
        .dev-header-bio em     { color: #ffc850; font-style: normal; }

        /* ── Horizontal rule ── */
        .dev-rule {
          max-width: 1300px;
          margin: 0 auto 0;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .dev-rule-inner {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.25), rgba(255,200,80,0.05) 60%, transparent);
        }

        /* ═══════════════════════════════════════
           SHOWCASE ROWS
        ═══════════════════════════════════════ */
        .dev-showcase {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* each project row */
        .dev-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          cursor: pointer;
          transition: background 0.3s;
        }

        .dev-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .dev-row:hover {
          background: rgba(255,200,80,0.02);
        }

        /* ── Row number column ── */
        .dev-row-num-col {
          display: flex;
          align-items: flex-start;
          padding-top: 2.8rem;
          padding-right: 1rem;
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .dev-row-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.35);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          transition: color 0.3s;
        }

        .dev-row:hover .dev-row-num {
          color: #ffc850;
        }

        /* ── Row main content ── */
        .dev-row-main {
          padding: 2.5rem 0 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
        }

        /* top bar: title + type */
        .dev-row-topbar {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.8rem;
        }

        .dev-row-title-group {
          display: flex;
          align-items: baseline;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .dev-row-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 1;
          transition: color 0.25s;
          margin: 0;
        }

        .dev-row:hover .dev-row-title { color: #ffc850; }

        .dev-row-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: color 0.25s;
        }

        .dev-row:hover .dev-row-subtitle { color: rgba(255,200,80,0.5); }

        .dev-row-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .dev-row-type {
          padding: 0.28rem 0.8rem;
          background: rgba(255,200,80,0.07);
          border: 1px solid rgba(255,200,80,0.18);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.65);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dev-row:hover .dev-row-type {
          background: rgba(255,200,80,0.12);
          border-color: rgba(255,200,80,0.35);
          color: #ffc850;
        }

        .dev-row-year {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
        }

        /* ── Screenshot area: wide browser mockup ── */
        .dev-row-preview {
          position: relative;
          width: 100%;
          min-width: 0;
          border-radius: 6px 6px 0 0;
          overflow: hidden;
          background: rgba(20,20,28,0.9);
          border: 1px solid rgba(255,255,255,0.07);
          border-bottom: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          transition: box-shadow 0.4s, border-color 0.3s;
        }

        .dev-row:hover .dev-row-preview {
          border-color: rgba(255,200,80,0.15);
          box-shadow: 0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,200,80,0.08);
        }

        /* fake browser chrome */
        .dev-browser-bar {
          height: 32px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 6px;
          flex-shrink: 0;
        }

        .dev-browser-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
        }

        .dev-browser-dot:nth-child(1) { background: rgba(255,95,86,0.5); }
        .dev-browser-dot:nth-child(2) { background: rgba(255,189,46,0.5); }
        .dev-browser-dot:nth-child(3) { background: rgba(39,201,63,0.5); }

        .dev-browser-url {
          margin-left: 8px;
          flex: 1;
          height: 18px;
          background: rgba(255,255,255,0.04);
          border-radius: 3px;
          max-width: 320px;
        }

        .dev-row-screenshot {
          width: 100%;
          display: block;
          height: 420px;
          object-fit: cover;
          object-position: top;
          filter: brightness(1) saturate(1.05);
          cursor: zoom-in;
        }

        /* zoom overlay on screenshot */
        .dev-screenshot-zoom {
          position: absolute;
          inset: 32px 0 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .dev-row:hover .dev-screenshot-zoom { opacity: 1; }

        .dev-screenshot-zoom-btn {
          width: 48px; height: 48px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,200,80,0.4);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: all;
          cursor: zoom-in;
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.2s;
        }

        .dev-row:hover .dev-screenshot-zoom-btn { transform: scale(1); }
        .dev-screenshot-zoom-btn:hover { background: rgba(255,200,80,0.15); }

        .dev-screenshot-zoom-btn svg {
          width: 18px; height: 18px;
          stroke: #ffc850; fill: none;
          stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Filmstrip preview (all images visible at once) ── */
        .dev-carousel {
          position: relative;
          width: 100%;
          height: 480px;
          background: rgba(0,0,0,0.4);
        }

        .dev-carousel-track {
          display: flex;
          width: 100%;
          height: 100%;
          gap: 2px;
        }

        .dev-carousel-img {
          flex: 1 1 0;
          min-width: 0;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .dev-carousel-next {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,200,80,0.4);
          border-radius: 50%;
          color: #ffc850;
          font-size: 1.1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: background 0.2s, transform 0.2s;
        }

        .dev-carousel-next:hover { background: rgba(255,200,80,0.18); }
        .dev-carousel-next:active { transform: scale(0.92); }

        /* ── Bottom info strip ── */
        .dev-row-bottom {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .dev-row-desc {
          flex: 1 1 260px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
          max-width: 560px;
        }

        .dev-row-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: flex-start;
          padding-top: 0.1rem;
        }

        .dev-row-tag {
          padding: 0.25rem 0.65rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.54rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dev-row-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 3px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ffc850;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .dev-row-link:hover {
          background: rgba(255,200,80,0.16);
          border-color: rgba(255,200,80,0.55);
        }

        .dev-row-link svg {
          width: 12px; height: 12px;
          fill: #ffc850;
        }

        .dev-row:hover .dev-row-tag {
          background: rgba(255,200,80,0.07);
          border-color: rgba(255,200,80,0.2);
          color: rgba(255,200,80,0.7);
        }

        /* arrow indicator */
        .dev-row-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          opacity: 0;
          transition: opacity 0.25s, transform 0.3s;
          font-size: 1.2rem;
          color: #ffc850;
        }

        .dev-row:hover .dev-row-arrow {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ── Footer stat bar ── */
        .dev-footer {
          max-width: 1300px;
          margin: 3rem auto 0;
          padding: 0 2rem;
          display: flex;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .dev-footer-stat {
          flex: 1;
          padding: 1.2rem 1.5rem;
          background: rgba(8,8,12,0.95);
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: background 0.2s;
        }

        .dev-footer-stat:hover { background: rgba(255,200,80,0.04); }

        .dev-footer-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #ffc850;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .dev-footer-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ── Lightbox ── */
        .dev-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(2,2,6,0.96);
          backdrop-filter: blur(18px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: devLbIn 0.2s ease;
        }

        @keyframes devLbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .dev-lightbox-wrap {
          animation: devLbUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        @keyframes devLbUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .dev-lightbox-wrap img {
          max-width: 90vw;
          max-height: 84vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 60px 160px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,200,80,0.1);
          display: block;
        }

        .dev-lb-close {
          position: fixed;
          top: 1.25rem; right: 1.25rem;
          width: 38px; height: 38px;
          background: rgba(8,8,12,0.85);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }

        .dev-lb-close:hover { background: rgba(255,200,80,0.12); }

        .dev-lb-nav {
          position: fixed;
          top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(8,8,12,0.85);
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }

        .dev-lb-nav:hover {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.5);
        }

        .dev-lb-prev { left: 1.25rem; }
        .dev-lb-next { right: 1.25rem; }

        .dev-lb-label {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .dev-lb-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .dev-lb-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .dev-lb-counter span { color: #ffc850; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .dev-header { flex-direction: column; align-items: flex-start; }
          .dev-header-right { max-width: 100%; }
          .dev-row { grid-template-columns: 48px 1fr; }
          .dev-lb-prev { left: 0.5rem; }
          .dev-lb-next { right: 0.5rem; }
        }

        @media (max-width: 600px) {
          .dev-row { grid-template-columns: 1fr; }
          .dev-row-num-col { display: none; }
          .dev-row-main { padding: 1.5rem 0; }
          .dev-row-screenshot { height: 280px; }

          /* Carousel rows (Tetelestai Bible, Track8out) — one image at a time on
             mobile; tap the arrow to step to the next screenshot. Height is driven
             by the image's own aspect ratio so it fills the frame without cropping. */
          .dev-carousel { height: auto; }
          .dev-carousel-track {
            height: auto;
            align-items: center;
            overflow: hidden;
          }
          .dev-carousel-img {
            flex: 0 0 100%;
            width: 100%;
            height: auto;
            aspect-ratio: 9 / 20;
            object-fit: contain;
          }
          .dev-carousel-img:not(:first-child) { display: none; }
          .dev-carousel-next {
            bottom: 10px;
            right: 10px;
            width: 44px;
            height: 44px;
          }

          .dev-footer { flex-direction: column; }
        }
      `}),v&&c.jsxs("div",{className:"dev-lightbox",onClick:()=>A(null),onKeyDown:N=>{N.key==="ArrowRight"&&U(1),N.key==="ArrowLeft"&&U(-1),N.key==="Escape"&&A(null)},tabIndex:0,children:[c.jsx("button",{className:"dev-lb-close",onClick:()=>A(null),children:"✕"}),c.jsx("button",{className:"dev-lb-nav dev-lb-prev",onClick:N=>{N.stopPropagation(),U(-1)},children:"‹"}),c.jsx("div",{className:"dev-lightbox-wrap",onClick:N=>N.stopPropagation(),children:c.jsx("img",{src:La[v.projectIdx].images[v.imageIdx],alt:"Project preview"})}),c.jsx("button",{className:"dev-lb-nav dev-lb-next",onClick:N=>{N.stopPropagation(),U(1)},children:"›"}),c.jsxs("div",{className:"dev-lb-label",children:[c.jsx("span",{className:"dev-lb-title",children:La[v.projectIdx].title}),c.jsxs("span",{className:"dev-lb-counter",children:[c.jsx("span",{children:v.imageIdx+1})," of ",La[v.projectIdx].images.length]})]})]}),c.jsxs("section",{className:"dev-wrapper",id:"dev",children:[c.jsxs("div",{className:"dev-header",children:[c.jsxs("div",{className:"dev-header-left",children:[c.jsx("span",{className:"dev-section-tag",children:"My Builds"}),c.jsxs("h2",{className:"dev-section-heading",children:["Dev",c.jsx("br",{}),c.jsx("span",{children:"Projects"})]})]}),c.jsx("div",{className:"dev-header-right",children:c.jsxs("p",{className:"dev-header-bio",children:["Where ",c.jsx("em",{children:"design meets functionality"}),". From ",c.jsx("strong",{children:"multi-feature business platforms"})," to polished ",c.jsx("strong",{children:"e-commerce storefronts"})," — each build is engineered to solve real problems and deliver a seamless experience."]})})]}),c.jsx("div",{className:"dev-rule",children:c.jsx("div",{className:"dev-rule-inner"})}),c.jsx("div",{className:"dev-showcase",children:La.map((N,V)=>c.jsxs("div",{className:"dev-row",children:[c.jsx("div",{className:"dev-row-num-col",children:c.jsx("span",{className:"dev-row-num",children:String(V+1).padStart(2,"0")})}),c.jsxs("div",{className:"dev-row-main",children:[c.jsxs("div",{className:"dev-row-topbar",children:[c.jsxs("div",{className:"dev-row-title-group",children:[c.jsx("h3",{className:"dev-row-title",children:N.title}),c.jsx("span",{className:"dev-row-subtitle",children:N.subtitle})]}),c.jsxs("div",{className:"dev-row-meta",children:[c.jsx("span",{className:"dev-row-type",children:N.type}),c.jsx("span",{className:"dev-row-year",children:N.year})]})]}),c.jsxs("div",{className:"dev-row-preview",children:[c.jsxs("div",{className:"dev-browser-bar",children:[c.jsx("div",{className:"dev-browser-dot"}),c.jsx("div",{className:"dev-browser-dot"}),c.jsx("div",{className:"dev-browser-dot"}),c.jsx("div",{className:"dev-browser-url"})]}),N.carousel?c.jsx(B5,{images:N.images,offset:H[N.id]??0,title:N.title,onNext:()=>{d(w=>({...w,[N.id]:((w[N.id]??0)+1)%N.images.length}))}}):c.jsxs(c.Fragment,{children:[c.jsx("img",{src:N.images[0],alt:N.title,className:"dev-row-screenshot",loading:"lazy"}),c.jsx("div",{className:"dev-screenshot-zoom",children:c.jsx("button",{className:"dev-screenshot-zoom-btn",onClick:w=>{w.stopPropagation(),A({projectIdx:V,imageIdx:0})},children:c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("polyline",{points:"15 3 21 3 21 9"}),c.jsx("polyline",{points:"9 21 3 21 3 15"}),c.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),c.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})})})]})]}),c.jsxs("div",{className:"dev-row-bottom",children:[c.jsx("p",{className:"dev-row-desc",children:N.description}),c.jsx("div",{className:"dev-row-tags",children:N.tags.map(w=>c.jsx("span",{className:"dev-row-tag",children:w},w))}),N.link&&c.jsxs("a",{href:N.link.url,target:"_blank",rel:"noopener noreferrer",className:"dev-row-link",onClick:w=>w.stopPropagation(),children:[c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"})}),N.link.label]})]})]}),c.jsx("span",{className:"dev-row-arrow",children:"→"})]},N.id))}),c.jsx("div",{className:"dev-footer",children:[{num:La.length.toString(),label:"Projects Built"},{num:"3+",label:"Industries Served"},{num:"2",label:"Mobile Apps Shipped"},{num:"100%",label:"Client Focused"}].map(N=>c.jsxs("div",{className:"dev-footer-stat",children:[c.jsx("span",{className:"dev-footer-num",children:N.num}),c.jsx("span",{className:"dev-footer-label",children:N.label})]},N.label))})]})]})}function R5(){const v=[{id:1,company:"Century 21 Steinposner",role:"IT / Project Manager",department:"TheMedSpa HB",period:"July 2024 – June 2026",bullets:["Website Management: Oversaw website updates, content management, and UX improvements, ensuring alignment with branding guidelines.","Marketing Flier Creation: Designed and produced marketing materials that boosted client acquisition and retention.","Project Launch Support: Managed new project initiatives, collaborating cross-functionally to meet timelines and budget objectives."],tags:["Web Management","UX","Project Management","Marketing"]},{id:2,company:"Transform Salon Luxe",role:"Marketing Specialist / Web Dev",department:null,period:"January 2023 – December 2023",bullets:["Website Updates and Maintenance: Regularly updated the salon's website with new content, promotional offers, and service updates.","Creation of Marketing Materials: Designed and developed a variety of marketing materials, including brochures, flyers, and digital graphics tailored to attract new clients and retain existing ones by highlighting the salon's unique services and promotions."],tags:["Web Development","Marketing","Graphic Design","Branding"]},{id:3,company:"MyDesk Virtual Office",role:"Executive Assistant",department:null,period:"November 2021 – January 2023",bullets:["Monitored onboarding processes for new Virtual Assistants and clients.","Led a team of Virtual Assistants, providing support and mentorship.","Handled tasks including transaction coordination, social media marketing, cold calling, skip tracing, email marketing, product research, web maintenance, web development, flyer creation, and video creation.","Analyzed team strengths to maximize staff abilities, assigned work to ideal project partners, and streamlined the scheduling experience."],tags:["Team Leadership","Social Media","Email Marketing","Web Dev","VA"]},{id:4,company:"VideoPower.com",role:"SEO Content Writer",department:null,period:"July 2020 – October 2021",bullets:["Content and Article Creation: Developed high-quality content and articles tailored for the company's website, creating engaging and informative pieces that resonated with the target audience.","SEO Optimization: Integrated SEO standards and keyword strategies into all content to improve search engine ranking. Conducted thorough keyword research to identify relevant and high-traffic keywords, ensuring maximum visibility."],tags:["SEO","Content Writing","Keyword Research","Article Creation"]}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ══════════════════════════════════════════════════════════════
           EXPERIENCE SECTION
        ══════════════════════════════════════════════════════════════ */
        .exp-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .exp-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(255,200,80,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        /* ══════════════════════════════════════
           LEFT — sticky label
        ══════════════════════════════════════ */
        .exp-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .exp-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .exp-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .exp-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }

        .exp-section-heading span { color: #ffc850; }

        /* total count */
        .exp-count-badge {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .exp-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .exp-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ══════════════════════════════════════
           RIGHT — timeline
        ══════════════════════════════════════ */
        .exp-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Timeline track ── */
        .exp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* vertical gold line */
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            rgba(255,200,80,0.5),
            rgba(255,200,80,0.15) 80%,
            transparent
          );
        }

        /* ── Each entry ── */
        .exp-entry {
          position: relative;
          padding: 0 0 3rem 2.5rem;
        }

        .exp-entry:last-child {
          padding-bottom: 0;
        }

        /* dot on timeline */
        .exp-entry::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 8px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(8,8,12,1);
          border: 1px solid rgba(255,200,80,0.5);
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
          z-index: 2;
        }

        .exp-entry:hover::before {
          background: #ffc850;
          border-color: #ffc850;
          box-shadow: 0 0 10px rgba(255,200,80,0.4);
        }

        /* ── Card ── */
        .exp-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          padding: 1.75rem 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.25s, border-color 0.25s;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,200,80,0.6), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .exp-entry:hover .exp-card {
          background: rgba(255,200,80,0.03);
          border-color: rgba(255,200,80,0.15);
        }

        .exp-entry:hover .exp-card::before {
          transform: scaleX(1);
        }

        /* card header */
        .exp-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .exp-card-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .exp-company {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          letter-spacing: 0.05em;
          color: #fff;
          line-height: 1;
          transition: color 0.25s;
        }

        .exp-entry:hover .exp-company { color: #ffc850; }

        .exp-role-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .exp-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
        }

        .exp-dept-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,200,80,0.4);
          flex-shrink: 0;
        }

        .exp-dept {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.04em;
        }

        /* period badge */
        .exp-period {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.85rem;
          background: rgba(255,200,80,0.07);
          border: 1px solid rgba(255,200,80,0.18);
          border-radius: 2px;
          white-space: nowrap;
          flex-shrink: 0;
          align-self: flex-start;
        }

        .exp-period-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ffc850;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .exp-period span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.75);
        }

        /* divider inside card */
        .exp-card-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 1.25rem;
        }

        /* bullet points */
        .exp-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
          list-style: none;
          padding: 0;
          margin-top: 0;
        }

        .exp-bullet {
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
        }

        .exp-bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,200,80,0.45);
          flex-shrink: 0;
          margin-top: 0.45rem;
          transition: background 0.2s;
        }

        .exp-entry:hover .exp-bullet-dot {
          background: #ffc850;
        }

        .exp-bullet-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          font-weight: 300;
        }

        .exp-bullet-text strong {
          color: rgba(255,255,255,0.65);
          font-weight: 500;
        }

        /* tags */
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .exp-tag {
          padding: 0.22rem 0.65rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .exp-entry:hover .exp-tag {
          background: rgba(255,200,80,0.06);
          border-color: rgba(255,200,80,0.2);
          color: rgba(255,200,80,0.65);
        }

        /* ══════════════════════════════════════════════════════════════
           TABLET  ≤ 900px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .exp-inner {
            padding: 5rem 2.5rem;
            gap: 3rem;
          }

          .exp-left {
            position: static;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           MOBILE  ≤ 680px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .exp-inner {
            padding: 4.5rem 1.5rem 5rem;
            flex-direction: column;
            gap: 0;
          }

          .exp-left {
            margin-bottom: 2.5rem;
          }

          .exp-section-heading {
            font-size: clamp(3.2rem, 16vw, 4.5rem);
          }

          .exp-count-badge {
            display: none;
          }

          .exp-entry {
            padding-left: 2rem;
            padding-bottom: 2.5rem;
          }

          .exp-card {
            padding: 1.4rem 1.25rem 1.25rem;
          }

          .exp-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }

          .exp-period {
            align-self: flex-start;
          }

          .exp-company {
            font-size: 1.4rem;
          }

          .exp-bullet-text {
            font-size: 0.82rem;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 400px) {
          .exp-inner {
            padding: 4rem 1.25rem 4.5rem;
          }

          .exp-card {
            padding: 1.2rem 1rem 1rem;
          }

          .exp-timeline::before {
            left: -1px;
          }

          .exp-entry {
            padding-left: 1.5rem;
          }

          .exp-bullet-text {
            font-size: 0.8rem;
          }

          .exp-tag {
            font-size: 0.48rem;
          }
        }
      `}),c.jsx("section",{className:"exp-wrapper",id:"experience",children:c.jsxs("div",{className:"exp-inner",children:[c.jsxs("div",{className:"exp-left",children:[c.jsx("span",{className:"exp-section-tag",children:"My Journey"}),c.jsxs("h2",{className:"exp-section-heading",children:["Work",c.jsx("br",{}),c.jsx("span",{children:"Experience"})]}),c.jsxs("div",{className:"exp-count-badge",children:[c.jsx("span",{className:"exp-count-num",children:v.length}),c.jsx("span",{className:"exp-count-label",children:"Roles Held"})]})]}),c.jsx("div",{className:"exp-right",children:c.jsx("div",{className:"exp-timeline",children:v.map(A=>c.jsx("div",{className:"exp-entry",children:c.jsxs("div",{className:"exp-card",children:[c.jsxs("div",{className:"exp-card-header",children:[c.jsxs("div",{className:"exp-card-title-group",children:[c.jsx("span",{className:"exp-company",children:A.company}),c.jsxs("div",{className:"exp-role-line",children:[c.jsx("span",{className:"exp-role",children:A.role}),A.department&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"exp-dept-sep"}),c.jsx("span",{className:"exp-dept",children:A.department})]})]})]}),c.jsxs("div",{className:"exp-period",children:[c.jsx("span",{className:"exp-period-dot"}),c.jsx("span",{children:A.period})]})]}),c.jsx("div",{className:"exp-card-divider"}),c.jsx("ul",{className:"exp-bullets",children:A.bullets.map((H,d)=>{const U=H.indexOf(":"),N=U>-1&&U<40;return c.jsxs("li",{className:"exp-bullet",children:[c.jsx("span",{className:"exp-bullet-dot"}),c.jsx("span",{className:"exp-bullet-text",children:N?c.jsxs(c.Fragment,{children:[c.jsx("strong",{children:H.slice(0,U+1)}),H.slice(U+1)]}):H})]},d)})}),c.jsx("div",{className:"exp-tags",children:A.tags.map(H=>c.jsx("span",{className:"exp-tag",children:H},H))})]})},A.id))})})]})})]})}const q5={gmail:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",microsoftoutlook:"M21.184 0H7.616A2.817 2.817 0 0 0 4.8 2.816v1.017L12.8 6.4l8-2.567V2.816A2.817 2.817 0 0 0 21.184 0zM4.8 6.756V21.3l8-2.057 8 2.057V6.756L12.8 9.323 4.8 6.756zM0 5.333v13.334l3.2.821V4.512L0 5.333zm24 0l-3.2-.821v14.976l3.2-.821V5.333z",slack:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",microsoftteams:"M19.547 7.518c1.304 0 2.36-1.057 2.36-2.36S20.851 2.8 19.547 2.8a2.36 2.36 0 0 0 0 4.718zm1.722 1.07h-3.444a.86.86 0 0 0-.86.86v5.155c0 3.048 3.552 3.55 4.315 3.55h.01c.58 0 .71-.346.71-.608V9.448a.86.86 0 0 0-.731-.86zM12 12.364a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3zm2.116 1.133H9.884a1.75 1.75 0 0 0-1.75 1.75v5.733c0 .192.156.347.348.347h7.036a.348.348 0 0 0 .348-.347V15.247a1.75 1.75 0 0 0-1.75-1.75z",zoom:"M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.048 15.612c0 .504-.6.78-1.02.468l-2.976-2.172v1.704c0 .828-.672 1.5-1.5 1.5H5.928a1.5 1.5 0 0 1-1.5-1.5V8.4c0-.828.672-1.5 1.5-1.5h6.624c.828 0 1.5.672 1.5 1.5v1.704l2.976-2.172c.42-.312 1.02-.036 1.02.468v6.72z",googlemeet:"M17.525 11.025 21 7.55v8.9l-3.475-3.475-3.15 2.775V9.25l3.15 1.775zM3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",skype:"M10.588 1.225A10.48 10.48 0 0 0 .002 12a10.45 10.45 0 0 0 1.37 5.223A6.18 6.18 0 0 0 5.64 23.75a10.48 10.48 0 0 0 6.278.248A10.48 10.48 0 0 0 24 12a10.45 10.45 0 0 0-1.38-5.24 6.18 6.18 0 0 0-4.286-6.524 10.48 10.48 0 0 0-7.746.989zm1.09 17.274c-3.018 0-4.393-1.484-4.393-2.599 0-.61.453-1.042 1.082-1.042 1.416 0 1.052 2.026 3.311 2.026 1.209 0 1.88-.659 1.88-1.327 0-.404-.202-.853-.988-1.05l-2.614-.655c-2.103-.527-2.486-1.656-2.486-2.716 0-2.202 2.072-3.024 4.023-3.024 1.8 0 3.929.991 3.929 2.31 0 .633-.55 1.0-1.147 1.0-1.234 0-1.021-1.7-2.94-1.7-1.082 0-1.677.49-1.677 1.196 0 .706.861.932 1.61 1.105l1.929.45c2.124.494 2.61 1.677 2.61 2.824 0 1.782-1.368 3.202-4.13 3.202z",discord:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z",whatsapp:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.003 2.003a9.998 9.998 0 0 0-8.674 14.953L2.004 22l5.176-1.316A9.998 9.998 0 1 0 12.003 2.003z",trello:"M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .795-.645 1.44-1.44 1.44H15c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z",asana:"M11.987 14.138l-3.132 3.97a2.5 2.5 0 0 1-4.7-1.011 2.5 2.5 0 0 1 .81-2.7 2.5 2.5 0 0 1 3.516.38l3.508-4.45a2.5 2.5 0 0 1 3.516-.38 2.5 2.5 0 0 1 .81 2.7 2.5 2.5 0 0 1-4.7 1.011zM12 0C5.374 0 0 5.374 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7l2.09-2.1C17.48 1.35 14.38 0 11 0z",googledrive:"M6.28 0L0 10.93l3.14 5.44L9.42 5.44 6.28 0zm1.62 16.37H1.35L0 19h14.11L8.2 8.73l-1.46 2.67 3.63 5.97H7.9zm10.54-5.44L12.56 0H6.28l6.28 10.93 5.86-2.57-.06.57zM14.11 16.1L12 12.54l-4.49 7.77H24L14.11 16.1z",dropbox:"M12 1.5L6 5.25l6 3.75 6-3.75L12 1.5zM6 12.75L12 16.5l6-3.75-6-3.75-6 3.75zM0 5.25L6 9l6-3.75L6 1.5 0 5.25zm18 3.75l6-3.75L18 1.5l-6 3.75 6 3.75zm-6 1.5L6 14.25l6 3.75 6-3.75L12 10.5zm-12 3.75L6 18l6-3.75-6-3.75-6 3.75zm18 0L12 18l6 3.75 6-3.75-6-3.75z",microsoftonedrive:"M14.558 8.417A5.576 5.576 0 0 0 9.375 4.8a5.57 5.57 0 0 0-4.917 2.95A4.187 4.187 0 0 0 0 11.992 4.19 4.19 0 0 0 4.192 16.2h10.366a3.6 3.6 0 0 0 .787-7.12zm3.245.942a4.793 4.793 0 0 1 .597 9.541H3.208a5.593 5.593 0 0 0 .975.3h14.17a5.993 5.993 0 0 0 5.647-6c0-2.88-2.025-5.28-4.8-5.795a4.8 4.8 0 0 0-1.397-.046z",visualstudiocode:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",react:"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z",tailwindcss:"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",bootstrap:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.325-1.663zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.037 0c0-1.588-1.09-2.501-2.988-2.501H8.577v9.906h3.207c2.07 0 3.241-.953 3.241-2.555 0-1.133-.61-2.024-1.726-2.33.962-.322 1.638-1.085 1.638-2.52z",nodedotjs:"M11.998 24c-.321 0-.641-.084-.924-.247l-2.937-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.249 1.327-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V7.926c0-.099-.052-.19-.137-.24l-8.791-5.072a.271.271 0 0 0-.274 0L3.065 7.686c-.087.05-.141.144-.141.24v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V8.999c0-.143.111-.253.254-.253h1.109c.139 0 .254.11.254.253v10.813c0 1.748-.951 2.749-2.608 2.749-.508 0-.909 0-2.026-.551L2.28 20.508A1.851 1.851 0 0 1 1.332 19v-10.2c0-.66.353-1.278.924-1.609l8.795-5.076a1.927 1.927 0 0 1 1.85 0l8.794 5.077c.57.33.924.949.924 1.608v10.2a1.85 1.85 0 0 1-.924 1.609l-8.794 5.075A1.87 1.87 0 0 1 11.998 24z",php:"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm13.69-4.62c.924 0 1.67.19 2.22.57.55.38.9.98.9 1.77 0 .59-.14 1.08-.43 1.47-.28.4-.67.71-1.18.93l2.01 3.75h-1.75l-1.73-3.43H12.2v3.43H10.6V7.38h3.09zm-.2 3.62c.5 0 .88-.11 1.14-.34.26-.22.39-.57.39-1.02 0-.44-.13-.75-.4-.96-.27-.2-.65-.3-1.14-.3H12.2v2.62h1.29zm-7.69 1.02c0-.93.19-1.72.57-2.34a3.7 3.7 0 0 1 1.56-1.44c.65-.33 1.37-.49 2.16-.49h.74v1.54h-.74c-.6 0-1.12.13-1.55.39-.43.26-.76.64-.99 1.13-.22.49-.34 1.07-.34 1.71 0 .63.11 1.2.34 1.69.22.49.56.87.99 1.14.43.26.96.39 1.56.39H10.1V17h-.74c-.78 0-1.49-.16-2.14-.49-.65-.32-1.17-.81-1.56-1.44-.38-.63-.57-1.41-.57-2.33z",mysql:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.19.214.49.062.064.072.28.072.28v5.765c-.145-.036-.27-.116-.389-.259-.022-.029-.049-.084-.072-.084-.021 0-.052.022-.052.022-.07.12-.115.198-.138.386-.023.189-.031.378.011.483.042.105.076.231.118.335.042.104.087.219.161.336.074.117.156.226.223.316.068.091.12.153.194.216.075.063.134.103.198.136.064.034.109.055.183.077.073.022.14.038.208.038.072 0 .146-.016.21-.038.066-.022.125-.049.183-.077a1.5 1.5 0 0 0 .354-.239c.088-.088.16-.19.215-.305.064-.12.11-.25.14-.385.03-.136.045-.275.045-.418V7.474c.052-.065.104-.138.146-.213.04-.076.067-.153.079-.232a.526.526 0 0 0-.009-.258.56.56 0 0 0-.153-.22.69.69 0 0 0-.27-.14 1.3 1.3 0 0 0-.402-.063z",postgresql:"M17.128 0a10.134 10.134 0 0 0-2.755.403C12.602.057 10.855 0 10.8 0 8.168 0 6.5 1.067 6.5 1.067 4.203 1.215.344 2.67.02 7.018c-.077 1.029.023 2.063.298 3.062.6 2.204 2.477 4.58 5.119 4.089a4.478 4.478 0 0 0 1.531-.538l.032.19c-.167.082-.299.202-.38.362l-.005.012c-.302.652-.124 1.258.35 1.662.08.072.17.136.265.19.05.03.1.055.153.077v.013c-.078.152-.12.32-.12.492 0 .637.515 1.154 1.149 1.154a1.15 1.15 0 0 0 1.15-1.154 1.13 1.13 0 0 0-.048-.32l.003.011c.23-.003.459-.036.679-.097l-.022.005a1.15 1.15 0 0 0 1.119 1.396 1.15 1.15 0 0 0 1.149-1.154 1.14 1.14 0 0 0-.247-.708l.002.003c.37-.356.521-.874.401-1.375l-.002-.007-.152-.575a5.268 5.268 0 0 0 2.748-.965l-.028.019c-.104 1.06.112 1.93.548 2.524a2.5 2.5 0 0 0 2.024 1.045c1.943 0 3.514-2.26 3.809-5.398C23.571 5.026 20.978 0 17.128 0zM8.5 14.22a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44zm3.208 2.01a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44z",supabase:"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.99 12.558 1.5 13 2 13h7.836a1 1 0 0 0 1-.999V1.036zM12.1 22.964c.015.986 1.26 1.41 1.875.637l9.26-11.65A1.58 1.58 0 0 0 22 11H14.1a1 1 0 0 0-1 .999v10.965z",github:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",gitlab:"M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.45.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024",wordpress:"M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm1.44 0c0 5.8 4.76 10.56 10.56 10.56 5.8 0 10.56-4.76 10.56-10.56C22.56 6.2 17.8 1.44 12 1.44 6.2 1.44 1.44 6.2 1.44 12zm2.19 0C3.63 7.1 7.39 3.43 12 3.43c1.55 0 3.01.43 4.25 1.18L5.04 15.7A8.5 8.5 0 0 1 3.63 12zm8.37 8.57c-1.59 0-3.07-.46-4.31-1.24l11.27-11.04A8.505 8.505 0 0 1 20.57 12c0 4.72-3.84 8.57-8.57 8.57z",figma:"M5.998 24c1.657 0 3-1.343 3-3v-3h-3a3 3 0 0 0 0 6zm3-12H5.998a3 3 0 0 0 0 6h3v-6zm0-6H5.998a3 3 0 0 0 0 6h3V6zm6 0h-3v6h3a3 3 0 0 0 0-6zm0 6h-3v6h3a3 3 0 0 0 0-6z",canva:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.748 17.01a4.94 4.94 0 0 1-4.938-4.938A4.94 4.94 0 0 1 11.252 7.134a4.94 4.94 0 0 1 4.937 4.938 4.94 4.94 0 0 1-4.937 4.938zm5.623-1.02a6.323 6.323 0 0 0 .95-3.918 6.323 6.323 0 0 0-6.573-6.054 6.323 6.323 0 0 0-5.786 6.573 6.323 6.323 0 0 0 6.573 5.786 6.323 6.323 0 0 0 4.836-2.387z",openai:"M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.21a4.501 4.501 0 0 1-1.66-6.314zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.816 2.788a4.499 4.499 0 0 1-.676 8.119v-5.678a.79.79 0 0 0-.388-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.784a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z",zapier:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.57 14.27h-3.67l2.34 3.9H9.77l2.34-3.9H8.44l-1.5-2.27h3.67L8.27 8.1h6.46l-2.34 3.9h3.67l1.5 2.27z",grammarly:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.195 4.797c3.035 0 5.494 1.46 6.977 3.773l-2.002 1.39a5.684 5.684 0 0 0-4.975-2.835c-3.168 0-5.746 2.57-5.746 5.737 0 3.168 2.578 5.738 5.746 5.738 2.66 0 4.9-1.809 5.567-4.253H12.5V11.78h7.406c.08.444.13.9.13 1.363C20.036 17.465 16.511 21 12.195 21 7.665 21 4 17.334 4 12.804S7.665 4.797 12.195 4.797z",bitwarden:"M12 1L3 5v8c0 4.97 3.84 9.64 9 10.93C17.16 22.64 21 17.97 21 13V5l-9-4zm0 4.5l6 2.67V13c0 3.47-2.69 6.72-6 7.93-3.31-1.21-6-4.46-6-7.93V8.17L12 5.5z",calendly:"M19.59 3.6C17.48 1.35 14.38 0 11 0 4.925 0 0 4.925 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7L19.59 3.6zM13 6v5.586l3.707 3.707-1.414 1.414L11 13V6h2z",googlecalendar:"M18 0H6L0 6v12l6 6h12l6-6V6l-6-6zm-1 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z",mondaydotcom:"M4.032 14.976c-.936 0-1.696-.76-1.696-1.696S3.096 11.584 4.032 11.584c.463 0 .882.188 1.186.492l4.166-7.22A3.752 3.752 0 0 1 8 2.752C8 .752 9.752 0 12 0s4 .752 4 2.752a3.752 3.752 0 0 1-.384 2.104l4.166 7.22c.304-.304.723-.492 1.186-.492.936 0 1.696.76 1.696 1.696s-.76 1.696-1.696 1.696c-.463 0-.882-.188-1.186-.492l-4.166 7.22c.24.42.384.904.384 1.424C16 23.248 14.248 24 12 24s-4-.752-4-2.752c0-.52.144-1.004.384-1.424l-4.166-7.22c-.304.304-.723.492-1.186.492z",adobephotoshop:"M0 0v24h24V0H0zm10.014 6.508c1.16 0 1.975.187 2.664.564a3.67 3.67 0 0 1 1.64 1.64c.376.69.563 1.503.563 2.438 0 .937-.187 1.749-.563 2.438-.375.69-.922 1.22-1.64 1.64-.69.376-1.503.564-2.664.564H7.639V17.5H6.01V6.508h4.004zm0 7.848c.939 0 1.668-.236 2.14-.706.47-.47.705-1.126.705-1.97 0-.844-.235-1.5-.705-1.97-.472-.47-1.201-.707-2.14-.707H7.639v5.353h2.375zm6.794-1.347c.057.58.354 1.024.891 1.332.537.31 1.136.463 1.797.463.426 0 .8-.055 1.122-.165a1.96 1.96 0 0 0 .77-.47c.199-.205.298-.452.298-.745 0-.359-.135-.641-.405-.846-.27-.205-.657-.384-1.162-.538l-1.352-.385c-.674-.19-1.18-.455-1.518-.795-.338-.34-.507-.775-.507-1.306 0-.531.15-.99.449-1.377.3-.386.71-.683 1.231-.892.521-.209 1.112-.313 1.773-.313.71 0 1.322.13 1.835.389.514.26.91.617 1.188 1.073.28.455.427.97.442 1.544h-1.56c-.057-.523-.268-.933-.632-1.229-.364-.295-.835-.443-1.412-.443-.514 0-.93.108-1.248.323a.975.975 0 0 0-.477.847c0 .297.107.534.321.71.215.177.552.336 1.012.476l1.393.397c.73.212 1.278.494 1.645.845.367.351.55.808.55 1.37 0 .583-.157 1.08-.47 1.49-.313.41-.751.723-1.315.938-.563.216-1.212.323-1.945.323-.773 0-1.455-.13-2.043-.39a3.258 3.258 0 0 1-1.372-1.093 2.97 2.97 0 0 1-.503-1.622h1.581z",adobepremierepro:"M0 0v24h24V0H0zm9.7 6.506c1.015 0 1.726.186 2.2.56.474.373.71.908.71 1.605 0 .52-.125.956-.376 1.31a2.33 2.33 0 0 1-1.05.822l1.782 4.69H11.16l-1.54-4.22H8.506v4.22H7.2V6.506H9.7zm6.785 1.88c.43 0 .82.086 1.17.26.35.17.655.422.914.75v-.89h1.2v8.988h-1.2v-.888a2.568 2.568 0 0 1-.914.748c-.35.174-.74.26-1.17.26-.545 0-1.028-.134-1.45-.4a2.73 2.73 0 0 1-.978-1.108c-.233-.474-.35-1.012-.35-1.615v-.58c0-.603.117-1.14.35-1.615a2.73 2.73 0 0 1 .978-1.108c.422-.266.905-.4 1.45-.4zM9.456 8.032H8.506v3.02h.95c.7 0 1.195-.15 1.488-.452.294-.3.44-.7.44-1.2 0-.472-.143-.834-.43-1.084-.285-.25-.73-.376-1.5-.376zm7.037.75c-.548 0-.986.2-1.316.6-.33.4-.494.928-.494 1.585v.58c0 .655.165 1.182.494 1.582.33.4.768.6 1.316.6.322 0 .61-.075.866-.225a1.7 1.7 0 0 0 .622-.638v-3.82a1.7 1.7 0 0 0-.622-.64 1.736 1.736 0 0 0-.866-.224z",loom:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"},Gi=[{id:"communication",label:"Communication",emoji:"💬",tools:[{name:"Gmail",icon:"gmail"},{name:"Outlook",icon:"microsoftoutlook"},{name:"Slack",icon:"slack"},{name:"Microsoft Teams",icon:"microsoftteams"},{name:"Zoom",icon:"zoom"},{name:"Google Meet",icon:"googlemeet"},{name:"Skype",icon:"skype"},{name:"Discord",icon:"discord"},{name:"WhatsApp",icon:"whatsapp"}]},{id:"scheduling",label:"Scheduling",emoji:"📅",tools:[{name:"Calendly",icon:"calendly"},{name:"Google Calendar",icon:"googlecalendar"}]},{id:"projectmgmt",label:"Project Management",emoji:"📋",tools:[{name:"Trello",icon:"trello"},{name:"Asana",icon:"asana"},{name:"Monday.com",icon:"mondaydotcom"}]},{id:"cloud",label:"Cloud Storage",emoji:"☁️",tools:[{name:"Google Drive",icon:"googledrive"},{name:"Dropbox",icon:"dropbox"},{name:"OneDrive",icon:"microsoftonedrive"}]},{id:"webdev",label:"Web Development",emoji:"💻",tools:[{name:"VS Code",icon:"visualstudiocode"},{name:"React",icon:"react"},{name:"Tailwind CSS",icon:"tailwindcss"},{name:"Bootstrap",icon:"bootstrap"},{name:"Node.js",icon:"nodedotjs"},{name:"PHP",icon:"php"},{name:"MySQL",icon:"mysql"},{name:"PostgreSQL",icon:"postgresql"},{name:"Supabase",icon:"supabase"},{name:"GitHub",icon:"github"},{name:"GitLab",icon:"gitlab"},{name:"WordPress",icon:"wordpress"}]},{id:"design",label:"Graphic Design & Creative",emoji:"🎨",tools:[{name:"Photoshop",icon:"adobephotoshop"},{name:"Figma",icon:"figma"},{name:"Canva",icon:"canva"},{name:"Premiere Pro",icon:"adobepremierepro"}]},{id:"ai",label:"Automation & AI",emoji:"🤖",tools:[{name:"ChatGPT",icon:"openai"},{name:"Zapier",icon:"zapier"},{name:"Grammarly",icon:"grammarly"},{name:"Loom",icon:"loom"}]},{id:"security",label:"Security",emoji:"🔐",tools:[{name:"Bitwarden",icon:"bitwarden"}]}],Cf=Gi.reduce((v,A)=>v+A.tools.length,0);function Y5({icon:v}){const A=q5[v];return A?c.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:14,height:14},children:c.jsx("path",{d:A})}):c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",style:{width:14,height:14},children:c.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}function L5(){const[v,A]=bt.useState("all"),H=v==="all"?Gi:Gi.filter(d=>d.id===v);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .tools-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tools-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; right: -5%;
          width: 650px; height: 650px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 68%);
          pointer-events: none;
        }
        .tools-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; left: -5%;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .tools-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }
        .tools-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }
        .tools-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }
        .tools-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }
        .tools-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }
        .tools-section-heading span { color: #ffc850; }
        .tools-count-badge {
          margin-top: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .tools-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .tools-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .tools-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .tools-intro-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .tools-intro-pill {
          padding: 0.3rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }
        .tools-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.02rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.9;
          font-weight: 300;
        }
        .tools-bio em { color: #ffc850; font-style: normal; }
        .tools-bio strong { color: #fff; font-weight: 500; }
        .tools-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }
        .tools-filters {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .tools-filter-btn {
          padding: 0.4rem 1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .tools-filter-btn:hover {
          border-color: rgba(255,200,80,0.3);
          color: rgba(255,200,80,0.75);
        }
        .tools-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.4);
          color: #ffc850;
        }
        .tools-categories {
          display: flex;
          flex-direction: column;
          gap: 1.5px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }
        .tools-category-block {
          background: rgba(8,8,12,0.96);
          transition: background 0.2s;
        }
        .tools-category-block:hover { background: rgba(12,12,18,0.99); }
        .tools-cat-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.4rem 0.85rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .tools-cat-emoji { font-size: 0.95rem; line-height: 1; opacity: 0.8; }
        .tools-cat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s;
        }
        .tools-category-block:hover .tools-cat-label { color: rgba(255,200,80,0.7); }
        .tools-cat-count {
          margin-left: auto;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.3);
          transition: color 0.2s;
        }
        .tools-category-block:hover .tools-cat-count { color: rgba(255,200,80,0.6); }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 1rem 1.4rem 1.25rem;
        }
        .tools-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.38rem 0.8rem 0.38rem 0.65rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          cursor: default;
          transition: background 0.2s, border-color 0.2s, transform 0.18s;
        }
        .tools-chip:hover {
          background: rgba(255,200,80,0.06);
          border-color: rgba(255,200,80,0.25);
          transform: translateY(-1px);
        }
        .tools-chip-icon {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .tools-chip:hover .tools-chip-icon { color: #ffc850; }
        .tools-chip-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          white-space: nowrap;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .tools-chip:hover .tools-chip-name { color: rgba(255,255,255,0.85); }

        @media (max-width: 900px) {
          .tools-inner { padding: 5rem 2.5rem; gap: 3rem; }
          .tools-left { position: static; }
        }
        @media (max-width: 680px) {
          .tools-inner { padding: 4.5rem 1.5rem 5rem; flex-direction: column; gap: 0; }
          .tools-left { margin-bottom: 2rem; }
          .tools-section-heading { font-size: clamp(3.2rem, 16vw, 4.5rem); }
          .tools-count-badge { display: none; }
          .tools-cat-header { padding: 0.85rem 1rem 0.75rem; }
          .tools-grid { padding: 0.85rem 1rem 1rem; gap: 6px; }
          .tools-chip { padding: 0.3rem 0.65rem 0.3rem 0.5rem; }
          .tools-chip-name { font-size: 0.72rem; }
        }
        @media (max-width: 400px) {
          .tools-inner { padding: 4rem 1.25rem 4.5rem; }
          .tools-section-heading { font-size: 3rem; }
          .tools-chip-name { font-size: 0.68rem; }
        }
      `}),c.jsx("section",{className:"tools-wrapper",id:"tools",children:c.jsxs("div",{className:"tools-inner",children:[c.jsxs("div",{className:"tools-left",children:[c.jsx("span",{className:"tools-section-tag",children:"My Stack"}),c.jsxs("h2",{className:"tools-section-heading",children:["Tools &",c.jsx("br",{}),c.jsx("span",{children:"Skills"})]}),c.jsxs("div",{className:"tools-count-badge",children:[c.jsxs("span",{className:"tools-count-num",children:[Cf,"+"]}),c.jsx("span",{className:"tools-count-label",children:"Tools Known"})]})]}),c.jsxs("div",{className:"tools-right",children:[c.jsxs("div",{className:"tools-intro-line",children:[c.jsx("span",{className:"tools-intro-pill",children:"💬 Communication"}),c.jsx("span",{className:"tools-intro-pill",children:"💻 Web Dev"}),c.jsx("span",{className:"tools-intro-pill",children:"🎨 Design"}),c.jsx("span",{className:"tools-intro-pill",children:"🤖 AI & Automation"}),c.jsx("span",{className:"tools-intro-pill",children:"🔐 Security"})]}),c.jsxs("p",{className:"tools-bio",children:["A versatile toolkit spanning ",c.jsx("em",{children:"communication"}),", ",c.jsx("em",{children:"web development"}),","," ",c.jsx("em",{children:"design"}),", and ",c.jsx("em",{children:"automation"}),". These are the platforms and technologies I rely on daily to ",c.jsx("strong",{children:"deliver quality work"})," across every project."]}),c.jsx("div",{className:"tools-divider"}),c.jsxs("div",{className:"tools-filters",children:[c.jsxs("button",{className:`tools-filter-btn${v==="all"?" active":""}`,onClick:()=>A("all"),children:["All (",Cf,")"]}),Gi.map(d=>c.jsxs("button",{className:`tools-filter-btn${v===d.id?" active":""}`,onClick:()=>A(d.id),children:[d.emoji," ",d.label]},d.id))]}),c.jsx("div",{className:"tools-categories",children:H.map(d=>c.jsxs("div",{className:"tools-category-block",children:[c.jsxs("div",{className:"tools-cat-header",children:[c.jsx("span",{className:"tools-cat-emoji",children:d.emoji}),c.jsx("span",{className:"tools-cat-label",children:d.label}),c.jsx("span",{className:"tools-cat-count",children:d.tools.length})]}),c.jsx("div",{className:"tools-grid",children:d.tools.map(U=>c.jsxs("div",{className:"tools-chip",children:[c.jsx("span",{className:"tools-chip-icon",children:c.jsx(Y5,{icon:U.icon})}),c.jsx("span",{className:"tools-chip-name",children:U.name})]},U.name))})]},d.id))})]})]})})]})}const G5=[{label:"Facebook",handle:"Marlon Ampoon",href:"https://www.facebook.com/profile.php?id=61582378152401",icon:c.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{label:"Instagram",handle:"@dsaleiri",href:"https://www.instagram.com/dsaleiri/",icon:c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})}];function X5(){const[v,A]=bt.useState(!1),H=()=>{navigator.clipboard.writeText("servicesjmseptember@gmail.com"),A(!0),setTimeout(()=>A(!1),2e3)};return c.jsxs("section",{id:"contact",style:{position:"relative",overflow:"hidden"},children:[c.jsx("style",{children:`
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.6; }
          70%  { transform: scale(1.08); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes float-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .contact-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1300px;
          margin: 0 auto;
          padding: 6rem 3rem;
          gap: 6rem;
          align-items: center;
          animation: float-up 0.8s ease both;
        }

        @media (max-width: 740px) {
          .contact-section {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            padding: 4rem 24px;
          }
          .contact-right {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255,200,80,0.1);
            padding-top: 3rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-section { padding: 3.5rem 18px; gap: 2.75rem; }
          .contact-headline { font-size: clamp(2.6rem, 12vw, 4rem); }
          .contact-subtext { max-width: 100%; }
          .copy-btn, .social-link { min-height: 44px; }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contact-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #ffc850;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .contact-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.8rem, 9vw, 6.5rem);
          line-height: 0.92;
          color: #fff;
          letter-spacing: 0.03em;
          margin: 0 0 1.75rem;
        }

        .contact-headline span {
          color: #ffc850;
          display: block;
        }

        .contact-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          font-weight: 300;
          max-width: 360px;
          margin-bottom: 2.5rem;
        }

        .email-cta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .email-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .email-value {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 1.8vw, 0.95rem);
          color: rgba(255,255,255,0.75);
          font-weight: 400;
          word-break: break-all;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: transparent;
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 2px;
          color: #ffc850;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s ease;
          width: fit-content;
        }

        .copy-btn:hover {
          background: rgba(255,200,80,0.08);
          border-color: #ffc850;
        }

        .copy-btn.copied {
          background: rgba(255,200,80,0.12);
          color: #fff;
          border-color: #ffc850;
        }

        .social-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.1rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.22s ease;
          background: rgba(255,255,255,0.02);
        }

        .social-link:hover {
          color: #ffc850;
          border-color: rgba(255,200,80,0.4);
          background: rgba(255,200,80,0.05);
          transform: translateY(-2px);
        }

        .contact-right {
          border-left: 1px solid rgba(255,200,80,0.1);
          padding-left: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 1.1rem;
          border: 1px solid rgba(80,255,140,0.2);
          border-radius: 2px;
          background: rgba(80,255,140,0.04);
          width: fit-content;
        }

        .avail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #50ff8c;
          position: relative;
          flex-shrink: 0;
        }

        .avail-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(80,255,140,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }

        .avail-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #50ff8c;
        }

        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1.25rem 0;
          padding-left: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          transition: padding-left 0.25s ease;
        }

        .info-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 2px;
          height: 0;
          background: #ffc850;
          transition: height 0.3s ease;
        }

        .info-row:hover { padding-left: 1rem; }
        .info-row:hover::before { height: 100%; }

        .info-key {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
        }

        .info-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.7);
          font-weight: 300;
        }

        .deco-ring {
          position: absolute;
          top: 8%;
          right: -8%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,80,0.04);
          pointer-events: none;
          animation: spin-slow 30s linear infinite;
        }

        .deco-ring::before {
          content: '';
          position: absolute;
          top: 10%; left: -2px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ffc850;
          opacity: 0.5;
        }

        .deco-ring-2 {
          position: absolute;
          bottom: 10%;
          left: -6%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,80,0.03);
          pointer-events: none;
          animation: spin-slow 20s linear infinite reverse;
        }

        .phone-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          padding: 1.1rem 1.5rem;
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 2px;
          background: linear-gradient(135deg, rgba(255,200,80,0.06) 0%, transparent 100%);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .phone-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,80,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .phone-cta:hover {
          border-color: rgba(255,200,80,0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        .phone-cta:hover::after { opacity: 1; }

        .phone-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffc850;
          flex-shrink: 0;
          z-index: 1;
        }

        .phone-text {
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .phone-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 0.2rem;
        }

        .phone-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .contact-footer {
          max-width: 1300px;
          margin: 0 auto;
          padding: 1.5rem 3rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
        }

        .footer-dots {
          display: flex;
          gap: 0.4rem;
        }

        .footer-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,200,80,0.3);
        }

        .footer-dot:first-child { background: #ffc850; }
      `}),c.jsx("div",{className:"deco-ring"}),c.jsx("div",{className:"deco-ring-2"}),c.jsx("div",{style:{position:"absolute",top:"30%",left:"40%",width:"500px",height:"300px",background:"radial-gradient(ellipse, rgba(255,200,80,0.055) 0%, transparent 65%)",pointerEvents:"none",transform:"translateX(-50%)"}}),c.jsxs("div",{className:"contact-section",children:[c.jsxs("div",{className:"contact-left",children:[c.jsx("p",{className:"contact-eyebrow",children:"Contact"}),c.jsxs("h2",{className:"contact-headline",children:["Say",c.jsx("br",{}),"Hello",c.jsx("br",{}),c.jsx("span",{children:"To Me."})]}),c.jsx("p",{className:"contact-subtext",children:"Open for freelance projects, collaborations, and creative work. Let's build something worth remembering."}),c.jsxs("div",{className:"email-cta",children:[c.jsx("span",{className:"email-label",children:"Email Address"}),c.jsx("span",{className:"email-value",children:"servicesjmseptember@gmail.com"}),c.jsx("button",{className:`copy-btn${v?" copied":""}`,onClick:H,children:v?c.jsxs(c.Fragment,{children:[c.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):c.jsxs(c.Fragment,{children:[c.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy Email"]})})]}),c.jsx("div",{className:"social-row",children:G5.map(d=>c.jsxs("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:[d.icon,d.handle]},d.label))})]}),c.jsxs("div",{className:"contact-right",children:[c.jsxs("div",{className:"availability",children:[c.jsx("div",{className:"avail-dot"}),c.jsx("span",{className:"avail-text",children:"Available for Work"})]}),c.jsx("div",{className:"info-stack",children:[{key:"Based in",val:"Philippines"},{key:"Timezone",val:"PHT · UTC +8"},{key:"Response",val:"Within 24 hours"},{key:"Specialties",val:"Web Dev · UI Design · Graphic Art"}].map(d=>c.jsxs("div",{className:"info-row",children:[c.jsx("span",{className:"info-key",children:d.key}),c.jsx("span",{className:"info-val",children:d.val})]},d.key))}),c.jsxs("a",{href:"tel:+639352541057",className:"phone-cta",children:[c.jsx("div",{className:"phone-icon-wrap",children:c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})}),c.jsxs("div",{className:"phone-text",children:[c.jsx("span",{className:"phone-sub",children:"Call me directly"}),c.jsx("span",{className:"phone-num",children:"+63 935 254 1057"})]}),c.jsx("svg",{style:{marginLeft:"auto",color:"rgba(255,200,80,0.4)",zIndex:1},width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),c.jsxs("div",{className:"contact-footer",children:[c.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," Marlon Ampoon · All Rights Reserved"]}),c.jsxs("div",{className:"footer-dots",children:[c.jsx("div",{className:"footer-dot"}),c.jsx("div",{className:"footer-dot"}),c.jsx("div",{className:"footer-dot"})]})]})]})}function V5(){return c.jsxs(c.Fragment,{children:[c.jsx(g1,{}),c.jsx(k5,{}),c.jsx(H5,{}),c.jsx(R5,{}),c.jsx(L5,{}),c.jsx(X5,{})]})}const Q5=[{label:"Home",target:"home"},{label:"About",target:"about"},{label:"Graphics",target:"graphics"},{label:"Dev",target:"dev"},{label:"Experience",target:"experience"},{label:"Tools",target:"tools"},{label:"Contact",target:"contact"}],Z5=[{label:"Facebook",href:"https://www.facebook.com/profile.php?id=61582378152401",icon:c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{label:"Instagram",href:"https://www.instagram.com/dsaleiri/",icon:c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})},{label:"Email",href:"mailto:servicesjmseptember@gmail.com",icon:c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),c.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]})},{label:"Phone",href:"tel:+639352541057",icon:c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})}];function K5(){const v=A=>document.getElementById(A)?.scrollIntoView({behavior:"smooth"});return c.jsxs("footer",{style:{position:"relative",overflow:"hidden"},children:[c.jsx("style",{children:`
        /* ── Top glow line ── */
        .footer-glow-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,200,80,0.35) 30%,
            rgba(255,200,80,0.6) 50%,
            rgba(255,200,80,0.35) 70%,
            transparent 100%
          );
        }

        /* ── Main footer body ── */
        .footer-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: 3.5rem 3rem 2rem;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 760px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer-body {
            grid-template-columns: 1fr;
          }
          .footer-social-btn { width: 44px; height: 44px; }
        }

        /* ── Brand column ── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.08em;
          color: #fff;
          line-height: 1;
        }

        .footer-logo-name span {
          color: #ffc850;
        }

        .footer-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .footer-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.8;
          font-weight: 300;
          max-width: 260px;
          margin-top: 0.25rem;
        }

        /* Social icons row */
        .footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 2px;
          border: 1px solid rgba(255,200,80,0.15);
          background: rgba(255,255,255,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: all 0.22s ease;
          flex-shrink: 0;
        }

        .footer-social-btn:hover {
          border-color: #ffc850;
          color: #ffc850;
          background: rgba(255,200,80,0.07);
          transform: translateY(-2px);
        }

        /* ── Nav column ── */
        .footer-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #ffc850;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,200,80,0.15);
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          text-align: left;
          padding: 0;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-nav-btn::before {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: #ffc850;
          transition: width 0.2s ease;
          flex-shrink: 0;
        }

        .footer-nav-btn:hover {
          color: #ffc850;
          transform: translateX(4px);
        }

        .footer-nav-btn:hover::before {
          width: 12px;
        }

        /* ── Contact column ── */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .footer-contact-key {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .footer-contact-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }

        a.footer-contact-val:hover {
          color: #ffc850;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          max-width: 1300px;
          margin: 0 auto;
          padding: 1.25rem 3rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .footer-made {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-made span {
          color: #ffc850;
          font-size: 0.75rem;
        }

        /* ── Decorative bg glow ── */
        .footer-bg-glow {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 200px;
          background: radial-gradient(ellipse at bottom, rgba(255,200,80,0.045) 0%, transparent 70%);
          pointer-events: none;
        }
      `}),c.jsx("div",{className:"footer-bg-glow"}),c.jsx("div",{className:"footer-glow-line"}),c.jsxs("div",{className:"footer-body",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"footer-logo-name",children:["Marlon ",c.jsx("span",{children:"Ampoon"})]}),c.jsx("div",{className:"footer-tagline",children:"Web Dev · Graphic Artist · UI Designer"})]}),c.jsx("p",{className:"footer-desc",children:"Crafting digital experiences where clean code meets striking visual design."}),c.jsx("div",{className:"footer-socials",children:Z5.map(A=>c.jsx("a",{href:A.href,target:A.href.startsWith("http")?"_blank":void 0,rel:A.href.startsWith("http")?"noopener noreferrer":void 0,className:"footer-social-btn","aria-label":A.label,title:A.label,children:A.icon},A.label))})]}),c.jsxs("div",{children:[c.jsx("p",{className:"footer-col-title",children:"Navigation"}),c.jsx("ul",{className:"footer-nav-list",children:Q5.map(A=>c.jsx("li",{children:c.jsx("button",{className:"footer-nav-btn",onClick:()=>v(A.target),children:A.label})},A.target))})]}),c.jsxs("div",{children:[c.jsx("p",{className:"footer-col-title",children:"Contact"}),c.jsxs("ul",{className:"footer-contact-list",children:[c.jsxs("li",{className:"footer-contact-item",children:[c.jsx("span",{className:"footer-contact-key",children:"Email"}),c.jsx("a",{href:"mailto:servicesjmseptember@gmail.com",className:"footer-contact-val",children:"servicesjmseptember@gmail.com"})]}),c.jsxs("li",{className:"footer-contact-item",children:[c.jsx("span",{className:"footer-contact-key",children:"Phone"}),c.jsx("a",{href:"tel:+639352541057",className:"footer-contact-val",children:"+63 935 254 1057"})]}),c.jsxs("li",{className:"footer-contact-item",children:[c.jsx("span",{className:"footer-contact-key",children:"Facebook"}),c.jsx("a",{href:"https://www.facebook.com/profile.php?id=61582378152401",target:"_blank",rel:"noopener noreferrer",className:"footer-contact-val",children:"Marlon Ampoon"})]}),c.jsxs("li",{className:"footer-contact-item",children:[c.jsx("span",{className:"footer-contact-key",children:"Instagram"}),c.jsx("a",{href:"https://www.instagram.com/dsaleiri/",target:"_blank",rel:"noopener noreferrer",className:"footer-contact-val",children:"@dsaleiri"})]})]})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," Marlon Ampoon · All Rights Reserved"]}),c.jsxs("span",{className:"footer-made",children:["Made with ",c.jsx("span",{children:"♥"})," in the Philippines"]})]})]})}function J5(){const v=A=>document.getElementById(A)?.scrollIntoView({behavior:"smooth"});return c.jsxs("section",{id:"home",style:{minHeight:"86vh",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",maxWidth:"997px",margin:"0 auto",width:"100%",position:"relative",padding:"33px 24px"},children:[c.jsx("div",{style:{position:"absolute",top:"20%",left:"-10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(255,200,80,0.07) 0%, transparent 70%)",pointerEvents:"none"}}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"clamp(2rem, 6vw, 5rem)",flexWrap:"wrap",width:"100%"},children:[c.jsxs("div",{style:{flex:"1 1 280px",zIndex:1,minWidth:0},children:[c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.72rem",letterSpacing:"0.4em",textTransform:"uppercase",color:"#ffc850",marginBottom:"1rem"},children:"Hello, I'm"}),c.jsxs("h1",{style:{fontFamily:"'Bebas Neue', sans-serif",fontSize:"clamp(3rem, 10vw, 8.5rem)",letterSpacing:"0.04em",lineHeight:.93,color:"#fff",margin:"0 0 1.25rem"},children:["Marlon",c.jsx("br",{}),c.jsx("span",{style:{color:"#ffc850"},children:"Ampoon"})]}),c.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:["Web Developer","Graphic Artist","UI Designer"].map(A=>c.jsx("span",{style:{padding:"0.3rem 0.85rem",border:"1px solid rgba(255,200,80,0.3)",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"#ffc850"},children:A},A))}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"clamp(0.85rem, 2vw, 1.1rem)",color:"rgba(255,255,255,0.5)",maxWidth:"440px",lineHeight:1.75,marginBottom:"2.5rem",fontWeight:300},children:"Crafting digital experiences where clean, purposeful code meets striking visual design. From pixel-perfect UIs to bold graphic work — I build things that look great and work even better."}),c.jsxs("div",{style:{display:"flex",gap:"0.85rem",flexWrap:"wrap"},children:[c.jsx("button",{onClick:()=>v("graphics"),style:{padding:"0.75rem 2rem",background:"#ffc850",color:"#08080c",border:"none",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontWeight:700,fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:A=>A.currentTarget.style.background="#fff",onMouseLeave:A=>A.currentTarget.style.background="#ffc850",children:"View My Work"}),c.jsx("button",{onClick:()=>v("contact"),style:{padding:"0.75rem 2rem",background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",transition:"border-color 0.2s"},onMouseEnter:A=>A.currentTarget.style.borderColor="#ffc850",onMouseLeave:A=>A.currentTarget.style.borderColor="rgba(255,255,255,0.2)",children:"Get In Touch"})]})]}),c.jsx("div",{style:{flex:"0 0 auto",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:"clamp(140px, 26vw, 320px)"},children:c.jsx("div",{style:{width:"clamp(140px, 26vw, 320px)",height:"clamp(140px, 26vw, 320px)",borderRadius:"50%",padding:"4px",background:"linear-gradient(135deg, #ffc850 0%, #ff8c00 50%, #08080c 100%)",boxShadow:"0 0 80px rgba(255,200,80,0.18)"},children:c.jsx("div",{style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",background:"#1a1a22"},children:c.jsx("img",{src:ps,alt:"Marlon Ampoon",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}})})})})]}),c.jsxs("div",{style:{position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",opacity:.4},children:[c.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.6rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"#fff"},children:"Scroll"}),c.jsx("div",{style:{width:"1px",height:"40px",background:"linear-gradient(to bottom, #ffc850, transparent)"}})]})]})}function W5(){return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: #08080c;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,200,80,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,200,80,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }



        main {
  padding-top: 72px;
  width: 100vw;          /* ← change from 100vw to 100% */
  overflow-x: hidden;   /* ← add this as a safety net */
}

        /* ── Mobile hero layout fix ── */
        @media (max-width: 600px) {
          #home > div:first-of-type {
            flex-direction: column-reverse !important;
            align-items: center !important;
          }
          #home > div:first-of-type > div:last-child {
            max-width: 160px !important;
            width: 160px !important;
          }
          #home > div:first-of-type > div:first-child {
            flex: 1 1 100% !important;
            width: 100%;
          }
        }
      `}),c.jsx(m1,{}),c.jsxs("main",{children:[c.jsx(J5,{}),c.jsx(V5,{})]}),c.jsx(K5,{})]})}d1.createRoot(document.getElementById("root")).render(c.jsx(bt.StrictMode,{children:c.jsx(W5,{})}));
