import{j as H}from"./jsx-runtime-DR9Q75dM.js";import{k as Se,u as hn,a as ne,l as ir,B as lr,S as Xr,i as et,d as or,L as _n,n as De,o as dr,E as ur,b as nt,p as qn,f as rt,t as ve,M as en,V as gr,q as tt,P as fr,g as at,r as st,s as it,h as lt,m as ot,j as fn}from"./nb_NO-Bbrx_t56.js";import{R as b,r as R}from"./index-DRjF_FHU.js";import{a as En}from"./dayjs.min-DN4LN79F.js";import{F as dt}from"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";var sn=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(sn||{});sn.BRUKERS_ANDEL;sn.FRILANS;sn.EGEN_NÆRING;var ie=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ie||{}),Oe=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Oe||{}),me=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(me||{}),Ce=e=>e.type==="checkbox",he=e=>e instanceof Date,ee=e=>e==null;const cr=e=>typeof e=="object";var $=e=>!ee(e)&&!Array.isArray(e)&&cr(e)&&!he(e),vr=e=>$(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,ut=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,yr=(e,t)=>e.has(ut(t)),gt=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},wn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wn&&(e instanceof Blob||e instanceof FileList))&&(n||$(e)))if(t=n?[]:{},!n&&!gt(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=ae(e[r]));else return e;return t}var ln=e=>Array.isArray(e)?e.filter(Boolean):[],U=e=>e===void 0,m=(e,t,n)=>{if(!t||!$(e))return n;const r=ln(t.split(/[,[\].]+?/)).reduce((a,s)=>ee(a)?a:a[s],e);return U(r)||r===e?U(e[t])?n:e[t]:r},de=e=>typeof e=="boolean",An=e=>/^\w*$/.test(e),mr=e=>ln(e.replace(/["|']|\]/g,"").split(/\.|\[/)),C=(e,t,n)=>{let r=-1;const a=An(t)?[t]:mr(t),s=a.length,o=s-1;for(;++r<s;){const d=a[r];let f=n;if(r!==o){const _=e[d];f=$(_)||Array.isArray(_)?_:isNaN(+a[r+1])?{}:[]}if(d==="__proto__")return;e[d]=f,e=e[d]}return e};const nn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ue={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ye={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},kr=b.createContext(null),Ke=()=>b.useContext(kr),ft=e=>{const{children:t,...n}=e;return b.createElement(kr.Provider,{value:n},t)};var br=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==ue.all&&(t._proxyFormState[o]=!r||ue.all),n&&(n[o]=!0),e[o]}});return a},se=e=>$(e)&&!Object.keys(e).length,pr=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return se(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||ue.all))},Me=e=>Array.isArray(e)?e:[e],hr=(e,t,n)=>!e||!t||e===t||Me(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function jn(e){const t=b.useRef(e);t.current=e,b.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function ct(e){const t=Ke(),{control:n=t.control,disabled:r,name:a,exact:s}=e||{},[o,d]=b.useState(n._formState),f=b.useRef(!0),_=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),g=b.useRef(a);return g.current=a,jn({disabled:r,next:c=>f.current&&hr(g.current,c.name,s)&&pr(c,_.current,n._updateFormState)&&d({...n._formState,...c}),subject:n._subjects.state}),b.useEffect(()=>(f.current=!0,_.current.isValid&&n._updateValid(!0),()=>{f.current=!1}),[n]),br(o,n,_.current,!1)}var ce=e=>typeof e=="string",_r=(e,t,n,r,a)=>ce(e)?(r&&t.watch.add(e),m(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),m(n,s))):(r&&(t.watchAll=!0),n);function vt(e){const t=Ke(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e||{},d=b.useRef(r);d.current=r,jn({disabled:s,subject:n._subjects.values,next:g=>{hr(d.current,g.name,o)&&_(ae(_r(d.current,n._names,g.values||n._formValues,!1,a)))}});const[f,_]=b.useState(n._getWatch(r,a));return b.useEffect(()=>n._removeUnmounted()),f}function Er(e){const t=Ke(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=yr(a._names.array,n),d=vt({control:a,name:n,defaultValue:m(a._formValues,n,m(a._defaultValues,n,e.defaultValue)),exact:!0}),f=ct({control:a,name:n,exact:!0}),_=b.useRef(a.register(n,{...e.rules,value:d,...de(e.disabled)?{disabled:e.disabled}:{}}));return b.useEffect(()=>{const g=a._options.shouldUnregister||s,c=(x,j)=>{const T=m(a._fields,x);T&&T._f&&(T._f.mount=j)};if(c(n,!0),g){const x=ae(m(a._options.defaultValues,n));C(a._defaultValues,n,x),U(m(a._formValues,n))&&C(a._formValues,n,x)}return()=>{(o?g&&!a._state.action:g)?a.unregister(n):c(n,!1)}},[n,a,o,s]),b.useEffect(()=>{m(a._fields,n)&&a._updateDisabledField({disabled:r,fields:a._fields,name:n,value:m(a._fields,n)._f.value})},[r,n,a]),{field:{name:n,value:d,...de(r)||f.disabled?{disabled:f.disabled||r}:{},onChange:b.useCallback(g=>_.current.onChange({target:{value:vr(g),name:n},type:nn.CHANGE}),[n]),onBlur:b.useCallback(()=>_.current.onBlur({target:{value:m(a._formValues,n),name:n},type:nn.BLUR}),[n,a]),ref:b.useCallback(g=>{const c=m(a._fields,n);c&&g&&(c._f.ref={focus:()=>g.focus(),select:()=>g.select(),setCustomValidity:x=>g.setCustomValidity(x),reportValidity:()=>g.reportValidity()})},[a._fields,n])},formState:f,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(f.errors,n)},isDirty:{enumerable:!0,get:()=>!!m(f.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!m(f.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!m(f.validatingFields,n)},error:{enumerable:!0,get:()=>m(f.errors,n)}})}}var yt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Nn=e=>({isOnSubmit:!e||e===ue.onSubmit,isOnBlur:e===ue.onBlur,isOnChange:e===ue.onChange,isOnAll:e===ue.all,isOnTouch:e===ue.onTouched}),Vn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Le=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=m(e,a);if(s){const{_f:o,...d}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(Le(d,t))break}else if($(d)&&Le(d,t))break}}};var mt=(e,t,n)=>{const r=Me(m(e,n));return C(r,"root",t[n]),C(e,n,r),e},xn=e=>e.type==="file",fe=e=>typeof e=="function",rn=e=>{if(!wn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xe=e=>ce(e),On=e=>e.type==="radio",tn=e=>e instanceof RegExp;const Fn={value:!1,isValid:!1},Bn={value:!0,isValid:!0};var wr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!U(e[0].attributes.value)?U(e[0].value)||e[0].value===""?Bn:{value:e[0].value,isValid:!0}:Bn:Fn}return Fn};const In={isValid:!1,value:null};var Ar=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,In):In;function Pn(e,t,n="validate"){if(Xe(e)||Array.isArray(e)&&e.every(Xe)||de(e)&&!e)return{type:n,message:Xe(e)?e:"",ref:t}}var xe=e=>$(e)&&!tn(e)?e:{value:e,message:""},Mn=async(e,t,n,r,a)=>{const{ref:s,refs:o,required:d,maxLength:f,minLength:_,min:g,max:c,pattern:x,validate:j,name:T,valueAsNumber:M,mount:p,disabled:E}=e._f,k=m(t,T);if(!p||E)return{};const w=o?o[0]:s,N=A=>{r&&w.reportValidity&&(w.setCustomValidity(de(A)?"":A||""),w.reportValidity())},V={},Q=On(s),K=Ce(s),D=Q||K,P=(M||xn(s))&&U(s.value)&&U(k)||rn(s)&&s.value===""||k===""||Array.isArray(k)&&!k.length,B=yt.bind(null,T,n,V),G=(A,S,F,I=ye.maxLength,L=ye.minLength)=>{const z=A?S:F;V[T]={type:A?I:L,message:z,ref:s,...B(A?I:L,z)}};if(a?!Array.isArray(k)||!k.length:d&&(!D&&(P||ee(k))||de(k)&&!k||K&&!wr(o).isValid||Q&&!Ar(o).isValid)){const{value:A,message:S}=Xe(d)?{value:!!d,message:d}:xe(d);if(A&&(V[T]={type:ye.required,message:S,ref:w,...B(ye.required,S)},!n))return N(S),V}if(!P&&(!ee(g)||!ee(c))){let A,S;const F=xe(c),I=xe(g);if(!ee(k)&&!isNaN(k)){const L=s.valueAsNumber||k&&+k;ee(F.value)||(A=L>F.value),ee(I.value)||(S=L<I.value)}else{const L=s.valueAsDate||new Date(k),z=ge=>new Date(new Date().toDateString()+" "+ge),te=s.type=="time",le=s.type=="week";ce(F.value)&&k&&(A=te?z(k)>z(F.value):le?k>F.value:L>new Date(F.value)),ce(I.value)&&k&&(S=te?z(k)<z(I.value):le?k<I.value:L<new Date(I.value))}if((A||S)&&(G(!!A,F.message,I.message,ye.max,ye.min),!n))return N(V[T].message),V}if((f||_)&&!P&&(ce(k)||a&&Array.isArray(k))){const A=xe(f),S=xe(_),F=!ee(A.value)&&k.length>+A.value,I=!ee(S.value)&&k.length<+S.value;if((F||I)&&(G(F,A.message,S.message),!n))return N(V[T].message),V}if(x&&!P&&ce(k)){const{value:A,message:S}=xe(x);if(tn(A)&&!k.match(A)&&(V[T]={type:ye.pattern,message:S,ref:s,...B(ye.pattern,S)},!n))return N(S),V}if(j){if(fe(j)){const A=await j(k,t),S=Pn(A,w);if(S&&(V[T]={...S,...B(ye.validate,S.message)},!n))return N(S.message),V}else if($(j)){let A={};for(const S in j){if(!se(A)&&!n)break;const F=Pn(await j[S](k,t),w,S);F&&(A={...F,...B(S,F.message)},N(F.message),n&&(V[T]=A))}if(!se(A)&&(V[T]={ref:w,...A},!n))return V}}return N(!0),V};function kt(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=U(e)?r++:e[t[r++]];return e}function bt(e){for(const t in e)if(e.hasOwnProperty(t)&&!U(e[t]))return!1;return!0}function Y(e,t){const n=Array.isArray(t)?t:An(t)?[t]:mr(t),r=n.length===1?e:kt(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&se(r)||Array.isArray(r)&&bt(r))&&Y(e,n.slice(0,-1)),e}var cn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},bn=e=>ee(e)||!cr(e);function ke(e,t){if(bn(e)||bn(t))return e===t;if(he(e)&&he(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(he(s)&&he(o)||$(s)&&$(o)||Array.isArray(s)&&Array.isArray(o)?!ke(s,o):s!==o)return!1}}return!0}var jr=e=>e.type==="select-multiple",pt=e=>On(e)||Ce(e),vn=e=>rn(e)&&e.isConnected,xr=e=>{for(const t in e)if(fe(e[t]))return!0;return!1};function an(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!xr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},an(e[r],t[r])):ee(e[r])||(t[r]=!0);return t}function Or(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!xr(e[a])?U(t)||bn(n[a])?n[a]=Array.isArray(e[a])?an(e[a],[]):{...an(e[a])}:Or(e[a],ee(t)?{}:t[a],n[a]):n[a]=!ke(e[a],t[a]);return n}var Fe=(e,t)=>Or(e,t,an(t)),Sr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>U(e)?e:t?e===""?NaN:e&&+e:n&&ce(e)?new Date(e):r?r(e):e;function yn(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return xn(t)?t.files:On(t)?Ar(e.refs).value:jr(t)?[...t.selectedOptions].map(({value:n})=>n):Ce(t)?wr(e.refs).value:Sr(U(t.value)?e.ref.value:t.value,e)}var ht=(e,t,n,r)=>{const a={};for(const s of e){const o=m(t,s);o&&C(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Be=e=>U(e)?e:tn(e)?e.source:$(e)?tn(e.value)?e.value.source:e.value:e;const Ln="AsyncFunction";var _t=e=>(!e||!e.validate)&&!!(fe(e.validate)&&e.validate.constructor.name===Ln||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Ln)),Et=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Dn(e,t,n){const r=m(e,n);if(r||An(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=m(t,s),d=m(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var wt=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,At=(e,t)=>!ln(m(e,t)).length&&Y(e,t);const jt={mode:ue.onSubmit,reValidateMode:ue.onChange,shouldFocusError:!0};function xt(e={}){let t={...jt,...e},n={submitCount:0,isDirty:!1,isLoading:fe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},a=$(t.defaultValues)||$(t.values)?ae(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:ae(a),o={action:!1,mount:!1,watch:!1},d={mount:new Set,unMount:new Set,array:new Set,watch:new Set},f,_=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},c={values:cn(),array:cn(),state:cn()},x=Nn(t.mode),j=Nn(t.reValidateMode),T=t.criteriaMode===ue.all,M=i=>l=>{clearTimeout(_),_=setTimeout(i,l)},p=async i=>{if(!t.disabled&&(g.isValid||i)){const l=t.resolver?se((await D()).errors):await B(r,!0);l!==n.isValid&&c.state.next({isValid:l})}},E=(i,l)=>{!t.disabled&&(g.isValidating||g.validatingFields)&&((i||Array.from(d.mount)).forEach(u=>{u&&(l?C(n.validatingFields,u,l):Y(n.validatingFields,u))}),c.state.next({validatingFields:n.validatingFields,isValidating:!se(n.validatingFields)}))},k=(i,l=[],u,h,y=!0,v=!0)=>{if(h&&u&&!t.disabled){if(o.action=!0,v&&Array.isArray(m(r,i))){const O=u(m(r,i),h.argA,h.argB);y&&C(r,i,O)}if(v&&Array.isArray(m(n.errors,i))){const O=u(m(n.errors,i),h.argA,h.argB);y&&C(n.errors,i,O),At(n.errors,i)}if(g.touchedFields&&v&&Array.isArray(m(n.touchedFields,i))){const O=u(m(n.touchedFields,i),h.argA,h.argB);y&&C(n.touchedFields,i,O)}g.dirtyFields&&(n.dirtyFields=Fe(a,s)),c.state.next({name:i,isDirty:A(i,l),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else C(s,i,l)},w=(i,l)=>{C(n.errors,i,l),c.state.next({errors:n.errors})},N=i=>{n.errors=i,c.state.next({errors:n.errors,isValid:!1})},V=(i,l,u,h)=>{const y=m(r,i);if(y){const v=m(s,i,U(u)?m(a,i):u);U(v)||h&&h.defaultChecked||l?C(s,i,l?v:yn(y._f)):I(i,v),o.mount&&p()}},Q=(i,l,u,h,y)=>{let v=!1,O=!1;const q={name:i};if(!t.disabled){const Z=!!(m(r,i)&&m(r,i)._f&&m(r,i)._f.disabled);if(!u||h){g.isDirty&&(O=n.isDirty,n.isDirty=q.isDirty=A(),v=O!==q.isDirty);const J=Z||ke(m(a,i),l);O=!!(!Z&&m(n.dirtyFields,i)),J||Z?Y(n.dirtyFields,i):C(n.dirtyFields,i,!0),q.dirtyFields=n.dirtyFields,v=v||g.dirtyFields&&O!==!J}if(u){const J=m(n.touchedFields,i);J||(C(n.touchedFields,i,u),q.touchedFields=n.touchedFields,v=v||g.touchedFields&&J!==u)}v&&y&&c.state.next(q)}return v?q:{}},K=(i,l,u,h)=>{const y=m(n.errors,i),v=g.isValid&&de(l)&&n.isValid!==l;if(e.delayError&&u?(f=M(()=>w(i,u)),f(e.delayError)):(clearTimeout(_),f=null,u?C(n.errors,i,u):Y(n.errors,i)),(u?!ke(y,u):y)||!se(h)||v){const O={...h,...v&&de(l)?{isValid:l}:{},errors:n.errors,name:i};n={...n,...O},c.state.next(O)}},D=async i=>{E(i,!0);const l=await t.resolver(s,t.context,ht(i||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return E(i),l},P=async i=>{const{errors:l}=await D(i);if(i)for(const u of i){const h=m(l,u);h?C(n.errors,u,h):Y(n.errors,u)}else n.errors=l;return l},B=async(i,l,u={valid:!0})=>{for(const h in i){const y=i[h];if(y){const{_f:v,...O}=y;if(v){const q=d.array.has(v.name),Z=y._f&&_t(y._f);Z&&g.validatingFields&&E([h],!0);const J=await Mn(y,s,T,t.shouldUseNativeValidation&&!l,q);if(Z&&g.validatingFields&&E([h]),J[v.name]&&(u.valid=!1,l))break;!l&&(m(J,v.name)?q?mt(n.errors,J,v.name):C(n.errors,v.name,J[v.name]):Y(n.errors,v.name))}!se(O)&&await B(O,l,u)}}return u.valid},G=()=>{for(const i of d.unMount){const l=m(r,i);l&&(l._f.refs?l._f.refs.every(u=>!vn(u)):!vn(l._f.ref))&&Re(i)}d.unMount=new Set},A=(i,l)=>!t.disabled&&(i&&l&&C(s,i,l),!ke(X(),a)),S=(i,l,u)=>_r(i,d,{...o.mount?s:U(l)?a:ce(i)?{[i]:l}:l},u,l),F=i=>ln(m(o.mount?s:a,i,e.shouldUnregister?m(a,i,[]):[])),I=(i,l,u={})=>{const h=m(r,i);let y=l;if(h){const v=h._f;v&&(!v.disabled&&C(s,i,Sr(l,v)),y=rn(v.ref)&&ee(l)?"":l,jr(v.ref)?[...v.ref.options].forEach(O=>O.selected=y.includes(O.value)):v.refs?Ce(v.ref)?v.refs.length>1?v.refs.forEach(O=>(!O.defaultChecked||!O.disabled)&&(O.checked=Array.isArray(y)?!!y.find(q=>q===O.value):y===O.value)):v.refs[0]&&(v.refs[0].checked=!!y):v.refs.forEach(O=>O.checked=O.value===y):xn(v.ref)?v.ref.value="":(v.ref.value=y,v.ref.type||c.values.next({name:i,values:{...s}})))}(u.shouldDirty||u.shouldTouch)&&Q(i,y,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ge(i)},L=(i,l,u)=>{for(const h in l){const y=l[h],v=`${i}.${h}`,O=m(r,v);(d.array.has(i)||$(y)||O&&!O._f)&&!he(y)?L(v,y,u):I(v,y,u)}},z=(i,l,u={})=>{const h=m(r,i),y=d.array.has(i),v=ae(l);C(s,i,v),y?(c.array.next({name:i,values:{...s}}),(g.isDirty||g.dirtyFields)&&u.shouldDirty&&c.state.next({name:i,dirtyFields:Fe(a,s),isDirty:A(i,v)})):h&&!h._f&&!ee(v)?L(i,v,u):I(i,v,u),Vn(i,d)&&c.state.next({...n}),c.values.next({name:o.mount?i:void 0,values:{...s}})},te=async i=>{o.mount=!0;const l=i.target;let u=l.name,h=!0;const y=m(r,u),v=()=>l.type?yn(y._f):vr(i),O=q=>{h=Number.isNaN(q)||he(q)&&isNaN(q.getTime())||ke(q,m(s,u,q))};if(y){let q,Z;const J=v(),pe=i.type===nn.BLUR||i.type===nn.FOCUS_OUT,Zr=!Et(y._f)&&!t.resolver&&!m(n.errors,u)&&!y._f.deps||wt(pe,m(n.touchedFields,u),n.isSubmitted,j,x),un=Vn(u,d,pe);C(s,u,J),pe?(y._f.onBlur&&y._f.onBlur(i),f&&f(0)):y._f.onChange&&y._f.onChange(i);const gn=Q(u,J,pe,!1),Jr=!se(gn)||un;if(!pe&&c.values.next({name:u,type:i.type,values:{...s}}),Zr)return g.isValid&&(e.mode==="onBlur"?pe&&p():p()),Jr&&c.state.next({name:u,...un?{}:gn});if(!pe&&un&&c.state.next({...n}),t.resolver){const{errors:Rn}=await D([u]);if(O(J),h){const Qr=Dn(n.errors,r,u),Tn=Dn(Rn,r,Qr.name||u);q=Tn.error,u=Tn.name,Z=se(Rn)}}else E([u],!0),q=(await Mn(y,s,T,t.shouldUseNativeValidation))[u],E([u]),O(J),h&&(q?Z=!1:g.isValid&&(Z=await B(r,!0)));h&&(y._f.deps&&ge(y._f.deps),K(u,Z,q,gn))}},le=(i,l)=>{if(m(n.errors,l)&&i.focus)return i.focus(),1},ge=async(i,l={})=>{let u,h;const y=Me(i);if(t.resolver){const v=await P(U(i)?i:y);u=se(v),h=i?!y.some(O=>m(v,O)):u}else i?(h=(await Promise.all(y.map(async v=>{const O=m(r,v);return await B(O&&O._f?{[v]:O}:O)}))).every(Boolean),!(!h&&!n.isValid)&&p()):h=u=await B(r);return c.state.next({...!ce(i)||g.isValid&&u!==n.isValid?{}:{name:i},...t.resolver||!i?{isValid:u}:{},errors:n.errors}),l.shouldFocus&&!h&&Le(r,le,i?y:d.mount),h},X=i=>{const l={...o.mount?s:a};return U(i)?l:ce(i)?m(l,i):i.map(u=>m(l,u))},Ee=(i,l)=>({invalid:!!m((l||n).errors,i),isDirty:!!m((l||n).dirtyFields,i),error:m((l||n).errors,i),isValidating:!!m(n.validatingFields,i),isTouched:!!m((l||n).touchedFields,i)}),we=i=>{i&&Me(i).forEach(l=>Y(n.errors,l)),c.state.next({errors:i?n.errors:{}})},Ge=(i,l,u)=>{const h=(m(r,i,{_f:{}})._f||{}).ref,y=m(n.errors,i)||{},{ref:v,message:O,type:q,...Z}=y;C(n.errors,i,{...Z,...l,ref:h}),c.state.next({name:i,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},dn=(i,l)=>fe(i)?c.values.subscribe({next:u=>i(S(void 0,l),u)}):S(i,l,!0),Re=(i,l={})=>{for(const u of i?Me(i):d.mount)d.mount.delete(u),d.array.delete(u),l.keepValue||(Y(r,u),Y(s,u)),!l.keepError&&Y(n.errors,u),!l.keepDirty&&Y(n.dirtyFields,u),!l.keepTouched&&Y(n.touchedFields,u),!l.keepIsValidating&&Y(n.validatingFields,u),!t.shouldUnregister&&!l.keepDefaultValue&&Y(a,u);c.values.next({values:{...s}}),c.state.next({...n,...l.keepDirty?{isDirty:A()}:{}}),!l.keepIsValid&&p()},He=({disabled:i,name:l,field:u,fields:h,value:y})=>{if(de(i)&&o.mount||i){const v=i?void 0:U(y)?yn(u?u._f:m(h,l)._f):y;C(s,l,v),Q(l,v,!1,!1,!0)}},Te=(i,l={})=>{let u=m(r,i);const h=de(l.disabled)||de(t.disabled);return C(r,i,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:i}},name:i,mount:!0,...l}}),d.mount.add(i),u?He({field:u,disabled:de(l.disabled)?l.disabled:t.disabled,name:i,value:l.value}):V(i,!0,l.value),{...h?{disabled:l.disabled||t.disabled}:{},...t.progressive?{required:!!l.required,min:Be(l.min),max:Be(l.max),minLength:Be(l.minLength),maxLength:Be(l.maxLength),pattern:Be(l.pattern)}:{},name:i,onChange:te,onBlur:te,ref:y=>{if(y){Te(i,l),u=m(r,i);const v=U(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,O=pt(v),q=u._f.refs||[];if(O?q.find(Z=>Z===v):v===u._f.ref)return;C(r,i,{_f:{...u._f,...O?{refs:[...q.filter(vn),v,...Array.isArray(m(a,i))?[{}]:[]],ref:{type:v.type,name:i}}:{ref:v}}}),V(i,!1,void 0,v)}else u=m(r,i,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||l.shouldUnregister)&&!(yr(d.array,i)&&o.action)&&d.unMount.add(i)}}},qe=()=>t.shouldFocusError&&Le(r,le,d.mount),Ue=i=>{de(i)&&(c.state.next({disabled:i}),Le(r,(l,u)=>{const h=m(r,u);h&&(l.disabled=h._f.disabled||i,Array.isArray(h._f.refs)&&h._f.refs.forEach(y=>{y.disabled=h._f.disabled||i}))},0,!1))},Ae=(i,l)=>async u=>{let h;if(u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist()),t.disabled){l&&await l({...n.errors},u);return}let y=ae(s);if(c.state.next({isSubmitting:!0}),t.resolver){const{errors:v,values:O}=await D();n.errors=v,y=O}else await B(r);if(Y(n.errors,"root"),se(n.errors)){c.state.next({errors:{}});try{await i(y,u)}catch(v){h=v}}else l&&await l({...n.errors},u),qe(),setTimeout(qe);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:se(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},Ne=(i,l={})=>{m(r,i)&&(U(l.defaultValue)?z(i,ae(m(a,i))):(z(i,l.defaultValue),C(a,i,ae(l.defaultValue))),l.keepTouched||Y(n.touchedFields,i),l.keepDirty||(Y(n.dirtyFields,i),n.isDirty=l.defaultValue?A(i,ae(m(a,i))):A()),l.keepError||(Y(n.errors,i),g.isValid&&p()),c.state.next({...n}))},je=(i,l={})=>{const u=i?ae(i):a,h=ae(u),y=se(i),v=y?a:h;if(l.keepDefaultValues||(a=u),!l.keepValues){if(l.keepDirtyValues){const O=new Set([...d.mount,...Object.keys(Fe(a,s))]);for(const q of Array.from(O))m(n.dirtyFields,q)?C(v,q,m(s,q)):z(q,m(v,q))}else{if(wn&&U(i))for(const O of d.mount){const q=m(r,O);if(q&&q._f){const Z=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(rn(Z)){const J=Z.closest("form");if(J){J.reset();break}}}}r={}}s=e.shouldUnregister?l.keepDefaultValues?ae(a):{}:ae(v),c.array.next({values:{...v}}),c.values.next({values:{...v}})}d={mount:l.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!g.isValid||!!l.keepIsValid||!!l.keepDirtyValues,o.watch=!!e.shouldUnregister,c.state.next({submitCount:l.keepSubmitCount?n.submitCount:0,isDirty:y?!1:l.keepDirty?n.isDirty:!!(l.keepDefaultValues&&!ke(i,a)),isSubmitted:l.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:y?{}:l.keepDirtyValues?l.keepDefaultValues&&s?Fe(a,s):n.dirtyFields:l.keepDefaultValues&&i?Fe(a,i):l.keepDirty?n.dirtyFields:{},touchedFields:l.keepTouched?n.touchedFields:{},errors:l.keepErrors?n.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},be=(i,l)=>je(fe(i)?i(s):i,l);return{control:{register:Te,unregister:Re,getFieldState:Ee,handleSubmit:Ae,setError:Ge,_executeSchema:D,_getWatch:S,_getDirty:A,_updateValid:p,_removeUnmounted:G,_updateFieldArray:k,_updateDisabledField:He,_getFieldArray:F,_reset:je,_resetDefaultValues:()=>fe(t.defaultValues)&&t.defaultValues().then(i=>{be(i,t.resetOptions),c.state.next({isLoading:!1})}),_updateFormState:i=>{n={...n,...i}},_disableForm:Ue,_subjects:c,_proxyFormState:g,_setErrors:N,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(i){o=i},get _defaultValues(){return a},get _names(){return d},set _names(i){d=i},get _formState(){return n},set _formState(i){n=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:ge,register:Te,handleSubmit:Ae,watch:dn,setValue:z,getValues:X,reset:be,resetField:Ne,clearErrors:we,unregister:Re,setError:Ge,setFocus:(i,l={})=>{const u=m(r,i),h=u&&u._f;if(h){const y=h.refs?h.refs[0]:h.ref;y.focus&&(y.focus(),l.shouldSelect&&fe(y.select)&&y.select())}},getFieldState:Ee}}function Ot(e={}){const t=b.useRef(),n=b.useRef(),[r,a]=b.useState({isDirty:!1,isValidating:!1,isLoading:fe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:fe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...xt(e),formState:r});const s=t.current.control;return s._options=e,jn({subject:s._subjects.state,next:o=>{pr(o,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),b.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),b.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),b.useEffect(()=>{e.values&&!ke(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),b.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),b.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),b.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=br(r,s),t.current}function Rr(e,t=166){let n;function r(...a){const s=()=>{e.apply(this,a)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}var St=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Rt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=St(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Tt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const qt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Tt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Nt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Vt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Nt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Tr=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ft(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Bt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const It=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Bt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Pt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Mt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Pt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Lt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Dt={error:Mt,warning:qt,info:Vt,success:et},Ct=R.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:d=!0,inline:f=!1,closeButton:_=!1,onClose:g}=e,c=Lt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const x=hn("Alert"),j=Dt[a];return b.createElement("div",Object.assign({},c,{ref:t,className:ne(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":f,"navds-alert--close-button":_})}),b.createElement(j,{title:x(a),className:"navds-alert__icon"}),b.createElement(ir,{as:"div",size:s,className:ne("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),_&&!f&&b.createElement("div",{className:"navds-alert__button-wrapper"},b.createElement(lr,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:g,type:"button",icon:b.createElement(Xr,{title:["error","warning"].includes(a)?x("closeAlert"):x("closeMessage")})})))}),Kt=()=>b.createElement(Tr,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),Gt=()=>b.createElement(Tr,{title:hn("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Ht=R.createContext(null),qr=(e,t)=>{var n,r,a;const{size:s,error:o,errorId:d}=e,f=R.useContext(Ht),_=or(),g=(n=e.id)!==null&&n!==void 0?n:`${t}-${_}`,c=d??`${t}-error-${_}`,x=`${t}-description-${_}`,j=(f==null?void 0:f.disabled)||e.disabled,T=((f==null?void 0:f.readOnly)||e.readOnly)&&!j||void 0,M=!j&&!T&&!!(o||f!=null&&f.error),p=!j&&!T&&!!o&&typeof o!="boolean",E=Object.assign({},M?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:p,hasError:M,errorId:c,inputDescriptionId:x,size:(r=s??(f==null?void 0:f.size))!==null&&r!==void 0?r:"medium",readOnly:T,inputProps:Object.assign(Object.assign({id:g},E),{"aria-describedby":ne(e["aria-describedby"],{[x]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[c]:p,[(a=f==null?void 0:f.errorId)!==null&&a!==void 0?a:""]:M&&!!(f!=null&&f.error)})||void 0,disabled:j})}};var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const $t=R.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:d,readOnly:f}=qr(e,"select"),{children:_,label:g,className:c,description:x,htmlSize:j,hideLabel:T=!1,style:M}=e,p=Ut(e,["children","label","className","description","htmlSize","hideLabel","style"]),E={onMouseDown:k=>{f&&(k.preventDefault(),k.target.focus())},onKeyDown:k=>{f&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(k.key)&&k.preventDefault()}};return b.createElement("div",{className:ne(c,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":f,"navds-select--error":s,"navds-select--readonly":f})},b.createElement(_n,{htmlFor:n.id,size:o,className:ne("navds-form-field__label",{"navds-sr-only":T})},f&&b.createElement(Gt,null),g),!!x&&b.createElement(De,{className:ne("navds-form-field__description",{"navds-sr-only":T}),id:d,size:o,as:"div"},x),b.createElement("div",{className:"navds-select__container",style:M},b.createElement("select",Object.assign({},dr(p,["error","errorId","size","readOnly"]),n,E,{ref:t,className:ne("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:j}),_),b.createElement(Rt,{className:"navds-select__chevron","aria-hidden":!0})),b.createElement("div",{className:"navds-form-field__error",id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&b.createElement(ur,{size:o},e.error)))});var zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Yt=R.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:o=!1}=e,d=zt(e,["as","className","underline","variant","inlineText"]);return b.createElement(n,Object.assign({},d,{ref:t,className:ne("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var Wt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Zt=R.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,d=Wt(e,["children","className","variant","size","icon"]);return b.createElement(De,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:ne("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`)}),o&&b.createElement("span",{className:"navds-tag__icon--left"},o),n)});var Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Kn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Ye(e){return parseInt(e,10)||0}const Qt=R.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:d=1,autoScrollbar:f,style:_,value:g}=e,c=Jt(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:x}=R.useRef(g!=null),j=R.useRef(null),T=nt(j,t),M=R.useRef(null),p=R.useRef(0),[E,k]=R.useState({outerHeightStyle:0}),w=b.useCallback(()=>{const K=j.current,P=Kn(K).getComputedStyle(K);if(P.width==="0px")return{outerHeightStyle:0};const B=M.current;B.style.width=P.width,B.value=K.value||c.placeholder||"x",B.value.slice(-1)===`
`&&(B.value+=" ");const G=P.boxSizing,A=Ye(P.paddingBottom)+Ye(P.paddingTop),S=Ye(P.borderBottomWidth)+Ye(P.borderTopWidth),F=B.scrollHeight-A;B.value="x";const I=B.scrollHeight-A;let L=F;d&&(L=Math.max(Number(d)*I,L)),o&&(L=Math.min(Number(o)*I,L)),L=Math.max(L,I);const z=L+(G==="border-box"?A+S:0),te=Math.abs(L-F)<=1;return{outerHeightStyle:z,overflow:te}},[o,d,c.placeholder]),N=()=>{const K=w();Gn(K)||k(D=>Cn(D,K,p))};qn(()=>{const K=()=>{const A=w();Gn(A)||dt.flushSync(()=>{k(S=>Cn(S,A,p))})},D=Rr(()=>{var A,S,F;if(p.current=0,!((A=j.current)===null||A===void 0)&&A.style.height||!((S=j.current)===null||S===void 0)&&S.style.width){((F=j.current)===null||F===void 0?void 0:F.style.overflow)==="hidden"&&k(I=>Object.assign(Object.assign({},I),{overflow:!1}));return}K()}),P=j.current,B=Kn(P);B.addEventListener("resize",D);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(D),G.observe(P)),()=>{D.clear(),B.removeEventListener("resize",D),G&&G.disconnect()}},[w]),qn(()=>{N()}),R.useEffect(()=>{p.current=0},[g]);const V=K=>{p.current=0,x||N(),s&&s(K)},Q=Object.assign({"--__ac-textarea-height":E.outerHeightStyle+"px","--__axc-textarea-height":E.outerHeightStyle+"px",overflow:E.overflow&&!f&&!(!((n=j.current)===null||n===void 0)&&n.style.height)&&!(!((r=j.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},_);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:g,onChange:V,ref:T,rows:d,style:Q},c,{className:a})),b.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:M,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},_)}))});function Gn(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xt=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const s=hn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=t-n,[d,f]=R.useState(o);return R.useEffect(()=>{const _=Rr(()=>{f(o)},2e3);return _(),()=>{_.clear()}},[o]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:t})),o<20&&b.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Hn(d,s)),b.createElement(De,{className:ne("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:r},Hn(o,s)))},Hn=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var ea=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const na=R.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:d,hasError:f,size:_,inputDescriptionId:g}=qr(e,"textarea"),{label:c,className:x,description:j,maxLength:T,hideLabel:M=!1,resize:p,UNSAFE_autoScrollbar:E,i18n:k,readOnly:w}=e,N=ea(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),V=or(),Q=T!==void 0&&T>0,[K,D]=R.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),P=()=>{let G=N!=null&&N.minRows?N==null?void 0:N.minRows:3;return _==="small"&&(G=N!=null&&N.minRows?N==null?void 0:N.minRows:2),G},B=ne(s["aria-describedby"],{[V??""]:Q});return b.createElement("div",{className:ne(x,"navds-form-field",`navds-form-field--${_}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":w,"navds-textarea--readonly":w,"navds-textarea--error":f,"navds-textarea--autoscrollbar":E,[`navds-textarea--resize-${p===!0?"both":p}`]:p})},b.createElement(_n,{htmlFor:s.id,size:_,className:ne("navds-form-field__label",{"navds-sr-only":M})},w&&b.createElement(Kt,null),c),!!j&&b.createElement(De,{className:ne("navds-form-field__description",{"navds-sr-only":M}),id:g,size:_,as:"div"},j),b.createElement(Qt,Object.assign({},dr(N,["error","errorId","size"]),s,{onChange:rt(e.onChange,e.value===void 0?G=>D(G.target.value):void 0),minRows:P(),autoScrollbar:E,ref:t,readOnly:w,className:ne("navds-textarea__input","navds-body-short",`navds-body-short--${_??"medium"}`)},B?{"aria-describedby":B}:{})),Q&&!w&&!s.disabled&&b.createElement(Xt,{maxLengthId:V,maxLength:T,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:K.length,size:_,i18n:k}),b.createElement("div",{className:"navds-form-field__error",id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&b.createElement(ur,{size:_},e.error)))});function ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nr={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Un;function ta(){if(Un)return Ie;Un=1;var e=b,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(d,f,_){var g,c={},x=null,j=null;_!==void 0&&(x=""+_),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(j=f.ref);for(g in f)r.call(f,g)&&!s.hasOwnProperty(g)&&(c[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)c[g]===void 0&&(c[g]=f[g]);return{$$typeof:t,type:d,key:x,ref:j,props:c,_owner:a.current}}return Ie.Fragment=n,Ie.jsx=o,Ie.jsxs=o,Ie}Nr.exports=ta();var W=Nr.exports;const aa=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:W.jsx(Ct,{variant:"warning",size:"small",children:W.jsx(gr,{gap:"2",children:b.Children.map(e,t=>W.jsx(De,{size:"small",children:t},tt(t)?t.key:t))})}),_e={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ve(_e);ve(_e);var Vr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var d=arguments[o];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var d in s)t.call(s,d)&&s[d]&&(o=a(o,this&&this[d]||d));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Vr);var sa=Vr.exports;const oe=ra(sa),ia="_borderbox_hicl4_1",la="_error_hicl4_4",oa="_warning_hicl4_7",da={borderbox:ia,error:la,warning:oa};oe.bind(da);const ua="_aksjonspunkt_kn1hn_1",ga="_erAksjonspunktApent_kn1hn_4",fa="_erIkkeGodkjentAvBeslutter_kn1hn_8",ca={aksjonspunkt:ua,erAksjonspunktApent:ga,erIkkeGodkjentAvBeslutter:fa};oe.bind(ca);ve(_e);ve(_e);const va="_tooltip_h8akz_1",ya="_tooltiptext_h8akz_5",ma="_left_h8akz_22",ka="_top_h8akz_27",ba="_right_h8akz_30",pa="_bottom_h8akz_34",ha="_showTooltip_h8akz_1",pn={tooltip:va,tooltiptext:ya,left:ma,top:ka,right:ba,bottom:pa,showTooltip:ha},_a=oe.bind(pn),Ea=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>W.jsxs("div",{className:pn.tooltip,children:[W.jsx("span",{className:_a(pn.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),wa=b.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:o,onKeyDown:d,tooltip:f,alignTooltipLeft:_=!1},g)=>{const[c,x]=R.useState(!1),j=R.useCallback(()=>{x(!0)},[]),T=R.useCallback(()=>{x(!1)},[]),M=R.useCallback(k=>{(k.key==="Enter"||k.key===" ")&&(d&&d(k),k.preventDefault())},[]),p=s&&c?s:a,E=W.jsx("img",{ref:g,className:r,src:p,alt:o,tabIndex:n,onMouseOver:j,onMouseOut:T,onFocus:j,onBlur:T,onKeyDown:M,onMouseDown:t,onClick:e});return f?W.jsx(Ea,{content:f,alignLeft:_,children:E}):E});wa.displayName="Image";const Aa="_flexColumnNew_1vdv1_1",ja={flexColumnNew:Aa};oe.bind(ja);const xa="_flexRow_1yf0y_1",Oa="_spaceBetween_1yf0y_9",Sa="_alignItemsToBaseline_1yf0y_12",Ra="_alignItemsToFlexEnd_1yf0y_15",Ta="_justifyItemsToFlexEnd_1yf0y_18",qa="_wrap_1yf0y_21",Na={flexRow:xa,spaceBetween:Oa,alignItemsToBaseline:Sa,alignItemsToFlexEnd:Ra,justifyItemsToFlexEnd:Ta,wrap:qa};oe.bind(Na);const Va="_flexContainer_1dk1o_1",Fa="_fluid_1dk1o_6",Ba="_fullHeight_1dk1o_9",Ia="_flexWrap_1dk1o_17",Pa={flexContainer:Va,fluid:Fa,fullHeight:Ba,flexWrap:Ia};oe.bind(Pa);ve(_e);const Ma="_row_1lxv9_1",La="_harHover_1lxv9_4",Da="_rowHeader_1lxv9_7",Ca="_grayHeader_1lxv9_12",Ka="_rowContent_1lxv9_15",Ga="_selected_1lxv9_18",Ha="_bold_1lxv9_22",Ua="_dashedBottomBorder_1lxv9_25",$a="_solidBottomBorder_1lxv9_28",za="_apLeftBorder_1lxv9_31",Ya="_noBottomBorder_1lxv9_34",Fr={row:Ma,harHover:La,rowHeader:Da,grayHeader:Ca,rowContent:Ka,selected:Ga,bold:Ha,dashedBottomBorder:Ua,solidBottomBorder:$a,apLeftBorder:za,noBottomBorder:Ya},Wa=oe.bind(Fr),Za=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},Br=e=>e.tagName==="TR"?e:Br(e.parentElement),$n=(e,t)=>{const n=Br(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},Ja=(e,t,n,r)=>a=>{a.key==="ArrowDown"?$n(a,!0):a.key==="ArrowUp"?$n(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Qa=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Xa=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:o,noHover:d=!1,isSelected:f=!1,isBold:_=!1,isDashedBottomBorder:g=!1,isSolidBottomBorder:c=!1,isApLeftBorder:x=!1,className:j,useMultiselect:T=!1,hasNoBottomBorder:M=!1})=>W.jsx("tr",{className:Wa(j,Fr.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!d,selected:f,harHover:!d,bold:_,dashedBottomBorder:g,solidBottomBorder:c,noBottomBorder:M,apLeftBorder:x}),onMouseDown:Za(a,e,t),onKeyDown:Ja(T,s,e,t),onKeyUp:T?Qa(s):void 0,tabIndex:0,children:o}),es="_columnStyle_1f13u_1",Ir={columnStyle:es},ns=oe.bind(Ir),mn=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:W.jsx("td",{className:ns(Ir.columnStyle,t),colSpan:r?100:void 0,children:e}),rs="_table_2cnpl_1",ts="_rowHover_2cnpl_25",as={table:rs,rowHover:ts},ss=oe.bind(as),is="EMPTY",ls=b.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},o)=>W.jsxs("table",{ref:o,className:ss("table",{[n]:n,rowHover:!r}),children:[W.jsx("thead",{children:W.jsxs(Xa,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(d=>typeof d=="string"&&d.startsWith(is)?W.jsx(mn,{children:" "},d):W.jsx(mn,{children:W.jsx(en,{id:d})},d)),t.map(d=>W.jsx(mn,{children:d},d.key))]})}),W.jsx("tbody",{children:Array.isArray(s)?b.Children.map(s,d=>b.cloneElement(d,{noHover:r})):b.cloneElement(s,{noHover:r})})]}));ls.displayName="Table";const os="_hidden_1pb4f_1",ds="_active_1pb4f_8",us="_activeRow_1pb4f_15 _active_1pb4f_8",gs="_toggleIcon_1pb4f_19",fs="_colTopPadding_1pb4f_22",cs={hidden:os,active:ds,activeRow:us,toggleIcon:gs,colTopPadding:fs};oe.bind(cs);ve(_e);const vs="_fourPx_qda5k_1",ys="_eightPx_qda5k_4",ms="_sixteenPx_qda5k_7",ks="_twentyPx_qda5k_10",bs="_thirtyTwoPx_qda5k_13",ps="_fourtyPx_qda5k_16",hs={fourPx:vs,eightPx:ys,sixteenPx:ms,twentyPx:ks,thirtyTwoPx:bs,fourtyPx:ps};oe.bind(hs);ve(_e);const _s="_divider_1t980_1",Es="_dividerParagraf_1t980_8",ws="_leftPanel_1t980_11",As="_rightPanel_1t980_14",js={divider:_s,dividerParagraf:Es,leftPanel:ws,rightPanel:As};oe.bind(js);const xs="_editedIcon_ulrjl_1",Os={editedIcon:xs},Ss=oe.bind(Os),Rs=({className:e=""})=>W.jsx("span",{"data-testid":"editedIcon",className:Ss("editedIcon",e),children:W.jsx(It,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pr={exports:{}},Pe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function Ns(){if(zn)return Pe;zn=1;var e=b,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(d,f,_){var g,c={},x=null,j=null;_!==void 0&&(x=""+_),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(j=f.ref);for(g in f)r.call(f,g)&&!s.hasOwnProperty(g)&&(c[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)c[g]===void 0&&(c[g]=f[g]);return{$$typeof:t,type:d,key:x,ref:j,props:c,_owner:a.current}}return Pe.Fragment=n,Pe.jsx=o,Pe.jsxs=o,Pe}Pr.exports=Ns();var re=Pr.exports;const Mr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Lr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var Dr={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Ts,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,f={},_=function(p){return(p=+p)+(p>68?1900:2e3)},g=function(p){return function(E){this[p]=+E}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(E){if(!E||E==="Z")return 0;var k=E.match(/([+-]|\d\d)/g),w=60*k[1]+(+k[2]||0);return w===0?0:k[0]==="+"?-w:w}(p)}],x=function(p){var E=f[p];return E&&(E.indexOf?E:E.s.concat(E.f))},j=function(p,E){var k,w=f.meridiem;if(w){for(var N=1;N<=24;N+=1)if(p.indexOf(w(N,0,E))>-1){k=N>12;break}}else k=p===(E?"pm":"PM");return k},T={A:[d,function(p){this.afternoon=j(p,!1)}],a:[d,function(p){this.afternoon=j(p,!0)}],Q:[a,function(p){this.month=3*(p-1)+1}],S:[a,function(p){this.milliseconds=100*+p}],SS:[s,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[o,g("seconds")],ss:[o,g("seconds")],m:[o,g("minutes")],mm:[o,g("minutes")],H:[o,g("hours")],h:[o,g("hours")],HH:[o,g("hours")],hh:[o,g("hours")],D:[o,g("day")],DD:[s,g("day")],Do:[d,function(p){var E=f.ordinal,k=p.match(/\d+/);if(this.day=k[0],E)for(var w=1;w<=31;w+=1)E(w).replace(/\[|\]/g,"")===p&&(this.day=w)}],w:[o,g("week")],ww:[s,g("week")],M:[o,g("month")],MM:[s,g("month")],MMM:[d,function(p){var E=x("months"),k=(x("monthsShort")||E.map(function(w){return w.slice(0,3)})).indexOf(p)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[d,function(p){var E=x("months").indexOf(p)+1;if(E<1)throw new Error;this.month=E%12||E}],Y:[/[+-]?\d+/,g("year")],YY:[s,function(p){this.year=_(p)}],YYYY:[/\d{4}/,g("year")],Z:c,ZZ:c};function M(p){var E,k;E=p,k=f&&f.formats;for(var w=(p=E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(B,G,A){var S=A&&A.toUpperCase();return G||k[A]||n[A]||k[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,I,L){return I||L.slice(1)})})).match(r),N=w.length,V=0;V<N;V+=1){var Q=w[V],K=T[Q],D=K&&K[0],P=K&&K[1];w[V]=P?{regex:D,parser:P}:Q.replace(/^\[|\]$/g,"")}return function(B){for(var G={},A=0,S=0;A<N;A+=1){var F=w[A];if(typeof F=="string")S+=F.length;else{var I=F.regex,L=F.parser,z=B.slice(S),te=I.exec(z)[0];L.call(G,te),B=B.replace(te,"")}}return function(le){var ge=le.afternoon;if(ge!==void 0){var X=le.hours;ge?X<12&&(le.hours+=12):X===12&&(le.hours=0),delete le.afternoon}}(G),G}}return function(p,E,k){k.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(_=p.parseTwoDigitYear);var w=E.prototype,N=w.parse;w.parse=function(V){var Q=V.date,K=V.utc,D=V.args;this.$u=K;var P=D[1];if(typeof P=="string"){var B=D[2]===!0,G=D[3]===!0,A=B||G,S=D[2];G&&(S=D[2]),f=this.$locale(),!B&&S&&(f=k.Ls[S]),this.$d=function(z,te,le,ge){try{if(["x","X"].indexOf(te)>-1)return new Date((te==="X"?1e3:1)*z);var X=M(te)(z),Ee=X.year,we=X.month,Ge=X.day,dn=X.hours,Re=X.minutes,He=X.seconds,Te=X.milliseconds,qe=X.zone,Ue=X.week,Ae=new Date,Ne=Ge||(Ee||we?1:Ae.getDate()),je=Ee||Ae.getFullYear(),be=0;Ee&&!we||(be=we>0?we-1:Ae.getMonth());var Ve,$e=dn||0,ze=Re||0,i=He||0,l=Te||0;return qe?new Date(Date.UTC(je,be,Ne,$e,ze,i,l+60*qe.offset*1e3)):le?new Date(Date.UTC(je,be,Ne,$e,ze,i,l)):(Ve=new Date(je,be,Ne,$e,ze,i,l),Ue&&(Ve=ge(Ve).week(Ue).toDate()),Ve)}catch{return new Date("")}}(Q,P,K,k),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),A&&Q!=this.format(P)&&(this.$d=new Date("")),f={}}else if(P instanceof Array)for(var F=P.length,I=1;I<=F;I+=1){D[1]=P[I-1];var L=k.apply(this,D);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}I===F&&(this.$d=new Date(""))}else N.call(this,V)}}})})(Dr);var Vs=Dr.exports;const Fs=qs(Vs),Bs="_readOnlyContainer_v0eco_1",Is="_readOnlyContent_v0eco_4",Ps="_readOnlyContentCenter_v0eco_7",Ms="_textarea_v0eco_11",Ls="_space_v0eco_15",We={readOnlyContainer:Bs,readOnlyContent:Is,readOnlyContentCenter:Ps,textarea:Ms,space:Ls},Ds=e=>e!=null&&e!=="",Cr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>Ds(t)?re.jsxs("div",{className:We.readOnlyContainer,children:[e&&!a&&re.jsx(_n,{size:"small",children:e}),re.jsx("div",{className:r==="textarea"?We.textarea:"",children:re.jsxs(ir,{className:We.readOnlyContent,size:s,children:[t,n&&re.jsx(Rs,{className:We.space})]})})]}):null;En.extend(Fs);const Yn=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:d,disabled:f,className:_,hideLabel:g,isEdited:c,size:x})=>{const{formState:{errors:j}}=Ke(),{field:T}=Er({name:e,rules:{validate:R.useMemo(()=>Mr(r),[r])}});if(a){const E=n.map(w=>w.props).find(w=>w.value===T.value),k=E?E.children:void 0;return re.jsx(Cr,{value:k,label:t,hideLabel:g,isEdited:c,size:x})}const M=T.value||"",p=!n.map(E=>E.props.value).includes(M)&&M!=="";return p&&console.warn(`No corresponding option found for value '${M}'`),re.jsxs($t,{size:"small",className:_,error:Lr(j,e),label:t,description:s,value:o&&f||p?"":T.value,disabled:f,onChange:E=>{d&&d(E),T.onChange(E)},hideLabel:g,children:[re.jsx("option",{style:{display:"none"}}),",",n]})},Cs="_textAreaFieldWithBadges_bdz0b_1",Ks="_etikettWrapper_bdz0b_4",Wn={textAreaFieldWithBadges:Cs,etikettWrapper:Ks},Gs=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=c=>c,className:d,description:f,isEdited:_,...g})=>{const{formState:{errors:c}}=Ke(),{field:x}=Er({name:e,rules:{validate:R.useMemo(()=>Mr(s),[s])}});return n?re.jsx(Cr,{label:t,value:x.value,type:"textarea",isEdited:_,hideLabel:g.hideLabel}):re.jsxs("div",{className:a?Wn.textAreaFieldWithBadges:null,children:[a&&re.jsx("div",{className:Wn.etikettWrapper,children:a.map(({type:j,titleText:T})=>re.jsx(Zt,{variant:j,size:"small",children:T},T))}),re.jsx(na,{size:"small",label:t,description:f,className:d,autoComplete:"off",...x,onChange:j=>x.onChange(j.currentTarget.value!==""?o(j.currentTarget.value):null),value:x.value?x.value:"",error:Lr(c,e),maxLength:r,...g})]})},Hs=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return R.useEffect(()=>()=>{a&&a(o())},[]),re.jsx(ft,{...e,children:re.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})},Us="Dato må være før eller lik {limit}",$s="Dato må være etter eller lik {limit}",zs="Perioder kan ikke overlappe i tid",Ys="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Ws="Dato må være lik {value}",Zs="Dato må skrives slik: dd.mm.åååå",Js="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Qs="Tallet kan ikke inneholde mer enn to desimaler",Xs="Tallet kan ikke ha desimaler",ei="Feltet kan kun inneholde tall",ni="Ugyldig fødselsnummer",ri="Feltet må være et fødselsnummer (11 siffer)",ti="Ugyldig organisasjonsnummer.",ai="Ugyldig organisasjonsnummer eller fødselsnummer",si="Startdato må være før eller lik sluttdato",ii="Periode er utenfor opptjeningsperioden",li="Ugyldig saksnummer eller fødselsnummer",oi="Feltet inneholder ugyldige tegn: {text}",di="Feltet inneholder en ugyldig verdi: {value}",ui="Feltet kan ikke inneholde mellomrom",gi="Feltet må fylles ut",fi="Du kan skrive maksimalt {length} tegn",ci="Du må skrive minst {length} tegn",vi="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",yi="Feltet må være mindre eller lik {length}",mi="Feltet må være større eller lik {length}",ki="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",bi={DateNotBeforeOrEqual:Us,DateNotAfterOrEqual:$s,DateRangesOverlapping:zs,DateRangesOverlappingPeriodTypes:Ys,DatesNotEqual:Ws,InvalidDate:Zs,InvalidDatesInPeriod:Js,InvalidDecimal:Qs,InvalidInteger:Xs,InvalidNumber:ei,InvalidFodselsnr:ni,InvalidFodselsnrFormat:ri,InvalidOrgnr:ti,InvalidOrgnrOrFodselsnr:ai,InvalidPeriod:si,InvalidPeriodRange:ii,InvalidSaksnrOrFodselsnrFormat:li,InvalidText:oi,InvalidValue:di,IllegalWhiteSpace:ui,IsRequired:gi,MaxLength:fi,MinLength:ci,MaxLengthOrFodselsnr:vi,MaxValue:yi,MinValue:mi,SammeFodselsnrSomSoker:ki},{formatMessage:on}=ve(bi),pi=e=>on({id:"InvalidText"},{text:e}),hi=()=>on({id:"IsRequired"}),_i=e=>on({id:"MaxLength"},{length:e}),Ei=e=>on({id:"MinLength"},{length:e}),wi=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Ai=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Sn=e=>e==null||e.toString().trim().length===0;var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hr={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Kr,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})})(Hr);var ji=Hr.exports;const xi=Gr(ji);var Ur={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Kr,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})})(Ur);var Oi=Ur.exports;const Si=Gr(Oi);En.extend(xi);En.extend(Si);const kn=e=>Sn(e)?hi():void 0,Ri=e=>t=>Sn(t)||t.toString().trim().length>=e?null:Ei(e),$r=e=>t=>Sn(t)||t.toString().trim().length<=e?null:_i(e),Ti=e=>{if(!wi.test(e)){const t=e.replace(Ai,"");return pi(t.replace(/[\t]/g,"Tabulatortegn"))}return null},qi=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Ni="_ukjentAdresseMargins_4teno_1",Vi={ukjentAdresseMargins:Ni},Fi={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Bi=ve(Fi),zr=()=>H.jsx(fr,{value:Bi,children:H.jsx("div",{className:Vi.ukjentAdresseMargins,children:H.jsx(aa,{children:H.jsx("b",{children:H.jsx(en,{id:"UkjentAdresse.Text"})})})})});zr.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const Ii="_buttonRow_jav4h_1",Pi="_previewLink_jav4h_5",Mi="_bredde_jav4h_9",Zn={buttonRow:Ii,previewLink:Pi,bredde:Mi},Li=$r(4e3),Di=$r(1e4),Ci=Ri(3),Ki=e=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Gi=(e,t)=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.FRITEKST||e===ie.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ie.VARSEL_OM_TILBAKEKREVING||e===ie.TBK_INNHENTE_OPPLYSNINGER||e===ie.VARSEL_OM_REVURDERING&&t===me.ANNET,Hi=(e,t)=>t===Oe.ENGANGSSTONAD?e.filter(n=>n.kode===me.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===me.ANNET):t===Oe.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==me.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==me.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,Ui=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ie.VARSEL_OM_REVURDERING}:{...t}},$i=e=>{const t=e;return e.brevmalkode===ie.VARSEL_OM_REVURDERING&&t.arsakskode!==me.ANNET&&(t.fritekst=" "),t},Yr=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:o,setMeldingFormData:d,brukerManglerAdresse:f})=>{const _=at(),g=Ot({defaultValues:o||Ui(e)}),c=g.watch("brevmalkode"),x=g.watch("fritekst"),j=g.watch("arsakskode"),T=R.useMemo(()=>Hi(r,a),[]);if(!e.sprakkode)return null;const{formState:M}=g,p=w=>{c&&t(c,x,j),w.preventDefault()},E=st(e.sprakkode),k=c===ie.VARSEL_OM_REVURDERING;return H.jsx(Hs,{formMethods:g,onSubmit:w=>n($i(w)),setDataOnUnmount:d,children:H.jsxs(gr,{gap:"4",children:[H.jsx(Yn,{name:"brevmalkode",label:_.formatMessage({id:"Messages.Template"}),validate:[kn],selectValues:e.brevmaler.map(w=>H.jsx("option",{value:w.kode,disabled:!w.tilgjengelig,children:w.navn},w.kode)),className:Zn.bredde}),k&&H.jsx(Yn,{name:"arsakskode",label:_.formatMessage({id:"Messages.Årsak"}),validate:[kn],selectValues:T.map(w=>H.jsx("option",{value:w.kode,children:w.navn},w.kode)),className:Zn.bredde}),Gi(c,j)&&H.jsx(Gs,{name:"fritekst",label:_.formatMessage({id:Ki(c)}),validate:[kn,k?Di:Li,Ci,Ti],maxLength:k?1e4:4e3,badges:[{type:"info",titleText:E}],parse:it}),f&&H.jsx(zr,{}),H.jsxs(lt,{justify:"space-between",children:[H.jsx(Yt,{href:"#",onClick:p,onKeyDown:w=>w.key==="Enter"?p(w):null,children:H.jsx(en,{id:"Messages.Preview"})}),H.jsx(lr,{size:"small",variant:"primary",loading:M.isSubmitting,disabled:M.isSubmitting||s,onClick:qi,children:H.jsx(en,{id:"Messages.Submit"})})]})]})})};Yr.__docgenInfo={description:`Messages

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
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
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
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const zi=ve(ot),Wr=e=>H.jsx(fr,{value:zi,children:H.jsx(Yr,{...e})});Wr.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
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
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
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
}>`}]},description:""}}};const Yi=e=>H.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:H.jsx(e,{})}),Wi=[{kode:ie.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ie.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],Zi=[{kode:me.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:me.ANNET,navn:"Annet",kodeverk:"UGUNST"}],tl={title:"sak/sak-meldinger",component:Wr,decorators:[Yi],args:{kanVeilede:!1,revurderingVarslingArsak:Zi,behandling:{brevmaler:Wi,sprakkode:"NO"},previewCallback:fn("button-click"),submitCallback:fn("button-click"),setMeldingFormData:fn("button-click")}},Ze={args:{fagsakYtelseType:Oe.FORELDREPENGER,brukerManglerAdresse:!1}},Je={args:{fagsakYtelseType:Oe.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},Qe={args:{fagsakYtelseType:Oe.FORELDREPENGER,brukerManglerAdresse:!0}};var Jn,Qn,Xn;Ze.parameters={...Ze.parameters,docs:{...(Jn=Ze.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(Xn=(Qn=Ze.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var er,nr,rr;Je.parameters={...Je.parameters,docs:{...(er=Je.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(rr=(nr=Je.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var tr,ar,sr;Qe.parameters={...Qe.parameters,docs:{...(tr=Qe.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(sr=(ar=Qe.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};const al=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{Qe as BrukerManglerAdresse,Ze as Default,Je as ForSvangerskapspenger,al as __namedExportsOrder,tl as default};
