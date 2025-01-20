import{j as H}from"./jsx-runtime-DjgmBYnU.js";import{k as Se,u as wn,a as ne,l as br,B as pr,S as at,i as st,d as hr,L as An,o as De,p as _r,E as Er,b as it,f as lt,n as me,M as en,V as wr,q as ot,P as Ar,g as dt,r as ut,s as gt,h as ft,m as ct,j as fn}from"./nb_NO-BKqqFBKE.js";import{R as p,r as R}from"./index-D7mKeUb6.js";import{d as jn}from"./dayjs.min-Boho2IT3.js";import{M as mt}from"./index-BdR6VAUc.js";import"./index-DjXIRphR.js";import"./v4-CtRu48qb.js";import"./index-DCOq8Jev.js";var sn=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(sn||{});sn.BRUKERS_ANDEL;sn.FRILANS;sn.EGEN_NÆRING;var ie=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ie||{}),Oe=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Oe||{}),ve=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(ve||{}),Ce=e=>e.type==="checkbox",he=e=>e instanceof Date,ee=e=>e==null;const jr=e=>typeof e=="object";var $=e=>!ee(e)&&!Array.isArray(e)&&jr(e)&&!he(e),xr=e=>$(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,yt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Or=(e,t)=>e.has(yt(t)),vt=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},xn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(xn&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!vt(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=ae(e[a]));else return e;return t}var ln=e=>Array.isArray(e)?e.filter(Boolean):[],U=e=>e===void 0,b=(e,t,n)=>{if(!t||!$(e))return n;const r=ln(t.split(/[,[\].]+?/)).reduce((a,s)=>ee(a)?a:a[s],e);return U(r)||r===e?U(e[t])?n:e[t]:r},de=e=>typeof e=="boolean",On=e=>/^\w*$/.test(e),Sr=e=>ln(e.replace(/["|']|\]/g,"").split(/\.|\[/)),C=(e,t,n)=>{let r=-1;const a=On(t)?[t]:Sr(t),s=a.length,l=s-1;for(;++r<s;){const d=a[r];let g=n;if(r!==l){const _=e[d];g=$(_)||Array.isArray(_)?_:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=g,e=e[d]}return e};const nn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ue={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ye={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Rr=p.createContext(null),Ke=()=>p.useContext(Rr),kt=e=>{const{children:t,...n}=e;return p.createElement(Rr.Provider,{value:n},t)};var Tr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const l=s;return t._proxyFormState[l]!==ue.all&&(t._proxyFormState[l]=!r||ue.all),n&&(n[l]=!0),e[l]}});return a},se=e=>$(e)&&!Object.keys(e).length,Nr=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return se(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(l=>t[l]===(!r||ue.all))},Me=e=>Array.isArray(e)?e:[e],qr=(e,t,n)=>!e||!t||e===t||Me(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function Sn(e){const t=p.useRef(e);t.current=e,p.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function bt(e){const t=Ke(),{control:n=t.control,disabled:r,name:a,exact:s}=e,[l,d]=p.useState(n._formState),g=p.useRef(!0),_=p.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=p.useRef(a);return f.current=a,Sn({disabled:r,next:m=>g.current&&qr(f.current,m.name,s)&&Nr(m,_.current,n._updateFormState)&&d({...n._formState,...m}),subject:n._subjects.state}),p.useEffect(()=>(g.current=!0,_.current.isValid&&n._updateValid(!0),()=>{g.current=!1}),[n]),p.useMemo(()=>Tr(l,n,_.current,!1),[l,n])}var ce=e=>typeof e=="string",Vr=(e,t,n,r,a)=>ce(e)?(r&&t.watch.add(e),b(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),b(n,s))):(r&&(t.watchAll=!0),n);function pt(e){const t=Ke(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:l}=e,d=p.useRef(r);d.current=r,Sn({disabled:s,subject:n._subjects.values,next:f=>{qr(d.current,f.name,l)&&_(ae(Vr(d.current,n._names,f.values||n._formValues,!1,a)))}});const[g,_]=p.useState(n._getWatch(r,a));return p.useEffect(()=>n._removeUnmounted()),g}function Fr(e){const t=Ke(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,l=Or(a._names.array,n),d=pt({control:a,name:n,defaultValue:b(a._formValues,n,b(a._defaultValues,n,e.defaultValue)),exact:!0}),g=bt({control:a,name:n,exact:!0}),_=p.useRef(a.register(n,{...e.rules,value:d,...de(e.disabled)?{disabled:e.disabled}:{}})),f=p.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!b(g.errors,n)},isDirty:{enumerable:!0,get:()=>!!b(g.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!b(g.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!b(g.validatingFields,n)},error:{enumerable:!0,get:()=>b(g.errors,n)}}),[g,n]),m=p.useMemo(()=>({name:n,value:d,...de(r)||g.disabled?{disabled:g.disabled||r}:{},onChange:j=>_.current.onChange({target:{value:xr(j),name:n},type:nn.CHANGE}),onBlur:()=>_.current.onBlur({target:{value:b(a._formValues,n),name:n},type:nn.BLUR}),ref:j=>{const x=b(a._fields,n);x&&j&&(x._f.ref={focus:()=>j.focus(),select:()=>j.select(),setCustomValidity:T=>j.setCustomValidity(T),reportValidity:()=>j.reportValidity()})}}),[n,a._formValues,r,g.disabled,d,a._fields]);return p.useEffect(()=>{const j=a._options.shouldUnregister||s,x=(T,N)=>{const y=b(a._fields,T);y&&y._f&&(y._f.mount=N)};if(x(n,!0),j){const T=ae(b(a._options.defaultValues,n));C(a._defaultValues,n,T),U(b(a._formValues,n))&&C(a._formValues,n,T)}return!l&&a.register(n),()=>{(l?j&&!a._state.action:j)?a.unregister(n):x(n,!1)}},[n,a,l,s]),p.useEffect(()=>{a._updateDisabledField({disabled:r,fields:a._fields,name:n})},[r,n,a]),p.useMemo(()=>({field:m,formState:g,fieldState:f}),[m,g,f])}var ht=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Fn=e=>({isOnSubmit:!e||e===ue.onSubmit,isOnBlur:e===ue.onBlur,isOnChange:e===ue.onChange,isOnAll:e===ue.all,isOnTouch:e===ue.onTouched}),In=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Le=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=b(e,a);if(s){const{_f:l,...d}=s;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],a)&&!r)return!0;if(l.ref&&t(l.ref,l.name)&&!r)return!0;if(Le(d,t))break}else if($(d)&&Le(d,t))break}}};var _t=(e,t,n)=>{const r=Me(b(e,n));return C(r,"root",t[n]),C(e,n,r),e},Rn=e=>e.type==="file",fe=e=>typeof e=="function",rn=e=>{if(!xn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xe=e=>ce(e),Tn=e=>e.type==="radio",tn=e=>e instanceof RegExp;const Bn={value:!1,isValid:!1},Pn={value:!0,isValid:!0};var Ir=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!U(e[0].attributes.value)?U(e[0].value)||e[0].value===""?Pn:{value:e[0].value,isValid:!0}:Pn:Bn}return Bn};const Mn={isValid:!1,value:null};var Br=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Mn):Mn;function Ln(e,t,n="validate"){if(Xe(e)||Array.isArray(e)&&e.every(Xe)||de(e)&&!e)return{type:n,message:Xe(e)?e:"",ref:t}}var xe=e=>$(e)&&!tn(e)?e:{value:e,message:""},Dn=async(e,t,n,r,a,s)=>{const{ref:l,refs:d,required:g,maxLength:_,minLength:f,min:m,max:j,pattern:x,validate:T,name:N,valueAsNumber:y,mount:E}=e._f,v=b(n,N);if(!E||t.has(N))return{};const w=d?d[0]:l,V=A=>{a&&w.reportValidity&&(w.setCustomValidity(de(A)?"":A||""),w.reportValidity())},F={},Q=Tn(l),K=Ce(l),D=Q||K,M=(y||Rn(l))&&U(l.value)&&U(v)||rn(l)&&l.value===""||v===""||Array.isArray(v)&&!v.length,B=ht.bind(null,N,r,F),G=(A,S,I,P=ye.maxLength,L=ye.minLength)=>{const z=A?S:I;F[N]={type:A?P:L,message:z,ref:l,...B(A?P:L,z)}};if(s?!Array.isArray(v)||!v.length:g&&(!D&&(M||ee(v))||de(v)&&!v||K&&!Ir(d).isValid||Q&&!Br(d).isValid)){const{value:A,message:S}=Xe(g)?{value:!!g,message:g}:xe(g);if(A&&(F[N]={type:ye.required,message:S,ref:w,...B(ye.required,S)},!r))return V(S),F}if(!M&&(!ee(m)||!ee(j))){let A,S;const I=xe(j),P=xe(m);if(!ee(v)&&!isNaN(v)){const L=l.valueAsNumber||v&&+v;ee(I.value)||(A=L>I.value),ee(P.value)||(S=L<P.value)}else{const L=l.valueAsDate||new Date(v),z=ge=>new Date(new Date().toDateString()+" "+ge),te=l.type=="time",le=l.type=="week";ce(I.value)&&v&&(A=te?z(v)>z(I.value):le?v>I.value:L>new Date(I.value)),ce(P.value)&&v&&(S=te?z(v)<z(P.value):le?v<P.value:L<new Date(P.value))}if((A||S)&&(G(!!A,I.message,P.message,ye.max,ye.min),!r))return V(F[N].message),F}if((_||f)&&!M&&(ce(v)||s&&Array.isArray(v))){const A=xe(_),S=xe(f),I=!ee(A.value)&&v.length>+A.value,P=!ee(S.value)&&v.length<+S.value;if((I||P)&&(G(I,A.message,S.message),!r))return V(F[N].message),F}if(x&&!M&&ce(v)){const{value:A,message:S}=xe(x);if(tn(A)&&!v.match(A)&&(F[N]={type:ye.pattern,message:S,ref:l,...B(ye.pattern,S)},!r))return V(S),F}if(T){if(fe(T)){const A=await T(v,n),S=Ln(A,w);if(S&&(F[N]={...S,...B(ye.validate,S.message)},!r))return V(S.message),F}else if($(T)){let A={};for(const S in T){if(!se(A)&&!r)break;const I=Ln(await T[S](v,n),w,S);I&&(A={...I,...B(S,I.message)},V(I.message),r&&(F[N]=A))}if(!se(A)&&(F[N]={ref:w,...A},!r))return F}}return V(!0),F};function Et(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=U(e)?r++:e[t[r++]];return e}function wt(e){for(const t in e)if(e.hasOwnProperty(t)&&!U(e[t]))return!1;return!0}function Y(e,t){const n=Array.isArray(t)?t:On(t)?[t]:Sr(t),r=n.length===1?e:Et(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&se(r)||Array.isArray(r)&&wt(r))&&Y(e,n.slice(0,-1)),e}var cn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},bn=e=>ee(e)||!jr(e);function be(e,t){if(bn(e)||bn(t))return e===t;if(he(e)&&he(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const l=t[a];if(he(s)&&he(l)||$(s)&&$(l)||Array.isArray(s)&&Array.isArray(l)?!be(s,l):s!==l)return!1}}return!0}var Pr=e=>e.type==="select-multiple",At=e=>Tn(e)||Ce(e),mn=e=>rn(e)&&e.isConnected,Mr=e=>{for(const t in e)if(fe(e[t]))return!0;return!1};function an(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!Mr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},an(e[r],t[r])):ee(e[r])||(t[r]=!0);return t}function Lr(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Mr(e[a])?U(t)||bn(n[a])?n[a]=Array.isArray(e[a])?an(e[a],[]):{...an(e[a])}:Lr(e[a],ee(t)?{}:t[a],n[a]):n[a]=!be(e[a],t[a]);return n}var Fe=(e,t)=>Lr(e,t,an(t)),Dr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>U(e)?e:t?e===""?NaN:e&&+e:n&&ce(e)?new Date(e):r?r(e):e;function yn(e){const t=e.ref;return Rn(t)?t.files:Tn(t)?Br(e.refs).value:Pr(t)?[...t.selectedOptions].map(({value:n})=>n):Ce(t)?Ir(e.refs).value:Dr(U(t.value)?e.ref.value:t.value,e)}var jt=(e,t,n,r)=>{const a={};for(const s of e){const l=b(t,s);l&&C(a,s,l._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Ie=e=>U(e)?e:tn(e)?e.source:$(e)?tn(e.value)?e.value.source:e.value:e;const Cn="AsyncFunction";var xt=e=>!!e&&!!e.validate&&!!(fe(e.validate)&&e.validate.constructor.name===Cn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Cn)),Ot=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Kn(e,t,n){const r=b(e,n);if(r||On(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),l=b(t,s),d=b(e,s);if(l&&!Array.isArray(l)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var St=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,Rt=(e,t)=>!ln(b(e,t)).length&&Y(e,t);const Tt={mode:ue.onSubmit,reValidateMode:ue.onChange,shouldFocusError:!0};function Nt(e={}){let t={...Tt,...e},n={submitCount:0,isDirty:!1,isLoading:fe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},a=$(t.defaultValues)||$(t.values)?ae(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:ae(a),l={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},g,_=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:cn(),array:cn(),state:cn()},j=Fn(t.mode),x=Fn(t.reValidateMode),T=t.criteriaMode===ue.all,N=i=>o=>{clearTimeout(_),_=setTimeout(i,o)},y=async i=>{if(!t.disabled&&(f.isValid||i)){const o=t.resolver?se((await D()).errors):await B(r,!0);o!==n.isValid&&m.state.next({isValid:o})}},E=(i,o)=>{!t.disabled&&(f.isValidating||f.validatingFields)&&((i||Array.from(d.mount)).forEach(u=>{u&&(o?C(n.validatingFields,u,o):Y(n.validatingFields,u))}),m.state.next({validatingFields:n.validatingFields,isValidating:!se(n.validatingFields)}))},v=(i,o=[],u,h,k=!0,c=!0)=>{if(h&&u&&!t.disabled){if(l.action=!0,c&&Array.isArray(b(r,i))){const O=u(b(r,i),h.argA,h.argB);k&&C(r,i,O)}if(c&&Array.isArray(b(n.errors,i))){const O=u(b(n.errors,i),h.argA,h.argB);k&&C(n.errors,i,O),Rt(n.errors,i)}if(f.touchedFields&&c&&Array.isArray(b(n.touchedFields,i))){const O=u(b(n.touchedFields,i),h.argA,h.argB);k&&C(n.touchedFields,i,O)}f.dirtyFields&&(n.dirtyFields=Fe(a,s)),m.state.next({name:i,isDirty:A(i,o),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else C(s,i,o)},w=(i,o)=>{C(n.errors,i,o),m.state.next({errors:n.errors})},V=i=>{n.errors=i,m.state.next({errors:n.errors,isValid:!1})},F=(i,o,u,h)=>{const k=b(r,i);if(k){const c=b(s,i,U(u)?b(a,i):u);U(c)||h&&h.defaultChecked||o?C(s,i,o?c:yn(k._f)):P(i,c),l.mount&&y()}},Q=(i,o,u,h,k)=>{let c=!1,O=!1;const q={name:i};if(!t.disabled){const Z=!!(b(r,i)&&b(r,i)._f&&b(r,i)._f.disabled);if(!u||h){f.isDirty&&(O=n.isDirty,n.isDirty=q.isDirty=A(),c=O!==q.isDirty);const J=Z||be(b(a,i),o);O=!!(!Z&&b(n.dirtyFields,i)),J||Z?Y(n.dirtyFields,i):C(n.dirtyFields,i,!0),q.dirtyFields=n.dirtyFields,c=c||f.dirtyFields&&O!==!J}if(u){const J=b(n.touchedFields,i);J||(C(n.touchedFields,i,u),q.touchedFields=n.touchedFields,c=c||f.touchedFields&&J!==u)}c&&k&&m.state.next(q)}return c?q:{}},K=(i,o,u,h)=>{const k=b(n.errors,i),c=f.isValid&&de(o)&&n.isValid!==o;if(t.delayError&&u?(g=N(()=>w(i,u)),g(t.delayError)):(clearTimeout(_),g=null,u?C(n.errors,i,u):Y(n.errors,i)),(u?!be(k,u):k)||!se(h)||c){const O={...h,...c&&de(o)?{isValid:o}:{},errors:n.errors,name:i};n={...n,...O},m.state.next(O)}},D=async i=>{E(i,!0);const o=await t.resolver(s,t.context,jt(i||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return E(i),o},M=async i=>{const{errors:o}=await D(i);if(i)for(const u of i){const h=b(o,u);h?C(n.errors,u,h):Y(n.errors,u)}else n.errors=o;return o},B=async(i,o,u={valid:!0})=>{for(const h in i){const k=i[h];if(k){const{_f:c,...O}=k;if(c){const q=d.array.has(c.name),Z=k._f&&xt(k._f);Z&&f.validatingFields&&E([h],!0);const J=await Dn(k,d.disabled,s,T,t.shouldUseNativeValidation&&!o,q);if(Z&&f.validatingFields&&E([h]),J[c.name]&&(u.valid=!1,o))break;!o&&(b(J,c.name)?q?_t(n.errors,J,c.name):C(n.errors,c.name,J[c.name]):Y(n.errors,c.name))}!se(O)&&await B(O,o,u)}}return u.valid},G=()=>{for(const i of d.unMount){const o=b(r,i);o&&(o._f.refs?o._f.refs.every(u=>!mn(u)):!mn(o._f.ref))&&Re(i)}d.unMount=new Set},A=(i,o)=>!t.disabled&&(i&&o&&C(s,i,o),!be(X(),a)),S=(i,o,u)=>Vr(i,d,{...l.mount?s:U(o)?a:ce(i)?{[i]:o}:o},u,o),I=i=>ln(b(l.mount?s:a,i,t.shouldUnregister?b(a,i,[]):[])),P=(i,o,u={})=>{const h=b(r,i);let k=o;if(h){const c=h._f;c&&(!c.disabled&&C(s,i,Dr(o,c)),k=rn(c.ref)&&ee(o)?"":o,Pr(c.ref)?[...c.ref.options].forEach(O=>O.selected=k.includes(O.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(O=>(!O.defaultChecked||!O.disabled)&&(O.checked=Array.isArray(k)?!!k.find(q=>q===O.value):k===O.value)):c.refs[0]&&(c.refs[0].checked=!!k):c.refs.forEach(O=>O.checked=O.value===k):Rn(c.ref)?c.ref.value="":(c.ref.value=k,c.ref.type||m.values.next({name:i,values:{...s}})))}(u.shouldDirty||u.shouldTouch)&&Q(i,k,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ge(i)},L=(i,o,u)=>{for(const h in o){const k=o[h],c=`${i}.${h}`,O=b(r,c);(d.array.has(i)||$(k)||O&&!O._f)&&!he(k)?L(c,k,u):P(c,k,u)}},z=(i,o,u={})=>{const h=b(r,i),k=d.array.has(i),c=ae(o);C(s,i,c),k?(m.array.next({name:i,values:{...s}}),(f.isDirty||f.dirtyFields)&&u.shouldDirty&&m.state.next({name:i,dirtyFields:Fe(a,s),isDirty:A(i,c)})):h&&!h._f&&!ee(c)?L(i,c,u):P(i,c,u),In(i,d)&&m.state.next({...n}),m.values.next({name:l.mount?i:void 0,values:{...s}})},te=async i=>{l.mount=!0;const o=i.target;let u=o.name,h=!0;const k=b(r,u),c=()=>o.type?yn(k._f):xr(i),O=q=>{h=Number.isNaN(q)||he(q)&&isNaN(q.getTime())||be(q,b(s,u,q))};if(k){let q,Z;const J=c(),ke=i.type===nn.BLUR||i.type===nn.FOCUS_OUT,nt=!Ot(k._f)&&!t.resolver&&!b(n.errors,u)&&!k._f.deps||St(ke,b(n.touchedFields,u),n.isSubmitted,x,j),un=In(u,d,ke);C(s,u,J),ke?(k._f.onBlur&&k._f.onBlur(i),g&&g(0)):k._f.onChange&&k._f.onChange(i);const gn=Q(u,J,ke,!1),rt=!se(gn)||un;if(!ke&&m.values.next({name:u,type:i.type,values:{...s}}),nt)return f.isValid&&(t.mode==="onBlur"&&ke?y():ke||y()),rt&&m.state.next({name:u,...un?{}:gn});if(!ke&&un&&m.state.next({...n}),t.resolver){const{errors:qn}=await D([u]);if(O(J),h){const tt=Kn(n.errors,r,u),Vn=Kn(qn,r,tt.name||u);q=Vn.error,u=Vn.name,Z=se(qn)}}else E([u],!0),q=(await Dn(k,d.disabled,s,T,t.shouldUseNativeValidation))[u],E([u]),O(J),h&&(q?Z=!1:f.isValid&&(Z=await B(r,!0)));h&&(k._f.deps&&ge(k._f.deps),K(u,Z,q,gn))}},le=(i,o)=>{if(b(n.errors,o)&&i.focus)return i.focus(),1},ge=async(i,o={})=>{let u,h;const k=Me(i);if(t.resolver){const c=await M(U(i)?i:k);u=se(c),h=i?!k.some(O=>b(c,O)):u}else i?(h=(await Promise.all(k.map(async c=>{const O=b(r,c);return await B(O&&O._f?{[c]:O}:O)}))).every(Boolean),!(!h&&!n.isValid)&&y()):h=u=await B(r);return m.state.next({...!ce(i)||f.isValid&&u!==n.isValid?{}:{name:i},...t.resolver||!i?{isValid:u}:{},errors:n.errors}),o.shouldFocus&&!h&&Le(r,le,i?k:d.mount),h},X=i=>{const o={...l.mount?s:a};return U(i)?o:ce(i)?b(o,i):i.map(u=>b(o,u))},Ee=(i,o)=>({invalid:!!b((o||n).errors,i),isDirty:!!b((o||n).dirtyFields,i),error:b((o||n).errors,i),isValidating:!!b(n.validatingFields,i),isTouched:!!b((o||n).touchedFields,i)}),we=i=>{i&&Me(i).forEach(o=>Y(n.errors,o)),m.state.next({errors:i?n.errors:{}})},Ge=(i,o,u)=>{const h=(b(r,i,{_f:{}})._f||{}).ref,k=b(n.errors,i)||{},{ref:c,message:O,type:q,...Z}=k;C(n.errors,i,{...Z,...o,ref:h}),m.state.next({name:i,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},dn=(i,o)=>fe(i)?m.values.subscribe({next:u=>i(S(void 0,o),u)}):S(i,o,!0),Re=(i,o={})=>{for(const u of i?Me(i):d.mount)d.mount.delete(u),d.array.delete(u),o.keepValue||(Y(r,u),Y(s,u)),!o.keepError&&Y(n.errors,u),!o.keepDirty&&Y(n.dirtyFields,u),!o.keepTouched&&Y(n.touchedFields,u),!o.keepIsValidating&&Y(n.validatingFields,u),!t.shouldUnregister&&!o.keepDefaultValue&&Y(a,u);m.values.next({values:{...s}}),m.state.next({...n,...o.keepDirty?{isDirty:A()}:{}}),!o.keepIsValid&&y()},He=({disabled:i,name:o,field:u,fields:h})=>{(de(i)&&l.mount||i||d.disabled.has(o))&&(i?d.disabled.add(o):d.disabled.delete(o),Q(o,yn(u?u._f:b(h,o)._f),!1,!1,!0))},Te=(i,o={})=>{let u=b(r,i);const h=de(o.disabled)||de(t.disabled);return C(r,i,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:i}},name:i,mount:!0,...o}}),d.mount.add(i),u?He({field:u,disabled:de(o.disabled)?o.disabled:t.disabled,name:i}):F(i,!0,o.value),{...h?{disabled:o.disabled||t.disabled}:{},...t.progressive?{required:!!o.required,min:Ie(o.min),max:Ie(o.max),minLength:Ie(o.minLength),maxLength:Ie(o.maxLength),pattern:Ie(o.pattern)}:{},name:i,onChange:te,onBlur:te,ref:k=>{if(k){Te(i,o),u=b(r,i);const c=U(k.value)&&k.querySelectorAll&&k.querySelectorAll("input,select,textarea")[0]||k,O=At(c),q=u._f.refs||[];if(O?q.find(Z=>Z===c):c===u._f.ref)return;C(r,i,{_f:{...u._f,...O?{refs:[...q.filter(mn),c,...Array.isArray(b(a,i))?[{}]:[]],ref:{type:c.type,name:i}}:{ref:c}}}),F(i,!1,void 0,c)}else u=b(r,i,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(Or(d.array,i)&&l.action)&&d.unMount.add(i)}}},Ne=()=>t.shouldFocusError&&Le(r,le,d.mount),Ue=i=>{de(i)&&(m.state.next({disabled:i}),Le(r,(o,u)=>{const h=b(r,u);h&&(o.disabled=h._f.disabled||i,Array.isArray(h._f.refs)&&h._f.refs.forEach(k=>{k.disabled=h._f.disabled||i}))},0,!1))},Ae=(i,o)=>async u=>{let h;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let k=ae(s);if(d.disabled.size)for(const c of d.disabled)C(k,c,void 0);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:c,values:O}=await D();n.errors=c,k=O}else await B(r);if(Y(n.errors,"root"),se(n.errors)){m.state.next({errors:{}});try{await i(k,u)}catch(c){h=c}}else o&&await o({...n.errors},u),Ne(),setTimeout(Ne);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:se(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},qe=(i,o={})=>{b(r,i)&&(U(o.defaultValue)?z(i,ae(b(a,i))):(z(i,o.defaultValue),C(a,i,ae(o.defaultValue))),o.keepTouched||Y(n.touchedFields,i),o.keepDirty||(Y(n.dirtyFields,i),n.isDirty=o.defaultValue?A(i,ae(b(a,i))):A()),o.keepError||(Y(n.errors,i),f.isValid&&y()),m.state.next({...n}))},je=(i,o={})=>{const u=i?ae(i):a,h=ae(u),k=se(i),c=k?a:h;if(o.keepDefaultValues||(a=u),!o.keepValues){if(o.keepDirtyValues){const O=new Set([...d.mount,...Object.keys(Fe(a,s))]);for(const q of Array.from(O))b(n.dirtyFields,q)?C(c,q,b(s,q)):z(q,b(c,q))}else{if(xn&&U(i))for(const O of d.mount){const q=b(r,O);if(q&&q._f){const Z=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(rn(Z)){const J=Z.closest("form");if(J){J.reset();break}}}}r={}}s=t.shouldUnregister?o.keepDefaultValues?ae(a):{}:ae(c),m.array.next({values:{...c}}),m.values.next({values:{...c}})}d={mount:o.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!f.isValid||!!o.keepIsValid||!!o.keepDirtyValues,l.watch=!!t.shouldUnregister,m.state.next({submitCount:o.keepSubmitCount?n.submitCount:0,isDirty:k?!1:o.keepDirty?n.isDirty:!!(o.keepDefaultValues&&!be(i,a)),isSubmitted:o.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:k?{}:o.keepDirtyValues?o.keepDefaultValues&&s?Fe(a,s):n.dirtyFields:o.keepDefaultValues&&i?Fe(a,i):o.keepDirty?n.dirtyFields:{},touchedFields:o.keepTouched?n.touchedFields:{},errors:o.keepErrors?n.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},pe=(i,o)=>je(fe(i)?i(s):i,o);return{control:{register:Te,unregister:Re,getFieldState:Ee,handleSubmit:Ae,setError:Ge,_executeSchema:D,_getWatch:S,_getDirty:A,_updateValid:y,_removeUnmounted:G,_updateFieldArray:v,_updateDisabledField:He,_getFieldArray:I,_reset:je,_resetDefaultValues:()=>fe(t.defaultValues)&&t.defaultValues().then(i=>{pe(i,t.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:i=>{n={...n,...i}},_disableForm:Ue,_subjects:m,_proxyFormState:f,_setErrors:V,get _fields(){return r},get _formValues(){return s},get _state(){return l},set _state(i){l=i},get _defaultValues(){return a},get _names(){return d},set _names(i){d=i},get _formState(){return n},set _formState(i){n=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:ge,register:Te,handleSubmit:Ae,watch:dn,setValue:z,getValues:X,reset:pe,resetField:qe,clearErrors:we,unregister:Re,setError:Ge,setFocus:(i,o={})=>{const u=b(r,i),h=u&&u._f;if(h){const k=h.refs?h.refs[0]:h.ref;k.focus&&(k.focus(),o.shouldSelect&&fe(k.select)&&k.select())}},getFieldState:Ee}}function qt(e={}){const t=p.useRef(void 0),n=p.useRef(void 0),[r,a]=p.useState({isDirty:!1,isValidating:!1,isLoading:fe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:fe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Nt(e),formState:r});const s=t.current.control;return s._options=e,Sn({subject:s._subjects.state,next:l=>{Nr(l,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),p.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),p.useEffect(()=>{if(s._proxyFormState.isDirty){const l=s._getDirty();l!==r.isDirty&&s._subjects.state.next({isDirty:l})}},[s,r.isDirty]),p.useEffect(()=>{e.values&&!be(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(l=>({...l}))):s._resetDefaultValues()},[e.values,s]),p.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),p.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),p.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Tr(r,s),t.current}function Cr(e,t=166,n=!1){let r;function a(...s){const l=()=>{r=void 0,e.apply(this,s)};!r&&n&&l(),clearTimeout(r),r=setTimeout(l,t)}return a.clear=()=>{clearTimeout(r)},a}const Gn=globalThis!=null&&globalThis.document?R.useLayoutEffect:()=>{};var Vt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ft=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Vt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var It=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=It(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Pt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Mt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Pt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Lt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Kr=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Lt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Dt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ct=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Dt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gt=R.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Kt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?R.createElement("title",{id:s},n):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Ht=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ut={error:Gt,warning:Bt,info:Mt,success:st},$t=R.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:l=!1,contentMaxWidth:d=!0,inline:g=!1,closeButton:_=!1,onClose:f}=e,m=Ht(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const j=wn("Alert"),x=Ut[a];return p.createElement("div",Object.assign({},m,{ref:t,className:ne(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":l,"navds-alert--inline":g,"navds-alert--close-button":_})}),p.createElement(x,{title:j(a),className:"navds-alert__icon"}),p.createElement(br,{as:"div",size:s,className:ne("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),_&&!g&&p.createElement("div",{className:"navds-alert__button-wrapper"},p.createElement(pr,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:f,type:"button",icon:p.createElement(at,{title:["error","warning"].includes(a)?j("closeAlert"):j("closeMessage")})})))}),zt=()=>p.createElement(Kr,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),Yt=()=>p.createElement(Kr,{title:wn("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Wt=R.createContext(null),Gr=(e,t)=>{var n,r,a;const{size:s,error:l,errorId:d}=e,g=R.useContext(Wt),_=hr(),f=(n=e.id)!==null&&n!==void 0?n:`${t}-${_}`,m=d??`${t}-error-${_}`,j=`${t}-description-${_}`,x=(g==null?void 0:g.disabled)||e.disabled,T=((g==null?void 0:g.readOnly)||e.readOnly)&&!x||void 0,N=!x&&!T&&!!(l||g!=null&&g.error),y=!x&&!T&&!!l&&typeof l!="boolean",E=Object.assign({},N?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:N,errorId:m,inputDescriptionId:j,size:(r=s??(g==null?void 0:g.size))!==null&&r!==void 0?r:"medium",readOnly:T,inputProps:Object.assign(Object.assign({id:f},E),{"aria-describedby":ne(e["aria-describedby"],{[j]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[m]:y,[(a=g==null?void 0:g.errorId)!==null&&a!==void 0?a:""]:N&&!!(g!=null&&g.error)})||void 0,disabled:x})}};var Zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Jt=R.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:l,inputDescriptionId:d,readOnly:g}=Gr(e,"select"),{children:_,label:f,className:m,description:j,htmlSize:x,hideLabel:T=!1,style:N}=e,y=Zt(e,["children","label","className","description","htmlSize","hideLabel","style"]),E={onMouseDown:v=>{g&&(v.preventDefault(),v.target.focus())},onKeyDown:v=>{g&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(v.key)&&v.preventDefault()}};return p.createElement("div",{className:ne(m,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":g,"navds-select--error":s,"navds-select--readonly":g})},p.createElement(An,{htmlFor:n.id,size:l,className:ne("navds-form-field__label",{"navds-sr-only":T})},g&&p.createElement(Yt,null),f),!!j&&p.createElement(De,{className:ne("navds-form-field__description",{"navds-sr-only":T}),id:d,size:l,as:"div"},j),p.createElement("div",{className:"navds-select__container",style:N},p.createElement("select",Object.assign({},_r(y,["error","errorId","size","readOnly"]),n,E,{ref:t,className:ne("navds-select__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:x}),_),p.createElement(Ft,{className:"navds-select__chevron","aria-hidden":!0})),p.createElement("div",{className:"navds-form-field__error",id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&p.createElement(Er,{size:l,showIcon:!0},e.error)))});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Xt=R.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:l=!1}=e,d=Qt(e,["as","className","underline","variant","inlineText"]);return p.createElement(n,Object.assign({},d,{ref:t,className:ne("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":l})}))});var ea=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const na=R.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:l}=e,d=ea(e,["children","className","variant","size","icon"]);const g=(a==null?void 0:a.endsWith("-filled"))&&"strong",_=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",f=a==null?void 0:a.replace("-filled","").replace("-moderate","");return p.createElement(De,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:ne("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${g||_||"outline"}`,`navds-tag--${f}`)}),l&&p.createElement("span",{className:"navds-tag__icon--left"},l),n)});var ra=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Hn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Un=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Ye(e){return parseInt(e,10)||0}const ta=R.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:l,minRows:d=1,autoScrollbar:g,style:_,value:f}=e,m=ra(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:j}=R.useRef(f!=null),x=R.useRef(null),T=it(x,t),N=R.useRef(null),y=R.useRef(0),[E,v]=R.useState({outerHeightStyle:0}),w=p.useCallback(()=>{const K=x.current,M=Un(K).getComputedStyle(K);if(M.width==="0px")return{outerHeightStyle:0};const B=N.current;B.style.width=M.width,B.value=K.value||m.placeholder||"x",B.value.slice(-1)===`
`&&(B.value+=" ");const G=M.boxSizing,A=Ye(M.paddingBottom)+Ye(M.paddingTop),S=Ye(M.borderBottomWidth)+Ye(M.borderTopWidth),I=B.scrollHeight-A;B.value="x";const P=B.scrollHeight-A;let L=I;d&&(L=Math.max(Number(d)*P,L)),l&&(L=Math.min(Number(l)*P,L)),L=Math.max(L,P);const z=L+(G==="border-box"?A+S:0),te=Math.abs(L-I)<=1;return{outerHeightStyle:z,overflow:te}},[l,d,m.placeholder]),V=()=>{const K=w();$n(K)||v(D=>Hn(D,K,y))};Gn(()=>{const K=()=>{const A=w();$n(A)||mt.flushSync(()=>{v(S=>Hn(S,A,y))})},D=Cr(()=>{var A,S,I;if(y.current=0,!((A=x.current)===null||A===void 0)&&A.style.height||!((S=x.current)===null||S===void 0)&&S.style.width){((I=x.current)===null||I===void 0?void 0:I.style.overflow)==="hidden"&&v(P=>Object.assign(Object.assign({},P),{overflow:!1}));return}K()},166,!0),M=x.current,B=Un(M);B.addEventListener("resize",D);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(D),G.observe(M)),()=>{D.clear(),B.removeEventListener("resize",D),G&&G.disconnect()}},[w]),Gn(()=>{V()}),R.useEffect(()=>{y.current=0},[f]);const F=K=>{y.current=0,j||V(),s&&s(K)},Q=Object.assign({"--__ac-textarea-height":E.outerHeightStyle+"px","--__axc-textarea-height":E.outerHeightStyle+"px",overflow:E.overflow&&!g&&!(!((n=x.current)===null||n===void 0)&&n.style.height)&&!(!((r=x.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},_);return p.createElement(p.Fragment,null,p.createElement("textarea",Object.assign({value:f,onChange:F,ref:T,rows:d,style:Q},m,{className:a})),p.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:N,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},_)}))});function $n(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const aa=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const s=wn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),l=t-n,[d,g]=R.useState(l);return R.useEffect(()=>{const _=Cr(()=>{g(l)},2e3);return _(),()=>{_.clear()}},[l]),p.createElement(p.Fragment,null,p.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:t})),l<20&&p.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},zn(d,s)),p.createElement(De,{className:ne("navds-textarea__counter",{"navds-textarea__counter--error":l<0}),size:r},zn(l,s)))},zn=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var sa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ia=R.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:l,showErrorMsg:d,hasError:g,size:_,inputDescriptionId:f}=Gr(e,"textarea"),{label:m,className:j,description:x,maxLength:T,hideLabel:N=!1,resize:y,UNSAFE_autoScrollbar:E,i18n:v,readOnly:w}=e,V=sa(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),F=hr(),Q=T!==void 0&&T>0,[K,D]=R.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),M=()=>{let G=V!=null&&V.minRows?V==null?void 0:V.minRows:3;return _==="small"&&(G=V!=null&&V.minRows?V==null?void 0:V.minRows:2),G},B=ne(s["aria-describedby"],{[F??""]:Q});return p.createElement("div",{className:ne(j,"navds-form-field",`navds-form-field--${_}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":w,"navds-textarea--readonly":w,"navds-textarea--error":g,"navds-textarea--autoscrollbar":E,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},p.createElement(An,{htmlFor:s.id,size:_,className:ne("navds-form-field__label",{"navds-sr-only":N})},w&&p.createElement(zt,null),m),!!x&&p.createElement(De,{className:ne("navds-form-field__description",{"navds-sr-only":N}),id:f,size:_,as:"div"},x),p.createElement(ta,Object.assign({},_r(V,["error","errorId","size"]),s,{onChange:lt(e.onChange,e.value===void 0?G=>D(G.target.value):void 0),minRows:M(),autoScrollbar:E,ref:t,readOnly:w,className:ne("navds-textarea__input","navds-body-short",`navds-body-short--${_??"medium"}`)},B?{"aria-describedby":B}:{})),Q&&!w&&!s.disabled&&p.createElement(aa,{maxLengthId:F,maxLength:T,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:K.length,size:_,i18n:v}),p.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&p.createElement(Er,{size:_,showIcon:!0},e.error)))});function la(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yn={exports:{}},Be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wn;function oa(){if(Wn)return Be;Wn=1;var e=p,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(d,g,_){var f,m={},j=null,x=null;_!==void 0&&(j=""+_),g.key!==void 0&&(j=""+g.key),g.ref!==void 0&&(x=g.ref);for(f in g)r.call(g,f)&&!s.hasOwnProperty(f)&&(m[f]=g[f]);if(d&&d.defaultProps)for(f in g=d.defaultProps,g)m[f]===void 0&&(m[f]=g[f]);return{$$typeof:t,type:d,key:j,ref:x,props:m,_owner:a.current}}return Be.Fragment=n,Be.jsx=l,Be.jsxs=l,Be}var Zn;function da(){return Zn||(Zn=1,Yn.exports=oa()),Yn.exports}var W=da();const ua=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:W.jsx($t,{variant:"warning",size:"small",children:W.jsx(wr,{gap:"2",children:p.Children.map(e,t=>W.jsx(De,{size:"small",children:t},ot(t)?t.key:t))})}),_e={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};me(_e);me(_e);var Jn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qn;function ga(){return Qn||(Qn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",l=0;l<arguments.length;l++){var d=arguments[l];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var d in s)t.call(s,d)&&s[d]&&(l=a(l,this&&this[d]||d));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Jn)),Jn.exports}var fa=ga();const oe=la(fa),ca="_borderbox_hicl4_1",ma="_error_hicl4_4",ya="_warning_hicl4_7",va={borderbox:ca,error:ma,warning:ya};oe.bind(va);const ka="_aksjonspunkt_kn1hn_1",ba="_erAksjonspunktApent_kn1hn_4",pa="_erIkkeGodkjentAvBeslutter_kn1hn_8",ha={aksjonspunkt:ka,erAksjonspunktApent:ba,erIkkeGodkjentAvBeslutter:pa};oe.bind(ha);me(_e);me(_e);const _a="_tooltip_h8akz_1",Ea="_tooltiptext_h8akz_5",wa="_left_h8akz_22",Aa="_top_h8akz_27",ja="_right_h8akz_30",xa="_bottom_h8akz_34",Oa="_showTooltip_h8akz_1",pn={tooltip:_a,tooltiptext:Ea,left:wa,top:Aa,right:ja,bottom:xa,showTooltip:Oa},Sa=oe.bind(pn),Ra=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>W.jsxs("div",{className:pn.tooltip,children:[W.jsx("span",{className:Sa(pn.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),Ta=p.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:l,onKeyDown:d,tooltip:g,alignTooltipLeft:_=!1},f)=>{const[m,j]=R.useState(!1),x=R.useCallback(()=>{j(!0)},[]),T=R.useCallback(()=>{j(!1)},[]),N=R.useCallback(v=>{(v.key==="Enter"||v.key===" ")&&(d&&d(v),v.preventDefault())},[]),y=s&&m?s:a,E=W.jsx("img",{ref:f,className:r,src:y,alt:l,tabIndex:n,onMouseOver:x,onMouseOut:T,onFocus:x,onBlur:T,onKeyDown:N,onMouseDown:t,onClick:e});return g?W.jsx(Ra,{content:g,alignLeft:_,children:E}):E});Ta.displayName="Image";const Na="_flexColumnNew_1vdv1_1",qa={flexColumnNew:Na};oe.bind(qa);const Va="_flexRow_1yf0y_1",Fa="_spaceBetween_1yf0y_9",Ia="_alignItemsToBaseline_1yf0y_12",Ba="_alignItemsToFlexEnd_1yf0y_15",Pa="_justifyItemsToFlexEnd_1yf0y_18",Ma="_wrap_1yf0y_21",La={flexRow:Va,spaceBetween:Fa,alignItemsToBaseline:Ia,alignItemsToFlexEnd:Ba,justifyItemsToFlexEnd:Pa,wrap:Ma};oe.bind(La);const Da="_flexContainer_1dk1o_1",Ca="_fluid_1dk1o_6",Ka="_fullHeight_1dk1o_9",Ga="_flexWrap_1dk1o_17",Ha={flexContainer:Da,fluid:Ca,fullHeight:Ka,flexWrap:Ga};oe.bind(Ha);me(_e);const Ua="_row_1lxv9_1",$a="_harHover_1lxv9_4",za="_rowHeader_1lxv9_7",Ya="_grayHeader_1lxv9_12",Wa="_rowContent_1lxv9_15",Za="_selected_1lxv9_18",Ja="_bold_1lxv9_22",Qa="_dashedBottomBorder_1lxv9_25",Xa="_solidBottomBorder_1lxv9_28",es="_apLeftBorder_1lxv9_31",ns="_noBottomBorder_1lxv9_34",Hr={row:Ua,harHover:$a,rowHeader:za,grayHeader:Ya,rowContent:Wa,selected:Za,bold:Ja,dashedBottomBorder:Qa,solidBottomBorder:Xa,apLeftBorder:es,noBottomBorder:ns},rs=oe.bind(Hr),ts=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},Ur=e=>e.tagName==="TR"?e:Ur(e.parentElement),Xn=(e,t)=>{const n=Ur(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},as=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Xn(a,!0):a.key==="ArrowUp"?Xn(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},ss=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},is=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:l,noHover:d=!1,isSelected:g=!1,isBold:_=!1,isDashedBottomBorder:f=!1,isSolidBottomBorder:m=!1,isApLeftBorder:j=!1,className:x,useMultiselect:T=!1,hasNoBottomBorder:N=!1})=>W.jsx("tr",{className:rs(x,Hr.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!d,selected:g,harHover:!d,bold:_,dashedBottomBorder:f,solidBottomBorder:m,noBottomBorder:N,apLeftBorder:j}),onMouseDown:ts(a,e,t),onKeyDown:as(T,s,e,t),onKeyUp:T?ss(s):void 0,tabIndex:0,children:l}),ls="_columnStyle_1f13u_1",$r={columnStyle:ls},os=oe.bind($r),vn=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:W.jsx("td",{className:os($r.columnStyle,t),colSpan:r?100:void 0,children:e}),ds="_table_2cnpl_1",us="_rowHover_2cnpl_25",gs={table:ds,rowHover:us},fs=oe.bind(gs),cs="EMPTY",ms=p.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},l)=>W.jsxs("table",{ref:l,className:fs("table",{[n]:n,rowHover:!r}),children:[W.jsx("thead",{children:W.jsxs(is,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(d=>typeof d=="string"&&d.startsWith(cs)?W.jsx(vn,{children:" "},d):W.jsx(vn,{children:W.jsx(en,{id:d})},d)),t.map(d=>W.jsx(vn,{children:d},d.key))]})}),W.jsx("tbody",{children:Array.isArray(s)?p.Children.map(s,d=>p.cloneElement(d,{noHover:r})):p.cloneElement(s,{noHover:r})})]}));ms.displayName="Table";const ys="_hidden_1pb4f_1",vs="_active_1pb4f_8",ks="_activeRow_1pb4f_15 _active_1pb4f_8",bs="_toggleIcon_1pb4f_19",ps="_colTopPadding_1pb4f_22",hs={hidden:ys,active:vs,activeRow:ks,toggleIcon:bs,colTopPadding:ps};oe.bind(hs);me(_e);const _s="_fourPx_qda5k_1",Es="_eightPx_qda5k_4",ws="_sixteenPx_qda5k_7",As="_twentyPx_qda5k_10",js="_thirtyTwoPx_qda5k_13",xs="_fourtyPx_qda5k_16",Os={fourPx:_s,eightPx:Es,sixteenPx:ws,twentyPx:As,thirtyTwoPx:js,fourtyPx:xs};oe.bind(Os);me(_e);const Ss="_divider_1t980_1",Rs="_dividerParagraf_1t980_8",Ts="_leftPanel_1t980_11",Ns="_rightPanel_1t980_14",qs={divider:Ss,dividerParagraf:Rs,leftPanel:Ts,rightPanel:Ns};oe.bind(qs);const Vs="_editedIcon_ulrjl_1",Fs={editedIcon:Vs},Is=oe.bind(Fs),Bs=({className:e=""})=>W.jsx("span",{"data-testid":"editedIcon",className:Is("editedIcon",e),children:W.jsx(Ct,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function Ps(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var er={exports:{}},Pe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr;function Ms(){if(nr)return Pe;nr=1;var e=p,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(d,g,_){var f,m={},j=null,x=null;_!==void 0&&(j=""+_),g.key!==void 0&&(j=""+g.key),g.ref!==void 0&&(x=g.ref);for(f in g)r.call(g,f)&&!s.hasOwnProperty(f)&&(m[f]=g[f]);if(d&&d.defaultProps)for(f in g=d.defaultProps,g)m[f]===void 0&&(m[f]=g[f]);return{$$typeof:t,type:d,key:j,ref:x,props:m,_owner:a.current}}return Pe.Fragment=n,Pe.jsx=l,Pe.jsxs=l,Pe}var rr;function Ls(){return rr||(rr=1,er.exports=Ms()),er.exports}var re=Ls();const zr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),Yr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var hn={exports:{}},Ds=hn.exports,tr;function Cs(){return tr||(tr=1,function(e,t){(function(n,r){e.exports=r()})(Ds,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,l=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,g={},_=function(y){return(y=+y)+(y>68?1900:2e3)},f=function(y){return function(E){this[y]=+E}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(E){if(!E||E==="Z")return 0;var v=E.match(/([+-]|\d\d)/g),w=60*v[1]+(+v[2]||0);return w===0?0:v[0]==="+"?-w:w}(y)}],j=function(y){var E=g[y];return E&&(E.indexOf?E:E.s.concat(E.f))},x=function(y,E){var v,w=g.meridiem;if(w){for(var V=1;V<=24;V+=1)if(y.indexOf(w(V,0,E))>-1){v=V>12;break}}else v=y===(E?"pm":"PM");return v},T={A:[d,function(y){this.afternoon=x(y,!1)}],a:[d,function(y){this.afternoon=x(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[l,f("seconds")],ss:[l,f("seconds")],m:[l,f("minutes")],mm:[l,f("minutes")],H:[l,f("hours")],h:[l,f("hours")],HH:[l,f("hours")],hh:[l,f("hours")],D:[l,f("day")],DD:[s,f("day")],Do:[d,function(y){var E=g.ordinal,v=y.match(/\d+/);if(this.day=v[0],E)for(var w=1;w<=31;w+=1)E(w).replace(/\[|\]/g,"")===y&&(this.day=w)}],w:[l,f("week")],ww:[s,f("week")],M:[l,f("month")],MM:[s,f("month")],MMM:[d,function(y){var E=j("months"),v=(j("monthsShort")||E.map(function(w){return w.slice(0,3)})).indexOf(y)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[d,function(y){var E=j("months").indexOf(y)+1;if(E<1)throw new Error;this.month=E%12||E}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(y){this.year=_(y)}],YYYY:[/\d{4}/,f("year")],Z:m,ZZ:m};function N(y){var E,v;E=y,v=g&&g.formats;for(var w=(y=E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(B,G,A){var S=A&&A.toUpperCase();return G||v[A]||n[A]||v[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(I,P,L){return P||L.slice(1)})})).match(r),V=w.length,F=0;F<V;F+=1){var Q=w[F],K=T[Q],D=K&&K[0],M=K&&K[1];w[F]=M?{regex:D,parser:M}:Q.replace(/^\[|\]$/g,"")}return function(B){for(var G={},A=0,S=0;A<V;A+=1){var I=w[A];if(typeof I=="string")S+=I.length;else{var P=I.regex,L=I.parser,z=B.slice(S),te=P.exec(z)[0];L.call(G,te),B=B.replace(te,"")}}return function(le){var ge=le.afternoon;if(ge!==void 0){var X=le.hours;ge?X<12&&(le.hours+=12):X===12&&(le.hours=0),delete le.afternoon}}(G),G}}return function(y,E,v){v.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(_=y.parseTwoDigitYear);var w=E.prototype,V=w.parse;w.parse=function(F){var Q=F.date,K=F.utc,D=F.args;this.$u=K;var M=D[1];if(typeof M=="string"){var B=D[2]===!0,G=D[3]===!0,A=B||G,S=D[2];G&&(S=D[2]),g=this.$locale(),!B&&S&&(g=v.Ls[S]),this.$d=function(z,te,le,ge){try{if(["x","X"].indexOf(te)>-1)return new Date((te==="X"?1e3:1)*z);var X=N(te)(z),Ee=X.year,we=X.month,Ge=X.day,dn=X.hours,Re=X.minutes,He=X.seconds,Te=X.milliseconds,Ne=X.zone,Ue=X.week,Ae=new Date,qe=Ge||(Ee||we?1:Ae.getDate()),je=Ee||Ae.getFullYear(),pe=0;Ee&&!we||(pe=we>0?we-1:Ae.getMonth());var Ve,$e=dn||0,ze=Re||0,i=He||0,o=Te||0;return Ne?new Date(Date.UTC(je,pe,qe,$e,ze,i,o+60*Ne.offset*1e3)):le?new Date(Date.UTC(je,pe,qe,$e,ze,i,o)):(Ve=new Date(je,pe,qe,$e,ze,i,o),Ue&&(Ve=ge(Ve).week(Ue).toDate()),Ve)}catch{return new Date("")}}(Q,M,K,v),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),A&&Q!=this.format(M)&&(this.$d=new Date("")),g={}}else if(M instanceof Array)for(var I=M.length,P=1;P<=I;P+=1){D[1]=M[P-1];var L=v.apply(this,D);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}P===I&&(this.$d=new Date(""))}else V.call(this,F)}}})}(hn)),hn.exports}var Ks=Cs();const Gs=Ps(Ks),Hs="_readOnlyContainer_v0eco_1",Us="_readOnlyContent_v0eco_4",$s="_readOnlyContentCenter_v0eco_7",zs="_textarea_v0eco_11",Ys="_space_v0eco_15",We={readOnlyContainer:Hs,readOnlyContent:Us,readOnlyContentCenter:$s,textarea:zs,space:Ys},Ws=e=>e!=null&&e!=="",Wr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>Ws(t)?re.jsxs("div",{className:We.readOnlyContainer,children:[e&&!a&&re.jsx(An,{size:"small",children:e}),re.jsx("div",{className:r==="textarea"?We.textarea:"",children:re.jsxs(br,{className:We.readOnlyContent,size:s,children:[t,n&&re.jsx(Bs,{className:We.space})]})})]}):null;jn.extend(Gs);const ar=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:l=!1,onChange:d,disabled:g,className:_,hideLabel:f,isEdited:m,size:j})=>{const{formState:{errors:x}}=Ke(),{field:T}=Fr({name:e,rules:{validate:R.useMemo(()=>zr(r),[r])}});if(a){const E=n.map(w=>w.props).find(w=>w.value===T.value),v=E?E.children:void 0;return re.jsx(Wr,{value:v,label:t,hideLabel:f,isEdited:m,size:j})}const N=T.value||"",y=!n.map(E=>E.props.value).includes(N)&&N!=="";return y&&console.warn(`No corresponding option found for value '${N}'`),re.jsxs(Jt,{size:"small",className:_,error:Yr(x,e),label:t,description:s,value:l&&g||y?"":T.value,disabled:g,onChange:E=>{d&&d(E),T.onChange(E)},hideLabel:f,children:[re.jsx("option",{style:{display:"none"}}),",",n]})},Zs="_textAreaFieldWithBadges_bdz0b_1",Js="_etikettWrapper_bdz0b_4",sr={textAreaFieldWithBadges:Zs,etikettWrapper:Js},Qs=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:l=m=>m,className:d,description:g,isEdited:_,...f})=>{const{formState:{errors:m}}=Ke(),{field:j}=Fr({name:e,rules:{validate:R.useMemo(()=>zr(s),[s])}});return n?re.jsx(Wr,{label:t,value:j.value,type:"textarea",isEdited:_,hideLabel:f.hideLabel}):re.jsxs("div",{className:a?sr.textAreaFieldWithBadges:null,children:[a&&re.jsx("div",{className:sr.etikettWrapper,children:a.map(({type:x,titleText:T})=>re.jsx(na,{variant:x,size:"small",children:T},T))}),re.jsx(ia,{size:"small",label:t,description:g,className:d,autoComplete:"off",...j,onChange:x=>j.onChange(x.currentTarget.value!==""?l(x.currentTarget.value):null),value:j.value?j.value:"",error:Yr(m,e),maxLength:r,...f})]})},Xs=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:l}=e;return R.useEffect(()=>()=>{a&&a(l())},[]),re.jsx(kt,{...e,children:re.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})},ei="Dato må være før eller lik {limit}",ni="Dato må være etter eller lik {limit}",ri="Perioder kan ikke overlappe i tid",ti="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",ai="Dato må være lik {value}",si="Dato må skrives slik: dd.mm.åååå",ii="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",li="Tallet kan ikke inneholde mer enn to desimaler",oi="Tallet kan ikke ha desimaler",di="Feltet kan kun inneholde tall",ui="Ugyldig fødselsnummer",gi="Feltet må være et fødselsnummer (11 siffer)",fi="Ugyldig organisasjonsnummer.",ci="Ugyldig organisasjonsnummer eller fødselsnummer",mi="Startdato må være før eller lik sluttdato",yi="Periode er utenfor opptjeningsperioden",vi="Ugyldig saksnummer eller fødselsnummer",ki="Feltet inneholder ugyldige tegn: {text}",bi="Feltet inneholder en ugyldig verdi: {value}",pi="Feltet kan ikke inneholde mellomrom",hi="Feltet må fylles ut",_i="Du kan skrive maksimalt {length} tegn",Ei="Du må skrive minst {length} tegn",wi="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Ai="Feltet må være mindre eller lik {length}",ji="Feltet må være større eller lik {length}",xi="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Oi={DateNotBeforeOrEqual:ei,DateNotAfterOrEqual:ni,DateRangesOverlapping:ri,DateRangesOverlappingPeriodTypes:ti,DatesNotEqual:ai,InvalidDate:si,InvalidDatesInPeriod:ii,InvalidDecimal:li,InvalidInteger:oi,InvalidNumber:di,InvalidFodselsnr:ui,InvalidFodselsnrFormat:gi,InvalidOrgnr:fi,InvalidOrgnrOrFodselsnr:ci,InvalidPeriod:mi,InvalidPeriodRange:yi,InvalidSaksnrOrFodselsnrFormat:vi,InvalidText:ki,InvalidValue:bi,IllegalWhiteSpace:pi,IsRequired:hi,MaxLength:_i,MinLength:Ei,MaxLengthOrFodselsnr:wi,MaxValue:Ai,MinValue:ji,SammeFodselsnrSomSoker:xi},{formatMessage:on}=me(Oi),Si=e=>on({id:"InvalidText"},{text:e}),Ri=()=>on({id:"IsRequired"}),Ti=e=>on({id:"MaxLength"},{length:e}),Ni=e=>on({id:"MinLength"},{length:e}),qi=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Vi=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Nn=e=>e==null||e.toString().trim().length===0;function Zr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _n={exports:{}},Fi=_n.exports,ir;function Ii(){return ir||(ir=1,function(e,t){(function(n,r){e.exports=r()})(Fi,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(_n)),_n.exports}var Bi=Ii();const Pi=Zr(Bi);var En={exports:{}},Mi=En.exports,lr;function Li(){return lr||(lr=1,function(e,t){(function(n,r){e.exports=r()})(Mi,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(En)),En.exports}var Di=Li();const Ci=Zr(Di);jn.extend(Pi);jn.extend(Ci);const kn=e=>Nn(e)?Ri():void 0,Ki=e=>t=>Nn(t)||t.toString().trim().length>=e?null:Ni(e),Jr=e=>t=>Nn(t)||t.toString().trim().length<=e?null:Ti(e),Gi=e=>{if(!qi.test(e)){const t=e.replace(Vi,"");return Si(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Hi=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Ui="_ukjentAdresseMargins_4teno_1",$i={ukjentAdresseMargins:Ui},zi={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Yi=me(zi),Qr=()=>H.jsx(Ar,{value:Yi,children:H.jsx("div",{className:$i.ukjentAdresseMargins,children:H.jsx(ua,{children:H.jsx("b",{children:H.jsx(en,{id:"UkjentAdresse.Text"})})})})});Qr.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const Wi="_buttonRow_jav4h_1",Zi="_previewLink_jav4h_5",Ji="_bredde_jav4h_9",or={buttonRow:Wi,previewLink:Zi,bredde:Ji},Qi=Jr(4e3),Xi=Jr(1e4),el=Ki(3),nl=e=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",rl=(e,t)=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.FRITEKST||e===ie.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ie.VARSEL_OM_TILBAKEKREVING||e===ie.TBK_INNHENTE_OPPLYSNINGER||e===ie.VARSEL_OM_REVURDERING&&t===ve.ANNET,tl=(e,t)=>t===Oe.ENGANGSSTONAD?e.filter(n=>n.kode===ve.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===ve.ANNET):t===Oe.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==ve.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==ve.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,al=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ie.VARSEL_OM_REVURDERING}:{...t}},sl=e=>{const t=e;return e.brevmalkode===ie.VARSEL_OM_REVURDERING&&t.arsakskode!==ve.ANNET&&(t.fritekst=" "),t},Xr=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:l,setMeldingFormData:d,brukerManglerAdresse:g})=>{const _=dt(),f=qt({defaultValues:l||al(e)}),m=f.watch("brevmalkode"),j=f.watch("fritekst"),x=f.watch("arsakskode"),T=R.useMemo(()=>tl(r,a),[]);if(!e.sprakkode)return null;const{formState:N}=f,y=w=>{m&&t(m,j,x),w.preventDefault()},E=ut(e.sprakkode),v=m===ie.VARSEL_OM_REVURDERING;return H.jsx(Xs,{formMethods:f,onSubmit:w=>n(sl(w)),setDataOnUnmount:d,children:H.jsxs(wr,{gap:"4",children:[H.jsx(ar,{name:"brevmalkode",label:_.formatMessage({id:"Messages.Template"}),validate:[kn],selectValues:e.brevmaler.map(w=>H.jsx("option",{value:w.kode,disabled:!w.tilgjengelig,children:w.navn},w.kode)),className:or.bredde}),v&&H.jsx(ar,{name:"arsakskode",label:_.formatMessage({id:"Messages.Årsak"}),validate:[kn],selectValues:T.map(w=>H.jsx("option",{value:w.kode,children:w.navn},w.kode)),className:or.bredde}),rl(m,x)&&H.jsx(Qs,{name:"fritekst",label:_.formatMessage({id:nl(m)}),validate:[kn,v?Xi:Qi,el,Gi],maxLength:v?1e4:4e3,badges:[{type:"info",titleText:E}],parse:gt}),g&&H.jsx(Qr,{}),H.jsxs(ft,{justify:"space-between",children:[H.jsx(Xt,{href:"#",onClick:y,onKeyDown:w=>w.key==="Enter"?y(w):null,children:H.jsx(en,{id:"Messages.Preview"})}),H.jsx(pr,{size:"small",variant:"primary",loading:N.isSubmitting,disabled:N.isSubmitting||s,onClick:Hi,children:H.jsx(en,{id:"Messages.Submit"})})]})]})})};Xr.__docgenInfo={description:`Messages

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const il=me(ct),et=e=>H.jsx(Ar,{value:il,children:H.jsx(Xr,{...e})});et.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""}}};const ll=e=>H.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:H.jsx(e,{})}),ol=[{kode:ie.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ie.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],dl=[{kode:ve.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:ve.ANNET,navn:"Annet",kodeverk:"UGUNST"}],bl={title:"sak/sak-meldinger",component:et,decorators:[ll],args:{kanVeilede:!1,revurderingVarslingArsak:dl,behandling:{brevmaler:ol,sprakkode:"NO"},previewCallback:fn("button-click"),submitCallback:fn("button-click"),setMeldingFormData:fn("button-click")}},Ze={args:{fagsakYtelseType:Oe.FORELDREPENGER,brukerManglerAdresse:!1}},Je={args:{fagsakYtelseType:Oe.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},Qe={args:{fagsakYtelseType:Oe.FORELDREPENGER,brukerManglerAdresse:!0}};var dr,ur,gr;Ze.parameters={...Ze.parameters,docs:{...(dr=Ze.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(gr=(ur=Ze.parameters)==null?void 0:ur.docs)==null?void 0:gr.source}}};var fr,cr,mr;Je.parameters={...Je.parameters,docs:{...(fr=Je.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(mr=(cr=Je.parameters)==null?void 0:cr.docs)==null?void 0:mr.source}}};var yr,vr,kr;Qe.parameters={...Qe.parameters,docs:{...(yr=Qe.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(kr=(vr=Qe.parameters)==null?void 0:vr.docs)==null?void 0:kr.source}}};const pl=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{Qe as BrukerManglerAdresse,Ze as Default,Je as ForSvangerskapspenger,pl as __namedExportsOrder,bl as default};
