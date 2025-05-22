import{h as Zr,j as U}from"./index-Bw9BIG6i.js";import{u as Ke,a as we,d as yr,l as Xr,p as br,e as hr,S as Qr,b as pr,L as bn,q as et,B as Ge,o as Er,E as _r,f as nt,g as rt,s as tt,R as at,i as st,V as hn,t as lt,r as be,k as Ar,P as Nr,M as cn,j as it,W as ot,v as ut,m as dt,n as dn}from"./nb_NO-Sy0pamiH.js";import{R as _,r as V}from"./index-CgfFrydU.js";import{d as pn}from"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./v4-CtRu48qb.js";var en=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(en||{});en.BRUKERS_ANDEL;en.FRILANS;en.EGEN_NÆRING;var ae=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ae||{}),Se=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Se||{}),fe=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(fe||{}),Me=e=>e.type==="checkbox",ye=e=>e instanceof Date,re=e=>e==null;const Rr=e=>typeof e=="object";var $=e=>!re(e)&&!Array.isArray(e)&&Rr(e)&&!ye(e),Sr=e=>$(e)&&e.target?Me(e.target)?e.target.checked:e.target.value:e,gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,wr=(e,t)=>e.has(gt(t)),ft=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},En=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(En&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!ft(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=X(e[a]));else return e;return t}var nn=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,k=(e,t,n)=>{if(!t||!$(e))return n;const r=nn(t.split(/[,[\].]+?/)).reduce((a,s)=>re(a)?a:a[s],e);return H(r)||r===e?H(e[t])?n:e[t]:r},le=e=>typeof e=="boolean",_n=e=>/^\w*$/.test(e),Vr=e=>nn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(e,t,n)=>{let r=-1;const a=_n(t)?[t]:Vr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let h=n;if(r!==o){const S=e[d];h=$(S)||Array.isArray(S)?S:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=h,e=e[d]}};const Je={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ie={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Tr=_.createContext(null),Pe=()=>_.useContext(Tr),ct=e=>{const{children:t,...n}=e;return _.createElement(Tr.Provider,{value:n},t)};var jr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==ie.all&&(t._proxyFormState[o]=!r||ie.all),n&&(n[o]=!0),e[o]}});return a};const An=typeof window<"u"?V.useLayoutEffect:V.useEffect;function mt(e){const t=Pe(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=_.useState(n._formState),h=_.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return An(()=>n._subscribe({name:a,formState:h.current,exact:s,callback:S=>{!r&&d({...n._formState,...S})}}),[a,r,s]),_.useEffect(()=>{h.current.isValid&&n._setValid(!0)},[n]),_.useMemo(()=>jr(o,n,h.current,!1),[o,n])}var ue=e=>typeof e=="string",Or=(e,t,n,r,a)=>ue(e)?(r&&t.watch.add(e),k(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),k(n,s))):(r&&(t.watchAll=!0),n);function vt(e){const t=Pe(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},d=_.useRef(a),[h,S]=_.useState(n._getWatch(r,d.current));return An(()=>n._subscribe({name:r,formState:{values:!0},exact:o,callback:m=>!s&&S(Or(r,n._names,m.values||n._formValues,!1,d.current))}),[r,n,s,o]),_.useEffect(()=>n._removeUnmounted()),h}function xr(e){const t=Pe(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=wr(a._names.array,n),d=vt({control:a,name:n,defaultValue:k(a._formValues,n,k(a._defaultValues,n,e.defaultValue)),exact:!0}),h=mt({control:a,name:n,exact:!0}),S=_.useRef(e),m=_.useRef(a.register(n,{...e.rules,value:d,...le(e.disabled)?{disabled:e.disabled}:{}})),w=_.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!k(h.errors,n)},isDirty:{enumerable:!0,get:()=>!!k(h.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!k(h.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!k(h.validatingFields,n)},error:{enumerable:!0,get:()=>k(h.errors,n)}}),[h,n]),E=_.useCallback(v=>m.current.onChange({target:{value:Sr(v),name:n},type:Je.CHANGE}),[n]),j=_.useCallback(()=>m.current.onBlur({target:{value:k(a._formValues,n),name:n},type:Je.BLUR}),[n,a._formValues]),q=_.useCallback(v=>{const y=k(a._fields,n);y&&v&&(y._f.ref={focus:()=>v.focus(),select:()=>v.select(),setCustomValidity:f=>v.setCustomValidity(f),reportValidity:()=>v.reportValidity()})},[a._fields,n]),I=_.useMemo(()=>({name:n,value:d,...le(r)||h.disabled?{disabled:h.disabled||r}:{},onChange:E,onBlur:j,ref:q}),[n,r,h.disabled,E,j,q,d]);return _.useEffect(()=>{const v=a._options.shouldUnregister||s;a.register(n,{...S.current.rules,...le(S.current.disabled)?{disabled:S.current.disabled}:{}});const y=(f,b)=>{const T=k(a._fields,f);T&&T._f&&(T._f.mount=b)};if(y(n,!0),v){const f=X(k(a._options.defaultValues,n));P(a._defaultValues,n,f),H(k(a._formValues,n))&&P(a._formValues,n,f)}return!o&&a.register(n),()=>{(o?v&&!a._state.action:v)?a.unregister(n):y(n,!1)}},[n,a,o,s]),_.useEffect(()=>{a._setDisabledField({disabled:r,name:n})},[r,n,a]),_.useMemo(()=>({field:I,formState:h,fieldState:w}),[I,h,w])}var kt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Be=e=>Array.isArray(e)?e:[e],On=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},mn=e=>re(e)||!Rr(e);function ce(e,t){if(mn(e)||mn(t))return e===t;if(ye(e)&&ye(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(ye(s)&&ye(o)||$(s)&&$(o)||Array.isArray(s)&&Array.isArray(o)?!ce(s,o):s!==o)return!1}}return!0}var ne=e=>$(e)&&!Object.keys(e).length,Nn=e=>e.type==="file",oe=e=>typeof e=="function",Ze=e=>{if(!En)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},qr=e=>e.type==="select-multiple",Rn=e=>e.type==="radio",yt=e=>Rn(e)||Me(e),gn=e=>Ze(e)&&e.isConnected;function bt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=H(e)?r++:e[t[r++]];return e}function ht(e){for(const t in e)if(e.hasOwnProperty(t)&&!H(e[t]))return!1;return!0}function z(e,t){const n=Array.isArray(t)?t:_n(t)?[t]:Vr(t),r=n.length===1?e:bt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&ne(r)||Array.isArray(r)&&ht(r))&&z(e,n.slice(0,-1)),e}var Ir=e=>{for(const t in e)if(oe(e[t]))return!0;return!1};function Xe(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!Ir(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Xe(e[r],t[r])):re(e[r])||(t[r]=!0);return t}function Fr(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Ir(e[a])?H(t)||mn(n[a])?n[a]=Array.isArray(e[a])?Xe(e[a],[]):{...Xe(e[a])}:Fr(e[a],re(t)?{}:t[a],n[a]):n[a]=!ce(e[a],t[a]);return n}var xe=(e,t)=>Fr(e,t,Xe(t));const xn={value:!1,isValid:!1},qn={value:!0,isValid:!0};var Br=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?qn:{value:e[0].value,isValid:!0}:qn:xn}return xn},Dr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>H(e)?e:t?e===""?NaN:e&&+e:n&&ue(e)?new Date(e):r?r(e):e;const In={isValid:!1,value:null};var Lr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,In):In;function Fn(e){const t=e.ref;return Nn(t)?t.files:Rn(t)?Lr(e.refs).value:qr(t)?[...t.selectedOptions].map(({value:n})=>n):Me(t)?Br(e.refs).value:Dr(H(t.value)?e.ref.value:t.value,e)}var pt=(e,t,n,r)=>{const a={};for(const s of e){const o=k(t,s);o&&P(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Qe=e=>e instanceof RegExp,qe=e=>H(e)?e:Qe(e)?e.source:$(e)?Qe(e.value)?e.value.source:e.value:e,Bn=e=>({isOnSubmit:!e||e===ie.onSubmit,isOnBlur:e===ie.onBlur,isOnChange:e===ie.onChange,isOnAll:e===ie.all,isOnTouch:e===ie.onTouched});const Dn="AsyncFunction";var Et=e=>!!e&&!!e.validate&&!!(oe(e.validate)&&e.validate.constructor.name===Dn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Dn)),_t=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ln=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const De=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=k(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(De(d,t))break}else if($(d)&&De(d,t))break}}};function Kn(e,t,n){const r=k(e,n);if(r||_n(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=k(t,s),d=k(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var At=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return ne(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||ie.all))},Nt=(e,t,n)=>!e||!t||e===t||Be(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),Rt=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,St=(e,t)=>!nn(k(e,t)).length&&z(e,t),wt=(e,t,n)=>{const r=Be(k(e,n));return P(r,"root",t[n]),P(e,n,r),e},We=e=>ue(e);function Gn(e,t,n="validate"){if(We(e)||Array.isArray(e)&&e.every(We)||le(e)&&!e)return{type:n,message:We(e)?e:"",ref:t}}var Re=e=>$(e)&&!Qe(e)?e:{value:e,message:""},Mn=async(e,t,n,r,a,s)=>{const{ref:o,refs:d,required:h,maxLength:S,minLength:m,min:w,max:E,pattern:j,validate:q,name:I,valueAsNumber:v,mount:y}=e._f,f=k(n,I);if(!y||t.has(I))return{};const b=d?d[0]:o,T=N=>{a&&b.reportValidity&&(b.setCustomValidity(le(N)?"":N||""),b.reportValidity())},x={},W=Rn(o),M=Me(o),C=W||M,F=(v||Nn(o))&&H(o.value)&&H(f)||Ze(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,K=kt.bind(null,I,r,x),G=(N,R,O,D=ge.maxLength,L=ge.minLength)=>{const J=N?R:O;x[I]={type:N?D:L,message:J,ref:o,...K(N?D:L,J)}};if(s?!Array.isArray(f)||!f.length:h&&(!C&&(F||re(f))||le(f)&&!f||M&&!Br(d).isValid||W&&!Lr(d).isValid)){const{value:N,message:R}=We(h)?{value:!!h,message:h}:Re(h);if(N&&(x[I]={type:ge.required,message:R,ref:b,...K(ge.required,R)},!r))return T(R),x}if(!F&&(!re(w)||!re(E))){let N,R;const O=Re(E),D=Re(w);if(!re(f)&&!isNaN(f)){const L=o.valueAsNumber||f&&+f;re(O.value)||(N=L>O.value),re(D.value)||(R=L<D.value)}else{const L=o.valueAsDate||new Date(f),J=de=>new Date(new Date().toDateString()+" "+de),Z=o.type=="time",se=o.type=="week";ue(O.value)&&f&&(N=Z?J(f)>J(O.value):se?f>O.value:L>new Date(O.value)),ue(D.value)&&f&&(R=Z?J(f)<J(D.value):se?f<D.value:L<new Date(D.value))}if((N||R)&&(G(!!N,O.message,D.message,ge.max,ge.min),!r))return T(x[I].message),x}if((S||m)&&!F&&(ue(f)||s&&Array.isArray(f))){const N=Re(S),R=Re(m),O=!re(N.value)&&f.length>+N.value,D=!re(R.value)&&f.length<+R.value;if((O||D)&&(G(O,N.message,R.message),!r))return T(x[I].message),x}if(j&&!F&&ue(f)){const{value:N,message:R}=Re(j);if(Qe(N)&&!f.match(N)&&(x[I]={type:ge.pattern,message:R,ref:o,...K(ge.pattern,R)},!r))return T(R),x}if(q){if(oe(q)){const N=await q(f,n),R=Gn(N,b);if(R&&(x[I]={...R,...K(ge.validate,R.message)},!r))return T(R.message),x}else if($(q)){let N={};for(const R in q){if(!ne(N)&&!r)break;const O=Gn(await q[R](f,n),b,R);O&&(N={...O,...K(R,O.message)},T(O.message),r&&(x[I]=N))}if(!ne(N)&&(x[I]={ref:b,...N},!r))return x}}return T(!0),x};const Vt={mode:ie.onSubmit,reValidateMode:ie.onChange,shouldFocusError:!0};function Tt(e={}){let t={...Vt,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:oe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let a=$(t.defaultValues)||$(t.values)?X(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:X(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,S=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let w={...m};const E={array:On(),state:On()},j=Bn(t.mode),q=Bn(t.reValidateMode),I=t.criteriaMode===ie.all,v=l=>i=>{clearTimeout(S),S=setTimeout(l,i)},y=async l=>{if(!t.disabled&&(m.isValid||w.isValid||l)){const i=t.resolver?ne((await F()).errors):await G(r,!0);i!==n.isValid&&E.state.next({isValid:i})}},f=(l,i)=>{!t.disabled&&(m.isValidating||m.validatingFields||w.isValidating||w.validatingFields)&&((l||Array.from(d.mount)).forEach(u=>{u&&(i?P(n.validatingFields,u,i):z(n.validatingFields,u))}),E.state.next({validatingFields:n.validatingFields,isValidating:!ne(n.validatingFields)}))},b=(l,i=[],u,p,c=!0,g=!0)=>{if(p&&u&&!t.disabled){if(o.action=!0,g&&Array.isArray(k(r,l))){const A=u(k(r,l),p.argA,p.argB);c&&P(r,l,A)}if(g&&Array.isArray(k(n.errors,l))){const A=u(k(n.errors,l),p.argA,p.argB);c&&P(n.errors,l,A),St(n.errors,l)}if((m.touchedFields||w.touchedFields)&&g&&Array.isArray(k(n.touchedFields,l))){const A=u(k(n.touchedFields,l),p.argA,p.argB);c&&P(n.touchedFields,l,A)}(m.dirtyFields||w.dirtyFields)&&(n.dirtyFields=xe(a,s)),E.state.next({name:l,isDirty:R(l,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else P(s,l,i)},T=(l,i)=>{P(n.errors,l,i),E.state.next({errors:n.errors})},x=l=>{n.errors=l,E.state.next({errors:n.errors,isValid:!1})},W=(l,i,u,p)=>{const c=k(r,l);if(c){const g=k(s,l,H(u)?k(a,l):u);H(g)||p&&p.defaultChecked||i?P(s,l,i?g:Fn(c._f)):L(l,g),o.mount&&y()}},M=(l,i,u,p,c)=>{let g=!1,A=!1;const B={name:l};if(!t.disabled){if(!u||p){(m.isDirty||w.isDirty)&&(A=n.isDirty,n.isDirty=B.isDirty=R(),g=A!==B.isDirty);const Y=ce(k(a,l),i);A=!!k(n.dirtyFields,l),Y?z(n.dirtyFields,l):P(n.dirtyFields,l,!0),B.dirtyFields=n.dirtyFields,g=g||(m.dirtyFields||w.dirtyFields)&&A!==!Y}if(u){const Y=k(n.touchedFields,l);Y||(P(n.touchedFields,l,u),B.touchedFields=n.touchedFields,g=g||(m.touchedFields||w.touchedFields)&&Y!==u)}g&&c&&E.state.next(B)}return g?B:{}},C=(l,i,u,p)=>{const c=k(n.errors,l),g=(m.isValid||w.isValid)&&le(i)&&n.isValid!==i;if(t.delayError&&u?(h=v(()=>T(l,u)),h(t.delayError)):(clearTimeout(S),h=null,u?P(n.errors,l,u):z(n.errors,l)),(u?!ce(c,u):c)||!ne(p)||g){const A={...p,...g&&le(i)?{isValid:i}:{},errors:n.errors,name:l};n={...n,...A},E.state.next(A)}},F=async l=>{f(l,!0);const i=await t.resolver(s,t.context,pt(l||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return f(l),i},K=async l=>{const{errors:i}=await F(l);if(l)for(const u of l){const p=k(i,u);p?P(n.errors,u,p):z(n.errors,u)}else n.errors=i;return i},G=async(l,i,u={valid:!0})=>{for(const p in l){const c=l[p];if(c){const{_f:g,...A}=c;if(g){const B=d.array.has(g.name),Y=c._f&&Et(c._f);Y&&m.validatingFields&&f([p],!0);const ee=await Mn(c,d.disabled,s,I,t.shouldUseNativeValidation&&!i,B);if(Y&&m.validatingFields&&f([p]),ee[g.name]&&(u.valid=!1,i))break;!i&&(k(ee,g.name)?B?wt(n.errors,ee,g.name):P(n.errors,g.name,ee[g.name]):z(n.errors,g.name))}!ne(A)&&await G(A,i,u)}}return u.valid},N=()=>{for(const l of d.unMount){const i=k(r,l);i&&(i._f.refs?i._f.refs.every(u=>!gn(u)):!gn(i._f.ref))&&pe(l)}d.unMount=new Set},R=(l,i)=>!t.disabled&&(l&&i&&P(s,l,i),!ce(he(),a)),O=(l,i,u)=>Or(l,d,{...o.mount?s:H(i)?a:ue(l)?{[l]:i}:i},u,i),D=l=>nn(k(o.mount?s:a,l,t.shouldUnregister?k(a,l,[]):[])),L=(l,i,u={})=>{const p=k(r,l);let c=i;if(p){const g=p._f;g&&(!g.disabled&&P(s,l,Dr(i,g)),c=Ze(g.ref)&&re(i)?"":i,qr(g.ref)?[...g.ref.options].forEach(A=>A.selected=c.includes(A.value)):g.refs?Me(g.ref)?g.refs.length>1?g.refs.forEach(A=>(!A.defaultChecked||!A.disabled)&&(A.checked=Array.isArray(c)?!!c.find(B=>B===A.value):c===A.value)):g.refs[0]&&(g.refs[0].checked=!!c):g.refs.forEach(A=>A.checked=A.value===c):Nn(g.ref)?g.ref.value="":(g.ref.value=c,g.ref.type||E.state.next({name:l,values:X(s)})))}(u.shouldDirty||u.shouldTouch)&&M(l,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Q(l)},J=(l,i,u)=>{for(const p in i){const c=i[p],g=`${l}.${p}`,A=k(r,g);(d.array.has(l)||$(c)||A&&!A._f)&&!ye(c)?J(g,c,u):L(g,c,u)}},Z=(l,i,u={})=>{const p=k(r,l),c=d.array.has(l),g=X(i);P(s,l,g),c?(E.array.next({name:l,values:X(s)}),(m.isDirty||m.dirtyFields||w.isDirty||w.dirtyFields)&&u.shouldDirty&&E.state.next({name:l,dirtyFields:xe(a,s),isDirty:R(l,g)})):p&&!p._f&&!re(g)?J(l,g,u):L(l,g,u),Ln(l,d)&&E.state.next({...n}),E.state.next({name:o.mount?l:void 0,values:X(s)})},se=async l=>{o.mount=!0;const i=l.target;let u=i.name,p=!0;const c=k(r,u),g=A=>{p=Number.isNaN(A)||ye(A)&&isNaN(A.getTime())||ce(A,k(s,u,A))};if(c){let A,B;const Y=i.type?Fn(c._f):Sr(l),ee=l.type===Je.BLUR||l.type===Je.FOCUS_OUT,zr=!_t(c._f)&&!t.resolver&&!k(n.errors,u)&&!c._f.deps||Rt(ee,k(n.touchedFields,u),n.isSubmitted,q,j),on=Ln(u,d,ee);P(s,u,Y),ee?(c._f.onBlur&&c._f.onBlur(l),h&&h(0)):c._f.onChange&&c._f.onChange(l);const un=M(u,Y,ee),Wr=!ne(un)||on;if(!ee&&E.state.next({name:u,type:l.type,values:X(s)}),zr)return(m.isValid||w.isValid)&&(t.mode==="onBlur"?ee&&y():ee||y()),Wr&&E.state.next({name:u,...on?{}:un});if(!ee&&on&&E.state.next({...n}),t.resolver){const{errors:Tn}=await F([u]);if(g(Y),p){const Jr=Kn(n.errors,r,u),jn=Kn(Tn,r,Jr.name||u);A=jn.error,u=jn.name,B=ne(Tn)}}else f([u],!0),A=(await Mn(c,d.disabled,s,I,t.shouldUseNativeValidation))[u],f([u]),g(Y),p&&(A?B=!1:(m.isValid||w.isValid)&&(B=await G(r,!0)));p&&(c._f.deps&&Q(c._f.deps),C(u,B,A,un))}},de=(l,i)=>{if(k(n.errors,i)&&l.focus)return l.focus(),1},Q=async(l,i={})=>{let u,p;const c=Be(l);if(t.resolver){const g=await K(H(l)?l:c);u=ne(g),p=l?!c.some(A=>k(g,A)):u}else l?(p=(await Promise.all(c.map(async g=>{const A=k(r,g);return await G(A&&A._f?{[g]:A}:A)}))).every(Boolean),!(!p&&!n.isValid)&&y()):p=u=await G(r);return E.state.next({...!ue(l)||(m.isValid||w.isValid)&&u!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:u}:{},errors:n.errors}),i.shouldFocus&&!p&&De(r,de,l?c:d.mount),p},he=l=>{const i={...o.mount?s:a};return H(l)?i:ue(l)?k(i,l):l.map(u=>k(i,u))},me=(l,i)=>({invalid:!!k((i||n).errors,l),isDirty:!!k((i||n).dirtyFields,l),error:k((i||n).errors,l),isValidating:!!k(n.validatingFields,l),isTouched:!!k((i||n).touchedFields,l)}),an=l=>{l&&Be(l).forEach(i=>z(n.errors,i)),E.state.next({errors:l?n.errors:{}})},Ce=(l,i,u)=>{const p=(k(r,l,{_f:{}})._f||{}).ref,c=k(n.errors,l)||{},{ref:g,message:A,type:B,...Y}=c;P(n.errors,l,{...Y,...i,ref:p}),E.state.next({name:l,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&p&&p.focus&&p.focus()},sn=(l,i)=>oe(l)?E.state.subscribe({next:u=>l(O(void 0,i),u)}):O(l,i,!0),Ue=l=>E.state.subscribe({next:i=>{Nt(l.name,i.name,l.exact)&&At(i,l.formState||m,Oe,l.reRenderRoot)&&l.callback({values:{...s},...n,...i})}}).unsubscribe,ln=l=>(o.mount=!0,w={...w,...l.formState},Ue({...l,formState:w})),pe=(l,i={})=>{for(const u of l?Be(l):d.mount)d.mount.delete(u),d.array.delete(u),i.keepValue||(z(r,u),z(s,u)),!i.keepError&&z(n.errors,u),!i.keepDirty&&z(n.dirtyFields,u),!i.keepTouched&&z(n.touchedFields,u),!i.keepIsValidating&&z(n.validatingFields,u),!t.shouldUnregister&&!i.keepDefaultValue&&z(a,u);E.state.next({values:X(s)}),E.state.next({...n,...i.keepDirty?{isDirty:R()}:{}}),!i.keepIsValid&&y()},Ve=({disabled:l,name:i})=>{(le(l)&&o.mount||l||d.disabled.has(i))&&(l?d.disabled.add(i):d.disabled.delete(i))},ve=(l,i={})=>{let u=k(r,l);const p=le(i.disabled)||le(t.disabled);return P(r,l,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:l}},name:l,mount:!0,...i}}),d.mount.add(l),u?Ve({disabled:le(i.disabled)?i.disabled:t.disabled,name:l}):W(l,!0,i.value),{...p?{disabled:i.disabled||t.disabled}:{},...t.progressive?{required:!!i.required,min:qe(i.min),max:qe(i.max),minLength:qe(i.minLength),maxLength:qe(i.maxLength),pattern:qe(i.pattern)}:{},name:l,onChange:se,onBlur:se,ref:c=>{if(c){ve(l,i),u=k(r,l);const g=H(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,A=yt(g),B=u._f.refs||[];if(A?B.find(Y=>Y===g):g===u._f.ref)return;P(r,l,{_f:{...u._f,...A?{refs:[...B.filter(gn),g,...Array.isArray(k(a,l))?[{}]:[]],ref:{type:g.type,name:l}}:{ref:g}}}),W(l,!1,void 0,g)}else u=k(r,l,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(wr(d.array,l)&&o.action)&&d.unMount.add(l)}}},Ee=()=>t.shouldFocusError&&De(r,de,d.mount),Te=l=>{le(l)&&(E.state.next({disabled:l}),De(r,(i,u)=>{const p=k(r,u);p&&(i.disabled=p._f.disabled||l,Array.isArray(p._f.refs)&&p._f.refs.forEach(c=>{c.disabled=p._f.disabled||l}))},0,!1))},ke=(l,i)=>async u=>{let p;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=X(s);if(E.state.next({isSubmitting:!0}),t.resolver){const{errors:g,values:A}=await F();n.errors=g,c=A}else await G(r);if(d.disabled.size)for(const g of d.disabled)P(c,g,void 0);if(z(n.errors,"root"),ne(n.errors)){E.state.next({errors:{}});try{await l(c,u)}catch(g){p=g}}else i&&await i({...n.errors},u),Ee(),setTimeout(Ee);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ne(n.errors)&&!p,submitCount:n.submitCount+1,errors:n.errors}),p)throw p},_e=(l,i={})=>{k(r,l)&&(H(i.defaultValue)?Z(l,X(k(a,l))):(Z(l,i.defaultValue),P(a,l,X(i.defaultValue))),i.keepTouched||z(n.touchedFields,l),i.keepDirty||(z(n.dirtyFields,l),n.isDirty=i.defaultValue?R(l,X(k(a,l))):R()),i.keepError||(z(n.errors,l),m.isValid&&y()),E.state.next({...n}))},Ae=(l,i={})=>{const u=l?X(l):a,p=X(u),c=ne(l),g=c?a:p;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues){const A=new Set([...d.mount,...Object.keys(xe(a,s))]);for(const B of Array.from(A))k(n.dirtyFields,B)?P(g,B,k(s,B)):Z(B,k(g,B))}else{if(En&&H(l))for(const A of d.mount){const B=k(r,A);if(B&&B._f){const Y=Array.isArray(B._f.refs)?B._f.refs[0]:B._f.ref;if(Ze(Y)){const ee=Y.closest("form");if(ee){ee.reset();break}}}}for(const A of d.mount)Z(A,k(g,A))}s=X(g),E.array.next({values:{...g}}),E.state.next({values:{...g}})}d={mount:i.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!m.isValid||!!i.keepIsValid||!!i.keepDirtyValues,o.watch=!!t.shouldUnregister,E.state.next({submitCount:i.keepSubmitCount?n.submitCount:0,isDirty:c?!1:i.keepDirty?n.isDirty:!!(i.keepDefaultValues&&!ce(l,a)),isSubmitted:i.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&s?xe(a,s):n.dirtyFields:i.keepDefaultValues&&l?xe(a,l):i.keepDirty?n.dirtyFields:{},touchedFields:i.keepTouched?n.touchedFields:{},errors:i.keepErrors?n.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Ne=(l,i)=>Ae(oe(l)?l(s):l,i),je=(l,i={})=>{const u=k(r,l),p=u&&u._f;if(p){const c=p.refs?p.refs[0]:p.ref;c.focus&&(c.focus(),i.shouldSelect&&oe(c.select)&&c.select())}},Oe=l=>{n={...n,...l}},Vn={control:{register:ve,unregister:pe,getFieldState:me,handleSubmit:ke,setError:Ce,_subscribe:Ue,_runSchema:F,_getWatch:O,_getDirty:R,_setValid:y,_setFieldArray:b,_setDisabledField:Ve,_setErrors:x,_getFieldArray:D,_reset:Ae,_resetDefaultValues:()=>oe(t.defaultValues)&&t.defaultValues().then(l=>{Ne(l,t.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:N,_disableForm:Te,_subjects:E,_proxyFormState:m,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(l){o=l},get _defaultValues(){return a},get _names(){return d},set _names(l){d=l},get _formState(){return n},get _options(){return t},set _options(l){t={...t,...l}}},subscribe:ln,trigger:Q,register:ve,handleSubmit:ke,watch:sn,setValue:Z,getValues:he,reset:Ne,resetField:_e,clearErrors:an,unregister:pe,setError:Ce,setFocus:je,getFieldState:me};return{...Vn,formControl:Vn}}function jt(e={}){const t=_.useRef(void 0),n=_.useRef(void 0),[r,a]=_.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:Tt(e),formState:r},e.formControl&&e.defaultValues&&!oe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,An(()=>{const o=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),s._formState.isReady=!0,o},[s]),_.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),_.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!ne(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),_.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),_.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),_.useEffect(()=>{e.values&&!ce(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[s,e.values]),_.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=jr(r,s),t.current}function Kr(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const Pn=globalThis!=null&&globalThis.document?V.useLayoutEffect:()=>{};var Ot=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const xt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ot(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const It=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=qt(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ft(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Dt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Lt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Dt(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Kt(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Mt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pt={error:Gt,warning:It,info:Bt,success:Xr},Ct=V.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:h=!1,closeButton:S=!1,onClose:m}=e,w=Mt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:E}=we(),j=yr("Alert"),q=Pt[a];return _.createElement("div",Object.assign({},w,{ref:t,className:E(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":h,"navds-alert--close-button":S})}),_.createElement(q,{title:j(a),className:E("navds-alert__icon")}),_.createElement(br,{as:"div",size:s,className:E("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),S&&!h&&_.createElement("div",{className:E("navds-alert__button-wrapper")},_.createElement(hr,{className:E("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:_.createElement(Qr,{title:["error","warning"].includes(a)?j("closeAlert"):j("closeMessage")})})))});var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht=V.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:h}=pr(e,"select"),{children:S,label:m,className:w,description:E,htmlSize:j,hideLabel:q=!1,style:I}=e,v=Ut(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:y}=we(),f={onMouseDown:b=>{h&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{h&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return _.createElement("div",{className:y(w,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":h,"navds-select--error":s,"navds-select--readonly":h})},_.createElement(bn,{htmlFor:n.id,size:o,className:y("navds-form-field__label",{"navds-sr-only":q})},h&&_.createElement(et,null),m),!!E&&_.createElement(Ge,{className:y("navds-form-field__description",{"navds-sr-only":q}),id:d,size:o,as:"div"},E),_.createElement("div",{className:y("navds-select__container"),style:I},_.createElement("select",Object.assign({},Er(v,["error","errorId","size","readOnly"]),n,f,{ref:t,className:y("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:j}),S),_.createElement(xt,{className:y("navds-select__chevron"),"aria-hidden":!0})),_.createElement("div",{className:y("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&_.createElement(_r,{size:o,showIcon:!0},e.error)))});var $t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Yt=V.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=$t(e,["as","className","underline","variant","inlineText"]);const{cn:h}=we();return _.createElement(n,Object.assign({},d,{ref:t,className:h("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Wt=V.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=zt(e,["children","className","variant","size","icon"]);const{cn:h}=we(),S=(a==null?void 0:a.endsWith("-filled"))&&"strong",m=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",w=a==null?void 0:a.replace("-filled","").replace("-moderate","");return _.createElement(Ge,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:h("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${S||m||"outline"}`,`navds-tag--${w}`)}),o&&_.createElement("span",{className:h("navds-tag__icon--left")},o),n)});var Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Un=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function He(e){return parseInt(e,10)||0}const Zt=V.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:h,style:S,value:m}=e,w=Jt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:E}=V.useRef(m!=null),j=V.useRef(null),q=nt(j,t),I=V.useRef(null),v=V.useRef(0),[y,f]=V.useState({outerHeightStyle:0}),b=_.useCallback(()=>{const M=j.current,F=Un(M).getComputedStyle(M);if(F.width==="0px")return{outerHeightStyle:0};const K=I.current;K.style.width=F.width,K.value=M.value||w.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const G=F.boxSizing,N=He(F.paddingBottom)+He(F.paddingTop),R=He(F.borderBottomWidth)+He(F.borderTopWidth),O=K.scrollHeight-N;K.value="x";const D=K.scrollHeight-N;let L=O;d&&(L=Math.max(Number(d)*D,L)),o&&(L=Math.min(Number(o)*D,L)),L=Math.max(L,D);const J=L+(G==="border-box"?N+R:0),Z=Math.abs(L-O)<=1;return{outerHeightStyle:J,overflow:Z}},[o,d,w.placeholder]),T=()=>{const M=b();Hn(M)||f(C=>Cn(C,M,v))};Pn(()=>{const M=()=>{const N=b();Hn(N)||Zr.flushSync(()=>{f(R=>Cn(R,N,v))})},C=Kr(()=>{var N,R,O;if(v.current=0,!((N=j.current)===null||N===void 0)&&N.style.height||!((R=j.current)===null||R===void 0)&&R.style.width){((O=j.current)===null||O===void 0?void 0:O.style.overflow)==="hidden"&&f(D=>Object.assign(Object.assign({},D),{overflow:!1}));return}M()},166,!0),F=j.current,K=Un(F);K.addEventListener("resize",C);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(C),G.observe(F)),()=>{C.clear(),K.removeEventListener("resize",C),G&&G.disconnect()}},[b]),Pn(()=>{T()}),V.useEffect(()=>{v.current=0},[m]);const x=M=>{v.current=0,E||T(),s&&s(M)},W=Object.assign({"--__ac-textarea-height":y.outerHeightStyle+"px","--__axc-textarea-height":y.outerHeightStyle+"px",overflow:y.overflow&&!h&&!(!((n=j.current)===null||n===void 0)&&n.style.height)&&!(!((r=j.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},S);return _.createElement(_.Fragment,null,_.createElement("textarea",Object.assign({value:m,onChange:x,ref:q,rows:d,style:W},w,{className:a})),_.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:I,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},S)}))});function Hn(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=we(),o=yr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=t-n,[h,S]=V.useState(d);return V.useEffect(()=>{const m=Kr(()=>{S(d)},2e3);return m(),()=>{m.clear()}},[d]),_.createElement(_.Fragment,null,_.createElement("span",{id:e,className:s("navds-sr-only")},o("maxLength",{maxLength:t})),d<20&&_.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},$n(h,o)),_.createElement(Ge,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},$n(d,o)))},$n=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ea=V.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:h,size:S,inputDescriptionId:m}=pr(e,"textarea"),{label:w,className:E,description:j,maxLength:q,hideLabel:I=!1,resize:v,UNSAFE_autoScrollbar:y,i18n:f,readOnly:b}=e,T=Qt(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:x}=we(),W=rt(),M=q!==void 0&&q>0,[C,F]=V.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),K=()=>{let N=T!=null&&T.minRows?T==null?void 0:T.minRows:3;return S==="small"&&(N=T!=null&&T.minRows?T==null?void 0:T.minRows:2),N},G=tt(s["aria-describedby"],{[W??""]:M});return _.createElement("div",{className:x(E,"navds-form-field",`navds-form-field--${S}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":h,"navds-textarea--autoscrollbar":y,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},_.createElement(bn,{htmlFor:s.id,size:S,className:x("navds-form-field__label",{"navds-sr-only":I})},b&&_.createElement(at,null),w),!!j&&_.createElement(Ge,{className:x("navds-form-field__description",{"navds-sr-only":I}),id:m,size:S,as:"div"},j),_.createElement(Zt,Object.assign({},Er(T,["error","errorId","size"]),s,{onChange:st(e.onChange,e.value===void 0?N=>F(N.target.value):void 0),minRows:K(),autoScrollbar:y,ref:t,readOnly:b,className:x("navds-textarea__input","navds-body-short",`navds-body-short--${S??"medium"}`)},G?{"aria-describedby":G}:{})),M&&!b&&!s.disabled&&_.createElement(Xt,{maxLengthId:W,maxLength:q,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:C.length,size:S,i18n:f}),_.createElement("div",{className:x("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&_.createElement(_r,{size:S,showIcon:!0},e.error)))});function na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yn={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function ra(){if(zn)return Ie;zn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Ie.Fragment=t,Ie.jsx=n,Ie.jsxs=n,Ie}var Wn;function ta(){return Wn||(Wn=1,Yn.exports=ra()),Yn.exports}var Le=ta();const aa=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Le.jsx(Ct,{variant:"warning",size:"small",children:Le.jsx(hn,{gap:"2",children:_.Children.map(e,t=>Le.jsx(Ge,{size:"small",children:t},lt(t)?t.key:t))})}),rn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};be(rn);var Jn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zn;function sa(){return Zn||(Zn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Jn)),Jn.exports}var la=sa();const Sn=na(la),ia="_borderbox_1vkvn_1",oa="_error_1vkvn_5",ua="_warning_1vkvn_8",da={borderbox:ia,error:oa,warning:ua};Sn.bind(da);const ga="_aksjonspunkt_kn1hn_1",fa="_erAksjonspunktApent_kn1hn_4",ca="_erIkkeGodkjentAvBeslutter_kn1hn_8",ma={aksjonspunkt:ga,erAksjonspunktApent:fa,erIkkeGodkjentAvBeslutter:ca};Sn.bind(ma);be(rn);be(rn);const va="_divider_1t980_1",ka="_dividerParagraf_1t980_8",ya="_leftPanel_1t980_11",ba="_rightPanel_1t980_14",ha={divider:va,dividerParagraf:ka,leftPanel:ya,rightPanel:ba};Sn.bind(ha);const pa=()=>Le.jsx("span",{"data-testid":"editedIcon",children:Le.jsx(Lt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});be(rn);function Ea(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xn={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn;function _a(){if(Qn)return Fe;Qn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Fe.Fragment=t,Fe.jsx=n,Fe.jsxs=n,Fe}var er;function Aa(){return er||(er=1,Xn.exports=_a()),Xn.exports}var te=Aa();const Gr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Mr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var vn={exports:{}},Na=vn.exports,nr;function Ra(){return nr||(nr=1,function(e,t){(function(n,r){e.exports=r()})(Na,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,h={},S=function(v){return(v=+v)+(v>68?1900:2e3)},m=function(v){return function(y){this[v]=+y}},w=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(y){if(!y||y==="Z")return 0;var f=y.match(/([+-]|\d\d)/g),b=60*f[1]+(+f[2]||0);return b===0?0:f[0]==="+"?-b:b}(v)}],E=function(v){var y=h[v];return y&&(y.indexOf?y:y.s.concat(y.f))},j=function(v,y){var f,b=h.meridiem;if(b){for(var T=1;T<=24;T+=1)if(v.indexOf(b(T,0,y))>-1){f=T>12;break}}else f=v===(y?"pm":"PM");return f},q={A:[d,function(v){this.afternoon=j(v,!1)}],a:[d,function(v){this.afternoon=j(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[s,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[o,m("seconds")],ss:[o,m("seconds")],m:[o,m("minutes")],mm:[o,m("minutes")],H:[o,m("hours")],h:[o,m("hours")],HH:[o,m("hours")],hh:[o,m("hours")],D:[o,m("day")],DD:[s,m("day")],Do:[d,function(v){var y=h.ordinal,f=v.match(/\d+/);if(this.day=f[0],y)for(var b=1;b<=31;b+=1)y(b).replace(/\[|\]/g,"")===v&&(this.day=b)}],w:[o,m("week")],ww:[s,m("week")],M:[o,m("month")],MM:[s,m("month")],MMM:[d,function(v){var y=E("months"),f=(E("monthsShort")||y.map(function(b){return b.slice(0,3)})).indexOf(v)+1;if(f<1)throw new Error;this.month=f%12||f}],MMMM:[d,function(v){var y=E("months").indexOf(v)+1;if(y<1)throw new Error;this.month=y%12||y}],Y:[/[+-]?\d+/,m("year")],YY:[s,function(v){this.year=S(v)}],YYYY:[/\d{4}/,m("year")],Z:w,ZZ:w};function I(v){var y,f;y=v,f=h&&h.formats;for(var b=(v=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,G,N){var R=N&&N.toUpperCase();return G||f[N]||n[N]||f[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,D,L){return D||L.slice(1)})})).match(r),T=b.length,x=0;x<T;x+=1){var W=b[x],M=q[W],C=M&&M[0],F=M&&M[1];b[x]=F?{regex:C,parser:F}:W.replace(/^\[|\]$/g,"")}return function(K){for(var G={},N=0,R=0;N<T;N+=1){var O=b[N];if(typeof O=="string")R+=O.length;else{var D=O.regex,L=O.parser,J=K.slice(R),Z=D.exec(J)[0];L.call(G,Z),K=K.replace(Z,"")}}return function(se){var de=se.afternoon;if(de!==void 0){var Q=se.hours;de?Q<12&&(se.hours+=12):Q===12&&(se.hours=0),delete se.afternoon}}(G),G}}return function(v,y,f){f.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(S=v.parseTwoDigitYear);var b=y.prototype,T=b.parse;b.parse=function(x){var W=x.date,M=x.utc,C=x.args;this.$u=M;var F=C[1];if(typeof F=="string"){var K=C[2]===!0,G=C[3]===!0,N=K||G,R=C[2];G&&(R=C[2]),h=this.$locale(),!K&&R&&(h=f.Ls[R]),this.$d=function(J,Z,se,de){try{if(["x","X"].indexOf(Z)>-1)return new Date((Z==="X"?1e3:1)*J);var Q=I(Z)(J),he=Q.year,me=Q.month,an=Q.day,Ce=Q.hours,sn=Q.minutes,Ue=Q.seconds,ln=Q.milliseconds,pe=Q.zone,Ve=Q.week,ve=new Date,Ee=an||(he||me?1:ve.getDate()),Te=he||ve.getFullYear(),ke=0;he&&!me||(ke=me>0?me-1:ve.getMonth());var _e,Ae=Ce||0,Ne=sn||0,je=Ue||0,Oe=ln||0;return pe?new Date(Date.UTC(Te,ke,Ee,Ae,Ne,je,Oe+60*pe.offset*1e3)):se?new Date(Date.UTC(Te,ke,Ee,Ae,Ne,je,Oe)):(_e=new Date(Te,ke,Ee,Ae,Ne,je,Oe),Ve&&(_e=de(_e).week(Ve).toDate()),_e)}catch{return new Date("")}}(W,F,M,f),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),N&&W!=this.format(F)&&(this.$d=new Date("")),h={}}else if(F instanceof Array)for(var O=F.length,D=1;D<=O;D+=1){C[1]=F[D-1];var L=f.apply(this,C);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}D===O&&(this.$d=new Date(""))}else T.call(this,x)}}})}(vn)),vn.exports}var Sa=Ra();const wa=Ea(Sa),Va="_textarea_1snk6_1",Ta="_readOnlyField_1snk6_7",rr={textarea:Va,readOnlyField:Ta},ja=e=>e!=null&&e!=="",Pr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>ja(t)?te.jsxs(hn,{gap:"1",children:[e&&!a&&te.jsx(bn,{size:s,children:e}),te.jsxs(Ar,{gap:"2",align:"center",wrap:!1,children:[te.jsx(br,{className:r==="textarea"?rr.textarea:rr.readOnlyField,size:s,children:t}),n&&te.jsx(pa,{})]})]}):null;pn.extend(wa);const tr=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:h,className:S,hideLabel:m,isEdited:w,size:E})=>{const{formState:{errors:j}}=Pe(),{field:q}=xr({name:e,rules:{validate:V.useMemo(()=>Gr(r),[r])}});if(a){const y=n.map(b=>b.props).find(b=>b.value===q.value),f=y?y.children:void 0;return te.jsx(Pr,{value:f,label:t,hideLabel:m,isEdited:w,size:E})}const I=q.value||"",v=!n.map(y=>y.props.value).includes(I)&&I!=="";return v&&console.warn(`No corresponding option found for value '${I}'`),te.jsxs(Ht,{size:"small",className:S,error:Mr(j,e),label:t,description:s,value:o&&h||v?"":q.value,disabled:h,onChange:y=>{d&&d(y),q.onChange(y)},hideLabel:m,children:[te.jsx("option",{style:{display:"none"}}),",",n]})},Oa="_textAreaFieldWithBadges_bdz0b_1",xa="_etikettWrapper_bdz0b_4",ar={textAreaFieldWithBadges:Oa,etikettWrapper:xa},qa=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=w=>w,className:d,description:h,isEdited:S,...m})=>{const{formState:{errors:w}}=Pe(),{field:E}=xr({name:e,rules:{validate:V.useMemo(()=>Gr(s),[s])}});return n?te.jsx(Pr,{label:t,value:E.value,type:"textarea",isEdited:S,hideLabel:m.hideLabel}):te.jsxs("div",{className:a?ar.textAreaFieldWithBadges:null,children:[a&&te.jsx("div",{className:ar.etikettWrapper,children:a.map(({type:j,titleText:q})=>te.jsx(Wt,{variant:j,size:"small",children:q},q))}),te.jsx(ea,{size:"small",label:t,description:h,className:d,autoComplete:"off",...E,onChange:j=>E.onChange(j.currentTarget.value!==""?o(j.currentTarget.value):null),value:E.value?E.value:"",error:Mr(w,e),maxLength:r,...m})]})},Ia=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return V.useEffect(()=>()=>{a&&a(o())},[]),te.jsx(ct,{...e,children:te.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Cr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kn={exports:{}},Fa=kn.exports,sr;function Ba(){return sr||(sr=1,function(e,t){(function(n,r){e.exports=r()})(Fa,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(kn)),kn.exports}var Da=Ba();const La=Cr(Da);var yn={exports:{}},Ka=yn.exports,lr;function Ga(){return lr||(lr=1,function(e,t){(function(n,r){e.exports=r()})(Ka,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(yn)),yn.exports}var Ma=Ga();const Pa=Cr(Ma),Ca="Dato må være før eller lik {limit}",Ua="Dato må være etter eller lik {limit}",Ha="Perioder kan ikke overlappe i tid",$a="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Ya="Dato må være lik {value}",za="Dato må skrives slik: dd.mm.åååå",Wa="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Ja="Tallet kan ikke inneholde mer enn to desimaler",Za="Tallet kan ikke ha desimaler",Xa="Feltet kan kun inneholde tall",Qa="Ugyldig fødselsnummer",es="Feltet må være et fødselsnummer (11 siffer)",ns="Ugyldig organisasjonsnummer.",rs="Ugyldig organisasjonsnummer eller fødselsnummer",ts="Startdato må være før eller lik sluttdato",as="Periode er utenfor opptjeningsperioden",ss="Ugyldig saksnummer eller fødselsnummer",ls="Feltet inneholder ugyldige tegn: {text}",is="Feltet inneholder en ugyldig verdi: {value}",os="Feltet kan ikke inneholde mellomrom",us="Feltet må fylles ut",ds="Du kan skrive maksimalt {length} tegn",gs="Du må skrive minst {length} tegn",fs="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",cs="Feltet må være mindre eller lik {length}",ms="Feltet må være større eller lik {length}",vs="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",ks={DateNotBeforeOrEqual:Ca,DateNotAfterOrEqual:Ua,DateRangesOverlapping:Ha,DateRangesOverlappingPeriodTypes:$a,DatesNotEqual:Ya,InvalidDate:za,InvalidDatesInPeriod:Wa,InvalidDecimal:Ja,InvalidInteger:Za,InvalidNumber:Xa,InvalidFodselsnr:Qa,InvalidFodselsnrFormat:es,InvalidOrgnr:ns,InvalidOrgnrOrFodselsnr:rs,InvalidPeriod:ts,InvalidPeriodRange:as,InvalidSaksnrOrFodselsnrFormat:ss,InvalidText:ls,InvalidValue:is,IllegalWhiteSpace:os,IsRequired:us,MaxLength:ds,MinLength:gs,MaxLengthOrFodselsnr:fs,MaxValue:cs,MinValue:ms,SammeFodselsnrSomSoker:vs},{formatMessage:tn}=be(ks),ys=e=>tn({id:"InvalidText"},{text:e}),bs=()=>tn({id:"IsRequired"}),hs=e=>tn({id:"MaxLength"},{length:e}),ps=e=>tn({id:"MinLength"},{length:e}),Es=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,_s=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,wn=e=>e==null||e.toString().trim().length===0;pn.extend(La);pn.extend(Pa);const fn=e=>wn(e)?bs():void 0,As=e=>t=>wn(t)||t.toString().trim().length>=e?null:ps(e),Ur=e=>t=>wn(t)||t.toString().trim().length<=e?null:hs(e),Ns=e=>{if(!Es.test(e)){const t=e.replace(_s,"");return ys(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Rs=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Ss="_ukjentAdresseMargins_4teno_1",ws={ukjentAdresseMargins:Ss},Vs={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Ts=be(Vs),Hr=()=>U.jsx(Nr,{value:Ts,children:U.jsx("div",{className:ws.ukjentAdresseMargins,children:U.jsx(aa,{children:U.jsx("b",{children:U.jsx(cn,{id:"UkjentAdresse.Text"})})})})});Hr.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const js="_bredde_jav4h_9",ir={bredde:js},Os=Ur(4e3),xs=Ur(1e4),qs=As(3),Is=e=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Fs=(e,t)=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.FRITEKST||e===ae.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ae.VARSEL_OM_TILBAKEKREVING||e===ae.TBK_INNHENTE_OPPLYSNINGER||e===ae.VARSEL_OM_REVURDERING&&t===fe.ANNET,Bs=(e,t)=>t===Se.ENGANGSSTONAD?e.filter(n=>n.kode===fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===fe.ANNET):t===Se.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==fe.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,Ds=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ae.VARSEL_OM_REVURDERING}:{...t}},Ls=e=>{const t=e;return e.brevmalkode===ae.VARSEL_OM_REVURDERING&&t.arsakskode!==fe.ANNET&&(t.fritekst=" "),t},$r=({behandling:e,forhåndsvisBrev:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:h})=>{const S=it(),m=jt({defaultValues:o??Ds(e)}),w=m.watch("brevmalkode"),E=m.watch("fritekst"),j=m.watch("arsakskode"),q=Bs(r,a);if(!e.språkkode)return null;const{formState:I}=m,v=b=>{w&&E?t({brevmalkode:w,fritekst:E,arsakskode:j}):E||m.setError("fritekst",{type:"manual",message:S.formatMessage({id:"Messages.FritekstRequired"})}),b.preventDefault()},y=ot(e.språkkode),f=w===ae.VARSEL_OM_REVURDERING;return U.jsx(Ia,{formMethods:m,onSubmit:b=>n(Ls(b)),setDataOnUnmount:d,children:U.jsxs(hn,{gap:"4",children:[U.jsx(tr,{name:"brevmalkode",label:S.formatMessage({id:"Messages.Template"}),validate:[fn],selectValues:e.brevmaler.map(b=>U.jsx("option",{value:b.kode,disabled:!b.tilgjengelig,children:b.navn},b.kode)),className:ir.bredde}),f&&U.jsx(tr,{name:"arsakskode",label:S.formatMessage({id:"Messages.Årsak"}),validate:[fn],selectValues:q.map(b=>U.jsx("option",{value:b.kode,children:b.navn},b.kode)),className:ir.bredde}),Fs(w,j)&&U.jsx(qa,{name:"fritekst",label:S.formatMessage({id:Is(w)}),validate:[fn,f?xs:Os,qs,Ns],maxLength:f?1e4:4e3,badges:[{type:"info",titleText:y}],parse:ut}),h&&U.jsx(Hr,{}),U.jsxs(Ar,{justify:"space-between",children:[(!f||f&&j!==void 0)&&U.jsx(Yt,{href:"#",onClick:v,onKeyDown:b=>b.key==="Enter"?v(b):null,children:U.jsx(cn,{id:"Messages.Preview"})}),U.jsx(hr,{size:"small",variant:"primary",loading:I.isSubmitting,disabled:I.isSubmitting||s,onClick:Rs,children:U.jsx(cn,{id:"Messages.Submit"})})]})]})})};$r.__docgenInfo={description:`Messages

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
  status: string;
  type: string;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const Ks=be(dt),Yr=e=>U.jsx(Nr,{value:Ks,children:U.jsx($r,{...e})});Yr.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},forhåndsvisBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ForhåndsvisBrevParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  brevmalkode: string;
  fritekst?: string;
  arsakskode?: string;
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"void"}}},description:""},revurderingVarslingArsak:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
  status: string;
  type: string;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
}>`}]},description:""}}};const Gs=e=>U.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:U.jsx(e,{})}),Ms=[{kode:ae.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ae.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],Ps=[{kode:fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:fe.ANNET,navn:"Annet",kodeverk:"UGUNST"}],Zs={title:"sak/sak-meldinger",component:Yr,decorators:[Gs],args:{kanVeilede:!1,revurderingVarslingArsak:Ps,behandling:{brevmaler:Ms,språkkode:"NB"},forhåndsvisBrev:dn("button-click"),submitCallback:dn("button-click"),setMeldingFormData:dn("button-click")}},$e={args:{fagsakYtelseType:Se.FORELDREPENGER,brukerManglerAdresse:!1}},Ye={args:{fagsakYtelseType:Se.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},ze={args:{fagsakYtelseType:Se.FORELDREPENGER,brukerManglerAdresse:!0}};var or,ur,dr;$e.parameters={...$e.parameters,docs:{...(or=$e.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(dr=(ur=$e.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var gr,fr,cr;Ye.parameters={...Ye.parameters,docs:{...(gr=Ye.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(cr=(fr=Ye.parameters)==null?void 0:fr.docs)==null?void 0:cr.source}}};var mr,vr,kr;ze.parameters={...ze.parameters,docs:{...(mr=ze.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(kr=(vr=ze.parameters)==null?void 0:vr.docs)==null?void 0:kr.source}}};const Xs=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{ze as BrukerManglerAdresse,$e as Default,Ye as ForSvangerskapspenger,Xs as __namedExportsOrder,Zs as default};
