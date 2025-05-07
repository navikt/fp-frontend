import{j as U}from"./jsx-runtime-D_zvdyIk.js";import{u as Ke,a as we,d as vr,l as Jr,p as kr,e as yr,S as Zr,b as br,L as bn,q as Xr,B as Ge,o as pr,E as hr,f as Qr,g as et,s as nt,R as rt,i as tt,V as pn,J as at,r as be,k as Er,P as _r,M as cn,j as st,t as lt,F as it,m as ot,n as dn}from"./nb_NO-WujrsmH0.js";import{R as E,r as V}from"./index-CgfFrydU.js";import{d as hn}from"./dayjs.min-DkLNzaWO.js";import{h as ut}from"./index-sY8i7rw0.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";var en=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(en||{});en.BRUKERS_ANDEL;en.FRILANS;en.EGEN_NÆRING;var ae=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ae||{}),Se=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Se||{}),ce=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(ce||{}),Me=e=>e.type==="checkbox",ye=e=>e instanceof Date,te=e=>e==null;const Ar=e=>typeof e=="object";var $=e=>!te(e)&&!Array.isArray(e)&&Ar(e)&&!ye(e),Nr=e=>$(e)&&e.target?Me(e.target)?e.target.checked:e.target.value:e,dt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Rr=(e,t)=>e.has(dt(t)),gt=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},En=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(En&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!gt(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=X(e[a]));else return e;return t}var nn=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,v=(e,t,n)=>{if(!t||!$(e))return n;const r=nn(t.split(/[,[\].]+?/)).reduce((a,s)=>te(a)?a:a[s],e);return H(r)||r===e?H(e[t])?n:e[t]:r},le=e=>typeof e=="boolean",_n=e=>/^\w*$/.test(e),Sr=e=>nn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(e,t,n)=>{let r=-1;const a=_n(t)?[t]:Sr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let p=n;if(r!==o){const S=e[d];p=$(S)||Array.isArray(S)?S:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=p,e=e[d]}};const Je={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ie={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},wr=E.createContext(null),Pe=()=>E.useContext(wr),ft=e=>{const{children:t,...n}=e;return E.createElement(wr.Provider,{value:n},t)};var Vr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==ie.all&&(t._proxyFormState[o]=!r||ie.all),n&&(n[o]=!0),e[o]}});return a},mn=e=>te(e)||!Ar(e);function fe(e,t){if(mn(e)||mn(t))return e===t;if(ye(e)&&ye(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(ye(s)&&ye(o)||$(s)&&$(o)||Array.isArray(s)&&Array.isArray(o)?!fe(s,o):s!==o)return!1}}return!0}const Tr=(e,t)=>{const n=V.useRef(t);fe(t,n.current)||(n.current=t),V.useEffect(e,n.current)};function ct(e){const t=Pe(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=E.useState(n._formState),p=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Tr(()=>n._subscribe({name:a,formState:p.current,exact:s,callback:S=>{!r&&d({...n._formState,...S})}}),[a,r,s]),E.useEffect(()=>{p.current.isValid&&n._setValid(!0)},[n]),E.useMemo(()=>Vr(o,n,p.current,!1),[o,n])}var ue=e=>typeof e=="string",jr=(e,t,n,r,a)=>ue(e)?(r&&t.watch.add(e),v(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),v(n,s))):(r&&(t.watchAll=!0),n);function mt(e){const t=Pe(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},[d,p]=E.useState(n._getWatch(r,a));return Tr(()=>n._subscribe({name:r,formState:{values:!0},exact:o,callback:S=>!s&&p(jr(r,n._names,S.values||n._formValues,!1,a))}),[r,a,s,o]),E.useEffect(()=>n._removeUnmounted()),d}function Or(e){const t=Pe(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=Rr(a._names.array,n),d=mt({control:a,name:n,defaultValue:v(a._formValues,n,v(a._defaultValues,n,e.defaultValue)),exact:!0}),p=ct({control:a,name:n,exact:!0}),S=E.useRef(e),k=E.useRef(a.register(n,{...e.rules,value:d,...le(e.disabled)?{disabled:e.disabled}:{}})),w=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!v(p.errors,n)},isDirty:{enumerable:!0,get:()=>!!v(p.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!v(p.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!v(p.validatingFields,n)},error:{enumerable:!0,get:()=>v(p.errors,n)}}),[p,n]),_=E.useCallback(m=>k.current.onChange({target:{value:Nr(m),name:n},type:Je.CHANGE}),[n]),j=E.useCallback(()=>k.current.onBlur({target:{value:v(a._formValues,n),name:n},type:Je.BLUR}),[n,a._formValues]),q=E.useCallback(m=>{const y=v(a._fields,n);y&&m&&(y._f.ref={focus:()=>m.focus(),select:()=>m.select(),setCustomValidity:f=>m.setCustomValidity(f),reportValidity:()=>m.reportValidity()})},[a._fields,n]),I=E.useMemo(()=>({name:n,value:d,...le(r)||p.disabled?{disabled:p.disabled||r}:{},onChange:_,onBlur:j,ref:q}),[n,r,p.disabled,_,j,q,d]);return E.useEffect(()=>{const m=a._options.shouldUnregister||s;a.register(n,{...S.current.rules,...le(S.current.disabled)?{disabled:S.current.disabled}:{}});const y=(f,b)=>{const T=v(a._fields,f);T&&T._f&&(T._f.mount=b)};if(y(n,!0),m){const f=X(v(a._options.defaultValues,n));P(a._defaultValues,n,f),H(v(a._formValues,n))&&P(a._formValues,n,f)}return!o&&a.register(n),()=>{(o?m&&!a._state.action:m)?a.unregister(n):y(n,!1)}},[n,a,o,s]),E.useEffect(()=>{a._setDisabledField({disabled:r,name:n})},[r,n,a]),E.useMemo(()=>({field:I,formState:p,fieldState:w}),[I,p,w])}var vt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Be=e=>Array.isArray(e)?e:[e],jn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},re=e=>$(e)&&!Object.keys(e).length,An=e=>e.type==="file",oe=e=>typeof e=="function",Ze=e=>{if(!En)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},xr=e=>e.type==="select-multiple",Nn=e=>e.type==="radio",kt=e=>Nn(e)||Me(e),gn=e=>Ze(e)&&e.isConnected;function yt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=H(e)?r++:e[t[r++]];return e}function bt(e){for(const t in e)if(e.hasOwnProperty(t)&&!H(e[t]))return!1;return!0}function z(e,t){const n=Array.isArray(t)?t:_n(t)?[t]:Sr(t),r=n.length===1?e:yt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&re(r)||Array.isArray(r)&&bt(r))&&z(e,n.slice(0,-1)),e}var qr=e=>{for(const t in e)if(oe(e[t]))return!0;return!1};function Xe(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!qr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Xe(e[r],t[r])):te(e[r])||(t[r]=!0);return t}function Ir(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!qr(e[a])?H(t)||mn(n[a])?n[a]=Array.isArray(e[a])?Xe(e[a],[]):{...Xe(e[a])}:Ir(e[a],te(t)?{}:t[a],n[a]):n[a]=!fe(e[a],t[a]);return n}var xe=(e,t)=>Ir(e,t,Xe(t));const On={value:!1,isValid:!1},xn={value:!0,isValid:!0};var Fr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?xn:{value:e[0].value,isValid:!0}:xn:On}return On},Br=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>H(e)?e:t?e===""?NaN:e&&+e:n&&ue(e)?new Date(e):r?r(e):e;const qn={isValid:!1,value:null};var Dr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,qn):qn;function In(e){const t=e.ref;return An(t)?t.files:Nn(t)?Dr(e.refs).value:xr(t)?[...t.selectedOptions].map(({value:n})=>n):Me(t)?Fr(e.refs).value:Br(H(t.value)?e.ref.value:t.value,e)}var pt=(e,t,n,r)=>{const a={};for(const s of e){const o=v(t,s);o&&P(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Qe=e=>e instanceof RegExp,qe=e=>H(e)?e:Qe(e)?e.source:$(e)?Qe(e.value)?e.value.source:e.value:e,Fn=e=>({isOnSubmit:!e||e===ie.onSubmit,isOnBlur:e===ie.onBlur,isOnChange:e===ie.onChange,isOnAll:e===ie.all,isOnTouch:e===ie.onTouched});const Bn="AsyncFunction";var ht=e=>!!e&&!!e.validate&&!!(oe(e.validate)&&e.validate.constructor.name===Bn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Bn)),Et=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Dn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const De=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=v(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(De(d,t))break}else if($(d)&&De(d,t))break}}};function Ln(e,t,n){const r=v(e,n);if(r||_n(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=v(t,s),d=v(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var _t=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return re(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||ie.all))},At=(e,t,n)=>!e||!t||e===t||Be(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),Nt=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,Rt=(e,t)=>!nn(v(e,t)).length&&z(e,t),St=(e,t,n)=>{const r=Be(v(e,n));return P(r,"root",t[n]),P(e,n,r),e},We=e=>ue(e);function Kn(e,t,n="validate"){if(We(e)||Array.isArray(e)&&e.every(We)||le(e)&&!e)return{type:n,message:We(e)?e:"",ref:t}}var Re=e=>$(e)&&!Qe(e)?e:{value:e,message:""},Gn=async(e,t,n,r,a,s)=>{const{ref:o,refs:d,required:p,maxLength:S,minLength:k,min:w,max:_,pattern:j,validate:q,name:I,valueAsNumber:m,mount:y}=e._f,f=v(n,I);if(!y||t.has(I))return{};const b=d?d[0]:o,T=N=>{a&&b.reportValidity&&(b.setCustomValidity(le(N)?"":N||""),b.reportValidity())},x={},W=Nn(o),M=Me(o),C=W||M,F=(m||An(o))&&H(o.value)&&H(f)||Ze(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,K=vt.bind(null,I,r,x),G=(N,R,O,D=ge.maxLength,L=ge.minLength)=>{const J=N?R:O;x[I]={type:N?D:L,message:J,ref:o,...K(N?D:L,J)}};if(s?!Array.isArray(f)||!f.length:p&&(!C&&(F||te(f))||le(f)&&!f||M&&!Fr(d).isValid||W&&!Dr(d).isValid)){const{value:N,message:R}=We(p)?{value:!!p,message:p}:Re(p);if(N&&(x[I]={type:ge.required,message:R,ref:b,...K(ge.required,R)},!r))return T(R),x}if(!F&&(!te(w)||!te(_))){let N,R;const O=Re(_),D=Re(w);if(!te(f)&&!isNaN(f)){const L=o.valueAsNumber||f&&+f;te(O.value)||(N=L>O.value),te(D.value)||(R=L<D.value)}else{const L=o.valueAsDate||new Date(f),J=de=>new Date(new Date().toDateString()+" "+de),Z=o.type=="time",se=o.type=="week";ue(O.value)&&f&&(N=Z?J(f)>J(O.value):se?f>O.value:L>new Date(O.value)),ue(D.value)&&f&&(R=Z?J(f)<J(D.value):se?f<D.value:L<new Date(D.value))}if((N||R)&&(G(!!N,O.message,D.message,ge.max,ge.min),!r))return T(x[I].message),x}if((S||k)&&!F&&(ue(f)||s&&Array.isArray(f))){const N=Re(S),R=Re(k),O=!te(N.value)&&f.length>+N.value,D=!te(R.value)&&f.length<+R.value;if((O||D)&&(G(O,N.message,R.message),!r))return T(x[I].message),x}if(j&&!F&&ue(f)){const{value:N,message:R}=Re(j);if(Qe(N)&&!f.match(N)&&(x[I]={type:ge.pattern,message:R,ref:o,...K(ge.pattern,R)},!r))return T(R),x}if(q){if(oe(q)){const N=await q(f,n),R=Kn(N,b);if(R&&(x[I]={...R,...K(ge.validate,R.message)},!r))return T(R.message),x}else if($(q)){let N={};for(const R in q){if(!re(N)&&!r)break;const O=Kn(await q[R](f,n),b,R);O&&(N={...O,...K(R,O.message)},T(O.message),r&&(x[I]=N))}if(!re(N)&&(x[I]={ref:b,...N},!r))return x}}return T(!0),x};const wt={mode:ie.onSubmit,reValidateMode:ie.onChange,shouldFocusError:!0};function Vt(e={}){let t={...wt,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:oe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let a=$(t.defaultValues)||$(t.values)?X(t.values||t.defaultValues)||{}:{},s=t.shouldUnregister?{}:X(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,S=0;const k={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let w={...k};const _={array:jn(),state:jn()},j=Fn(t.mode),q=Fn(t.reValidateMode),I=t.criteriaMode===ie.all,m=l=>i=>{clearTimeout(S),S=setTimeout(l,i)},y=async l=>{if(!t.disabled&&(k.isValid||w.isValid||l)){const i=t.resolver?re((await F()).errors):await G(r,!0);i!==n.isValid&&_.state.next({isValid:i})}},f=(l,i)=>{!t.disabled&&(k.isValidating||k.validatingFields||w.isValidating||w.validatingFields)&&((l||Array.from(d.mount)).forEach(u=>{u&&(i?P(n.validatingFields,u,i):z(n.validatingFields,u))}),_.state.next({validatingFields:n.validatingFields,isValidating:!re(n.validatingFields)}))},b=(l,i=[],u,h,c=!0,g=!0)=>{if(h&&u&&!t.disabled){if(o.action=!0,g&&Array.isArray(v(r,l))){const A=u(v(r,l),h.argA,h.argB);c&&P(r,l,A)}if(g&&Array.isArray(v(n.errors,l))){const A=u(v(n.errors,l),h.argA,h.argB);c&&P(n.errors,l,A),Rt(n.errors,l)}if((k.touchedFields||w.touchedFields)&&g&&Array.isArray(v(n.touchedFields,l))){const A=u(v(n.touchedFields,l),h.argA,h.argB);c&&P(n.touchedFields,l,A)}(k.dirtyFields||w.dirtyFields)&&(n.dirtyFields=xe(a,s)),_.state.next({name:l,isDirty:R(l,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else P(s,l,i)},T=(l,i)=>{P(n.errors,l,i),_.state.next({errors:n.errors})},x=l=>{n.errors=l,_.state.next({errors:n.errors,isValid:!1})},W=(l,i,u,h)=>{const c=v(r,l);if(c){const g=v(s,l,H(u)?v(a,l):u);H(g)||h&&h.defaultChecked||i?P(s,l,i?g:In(c._f)):L(l,g),o.mount&&y()}},M=(l,i,u,h,c)=>{let g=!1,A=!1;const B={name:l};if(!t.disabled){if(!u||h){(k.isDirty||w.isDirty)&&(A=n.isDirty,n.isDirty=B.isDirty=R(),g=A!==B.isDirty);const Y=fe(v(a,l),i);A=!!v(n.dirtyFields,l),Y?z(n.dirtyFields,l):P(n.dirtyFields,l,!0),B.dirtyFields=n.dirtyFields,g=g||(k.dirtyFields||w.dirtyFields)&&A!==!Y}if(u){const Y=v(n.touchedFields,l);Y||(P(n.touchedFields,l,u),B.touchedFields=n.touchedFields,g=g||(k.touchedFields||w.touchedFields)&&Y!==u)}g&&c&&_.state.next(B)}return g?B:{}},C=(l,i,u,h)=>{const c=v(n.errors,l),g=(k.isValid||w.isValid)&&le(i)&&n.isValid!==i;if(t.delayError&&u?(p=m(()=>T(l,u)),p(t.delayError)):(clearTimeout(S),p=null,u?P(n.errors,l,u):z(n.errors,l)),(u?!fe(c,u):c)||!re(h)||g){const A={...h,...g&&le(i)?{isValid:i}:{},errors:n.errors,name:l};n={...n,...A},_.state.next(A)}},F=async l=>{f(l,!0);const i=await t.resolver(s,t.context,pt(l||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return f(l),i},K=async l=>{const{errors:i}=await F(l);if(l)for(const u of l){const h=v(i,u);h?P(n.errors,u,h):z(n.errors,u)}else n.errors=i;return i},G=async(l,i,u={valid:!0})=>{for(const h in l){const c=l[h];if(c){const{_f:g,...A}=c;if(g){const B=d.array.has(g.name),Y=c._f&&ht(c._f);Y&&k.validatingFields&&f([h],!0);const ee=await Gn(c,d.disabled,s,I,t.shouldUseNativeValidation&&!i,B);if(Y&&k.validatingFields&&f([h]),ee[g.name]&&(u.valid=!1,i))break;!i&&(v(ee,g.name)?B?St(n.errors,ee,g.name):P(n.errors,g.name,ee[g.name]):z(n.errors,g.name))}!re(A)&&await G(A,i,u)}}return u.valid},N=()=>{for(const l of d.unMount){const i=v(r,l);i&&(i._f.refs?i._f.refs.every(u=>!gn(u)):!gn(i._f.ref))&&he(l)}d.unMount=new Set},R=(l,i)=>!t.disabled&&(l&&i&&P(s,l,i),!fe(pe(),a)),O=(l,i,u)=>jr(l,d,{...o.mount?s:H(i)?a:ue(l)?{[l]:i}:i},u,i),D=l=>nn(v(o.mount?s:a,l,t.shouldUnregister?v(a,l,[]):[])),L=(l,i,u={})=>{const h=v(r,l);let c=i;if(h){const g=h._f;g&&(!g.disabled&&P(s,l,Br(i,g)),c=Ze(g.ref)&&te(i)?"":i,xr(g.ref)?[...g.ref.options].forEach(A=>A.selected=c.includes(A.value)):g.refs?Me(g.ref)?g.refs.length>1?g.refs.forEach(A=>(!A.defaultChecked||!A.disabled)&&(A.checked=Array.isArray(c)?!!c.find(B=>B===A.value):c===A.value)):g.refs[0]&&(g.refs[0].checked=!!c):g.refs.forEach(A=>A.checked=A.value===c):An(g.ref)?g.ref.value="":(g.ref.value=c,g.ref.type||_.state.next({name:l,values:X(s)})))}(u.shouldDirty||u.shouldTouch)&&M(l,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Q(l)},J=(l,i,u)=>{for(const h in i){const c=i[h],g=`${l}.${h}`,A=v(r,g);(d.array.has(l)||$(c)||A&&!A._f)&&!ye(c)?J(g,c,u):L(g,c,u)}},Z=(l,i,u={})=>{const h=v(r,l),c=d.array.has(l),g=X(i);P(s,l,g),c?(_.array.next({name:l,values:X(s)}),(k.isDirty||k.dirtyFields||w.isDirty||w.dirtyFields)&&u.shouldDirty&&_.state.next({name:l,dirtyFields:xe(a,s),isDirty:R(l,g)})):h&&!h._f&&!te(g)?J(l,g,u):L(l,g,u),Dn(l,d)&&_.state.next({...n}),_.state.next({name:o.mount?l:void 0,values:X(s)})},se=async l=>{o.mount=!0;const i=l.target;let u=i.name,h=!0;const c=v(r,u),g=A=>{h=Number.isNaN(A)||ye(A)&&isNaN(A.getTime())||fe(A,v(s,u,A))};if(c){let A,B;const Y=i.type?In(c._f):Nr(l),ee=l.type===Je.BLUR||l.type===Je.FOCUS_OUT,Yr=!Et(c._f)&&!t.resolver&&!v(n.errors,u)&&!c._f.deps||Nt(ee,v(n.touchedFields,u),n.isSubmitted,q,j),on=Dn(u,d,ee);P(s,u,Y),ee?(c._f.onBlur&&c._f.onBlur(l),p&&p(0)):c._f.onChange&&c._f.onChange(l);const un=M(u,Y,ee),zr=!re(un)||on;if(!ee&&_.state.next({name:u,type:l.type,values:X(s)}),Yr)return(k.isValid||w.isValid)&&(t.mode==="onBlur"?ee&&y():ee||y()),zr&&_.state.next({name:u,...on?{}:un});if(!ee&&on&&_.state.next({...n}),t.resolver){const{errors:Vn}=await F([u]);if(g(Y),h){const Wr=Ln(n.errors,r,u),Tn=Ln(Vn,r,Wr.name||u);A=Tn.error,u=Tn.name,B=re(Vn)}}else f([u],!0),A=(await Gn(c,d.disabled,s,I,t.shouldUseNativeValidation))[u],f([u]),g(Y),h&&(A?B=!1:(k.isValid||w.isValid)&&(B=await G(r,!0)));h&&(c._f.deps&&Q(c._f.deps),C(u,B,A,un))}},de=(l,i)=>{if(v(n.errors,i)&&l.focus)return l.focus(),1},Q=async(l,i={})=>{let u,h;const c=Be(l);if(t.resolver){const g=await K(H(l)?l:c);u=re(g),h=l?!c.some(A=>v(g,A)):u}else l?(h=(await Promise.all(c.map(async g=>{const A=v(r,g);return await G(A&&A._f?{[g]:A}:A)}))).every(Boolean),!(!h&&!n.isValid)&&y()):h=u=await G(r);return _.state.next({...!ue(l)||(k.isValid||w.isValid)&&u!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:u}:{},errors:n.errors}),i.shouldFocus&&!h&&De(r,de,l?c:d.mount),h},pe=l=>{const i={...o.mount?s:a};return H(l)?i:ue(l)?v(i,l):l.map(u=>v(i,u))},me=(l,i)=>({invalid:!!v((i||n).errors,l),isDirty:!!v((i||n).dirtyFields,l),error:v((i||n).errors,l),isValidating:!!v(n.validatingFields,l),isTouched:!!v((i||n).touchedFields,l)}),an=l=>{l&&Be(l).forEach(i=>z(n.errors,i)),_.state.next({errors:l?n.errors:{}})},Ce=(l,i,u)=>{const h=(v(r,l,{_f:{}})._f||{}).ref,c=v(n.errors,l)||{},{ref:g,message:A,type:B,...Y}=c;P(n.errors,l,{...Y,...i,ref:h}),_.state.next({name:l,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},sn=(l,i)=>oe(l)?_.state.subscribe({next:u=>l(O(void 0,i),u)}):O(l,i,!0),Ue=l=>_.state.subscribe({next:i=>{At(l.name,i.name,l.exact)&&_t(i,l.formState||k,Oe,l.reRenderRoot)&&l.callback({values:{...s},...n,...i})}}).unsubscribe,ln=l=>(o.mount=!0,w={...w,...l.formState},Ue({...l,formState:w})),he=(l,i={})=>{for(const u of l?Be(l):d.mount)d.mount.delete(u),d.array.delete(u),i.keepValue||(z(r,u),z(s,u)),!i.keepError&&z(n.errors,u),!i.keepDirty&&z(n.dirtyFields,u),!i.keepTouched&&z(n.touchedFields,u),!i.keepIsValidating&&z(n.validatingFields,u),!t.shouldUnregister&&!i.keepDefaultValue&&z(a,u);_.state.next({values:X(s)}),_.state.next({...n,...i.keepDirty?{isDirty:R()}:{}}),!i.keepIsValid&&y()},Ve=({disabled:l,name:i})=>{(le(l)&&o.mount||l||d.disabled.has(i))&&(l?d.disabled.add(i):d.disabled.delete(i))},ve=(l,i={})=>{let u=v(r,l);const h=le(i.disabled)||le(t.disabled);return P(r,l,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:l}},name:l,mount:!0,...i}}),d.mount.add(l),u?Ve({disabled:le(i.disabled)?i.disabled:t.disabled,name:l}):W(l,!0,i.value),{...h?{disabled:i.disabled||t.disabled}:{},...t.progressive?{required:!!i.required,min:qe(i.min),max:qe(i.max),minLength:qe(i.minLength),maxLength:qe(i.maxLength),pattern:qe(i.pattern)}:{},name:l,onChange:se,onBlur:se,ref:c=>{if(c){ve(l,i),u=v(r,l);const g=H(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,A=kt(g),B=u._f.refs||[];if(A?B.find(Y=>Y===g):g===u._f.ref)return;P(r,l,{_f:{...u._f,...A?{refs:[...B.filter(gn),g,...Array.isArray(v(a,l))?[{}]:[]],ref:{type:g.type,name:l}}:{ref:g}}}),W(l,!1,void 0,g)}else u=v(r,l,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(Rr(d.array,l)&&o.action)&&d.unMount.add(l)}}},Ee=()=>t.shouldFocusError&&De(r,de,d.mount),Te=l=>{le(l)&&(_.state.next({disabled:l}),De(r,(i,u)=>{const h=v(r,u);h&&(i.disabled=h._f.disabled||l,Array.isArray(h._f.refs)&&h._f.refs.forEach(c=>{c.disabled=h._f.disabled||l}))},0,!1))},ke=(l,i)=>async u=>{let h;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=X(s);if(_.state.next({isSubmitting:!0}),t.resolver){const{errors:g,values:A}=await F();n.errors=g,c=A}else await G(r);if(d.disabled.size)for(const g of d.disabled)P(c,g,void 0);if(z(n.errors,"root"),re(n.errors)){_.state.next({errors:{}});try{await l(c,u)}catch(g){h=g}}else i&&await i({...n.errors},u),Ee(),setTimeout(Ee);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:re(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},_e=(l,i={})=>{v(r,l)&&(H(i.defaultValue)?Z(l,X(v(a,l))):(Z(l,i.defaultValue),P(a,l,X(i.defaultValue))),i.keepTouched||z(n.touchedFields,l),i.keepDirty||(z(n.dirtyFields,l),n.isDirty=i.defaultValue?R(l,X(v(a,l))):R()),i.keepError||(z(n.errors,l),k.isValid&&y()),_.state.next({...n}))},Ae=(l,i={})=>{const u=l?X(l):a,h=X(u),c=re(l),g=c?a:h;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues){const A=new Set([...d.mount,...Object.keys(xe(a,s))]);for(const B of Array.from(A))v(n.dirtyFields,B)?P(g,B,v(s,B)):Z(B,v(g,B))}else{if(En&&H(l))for(const A of d.mount){const B=v(r,A);if(B&&B._f){const Y=Array.isArray(B._f.refs)?B._f.refs[0]:B._f.ref;if(Ze(Y)){const ee=Y.closest("form");if(ee){ee.reset();break}}}}for(const A of d.mount)Z(A,v(g,A))}s=X(g),_.array.next({values:{...g}}),_.state.next({values:{...g}})}d={mount:i.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!k.isValid||!!i.keepIsValid||!!i.keepDirtyValues,o.watch=!!t.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?n.submitCount:0,isDirty:c?!1:i.keepDirty?n.isDirty:!!(i.keepDefaultValues&&!fe(l,a)),isSubmitted:i.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&s?xe(a,s):n.dirtyFields:i.keepDefaultValues&&l?xe(a,l):i.keepDirty?n.dirtyFields:{},touchedFields:i.keepTouched?n.touchedFields:{},errors:i.keepErrors?n.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Ne=(l,i)=>Ae(oe(l)?l(s):l,i),je=(l,i={})=>{const u=v(r,l),h=u&&u._f;if(h){const c=h.refs?h.refs[0]:h.ref;c.focus&&(c.focus(),i.shouldSelect&&oe(c.select)&&c.select())}},Oe=l=>{n={...n,...l}},wn={control:{register:ve,unregister:he,getFieldState:me,handleSubmit:ke,setError:Ce,_subscribe:Ue,_runSchema:F,_getWatch:O,_getDirty:R,_setValid:y,_setFieldArray:b,_setDisabledField:Ve,_setErrors:x,_getFieldArray:D,_reset:Ae,_resetDefaultValues:()=>oe(t.defaultValues)&&t.defaultValues().then(l=>{Ne(l,t.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:N,_disableForm:Te,_subjects:_,_proxyFormState:k,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(l){o=l},get _defaultValues(){return a},get _names(){return d},set _names(l){d=l},get _formState(){return n},get _options(){return t},set _options(l){t={...t,...l}}},subscribe:ln,trigger:Q,register:ve,handleSubmit:ke,watch:sn,setValue:Z,getValues:pe,reset:Ne,resetField:_e,clearErrors:an,unregister:he,setError:Ce,setFocus:je,getFieldState:me};return{...wn,formControl:wn}}const Tt=typeof window<"u"?E.useLayoutEffect:E.useEffect;function jt(e={}){const t=E.useRef(void 0),n=E.useRef(void 0),[r,a]=E.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:Vt(e),formState:r},e.formControl&&e.defaultValues&&!oe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,Tt(()=>{const o=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),o},[s]),E.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),E.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!re(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),E.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),E.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),E.useEffect(()=>{e.values&&!fe(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[s,e.values]),E.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=Vr(r,s),t.current}function Lr(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const Mn=globalThis!=null&&globalThis.document?V.useLayoutEffect:()=>{};var Ot=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const xt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ot(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const It=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=qt(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ft(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Dt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Lt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Dt(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gt=V.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Kt(e,["title","titleId"]);let s=Ke();return s=n?r||"title-"+s:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?V.createElement("title",{id:s},n):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Mt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pt={error:Gt,warning:It,info:Bt,success:Jr},Ct=V.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:p=!1,closeButton:S=!1,onClose:k}=e,w=Mt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:_}=we(),j=vr("Alert"),q=Pt[a];return E.createElement("div",Object.assign({},w,{ref:t,className:_(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":p,"navds-alert--close-button":S})}),E.createElement(q,{title:j(a),className:_("navds-alert__icon")}),E.createElement(kr,{as:"div",size:s,className:_("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),S&&!p&&E.createElement("div",{className:_("navds-alert__button-wrapper")},E.createElement(yr,{className:_("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:k,type:"button",icon:E.createElement(Zr,{title:["error","warning"].includes(a)?j("closeAlert"):j("closeMessage")})})))});var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht=V.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:p}=br(e,"select"),{children:S,label:k,className:w,description:_,htmlSize:j,hideLabel:q=!1,style:I}=e,m=Ut(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:y}=we(),f={onMouseDown:b=>{p&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{p&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return E.createElement("div",{className:y(w,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":p,"navds-select--error":s,"navds-select--readonly":p})},E.createElement(bn,{htmlFor:n.id,size:o,className:y("navds-form-field__label",{"navds-sr-only":q})},p&&E.createElement(Xr,null),k),!!_&&E.createElement(Ge,{className:y("navds-form-field__description",{"navds-sr-only":q}),id:d,size:o,as:"div"},_),E.createElement("div",{className:y("navds-select__container"),style:I},E.createElement("select",Object.assign({},pr(m,["error","errorId","size","readOnly"]),n,f,{ref:t,className:y("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:j}),S),E.createElement(xt,{className:y("navds-select__chevron"),"aria-hidden":!0})),E.createElement("div",{className:y("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&E.createElement(hr,{size:o,showIcon:!0},e.error)))});var $t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Yt=V.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=$t(e,["as","className","underline","variant","inlineText"]);const{cn:p}=we();return E.createElement(n,Object.assign({},d,{ref:t,className:p("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Wt=V.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=zt(e,["children","className","variant","size","icon"]);const{cn:p}=we(),S=(a==null?void 0:a.endsWith("-filled"))&&"strong",k=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",w=a==null?void 0:a.replace("-filled","").replace("-moderate","");return E.createElement(Ge,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:p("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${S||k||"outline"}`,`navds-tag--${w}`)}),o&&E.createElement("span",{className:p("navds-tag__icon--left")},o),n)});var Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Cn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function He(e){return parseInt(e,10)||0}const Zt=V.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:p,style:S,value:k}=e,w=Jt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=V.useRef(k!=null),j=V.useRef(null),q=Qr(j,t),I=V.useRef(null),m=V.useRef(0),[y,f]=V.useState({outerHeightStyle:0}),b=E.useCallback(()=>{const M=j.current,F=Cn(M).getComputedStyle(M);if(F.width==="0px")return{outerHeightStyle:0};const K=I.current;K.style.width=F.width,K.value=M.value||w.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const G=F.boxSizing,N=He(F.paddingBottom)+He(F.paddingTop),R=He(F.borderBottomWidth)+He(F.borderTopWidth),O=K.scrollHeight-N;K.value="x";const D=K.scrollHeight-N;let L=O;d&&(L=Math.max(Number(d)*D,L)),o&&(L=Math.min(Number(o)*D,L)),L=Math.max(L,D);const J=L+(G==="border-box"?N+R:0),Z=Math.abs(L-O)<=1;return{outerHeightStyle:J,overflow:Z}},[o,d,w.placeholder]),T=()=>{const M=b();Un(M)||f(C=>Pn(C,M,m))};Mn(()=>{const M=()=>{const N=b();Un(N)||ut.flushSync(()=>{f(R=>Pn(R,N,m))})},C=Lr(()=>{var N,R,O;if(m.current=0,!((N=j.current)===null||N===void 0)&&N.style.height||!((R=j.current)===null||R===void 0)&&R.style.width){((O=j.current)===null||O===void 0?void 0:O.style.overflow)==="hidden"&&f(D=>Object.assign(Object.assign({},D),{overflow:!1}));return}M()},166,!0),F=j.current,K=Cn(F);K.addEventListener("resize",C);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(C),G.observe(F)),()=>{C.clear(),K.removeEventListener("resize",C),G&&G.disconnect()}},[b]),Mn(()=>{T()}),V.useEffect(()=>{m.current=0},[k]);const x=M=>{m.current=0,_||T(),s&&s(M)},W=Object.assign({"--__ac-textarea-height":y.outerHeightStyle+"px","--__axc-textarea-height":y.outerHeightStyle+"px",overflow:y.overflow&&!p&&!(!((n=j.current)===null||n===void 0)&&n.style.height)&&!(!((r=j.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},S);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:k,onChange:x,ref:q,rows:d,style:W},w,{className:a})),E.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:I,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},S)}))});function Un(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=we(),o=vr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=t-n,[p,S]=V.useState(d);return V.useEffect(()=>{const k=Lr(()=>{S(d)},2e3);return k(),()=>{k.clear()}},[d]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:s("navds-sr-only")},o("maxLength",{maxLength:t})),d<20&&E.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Hn(p,o)),E.createElement(Ge,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},Hn(d,o)))},Hn=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ea=V.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:p,size:S,inputDescriptionId:k}=br(e,"textarea"),{label:w,className:_,description:j,maxLength:q,hideLabel:I=!1,resize:m,UNSAFE_autoScrollbar:y,i18n:f,readOnly:b}=e,T=Qt(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:x}=we(),W=et(),M=q!==void 0&&q>0,[C,F]=V.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),K=()=>{let N=T!=null&&T.minRows?T==null?void 0:T.minRows:3;return S==="small"&&(N=T!=null&&T.minRows?T==null?void 0:T.minRows:2),N},G=nt(s["aria-describedby"],{[W??""]:M});return E.createElement("div",{className:x(_,"navds-form-field",`navds-form-field--${S}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":p,"navds-textarea--autoscrollbar":y,[`navds-textarea--resize-${m===!0?"both":m}`]:m})},E.createElement(bn,{htmlFor:s.id,size:S,className:x("navds-form-field__label",{"navds-sr-only":I})},b&&E.createElement(rt,null),w),!!j&&E.createElement(Ge,{className:x("navds-form-field__description",{"navds-sr-only":I}),id:k,size:S,as:"div"},j),E.createElement(Zt,Object.assign({},pr(T,["error","errorId","size"]),s,{onChange:tt(e.onChange,e.value===void 0?N=>F(N.target.value):void 0),minRows:K(),autoScrollbar:y,ref:t,readOnly:b,className:x("navds-textarea__input","navds-body-short",`navds-body-short--${S??"medium"}`)},G?{"aria-describedby":G}:{})),M&&!b&&!s.disabled&&E.createElement(Xt,{maxLengthId:W,maxLength:q,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:C.length,size:S,i18n:f}),E.createElement("div",{className:x("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&E.createElement(hr,{size:S,showIcon:!0},e.error)))});function na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $n={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function ra(){if(Yn)return Ie;Yn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Ie.Fragment=t,Ie.jsx=n,Ie.jsxs=n,Ie}var zn;function ta(){return zn||(zn=1,$n.exports=ra()),$n.exports}var Le=ta();const aa=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Le.jsx(Ct,{variant:"warning",size:"small",children:Le.jsx(pn,{gap:"2",children:E.Children.map(e,t=>Le.jsx(Ge,{size:"small",children:t},at(t)?t.key:t))})}),rn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};be(rn);var Wn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Jn;function sa(){return Jn||(Jn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Wn)),Wn.exports}var la=sa();const Rn=na(la),ia="_borderbox_1vkvn_1",oa="_error_1vkvn_5",ua="_warning_1vkvn_8",da={borderbox:ia,error:oa,warning:ua};Rn.bind(da);const ga="_aksjonspunkt_kn1hn_1",fa="_erAksjonspunktApent_kn1hn_4",ca="_erIkkeGodkjentAvBeslutter_kn1hn_8",ma={aksjonspunkt:ga,erAksjonspunktApent:fa,erIkkeGodkjentAvBeslutter:ca};Rn.bind(ma);be(rn);be(rn);const va="_divider_1t980_1",ka="_dividerParagraf_1t980_8",ya="_leftPanel_1t980_11",ba="_rightPanel_1t980_14",pa={divider:va,dividerParagraf:ka,leftPanel:ya,rightPanel:ba};Rn.bind(pa);const ha=()=>Le.jsx("span",{"data-testid":"editedIcon",children:Le.jsx(Lt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});be(rn);function Ea(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zn={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn;function _a(){if(Xn)return Fe;Xn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Fe.Fragment=t,Fe.jsx=n,Fe.jsxs=n,Fe}var Qn;function Aa(){return Qn||(Qn=1,Zn.exports=_a()),Zn.exports}var ne=Aa();const Kr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Gr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var vn={exports:{}},Na=vn.exports,er;function Ra(){return er||(er=1,function(e,t){(function(n,r){e.exports=r()})(Na,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,p={},S=function(m){return(m=+m)+(m>68?1900:2e3)},k=function(m){return function(y){this[m]=+y}},w=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(y){if(!y||y==="Z")return 0;var f=y.match(/([+-]|\d\d)/g),b=60*f[1]+(+f[2]||0);return b===0?0:f[0]==="+"?-b:b}(m)}],_=function(m){var y=p[m];return y&&(y.indexOf?y:y.s.concat(y.f))},j=function(m,y){var f,b=p.meridiem;if(b){for(var T=1;T<=24;T+=1)if(m.indexOf(b(T,0,y))>-1){f=T>12;break}}else f=m===(y?"pm":"PM");return f},q={A:[d,function(m){this.afternoon=j(m,!1)}],a:[d,function(m){this.afternoon=j(m,!0)}],Q:[a,function(m){this.month=3*(m-1)+1}],S:[a,function(m){this.milliseconds=100*+m}],SS:[s,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[o,k("seconds")],ss:[o,k("seconds")],m:[o,k("minutes")],mm:[o,k("minutes")],H:[o,k("hours")],h:[o,k("hours")],HH:[o,k("hours")],hh:[o,k("hours")],D:[o,k("day")],DD:[s,k("day")],Do:[d,function(m){var y=p.ordinal,f=m.match(/\d+/);if(this.day=f[0],y)for(var b=1;b<=31;b+=1)y(b).replace(/\[|\]/g,"")===m&&(this.day=b)}],w:[o,k("week")],ww:[s,k("week")],M:[o,k("month")],MM:[s,k("month")],MMM:[d,function(m){var y=_("months"),f=(_("monthsShort")||y.map(function(b){return b.slice(0,3)})).indexOf(m)+1;if(f<1)throw new Error;this.month=f%12||f}],MMMM:[d,function(m){var y=_("months").indexOf(m)+1;if(y<1)throw new Error;this.month=y%12||y}],Y:[/[+-]?\d+/,k("year")],YY:[s,function(m){this.year=S(m)}],YYYY:[/\d{4}/,k("year")],Z:w,ZZ:w};function I(m){var y,f;y=m,f=p&&p.formats;for(var b=(m=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(K,G,N){var R=N&&N.toUpperCase();return G||f[N]||n[N]||f[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,D,L){return D||L.slice(1)})})).match(r),T=b.length,x=0;x<T;x+=1){var W=b[x],M=q[W],C=M&&M[0],F=M&&M[1];b[x]=F?{regex:C,parser:F}:W.replace(/^\[|\]$/g,"")}return function(K){for(var G={},N=0,R=0;N<T;N+=1){var O=b[N];if(typeof O=="string")R+=O.length;else{var D=O.regex,L=O.parser,J=K.slice(R),Z=D.exec(J)[0];L.call(G,Z),K=K.replace(Z,"")}}return function(se){var de=se.afternoon;if(de!==void 0){var Q=se.hours;de?Q<12&&(se.hours+=12):Q===12&&(se.hours=0),delete se.afternoon}}(G),G}}return function(m,y,f){f.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(S=m.parseTwoDigitYear);var b=y.prototype,T=b.parse;b.parse=function(x){var W=x.date,M=x.utc,C=x.args;this.$u=M;var F=C[1];if(typeof F=="string"){var K=C[2]===!0,G=C[3]===!0,N=K||G,R=C[2];G&&(R=C[2]),p=this.$locale(),!K&&R&&(p=f.Ls[R]),this.$d=function(J,Z,se,de){try{if(["x","X"].indexOf(Z)>-1)return new Date((Z==="X"?1e3:1)*J);var Q=I(Z)(J),pe=Q.year,me=Q.month,an=Q.day,Ce=Q.hours,sn=Q.minutes,Ue=Q.seconds,ln=Q.milliseconds,he=Q.zone,Ve=Q.week,ve=new Date,Ee=an||(pe||me?1:ve.getDate()),Te=pe||ve.getFullYear(),ke=0;pe&&!me||(ke=me>0?me-1:ve.getMonth());var _e,Ae=Ce||0,Ne=sn||0,je=Ue||0,Oe=ln||0;return he?new Date(Date.UTC(Te,ke,Ee,Ae,Ne,je,Oe+60*he.offset*1e3)):se?new Date(Date.UTC(Te,ke,Ee,Ae,Ne,je,Oe)):(_e=new Date(Te,ke,Ee,Ae,Ne,je,Oe),Ve&&(_e=de(_e).week(Ve).toDate()),_e)}catch{return new Date("")}}(W,F,M,f),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),N&&W!=this.format(F)&&(this.$d=new Date("")),p={}}else if(F instanceof Array)for(var O=F.length,D=1;D<=O;D+=1){C[1]=F[D-1];var L=f.apply(this,C);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}D===O&&(this.$d=new Date(""))}else T.call(this,x)}}})}(vn)),vn.exports}var Sa=Ra();const wa=Ea(Sa),Va="_textarea_s67fk_1",Ta={textarea:Va},ja=e=>e!=null&&e!=="",Mr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>ja(t)?ne.jsxs(pn,{gap:"1",children:[e&&!a&&ne.jsx(bn,{size:s,children:e}),ne.jsxs(Er,{gap:"2",align:"center",wrap:!1,children:[ne.jsx("div",{className:r==="textarea"?Ta.textarea:"",children:ne.jsx(kr,{size:s,children:t})}),n&&ne.jsx(ha,{})]})]}):null;hn.extend(wa);const nr=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:p,className:S,hideLabel:k,isEdited:w,size:_})=>{const{formState:{errors:j}}=Pe(),{field:q}=Or({name:e,rules:{validate:V.useMemo(()=>Kr(r),[r])}});if(a){const y=n.map(b=>b.props).find(b=>b.value===q.value),f=y?y.children:void 0;return ne.jsx(Mr,{value:f,label:t,hideLabel:k,isEdited:w,size:_})}const I=q.value||"",m=!n.map(y=>y.props.value).includes(I)&&I!=="";return m&&console.warn(`No corresponding option found for value '${I}'`),ne.jsxs(Ht,{size:"small",className:S,error:Gr(j,e),label:t,description:s,value:o&&p||m?"":q.value,disabled:p,onChange:y=>{d&&d(y),q.onChange(y)},hideLabel:k,children:[ne.jsx("option",{style:{display:"none"}}),",",n]})},Oa="_textAreaFieldWithBadges_bdz0b_1",xa="_etikettWrapper_bdz0b_4",rr={textAreaFieldWithBadges:Oa,etikettWrapper:xa},qa=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=w=>w,className:d,description:p,isEdited:S,...k})=>{const{formState:{errors:w}}=Pe(),{field:_}=Or({name:e,rules:{validate:V.useMemo(()=>Kr(s),[s])}});return n?ne.jsx(Mr,{label:t,value:_.value,type:"textarea",isEdited:S,hideLabel:k.hideLabel}):ne.jsxs("div",{className:a?rr.textAreaFieldWithBadges:null,children:[a&&ne.jsx("div",{className:rr.etikettWrapper,children:a.map(({type:j,titleText:q})=>ne.jsx(Wt,{variant:j,size:"small",children:q},q))}),ne.jsx(ea,{size:"small",label:t,description:p,className:d,autoComplete:"off",..._,onChange:j=>_.onChange(j.currentTarget.value!==""?o(j.currentTarget.value):null),value:_.value?_.value:"",error:Gr(w,e),maxLength:r,...k})]})},Ia=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return V.useEffect(()=>()=>{a&&a(o())},[]),ne.jsx(ft,{...e,children:ne.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Pr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kn={exports:{}},Fa=kn.exports,tr;function Ba(){return tr||(tr=1,function(e,t){(function(n,r){e.exports=r()})(Fa,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(kn)),kn.exports}var Da=Ba();const La=Pr(Da);var yn={exports:{}},Ka=yn.exports,ar;function Ga(){return ar||(ar=1,function(e,t){(function(n,r){e.exports=r()})(Ka,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(yn)),yn.exports}var Ma=Ga();const Pa=Pr(Ma),Ca="Dato må være før eller lik {limit}",Ua="Dato må være etter eller lik {limit}",Ha="Perioder kan ikke overlappe i tid",$a="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Ya="Dato må være lik {value}",za="Dato må skrives slik: dd.mm.åååå",Wa="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Ja="Tallet kan ikke inneholde mer enn to desimaler",Za="Tallet kan ikke ha desimaler",Xa="Feltet kan kun inneholde tall",Qa="Ugyldig fødselsnummer",es="Feltet må være et fødselsnummer (11 siffer)",ns="Ugyldig organisasjonsnummer.",rs="Ugyldig organisasjonsnummer eller fødselsnummer",ts="Startdato må være før eller lik sluttdato",as="Periode er utenfor opptjeningsperioden",ss="Ugyldig saksnummer eller fødselsnummer",ls="Feltet inneholder ugyldige tegn: {text}",is="Feltet inneholder en ugyldig verdi: {value}",os="Feltet kan ikke inneholde mellomrom",us="Feltet må fylles ut",ds="Du kan skrive maksimalt {length} tegn",gs="Du må skrive minst {length} tegn",fs="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",cs="Feltet må være mindre eller lik {length}",ms="Feltet må være større eller lik {length}",vs="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",ks={DateNotBeforeOrEqual:Ca,DateNotAfterOrEqual:Ua,DateRangesOverlapping:Ha,DateRangesOverlappingPeriodTypes:$a,DatesNotEqual:Ya,InvalidDate:za,InvalidDatesInPeriod:Wa,InvalidDecimal:Ja,InvalidInteger:Za,InvalidNumber:Xa,InvalidFodselsnr:Qa,InvalidFodselsnrFormat:es,InvalidOrgnr:ns,InvalidOrgnrOrFodselsnr:rs,InvalidPeriod:ts,InvalidPeriodRange:as,InvalidSaksnrOrFodselsnrFormat:ss,InvalidText:ls,InvalidValue:is,IllegalWhiteSpace:os,IsRequired:us,MaxLength:ds,MinLength:gs,MaxLengthOrFodselsnr:fs,MaxValue:cs,MinValue:ms,SammeFodselsnrSomSoker:vs},{formatMessage:tn}=be(ks),ys=e=>tn({id:"InvalidText"},{text:e}),bs=()=>tn({id:"IsRequired"}),ps=e=>tn({id:"MaxLength"},{length:e}),hs=e=>tn({id:"MinLength"},{length:e}),Es=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,_s=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Sn=e=>e==null||e.toString().trim().length===0;hn.extend(La);hn.extend(Pa);const fn=e=>Sn(e)?bs():void 0,As=e=>t=>Sn(t)||t.toString().trim().length>=e?null:hs(e),Cr=e=>t=>Sn(t)||t.toString().trim().length<=e?null:ps(e),Ns=e=>{if(!Es.test(e)){const t=e.replace(_s,"");return ys(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Rs=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Ss="_ukjentAdresseMargins_4teno_1",ws={ukjentAdresseMargins:Ss},Vs={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Ts=be(Vs),Ur=()=>U.jsx(_r,{value:Ts,children:U.jsx("div",{className:ws.ukjentAdresseMargins,children:U.jsx(aa,{children:U.jsx("b",{children:U.jsx(cn,{id:"UkjentAdresse.Text"})})})})});Ur.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const js="_bredde_jav4h_9",sr={bredde:js},Os=Cr(4e3),xs=Cr(1e4),qs=As(3),Is=e=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Fs=(e,t)=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.FRITEKST||e===ae.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ae.VARSEL_OM_TILBAKEKREVING||e===ae.TBK_INNHENTE_OPPLYSNINGER||e===ae.VARSEL_OM_REVURDERING&&t===ce.ANNET,Bs=(e,t)=>t===Se.ENGANGSSTONAD?e.filter(n=>n.kode===ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===ce.ANNET):t===Se.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==ce.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,Ds=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ae.VARSEL_OM_REVURDERING}:{...t}},Ls=e=>{const t=e;return e.brevmalkode===ae.VARSEL_OM_REVURDERING&&t.arsakskode!==ce.ANNET&&(t.fritekst=" "),t},Hr=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:p})=>{const S=st(),k=jt({defaultValues:o??Ds(e)}),w=k.watch("brevmalkode"),_=k.watch("fritekst"),j=k.watch("arsakskode"),q=V.useMemo(()=>Bs(r,a),[]);if(!e.språkkode)return null;const{formState:I}=k,m=b=>{w&&t(w,_,j),b.preventDefault()},y=lt(e.språkkode),f=w===ae.VARSEL_OM_REVURDERING;return U.jsx(Ia,{formMethods:k,onSubmit:b=>n(Ls(b)),setDataOnUnmount:d,children:U.jsxs(pn,{gap:"4",children:[U.jsx(nr,{name:"brevmalkode",label:S.formatMessage({id:"Messages.Template"}),validate:[fn],selectValues:e.brevmaler.map(b=>U.jsx("option",{value:b.kode,disabled:!b.tilgjengelig,children:b.navn},b.kode)),className:sr.bredde}),f&&U.jsx(nr,{name:"arsakskode",label:S.formatMessage({id:"Messages.Årsak"}),validate:[fn],selectValues:q.map(b=>U.jsx("option",{value:b.kode,children:b.navn},b.kode)),className:sr.bredde}),Fs(w,j)&&U.jsx(qa,{name:"fritekst",label:S.formatMessage({id:Is(w)}),validate:[fn,f?xs:Os,qs,Ns],maxLength:f?1e4:4e3,badges:[{type:"info",titleText:y}],parse:it}),p&&U.jsx(Ur,{}),U.jsxs(Er,{justify:"space-between",children:[(!f||f&&j!==void 0)&&U.jsx(Yt,{href:"#",onClick:m,onKeyDown:b=>b.key==="Enter"?m(b):null,children:U.jsx(cn,{id:"Messages.Preview"})}),U.jsx(yr,{size:"small",variant:"primary",loading:I.isSubmitting,disabled:I.isSubmitting||s,onClick:Rs,children:U.jsx(cn,{id:"Messages.Submit"})})]})]})})};Hr.__docgenInfo={description:`Messages

Presentasjonskomponent. Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
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
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
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
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(brevmalkode?: string, fritekst?: string, arsakskode?: string) => void",signature:{arguments:[{type:{name:"string"},name:"brevmalkode"},{type:{name:"string"},name:"fritekst"},{type:{name:"string"},name:"arsakskode"}],return:{name:"void"}}},description:""},revurderingVarslingArsak:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const Ks=be(ot),$r=e=>U.jsx(_r,{value:Ks,children:U.jsx(Hr,{...e})});$r.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
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
}>`}]},description:""}}};const Gs=e=>U.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:U.jsx(e,{})}),Ms=[{kode:ae.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ae.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],Ps=[{kode:ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:ce.ANNET,navn:"Annet",kodeverk:"UGUNST"}],Xs={title:"sak/sak-meldinger",component:$r,decorators:[Gs],args:{kanVeilede:!1,revurderingVarslingArsak:Ps,behandling:{brevmaler:Ms,språkkode:"NB"},previewCallback:dn("button-click"),submitCallback:dn("button-click"),setMeldingFormData:dn("button-click")}},$e={args:{fagsakYtelseType:Se.FORELDREPENGER,brukerManglerAdresse:!1}},Ye={args:{fagsakYtelseType:Se.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},ze={args:{fagsakYtelseType:Se.FORELDREPENGER,brukerManglerAdresse:!0}};var lr,ir,or;$e.parameters={...$e.parameters,docs:{...(lr=$e.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(or=(ir=$e.parameters)==null?void 0:ir.docs)==null?void 0:or.source}}};var ur,dr,gr;Ye.parameters={...Ye.parameters,docs:{...(ur=Ye.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(gr=(dr=Ye.parameters)==null?void 0:dr.docs)==null?void 0:gr.source}}};var fr,cr,mr;ze.parameters={...ze.parameters,docs:{...(fr=ze.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(mr=(cr=ze.parameters)==null?void 0:cr.docs)==null?void 0:mr.source}}};const Qs=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{ze as BrukerManglerAdresse,$e as Default,Ye as ForSvangerskapspenger,Qs as __namedExportsOrder,Xs as default};
