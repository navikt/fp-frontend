import{j as U}from"./jsx-runtime-D_zvdyIk.js";import{u as Be,a as je,d as mr,l as Zr,q as vr,e as yr,S as Jr,b as kr,L as _n,r as Qr,B as Me,o as br,E as pr,f as Xr,g as et,s as nt,R as rt,i as tt,V as hr,t as at,n as ve,P as _r,M as yn,j as st,v as it,w as lt,k as ot,m as ut,p as gn}from"./nb_NO-B2qiuTAT.js";import{R as _,r as T}from"./index-_2TAQcTa.js";import{d as En}from"./dayjs.min-DkLNzaWO.js";import{G as dt}from"./index-BsrZSYsV.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CQwh6Daz.js";var an=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(an||{});an.BRUKERS_ANDEL;an.FRILANS;an.EGEN_NÆRING;var ae=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ae||{}),Ae=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Ae||{}),ce=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(ce||{}),De=e=>e.type==="checkbox",be=e=>e instanceof Date,X=e=>e==null;const Er=e=>typeof e=="object";var $=e=>!X(e)&&!Array.isArray(e)&&Er(e)&&!be(e),wr=e=>$(e)&&e.target?De(e.target)?e.target.checked:e.target.value:e,gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ar=(e,t)=>e.has(gt(t)),ct=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},wn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function re(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wn&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!ct(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=re(e[a]));else return e;return t}var sn=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,f=(e,t,n)=>{if(!t||!$(e))return n;const r=sn(t.split(/[,[\].]+?/)).reduce((a,s)=>X(a)?a:a[s],e);return H(r)||r===e?H(e[t])?n:e[t]:r},ie=e=>typeof e=="boolean",An=e=>/^\w*$/.test(e),jr=e=>sn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),C=(e,t,n)=>{let r=-1;const a=An(t)?[t]:jr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let b=n;if(r!==o){const A=e[d];b=$(A)||Array.isArray(A)?A:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=b,e=e[d]}return e};const en={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},le={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},xr=_.createContext(null),Ce=()=>_.useContext(xr),ft=e=>{const{children:t,...n}=e;return _.createElement(xr.Provider,{value:n},t)};var Sr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==le.all&&(t._proxyFormState[o]=!r||le.all),n&&(n[o]=!0),e[o]}});return a},te=e=>$(e)&&!Object.keys(e).length,Rr=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return te(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||le.all))},Ie=e=>Array.isArray(e)?e:[e],Tr=(e,t,n)=>!e||!t||e===t||Ie(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function jn(e){const t=_.useRef(e);t.current=e,_.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function mt(e){const t=Ce(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=_.useState(n._formState),b=_.useRef(!0),A=_.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),m=_.useRef(a);return m.current=a,jn({disabled:r,next:p=>b.current&&Tr(m.current,p.name,s)&&Rr(p,A.current,n._updateFormState)&&d({...n._formState,...p}),subject:n._subjects.state}),_.useEffect(()=>(b.current=!0,A.current.isValid&&n._updateValid(!0),()=>{b.current=!1}),[n]),_.useMemo(()=>Sr(o,n,A.current,!1),[o,n])}var de=e=>typeof e=="string",Or=(e,t,n,r,a)=>de(e)?(r&&t.watch.add(e),f(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),f(n,s))):(r&&(t.watchAll=!0),n);function vt(e){const t=Ce(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},d=_.useRef(r);d.current=r,jn({disabled:s,subject:n._subjects.values,next:m=>{Tr(d.current,m.name,o)&&A(re(Or(d.current,n._names,m.values||n._formValues,!1,a)))}});const[b,A]=_.useState(n._getWatch(r,a));return _.useEffect(()=>n._removeUnmounted()),b}function qr(e){const t=Ce(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=Ar(a._names.array,n),d=vt({control:a,name:n,defaultValue:f(a._formValues,n,f(a._defaultValues,n,e.defaultValue)),exact:!0}),b=mt({control:a,name:n,exact:!0}),A=_.useRef(a.register(n,{...e.rules,value:d,...ie(e.disabled)?{disabled:e.disabled}:{}})),m=_.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(b.errors,n)},isDirty:{enumerable:!0,get:()=>!!f(b.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!f(b.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!f(b.validatingFields,n)},error:{enumerable:!0,get:()=>f(b.errors,n)}}),[b,n]),p=_.useMemo(()=>({name:n,value:d,...ie(r)||b.disabled?{disabled:b.disabled||r}:{},onChange:S=>A.current.onChange({target:{value:wr(S),name:n},type:en.CHANGE}),onBlur:()=>A.current.onBlur({target:{value:f(a._formValues,n),name:n},type:en.BLUR}),ref:S=>{const R=f(a._fields,n);R&&S&&(R._f.ref={focus:()=>S.focus(),select:()=>S.select(),setCustomValidity:O=>S.setCustomValidity(O),reportValidity:()=>S.reportValidity()})}}),[n,a._formValues,r,b.disabled,d,a._fields]);return _.useEffect(()=>{const S=a._options.shouldUnregister||s,R=(O,L)=>{const v=f(a._fields,O);v&&v._f&&(v._f.mount=L)};if(R(n,!0),S){const O=re(f(a._options.defaultValues,n));C(a._defaultValues,n,O),H(f(a._formValues,n))&&C(a._formValues,n,O)}return!o&&a.register(n),()=>{(o?S&&!a._state.action:S)?a.unregister(n):R(n,!1)}},[n,a,o,s]),_.useEffect(()=>{a._updateDisabledField({disabled:r,fields:a._fields,name:n})},[r,n,a]),_.useMemo(()=>({field:p,formState:b,fieldState:m}),[p,b,m])}var yt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},qn=e=>({isOnSubmit:!e||e===le.onSubmit,isOnBlur:e===le.onBlur,isOnChange:e===le.onChange,isOnAll:e===le.all,isOnTouch:e===le.onTouched}),Nn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Le=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=f(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(Le(d,t))break}else if($(d)&&Le(d,t))break}}};var kt=(e,t,n)=>{const r=Ie(f(e,n));return C(r,"root",t[n]),C(e,n,r),e},xn=e=>e.type==="file",ue=e=>typeof e=="function",nn=e=>{if(!wn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xe=e=>de(e),Sn=e=>e.type==="radio",rn=e=>e instanceof RegExp;const Vn={value:!1,isValid:!1},Fn={value:!0,isValid:!0};var Nr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?Fn:{value:e[0].value,isValid:!0}:Fn:Vn}return Vn};const In={isValid:!1,value:null};var Vr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,In):In;function Ln(e,t,n="validate"){if(Xe(e)||Array.isArray(e)&&e.every(Xe)||ie(e)&&!e)return{type:n,message:Xe(e)?e:"",ref:t}}var we=e=>$(e)&&!rn(e)?e:{value:e,message:""},Pn=async(e,t,n,r,a,s)=>{const{ref:o,refs:d,required:b,maxLength:A,minLength:m,min:p,max:S,pattern:R,validate:O,name:L,valueAsNumber:v,mount:w}=e._f,y=f(n,L);if(!w||t.has(L))return{};const h=d?d[0]:o,V=E=>{a&&h.reportValidity&&(h.setCustomValidity(ie(E)?"":E||""),h.reportValidity())},N={},z=Sn(o),K=De(o),D=z||K,B=(v||xn(o))&&H(o.value)&&H(y)||nn(o)&&o.value===""||y===""||Array.isArray(y)&&!y.length,I=yt.bind(null,L,r,N),G=(E,x,F,P=ge.maxLength,M=ge.minLength)=>{const Y=E?x:F;N[L]={type:E?P:M,message:Y,ref:o,...I(E?P:M,Y)}};if(s?!Array.isArray(y)||!y.length:b&&(!D&&(B||X(y))||ie(y)&&!y||K&&!Nr(d).isValid||z&&!Vr(d).isValid)){const{value:E,message:x}=Xe(b)?{value:!!b,message:b}:we(b);if(E&&(N[L]={type:ge.required,message:x,ref:h,...I(ge.required,x)},!r))return V(x),N}if(!B&&(!X(p)||!X(S))){let E,x;const F=we(S),P=we(p);if(!X(y)&&!isNaN(y)){const M=o.valueAsNumber||y&&+y;X(F.value)||(E=M>F.value),X(P.value)||(x=M<P.value)}else{const M=o.valueAsDate||new Date(y),Y=oe=>new Date(new Date().toDateString()+" "+oe),ne=o.type=="time",se=o.type=="week";de(F.value)&&y&&(E=ne?Y(y)>Y(F.value):se?y>F.value:M>new Date(F.value)),de(P.value)&&y&&(x=ne?Y(y)<Y(P.value):se?y<P.value:M<new Date(P.value))}if((E||x)&&(G(!!E,F.message,P.message,ge.max,ge.min),!r))return V(N[L].message),N}if((A||m)&&!B&&(de(y)||s&&Array.isArray(y))){const E=we(A),x=we(m),F=!X(E.value)&&y.length>+E.value,P=!X(x.value)&&y.length<+x.value;if((F||P)&&(G(F,E.message,x.message),!r))return V(N[L].message),N}if(R&&!B&&de(y)){const{value:E,message:x}=we(R);if(rn(E)&&!y.match(E)&&(N[L]={type:ge.pattern,message:x,ref:o,...I(ge.pattern,x)},!r))return V(x),N}if(O){if(ue(O)){const E=await O(y,n),x=Ln(E,h);if(x&&(N[L]={...x,...I(ge.validate,x.message)},!r))return V(x.message),N}else if($(O)){let E={};for(const x in O){if(!te(E)&&!r)break;const F=Ln(await O[x](y,n),h,x);F&&(E={...F,...I(x,F.message)},V(F.message),r&&(N[L]=E))}if(!te(E)&&(N[L]={ref:h,...E},!r))return N}}return V(!0),N};function bt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=H(e)?r++:e[t[r++]];return e}function pt(e){for(const t in e)if(e.hasOwnProperty(t)&&!H(e[t]))return!1;return!0}function W(e,t){const n=Array.isArray(t)?t:An(t)?[t]:jr(t),r=n.length===1?e:bt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&te(r)||Array.isArray(r)&&pt(r))&&W(e,n.slice(0,-1)),e}var cn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},kn=e=>X(e)||!Er(e);function me(e,t){if(kn(e)||kn(t))return e===t;if(be(e)&&be(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(be(s)&&be(o)||$(s)&&$(o)||Array.isArray(s)&&Array.isArray(o)?!me(s,o):s!==o)return!1}}return!0}var Fr=e=>e.type==="select-multiple",ht=e=>Sn(e)||De(e),fn=e=>nn(e)&&e.isConnected,Ir=e=>{for(const t in e)if(ue(e[t]))return!0;return!1};function tn(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!Ir(e[r])?(t[r]=Array.isArray(e[r])?[]:{},tn(e[r],t[r])):X(e[r])||(t[r]=!0);return t}function Lr(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Ir(e[a])?H(t)||kn(n[a])?n[a]=Array.isArray(e[a])?tn(e[a],[]):{...tn(e[a])}:Lr(e[a],X(t)?{}:t[a],n[a]):n[a]=!me(e[a],t[a]);return n}var qe=(e,t)=>Lr(e,t,tn(t)),Pr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>H(e)?e:t?e===""?NaN:e&&+e:n&&de(e)?new Date(e):r?r(e):e;function mn(e){const t=e.ref;return xn(t)?t.files:Sn(t)?Vr(e.refs).value:Fr(t)?[...t.selectedOptions].map(({value:n})=>n):De(t)?Nr(e.refs).value:Pr(H(t.value)?e.ref.value:t.value,e)}var _t=(e,t,n,r)=>{const a={};for(const s of e){const o=f(t,s);o&&C(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Ne=e=>H(e)?e:rn(e)?e.source:$(e)?rn(e.value)?e.value.source:e.value:e;const Bn="AsyncFunction";var Et=e=>!!e&&!!e.validate&&!!(ue(e.validate)&&e.validate.constructor.name===Bn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Bn)),wt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Mn(e,t,n){const r=f(e,n);if(r||An(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=f(t,s),d=f(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var At=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,jt=(e,t)=>!sn(f(e,t)).length&&W(e,t);const xt={mode:le.onSubmit,reValidateMode:le.onChange,shouldFocusError:!0};function St(e={}){let t={...xt,...e},n={submitCount:0,isDirty:!1,isLoading:ue(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},a=$(t.defaultValues)||$(t.values)?re(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:re(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},b,A=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:cn(),array:cn(),state:cn()},S=qn(t.mode),R=qn(t.reValidateMode),O=t.criteriaMode===le.all,L=i=>l=>{clearTimeout(A),A=setTimeout(i,l)},v=async i=>{if(!t.disabled&&(m.isValid||i)){const l=t.resolver?te((await D()).errors):await I(r,!0);l!==n.isValid&&p.state.next({isValid:l})}},w=(i,l)=>{!t.disabled&&(m.isValidating||m.validatingFields)&&((i||Array.from(d.mount)).forEach(u=>{u&&(l?C(n.validatingFields,u,l):W(n.validatingFields,u))}),p.state.next({validatingFields:n.validatingFields,isValidating:!te(n.validatingFields)}))},y=(i,l=[],u,k,c=!0,g=!0)=>{if(k&&u&&!t.disabled){if(o.action=!0,g&&Array.isArray(f(r,i))){const j=u(f(r,i),k.argA,k.argB);c&&C(r,i,j)}if(g&&Array.isArray(f(n.errors,i))){const j=u(f(n.errors,i),k.argA,k.argB);c&&C(n.errors,i,j),jt(n.errors,i)}if(m.touchedFields&&g&&Array.isArray(f(n.touchedFields,i))){const j=u(f(n.touchedFields,i),k.argA,k.argB);c&&C(n.touchedFields,i,j)}m.dirtyFields&&(n.dirtyFields=qe(a,s)),p.state.next({name:i,isDirty:E(i,l),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else C(s,i,l)},h=(i,l)=>{C(n.errors,i,l),p.state.next({errors:n.errors})},V=i=>{n.errors=i,p.state.next({errors:n.errors,isValid:!1})},N=(i,l,u,k)=>{const c=f(r,i);if(c){const g=f(s,i,H(u)?f(a,i):u);H(g)||k&&k.defaultChecked||l?C(s,i,l?g:mn(c._f)):P(i,g),o.mount&&v()}},z=(i,l,u,k,c)=>{let g=!1,j=!1;const q={name:i};if(!t.disabled){const Z=!!(f(r,i)&&f(r,i)._f&&f(r,i)._f.disabled);if(!u||k){m.isDirty&&(j=n.isDirty,n.isDirty=q.isDirty=E(),g=j!==q.isDirty);const J=Z||me(f(a,i),l);j=!!(!Z&&f(n.dirtyFields,i)),J||Z?W(n.dirtyFields,i):C(n.dirtyFields,i,!0),q.dirtyFields=n.dirtyFields,g=g||m.dirtyFields&&j!==!J}if(u){const J=f(n.touchedFields,i);J||(C(n.touchedFields,i,u),q.touchedFields=n.touchedFields,g=g||m.touchedFields&&J!==u)}g&&c&&p.state.next(q)}return g?q:{}},K=(i,l,u,k)=>{const c=f(n.errors,i),g=m.isValid&&ie(l)&&n.isValid!==l;if(t.delayError&&u?(b=L(()=>h(i,u)),b(t.delayError)):(clearTimeout(A),b=null,u?C(n.errors,i,u):W(n.errors,i)),(u?!me(c,u):c)||!te(k)||g){const j={...k,...g&&ie(l)?{isValid:l}:{},errors:n.errors,name:i};n={...n,...j},p.state.next(j)}},D=async i=>{w(i,!0);const l=await t.resolver(s,t.context,_t(i||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return w(i),l},B=async i=>{const{errors:l}=await D(i);if(i)for(const u of i){const k=f(l,u);k?C(n.errors,u,k):W(n.errors,u)}else n.errors=l;return l},I=async(i,l,u={valid:!0})=>{for(const k in i){const c=i[k];if(c){const{_f:g,...j}=c;if(g){const q=d.array.has(g.name),Z=c._f&&Et(c._f);Z&&m.validatingFields&&w([k],!0);const J=await Pn(c,d.disabled,s,O,t.shouldUseNativeValidation&&!l,q);if(Z&&m.validatingFields&&w([k]),J[g.name]&&(u.valid=!1,l))break;!l&&(f(J,g.name)?q?kt(n.errors,J,g.name):C(n.errors,g.name,J[g.name]):W(n.errors,g.name))}!te(j)&&await I(j,l,u)}}return u.valid},G=()=>{for(const i of d.unMount){const l=f(r,i);l&&(l._f.refs?l._f.refs.every(u=>!fn(u)):!fn(l._f.ref))&&xe(i)}d.unMount=new Set},E=(i,l)=>!t.disabled&&(i&&l&&C(s,i,l),!me(Q(),a)),x=(i,l,u)=>Or(i,d,{...o.mount?s:H(l)?a:de(i)?{[i]:l}:l},u,l),F=i=>sn(f(o.mount?s:a,i,t.shouldUnregister?f(a,i,[]):[])),P=(i,l,u={})=>{const k=f(r,i);let c=l;if(k){const g=k._f;g&&(!g.disabled&&C(s,i,Pr(l,g)),c=nn(g.ref)&&X(l)?"":l,Fr(g.ref)?[...g.ref.options].forEach(j=>j.selected=c.includes(j.value)):g.refs?De(g.ref)?g.refs.length>1?g.refs.forEach(j=>(!j.defaultChecked||!j.disabled)&&(j.checked=Array.isArray(c)?!!c.find(q=>q===j.value):c===j.value)):g.refs[0]&&(g.refs[0].checked=!!c):g.refs.forEach(j=>j.checked=j.value===c):xn(g.ref)?g.ref.value="":(g.ref.value=c,g.ref.type||p.values.next({name:i,values:{...s}})))}(u.shouldDirty||u.shouldTouch)&&z(i,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&oe(i)},M=(i,l,u)=>{for(const k in l){const c=l[k],g=`${i}.${k}`,j=f(r,g);(d.array.has(i)||$(c)||j&&!j._f)&&!be(c)?M(g,c,u):P(g,c,u)}},Y=(i,l,u={})=>{const k=f(r,i),c=d.array.has(i),g=re(l);C(s,i,g),c?(p.array.next({name:i,values:{...s}}),(m.isDirty||m.dirtyFields)&&u.shouldDirty&&p.state.next({name:i,dirtyFields:qe(a,s),isDirty:E(i,g)})):k&&!k._f&&!X(g)?M(i,g,u):P(i,g,u),Nn(i,d)&&p.state.next({...n}),p.values.next({name:o.mount?i:void 0,values:{...s}})},ne=async i=>{o.mount=!0;const l=i.target;let u=l.name,k=!0;const c=f(r,u),g=()=>l.type?mn(c._f):wr(i),j=q=>{k=Number.isNaN(q)||be(q)&&isNaN(q.getTime())||me(q,f(s,u,q))};if(c){let q,Z;const J=g(),fe=i.type===en.BLUR||i.type===en.FOCUS_OUT,zr=!wt(c._f)&&!t.resolver&&!f(n.errors,u)&&!c._f.deps||At(fe,f(n.touchedFields,u),n.isSubmitted,R,S),un=Nn(u,d,fe);C(s,u,J),fe?(c._f.onBlur&&c._f.onBlur(i),b&&b(0)):c._f.onChange&&c._f.onChange(i);const dn=z(u,J,fe,!1),Yr=!te(dn)||un;if(!fe&&p.values.next({name:u,type:i.type,values:{...s}}),zr)return m.isValid&&(t.mode==="onBlur"&&fe?v():fe||v()),Yr&&p.state.next({name:u,...un?{}:dn});if(!fe&&un&&p.state.next({...n}),t.resolver){const{errors:Tn}=await D([u]);if(j(J),k){const Wr=Mn(n.errors,r,u),On=Mn(Tn,r,Wr.name||u);q=On.error,u=On.name,Z=te(Tn)}}else w([u],!0),q=(await Pn(c,d.disabled,s,O,t.shouldUseNativeValidation))[u],w([u]),j(J),k&&(q?Z=!1:m.isValid&&(Z=await I(r,!0)));k&&(c._f.deps&&oe(c._f.deps),K(u,Z,q,dn))}},se=(i,l)=>{if(f(n.errors,l)&&i.focus)return i.focus(),1},oe=async(i,l={})=>{let u,k;const c=Ie(i);if(t.resolver){const g=await B(H(i)?i:c);u=te(g),k=i?!c.some(j=>f(g,j)):u}else i?(k=(await Promise.all(c.map(async g=>{const j=f(r,g);return await I(j&&j._f?{[g]:j}:j)}))).every(Boolean),!(!k&&!n.isValid)&&v()):k=u=await I(r);return p.state.next({...!de(i)||m.isValid&&u!==n.isValid?{}:{name:i},...t.resolver||!i?{isValid:u}:{},errors:n.errors}),l.shouldFocus&&!k&&Le(r,se,i?c:d.mount),k},Q=i=>{const l={...o.mount?s:a};return H(i)?l:de(i)?f(l,i):i.map(u=>f(l,u))},pe=(i,l)=>({invalid:!!f((l||n).errors,i),isDirty:!!f((l||n).dirtyFields,i),error:f((l||n).errors,i),isValidating:!!f(n.validatingFields,i),isTouched:!!f((l||n).touchedFields,i)}),he=i=>{i&&Ie(i).forEach(l=>W(n.errors,l)),p.state.next({errors:i?n.errors:{}})},Ge=(i,l,u)=>{const k=(f(r,i,{_f:{}})._f||{}).ref,c=f(n.errors,i)||{},{ref:g,message:j,type:q,...Z}=c;C(n.errors,i,{...Z,...l,ref:k}),p.state.next({name:i,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&k&&k.focus&&k.focus()},on=(i,l)=>ue(i)?p.values.subscribe({next:u=>i(x(void 0,l),u)}):x(i,l,!0),xe=(i,l={})=>{for(const u of i?Ie(i):d.mount)d.mount.delete(u),d.array.delete(u),l.keepValue||(W(r,u),W(s,u)),!l.keepError&&W(n.errors,u),!l.keepDirty&&W(n.dirtyFields,u),!l.keepTouched&&W(n.touchedFields,u),!l.keepIsValidating&&W(n.validatingFields,u),!t.shouldUnregister&&!l.keepDefaultValue&&W(a,u);p.values.next({values:{...s}}),p.state.next({...n,...l.keepDirty?{isDirty:E()}:{}}),!l.keepIsValid&&v()},Ue=({disabled:i,name:l,field:u,fields:k})=>{(ie(i)&&o.mount||i||d.disabled.has(l))&&(i?d.disabled.add(l):d.disabled.delete(l),z(l,mn(u?u._f:f(k,l)._f),!1,!1,!0))},Se=(i,l={})=>{let u=f(r,i);const k=ie(l.disabled)||ie(t.disabled);return C(r,i,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:i}},name:i,mount:!0,...l}}),d.mount.add(i),u?Ue({field:u,disabled:ie(l.disabled)?l.disabled:t.disabled,name:i}):N(i,!0,l.value),{...k?{disabled:l.disabled||t.disabled}:{},...t.progressive?{required:!!l.required,min:Ne(l.min),max:Ne(l.max),minLength:Ne(l.minLength),maxLength:Ne(l.maxLength),pattern:Ne(l.pattern)}:{},name:i,onChange:ne,onBlur:ne,ref:c=>{if(c){Se(i,l),u=f(r,i);const g=H(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,j=ht(g),q=u._f.refs||[];if(j?q.find(Z=>Z===g):g===u._f.ref)return;C(r,i,{_f:{...u._f,...j?{refs:[...q.filter(fn),g,...Array.isArray(f(a,i))?[{}]:[]],ref:{type:g.type,name:i}}:{ref:g}}}),N(i,!1,void 0,g)}else u=f(r,i,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||l.shouldUnregister)&&!(Ar(d.array,i)&&o.action)&&d.unMount.add(i)}}},Re=()=>t.shouldFocusError&&Le(r,se,d.mount),He=i=>{ie(i)&&(p.state.next({disabled:i}),Le(r,(l,u)=>{const k=f(r,u);k&&(l.disabled=k._f.disabled||i,Array.isArray(k._f.refs)&&k._f.refs.forEach(c=>{c.disabled=k._f.disabled||i}))},0,!1))},_e=(i,l)=>async u=>{let k;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=re(s);if(d.disabled.size)for(const g of d.disabled)C(c,g,void 0);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:g,values:j}=await D();n.errors=g,c=j}else await I(r);if(W(n.errors,"root"),te(n.errors)){p.state.next({errors:{}});try{await i(c,u)}catch(g){k=g}}else l&&await l({...n.errors},u),Re(),setTimeout(Re);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:te(n.errors)&&!k,submitCount:n.submitCount+1,errors:n.errors}),k)throw k},Te=(i,l={})=>{f(r,i)&&(H(l.defaultValue)?Y(i,re(f(a,i))):(Y(i,l.defaultValue),C(a,i,re(l.defaultValue))),l.keepTouched||W(n.touchedFields,i),l.keepDirty||(W(n.dirtyFields,i),n.isDirty=l.defaultValue?E(i,re(f(a,i))):E()),l.keepError||(W(n.errors,i),m.isValid&&v()),p.state.next({...n}))},Ee=(i,l={})=>{const u=i?re(i):a,k=re(u),c=te(i),g=c?a:k;if(l.keepDefaultValues||(a=u),!l.keepValues){if(l.keepDirtyValues){const j=new Set([...d.mount,...Object.keys(qe(a,s))]);for(const q of Array.from(j))f(n.dirtyFields,q)?C(g,q,f(s,q)):Y(q,f(g,q))}else{if(wn&&H(i))for(const j of d.mount){const q=f(r,j);if(q&&q._f){const Z=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(nn(Z)){const J=Z.closest("form");if(J){J.reset();break}}}}r={}}s=t.shouldUnregister?l.keepDefaultValues?re(a):{}:re(g),p.array.next({values:{...g}}),p.values.next({values:{...g}})}d={mount:l.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!m.isValid||!!l.keepIsValid||!!l.keepDirtyValues,o.watch=!!t.shouldUnregister,p.state.next({submitCount:l.keepSubmitCount?n.submitCount:0,isDirty:c?!1:l.keepDirty?n.isDirty:!!(l.keepDefaultValues&&!me(i,a)),isSubmitted:l.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:c?{}:l.keepDirtyValues?l.keepDefaultValues&&s?qe(a,s):n.dirtyFields:l.keepDefaultValues&&i?qe(a,i):l.keepDirty?n.dirtyFields:{},touchedFields:l.keepTouched?n.touchedFields:{},errors:l.keepErrors?n.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},ke=(i,l)=>Ee(ue(i)?i(s):i,l);return{control:{register:Se,unregister:xe,getFieldState:pe,handleSubmit:_e,setError:Ge,_executeSchema:D,_getWatch:x,_getDirty:E,_updateValid:v,_removeUnmounted:G,_updateFieldArray:y,_updateDisabledField:Ue,_getFieldArray:F,_reset:Ee,_resetDefaultValues:()=>ue(t.defaultValues)&&t.defaultValues().then(i=>{ke(i,t.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:i=>{n={...n,...i}},_disableForm:He,_subjects:p,_proxyFormState:m,_setErrors:V,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(i){o=i},get _defaultValues(){return a},get _names(){return d},set _names(i){d=i},get _formState(){return n},set _formState(i){n=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:oe,register:Se,handleSubmit:_e,watch:on,setValue:Y,getValues:Q,reset:ke,resetField:Te,clearErrors:he,unregister:xe,setError:Ge,setFocus:(i,l={})=>{const u=f(r,i),k=u&&u._f;if(k){const c=k.refs?k.refs[0]:k.ref;c.focus&&(c.focus(),l.shouldSelect&&ue(c.select)&&c.select())}},getFieldState:pe}}function Rt(e={}){const t=_.useRef(void 0),n=_.useRef(void 0),[r,a]=_.useState({isDirty:!1,isValidating:!1,isLoading:ue(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ue(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...St(e),formState:r});const s=t.current.control;return s._options=e,jn({subject:s._subjects.state,next:o=>{Rr(o,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),_.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),_.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),_.useEffect(()=>{e.values&&!me(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),_.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),_.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),_.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Sr(r,s),t.current}function Br(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const Dn=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{};var Tt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ot=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Tt(e,["title","titleId"]);let s=Be();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Nt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=qt(e,["title","titleId"]);let s=Be();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Vt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ft=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Vt(e,["title","titleId"]);let s=Be();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var It=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Lt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=It(e,["title","titleId"]);let s=Be();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Pt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Pt(e,["title","titleId"]);let s=Be();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Mt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Dt={error:Bt,warning:Nt,info:Ft,success:Zr},Ct=T.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:b=!1,closeButton:A=!1,onClose:m}=e,p=Mt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:S}=je(),R=mr("Alert"),O=Dt[a];return _.createElement("div",Object.assign({},p,{ref:t,className:S(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":b,"navds-alert--close-button":A})}),_.createElement(O,{title:R(a),className:S("navds-alert__icon")}),_.createElement(vr,{as:"div",size:s,className:S("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),A&&!b&&_.createElement("div",{className:S("navds-alert__button-wrapper")},_.createElement(yr,{className:S("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:_.createElement(Jr,{title:["error","warning"].includes(a)?R("closeAlert"):R("closeMessage")})})))});var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gt=T.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:b}=kr(e,"select"),{children:A,label:m,className:p,description:S,htmlSize:R,hideLabel:O=!1,style:L}=e,v=Kt(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:w}=je(),y={onMouseDown:h=>{b&&(h.preventDefault(),h.target.focus())},onKeyDown:h=>{b&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(h.key)&&h.preventDefault()}};return _.createElement("div",{className:w(p,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":b,"navds-select--error":s,"navds-select--readonly":b})},_.createElement(_n,{htmlFor:n.id,size:o,className:w("navds-form-field__label",{"navds-sr-only":O})},b&&_.createElement(Qr,null),m),!!S&&_.createElement(Me,{className:w("navds-form-field__description",{"navds-sr-only":O}),id:d,size:o,as:"div"},S),_.createElement("div",{className:w("navds-select__container"),style:L},_.createElement("select",Object.assign({},br(v,["error","errorId","size","readOnly"]),n,y,{ref:t,className:w("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:R}),A),_.createElement(Ot,{className:w("navds-select__chevron"),"aria-hidden":!0})),_.createElement("div",{className:w("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&_.createElement(pr,{size:o,showIcon:!0},e.error)))});var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht=T.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=Ut(e,["as","className","underline","variant","inlineText"]);const{cn:b}=je();return _.createElement(n,Object.assign({},d,{ref:t,className:b("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var $t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const zt=T.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=$t(e,["children","className","variant","size","icon"]);const{cn:b}=je(),A=(a==null?void 0:a.endsWith("-filled"))&&"strong",m=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",p=a==null?void 0:a.replace("-filled","").replace("-moderate","");return _.createElement(Me,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:b("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${A||m||"outline"}`,`navds-tag--${p}`)}),o&&_.createElement("span",{className:b("navds-tag__icon--left")},o),n)});var Yt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Kn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Ye(e){return parseInt(e,10)||0}const Wt=T.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:b,style:A,value:m}=e,p=Yt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:S}=T.useRef(m!=null),R=T.useRef(null),O=Xr(R,t),L=T.useRef(null),v=T.useRef(0),[w,y]=T.useState({outerHeightStyle:0}),h=_.useCallback(()=>{const K=R.current,B=Kn(K).getComputedStyle(K);if(B.width==="0px")return{outerHeightStyle:0};const I=L.current;I.style.width=B.width,I.value=K.value||p.placeholder||"x",I.value.slice(-1)===`
`&&(I.value+=" ");const G=B.boxSizing,E=Ye(B.paddingBottom)+Ye(B.paddingTop),x=Ye(B.borderBottomWidth)+Ye(B.borderTopWidth),F=I.scrollHeight-E;I.value="x";const P=I.scrollHeight-E;let M=F;d&&(M=Math.max(Number(d)*P,M)),o&&(M=Math.min(Number(o)*P,M)),M=Math.max(M,P);const Y=M+(G==="border-box"?E+x:0),ne=Math.abs(M-F)<=1;return{outerHeightStyle:Y,overflow:ne}},[o,d,p.placeholder]),V=()=>{const K=h();Gn(K)||y(D=>Cn(D,K,v))};Dn(()=>{const K=()=>{const E=h();Gn(E)||dt.flushSync(()=>{y(x=>Cn(x,E,v))})},D=Br(()=>{var E,x,F;if(v.current=0,!((E=R.current)===null||E===void 0)&&E.style.height||!((x=R.current)===null||x===void 0)&&x.style.width){((F=R.current)===null||F===void 0?void 0:F.style.overflow)==="hidden"&&y(P=>Object.assign(Object.assign({},P),{overflow:!1}));return}K()},166,!0),B=R.current,I=Kn(B);I.addEventListener("resize",D);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(D),G.observe(B)),()=>{D.clear(),I.removeEventListener("resize",D),G&&G.disconnect()}},[h]),Dn(()=>{V()}),T.useEffect(()=>{v.current=0},[m]);const N=K=>{v.current=0,S||V(),s&&s(K)},z=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!b&&!(!((n=R.current)===null||n===void 0)&&n.style.height)&&!(!((r=R.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},A);return _.createElement(_.Fragment,null,_.createElement("textarea",Object.assign({value:m,onChange:N,ref:O,rows:d,style:z},p,{className:a})),_.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:L,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},A)}))});function Gn(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Zt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=je(),o=mr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=t-n,[b,A]=T.useState(d);return T.useEffect(()=>{const m=Br(()=>{A(d)},2e3);return m(),()=>{m.clear()}},[d]),_.createElement(_.Fragment,null,_.createElement("span",{id:e,className:s("navds-sr-only")},o("maxLength",{maxLength:t})),d<20&&_.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Un(b,o)),_.createElement(Me,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},Un(d,o)))},Un=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Qt=T.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:b,size:A,inputDescriptionId:m}=kr(e,"textarea"),{label:p,className:S,description:R,maxLength:O,hideLabel:L=!1,resize:v,UNSAFE_autoScrollbar:w,i18n:y,readOnly:h}=e,V=Jt(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:N}=je(),z=et(),K=O!==void 0&&O>0,[D,B]=T.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),I=()=>{let E=V!=null&&V.minRows?V==null?void 0:V.minRows:3;return A==="small"&&(E=V!=null&&V.minRows?V==null?void 0:V.minRows:2),E},G=nt(s["aria-describedby"],{[z??""]:K});return _.createElement("div",{className:N(S,"navds-form-field",`navds-form-field--${A}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":h,"navds-textarea--readonly":h,"navds-textarea--error":b,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},_.createElement(_n,{htmlFor:s.id,size:A,className:N("navds-form-field__label",{"navds-sr-only":L})},h&&_.createElement(rt,null),p),!!R&&_.createElement(Me,{className:N("navds-form-field__description",{"navds-sr-only":L}),id:m,size:A,as:"div"},R),_.createElement(Wt,Object.assign({},br(V,["error","errorId","size"]),s,{onChange:tt(e.onChange,e.value===void 0?E=>B(E.target.value):void 0),minRows:I(),autoScrollbar:w,ref:t,readOnly:h,className:N("navds-textarea__input","navds-body-short",`navds-body-short--${A??"medium"}`)},G?{"aria-describedby":G}:{})),K&&!h&&!s.disabled&&_.createElement(Zt,{maxLengthId:z,maxLength:O,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:D.length,size:A,i18n:y}),_.createElement("div",{className:N("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&_.createElement(pr,{size:A,showIcon:!0},e.error)))});function Xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hn={exports:{}},Ve={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $n;function ea(){if($n)return Ve;$n=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Ve.Fragment=t,Ve.jsx=n,Ve.jsxs=n,Ve}var zn;function na(){return zn||(zn=1,Hn.exports=ea()),Hn.exports}var Pe=na();const ra=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Pe.jsx(Ct,{variant:"warning",size:"small",children:Pe.jsx(hr,{gap:"2",children:_.Children.map(e,t=>Pe.jsx(Me,{size:"small",children:t},at(t)?t.key:t))})}),Ke={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ve(Ke);var Yn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Wn;function ta(){return Wn||(Wn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Yn)),Yn.exports}var aa=ta();const ye=Xt(aa),sa="_borderbox_1vkvn_1",ia="_error_1vkvn_5",la="_warning_1vkvn_8",oa={borderbox:sa,error:ia,warning:la};ye.bind(oa);const ua="_aksjonspunkt_kn1hn_1",da="_erAksjonspunktApent_kn1hn_4",ga="_erIkkeGodkjentAvBeslutter_kn1hn_8",ca={aksjonspunkt:ua,erAksjonspunktApent:da,erIkkeGodkjentAvBeslutter:ga};ye.bind(ca);ve(Ke);ve(Ke);const fa="_flexColumnNew_1vdv1_1",ma={flexColumnNew:fa};ye.bind(ma);const va="_flexRow_1yf0y_1",ya="_spaceBetween_1yf0y_9",ka="_alignItemsToBaseline_1yf0y_12",ba="_alignItemsToFlexEnd_1yf0y_15",pa="_justifyItemsToFlexEnd_1yf0y_18",ha="_wrap_1yf0y_21",_a={flexRow:va,spaceBetween:ya,alignItemsToBaseline:ka,alignItemsToFlexEnd:ba,justifyItemsToFlexEnd:pa,wrap:ha};ye.bind(_a);const Ea="_flexContainer_1dk1o_1",wa="_fluid_1dk1o_6",Aa="_fullHeight_1dk1o_9",ja="_flexWrap_1dk1o_17",xa={flexContainer:Ea,fluid:wa,fullHeight:Aa,flexWrap:ja};ye.bind(xa);ve(Ke);const Sa="_fourPx_qda5k_1",Ra="_eightPx_qda5k_4",Ta="_sixteenPx_qda5k_7",Oa="_twentyPx_qda5k_10",qa="_thirtyTwoPx_qda5k_13",Na="_fourtyPx_qda5k_16",Va={fourPx:Sa,eightPx:Ra,sixteenPx:Ta,twentyPx:Oa,thirtyTwoPx:qa,fourtyPx:Na};ye.bind(Va);ve(Ke);const Fa="_divider_1t980_1",Ia="_dividerParagraf_1t980_8",La="_leftPanel_1t980_11",Pa="_rightPanel_1t980_14",Ba={divider:Fa,dividerParagraf:Ia,leftPanel:La,rightPanel:Pa};ye.bind(Ba);const Ma="_editedIcon_ulrjl_1",Da={editedIcon:Ma},Ca=ye.bind(Da),Ka=({className:e=""})=>Pe.jsx("span",{"data-testid":"editedIcon",className:Ca("editedIcon",e),children:Pe.jsx(Lt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function Ga(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zn={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn;function Ua(){if(Jn)return Fe;Jn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Fe.Fragment=t,Fe.jsx=n,Fe.jsxs=n,Fe}var Qn;function Ha(){return Qn||(Qn=1,Zn.exports=Ua()),Zn.exports}var ee=Ha();const Mr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Dr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var bn={exports:{}},$a=bn.exports,Xn;function za(){return Xn||(Xn=1,function(e,t){(function(n,r){e.exports=r()})($a,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,b={},A=function(v){return(v=+v)+(v>68?1900:2e3)},m=function(v){return function(w){this[v]=+w}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var y=w.match(/([+-]|\d\d)/g),h=60*y[1]+(+y[2]||0);return h===0?0:y[0]==="+"?-h:h}(v)}],S=function(v){var w=b[v];return w&&(w.indexOf?w:w.s.concat(w.f))},R=function(v,w){var y,h=b.meridiem;if(h){for(var V=1;V<=24;V+=1)if(v.indexOf(h(V,0,w))>-1){y=V>12;break}}else y=v===(w?"pm":"PM");return y},O={A:[d,function(v){this.afternoon=R(v,!1)}],a:[d,function(v){this.afternoon=R(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[s,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[o,m("seconds")],ss:[o,m("seconds")],m:[o,m("minutes")],mm:[o,m("minutes")],H:[o,m("hours")],h:[o,m("hours")],HH:[o,m("hours")],hh:[o,m("hours")],D:[o,m("day")],DD:[s,m("day")],Do:[d,function(v){var w=b.ordinal,y=v.match(/\d+/);if(this.day=y[0],w)for(var h=1;h<=31;h+=1)w(h).replace(/\[|\]/g,"")===v&&(this.day=h)}],w:[o,m("week")],ww:[s,m("week")],M:[o,m("month")],MM:[s,m("month")],MMM:[d,function(v){var w=S("months"),y=(S("monthsShort")||w.map(function(h){return h.slice(0,3)})).indexOf(v)+1;if(y<1)throw new Error;this.month=y%12||y}],MMMM:[d,function(v){var w=S("months").indexOf(v)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,m("year")],YY:[s,function(v){this.year=A(v)}],YYYY:[/\d{4}/,m("year")],Z:p,ZZ:p};function L(v){var w,y;w=v,y=b&&b.formats;for(var h=(v=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(I,G,E){var x=E&&E.toUpperCase();return G||y[E]||n[E]||y[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,P,M){return P||M.slice(1)})})).match(r),V=h.length,N=0;N<V;N+=1){var z=h[N],K=O[z],D=K&&K[0],B=K&&K[1];h[N]=B?{regex:D,parser:B}:z.replace(/^\[|\]$/g,"")}return function(I){for(var G={},E=0,x=0;E<V;E+=1){var F=h[E];if(typeof F=="string")x+=F.length;else{var P=F.regex,M=F.parser,Y=I.slice(x),ne=P.exec(Y)[0];M.call(G,ne),I=I.replace(ne,"")}}return function(se){var oe=se.afternoon;if(oe!==void 0){var Q=se.hours;oe?Q<12&&(se.hours+=12):Q===12&&(se.hours=0),delete se.afternoon}}(G),G}}return function(v,w,y){y.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(A=v.parseTwoDigitYear);var h=w.prototype,V=h.parse;h.parse=function(N){var z=N.date,K=N.utc,D=N.args;this.$u=K;var B=D[1];if(typeof B=="string"){var I=D[2]===!0,G=D[3]===!0,E=I||G,x=D[2];G&&(x=D[2]),b=this.$locale(),!I&&x&&(b=y.Ls[x]),this.$d=function(Y,ne,se,oe){try{if(["x","X"].indexOf(ne)>-1)return new Date((ne==="X"?1e3:1)*Y);var Q=L(ne)(Y),pe=Q.year,he=Q.month,Ge=Q.day,on=Q.hours,xe=Q.minutes,Ue=Q.seconds,Se=Q.milliseconds,Re=Q.zone,He=Q.week,_e=new Date,Te=Ge||(pe||he?1:_e.getDate()),Ee=pe||_e.getFullYear(),ke=0;pe&&!he||(ke=he>0?he-1:_e.getMonth());var Oe,$e=on||0,ze=xe||0,i=Ue||0,l=Se||0;return Re?new Date(Date.UTC(Ee,ke,Te,$e,ze,i,l+60*Re.offset*1e3)):se?new Date(Date.UTC(Ee,ke,Te,$e,ze,i,l)):(Oe=new Date(Ee,ke,Te,$e,ze,i,l),He&&(Oe=oe(Oe).week(He).toDate()),Oe)}catch{return new Date("")}}(z,B,K,y),this.init(),x&&x!==!0&&(this.$L=this.locale(x).$L),E&&z!=this.format(B)&&(this.$d=new Date("")),b={}}else if(B instanceof Array)for(var F=B.length,P=1;P<=F;P+=1){D[1]=B[P-1];var M=y.apply(this,D);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}P===F&&(this.$d=new Date(""))}else V.call(this,N)}}})}(bn)),bn.exports}var Ya=za();const Wa=Ga(Ya),Za="_readOnlyContainer_v0eco_1",Ja="_readOnlyContent_v0eco_4",Qa="_textarea_v0eco_11",Xa="_space_v0eco_15",We={readOnlyContainer:Za,readOnlyContent:Ja,textarea:Qa,space:Xa},es=e=>e!=null&&e!=="",Cr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>es(t)?ee.jsxs("div",{className:We.readOnlyContainer,children:[e&&!a&&ee.jsx(_n,{size:"small",children:e}),ee.jsx("div",{className:r==="textarea"?We.textarea:"",children:ee.jsxs(vr,{className:We.readOnlyContent,size:s,children:[t,n&&ee.jsx(Ka,{className:We.space})]})})]}):null;En.extend(Wa);const er=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:b,className:A,hideLabel:m,isEdited:p,size:S})=>{const{formState:{errors:R}}=Ce(),{field:O}=qr({name:e,rules:{validate:T.useMemo(()=>Mr(r),[r])}});if(a){const w=n.map(h=>h.props).find(h=>h.value===O.value),y=w?w.children:void 0;return ee.jsx(Cr,{value:y,label:t,hideLabel:m,isEdited:p,size:S})}const L=O.value||"",v=!n.map(w=>w.props.value).includes(L)&&L!=="";return v&&console.warn(`No corresponding option found for value '${L}'`),ee.jsxs(Gt,{size:"small",className:A,error:Dr(R,e),label:t,description:s,value:o&&b||v?"":O.value,disabled:b,onChange:w=>{d&&d(w),O.onChange(w)},hideLabel:m,children:[ee.jsx("option",{style:{display:"none"}}),",",n]})},ns="_textAreaFieldWithBadges_bdz0b_1",rs="_etikettWrapper_bdz0b_4",nr={textAreaFieldWithBadges:ns,etikettWrapper:rs},ts=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=p=>p,className:d,description:b,isEdited:A,...m})=>{const{formState:{errors:p}}=Ce(),{field:S}=qr({name:e,rules:{validate:T.useMemo(()=>Mr(s),[s])}});return n?ee.jsx(Cr,{label:t,value:S.value,type:"textarea",isEdited:A,hideLabel:m.hideLabel}):ee.jsxs("div",{className:a?nr.textAreaFieldWithBadges:null,children:[a&&ee.jsx("div",{className:nr.etikettWrapper,children:a.map(({type:R,titleText:O})=>ee.jsx(zt,{variant:R,size:"small",children:O},O))}),ee.jsx(Qt,{size:"small",label:t,description:b,className:d,autoComplete:"off",...S,onChange:R=>S.onChange(R.currentTarget.value!==""?o(R.currentTarget.value):null),value:S.value?S.value:"",error:Dr(p,e),maxLength:r,...m})]})},as=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return T.useEffect(()=>()=>{a&&a(o())},[]),ee.jsx(ft,{...e,children:ee.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Kr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pn={exports:{}},ss=pn.exports,rr;function is(){return rr||(rr=1,function(e,t){(function(n,r){e.exports=r()})(ss,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(pn)),pn.exports}var ls=is();const os=Kr(ls);var hn={exports:{}},us=hn.exports,tr;function ds(){return tr||(tr=1,function(e,t){(function(n,r){e.exports=r()})(us,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(hn)),hn.exports}var gs=ds();const cs=Kr(gs),fs="Dato må være før eller lik {limit}",ms="Dato må være etter eller lik {limit}",vs="Perioder kan ikke overlappe i tid",ys="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",ks="Dato må være lik {value}",bs="Dato må skrives slik: dd.mm.åååå",ps="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",hs="Tallet kan ikke inneholde mer enn to desimaler",_s="Tallet kan ikke ha desimaler",Es="Feltet kan kun inneholde tall",ws="Ugyldig fødselsnummer",As="Feltet må være et fødselsnummer (11 siffer)",js="Ugyldig organisasjonsnummer.",xs="Ugyldig organisasjonsnummer eller fødselsnummer",Ss="Startdato må være før eller lik sluttdato",Rs="Periode er utenfor opptjeningsperioden",Ts="Ugyldig saksnummer eller fødselsnummer",Os="Feltet inneholder ugyldige tegn: {text}",qs="Feltet inneholder en ugyldig verdi: {value}",Ns="Feltet kan ikke inneholde mellomrom",Vs="Feltet må fylles ut",Fs="Du kan skrive maksimalt {length} tegn",Is="Du må skrive minst {length} tegn",Ls="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Ps="Feltet må være mindre eller lik {length}",Bs="Feltet må være større eller lik {length}",Ms="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Ds={DateNotBeforeOrEqual:fs,DateNotAfterOrEqual:ms,DateRangesOverlapping:vs,DateRangesOverlappingPeriodTypes:ys,DatesNotEqual:ks,InvalidDate:bs,InvalidDatesInPeriod:ps,InvalidDecimal:hs,InvalidInteger:_s,InvalidNumber:Es,InvalidFodselsnr:ws,InvalidFodselsnrFormat:As,InvalidOrgnr:js,InvalidOrgnrOrFodselsnr:xs,InvalidPeriod:Ss,InvalidPeriodRange:Rs,InvalidSaksnrOrFodselsnrFormat:Ts,InvalidText:Os,InvalidValue:qs,IllegalWhiteSpace:Ns,IsRequired:Vs,MaxLength:Fs,MinLength:Is,MaxLengthOrFodselsnr:Ls,MaxValue:Ps,MinValue:Bs,SammeFodselsnrSomSoker:Ms},{formatMessage:ln}=ve(Ds),Cs=e=>ln({id:"InvalidText"},{text:e}),Ks=()=>ln({id:"IsRequired"}),Gs=e=>ln({id:"MaxLength"},{length:e}),Us=e=>ln({id:"MinLength"},{length:e}),Hs=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,$s=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Rn=e=>e==null||e.toString().trim().length===0;En.extend(os);En.extend(cs);const vn=e=>Rn(e)?Ks():void 0,zs=e=>t=>Rn(t)||t.toString().trim().length>=e?null:Us(e),Gr=e=>t=>Rn(t)||t.toString().trim().length<=e?null:Gs(e),Ys=e=>{if(!Hs.test(e)){const t=e.replace($s,"");return Cs(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Ws=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Zs="_ukjentAdresseMargins_4teno_1",Js={ukjentAdresseMargins:Zs},Qs={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Xs=ve(Qs),Ur=()=>U.jsx(_r,{value:Xs,children:U.jsx("div",{className:Js.ukjentAdresseMargins,children:U.jsx(ra,{children:U.jsx("b",{children:U.jsx(yn,{id:"UkjentAdresse.Text"})})})})});Ur.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const ei="_bredde_jav4h_9",ar={bredde:ei},ni=Gr(4e3),ri=Gr(1e4),ti=zs(3),ai=e=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",si=(e,t)=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.FRITEKST||e===ae.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ae.VARSEL_OM_TILBAKEKREVING||e===ae.TBK_INNHENTE_OPPLYSNINGER||e===ae.VARSEL_OM_REVURDERING&&t===ce.ANNET,ii=(e,t)=>t===Ae.ENGANGSSTONAD?e.filter(n=>n.kode===ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===ce.ANNET):t===Ae.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==ce.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,li=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ae.VARSEL_OM_REVURDERING}:{...t}},oi=e=>{const t=e;return e.brevmalkode===ae.VARSEL_OM_REVURDERING&&t.arsakskode!==ce.ANNET&&(t.fritekst=" "),t},Hr=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:b})=>{const A=st(),m=Rt({defaultValues:o||li(e)}),p=m.watch("brevmalkode"),S=m.watch("fritekst"),R=m.watch("arsakskode"),O=T.useMemo(()=>ii(r,a),[]);if(!e.språkkode)return null;const{formState:L}=m,v=h=>{p&&t(p,S,R),h.preventDefault()},w=it(e.språkkode),y=p===ae.VARSEL_OM_REVURDERING;return U.jsx(as,{formMethods:m,onSubmit:h=>n(oi(h)),setDataOnUnmount:d,children:U.jsxs(hr,{gap:"4",children:[U.jsx(er,{name:"brevmalkode",label:A.formatMessage({id:"Messages.Template"}),validate:[vn],selectValues:e.brevmaler.map(h=>U.jsx("option",{value:h.kode,disabled:!h.tilgjengelig,children:h.navn},h.kode)),className:ar.bredde}),y&&U.jsx(er,{name:"arsakskode",label:A.formatMessage({id:"Messages.Årsak"}),validate:[vn],selectValues:O.map(h=>U.jsx("option",{value:h.kode,children:h.navn},h.kode)),className:ar.bredde}),si(p,R)&&U.jsx(ts,{name:"fritekst",label:A.formatMessage({id:ai(p)}),validate:[vn,y?ri:ni,ti,Ys],maxLength:y?1e4:4e3,badges:[{type:"info",titleText:w}],parse:lt}),b&&U.jsx(Ur,{}),U.jsxs(ot,{justify:"space-between",children:[(!y||y&&R!==void 0)&&U.jsx(Ht,{href:"#",onClick:v,onKeyDown:h=>h.key==="Enter"?v(h):null,children:U.jsx(yn,{id:"Messages.Preview"})}),U.jsx(yr,{size:"small",variant:"primary",loading:L.isSubmitting,disabled:L.isSubmitting||s,onClick:Ws,children:U.jsx(yn,{id:"Messages.Submit"})})]})]})})};Hr.__docgenInfo={description:`Messages

Presentasjonskomponent. Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
og fritekst som skal flettes inn i brevet skrives inn i et eget felt.`,methods:[],displayName:"Messages",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(brevmalkode?: string, fritekst?: string, arsakskode?: string) => void",signature:{arguments:[{type:{name:"string"},name:"brevmalkode"},{type:{name:"string"},name:"fritekst"},{type:{name:"string"},name:"arsakskode"}],return:{name:"void"}}},description:""},revurderingVarslingArsak:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const ui=ve(ut),$r=e=>U.jsx(_r,{value:ui,children:U.jsx(Hr,{...e})});$r.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(brevmalkode?: string, fritekst?: string, arsakskode?: string) => void",signature:{arguments:[{type:{name:"string"},name:"brevmalkode"},{type:{name:"string"},name:"fritekst"},{type:{name:"string"},name:"arsakskode"}],return:{name:"void"}}},description:""},revurderingVarslingArsak:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]},description:""}}};const di=e=>U.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:U.jsx(e,{})}),gi=[{kode:ae.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ae.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],ci=[{kode:ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:ce.ANNET,navn:"Annet",kodeverk:"UGUNST"}],_i={title:"sak/sak-meldinger",component:$r,decorators:[di],args:{kanVeilede:!1,revurderingVarslingArsak:ci,behandling:{brevmaler:gi,språkkode:"NB"},previewCallback:gn("button-click"),submitCallback:gn("button-click"),setMeldingFormData:gn("button-click")}},Ze={args:{fagsakYtelseType:Ae.FORELDREPENGER,brukerManglerAdresse:!1}},Je={args:{fagsakYtelseType:Ae.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},Qe={args:{fagsakYtelseType:Ae.FORELDREPENGER,brukerManglerAdresse:!0}};var sr,ir,lr;Ze.parameters={...Ze.parameters,docs:{...(sr=Ze.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(lr=(ir=Ze.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var or,ur,dr;Je.parameters={...Je.parameters,docs:{...(or=Je.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(dr=(ur=Je.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var gr,cr,fr;Qe.parameters={...Qe.parameters,docs:{...(gr=Qe.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(fr=(cr=Qe.parameters)==null?void 0:cr.docs)==null?void 0:fr.source}}};const Ei=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{Qe as BrukerManglerAdresse,Ze as Default,Je as ForSvangerskapspenger,Ei as __namedExportsOrder,_i as default};
