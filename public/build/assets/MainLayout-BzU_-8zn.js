import{r as l,j as m,g as ga,R as Fn,b as va,a as ba,c as ya}from"./app-CMnC5Tj6.js";import{M as xa,u as Ln,P as wa,a as Ea,b as Ca,L as Sa,r as Aa,d as Pa,c as fe,m as j,e as Na}from"./Box-BNkO5lmN.js";class Oa extends l.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,a=r instanceof HTMLElement&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=a-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ka({children:e,isPresent:t,anchorX:n}){const r=l.useId(),a=l.useRef(null),o=l.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=l.useContext(xa);return l.useInsertionEffect(()=>{const{width:i,height:u,top:c,left:f,right:d}=o.current;if(t||!a.current||!i||!u)return;const h=n==="left"?`left: ${f}`:`right: ${d}`;a.current.dataset.motionPopId=r;const v=document.createElement("style");return s&&(v.nonce=s),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${u}px !important;
            ${h}px !important;
            top: ${c}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[t]),m.jsx(Oa,{isPresent:t,childRef:a,sizeRef:o,children:l.cloneElement(e,{ref:a})})}const Ia=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:a,presenceAffectsLayout:o,mode:s,anchorX:i})=>{const u=Ln(Ta),c=l.useId(),f=l.useCallback(h=>{u.set(h,!0);for(const v of u.values())if(!v)return;r&&r()},[u,r]),d=l.useMemo(()=>({id:c,initial:t,isPresent:n,custom:a,onExitComplete:f,register:h=>(u.set(h,!1),()=>u.delete(h))}),o?[Math.random(),f]:[n,f]);return l.useMemo(()=>{u.forEach((h,v)=>u.set(v,!1))},[n]),l.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=m.jsx(ka,{isPresent:n,anchorX:i,children:e})),m.jsx(wa.Provider,{value:d,children:e})};function Ta(){return new Map}const we=e=>e.key||"";function Ht(e){const t=[];return l.Children.forEach(e,n=>{l.isValidElement(n)&&t.push(n)}),t}const Ra=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:a=!0,mode:o="sync",propagate:s=!1,anchorX:i="left"})=>{const[u,c]=Ea(s),f=l.useMemo(()=>Ht(e),[e]),d=s&&!u?[]:f.map(we),h=l.useRef(!0),v=l.useRef(f),w=Ln(()=>new Map),[g,b]=l.useState(f),[y,S]=l.useState(f);Ca(()=>{h.current=!1,v.current=f;for(let C=0;C<y.length;C++){const O=we(y[C]);d.includes(O)?w.delete(O):w.get(O)!==!0&&w.set(O,!1)}},[y,d.length,d.join("-")]);const E=[];if(f!==g){let C=[...f];for(let O=0;O<y.length;O++){const N=y[O],T=we(N);d.includes(T)||(C.splice(O,0,N),E.push(N))}return o==="wait"&&E.length&&(C=E),S(Ht(C)),b(f),null}const{forceRender:A}=l.useContext(Sa);return m.jsx(m.Fragment,{children:y.map(C=>{const O=we(C),N=s&&!u?!1:f===y||d.includes(O),T=()=>{if(w.has(O))w.set(O,!0);else return;let B=!0;w.forEach(me=>{me||(B=!1)}),B&&(A==null||A(),S(v.current),s&&(c==null||c()),r&&r())};return m.jsx(Ia,{isPresent:N,initial:!h.current||n?void 0:!1,custom:t,presenceAffectsLayout:a,mode:o,onExitComplete:N?void 0:T,anchorX:i,children:C},O)})})},Ma={some:0,all:1};function ja(e,t,{root:n,margin:r,amount:a="some"}={}){const o=Aa(e),s=new WeakMap,i=c=>{c.forEach(f=>{const d=s.get(f.target);if(f.isIntersecting!==!!d)if(f.isIntersecting){const h=t(f.target,f);typeof h=="function"?s.set(f.target,h):u.unobserve(f.target)}else typeof d=="function"&&(d(f),s.delete(f.target))})},u=new IntersectionObserver(i,{root:n,rootMargin:r,threshold:typeof a=="number"?a:Ma[a]});return o.forEach(c=>u.observe(c)),()=>u.disconnect()}function _a(e,{root:t,margin:n,amount:r,once:a=!1,initial:o=!1}={}){const[s,i]=l.useState(o);return l.useEffect(()=>{if(!e.current||a&&s)return;const u=()=>(i(!0),a?void 0:()=>i(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return ja(e.current,u,c)},[t,e,n,a,r]),s}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Da(e,t,n){return(t=La(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$t(Object(n),!0).forEach(function(r){Da(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fa(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function La(e){var t=Fa(e,"string");return typeof t=="symbol"?t:t+""}const Yt=()=>{};let Ot={},zn={},Wn=null,Un={mark:Yt,measure:Yt};try{typeof window<"u"&&(Ot=window),typeof document<"u"&&(zn=document),typeof MutationObserver<"u"&&(Wn=MutationObserver),typeof performance<"u"&&(Un=performance)}catch{}const{userAgent:Gt=""}=Ot.navigator||{},G=Ot,k=zn,Xt=Wn,Ee=Un;G.document;const U=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Vn=~Gt.indexOf("MSIE")||~Gt.indexOf("Trident/");var za=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Wa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Bn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ua={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Hn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],I="classic",Le="duotone",Va="sharp",Ba="sharp-duotone",$n=[I,Le,Va,Ba],Ha={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$a={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ya=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ga={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Xa=["fak","fa-kit","fakd","fa-kit-duotone"],Kt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ka=["kit"],Za={kit:{"fa-kit":"fak"}},qa=["fak","fakd"],Qa={kit:{fak:"fa-kit"}},Zt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ja=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],eo=["fak","fa-kit","fakd","fa-kit-duotone"],to={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},no={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ro={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},st={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ao=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],it=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ja,...ao],oo=["solid","regular","light","thin","duotone","brands"],Yn=[1,2,3,4,5,6,7,8,9,10],so=Yn.concat([11,12,13,14,15,16,17,18,19,20]),io=[...Object.keys(ro),...oo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ce.GROUP,Ce.SWAP_OPACITY,Ce.PRIMARY,Ce.SECONDARY].concat(Yn.map(e=>"".concat(e,"x"))).concat(so.map(e=>"w-".concat(e))),co={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const z="___FONT_AWESOME___",ct=16,Gn="fa",Xn="svg-inline--fa",Q="data-fa-i2svg",lt="data-fa-pseudo-element",lo="data-fa-pseudo-element-pending",kt="data-prefix",It="data-icon",qt="fontawesome-i2svg",uo="async",fo=["HTML","HEAD","STYLE","SCRIPT"],Kn=(()=>{try{return!0}catch{return!1}})();function ye(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[I]}})}const Zn=p({},Bn);Zn[I]=p(p(p(p({},{"fa-duotone":"duotone"}),Bn[I]),Kt.kit),Kt["kit-duotone"]);const mo=ye(Zn),ut=p({},Ga);ut[I]=p(p(p(p({},{duotone:"fad"}),ut[I]),Zt.kit),Zt["kit-duotone"]);const Qt=ye(ut),ft=p({},st);ft[I]=p(p({},ft[I]),Qa.kit);const Tt=ye(ft),dt=p({},no);dt[I]=p(p({},dt[I]),Za.kit);ye(dt);const ho=za,qn="fa-layers-text",po=Wa,go=p({},Ha);ye(go);const vo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ye=Ua,bo=[...Ka,...io],pe=G.FontAwesomeConfig||{};function yo(e){var t=k.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=xo(yo(n));a!=null&&(pe[r]=a)});const Qn={styleDefault:"solid",familyDefault:I,cssPrefix:Gn,replacementClass:Xn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pe.familyPrefix&&(pe.cssPrefix=pe.familyPrefix);const ue=p(p({},Qn),pe);ue.autoReplaceSvg||(ue.observeMutations=!1);const x={};Object.keys(Qn).forEach(e=>{Object.defineProperty(x,e,{enumerable:!0,set:function(t){ue[e]=t,ge.forEach(n=>n(x))},get:function(){return ue[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(e){ue.cssPrefix=e,ge.forEach(t=>t(x))},get:function(){return ue.cssPrefix}});G.FontAwesomeConfig=x;const ge=[];function wo(e){return ge.push(e),()=>{ge.splice(ge.indexOf(e),1)}}const H=ct,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Eo(e){if(!e||!U)return;const t=k.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=k.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return k.head.insertBefore(t,r),e}const Co="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ve(){let e=12,t="";for(;e-- >0;)t+=Co[Math.random()*62|0];return t}function de(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Rt(e){return e.classList?de(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Jn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function So(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Jn(e[n]),'" '),"").trim()}function ze(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Mt(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Ao(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(i)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:c}}function Po(e){let{transform:t,width:n=ct,height:r=ct,startCentered:a=!1}=e,o="";return a&&Vn?o+="translate(".concat(t.x/H-n/2,"em, ").concat(t.y/H-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "):o+="translate(".concat(t.x/H,"em, ").concat(t.y/H,"em) "),o+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var No=`:root, :host {
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
}`;function er(){const e=Gn,t=Xn,n=x.cssPrefix,r=x.replacementClass;let a=No;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(r))}return a}let Jt=!1;function Ge(){x.autoAddCss&&!Jt&&(Eo(er()),Jt=!0)}var Oo={mixout(){return{dom:{css:er,insertCss:Ge}}},hooks(){return{beforeDOMElementCreation(){Ge()},beforeI2svg(){Ge()}}}};const W=G||{};W[z]||(W[z]={});W[z].styles||(W[z].styles={});W[z].hooks||(W[z].hooks={});W[z].shims||(W[z].shims=[]);var L=W[z];const tr=[],nr=function(){k.removeEventListener("DOMContentLoaded",nr),Me=1,tr.map(e=>e())};let Me=!1;U&&(Me=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Me||k.addEventListener("DOMContentLoaded",nr));function ko(e){U&&(Me?setTimeout(e,0):tr.push(e))}function xe(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Jn(e):"<".concat(t," ").concat(So(n),">").concat(r.map(xe).join(""),"</").concat(t,">")}function en(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xe=function(t,n,r,a){var o=Object.keys(t),s=o.length,i=n,u,c,f;for(r===void 0?(u=1,f=t[o[0]]):(u=0,f=r);u<s;u++)c=o[u],f=i(f,t[c],c,t);return f};function Io(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function mt(e){const t=Io(e);return t.length===1?t[0].toString(16):null}function To(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function tn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function ht(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=tn(t);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(e,tn(t)):L.styles[e]=p(p({},L.styles[e]||{}),a),e==="fas"&&ht("fa",t)}const{styles:be,shims:Ro}=L,rr=Object.keys(Tt),Mo=rr.reduce((e,t)=>(e[t]=Object.keys(Tt[t]),e),{});let jt=null,ar={},or={},sr={},ir={},cr={};function jo(e){return~bo.indexOf(e)}function _o(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!jo(a)?a:null}const lr=()=>{const e=r=>Xe(be,(a,o,s)=>(a[s]=Xe(o,r,{}),a),{});ar=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=o}),r)),or=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=o}),r)),cr=e((r,a,o)=>{const s=a[2];return r[o]=o,s.forEach(i=>{r[i]=o}),r});const t="far"in be||x.autoFetchSvg,n=Xe(Ro,(r,a)=>{const o=a[0];let s=a[1];const i=a[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:i}),r},{names:{},unicodes:{}});sr=n.names,ir=n.unicodes,jt=We(x.styleDefault,{family:x.familyDefault})};wo(e=>{jt=We(e.styleDefault,{family:x.familyDefault})});lr();function _t(e,t){return(ar[e]||{})[t]}function Do(e,t){return(or[e]||{})[t]}function Z(e,t){return(cr[e]||{})[t]}function ur(e){return sr[e]||{prefix:null,iconName:null}}function Fo(e){const t=ir[e],n=_t("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return jt}const fr=()=>({prefix:null,iconName:null,rest:[]});function Lo(e){let t=I;const n=rr.reduce((r,a)=>(r[a]="".concat(x.cssPrefix,"-").concat(a),r),{});return $n.forEach(r=>{(e.includes(n[r])||e.some(a=>Mo[r].includes(a)))&&(t=r)}),t}function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=I}=t,r=mo[n][e];if(n===Le&&!e)return"fad";const a=Qt[n][e]||Qt[n][r],o=e in L.styles?e:null;return a||o||null}function zo(e){let t=[],n=null;return e.forEach(r=>{const a=_o(x.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function nn(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=it.concat(eo),o=nn(e.filter(d=>a.includes(d))),s=nn(e.filter(d=>!it.includes(d))),i=o.filter(d=>(r=d,!Hn.includes(d))),[u=null]=i,c=Lo(o),f=p(p({},zo(s)),{},{prefix:We(u,{family:c})});return p(p(p({},f),Bo({values:e,family:c,styles:be,config:x,canonical:f,givenPrefix:r})),Wo(n,r,f))}function Wo(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?ur(a):{},s=Z(r,a);return a=o.iconName||s||a,r=o.prefix||r,r==="far"&&!be.far&&be.fas&&!x.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Uo=$n.filter(e=>e!==I||e!==Le),Vo=Object.keys(st).filter(e=>e!==I).map(e=>Object.keys(st[e])).flat();function Bo(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:s={}}=e,i=n===Le,u=t.includes("fa-duotone")||t.includes("fad"),c=s.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!i&&(u||c||f)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Uo.includes(n)&&(Object.keys(o).find(h=>Vo.includes(h))||s.autoFetchSvg)){const h=Ya.get(n).defaultShortPrefixId;r.prefix=h,r.iconName=Z(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=X()||"fas"),r}class Ho{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=p(p({},this.definitions[o]||{}),a[o]),ht(o,a[o]);const s=Tt[I][o];s&&ht(s,a[o]),lr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:s,icon:i}=r[a],u=i[2];t[o]||(t[o]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(t[o][c]=i)}),t[o][s]=i}),t}}let rn=[],se={};const ce={},$o=Object.keys(ce);function Yo(e,t){let{mixoutsTo:n}=t;return rn=e,se={},Object.keys(ce).forEach(r=>{$o.indexOf(r)===-1&&delete ce[r]}),rn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{se[s]||(se[s]=[]),se[s].push(o[s])})}r.provides&&r.provides(ce)}),n}function pt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(se[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(se[e]||[]).forEach(o=>{o.apply(null,n)})}function K(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ce[e]?ce[e].apply(null,t):void 0}function gt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||X();if(t)return t=Z(n,t)||t,en(dr.definitions,n,t)||en(L.styles,n,t)}const dr=new Ho,Go=()=>{x.autoReplaceSvg=!1,x.observeMutations=!1,J("noAuto")},Xo={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(J("beforeI2svg",e),K("pseudoElements2svg",e),K("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,ko(()=>{Zo({autoReplaceSvgRoot:t}),J("watch",e)})}},Ko={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=We(e[0]);return{prefix:n,iconName:Z(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(x.cssPrefix,"-"))>-1||e.match(ho))){const t=Ue(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||X(),iconName:Z(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=X();return{prefix:t,iconName:Z(t,e)||e}}}},R={noAuto:Go,config:x,dom:Xo,parse:Ko,library:dr,findIconDefinition:gt,toHtml:xe},Zo=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=k}=e;(Object.keys(L.styles).length>0||x.autoFetchSvg)&&U&&x.autoReplaceSvg&&R.dom.i2svg({node:t})};function Ve(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>xe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!U)return;const n=k.createElement("div");return n.innerHTML=e.html,n.children}}),e}function qo(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:s}=e;if(Mt(s)&&n.found&&!r.found){const{width:i,height:u}=n,c={x:i/u/2,y:.5};a.style=ze(p(p({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Qo(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:s}),children:r}]}]}function Dt(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:s,title:i,maskId:u,titleId:c,extra:f,watchable:d=!1}=e,{width:h,height:v}=n.found?n:t,w=qa.includes(r),g=[x.replacementClass,a?"".concat(x.cssPrefix,"-").concat(a):""].filter(C=>f.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(f.classes).join(" ");let b={children:[],attributes:p(p({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:g,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)})};const y=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};d&&(b.attributes[Q]=""),i&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||ve())},children:[i]}),delete b.attributes.title);const S=p(p({},b),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:o,symbol:s,styles:p(p({},y),f.styles)}),{children:E,attributes:A}=n.found&&t.found?K("generateAbstractMask",S)||{children:[],attributes:{}}:K("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=E,S.attributes=A,s?Qo(S):qo(S)}function an(e){const{content:t,width:n,height:r,transform:a,title:o,extra:s,watchable:i=!1}=e,u=p(p(p({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(u[Q]="");const c=p({},s.styles);Mt(a)&&(c.transform=Po({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=ze(c);f.length>0&&(u.style=f);const d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Jo(e){const{content:t,title:n,extra:r}=e,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ze(r.styles);o.length>0&&(a.style=o);const s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Ke}=L;function vt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(Ye.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(Ye.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(Ye.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const es={found:!1,width:512,height:512};function ts(e,t){!Kn&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bt(e,t){let n=t;return t==="fa"&&x.styleDefault!==null&&(t=X()),new Promise((r,a)=>{if(n==="fa"){const o=ur(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ke[t]&&Ke[t][e]){const o=Ke[t][e];return r(vt(o))}ts(e,t),r(p(p({},es),{},{icon:x.showMissingIcons&&e?K("missingIconAbstract")||{}:{}}))})}const on=()=>{},yt=x.measurePerformance&&Ee&&Ee.mark&&Ee.measure?Ee:{mark:on,measure:on},he='FA "6.7.2"',ns=e=>(yt.mark("".concat(he," ").concat(e," begins")),()=>mr(e)),mr=e=>{yt.mark("".concat(he," ").concat(e," ends")),yt.measure("".concat(he," ").concat(e),"".concat(he," ").concat(e," begins"),"".concat(he," ").concat(e," ends"))};var Ft={begin:ns,end:mr};const ke=()=>{};function sn(e){return typeof(e.getAttribute?e.getAttribute(Q):null)=="string"}function rs(e){const t=e.getAttribute?e.getAttribute(kt):null,n=e.getAttribute?e.getAttribute(It):null;return t&&n}function as(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function os(){return x.autoReplaceSvg===!0?Ie.replace:Ie[x.autoReplaceSvg]||Ie.replace}function ss(e){return k.createElementNS("http://www.w3.org/2000/svg",e)}function is(e){return k.createElement(e)}function hr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ss:is}=t;if(typeof e=="string")return k.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(hr(o,{ceFn:n}))}),r}function cs(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ie={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(hr(n),t)}),t.getAttribute(Q)===null&&x.keepOriginalSource){let n=k.createComment(cs(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Rt(t).indexOf(x.replacementClass))return Ie.replace(e);const r=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===x.replacementClass||i.match(r)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>xe(o)).join(`
`);t.setAttribute(Q,""),t.innerHTML=a}};function cn(e){e()}function pr(e,t){const n=typeof t=="function"?t:ke;if(e.length===0)n();else{let r=cn;x.mutateApproach===uo&&(r=G.requestAnimationFrame||cn),r(()=>{const a=os(),o=Ft.begin("mutate");e.map(a),o(),n()})}}let Lt=!1;function gr(){Lt=!0}function xt(){Lt=!1}let je=null;function ln(e){if(!Xt||!x.observeMutations)return;const{treeCallback:t=ke,nodeCallback:n=ke,pseudoElementsCallback:r=ke,observeMutationsRoot:a=k}=e;je=new Xt(o=>{if(Lt)return;const s=X();de(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!sn(i.addedNodes[0])&&(x.searchPseudoElements&&r(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&x.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&sn(i.target)&&~vo.indexOf(i.attributeName))if(i.attributeName==="class"&&rs(i.target)){const{prefix:u,iconName:c}=Ue(Rt(i.target));i.target.setAttribute(kt,u||s),c&&i.target.setAttribute(It,c)}else as(i.target)&&n(i.target)})}),U&&je.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ls(){je&&je.disconnect()}function us(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(r[s]=i.join(":").trim()),r},{})),n}function fs(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Ue(Rt(e));return a.prefix||(a.prefix=X()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Do(a.prefix,e.innerText)||_t(a.prefix,mt(e.innerText))),!a.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ds(e){const t=de(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||ve()):(t["aria-hidden"]="true",t.focusable="false")),t}function ms(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function un(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=fs(e),o=ds(e),s=pt("parseNodeAttributes",{},e);let i=t.styleParser?us(e):[];return p({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:o}},s)}const{styles:hs}=L;function vr(e){const t=x.autoReplaceSvg==="nest"?un(e,{styleParser:!1}):un(e);return~t.extra.classes.indexOf(qn)?K("generateLayersText",e,t):K("generateSvgReplacementMutation",e,t)}function ps(){return[...Xa,...it]}function fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();const n=k.documentElement.classList,r=f=>n.add("".concat(qt,"-").concat(f)),a=f=>n.remove("".concat(qt,"-").concat(f)),o=x.autoFetchSvg?ps():Hn.concat(Object.keys(hs));o.includes("fa")||o.push("fa");const s=[".".concat(qn,":not([").concat(Q,"])")].concat(o.map(f=>".".concat(f,":not([").concat(Q,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=de(e.querySelectorAll(s))}catch{}if(i.length>0)r("pending"),a("complete");else return Promise.resolve();const u=Ft.begin("onTree"),c=i.reduce((f,d)=>{try{const h=vr(d);h&&f.push(h)}catch(h){Kn||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise((f,d)=>{Promise.all(c).then(h=>{pr(h,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),f()})}).catch(h=>{u(),d(h)})})}function gs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vr(e).then(n=>{n&&pr([n],t)})}function vs(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:gt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:gt(a||{})),e(r,p(p({},n),{},{mask:a}))}}const bs=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,symbol:r=!1,mask:a=null,maskId:o=null,title:s=null,titleId:i=null,classes:u=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:d,iconName:h,icon:v}=e;return Ve(p({type:"icon"},e),()=>(J("beforeDOMElementCreation",{iconDefinition:e,params:t}),x.autoA11y&&(s?c["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(i||ve()):(c["aria-hidden"]="true",c.focusable="false")),Dt({icons:{main:vt(v),mask:a?vt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:h,transform:p(p({},F),n),symbol:r,title:s,maskId:o,titleId:i,extra:{attributes:c,styles:f,classes:u}})))};var ys={mixout(){return{icon:vs(bs)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=fn,e.nodeCallback=gs,e}}},provides(e){e.i2svg=function(t){const{node:n=k,callback:r=()=>{}}=t;return fn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:s,transform:i,symbol:u,mask:c,maskId:f,extra:d}=n;return new Promise((h,v)=>{Promise.all([bt(r,s),c.iconName?bt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[g,b]=w;h([t,Dt({icons:{main:g,mask:b},prefix:s,iconName:r,transform:i,symbol:u,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:s}=t;const i=ze(s);i.length>0&&(r.style=i);let u;return Mt(o)&&(u=K("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},xs={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ve({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ws={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return Ve({type:"counter",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),Jo({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(x.cssPrefix,"-layers-counter"),...r]}})))}}}},Es={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,title:r=null,classes:a=[],attributes:o={},styles:s={}}=t;return Ve({type:"text",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),an({content:e,transform:p(p({},F),n),title:r,extra:{attributes:o,styles:s,classes:["".concat(x.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let s=null,i=null;if(Vn){const u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/u,i=c.height/u}return x.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,an({content:t.innerHTML,width:s,height:i,transform:a,title:r,extra:o,watchable:!0})])}}};const Cs=new RegExp('"',"ug"),dn=[1105920,1112319],mn=p(p(p(p({},{FontAwesome:{normal:"fas",400:"fas"}}),$a),co),to),wt=Object.keys(mn).reduce((e,t)=>(e[t.toLowerCase()]=mn[t],e),{}),Ss=Object.keys(wt).reduce((e,t)=>{const n=wt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function As(e){const t=e.replace(Cs,""),n=To(t,0),r=n>=dn[0]&&n<=dn[1],a=t.length===2?t[0]===t[1]:!1;return{value:mt(a?t[0]:t),isSecondary:r||a}}function Ps(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(wt[n]||{})[a]||Ss[n]}function hn(e,t){const n="".concat(lo).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const s=de(e.children).filter(h=>h.getAttribute(lt)===t)[0],i=G.getComputedStyle(e,t),u=i.getPropertyValue("font-family"),c=u.match(po),f=i.getPropertyValue("font-weight"),d=i.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&d!=="none"&&d!==""){const h=i.getPropertyValue("content");let v=Ps(u,f);const{value:w,isSecondary:g}=As(h),b=c[0].startsWith("FontAwesome");let y=_t(v,w),S=y;if(b){const E=Fo(w);E.iconName&&E.prefix&&(y=E.iconName,v=E.prefix)}if(y&&!g&&(!s||s.getAttribute(kt)!==v||s.getAttribute(It)!==S)){e.setAttribute(n,S),s&&e.removeChild(s);const E=ms(),{extra:A}=E;A.attributes[lt]=t,bt(y,v).then(C=>{const O=Dt(p(p({},E),{},{icons:{main:C,mask:fr()},prefix:v,iconName:S,extra:A,watchable:!0})),N=k.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=O.map(T=>xe(T)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ns(e){return Promise.all([hn(e,"::before"),hn(e,"::after")])}function Os(e){return e.parentNode!==document.head&&!~fo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pn(e){if(U)return new Promise((t,n)=>{const r=de(e.querySelectorAll("*")).filter(Os).map(Ns),a=Ft.begin("searchPseudoElements");gr(),Promise.all(r).then(()=>{a(),xt(),t()}).catch(()=>{a(),xt(),n()})})}var ks={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=pn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=k}=t;x.searchPseudoElements&&pn(n)}}};let gn=!1;var Is={mixout(){return{dom:{unwatch(){gr(),gn=!0}}}},hooks(){return{bootstrap(){ln(pt("mutationObserverCallbacks",{}))},noAuto(){ls()},watch(e){const{observeMutationsRoot:t}=e;gn?xt():ln(pt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const vn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let s=a.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var Ts={mixout(){return{parse:{transform:e=>vn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=vn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const s={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(i," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:f,path:d};return{tag:"g",attributes:p({},h.outer),children:[{tag:"g",attributes:p({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:p(p({},n.icon.attributes),h.path)}]}]}}}};const Ze={x:0,y:0,width:"100%",height:"100%"};function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Rs(e){return e.tag==="g"?e.children:[e]}var Ms={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Ue(n.split(" ").map(a=>a.trim())):fr();return r.prefix||(r.prefix=X()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:s,transform:i}=t;const{width:u,icon:c}=a,{width:f,icon:d}=o,h=Ao({transform:i,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:p(p({},Ze),{},{fill:"white"})},w=c.children?{children:c.children.map(bn)}:{},g={tag:"g",attributes:p({},h.inner),children:[bn(p({tag:c.tag,attributes:p(p({},c.attributes),h.path)},w))]},b={tag:"g",attributes:p({},h.outer),children:[g]},y="mask-".concat(s||ve()),S="clip-".concat(s||ve()),E={tag:"mask",attributes:p(p({},Ze),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Rs(d)},E]};return n.push(A,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(y,")")},Ze)}),{children:n,attributes:r}}}},js={provides(e){let t=!1;G.matchMedia&&(t=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=p(p({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:p(p({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:p(p({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_s={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Ds=[Oo,ys,xs,ws,Es,ks,Is,Ts,Ms,js,_s];Yo(Ds,{mixoutsTo:R});R.noAuto;R.config;R.library;R.dom;const Et=R.parse;R.findIconDefinition;R.toHtml;const Fs=R.icon;R.layer;R.text;R.counter;var br={exports:{}},Ls="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zs=Ls,Ws=zs;function yr(){}function xr(){}xr.resetWarningCache=yr;var Us=function(){function e(r,a,o,s,i,u){if(u!==Ws){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xr,resetWarningCache:yr};return n.PropTypes=n,n};br.exports=Us();var Vs=br.exports;const P=ga(Vs);function yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yn(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_e(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bs(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Hs(e,t){if(e==null)return{};var n=Bs(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ct(e){return $s(e)||Ys(e)||Gs(e)||Xs()}function $s(e){if(Array.isArray(e))return St(e)}function Ys(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gs(e,t){if(e){if(typeof e=="string")return St(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return St(e,t)}}function St(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,s=e.shake,i=e.flash,u=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,v=e.inverse,w=e.border,g=e.listItem,b=e.flip,y=e.size,S=e.rotation,E=e.pull,A=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":h,"fa-inverse":v,"fa-border":w,"fa-li":g,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ie(t,"fa-".concat(y),typeof y<"u"&&y!==null),ie(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),ie(t,"fa-pull-".concat(E),typeof E<"u"&&E!==null),ie(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map(function(C){return A[C]?C:null}).filter(function(C){return C})}function Zs(e){return e=e-0,e===e}function wr(e){return Zs(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var qs=["style"];function Qs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Js(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=wr(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[Qs(a)]=o:t[a]=o,t},{})}function Er(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Er(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,c){var f=t.attributes[c];switch(c){case"class":u.attrs.className=f,delete t.attributes.class;break;case"style":u.attrs.style=Js(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[wr(c)]=f}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=Hs(n,qs);return a.attrs.style=_(_({},a.attrs.style),s),e.apply(void 0,[t.tag,_(_({},a.attrs),i)].concat(Ct(r)))}var Cr=!1;try{Cr=!0}catch{}function ei(){if(!Cr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xn(e){if(e&&_e(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Et.icon)return Et.icon(e);if(e===null)return null;if(e&&_e(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function qe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ie({},e,t):{}}var wn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},q=Fn.forwardRef(function(e,t){var n=_(_({},wn),e),r=n.icon,a=n.mask,o=n.symbol,s=n.className,i=n.title,u=n.titleId,c=n.maskId,f=xn(r),d=qe("classes",[].concat(Ct(Ks(n)),Ct((s||"").split(" ")))),h=qe("transform",typeof n.transform=="string"?Et.transform(n.transform):n.transform),v=qe("mask",xn(a)),w=Fs(f,_(_(_(_({},d),h),v),{},{symbol:o,title:i,titleId:u,maskId:c}));if(!w)return ei("Could not find icon",f),null;var g=w.abstract,b={ref:t};return Object.keys(n).forEach(function(y){wn.hasOwnProperty(y)||(b[y]=n[y])}),ti(g[0],b)});q.displayName="FontAwesomeIcon";q.propTypes={beat:P.bool,border:P.bool,beatFade:P.bool,bounce:P.bool,className:P.string,fade:P.bool,flash:P.bool,mask:P.oneOfType([P.object,P.array,P.string]),maskId:P.string,fixedWidth:P.bool,inverse:P.bool,flip:P.oneOf([!0,!1,"horizontal","vertical","both"]),icon:P.oneOfType([P.object,P.array,P.string]),listItem:P.bool,pull:P.oneOf(["right","left"]),pulse:P.bool,rotation:P.oneOf([0,90,180,270]),shake:P.bool,size:P.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:P.bool,spinPulse:P.bool,spinReverse:P.bool,symbol:P.oneOfType([P.bool,P.string]),title:P.string,titleId:P.string,transform:P.oneOfType([P.string,P.object]),swapOpacity:P.bool};var ti=Er.bind(null,Fn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ni={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Sr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},ri={prefix:"fab",iconName:"figma",icon:[384,512,[],"f799","M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"]},Ar={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Pr={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},zt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function ai({children:e,id:t,className:n=""}){return m.jsx("section",{id:t,className:n,children:m.jsx("div",{className:"max-w-5xl mx-auto",children:e})})}function oi(){return m.jsxs(ai,{className:"py-8 border-t border-grey px-4 md:px-0",children:[m.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-center",children:[m.jsxs("div",{className:"space-y-4 md:space-y-0",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("img",{src:"/images/logo.svg",alt:"Mphatso",className:"w-5 h-5"}),m.jsx("span",{className:"font-medium text-white",children:"Mphatso"})]}),m.jsx("a",{href:"mailto:mphatsomlenga1@gmail.com",className:"text-grey",children:"mphatsomlenga1@gmail.com"})]}),m.jsx("p",{className:"text-white",children:"Web and Mobile App Developer | Backend Developer"})]}),m.jsxs("div",{className:"mt-4 md:mt-0",children:[m.jsx("h3",{className:"text-base font-medium mb-2 text-white",children:"Media"}),m.jsxs("div",{className:"flex gap-4",children:[m.jsx("a",{href:"#",className:"text-grey hover:text-primary transition-colors",children:m.jsx(q,{icon:zt,size:"lg"})}),m.jsx("a",{href:"#",className:"text-grey hover:text-primary transition-colors",children:m.jsx(q,{icon:ri,size:"lg"})}),m.jsx("a",{href:"#",className:"text-grey hover:text-primary transition-colors",children:m.jsx(q,{icon:ni,size:"lg"})})]})]})]}),m.jsxs("div",{className:"text-center mt-8 text-grey",children:["© Copyright ",new Date().getFullYear(),". Made by Mphatso"]})]})}function Y(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function En(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Nr(...e){return t=>{let n=!1;const r=e.map(a=>{const o=En(a,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():En(e[a],null)}}}}function ne(...e){return l.useCallback(Nr(...e),e)}function si(e,t){const n=l.createContext(t),r=o=>{const{children:s,...i}=o,u=l.useMemo(()=>i,Object.values(i));return m.jsx(n.Provider,{value:u,children:s})};r.displayName=e+"Provider";function a(o){const s=l.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}return[r,a]}function ii(e,t=[]){let n=[];function r(o,s){const i=l.createContext(s),u=n.length;n=[...n,s];const c=d=>{var y;const{scope:h,children:v,...w}=d,g=((y=h==null?void 0:h[e])==null?void 0:y[u])||i,b=l.useMemo(()=>w,Object.values(w));return m.jsx(g.Provider,{value:b,children:v})};c.displayName=o+"Provider";function f(d,h){var g;const v=((g=h==null?void 0:h[e])==null?void 0:g[u])||i,w=l.useContext(v);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return[c,f]}const a=()=>{const o=n.map(s=>l.createContext(s));return function(i){const u=(i==null?void 0:i[e])||o;return l.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return a.scopeName=e,[r,ci(a,...t)]}function ci(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const s=r.reduce((i,{useScope:u,scopeName:c})=>{const d=u(o)[`__scope${c}`];return{...i,...d}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var De=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{},li=va.useId||(()=>{}),ui=0;function Qe(e){const[t,n]=l.useState(li());return De(()=>{n(r=>r??String(ui++))},[e]),e||(t?`radix-${t}`:"")}function ee(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function fi({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=di({defaultProp:t,onChange:n}),o=e!==void 0,s=o?e:r,i=ee(n),u=l.useCallback(c=>{if(o){const d=typeof c=="function"?c(e):c;d!==e&&i(d)}else a(c)},[o,e,a,i]);return[s,u]}function di({defaultProp:e,onChange:t}){const n=l.useState(e),[r]=n,a=l.useRef(r),o=ee(t);return l.useEffect(()=>{a.current!==r&&(o(r),a.current=r)},[r,a,o]),n}var Be=l.forwardRef((e,t)=>{const{children:n,...r}=e,a=l.Children.toArray(n),o=a.find(hi);if(o){const s=o.props.children,i=a.map(u=>u===o?l.Children.count(s)>1?l.Children.only(null):l.isValidElement(s)?s.props.children:null:u);return m.jsx(At,{...r,ref:t,children:l.isValidElement(s)?l.cloneElement(s,void 0,i):null})}return m.jsx(At,{...r,ref:t,children:n})});Be.displayName="Slot";var At=l.forwardRef((e,t)=>{const{children:n,...r}=e;if(l.isValidElement(n)){const a=gi(n),o=pi(r,n.props);return n.type!==l.Fragment&&(o.ref=t?Nr(t,a):a),l.cloneElement(n,o)}return l.Children.count(n)>1?l.Children.only(null):null});At.displayName="SlotClone";var mi=({children:e})=>m.jsx(m.Fragment,{children:e});function hi(e){return l.isValidElement(e)&&e.type===mi}function pi(e,t){const n={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...i)=>{o(...i),a(...i)}:a&&(n[r]=a):r==="style"?n[r]={...a,...o}:r==="className"&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}function gi(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var vi=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],V=vi.reduce((e,t)=>{const n=l.forwardRef((r,a)=>{const{asChild:o,...s}=r,i=o?Be:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),m.jsx(i,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function bi(e,t){e&&ba.flushSync(()=>e.dispatchEvent(t))}function yi(e,t=globalThis==null?void 0:globalThis.document){const n=ee(e);l.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var xi="DismissableLayer",Pt="dismissableLayer.update",wi="dismissableLayer.pointerDownOutside",Ei="dismissableLayer.focusOutside",Cn,Or=l.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),kr=l.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:i,...u}=e,c=l.useContext(Or),[f,d]=l.useState(null),h=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=l.useState({}),w=ne(t,N=>d(N)),g=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(b),S=f?g.indexOf(f):-1,E=c.layersWithOutsidePointerEventsDisabled.size>0,A=S>=y,C=Ai(N=>{const T=N.target,B=[...c.branches].some(me=>me.contains(T));!A||B||(a==null||a(N),s==null||s(N),N.defaultPrevented||i==null||i())},h),O=Pi(N=>{const T=N.target;[...c.branches].some(me=>me.contains(T))||(o==null||o(N),s==null||s(N),N.defaultPrevented||i==null||i())},h);return yi(N=>{S===c.layers.size-1&&(r==null||r(N),!N.defaultPrevented&&i&&(N.preventDefault(),i()))},h),l.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Cn=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Sn(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Cn)}},[f,h,n,c]),l.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Sn())},[f,c]),l.useEffect(()=>{const N=()=>v({});return document.addEventListener(Pt,N),()=>document.removeEventListener(Pt,N)},[]),m.jsx(V.div,{...u,ref:w,style:{pointerEvents:E?A?"auto":"none":void 0,...e.style},onFocusCapture:Y(e.onFocusCapture,O.onFocusCapture),onBlurCapture:Y(e.onBlurCapture,O.onBlurCapture),onPointerDownCapture:Y(e.onPointerDownCapture,C.onPointerDownCapture)})});kr.displayName=xi;var Ci="DismissableLayerBranch",Si=l.forwardRef((e,t)=>{const n=l.useContext(Or),r=l.useRef(null),a=ne(t,r);return l.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),m.jsx(V.div,{...e,ref:a})});Si.displayName=Ci;function Ai(e,t=globalThis==null?void 0:globalThis.document){const n=ee(e),r=l.useRef(!1),a=l.useRef(()=>{});return l.useEffect(()=>{const o=i=>{if(i.target&&!r.current){let u=function(){Ir(wi,n,c,{discrete:!0})};const c={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=u,t.addEventListener("click",a.current,{once:!0})):u()}else t.removeEventListener("click",a.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Pi(e,t=globalThis==null?void 0:globalThis.document){const n=ee(e),r=l.useRef(!1);return l.useEffect(()=>{const a=o=>{o.target&&!r.current&&Ir(Ei,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Sn(){const e=new CustomEvent(Pt);document.dispatchEvent(e)}function Ir(e,t,n,{discrete:r}){const a=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?bi(a,o):a.dispatchEvent(o)}var Je="focusScope.autoFocusOnMount",et="focusScope.autoFocusOnUnmount",An={bubbles:!1,cancelable:!0},Ni="FocusScope",Tr=l.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[i,u]=l.useState(null),c=ee(a),f=ee(o),d=l.useRef(null),h=ne(t,g=>u(g)),v=l.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;l.useEffect(()=>{if(r){let g=function(E){if(v.paused||!i)return;const A=E.target;i.contains(A)?d.current=A:$(d.current,{select:!0})},b=function(E){if(v.paused||!i)return;const A=E.relatedTarget;A!==null&&(i.contains(A)||$(d.current,{select:!0}))},y=function(E){if(document.activeElement===document.body)for(const C of E)C.removedNodes.length>0&&$(i)};document.addEventListener("focusin",g),document.addEventListener("focusout",b);const S=new MutationObserver(y);return i&&S.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",b),S.disconnect()}}},[r,i,v.paused]),l.useEffect(()=>{if(i){Nn.add(v);const g=document.activeElement;if(!i.contains(g)){const y=new CustomEvent(Je,An);i.addEventListener(Je,c),i.dispatchEvent(y),y.defaultPrevented||(Oi(Mi(Rr(i)),{select:!0}),document.activeElement===g&&$(i))}return()=>{i.removeEventListener(Je,c),setTimeout(()=>{const y=new CustomEvent(et,An);i.addEventListener(et,f),i.dispatchEvent(y),y.defaultPrevented||$(g??document.body,{select:!0}),i.removeEventListener(et,f),Nn.remove(v)},0)}}},[i,c,f,v]);const w=l.useCallback(g=>{if(!n&&!r||v.paused)return;const b=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,y=document.activeElement;if(b&&y){const S=g.currentTarget,[E,A]=ki(S);E&&A?!g.shiftKey&&y===A?(g.preventDefault(),n&&$(E,{select:!0})):g.shiftKey&&y===E&&(g.preventDefault(),n&&$(A,{select:!0})):y===S&&g.preventDefault()}},[n,r,v.paused]);return m.jsx(V.div,{tabIndex:-1,...s,ref:h,onKeyDown:w})});Tr.displayName=Ni;function Oi(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if($(r,{select:t}),document.activeElement!==n)return}function ki(e){const t=Rr(e),n=Pn(t,e),r=Pn(t.reverse(),e);return[n,r]}function Rr(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Pn(e,t){for(const n of e)if(!Ii(n,{upTo:t}))return n}function Ii(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ti(e){return e instanceof HTMLInputElement&&"select"in e}function $(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ti(e)&&t&&e.select()}}var Nn=Ri();function Ri(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=On(e,t),e.unshift(t)},remove(t){var n;e=On(e,t),(n=e[0])==null||n.resume()}}}function On(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Mi(e){return e.filter(t=>t.tagName!=="A")}var ji="Portal",Mr=l.forwardRef((e,t)=>{var i;const{container:n,...r}=e,[a,o]=l.useState(!1);De(()=>o(!0),[]);const s=n||a&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return s?ya.createPortal(m.jsx(V.div,{...r,ref:t}),s):null});Mr.displayName=ji;function _i(e,t){return l.useReducer((n,r)=>t[n][r]??n,e)}var He=e=>{const{present:t,children:n}=e,r=Di(t),a=typeof n=="function"?n({present:r.isPresent}):l.Children.only(n),o=ne(r.ref,Fi(a));return typeof n=="function"||r.isPresent?l.cloneElement(a,{ref:o}):null};He.displayName="Presence";function Di(e){const[t,n]=l.useState(),r=l.useRef({}),a=l.useRef(e),o=l.useRef("none"),s=e?"mounted":"unmounted",[i,u]=_i(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const c=Se(r.current);o.current=i==="mounted"?c:"none"},[i]),De(()=>{const c=r.current,f=a.current;if(f!==e){const h=o.current,v=Se(c);e?u("MOUNT"):v==="none"||(c==null?void 0:c.display)==="none"?u("UNMOUNT"):u(f&&h!==v?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),De(()=>{if(t){let c;const f=t.ownerDocument.defaultView??window,d=v=>{const g=Se(r.current).includes(v.animationName);if(v.target===t&&g&&(u("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",c=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},h=v=>{v.target===t&&(o.current=Se(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{f.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:l.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function Se(e){return(e==null?void 0:e.animationName)||"none"}function Fi(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var tt=0;function Li(){l.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??kn()),document.body.insertAdjacentElement("beforeend",e[1]??kn()),tt++,()=>{tt===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),tt--}},[])}function kn(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var D=function(){return D=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},D.apply(this,arguments)};function jr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function zi(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Te="right-scroll-bar-position",Re="width-before-scroll-bar",Wi="with-scroll-bars-hidden",Ui="--removed-body-scroll-bar-size";function nt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Vi(e,t){var n=l.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var Bi=typeof window<"u"?l.useLayoutEffect:l.useEffect,In=new WeakMap;function Hi(e,t){var n=Vi(null,function(r){return e.forEach(function(a){return nt(a,r)})});return Bi(function(){var r=In.get(n);if(r){var a=new Set(r),o=new Set(e),s=n.current;a.forEach(function(i){o.has(i)||nt(i,null)}),o.forEach(function(i){a.has(i)||nt(i,s)})}In.set(n,e)},[e]),n}function $i(e){return e}function Yi(e,t){t===void 0&&(t=$i);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(i){return i!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(i){return o(i)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var i=n;n=[],i.forEach(o),s=n}var u=function(){var f=s;s=[],f.forEach(o)},c=function(){return Promise.resolve().then(u)};c(),n={push:function(f){s.push(f),c()},filter:function(f){return s=s.filter(f),n}}}};return a}function Gi(e){e===void 0&&(e={});var t=Yi(null);return t.options=D({async:!0,ssr:!1},e),t}var _r=function(e){var t=e.sideCar,n=jr(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return l.createElement(r,D({},n))};_r.isSideCarExport=!0;function Xi(e,t){return e.useMedium(t),_r}var Dr=Gi(),rt=function(){},$e=l.forwardRef(function(e,t){var n=l.useRef(null),r=l.useState({onScrollCapture:rt,onWheelCapture:rt,onTouchMoveCapture:rt}),a=r[0],o=r[1],s=e.forwardProps,i=e.children,u=e.className,c=e.removeScrollBar,f=e.enabled,d=e.shards,h=e.sideCar,v=e.noIsolation,w=e.inert,g=e.allowPinchZoom,b=e.as,y=b===void 0?"div":b,S=e.gapMode,E=jr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=h,C=Hi([n,t]),O=D(D({},E),a);return l.createElement(l.Fragment,null,f&&l.createElement(A,{sideCar:Dr,removeScrollBar:c,shards:d,noIsolation:v,inert:w,setCallbacks:o,allowPinchZoom:!!g,lockRef:n,gapMode:S}),s?l.cloneElement(l.Children.only(i),D(D({},O),{ref:C})):l.createElement(y,D({},O,{className:u,ref:C}),i))});$e.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};$e.classNames={fullWidth:Re,zeroRight:Te};var Ki=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Zi(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ki();return t&&e.setAttribute("nonce",t),e}function qi(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Qi(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ji=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Zi())&&(qi(t,n),Qi(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ec=function(){var e=Ji();return function(t,n){l.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Fr=function(){var e=ec(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},tc={left:0,top:0,right:0,gap:0},at=function(e){return parseInt(e||"",10)||0},nc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[at(n),at(r),at(a)]},rc=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return tc;var t=nc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ac=Fr(),le="data-scroll-locked",oc=function(e,t,n,r){var a=e.left,o=e.top,s=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Wi,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(le,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Te,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Re,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Te," .").concat(Te,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Re," .").concat(Re,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(le,`] {
    `).concat(Ui,": ").concat(i,`px;
  }
`)},Tn=function(){var e=parseInt(document.body.getAttribute(le)||"0",10);return isFinite(e)?e:0},sc=function(){l.useEffect(function(){return document.body.setAttribute(le,(Tn()+1).toString()),function(){var e=Tn()-1;e<=0?document.body.removeAttribute(le):document.body.setAttribute(le,e.toString())}},[])},ic=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;sc();var o=l.useMemo(function(){return rc(a)},[a]);return l.createElement(ac,{styles:oc(o,!t,a,n?"":"!important")})},Nt=!1;if(typeof window<"u")try{var Ae=Object.defineProperty({},"passive",{get:function(){return Nt=!0,!0}});window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch{Nt=!1}var re=Nt?{passive:!1}:!1,cc=function(e){return e.tagName==="TEXTAREA"},Lr=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!cc(e)&&n[t]==="visible")},lc=function(e){return Lr(e,"overflowY")},uc=function(e){return Lr(e,"overflowX")},Rn=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=zr(e,r);if(a){var o=Wr(e,r),s=o[1],i=o[2];if(s>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},fc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},dc=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},zr=function(e,t){return e==="v"?lc(t):uc(t)},Wr=function(e,t){return e==="v"?fc(t):dc(t)},mc=function(e,t){return e==="h"&&t==="rtl"?-1:1},hc=function(e,t,n,r,a){var o=mc(e,window.getComputedStyle(t).direction),s=o*r,i=n.target,u=t.contains(i),c=!1,f=s>0,d=0,h=0;do{var v=Wr(e,i),w=v[0],g=v[1],b=v[2],y=g-b-o*w;(w||y)&&zr(e,i)&&(d+=y,h+=w),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(f&&Math.abs(d)<1||!f&&Math.abs(h)<1)&&(c=!0),c},Pe=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Mn=function(e){return[e.deltaX,e.deltaY]},jn=function(e){return e&&"current"in e?e.current:e},pc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},gc=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},vc=0,ae=[];function bc(e){var t=l.useRef([]),n=l.useRef([0,0]),r=l.useRef(),a=l.useState(vc++)[0],o=l.useState(Fr)[0],s=l.useRef(e);l.useEffect(function(){s.current=e},[e]),l.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var g=zi([e.lockRef.current],(e.shards||[]).map(jn),!0).filter(Boolean);return g.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),g.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var i=l.useCallback(function(g,b){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!s.current.allowPinchZoom;var y=Pe(g),S=n.current,E="deltaX"in g?g.deltaX:S[0]-y[0],A="deltaY"in g?g.deltaY:S[1]-y[1],C,O=g.target,N=Math.abs(E)>Math.abs(A)?"h":"v";if("touches"in g&&N==="h"&&O.type==="range")return!1;var T=Rn(N,O);if(!T)return!0;if(T?C=N:(C=N==="v"?"h":"v",T=Rn(N,O)),!T)return!1;if(!r.current&&"changedTouches"in g&&(E||A)&&(r.current=C),!C)return!0;var B=r.current||C;return hc(B,b,g,B==="h"?E:A)},[]),u=l.useCallback(function(g){var b=g;if(!(!ae.length||ae[ae.length-1]!==o)){var y="deltaY"in b?Mn(b):Pe(b),S=t.current.filter(function(C){return C.name===b.type&&(C.target===b.target||b.target===C.shadowParent)&&pc(C.delta,y)})[0];if(S&&S.should){b.cancelable&&b.preventDefault();return}if(!S){var E=(s.current.shards||[]).map(jn).filter(Boolean).filter(function(C){return C.contains(b.target)}),A=E.length>0?i(b,E[0]):!s.current.noIsolation;A&&b.cancelable&&b.preventDefault()}}},[]),c=l.useCallback(function(g,b,y,S){var E={name:g,delta:b,target:y,should:S,shadowParent:yc(y)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(A){return A!==E})},1)},[]),f=l.useCallback(function(g){n.current=Pe(g),r.current=void 0},[]),d=l.useCallback(function(g){c(g.type,Mn(g),g.target,i(g,e.lockRef.current))},[]),h=l.useCallback(function(g){c(g.type,Pe(g),g.target,i(g,e.lockRef.current))},[]);l.useEffect(function(){return ae.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",u,re),document.addEventListener("touchmove",u,re),document.addEventListener("touchstart",f,re),function(){ae=ae.filter(function(g){return g!==o}),document.removeEventListener("wheel",u,re),document.removeEventListener("touchmove",u,re),document.removeEventListener("touchstart",f,re)}},[]);var v=e.removeScrollBar,w=e.inert;return l.createElement(l.Fragment,null,w?l.createElement(o,{styles:gc(a)}):null,v?l.createElement(ic,{gapMode:e.gapMode}):null)}function yc(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const xc=Xi(Dr,bc);var Ur=l.forwardRef(function(e,t){return l.createElement($e,D({},e,{ref:t,sideCar:xc}))});Ur.classNames=$e.classNames;var wc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},oe=new WeakMap,Ne=new WeakMap,Oe={},ot=0,Vr=function(e){return e&&(e.host||Vr(e.parentNode))},Ec=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Vr(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Cc=function(e,t,n,r){var a=Ec(t,Array.isArray(e)?e:[e]);Oe[n]||(Oe[n]=new WeakMap);var o=Oe[n],s=[],i=new Set,u=new Set(a),c=function(d){!d||i.has(d)||(i.add(d),c(d.parentNode))};a.forEach(c);var f=function(d){!d||u.has(d)||Array.prototype.forEach.call(d.children,function(h){if(i.has(h))f(h);else try{var v=h.getAttribute(r),w=v!==null&&v!=="false",g=(oe.get(h)||0)+1,b=(o.get(h)||0)+1;oe.set(h,g),o.set(h,b),s.push(h),g===1&&w&&Ne.set(h,!0),b===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",h,y)}})};return f(t),i.clear(),ot++,function(){s.forEach(function(d){var h=oe.get(d)-1,v=o.get(d)-1;oe.set(d,h),o.set(d,v),h||(Ne.has(d)||d.removeAttribute(r),Ne.delete(d)),v||d.removeAttribute(n)}),ot--,ot||(oe=new WeakMap,oe=new WeakMap,Ne=new WeakMap,Oe={})}},Sc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=wc(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Cc(r,a,n,"aria-hidden")):function(){return null}},Wt="Dialog",[Br,tl]=ii(Wt),[Ac,M]=Br(Wt),Hr=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,i=l.useRef(null),u=l.useRef(null),[c=!1,f]=fi({prop:r,defaultProp:a,onChange:o});return m.jsx(Ac,{scope:t,triggerRef:i,contentRef:u,contentId:Qe(),titleId:Qe(),descriptionId:Qe(),open:c,onOpenChange:f,onOpenToggle:l.useCallback(()=>f(d=>!d),[f]),modal:s,children:n})};Hr.displayName=Wt;var $r="DialogTrigger",Yr=l.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=M($r,n),o=ne(t,a.triggerRef);return m.jsx(V.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":Bt(a.open),...r,ref:o,onClick:Y(e.onClick,a.onOpenToggle)})});Yr.displayName=$r;var Ut="DialogPortal",[Pc,Gr]=Br(Ut,{forceMount:void 0}),Xr=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,o=M(Ut,t);return m.jsx(Pc,{scope:t,forceMount:n,children:l.Children.map(r,s=>m.jsx(He,{present:n||o.open,children:m.jsx(Mr,{asChild:!0,container:a,children:s})}))})};Xr.displayName=Ut;var Fe="DialogOverlay",Kr=l.forwardRef((e,t)=>{const n=Gr(Fe,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=M(Fe,e.__scopeDialog);return o.modal?m.jsx(He,{present:r||o.open,children:m.jsx(Nc,{...a,ref:t})}):null});Kr.displayName=Fe;var Nc=l.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=M(Fe,n);return m.jsx(Ur,{as:Be,allowPinchZoom:!0,shards:[a.contentRef],children:m.jsx(V.div,{"data-state":Bt(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),te="DialogContent",Zr=l.forwardRef((e,t)=>{const n=Gr(te,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=M(te,e.__scopeDialog);return m.jsx(He,{present:r||o.open,children:o.modal?m.jsx(Oc,{...a,ref:t}):m.jsx(kc,{...a,ref:t})})});Zr.displayName=te;var Oc=l.forwardRef((e,t)=>{const n=M(te,e.__scopeDialog),r=l.useRef(null),a=ne(t,n.contentRef,r);return l.useEffect(()=>{const o=r.current;if(o)return Sc(o)},[]),m.jsx(qr,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Y(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:Y(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&o.preventDefault()}),onFocusOutside:Y(e.onFocusOutside,o=>o.preventDefault())})}),kc=l.forwardRef((e,t)=>{const n=M(te,e.__scopeDialog),r=l.useRef(!1),a=l.useRef(!1);return m.jsx(qr,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,i;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),o.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:o=>{var u,c;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=o.target;((c=n.triggerRef.current)==null?void 0:c.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),qr=l.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,...s}=e,i=M(te,n),u=l.useRef(null),c=ne(t,u);return Li(),m.jsxs(m.Fragment,{children:[m.jsx(Tr,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o,children:m.jsx(kr,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Bt(i.open),...s,ref:c,onDismiss:()=>i.onOpenChange(!1)})}),m.jsxs(m.Fragment,{children:[m.jsx(Ic,{titleId:i.titleId}),m.jsx(Rc,{contentRef:u,descriptionId:i.descriptionId})]})]})}),Vt="DialogTitle",Qr=l.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=M(Vt,n);return m.jsx(V.h2,{id:a.titleId,...r,ref:t})});Qr.displayName=Vt;var Jr="DialogDescription",ea=l.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=M(Jr,n);return m.jsx(V.p,{id:a.descriptionId,...r,ref:t})});ea.displayName=Jr;var ta="DialogClose",na=l.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=M(ta,n);return m.jsx(V.button,{type:"button",...r,ref:t,onClick:Y(e.onClick,()=>a.onOpenChange(!1))})});na.displayName=ta;function Bt(e){return e?"open":"closed"}var ra="DialogTitleWarning",[nl,aa]=si(ra,{contentName:te,titleName:Vt,docsSlug:"dialog"}),Ic=({titleId:e})=>{const t=aa(ra),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return l.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Tc="DialogDescriptionWarning",Rc=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${aa(Tc).contentName}}.`;return l.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Mc=Hr,jc=Yr,_c=Xr,oa=Kr,sa=Zr,ia=Qr,ca=ea,Dc=na;const _n=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Dn=Pa,la=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Dn(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:o}=t,s=Object.keys(a).map(c=>{const f=n==null?void 0:n[c],d=o==null?void 0:o[c];if(f===null)return null;const h=_n(f)||_n(d);return a[c][h]}),i=n&&Object.entries(n).reduce((c,f)=>{let[d,h]=f;return h===void 0||(c[d]=h),c},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,f)=>{let{class:d,className:h,...v}=f;return Object.entries(v).every(w=>{let[g,b]=w;return Array.isArray(b)?b.includes({...o,...i}[g]):{...o,...i}[g]===b})?[...c,d,h]:c},[]);return Dn(e,s,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ua=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:s,...i},u)=>l.createElement("svg",{ref:u,...Lc,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ua("lucide",a),...i},[...s.map(([c,f])=>l.createElement(c,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=(e,t)=>{const n=l.forwardRef(({className:r,...a},o)=>l.createElement(zc,{ref:o,iconNode:t,className:ua(`lucide-${Fc(e)}`,r),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Vc=Wc("X",Uc),Bc=Mc,Hc=jc,$c=_c,fa=l.forwardRef(({className:e,...t},n)=>m.jsx(oa,{className:fe("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));fa.displayName=oa.displayName;const Yc=la("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),da=l.forwardRef(({side:e="right",className:t,children:n,...r},a)=>m.jsxs($c,{children:[m.jsx(fa,{}),m.jsxs(sa,{ref:a,className:fe(Yc({side:e}),t),...r,children:[n,m.jsxs(Dc,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[m.jsx(Vc,{className:"h-4 w-4"}),m.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));da.displayName=sa.displayName;const ma=({className:e,...t})=>m.jsx("div",{className:fe("flex flex-col space-y-2 text-center sm:text-left",e),...t});ma.displayName="SheetHeader";const ha=l.forwardRef(({className:e,...t},n)=>m.jsx(ia,{ref:n,className:fe("text-lg font-semibold text-foreground",e),...t}));ha.displayName=ia.displayName;const Gc=l.forwardRef(({className:e,...t},n)=>m.jsx(ca,{ref:n,className:fe("text-sm text-muted-foreground",e),...t}));Gc.displayName=ca.displayName;const Xc=la("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),pa=l.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},o)=>{const s=r?Be:"button";return m.jsx(s,{className:fe(Xc({variant:t,size:n,className:e})),ref:o,...a})});pa.displayName="Button";function Kc(){const[e,t]=l.useState("home"),[n,r]=l.useState(!1),a=[{name:"Home",href:"/#home",section:"home"},{name:"Works",href:"/#works",section:"works"},{name:"About me",href:"/#about-me",section:"about-me"},{name:"Contacts",href:"/#contacts",section:"contacts"},{name:"Reviews",href:"/reviews",section:"reviews"}],o=[{icon:zt,href:"https://github.com/codelab265",label:"GitHub"},{icon:Ar,href:"https://www.facebook.com/mphatso.mlenga",label:"Facebook"},{icon:Pr,href:"https://wa.me/265992374819",label:"WhatsApp"},{icon:Sr,href:"https://www.linkedin.com/in/mphatso-mlenga-0101010101/",label:"LinkedIn"}];l.useEffect(()=>{const i={root:null,rootMargin:"-50% 0px",threshold:0},u=f=>{f.forEach(d=>{d.isIntersecting&&t(d.target.id)})},c=new IntersectionObserver(u,i);return a.forEach(f=>{const d=document.getElementById(f.section);d&&c.observe(d)}),()=>{a.forEach(f=>{const d=document.getElementById(f.section);d&&c.unobserve(d)})}},[]);const s=(i,u)=>{i.preventDefault();const c=document.getElementById(u.split("#")[1]);c&&(c.scrollIntoView({behavior:"smooth"}),r(!1))};return m.jsxs(Bc,{open:n,onOpenChange:r,children:[m.jsx(Hc,{asChild:!0,children:m.jsx(pa,{variant:"ghost",className:"p-0 hover:bg-transparent focus-visible:ring-0","aria-label":"Open menu",children:m.jsx(j.img,{src:"/images/menu.svg",alt:"menu",whileHover:{scale:1.1},whileTap:{scale:.9}})})}),m.jsxs(da,{className:"bg-background/95 backdrop-blur-sm border-l border-primary",children:[m.jsx(ma,{children:m.jsxs(ha,{className:"flex items-center gap-2 text-white",children:[m.jsx(j.img,{src:"/images/logo.svg",alt:"logo",className:"w-6 h-6 object-contain",animate:{rotate:360},transition:{duration:2,repeat:1/0,ease:"linear"}}),m.jsx("span",{className:"text-primary",children:"Mphatso"})]})}),m.jsxs("div",{className:"flex flex-col justify-between h-[calc(100vh-100px)] mt-10",children:[m.jsx(j.div,{className:"flex flex-col gap-6",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3},children:a.map((i,u)=>m.jsxs(j.a,{href:i.href,className:`text-lg hover:text-primary transition-colors duration-200 ${e===i.section?"text-white":"text-grey"}`,onClick:c=>s(c,i.href),initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:u*.1},whileHover:{x:10},children:[m.jsx("span",{className:"text-primary",children:"#"}),i.name]},i.href))}),m.jsx(j.div,{className:"flex gap-6 mt-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:o.map((i,u)=>m.jsx(j.a,{href:i.href,target:"_blank",rel:"noopener noreferrer",className:"text-grey hover:text-primary transition-colors duration-200",whileHover:{scale:1.2},whileTap:{scale:.9},"aria-label":i.label,children:m.jsx(q,{icon:i.icon,size:"lg"})},i.href))})]})]})]})}function Zc(){const[e,t]=l.useState("home"),[n,r]=l.useState(!1),a=[{name:"Home",href:"/#home",section:"home"},{name:"Works",href:"/#works",section:"works"},{name:"About me",href:"/#about-me",section:"about-me"},{name:"Contacts",href:"/#contacts",section:"contacts"}];l.useEffect(()=>{const s={root:null,rootMargin:"-50% 0px",threshold:0},i=f=>{f.forEach(d=>{d.isIntersecting&&t(d.target.id)})},u=new IntersectionObserver(i,s);a.forEach(f=>{const d=document.getElementById(f.section);d&&u.observe(d)});const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>{a.forEach(f=>{const d=document.getElementById(f.section);d&&u.unobserve(d)}),window.removeEventListener("scroll",c)}},[]);const o=(s,i)=>{s.preventDefault();const u=document.getElementById(i.split("#")[1]);u&&u.scrollIntoView({behavior:"smooth"})};return m.jsx(j.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5},className:`fixed top-0 w-full pt-8 pb-4 z-50 transition-all duration-300 ${n?"bg-background/95 backdrop-blur-sm shadow-lg":"bg-transparent"}`,children:m.jsxs("div",{className:"max-w-5xl mx-auto px-4 flex justify-between items-center",children:[m.jsxs(j.a,{href:"/",className:"flex items-center gap-2 text-base font-medium text-white group",whileHover:{scale:1.05},transition:{duration:.2},children:[m.jsx("img",{src:"/images/logo.svg",alt:"Logo",className:"w-6 h-6 object-contain transition-transform group-hover:rotate-90 duration-300"}),m.jsx("span",{className:"group-hover:text-primary transition-colors",children:"Mphatso"})]}),m.jsx("div",{className:"md:hidden",children:m.jsx(Kc,{})}),m.jsx("div",{className:"space-x-6 hidden md:flex items-center",children:a.map(s=>m.jsxs(j.a,{href:s.href,className:`text-base hover:text-primary transition-colors duration-200 relative ${e===s.section?"text-white":"text-grey"}`,onClick:i=>o(i,s.href),whileHover:{scale:1.05},transition:{duration:.2},children:[m.jsx("span",{className:"text-primary",children:"#"}),s.name,e===s.section&&m.jsx(j.div,{className:"absolute -bottom-1 left-0 w-full h-0.5 bg-primary",layoutId:"underline"})]},s.href))})]})})}function qc({children:e,className:t,variant:n,duration:r=.4,delay:a=0,offset:o=6,direction:s="down",inView:i=!1,inViewMargin:u="-50px",blur:c="6px",...f}){const d=l.useRef(null),h=_a(d,{once:!0,margin:u}),v=!i||h,w={hidden:{[s==="left"||s==="right"?"x":"y"]:s==="right"||s==="down"?-o:o,opacity:0,filter:`blur(${c})`},visible:{[s==="left"||s==="right"?"x":"y"]:0,opacity:1,filter:"blur(0px)"}},g=n||w;return m.jsx(Ra,{children:m.jsx(Na.div,{ref:d,initial:"hidden",animate:v?"visible":"hidden",exit:"hidden",variants:g,transition:{delay:.04+a,duration:r,ease:"easeOut"},className:t,...f,children:e})})}function Qc(){const e=[{icon:zt,href:"https://github.com/codelab265"},{icon:Ar,href:"https://web.facebook.com/mphatso.mlenga.908"},{icon:Pr,href:"https://wa.me/265992374819"},{icon:Sr,href:"https://www.linkedin.com/in/mphatso-mlenga-9b969b235/"}];return m.jsxs("div",{className:"hidden md:flex flex-col items-center gap-4 absolute top-0 left-[17px] z-50",children:[m.jsx("div",{className:"h-[191px] w-[1px] bg-grey"}),e.map((t,n)=>m.jsx(qc,{delay:.1*n,children:m.jsx("a",{href:t.href,children:m.jsx(q,{icon:t.icon,size:"xl"})})},t.href))]})}function rl({children:e}){return m.jsxs("div",{className:"bg-[#282C33] text-gray-200 min-h-screen relative",children:[m.jsx(Zc,{}),e,m.jsx(oi,{}),m.jsx(Qc,{})]})}export{qc as B,ai as C,q as F,rl as M,Wc as c,Pr as f};
