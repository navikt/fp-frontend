import{h as Zr,j as U}from"./index-Bw9BIG6i.js";import{u as Le,a as Ne,d as yr,l as Xr,p as br,e as pr,S as Qr,b as hr,L as bn,q as et,B as Ge,o as Er,E as _r,f as nt,g as rt,s as tt,R as at,i as st,V as pn,t as lt,r as be,k as Ar,P as Rr,M as cn,j as it,W as ot,v as ut,m as dt,n as dn}from"./nb_NO-Sy0pamiH.js";import{R as _,r as V}from"./index-CgfFrydU.js";import{d as hn}from"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./v4-CtRu48qb.js";var en=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(en||{});en.BRUKERS_ANDEL;en.FRILANS;en.EGEN_NÆRING;var ae=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ae||{}),Te=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Te||{}),fe=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(fe||{}),Me=e=>e.type==="checkbox",ye=e=>e instanceof Date,re=e=>e==null;const Sr=e=>typeof e=="object";var Y=e=>!re(e)&&!Array.isArray(e)&&Sr(e)&&!ye(e),Tr=e=>Y(e)&&e.target?Me(e.target)?e.target.checked:e.target.value:e,gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Nr=(e,t)=>e.has(gt(t)),ft=e=>{const t=e.constructor&&e.constructor.prototype;return Y(t)&&t.hasOwnProperty("isPrototypeOf")},En=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(En&&(e instanceof Blob||r))&&(n||Y(e)))if(t=n?[]:{},!n&&!ft(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=X(e[a]));else return e;return t}var nn=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,v=(e,t,n)=>{if(!t||!Y(e))return n;const r=nn(t.split(/[,[\].]+?/)).reduce((a,s)=>re(a)?a:a[s],e);return H(r)||r===e?H(e[t])?n:e[t]:r},le=e=>typeof e=="boolean",_n=e=>/^\w*$/.test(e),Vr=e=>nn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(e,t,n)=>{let r=-1;const a=_n(t)?[t]:Vr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let p=n;if(r!==o){const T=e[d];p=Y(T)||Array.isArray(T)?T:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=p,e=e[d]}};const Je={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ie={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},wr=_.createContext(null),Pe=()=>_.useContext(wr),ct=e=>{const{children:t,...n}=e;return _.createElement(wr.Provider,{value:n},t)};var jr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==ie.all&&(t._proxyFormState[o]=!r||ie.all),n&&(n[o]=!0),e[o]}});return a};const An=typeof window<"u"?V.useLayoutEffect:V.useEffect;function mt(e){const t=Pe(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=_.useState(n._formState),p=_.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return An(()=>n._subscribe({name:a,formState:p.current,exact:s,callback:T=>{!r&&d({...n._formState,...T})}}),[a,r,s]),_.useEffect(()=>{p.current.isValid&&n._setValid(!0)},[n]),_.useMemo(()=>jr(o,n,p.current,!1),[o,n])}var ue=e=>typeof e=="string",Or=(e,t,n,r,a)=>ue(e)?(r&&t.watch.add(e),v(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),v(n,s))):(r&&(t.watchAll=!0),n);function kt(e){const t=Pe(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},d=_.useRef(a),[p,T]=_.useState(n._getWatch(r,d.current));return An(()=>n._subscribe({name:r,formState:{values:!0},exact:o,callback:m=>!s&&T(Or(r,n._names,m.values||n._formValues,!1,d.current))}),[r,n,s,o]),_.useEffect(()=>n._removeUnmounted()),p}function xr(e){const t=Pe(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=Nr(a._names.array,n),d=kt({control:a,name:n,defaultValue:v(a._formValues,n,v(a._defaultValues,n,e.defaultValue)),exact:!0}),p=mt({control:a,name:n,exact:!0}),T=_.useRef(e),m=_.useRef(a.register(n,{...e.rules,value:d,...le(e.disabled)?{disabled:e.disabled}:{}})),N=_.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!v(p.errors,n)},isDirty:{enumerable:!0,get:()=>!!v(p.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!v(p.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!v(p.validatingFields,n)},error:{enumerable:!0,get:()=>v(p.errors,n)}}),[p,n]),E=_.useCallback(k=>m.current.onChange({target:{value:Tr(k),name:n},type:Je.CHANGE}),[n]),j=_.useCallback(()=>m.current.onBlur({target:{value:v(a._formValues,n),name:n},type:Je.BLUR}),[n,a._formValues]),B=_.useCallback(k=>{const y=v(a._fields,n);y&&k&&(y._f.ref={focus:()=>k.focus(),select:()=>k.select(),setCustomValidity:f=>k.setCustomValidity(f),reportValidity:()=>k.reportValidity()})},[a._fields,n]),q=_.useMemo(()=>({name:n,value:d,...le(r)||p.disabled?{disabled:p.disabled||r}:{},onChange:E,onBlur:j,ref:B}),[n,r,p.disabled,E,j,B,d]);return _.useEffect(()=>{const k=a._options.shouldUnregister||s;a.register(n,{...T.current.rules,...le(T.current.disabled)?{disabled:T.current.disabled}:{}});const y=(f,b)=>{const w=v(a._fields,f);w&&w._f&&(w._f.mount=b)};if(y(n,!0),k){const f=X(v(a._options.defaultValues,n));P(a._defaultValues,n,f),H(v(a._formValues,n))&&P(a._formValues,n,f)}return!o&&a.register(n),()=>{(o?k&&!a._state.action:k)?a.unregister(n):y(n,!1)}},[n,a,o,s]),_.useEffect(()=>{a._setDisabledField({disabled:r,name:n})},[r,n,a]),_.useMemo(()=>({field:q,formState:p,fieldState:N}),[q,p,N])}var vt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Fe=e=>Array.isArray(e)?e:[e],On=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},mn=e=>re(e)||!Sr(e);function ce(e,t){if(mn(e)||mn(t))return e===t;if(ye(e)&&ye(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(ye(s)&&ye(o)||Y(s)&&Y(o)||Array.isArray(s)&&Array.isArray(o)?!ce(s,o):s!==o)return!1}}return!0}var ne=e=>Y(e)&&!Object.keys(e).length,Rn=e=>e.type==="file",oe=e=>typeof e=="function",Ze=e=>{if(!En)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Br=e=>e.type==="select-multiple",Sn=e=>e.type==="radio",yt=e=>Sn(e)||Me(e),gn=e=>Ze(e)&&e.isConnected;function bt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=H(e)?r++:e[t[r++]];return e}function pt(e){for(const t in e)if(e.hasOwnProperty(t)&&!H(e[t]))return!1;return!0}function z(e,t){const n=Array.isArray(t)?t:_n(t)?[t]:Vr(t),r=n.length===1?e:bt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&(Y(r)&&ne(r)||Array.isArray(r)&&pt(r))&&z(e,n.slice(0,-1)),e}var qr=e=>{for(const t in e)if(oe(e[t]))return!0;return!1};function Xe(e,t={}){const n=Array.isArray(e);if(Y(e)||n)for(const r in e)Array.isArray(e[r])||Y(e[r])&&!qr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Xe(e[r],t[r])):re(e[r])||(t[r]=!0);return t}function Ir(e,t,n){const r=Array.isArray(e);if(Y(e)||r)for(const a in e)Array.isArray(e[a])||Y(e[a])&&!qr(e[a])?H(t)||mn(n[a])?n[a]=Array.isArray(e[a])?Xe(e[a],[]):{...Xe(e[a])}:Ir(e[a],re(t)?{}:t[a],n[a]):n[a]=!ce(e[a],t[a]);return n}var xe=(e,t)=>Ir(e,t,Xe(t));const xn={value:!1,isValid:!1},Bn={value:!0,isValid:!0};var Fr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?Bn:{value:e[0].value,isValid:!0}:Bn:xn}return xn},Dr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>H(e)?e:t?e===""?NaN:e&&+e:n&&ue(e)?new Date(e):r?r(e):e;const qn={isValid:!1,value:null};var Kr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,qn):qn;function In(e){const t=e.ref;return Rn(t)?t.files:Sn(t)?Kr(e.refs).value:Br(t)?[...t.selectedOptions].map(({value:n})=>n):Me(t)?Fr(e.refs).value:Dr(H(t.value)?e.ref.value:t.value,e)}var ht=(e,t,n,r)=>{const a={};for(const s of e){const o=v(t,s);o&&P(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Qe=e=>e instanceof RegExp,Be=e=>H(e)?e:Qe(e)?e.source:Y(e)?Qe(e.value)?e.value.source:e.value:e,Fn=e=>({isOnSubmit:!e||e===ie.onSubmit,isOnBlur:e===ie.onBlur,isOnChange:e===ie.onChange,isOnAll:e===ie.all,isOnTouch:e===ie.onTouched});const Dn="AsyncFunction";var Et=e=>!!e&&!!e.validate&&!!(oe(e.validate)&&e.validate.constructor.name===Dn||Y(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Dn)),_t=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Kn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const De=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=v(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(De(d,t))break}else if(Y(d)&&De(d,t))break}}};function Ln(e,t,n){const r=v(e,n);if(r||_n(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=v(t,s),d=v(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var At=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return ne(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||ie.all))},Rt=(e,t,n)=>!e||!t||e===t||Fe(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),St=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,Tt=(e,t)=>!nn(v(e,t)).length&&z(e,t),Nt=(e,t,n)=>{const r=Fe(v(e,n));return P(r,"root",t[n]),P(e,n,r),e},We=e=>ue(e);function Gn(e,t,n="validate"){if(We(e)||Array.isArray(e)&&e.every(We)||le(e)&&!e)return{type:n,message:We(e)?e:"",ref:t}}var Se=e=>Y(e)&&!Qe(e)?e:{value:e,message:""},Mn=async(e,t,n,r,a,s)=>{const{ref:o,refs:d,required:p,maxLength:T,minLength:m,min:N,max:E,pattern:j,validate:B,name:q,valueAsNumber:k,mount:y}=e._f,f=v(n,q);if(!y||t.has(q))return{};const b=d?d[0]:o,w=R=>{a&&b.reportValidity&&(b.setCustomValidity(le(R)?"":R||""),b.reportValidity())},x={},W=Sn(o),M=Me(o),C=W||M,I=(k||Rn(o))&&H(o.value)&&H(f)||Ze(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,L=vt.bind(null,q,r,x),G=(R,S,O,D=ge.maxLength,K=ge.minLength)=>{const J=R?S:O;x[q]={type:R?D:K,message:J,ref:o,...L(R?D:K,J)}};if(s?!Array.isArray(f)||!f.length:p&&(!C&&(I||re(f))||le(f)&&!f||M&&!Fr(d).isValid||W&&!Kr(d).isValid)){const{value:R,message:S}=We(p)?{value:!!p,message:p}:Se(p);if(R&&(x[q]={type:ge.required,message:S,ref:b,...L(ge.required,S)},!r))return w(S),x}if(!I&&(!re(N)||!re(E))){let R,S;const O=Se(E),D=Se(N);if(!re(f)&&!isNaN(f)){const K=o.valueAsNumber||f&&+f;re(O.value)||(R=K>O.value),re(D.value)||(S=K<D.value)}else{const K=o.valueAsDate||new Date(f),J=de=>new Date(new Date().toDateString()+" "+de),Z=o.type=="time",se=o.type=="week";ue(O.value)&&f&&(R=Z?J(f)>J(O.value):se?f>O.value:K>new Date(O.value)),ue(D.value)&&f&&(S=Z?J(f)<J(D.value):se?f<D.value:K<new Date(D.value))}if((R||S)&&(G(!!R,O.message,D.message,ge.max,ge.min),!r))return w(x[q].message),x}if((T||m)&&!I&&(ue(f)||s&&Array.isArray(f))){const R=Se(T),S=Se(m),O=!re(R.value)&&f.length>+R.value,D=!re(S.value)&&f.length<+S.value;if((O||D)&&(G(O,R.message,S.message),!r))return w(x[q].message),x}if(j&&!I&&ue(f)){const{value:R,message:S}=Se(j);if(Qe(R)&&!f.match(R)&&(x[q]={type:ge.pattern,message:S,ref:o,...L(ge.pattern,S)},!r))return w(S),x}if(B){if(oe(B)){const R=await B(f,n),S=Gn(R,b);if(S&&(x[q]={...S,...L(ge.validate,S.message)},!r))return w(S.message),x}else if(Y(B)){let R={};for(const S in B){if(!ne(R)&&!r)break;const O=Gn(await B[S](f,n),b,S);O&&(R={...O,...L(S,O.message)},w(O.message),r&&(x[q]=R))}if(!ne(R)&&(x[q]={ref:b,...R},!r))return x}}return w(!0),x};const Vt={mode:ie.onSubmit,reValidateMode:ie.onChange,shouldFocusError:!0};function wt(e={}){let t={...Vt,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:oe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let a=Y(t.defaultValues)||Y(t.values)?X(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:X(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,T=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let N={...m};const E={array:On(),state:On()},j=Fn(t.mode),B=Fn(t.reValidateMode),q=t.criteriaMode===ie.all,k=l=>i=>{clearTimeout(T),T=setTimeout(l,i)},y=async l=>{if(!t.disabled&&(m.isValid||N.isValid||l)){const i=t.resolver?ne((await I()).errors):await G(r,!0);i!==n.isValid&&E.state.next({isValid:i})}},f=(l,i)=>{!t.disabled&&(m.isValidating||m.validatingFields||N.isValidating||N.validatingFields)&&((l||Array.from(d.mount)).forEach(u=>{u&&(i?P(n.validatingFields,u,i):z(n.validatingFields,u))}),E.state.next({validatingFields:n.validatingFields,isValidating:!ne(n.validatingFields)}))},b=(l,i=[],u,h,c=!0,g=!0)=>{if(h&&u&&!t.disabled){if(o.action=!0,g&&Array.isArray(v(r,l))){const A=u(v(r,l),h.argA,h.argB);c&&P(r,l,A)}if(g&&Array.isArray(v(n.errors,l))){const A=u(v(n.errors,l),h.argA,h.argB);c&&P(n.errors,l,A),Tt(n.errors,l)}if((m.touchedFields||N.touchedFields)&&g&&Array.isArray(v(n.touchedFields,l))){const A=u(v(n.touchedFields,l),h.argA,h.argB);c&&P(n.touchedFields,l,A)}(m.dirtyFields||N.dirtyFields)&&(n.dirtyFields=xe(a,s)),E.state.next({name:l,isDirty:S(l,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else P(s,l,i)},w=(l,i)=>{P(n.errors,l,i),E.state.next({errors:n.errors})},x=l=>{n.errors=l,E.state.next({errors:n.errors,isValid:!1})},W=(l,i,u,h)=>{const c=v(r,l);if(c){const g=v(s,l,H(u)?v(a,l):u);H(g)||h&&h.defaultChecked||i?P(s,l,i?g:In(c._f)):K(l,g),o.mount&&y()}},M=(l,i,u,h,c)=>{let g=!1,A=!1;const F={name:l};if(!t.disabled){if(!u||h){(m.isDirty||N.isDirty)&&(A=n.isDirty,n.isDirty=F.isDirty=S(),g=A!==F.isDirty);const $=ce(v(a,l),i);A=!!v(n.dirtyFields,l),$?z(n.dirtyFields,l):P(n.dirtyFields,l,!0),F.dirtyFields=n.dirtyFields,g=g||(m.dirtyFields||N.dirtyFields)&&A!==!$}if(u){const $=v(n.touchedFields,l);$||(P(n.touchedFields,l,u),F.touchedFields=n.touchedFields,g=g||(m.touchedFields||N.touchedFields)&&$!==u)}g&&c&&E.state.next(F)}return g?F:{}},C=(l,i,u,h)=>{const c=v(n.errors,l),g=(m.isValid||N.isValid)&&le(i)&&n.isValid!==i;if(t.delayError&&u?(p=k(()=>w(l,u)),p(t.delayError)):(clearTimeout(T),p=null,u?P(n.errors,l,u):z(n.errors,l)),(u?!ce(c,u):c)||!ne(h)||g){const A={...h,...g&&le(i)?{isValid:i}:{},errors:n.errors,name:l};n={...n,...A},E.state.next(A)}},I=async l=>{f(l,!0);const i=await t.resolver(s,t.context,ht(l||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return f(l),i},L=async l=>{const{errors:i}=await I(l);if(l)for(const u of l){const h=v(i,u);h?P(n.errors,u,h):z(n.errors,u)}else n.errors=i;return i},G=async(l,i,u={valid:!0})=>{for(const h in l){const c=l[h];if(c){const{_f:g,...A}=c;if(g){const F=d.array.has(g.name),$=c._f&&Et(c._f);$&&m.validatingFields&&f([h],!0);const ee=await Mn(c,d.disabled,s,q,t.shouldUseNativeValidation&&!i,F);if($&&m.validatingFields&&f([h]),ee[g.name]&&(u.valid=!1,i))break;!i&&(v(ee,g.name)?F?Nt(n.errors,ee,g.name):P(n.errors,g.name,ee[g.name]):z(n.errors,g.name))}!ne(A)&&await G(A,i,u)}}return u.valid},R=()=>{for(const l of d.unMount){const i=v(r,l);i&&(i._f.refs?i._f.refs.every(u=>!gn(u)):!gn(i._f.ref))&&he(l)}d.unMount=new Set},S=(l,i)=>!t.disabled&&(l&&i&&P(s,l,i),!ce(pe(),a)),O=(l,i,u)=>Or(l,d,{...o.mount?s:H(i)?a:ue(l)?{[l]:i}:i},u,i),D=l=>nn(v(o.mount?s:a,l,t.shouldUnregister?v(a,l,[]):[])),K=(l,i,u={})=>{const h=v(r,l);let c=i;if(h){const g=h._f;g&&(!g.disabled&&P(s,l,Dr(i,g)),c=Ze(g.ref)&&re(i)?"":i,Br(g.ref)?[...g.ref.options].forEach(A=>A.selected=c.includes(A.value)):g.refs?Me(g.ref)?g.refs.length>1?g.refs.forEach(A=>(!A.defaultChecked||!A.disabled)&&(A.checked=Array.isArray(c)?!!c.find(F=>F===A.value):c===A.value)):g.refs[0]&&(g.refs[0].checked=!!c):g.refs.forEach(A=>A.checked=A.value===c):Rn(g.ref)?g.ref.value="":(g.ref.value=c,g.ref.type||E.state.next({name:l,values:X(s)})))}(u.shouldDirty||u.shouldTouch)&&M(l,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Q(l)},J=(l,i,u)=>{for(const h in i){const c=i[h],g=`${l}.${h}`,A=v(r,g);(d.array.has(l)||Y(c)||A&&!A._f)&&!ye(c)?J(g,c,u):K(g,c,u)}},Z=(l,i,u={})=>{const h=v(r,l),c=d.array.has(l),g=X(i);P(s,l,g),c?(E.array.next({name:l,values:X(s)}),(m.isDirty||m.dirtyFields||N.isDirty||N.dirtyFields)&&u.shouldDirty&&E.state.next({name:l,dirtyFields:xe(a,s),isDirty:S(l,g)})):h&&!h._f&&!re(g)?J(l,g,u):K(l,g,u),Kn(l,d)&&E.state.next({...n}),E.state.next({name:o.mount?l:void 0,values:X(s)})},se=async l=>{o.mount=!0;const i=l.target;let u=i.name,h=!0;const c=v(r,u),g=A=>{h=Number.isNaN(A)||ye(A)&&isNaN(A.getTime())||ce(A,v(s,u,A))};if(c){let A,F;const $=i.type?In(c._f):Tr(l),ee=l.type===Je.BLUR||l.type===Je.FOCUS_OUT,zr=!_t(c._f)&&!t.resolver&&!v(n.errors,u)&&!c._f.deps||St(ee,v(n.touchedFields,u),n.isSubmitted,B,j),on=Kn(u,d,ee);P(s,u,$),ee?(c._f.onBlur&&c._f.onBlur(l),p&&p(0)):c._f.onChange&&c._f.onChange(l);const un=M(u,$,ee),Wr=!ne(un)||on;if(!ee&&E.state.next({name:u,type:l.type,values:X(s)}),zr)return(m.isValid||N.isValid)&&(t.mode==="onBlur"?ee&&y():ee||y()),Wr&&E.state.next({name:u,...on?{}:un});if(!ee&&on&&E.state.next({...n}),t.resolver){const{errors:wn}=await I([u]);if(g($),h){const Jr=Ln(n.errors,r,u),jn=Ln(wn,r,Jr.name||u);A=jn.error,u=jn.name,F=ne(wn)}}else f([u],!0),A=(await Mn(c,d.disabled,s,q,t.shouldUseNativeValidation))[u],f([u]),g($),h&&(A?F=!1:(m.isValid||N.isValid)&&(F=await G(r,!0)));h&&(c._f.deps&&Q(c._f.deps),C(u,F,A,un))}},de=(l,i)=>{if(v(n.errors,i)&&l.focus)return l.focus(),1},Q=async(l,i={})=>{let u,h;const c=Fe(l);if(t.resolver){const g=await L(H(l)?l:c);u=ne(g),h=l?!c.some(A=>v(g,A)):u}else l?(h=(await Promise.all(c.map(async g=>{const A=v(r,g);return await G(A&&A._f?{[g]:A}:A)}))).every(Boolean),!(!h&&!n.isValid)&&y()):h=u=await G(r);return E.state.next({...!ue(l)||(m.isValid||N.isValid)&&u!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:u}:{},errors:n.errors}),i.shouldFocus&&!h&&De(r,de,l?c:d.mount),h},pe=l=>{const i={...o.mount?s:a};return H(l)?i:ue(l)?v(i,l):l.map(u=>v(i,u))},me=(l,i)=>({invalid:!!v((i||n).errors,l),isDirty:!!v((i||n).dirtyFields,l),error:v((i||n).errors,l),isValidating:!!v(n.validatingFields,l),isTouched:!!v((i||n).touchedFields,l)}),an=l=>{l&&Fe(l).forEach(i=>z(n.errors,i)),E.state.next({errors:l?n.errors:{}})},Ce=(l,i,u)=>{const h=(v(r,l,{_f:{}})._f||{}).ref,c=v(n.errors,l)||{},{ref:g,message:A,type:F,...$}=c;P(n.errors,l,{...$,...i,ref:h}),E.state.next({name:l,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},sn=(l,i)=>oe(l)?E.state.subscribe({next:u=>l(O(void 0,i),u)}):O(l,i,!0),Ue=l=>E.state.subscribe({next:i=>{Rt(l.name,i.name,l.exact)&&At(i,l.formState||m,Oe,l.reRenderRoot)&&l.callback({values:{...s},...n,...i})}}).unsubscribe,ln=l=>(o.mount=!0,N={...N,...l.formState},Ue({...l,formState:N})),he=(l,i={})=>{for(const u of l?Fe(l):d.mount)d.mount.delete(u),d.array.delete(u),i.keepValue||(z(r,u),z(s,u)),!i.keepError&&z(n.errors,u),!i.keepDirty&&z(n.dirtyFields,u),!i.keepTouched&&z(n.touchedFields,u),!i.keepIsValidating&&z(n.validatingFields,u),!t.shouldUnregister&&!i.keepDefaultValue&&z(a,u);E.state.next({values:X(s)}),E.state.next({...n,...i.keepDirty?{isDirty:S()}:{}}),!i.keepIsValid&&y()},Ve=({disabled:l,name:i})=>{(le(l)&&o.mount||l||d.disabled.has(i))&&(l?d.disabled.add(i):d.disabled.delete(i))},ke=(l,i={})=>{let u=v(r,l);const h=le(i.disabled)||le(t.disabled);return P(r,l,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:l}},name:l,mount:!0,...i}}),d.mount.add(l),u?Ve({disabled:le(i.disabled)?i.disabled:t.disabled,name:l}):W(l,!0,i.value),{...h?{disabled:i.disabled||t.disabled}:{},...t.progressive?{required:!!i.required,min:Be(i.min),max:Be(i.max),minLength:Be(i.minLength),maxLength:Be(i.maxLength),pattern:Be(i.pattern)}:{},name:l,onChange:se,onBlur:se,ref:c=>{if(c){ke(l,i),u=v(r,l);const g=H(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,A=yt(g),F=u._f.refs||[];if(A?F.find($=>$===g):g===u._f.ref)return;P(r,l,{_f:{...u._f,...A?{refs:[...F.filter(gn),g,...Array.isArray(v(a,l))?[{}]:[]],ref:{type:g.type,name:l}}:{ref:g}}}),W(l,!1,void 0,g)}else u=v(r,l,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(Nr(d.array,l)&&o.action)&&d.unMount.add(l)}}},Ee=()=>t.shouldFocusError&&De(r,de,d.mount),we=l=>{le(l)&&(E.state.next({disabled:l}),De(r,(i,u)=>{const h=v(r,u);h&&(i.disabled=h._f.disabled||l,Array.isArray(h._f.refs)&&h._f.refs.forEach(c=>{c.disabled=h._f.disabled||l}))},0,!1))},ve=(l,i)=>async u=>{let h;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=X(s);if(E.state.next({isSubmitting:!0}),t.resolver){const{errors:g,values:A}=await I();n.errors=g,c=A}else await G(r);if(d.disabled.size)for(const g of d.disabled)P(c,g,void 0);if(z(n.errors,"root"),ne(n.errors)){E.state.next({errors:{}});try{await l(c,u)}catch(g){h=g}}else i&&await i({...n.errors},u),Ee(),setTimeout(Ee);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ne(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},_e=(l,i={})=>{v(r,l)&&(H(i.defaultValue)?Z(l,X(v(a,l))):(Z(l,i.defaultValue),P(a,l,X(i.defaultValue))),i.keepTouched||z(n.touchedFields,l),i.keepDirty||(z(n.dirtyFields,l),n.isDirty=i.defaultValue?S(l,X(v(a,l))):S()),i.keepError||(z(n.errors,l),m.isValid&&y()),E.state.next({...n}))},Ae=(l,i={})=>{const u=l?X(l):a,h=X(u),c=ne(l),g=c?a:h;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues){const A=new Set([...d.mount,...Object.keys(xe(a,s))]);for(const F of Array.from(A))v(n.dirtyFields,F)?P(g,F,v(s,F)):Z(F,v(g,F))}else{if(En&&H(l))for(const A of d.mount){const F=v(r,A);if(F&&F._f){const $=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(Ze($)){const ee=$.closest("form");if(ee){ee.reset();break}}}}for(const A of d.mount)Z(A,v(g,A))}s=X(g),E.array.next({values:{...g}}),E.state.next({values:{...g}})}d={mount:i.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!m.isValid||!!i.keepIsValid||!!i.keepDirtyValues,o.watch=!!t.shouldUnregister,E.state.next({submitCount:i.keepSubmitCount?n.submitCount:0,isDirty:c?!1:i.keepDirty?n.isDirty:!!(i.keepDefaultValues&&!ce(l,a)),isSubmitted:i.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&s?xe(a,s):n.dirtyFields:i.keepDefaultValues&&l?xe(a,l):i.keepDirty?n.dirtyFields:{},touchedFields:i.keepTouched?n.touchedFields:{},errors:i.keepErrors?n.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Re=(l,i)=>Ae(oe(l)?l(s):l,i),je=(l,i={})=>{const u=v(r,l),h=u&&u._f;if(h){const c=h.refs?h.refs[0]:h.ref;c.focus&&(c.focus(),i.shouldSelect&&oe(c.select)&&c.select())}},Oe=l=>{n={...n,...l}},Vn={control:{register:ke,unregister:he,getFieldState:me,handleSubmit:ve,setError:Ce,_subscribe:Ue,_runSchema:I,_getWatch:O,_getDirty:S,_setValid:y,_setFieldArray:b,_setDisabledField:Ve,_setErrors:x,_getFieldArray:D,_reset:Ae,_resetDefaultValues:()=>oe(t.defaultValues)&&t.defaultValues().then(l=>{Re(l,t.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:R,_disableForm:we,_subjects:E,_proxyFormState:m,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(l){o=l},get _defaultValues(){return a},get _names(){return d},set _names(l){d=l},get _formState(){return n},get _options(){return t},set _options(l){t={...t,...l}}},subscribe:ln,trigger:Q,register:ke,handleSubmit:ve,watch:sn,setValue:Z,getValues:pe,reset:Re,resetField:_e,clearErrors:an,unregister:he,setError:Ce,setFocus:je,getFieldState:me};return{...Vn,formControl:Vn}}function jt(e={}){const t=_.useRef(void 0),n=_.useRef(void 0),[r,a]=_.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:wt(e),formState:r},e.formControl&&e.defaultValues&&!oe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,An(()=>{const o=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),s._formState.isReady=!0,o},[s]),_.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),_.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!ne(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),_.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),_.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),_.useEffect(()=>{e.values&&!ce(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[s,e.values]),_.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=jr(r,s),t.current}function Lr(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const Pn=globalThis!=null&&globalThis.document?V.useLayoutEffect:()=>{};var Ot=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const xt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ot(e,["title","titleId"]);let s=Le();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Bt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const qt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Bt(e,["title","titleId"]);let s=Le();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var It=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ft=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=It(e,["title","titleId"]);let s=Le();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Dt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Kt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Dt(e,["title","titleId"]);let s=Le();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Lt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Lt(e,["title","titleId"]);let s=Le();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Mt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pt={error:Gt,warning:qt,info:Ft,success:Xr},Ct=V.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:p=!1,closeButton:T=!1,onClose:m}=e,N=Mt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=Ne(),j=yr("Alert"),B=Pt[a];return _.createElement("div",Object.assign({},N,{ref:t,className:E(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":p,"navds-alert--close-button":T})}),_.createElement(B,{title:j(a),className:E("navds-alert__icon")}),_.createElement(br,{as:"div",size:s,className:E("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),T&&!p&&_.createElement("div",{className:E("navds-alert__button-wrapper")},_.createElement(pr,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:_.createElement(Qr,{title:["error","warning"].includes(a)?j("closeAlert"):j("closeMessage")})})))});var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht=V.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:p}=hr(e,"select"),{children:T,label:m,className:N,description:E,htmlSize:j,hideLabel:B=!1,style:q}=e,k=Ut(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:y}=Ne(),f={onMouseDown:b=>{p&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{p&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return _.createElement("div",{className:y(N,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":p,"navds-select--error":s,"navds-select--readonly":p})},_.createElement(bn,{htmlFor:n.id,size:o,className:y("navds-form-field__label",{"navds-sr-only":B})},p&&_.createElement(et,null),m),!!E&&_.createElement(Ge,{className:y("navds-form-field__description",{"navds-sr-only":B}),id:d,size:o,as:"div"},E),_.createElement("div",{className:y("navds-select__container"),style:q},_.createElement("select",Object.assign({},Er(k,["error","errorId","size","readOnly"]),n,f,{ref:t,className:y("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:j}),T),_.createElement(xt,{className:y("navds-select__chevron"),"aria-hidden":!0})),_.createElement("div",{className:y("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&_.createElement(_r,{size:o,showIcon:!0},e.error)))});var Yt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const $t=V.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=Yt(e,["as","className","underline","variant","inlineText"]);const{cn:p}=Ne();return _.createElement(n,Object.assign({},d,{ref:t,className:p("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Wt=V.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=zt(e,["children","className","variant","size","icon"]);const{cn:p}=Ne(),T=(a==null?void 0:a.endsWith("-filled"))&&"strong",m=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",N=a==null?void 0:a.replace("-filled","").replace("-moderate","");return _.createElement(Ge,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:p("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${T||m||"outline"}`,`navds-tag--${N}`)}),o&&_.createElement("span",{className:p("navds-tag__icon--left")},o),n)});var Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Un=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function He(e){return parseInt(e,10)||0}const Zt=V.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:p,style:T,value:m}=e,N=Jt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=V.useRef(m!=null),j=V.useRef(null),B=nt(j,t),q=V.useRef(null),k=V.useRef(0),[y,f]=V.useState({outerHeightStyle:0}),b=_.useCallback(()=>{const M=j.current,I=Un(M).getComputedStyle(M);if(I.width==="0px")return{outerHeightStyle:0};const L=q.current;L.style.width=I.width,L.value=M.value||N.placeholder||"x",L.value.slice(-1)===`
`&&(L.value+=" ");const G=I.boxSizing,R=He(I.paddingBottom)+He(I.paddingTop),S=He(I.borderBottomWidth)+He(I.borderTopWidth),O=L.scrollHeight-R;L.value="x";const D=L.scrollHeight-R;let K=O;d&&(K=Math.max(Number(d)*D,K)),o&&(K=Math.min(Number(o)*D,K)),K=Math.max(K,D);const J=K+(G==="border-box"?R+S:0),Z=Math.abs(K-O)<=1;return{outerHeightStyle:J,overflow:Z}},[o,d,N.placeholder]),w=()=>{const M=b();Hn(M)||f(C=>Cn(C,M,k))};Pn(()=>{const M=()=>{const R=b();Hn(R)||Zr.flushSync(()=>{f(S=>Cn(S,R,k))})},C=Lr(()=>{var R,S,O;if(k.current=0,!((R=j.current)===null||R===void 0)&&R.style.height||!((S=j.current)===null||S===void 0)&&S.style.width){((O=j.current)===null||O===void 0?void 0:O.style.overflow)==="hidden"&&f(D=>Object.assign(Object.assign({},D),{overflow:!1}));return}M()},166,!0),I=j.current,L=Un(I);L.addEventListener("resize",C);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(C),G.observe(I)),()=>{C.clear(),L.removeEventListener("resize",C),G&&G.disconnect()}},[b]),Pn(()=>{w()}),V.useEffect(()=>{k.current=0},[m]);const x=M=>{k.current=0,E||w(),s&&s(M)},W=Object.assign({"--__ac-textarea-height":y.outerHeightStyle+"px","--__axc-textarea-height":y.outerHeightStyle+"px",overflow:y.overflow&&!p&&!(!((n=j.current)===null||n===void 0)&&n.style.height)&&!(!((r=j.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},T);return _.createElement(_.Fragment,null,_.createElement("textarea",Object.assign({value:m,onChange:x,ref:B,rows:d,style:W},N,{className:a})),_.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:q,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},T)}))});function Hn(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=Ne(),o=yr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=t-n,[p,T]=V.useState(d);return V.useEffect(()=>{const m=Lr(()=>{T(d)},2e3);return m(),()=>{m.clear()}},[d]),_.createElement(_.Fragment,null,_.createElement("span",{id:e,className:s("navds-sr-only")},o("maxLength",{maxLength:t})),d<20&&_.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Yn(p,o)),_.createElement(Ge,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},Yn(d,o)))},Yn=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ea=V.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:p,size:T,inputDescriptionId:m}=hr(e,"textarea"),{label:N,className:E,description:j,maxLength:B,hideLabel:q=!1,resize:k,UNSAFE_autoScrollbar:y,i18n:f,readOnly:b}=e,w=Qt(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:x}=Ne(),W=rt(),M=B!==void 0&&B>0,[C,I]=V.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),L=()=>{let R=w!=null&&w.minRows?w==null?void 0:w.minRows:3;return T==="small"&&(R=w!=null&&w.minRows?w==null?void 0:w.minRows:2),R},G=tt(s["aria-describedby"],{[W??""]:M});return _.createElement("div",{className:x(E,"navds-form-field",`navds-form-field--${T}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":p,"navds-textarea--autoscrollbar":y,[`navds-textarea--resize-${k===!0?"both":k}`]:k})},_.createElement(bn,{htmlFor:s.id,size:T,className:x("navds-form-field__label",{"navds-sr-only":q})},b&&_.createElement(at,null),N),!!j&&_.createElement(Ge,{className:x("navds-form-field__description",{"navds-sr-only":q}),id:m,size:T,as:"div"},j),_.createElement(Zt,Object.assign({},Er(w,["error","errorId","size"]),s,{onChange:st(e.onChange,e.value===void 0?R=>I(R.target.value):void 0),minRows:L(),autoScrollbar:y,ref:t,readOnly:b,className:x("navds-textarea__input","navds-body-short",`navds-body-short--${T??"medium"}`)},G?{"aria-describedby":G}:{})),M&&!b&&!s.disabled&&_.createElement(Xt,{maxLengthId:W,maxLength:B,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:C.length,size:T,i18n:f}),_.createElement("div",{className:x("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&_.createElement(_r,{size:T,showIcon:!0},e.error)))});function na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $n={exports:{}},qe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function ra(){if(zn)return qe;zn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return qe.Fragment=t,qe.jsx=n,qe.jsxs=n,qe}var Wn;function ta(){return Wn||(Wn=1,$n.exports=ra()),$n.exports}var Ke=ta();const aa=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Ke.jsx(Ct,{variant:"warning",size:"small",children:Ke.jsx(pn,{gap:"2",children:_.Children.map(e,t=>Ke.jsx(Ge,{size:"small",children:t},lt(t)?t.key:t))})}),rn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};be(rn);var Jn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zn;function sa(){return Zn||(Zn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Jn)),Jn.exports}var la=sa();const Tn=na(la),ia="_borderbox_1vkvn_1",oa="_error_1vkvn_5",ua="_warning_1vkvn_8",da={borderbox:ia,error:oa,warning:ua};Tn.bind(da);const ga="_aksjonspunkt_kn1hn_1",fa="_erAksjonspunktApent_kn1hn_4",ca="_erIkkeGodkjentAvBeslutter_kn1hn_8",ma={aksjonspunkt:ga,erAksjonspunktApent:fa,erIkkeGodkjentAvBeslutter:ca};Tn.bind(ma);be(rn);be(rn);const ka="_divider_1t980_1",va="_dividerParagraf_1t980_8",ya="_leftPanel_1t980_11",ba="_rightPanel_1t980_14",pa={divider:ka,dividerParagraf:va,leftPanel:ya,rightPanel:ba};Tn.bind(pa);const ha=()=>Ke.jsx("span",{"data-testid":"editedIcon",children:Ke.jsx(Kt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});be(rn);function Ea(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xn={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn;function _a(){if(Qn)return Ie;Qn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Ie.Fragment=t,Ie.jsx=n,Ie.jsxs=n,Ie}var er;function Aa(){return er||(er=1,Xn.exports=_a()),Xn.exports}var te=Aa();const Gr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Mr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var kn={exports:{}},Ra=kn.exports,nr;function Sa(){return nr||(nr=1,function(e,t){(function(n,r){e.exports=r()})(Ra,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,p={},T=function(k){return(k=+k)+(k>68?1900:2e3)},m=function(k){return function(y){this[k]=+y}},N=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=function(y){if(!y||y==="Z")return 0;var f=y.match(/([+-]|\d\d)/g),b=60*f[1]+(+f[2]||0);return b===0?0:f[0]==="+"?-b:b}(k)}],E=function(k){var y=p[k];return y&&(y.indexOf?y:y.s.concat(y.f))},j=function(k,y){var f,b=p.meridiem;if(b){for(var w=1;w<=24;w+=1)if(k.indexOf(b(w,0,y))>-1){f=w>12;break}}else f=k===(y?"pm":"PM");return f},B={A:[d,function(k){this.afternoon=j(k,!1)}],a:[d,function(k){this.afternoon=j(k,!0)}],Q:[a,function(k){this.month=3*(k-1)+1}],S:[a,function(k){this.milliseconds=100*+k}],SS:[s,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[o,m("seconds")],ss:[o,m("seconds")],m:[o,m("minutes")],mm:[o,m("minutes")],H:[o,m("hours")],h:[o,m("hours")],HH:[o,m("hours")],hh:[o,m("hours")],D:[o,m("day")],DD:[s,m("day")],Do:[d,function(k){var y=p.ordinal,f=k.match(/\d+/);if(this.day=f[0],y)for(var b=1;b<=31;b+=1)y(b).replace(/\[|\]/g,"")===k&&(this.day=b)}],w:[o,m("week")],ww:[s,m("week")],M:[o,m("month")],MM:[s,m("month")],MMM:[d,function(k){var y=E("months"),f=(E("monthsShort")||y.map(function(b){return b.slice(0,3)})).indexOf(k)+1;if(f<1)throw new Error;this.month=f%12||f}],MMMM:[d,function(k){var y=E("months").indexOf(k)+1;if(y<1)throw new Error;this.month=y%12||y}],Y:[/[+-]?\d+/,m("year")],YY:[s,function(k){this.year=T(k)}],YYYY:[/\d{4}/,m("year")],Z:N,ZZ:N};function q(k){var y,f;y=k,f=p&&p.formats;for(var b=(k=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(L,G,R){var S=R&&R.toUpperCase();return G||f[R]||n[R]||f[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,D,K){return D||K.slice(1)})})).match(r),w=b.length,x=0;x<w;x+=1){var W=b[x],M=B[W],C=M&&M[0],I=M&&M[1];b[x]=I?{regex:C,parser:I}:W.replace(/^\[|\]$/g,"")}return function(L){for(var G={},R=0,S=0;R<w;R+=1){var O=b[R];if(typeof O=="string")S+=O.length;else{var D=O.regex,K=O.parser,J=L.slice(S),Z=D.exec(J)[0];K.call(G,Z),L=L.replace(Z,"")}}return function(se){var de=se.afternoon;if(de!==void 0){var Q=se.hours;de?Q<12&&(se.hours+=12):Q===12&&(se.hours=0),delete se.afternoon}}(G),G}}return function(k,y,f){f.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&(T=k.parseTwoDigitYear);var b=y.prototype,w=b.parse;b.parse=function(x){var W=x.date,M=x.utc,C=x.args;this.$u=M;var I=C[1];if(typeof I=="string"){var L=C[2]===!0,G=C[3]===!0,R=L||G,S=C[2];G&&(S=C[2]),p=this.$locale(),!L&&S&&(p=f.Ls[S]),this.$d=function(J,Z,se,de){try{if(["x","X"].indexOf(Z)>-1)return new Date((Z==="X"?1e3:1)*J);var Q=q(Z)(J),pe=Q.year,me=Q.month,an=Q.day,Ce=Q.hours,sn=Q.minutes,Ue=Q.seconds,ln=Q.milliseconds,he=Q.zone,Ve=Q.week,ke=new Date,Ee=an||(pe||me?1:ke.getDate()),we=pe||ke.getFullYear(),ve=0;pe&&!me||(ve=me>0?me-1:ke.getMonth());var _e,Ae=Ce||0,Re=sn||0,je=Ue||0,Oe=ln||0;return he?new Date(Date.UTC(we,ve,Ee,Ae,Re,je,Oe+60*he.offset*1e3)):se?new Date(Date.UTC(we,ve,Ee,Ae,Re,je,Oe)):(_e=new Date(we,ve,Ee,Ae,Re,je,Oe),Ve&&(_e=de(_e).week(Ve).toDate()),_e)}catch{return new Date("")}}(W,I,M,f),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),R&&W!=this.format(I)&&(this.$d=new Date("")),p={}}else if(I instanceof Array)for(var O=I.length,D=1;D<=O;D+=1){C[1]=I[D-1];var K=f.apply(this,C);if(K.isValid()){this.$d=K.$d,this.$L=K.$L,this.init();break}D===O&&(this.$d=new Date(""))}else w.call(this,x)}}})}(kn)),kn.exports}var Ta=Sa();const Na=Ea(Ta),Va="_textarea_1snk6_1",wa="_readOnlyField_1snk6_7",rr={textarea:Va,readOnlyField:wa},ja=e=>e!=null&&e!=="",Pr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>ja(t)?te.jsxs(pn,{gap:"1",children:[e&&!a&&te.jsx(bn,{size:s,children:e}),te.jsxs(Ar,{gap:"2",align:"center",wrap:!1,children:[te.jsx(br,{className:r==="textarea"?rr.textarea:rr.readOnlyField,size:s,children:t}),n&&te.jsx(ha,{})]})]}):null;hn.extend(Na);const tr=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:p,className:T,hideLabel:m,isEdited:N,size:E})=>{const{formState:{errors:j}}=Pe(),{field:B}=xr({name:e,rules:{validate:V.useMemo(()=>Gr(r),[r])}});if(a){const y=n.map(b=>b.props).find(b=>b.value===B.value),f=y?y.children:void 0;return te.jsx(Pr,{value:f,label:t,hideLabel:m,isEdited:N,size:E})}const q=B.value||"",k=!n.map(y=>y.props.value).includes(q)&&q!=="";return k&&console.warn(`No corresponding option found for value '${q}'`),te.jsxs(Ht,{size:"small",className:T,error:Mr(j,e),label:t,description:s,value:o&&p||k?"":B.value,disabled:p,onChange:y=>{d&&d(y),B.onChange(y)},hideLabel:m,children:[te.jsx("option",{style:{display:"none"}}),",",n]})},Oa="_textAreaFieldWithBadges_bdz0b_1",xa="_etikettWrapper_bdz0b_4",ar={textAreaFieldWithBadges:Oa,etikettWrapper:xa},Ba=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=N=>N,className:d,description:p,isEdited:T,...m})=>{const{formState:{errors:N}}=Pe(),{field:E}=xr({name:e,rules:{validate:V.useMemo(()=>Gr(s),[s])}});return n?te.jsx(Pr,{label:t,value:E.value,type:"textarea",isEdited:T,hideLabel:m.hideLabel}):te.jsxs("div",{className:a?ar.textAreaFieldWithBadges:null,children:[a&&te.jsx("div",{className:ar.etikettWrapper,children:a.map(({type:j,titleText:B})=>te.jsx(Wt,{variant:j,size:"small",children:B},B))}),te.jsx(ea,{size:"small",label:t,description:p,className:d,autoComplete:"off",...E,onChange:j=>E.onChange(j.currentTarget.value!==""?o(j.currentTarget.value):null),value:E.value?E.value:"",error:Mr(N,e),maxLength:r,...m})]})},qa=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return V.useEffect(()=>()=>{a&&a(o())},[]),te.jsx(ct,{...e,children:te.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Cr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vn={exports:{}},Ia=vn.exports,sr;function Fa(){return sr||(sr=1,function(e,t){(function(n,r){e.exports=r()})(Ia,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(vn)),vn.exports}var Da=Fa();const Ka=Cr(Da);var yn={exports:{}},La=yn.exports,lr;function Ga(){return lr||(lr=1,function(e,t){(function(n,r){e.exports=r()})(La,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(yn)),yn.exports}var Ma=Ga();const Pa=Cr(Ma),Ca="Dato må være før eller lik {limit}",Ua="Dato må være etter eller lik {limit}",Ha="Perioder kan ikke overlappe i tid",Ya="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",$a="Dato må være lik {value}",za="Dato må skrives slik: dd.mm.åååå",Wa="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Ja="Tallet kan ikke inneholde mer enn to desimaler",Za="Tallet kan ikke ha desimaler",Xa="Feltet kan kun inneholde tall",Qa="Ugyldig fødselsnummer",es="Feltet må være et fødselsnummer (11 siffer)",ns="Ugyldig organisasjonsnummer.",rs="Ugyldig organisasjonsnummer eller fødselsnummer",ts="Startdato må være før eller lik sluttdato",as="Periode er utenfor opptjeningsperioden",ss="Ugyldig saksnummer eller fødselsnummer",ls="Feltet inneholder ugyldige tegn: {text}",is="Feltet inneholder en ugyldig verdi: {value}",os="Feltet kan ikke inneholde mellomrom",us="Feltet må fylles ut",ds="Du kan skrive maksimalt {length} tegn",gs="Du må skrive minst {length} tegn",fs="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",cs="Feltet må være mindre eller lik {length}",ms="Feltet må være større eller lik {length}",ks="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",vs={DateNotBeforeOrEqual:Ca,DateNotAfterOrEqual:Ua,DateRangesOverlapping:Ha,DateRangesOverlappingPeriodTypes:Ya,DatesNotEqual:$a,InvalidDate:za,InvalidDatesInPeriod:Wa,InvalidDecimal:Ja,InvalidInteger:Za,InvalidNumber:Xa,InvalidFodselsnr:Qa,InvalidFodselsnrFormat:es,InvalidOrgnr:ns,InvalidOrgnrOrFodselsnr:rs,InvalidPeriod:ts,InvalidPeriodRange:as,InvalidSaksnrOrFodselsnrFormat:ss,InvalidText:ls,InvalidValue:is,IllegalWhiteSpace:os,IsRequired:us,MaxLength:ds,MinLength:gs,MaxLengthOrFodselsnr:fs,MaxValue:cs,MinValue:ms,SammeFodselsnrSomSoker:ks},{formatMessage:tn}=be(vs),ys=e=>tn({id:"InvalidText"},{text:e}),bs=()=>tn({id:"IsRequired"}),ps=e=>tn({id:"MaxLength"},{length:e}),hs=e=>tn({id:"MinLength"},{length:e}),Es=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,_s=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Nn=e=>e==null||e.toString().trim().length===0;hn.extend(Ka);hn.extend(Pa);const fn=e=>Nn(e)?bs():void 0,As=e=>t=>Nn(t)||t.toString().trim().length>=e?null:hs(e),Ur=e=>t=>Nn(t)||t.toString().trim().length<=e?null:ps(e),Rs=e=>{if(!Es.test(e)){const t=e.replace(_s,"");return ys(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Ss=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Ts="_ukjentAdresseMargins_4teno_1",Ns={ukjentAdresseMargins:Ts},Vs={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},ws=be(Vs),Hr=()=>U.jsx(Rr,{value:ws,children:U.jsx("div",{className:Ns.ukjentAdresseMargins,children:U.jsx(aa,{children:U.jsx("b",{children:U.jsx(cn,{id:"UkjentAdresse.Text"})})})})});Hr.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const js="_bredde_jav4h_9",ir={bredde:js},Os=Ur(4e3),xs=Ur(1e4),Bs=As(3),qs=e=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Is=(e,t)=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.FRITEKST||e===ae.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ae.VARSEL_OM_TILBAKEKREVING||e===ae.TBK_INNHENTE_OPPLYSNINGER||e===ae.VARSEL_OM_REVURDERING&&t===fe.ANNET,Fs=(e,t)=>t===Te.ENGANGSSTONAD?e.filter(n=>n.kode===fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===fe.ANNET):t===Te.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==fe.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,Ds=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ae.VARSEL_OM_REVURDERING}:{...t}},Ks=e=>{const t=e;return e.brevmalkode===ae.VARSEL_OM_REVURDERING&&t.arsakskode!==fe.ANNET&&(t.fritekst=" "),t},Yr=({behandling:e,forhåndsvisBrev:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:p})=>{const T=it(),m=jt({defaultValues:o??Ds(e)}),N=m.watch("brevmalkode"),E=m.watch("fritekst"),j=m.watch("arsakskode"),B=Fs(r,a);if(!e.språkkode)return null;const{formState:q}=m,k=b=>{N&&E?t({brevmalkode:N,fritekst:E,arsakskode:j}):E||m.setError("fritekst",{type:"manual",message:T.formatMessage({id:"Messages.FritekstRequired"})}),b.preventDefault()},y=ot(e.språkkode),f=N===ae.VARSEL_OM_REVURDERING;return U.jsx(qa,{formMethods:m,onSubmit:b=>n(Ks(b)),setDataOnUnmount:d,children:U.jsxs(pn,{gap:"4",children:[U.jsx(tr,{name:"brevmalkode",label:T.formatMessage({id:"Messages.Template"}),validate:[fn],selectValues:e.brevmaler.map(b=>U.jsx("option",{value:b.kode,disabled:!b.tilgjengelig,children:b.navn},b.kode)),className:ir.bredde}),f&&U.jsx(tr,{name:"arsakskode",label:T.formatMessage({id:"Messages.Årsak"}),validate:[fn],selectValues:B.map(b=>U.jsx("option",{value:b.kode,children:b.navn},b.kode)),className:ir.bredde}),Is(N,j)&&U.jsx(Ba,{name:"fritekst",label:T.formatMessage({id:qs(N)}),validate:[fn,f?xs:Os,Bs,Rs],maxLength:f?1e4:4e3,badges:[{type:"info",titleText:y}],parse:ut}),p&&U.jsx(Hr,{}),U.jsxs(Ar,{justify:"space-between",children:[(!f||f&&j!==void 0)&&U.jsx($t,{href:"#",onClick:k,onKeyDown:b=>b.key==="Enter"?k(b):null,children:U.jsx(cn,{id:"Messages.Preview"})}),U.jsx(pr,{size:"small",variant:"primary",loading:q.isSubmitting,disabled:q.isSubmitting||s,onClick:Ss,children:U.jsx(cn,{id:"Messages.Submit"})})]})]})})};Yr.__docgenInfo={description:`Messages

Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
og fritekst som skal flettes inn i brevet skrives inn i et eget felt.`,methods:[],displayName:"Messages",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},forhåndsvisBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ForhåndsvisBrevParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"void"}}},description:""},revurderingVarslingArsak:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'RevurderingVarslingÅrsak'>[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const Ls=be(dt),$r=e=>U.jsx(Rr,{value:Ls,children:U.jsx(Yr,{...e})});$r.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},forhåndsvisBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ForhåndsvisBrevParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"void"}}},description:""},revurderingVarslingArsak:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'RevurderingVarslingÅrsak'>[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""}}};const Gs=e=>U.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:U.jsx(e,{})}),Ms=[{kode:ae.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ae.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],Ps=[{kode:fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:fe.ANNET,navn:"Annet",kodeverk:"UGUNST"}],Zs={title:"sak/sak-meldinger",component:$r,decorators:[Gs],args:{kanVeilede:!1,revurderingVarslingArsak:Ps,behandling:{brevmaler:Ms,språkkode:"NB"},forhåndsvisBrev:dn("button-click"),submitCallback:dn("button-click"),setMeldingFormData:dn("button-click")}},Ye={args:{fagsakYtelseType:Te.FORELDREPENGER,brukerManglerAdresse:!1}},$e={args:{fagsakYtelseType:Te.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},ze={args:{fagsakYtelseType:Te.FORELDREPENGER,brukerManglerAdresse:!0}};var or,ur,dr;Ye.parameters={...Ye.parameters,docs:{...(or=Ye.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(dr=(ur=Ye.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var gr,fr,cr;$e.parameters={...$e.parameters,docs:{...(gr=$e.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(cr=(fr=$e.parameters)==null?void 0:fr.docs)==null?void 0:cr.source}}};var mr,kr,vr;ze.parameters={...ze.parameters,docs:{...(mr=ze.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(vr=(kr=ze.parameters)==null?void 0:kr.docs)==null?void 0:vr.source}}};const Xs=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{ze as BrukerManglerAdresse,Ye as Default,$e as ForSvangerskapspenger,Xs as __namedExportsOrder,Zs as default};
