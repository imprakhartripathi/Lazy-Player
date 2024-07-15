import './polyfills.server.mjs';
import{$ as ue,A as Ve,B as oe,C as Ue,D as Y,E as D,Ea as st,F as He,Fa as ot,G as ze,H as P,I as We,J as j,K as b,L as V,M as Z,N as re,O as q,P as M,Q as ae,R as $e,S as h,T as u,U as p,V as Ke,W as v,X as ce,Y as le,Z as de,_ as he,a as xe,aa as f,b as Ae,ba as C,c as Te,ca as Ge,d as R,da as Ye,e as ke,f as y,g as De,h as Me,i as Se,ia as Ze,j as Oe,k as Fe,l as K,la as Q,m as Ne,ma as qe,n as Re,na as S,o as Le,p as Pe,pa as X,q as je,qa as Qe,r as G,ra as J,s as _,sa as Xe,t as I,ta as Je,u as L,ua as et,v as d,va as tt,w as B,wa as it,x as E,y as w,z as Be,za as nt}from"./chunk-CZECUUMF.mjs";import{a as N}from"./chunk-5XUXGTUW.mjs";var me;try{me=typeof Intl<"u"&&Intl.v8BreakIterator}catch{me=!1}var H=(()=>{let i=class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Xe(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||me)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};i.\u0275fac=function(t){return new(t||i)(d(He))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var U;function Pt(){if(U==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>U=!0}))}finally{U=U||!1}return U}function fe(n){return Pt()?n:!!n.capture}function rt(n){return n.composedPath?n.composedPath()[0]:n.target}function at(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function pe(n){return Array.isArray(n)?n:[n]}function ge(n){return n instanceof D?n.nativeElement:n}var lt=new Set,O,jt=(()=>{let i=class i{constructor(e,t){this._platform=e,this._nonce=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Vt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Bt(e,this._nonce),this._matchMedia(e)}};i.\u0275fac=function(t){return new(t||i)(d(H),d(ze,8))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function Bt(n,i){if(!lt.has(n))try{O||(O=document.createElement("style"),i&&O.setAttribute("nonce",i),O.setAttribute("type","text/css"),document.head.appendChild(O)),O.sheet&&(O.sheet.insertRule(`@media ${n} {body{ }}`,0),lt.add(n))}catch(r){console.error(r)}}function Vt(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ht=(()=>{let i=class i{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new Te}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return dt(pe(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=dt(pe(e)).map(a=>this._registerQuery(a).observable),o=De(s);return o=Me(o.pipe(K(1)),o.pipe(Le(1),Fe(0))),o.pipe(y(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:l})=>{c.matches=c.matches||m,c.breakpoints[l]=m}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Ae(a=>{let c=m=>this._zone.run(()=>a.next(m));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Pe(t),y(({matches:a})=>({query:e,matches:a})),je(this._destroySubject)),mql:t};return this._queries.set(e,o),o}};i.\u0275fac=function(t){return new(t||i)(d(jt),d(V))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function dt(n){return n.map(i=>i.split(",")).reduce((i,r)=>i.concat(r)).map(i=>i.trim())}function pt(n){return n.buttons===0||n.detail===0}function gt(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var F=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(F||{}),ut="cdk-high-contrast-black-on-white",mt="cdk-high-contrast-white-on-black",_e="cdk-high-contrast-active",_t=(()=>{let i=class i{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=B(ht).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return F.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,s=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return F.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return F.BLACK_ON_WHITE}return F.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(_e,ut,mt),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===F.BLACK_ON_WHITE?e.add(_e,ut):t===F.WHITE_ON_BLACK&&e.add(_e,mt)}}};i.\u0275fac=function(t){return new(t||i)(d(H),d(S))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var be=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=w({type:i}),i.\u0275inj=I({});let n=i;return n})();function Wt(){return!0}var $t=new L("mat-sanity-checks",{providedIn:"root",factory:Wt}),Ie=(()=>{let i=class i{constructor(e,t,s){this._sanityChecks=t,this._document=s,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return at()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}};i.\u0275fac=function(t){return new(t||i)(d(_t),d($t,8),d(S))},i.\u0275mod=w({type:i}),i.\u0275inj=I({imports:[be,be]});let n=i;return n})();var g=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(g||{}),ve=class{constructor(i,r,e,t=!1){this._renderer=i,this.element=r,this.config=e,this._animationForciblyDisabledThroughCss=t,this.state=g.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},bt=fe({passive:!0,capture:!0}),ye=class{constructor(){this._events=new Map,this._delegateEventHandler=i=>{let r=rt(i);r&&this._events.get(i.type)?.forEach((e,t)=>{(t===r||t.contains(r))&&e.forEach(s=>s.handleEvent(i))})}}addHandler(i,r,e,t){let s=this._events.get(r);if(s){let o=s.get(e);o?o.add(t):s.set(e,new Set([t]))}else this._events.set(r,new Map([[e,new Set([t])]])),i.runOutsideAngular(()=>{document.addEventListener(r,this._delegateEventHandler,bt)})}removeHandler(i,r,e){let t=this._events.get(i);if(!t)return;let s=t.get(r);s&&(s.delete(e),s.size===0&&t.delete(r),t.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,bt)))}},vt={enterDuration:225,exitDuration:150},Kt=800,yt=fe({passive:!0,capture:!0}),It=["mousedown","touchstart"],Et=["mouseup","mouseleave","touchend","touchcancel"],z=class z{constructor(i,r,e,t){this._target=i,this._ngZone=r,this._platform=t,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,t.isBrowser&&(this._containerElement=ge(e))}fadeInRipple(i,r,e={}){let t=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=N(N({},vt),e.animation);e.centered&&(i=t.left+t.width/2,r=t.top+t.height/2);let o=e.radius||Gt(i,r,t),a=i-t.left,c=r-t.top,m=s.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-o}px`,l.style.top=`${c-o}px`,l.style.height=`${o*2}px`,l.style.width=`${o*2}px`,e.color!=null&&(l.style.backgroundColor=e.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let T=window.getComputedStyle(l),Lt=T.transitionProperty,Ee=T.transitionDuration,ne=Lt==="none"||Ee==="0s"||Ee==="0s, 0s"||t.width===0&&t.height===0,k=new ve(this,l,e,ne);l.style.transform="scale3d(1, 1, 1)",k.state=g.FADING_IN,e.persistent||(this._mostRecentTransientRipple=k);let $=null;return!ne&&(m||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let we=()=>{$&&($.fallbackTimer=null),clearTimeout(Ce),this._finishRippleTransition(k)},se=()=>this._destroyRipple(k),Ce=setTimeout(se,m+100);l.addEventListener("transitionend",we),l.addEventListener("transitioncancel",se),$={onTransitionEnd:we,onTransitionCancel:se,fallbackTimer:Ce}}),this._activeRipples.set(k,$),(ne||!m)&&this._finishRippleTransition(k),k}fadeOutRipple(i){if(i.state===g.FADING_OUT||i.state===g.HIDDEN)return;let r=i.element,e=N(N({},vt),i.config.animation);r.style.transitionDuration=`${e.exitDuration}ms`,r.style.opacity="0",i.state=g.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let r=ge(i);!this._platform.isBrowser||!r||r===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=r,It.forEach(e=>{z._eventManager.addHandler(this._ngZone,e,r,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Et.forEach(r=>{this._triggerElement.addEventListener(r,this,yt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===g.FADING_IN?this._startFadeOutTransition(i):i.state===g.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let r=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=g.VISIBLE,!e&&(!r||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let r=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=g.HIDDEN,r!==null&&(i.element.removeEventListener("transitionend",r.onTransitionEnd),i.element.removeEventListener("transitioncancel",r.onTransitionCancel),r.fallbackTimer!==null&&clearTimeout(r.fallbackTimer)),i.element.remove()}_onMousedown(i){let r=pt(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Kt;!this._target.rippleDisabled&&!r&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!gt(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let r=i.changedTouches;if(r)for(let e=0;e<r.length;e++)this.fadeInRipple(r[e].clientX,r[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let r=i.state===g.VISIBLE||i.config.terminateOnPointerUp&&i.state===g.FADING_IN;!i.config.persistent&&r&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(It.forEach(r=>z._eventManager.removeHandler(r,i,this)),this._pointerUpEventsRegistered&&(Et.forEach(r=>i.removeEventListener(r,this,yt)),this._pointerUpEventsRegistered=!1))}};z._eventManager=new ye;var wt=z;function Gt(n,i,r){let e=Math.max(Math.abs(n-r.left),Math.abs(n-r.right)),t=Math.max(Math.abs(i-r.top),Math.abs(i-r.bottom));return Math.sqrt(e*e+t*t)}var Yt=["*"],ee;function Zt(){if(ee===void 0&&(ee=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(ee=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return ee}function W(n){return Zt()?.createHTML(n)||n}function Ct(n){return Error(`Unable to find icon with the name "${n}"`)}function qt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function xt(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function At(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var x=class{constructor(i,r,e){this.url=i,this.svgText=r,this.options=e}},Qt=(()=>{let i=class i{constructor(e,t,s,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=s}addSvgIcon(e,t,s){return this.addSvgIconInNamespace("",e,t,s)}addSvgIconLiteral(e,t,s){return this.addSvgIconLiteralInNamespace("",e,t,s)}addSvgIconInNamespace(e,t,s,o){return this._addSvgIconConfig(e,t,new x(s,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,s,o){let a=this._sanitizer.sanitize(P.HTML,s);if(!a)throw At(s);let c=W(a);return this._addSvgIconConfig(e,t,new x("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,s){return this._addSvgIconSetConfig(e,new x(t,null,s))}addSvgIconSetLiteralInNamespace(e,t,s){let o=this._sanitizer.sanitize(P.HTML,t);if(!o)throw At(t);let a=W(o);return this._addSvgIconSetConfig(e,new x("",a,s))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(P.RESOURCE_URL,e);if(!t)throw xt(e);let s=this._cachedIconsByUrl.get(t);return s?R(te(s)):this._loadSvgIconFromConfig(new x(e,null)).pipe(G(o=>this._cachedIconsByUrl.set(t,o)),y(o=>te(o)))}getNamedSvgIcon(e,t=""){let s=Tt(t,e),o=this._svgIconConfigs.get(s);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(s,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):ke(Ct(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?R(te(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(y(t=>te(t)))}_getSvgFromIconSetConfigs(e,t){let s=this._extractIconWithNameFromAnySet(e,t);if(s)return R(s);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Oe(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(P.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),R(null)})));return Se(o).pipe(y(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Ct(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let s=t.length-1;s>=0;s--){let o=t[s];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(G(t=>e.svgText=t),y(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?R(null):this._fetchIcon(e).pipe(G(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,s){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,s);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),s);let c=this._svgElementFromString(W("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,s)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let s=t.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(e){let t=this._svgElementFromString(W("<svg></svg>")),s=e.attributes;for(let o=0;o<s.length;o++){let{name:a,value:c}=s[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:s}=e,o=s?.withCredentials??!1;if(!this._httpClient)throw qt();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(P.RESOURCE_URL,t);if(!a)throw xt(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let m=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(y(l=>W(l)),Ne(()=>this._inProgressUrlFetches.delete(a)),Re());return this._inProgressUrlFetches.set(a,m),m}_addSvgIconConfig(e,t,s){return this._svgIconConfigs.set(Tt(e,t),s),this}_addSvgIconSetConfig(e,t){let s=this._iconSetConfigs.get(e);return s?s.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let s=0;s<this._resolvers.length;s++){let o=this._resolvers[s](t,e);if(o)return Xt(o)?new x(o.url,null,o.options):new x(o,null)}}};i.\u0275fac=function(t){return new(t||i)(d(Je,8),d(tt),d(S,8),d(Y))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function te(n){return n.cloneNode(!0)}function Tt(n,i){return n+":"+i}function Xt(n){return!!(n.url&&n.options)}var Jt=new L("MAT_ICON_DEFAULT_OPTIONS"),ei=new L("mat-icon-location",{providedIn:"root",factory:ti});function ti(){let n=B(S),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}var kt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ii=kt.map(n=>`[${n}]`).join(", "),ni=/^url\(['"]?#(.*?)['"]?\)$/,Dt=(()=>{let i=class i{get color(){return this._color||this._defaultColor}set color(e){this._color=e}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}constructor(e,t,s,o,a,c){this._elementRef=e,this._iconRegistry=t,this._location=o,this._errorHandler=a,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=xe.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),s||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let s=e.childNodes[t];(s.nodeType!==1||s.nodeName.toLowerCase()==="svg")&&s.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(s=>s.length>0);this._previousFontSetClass.forEach(s=>e.classList.remove(s)),t.forEach(s=>e.classList.add(s)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((s,o)=>{s.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ii),s=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)kt.forEach(a=>{let c=t[o],m=c.getAttribute(a),l=m?m.match(ni):null;if(l){let T=s.get(c);T||(T=[],s.set(c,T)),T.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,s]=this._splitIconName(e);t&&(this._svgNamespace=t),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,t).pipe(K(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${s}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}};i.\u0275fac=function(t){return new(t||i)(b(D),b(Qt),Ue("aria-hidden"),b(ei),b(Y),b(Jt,8))},i.\u0275cmp=E({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,s){t&2&&(q("data-mat-icon-type",s._usingFontIcon()?"font":"svg")("data-mat-icon-name",s._svgName||s.fontIcon)("data-mat-icon-namespace",s._svgNamespace||s.fontSet)("fontIcon",s._usingFontIcon()?s.fontIcon:null),$e(s.color?"mat-"+s.color:""),ae("mat-icon-inline",s.inline)("mat-icon-no-color",s.color!=="primary"&&s.color!=="accent"&&s.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[Z,C],ngContentSelectors:Yt,decls:1,vars:0,template:function(t,s){t&1&&(ce(),le(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let n=i;return n})(),ie=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=w({type:i}),i.\u0275inj=I({imports:[Ie,Ie]});let n=i;return n})();var ri=(n,i)=>({hidden:n,block:i});function ai(n,i){n&1&&(oe(),h(0,"svg",9),p(1,"path",10),u())}function ci(n,i){n&1&&(oe(),h(0,"svg",9),p(1,"path",11),u())}var Mt=(()=>{let i=class i{constructor(e){this.router=e,this.isSidebarOpen=!0,this.isSidebarCollapsed=!0}ngOnInit(){this.checkScreenWidth(),window.addEventListener("resize",()=>this.checkScreenWidth())}toggleSidebar(){this.isSidebarCollapsed=!this.isSidebarCollapsed}checkScreenWidth(){window.innerWidth>=768?(this.isSidebarCollapsed=!1,this.isSidebarOpen=!0):this.isSidebarOpen=!1}navigate(e){this.router.navigate([e])}logout(){localStorage.removeItem("token"),sessionStorage.removeItem("token"),this.router.navigate(["/"])}};i.\u0275fac=function(t){return new(t||i)(b(st))},i.\u0275cmp=E({type:i,selectors:[["app-sidebar"]],standalone:!0,features:[C],decls:32,vars:6,consts:[[1,"fixed","inset-y-0","left-0","bg-white","w-64","shadow-lg","overflow-y-auto","z-50",3,"ngClass"],[1,"flex","items-left","justify-between","px-3","py-2","text-[#BB3676]-lg"],[1,"text-lg","font-semibold"],["src","lazy-player-logo.png","alt","logo"],[1,"px-2"],[1,"space-y-2","list-none"],[1,"flex","items-left","px-4","py-2","text-gray-700","rounded-lg","hover:bg-[#BB3676]","hover:text-white",3,"click"],[1,"sidebar-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","class","h-6 w-6","fill","none","viewBox","0 24 24","stroke","currentColor",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 19l-7-7 7-7"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 14l-7 7m0 0l-7-7m7 7V3"]],template:function(t,s){t&1&&(h(0,"div",0)(1,"div",1)(2,"div",2),p(3,"img",3),f(4,"LazyPlayer"),u()(),p(5,"br"),h(6,"nav",4)(7,"ul",5)(8,"li")(9,"a",6),v("click",function(){return s.navigate("/homepage")}),h(10,"mat-icon"),f(11,"home"),u(),f(12," \xA0 Home "),u()(),h(13,"li")(14,"a",6),v("click",function(){return s.navigate("/video-player")}),h(15,"mat-icon"),f(16,"play_circle"),u(),f(17," \xA0 Video Player "),u()(),h(18,"li")(19,"a",6),v("click",function(){return s.navigate("/library")}),h(20,"mat-icon"),f(21,"library_books"),u(),f(22," \xA0 Library "),u()(),p(23,"hr"),h(24,"li")(25,"a",6),v("click",function(){return s.logout()}),h(26,"mat-icon"),f(27,"logout"),u(),f(28," \xA0 Logout "),u()()()()(),h(29,"button",7),v("click",function(){return s.toggleSidebar()}),re(30,ai,2,0,"svg",8)(31,ci,2,0,"svg",8),u()),t&2&&(M("ngClass",Ye(3,ri,s.isSidebarCollapsed&&!s.isSidebarOpen,!s.isSidebarCollapsed||s.isSidebarOpen)),j(30),M("ngIf",s.isSidebarCollapsed),j(),M("ngIf",!s.isSidebarCollapsed))},dependencies:[J,X,Qe,ie,Dt],styles:[".hidden[_ngcontent-%COMP%]{display:none}.block[_ngcontent-%COMP%]{display:block}.fixed[_ngcontent-%COMP%]{position:fixed}.inset-y-0[_ngcontent-%COMP%]{top:0;bottom:0}.left-0[_ngcontent-%COMP%]{left:0}.w-64[_ngcontent-%COMP%]{width:230px}.overflow-y-auto[_ngcontent-%COMP%]{overflow-y:auto}.flex[_ngcontent-%COMP%]{display:flex}.items-left[_ngcontent-%COMP%]{align-items:left}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.text-#BB3676-lg[_ngcontent-%COMP%]{color:#bb3676}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;color:#00bfff;margin-top:8px;margin-left:5px}.text-lg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin-bottom:-3px;margin-right:5px}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.focus\\:outline-none[_ngcontent-%COMP%]{outline:none}@media (min-width: 1024px){.lg\\:hidden[_ngcontent-%COMP%]{display:none}}.hover\\:bg-#BB3676[_ngcontent-%COMP%]:hover{background-color:#bb3676}.hover\\:text-white[_ngcontent-%COMP%]:hover{color:#00bfff}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.text-gray-700[_ngcontent-%COMP%]{color:#4a5568}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.fixed.bottom-4.right-4[_ngcontent-%COMP%]{position:fixed;bottom:1rem;right:1rem}.bg-white[_ngcontent-%COMP%]{background-color:#fff}.text-pink-500[_ngcontent-%COMP%]{color:#00bfff}.p-3[_ngcontent-%COMP%]{padding:.75rem}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.shadow-lg[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.z-50[_ngcontent-%COMP%]{z-index:50}.list-none[_ngcontent-%COMP%]{list-style:none}.sidebar-button[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){.sidebar-button[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:10px;width:50px;height:50px;align-content:center;background-color:#fff;color:#00bfff;padding:10px 3px 3px 10px;border-radius:50%;border:#00BFFF;box-shadow:#000000a1;display:flex;z-index:50}}ul.space-y-2[_ngcontent-%COMP%]{padding-left:0}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:20px;display:flex;align-items:center;text-align:left}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:3px}"]});let n=i;return n})();var li=["videoPlayer"],di=n=>({hidden:n}),St=(()=>{let i=class i{constructor(){this.showDialog=!0}onFileSelected(e){let t=e.target;if(t.files&&t.files.length>0){let s=t.files[0],o=URL.createObjectURL(s);this.videoPlayer.nativeElement.src=o,this.showDialog=!1,this.videoPlayer.nativeElement.play()}}changeMovie(){this.showDialog=!0,this.videoPlayer.nativeElement.pause(),this.videoPlayer.nativeElement.src=""}handleKeyboardEvent(e){let t=this.videoPlayer.nativeElement;switch(e.key){case" ":case"k":t.paused?t.play():t.pause();break;case"j":t.currentTime-=10;break;case"l":t.currentTime+=10;break;case"ArrowLeft":t.currentTime-=5;break;case"ArrowRight":t.currentTime+=5;break;case"m":t.muted=!t.muted;break;case"ArrowUp":t.volume=Math.min(t.volume+.1,1);break;case"ArrowDown":t.volume=Math.max(t.volume-.1,0);break;case"0":t.currentTime=0;break}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["app-video-player"]],viewQuery:function(t,s){if(t&1&&de(li,5),t&2){let o;he(o=ue())&&(s.videoPlayer=o.first)}},hostBindings:function(t,s){t&1&&v("keydown",function(a){return s.handleKeyboardEvent(a)},!1,We)},standalone:!0,features:[C],decls:11,vars:3,consts:[["videoPlayer",""],[1,"main-container"],[1,"heading"],["id","videoContainer",3,"ngClass"],["id","videoPlayer","controls",""],[1,"controls"],[1,"player-button",3,"click"]],template:function(t,s){if(t&1){let o=Ke();p(0,"app-sidebar"),h(1,"div",1)(2,"div",2)(3,"h1"),f(4,"Video Player"),u()(),h(5,"div",3),p(6,"video",4,0),h(8,"div",5)(9,"button",6),v("click",function(){return Be(o),Ve(s.changeMovie())}),f(10,"Change Movie"),u()()()()}t&2&&(j(5),M("ngClass",Ge(1,di,s.showDialog)))},dependencies:[J,X,Mt,ie],styles:['@font-face{font-family:Trend Slab W00 Four;src:url(https://db.onlinewebfonts.com/t/8039f2717fa244ff6675db6a39c54d74.eot);src:url(https://db.onlinewebfonts.com/t/8039f2717fa244ff6675db6a39c54d74.eot?#iefix) format("embedded-opentype"),url(https://db.onlinewebfonts.com/t/8039f2717fa244ff6675db6a39c54d74.woff2) format("woff2"),url(https://db.onlinewebfonts.com/t/8039f2717fa244ff6675db6a39c54d74.woff) format("woff"),url(https://db.onlinewebfonts.com/t/8039f2717fa244ff6675db6a39c54d74.ttf) format("truetype"),url("https://db.onlinewebfonts.com/t/8039f2717fa244ff6675db6a39c54d74.svg#Trend Slab W00 Four") format("svg")}body[_ngcontent-%COMP%]{background-color:#fff;font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}.main-container[_ngcontent-%COMP%]{max-width:75%;margin-left:20.3%}@media (max-width: 768px){.main-container[_ngcontent-%COMP%]{max-width:90%;align-content:center;margin-left:18px}}.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#00bfff;font-size:32px;font-family:Trend Slab W00 Four;margin-top:5px;margin-left:-30px}.player-button[_ngcontent-%COMP%]{font-family:Trend Slab W00 Four;background-color:#00bfff;color:#fff}#dialog[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#fff;padding:20px;box-shadow:0 4px 8px #007bff80;border-radius:10px}.hidden[_ngcontent-%COMP%]{display:none}#fileInput[_ngcontent-%COMP%]{background-color:#e0f7fa;border:2px solid #00BFFF;border-radius:10px;padding:10px;cursor:pointer}#videoContainer[_ngcontent-%COMP%]{margin-top:50px;display:flex;flex-direction:column;align-items:center}#videoPlayer[_ngcontent-%COMP%]{width:100%;height:100%;max-width:1000px;box-shadow:0 4px 8px #00000093;border-radius:10px}.controls[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{background-color:#e0f7fa;border:2px solid #00BFFF;border-radius:10px;padding:10px 20px;cursor:pointer;transition:background-color .3s,color .3s}button[_ngcontent-%COMP%]:hover{background-color:#00bfff;color:#fff}']});let n=i;return n})();var Ot=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["app-root"]],standalone:!0,features:[C],decls:1,vars:0,template:function(t,s){t&1&&p(0,"app-video-player")},dependencies:[St],encapsulation:2});let n=i;return n})();var Ft=[];var Nt={providers:[Ze({eventCoalescing:!0}),ot(Ft),it()]};var hi={providers:[nt()]},Rt=qe(Nt,hi);var ui=()=>et(Ot,Rt),hs=ui;export{hs as a};
