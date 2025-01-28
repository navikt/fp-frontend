import{j as H}from"./jsx-runtime-CLpGMVip.js";import{k as Oe,u as En,a as ne,l as kr,B as br,S as tt,i as at,d as pr,L as wn,o as De,p as hr,E as _r,b as st,f as it,n as ve,M as en,V as Er,q as lt,P as wr,g as ot,r as dt,s as ut,h as gt,m as ft,j as fn}from"./nb_NO-Qj3lIXwS.js";import{R as b,r as T}from"./index-CYQpqK1Q.js";import{d as An}from"./dayjs.min-DPY8FYmS.js";import{M as ct}from"./index-4Uuc9FQs.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";var sn=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(sn||{});sn.BRUKERS_ANDEL;sn.FRILANS;sn.EGEN_NÆRING;var ie=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(ie||{}),xe=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(xe||{}),ye=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(ye||{}),Ce=e=>e.type==="checkbox",he=e=>e instanceof Date,X=e=>e==null;const Ar=e=>typeof e=="object";var $=e=>!X(e)&&!Array.isArray(e)&&Ar(e)&&!he(e),jr=e=>$(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,mt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xr=(e,t)=>e.has(mt(t)),yt=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},jn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ae(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(jn&&(e instanceof Blob||r))&&(n||$(e)))if(t=n?[]:{},!n&&!yt(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=ae(e[a]));else return e;return t}var ln=e=>Array.isArray(e)?e.filter(Boolean):[],U=e=>e===void 0,y=(e,t,n)=>{if(!t||!$(e))return n;const r=ln(t.split(/[,[\].]+?/)).reduce((a,s)=>X(a)?a:a[s],e);return U(r)||r===e?U(e[t])?n:e[t]:r},oe=e=>typeof e=="boolean",xn=e=>/^\w*$/.test(e),Or=e=>ln(e.replace(/["|']|\]/g,"").split(/\.|\[/)),C=(e,t,n)=>{let r=-1;const a=xn(t)?[t]:Or(t),s=a.length,l=s-1;for(;++r<s;){const d=a[r];let g=n;if(r!==l){const E=e[d];g=$(E)||Array.isArray(E)?E:isNaN(+a[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=g,e=e[d]}return e};const nn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ue={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},me={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Sr=b.createContext(null),Ke=()=>b.useContext(Sr),vt=e=>{const{children:t,...n}=e;return b.createElement(Sr.Provider,{value:n},t)};var Tr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const l=s;return t._proxyFormState[l]!==ue.all&&(t._proxyFormState[l]=!r||ue.all),n&&(n[l]=!0),e[l]}});return a},se=e=>$(e)&&!Object.keys(e).length,Rr=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return se(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(l=>t[l]===(!r||ue.all))},Me=e=>Array.isArray(e)?e:[e],qr=(e,t,n)=>!e||!t||e===t||Me(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function On(e){const t=b.useRef(e);t.current=e,b.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function kt(e){const t=Ke(),{control:n=t.control,disabled:r,name:a,exact:s}=e,[l,d]=b.useState(n._formState),g=b.useRef(!0),E=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=b.useRef(a);return c.current=a,On({disabled:r,next:p=>g.current&&qr(c.current,p.name,s)&&Rr(p,E.current,n._updateFormState)&&d({...n._formState,...p}),subject:n._subjects.state}),b.useEffect(()=>(g.current=!0,E.current.isValid&&n._updateValid(!0),()=>{g.current=!1}),[n]),b.useMemo(()=>Tr(l,n,E.current,!1),[l,n])}var ce=e=>typeof e=="string",Nr=(e,t,n,r,a)=>ce(e)?(r&&t.watch.add(e),y(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),y(n,s))):(r&&(t.watchAll=!0),n);function bt(e){const t=Ke(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:l}=e,d=b.useRef(r);d.current=r,On({disabled:s,subject:n._subjects.values,next:c=>{qr(d.current,c.name,l)&&E(ae(Nr(d.current,n._names,c.values||n._formValues,!1,a)))}});const[g,E]=b.useState(n._getWatch(r,a));return b.useEffect(()=>n._removeUnmounted()),g}function Vr(e){const t=Ke(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,l=xr(a._names.array,n),d=bt({control:a,name:n,defaultValue:y(a._formValues,n,y(a._defaultValues,n,e.defaultValue)),exact:!0}),g=kt({control:a,name:n,exact:!0}),E=b.useRef(a.register(n,{...e.rules,value:d,...oe(e.disabled)?{disabled:e.disabled}:{}})),c=b.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!y(g.errors,n)},isDirty:{enumerable:!0,get:()=>!!y(g.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!y(g.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!y(g.validatingFields,n)},error:{enumerable:!0,get:()=>y(g.errors,n)}}),[g,n]),p=b.useMemo(()=>({name:n,value:d,...oe(r)||g.disabled?{disabled:g.disabled||r}:{},onChange:O=>E.current.onChange({target:{value:jr(O),name:n},type:nn.CHANGE}),onBlur:()=>E.current.onBlur({target:{value:y(a._formValues,n),name:n},type:nn.BLUR}),ref:O=>{const S=y(a._fields,n);S&&O&&(S._f.ref={focus:()=>O.focus(),select:()=>O.select(),setCustomValidity:R=>O.setCustomValidity(R),reportValidity:()=>O.reportValidity()})}}),[n,a._formValues,r,g.disabled,d,a._fields]);return b.useEffect(()=>{const O=a._options.shouldUnregister||s,S=(R,q)=>{const v=y(a._fields,R);v&&v._f&&(v._f.mount=q)};if(S(n,!0),O){const R=ae(y(a._options.defaultValues,n));C(a._defaultValues,n,R),U(y(a._formValues,n))&&C(a._formValues,n,R)}return!l&&a.register(n),()=>{(l?O&&!a._state.action:O)?a.unregister(n):S(n,!1)}},[n,a,l,s]),b.useEffect(()=>{a._updateDisabledField({disabled:r,fields:a._fields,name:n})},[r,n,a]),b.useMemo(()=>({field:p,formState:g,fieldState:c}),[p,g,c])}var pt=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Vn=e=>({isOnSubmit:!e||e===ue.onSubmit,isOnBlur:e===ue.onBlur,isOnChange:e===ue.onChange,isOnAll:e===ue.all,isOnTouch:e===ue.onTouched}),Fn=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Le=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=y(e,a);if(s){const{_f:l,...d}=s;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],a)&&!r)return!0;if(l.ref&&t(l.ref,l.name)&&!r)return!0;if(Le(d,t))break}else if($(d)&&Le(d,t))break}}};var ht=(e,t,n)=>{const r=Me(y(e,n));return C(r,"root",t[n]),C(e,n,r),e},Sn=e=>e.type==="file",fe=e=>typeof e=="function",rn=e=>{if(!jn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xe=e=>ce(e),Tn=e=>e.type==="radio",tn=e=>e instanceof RegExp;const Bn={value:!1,isValid:!1},In={value:!0,isValid:!0};var Fr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!U(e[0].attributes.value)?U(e[0].value)||e[0].value===""?In:{value:e[0].value,isValid:!0}:In:Bn}return Bn};const Pn={isValid:!1,value:null};var Br=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Pn):Pn;function Mn(e,t,n="validate"){if(Xe(e)||Array.isArray(e)&&e.every(Xe)||oe(e)&&!e)return{type:n,message:Xe(e)?e:"",ref:t}}var je=e=>$(e)&&!tn(e)?e:{value:e,message:""},Ln=async(e,t,n,r,a,s)=>{const{ref:l,refs:d,required:g,maxLength:E,minLength:c,min:p,max:O,pattern:S,validate:R,name:q,valueAsNumber:v,mount:w}=e._f,k=y(n,q);if(!w||t.has(q))return{};const _=d?d[0]:l,V=A=>{a&&_.reportValidity&&(_.setCustomValidity(oe(A)?"":A||""),_.reportValidity())},F={},J=Tn(l),K=Ce(l),D=J||K,M=(v||Sn(l))&&U(l.value)&&U(k)||rn(l)&&l.value===""||k===""||Array.isArray(k)&&!k.length,I=pt.bind(null,q,r,F),G=(A,x,B,P=me.maxLength,L=me.minLength)=>{const z=A?x:B;F[q]={type:A?P:L,message:z,ref:l,...I(A?P:L,z)}};if(s?!Array.isArray(k)||!k.length:g&&(!D&&(M||X(k))||oe(k)&&!k||K&&!Fr(d).isValid||J&&!Br(d).isValid)){const{value:A,message:x}=Xe(g)?{value:!!g,message:g}:je(g);if(A&&(F[q]={type:me.required,message:x,ref:_,...I(me.required,x)},!r))return V(x),F}if(!M&&(!X(p)||!X(O))){let A,x;const B=je(O),P=je(p);if(!X(k)&&!isNaN(k)){const L=l.valueAsNumber||k&&+k;X(B.value)||(A=L>B.value),X(P.value)||(x=L<P.value)}else{const L=l.valueAsDate||new Date(k),z=ge=>new Date(new Date().toDateString()+" "+ge),te=l.type=="time",le=l.type=="week";ce(B.value)&&k&&(A=te?z(k)>z(B.value):le?k>B.value:L>new Date(B.value)),ce(P.value)&&k&&(x=te?z(k)<z(P.value):le?k<P.value:L<new Date(P.value))}if((A||x)&&(G(!!A,B.message,P.message,me.max,me.min),!r))return V(F[q].message),F}if((E||c)&&!M&&(ce(k)||s&&Array.isArray(k))){const A=je(E),x=je(c),B=!X(A.value)&&k.length>+A.value,P=!X(x.value)&&k.length<+x.value;if((B||P)&&(G(B,A.message,x.message),!r))return V(F[q].message),F}if(S&&!M&&ce(k)){const{value:A,message:x}=je(S);if(tn(A)&&!k.match(A)&&(F[q]={type:me.pattern,message:x,ref:l,...I(me.pattern,x)},!r))return V(x),F}if(R){if(fe(R)){const A=await R(k,n),x=Mn(A,_);if(x&&(F[q]={...x,...I(me.validate,x.message)},!r))return V(x.message),F}else if($(R)){let A={};for(const x in R){if(!se(A)&&!r)break;const B=Mn(await R[x](k,n),_,x);B&&(A={...B,...I(x,B.message)},V(B.message),r&&(F[q]=A))}if(!se(A)&&(F[q]={ref:_,...A},!r))return F}}return V(!0),F};function _t(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=U(e)?r++:e[t[r++]];return e}function Et(e){for(const t in e)if(e.hasOwnProperty(t)&&!U(e[t]))return!1;return!0}function Y(e,t){const n=Array.isArray(t)?t:xn(t)?[t]:Or(t),r=n.length===1?e:_t(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&($(r)&&se(r)||Array.isArray(r)&&Et(r))&&Y(e,n.slice(0,-1)),e}var cn=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},bn=e=>X(e)||!Ar(e);function be(e,t){if(bn(e)||bn(t))return e===t;if(he(e)&&he(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const l=t[a];if(he(s)&&he(l)||$(s)&&$(l)||Array.isArray(s)&&Array.isArray(l)?!be(s,l):s!==l)return!1}}return!0}var Ir=e=>e.type==="select-multiple",wt=e=>Tn(e)||Ce(e),mn=e=>rn(e)&&e.isConnected,Pr=e=>{for(const t in e)if(fe(e[t]))return!0;return!1};function an(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const r in e)Array.isArray(e[r])||$(e[r])&&!Pr(e[r])?(t[r]=Array.isArray(e[r])?[]:{},an(e[r],t[r])):X(e[r])||(t[r]=!0);return t}function Mr(e,t,n){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Pr(e[a])?U(t)||bn(n[a])?n[a]=Array.isArray(e[a])?an(e[a],[]):{...an(e[a])}:Mr(e[a],X(t)?{}:t[a],n[a]):n[a]=!be(e[a],t[a]);return n}var Fe=(e,t)=>Mr(e,t,an(t)),Lr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>U(e)?e:t?e===""?NaN:e&&+e:n&&ce(e)?new Date(e):r?r(e):e;function yn(e){const t=e.ref;return Sn(t)?t.files:Tn(t)?Br(e.refs).value:Ir(t)?[...t.selectedOptions].map(({value:n})=>n):Ce(t)?Fr(e.refs).value:Lr(U(t.value)?e.ref.value:t.value,e)}var At=(e,t,n,r)=>{const a={};for(const s of e){const l=y(t,s);l&&C(a,s,l._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Be=e=>U(e)?e:tn(e)?e.source:$(e)?tn(e.value)?e.value.source:e.value:e;const Dn="AsyncFunction";var jt=e=>!!e&&!!e.validate&&!!(fe(e.validate)&&e.validate.constructor.name===Dn||$(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Dn)),xt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Cn(e,t,n){const r=y(e,n);if(r||xn(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),l=y(t,s),d=y(e,s);if(l&&!Array.isArray(l)&&n!==s)return{name:n};if(d&&d.type)return{name:s,error:d};a.pop()}return{name:n}}var Ot=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,St=(e,t)=>!ln(y(e,t)).length&&Y(e,t);const Tt={mode:ue.onSubmit,reValidateMode:ue.onChange,shouldFocusError:!0};function Rt(e={}){let t={...Tt,...e},n={submitCount:0,isDirty:!1,isLoading:fe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},a=$(t.defaultValues)||$(t.values)?ae(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:ae(a),l={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},g,E=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:cn(),array:cn(),state:cn()},O=Vn(t.mode),S=Vn(t.reValidateMode),R=t.criteriaMode===ue.all,q=i=>o=>{clearTimeout(E),E=setTimeout(i,o)},v=async i=>{if(!t.disabled&&(c.isValid||i)){const o=t.resolver?se((await D()).errors):await I(r,!0);o!==n.isValid&&p.state.next({isValid:o})}},w=(i,o)=>{!t.disabled&&(c.isValidating||c.validatingFields)&&((i||Array.from(d.mount)).forEach(u=>{u&&(o?C(n.validatingFields,u,o):Y(n.validatingFields,u))}),p.state.next({validatingFields:n.validatingFields,isValidating:!se(n.validatingFields)}))},k=(i,o=[],u,h,m=!0,f=!0)=>{if(h&&u&&!t.disabled){if(l.action=!0,f&&Array.isArray(y(r,i))){const j=u(y(r,i),h.argA,h.argB);m&&C(r,i,j)}if(f&&Array.isArray(y(n.errors,i))){const j=u(y(n.errors,i),h.argA,h.argB);m&&C(n.errors,i,j),St(n.errors,i)}if(c.touchedFields&&f&&Array.isArray(y(n.touchedFields,i))){const j=u(y(n.touchedFields,i),h.argA,h.argB);m&&C(n.touchedFields,i,j)}c.dirtyFields&&(n.dirtyFields=Fe(a,s)),p.state.next({name:i,isDirty:A(i,o),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else C(s,i,o)},_=(i,o)=>{C(n.errors,i,o),p.state.next({errors:n.errors})},V=i=>{n.errors=i,p.state.next({errors:n.errors,isValid:!1})},F=(i,o,u,h)=>{const m=y(r,i);if(m){const f=y(s,i,U(u)?y(a,i):u);U(f)||h&&h.defaultChecked||o?C(s,i,o?f:yn(m._f)):P(i,f),l.mount&&v()}},J=(i,o,u,h,m)=>{let f=!1,j=!1;const N={name:i};if(!t.disabled){const W=!!(y(r,i)&&y(r,i)._f&&y(r,i)._f.disabled);if(!u||h){c.isDirty&&(j=n.isDirty,n.isDirty=N.isDirty=A(),f=j!==N.isDirty);const Z=W||be(y(a,i),o);j=!!(!W&&y(n.dirtyFields,i)),Z||W?Y(n.dirtyFields,i):C(n.dirtyFields,i,!0),N.dirtyFields=n.dirtyFields,f=f||c.dirtyFields&&j!==!Z}if(u){const Z=y(n.touchedFields,i);Z||(C(n.touchedFields,i,u),N.touchedFields=n.touchedFields,f=f||c.touchedFields&&Z!==u)}f&&m&&p.state.next(N)}return f?N:{}},K=(i,o,u,h)=>{const m=y(n.errors,i),f=c.isValid&&oe(o)&&n.isValid!==o;if(t.delayError&&u?(g=q(()=>_(i,u)),g(t.delayError)):(clearTimeout(E),g=null,u?C(n.errors,i,u):Y(n.errors,i)),(u?!be(m,u):m)||!se(h)||f){const j={...h,...f&&oe(o)?{isValid:o}:{},errors:n.errors,name:i};n={...n,...j},p.state.next(j)}},D=async i=>{w(i,!0);const o=await t.resolver(s,t.context,At(i||d.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return w(i),o},M=async i=>{const{errors:o}=await D(i);if(i)for(const u of i){const h=y(o,u);h?C(n.errors,u,h):Y(n.errors,u)}else n.errors=o;return o},I=async(i,o,u={valid:!0})=>{for(const h in i){const m=i[h];if(m){const{_f:f,...j}=m;if(f){const N=d.array.has(f.name),W=m._f&&jt(m._f);W&&c.validatingFields&&w([h],!0);const Z=await Ln(m,d.disabled,s,R,t.shouldUseNativeValidation&&!o,N);if(W&&c.validatingFields&&w([h]),Z[f.name]&&(u.valid=!1,o))break;!o&&(y(Z,f.name)?N?ht(n.errors,Z,f.name):C(n.errors,f.name,Z[f.name]):Y(n.errors,f.name))}!se(j)&&await I(j,o,u)}}return u.valid},G=()=>{for(const i of d.unMount){const o=y(r,i);o&&(o._f.refs?o._f.refs.every(u=>!mn(u)):!mn(o._f.ref))&&Te(i)}d.unMount=new Set},A=(i,o)=>!t.disabled&&(i&&o&&C(s,i,o),!be(Q(),a)),x=(i,o,u)=>Nr(i,d,{...l.mount?s:U(o)?a:ce(i)?{[i]:o}:o},u,o),B=i=>ln(y(l.mount?s:a,i,t.shouldUnregister?y(a,i,[]):[])),P=(i,o,u={})=>{const h=y(r,i);let m=o;if(h){const f=h._f;f&&(!f.disabled&&C(s,i,Lr(o,f)),m=rn(f.ref)&&X(o)?"":o,Ir(f.ref)?[...f.ref.options].forEach(j=>j.selected=m.includes(j.value)):f.refs?Ce(f.ref)?f.refs.length>1?f.refs.forEach(j=>(!j.defaultChecked||!j.disabled)&&(j.checked=Array.isArray(m)?!!m.find(N=>N===j.value):m===j.value)):f.refs[0]&&(f.refs[0].checked=!!m):f.refs.forEach(j=>j.checked=j.value===m):Sn(f.ref)?f.ref.value="":(f.ref.value=m,f.ref.type||p.values.next({name:i,values:{...s}})))}(u.shouldDirty||u.shouldTouch)&&J(i,m,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ge(i)},L=(i,o,u)=>{for(const h in o){const m=o[h],f=`${i}.${h}`,j=y(r,f);(d.array.has(i)||$(m)||j&&!j._f)&&!he(m)?L(f,m,u):P(f,m,u)}},z=(i,o,u={})=>{const h=y(r,i),m=d.array.has(i),f=ae(o);C(s,i,f),m?(p.array.next({name:i,values:{...s}}),(c.isDirty||c.dirtyFields)&&u.shouldDirty&&p.state.next({name:i,dirtyFields:Fe(a,s),isDirty:A(i,f)})):h&&!h._f&&!X(f)?L(i,f,u):P(i,f,u),Fn(i,d)&&p.state.next({...n}),p.values.next({name:l.mount?i:void 0,values:{...s}})},te=async i=>{l.mount=!0;const o=i.target;let u=o.name,h=!0;const m=y(r,u),f=()=>o.type?yn(m._f):jr(i),j=N=>{h=Number.isNaN(N)||he(N)&&isNaN(N.getTime())||be(N,y(s,u,N))};if(m){let N,W;const Z=f(),ke=i.type===nn.BLUR||i.type===nn.FOCUS_OUT,et=!xt(m._f)&&!t.resolver&&!y(n.errors,u)&&!m._f.deps||Ot(ke,y(n.touchedFields,u),n.isSubmitted,S,O),un=Fn(u,d,ke);C(s,u,Z),ke?(m._f.onBlur&&m._f.onBlur(i),g&&g(0)):m._f.onChange&&m._f.onChange(i);const gn=J(u,Z,ke,!1),nt=!se(gn)||un;if(!ke&&p.values.next({name:u,type:i.type,values:{...s}}),et)return c.isValid&&(t.mode==="onBlur"&&ke?v():ke||v()),nt&&p.state.next({name:u,...un?{}:gn});if(!ke&&un&&p.state.next({...n}),t.resolver){const{errors:qn}=await D([u]);if(j(Z),h){const rt=Cn(n.errors,r,u),Nn=Cn(qn,r,rt.name||u);N=Nn.error,u=Nn.name,W=se(qn)}}else w([u],!0),N=(await Ln(m,d.disabled,s,R,t.shouldUseNativeValidation))[u],w([u]),j(Z),h&&(N?W=!1:c.isValid&&(W=await I(r,!0)));h&&(m._f.deps&&ge(m._f.deps),K(u,W,N,gn))}},le=(i,o)=>{if(y(n.errors,o)&&i.focus)return i.focus(),1},ge=async(i,o={})=>{let u,h;const m=Me(i);if(t.resolver){const f=await M(U(i)?i:m);u=se(f),h=i?!m.some(j=>y(f,j)):u}else i?(h=(await Promise.all(m.map(async f=>{const j=y(r,f);return await I(j&&j._f?{[f]:j}:j)}))).every(Boolean),!(!h&&!n.isValid)&&v()):h=u=await I(r);return p.state.next({...!ce(i)||c.isValid&&u!==n.isValid?{}:{name:i},...t.resolver||!i?{isValid:u}:{},errors:n.errors}),o.shouldFocus&&!h&&Le(r,le,i?m:d.mount),h},Q=i=>{const o={...l.mount?s:a};return U(i)?o:ce(i)?y(o,i):i.map(u=>y(o,u))},_e=(i,o)=>({invalid:!!y((o||n).errors,i),isDirty:!!y((o||n).dirtyFields,i),error:y((o||n).errors,i),isValidating:!!y(n.validatingFields,i),isTouched:!!y((o||n).touchedFields,i)}),Ee=i=>{i&&Me(i).forEach(o=>Y(n.errors,o)),p.state.next({errors:i?n.errors:{}})},Ge=(i,o,u)=>{const h=(y(r,i,{_f:{}})._f||{}).ref,m=y(n.errors,i)||{},{ref:f,message:j,type:N,...W}=m;C(n.errors,i,{...W,...o,ref:h}),p.state.next({name:i,errors:n.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},dn=(i,o)=>fe(i)?p.values.subscribe({next:u=>i(x(void 0,o),u)}):x(i,o,!0),Te=(i,o={})=>{for(const u of i?Me(i):d.mount)d.mount.delete(u),d.array.delete(u),o.keepValue||(Y(r,u),Y(s,u)),!o.keepError&&Y(n.errors,u),!o.keepDirty&&Y(n.dirtyFields,u),!o.keepTouched&&Y(n.touchedFields,u),!o.keepIsValidating&&Y(n.validatingFields,u),!t.shouldUnregister&&!o.keepDefaultValue&&Y(a,u);p.values.next({values:{...s}}),p.state.next({...n,...o.keepDirty?{isDirty:A()}:{}}),!o.keepIsValid&&v()},He=({disabled:i,name:o,field:u,fields:h})=>{(oe(i)&&l.mount||i||d.disabled.has(o))&&(i?d.disabled.add(o):d.disabled.delete(o),J(o,yn(u?u._f:y(h,o)._f),!1,!1,!0))},Re=(i,o={})=>{let u=y(r,i);const h=oe(o.disabled)||oe(t.disabled);return C(r,i,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:i}},name:i,mount:!0,...o}}),d.mount.add(i),u?He({field:u,disabled:oe(o.disabled)?o.disabled:t.disabled,name:i}):F(i,!0,o.value),{...h?{disabled:o.disabled||t.disabled}:{},...t.progressive?{required:!!o.required,min:Be(o.min),max:Be(o.max),minLength:Be(o.minLength),maxLength:Be(o.maxLength),pattern:Be(o.pattern)}:{},name:i,onChange:te,onBlur:te,ref:m=>{if(m){Re(i,o),u=y(r,i);const f=U(m.value)&&m.querySelectorAll&&m.querySelectorAll("input,select,textarea")[0]||m,j=wt(f),N=u._f.refs||[];if(j?N.find(W=>W===f):f===u._f.ref)return;C(r,i,{_f:{...u._f,...j?{refs:[...N.filter(mn),f,...Array.isArray(y(a,i))?[{}]:[]],ref:{type:f.type,name:i}}:{ref:f}}}),F(i,!1,void 0,f)}else u=y(r,i,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(xr(d.array,i)&&l.action)&&d.unMount.add(i)}}},qe=()=>t.shouldFocusError&&Le(r,le,d.mount),Ue=i=>{oe(i)&&(p.state.next({disabled:i}),Le(r,(o,u)=>{const h=y(r,u);h&&(o.disabled=h._f.disabled||i,Array.isArray(h._f.refs)&&h._f.refs.forEach(m=>{m.disabled=h._f.disabled||i}))},0,!1))},we=(i,o)=>async u=>{let h;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let m=ae(s);if(d.disabled.size)for(const f of d.disabled)C(m,f,void 0);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:j}=await D();n.errors=f,m=j}else await I(r);if(Y(n.errors,"root"),se(n.errors)){p.state.next({errors:{}});try{await i(m,u)}catch(f){h=f}}else o&&await o({...n.errors},u),qe(),setTimeout(qe);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:se(n.errors)&&!h,submitCount:n.submitCount+1,errors:n.errors}),h)throw h},Ne=(i,o={})=>{y(r,i)&&(U(o.defaultValue)?z(i,ae(y(a,i))):(z(i,o.defaultValue),C(a,i,ae(o.defaultValue))),o.keepTouched||Y(n.touchedFields,i),o.keepDirty||(Y(n.dirtyFields,i),n.isDirty=o.defaultValue?A(i,ae(y(a,i))):A()),o.keepError||(Y(n.errors,i),c.isValid&&v()),p.state.next({...n}))},Ae=(i,o={})=>{const u=i?ae(i):a,h=ae(u),m=se(i),f=m?a:h;if(o.keepDefaultValues||(a=u),!o.keepValues){if(o.keepDirtyValues){const j=new Set([...d.mount,...Object.keys(Fe(a,s))]);for(const N of Array.from(j))y(n.dirtyFields,N)?C(f,N,y(s,N)):z(N,y(f,N))}else{if(jn&&U(i))for(const j of d.mount){const N=y(r,j);if(N&&N._f){const W=Array.isArray(N._f.refs)?N._f.refs[0]:N._f.ref;if(rn(W)){const Z=W.closest("form");if(Z){Z.reset();break}}}}r={}}s=t.shouldUnregister?o.keepDefaultValues?ae(a):{}:ae(f),p.array.next({values:{...f}}),p.values.next({values:{...f}})}d={mount:o.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!c.isValid||!!o.keepIsValid||!!o.keepDirtyValues,l.watch=!!t.shouldUnregister,p.state.next({submitCount:o.keepSubmitCount?n.submitCount:0,isDirty:m?!1:o.keepDirty?n.isDirty:!!(o.keepDefaultValues&&!be(i,a)),isSubmitted:o.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:m?{}:o.keepDirtyValues?o.keepDefaultValues&&s?Fe(a,s):n.dirtyFields:o.keepDefaultValues&&i?Fe(a,i):o.keepDirty?n.dirtyFields:{},touchedFields:o.keepTouched?n.touchedFields:{},errors:o.keepErrors?n.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},pe=(i,o)=>Ae(fe(i)?i(s):i,o);return{control:{register:Re,unregister:Te,getFieldState:_e,handleSubmit:we,setError:Ge,_executeSchema:D,_getWatch:x,_getDirty:A,_updateValid:v,_removeUnmounted:G,_updateFieldArray:k,_updateDisabledField:He,_getFieldArray:B,_reset:Ae,_resetDefaultValues:()=>fe(t.defaultValues)&&t.defaultValues().then(i=>{pe(i,t.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:i=>{n={...n,...i}},_disableForm:Ue,_subjects:p,_proxyFormState:c,_setErrors:V,get _fields(){return r},get _formValues(){return s},get _state(){return l},set _state(i){l=i},get _defaultValues(){return a},get _names(){return d},set _names(i){d=i},get _formState(){return n},set _formState(i){n=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:ge,register:Re,handleSubmit:we,watch:dn,setValue:z,getValues:Q,reset:pe,resetField:Ne,clearErrors:Ee,unregister:Te,setError:Ge,setFocus:(i,o={})=>{const u=y(r,i),h=u&&u._f;if(h){const m=h.refs?h.refs[0]:h.ref;m.focus&&(m.focus(),o.shouldSelect&&fe(m.select)&&m.select())}},getFieldState:_e}}function qt(e={}){const t=b.useRef(void 0),n=b.useRef(void 0),[r,a]=b.useState({isDirty:!1,isValidating:!1,isLoading:fe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:fe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Rt(e),formState:r});const s=t.current.control;return s._options=e,On({subject:s._subjects.state,next:l=>{Rr(l,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),b.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),b.useEffect(()=>{if(s._proxyFormState.isDirty){const l=s._getDirty();l!==r.isDirty&&s._subjects.state.next({isDirty:l})}},[s,r.isDirty]),b.useEffect(()=>{e.values&&!be(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(l=>({...l}))):s._resetDefaultValues()},[e.values,s]),b.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),b.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),b.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Tr(r,s),t.current}function Dr(e,t=166,n=!1){let r;function a(...s){const l=()=>{r=void 0,e.apply(this,s)};!r&&n&&l(),clearTimeout(r),r=setTimeout(l,t)}return a.clear=()=>{clearTimeout(r)},a}const Kn=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{};var Nt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Vt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Nt(e,["title","titleId"]);let s=Oe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ft(e,["title","titleId"]);let s=Oe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var It=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Pt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=It(e,["title","titleId"]);let s=Oe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Mt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cr=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Mt(e,["title","titleId"]);let s=Oe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Lt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Dt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Lt(e,["title","titleId"]);let s=Oe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Ct=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Kt=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Ct(e,["title","titleId"]);let s=Oe();return s=n?r||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var Gt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ht={error:Kt,warning:Bt,info:Pt,success:at},Ut=T.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",fullWidth:l=!1,contentMaxWidth:d=!0,inline:g=!1,closeButton:E=!1,onClose:c}=e,p=Gt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const O=En("Alert"),S=Ht[a];return b.createElement("div",Object.assign({},p,{ref:t,className:ne(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":l,"navds-alert--inline":g,"navds-alert--close-button":E})}),b.createElement(S,{title:O(a),className:"navds-alert__icon"}),b.createElement(kr,{as:"div",size:s,className:ne("navds-alert__wrapper",d&&"navds-alert__wrapper--maxwidth")},n),E&&!g&&b.createElement("div",{className:"navds-alert__button-wrapper"},b.createElement(br,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:b.createElement(tt,{title:["error","warning"].includes(a)?O("closeAlert"):O("closeMessage")})})))}),$t=()=>b.createElement(Cr,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),zt=()=>b.createElement(Cr,{title:En("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Yt=T.createContext(null),Kr=(e,t)=>{var n,r,a;const{size:s,error:l,errorId:d}=e,g=T.useContext(Yt),E=pr(),c=(n=e.id)!==null&&n!==void 0?n:`${t}-${E}`,p=d??`${t}-error-${E}`,O=`${t}-description-${E}`,S=(g==null?void 0:g.disabled)||e.disabled,R=((g==null?void 0:g.readOnly)||e.readOnly)&&!S||void 0,q=!S&&!R&&!!(l||g!=null&&g.error),v=!S&&!R&&!!l&&typeof l!="boolean",w=Object.assign({},q?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:v,hasError:q,errorId:p,inputDescriptionId:O,size:(r=s??(g==null?void 0:g.size))!==null&&r!==void 0?r:"medium",readOnly:R,inputProps:Object.assign(Object.assign({id:c},w),{"aria-describedby":ne(e["aria-describedby"],{[O]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:v,[(a=g==null?void 0:g.errorId)!==null&&a!==void 0?a:""]:q&&!!(g!=null&&g.error)})||void 0,disabled:S})}};var Wt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Zt=T.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:l,inputDescriptionId:d,readOnly:g}=Kr(e,"select"),{children:E,label:c,className:p,description:O,htmlSize:S,hideLabel:R=!1,style:q}=e,v=Wt(e,["children","label","className","description","htmlSize","hideLabel","style"]),w={onMouseDown:k=>{g&&(k.preventDefault(),k.target.focus())},onKeyDown:k=>{g&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(k.key)&&k.preventDefault()}};return b.createElement("div",{className:ne(p,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":g,"navds-select--error":s,"navds-select--readonly":g})},b.createElement(wn,{htmlFor:n.id,size:l,className:ne("navds-form-field__label",{"navds-sr-only":R})},g&&b.createElement(zt,null),c),!!O&&b.createElement(De,{className:ne("navds-form-field__description",{"navds-sr-only":R}),id:d,size:l,as:"div"},O),b.createElement("div",{className:"navds-select__container",style:q},b.createElement("select",Object.assign({},hr(v,["error","errorId","size","readOnly"]),n,w,{ref:t,className:ne("navds-select__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:S}),E),b.createElement(Vt,{className:"navds-select__chevron","aria-hidden":!0})),b.createElement("div",{className:"navds-form-field__error",id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&b.createElement(_r,{size:l,showIcon:!0},e.error)))});var Jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Qt=T.forwardRef((e,t)=>{var{as:n="a",className:r,underline:a=!0,variant:s="action",inlineText:l=!1}=e,d=Jt(e,["as","className","underline","variant","inlineText"]);return b.createElement(n,Object.assign({},d,{ref:t,className:ne("navds-link",r,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":l})}))});var Xt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ea=T.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:l}=e,d=Xt(e,["children","className","variant","size","icon"]);const g=(a==null?void 0:a.endsWith("-filled"))&&"strong",E=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",c=a==null?void 0:a.replace("-filled","").replace("-moderate","");return b.createElement(De,Object.assign({},d,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:ne("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${g||E||"outline"}`,`navds-tag--${c}`)}),l&&b.createElement("span",{className:"navds-tag__icon--left"},l),n)});var na=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gn=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Hn=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Ye(e){return parseInt(e,10)||0}const ra=T.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:l,minRows:d=1,autoScrollbar:g,style:E,value:c}=e,p=na(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:O}=T.useRef(c!=null),S=T.useRef(null),R=st(S,t),q=T.useRef(null),v=T.useRef(0),[w,k]=T.useState({outerHeightStyle:0}),_=b.useCallback(()=>{const K=S.current,M=Hn(K).getComputedStyle(K);if(M.width==="0px")return{outerHeightStyle:0};const I=q.current;I.style.width=M.width,I.value=K.value||p.placeholder||"x",I.value.slice(-1)===`
`&&(I.value+=" ");const G=M.boxSizing,A=Ye(M.paddingBottom)+Ye(M.paddingTop),x=Ye(M.borderBottomWidth)+Ye(M.borderTopWidth),B=I.scrollHeight-A;I.value="x";const P=I.scrollHeight-A;let L=B;d&&(L=Math.max(Number(d)*P,L)),l&&(L=Math.min(Number(l)*P,L)),L=Math.max(L,P);const z=L+(G==="border-box"?A+x:0),te=Math.abs(L-B)<=1;return{outerHeightStyle:z,overflow:te}},[l,d,p.placeholder]),V=()=>{const K=_();Un(K)||k(D=>Gn(D,K,v))};Kn(()=>{const K=()=>{const A=_();Un(A)||ct.flushSync(()=>{k(x=>Gn(x,A,v))})},D=Dr(()=>{var A,x,B;if(v.current=0,!((A=S.current)===null||A===void 0)&&A.style.height||!((x=S.current)===null||x===void 0)&&x.style.width){((B=S.current)===null||B===void 0?void 0:B.style.overflow)==="hidden"&&k(P=>Object.assign(Object.assign({},P),{overflow:!1}));return}K()},166,!0),M=S.current,I=Hn(M);I.addEventListener("resize",D);let G;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(D),G.observe(M)),()=>{D.clear(),I.removeEventListener("resize",D),G&&G.disconnect()}},[_]),Kn(()=>{V()}),T.useEffect(()=>{v.current=0},[c]);const F=K=>{v.current=0,O||V(),s&&s(K)},J=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!g&&!(!((n=S.current)===null||n===void 0)&&n.style.height)&&!(!((r=S.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},E);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:c,onChange:F,ref:R,rows:d,style:J},p,{className:a})),b.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:q,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},E)}))});function Un(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const ta=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const s=En("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),l=t-n,[d,g]=T.useState(l);return T.useEffect(()=>{const E=Dr(()=>{g(l)},2e3);return E(),()=>{E.clear()}},[l]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:t})),l<20&&b.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},$n(d,s)),b.createElement(De,{className:ne("navds-textarea__counter",{"navds-textarea__counter--error":l<0}),size:r},$n(l,s)))},$n=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var aa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const sa=T.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:l,showErrorMsg:d,hasError:g,size:E,inputDescriptionId:c}=Kr(e,"textarea"),{label:p,className:O,description:S,maxLength:R,hideLabel:q=!1,resize:v,UNSAFE_autoScrollbar:w,i18n:k,readOnly:_}=e,V=aa(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),F=pr(),J=R!==void 0&&R>0,[K,D]=T.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),M=()=>{let G=V!=null&&V.minRows?V==null?void 0:V.minRows:3;return E==="small"&&(G=V!=null&&V.minRows?V==null?void 0:V.minRows:2),G},I=ne(s["aria-describedby"],{[F??""]:J});return b.createElement("div",{className:ne(O,"navds-form-field",`navds-form-field--${E}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":_,"navds-textarea--readonly":_,"navds-textarea--error":g,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},b.createElement(wn,{htmlFor:s.id,size:E,className:ne("navds-form-field__label",{"navds-sr-only":q})},_&&b.createElement($t,null),p),!!S&&b.createElement(De,{className:ne("navds-form-field__description",{"navds-sr-only":q}),id:c,size:E,as:"div"},S),b.createElement(ra,Object.assign({},hr(V,["error","errorId","size"]),s,{onChange:it(e.onChange,e.value===void 0?G=>D(G.target.value):void 0),minRows:M(),autoScrollbar:w,ref:t,readOnly:_,className:ne("navds-textarea__input","navds-body-short",`navds-body-short--${E??"medium"}`)},I?{"aria-describedby":I}:{})),J&&!_&&!s.disabled&&b.createElement(ta,{maxLengthId:F,maxLength:R,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:K.length,size:E,i18n:k}),b.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&b.createElement(_r,{size:E,showIcon:!0},e.error)))});function ia(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zn={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function la(){if(Yn)return Ie;Yn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:l,ref:a!==void 0?a:null,props:s}}return Ie.Fragment=t,Ie.jsx=n,Ie.jsxs=n,Ie}var Wn;function oa(){return Wn||(Wn=1,zn.exports=la()),zn.exports}var ee=oa();const da=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ee.jsx(Ut,{variant:"warning",size:"small",children:ee.jsx(Er,{gap:"2",children:b.Children.map(e,t=>ee.jsx(De,{size:"small",children:t},lt(t)?t.key:t))})}),Se={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ve(Se);var Zn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Jn;function ua(){return Jn||(Jn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",l=0;l<arguments.length;l++){var d=arguments[l];d&&(s=a(s,r.call(this,d)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var d in s)t.call(s,d)&&s[d]&&(l=a(l,this&&this[d]||d));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Zn)),Zn.exports}var ga=ua();const de=ia(ga),fa="_borderbox_hicl4_1",ca="_error_hicl4_4",ma="_warning_hicl4_7",ya={borderbox:fa,error:ca,warning:ma};de.bind(ya);const va="_aksjonspunkt_kn1hn_1",ka="_erAksjonspunktApent_kn1hn_4",ba="_erIkkeGodkjentAvBeslutter_kn1hn_8",pa={aksjonspunkt:va,erAksjonspunktApent:ka,erIkkeGodkjentAvBeslutter:ba};de.bind(pa);ve(Se);ve(Se);const ha="_flexColumnNew_1vdv1_1",_a={flexColumnNew:ha};de.bind(_a);const Ea="_flexRow_1yf0y_1",wa="_spaceBetween_1yf0y_9",Aa="_alignItemsToBaseline_1yf0y_12",ja="_alignItemsToFlexEnd_1yf0y_15",xa="_justifyItemsToFlexEnd_1yf0y_18",Oa="_wrap_1yf0y_21",Sa={flexRow:Ea,spaceBetween:wa,alignItemsToBaseline:Aa,alignItemsToFlexEnd:ja,justifyItemsToFlexEnd:xa,wrap:Oa};de.bind(Sa);const Ta="_flexContainer_1dk1o_1",Ra="_fluid_1dk1o_6",qa="_fullHeight_1dk1o_9",Na="_flexWrap_1dk1o_17",Va={flexContainer:Ta,fluid:Ra,fullHeight:qa,flexWrap:Na};de.bind(Va);ve(Se);const Fa="_columnStyle_1f13u_1",Gr={columnStyle:Fa},Ba=de.bind(Gr),vn=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:ee.jsx("td",{className:Ba(Gr.columnStyle,t),colSpan:r?100:void 0,children:e}),Ia="_row_1lxv9_1",Pa="_harHover_1lxv9_4",Ma="_rowHeader_1lxv9_7",La="_grayHeader_1lxv9_12",Da="_rowContent_1lxv9_15",Ca="_selected_1lxv9_18",Ka="_bold_1lxv9_22",Ga="_dashedBottomBorder_1lxv9_25",Ha="_solidBottomBorder_1lxv9_28",Ua="_apLeftBorder_1lxv9_31",$a="_noBottomBorder_1lxv9_34",Hr={row:Ia,harHover:Pa,rowHeader:Ma,grayHeader:La,rowContent:Da,selected:Ca,bold:Ka,dashedBottomBorder:Ga,solidBottomBorder:Ha,apLeftBorder:Ua,noBottomBorder:$a},za=de.bind(Hr),Ya=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},Ur=e=>e.tagName==="TR"?e:Ur(e.parentElement),Qn=(e,t)=>{const n=Ur(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},Wa=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Qn(a,!0):a.key==="ArrowUp"?Qn(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Za=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Ja=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:l,noHover:d=!1,isSelected:g=!1,isBold:E=!1,isDashedBottomBorder:c=!1,isSolidBottomBorder:p=!1,isApLeftBorder:O=!1,className:S,useMultiselect:R=!1,hasNoBottomBorder:q=!1})=>ee.jsx("tr",{className:za(S,Hr.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!d,selected:g,harHover:!d,bold:E,dashedBottomBorder:c,solidBottomBorder:p,noBottomBorder:q,apLeftBorder:O}),onMouseDown:Ya(a,e,t),onKeyDown:Wa(R,s,e,t),onKeyUp:R?Za(s):void 0,tabIndex:0,children:l}),Qa="_table_2cnpl_1",Xa="_rowHover_2cnpl_25",es={table:Qa,rowHover:Xa},ns=de.bind(es),rs="EMPTY",ts=b.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},l)=>ee.jsxs("table",{ref:l,className:ns("table",{[n]:n,rowHover:!r}),children:[ee.jsx("thead",{children:ee.jsxs(Ja,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(d=>typeof d=="string"&&d.startsWith(rs)?ee.jsx(vn,{children:" "},d):ee.jsx(vn,{children:ee.jsx(en,{id:d})},d)),t.map(d=>ee.jsx(vn,{children:d},d.key))]})}),ee.jsx("tbody",{children:Array.isArray(s)?b.Children.map(s,d=>b.cloneElement(d,{noHover:r})):b.cloneElement(s,{noHover:r})})]}));ts.displayName="Table";const as="_hidden_1pb4f_1",ss="_active_1pb4f_8",is="_activeRow_1pb4f_15 _active_1pb4f_8",ls="_toggleIcon_1pb4f_19",os="_colTopPadding_1pb4f_22",ds={hidden:as,active:ss,activeRow:is,toggleIcon:ls,colTopPadding:os};de.bind(ds);ve(Se);const us="_fourPx_qda5k_1",gs="_eightPx_qda5k_4",fs="_sixteenPx_qda5k_7",cs="_twentyPx_qda5k_10",ms="_thirtyTwoPx_qda5k_13",ys="_fourtyPx_qda5k_16",vs={fourPx:us,eightPx:gs,sixteenPx:fs,twentyPx:cs,thirtyTwoPx:ms,fourtyPx:ys};de.bind(vs);ve(Se);const ks="_divider_1t980_1",bs="_dividerParagraf_1t980_8",ps="_leftPanel_1t980_11",hs="_rightPanel_1t980_14",_s={divider:ks,dividerParagraf:bs,leftPanel:ps,rightPanel:hs};de.bind(_s);const Es="_editedIcon_ulrjl_1",ws={editedIcon:Es},As=de.bind(ws),js=({className:e=""})=>ee.jsx("span",{"data-testid":"editedIcon",className:As("editedIcon",e),children:ee.jsx(Dt,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function xs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xn={exports:{}},Pe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er;function Os(){if(er)return Pe;er=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var d in a)d!=="key"&&(s[d]=a[d])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:l,ref:a!==void 0?a:null,props:s}}return Pe.Fragment=t,Pe.jsx=n,Pe.jsxs=n,Pe}var nr;function Ss(){return nr||(nr=1,Xn.exports=Os()),Xn.exports}var re=Ss();const $r=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),zr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message};var pn={exports:{}},Ts=pn.exports,rr;function Rs(){return rr||(rr=1,function(e,t){(function(n,r){e.exports=r()})(Ts,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,l=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,g={},E=function(v){return(v=+v)+(v>68?1900:2e3)},c=function(v){return function(w){this[v]=+w}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var k=w.match(/([+-]|\d\d)/g),_=60*k[1]+(+k[2]||0);return _===0?0:k[0]==="+"?-_:_}(v)}],O=function(v){var w=g[v];return w&&(w.indexOf?w:w.s.concat(w.f))},S=function(v,w){var k,_=g.meridiem;if(_){for(var V=1;V<=24;V+=1)if(v.indexOf(_(V,0,w))>-1){k=V>12;break}}else k=v===(w?"pm":"PM");return k},R={A:[d,function(v){this.afternoon=S(v,!1)}],a:[d,function(v){this.afternoon=S(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[s,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[l,c("seconds")],ss:[l,c("seconds")],m:[l,c("minutes")],mm:[l,c("minutes")],H:[l,c("hours")],h:[l,c("hours")],HH:[l,c("hours")],hh:[l,c("hours")],D:[l,c("day")],DD:[s,c("day")],Do:[d,function(v){var w=g.ordinal,k=v.match(/\d+/);if(this.day=k[0],w)for(var _=1;_<=31;_+=1)w(_).replace(/\[|\]/g,"")===v&&(this.day=_)}],w:[l,c("week")],ww:[s,c("week")],M:[l,c("month")],MM:[s,c("month")],MMM:[d,function(v){var w=O("months"),k=(O("monthsShort")||w.map(function(_){return _.slice(0,3)})).indexOf(v)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[d,function(v){var w=O("months").indexOf(v)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,c("year")],YY:[s,function(v){this.year=E(v)}],YYYY:[/\d{4}/,c("year")],Z:p,ZZ:p};function q(v){var w,k;w=v,k=g&&g.formats;for(var _=(v=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(I,G,A){var x=A&&A.toUpperCase();return G||k[A]||n[A]||k[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(B,P,L){return P||L.slice(1)})})).match(r),V=_.length,F=0;F<V;F+=1){var J=_[F],K=R[J],D=K&&K[0],M=K&&K[1];_[F]=M?{regex:D,parser:M}:J.replace(/^\[|\]$/g,"")}return function(I){for(var G={},A=0,x=0;A<V;A+=1){var B=_[A];if(typeof B=="string")x+=B.length;else{var P=B.regex,L=B.parser,z=I.slice(x),te=P.exec(z)[0];L.call(G,te),I=I.replace(te,"")}}return function(le){var ge=le.afternoon;if(ge!==void 0){var Q=le.hours;ge?Q<12&&(le.hours+=12):Q===12&&(le.hours=0),delete le.afternoon}}(G),G}}return function(v,w,k){k.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(E=v.parseTwoDigitYear);var _=w.prototype,V=_.parse;_.parse=function(F){var J=F.date,K=F.utc,D=F.args;this.$u=K;var M=D[1];if(typeof M=="string"){var I=D[2]===!0,G=D[3]===!0,A=I||G,x=D[2];G&&(x=D[2]),g=this.$locale(),!I&&x&&(g=k.Ls[x]),this.$d=function(z,te,le,ge){try{if(["x","X"].indexOf(te)>-1)return new Date((te==="X"?1e3:1)*z);var Q=q(te)(z),_e=Q.year,Ee=Q.month,Ge=Q.day,dn=Q.hours,Te=Q.minutes,He=Q.seconds,Re=Q.milliseconds,qe=Q.zone,Ue=Q.week,we=new Date,Ne=Ge||(_e||Ee?1:we.getDate()),Ae=_e||we.getFullYear(),pe=0;_e&&!Ee||(pe=Ee>0?Ee-1:we.getMonth());var Ve,$e=dn||0,ze=Te||0,i=He||0,o=Re||0;return qe?new Date(Date.UTC(Ae,pe,Ne,$e,ze,i,o+60*qe.offset*1e3)):le?new Date(Date.UTC(Ae,pe,Ne,$e,ze,i,o)):(Ve=new Date(Ae,pe,Ne,$e,ze,i,o),Ue&&(Ve=ge(Ve).week(Ue).toDate()),Ve)}catch{return new Date("")}}(J,M,K,k),this.init(),x&&x!==!0&&(this.$L=this.locale(x).$L),A&&J!=this.format(M)&&(this.$d=new Date("")),g={}}else if(M instanceof Array)for(var B=M.length,P=1;P<=B;P+=1){D[1]=M[P-1];var L=k.apply(this,D);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}P===B&&(this.$d=new Date(""))}else V.call(this,F)}}})}(pn)),pn.exports}var qs=Rs();const Ns=xs(qs),Vs="_readOnlyContainer_v0eco_1",Fs="_readOnlyContent_v0eco_4",Bs="_readOnlyContentCenter_v0eco_7",Is="_textarea_v0eco_11",Ps="_space_v0eco_15",We={readOnlyContainer:Vs,readOnlyContent:Fs,readOnlyContentCenter:Bs,textarea:Is,space:Ps},Ms=e=>e!=null&&e!=="",Yr=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>Ms(t)?re.jsxs("div",{className:We.readOnlyContainer,children:[e&&!a&&re.jsx(wn,{size:"small",children:e}),re.jsx("div",{className:r==="textarea"?We.textarea:"",children:re.jsxs(kr,{className:We.readOnlyContent,size:s,children:[t,n&&re.jsx(js,{className:We.space})]})})]}):null;An.extend(Ns);const tr=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:l=!1,onChange:d,disabled:g,className:E,hideLabel:c,isEdited:p,size:O})=>{const{formState:{errors:S}}=Ke(),{field:R}=Vr({name:e,rules:{validate:T.useMemo(()=>$r(r),[r])}});if(a){const w=n.map(_=>_.props).find(_=>_.value===R.value),k=w?w.children:void 0;return re.jsx(Yr,{value:k,label:t,hideLabel:c,isEdited:p,size:O})}const q=R.value||"",v=!n.map(w=>w.props.value).includes(q)&&q!=="";return v&&console.warn(`No corresponding option found for value '${q}'`),re.jsxs(Zt,{size:"small",className:E,error:zr(S,e),label:t,description:s,value:l&&g||v?"":R.value,disabled:g,onChange:w=>{d&&d(w),R.onChange(w)},hideLabel:c,children:[re.jsx("option",{style:{display:"none"}}),",",n]})},Ls="_textAreaFieldWithBadges_bdz0b_1",Ds="_etikettWrapper_bdz0b_4",ar={textAreaFieldWithBadges:Ls,etikettWrapper:Ds},Cs=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:l=p=>p,className:d,description:g,isEdited:E,...c})=>{const{formState:{errors:p}}=Ke(),{field:O}=Vr({name:e,rules:{validate:T.useMemo(()=>$r(s),[s])}});return n?re.jsx(Yr,{label:t,value:O.value,type:"textarea",isEdited:E,hideLabel:c.hideLabel}):re.jsxs("div",{className:a?ar.textAreaFieldWithBadges:null,children:[a&&re.jsx("div",{className:ar.etikettWrapper,children:a.map(({type:S,titleText:R})=>re.jsx(ea,{variant:S,size:"small",children:R},R))}),re.jsx(sa,{size:"small",label:t,description:g,className:d,autoComplete:"off",...O,onChange:S=>O.onChange(S.currentTarget.value!==""?l(S.currentTarget.value):null),value:O.value?O.value:"",error:zr(p,e),maxLength:r,...c})]})},Ks=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:l}=e;return T.useEffect(()=>()=>{a&&a(l())},[]),re.jsx(vt,{...e,children:re.jsx("form",{className:r,onSubmit:t?s(d=>t(d)):void 0,children:n})})};function Wr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hn={exports:{}},Gs=hn.exports,sr;function Hs(){return sr||(sr=1,function(e,t){(function(n,r){e.exports=r()})(Gs,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(hn)),hn.exports}var Us=Hs();const $s=Wr(Us);var _n={exports:{}},zs=_n.exports,ir;function Ys(){return ir||(ir=1,function(e,t){(function(n,r){e.exports=r()})(zs,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(_n)),_n.exports}var Ws=Ys();const Zs=Wr(Ws),Js="Dato må være før eller lik {limit}",Qs="Dato må være etter eller lik {limit}",Xs="Perioder kan ikke overlappe i tid",ei="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",ni="Dato må være lik {value}",ri="Dato må skrives slik: dd.mm.åååå",ti="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",ai="Tallet kan ikke inneholde mer enn to desimaler",si="Tallet kan ikke ha desimaler",ii="Feltet kan kun inneholde tall",li="Ugyldig fødselsnummer",oi="Feltet må være et fødselsnummer (11 siffer)",di="Ugyldig organisasjonsnummer.",ui="Ugyldig organisasjonsnummer eller fødselsnummer",gi="Startdato må være før eller lik sluttdato",fi="Periode er utenfor opptjeningsperioden",ci="Ugyldig saksnummer eller fødselsnummer",mi="Feltet inneholder ugyldige tegn: {text}",yi="Feltet inneholder en ugyldig verdi: {value}",vi="Feltet kan ikke inneholde mellomrom",ki="Feltet må fylles ut",bi="Du kan skrive maksimalt {length} tegn",pi="Du må skrive minst {length} tegn",hi="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",_i="Feltet må være mindre eller lik {length}",Ei="Feltet må være større eller lik {length}",wi="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Ai={DateNotBeforeOrEqual:Js,DateNotAfterOrEqual:Qs,DateRangesOverlapping:Xs,DateRangesOverlappingPeriodTypes:ei,DatesNotEqual:ni,InvalidDate:ri,InvalidDatesInPeriod:ti,InvalidDecimal:ai,InvalidInteger:si,InvalidNumber:ii,InvalidFodselsnr:li,InvalidFodselsnrFormat:oi,InvalidOrgnr:di,InvalidOrgnrOrFodselsnr:ui,InvalidPeriod:gi,InvalidPeriodRange:fi,InvalidSaksnrOrFodselsnrFormat:ci,InvalidText:mi,InvalidValue:yi,IllegalWhiteSpace:vi,IsRequired:ki,MaxLength:bi,MinLength:pi,MaxLengthOrFodselsnr:hi,MaxValue:_i,MinValue:Ei,SammeFodselsnrSomSoker:wi},{formatMessage:on}=ve(Ai),ji=e=>on({id:"InvalidText"},{text:e}),xi=()=>on({id:"IsRequired"}),Oi=e=>on({id:"MaxLength"},{length:e}),Si=e=>on({id:"MinLength"},{length:e}),Ti=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Ri=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Rn=e=>e==null||e.toString().trim().length===0;An.extend($s);An.extend(Zs);const kn=e=>Rn(e)?xi():void 0,qi=e=>t=>Rn(t)||t.toString().trim().length>=e?null:Si(e),Zr=e=>t=>Rn(t)||t.toString().trim().length<=e?null:Oi(e),Ni=e=>{if(!Ti.test(e)){const t=e.replace(Ri,"");return ji(t.replace(/[\t]/g,"Tabulatortegn"))}return null},Vi=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Fi="_ukjentAdresseMargins_4teno_1",Bi={ukjentAdresseMargins:Fi},Ii={"UkjentAdresse.Text":"Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital."},Pi=ve(Ii),Jr=()=>H.jsx(wr,{value:Pi,children:H.jsx("div",{className:Bi.ukjentAdresseMargins,children:H.jsx(da,{children:H.jsx("b",{children:H.jsx(en,{id:"UkjentAdresse.Text"})})})})});Jr.__docgenInfo={description:`UkjentAdresseMeldingIndex

Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
har ikke en registrert adresse.`,methods:[],displayName:"UkjentAdresseMeldingIndex"};const Mi="_buttonRow_jav4h_1",Li="_previewLink_jav4h_5",Di="_bredde_jav4h_9",lr={buttonRow:Mi,previewLink:Li,bredde:Di},Ci=Zr(4e3),Ki=Zr(1e4),Gi=qi(3),Hi=e=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.TBK_INNHENTE_OPPLYSNINGER?"Messages.DocumentList":"Messages.Fritekst",Ui=(e,t)=>e===ie.INNHENTE_OPPLYSNINGER||e===ie.FRITEKST||e===ie.KORRIGERT_VARSEL_OM_TILBAKEKREVING||e===ie.VARSEL_OM_TILBAKEKREVING||e===ie.TBK_INNHENTE_OPPLYSNINGER||e===ie.VARSEL_OM_REVURDERING&&t===ye.ANNET,$i=(e,t)=>t===xe.ENGANGSSTONAD?e.filter(n=>n.kode===ye.BARN_IKKE_REGISTRERT_FOLKEREGISTER||n.kode===ye.ANNET):t===xe.SVANGERSKAPSPENGER?e.filter(n=>n.kode!==ye.BARN_IKKE_REGISTRERT_FOLKEREGISTER&&n.kode!==ye.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT):e,zi=e=>{var n;const t={brevmalkode:((n=e.brevmaler[0])==null?void 0:n.kode)??void 0,fritekst:""};return e.ugunstAksjonspunkt?{...t,brevmalkode:ie.VARSEL_OM_REVURDERING}:{...t}},Yi=e=>{const t=e;return e.brevmalkode===ie.VARSEL_OM_REVURDERING&&t.arsakskode!==ye.ANNET&&(t.fritekst=" "),t},Qr=({behandling:e,previewCallback:t,submitCallback:n,revurderingVarslingArsak:r,fagsakYtelseType:a,kanVeilede:s,meldingFormData:l,setMeldingFormData:d,brukerManglerAdresse:g})=>{const E=ot(),c=qt({defaultValues:l||zi(e)}),p=c.watch("brevmalkode"),O=c.watch("fritekst"),S=c.watch("arsakskode"),R=T.useMemo(()=>$i(r,a),[]);if(!e.sprakkode)return null;const{formState:q}=c,v=_=>{p&&t(p,O,S),_.preventDefault()},w=dt(e.sprakkode),k=p===ie.VARSEL_OM_REVURDERING;return H.jsx(Ks,{formMethods:c,onSubmit:_=>n(Yi(_)),setDataOnUnmount:d,children:H.jsxs(Er,{gap:"4",children:[H.jsx(tr,{name:"brevmalkode",label:E.formatMessage({id:"Messages.Template"}),validate:[kn],selectValues:e.brevmaler.map(_=>H.jsx("option",{value:_.kode,disabled:!_.tilgjengelig,children:_.navn},_.kode)),className:lr.bredde}),k&&H.jsx(tr,{name:"arsakskode",label:E.formatMessage({id:"Messages.Årsak"}),validate:[kn],selectValues:R.map(_=>H.jsx("option",{value:_.kode,children:_.navn},_.kode)),className:lr.bredde}),Ui(p,S)&&H.jsx(Cs,{name:"fritekst",label:E.formatMessage({id:Hi(p)}),validate:[kn,k?Ki:Ci,Gi,Ni],maxLength:k?1e4:4e3,badges:[{type:"info",titleText:w}],parse:ut}),g&&H.jsx(Jr,{}),H.jsxs(gt,{justify:"space-between",children:[H.jsx(Qt,{href:"#",onClick:v,onKeyDown:_=>_.key==="Enter"?v(_):null,children:H.jsx(en,{id:"Messages.Preview"})}),H.jsx(br,{size:"small",variant:"primary",loading:q.isSubmitting,disabled:q.isSubmitting||s,onClick:Vi,children:H.jsx(en,{id:"Messages.Submit"})})]})]})})};Qr.__docgenInfo={description:`Messages

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""},meldingFormData:{required:!1,tsType:{name:"any"},description:""},setMeldingFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},brukerManglerAdresse:{required:!0,tsType:{name:"boolean"},description:""}}};const Wi=ve(ft),Xr=e=>H.jsx(wr,{value:Wi,children:H.jsx(Qr,{...e})});Xr.__docgenInfo={description:"",methods:[],displayName:"MeldingerSakIndex",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""}}};const Zi=e=>H.jsx("div",{style:{width:"600px",margin:"50px",padding:"20px",backgroundColor:"white"},children:H.jsx(e,{})}),Ji=[{kode:ie.INNHENTE_OPPLYSNINGER,navn:"Innhent dokumentasjon",tilgjengelig:!0},{kode:ie.VARSEL_OM_REVURDERING,navn:"Revurderingsdokumentasjon",tilgjengelig:!0}],Qi=[{kode:ye.BARN_IKKE_REGISTRERT_FOLKEREGISTER,navn:"Barn ikke registrert i folkeregisteret",kodeverk:"UGUNST"},{kode:ye.ANNET,navn:"Annet",kodeverk:"UGUNST"}],ll={title:"sak/sak-meldinger",component:Xr,decorators:[Zi],args:{kanVeilede:!1,revurderingVarslingArsak:Qi,behandling:{brevmaler:Ji,sprakkode:"NO"},previewCallback:fn("button-click"),submitCallback:fn("button-click"),setMeldingFormData:fn("button-click")}},Ze={args:{fagsakYtelseType:xe.FORELDREPENGER,brukerManglerAdresse:!1}},Je={args:{fagsakYtelseType:xe.SVANGERSKAPSPENGER,brukerManglerAdresse:!1}},Qe={args:{fagsakYtelseType:xe.FORELDREPENGER,brukerManglerAdresse:!0}};var or,dr,ur;Ze.parameters={...Ze.parameters,docs:{...(or=Ze.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false
  }
}`,...(ur=(dr=Ze.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var gr,fr,cr;Je.parameters={...Je.parameters,docs:{...(gr=Je.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false
  }
}`,...(cr=(fr=Je.parameters)==null?void 0:fr.docs)==null?void 0:cr.source}}};var mr,yr,vr;Qe.parameters={...Qe.parameters,docs:{...(mr=Qe.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true
  }
}`,...(vr=(yr=Qe.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};const ol=["Default","ForSvangerskapspenger","BrukerManglerAdresse"];export{Qe as BrukerManglerAdresse,Ze as Default,Je as ForSvangerskapspenger,ol as __namedExportsOrder,ll as default};
