(self.webpackChunkflightTracker=self.webpackChunkflightTracker||[]).push([[429],{320:()=>{!function(){"use strict";!function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const te=HTMLElement;window.HTMLElement=function(){return Reflect.construct(te,[],this.constructor)},HTMLElement.prototype=te.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,te)}()}()},717:(te,_e,ce)=>{"use strict";ce(450),ce(320)},450:()=>{"use strict";!function(e){const n=e.performance;function i(L){n&&n.mark&&n.mark(L)}function o(L,E){n&&n.measure&&n.measure(L,E)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function a(L){return c+L}const y=!0===e[a("forceDuplicateZoneCheck")];if(e.Zone){if(y||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let d=(()=>{class L{constructor(t,r){this._parent=t,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(e.Promise!==se.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=L.current;for(;t.parent;)t=t.parent;return t}static get current(){return U.zone}static get currentTask(){return oe}static __load_patch(t,r,k=!1){if(se.hasOwnProperty(t)){if(!k&&y)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const C="Zone:"+t;i(C),se[t]=r(e,L,q),o(C,C)}}get parent(){return this._parent}get name(){return this._name}get(t){const r=this.getZoneWith(t);if(r)return r._properties[t]}getZoneWith(t){let r=this;for(;r;){if(r._properties.hasOwnProperty(t))return r;r=r._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,r){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const k=this._zoneDelegate.intercept(this,t,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(t,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,t,r,k,C)}finally{U=U.parent}}runGuarded(t,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,t,r,k,C)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{U=U.parent}}runTask(t,r,k){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===x&&(t.type===Q||t.type===P))return;const C=t.state!=m;C&&t._transitionTo(m,j),t.runCount++;const $=oe;oe=t,U={parent:U,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==x&&t.state!==h&&(t.type==Q||t.data&&t.data.isPeriodic?C&&t._transitionTo(j,m):(t.runCount=0,this._updateTaskCount(t,-1),C&&t._transitionTo(x,m,x))),U=U.parent,oe=$}}scheduleTask(t){if(t.zone&&t.zone!==this){let k=this;for(;k;){if(k===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);k=k.parent}}t._transitionTo(z,x);const r=[];t._zoneDelegates=r,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(k){throw t._transitionTo(h,z,x),this._zoneDelegate.handleError(this,k),k}return t._zoneDelegates===r&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(j,z),t}scheduleMicroTask(t,r,k,C){return this.scheduleTask(new p(M,t,r,k,C,void 0))}scheduleMacroTask(t,r,k,C,$){return this.scheduleTask(new p(P,t,r,k,C,$))}scheduleEventTask(t,r,k,C,$){return this.scheduleTask(new p(Q,t,r,k,C,$))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");t._transitionTo(G,j,m);try{this._zoneDelegate.cancelTask(this,t)}catch(r){throw t._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(t,-1),t._transitionTo(x,G),t.runCount=0,t}_updateTaskCount(t,r){const k=t._zoneDelegates;-1==r&&(t._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(t.type,r)}}return L.__symbol__=a,L})();const w={name:"",onHasTask:(L,E,t,r)=>L.hasTask(t,r),onScheduleTask:(L,E,t,r)=>L.scheduleTask(t,r),onInvokeTask:(L,E,t,r,k,C)=>L.invokeTask(t,r,k,C),onCancelTask:(L,E,t,r)=>L.cancelTask(t,r)};class v{constructor(E,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=E,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||t&&t._hasTaskZS)&&(this._hasTaskZS=k?r:w,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=E,r.onScheduleTask||(this._scheduleTaskZS=w,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=w,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=w,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(E,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,E,t):new d(E,t)}intercept(E,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,E,t,r):t}invoke(E,t,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,E,t,r,k,C):t.apply(r,k)}handleError(E,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,E,t)}scheduleTask(E,t){let r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,E,t),r||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=M)throw new Error("Task is missing scheduleFn.");R(t)}return r}invokeTask(E,t,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,E,t,r,k):t.callback.apply(r,k)}cancelTask(E,t){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,E,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r}hasTask(E,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,E,t)}catch(r){this.handleError(E,r)}}_updateTaskCount(E,t){const r=this._taskCounts,k=r[E],C=r[E]=k+t;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:E})}}class p{constructor(E,t,r,k,C,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=E,this.source=t,this.data=k,this.scheduleFn=C,this.cancelFn=$,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=E===Q&&k&&k.useG?p.invokeTask:function(){return p.invokeTask.call(e,l,this,arguments)}}static invokeTask(E,t,r){E||(E=this),ee++;try{return E.runCount++,E.zone.runTask(E,t,r)}finally{1==ee&&_(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,z)}_transitionTo(E,t,r){if(this._state!==t&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${E}', expecting state '${t}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=E,E==x&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const I=a("setTimeout"),Z=a("Promise"),N=a("then");let J,F=[],H=!1;function X(L){if(J||e[Z]&&(J=e[Z].resolve(0)),J){let E=J[N];E||(E=J.then),E.call(J,L)}else e[I](L,0)}function R(L){0===ee&&0===F.length&&X(_),L&&F.push(L)}function _(){if(!H){for(H=!0;F.length;){const L=F;F=[];for(let E=0;E<L.length;E++){const t=L[E];try{t.zone.runTask(t,null,null)}catch(r){q.onUnhandledError(r)}}}q.microtaskDrainDone(),H=!1}}const K={name:"NO ZONE"},x="notScheduled",z="scheduling",j="scheduled",m="running",G="canceling",h="unknown",M="microTask",P="macroTask",Q="eventTask",se={},q={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:X};let U={parent:null,zone:new d(null,null)},oe=null,ee=0;function W(){}o("Zone","Zone"),e.Zone=d}(typeof window<"u"&&window||typeof self<"u"&&self||global);const te=Object.getOwnPropertyDescriptor,_e=Object.defineProperty,ce=Object.getPrototypeOf,ge=Object.create,Ve=Array.prototype.slice,ke="addEventListener",Pe="removeEventListener",Ze=Zone.__symbol__(ke),Ne=Zone.__symbol__(Pe),ae="true",le="false",ve=Zone.__symbol__("");function Me(e,n){return Zone.current.wrap(e,n)}function Le(e,n,i,o,c){return Zone.current.scheduleMacroTask(e,n,i,o,c)}const A=Zone.__symbol__,Re=typeof window<"u",Te=Re?window:void 0,Y=Re&&Te||"object"==typeof self&&self||global,ct="removeAttribute";function Ie(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=Me(e[i],n+"_"+i));return e}function Be(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ce=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),je=!Ce&&!Fe&&!(!Re||!Te.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Fe&&!(!Re||!Te.HTMLElement),Oe={},We=function(e){if(!(e=e||Y.event))return;let n=Oe[e.type];n||(n=Oe[e.type]=A("ON_PROPERTY"+e.type));const i=this||e.target||Y,o=i[n];let c;return je&&i===Te&&"error"===e.type?(c=o&&o.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===c&&e.preventDefault()):(c=o&&o.apply(this,arguments),null!=c&&!c&&e.preventDefault()),c};function Xe(e,n,i){let o=te(e,n);if(!o&&i&&te(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=A("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete o.writable,delete o.value;const a=o.get,y=o.set,d=n.slice(2);let w=Oe[d];w||(w=Oe[d]=A("ON_PROPERTY"+d)),o.set=function(v){let p=this;!p&&e===Y&&(p=Y),p&&("function"==typeof p[w]&&p.removeEventListener(d,We),y&&y.call(p,null),p[w]=v,"function"==typeof v&&p.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&e===Y&&(v=Y),!v)return null;const p=v[w];if(p)return p;if(a){let I=a.call(this);if(I)return o.set.call(this,I),"function"==typeof v[ct]&&v.removeAttribute(n),I}return null},_e(e,n,o),e[c]=!0}function ze(e,n,i){if(n)for(let o=0;o<n.length;o++)Xe(e,"on"+n[o],i);else{const o=[];for(const c in e)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)Xe(e,o[c],i)}}const re=A("originalInstance");function be(e){const n=Y[e];if(!n)return;Y[A(e)]=n,Y[e]=function(){const c=Ie(arguments,e);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},fe(Y[e],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===e&&"responseBlob"===o||function(c){"function"==typeof i[c]?Y[e].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:_e(Y[e].prototype,c,{set:function(a){"function"==typeof a?(this[re][c]=Me(a,e+"."+c),fe(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(Y[e][o]=n[o])}function ue(e,n,i){let o=e;for(;o&&!o.hasOwnProperty(n);)o=ce(o);!o&&e[n]&&(o=e);const c=A(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Be(o&&te(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},fe(o[n],a)}return a}function lt(e,n,i){let o=null;function c(a){const y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=ue(e,n,a=>function(y,d){const w=i(y,d);return w.cbIdx>=0&&"function"==typeof d[w.cbIdx]?Le(w.name,d[w.cbIdx],w,c):a.apply(y,d)})}function fe(e,n){e[A("OriginalDelegate")]=n}let qe=!1,Ae=!1;function ft(){if(qe)return Ae;qe=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ae=!0)}catch{}return Ae}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,y=i.symbol,d=[],w=!0===e[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=y("Promise"),p=y("then"),I="__creationTrace__";i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const Z=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[Z];"function"==typeof u&&u.call(this,l)}catch{}}function F(l){return l&&l.then}function H(l){return l}function J(l){return t.reject(l)}const X=y("state"),R=y("value"),_=y("finally"),K=y("parentPromiseValue"),x=y("parentPromiseState"),z="Promise.then",j=null,m=!0,G=!1,h=0;function M(l,u){return s=>{try{q(l,u,s)}catch(f){q(l,!1,f)}}}const P=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",se=y("currentTaskTrace");function q(l,u,s){const f=P();if(l===s)throw new TypeError(Q);if(l[X]===j){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(b){return f(()=>{q(l,!1,b)})(),l}if(u!==G&&s instanceof t&&s.hasOwnProperty(X)&&s.hasOwnProperty(R)&&s[X]!==j)oe(s),q(l,s[X],s[R]);else if(u!==G&&"function"==typeof g)try{g.call(s,f(M(l,u)),f(M(l,!1)))}catch(b){f(()=>{q(l,!1,b)})()}else{l[X]=u;const b=l[R];if(l[R]=s,l[_]===_&&u===m&&(l[X]=l[x],l[R]=l[K]),u===G&&s instanceof Error){const T=n.currentTask&&n.currentTask.data&&n.currentTask.data[I];T&&c(s,se,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<b.length;)ee(l,b[T++],b[T++],b[T++],b[T++]);if(0==b.length&&u==G){l[X]=h;let T=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(O){T=O}w&&(T.throwOriginal=!0),T.rejection=s,T.promise=l,T.zone=n.current,T.task=n.currentTask,d.push(T),i.scheduleMicroTask()}}}return l}const U=y("rejectionHandledHandler");function oe(l){if(l[X]===h){try{const u=n[U];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch{}l[X]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ee(l,u,s,f,g){oe(l);const b=l[X],T=b?"function"==typeof f?f:H:"function"==typeof g?g:J;u.scheduleMicroTask(z,()=>{try{const O=l[R],D=!!s&&_===s[_];D&&(s[K]=O,s[x]=b);const S=u.run(T,void 0,D&&T!==J&&T!==H?[]:[O]);q(s,!0,S)}catch(O){q(s,!1,O)}},s)}const L=function(){},E=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return q(new this(null),m,u)}static reject(u){return q(new this(null),G,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new E([],"All promises were rejected"));const s=[];let f=0;try{for(let T of u)f++,s.push(t.resolve(T))}catch{return Promise.reject(new E([],"All promises were rejected"))}if(0===f)return Promise.reject(new E([],"All promises were rejected"));let g=!1;const b=[];return new t((T,O)=>{for(let D=0;D<s.length;D++)s[D].then(S=>{g||(g=!0,T(S))},S=>{b.push(S),f--,0===f&&(g=!0,O(new E(b,"All promises were rejected")))})})}static race(u){let s,f,g=new this((O,D)=>{s=O,f=D});function b(O){s(O)}function T(O){f(O)}for(let O of u)F(O)||(O=this.resolve(O)),O.then(b,T);return g}static all(u){return t.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,b=new this((S,V)=>{f=S,g=V}),T=2,O=0;const D=[];for(let S of u){F(S)||(S=this.resolve(S));const V=O;try{S.then(B=>{D[V]=s?s.thenCallback(B):B,T--,0===T&&f(D)},B=>{s?(D[V]=s.errorCallback(B),T--,0===T&&f(D)):g(B)})}catch(B){g(B)}T++,O++}return T-=2,0===T&&f(D),b}constructor(u){const s=this;if(!(s instanceof t))throw new Error("Must be an instanceof Promise.");s[X]=j,s[R]=[];try{const f=P();u&&u(f(M(s,m)),f(M(s,G)))}catch(f){q(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(u,s){var f;let g=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||t);const b=new g(L),T=n.current;return this[X]==j?this[R].push(T,b,u,s):ee(this,T,b,u,s),b}catch(u){return this.then(null,u)}finally(u){var s;let f=null===(s=this.constructor)||void 0===s?void 0:s[Symbol.species];(!f||"function"!=typeof f)&&(f=t);const g=new f(L);g[_]=_;const b=n.current;return this[X]==j?this[R].push(b,g,u,u):ee(this,b,g,u,u),g}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const r=e[v]=e.Promise;e.Promise=t;const k=y("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[p]=f,l.prototype.then=function(g,b){return new t((O,D)=>{f.call(this,O,D)}).then(g,b)},l[k]=!0}return i.patchThen=C,r&&(C(r),ue(e,"fetch",l=>function $(l){return function(u,s){let f=l.apply(u,s);if(f instanceof t)return f;let g=f.constructor;return g[k]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=A("OriginalDelegate"),o=A("Promise"),c=A("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const p=e[o];if(p)return n.call(p)}if(this===Error){const p=e[c];if(p)return n.call(p)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});let ye=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ye=!1}const ht={useG:!0},ne={},Ye={},$e=new RegExp("^"+ve+"(\\w+)(true|false)$"),Ke=A("propagationStopped");function Je(e,n){const i=(n?n(e):e)+le,o=(n?n(e):e)+ae,c=ve+i,a=ve+o;ne[e]={},ne[e][le]=c,ne[e][ae]=a}function dt(e,n,i,o){const c=o&&o.add||ke,a=o&&o.rm||Pe,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",w=A(c),v="."+c+":",p="prependListener",I="."+p+":",Z=function(R,_,K){if(R.isRemoved)return;const x=R.callback;let z;"object"==typeof x&&x.handleEvent&&(R.callback=m=>x.handleEvent(m),R.originalDelegate=x);try{R.invoke(R,_,[K])}catch(m){z=m}const j=R.options;return j&&"object"==typeof j&&j.once&&_[a].call(_,K.type,R.originalDelegate?R.originalDelegate:R.callback,j),z};function N(R,_,K){if(!(_=_||e.event))return;const x=R||_.target||e,z=x[ne[_.type][K?ae:le]];if(z){const j=[];if(1===z.length){const m=Z(z[0],x,_);m&&j.push(m)}else{const m=z.slice();for(let G=0;G<m.length&&(!_||!0!==_[Ke]);G++){const h=Z(m[G],x,_);h&&j.push(h)}}if(1===j.length)throw j[0];for(let m=0;m<j.length;m++){const G=j[m];n.nativeScheduleMicroTask(()=>{throw G})}}}const F=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function J(R,_){if(!R)return!1;let K=!0;_&&void 0!==_.useG&&(K=_.useG);const x=_&&_.vh;let z=!0;_&&void 0!==_.chkDup&&(z=_.chkDup);let j=!1;_&&void 0!==_.rt&&(j=_.rt);let m=R;for(;m&&!m.hasOwnProperty(c);)m=ce(m);if(!m&&R[c]&&(m=R),!m||m[w])return!1;const G=_&&_.eventNameToString,h={},M=m[w]=m[c],P=m[A(a)]=m[a],Q=m[A(y)]=m[y],se=m[A(d)]=m[d];let q;_&&_.prepend&&(q=m[A(_.prepend)]=m[_.prepend]);const t=K?function(s){if(!h.isExisting)return M.call(h.target,h.eventName,h.capture?H:F,h.options)}:function(s){return M.call(h.target,h.eventName,s.invoke,h.options)},r=K?function(s){if(!s.isRemoved){const f=ne[s.eventName];let g;f&&(g=f[s.capture?ae:le]);const b=g&&s.target[g];if(b)for(let T=0;T<b.length;T++)if(b[T]===s){b.splice(T,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?H:F,s.options)}:function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},$=Zone[A("UNPATCHED_EVENTS")],l=e[A("PASSIVE_EVENTS")],u=function(s,f,g,b,T=!1,O=!1){return function(){const D=this||e;let S=arguments[0];_&&_.transferEventName&&(S=_.transferEventName(S));let V=arguments[1];if(!V)return s.apply(this,arguments);if(Ce&&"uncaughtException"===S)return s.apply(this,arguments);let B=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);B=!0}if(x&&!x(s,V,D,arguments))return;const he=ye&&!!l&&-1!==l.indexOf(S),ie=function U(s,f){return!ye&&"object"==typeof s&&s?!!s.capture:ye&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}(arguments[2],he);if($)for(let Ee=0;Ee<$.length;Ee++)if(S===$[Ee])return he?s.call(D,S,V,ie):s.apply(this,arguments);const xe=!!ie&&("boolean"==typeof ie||ie.capture),nt=!(!ie||"object"!=typeof ie)&&ie.once,gt=Zone.current;let Ge=ne[S];Ge||(Je(S,G),Ge=ne[S]);const rt=Ge[xe?ae:le];let Se,pe=D[rt],ot=!1;if(pe){if(ot=!0,z)for(let Ee=0;Ee<pe.length;Ee++)if(C(pe[Ee],V))return}else pe=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Se=it[S]),Se||(Se=st+f+(G?G(S):S)),h.options=ie,nt&&(h.options.once=!1),h.target=D,h.capture=xe,h.eventName=S,h.isExisting=ot;const we=K?ht:void 0;we&&(we.taskData=h);const de=gt.scheduleEventTask(Se,V,we,g,b);return h.target=null,we&&(we.taskData=null),nt&&(ie.once=!0),!ye&&"boolean"==typeof de.options||(de.options=ie),de.target=D,de.capture=xe,de.eventName=S,B&&(de.originalDelegate=V),O?pe.unshift(de):pe.push(de),T?D:void 0}};return m[c]=u(M,v,t,r,j),q&&(m[p]=u(q,I,function(s){return q.call(h.target,h.eventName,s.invoke,h.options)},r,j,!0)),m[a]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],b=!!g&&("boolean"==typeof g||g.capture),T=arguments[1];if(!T)return P.apply(this,arguments);if(x&&!x(P,T,s,arguments))return;const O=ne[f];let D;O&&(D=O[b?ae:le]);const S=D&&s[D];if(S)for(let V=0;V<S.length;V++){const B=S[V];if(C(B,T))return S.splice(V,1),B.isRemoved=!0,0===S.length&&(B.allRemoved=!0,s[D]=null,"string"==typeof f)&&(s[ve+"ON_PROPERTY"+f]=null),B.zone.cancelTask(B),j?s:void 0}return P.apply(this,arguments)},m[y]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],b=Qe(s,G?G(f):f);for(let T=0;T<b.length;T++){const O=b[T];g.push(O.originalDelegate?O.originalDelegate:O.callback)}return g},m[d]=function(){const s=this||e;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ne[f];if(g){const O=s[g[le]],D=s[g[ae]];if(O){const S=O.slice();for(let V=0;V<S.length;V++){const B=S[V];this[a].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(D){const S=D.slice();for(let V=0;V<S.length;V++){const B=S[V];this[a].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const g=Object.keys(s);for(let b=0;b<g.length;b++){const O=$e.exec(g[b]);let D=O&&O[1];D&&"removeListener"!==D&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(j)return this},fe(m[c],M),fe(m[a],P),se&&fe(m[d],se),Q&&fe(m[y],Q),!0}let X=[];for(let R=0;R<i.length;R++)X[R]=J(i[R],o);return X}function Qe(e,n){if(!n){const a=[];for(let y in e){const d=$e.exec(y);let w=d&&d[1];if(w&&(!n||w===n)){const v=e[y];if(v)for(let p=0;p<v.length;p++)a.push(v[p])}}return a}let i=ne[n];i||(Je(n),i=ne[n]);const o=e[i[le]],c=e[i[ae]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Ke]=!0,o&&o.apply(c,a)})}function Et(e,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const y=n[a]=n[o];n[o]=function(d,w,v){return w&&w.prototype&&c.forEach(function(p){const I=`${i}.${o}::`+p,Z=w.prototype;try{if(Z.hasOwnProperty(p)){const N=e.ObjectGetOwnPropertyDescriptor(Z,p);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,I),e._redefineProperty(w.prototype,p,N)):Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],I))}else Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],I))}catch{}}),y.call(n,d,w,v)},e.attachOriginToPatched(n[o],y)}function et(e,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===e);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(e,n,i,o){e&&ze(e,et(e,n,i),o)}function He(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,i)=>{const o=He(e);i.patchOnProperties=ze,i.patchMethod=ue,i.bindArguments=Ie,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");e[a]&&(e[c]=e[a]),e[c]&&(n[c]=n[a]=e[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=_e,i.ObjectGetOwnPropertyDescriptor=te,i.ObjectCreate=ge,i.ArraySlice=Ve,i.patchClass=be,i.wrapWithCurrentZone=Me,i.filterProperties=et,i.attachOriginToPatched=fe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Et,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:o,isBrowser:je,isMix:Ue,isNode:Ce,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:ke,REMOVE_EVENT_LISTENER_STR:Pe})});const De=A("zoneTask");function me(e,n,i,o){let c=null,a=null;i+=o;const y={};function d(v){const p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=c.apply(e,p.args),v}function w(v){return a.call(e,v.data.handleId)}c=ue(e,n+=o,v=>function(p,I){if("function"==typeof I[0]){const Z={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?I[1]||0:void 0,args:I},N=I[0];I[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete y[Z.handleId]:Z.handleId&&(Z.handleId[De]=null))}};const F=Le(n,I[0],Z,d,w);if(!F)return F;const H=F.data.handleId;return"number"==typeof H?y[H]=F:H&&(H[De]=F),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(F.ref=H.ref.bind(H),F.unref=H.unref.bind(H)),"number"==typeof H||H?H:F}return v.apply(e,I)}),a=ue(e,i,v=>function(p,I){const Z=I[0];let N;"number"==typeof Z?N=y[Z]:(N=Z&&Z[De],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete y[Z]:Z&&(Z[De]=null),N.zone.cancelTask(N)):v.apply(e,I)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";me(e,n,i,"Timeout"),me(e,n,i,"Interval"),me(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{me(e,"request","cancel","AnimationFrame"),me(e,"mozRequest","mozCancel","AnimationFrame"),me(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)ue(e,i[o],(a,y,d)=>function(w,v){return n.current.run(a,e,v,d)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function pt(e,n){n.patchEventPrototype(e,n)})(e,i),function mt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let w=0;w<i.length;w++){const v=i[w],Z=y+(v+a),N=y+(v+c);o[v]={},o[v][a]=Z,o[v][c]=N}const d=e.EventTarget;d&&d.prototype&&n.patchEventTarget(e,n,[d&&d.prototype])}(e,i);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{be("MutationObserver"),be("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{be("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{be("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function Tt(e,n){if(Ce&&!Ue||Zone[e.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(je){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,He(c),i&&i.concat(a),ce(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,He(a.prototype),i)}}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function yt(e,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function w(v){const p=v.XMLHttpRequest;if(!p)return;const I=p.prototype;let N=I[Ze],F=I[Ne];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const M=h.prototype;N=M[Ze],F=M[Ne]}}const H="readystatechange",J="scheduled";function X(h){const M=h.data,P=M.target;P[a]=!1,P[d]=!1;const Q=P[c];N||(N=P[Ze],F=P[Ne]),Q&&F.call(P,H,Q);const se=P[c]=()=>{if(P.readyState===P.DONE)if(!M.aborted&&P[a]&&h.state===J){const U=P[n.__symbol__("loadfalse")];if(0!==P.status&&U&&U.length>0){const oe=h.invoke;h.invoke=function(){const ee=P[n.__symbol__("loadfalse")];for(let W=0;W<ee.length;W++)ee[W]===h&&ee.splice(W,1);!M.aborted&&h.state===J&&oe.call(h)},U.push(h)}else h.invoke()}else!M.aborted&&!1===P[a]&&(P[d]=!0)};return N.call(P,H,se),P[i]||(P[i]=h),m.apply(P,M.args),P[a]=!0,h}function R(){}function _(h){const M=h.data;return M.aborted=!0,G.apply(M.target,M.args)}const K=ue(I,"open",()=>function(h,M){return h[o]=0==M[2],h[y]=M[1],K.apply(h,M)}),z=A("fetchTaskAborting"),j=A("fetchTaskScheduling"),m=ue(I,"send",()=>function(h,M){if(!0===n.current[j]||h[o])return m.apply(h,M);{const P={target:h,url:h[y],isPeriodic:!1,args:M,aborted:!1},Q=Le("XMLHttpRequest.send",R,P,X,_);h&&!0===h[d]&&!P.aborted&&Q.state===J&&Q.invoke()}}),G=ue(I,"abort",()=>function(h,M){const P=function Z(h){return h[i]}(h);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[z])return G.apply(h,M)})}(e);const i=A("xhrTask"),o=A("xhrSync"),c=A("xhrListener"),a=A("xhrScheduled"),y=A("xhrURL"),d=A("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const i=e.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=e[c];if(a){if(!Be(te(e,c)))continue;e[c]=(d=>{const w=function(){return d.apply(this,Ie(arguments,i+"."+c))};return fe(w,d),w})(a)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(o){return function(c){Qe(e,o).forEach(y=>{const d=e.PromiseRejectionEvent;if(d){const w=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(w)}})}}e.PromiseRejectionEvent&&(n[A("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[A("rejectionHandledHandler")]=i("rejectionhandled"))})}},te=>{te(te.s=717)}]);