import{j as U}from"./jsx-runtime-D_zvdyIk.js";import{u as Pe,a as Se,d as vr,l as Jr,q as kr,e as yr,S as Zr,b as br,L as hn,r as Xr,B as De,o as pr,E as hr,f as Qr,g as et,s as nt,R as rt,i as tt,V as Er,v as at,m as be,P as wr,M as vn,j as st,t as lt,w as it,k as ot,n as ut,p as cn}from"./nb_NO-1h1EBPpq.js";import{R as E,r as O}from"./index-CgfFrydU.js";import{d as En}from"./dayjs.min-DkLNzaWO.js";import{h as dt}from"./index-sY8i7rw0.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";var nn=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(nn||{});nn.BRUKERS_ANDEL;nn.FRILANS;nn.EGEN_NÆRING;var ae=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ae||{}),Re=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Re||{}),fe=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(fe||{}),Ce=e=>e.type==="checkbox",ye=e=>e instanceof Date,re=e=>e==null;const _r=e=>typeof e=="object";var H=e=>!re(e)&&!Array.isArray(e)&&_r(e)&&!ye(e),Ar=e=>H(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jr=(e,t)=>e.has(gt(t)),ct=e=>{const t=e.constructor&&e.constructor.prototype;return H(t)&&t.hasOwnProperty("isPrototypeOf")},wn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wn&&(e instanceof Blob||r))&&(n||H(e)))if(t=n?[]:{},!n&&!ct(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=X(e[a]));else return e;return t}var rn=e=>Array.isArray(e)?e.filter(Boolean):[],$=e=>e===void 0,v=(e,t,n)=>{if(!t||!H(e))return n;const r=rn(t.split(/[,[\].]+?/)).reduce((a,s)=>re(a)?a:a[s],e);return $(r)||r===e?$(e[t])?n:e[t]:r},le=e=>typeof e=="boolean",_n=e=>/^\w*$/.test(e),Rr=e=>rn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),K=(e,t,n)=>{let r=-1;const a=_n(t)?[t]:Rr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let p=n;if(r!==o){const R=e[d];p=H(R)||Array.isArray(R)?R:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=p,e=e[d]}};const Ze={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ie={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Sr=E.createContext(null),Ke=()=>E.useContext(Sr),ft=e=>{const{children:t,...n}=e;return E.createElement(Sr.Provider,{value:n},t)};var Or=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==ie.all&&(t._proxyFormState[o]=!r||ie.all),n&&(n[o]=!0),e[o]}});return a},kn=e=>re(e)||!_r(e);function ce(e,t){if(kn(e)||kn(t))return e===t;if(ye(e)&&ye(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(ye(s)&&ye(o)||H(s)&&H(o)||Array.isArray(s)&&Array.isArray(o)?!ce(s,o):s!==o)return!1}}return!0}const Tr=(e,t)=>{const n=O.useRef(t);ce(t,n.current)||(n.current=t),O.useEffect(e,n.current)};function mt(e){const t=Ke(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=E.useState(n._formState),p=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Tr(()=>n._subscribe({name:a,formState:p.current,exact:s,callback:R=>{!r&&d({...n._formState,...R})}}),[a,r,s]),E.useEffect(()=>{p.current.isValid&&n._setValid(!0)},[n]),E.useMemo(()=>Or(o,n,p.current,!1),[o,n])}var ue=e=>typeof e=="string",xr=(e,t,n,r,a)=>ue(e)?(r&&t.watch.add(e),v(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),v(n,s))):(r&&(t.watchAll=!0),n);function vt(e){const t=Ke(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},[d,p]=E.useState(n._getWatch(r,a));return Tr(()=>n._subscribe({name:r,formState:{values:!0},exact:o,callback:R=>!s&&p(xr(r,n._names,R.values||n._formValues,!1,a))}),[r,a,s,o]),E.useEffect(()=>n._removeUnmounted()),d}function qr(e){const t=Ke(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=jr(a._names.array,n),d=vt({control:a,name:n,defaultValue:v(a._formValues,n,v(a._defaultValues,n,e.defaultValue)),exact:!0}),p=mt({control:a,name:n,exact:!0}),R=E.useRef(e),k=E.useRef(a.register(n,{...e.rules,value:d,...le(e.disabled)?{disabled:e.disabled}:{}})),S=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!v(p.errors,n)},isDirty:{enumerable:!0,get:()=>!!v(p.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!v(p.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!v(p.validatingFields,n)},error:{enumerable:!0,get:()=>v(p.errors,n)}}),[p,n]),w=E.useCallback(m=>k.current.onChange({target:{value:Ar(m),name:n},type:Ze.CHANGE}),[n]),x=E.useCallback(()=>k.current.onBlur({target:{value:v(a._formValues,n),name:n},type:Ze.BLUR}),[n,a._formValues]),V=E.useCallback(m=>{const y=v(a._fields,n);y&&m&&(y._f.ref={focus:()=>m.focus(),select:()=>m.select(),setCustomValidity:c=>m.setCustomValidity(c),reportValidity:()=>m.reportValidity()})},[a._fields,n]),F=E.useMemo(()=>({name:n,value:d,...le(r)||p.disabled?{disabled:p.disabled||r}:{},onChange:w,onBlur:x,ref:V}),[n,r,p.disabled,w,x,V,d]);return E.useEffect(()=>{const m=a._options.shouldUnregister||s;a.register(n,{...R.current.rules,...le(R.current.disabled)?{disabled:R.current.disabled}:{}});const y=(c,b)=>{const T=v(a._fields,c);T&&T._f&&(T._f.mount=b)};if(y(n,!0),m){const c=X(v(a._options.defaultValues,n));K(a._defaultValues,n,c),$(v(a._formValues,n))&&K(a._formValues,n,c)}return!o&&a.register(n),()=>{(o?m&&!a._state.action:m)?a.unregister(n):y(n,!1)}},[n,a,o,s]),E.useEffect(()=>{a._setDisabledField({disabled:r,name:n})},[r,n,a]),E.useMemo(()=>({field:F,formState:p,fieldState:S}),[F,p,S])}var kt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Le=e=>Array.isArray(e)?e:[e],xn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},ne=e=>H(e)&&!Object.keys(e).length,An=e=>e.type==="file",oe=e=>typeof e=="function",Xe=e=>{if(!wn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Nr=e=>e.type==="select-multiple",jn=e=>e.type==="radio",yt=e=>jn(e)||Ce(e),fn=e=>Xe(e)&&e.isConnected;function bt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=$(e)?r++:e[t[r++]];return e}function pt(e){for(const t in e)if(e.hasOwnProperty(t)&&!$(e[t]))return!1;return!0}function z(e,t){const n=Array.isArray(t)?t:_n(t)?[t]:Rr(t),r=n.length===1?e:bt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&(H(r)&&ne(r)||Array.isArray(r)&&pt(r))&&z(e,n.slice(0,-1)),e}var Vr=e=>{for(const t in e)if(oe(e[t]))return!0;return!1};function Qe(e,t={}){const n=Array.isArray(e);if(H(e)||n)for(const r in e)Array.isArray(e[r])||H(e[r])&&!Vr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Qe(e[r],t[r])):re(e[r])||(t[r]=!0);return t}function Fr(e,t,n){const r=Array.isArray(e);if(H(e)||r)for(const a in e)Array.isArray(e[a])||H(e[a])&&!Vr(e[a])?$(t)||kn(n[a])?n[a]=Array.isArray(e[a])?Qe(e[a],[]):{...Qe(e[a])}:Fr(e[a],re(t)?{}:t[a],n[a]):n[a]=!ce(e[a],t[a]);return n}var Ne=(e,t)=>Fr(e,t,Qe(t));const qn={value:!1,isValid:!1},Nn={value:!0,isValid:!0};var Ir=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!$(e[0].attributes.value)?$(e[0].value)||e[0].value===""?Nn:{value:e[0].value,isValid:!0}:Nn:qn}return qn},Lr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>$(e)?e:t?e===""?NaN:e&&+e:n&&ue(e)?new Date(e):r?r(e):e;const Vn={isValid:!1,value:null};var Mr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Vn):Vn;function Fn(e){const t=e.ref;return An(t)?t.files:jn(t)?Mr(e.refs).value:Nr(t)?[...t.selectedOptions].map(({value:n})=>n):Ce(t)?Ir(e.refs).value:Lr($(t.value)?e.ref.value:t.value,e)}var ht=(e,t,n,r)=>{const a={};for(const s of e){const o=v(t,s);o&&K(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},en=e=>e instanceof RegExp,Ve=e=>$(e)?e:en(e)?e.source:H(e)?en(e.value)?e.value.source:e.value:e,In=e=>({isOnSubmit:!e||e===ie.onSubmit,isOnBlur:e===ie.onBlur,isOnChange:e===ie.onChange,isOnAll:e===ie.all,isOnTouch:e===ie.onTouched});const Ln="AsyncFunction";var Et=e=>!!e&&!!e.validate&&!!(oe(e.validate)&&e.validate.constructor.name===Ln||H(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Ln)),wt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Mn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Me=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=v(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(Me(d,t))break}else if(H(d)&&Me(d,t))break}}};function Bn(e,t,n){const r=v(e,n);if(r||_n(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=v(t,s),d=v(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var _t=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return ne(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||ie.all))},At=(e,t,n)=>!e||!t||e===t||Le(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),jt=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,Rt=(e,t)=>!rn(v(e,t)).length&&z(e,t),St=(e,t,n)=>{const r=Le(v(e,n));return K(r,"root",t[n]),K(e,n,r),e},Je=e=>ue(e);function Pn(e,t,n="validate"){if(Je(e)||Array.isArray(e)&&e.every(Je)||le(e)&&!e)return{type:n,message:Je(e)?e:"",ref:t}}var je=e=>H(e)&&!en(e)?e:{value:e,message:""},Dn=async(e,t,n,r,a,s)=>{const{ref:o,refs:d,required:p,maxLength:R,minLength:k,min:S,max:w,pattern:x,validate:V,name:F,valueAsNumber:m,mount:y}=e._f,c=v(n,F);if(!y||t.has(F))return{};const b=d?d[0]:o,T=A=>{a&&b.reportValidity&&(b.setCustomValidity(le(A)?"":A||""),b.reportValidity())},N={},W=jn(o),C=Ce(o),G=W||C,I=(m||An(o))&&$(o.value)&&$(c)||Xe(o)&&o.value===""||c===""||Array.isArray(c)&&!c.length,P=kt.bind(null,F,r,N),D=(A,j,q,M=ge.maxLength,B=ge.minLength)=>{const J=A?j:q;N[F]={type:A?M:B,message:J,ref:o,...P(A?M:B,J)}};if(s?!Array.isArray(c)||!c.length:p&&(!G&&(I||re(c))||le(c)&&!c||C&&!Ir(d).isValid||W&&!Mr(d).isValid)){const{value:A,message:j}=Je(p)?{value:!!p,message:p}:je(p);if(A&&(N[F]={type:ge.required,message:j,ref:b,...P(ge.required,j)},!r))return T(j),N}if(!I&&(!re(S)||!re(w))){let A,j;const q=je(w),M=je(S);if(!re(c)&&!isNaN(c)){const B=o.valueAsNumber||c&&+c;re(q.value)||(A=B>q.value),re(M.value)||(j=B<M.value)}else{const B=o.valueAsDate||new Date(c),J=de=>new Date(new Date().toDateString()+" "+de),Z=o.type=="time",se=o.type=="week";ue(q.value)&&c&&(A=Z?J(c)>J(q.value):se?c>q.value:B>new Date(q.value)),ue(M.value)&&c&&(j=Z?J(c)<J(M.value):se?c<M.value:B<new Date(M.value))}if((A||j)&&(D(!!A,q.message,M.message,ge.max,ge.min),!r))return T(N[F].message),N}if((R||k)&&!I&&(ue(c)||s&&Array.isArray(c))){const A=je(R),j=je(k),q=!re(A.value)&&c.length>+A.value,M=!re(j.value)&&c.length<+j.value;if((q||M)&&(D(q,A.message,j.message),!r))return T(N[F].message),N}if(x&&!I&&ue(c)){const{value:A,message:j}=je(x);if(en(A)&&!c.match(A)&&(N[F]={type:ge.pattern,message:j,ref:o,...P(ge.pattern,j)},!r))return T(j),N}if(V){if(oe(V)){const A=await V(c,n),j=Pn(A,b);if(j&&(N[F]={...j,...P(ge.validate,j.message)},!r))return T(j.message),N}else if(H(V)){let A={};for(const j in V){if(!ne(A)&&!r)break;const q=Pn(await V[j](c,n),b,j);q&&(A={...q,...P(j,q.message)},T(q.message),r&&(N[F]=A))}if(!ne(A)&&(N[F]={ref:b,...A},!r))return N}}return T(!0),N};const Ot={mode:ie.onSubmit,reValidateMode:ie.onChange,shouldFocusError:!0};function Tt(e={}){let t={...Ot,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:oe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let a=H(t.defaultValues)||H(t.values)?X(t.values||t.defaultValues)||{}:{},s=t.shouldUnregister?{}:X(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,R=0;const k={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let S={...k};const w={array:xn(),state:xn()},x=In(t.mode),V=In(t.reValidateMode),F=t.criteriaMode===ie.all,m=l=>i=>{clearTimeout(R),R=setTimeout(l,i)},y=async l=>{if(!t.disabled&&(k.isValid||S.isValid||l)){const i=t.resolver?ne((await I()).errors):await D(r,!0);i!==n.isValid&&w.state.next({isValid:i})}},c=(l,i)=>{!t.disabled&&(k.isValidating||k.validatingFields||S.isValidating||S.validatingFields)&&((l||Array.from(d.mount)).forEach(u=>{u&&(i?K(n.validatingFields,u,i):z(n.validatingFields,u))}),w.state.next({validatingFields:n.validatingFields,isValidating:!ne(n.validatingFields)}))},b=(l,i=[],u,h,f=!0,g=!0)=>{if(h&&u&&!t.disabled){if(o.action=!0,g&&Array.isArray(v(r,l))){const _=u(v(r,l),h.argA,h.argB);f&&K(r,l,_)}if(g&&Array.isArray(v(n.errors,l))){const _=u(v(n.errors,l),h.argA,h.argB);f&&K(n.errors,l,_),Rt(n.errors,l)}if((k.touchedFields||S.touchedFields)&&g&&Array.isArray(v(n.touchedFields,l))){const _=u(v(n.touchedFields,l),h.argA,h.argB);f&&K(n.touchedFields,l,_)}(k.dirtyFields||S.dirtyFields)&&(n.dirtyFields=Ne(a,s)),w.state.next({name:l,isDirty:j(l,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else K(s,l,i)},T=(l,i)=>{K(n.errors,l,i),w.state.next({errors:n.errors})},N=l=>{n.errors=l,w.state.next({errors:n.errors,isValid:!1})},W=(l,i,u,h)=>{const f=v(r,l);if(f){const g=v(s,l,$(u)?v(a,l):u);$(g)||h&&h.defaultChecked||i?K(s,l,i?g:Fn(f._f)):B(l,g),o.mount&&y()}},C=(l,i,u,h,f)=>{let g=!1,_=!1;const L={name:l};if(!t.disabled){if(!u||h){(k.isDirty||S.isDirty)&&(_=n.isDirty,n.isDirty=L.isDirty=j(),g=_!==L.isDirty);const Y=ce(v(a,l),i);_=!!v(n.dirtyFields,l),Y?z(n.dirtyFields,l):K(n.dirtyFields,l,!0),L.dirtyFields=n.dirtyFields,g=g||(k.dirtyFields||S.dirtyFields)&&_!==!Y}if(u){const Y=v(n.touchedFields,l);Y||(K(n.touchedFields,l,u),L.touchedFields=n.touchedFields,g=g||(k.touchedFields||S.touchedFields)&&Y!==u)}g&&f&&w.state.next(L)}return g?L:{}},G=(l,i,u,h)=>{const f=v(n.errors,l),g=(k.isValid||S.isValid)&&le(i)&&n.isValid!==i;if(t.delayError&&u?(p=m(()=>T(l,u)),p(t.delayError)):(clearTimeout(R),p=null,u?K(n.errors,l,u):z(n.errors,l)),(u?!ce(f,u):f)||!ne(h)||g){const _={...h,...g&&le(i)?{isValid:i}:{},errors:n.errors,name:l};n={...n,..._},w.state.next(_)}},I=async l=>{c(l,!0);const i=await t.resolver(s,t.context,ht(l||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return c(l),i},P=async l=>{const{errors:i}=await I(l);if(l)for(const u of l){const h=v(i,u);h?K(n.errors,u,h):z(n.errors,u)}else n.errors=i;return i},D=async(l,i,u={valid:!0})=>{for(const h in l){const f=l[h];if(f){const{_f:g,..._}=f;if(g){const L=d.array.has(g.name),Y=f._f&&Et(f._f);Y&&k.validatingFields&&c([h],!0);const ee=await Dn(f,d.disabled,s,F,t.shouldUseNativeValidation&&!i,L);if(Y&&k.validatingFields&&c([h]),ee[g.name]&&(u.valid=!1,i))break;!i&&(v(ee,g.name)?L?St(n.errors,ee,g.name):K(n.errors,g.name,ee[g.name]):z(n.errors,g.name))}!ne(_)&&await D(_,i,u)}}return u.valid},A=()=>{for(const l of d.unMount){const i=v(r,l);i&&(i._f.refs?i._f.refs.every(u=>!fn(u)):!fn(i._f.ref))&&he(l)}d.unMount=new Set},j=(l,i)=>!t.disabled&&(l&&i&&K(s,l,i),!ce(pe(),a)),q=(l,i,u)=>xr(l,d,{...o.mount?s:$(i)?a:ue(l)?{[l]:i}:i},u,i),M=l=>rn(v(o.mount?s:a,l,t.shouldUnregister?v(a,l,[]):[])),B=(l,i,u={})=>{const h=v(r,l);let f=i;if(h){const g=h._f;g&&(!g.disabled&&K(s,l,Lr(i,g)),f=Xe(g.ref)&&re(i)?"":i,Nr(g.ref)?[...g.ref.options].forEach(_=>_.selected=f.includes(_.value)):g.refs?Ce(g.ref)?g.refs.length>1?g.refs.forEach(_=>(!_.defaultChecked||!_.disabled)&&(_.checked=Array.isArray(f)?!!f.find(L=>L===_.value):f===_.value)):g.refs[0]&&(g.refs[0].checked=!!f):g.refs.forEach(_=>_.checked=_.value===f):An(g.ref)?g.ref.value="":(g.ref.value=f,g.ref.type||w.state.next({name:l,values:X(s)})))}(u.shouldDirty||u.shouldTouch)&&C(l,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Q(l)},J=(l,i,u)=>{for(const h in i){const f=i[h],g=`${l}.${h}`,_=v(r,g);(d.array.has(l)||H(f)||_&&!_._f)&&!ye(f)?J(g,f,u):B(g,f,u)}},Z=(l,i,u={})=>{const h=v(r,l),f=d.array.has(l),g=X(i);K(s,l,g),f?(w.array.next({name:l,values:X(s)}),(k.isDirty||k.dirtyFields||S.isDirty||S.dirtyFields)&&u.shouldDirty&&w.state.next({name:l,dirtyFields:Ne(a,s),isDirty:j(l,g)})):h&&!h._f&&!re(g)?J(l,g,u):B(l,g,u),Mn(l,d)&&w.state.next({...n}),w.state.next({name:o.mount?l:void 0,values:X(s)})},se=async l=>{o.mount=!0;const i=l.target;let u=i.name,h=!0;const f=v(r,u),g=_=>{h=Number.isNaN(_)||ye(_)&&isNaN(_.getTime())||ce(_,v(s,u,_))};if(f){let _,L;const Y=i.type?Fn(f._f):Ar(l),ee=l.type===Ze.BLUR||l.type===Ze.FOCUS_OUT,Yr=!wt(f._f)&&!t.resolver&&!v(n.errors,u)&&!f._f.deps||jt(ee,v(n.touchedFields,u),n.isSubmitted,V,x),dn=Mn(u,d,ee);K(s,u,Y),ee?(f._f.onBlur&&f._f.onBlur(l),p&&p(0)):f._f.onChange&&f._f.onChange(l);const gn=C(u,Y,ee),zr=!ne(gn)||dn;if(!ee&&w.state.next({name:u,type:l.type,values:X(s)}),Yr)return(k.isValid||S.isValid)&&(t.mode==="onBlur"?ee&&y():ee||y()),zr&&w.state.next({name:u,...dn?{}:gn});if(!ee&&dn&&w.state.next({...n}),t.resolver){const{errors:On}=await I([u]);if(g(Y),h){const Wr=Bn(n.errors,r,u),Tn=Bn(On,r,Wr.name||u);_=Tn.error,u=Tn.name,L=ne(On)}}else c([u],!0),_=(await Dn(f,d.disabled,s,F,t.shouldUseNativeValidation))[u],c([u]),g(Y),h&&(_?L=!1:(k.isValid||S.isValid)&&(L=await D(r,!0)));h&&(f._f.deps&&Q(f._f.deps),G(u,L,_,gn))}},de=(l,i)=>{if(v(n.errors,i)&&l.focus)return l.focus(),1},Q=async(l,i={})=>{let u,h;const f=Le(l);if(t.resolver){const g=await P($(l)?l:f);u=ne(g),h=l?!f.some(_=>v(g,_)):u}else l?(h=(await Promise.all(f.map(async g=>{const _=v(r,g);return await D(_&&_._f?{[g]:_}:_)}))).every(Boolean),!(!h&&!n.isValid)&&y()):h=u=await D(r);return w.state.next({...!ue(l)||(k.isValid||S.isValid)&&u!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:u}:{},errors:n.errors}),i.shouldFocus&&!h&&Me(r,de,l?f:d.mount),h},pe=l=>{const i={...o.mount?s:a};return $(l)?i:ue(l)?v(i,l):l.map(u=>v(i,u))},me=(l,i)=>({invalid:!!v((i||n).errors,l),isDirty:!!v((i||n).dirtyFields,l),error:v((i||n).errors,l),isValidating:!!v(n.validatingFields,l),isTouched:!!v((i||n).touchedFields,l)}),ln=l=>{l&&Le(l).forEach(i=>z(n.errors,i)),w.state.next({errors:l?n.errors:{}})},Ge=(l,i,u)=>{const h=(v(r,l,{_f:{}})._f||{}).ref,f=v(n.errors,l)||{},{ref:g,message:_,type:L,...Y}=f;K(n.errors,l,{...Y,...i,ref:h}),w.state.next({name:l,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},on=(l,i)=>oe(l)?w.state.subscribe({next:u=>l(q(void 0,i),u)}):q(l,i,!0),Ue=l=>w.state.subscribe({next:i=>{At(l.name,i.name,l.exact)&&_t(i,l.formState||k,qe,l.reRenderRoot)&&l.callback({values:{...s},...n,...i})}}).unsubscribe,un=l=>(o.mount=!0,S={...S,...l.formState},Ue({...l,formState:S})),he=(l,i={})=>{for(const u of l?Le(l):d.mount)d.mount.delete(u),d.array.delete(u),i.keepValue||(z(r,u),z(s,u)),!i.keepError&&z(n.errors,u),!i.keepDirty&&z(n.dirtyFields,u),!i.keepTouched&&z(n.touchedFields,u),!i.keepIsValidating&&z(n.validatingFields,u),!t.shouldUnregister&&!i.keepDefaultValue&&z(a,u);w.state.next({values:X(s)}),w.state.next({...n,...i.keepDirty?{isDirty:j()}:{}}),!i.keepIsValid&&y()},Oe=({disabled:l,name:i})=>{(le(l)&&o.mount||l||d.disabled.has(i))&&(l?d.disabled.add(i):d.disabled.delete(i))},ve=(l,i={})=>{let u=v(r,l);const h=le(i.disabled)||le(t.disabled);return K(r,l,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:l}},name:l,mount:!0,...i}}),d.mount.add(l),u?Oe({disabled:le(i.disabled)?i.disabled:t.disabled,name:l}):W(l,!0,i.value),{...h?{disabled:i.disabled||t.disabled}:{},...t.progressive?{required:!!i.required,min:Ve(i.min),max:Ve(i.max),minLength:Ve(i.minLength),maxLength:Ve(i.maxLength),pattern:Ve(i.pattern)}:{},name:l,onChange:se,onBlur:se,ref:f=>{if(f){ve(l,i),u=v(r,l);const g=$(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,_=yt(g),L=u._f.refs||[];if(_?L.find(Y=>Y===g):g===u._f.ref)return;K(r,l,{_f:{...u._f,..._?{refs:[...L.filter(fn),g,...Array.isArray(v(a,l))?[{}]:[]],ref:{type:g.type,name:l}}:{ref:g}}}),W(l,!1,void 0,g)}else u=v(r,l,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(jr(d.array,l)&&o.action)&&d.unMount.add(l)}}},Ee=()=>t.shouldFocusError&&Me(r,de,d.mount),Te=l=>{le(l)&&(w.state.next({disabled:l}),Me(r,(i,u)=>{const h=v(r,u);h&&(i.disabled=h._f.disabled||l,Array.isArray(h._f.refs)&&h._f.refs.forEach(f=>{f.disabled=h._f.disabled||l}))},0,!1))},ke=(l,i)=>async u=>{let h;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=X(s);if(w.state.next({isSubmitting:!0}),t.resolver){const{errors:g,values:_}=await I();n.errors=g,f=_}else await D(r);if(d.disabled.size)for(const g of d.disabled)K(f,g,void 0);if(z(n.errors,"root"),ne(n.errors)){w.state.next({errors:{}});try{await l(f,u)}catch(g){h=g}}else i&&await i({...n.errors},u),Ee(),setTimeout(Ee);if(w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ne(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},we=(l,i={})=>{v(r,l)&&($(i.defaultValue)?Z(l,X(v(a,l))):(Z(l,i.defaultValue),K(a,l,X(i.defaultValue))),i.keepTouched||z(n.touchedFields,l),i.keepDirty||(z(n.dirtyFields,l),n.isDirty=i.defaultValue?j(l,X(v(a,l))):j()),i.keepError||(z(n.errors,l),k.isValid&&y()),w.state.next({...n}))},_e=(l,i={})=>{const u=l?X(l):a,h=X(u),f=ne(l),g=f?a:h;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues){const _=new Set([...d.mount,...Object.keys(Ne(a,s))]);for(const L of Array.from(_))v(n.dirtyFields,L)?K(g,L,v(s,L)):Z(L,v(g,L))}else{if(wn&&$(l))for(const _ of d.mount){const L=v(r,_);if(L&&L._f){const Y=Array.isArray(L._f.refs)?L._f.refs[0]:L._f.ref;if(Xe(Y)){const ee=Y.closest("form");if(ee){ee.reset();break}}}}for(const _ of d.mount)Z(_,v(g,_))}s=X(g),w.array.next({values:{...g}}),w.state.next({values:{...g}})}d={mount:i.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!k.isValid||!!i.keepIsValid||!!i.keepDirtyValues,o.watch=!!t.shouldUnregister,w.state.next({submitCount:i.keepSubmitCount?n.submitCount:0,isDirty:f?!1:i.keepDirty?n.isDirty:!!(i.keepDefaultValues&&!ce(l,a)),isSubmitted:i.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&s?Ne(a,s):n.dirtyFields:i.keepDefaultValues&&l?Ne(a,l):i.keepDirty?n.dirtyFields:{},touchedFields:i.keepTouched?n.touchedFields:{},errors:i.keepErrors?n.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Ae=(l,i)=>_e(oe(l)?l(s):l,i),xe=(l,i={})=>{const u=v(r,l),h=u&&u._f;if(h){const f=h.refs?h.refs[0]:h.ref;f.focus&&(f.focus(),i.shouldSelect&&oe(f.select)&&f.select())}},qe=l=>{n={...n,...l}},Sn={control:{register:ve,unregister:he,getFieldState:me,handleSubmit:ke,setError:Ge,_subscribe:Ue,_runSchema:I,_getWatch:q,_getDirty:j,_setValid:y,_setFieldArray:b,_setDisabledField:Oe,_setErrors:N,_getFieldArray:M,_reset:_e,_resetDefaultValues:()=>oe(t.defaultValues)&&t.defaultValues().then(l=>{Ae(l,t.resetOptions),w.state.next({isLoading:!1})}),_removeUnmounted:A,_disableForm:Te,_subjects:w,_proxyFormState:k,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(l){o=l},get _defaultValues(){return a},get _names(){return d},set _names(l){d=l},get _formState(){return n},get _options(){return t},set _options(l){t={...t,...l}}},subscribe:un,trigger:Q,register:ve,handleSubmit:ke,watch:on,setValue:Z,getValues:pe,reset:Ae,resetField:we,clearErrors:ln,unregister:he,setError:Ge,setFocus:xe,getFieldState:me};return{...Sn,formControl:Sn}}const xt=typeof window<"u"?E.useLayoutEffect:E.useEffect;function qt(e={}){const t=E.useRef(void 0),n=E.useRef(void 0),[r,a]=E.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:Tt(e),formState:r},e.formControl&&e.defaultValues&&!oe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,xt(()=>{const o=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(d=>({...d,isReady:!0})),o},[s]),E.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),E.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!ne(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),E.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),E.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),E.useEffect(()=>{e.values&&!ce(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[s,e.values]),E.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=Or(r,s),t.current}function Br(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const Cn=globalThis!=null&&globalThis.document?O.useLayoutEffect:()=>{};var Nt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Vt=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Nt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const It=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ft(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Lt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Mt=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Lt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Bt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pt=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Bt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Dt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ct=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Dt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gt={error:Ct,warning:It,info:Mt,success:Jr},Ut=O.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:p=!1,closeButton:R=!1,onClose:k}=e,S=Kt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:w}=Se(),x=vr("Alert"),V=Gt[a];return E.createElement("div",Object.assign({},S,{ref:t,className:w(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":p,"navds-alert--close-button":R})}),E.createElement(V,{title:x(a),className:w("navds-alert__icon")}),E.createElement(kr,{as:"div",size:s,className:w("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),R&&!p&&E.createElement("div",{className:w("navds-alert__button-wrapper")},E.createElement(yr,{className:w("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:k,type:"button",icon:E.createElement(Zr,{title:["error","warning"].includes(a)?x("closeAlert"):x("closeMessage")})})))});var $t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht=O.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:p}=br(e,"select"),{children:R,label:k,className:S,description:w,htmlSize:x,hideLabel:V=!1,style:F}=e,m=$t(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:y}=Se(),c={onMouseDown:b=>{p&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{p&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return E.createElement("div",{className:y(S,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":p,"navds-select--error":s,"navds-select--readonly":p})},E.createElement(hn,{htmlFor:n.id,size:o,className:y("navds-form-field__label",{"navds-sr-only":V})},p&&E.createElement(Xr,null),k),!!w&&E.createElement(De,{className:y("navds-form-field__description",{"navds-sr-only":V}),id:d,size:o,as:"div"},w),E.createElement("div",{className:y("navds-select__container"),style:F},E.createElement("select",Object.assign({},pr(m,["error","errorId","size","readOnly"]),n,c,{ref:t,className:y("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:x}),R),E.createElement(Vt,{className:y("navds-select__chevron"),"aria-hidden":!0})),E.createElement("div",{className:y("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&E.createElement(hr,{size:o,showIcon:!0},e.error)))});var Yt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const zt=O.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=Yt(e,["as","className","underline","variant","inlineText"]);const{cn:p}=Se();return E.createElement(n,Object.assign({},d,{ref:t,className:p("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var Wt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Jt=O.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=Wt(e,["children","className","variant","size","icon"]);const{cn:p}=Se(),R=(a==null?void 0:a.endsWith("-filled"))&&"strong",k=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",S=a==null?void 0:a.replace("-filled","").replace("-moderate","");return E.createElement(De,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:p("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${R||k||"outline"}`,`navds-tag--${S}`)}),o&&E.createElement("span",{className:p("navds-tag__icon--left")},o),n)});var Zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Kn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Gn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function $e(e){return parseInt(e,10)||0}const Xt=O.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:p,style:R,value:k}=e,S=Zt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:w}=O.useRef(k!=null),x=O.useRef(null),V=Qr(x,t),F=O.useRef(null),m=O.useRef(0),[y,c]=O.useState({outerHeightStyle:0}),b=E.useCallback(()=>{const C=x.current,I=Gn(C).getComputedStyle(C);if(I.width==="0px")return{outerHeightStyle:0};const P=F.current;P.style.width=I.width,P.value=C.value||S.placeholder||"x",P.value.slice(-1)===`
`&&(P.value+=" ");const D=I.boxSizing,A=$e(I.paddingBottom)+$e(I.paddingTop),j=$e(I.borderBottomWidth)+$e(I.borderTopWidth),q=P.scrollHeight-A;P.value="x";const M=P.scrollHeight-A;let B=q;d&&(B=Math.max(Number(d)*M,B)),o&&(B=Math.min(Number(o)*M,B)),B=Math.max(B,M);const J=B+(D==="border-box"?A+j:0),Z=Math.abs(B-q)<=1;return{outerHeightStyle:J,overflow:Z}},[o,d,S.placeholder]),T=()=>{const C=b();Un(C)||c(G=>Kn(G,C,m))};Cn(()=>{const C=()=>{const A=b();Un(A)||dt.flushSync(()=>{c(j=>Kn(j,A,m))})},G=Br(()=>{var A,j,q;if(m.current=0,!((A=x.current)===null||A===void 0)&&A.style.height||!((j=x.current)===null||j===void 0)&&j.style.width){((q=x.current)===null||q===void 0?void 0:q.style.overflow)==="hidden"&&c(M=>Object.assign(Object.assign({},M),{overflow:!1}));return}C()},166,!0),I=x.current,P=Gn(I);P.addEventListener("resize",G);let D;return typeof ResizeObserver<"u"&&(D=new ResizeObserver(G),D.observe(I)),()=>{G.clear(),P.removeEventListener("resize",G),D&&D.disconnect()}},[b]),Cn(()=>{T()}),O.useEffect(()=>{m.current=0},[k]);const N=C=>{m.current=0,w||T(),s&&s(C)},W=Object.assign({"--__ac-textarea-height":y.outerHeightStyle+"px","--__axc-textarea-height":y.outerHeightStyle+"px",overflow:y.overflow&&!p&&!(!((n=x.current)===null||n===void 0)&&n.style.height)&&!(!((r=x.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},R);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:k,onChange:N,ref:V,rows:d,style:W},S,{className:a})),E.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:F,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},R)}))});function Un(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Qt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=Se(),o=vr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=t-n,[p,R]=O.useState(d);return O.useEffect(()=>{const k=Br(()=>{R(d)},2e3);return k(),()=>{k.clear()}},[d]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:s("navds-sr-only")},o("maxLength",{maxLength:t})),d<20&&E.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},$n(p,o)),E.createElement(De,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},$n(d,o)))},$n=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var ea=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const na=O.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:p,size:R,inputDescriptionId:k}=br(e,"textarea"),{label:S,className:w,description:x,maxLength:V,hideLabel:F=!1,resize:m,UNSAFE_autoScrollbar:y,i18n:c,readOnly:b}=e,T=ea(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:N}=Se(),W=et(),C=V!==void 0&&V>0,[G,I]=O.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),P=()=>{let A=T!=null&&T.minRows?T==null?void 0:T.minRows:3;return R==="small"&&(A=T!=null&&T.minRows?T==null?void 0:T.minRows:2),A},D=nt(s["aria-describedby"],{[W??""]:C});return E.createElement("div",{className:N(w,"navds-form-field",`navds-form-field--${R}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":p,"navds-textarea--autoscrollbar":y,[`navds-textarea--resize-${m===!0?"both":m}`]:m})},E.createElement(hn,{htmlFor:s.id,size:R,className:N("navds-form-field__label",{"navds-sr-only":F})},b&&E.createElement(rt,null),S),!!x&&E.createElement(De,{className:N("navds-form-field__description",{"navds-sr-only":F}),id:k,size:R,as:"div"},x),E.createElement(Xt,Object.assign({},pr(T,["error","errorId","size"]),s,{onChange:tt(e.onChange,e.value===void 0?A=>I(A.target.value):void 0),minRows:P(),autoScrollbar:y,ref:t,readOnly:b,className:N("navds-textarea__input","navds-body-short",`navds-body-short--${R??"medium"}`)},D?{"aria-describedby":D}:{})),C&&!b&&!s.disabled&&E.createElement(Qt,{maxLengthId:W,maxLength:V,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:G.length,size:R,i18n:c}),E.createElement("div",{className:N("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&E.createElement(hr,{size:R,showIcon:!0},e.error)))});function ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hn={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function ta(){if(Yn)return Fe;Yn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Fe.Fragment=t,Fe.jsx=n,Fe.jsxs=n,Fe}var zn;function aa(){return zn||(zn=1,Hn.exports=ta()),Hn.exports}var Be=aa();const sa=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Be.jsx(Ut,{variant:"warning",size:"small",children:Be.jsx(Er,{gap:"2",children:E.Children.map(e,t=>Be.jsx(De,{size:"small",children:t},at(t)?t.key:t))})}),tn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};be(tn);var Wn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Jn;function la(){return Jn||(Jn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Wn)),Wn.exports}var ia=la();const an=ra(ia),oa="_borderbox_1vkvn_1",ua="_error_1vkvn_5",da="_warning_1vkvn_8",ga={borderbox:oa,error:ua,warning:da};an.bind(ga);const ca="_aksjonspunkt_kn1hn_1",fa="_erAksjonspunktApent_kn1hn_4",ma="_erIkkeGodkjentAvBeslutter_kn1hn_8",va={aksjonspunkt:ca,erAksjonspunktApent:fa,erIkkeGodkjentAvBeslutter:ma};an.bind(va);be(tn);be(tn);const ka="_divider_1t980_1",ya="_dividerParagraf_1t980_8",ba="_leftPanel_1t980_11",pa="_rightPanel_1t980_14",ha={divider:ka,dividerParagraf:ya,leftPanel:ba,rightPanel:pa};an.bind(ha);const Ea="_editedIcon_ulrjl_1",wa={editedIcon:Ea},_a=an.bind(wa),Aa=({className:e=""})=>Be.jsx("span",{"data-testid":"editedIcon",className:_a("editedIcon",e),children:Be.jsx(Pt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});be(tn);function ja(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zn={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn;function Ra(){if(Xn)return Ie;Xn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Ie.Fragment=t,Ie.jsx=n,Ie.jsxs=n,Ie}var Qn;function Sa(){return Qn||(Qn=1,Zn.exports=Ra()),Zn.exports}var te=Sa();const Pr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Dr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var yn={exports:{}},Oa=yn.exports,er;function Ta(){return er||(er=1,function(e,t){(function(n,r){e.exports=r()})(Oa,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,p={},R=function(m){return(m=+m)+(m>68?1900:2e3)},k=function(m){return function(y){this[m]=+y}},S=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(y){if(!y||y==="Z")return 0;var c=y.match(/([+-]|\d\d)/g),b=60*c[1]+(+c[2]||0);return b===0?0:c[0]==="+"?-b:b}(m)}],w=function(m){var y=p[m];return y&&(y.indexOf?y:y.s.concat(y.f))},x=function(m,y){var c,b=p.meridiem;if(b){for(var T=1;T<=24;T+=1)if(m.indexOf(b(T,0,y))>-1){c=T>12;break}}else c=m===(y?"pm":"PM");return c},V={A:[d,function(m){this.afternoon=x(m,!1)}],a:[d,function(m){this.afternoon=x(m,!0)}],Q:[a,function(m){this.month=3*(m-1)+1}],S:[a,function(m){this.milliseconds=100*+m}],SS:[s,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[o,k("seconds")],ss:[o,k("seconds")],m:[o,k("minutes")],mm:[o,k("minutes")],H:[o,k("hours")],h:[o,k("hours")],HH:[o,k("hours")],hh:[o,k("hours")],D:[o,k("day")],DD:[s,k("day")],Do:[d,function(m){var y=p.ordinal,c=m.match(/\d+/);if(this.day=c[0],y)for(var b=1;b<=31;b+=1)y(b).replace(/\[|\]/g,"")===m&&(this.day=b)}],w:[o,k("week")],ww:[s,k("week")],M:[o,k("month")],MM:[s,k("month")],MMM:[d,function(m){var y=w("months"),c=(w("monthsShort")||y.map(function(b){return b.slice(0,3)})).indexOf(m)+1;if(c<1)throw new Error;this.month=c%12||c}],MMMM:[d,function(m){var y=w("months").indexOf(m)+1;if(y<1)throw new Error;this.month=y%12||y}],Y:[/[+-]?\d+/,k("year")],YY:[s,function(m){this.year=R(m)}],YYYY:[/\d{4}/,k("year")],Z:S,ZZ:S};function F(m){var y,c;y=m,c=p&&p.formats;for(var b=(m=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,D,A){var j=A&&A.toUpperCase();return D||c[A]||n[A]||c[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,M,B){return M||B.slice(1)})})).match(r),T=b.length,N=0;N<T;N+=1){var W=b[N],C=V[W],G=C&&C[0],I=C&&C[1];b[N]=I?{regex:G,parser:I}:W.replace(/^\[|\]$/g,"")}return function(P){for(var D={},A=0,j=0;A<T;A+=1){var q=b[A];if(typeof q=="string")j+=q.length;else{var M=q.regex,B=q.parser,J=P.slice(j),Z=M.exec(J)[0];B.call(D,Z),P=P.replace(Z,"")}}return function(se){var de=se.afternoon;if(de!==void 0){var Q=se.hours;de?Q<12&&(se.hours+=12):Q===12&&(se.hours=0),delete se.afternoon}}(D),D}}return function(m,y,c){c.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(R=m.parseTwoDigitYear);var b=y.prototype,T=b.parse;b.parse=function(N){var W=N.date,C=N.utc,G=N.args;this.$u=C;var I=G[1];if(typeof I=="string"){var P=G[2]===!0,D=G[3]===!0,A=P||D,j=G[2];D&&(j=G[2]),p=this.$locale(),!P&&j&&(p=c.Ls[j]),this.$d=function(J,Z,se,de){try{if(["x","X"].indexOf(Z)>-1)return new Date((Z==="X"?1e3:1)*J);var Q=F(Z)(J),pe=Q.year,me=Q.month,ln=Q.day,Ge=Q.hours,on=Q.minutes,Ue=Q.seconds,un=Q.milliseconds,he=Q.zone,Oe=Q.week,ve=new Date,Ee=ln||(pe||me?1:ve.getDate()),Te=pe||ve.getFullYear(),ke=0;pe&&!me||(ke=me>0?me-1:ve.getMonth());var we,_e=Ge||0,Ae=on||0,xe=Ue||0,qe=un||0;return he?new Date(Date.UTC(Te,ke,Ee,_e,Ae,xe,qe+60*he.offset*1e3)):se?new Date(Date.UTC(Te,ke,Ee,_e,Ae,xe,qe)):(we=new Date(Te,ke,Ee,_e,Ae,xe,qe),Oe&&(we=de(we).week(Oe).toDate()),we)}catch{return new Date("")}}(W,I,C,c),this.init(),j&&j!==!0&&(this.$L=this.locale(j).$L),A&&W!=this.format(I)&&(this.$d=new Date("")),p={}}else if(I instanceof Array)for(var q=I.length,M=1;M<=q;M+=1){G[1]=I[M-1];var B=c.apply(this,G);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}M===q&&(this.$d=new Date(""))}else T.call(this,N)}}})}(yn)),yn.exports}var xa=Ta();const qa=ja(xa),Na="_readOnlyContainer_v0eco_1",Va="_readOnlyContent_v0eco_4",Fa="_textarea_v0eco_11",Ia="_space_v0eco_15",He={readOnlyContainer:Na,readOnlyContent:Va,textarea:Fa,space:Ia},La=e=>e!=null&&e!=="",Cr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>La(t)?te.jsxs("div",{className:He.readOnlyContainer,children:[e&&!a&&te.jsx(hn,{size:"small",children:e}),te.jsx("div",{className:r==="textarea"?He.textarea:"",children:te.jsxs(kr,{className:He.readOnlyContent,size:s,children:[t,n&&te.jsx(Aa,{className:He.space})]})})]}):null;En.extend(qa);const nr=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:p,className:R,hideLabel:k,isEdited:S,size:w})=>{const{formState:{errors:x}}=Ke(),{field:V}=qr({name:e,rules:{validate:O.useMemo(()=>Pr(r),[r])}});if(a){const y=n.map(b=>b.props).find(b=>b.value===V.value),c=y?y.children:void 0;return te.jsx(Cr,{value:c,label:t,hideLabel:k,isEdited:S,size:w})}const F=V.value||"",m=!n.map(y=>y.props.value).includes(F)&&F!=="";return m&&console.warn(`No corresponding option found for value '${F}'`),te.jsxs(Ht,{size:"small",className:R,error:Dr(x,e),label:t,description:s,value:o&&p||m?"":V.value,disabled:p,onChange:y=>{d&&d(y),V.onChange(y)},hideLabel:k,children:[te.jsx("option",{style:{display:"none"}}),",",n]})},Ma="_textAreaFieldWithBadges_bdz0b_1",Ba="_etikettWrapper_bdz0b_4",rr={textAreaFieldWithBadges:Ma,etikettWrapper:Ba},Pa=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=S=>S,className:d,description:p,isEdited:R,...k})=>{const{formState:{errors:S}}=Ke(),{field:w}=qr({name:e,rules:{validate:O.useMemo(()=>Pr(s),[s])}});return n?te.jsx(Cr,{label:t,value:w.value,type:"textarea",isEdited:R,hideLabel:k.hideLabel}):te.jsxs("div",{className:a?rr.textAreaFieldWithBadges:null,children:[a&&te.jsx("div",{className:rr.etikettWrapper,children:a.map(({type:x,titleText:V})=>te.jsx(Jt,{variant:x,size:"small",children:V},V))}),te.jsx(na,{size:"small",label:t,description:p,className:d,autoComplete:"off",...w,onChange:x=>w.onChange(x.currentTarget.value!==""?o(x.currentTarget.value):null),value:w.value?w.value:"",error:Dr(S,e),maxLength:r,...k})]})},Da=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return O.useEffect(()=>()=>{a&&a(o())},[]),te.jsx(ft,{...e,children:te.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Kr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bn={exports:{}},Ca=bn.exports,tr;function Ka(){return tr||(tr=1,function(e,t){(function(n,r){e.exports=r()})(Ca,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(bn)),bn.exports}var Ga=Ka();const Ua=Kr(Ga);var pn={exports:{}},$a=pn.exports,ar;function Ha(){return ar||(ar=1,function(e,t){(function(n,r){e.exports=r()})($a,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(pn)),pn.exports}var Ya=Ha();const za=Kr(Ya),Wa="Dato må være før eller lik {limit}",Ja="Dato må være etter eller lik {limit}",Za="Perioder kan ikke overlappe i tid",Xa="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Qa="Dato må være lik {value}",es="Dato må skrives slik: dd.mm.åååå",ns="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",rs="Tallet kan ikke inneholde mer enn to desimaler",ts="Tallet kan ikke ha desimaler",as="Feltet kan kun inneholde tall",ss="Ugyldig fødselsnummer",ls="Feltet må være et fødselsnummer (11 siffer)",is="Ugyldig organisasjonsnummer.",os="Ugyldig organisasjonsnummer eller fødselsnummer",us="Startdato må være før eller lik sluttdato",ds="Periode er utenfor opptjeningsperioden",gs="Ugyldig saksnummer eller fødselsnummer",cs="Feltet inneholder ugyldige tegn: {text}",fs="Feltet inneholder en ugyldig verdi: {value}",ms="Feltet kan ikke inneholde mellomrom",vs="Feltet må fylles ut",ks="Du kan skrive maksimalt {length} tegn",ys="Du må skrive minst {length} tegn",bs="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",ps="Feltet må være mindre eller lik {length}",hs="Feltet må være større eller lik {length}",Es="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",ws={DateNotBeforeOrEqual:Wa,DateNotAfterOrEqual:Ja,DateRangesOverlapping:Za,DateRangesOverlappingPeriodTypes:Xa,DatesNotEqual:Qa,InvalidDate:es,InvalidDatesInPeriod:ns,InvalidDecimal:rs,InvalidInteger:ts,InvalidNumber:as,InvalidFodselsnr:ss,InvalidFodselsnrFormat:ls,InvalidOrgnr:is,InvalidOrgnrOrFodselsnr:os,InvalidPeriod:us,InvalidPeriodRange:ds,InvalidSaksnrOrFodselsnrFormat:gs,InvalidText:cs,InvalidValue:fs,IllegalWhiteSpace:ms,IsRequired:vs,MaxLength:ks,MinLength:ys,MaxLengthOrFodselsnr:bs,MaxValue:ps,MinValue:hs,SammeFodselsnrSomSoker:Es},{formatMessage:sn}=be(ws),_s=e=>sn({id:"InvalidText"},{text:e}),As=()=>sn({id:"IsRequired"}),js=e=>sn({id:"MaxLength"},{length:e}),Rs=e=>sn({id:"MinLength"},{length:e}),Ss=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Os=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Rn=e=>e==null||e.toString().trim().length===0;En.extend(Ua);En.extend(za);const mn=e=>Rn(e)?As():void 0,Ts=e=>t=>Rn(t)||t.toString().trim().length>=e?null:Rs(e),Gr=e=>t=>Rn(t)||t.toString().trim().length<=e?null:js(e),xs=e=>{if(!Ss.test(e)){const t=e.replace(Os,"");return _s(t.replace(/[\t]/g,"Tabulatortegn"))}return null},qs=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Ns="_ukjentAdresseMargins_4teno_1",Vs={ukjentAdresseMargins:Ns},Fs={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Is=be(Fs),Ur=()=>U.jsx(wr,{value:Is,children:U.jsx("div",{className:Vs.ukjentAdresseMargins,children:U.jsx(sa,{children:U.jsx("b",{children:U.jsx(vn,{id:"UkjentAdresse.Text"})})})})});Ur.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const Ls="_bredde_jav4h_9",sr={bredde:Ls},Ms=Gr(4e3),Bs=Gr(1e4),Ps=Ts(3),Ds=e=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Cs=(e,t)=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.FRITEKST||e===ae.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ae.VARSEL_OM_TILBAKEKREVING||e===ae.TBK_INNHENTE_OPPLYSNINGER||e===ae.VARSEL_OM_REVURDERING&&t===fe.ANNET,Ks=(e,t)=>t===Re.ENGANGSSTONAD?e.filter(n=>n.kode===fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===fe.ANNET):t===Re.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==fe.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,Gs=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ae.VARSEL_OM_REVURDERING}:{...t}},Us=e=>{const t=e;return e.brevmalkode===ae.VARSEL_OM_REVURDERING&&t.arsakskode!==fe.ANNET&&(t.fritekst=" "),t},$r=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:p})=>{const R=st(),k=qt({defaultValues:o??Gs(e)}),S=k.watch("brevmalkode"),w=k.watch("fritekst"),x=k.watch("arsakskode"),V=O.useMemo(()=>Ks(r,a),[]);if(!e.språkkode)return null;const{formState:F}=k,m=b=>{S&&t(S,w,x),b.preventDefault()},y=lt(e.språkkode),c=S===ae.VARSEL_OM_REVURDERING;return U.jsx(Da,{formMethods:k,onSubmit:b=>n(Us(b)),setDataOnUnmount:d,children:U.jsxs(Er,{gap:"4",children:[U.jsx(nr,{name:"brevmalkode",label:R.formatMessage({id:"Messages.Template"}),validate:[mn],selectValues:e.brevmaler.map(b=>U.jsx("option",{value:b.kode,disabled:!b.tilgjengelig,children:b.navn},b.kode)),className:sr.bredde}),c&&U.jsx(nr,{name:"arsakskode",label:R.formatMessage({id:"Messages.Årsak"}),validate:[mn],selectValues:V.map(b=>U.jsx("option",{value:b.kode,children:b.navn},b.kode)),className:sr.bredde}),Cs(S,x)&&U.jsx(Pa,{name:"fritekst",label:R.formatMessage({id:Ds(S)}),validate:[mn,c?Bs:Ms,Ps,xs],maxLength:c?1e4:4e3,badges:[{type:"info",titleText:y}],parse:it}),p&&U.jsx(Ur,{}),U.jsxs(ot,{justify:"space-between",children:[(!c||c&&x!==void 0)&&U.jsx(zt,{href:"#",onClick:m,onKeyDown:b=>b.key==="Enter"?m(b):null,children:U.jsx(vn,{id:"Messages.Preview"})}),U.jsx(yr,{size:"small",variant:"primary",loading:F.isSubmitting,disabled:F.isSubmitting||s,onClick:qs,children:U.jsx(vn,{id:"Messages.Submit"})})]})]})})};$r.__docgenInfo={description:`Messages

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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"brevmalkode",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"arsakskode",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const $s=be(ut),Hr=e=>U.jsx(wr,{value:$s,children:U.jsx($r,{...e})});Hr.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
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
}>`}]},description:""}}};const Hs=e=>U.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:U.jsx(e,{})}),Ys=[{kode:ae.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ae.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],zs=[{kode:fe.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:fe.ANNET,navn:"Annet",kodeverk:"UGUNST"}],al={title:"sak/sak-meldinger",component:Hr,decorators:[Hs],args:{kanVeilede:!1,revurderingVarslingArsak:zs,behandling:{brevmaler:Ys,språkkode:"NB"},previewCallback:cn("button-click"),submitCallback:cn("button-click"),setMeldingFormData:cn("button-click")}},Ye={args:{fagsakYtelseType:Re.FORELDREPENGER,brukerManglerAdresse:!1}},ze={args:{fagsakYtelseType:Re.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},We={args:{fagsakYtelseType:Re.FORELDREPENGER,brukerManglerAdresse:!0}};var lr,ir,or;Ye.parameters={...Ye.parameters,docs:{...(lr=Ye.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(or=(ir=Ye.parameters)==null?void 0:ir.docs)==null?void 0:or.source}}};var ur,dr,gr;ze.parameters={...ze.parameters,docs:{...(ur=ze.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(gr=(dr=ze.parameters)==null?void 0:dr.docs)==null?void 0:gr.source}}};var cr,fr,mr;We.parameters={...We.parameters,docs:{...(cr=We.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(mr=(fr=We.parameters)==null?void 0:fr.docs)==null?void 0:mr.source}}};const sl=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{We as BrukerManglerAdresse,Ye as Default,ze as ForSvangerskapspenger,sl as __namedExportsOrder,al as default};
