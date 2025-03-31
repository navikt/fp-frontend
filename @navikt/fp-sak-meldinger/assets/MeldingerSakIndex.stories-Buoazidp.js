import{j as U}from"./jsx-runtime-D_zvdyIk.js";import{u as Pe,a as Re,d as vr,l as Wr,q as yr,e as kr,S as Zr,b as br,L as hn,r as Jr,B as De,o as pr,E as hr,f as Qr,g as Xr,s as et,R as nt,i as rt,V as Er,y as tt,m as be,P as wr,M as vn,j as at,t as st,v as lt,k as it,n as ot,p as cn}from"./nb_NO-CsHtdWMd.js";import{R as k,r as T}from"./index-BKyFwriW.js";import{d as En}from"./dayjs.min-DkLNzaWO.js";import{h as ut}from"./index-C6uLyQP3.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";var nn=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(nn||{});nn.BRUKERS_ANDEL;nn.FRILANS;nn.EGEN_NÆRING;var ae=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.FRITEKST_HTML="FRIHTM",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ae||{}),Se=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Se||{}),ce=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(ce||{}),Ce=e=>e.type==="checkbox",ke=e=>e instanceof Date,re=e=>e==null;const _r=e=>typeof e=="object";var $=e=>!re(e)&&!Array.isArray(e)&&_r(e)&&!ke(e),Ar=e=>$(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,dt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jr=(e,t)=>e.has(dt(t)),gt=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},wn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wn&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!gt(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=Q(e[a]));else return e;return t}var rn=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,y=(e,t,n)=>{if(!t||!$(e))return n;const r=rn(t.split(/[,[\].]+?/)).reduce((a,s)=>re(a)?a:a[s],e);return H(r)||r===e?H(e[t])?n:e[t]:r},le=e=>typeof e=="boolean",_n=e=>/^\w*$/.test(e),Sr=e=>rn(e.replace(/["|']|\]/g,"").split(/\.|\[/)),K=(e,t,n)=>{let r=-1;const a=_n(t)?[t]:Sr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let h=n;if(r!==o){const S=e[d];h=$(S)||Array.isArray(S)?S:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=h,e=e[d]}};const Je={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ie={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Rr=k.createContext(null),Ke=()=>k.useContext(Rr),ct=e=>{const{children:t,...n}=e;return k.createElement(Rr.Provider,{value:n},t)};var Or=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==ie.all&&(t._proxyFormState[o]=!r||ie.all),n&&(n[o]=!0),e[o]}});return a};function ft(e){const t=Ke(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=k.useState(n._formState),h=k.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),S=k.useRef(a);return S.current=a,k.useEffect(()=>n._subscribe({name:S.current,formState:h.current,exact:s,callback:m=>{!r&&d({...n._formState,...m})}}),[n,r,s]),k.useEffect(()=>{h.current.isValid&&n._setValid(!0)},[n]),k.useMemo(()=>Or(o,n,h.current,!1),[o,n])}var ue=e=>typeof e=="string",Tr=(e,t,n,r,a)=>ue(e)?(r&&t.watch.add(e),y(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),y(n,s))):(r&&(t.watchAll=!0),n);function mt(e){const t=Ke(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},d=k.useRef(r),h=k.useRef(a);d.current=r,k.useEffect(()=>n._subscribe({name:d.current,formState:{values:!0},exact:o,callback:R=>!s&&m(Tr(d.current,n._names,R.values||n._formValues,!1,h.current))}),[n,s,o]);const[S,m]=k.useState(n._getWatch(r,a));return k.useEffect(()=>n._removeUnmounted()),S}function xr(e){const t=Ke(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=jr(a._names.array,n),d=mt({control:a,name:n,defaultValue:y(a._formValues,n,y(a._defaultValues,n,e.defaultValue)),exact:!0}),h=ft({control:a,name:n,exact:!0}),S=k.useRef(e),m=k.useRef(a.register(n,{...e.rules,value:d,...le(e.disabled)?{disabled:e.disabled}:{}})),R=k.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!y(h.errors,n)},isDirty:{enumerable:!0,get:()=>!!y(h.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!y(h.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!y(h.validatingFields,n)},error:{enumerable:!0,get:()=>y(h.errors,n)}}),[h,n]),w=k.useCallback(v=>m.current.onChange({target:{value:Ar(v),name:n},type:Je.CHANGE}),[n]),x=k.useCallback(()=>m.current.onBlur({target:{value:y(a._formValues,n),name:n},type:Je.BLUR}),[n,a._formValues]),V=k.useCallback(v=>{const b=y(a._fields,n);b&&v&&(b._f.ref={focus:()=>v.focus(),select:()=>v.select(),setCustomValidity:c=>v.setCustomValidity(c),reportValidity:()=>v.reportValidity()})},[a._fields,n]),F=k.useMemo(()=>({name:n,value:d,...le(r)||h.disabled?{disabled:h.disabled||r}:{},onChange:w,onBlur:x,ref:V}),[n,r,h.disabled,w,x,V,d]);return k.useEffect(()=>{const v=a._options.shouldUnregister||s;a.register(n,{...S.current.rules,...le(S.current.disabled)?{disabled:S.current.disabled}:{}});const b=(c,p)=>{const O=y(a._fields,c);O&&O._f&&(O._f.mount=p)};if(b(n,!0),v){const c=Q(y(a._options.defaultValues,n));K(a._defaultValues,n,c),H(y(a._formValues,n))&&K(a._formValues,n,c)}return!o&&a.register(n),()=>{(o?v&&!a._state.action:v)?a.unregister(n):b(n,!1)}},[n,a,o,s]),k.useEffect(()=>{a._setDisabledField({disabled:r,name:n})},[r,n,a]),k.useMemo(()=>({field:F,formState:h,fieldState:R}),[F,h,R])}var vt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Me=e=>Array.isArray(e)?e:[e],xn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},yn=e=>re(e)||!_r(e);function fe(e,t){if(yn(e)||yn(t))return e===t;if(ke(e)&&ke(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(ke(s)&&ke(o)||$(s)&&$(o)||Array.isArray(s)&&Array.isArray(o)?!fe(s,o):s!==o)return!1}}return!0}var ne=e=>$(e)&&!Object.keys(e).length,An=e=>e.type==="file",oe=e=>typeof e=="function",Qe=e=>{if(!wn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Nr=e=>e.type==="select-multiple",jn=e=>e.type==="radio",yt=e=>jn(e)||Ce(e),fn=e=>Qe(e)&&e.isConnected;function kt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=H(e)?r++:e[t[r++]];return e}function bt(e){for(const t in e)if(e.hasOwnProperty(t)&&!H(e[t]))return!1;return!0}function Y(e,t){const n=Array.isArray(t)?t:_n(t)?[t]:Sr(t),r=n.length===1?e:kt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&ne(r)||Array.isArray(r)&&bt(r))&&Y(e,n.slice(0,-1)),e}var qr=e=>{for(const t in e)if(oe(e[t]))return!0;return!1};function Xe(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!qr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Xe(e[r],t[r])):re(e[r])||(t[r]=!0);return t}function Vr(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!qr(e[a])?H(t)||yn(n[a])?n[a]=Array.isArray(e[a])?Xe(e[a],[]):{...Xe(e[a])}:Vr(e[a],re(t)?{}:t[a],n[a]):n[a]=!fe(e[a],t[a]);return n}var qe=(e,t)=>Vr(e,t,Xe(t));const Nn={value:!1,isValid:!1},qn={value:!0,isValid:!0};var Fr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?qn:{value:e[0].value,isValid:!0}:qn:Nn}return Nn},Ir=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>H(e)?e:t?e===""?NaN:e&&+e:n&&ue(e)?new Date(e):r?r(e):e;const Vn={isValid:!1,value:null};var Mr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Vn):Vn;function Fn(e){const t=e.ref;return An(t)?t.files:jn(t)?Mr(e.refs).value:Nr(t)?[...t.selectedOptions].map(({value:n})=>n):Ce(t)?Fr(e.refs).value:Ir(H(t.value)?e.ref.value:t.value,e)}var pt=(e,t,n,r)=>{const a={};for(const s of e){const o=y(t,s);o&&K(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},en=e=>e instanceof RegExp,Ve=e=>H(e)?e:en(e)?e.source:$(e)?en(e.value)?e.value.source:e.value:e,In=e=>({isOnSubmit:!e||e===ie.onSubmit,isOnBlur:e===ie.onBlur,isOnChange:e===ie.onChange,isOnAll:e===ie.all,isOnTouch:e===ie.onTouched});const Mn="AsyncFunction";var ht=e=>!!e&&!!e.validate&&!!(oe(e.validate)&&e.validate.constructor.name===Mn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Mn)),Et=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ln=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Le=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=y(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(Le(d,t))break}else if($(d)&&Le(d,t))break}}};function Bn(e,t,n){const r=y(e,n);if(r||_n(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=y(t,s),d=y(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var wt=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return ne(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||ie.all))},_t=(e,t,n)=>!e||!t||e===t||Me(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),At=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,jt=(e,t)=>!rn(y(e,t)).length&&Y(e,t),St=(e,t,n)=>{const r=Me(y(e,n));return K(r,"root",t[n]),K(e,n,r),e},Ze=e=>ue(e);function Pn(e,t,n="validate"){if(Ze(e)||Array.isArray(e)&&e.every(Ze)||le(e)&&!e)return{type:n,message:Ze(e)?e:"",ref:t}}var je=e=>$(e)&&!en(e)?e:{value:e,message:""},Dn=async(e,t,n,r,a,s)=>{const{ref:o,refs:d,required:h,maxLength:S,minLength:m,min:R,max:w,pattern:x,validate:V,name:F,valueAsNumber:v,mount:b}=e._f,c=y(n,F);if(!b||t.has(F))return{};const p=d?d[0]:o,O=A=>{a&&p.reportValidity&&(p.setCustomValidity(le(A)?"":A||""),p.reportValidity())},q={},W=jn(o),C=Ce(o),G=W||C,I=(v||An(o))&&H(o.value)&&H(c)||Qe(o)&&o.value===""||c===""||Array.isArray(c)&&!c.length,P=vt.bind(null,F,r,q),D=(A,j,N,L=ge.maxLength,B=ge.minLength)=>{const Z=A?j:N;q[F]={type:A?L:B,message:Z,ref:o,...P(A?L:B,Z)}};if(s?!Array.isArray(c)||!c.length:h&&(!G&&(I||re(c))||le(c)&&!c||C&&!Fr(d).isValid||W&&!Mr(d).isValid)){const{value:A,message:j}=Ze(h)?{value:!!h,message:h}:je(h);if(A&&(q[F]={type:ge.required,message:j,ref:p,...P(ge.required,j)},!r))return O(j),q}if(!I&&(!re(R)||!re(w))){let A,j;const N=je(w),L=je(R);if(!re(c)&&!isNaN(c)){const B=o.valueAsNumber||c&&+c;re(N.value)||(A=B>N.value),re(L.value)||(j=B<L.value)}else{const B=o.valueAsDate||new Date(c),Z=de=>new Date(new Date().toDateString()+" "+de),J=o.type=="time",se=o.type=="week";ue(N.value)&&c&&(A=J?Z(c)>Z(N.value):se?c>N.value:B>new Date(N.value)),ue(L.value)&&c&&(j=J?Z(c)<Z(L.value):se?c<L.value:B<new Date(L.value))}if((A||j)&&(D(!!A,N.message,L.message,ge.max,ge.min),!r))return O(q[F].message),q}if((S||m)&&!I&&(ue(c)||s&&Array.isArray(c))){const A=je(S),j=je(m),N=!re(A.value)&&c.length>+A.value,L=!re(j.value)&&c.length<+j.value;if((N||L)&&(D(N,A.message,j.message),!r))return O(q[F].message),q}if(x&&!I&&ue(c)){const{value:A,message:j}=je(x);if(en(A)&&!c.match(A)&&(q[F]={type:ge.pattern,message:j,ref:o,...P(ge.pattern,j)},!r))return O(j),q}if(V){if(oe(V)){const A=await V(c,n),j=Pn(A,p);if(j&&(q[F]={...j,...P(ge.validate,j.message)},!r))return O(j.message),q}else if($(V)){let A={};for(const j in V){if(!ne(A)&&!r)break;const N=Pn(await V[j](c,n),p,j);N&&(A={...N,...P(j,N.message)},O(N.message),r&&(q[F]=A))}if(!ne(A)&&(q[F]={ref:p,...A},!r))return q}}return O(!0),q};const Rt={mode:ie.onSubmit,reValidateMode:ie.onChange,shouldFocusError:!0};function Ot(e={}){let t={...Rt,...e},n={submitCount:0,isDirty:!1,isLoading:oe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let a=$(t.defaultValues)||$(t.values)?Q(t.values||t.defaultValues)||{}:{},s=t.shouldUnregister?{}:Q(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,S=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let R={...m};const w={array:xn(),state:xn()},x=In(t.mode),V=In(t.reValidateMode),F=t.criteriaMode===ie.all,v=l=>i=>{clearTimeout(S),S=setTimeout(l,i)},b=async l=>{if(!t.disabled&&(m.isValid||R.isValid||l)){const i=t.resolver?ne((await I()).errors):await D(r,!0);i!==n.isValid&&w.state.next({isValid:i})}},c=(l,i)=>{!t.disabled&&(m.isValidating||m.validatingFields||R.isValidating||R.validatingFields)&&((l||Array.from(d.mount)).forEach(u=>{u&&(i?K(n.validatingFields,u,i):Y(n.validatingFields,u))}),w.state.next({validatingFields:n.validatingFields,isValidating:!ne(n.validatingFields)}))},p=(l,i=[],u,E,f=!0,g=!0)=>{if(E&&u&&!t.disabled){if(o.action=!0,g&&Array.isArray(y(r,l))){const _=u(y(r,l),E.argA,E.argB);f&&K(r,l,_)}if(g&&Array.isArray(y(n.errors,l))){const _=u(y(n.errors,l),E.argA,E.argB);f&&K(n.errors,l,_),jt(n.errors,l)}if((m.touchedFields||R.touchedFields)&&g&&Array.isArray(y(n.touchedFields,l))){const _=u(y(n.touchedFields,l),E.argA,E.argB);f&&K(n.touchedFields,l,_)}(m.dirtyFields||R.dirtyFields)&&(n.dirtyFields=qe(a,s)),w.state.next({name:l,isDirty:j(l,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else K(s,l,i)},O=(l,i)=>{K(n.errors,l,i),w.state.next({errors:n.errors})},q=l=>{n.errors=l,w.state.next({errors:n.errors,isValid:!1})},W=(l,i,u,E)=>{const f=y(r,l);if(f){const g=y(s,l,H(u)?y(a,l):u);H(g)||E&&E.defaultChecked||i?K(s,l,i?g:Fn(f._f)):B(l,g),o.mount&&b()}},C=(l,i,u,E,f)=>{let g=!1,_=!1;const M={name:l};if(!t.disabled){if(!u||E){(m.isDirty||R.isDirty)&&(_=n.isDirty,n.isDirty=M.isDirty=j(),g=_!==M.isDirty);const z=fe(y(a,l),i);_=!!y(n.dirtyFields,l),z?Y(n.dirtyFields,l):K(n.dirtyFields,l,!0),M.dirtyFields=n.dirtyFields,g=g||(m.dirtyFields||R.dirtyFields)&&_!==!z}if(u){const z=y(n.touchedFields,l);z||(K(n.touchedFields,l,u),M.touchedFields=n.touchedFields,g=g||(m.touchedFields||R.touchedFields)&&z!==u)}g&&f&&w.state.next(M)}return g?M:{}},G=(l,i,u,E)=>{const f=y(n.errors,l),g=(m.isValid||R.isValid)&&le(i)&&n.isValid!==i;if(t.delayError&&u?(h=v(()=>O(l,u)),h(t.delayError)):(clearTimeout(S),h=null,u?K(n.errors,l,u):Y(n.errors,l)),(u?!fe(f,u):f)||!ne(E)||g){const _={...E,...g&&le(i)?{isValid:i}:{},errors:n.errors,name:l};n={...n,..._},w.state.next(_)}},I=async l=>{c(l,!0);const i=await t.resolver(s,t.context,pt(l||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return c(l),i},P=async l=>{const{errors:i}=await I(l);if(l)for(const u of l){const E=y(i,u);E?K(n.errors,u,E):Y(n.errors,u)}else n.errors=i;return i},D=async(l,i,u={valid:!0})=>{for(const E in l){const f=l[E];if(f){const{_f:g,..._}=f;if(g){const M=d.array.has(g.name),z=f._f&&ht(f._f);z&&m.validatingFields&&c([E],!0);const ee=await Dn(f,d.disabled,s,F,t.shouldUseNativeValidation&&!i,M);if(z&&m.validatingFields&&c([E]),ee[g.name]&&(u.valid=!1,i))break;!i&&(y(ee,g.name)?M?St(n.errors,ee,g.name):K(n.errors,g.name,ee[g.name]):Y(n.errors,g.name))}!ne(_)&&await D(_,i,u)}}return u.valid},A=()=>{for(const l of d.unMount){const i=y(r,l);i&&(i._f.refs?i._f.refs.every(u=>!fn(u)):!fn(i._f.ref))&&he(l)}d.unMount=new Set},j=(l,i)=>!t.disabled&&(l&&i&&K(s,l,i),!fe(pe(),a)),N=(l,i,u)=>Tr(l,d,{...o.mount?s:H(i)?a:ue(l)?{[l]:i}:i},u,i),L=l=>rn(y(o.mount?s:a,l,t.shouldUnregister?y(a,l,[]):[])),B=(l,i,u={})=>{const E=y(r,l);let f=i;if(E){const g=E._f;g&&(!g.disabled&&K(s,l,Ir(i,g)),f=Qe(g.ref)&&re(i)?"":i,Nr(g.ref)?[...g.ref.options].forEach(_=>_.selected=f.includes(_.value)):g.refs?Ce(g.ref)?g.refs.length>1?g.refs.forEach(_=>(!_.defaultChecked||!_.disabled)&&(_.checked=Array.isArray(f)?!!f.find(M=>M===_.value):f===_.value)):g.refs[0]&&(g.refs[0].checked=!!f):g.refs.forEach(_=>_.checked=_.value===f):An(g.ref)?g.ref.value="":(g.ref.value=f,g.ref.type||w.state.next({name:l,values:Q(s)})))}(u.shouldDirty||u.shouldTouch)&&C(l,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&X(l)},Z=(l,i,u)=>{for(const E in i){const f=i[E],g=`${l}.${E}`,_=y(r,g);(d.array.has(l)||$(f)||_&&!_._f)&&!ke(f)?Z(g,f,u):B(g,f,u)}},J=(l,i,u={})=>{const E=y(r,l),f=d.array.has(l),g=Q(i);K(s,l,g),f?(w.array.next({name:l,values:Q(s)}),(m.isDirty||m.dirtyFields||R.isDirty||R.dirtyFields)&&u.shouldDirty&&w.state.next({name:l,dirtyFields:qe(a,s),isDirty:j(l,g)})):E&&!E._f&&!re(g)?Z(l,g,u):B(l,g,u),Ln(l,d)&&w.state.next({...n}),w.state.next({name:o.mount?l:void 0,values:Q(s)})},se=async l=>{o.mount=!0;const i=l.target;let u=i.name,E=!0;const f=y(r,u),g=_=>{E=Number.isNaN(_)||ke(_)&&isNaN(_.getTime())||fe(_,y(s,u,_))};if(f){let _,M;const z=i.type?Fn(f._f):Ar(l),ee=l.type===Je.BLUR||l.type===Je.FOCUS_OUT,$r=!Et(f._f)&&!t.resolver&&!y(n.errors,u)&&!f._f.deps||At(ee,y(n.touchedFields,u),n.isSubmitted,V,x),dn=Ln(u,d,ee);K(s,u,z),ee?(f._f.onBlur&&f._f.onBlur(l),h&&h(0)):f._f.onChange&&f._f.onChange(l);const gn=C(u,z,ee),zr=!ne(gn)||dn;if(!ee&&w.state.next({name:u,type:l.type,values:Q(s)}),$r)return(m.isValid||R.isValid)&&(t.mode==="onBlur"?ee&&b():ee||b()),zr&&w.state.next({name:u,...dn?{}:gn});if(!ee&&dn&&w.state.next({...n}),t.resolver){const{errors:On}=await I([u]);if(g(z),E){const Yr=Bn(n.errors,r,u),Tn=Bn(On,r,Yr.name||u);_=Tn.error,u=Tn.name,M=ne(On)}}else c([u],!0),_=(await Dn(f,d.disabled,s,F,t.shouldUseNativeValidation))[u],c([u]),g(z),E&&(_?M=!1:(m.isValid||R.isValid)&&(M=await D(r,!0)));E&&(f._f.deps&&X(f._f.deps),G(u,M,_,gn))}},de=(l,i)=>{if(y(n.errors,i)&&l.focus)return l.focus(),1},X=async(l,i={})=>{let u,E;const f=Me(l);if(t.resolver){const g=await P(H(l)?l:f);u=ne(g),E=l?!f.some(_=>y(g,_)):u}else l?(E=(await Promise.all(f.map(async g=>{const _=y(r,g);return await D(_&&_._f?{[g]:_}:_)}))).every(Boolean),!(!E&&!n.isValid)&&b()):E=u=await D(r);return w.state.next({...!ue(l)||(m.isValid||R.isValid)&&u!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:u}:{},errors:n.errors}),i.shouldFocus&&!E&&Le(r,de,l?f:d.mount),E},pe=l=>{const i={...o.mount?s:a};return H(l)?i:ue(l)?y(i,l):l.map(u=>y(i,u))},me=(l,i)=>({invalid:!!y((i||n).errors,l),isDirty:!!y((i||n).dirtyFields,l),error:y((i||n).errors,l),isValidating:!!y(n.validatingFields,l),isTouched:!!y((i||n).touchedFields,l)}),ln=l=>{l&&Me(l).forEach(i=>Y(n.errors,i)),w.state.next({errors:l?n.errors:{}})},Ge=(l,i,u)=>{const E=(y(r,l,{_f:{}})._f||{}).ref,f=y(n.errors,l)||{},{ref:g,message:_,type:M,...z}=f;K(n.errors,l,{...z,...i,ref:E}),w.state.next({name:l,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&E&&E.focus&&E.focus()},on=(l,i)=>oe(l)?w.state.subscribe({next:u=>l(N(void 0,i),u)}):N(l,i,!0),Ue=l=>w.state.subscribe({next:i=>{_t(l.name,i.name,l.exact)&&wt(i,l.formState||m,Ne,l.reRenderRoot)&&l.callback({values:{...s},...n,...i})}}).unsubscribe,un=l=>(o.mount=!0,R={...R,...l.formState},Ue({...l,formState:R})),he=(l,i={})=>{for(const u of l?Me(l):d.mount)d.mount.delete(u),d.array.delete(u),i.keepValue||(Y(r,u),Y(s,u)),!i.keepError&&Y(n.errors,u),!i.keepDirty&&Y(n.dirtyFields,u),!i.keepTouched&&Y(n.touchedFields,u),!i.keepIsValidating&&Y(n.validatingFields,u),!t.shouldUnregister&&!i.keepDefaultValue&&Y(a,u);w.state.next({values:Q(s)}),w.state.next({...n,...i.keepDirty?{isDirty:j()}:{}}),!i.keepIsValid&&b()},Oe=({disabled:l,name:i})=>{(le(l)&&o.mount||l||d.disabled.has(i))&&(l?d.disabled.add(i):d.disabled.delete(i))},ve=(l,i={})=>{let u=y(r,l);const E=le(i.disabled)||le(t.disabled);return K(r,l,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:l}},name:l,mount:!0,...i}}),d.mount.add(l),u?Oe({disabled:le(i.disabled)?i.disabled:t.disabled,name:l}):W(l,!0,i.value),{...E?{disabled:i.disabled||t.disabled}:{},...t.progressive?{required:!!i.required,min:Ve(i.min),max:Ve(i.max),minLength:Ve(i.minLength),maxLength:Ve(i.maxLength),pattern:Ve(i.pattern)}:{},name:l,onChange:se,onBlur:se,ref:f=>{if(f){ve(l,i),u=y(r,l);const g=H(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,_=yt(g),M=u._f.refs||[];if(_?M.find(z=>z===g):g===u._f.ref)return;K(r,l,{_f:{...u._f,..._?{refs:[...M.filter(fn),g,...Array.isArray(y(a,l))?[{}]:[]],ref:{type:g.type,name:l}}:{ref:g}}}),W(l,!1,void 0,g)}else u=y(r,l,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(jr(d.array,l)&&o.action)&&d.unMount.add(l)}}},Ee=()=>t.shouldFocusError&&Le(r,de,d.mount),Te=l=>{le(l)&&(w.state.next({disabled:l}),Le(r,(i,u)=>{const E=y(r,u);E&&(i.disabled=E._f.disabled||l,Array.isArray(E._f.refs)&&E._f.refs.forEach(f=>{f.disabled=E._f.disabled||l}))},0,!1))},ye=(l,i)=>async u=>{let E;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=Q(s);if(w.state.next({isSubmitting:!0}),t.resolver){const{errors:g,values:_}=await I();n.errors=g,f=_}else await D(r);if(d.disabled.size)for(const g of d.disabled)K(f,g,void 0);if(Y(n.errors,"root"),ne(n.errors)){w.state.next({errors:{}});try{await l(f,u)}catch(g){E=g}}else i&&await i({...n.errors},u),Ee(),setTimeout(Ee);if(w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ne(n.errors)&&!E,submitCount:n.submitCount+1,errors:n.errors}),E)throw E},we=(l,i={})=>{y(r,l)&&(H(i.defaultValue)?J(l,Q(y(a,l))):(J(l,i.defaultValue),K(a,l,Q(i.defaultValue))),i.keepTouched||Y(n.touchedFields,l),i.keepDirty||(Y(n.dirtyFields,l),n.isDirty=i.defaultValue?j(l,Q(y(a,l))):j()),i.keepError||(Y(n.errors,l),m.isValid&&b()),w.state.next({...n}))},_e=(l,i={})=>{const u=l?Q(l):a,E=Q(u),f=ne(l),g=f?a:E;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues){const _=new Set([...d.mount,...Object.keys(qe(a,s))]);for(const M of Array.from(_))y(n.dirtyFields,M)?K(g,M,y(s,M)):J(M,y(g,M))}else{if(wn&&H(l))for(const _ of d.mount){const M=y(r,_);if(M&&M._f){const z=Array.isArray(M._f.refs)?M._f.refs[0]:M._f.ref;if(Qe(z)){const ee=z.closest("form");if(ee){ee.reset();break}}}}for(const _ of d.mount)J(_,y(g,_))}s=Q(g),w.array.next({values:{...g}}),w.state.next({values:{...g}})}d={mount:i.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!m.isValid||!!i.keepIsValid||!!i.keepDirtyValues,o.watch=!!t.shouldUnregister,w.state.next({submitCount:i.keepSubmitCount?n.submitCount:0,isDirty:f?!1:i.keepDirty?n.isDirty:!!(i.keepDefaultValues&&!fe(l,a)),isSubmitted:i.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&s?qe(a,s):n.dirtyFields:i.keepDefaultValues&&l?qe(a,l):i.keepDirty?n.dirtyFields:{},touchedFields:i.keepTouched?n.touchedFields:{},errors:i.keepErrors?n.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Ae=(l,i)=>_e(oe(l)?l(s):l,i),xe=(l,i={})=>{const u=y(r,l),E=u&&u._f;if(E){const f=E.refs?E.refs[0]:E.ref;f.focus&&(f.focus(),i.shouldSelect&&oe(f.select)&&f.select())}},Ne=l=>{n={...n,...l}},Rn={control:{register:ve,unregister:he,getFieldState:me,handleSubmit:ye,setError:Ge,_subscribe:Ue,_runSchema:I,_getWatch:N,_getDirty:j,_setValid:b,_setFieldArray:p,_setDisabledField:Oe,_setErrors:q,_getFieldArray:L,_reset:_e,_resetDefaultValues:()=>oe(t.defaultValues)&&t.defaultValues().then(l=>{Ae(l,t.resetOptions),w.state.next({isLoading:!1})}),_removeUnmounted:A,_disableForm:Te,_subjects:w,_proxyFormState:m,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(l){o=l},get _defaultValues(){return a},get _names(){return d},set _names(l){d=l},get _formState(){return n},get _options(){return t},set _options(l){t={...t,...l}}},subscribe:un,trigger:X,register:ve,handleSubmit:ye,watch:on,setValue:J,getValues:pe,reset:Ae,resetField:we,clearErrors:ln,unregister:he,setError:Ge,setFocus:xe,getFieldState:me};return{...Rn,formControl:Rn}}function Tt(e={}){const t=k.useRef(void 0),n=k.useRef(void 0),[r,a]=k.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:Ot(e),formState:r},e.formControl&&e.defaultValues&&!oe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,k.useLayoutEffect(()=>s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0}),[s]),k.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),k.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),k.useEffect(()=>{e.values&&!fe(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),k.useEffect(()=>{e.errors&&!ne(e.errors)&&s._setErrors(e.errors)},[e.errors,s]),k.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),k.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Or(r,s),t.current}function Lr(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const Cn=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{};var xt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Nt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=xt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Vt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=qt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const It=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ft(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Mt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Lt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Mt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Bt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Bt(e,["title","titleId"]);let s=Pe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Dt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ct={error:Pt,warning:Vt,info:It,success:Wr},Kt=T.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:h=!1,closeButton:S=!1,onClose:m}=e,R=Dt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:w}=Re(),x=vr("Alert"),V=Ct[a];return k.createElement("div",Object.assign({},R,{ref:t,className:w(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":h,"navds-alert--close-button":S})}),k.createElement(V,{title:x(a),className:w("navds-alert__icon")}),k.createElement(yr,{as:"div",size:s,className:w("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),S&&!h&&k.createElement("div",{className:w("navds-alert__button-wrapper")},k.createElement(kr,{className:w("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:k.createElement(Zr,{title:["error","warning"].includes(a)?x("closeAlert"):x("closeMessage")})})))});var Gt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ut=T.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:h}=br(e,"select"),{children:S,label:m,className:R,description:w,htmlSize:x,hideLabel:V=!1,style:F}=e,v=Gt(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:b}=Re(),c={onMouseDown:p=>{h&&(p.preventDefault(),p.target.focus())},onKeyDown:p=>{h&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(p.key)&&p.preventDefault()}};return k.createElement("div",{className:b(R,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":h,"navds-select--error":s,"navds-select--readonly":h})},k.createElement(hn,{htmlFor:n.id,size:o,className:b("navds-form-field__label",{"navds-sr-only":V})},h&&k.createElement(Jr,null),m),!!w&&k.createElement(De,{className:b("navds-form-field__description",{"navds-sr-only":V}),id:d,size:o,as:"div"},w),k.createElement("div",{className:b("navds-select__container"),style:F},k.createElement("select",Object.assign({},pr(v,["error","errorId","size","readOnly"]),n,c,{ref:t,className:b("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:x}),S),k.createElement(Nt,{className:b("navds-select__chevron"),"aria-hidden":!0})),k.createElement("div",{className:b("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&k.createElement(hr,{size:o,showIcon:!0},e.error)))});var Ht=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const $t=T.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=Ht(e,["as","className","underline","variant","inlineText"]);const{cn:h}=Re();return k.createElement(n,Object.assign({},d,{ref:t,className:h("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Yt=T.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=zt(e,["children","className","variant","size","icon"]);const{cn:h}=Re(),S=(a==null?void 0:a.endsWith("-filled"))&&"strong",m=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",R=a==null?void 0:a.replace("-filled","").replace("-moderate","");return k.createElement(De,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:h("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${S||m||"outline"}`,`navds-tag--${R}`)}),o&&k.createElement("span",{className:h("navds-tag__icon--left")},o),n)});var Wt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Kn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Gn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function He(e){return parseInt(e,10)||0}const Zt=T.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:h,style:S,value:m}=e,R=Wt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:w}=T.useRef(m!=null),x=T.useRef(null),V=Qr(x,t),F=T.useRef(null),v=T.useRef(0),[b,c]=T.useState({outerHeightStyle:0}),p=k.useCallback(()=>{const C=x.current,I=Gn(C).getComputedStyle(C);if(I.width==="0px")return{outerHeightStyle:0};const P=F.current;P.style.width=I.width,P.value=C.value||R.placeholder||"x",P.value.slice(-1)===`
`&&(P.value+=" ");const D=I.boxSizing,A=He(I.paddingBottom)+He(I.paddingTop),j=He(I.borderBottomWidth)+He(I.borderTopWidth),N=P.scrollHeight-A;P.value="x";const L=P.scrollHeight-A;let B=N;d&&(B=Math.max(Number(d)*L,B)),o&&(B=Math.min(Number(o)*L,B)),B=Math.max(B,L);const Z=B+(D==="border-box"?A+j:0),J=Math.abs(B-N)<=1;return{outerHeightStyle:Z,overflow:J}},[o,d,R.placeholder]),O=()=>{const C=p();Un(C)||c(G=>Kn(G,C,v))};Cn(()=>{const C=()=>{const A=p();Un(A)||ut.flushSync(()=>{c(j=>Kn(j,A,v))})},G=Lr(()=>{var A,j,N;if(v.current=0,!((A=x.current)===null||A===void 0)&&A.style.height||!((j=x.current)===null||j===void 0)&&j.style.width){((N=x.current)===null||N===void 0?void 0:N.style.overflow)==="hidden"&&c(L=>Object.assign(Object.assign({},L),{overflow:!1}));return}C()},166,!0),I=x.current,P=Gn(I);P.addEventListener("resize",G);let D;return typeof ResizeObserver<"u"&&(D=new ResizeObserver(G),D.observe(I)),()=>{G.clear(),P.removeEventListener("resize",G),D&&D.disconnect()}},[p]),Cn(()=>{O()}),T.useEffect(()=>{v.current=0},[m]);const q=C=>{v.current=0,w||O(),s&&s(C)},W=Object.assign({"--__ac-textarea-height":b.outerHeightStyle+"px","--__axc-textarea-height":b.outerHeightStyle+"px",overflow:b.overflow&&!h&&!(!((n=x.current)===null||n===void 0)&&n.style.height)&&!(!((r=x.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},S);return k.createElement(k.Fragment,null,k.createElement("textarea",Object.assign({value:m,onChange:q,ref:V,rows:d,style:W},R,{className:a})),k.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:F,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},S)}))});function Un(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Jt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const{cn:s}=Re(),o=vr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),d=t-n,[h,S]=T.useState(d);return T.useEffect(()=>{const m=Lr(()=>{S(d)},2e3);return m(),()=>{m.clear()}},[d]),k.createElement(k.Fragment,null,k.createElement("span",{id:e,className:s("navds-sr-only")},o("maxLength",{maxLength:t})),d<20&&k.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Hn(h,o)),k.createElement(De,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:r},Hn(d,o)))},Hn=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Xt=T.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:h,size:S,inputDescriptionId:m}=br(e,"textarea"),{label:R,className:w,description:x,maxLength:V,hideLabel:F=!1,resize:v,UNSAFE_autoScrollbar:b,i18n:c,readOnly:p}=e,O=Qt(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:q}=Re(),W=Xr(),C=V!==void 0&&V>0,[G,I]=T.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),P=()=>{let A=O!=null&&O.minRows?O==null?void 0:O.minRows:3;return S==="small"&&(A=O!=null&&O.minRows?O==null?void 0:O.minRows:2),A},D=et(s["aria-describedby"],{[W??""]:C});return k.createElement("div",{className:q(w,"navds-form-field",`navds-form-field--${S}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":p,"navds-textarea--readonly":p,"navds-textarea--error":h,"navds-textarea--autoscrollbar":b,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},k.createElement(hn,{htmlFor:s.id,size:S,className:q("navds-form-field__label",{"navds-sr-only":F})},p&&k.createElement(nt,null),R),!!x&&k.createElement(De,{className:q("navds-form-field__description",{"navds-sr-only":F}),id:m,size:S,as:"div"},x),k.createElement(Zt,Object.assign({},pr(O,["error","errorId","size"]),s,{onChange:rt(e.onChange,e.value===void 0?A=>I(A.target.value):void 0),minRows:P(),autoScrollbar:b,ref:t,readOnly:p,className:q("navds-textarea__input","navds-body-short",`navds-body-short--${S??"medium"}`)},D?{"aria-describedby":D}:{})),C&&!p&&!s.disabled&&k.createElement(Jt,{maxLengthId:W,maxLength:V,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:G.length,size:S,i18n:c}),k.createElement("div",{className:q("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&k.createElement(hr,{size:S,showIcon:!0},e.error)))});function ea(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $n={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function na(){if(zn)return Fe;zn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Fe.Fragment=t,Fe.jsx=n,Fe.jsxs=n,Fe}var Yn;function ra(){return Yn||(Yn=1,$n.exports=na()),$n.exports}var Be=ra();const ta=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Be.jsx(Kt,{variant:"warning",size:"small",children:Be.jsx(Er,{gap:"2",children:k.Children.map(e,t=>Be.jsx(De,{size:"small",children:t},tt(t)?t.key:t))})}),tn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};be(tn);var Wn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zn;function aa(){return Zn||(Zn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Wn)),Wn.exports}var sa=aa();const an=ea(sa),la="_borderbox_1vkvn_1",ia="_error_1vkvn_5",oa="_warning_1vkvn_8",ua={borderbox:la,error:ia,warning:oa};an.bind(ua);const da="_aksjonspunkt_kn1hn_1",ga="_erAksjonspunktApent_kn1hn_4",ca="_erIkkeGodkjentAvBeslutter_kn1hn_8",fa={aksjonspunkt:da,erAksjonspunktApent:ga,erIkkeGodkjentAvBeslutter:ca};an.bind(fa);be(tn);be(tn);const ma="_divider_1t980_1",va="_dividerParagraf_1t980_8",ya="_leftPanel_1t980_11",ka="_rightPanel_1t980_14",ba={divider:ma,dividerParagraf:va,leftPanel:ya,rightPanel:ka};an.bind(ba);const pa="_editedIcon_ulrjl_1",ha={editedIcon:pa},Ea=an.bind(ha),wa=({className:e=""})=>Be.jsx("span",{"data-testid":"editedIcon",className:Ea("editedIcon",e),children:Be.jsx(Lt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});be(tn);function _a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jn={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn;function Aa(){if(Qn)return Ie;Qn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:s}}return Ie.Fragment=t,Ie.jsx=n,Ie.jsxs=n,Ie}var Xn;function ja(){return Xn||(Xn=1,Jn.exports=Aa()),Jn.exports}var te=ja();const Br=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Pr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var kn={exports:{}},Sa=kn.exports,er;function Ra(){return er||(er=1,function(e,t){(function(n,r){e.exports=r()})(Sa,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,h={},S=function(v){return(v=+v)+(v>68?1900:2e3)},m=function(v){return function(b){this[v]=+b}},R=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(b){if(!b||b==="Z")return 0;var c=b.match(/([+-]|\d\d)/g),p=60*c[1]+(+c[2]||0);return p===0?0:c[0]==="+"?-p:p}(v)}],w=function(v){var b=h[v];return b&&(b.indexOf?b:b.s.concat(b.f))},x=function(v,b){var c,p=h.meridiem;if(p){for(var O=1;O<=24;O+=1)if(v.indexOf(p(O,0,b))>-1){c=O>12;break}}else c=v===(b?"pm":"PM");return c},V={A:[d,function(v){this.afternoon=x(v,!1)}],a:[d,function(v){this.afternoon=x(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[s,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[o,m("seconds")],ss:[o,m("seconds")],m:[o,m("minutes")],mm:[o,m("minutes")],H:[o,m("hours")],h:[o,m("hours")],HH:[o,m("hours")],hh:[o,m("hours")],D:[o,m("day")],DD:[s,m("day")],Do:[d,function(v){var b=h.ordinal,c=v.match(/\d+/);if(this.day=c[0],b)for(var p=1;p<=31;p+=1)b(p).replace(/\[|\]/g,"")===v&&(this.day=p)}],w:[o,m("week")],ww:[s,m("week")],M:[o,m("month")],MM:[s,m("month")],MMM:[d,function(v){var b=w("months"),c=(w("monthsShort")||b.map(function(p){return p.slice(0,3)})).indexOf(v)+1;if(c<1)throw new Error;this.month=c%12||c}],MMMM:[d,function(v){var b=w("months").indexOf(v)+1;if(b<1)throw new Error;this.month=b%12||b}],Y:[/[+-]?\d+/,m("year")],YY:[s,function(v){this.year=S(v)}],YYYY:[/\d{4}/,m("year")],Z:R,ZZ:R};function F(v){var b,c;b=v,c=h&&h.formats;for(var p=(v=b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,D,A){var j=A&&A.toUpperCase();return D||c[A]||n[A]||c[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(N,L,B){return L||B.slice(1)})})).match(r),O=p.length,q=0;q<O;q+=1){var W=p[q],C=V[W],G=C&&C[0],I=C&&C[1];p[q]=I?{regex:G,parser:I}:W.replace(/^\[|\]$/g,"")}return function(P){for(var D={},A=0,j=0;A<O;A+=1){var N=p[A];if(typeof N=="string")j+=N.length;else{var L=N.regex,B=N.parser,Z=P.slice(j),J=L.exec(Z)[0];B.call(D,J),P=P.replace(J,"")}}return function(se){var de=se.afternoon;if(de!==void 0){var X=se.hours;de?X<12&&(se.hours+=12):X===12&&(se.hours=0),delete se.afternoon}}(D),D}}return function(v,b,c){c.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(S=v.parseTwoDigitYear);var p=b.prototype,O=p.parse;p.parse=function(q){var W=q.date,C=q.utc,G=q.args;this.$u=C;var I=G[1];if(typeof I=="string"){var P=G[2]===!0,D=G[3]===!0,A=P||D,j=G[2];D&&(j=G[2]),h=this.$locale(),!P&&j&&(h=c.Ls[j]),this.$d=function(Z,J,se,de){try{if(["x","X"].indexOf(J)>-1)return new Date((J==="X"?1e3:1)*Z);var X=F(J)(Z),pe=X.year,me=X.month,ln=X.day,Ge=X.hours,on=X.minutes,Ue=X.seconds,un=X.milliseconds,he=X.zone,Oe=X.week,ve=new Date,Ee=ln||(pe||me?1:ve.getDate()),Te=pe||ve.getFullYear(),ye=0;pe&&!me||(ye=me>0?me-1:ve.getMonth());var we,_e=Ge||0,Ae=on||0,xe=Ue||0,Ne=un||0;return he?new Date(Date.UTC(Te,ye,Ee,_e,Ae,xe,Ne+60*he.offset*1e3)):se?new Date(Date.UTC(Te,ye,Ee,_e,Ae,xe,Ne)):(we=new Date(Te,ye,Ee,_e,Ae,xe,Ne),Oe&&(we=de(we).week(Oe).toDate()),we)}catch{return new Date("")}}(W,I,C,c),this.init(),j&&j!==!0&&(this.$L=this.locale(j).$L),A&&W!=this.format(I)&&(this.$d=new Date("")),h={}}else if(I instanceof Array)for(var N=I.length,L=1;L<=N;L+=1){G[1]=I[L-1];var B=c.apply(this,G);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}L===N&&(this.$d=new Date(""))}else O.call(this,q)}}})}(kn)),kn.exports}var Oa=Ra();const Ta=_a(Oa),xa="_readOnlyContainer_v0eco_1",Na="_readOnlyContent_v0eco_4",qa="_textarea_v0eco_11",Va="_space_v0eco_15",$e={readOnlyContainer:xa,readOnlyContent:Na,textarea:qa,space:Va},Fa=e=>e!=null&&e!=="",Dr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>Fa(t)?te.jsxs("div",{className:$e.readOnlyContainer,children:[e&&!a&&te.jsx(hn,{size:"small",children:e}),te.jsx("div",{className:r==="textarea"?$e.textarea:"",children:te.jsxs(yr,{className:$e.readOnlyContent,size:s,children:[t,n&&te.jsx(wa,{className:$e.space})]})})]}):null;En.extend(Ta);const nr=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:h,className:S,hideLabel:m,isEdited:R,size:w})=>{const{formState:{errors:x}}=Ke(),{field:V}=xr({name:e,rules:{validate:T.useMemo(()=>Br(r),[r])}});if(a){const b=n.map(p=>p.props).find(p=>p.value===V.value),c=b?b.children:void 0;return te.jsx(Dr,{value:c,label:t,hideLabel:m,isEdited:R,size:w})}const F=V.value||"",v=!n.map(b=>b.props.value).includes(F)&&F!=="";return v&&console.warn(`No corresponding option found for value '${F}'`),te.jsxs(Ut,{size:"small",className:S,error:Pr(x,e),label:t,description:s,value:o&&h||v?"":V.value,disabled:h,onChange:b=>{d&&d(b),V.onChange(b)},hideLabel:m,children:[te.jsx("option",{style:{display:"none"}}),",",n]})},Ia="_textAreaFieldWithBadges_bdz0b_1",Ma="_etikettWrapper_bdz0b_4",rr={textAreaFieldWithBadges:Ia,etikettWrapper:Ma},La=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=R=>R,className:d,description:h,isEdited:S,...m})=>{const{formState:{errors:R}}=Ke(),{field:w}=xr({name:e,rules:{validate:T.useMemo(()=>Br(s),[s])}});return n?te.jsx(Dr,{label:t,value:w.value,type:"textarea",isEdited:S,hideLabel:m.hideLabel}):te.jsxs("div",{className:a?rr.textAreaFieldWithBadges:null,children:[a&&te.jsx("div",{className:rr.etikettWrapper,children:a.map(({type:x,titleText:V})=>te.jsx(Yt,{variant:x,size:"small",children:V},V))}),te.jsx(Xt,{size:"small",label:t,description:h,className:d,autoComplete:"off",...w,onChange:x=>w.onChange(x.currentTarget.value!==""?o(x.currentTarget.value):null),value:w.value?w.value:"",error:Pr(R,e),maxLength:r,...m})]})},Ba=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return T.useEffect(()=>()=>{a&&a(o())},[]),te.jsx(ct,{...e,children:te.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Cr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bn={exports:{}},Pa=bn.exports,tr;function Da(){return tr||(tr=1,function(e,t){(function(n,r){e.exports=r()})(Pa,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(bn)),bn.exports}var Ca=Da();const Ka=Cr(Ca);var pn={exports:{}},Ga=pn.exports,ar;function Ua(){return ar||(ar=1,function(e,t){(function(n,r){e.exports=r()})(Ga,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(pn)),pn.exports}var Ha=Ua();const $a=Cr(Ha),za="Dato må være før eller lik {limit}",Ya="Dato må være etter eller lik {limit}",Wa="Perioder kan ikke overlappe i tid",Za="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Ja="Dato må være lik {value}",Qa="Dato må skrives slik: dd.mm.åååå",Xa="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",es="Tallet kan ikke inneholde mer enn to desimaler",ns="Tallet kan ikke ha desimaler",rs="Feltet kan kun inneholde tall",ts="Ugyldig fødselsnummer",as="Feltet må være et fødselsnummer (11 siffer)",ss="Ugyldig organisasjonsnummer.",ls="Ugyldig organisasjonsnummer eller fødselsnummer",is="Startdato må være før eller lik sluttdato",os="Periode er utenfor opptjeningsperioden",us="Ugyldig saksnummer eller fødselsnummer",ds="Feltet inneholder ugyldige tegn: {text}",gs="Feltet inneholder en ugyldig verdi: {value}",cs="Feltet kan ikke inneholde mellomrom",fs="Feltet må fylles ut",ms="Du kan skrive maksimalt {length} tegn",vs="Du må skrive minst {length} tegn",ys="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",ks="Feltet må være mindre eller lik {length}",bs="Feltet må være større eller lik {length}",ps="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",hs={DateNotBeforeOrEqual:za,DateNotAfterOrEqual:Ya,DateRangesOverlapping:Wa,DateRangesOverlappingPeriodTypes:Za,DatesNotEqual:Ja,InvalidDate:Qa,InvalidDatesInPeriod:Xa,InvalidDecimal:es,InvalidInteger:ns,InvalidNumber:rs,InvalidFodselsnr:ts,InvalidFodselsnrFormat:as,InvalidOrgnr:ss,InvalidOrgnrOrFodselsnr:ls,InvalidPeriod:is,InvalidPeriodRange:os,InvalidSaksnrOrFodselsnrFormat:us,InvalidText:ds,InvalidValue:gs,IllegalWhiteSpace:cs,IsRequired:fs,MaxLength:ms,MinLength:vs,MaxLengthOrFodselsnr:ys,MaxValue:ks,MinValue:bs,SammeFodselsnrSomSoker:ps},{formatMessage:sn}=be(hs),Es=e=>sn({id:"InvalidText"},{text:e}),ws=()=>sn({id:"IsRequired"}),_s=e=>sn({id:"MaxLength"},{length:e}),As=e=>sn({id:"MinLength"},{length:e}),js=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Ss=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Sn=e=>e==null||e.toString().trim().length===0;En.extend(Ka);En.extend($a);const mn=e=>Sn(e)?ws():void 0,Rs=e=>t=>Sn(t)||t.toString().trim().length>=e?null:As(e),Kr=e=>t=>Sn(t)||t.toString().trim().length<=e?null:_s(e),Os=e=>{if(!js.test(e)){const t=e.replace(Ss,"");return Es(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Ts=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},xs="_ukjentAdresseMargins_4teno_1",Ns={ukjentAdresseMargins:xs},qs={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Vs=be(qs),Gr=()=>U.jsx(wr,{value:Vs,children:U.jsx("div",{className:Ns.ukjentAdresseMargins,children:U.jsx(ta,{children:U.jsx("b",{children:U.jsx(vn,{id:"UkjentAdresse.Text"})})})})});Gr.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const Fs="_bredde_jav4h_9",sr={bredde:Fs},Is=Kr(4e3),Ms=Kr(1e4),Ls=Rs(3),Bs=e=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Ps=(e,t)=>e===ae.INNHENTE_OPPLYSNINGER||e===ae.FRITEKST||e===ae.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ae.VARSEL_OM_TILBAKEKREVING||e===ae.TBK_INNHENTE_OPPLYSNINGER||e===ae.VARSEL_OM_REVURDERING&&t===ce.ANNET,Ds=(e,t)=>t===Se.ENGANGSSTONAD?e.filter(n=>n.kode===ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===ce.ANNET):t===Se.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==ce.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,Cs=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ae.VARSEL_OM_REVURDERING}:{...t}},Ks=e=>{const t=e;return e.brevmalkode===ae.VARSEL_OM_REVURDERING&&t.arsakskode!==ce.ANNET&&(t.fritekst=" "),t},Ur=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:h})=>{const S=at(),m=Tt({defaultValues:o||Cs(e)}),R=m.watch("brevmalkode"),w=m.watch("fritekst"),x=m.watch("arsakskode"),V=T.useMemo(()=>Ds(r,a),[]);if(!e.språkkode)return null;const{formState:F}=m,v=p=>{R&&t(R,w,x),p.preventDefault()},b=st(e.språkkode),c=R===ae.VARSEL_OM_REVURDERING;return U.jsx(Ba,{formMethods:m,onSubmit:p=>n(Ks(p)),setDataOnUnmount:d,children:U.jsxs(Er,{gap:"4",children:[U.jsx(nr,{name:"brevmalkode",label:S.formatMessage({id:"Messages.Template"}),validate:[mn],selectValues:e.brevmaler.map(p=>U.jsx("option",{value:p.kode,disabled:!p.tilgjengelig,children:p.navn},p.kode)),className:sr.bredde}),c&&U.jsx(nr,{name:"arsakskode",label:S.formatMessage({id:"Messages.Årsak"}),validate:[mn],selectValues:V.map(p=>U.jsx("option",{value:p.kode,children:p.navn},p.kode)),className:sr.bredde}),Ps(R,x)&&U.jsx(La,{name:"fritekst",label:S.formatMessage({id:Bs(R)}),validate:[mn,c?Ms:Is,Ls,Os],maxLength:c?1e4:4e3,badges:[{type:"info",titleText:b}],parse:lt}),h&&U.jsx(Gr,{}),U.jsxs(it,{justify:"space-between",children:[(!c||c&&x!==void 0)&&U.jsx($t,{href:"#",onClick:v,onKeyDown:p=>p.key==="Enter"?v(p):null,children:U.jsx(vn,{id:"Messages.Preview"})}),U.jsx(kr,{size:"small",variant:"primary",loading:F.isSubmitting,disabled:F.isSubmitting||s,onClick:Ts,children:U.jsx(vn,{id:"Messages.Submit"})})]})]})})};Ur.__docgenInfo={description:`Messages

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
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const Gs=be(ot),Hr=e=>U.jsx(wr,{value:Gs,children:U.jsx(Ur,{...e})});Hr.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""}}};const Us=e=>U.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:U.jsx(e,{})}),Hs=[{kode:ae.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ae.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],$s=[{kode:ce.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:ce.ANNET,navn:"Annet",kodeverk:"UGUNST"}],rl={title:"sak/sak-meldinger",component:Hr,decorators:[Us],args:{kanVeilede:!1,revurderingVarslingArsak:$s,behandling:{brevmaler:Hs,språkkode:"NB"},previewCallback:cn("button-click"),submitCallback:cn("button-click"),setMeldingFormData:cn("button-click")}},ze={args:{fagsakYtelseType:Se.FORELDREPENGER,brukerManglerAdresse:!1}},Ye={args:{fagsakYtelseType:Se.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},We={args:{fagsakYtelseType:Se.FORELDREPENGER,brukerManglerAdresse:!0}};var lr,ir,or;ze.parameters={...ze.parameters,docs:{...(lr=ze.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(or=(ir=ze.parameters)==null?void 0:ir.docs)==null?void 0:or.source}}};var ur,dr,gr;Ye.parameters={...Ye.parameters,docs:{...(ur=Ye.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(gr=(dr=Ye.parameters)==null?void 0:dr.docs)==null?void 0:gr.source}}};var cr,fr,mr;We.parameters={...We.parameters,docs:{...(cr=We.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(mr=(fr=We.parameters)==null?void 0:fr.docs)==null?void 0:mr.source}}};const tl=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{We as BrukerManglerAdresse,ze as Default,Ye as ForSvangerskapspenger,tl as __namedExportsOrder,rl as default};
