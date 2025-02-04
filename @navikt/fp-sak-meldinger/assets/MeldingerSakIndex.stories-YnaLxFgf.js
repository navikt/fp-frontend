import{j as H}from"./jsx-runtime-CLpGMVip.js";import{k as Se,u as qn,a as ne,l as Or,B as Sr,S as kt,i as ft,d as xr,L as _n,o as Ge,p as Br,E as Nr,b as mt,f as yt,n as ve,M as en,V as Vr,q as vt,P as Fr,g as ct,r as bt,s as pt,h as ht,m as jt,j as kn}from"./nb_NO-Qj3lIXwS.js";import{R as b,r as O}from"./index-CYQpqK1Q.js";import{d as En}from"./dayjs.min-DPY8FYmS.js";import{M as qt}from"./index-4Uuc9FQs.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";var sn=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(sn||{});sn.BRUKERS_ANDEL;sn.FRILANS;sn.EGEN_NÆRING;var ie=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ie||{}),Oe=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Oe||{}),ye=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(ye||{}),He=e=>e.type==="checkbox",_e=e=>e instanceof Date,X=e=>e==null;const Pr=e=>typeof e=="object";var $=e=>!X(e)&&!Array.isArray(e)&&Pr(e)&&!_e(e),Mr=e=>$(e)&&e.target?He(e.target)?e.target.checked:e.target.value:e,_t=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ir=(e,t)=>e.has(_t(t)),Et=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},An=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(An&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!Et(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=ae(e[a]));else return e;return t}var ln=e=>Array.isArray(e)?e.filter(Boolean):[],U=e=>e===void 0,y=(e,t,n)=>{if(!t||!$(e))return n;const r=ln(t.split(/[,[\].]+?/)).reduce((a,s)=>X(a)?a:a[s],e);return U(r)||r===e?U(e[t])?n:e[t]:r},oe=e=>typeof e=="boolean",wn=e=>/^\w*$/.test(e),Lr=e=>ln(e.replace(/["|']|\]/g,"").split(/\.|\[/)),K=(e,t,n)=>{let r=-1;const a=wn(t)?[t]:Lr(t),s=a.length,l=s-1;for(;++r<s;){const u=a[r];let g=n;if(r!==l){const q=e[u];g=$(q)||Array.isArray(q)?q:isNaN(+a[r+1])?{}:[]}if(u==="__proto__"||u==="constructor"||u==="prototype")return;e[u]=g,e=e[u]}return e};const nn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},de={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},me={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Dr=b.createContext(null),Ue=()=>b.useContext(Dr),At=e=>{const{children:t,...n}=e;return b.createElement(Dr.Provider,{value:n},t)};var Kr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const l=s;return t._proxyFormState[l]!==de.all&&(t._proxyFormState[l]=!r||de.all),n&&(n[l]=!0),e[l]}});return a},se=e=>$(e)&&!Object.keys(e).length,Cr=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return se(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(l=>t[l]===(!r||de.all))},Ke=e=>Array.isArray(e)?e:[e],Gr=(e,t,n)=>!e||!t||e===t||Ke(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function Tn(e){const t=b.useRef(e);t.current=e,b.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function wt(e){const t=Ue(),{control:n=t.control,disabled:r,name:a,exact:s}=e,[l,u]=b.useState(n._formState),g=b.useRef(!0),q=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=b.useRef(a);return f.current=a,Tn({disabled:r,next:p=>g.current&&Gr(f.current,p.name,s)&&Cr(p,q.current,n._updateFormState)&&u({...n._formState,...p}),subject:n._subjects.state}),b.useEffect(()=>(g.current=!0,q.current.isValid&&n._updateValid(!0),()=>{g.current=!1}),[n]),b.useMemo(()=>Kr(l,n,q.current,!1),[l,n])}var fe=e=>typeof e=="string",Hr=(e,t,n,r,a)=>fe(e)?(r&&t.watch.add(e),y(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),y(n,s))):(r&&(t.watchAll=!0),n);function Tt(e){const t=Ue(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:l}=e,u=b.useRef(r);u.current=r,Tn({disabled:s,subject:n._subjects.values,next:f=>{Gr(u.current,f.name,l)&&q(ae(Hr(u.current,n._names,f.values||n._formValues,!1,a)))}});const[g,q]=b.useState(n._getWatch(r,a));return b.useEffect(()=>n._removeUnmounted()),g}function Ur(e){const t=Ue(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,l=Ir(a._names.array,n),u=Tt({control:a,name:n,defaultValue:y(a._formValues,n,y(a._defaultValues,n,e.defaultValue)),exact:!0}),g=wt({control:a,name:n,exact:!0}),q=b.useRef(a.register(n,{...e.rules,value:u,...oe(e.disabled)?{disabled:e.disabled}:{}})),f=b.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!y(g.errors,n)},isDirty:{enumerable:!0,get:()=>!!y(g.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!y(g.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!y(g.validatingFields,n)},error:{enumerable:!0,get:()=>y(g.errors,n)}}),[g,n]),p=b.useMemo(()=>({name:n,value:u,...oe(r)||g.disabled?{disabled:g.disabled||r}:{},onChange:R=>q.current.onChange({target:{value:Mr(R),name:n},type:nn.CHANGE}),onBlur:()=>q.current.onBlur({target:{value:y(a._formValues,n),name:n},type:nn.BLUR}),ref:R=>{const T=y(a._fields,n);T&&R&&(T._f.ref={focus:()=>R.focus(),select:()=>R.select(),setCustomValidity:S=>R.setCustomValidity(S),reportValidity:()=>R.reportValidity()})}}),[n,a._formValues,r,g.disabled,u,a._fields]);return b.useEffect(()=>{const R=a._options.shouldUnregister||s,T=(S,x)=>{const v=y(a._fields,S);v&&v._f&&(v._f.mount=x)};if(T(n,!0),R){const S=ae(y(a._options.defaultValues,n));K(a._defaultValues,n,S),U(y(a._formValues,n))&&K(a._formValues,n,S)}return!l&&a.register(n),()=>{(l?R&&!a._state.action:R)?a.unregister(n):T(n,!1)}},[n,a,l,s]),b.useEffect(()=>{a._updateDisabledField({disabled:r,fields:a._fields,name:n})},[r,n,a]),b.useMemo(()=>({field:p,formState:g,fieldState:f}),[p,g,f])}var Rt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Pn=e=>({isOnSubmit:!e||e===de.onSubmit,isOnBlur:e===de.onBlur,isOnChange:e===de.onChange,isOnAll:e===de.all,isOnTouch:e===de.onTouched}),Mn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Ce=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=y(e,a);if(s){const{_f:l,...u}=s;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],a)&&!r)return!0;if(l.ref&&t(l.ref,l.name)&&!r)return!0;if(Ce(u,t))break}else if($(u)&&Ce(u,t))break}}};var Ot=(e,t,n)=>{const r=Ke(y(e,n));return K(r,"root",t[n]),K(e,n,r),e},Rn=e=>e.type==="file",ke=e=>typeof e=="function",rn=e=>{if(!An)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xe=e=>fe(e),On=e=>e.type==="radio",tn=e=>e instanceof RegExp;const In={value:!1,isValid:!1},Ln={value:!0,isValid:!0};var $r=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!U(e[0].attributes.value)?U(e[0].value)||e[0].value===""?Ln:{value:e[0].value,isValid:!0}:Ln:In}return In};const Dn={isValid:!1,value:null};var Yr=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Dn):Dn;function Kn(e,t,n="validate"){if(Xe(e)||Array.isArray(e)&&e.every(Xe)||oe(e)&&!e)return{type:n,message:Xe(e)?e:"",ref:t}}var Re=e=>$(e)&&!tn(e)?e:{value:e,message:""},Cn=async(e,t,n,r,a,s)=>{const{ref:l,refs:u,required:g,maxLength:q,minLength:f,min:p,max:R,pattern:T,validate:S,name:x,valueAsNumber:v,mount:_}=e._f,c=y(n,x);if(!_||t.has(x))return{};const j=u?u[0]:l,N=E=>{a&&j.reportValidity&&(j.setCustomValidity(oe(E)?"":E||""),j.reportValidity())},V={},J=On(l),C=He(l),D=J||C,I=(v||Rn(l))&&U(l.value)&&U(c)||rn(l)&&l.value===""||c===""||Array.isArray(c)&&!c.length,P=Rt.bind(null,x,r,V),G=(E,w,F,M=me.maxLength,L=me.minLength)=>{const Y=E?w:F;V[x]={type:E?M:L,message:Y,ref:l,...P(E?M:L,Y)}};if(s?!Array.isArray(c)||!c.length:g&&(!D&&(I||X(c))||oe(c)&&!c||C&&!$r(u).isValid||J&&!Yr(u).isValid)){const{value:E,message:w}=Xe(g)?{value:!!g,message:g}:Re(g);if(E&&(V[x]={type:me.required,message:w,ref:j,...P(me.required,w)},!r))return N(w),V}if(!I&&(!X(p)||!X(R))){let E,w;const F=Re(R),M=Re(p);if(!X(c)&&!isNaN(c)){const L=l.valueAsNumber||c&&+c;X(F.value)||(E=L>F.value),X(M.value)||(w=L<M.value)}else{const L=l.valueAsDate||new Date(c),Y=ge=>new Date(new Date().toDateString()+" "+ge),te=l.type=="time",le=l.type=="week";fe(F.value)&&c&&(E=te?Y(c)>Y(F.value):le?c>F.value:L>new Date(F.value)),fe(M.value)&&c&&(w=te?Y(c)<Y(M.value):le?c<M.value:L<new Date(M.value))}if((E||w)&&(G(!!E,F.message,M.message,me.max,me.min),!r))return N(V[x].message),V}if((q||f)&&!I&&(fe(c)||s&&Array.isArray(c))){const E=Re(q),w=Re(f),F=!X(E.value)&&c.length>+E.value,M=!X(w.value)&&c.length<+w.value;if((F||M)&&(G(F,E.message,w.message),!r))return N(V[x].message),V}if(T&&!I&&fe(c)){const{value:E,message:w}=Re(T);if(tn(E)&&!c.match(E)&&(V[x]={type:me.pattern,message:w,ref:l,...P(me.pattern,w)},!r))return N(w),V}if(S){if(ke(S)){const E=await S(c,n),w=Kn(E,j);if(w&&(V[x]={...w,...P(me.validate,w.message)},!r))return N(w.message),V}else if($(S)){let E={};for(const w in S){if(!se(E)&&!r)break;const F=Kn(await S[w](c,n),j,w);F&&(E={...F,...P(w,F.message)},N(F.message),r&&(V[x]=E))}if(!se(E)&&(V[x]={ref:j,...E},!r))return V}}return N(!0),V};function St(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=U(e)?r++:e[t[r++]];return e}function xt(e){for(const t in e)if(e.hasOwnProperty(t)&&!U(e[t]))return!1;return!0}function z(e,t){const n=Array.isArray(t)?t:wn(t)?[t]:Lr(t),r=n.length===1?e:St(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&se(r)||Array.isArray(r)&&xt(r))&&z(e,n.slice(0,-1)),e}var fn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},bn=e=>X(e)||!Pr(e);function be(e,t){if(bn(e)||bn(t))return e===t;if(_e(e)&&_e(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const l=t[a];if(_e(s)&&_e(l)||$(s)&&$(l)||Array.isArray(s)&&Array.isArray(l)?!be(s,l):s!==l)return!1}}return!0}var zr=e=>e.type==="select-multiple",Bt=e=>On(e)||He(e),mn=e=>rn(e)&&e.isConnected,Wr=e=>{for(const t in e)if(ke(e[t]))return!0;return!1};function an(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!Wr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},an(e[r],t[r])):X(e[r])||(t[r]=!0);return t}function Zr(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Wr(e[a])?U(t)||bn(n[a])?n[a]=Array.isArray(e[a])?an(e[a],[]):{...an(e[a])}:Zr(e[a],X(t)?{}:t[a],n[a]):n[a]=!be(e[a],t[a]);return n}var Me=(e,t)=>Zr(e,t,an(t)),Jr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>U(e)?e:t?e===""?NaN:e&&+e:n&&fe(e)?new Date(e):r?r(e):e;function yn(e){const t=e.ref;return Rn(t)?t.files:On(t)?Yr(e.refs).value:zr(t)?[...t.selectedOptions].map(({value:n})=>n):He(t)?$r(e.refs).value:Jr(U(t.value)?e.ref.value:t.value,e)}var Nt=(e,t,n,r)=>{const a={};for(const s of e){const l=y(t,s);l&&K(a,s,l._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Ie=e=>U(e)?e:tn(e)?e.source:$(e)?tn(e.value)?e.value.source:e.value:e;const Gn="AsyncFunction";var Vt=e=>!!e&&!!e.validate&&!!(ke(e.validate)&&e.validate.constructor.name===Gn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Gn)),Ft=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Hn(e,t,n){const r=y(e,n);if(r||wn(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),l=y(t,s),u=y(e,s);if(l&&!Array.isArray(l)&&n!==s)return{name:n};if(u&&u.type)return{name:s,error:u};a.pop()}return{name:n}}var Pt=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,Mt=(e,t)=>!ln(y(e,t)).length&&z(e,t);const It={mode:de.onSubmit,reValidateMode:de.onChange,shouldFocusError:!0};function Lt(e={}){let t={...It,...e},n={submitCount:0,isDirty:!1,isLoading:ke(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},a=$(t.defaultValues)||$(t.values)?ae(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:ae(a),l={action:!1,mount:!1,watch:!1},u={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},g,q=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:fn(),array:fn(),state:fn()},R=Pn(t.mode),T=Pn(t.reValidateMode),S=t.criteriaMode===de.all,x=i=>o=>{clearTimeout(q),q=setTimeout(i,o)},v=async i=>{if(!t.disabled&&(f.isValid||i)){const o=t.resolver?se((await D()).errors):await P(r,!0);o!==n.isValid&&p.state.next({isValid:o})}},_=(i,o)=>{!t.disabled&&(f.isValidating||f.validatingFields)&&((i||Array.from(u.mount)).forEach(d=>{d&&(o?K(n.validatingFields,d,o):z(n.validatingFields,d))}),p.state.next({validatingFields:n.validatingFields,isValidating:!se(n.validatingFields)}))},c=(i,o=[],d,h,m=!0,k=!0)=>{if(h&&d&&!t.disabled){if(l.action=!0,k&&Array.isArray(y(r,i))){const A=d(y(r,i),h.argA,h.argB);m&&K(r,i,A)}if(k&&Array.isArray(y(n.errors,i))){const A=d(y(n.errors,i),h.argA,h.argB);m&&K(n.errors,i,A),Mt(n.errors,i)}if(f.touchedFields&&k&&Array.isArray(y(n.touchedFields,i))){const A=d(y(n.touchedFields,i),h.argA,h.argB);m&&K(n.touchedFields,i,A)}f.dirtyFields&&(n.dirtyFields=Me(a,s)),p.state.next({name:i,isDirty:E(i,o),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else K(s,i,o)},j=(i,o)=>{K(n.errors,i,o),p.state.next({errors:n.errors})},N=i=>{n.errors=i,p.state.next({errors:n.errors,isValid:!1})},V=(i,o,d,h)=>{const m=y(r,i);if(m){const k=y(s,i,U(d)?y(a,i):d);U(k)||h&&h.defaultChecked||o?K(s,i,o?k:yn(m._f)):M(i,k),l.mount&&v()}},J=(i,o,d,h,m)=>{let k=!1,A=!1;const B={name:i};if(!t.disabled){const W=!!(y(r,i)&&y(r,i)._f&&y(r,i)._f.disabled);if(!d||h){f.isDirty&&(A=n.isDirty,n.isDirty=B.isDirty=E(),k=A!==B.isDirty);const Z=W||be(y(a,i),o);A=!!(!W&&y(n.dirtyFields,i)),Z||W?z(n.dirtyFields,i):K(n.dirtyFields,i,!0),B.dirtyFields=n.dirtyFields,k=k||f.dirtyFields&&A!==!Z}if(d){const Z=y(n.touchedFields,i);Z||(K(n.touchedFields,i,d),B.touchedFields=n.touchedFields,k=k||f.touchedFields&&Z!==d)}k&&m&&p.state.next(B)}return k?B:{}},C=(i,o,d,h)=>{const m=y(n.errors,i),k=f.isValid&&oe(o)&&n.isValid!==o;if(t.delayError&&d?(g=x(()=>j(i,d)),g(t.delayError)):(clearTimeout(q),g=null,d?K(n.errors,i,d):z(n.errors,i)),(d?!be(m,d):m)||!se(h)||k){const A={...h,...k&&oe(o)?{isValid:o}:{},errors:n.errors,name:i};n={...n,...A},p.state.next(A)}},D=async i=>{_(i,!0);const o=await t.resolver(s,t.context,Nt(i||u.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return _(i),o},I=async i=>{const{errors:o}=await D(i);if(i)for(const d of i){const h=y(o,d);h?K(n.errors,d,h):z(n.errors,d)}else n.errors=o;return o},P=async(i,o,d={valid:!0})=>{for(const h in i){const m=i[h];if(m){const{_f:k,...A}=m;if(k){const B=u.array.has(k.name),W=m._f&&Vt(m._f);W&&f.validatingFields&&_([h],!0);const Z=await Cn(m,u.disabled,s,S,t.shouldUseNativeValidation&&!o,B);if(W&&f.validatingFields&&_([h]),Z[k.name]&&(d.valid=!1,o))break;!o&&(y(Z,k.name)?B?Ot(n.errors,Z,k.name):K(n.errors,k.name,Z[k.name]):z(n.errors,k.name))}!se(A)&&await P(A,o,d)}}return d.valid},G=()=>{for(const i of u.unMount){const o=y(r,i);o&&(o._f.refs?o._f.refs.every(d=>!mn(d)):!mn(o._f.ref))&&Be(i)}u.unMount=new Set},E=(i,o)=>!t.disabled&&(i&&o&&K(s,i,o),!be(Q(),a)),w=(i,o,d)=>Hr(i,u,{...l.mount?s:U(o)?a:fe(i)?{[i]:o}:o},d,o),F=i=>ln(y(l.mount?s:a,i,t.shouldUnregister?y(a,i,[]):[])),M=(i,o,d={})=>{const h=y(r,i);let m=o;if(h){const k=h._f;k&&(!k.disabled&&K(s,i,Jr(o,k)),m=rn(k.ref)&&X(o)?"":o,zr(k.ref)?[...k.ref.options].forEach(A=>A.selected=m.includes(A.value)):k.refs?He(k.ref)?k.refs.length>1?k.refs.forEach(A=>(!A.defaultChecked||!A.disabled)&&(A.checked=Array.isArray(m)?!!m.find(B=>B===A.value):m===A.value)):k.refs[0]&&(k.refs[0].checked=!!m):k.refs.forEach(A=>A.checked=A.value===m):Rn(k.ref)?k.ref.value="":(k.ref.value=m,k.ref.type||p.values.next({name:i,values:{...s}})))}(d.shouldDirty||d.shouldTouch)&&J(i,m,d.shouldTouch,d.shouldDirty,!0),d.shouldValidate&&ge(i)},L=(i,o,d)=>{for(const h in o){const m=o[h],k=`${i}.${h}`,A=y(r,k);(u.array.has(i)||$(m)||A&&!A._f)&&!_e(m)?L(k,m,d):M(k,m,d)}},Y=(i,o,d={})=>{const h=y(r,i),m=u.array.has(i),k=ae(o);K(s,i,k),m?(p.array.next({name:i,values:{...s}}),(f.isDirty||f.dirtyFields)&&d.shouldDirty&&p.state.next({name:i,dirtyFields:Me(a,s),isDirty:E(i,k)})):h&&!h._f&&!X(k)?L(i,k,d):M(i,k,d),Mn(i,u)&&p.state.next({...n}),p.values.next({name:l.mount?i:void 0,values:{...s}})},te=async i=>{l.mount=!0;const o=i.target;let d=o.name,h=!0;const m=y(r,d),k=()=>o.type?yn(m._f):Mr(i),A=B=>{h=Number.isNaN(B)||_e(B)&&isNaN(B.getTime())||be(B,y(s,d,B))};if(m){let B,W;const Z=k(),ce=i.type===nn.BLUR||i.type===nn.FOCUS_OUT,ut=!Ft(m._f)&&!t.resolver&&!y(n.errors,d)&&!m._f.deps||Pt(ce,y(n.touchedFields,d),n.isSubmitted,T,R),dn=Mn(d,u,ce);K(s,d,Z),ce?(m._f.onBlur&&m._f.onBlur(i),g&&g(0)):m._f.onChange&&m._f.onChange(i);const gn=J(d,Z,ce,!1),dt=!se(gn)||dn;if(!ce&&p.values.next({name:d,type:i.type,values:{...s}}),ut)return f.isValid&&(t.mode==="onBlur"&&ce?v():ce||v()),dt&&p.state.next({name:d,...dn?{}:gn});if(!ce&&dn&&p.state.next({...n}),t.resolver){const{errors:Vn}=await D([d]);if(A(Z),h){const gt=Hn(n.errors,r,d),Fn=Hn(Vn,r,gt.name||d);B=Fn.error,d=Fn.name,W=se(Vn)}}else _([d],!0),B=(await Cn(m,u.disabled,s,S,t.shouldUseNativeValidation))[d],_([d]),A(Z),h&&(B?W=!1:f.isValid&&(W=await P(r,!0)));h&&(m._f.deps&&ge(m._f.deps),C(d,W,B,gn))}},le=(i,o)=>{if(y(n.errors,o)&&i.focus)return i.focus(),1},ge=async(i,o={})=>{let d,h;const m=Ke(i);if(t.resolver){const k=await I(U(i)?i:m);d=se(k),h=i?!m.some(A=>y(k,A)):d}else i?(h=(await Promise.all(m.map(async k=>{const A=y(r,k);return await P(A&&A._f?{[k]:A}:A)}))).every(Boolean),!(!h&&!n.isValid)&&v()):h=d=await P(r);return p.state.next({...!fe(i)||f.isValid&&d!==n.isValid?{}:{name:i},...t.resolver||!i?{isValid:d}:{},errors:n.errors}),o.shouldFocus&&!h&&Ce(r,le,i?m:u.mount),h},Q=i=>{const o={...l.mount?s:a};return U(i)?o:fe(i)?y(o,i):i.map(d=>y(o,d))},Ee=(i,o)=>({invalid:!!y((o||n).errors,i),isDirty:!!y((o||n).dirtyFields,i),error:y((o||n).errors,i),isValidating:!!y(n.validatingFields,i),isTouched:!!y((o||n).touchedFields,i)}),Ae=i=>{i&&Ke(i).forEach(o=>z(n.errors,o)),p.state.next({errors:i?n.errors:{}})},$e=(i,o,d)=>{const h=(y(r,i,{_f:{}})._f||{}).ref,m=y(n.errors,i)||{},{ref:k,message:A,type:B,...W}=m;K(n.errors,i,{...W,...o,ref:h}),p.state.next({name:i,errors:n.errors,isValid:!1}),d&&d.shouldFocus&&h&&h.focus&&h.focus()},un=(i,o)=>ke(i)?p.values.subscribe({next:d=>i(w(void 0,o),d)}):w(i,o,!0),Be=(i,o={})=>{for(const d of i?Ke(i):u.mount)u.mount.delete(d),u.array.delete(d),o.keepValue||(z(r,d),z(s,d)),!o.keepError&&z(n.errors,d),!o.keepDirty&&z(n.dirtyFields,d),!o.keepTouched&&z(n.touchedFields,d),!o.keepIsValidating&&z(n.validatingFields,d),!t.shouldUnregister&&!o.keepDefaultValue&&z(a,d);p.values.next({values:{...s}}),p.state.next({...n,...o.keepDirty?{isDirty:E()}:{}}),!o.keepIsValid&&v()},Ye=({disabled:i,name:o,field:d,fields:h})=>{(oe(i)&&l.mount||i||u.disabled.has(o))&&(i?u.disabled.add(o):u.disabled.delete(o),J(o,yn(d?d._f:y(h,o)._f),!1,!1,!0))},Ne=(i,o={})=>{let d=y(r,i);const h=oe(o.disabled)||oe(t.disabled);return K(r,i,{...d||{},_f:{...d&&d._f?d._f:{ref:{name:i}},name:i,mount:!0,...o}}),u.mount.add(i),d?Ye({field:d,disabled:oe(o.disabled)?o.disabled:t.disabled,name:i}):V(i,!0,o.value),{...h?{disabled:o.disabled||t.disabled}:{},...t.progressive?{required:!!o.required,min:Ie(o.min),max:Ie(o.max),minLength:Ie(o.minLength),maxLength:Ie(o.maxLength),pattern:Ie(o.pattern)}:{},name:i,onChange:te,onBlur:te,ref:m=>{if(m){Ne(i,o),d=y(r,i);const k=U(m.value)&&m.querySelectorAll&&m.querySelectorAll("input,select,textarea")[0]||m,A=Bt(k),B=d._f.refs||[];if(A?B.find(W=>W===k):k===d._f.ref)return;K(r,i,{_f:{...d._f,...A?{refs:[...B.filter(mn),k,...Array.isArray(y(a,i))?[{}]:[]],ref:{type:k.type,name:i}}:{ref:k}}}),V(i,!1,void 0,k)}else d=y(r,i,{}),d._f&&(d._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(Ir(u.array,i)&&l.action)&&u.unMount.add(i)}}},Ve=()=>t.shouldFocusError&&Ce(r,le,u.mount),ze=i=>{oe(i)&&(p.state.next({disabled:i}),Ce(r,(o,d)=>{const h=y(r,d);h&&(o.disabled=h._f.disabled||i,Array.isArray(h._f.refs)&&h._f.refs.forEach(m=>{m.disabled=h._f.disabled||i}))},0,!1))},we=(i,o)=>async d=>{let h;d&&(d.preventDefault&&d.preventDefault(),d.persist&&d.persist());let m=ae(s);if(u.disabled.size)for(const k of u.disabled)K(m,k,void 0);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:k,values:A}=await D();n.errors=k,m=A}else await P(r);if(z(n.errors,"root"),se(n.errors)){p.state.next({errors:{}});try{await i(m,d)}catch(k){h=k}}else o&&await o({...n.errors},d),Ve(),setTimeout(Ve);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:se(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},Fe=(i,o={})=>{y(r,i)&&(U(o.defaultValue)?Y(i,ae(y(a,i))):(Y(i,o.defaultValue),K(a,i,ae(o.defaultValue))),o.keepTouched||z(n.touchedFields,i),o.keepDirty||(z(n.dirtyFields,i),n.isDirty=o.defaultValue?E(i,ae(y(a,i))):E()),o.keepError||(z(n.errors,i),f.isValid&&v()),p.state.next({...n}))},Te=(i,o={})=>{const d=i?ae(i):a,h=ae(d),m=se(i),k=m?a:h;if(o.keepDefaultValues||(a=d),!o.keepValues){if(o.keepDirtyValues){const A=new Set([...u.mount,...Object.keys(Me(a,s))]);for(const B of Array.from(A))y(n.dirtyFields,B)?K(k,B,y(s,B)):Y(B,y(k,B))}else{if(An&&U(i))for(const A of u.mount){const B=y(r,A);if(B&&B._f){const W=Array.isArray(B._f.refs)?B._f.refs[0]:B._f.ref;if(rn(W)){const Z=W.closest("form");if(Z){Z.reset();break}}}}r={}}s=t.shouldUnregister?o.keepDefaultValues?ae(a):{}:ae(k),p.array.next({values:{...k}}),p.values.next({values:{...k}})}u={mount:o.keepDirtyValues?u.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!f.isValid||!!o.keepIsValid||!!o.keepDirtyValues,l.watch=!!t.shouldUnregister,p.state.next({submitCount:o.keepSubmitCount?n.submitCount:0,isDirty:m?!1:o.keepDirty?n.isDirty:!!(o.keepDefaultValues&&!be(i,a)),isSubmitted:o.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:m?{}:o.keepDirtyValues?o.keepDefaultValues&&s?Me(a,s):n.dirtyFields:o.keepDefaultValues&&i?Me(a,i):o.keepDirty?n.dirtyFields:{},touchedFields:o.keepTouched?n.touchedFields:{},errors:o.keepErrors?n.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(i,o)=>Te(ke(i)?i(s):i,o);return{control:{register:Ne,unregister:Be,getFieldState:Ee,handleSubmit:we,setError:$e,_executeSchema:D,_getWatch:w,_getDirty:E,_updateValid:v,_removeUnmounted:G,_updateFieldArray:c,_updateDisabledField:Ye,_getFieldArray:F,_reset:Te,_resetDefaultValues:()=>ke(t.defaultValues)&&t.defaultValues().then(i=>{qe(i,t.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:i=>{n={...n,...i}},_disableForm:ze,_subjects:p,_proxyFormState:f,_setErrors:N,get _fields(){return r},get _formValues(){return s},get _state(){return l},set _state(i){l=i},get _defaultValues(){return a},get _names(){return u},set _names(i){u=i},get _formState(){return n},set _formState(i){n=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:ge,register:Ne,handleSubmit:we,watch:un,setValue:Y,getValues:Q,reset:qe,resetField:Fe,clearErrors:Ae,unregister:Be,setError:$e,setFocus:(i,o={})=>{const d=y(r,i),h=d&&d._f;if(h){const m=h.refs?h.refs[0]:h.ref;m.focus&&(m.focus(),o.shouldSelect&&ke(m.select)&&m.select())}},getFieldState:Ee}}function Dt(e={}){const t=b.useRef(void 0),n=b.useRef(void 0),[r,a]=b.useState({isDirty:!1,isValidating:!1,isLoading:ke(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ke(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Lt(e),formState:r});const s=t.current.control;return s._options=e,Tn({subject:s._subjects.state,next:l=>{Cr(l,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),b.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),b.useEffect(()=>{if(s._proxyFormState.isDirty){const l=s._getDirty();l!==r.isDirty&&s._subjects.state.next({isDirty:l})}},[s,r.isDirty]),b.useEffect(()=>{e.values&&!be(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(l=>({...l}))):s._resetDefaultValues()},[e.values,s]),b.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),b.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),b.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Kr(r,s),t.current}function Qr(e,t=166,n=!1){let r;function a(...s){const l=()=>{r=void 0,e.apply(this,s)};!r&&n&&l(),clearTimeout(r),r=setTimeout(l,t)}return a.clear=()=>{clearTimeout(r)},a}const Un=globalThis!=null&&globalThis.document?O.useLayoutEffect:()=>{};var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ct=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Kt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Gt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Gt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const $t=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ut(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Yt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Xr=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Yt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Wt=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=zt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Jt=O.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Zt(e,["title","titleId"]);let s=Se();return s=n?r||"title-"+s:void 0,O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?O.createElement("title",{id:s},n):null,O.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Xt={error:Jt,warning:Ht,info:$t,success:ft},ea=O.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:l=!1,contentMaxWidth:u=!0,inline:g=!1,closeButton:q=!1,onClose:f}=e,p=Qt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const R=qn("Alert"),T=Xt[a];return b.createElement("div",Object.assign({},p,{ref:t,className:ne(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":l,"navds-alert--inline":g,"navds-alert--close-button":q})}),b.createElement(T,{title:R(a),className:"navds-alert__icon"}),b.createElement(Or,{as:"div",size:s,className:ne("navds-alert__wrapper",u&&"navds-alert__wrapper--maxwidth")},n),q&&!g&&b.createElement("div",{className:"navds-alert__button-wrapper"},b.createElement(Sr,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:f,type:"button",icon:b.createElement(kt,{title:["error","warning"].includes(a)?R("closeAlert"):R("closeMessage")})})))}),na=()=>b.createElement(Xr,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),ra=()=>b.createElement(Xr,{title:qn("global")("readOnly"),className:"navds-form-field__readonly-icon"}),ta=O.createContext(null),et=(e,t)=>{var n,r,a;const{size:s,error:l,errorId:u}=e,g=O.useContext(ta),q=xr(),f=(n=e.id)!==null&&n!==void 0?n:`${t}-${q}`,p=u??`${t}-error-${q}`,R=`${t}-description-${q}`,T=(g==null?void 0:g.disabled)||e.disabled,S=((g==null?void 0:g.readOnly)||e.readOnly)&&!T||void 0,x=!T&&!S&&!!(l||g!=null&&g.error),v=!T&&!S&&!!l&&typeof l!="boolean",_=Object.assign({},x?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:v,hasError:x,errorId:p,inputDescriptionId:R,size:(r=s??(g==null?void 0:g.size))!==null&&r!==void 0?r:"medium",readOnly:S,inputProps:Object.assign(Object.assign({id:f},_),{"aria-describedby":ne(e["aria-describedby"],{[R]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:v,[(a=g==null?void 0:g.errorId)!==null&&a!==void 0?a:""]:x&&!!(g!=null&&g.error)})||void 0,disabled:T})}};var aa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const sa=O.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:l,inputDescriptionId:u,readOnly:g}=et(e,"select"),{children:q,label:f,className:p,description:R,htmlSize:T,hideLabel:S=!1,style:x}=e,v=aa(e,["children","label","className","description","htmlSize","hideLabel","style"]),_={onMouseDown:c=>{g&&(c.preventDefault(),c.target.focus())},onKeyDown:c=>{g&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(c.key)&&c.preventDefault()}};return b.createElement("div",{className:ne(p,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":g,"navds-select--error":s,"navds-select--readonly":g})},b.createElement(_n,{htmlFor:n.id,size:l,className:ne("navds-form-field__label",{"navds-sr-only":S})},g&&b.createElement(ra,null),f),!!R&&b.createElement(Ge,{className:ne("navds-form-field__description",{"navds-sr-only":S}),id:u,size:l,as:"div"},R),b.createElement("div",{className:"navds-select__container",style:x},b.createElement("select",Object.assign({},Br(v,["error","errorId","size","readOnly"]),n,_,{ref:t,className:ne("navds-select__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:T}),q),b.createElement(Ct,{className:"navds-select__chevron","aria-hidden":!0})),b.createElement("div",{className:"navds-form-field__error",id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&b.createElement(Nr,{size:l,showIcon:!0},e.error)))});var ia=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const la=O.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:l=!1}=e,u=ia(e,["as","className","underline","variant","inlineText"]);return b.createElement(n,Object.assign({},u,{ref:t,className:ne("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":l})}))});var oa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ua=O.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:l}=e,u=oa(e,["children","className","variant","size","icon"]);const g=(a==null?void 0:a.endsWith("-filled"))&&"strong",q=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",f=a==null?void 0:a.replace("-filled","").replace("-moderate","");return b.createElement(Ge,Object.assign({},u,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:ne("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${g||q||"outline"}`,`navds-tag--${f}`)}),l&&b.createElement("span",{className:"navds-tag__icon--left"},l),n)});var da=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const $n=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Yn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Je(e){return parseInt(e,10)||0}const ga=O.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:l,minRows:u=1,autoScrollbar:g,style:q,value:f}=e,p=da(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:R}=O.useRef(f!=null),T=O.useRef(null),S=mt(T,t),x=O.useRef(null),v=O.useRef(0),[_,c]=O.useState({outerHeightStyle:0}),j=b.useCallback(()=>{const C=T.current,I=Yn(C).getComputedStyle(C);if(I.width==="0px")return{outerHeightStyle:0};const P=x.current;P.style.width=I.width,P.value=C.value||p.placeholder||"x",P.value.slice(-1)===`
`&&(P.value+=" ");const G=I.boxSizing,E=Je(I.paddingBottom)+Je(I.paddingTop),w=Je(I.borderBottomWidth)+Je(I.borderTopWidth),F=P.scrollHeight-E;P.value="x";const M=P.scrollHeight-E;let L=F;u&&(L=Math.max(Number(u)*M,L)),l&&(L=Math.min(Number(l)*M,L)),L=Math.max(L,M);const Y=L+(G==="border-box"?E+w:0),te=Math.abs(L-F)<=1;return{outerHeightStyle:Y,overflow:te}},[l,u,p.placeholder]),N=()=>{const C=j();zn(C)||c(D=>$n(D,C,v))};Un(()=>{const C=()=>{const E=j();zn(E)||qt.flushSync(()=>{c(w=>$n(w,E,v))})},D=Qr(()=>{var E,w,F;if(v.current=0,!((E=T.current)===null||E===void 0)&&E.style.height||!((w=T.current)===null||w===void 0)&&w.style.width){((F=T.current)===null||F===void 0?void 0:F.style.overflow)==="hidden"&&c(M=>Object.assign(Object.assign({},M),{overflow:!1}));return}C()},166,!0),I=T.current,P=Yn(I);P.addEventListener("resize",D);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(D),G.observe(I)),()=>{D.clear(),P.removeEventListener("resize",D),G&&G.disconnect()}},[j]),Un(()=>{N()}),O.useEffect(()=>{v.current=0},[f]);const V=C=>{v.current=0,R||N(),s&&s(C)},J=Object.assign({"--__ac-textarea-height":_.outerHeightStyle+"px","--__axc-textarea-height":_.outerHeightStyle+"px",overflow:_.overflow&&!g&&!(!((n=T.current)===null||n===void 0)&&n.style.height)&&!(!((r=T.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},q);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:f,onChange:V,ref:S,rows:u,style:J},p,{className:a})),b.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:x,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},q)}))});function zn(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const ka=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const s=qn("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),l=t-n,[u,g]=O.useState(l);return O.useEffect(()=>{const q=Qr(()=>{g(l)},2e3);return q(),()=>{q.clear()}},[l]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:t})),l<20&&b.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Wn(u,s)),b.createElement(Ge,{className:ne("navds-textarea__counter",{"navds-textarea__counter--error":l<0}),size:r},Wn(l,s)))},Wn=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var fa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ma=O.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:l,showErrorMsg:u,hasError:g,size:q,inputDescriptionId:f}=et(e,"textarea"),{label:p,className:R,description:T,maxLength:S,hideLabel:x=!1,resize:v,UNSAFE_autoScrollbar:_,i18n:c,readOnly:j}=e,N=fa(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),V=xr(),J=S!==void 0&&S>0,[C,D]=O.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),I=()=>{let G=N!=null&&N.minRows?N==null?void 0:N.minRows:3;return q==="small"&&(G=N!=null&&N.minRows?N==null?void 0:N.minRows:2),G},P=ne(s["aria-describedby"],{[V??""]:J});return b.createElement("div",{className:ne(R,"navds-form-field",`navds-form-field--${q}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":j,"navds-textarea--readonly":j,"navds-textarea--error":g,"navds-textarea--autoscrollbar":_,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},b.createElement(_n,{htmlFor:s.id,size:q,className:ne("navds-form-field__label",{"navds-sr-only":x})},j&&b.createElement(na,null),p),!!T&&b.createElement(Ge,{className:ne("navds-form-field__description",{"navds-sr-only":x}),id:f,size:q,as:"div"},T),b.createElement(ga,Object.assign({},Br(N,["error","errorId","size"]),s,{onChange:yt(e.onChange,e.value===void 0?G=>D(G.target.value):void 0),minRows:I(),autoScrollbar:_,ref:t,readOnly:j,className:ne("navds-textarea__input","navds-body-short",`navds-body-short--${q??"medium"}`)},P?{"aria-describedby":P}:{})),J&&!j&&!s.disabled&&b.createElement(ka,{maxLengthId:V,maxLength:S,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:C.length,size:q,i18n:c}),b.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},u&&b.createElement(Nr,{size:q,showIcon:!0},e.error)))});function ya(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zn={exports:{}},Le={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn;function va(){if(Jn)return Le;Jn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var u in a)u!=="key"&&(s[u]=a[u])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:l,ref:a!==void 0?a:null,props:s}}return Le.Fragment=t,Le.jsx=n,Le.jsxs=n,Le}var Qn;function ca(){return Qn||(Qn=1,Zn.exports=va()),Zn.exports}var ee=ca();const ba=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ee.jsx(ea,{variant:"warning",size:"small",children:ee.jsx(Vr,{gap:"2",children:b.Children.map(e,t=>ee.jsx(Ge,{size:"small",children:t},vt(t)?t.key:t))})}),xe={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ve(xe);var Xn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var er;function pa(){return er||(er=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",l=0;l<arguments.length;l++){var u=arguments[l];u&&(s=a(s,r.call(this,u)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var u in s)t.call(s,u)&&s[u]&&(l=a(l,this&&this[u]||u));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Xn)),Xn.exports}var ha=pa();const ue=ya(ha),ja="_borderbox_hicl4_1",qa="_error_hicl4_4",_a="_warning_hicl4_7",Ea={borderbox:ja,error:qa,warning:_a};ue.bind(Ea);const Aa="_aksjonspunkt_kn1hn_1",wa="_erAksjonspunktApent_kn1hn_4",Ta="_erIkkeGodkjentAvBeslutter_kn1hn_8",Ra={aksjonspunkt:Aa,erAksjonspunktApent:wa,erIkkeGodkjentAvBeslutter:Ta};ue.bind(Ra);ve(xe);ve(xe);const Oa="_flexColumnNew_1vdv1_1",Sa={flexColumnNew:Oa};ue.bind(Sa);const xa="_flexRow_1yf0y_1",Ba="_spaceBetween_1yf0y_9",Na="_alignItemsToBaseline_1yf0y_12",Va="_alignItemsToFlexEnd_1yf0y_15",Fa="_justifyItemsToFlexEnd_1yf0y_18",Pa="_wrap_1yf0y_21",Ma={flexRow:xa,spaceBetween:Ba,alignItemsToBaseline:Na,alignItemsToFlexEnd:Va,justifyItemsToFlexEnd:Fa,wrap:Pa};ue.bind(Ma);const Ia="_flexContainer_1dk1o_1",La="_fluid_1dk1o_6",Da="_fullHeight_1dk1o_9",Ka="_flexWrap_1dk1o_17",Ca={flexContainer:Ia,fluid:La,fullHeight:Da,flexWrap:Ka};ue.bind(Ca);ve(xe);const Ga="_columnStyle_1f13u_1",nt={columnStyle:Ga},Ha=ue.bind(nt),vn=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:ee.jsx("td",{className:Ha(nt.columnStyle,t),colSpan:r?100:void 0,children:e}),Ua="_row_1lxv9_1",$a="_harHover_1lxv9_4",Ya="_rowHeader_1lxv9_7",za="_grayHeader_1lxv9_12",Wa="_rowContent_1lxv9_15",Za="_selected_1lxv9_18",Ja="_bold_1lxv9_22",Qa="_dashedBottomBorder_1lxv9_25",Xa="_solidBottomBorder_1lxv9_28",es="_apLeftBorder_1lxv9_31",ns="_noBottomBorder_1lxv9_34",rt={row:Ua,harHover:$a,rowHeader:Ya,grayHeader:za,rowContent:Wa,selected:Za,bold:Ja,dashedBottomBorder:Qa,solidBottomBorder:Xa,apLeftBorder:es,noBottomBorder:ns},rs=ue.bind(rt),ts=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},tt=e=>e.tagName==="TR"?e:tt(e.parentElement),nr=(e,t)=>{const n=tt(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},as=(e,t,n,r)=>a=>{a.key==="ArrowDown"?nr(a,!0):a.key==="ArrowUp"?nr(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},ss=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},is=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:l,noHover:u=!1,isSelected:g=!1,isBold:q=!1,isDashedBottomBorder:f=!1,isSolidBottomBorder:p=!1,isApLeftBorder:R=!1,className:T,useMultiselect:S=!1,hasNoBottomBorder:x=!1})=>ee.jsx("tr",{className:rs(T,rt.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!u,selected:g,harHover:!u,bold:q,dashedBottomBorder:f,solidBottomBorder:p,noBottomBorder:x,apLeftBorder:R}),onMouseDown:ts(a,e,t),onKeyDown:as(S,s,e,t),onKeyUp:S?ss(s):void 0,tabIndex:0,children:l}),ls="_table_2cnpl_1",os="_rowHover_2cnpl_25",us={table:ls,rowHover:os},ds=ue.bind(us),gs="EMPTY",ks=b.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},l)=>ee.jsxs("table",{ref:l,className:ds("table",{[n]:n,rowHover:!r}),children:[ee.jsx("thead",{children:ee.jsxs(is,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(u=>typeof u=="string"&&u.startsWith(gs)?ee.jsx(vn,{children:" "},u):ee.jsx(vn,{children:ee.jsx(en,{id:u})},u)),t.map(u=>ee.jsx(vn,{children:u},u.key))]})}),ee.jsx("tbody",{children:Array.isArray(s)?b.Children.map(s,u=>b.cloneElement(u,{noHover:r})):b.cloneElement(s,{noHover:r})})]}));ks.displayName="Table";const fs="_hidden_1pb4f_1",ms="_active_1pb4f_8",ys="_activeRow_1pb4f_15 _active_1pb4f_8",vs="_toggleIcon_1pb4f_19",cs="_colTopPadding_1pb4f_22",bs={hidden:fs,active:ms,activeRow:ys,toggleIcon:vs,colTopPadding:cs};ue.bind(bs);ve(xe);const ps="_fourPx_qda5k_1",hs="_eightPx_qda5k_4",js="_sixteenPx_qda5k_7",qs="_twentyPx_qda5k_10",_s="_thirtyTwoPx_qda5k_13",Es="_fourtyPx_qda5k_16",As={fourPx:ps,eightPx:hs,sixteenPx:js,twentyPx:qs,thirtyTwoPx:_s,fourtyPx:Es};ue.bind(As);ve(xe);const ws="_divider_1t980_1",Ts="_dividerParagraf_1t980_8",Rs="_leftPanel_1t980_11",Os="_rightPanel_1t980_14",Ss={divider:ws,dividerParagraf:Ts,leftPanel:Rs,rightPanel:Os};ue.bind(Ss);const xs="_editedIcon_ulrjl_1",Bs={editedIcon:xs},Ns=ue.bind(Bs),Vs=({className:e=""})=>ee.jsx("span",{"data-testid":"editedIcon",className:Ns("editedIcon",e),children:ee.jsx(Wt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function Fs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rr={exports:{}},De={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr;function Ps(){if(tr)return De;tr=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var u in a)u!=="key"&&(s[u]=a[u])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:l,ref:a!==void 0?a:null,props:s}}return De.Fragment=t,De.jsx=n,De.jsxs=n,De}var ar;function Ms(){return ar||(ar=1,rr.exports=Ps()),rr.exports}var re=Ms();const at=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),st=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var pn={exports:{}},Is=pn.exports,sr;function Ls(){return sr||(sr=1,function(e,t){(function(n,r){e.exports=r()})(Is,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,l=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,g={},q=function(v){return(v=+v)+(v>68?1900:2e3)},f=function(v){return function(_){this[v]=+_}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(_){if(!_||_==="Z")return 0;var c=_.match(/([+-]|\d\d)/g),j=60*c[1]+(+c[2]||0);return j===0?0:c[0]==="+"?-j:j}(v)}],R=function(v){var _=g[v];return _&&(_.indexOf?_:_.s.concat(_.f))},T=function(v,_){var c,j=g.meridiem;if(j){for(var N=1;N<=24;N+=1)if(v.indexOf(j(N,0,_))>-1){c=N>12;break}}else c=v===(_?"pm":"PM");return c},S={A:[u,function(v){this.afternoon=T(v,!1)}],a:[u,function(v){this.afternoon=T(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[s,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[l,f("seconds")],ss:[l,f("seconds")],m:[l,f("minutes")],mm:[l,f("minutes")],H:[l,f("hours")],h:[l,f("hours")],HH:[l,f("hours")],hh:[l,f("hours")],D:[l,f("day")],DD:[s,f("day")],Do:[u,function(v){var _=g.ordinal,c=v.match(/\d+/);if(this.day=c[0],_)for(var j=1;j<=31;j+=1)_(j).replace(/\[|\]/g,"")===v&&(this.day=j)}],w:[l,f("week")],ww:[s,f("week")],M:[l,f("month")],MM:[s,f("month")],MMM:[u,function(v){var _=R("months"),c=(R("monthsShort")||_.map(function(j){return j.slice(0,3)})).indexOf(v)+1;if(c<1)throw new Error;this.month=c%12||c}],MMMM:[u,function(v){var _=R("months").indexOf(v)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(v){this.year=q(v)}],YYYY:[/\d{4}/,f("year")],Z:p,ZZ:p};function x(v){var _,c;_=v,c=g&&g.formats;for(var j=(v=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,G,E){var w=E&&E.toUpperCase();return G||c[E]||n[E]||c[w].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,M,L){return M||L.slice(1)})})).match(r),N=j.length,V=0;V<N;V+=1){var J=j[V],C=S[J],D=C&&C[0],I=C&&C[1];j[V]=I?{regex:D,parser:I}:J.replace(/^\[|\]$/g,"")}return function(P){for(var G={},E=0,w=0;E<N;E+=1){var F=j[E];if(typeof F=="string")w+=F.length;else{var M=F.regex,L=F.parser,Y=P.slice(w),te=M.exec(Y)[0];L.call(G,te),P=P.replace(te,"")}}return function(le){var ge=le.afternoon;if(ge!==void 0){var Q=le.hours;ge?Q<12&&(le.hours+=12):Q===12&&(le.hours=0),delete le.afternoon}}(G),G}}return function(v,_,c){c.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(q=v.parseTwoDigitYear);var j=_.prototype,N=j.parse;j.parse=function(V){var J=V.date,C=V.utc,D=V.args;this.$u=C;var I=D[1];if(typeof I=="string"){var P=D[2]===!0,G=D[3]===!0,E=P||G,w=D[2];G&&(w=D[2]),g=this.$locale(),!P&&w&&(g=c.Ls[w]),this.$d=function(Y,te,le,ge){try{if(["x","X"].indexOf(te)>-1)return new Date((te==="X"?1e3:1)*Y);var Q=x(te)(Y),Ee=Q.year,Ae=Q.month,$e=Q.day,un=Q.hours,Be=Q.minutes,Ye=Q.seconds,Ne=Q.milliseconds,Ve=Q.zone,ze=Q.week,we=new Date,Fe=$e||(Ee||Ae?1:we.getDate()),Te=Ee||we.getFullYear(),qe=0;Ee&&!Ae||(qe=Ae>0?Ae-1:we.getMonth());var Pe,We=un||0,Ze=Be||0,i=Ye||0,o=Ne||0;return Ve?new Date(Date.UTC(Te,qe,Fe,We,Ze,i,o+60*Ve.offset*1e3)):le?new Date(Date.UTC(Te,qe,Fe,We,Ze,i,o)):(Pe=new Date(Te,qe,Fe,We,Ze,i,o),ze&&(Pe=ge(Pe).week(ze).toDate()),Pe)}catch{return new Date("")}}(J,I,C,c),this.init(),w&&w!==!0&&(this.$L=this.locale(w).$L),E&&J!=this.format(I)&&(this.$d=new Date("")),g={}}else if(I instanceof Array)for(var F=I.length,M=1;M<=F;M+=1){D[1]=I[M-1];var L=c.apply(this,D);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}M===F&&(this.$d=new Date(""))}else N.call(this,V)}}})}(pn)),pn.exports}var Ds=Ls();const Ks=Fs(Ds),Cs="_readOnlyContainer_v0eco_1",Gs="_readOnlyContent_v0eco_4",Hs="_readOnlyContentCenter_v0eco_7",Us="_textarea_v0eco_11",$s="_space_v0eco_15",Qe={readOnlyContainer:Cs,readOnlyContent:Gs,readOnlyContentCenter:Hs,textarea:Us,space:$s},Ys=e=>e!=null&&e!=="",it=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>Ys(t)?re.jsxs("div",{className:Qe.readOnlyContainer,children:[e&&!a&&re.jsx(_n,{size:"small",children:e}),re.jsx("div",{className:r==="textarea"?Qe.textarea:"",children:re.jsxs(Or,{className:Qe.readOnlyContent,size:s,children:[t,n&&re.jsx(Vs,{className:Qe.space})]})})]}):null;En.extend(Ks);const ir=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:l=!1,onChange:u,disabled:g,className:q,hideLabel:f,isEdited:p,size:R})=>{const{formState:{errors:T}}=Ue(),{field:S}=Ur({name:e,rules:{validate:O.useMemo(()=>at(r),[r])}});if(a){const _=n.map(j=>j.props).find(j=>j.value===S.value),c=_?_.children:void 0;return re.jsx(it,{value:c,label:t,hideLabel:f,isEdited:p,size:R})}const x=S.value||"",v=!n.map(_=>_.props.value).includes(x)&&x!=="";return v&&console.warn(`No corresponding option found for value '${x}'`),re.jsxs(sa,{size:"small",className:q,error:st(T,e),label:t,description:s,value:l&&g||v?"":S.value,disabled:g,onChange:_=>{u&&u(_),S.onChange(_)},hideLabel:f,children:[re.jsx("option",{style:{display:"none"}}),",",n]})},zs="_textAreaFieldWithBadges_bdz0b_1",Ws="_etikettWrapper_bdz0b_4",lr={textAreaFieldWithBadges:zs,etikettWrapper:Ws},Zs=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:l=p=>p,className:u,description:g,isEdited:q,...f})=>{const{formState:{errors:p}}=Ue(),{field:R}=Ur({name:e,rules:{validate:O.useMemo(()=>at(s),[s])}});return n?re.jsx(it,{label:t,value:R.value,type:"textarea",isEdited:q,hideLabel:f.hideLabel}):re.jsxs("div",{className:a?lr.textAreaFieldWithBadges:null,children:[a&&re.jsx("div",{className:lr.etikettWrapper,children:a.map(({type:T,titleText:S})=>re.jsx(ua,{variant:T,size:"small",children:S},S))}),re.jsx(ma,{size:"small",label:t,description:g,className:u,autoComplete:"off",...R,onChange:T=>R.onChange(T.currentTarget.value!==""?l(T.currentTarget.value):null),value:R.value?R.value:"",error:st(p,e),maxLength:r,...f})]})},Js=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:l}=e;return O.useEffect(()=>()=>{a&&a(l())},[]),re.jsx(At,{...e,children:re.jsx("form",{className:r,onSubmit:t?s(u=>t(u)):void 0,children:n})})};function lt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hn={exports:{}},Qs=hn.exports,or;function Xs(){return or||(or=1,function(e,t){(function(n,r){e.exports=r()})(Qs,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(hn)),hn.exports}var ei=Xs();const ni=lt(ei);var jn={exports:{}},ri=jn.exports,ur;function ti(){return ur||(ur=1,function(e,t){(function(n,r){e.exports=r()})(ri,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(jn)),jn.exports}var ai=ti();const si=lt(ai),ii="Dato må være før eller lik {limit}",li="Dato må være etter eller lik {limit}",oi="Perioder kan ikke overlappe i tid",ui="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",di="Dato må være lik {value}",gi="Dato må skrives slik: dd.mm.åååå",ki="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",fi="Tallet kan ikke inneholde mer enn to desimaler",mi="Tallet kan ikke ha desimaler",yi="Feltet kan kun inneholde tall",vi="Ugyldig fødselsnummer",ci="Feltet må være et fødselsnummer (11 siffer)",bi="Ugyldig organisasjonsnummer.",pi="Ugyldig organisasjonsnummer eller fødselsnummer",hi="Startdato må være før eller lik sluttdato",ji="Periode er utenfor opptjeningsperioden",qi="Ugyldig saksnummer eller fødselsnummer",_i="Feltet inneholder ugyldige tegn: {text}",Ei="Feltet inneholder en ugyldig verdi: {value}",Ai="Feltet kan ikke inneholde mellomrom",wi="Feltet må fylles ut",Ti="Du kan skrive maksimalt {length} tegn",Ri="Du må skrive minst {length} tegn",Oi="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Si="Feltet må være mindre eller lik {length}",xi="Feltet må være større eller lik {length}",Bi="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Ni={DateNotBeforeOrEqual:ii,DateNotAfterOrEqual:li,DateRangesOverlapping:oi,DateRangesOverlappingPeriodTypes:ui,DatesNotEqual:di,InvalidDate:gi,InvalidDatesInPeriod:ki,InvalidDecimal:fi,InvalidInteger:mi,InvalidNumber:yi,InvalidFodselsnr:vi,InvalidFodselsnrFormat:ci,InvalidOrgnr:bi,InvalidOrgnrOrFodselsnr:pi,InvalidPeriod:hi,InvalidPeriodRange:ji,InvalidSaksnrOrFodselsnrFormat:qi,InvalidText:_i,InvalidValue:Ei,IllegalWhiteSpace:Ai,IsRequired:wi,MaxLength:Ti,MinLength:Ri,MaxLengthOrFodselsnr:Oi,MaxValue:Si,MinValue:xi,SammeFodselsnrSomSoker:Bi},{formatMessage:on}=ve(Ni),Vi=e=>on({id:"InvalidText"},{text:e}),Fi=()=>on({id:"IsRequired"}),Pi=e=>on({id:"MaxLength"},{length:e}),Mi=e=>on({id:"MinLength"},{length:e}),Ii=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Li=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Sn=e=>e==null||e.toString().trim().length===0;En.extend(ni);En.extend(si);const cn=e=>Sn(e)?Fi():void 0,Di=e=>t=>Sn(t)||t.toString().trim().length>=e?null:Mi(e),ot=e=>t=>Sn(t)||t.toString().trim().length<=e?null:Pi(e),Ki=e=>{if(!Ii.test(e)){const t=e.replace(Li,"");return Vi(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Ci=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Gi="_ukjentAdresseMargins_4teno_1",Hi={ukjentAdresseMargins:Gi},Ui={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},$i=ve(Ui),xn=()=>H.jsx(Fr,{value:$i,children:H.jsx("div",{className:Hi.ukjentAdresseMargins,children:H.jsx(ba,{children:H.jsx("b",{children:H.jsx(en,{id:"UkjentAdresse.Text"})})})})});xn.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};xn.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const Yi="_buttonRow_jav4h_1",zi="_previewLink_jav4h_5",Wi="_bredde_jav4h_9",dr={buttonRow:Yi,previewLink:zi,bredde:Wi},Zi=ot(4e3),Ji=ot(1e4),Qi=Di(3),Xi=e=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",el=(e,t)=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.FRITEKST||e===ie.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ie.VARSEL_OM_TILBAKEKREVING||e===ie.TBK_INNHENTE_OPPLYSNINGER||e===ie.VARSEL_OM_REVURDERING&&t===ye.ANNET,nl=(e,t)=>t===Oe.ENGANGSSTONAD?e.filter(n=>n.kode===ye.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===ye.ANNET):t===Oe.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==ye.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==ye.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,rl=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ie.VARSEL_OM_REVURDERING}:{...t}},tl=e=>{const t=e;return e.brevmalkode===ie.VARSEL_OM_REVURDERING&&t.arsakskode!==ye.ANNET&&(t.fritekst=" "),t},Bn=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:l,setMeldingFormData:u,brukerManglerAdresse:g})=>{const q=ct(),f=Dt({defaultValues:l||rl(e)}),p=f.watch("brevmalkode"),R=f.watch("fritekst"),T=f.watch("arsakskode"),S=O.useMemo(()=>nl(r,a),[]);if(!e.sprakkode)return null;const{formState:x}=f,v=j=>{p&&t(p,R,T),j.preventDefault()},_=bt(e.sprakkode),c=p===ie.VARSEL_OM_REVURDERING;return H.jsx(Js,{formMethods:f,onSubmit:j=>n(tl(j)),setDataOnUnmount:u,children:H.jsxs(Vr,{gap:"4",children:[H.jsx(ir,{name:"brevmalkode",label:q.formatMessage({id:"Messages.Template"}),validate:[cn],selectValues:e.brevmaler.map(j=>H.jsx("option",{value:j.kode,disabled:!j.tilgjengelig,children:j.navn},j.kode)),className:dr.bredde}),c&&H.jsx(ir,{name:"arsakskode",label:q.formatMessage({id:"Messages.Årsak"}),validate:[cn],selectValues:S.map(j=>H.jsx("option",{value:j.kode,children:j.navn},j.kode)),className:dr.bredde}),el(p,T)&&H.jsx(Zs,{name:"fritekst",label:q.formatMessage({id:Xi(p)}),validate:[cn,c?Ji:Zi,Qi,Ki],maxLength:c?1e4:4e3,badges:[{type:"info",titleText:_}],parse:pt}),g&&H.jsx(xn,{}),H.jsxs(ht,{justify:"space-between",children:[!c||c&&T!==void 0&&H.jsx(la,{href:"#",onClick:v,onKeyDown:j=>j.key==="Enter"?v(j):null,children:H.jsx(en,{id:"Messages.Preview"})}),H.jsx(Sr,{size:"small",variant:"primary",loading:x.isSubmitting,disabled:x.isSubmitting||s,onClick:Ci,children:H.jsx(en,{id:"Messages.Submit"})})]})]})})};Bn.__docgenInfo={description:`Messages

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};Bn.__docgenInfo={description:`Messages

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const al=ve(jt),Nn=e=>H.jsx(Fr,{value:al,children:H.jsx(Bn,{...e})});Nn.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""}}};Nn.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""}}};const sl=e=>H.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:H.jsx(e,{})}),il=[{kode:ie.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ie.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],ll=[{kode:ye.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:ye.ANNET,navn:"Annet",kodeverk:"UGUNST"}],vl={title:"sak/sak-meldinger",component:Nn,decorators:[sl],args:{kanVeilede:!1,revurderingVarslingArsak:ll,behandling:{brevmaler:il,sprakkode:"NO"},previewCallback:kn("button-click"),submitCallback:kn("button-click"),setMeldingFormData:kn("button-click")}},pe={args:{fagsakYtelseType:Oe.FORELDREPENGER,brukerManglerAdresse:!1}},he={args:{fagsakYtelseType:Oe.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},je={args:{fagsakYtelseType:Oe.FORELDREPENGER,brukerManglerAdresse:!0}};var gr,kr,fr;pe.parameters={...pe.parameters,docs:{...(gr=pe.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(fr=(kr=pe.parameters)==null?void 0:kr.docs)==null?void 0:fr.source}}};var mr,yr,vr;he.parameters={...he.parameters,docs:{...(mr=he.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(vr=(yr=he.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var cr,br,pr;je.parameters={...je.parameters,docs:{...(cr=je.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(pr=(br=je.parameters)==null?void 0:br.docs)==null?void 0:pr.source}}};var hr,jr,qr;pe.parameters={...pe.parameters,docs:{...(hr=pe.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(qr=(jr=pe.parameters)==null?void 0:jr.docs)==null?void 0:qr.source}}};var _r,Er,Ar;he.parameters={...he.parameters,docs:{...(_r=he.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(Ar=(Er=he.parameters)==null?void 0:Er.docs)==null?void 0:Ar.source}}};var wr,Tr,Rr;je.parameters={...je.parameters,docs:{...(wr=je.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(Rr=(Tr=je.parameters)==null?void 0:Tr.docs)==null?void 0:Rr.source}}};const cl=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{je as BrukerManglerAdresse,pe as Default,he as ForSvangerskapspenger,cl as __namedExportsOrder,vl as default};
