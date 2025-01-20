var ul=Object.defineProperty;var ml=(e,t,n)=>t in e?ul(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Gn=(e,t,n)=>ml(e,typeof t!="symbol"?t+"":t,n);import{v as gl}from"./v4-CtRu48qb.js";import{j as i}from"./jsx-runtime-DjgmBYnU.js";import{_ as fs,s as vs,u as de,d as pl,P as Ge,e as cl,f as Ze,g as Ur,h as fl,i as vl,l as kl,j as yl,k as cn,o as bl,p as fn,q as hl,r as Rl,t as kt,S as xn,v as El,x as Oi,I as Fl,y as Ht,z as fr,C as Rn,D as fa,E as ks,F as Al,G as Xr,J as ir,K as U,N as Vn,O as _l,Q as Ce,B as we,R as Ne,T as or,U as Ti,W as wi,X as yt,Y as jl,Z as Ol,$ as Tl,a0 as wl,a1 as Nl,a2 as Pl,M as En,b as be,a3 as ql,a4 as Sl,a5 as ys,a6 as Il,a7 as Ni,a8 as Fn,a9 as Pi,aa as xl,ab as yr,ac as Dn,ad as qi,ae as Si,af as Vl,ag as Dl,ah as Ml,ai as Ll,aj as Cl,ak as wa,al as Ii,am as xi,an as tt,ao as Yt,ap as Un,aq as Na,ar as Pa,as as qa,at as $l,au as Vi,n as ie,A as bt,V as ne,av as Kl,H as Be,aw as Ee,ax as Tr,ay as Bl,az as Gl,aA as Ul,aB as Hl,c as me,aC as Yl,L as zl,aD as zt}from"./nb_NO-oTqy7fYa.js";import{r as v,R as p}from"./index-D7mKeUb6.js";import{d as Y}from"./dayjs.min-Boho2IT3.js";import{g as Di}from"./index-DjXIRphR.js";import{M as Mi}from"./index-BdR6VAUc.js";const{addons:Wl}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Jl}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:bs}=__STORYBOOK_MODULE_GLOBAL__;var Xl="storybook/actions",Zl=`${Xl}/action-event`,Ql={depth:10,clearOnStoryChange:!0,limit:50},Li=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:Li(n,t)},ed=e=>!!(typeof e=="object"&&e&&Li(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),rd=e=>{if(ed(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(r.constructor.prototype)}),t}return e},nd=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?gl():Date.now().toString(36)+Math.random().toString(36).substring(2);function Gv(e,t={}){let n={...Ql,...t},r=function(...a){var u,f;if(t.implicit){let k=(u="__STORYBOOK_PREVIEW__"in bs?bs.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(y=>y.phase==="playing"||y.phase==="rendering");if(k){let y=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),b=new Jl({phase:k.phase,name:e,deprecated:y});if(y)console.warn(b);else throw b}}let s=Wl.getChannel(),o=nd(),l=5,d=a.map(rd),m=a.length>1?d:d[0],g={id:o,count:0,data:{name:e,args:m},options:{...n,maxDepth:l+(n.depth||3),allowFunction:n.allowFunction||!1}};s.emit(Zl,g)};return r.isAction=!0,r.implicit=t.implicit,r}var ht=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(ht||{});ht.BRUKERS_ANDEL;ht.FRILANS;ht.EGEN_NÆRING;var vr=(e=>(e.FISKER="FISKER",e.ARBEIDSTAKER="ARBEIDSTAKER",e.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",e.SJOMANN="SJØMANN",e.JORDBRUKER="JORDBRUKER",e.DAGPENGER="DAGPENGER",e.INAKTIV="INAKTIV",e.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",e.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",e.FRILANSER="FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",e.DAGMAMMA="DAGMAMMA",e.ANNET="ANNET",e))(vr||{}),An=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(An||{}),Ci=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Ci||{}),nr=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(nr||{}),Rt=(e=>(e.MOR="MOR",e.FAR="FAR",e.MEDMOR="MEDMOR",e.MEDFAR="MEDFAR",e.TREDJE_PART="TREDJE_PART",e))(Rt||{}),Tn=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(Tn||{}),Le=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(Le||{}),Et=(e=>(e.NORGE="NOR",e))(Et||{}),ar=(e=>(e.FISKE="FISKE",e.FRILANSER="FRILANSER",e.DAGMAMMA="DAGMAMMA",e.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",e.ANNEN="ANNEN",e))(ar||{}),_n=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(_n||{}),Pn=(e=>(e.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",e.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",e.ALENEOMSORG="ALENEOMSORG",e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e.UDEFINERT="-",e))(Pn||{}),jr=(e=>(e.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",e.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",e.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",e))(jr||{}),mr=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(mr||{});function td(e,t){var n=e.values,r=fs(e,["values"]),a=t.values,s=fs(t,["values"]);return vs(a,n)&&vs(r,s)}function $i(e){var t=de(),n=t.formatMessage,r=t.textComponent,a=r===void 0?v.Fragment:r,s=e.id,o=e.description,l=e.defaultMessage,d=e.values,m=e.children,g=e.tagName,u=g===void 0?a:g,f=e.ignoreTag,k={id:s,description:o,defaultMessage:l},y=n(k,d,{ignoreTag:f});return typeof m=="function"?m(Array.isArray(y)?y:[y]):u?v.createElement(u,null,v.Children.toArray(y)):v.createElement(v.Fragment,null,y)}$i.displayName="FormattedMessage";var S=v.memo($i,td);S.displayName="MemoizedFormattedMessage";const Uv=e=>{const t=pl({locale:"nb-NO",messages:e},cl());return r=>i.jsx(Ge,{value:t,children:r()})};function Ki(e,t=166,n=!1){let r;function a(...s){const o=()=>{r=void 0,e.apply(this,s)};!r&&n&&o(),clearTimeout(r),r=setTimeout(o,t)}return a.clear=()=>{clearTimeout(r)},a}const zr=globalThis!=null&&globalThis.document?v.useLayoutEffect:()=>{};function qn(e,t=[]){const n=v.useRef(e);return v.useEffect(()=>{n.current=e}),v.useCallback((...r)=>{var a;return(a=n.current)===null||a===void 0?void 0:a.call(n,...r)},t)}function ad({value:e,defaultValue:t,onChange:n}){const r=qn(n),[a,s]=v.useState(t),o=e!==void 0,l=o?e:a,d=qn(m=>{const u=typeof m=="function"?m(l):m;o||s(u),r(u)},[o,r,l]);return[l,d]}var sd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const id=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=sd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",d:"M12.75 5a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z"}))});var od=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bi=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=od(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var ld=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gi=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=ld(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var dd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ud=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=dd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",d:"M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06z"}))});var md=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const gd=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=md(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var pd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const cd=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=pd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var fd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ft=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=fd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var vd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ui=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=vd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var kd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Hi=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=kd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var yd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const bd=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=yd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var hd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const at=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=hd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Rd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const At=v.forwardRef((e,t)=>{var{title:n,titleId:r}=e,a=Rd(e,["title","titleId"]);let s=Ze();return s=n?r||"title-"+s:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),n?v.createElement("title",{id:s},n):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 6.25a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.876-11.384h.805a.75.75 0 0 0 0-1.5h-2.75V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25zm5.5-1.5c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm-3.19 3 .867 11.27c.01.13.118.23.249.23h8.148c.13 0 .24-.1.25-.23l.866-11.27zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))}),Ed=typeof window<"u"&&window.matchMedia===void 0,Fd=(e,t)=>{const[n,r]=v.useState(t);return v.useEffect(()=>{if(Ed)return;const a=window.matchMedia(e);r(a.matches);const s=o=>{r(o.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),n},Ad={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},_d={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},jd={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Od={date:Ur({formats:Ad,defaultWidth:"full"}),time:Ur({formats:_d,defaultWidth:"full"}),dateTime:Ur({formats:jd,defaultWidth:"full"})},Yi={code:"en-GB",formatDistance:fl,formatLong:Od,formatRelative:vl,localize:kl,match:yl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Td={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},wd=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Nd=(e,t,n)=>{let r;const a=Td[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t<13?wd[t]:String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+r:r+" sidan":r},Pd={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},qd={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Sd={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Id={date:Ur({formats:Pd,defaultWidth:"full"}),time:Ur({formats:qd,defaultWidth:"full"}),dateTime:Ur({formats:Sd,defaultWidth:"full"})},xd={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Vd=(e,t,n,r)=>xd[e],Dd={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Md={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ld={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Cd={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},$d={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Kd=(e,t)=>Number(e)+".",Bd={ordinalNumber:Kd,era:cn({values:Dd,defaultWidth:"wide"}),quarter:cn({values:Md,defaultWidth:"wide",argumentCallback:e=>e-1}),month:cn({values:Ld,defaultWidth:"wide"}),day:cn({values:Cd,defaultWidth:"wide"}),dayPeriod:cn({values:$d,defaultWidth:"wide"})},Gd=/^(\d+)\.?/i,Ud=/\d+/i,Hd={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Yd={any:[/^f/i,/^e/i]},zd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Wd={any:[/1/i,/2/i,/3/i,/4/i]},Jd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Xd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zd={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},Qd={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},eu={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},ru={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},nu={ordinalNumber:bl({matchPattern:Gd,parsePattern:Ud,valueCallback:e=>parseInt(e,10)}),era:fn({matchPatterns:Hd,defaultMatchWidth:"wide",parsePatterns:Yd,defaultParseWidth:"any"}),quarter:fn({matchPatterns:zd,defaultMatchWidth:"wide",parsePatterns:Wd,defaultParseWidth:"any",valueCallback:e=>e+1}),month:fn({matchPatterns:Jd,defaultMatchWidth:"wide",parsePatterns:Xd,defaultParseWidth:"any"}),day:fn({matchPatterns:Zd,defaultMatchWidth:"wide",parsePatterns:Qd,defaultParseWidth:"any"}),dayPeriod:fn({matchPatterns:eu,defaultMatchWidth:"any",parsePatterns:ru,defaultParseWidth:"any"})},zi={code:"nn",formatDistance:Nd,formatLong:Id,formatRelative:Vd,localize:Bd,match:nu,options:{weekStartsOn:1,firstWeekContainsDate:4}};function hs(e){return e.sort((t,n)=>{const r=t.compareDocumentPosition(n);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const tu=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Rs(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function Es(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}const Wt=e=>e;class au{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return tu(t)?this.registerNode(t):n=>{this.registerNode(n,t)}},this.unregister=t=>{this.descendants.delete(t);const n=hs(Array.from(this.descendants.keys()));this.assignIndex(n)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(n=>{const r=t.indexOf(n.node);n.index=r,n.node.dataset.index=n.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((n,r)=>n.index-r.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var n,r;return t&&(r=(n=this.descendants.get(t))===null||n===void 0?void 0:n.index)!==null&&r!==void 0?r:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(t)),this.next=(t,n=!0)=>{const r=Rs(t,this.count(),n);return this.item(r)},this.nextEnabled=(t,n=!0)=>{const r=this.item(t);if(!r)return;const a=this.enabledIndexOf(r.node),s=Rs(a,this.enabledCount(),n);return this.enabledItem(s)},this.prev=(t,n=!0)=>{const r=Es(t,this.count()-1,n);return this.item(r)},this.prevEnabled=(t,n=!0)=>{const r=this.item(t);if(!r)return;const a=this.enabledIndexOf(r.node),s=Es(a,this.enabledCount()-1,n);return this.enabledItem(s)},this.registerNode=(t,n)=>{if(!t)return;const r=this.descendants.get(t);if(r){this.descendants.set(t,Object.assign({index:r.index,node:t},n));return}const a=Array.from(this.descendants.keys()).concat(t),s=hs(a);n!=null&&n.disabled&&(n.disabled=!!n.disabled);const o=Object.assign({node:t,index:-1},n);this.descendants.set(t,o),this.assignIndex(s)}}}function su(){const[e,t]=hl({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),n=Wt(s=>p.createElement(e,Object.assign({},s.value),s.children));function r(s){const o=t(),[l,d]=v.useState(-1),m=v.useRef(null);zr(()=>()=>{m.current&&o.unregister(m.current)},[]),zr(()=>{if(!m.current)return;const u=Number(m.current.dataset.index);l!==u&&!Number.isNaN(u)&&d(u)});const g=Wt(s?o.register(s):o.register);return{descendants:o,index:l,enabledIndex:o.enabledIndexOf(m.current),register:Rl([g,m])}}function a(){return v.useRef(new au).current}return[n,t,a,r]}function iu(e,t=globalThis==null?void 0:globalThis.document){const n=qn(e);v.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,!0),()=>t.removeEventListener("keydown",r,!0)},[n,t])}const Wi={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Ji(e,t,n,{discrete:r}={discrete:!1}){if(!t)return;const a=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});a.addEventListener(e,t,{once:!0}),r&&a?Mi.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function ou(e,t=globalThis==null?void 0:globalThis.document){const n=qn(e),r=v.useRef(!1);return v.useEffect(()=>{const a=s=>{if(s.target&&!r.current){const o={originalEvent:s};Ji(Wi.FOCUS_OUTSIDE,n,o)}};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>{r.current=!0},onBlurCapture:()=>{r.current=!1}}}function lu(e,t=globalThis==null?void 0:globalThis.document){const n=qn(e),r=v.useRef(!1),a=v.useRef(()=>{});return v.useEffect(()=>{const s=l=>{function d(){Ji(Wi.POINTER_DOWN_OUTSIDE,n,{originalEvent:l},{discrete:!0})}l.target&&!r.current?l.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=d,t.addEventListener("click",a.current,{once:!0})):d():t.removeEventListener("click",a.current),r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>{r.current=!0}}}var du=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const[uu,mu,gu,pu]=su();let Lr=0,Fs;const cu=v.forwardRef((e,t)=>mu(!1)?p.createElement(As,Object.assign({ref:t},e)):p.createElement(fu,null,p.createElement(As,Object.assign({ref:t},e)))),fu=({children:e})=>{const t=gu();return p.createElement(uu,{value:t},e)},As=v.forwardRef((e,t)=>{var n,{children:r,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:l,onInteractOutside:d,onDismiss:m,safeZone:g,disableOutsidePointerEvents:u=!1,enabled:f=!0}=e,k=du(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=v.useState({}),{register:b,index:h,descendants:A}=pu({disableOutsidePointerEvents:u,disabled:!f,forceUpdate:()=>y({})}),[E,w]=v.useState(null),O=kt(w,b,t),D=(n=E==null?void 0:E.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,j=v.useRef(!1),_=v.useRef(!1),q=(()=>{let T=-1;return A.enabledValues().forEach((H,z)=>{H.disableOutsidePointerEvents&&(T=z)}),{isPointerEventsEnabled:h>=T,isBodyPointerEventsDisabled:Lr>0,pointerStyle:h>=T&&Lr>0?"auto":void 0}})();function L(T){var B,H;if(!(g!=null&&g.anchor)&&!(g!=null&&g.dismissable)||!f)return;T.defaultPrevented||(j.current=!0,T.detail.originalEvent.type==="pointerdown"&&(_.current=!0));const z=T.target;T.detail.originalEvent.type==="pointerdown"?(!((B=g==null?void 0:g.anchor)===null||B===void 0)&&B.contains(z)||z===(g==null?void 0:g.anchor))&&T.preventDefault():!(z instanceof HTMLElement&&![g==null?void 0:g.anchor,g==null?void 0:g.dismissable].some(X=>X==null?void 0:X.contains(z))&&!z.contains((H=g==null?void 0:g.dismissable)!==null&&H!==void 0?H:null))&&T.preventDefault(),T.detail.originalEvent.type==="focusin"&&_.current&&T.preventDefault(),_.current=!1,j.current=!1}const C=lu(T=>{!q.isPointerEventsEnabled||!f||(o==null||o(T),d==null||d(T),g&&L(T),!T.defaultPrevented&&m&&m())},D),K=ou(T=>{f&&(l==null||l(T),d==null||d(T),g&&L(T),!T.defaultPrevented&&m&&m())},D);iu(T=>{!f||!(h===A.enabledCount()-1)||(s==null||s(T),!T.defaultPrevented&&m&&(T.preventDefault(),m()))},D),v.useEffect(()=>{if(!(!E||!f||!u))return Lr===0&&(Fs=D.body.style.pointerEvents,D.body.style.pointerEvents="none"),Lr++,()=>{Lr===1&&(D.body.style.pointerEvents=Fs),Lr--}},[E,D,u,A,f]),v.useEffect(()=>()=>A.values().forEach(T=>T.forceUpdate()),[A,E]);const x=a?xn:"div";return p.createElement(x,Object.assign({ref:O},k,{onFocusCapture:K.onFocusCapture,onBlurCapture:K.onBlurCapture,onPointerDownCapture:C.onPointerDownCapture,style:Object.assign({pointerEvents:q.pointerStyle},k.style)}),r)});function Wr(e){const t=El(e).getDay();return t===0||t===6}const vn=(e,t,n,r)=>Oi(e,r??Fl,{locale:t}),vu=(e,t,n)=>{const r=[];if(Ht(e,t)){const a=fr(e);for(let s=e.getMonth();s<=t.getMonth();s++)r.push(Rn(a,s))}else if(Ht(n,t)){const a=fr(new Date);for(let s=0;s<=t.getMonth();s++)r.push(Rn(a,s))}else if(Ht(n,e)){const a=fr(e);for(let s=a.getMonth();s<=11;s++)r.push(Rn(a,s))}else{const a=fr(new Date);for(let s=0;s<=11;s++)r.push(Rn(a,s))}return r.map(a=>a.getMonth()).includes(n.getMonth())||r.push(n),r.sort((a,s)=>a.getMonth()-s.getMonth()),r},ku=(e,t,n)=>{const r=[],a=e.getFullYear(),s=t.getFullYear();for(let o=a;o<=s;o++)r.push(fa(ks(new Date),o));return(a>n||s<n)&&r.push(fa(ks(new Date),n)),r.sort((o,l)=>o.getFullYear()-l.getFullYear()),r},Xi={global:{dateLocale:Yi,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},Alert:{closeAlert:"Close alert",closeMessage:"Close message",error:"Error",info:"Information",success:"Success",warning:"Warning"},Chips:{Removable:{labelSuffix:"delete"}},Combobox:{addOption:"Add",loading:"Searching…",maxSelected:"{selected} of max {limit} are selected."},CopyButton:{title:"Copy",activeText:"Copied!"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"},ErrorSummary:{heading:"You must correct the following errors before you can continue:"},FileUpload:{dropzone:{button:"Choose file",buttonMultiple:"Choose files",dragAndDrop:"Drag and drop file here",dragAndDropMultiple:"Drag and drop files here",drop:"Drop",or:"or",disabled:"File upload disabled",disabledFilelimit:"You cannot upload more files"},item:{retryButtonTitle:"Try uploading the file again",deleteButtonTitle:"Delete file",uploading:"Uploading…",downloading:"Downloading…"}},FormProgress:{step:"Step {activeStep} of {totalSteps}",showAllSteps:"Show all steps",hideAllSteps:"Hide all steps"},FormSummary:{editAnswer:"Edit answer"},GuidePanel:{illustrationLabel:"Illustration of advisor"},HelpText:{title:"More information"},Loader:{title:"Waiting…"},Pagination:{previous:"Previous",next:"Next"},ProgressBar:{progress:"{current} of {max}",progressUnknown:"Progress is unknown, estimated time is {seconds} seconds."},Search:{clear:"Clear field",search:"Search"},Textarea:{maxLength:"Text area with a {maxLength} character limit.",charsTooMany:"{chars} characters too many",charsLeft:"{chars} characters left"},Timeline:{dateFormat:"yyyy-MM-dd",dayFormat:"d MMM",monthFormat:"MMM yyyy",yearFormat:"yyyy",Row:{noPeriods:"No periods",period:"{start} to {end}"},Period:{success:"Success",warning:"Warning",danger:"Danger",info:"Info",neutral:"Neutral",period:"{status} from {start} to {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom timeline {start} to {end}",reset:"Reset zoom"}}},Zi={global:{dateLocale:zi,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Åtvaring"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"},ErrorSummary:{heading:"Du må rette desse feila før du kan halde fram:"},FileUpload:{dropzone:{button:"Vel fil",buttonMultiple:"Vel filer",dragAndDrop:"Dra og slepp fila her",dragAndDropMultiple:"Dra og slepp filer her",drop:"Slepp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikkje laste opp fleire filer"},item:{retryButtonTitle:"Prøv å laste opp fila på nytt",deleteButtonTitle:"Slett fila",uploading:"Lastar opp…",downloading:"Lastar ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av rettleiar"},HelpText:{title:"Meir informasjon"},Loader:{title:"Ventar…"},Pagination:{previous:"Førre",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Framdrift kan ikkje bereknast, antatt tid er {seconds} sekund."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} teikn.",charsTooMany:"{chars} teikn for mykje",charsLeft:"{chars} teikn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen periodar",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Åtvaring",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} frå {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslina {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Sa=(e="nb")=>{switch(e){case"nn":return zi;case"en":return Yi;default:return Al}},Qi=e=>{switch(e){case"nn":return Zi.DatePicker;case"en":case"en-GB":return Xi.DatePicker;default:return}},yu=e=>{switch(e){case"nn":return Zi.global;case"en":case"en-GB":return Xi.global;default:return}},_t=()=>p.createElement(Hi,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),Ia=()=>p.createElement(Hi,{title:Xr("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Sn=v.createContext(null),Sr=(e,t)=>{var n,r,a;const{size:s,error:o,errorId:l}=e,d=v.useContext(Sn),m=ir(),g=(n=e.id)!==null&&n!==void 0?n:`${t}-${m}`,u=l??`${t}-error-${m}`,f=`${t}-description-${m}`,k=(d==null?void 0:d.disabled)||e.disabled,y=((d==null?void 0:d.readOnly)||e.readOnly)&&!k||void 0,b=!k&&!y&&!!(o||d!=null&&d.error),h=!k&&!y&&!!o&&typeof o!="boolean",A=Object.assign({},b?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:h,hasError:b,errorId:u,inputDescriptionId:f,size:(r=s??(d==null?void 0:d.size))!==null&&r!==void 0?r:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:g},A),{"aria-describedby":U(e["aria-describedby"],{[f]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[u]:h,[(a=d==null?void 0:d.errorId)!==null&&a!==void 0?a:""]:b&&!!(d!=null&&d.error)})||void 0,disabled:k})}};var bu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const eo=v.forwardRef((e,t)=>{const{className:n,hideLabel:r=!1,label:a,description:s,variant:o="datepicker",setAnchorRef:l}=e,d=bu(e,["className","hideLabel","label","description","variant","setAnchorRef"]),m=v.useRef(null),g=Vn().translate,u=o==="datepicker",f={prefix:u?"datepicker-input":"monthpicker-input",iconTitle:{open:u?"openDatePicker":"openMonthPicker",close:u?"closeDatePicker":"closeMonthPicker"}},k=_l(),{inputProps:y,size:b="medium",inputDescriptionId:h,errorId:A,showErrorMsg:E,hasError:w,readOnly:O}=Sr(e,f.prefix);return p.createElement("div",{className:U(n,"navds-form-field",`navds-form-field--${b}`,"navds-date__field",{"navds-text-field--error":w,"navds-date__field--error":w,"navds-form-field--disabled":!!y.disabled,"navds-text-field--disabled":!!y.disabled,"navds-form-field--readonly":O,"navds-text-field--readonly":O,"navds-date__field--readonly":O})},p.createElement(Ce,{htmlFor:y.id,size:b,className:U("navds-form-field__label",{"navds-sr-only":r})},O&&p.createElement(_t,null),a),!!s&&p.createElement(we,{as:"div",className:U("navds-form-field__description",{"navds-sr-only":r}),id:h,size:b},s),p.createElement("div",{className:"navds-date__field-wrapper"},p.createElement("input",Object.assign({ref:t},Ne(d,["error","errorId","size"]),y,{autoComplete:"off","aria-controls":k!=null&&k.open?k.ariaId:void 0,readOnly:O,className:U("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${b}`),size:u?11:14})),p.createElement("button",{disabled:y.disabled||O,tabIndex:O||k!=null&&k.open?-1:0,onClick:()=>{k==null||k.onOpen(),l==null||l(m.current)},type:"button",className:"navds-date__field-button",ref:m},p.createElement(cd,{title:g(f.iconTitle[k!=null&&k.open?"close":"open"])}))),p.createElement("div",{className:"navds-form-field__error",id:A,"aria-relevant":"additions removals","aria-live":"polite"},E&&p.createElement(or,{size:b,showIcon:!0},e.error)))}),hu=v.forwardRef((e,t)=>p.createElement(eo,Object.assign({},e,{ref:t})));v.forwardRef((e,t)=>p.createElement(eo,Object.assign({},e,{variant:"monthpicker",ref:t})));var Ru=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Eu=v.forwardRef((e,t)=>{var{className:n}=e,r=Ru(e,["className"]);return p.createElement("div",Object.assign({},r,{ref:t,className:U("navds-popover__content",n)}))});var Fu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ro=v.forwardRef((e,t)=>{var{className:n,children:r,anchorEl:a,arrow:s=!0,open:o,onClose:l,placement:d="top",offset:m,strategy:g,flip:u=!0}=e,f=Fu(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const k=v.useRef(null),y=Ti(!1)!==void 0,b=v.useContext(wi)!==null,h=g??(y?"fixed":"absolute"),A=b?!1:u,E=yt(!1),{update:w,refs:O,placement:D,middlewareData:{arrow:{x:j,y:_}={}},floatingStyles:q}=jl({strategy:h,placement:d,open:o,middleware:[Tl(m??(E?8:s?16:4)),A&&wl({padding:5,fallbackPlacements:["bottom","top"]}),Nl({padding:12}),Pl({element:k,padding:8})]});zr(()=>{O.setReference(a)},[a]);const L=kt(O.setFloating,t);zr(()=>{if(!O.reference.current||!O.floating.current||!o)return;const K=Ol(O.reference.current,O.floating.current,w);return()=>K()},[O.floating,O.reference,w,o,a]);const C={top:"bottom",right:"left",bottom:"top",left:"right"}[D.split("-")[0]];return p.createElement(cu,{asChild:!0,safeZone:{anchor:a,dismissable:O.floating.current},onDismiss:()=>o&&(l==null?void 0:l()),enabled:o},p.createElement("div",Object.assign({ref:L},f,{className:U("navds-popover",n,{"navds-popover--hidden":!o||!a}),style:Object.assign(Object.assign({},f.style),q),"data-placement":D,"aria-hidden":!o||!a}),r,s&&!E&&p.createElement("div",{ref:K=>{k.current=K},style:Object.assign(Object.assign(Object.assign({},j!=null?{left:j}:{}),_!=null?{top:_}:{}),C?{[C]:"-0.5rem"}:{}),className:"navds-popover__arrow"})))});ro.Content=Eu;const Au={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},_u=({open:e,children:t,onClose:n,anchor:r,locale:a,translate:s,variant:o,popoverProps:l})=>{const d=Xr("global",yu(a)),m=v.useRef(null),g=Ti(!1)!==void 0;return Fd("screen and (min-width: 768px)",!0)&&!g?p.createElement(ro,Object.assign({arrow:!1,anchorEl:r,open:e,onClose:n,placement:"bottom-start",role:"dialog",className:U("navds-date__popover",{"navds-date":o==="month"}),flip:!1},l),t):p.createElement(En,{ref:m,open:e,onClose:f=>{f.stopPropagation(),n()},"aria-label":s(Au[o]),className:U("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":o==="month"}),closeOnBackdropClick:!0},p.createElement("div",{className:"navds-date__modal-body"},t,p.createElement(be,{variant:"tertiary",onClick:()=>{var f;return(f=m==null?void 0:m.current)===null||f===void 0?void 0:f.close()},size:"small",type:"button"},d("close"))))};var ju=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const no=v.forwardRef((e,t)=>{var{as:n="div",className:r,above:a,below:s,variant:o,asChild:l}=e,d=ju(e,["as","className","above","below","variant","asChild"]);const m=o==="show"?a:s,g=o==="show"?s:a,u=l?xn:n;return p.createElement(u,Object.assign({},d,{ref:t,className:U("navds-responsive",r,{[`navds-responsive__above--${m}`]:m,[`navds-responsive__below--${g}`]:g})}))}),to=v.forwardRef((e,t)=>p.createElement(no,Object.assign({},e,{ref:t,variant:"hide"}))),Ou=v.forwardRef((e,t)=>p.createElement(no,Object.assign({},e,{ref:t,variant:"show"})));function Tu(e,t){const n=Object.assign(Object.assign({},t),{weekStartsOn:1}),r=_s(fr(e),ql(e),n);if(n!=null&&n.useFixedWeeks){const a=Sl(e,n);if(a<6){const s=r[r.length-1],o=s.dates[s.dates.length-1],l=ys(o,6-a),d=_s(ys(o,1),l,n);r.push(...d)}}return r}function _s(e,t,n){const r=Il(t,n),a=Ni(e,n),s=Fn(r,a),o=[];for(let d=0;d<=s;d++)o.push(Pi(a,d));return o.reduce((d,m)=>{const g=xl(m,n),u=d.find(f=>f.weekNumber===g);return u?(u.dates.push(m),d):(d.push({weekNumber:g,dates:[m]}),d)},[])}function jt({number:e,dates:t}){const{onWeekNumberClick:n,styles:r,classNames:a}=yr(),s=yt(!1),o=Vn().translate;return n?s?p.createElement(be,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":o("selectWeekNumber",{week:e}),style:r.weeknumber,className:"navds-date__weeknumber",onClick:l=>{n(e,t,l)},icon:p.createElement("span",{className:"navds-date__weeknumber-number"},e)}):p.createElement(qi,{name:"week-number","aria-label":o("selectWeekNumber",{week:e}),style:r.weeknumber,className:a.weeknumber,onClick:l=>{n(e,t,l)}},e):p.createElement(Dn,{as:"span",textColor:"subtle",className:a.weeknumber,style:r.weeknumber,"aria-label":o("weekNumber",{week:e})},e)}const ao=({displayMonth:e})=>{const{locale:t,fixedWeeks:n,onWeekNumberClick:r}=yr(),a=Vn().translate,s=ir();if(!r)return null;const o=Tu(e,{useFixedWeeks:!!n,locale:t});return p.createElement(Ou,{below:"sm",asChild:!0},p.createElement("table",{className:"rdp-table",role:"grid"},p.createElement("tbody",{className:"rdp-tbody"},p.createElement("tr",{className:"rdp-row navds-date__week-row"},p.createElement(Dn,{as:"th",weight:"semibold",className:"rdp-cell navds-date__week-cell"},p.createElement("span",{className:"navds-date__week-wrapper",id:s},`${a("week")}:`)),o.map(l=>p.createElement("td",{key:l.weekNumber,className:"rdp-cell navds-date__week-cell"},p.createElement("span",{className:"navds-date__week-wrapper"},p.createElement(jt,{number:l.weekNumber,dates:l.dates}))))))))},so=({displayMonth:e,id:t})=>{const{goToMonth:n,nextMonth:r,previousMonth:a}=Si(),{formatters:{formatCaption:s},locale:o}=yr(),l=Vn().translate;return p.createElement(p.Fragment,null,p.createElement("div",{className:"navds-date__caption"},p.createElement(be,{variant:"tertiary",disabled:!a,onClick:()=>a&&n(a),icon:p.createElement(Bi,{title:l("goToPreviousMonth")}),className:"navds-date__caption-button",type:"button"}),p.createElement(Ce,{as:"span","aria-live":"polite","aria-atomic":"true",id:t,className:"navds-date__caption-label"},s(e,{locale:o})),p.createElement(be,{icon:p.createElement(Gi,{title:l("goToNextMonth")}),onClick:()=>r&&n(r),disabled:!r,variant:"tertiary",className:"navds-date__caption-button",type:"button"})),p.createElement(ao,{displayMonth:e}))};var wu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const va=v.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:l,readOnly:d}=Sr(e,"select"),{children:m,label:g,className:u,description:f,htmlSize:k,hideLabel:y=!1,style:b}=e,h=wu(e,["children","label","className","description","htmlSize","hideLabel","style"]),A={onMouseDown:E=>{d&&(E.preventDefault(),E.target.focus())},onKeyDown:E=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(E.key)&&E.preventDefault()}};return p.createElement("div",{className:U(u,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":d,"navds-select--error":s,"navds-select--readonly":d})},p.createElement(Ce,{htmlFor:n.id,size:o,className:U("navds-form-field__label",{"navds-sr-only":y})},d&&p.createElement(Ia,null),g),!!f&&p.createElement(we,{className:U("navds-form-field__description",{"navds-sr-only":y}),id:l,size:o,as:"div"},f),p.createElement("div",{className:"navds-select__container",style:b},p.createElement("select",Object.assign({},Ne(h,["error","errorId","size","readOnly"]),n,A,{ref:t,className:U("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:k}),m),p.createElement(Ft,{className:"navds-select__chevron","aria-hidden":!0})),p.createElement("div",{className:"navds-form-field__error",id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&p.createElement(or,{size:o,showIcon:!0},e.error)))}),io=({displayMonth:e,id:t})=>{const{goToMonth:n,nextMonth:r,previousMonth:a}=Si(),{fromDate:s,toDate:o,formatters:{formatYearCaption:l,formatMonthCaption:d,formatCaption:m},locale:g}=yr(),u=Vn().translate;if(!s||!o)return console.warn("Using dropdownCaption required fromDate and toDate"),null;const f=h=>{const A=fa(fr(e),Number(h.target.value));n(fr(Vl([Dl([A,s]),o])))},k=h=>n(Rn(fr(e),Number(h.target.value))),y=ku(s,o,e.getFullYear()).reverse(),b=vu(s,o,e);return p.createElement(p.Fragment,null,p.createElement("div",{className:"navds-date__caption"},p.createElement("span",{"aria-live":"polite","aria-atomic":"true",id:t,className:"navds-sr-only"},m(e,{locale:g})),p.createElement(be,{variant:"tertiary",disabled:!a,onClick:()=>a&&n(a),icon:p.createElement(Bi,{title:u("goToPreviousMonth")}),className:"navds-date__caption-button",type:"button"}),p.createElement("div",{className:"navds-date__caption"},p.createElement(va,{label:u("month"),hideLabel:!0,className:"navds-date__caption__month",value:e.getMonth(),onChange:k},b.map(h=>p.createElement("option",{key:h.getMonth(),value:h.getMonth()},d(h,{locale:g})))),p.createElement(va,{label:u("year"),hideLabel:!0,value:e.getFullYear(),onChange:f,className:"navds-date__caption__year"},y.map(h=>p.createElement("option",{key:h.getFullYear(),value:h.getFullYear()},l(h,{locale:g}))))),p.createElement(be,{icon:p.createElement(Gi,{title:u("goToNextMonth")}),onClick:()=>r&&n(r),disabled:!r,variant:"tertiary",className:"navds-date__caption-button",type:"button"})),p.createElement(ao,{displayMonth:e}))};function oo(){const{classNames:e,styles:t,showWeekNumber:n,locale:r,formatters:{formatWeekdayName:a},labels:{labelWeekday:s}}=yr(),o=Nu(r);return p.createElement("tr",{style:t.head_row,className:e.head_row},n&&p.createElement(to,{below:"sm",asChild:!0},p.createElement("td",{style:t.head_cell,className:e.head_cell})),o.map((l,d)=>p.createElement("th",{key:d,scope:"col",className:e.head_cell,style:t.head_cell,"aria-label":s(l,{locale:r})},a(l,{locale:r}))))}function Nu(e){const t=Ni(new Date,{locale:e,weekStartsOn:1}),n=[];for(let r=0;r<7;r++){const a=Pi(t,r);n.push(a)}return n}const Pu=e=>{const t=v.useRef(null),n=Ml(e.date,e.displayMonth,t),{locale:r}=yr(),a=Oi(e.date,"cccc d",{locale:r});return n.isHidden?p.createElement(p.Fragment,null):n.isButton?p.createElement(qi,Object.assign({name:"day",ref:t},n.buttonProps,{role:void 0,"aria-label":a,"aria-hidden":n.activeModifiers.outside,"aria-selected":void 0,"aria-pressed":!!n.activeModifiers.selected})):p.createElement("div",Object.assign({},n.divProps))};function lo(e){const{styles:t,classNames:n,showWeekNumber:r}=yr();return p.createElement("tr",{className:n.row,style:t.row},r&&p.createElement(to,{below:"sm",asChild:!0},p.createElement("td",{className:n.cell,style:t.cell},p.createElement(jt,{number:e.weekNumber,dates:e.dates}))),e.dates.map(a=>p.createElement("td",{className:n.cell,style:t.cell,key:Ll(a)},p.createElement(Pu,{displayMonth:e.displayMonth,date:a}))))}function uo(){var e;const{classNames:t,styles:n,components:r}=yr(),a=(e=r==null?void 0:r.HeadRow)!==null&&e!==void 0?e:Cl;return p.createElement("thead",{style:n.head,className:t.head,"aria-hidden":!0},p.createElement(a,null))}var qu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Su=v.forwardRef((e,t)=>{var n,{className:r,locale:a,translations:s,dropdownCaption:o,disabled:l=[],disableWeekends:d=!1,showWeekNumber:m=!1,selected:g,defaultSelected:u,onSelect:f,fixedWeeks:k=!1,onWeekNumberClick:y}=e,b=qu(e,["className","locale","translations","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","defaultSelected","onSelect","fixedWeeks","onWeekNumberClick"]);const h=Xr("DatePicker",s,Qi(a)),A=wa(),[E,w]=p.useState(u),O=(n=b.mode)!==null&&n!==void 0?n:"single",D=j=>{w(j),f==null||f(j)};return p.createElement("div",{ref:t,className:U("navds-date__standalone-wrapper",r)},p.createElement(Ii,{translate:h},p.createElement(xi,Object.assign({locale:a?Sa(a):A,mode:O,onSelect:D,selected:g??E,components:{Caption:o?io:so,Head:uo,HeadRow:oo,WeekNumber:jt,Row:lo},className:"navds-date",classNames:{vhidden:"navds-sr-only"},disabled:j=>d&&Wr(j)||tt(j,l),weekStartsOn:1,initialFocus:!1,modifiers:{weekend:j=>d&&Wr(j)},modifiersClassNames:{weekend:"rdp-day__weekend"},showWeekNumber:m,onWeekNumberClick:O==="multiple"?y:void 0,fixedWeeks:k,showOutsideDays:!0},Ne(b,["children","id"])))))});var Iu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const st=v.forwardRef((e,t)=>{var n,{children:r,locale:a,translations:s,dropdownCaption:o,disabled:l=[],disableWeekends:d=!1,showWeekNumber:m=!1,selected:g,id:u,defaultSelected:f,className:k,wrapperClassName:y,open:b,onClose:h,onOpenToggle:A,strategy:E,onWeekNumberClick:w}=e,O=Iu(e,["children","locale","translations","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","id","defaultSelected","className","wrapperClassName","open","onClose","onOpenToggle","strategy","onWeekNumberClick"]);const D=Xr("DatePicker",s,Qi(a)),j=wa(),_=ir(u),[q,L]=v.useState(b??!1),[C,K]=v.useState(null),x=kt(K,t),[T,B]=p.useState(f),H=(n=O.mode)!==null&&n!==void 0?n:"single",z=X=>{var Fe,Ie,ce;B(X),O.mode==="single"?X&&((Fe=h==null?void 0:h())!==null&&Fe!==void 0||L(!1)):O.mode==="range"&&X!=null&&X.from&&X!=null&&X.to&&((Ie=h==null?void 0:h())!==null&&Ie!==void 0||L(!1)),(ce=O==null?void 0:O.onSelect)===null||ce===void 0||ce.call(O,X)},ue=p.createElement(xi,Object.assign({locale:a?Sa(a):j,mode:H,onSelect:z,selected:g??T,components:{Caption:o?io:so,Head:uo,HeadRow:oo,WeekNumber:jt,Row:lo},className:U("navds-date",k),classNames:{vhidden:"navds-sr-only"},disabled:X=>d&&Wr(X)||tt(X,l),weekStartsOn:1,initialFocus:!1,modifiers:{weekend:X=>d&&Wr(X)},modifiersClassNames:{weekend:"rdp-day__weekend"},showWeekNumber:m,onWeekNumberClick:H==="multiple"?w:void 0,fixedWeeks:!0,showOutsideDays:!0},Ne(O,["onSelect"])));return p.createElement(Ii,{translate:D},p.createElement(wi.Provider,{value:{open:b??q,onOpen:()=>{L(X=>!X),A==null||A()},ariaId:_,defined:!0}},p.createElement("div",{ref:x,className:U("navds-date__wrapper",y)},r,p.createElement(_u,{open:b??q,anchor:C,onClose:()=>{var X;return(X=h==null?void 0:h())!==null&&X!==void 0?X:L(!1)},locale:a,translate:D,variant:H,popoverProps:{id:_,strategy:E}},ue))))});st.Standalone=Su;st.Input=hu;const xu=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),Vu=(e={})=>{var t;const{locale:n,required:r,defaultSelected:a,today:s=new Date,fromDate:o,toDate:l,disabled:d,disableWeekends:m,onDateChange:g,inputFormat:u,onValidate:f,defaultMonth:k,allowTwoDigitYear:y=!0}=e,[b,h]=v.useState(null),A=wa(),E=n?Sa(n):A,[w,O]=v.useState(a),[D,j]=v.useState((t=w??k)!==null&&t!==void 0?t:s),[_,q]=v.useState(w),[L,C]=v.useState(!1),K=w?vn(w,E,"date",u):"",[x,T]=v.useState(K),B=v.useCallback(ee=>{var J,Ae;C(ee),ee&&j((Ae=(J=_??w)!==null&&J!==void 0?J:k)!==null&&Ae!==void 0?Ae:s)},[k,w,_,s]),H=ee=>{g==null||g(ee),q(ee)},z=(ee={})=>f==null?void 0:f(xu(ee));return{datepickerProps:{month:D,onMonthChange:j,onDayClick:(ee,{selected:J})=>{if(!(J&&r)){if(ee&&!J&&(B(!1),b==null||b.focus()),J){H(void 0),T(""),z({isValidDate:!1,isEmpty:!0});return}H(ee),z(),j(ee),T(ee?vn(ee,E,"date",u):"")}},selected:_??new Date("Invalid date"),locale:n,fromDate:o,toDate:l,today:s,open:L,onClose:()=>{B(!1),b==null||b.focus()},onOpenToggle:()=>B(!L),disabled:d,disableWeekends:m},inputProps:{onChange:ee=>{T(ee.target.value);const J=Yt(ee.target.value,s,E,"date",y),Ae=o&&J&&Fn(o,J)>0,xe=l&&J&&Fn(J,l)>0;if(!Un(J)||m&&Wr(J)||d&&tt(J,d)){H(void 0),z({isInvalid:!Un(J),isWeekend:m&&Wr(J),isDisabled:d&&tt(J,d),isValidDate:!1,isEmpty:!ee.target.value,isBefore:Ae??!1,isAfter:xe??!1});return}if(Ae||xe){H(void 0),z({isValidDate:!1,isBefore:Ae??!1,isAfter:xe??!1});return}H(J),z(),j(k??J)},onFocus:ee=>{if(ee.target.readOnly)return;const J=Yt(ee.target.value,s,E,"date",y);if(Un(J)){T(vn(J,E,"date",u));const Ae=o&&J&&Fn(o,J)>0,xe=l&&J&&Fn(J,l)>0;!Ae&&!xe&&j(J)}},onBlur:ee=>{const J=Yt(ee.target.value,s,E,"date",y);Un(J)&&T(vn(J,E,"date",u))},value:x,setAnchorRef:h},reset:()=>{var ee;H(w),j((ee=w??k)!==null&&ee!==void 0?ee:s),T(K??""),O(a)},selectedDay:_,setSelected:ee=>{var J;H(ee),j((J=ee??k)!==null&&J!==void 0?J:s),T(ee?vn(ee,E,"date",u):"")}}};var Du=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Mu=v.forwardRef((e,t)=>{var{children:n,className:r,as:a="div",background:s,borderColor:o,borderWidth:l,borderRadius:d,shadow:m,style:g,asChild:u}=e,f=Du(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const k=Object.assign(Object.assign(Object.assign({},g),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":m?`var(--ax-shadow-${m})`:void 0,"--__axc-box-border-color":o?`var(--ax-border-${o})`:void 0,"--__axc-box-border-width":l?l.split(" ").map(b=>`${b}px`).join(" "):void 0}),Na("ax","box","border-radius","border-radius",d,!1,["0"])),y=u?xn:a;return p.createElement(Pa,Object.assign({},f),p.createElement(y,Object.assign({},Ne(f,qa),{ref:t,style:k,className:U("navds-box",r,{"navds-box-bg":s,"navds-box-border-color":o,"navds-box-border-width":l,"navds-box-border-radius":d,"navds-box-shadow":m})}),n))});var Lu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cu=v.forwardRef((e,t)=>{var{children:n,className:r,as:a="div",background:s,borderColor:o,borderWidth:l,borderRadius:d,shadow:m,style:g,asChild:u}=e,f=Lu(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const y=yt(!1)?"ax":"a",b=Object.assign(Object.assign(Object.assign({},g),{[`--__${y}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${y}c-box-shadow`]:m?`var(--a-shadow-${m})`:void 0,[`--__${y}c-box-border-color`]:o?`var(--a-${o})`:void 0,[`--__${y}c-box-border-width`]:l?l.split(" ").map(A=>`${A}px`).join(" "):void 0}),Na(y,"box","border-radius","border-radius",d,!1,["0"])),h=u?xn:a;return p.createElement(Pa,Object.assign({},f),p.createElement(h,Object.assign({},Ne(f,qa),{ref:t,style:b,className:U("navds-box",r,{"navds-box-bg":s,"navds-box-border-color":o,"navds-box-border-width":l,"navds-box-border-radius":d,"navds-box-shadow":m})}),n))}),Ot=Cu;Ot.New=Mu;var $u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Hv=v.forwardRef((e,t)=>{var{children:n,className:r,as:a="div",columns:s,gap:o,style:l,align:d,asChild:m}=e,g=$u(e,["children","className","as","columns","gap","style","align","asChild"]);const f=yt(!1)?"ax":"a",k=Object.assign(Object.assign(Object.assign(Object.assign({},l),{[`--__${f}c-hgrid-align`]:d}),Na(f,"hgrid","gap","spacing",o)),$l(f,"hgrid","columns",Ku(s))),y=m?xn:a;return p.createElement(Pa,Object.assign({},g),p.createElement(y,Object.assign({},Ne(g,qa),{ref:t,className:U("navds-hgrid",r,{"navds-hgrid-gap":o,"navds-hgrid-align":d}),style:k}),n))});function Ku(e){return e?typeof e=="string"||typeof e=="number"?js(e):Object.fromEntries(Object.entries(e).map(([t,n])=>[t,js(n)])):{}}const js=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var Bu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Gu=v.forwardRef((e,t)=>{var{className:n}=e,r=Bu(e,["className"]);return p.createElement("tbody",Object.assign({},r,{ref:t,className:U("navds-table__body",n)}))});var Uu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const mo=v.forwardRef((e,t)=>{var{className:n,children:r,align:a,textSize:s}=e,o=Uu(e,["className","children","align","textSize"]);return p.createElement("th",Object.assign({ref:t,className:U("navds-table__header-cell","navds-label",n,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},o),r)}),go=v.createContext(null);var Hu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Yu=v.forwardRef((e,t)=>{var n,r,a,s,{className:o,children:l,sortable:d=!1,sortKey:m}=e,g=Hu(e,["className","children","sortable","sortKey"]);const u=v.useContext(go);return d&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),p.createElement(mo,Object.assign({scope:"col",ref:t,className:o,"aria-sort":d?((n=u==null?void 0:u.sort)===null||n===void 0?void 0:n.orderBy)===m?(r=u==null?void 0:u.sort)===null||r===void 0?void 0:r.direction:"none":void 0},g),d?p.createElement("button",{type:"button",className:"navds-table__sort-button",onClick:d&&m?()=>{var f;return(f=u==null?void 0:u.onSortChange)===null||f===void 0?void 0:f.call(u,m)}:void 0},l,((a=u==null?void 0:u.sort)===null||a===void 0?void 0:a.orderBy)===m?((s=u==null?void 0:u.sort)===null||s===void 0?void 0:s.direction)==="descending"?p.createElement(id,{"aria-hidden":!0}):p.createElement(ud,{"aria-hidden":!0}):p.createElement(gd,{"aria-hidden":!0})):l)});var zu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const po=v.forwardRef((e,t)=>{var{className:n,children:r="",align:a,textSize:s}=e,o=zu(e,["className","children","align","textSize"]);return p.createElement(we,Object.assign({as:"td",ref:t,className:U("navds-table__data-cell",n,{[`navds-table__data-cell--align-${a}`]:a}),size:s},o),r)});var Wu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ju=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Xu(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function Os(e){return typeof e=="string"&&e[e.length-1]==="%"&&Xu(e.substring(0,e.length-1))}function Jt(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function Zu(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const Qu=e=>{var{children:t,className:n,innerClassName:r,duration:a=250,easing:s="ease",height:o}=e,l=Wu(e,["children","className","innerClassName","duration","easing","height"]);const d=v.useRef(o),m=v.useRef(null),g=v.useRef(),u=v.useRef(),f=v.useRef(o),k=v.useRef("visible"),y=Ju?0:a;typeof f.current=="number"?(typeof o!="string"&&(f.current=o<0?0:o),k.current="hidden"):Os(f.current)&&(f.current=o==="0%"?0:o,k.current="hidden");const[b,h]=v.useState(f.current),[A,E]=v.useState(k.current),[w,O]=v.useState(!1);v.useEffect(()=>{Jt(m.current,f.current)},[]),v.useEffect(()=>{if(o!==d.current&&m.current){Zu(m.current,d.current),m.current.style.overflow="hidden";const q=m.current.offsetHeight;m.current.style.overflow="";const L=y;let C,K,x="hidden",T;const B=d.current==="auto";typeof o=="number"?(C=o<0?0:o,K=C):Os(o)?(C=o==="0%"?0:o,K=C):(C=q,K="auto",x=void 0),B&&(K=C,C=q),h(C),E("hidden"),O(!B),clearTimeout(u.current),clearTimeout(g.current),B?(T=!0,u.current=setTimeout(()=>{h(K),E(x),O(T)},50),g.current=setTimeout(()=>{O(!1),Jt(m.current,K)},L)):u.current=setTimeout(()=>{h(K),E(x),O(!1),o!=="auto"&&Jt(m.current,C)},L)}return d.current=o,()=>{clearTimeout(u.current),clearTimeout(g.current)}},[o]);const D={height:b,overflow:A};w&&(D.transition=`height ${y}ms ${s} 0ms`,D.WebkitTransition=D.transition);const _=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:o===0;return p.createElement("div",Object.assign({},l,{className:n,style:D}),p.createElement("div",{"aria-hidden":_,className:r,ref:m},t))};var em=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const co=v.forwardRef((e,t)=>{var{className:n,selected:r=!1,shadeOnHover:a=!0}=e,s=em(e,["className","selected","shadeOnHover"]);return p.createElement("tr",Object.assign({},s,{ref:t,className:U("navds-table__row",n,{"navds-table__row--selected":r,"navds-table__row--shade-on-hover":a})}))});var rm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const nm=v.forwardRef((e,t)=>{var{className:n,children:r,content:a,togglePlacement:s="left",defaultOpen:o=!1,open:l,onOpenChange:d,expansionDisabled:m=!1,expandOnRowClick:g=!1,colSpan:u=999,onClick:f}=e,k=rm(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","onClick"]);const[y,b]=ad({defaultValue:o,value:l,onChange:d}),h=Xr("global"),A=ir(),E=O=>{b(D=>!D),O.stopPropagation()},w=O=>{g&&!m&&!fo(O.target)&&E(O)};return p.createElement(p.Fragment,null,p.createElement(co,Object.assign({},k,{ref:t,className:U("navds-table__expandable-row",n,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":g}),onClick:Vi(f,w)}),s==="right"&&r,p.createElement(po,{className:U("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:m?()=>null:E},!m&&p.createElement("button",{className:"navds-table__toggle-expand-button",type:"button","aria-controls":A,"aria-expanded":y,onClick:E},p.createElement(Ft,{className:"navds-table__expandable-icon",title:h(y?"showLess":"showMore")}))),s==="left"&&r),p.createElement("tr",{"data-state":y?"open":"closed",className:"navds-table__expanded-row","aria-hidden":!y,id:A},p.createElement("td",{colSpan:u,className:"navds-table__expanded-row-cell"},p.createElement(Qu,{className:"navds-table__expanded-row-collapse",innerClassName:"navds-table__expanded-row-content",height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function fo(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:fo(e.parentElement)}var tm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const am=v.forwardRef((e,t)=>{var{className:n}=e,r=tm(e,["className"]);return p.createElement("thead",Object.assign({},r,{ref:t,className:U("navds-table__header",n)}))});var sm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const se=v.forwardRef((e,t)=>{var{className:n,zebraStripes:r=!1,size:a="medium",onSortChange:s,sort:o}=e,l=sm(e,["className","zebraStripes","size","onSortChange","sort"]);return p.createElement(go.Provider,{value:{onSortChange:s,sort:o}},p.createElement("table",Object.assign({},l,{ref:t,className:U("navds-table",`navds-table--${a}`,n,{"navds-table--zebra-stripes":r})})))});se.Header=am;se.Body=Gu;se.Row=co;se.ColumnHeader=Yu;se.HeaderCell=mo;se.DataCell=po;se.ExpandableRow=nm;var im=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const om=v.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:o}=e,l=im(e,["children","className","variant","size","icon"]);const d=(a==null?void 0:a.endsWith("-filled"))&&"strong",m=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",g=a==null?void 0:a.replace("-filled","").replace("-moderate","");return p.createElement(we,Object.assign({},l,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:U("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${d||m||"outline"}`,`navds-tag--${g}`)}),o&&p.createElement("span",{className:"navds-tag__icon--left"},o),n)}),lm=e=>{const t=Sr(e,"fieldset"),{inputProps:n}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var dm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const xa=v.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:l,hasError:d,size:m,readOnly:g,inputDescriptionId:u}=lm(e),f=v.useContext(Sn),{children:k,className:y,errorPropagation:b=!0,legend:h,description:A,hideLegend:E,nativeReadOnly:w=!0}=e,O=dm(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return p.createElement(Sn.Provider,{value:{error:b?(n=e.error)!==null&&n!==void 0?n:f==null?void 0:f.error:void 0,errorId:U({[o]:l,[(r=f==null?void 0:f.errorId)!==null&&r!==void 0?r:""]:!!(f!=null&&f.error)}),size:m,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:g}},p.createElement("fieldset",Object.assign({},Ne(O,["errorId","error","size","readOnly"]),Ne(s,["aria-describedby","aria-invalid"]),{ref:t,className:U(y,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":g})}),p.createElement(Ce,{size:m,as:"legend",className:U("navds-fieldset__legend",{"navds-sr-only":!!E})},g&&(w?p.createElement(_t,null):p.createElement(Ia,null)),h),!!A&&p.createElement(we,{className:U("navds-fieldset__description",{"navds-sr-only":!!E}),id:u,size:m??"medium",as:"div"},e.description),k,p.createElement("div",{id:o,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},l&&p.createElement(or,{size:m,showIcon:!0},e.error))))});var um=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const vo=v.createContext(null),mm=v.forwardRef((e,t)=>{var n,r,{value:a,defaultValue:s,onChange:o=()=>{},children:l,className:d}=e,m=um(e,["value","defaultValue","onChange","children","className"]);const g=v.useContext(Sn),[u,f]=v.useState(s??[]),k=y=>{const b=a??u,h=b.includes(y)?b.filter(A=>A!==y):[...b,y];a===void 0&&f(h),o(h)};return p.createElement(xa,Object.assign({},m,{ref:t,className:U(d,"navds-checkbox-group",`navds-checkbox-group--${(r=(n=m.size)!==null&&n!==void 0?n:g==null?void 0:g.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),p.createElement(vo.Provider,{value:{value:a,defaultValue:s,toggleValue:k}},p.createElement("div",{className:"navds-checkboxes"},l)))});var gm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const pm=e=>{const t=v.useContext(vo),n=Sr(Ne(e,["description","children"]),"checkbox"),{inputProps:r,readOnly:a}=n,s=gm(n,["inputProps","readOnly"]);return t&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:a,nested:!!t,inputProps:Object.assign(Object.assign({},r),{checked:t!=null&&t.value?t.value.includes(e.value):e.checked,defaultChecked:t!=null&&t.defaultValue?t.defaultValue.includes(e.value):e.defaultChecked,onChange:o=>{var l;a||((l=e.onChange)===null||l===void 0||l.call(e,o),t==null||t.toggleValue(e.value))},onClick:o=>{var l;if(a){o.preventDefault();return}(l=e==null?void 0:e.onClick)===null||l===void 0||l.call(e,o)}})})},ka=v.forwardRef((e,t)=>{const{inputProps:n,hasError:r,size:a,readOnly:s,nested:o}=pm(e),l=ir(),d=ir();return p.createElement("div",{className:U(e.className,"navds-checkbox",`navds-checkbox--${a}`,{"navds-checkbox--error":r,"navds-checkbox--disabled":n.disabled,"navds-checkbox--readonly":s})},p.createElement("input",Object.assign({},Ne(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Ne(n,["aria-invalid"]),{type:"checkbox",className:"navds-checkbox__input",ref:m=>{var g;m&&(m.indeterminate=(g=e.indeterminate)!==null&&g!==void 0?g:!1),typeof t=="function"?t(m):t!=null&&(t.current=m)},"aria-labelledby":U(l,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description})})),p.createElement("label",{htmlFor:n.id,className:"navds-checkbox__label"},p.createElement("span",{className:"navds-checkbox__icon"},p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},p.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),p.createElement("span",{className:U("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},p.createElement(we,{as:"span",id:l,size:a,className:"navds-checkbox__label-text","aria-hidden":!0},!o&&s&&p.createElement(Ia,null),e.children),e.description&&p.createElement(we,{as:"span",id:d,size:a,className:"navds-form-field__subdescription navds-checkbox__description","aria-hidden":!0},e.description))))});var cm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ko=p.createContext(null),fm=v.forwardRef((e,t)=>{var n,r,{children:a,className:s,name:o,defaultValue:l,value:d,onChange:m=()=>{},required:g,readOnly:u}=e,f=cm(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const k=v.useContext(Sn),y=ir();return p.createElement(xa,Object.assign({},f,{readOnly:u,ref:t,className:U(s,"navds-radio-group",`navds-radio-group--${(r=(n=f.size)!==null&&n!==void 0?n:k==null?void 0:k.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),p.createElement(ko.Provider,{value:{name:o??`radioGroupName-${y}`,defaultValue:l,value:d,onChange:m,required:g}},p.createElement("div",{className:"navds-radio-buttons"},a)))});var vm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const km=e=>{const t=v.useContext(ko),n=Sr(Ne(e,["description"]),"radio"),{inputProps:r,readOnly:a}=n,s=vm(n,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},r),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:o=>{var l,d;a||((l=e.onChange)===null||l===void 0||l.call(e,o),(d=t==null?void 0:t.onChange)===null||d===void 0||d.call(t,e.value))},onClick:o=>{var l;if(a){o.preventDefault();return}(l=e==null?void 0:e.onClick)===null||l===void 0||l.call(e,o)},required:t==null?void 0:t.required,type:"radio"})})},Ts=v.forwardRef((e,t)=>{const{inputProps:n,size:r,hasError:a,readOnly:s}=km(e),o=ir(),l=ir();return p.createElement("div",{className:U(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":s})},p.createElement("input",Object.assign({},Ne(e,["children","size","description","readOnly"]),Ne(n,["aria-invalid"]),{"aria-labelledby":U(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:"navds-radio__input",ref:t})),p.createElement("label",{htmlFor:n.id,className:"navds-radio__label"},p.createElement("span",{className:"navds-radio__content"},p.createElement(we,{as:"span",id:o,size:r,"aria-hidden":!0},e.children),e.description&&p.createElement(we,{as:"span",id:l,size:r,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))});var ym=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ws=(e,t,n)=>{const{outerHeightStyle:r,overflow:a}=t;return n.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(n.current+=1,t):e},Ns=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Hn(e){return parseInt(e,10)||0}const bm=v.forwardRef((e,t)=>{var n,r,{className:a,onChange:s,maxRows:o,minRows:l=1,autoScrollbar:d,style:m,value:g}=e,u=ym(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:f}=v.useRef(g!=null),k=v.useRef(null),y=kt(k,t),b=v.useRef(null),h=v.useRef(0),[A,E]=v.useState({outerHeightStyle:0}),w=p.useCallback(()=>{const _=k.current,L=Ns(_).getComputedStyle(_);if(L.width==="0px")return{outerHeightStyle:0};const C=b.current;C.style.width=L.width,C.value=_.value||u.placeholder||"x",C.value.slice(-1)===`
`&&(C.value+=" ");const K=L.boxSizing,x=Hn(L.paddingBottom)+Hn(L.paddingTop),T=Hn(L.borderBottomWidth)+Hn(L.borderTopWidth),B=C.scrollHeight-x;C.value="x";const H=C.scrollHeight-x;let z=B;l&&(z=Math.max(Number(l)*H,z)),o&&(z=Math.min(Number(o)*H,z)),z=Math.max(z,H);const ue=z+(K==="border-box"?x+T:0),X=Math.abs(z-B)<=1;return{outerHeightStyle:ue,overflow:X}},[o,l,u.placeholder]),O=()=>{const _=w();Ps(_)||E(q=>ws(q,_,h))};zr(()=>{const _=()=>{const x=w();Ps(x)||Mi.flushSync(()=>{E(T=>ws(T,x,h))})},q=Ki(()=>{var x,T,B;if(h.current=0,!((x=k.current)===null||x===void 0)&&x.style.height||!((T=k.current)===null||T===void 0)&&T.style.width){((B=k.current)===null||B===void 0?void 0:B.style.overflow)==="hidden"&&E(H=>Object.assign(Object.assign({},H),{overflow:!1}));return}_()},166,!0),L=k.current,C=Ns(L);C.addEventListener("resize",q);let K;return typeof ResizeObserver<"u"&&(K=new ResizeObserver(q),K.observe(L)),()=>{q.clear(),C.removeEventListener("resize",q),K&&K.disconnect()}},[w]),zr(()=>{O()}),v.useEffect(()=>{h.current=0},[g]);const D=_=>{h.current=0,f||O(),s&&s(_)},j=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!d&&!(!((n=k.current)===null||n===void 0)&&n.style.height)&&!(!((r=k.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},m);return p.createElement(p.Fragment,null,p.createElement("textarea",Object.assign({value:g,onChange:D,ref:y,rows:l,style:j},u,{className:a})),p.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:b,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function Ps(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const hm=({maxLengthId:e,maxLength:t,currentLength:n,size:r,i18n:a})=>{const s=Xr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=t-n,[l,d]=v.useState(o);return v.useEffect(()=>{const m=Ki(()=>{d(o)},2e3);return m(),()=>{m.clear()}},[o]),p.createElement(p.Fragment,null,p.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:t})),o<20&&p.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},qs(l,s)),p.createElement(we,{className:U("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:r},qs(o,s)))},qs=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Rm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Em=v.forwardRef((e,t)=>{var n,r,a;const{inputProps:s,errorId:o,showErrorMsg:l,hasError:d,size:m,inputDescriptionId:g}=Sr(e,"textarea"),{label:u,className:f,description:k,maxLength:y,hideLabel:b=!1,resize:h,UNSAFE_autoScrollbar:A,i18n:E,readOnly:w}=e,O=Rm(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),D=ir(),j=y!==void 0&&y>0,[_,q]=v.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),L=()=>{let K=O!=null&&O.minRows?O==null?void 0:O.minRows:3;return m==="small"&&(K=O!=null&&O.minRows?O==null?void 0:O.minRows:2),K},C=U(s["aria-describedby"],{[D??""]:j});return p.createElement("div",{className:U(f,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":w,"navds-textarea--readonly":w,"navds-textarea--error":d,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${h===!0?"both":h}`]:h})},p.createElement(Ce,{htmlFor:s.id,size:m,className:U("navds-form-field__label",{"navds-sr-only":b})},w&&p.createElement(_t,null),u),!!k&&p.createElement(we,{className:U("navds-form-field__description",{"navds-sr-only":b}),id:g,size:m,as:"div"},k),p.createElement(bm,Object.assign({},Ne(O,["error","errorId","size"]),s,{onChange:Vi(e.onChange,e.value===void 0?K=>q(K.target.value):void 0),minRows:L(),autoScrollbar:A,ref:t,readOnly:w,className:U("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},C?{"aria-describedby":C}:{})),j&&!w&&!s.disabled&&p.createElement(hm,{maxLengthId:D,maxLength:y,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:_.length,size:m,i18n:E}),p.createElement("div",{className:"navds-form-field__error",id:o,"aria-relevant":"additions removals","aria-live":"polite"},l&&p.createElement(or,{size:m,showIcon:!0},e.error)))});var Fm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Am=v.forwardRef((e,t)=>{const{inputProps:n,errorId:r,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:l}=Sr(e,"textField"),{label:d,className:m,description:g,htmlSize:u,hideLabel:f=!1,type:k="text",readOnly:y}=e,b=Fm(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return p.createElement("div",{className:U(m,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":s,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":y,"navds-text-field--readonly":y})},p.createElement(Ce,{htmlFor:n.id,size:o,className:U("navds-form-field__label",{"navds-sr-only":f})},y&&p.createElement(_t,null),d),!!g&&p.createElement(we,{className:U("navds-form-field__description",{"navds-sr-only":f}),id:l,size:o,as:"div"},g),p.createElement("input",Object.assign({},Ne(b,["error","errorId","size"]),n,{ref:t,type:k,readOnly:y,className:U("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:u})),p.createElement("div",{className:"navds-form-field__error",id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&p.createElement(or,{size:o,showIcon:!0},e.error)))});var _m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const jm=v.forwardRef((e,t)=>{var{children:n,className:r,border:a=!1,as:s="div"}=e,o=_m(e,["children","className","border","as"]);return p.createElement(s,Object.assign({ref:t,className:U("navds-panel",r,{"navds-panel--border":a})},o),n)});function Om(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ss={exports:{}},kn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is;function Tm(){if(Is)return kn;Is=1;var e=p,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(l,d,m){var g,u={},f=null,k=null;m!==void 0&&(f=""+m),d.key!==void 0&&(f=""+d.key),d.ref!==void 0&&(k=d.ref);for(g in d)r.call(d,g)&&!s.hasOwnProperty(g)&&(u[g]=d[g]);if(l&&l.defaultProps)for(g in d=l.defaultProps,d)u[g]===void 0&&(u[g]=d[g]);return{$$typeof:t,type:l,key:f,ref:k,props:u,_owner:a.current}}return kn.Fragment=n,kn.jsx=o,kn.jsxs=o,kn}var xs;function wm(){return xs||(xs=1,Ss.exports=Tm()),Ss.exports}var te=wm();const Yv=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:te.jsx(bt,{variant:"warning",size:"small",children:te.jsx(ne,{gap:"2",children:p.Children.map(e,t=>te.jsx(we,{size:"small",children:t},Kl(t)?t.key:t))})}),Ir={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ie(Ir);ie(Ir);const it="#B7B1A9",yo=4,Nm=(e,t,n)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${it};
    border-radius: ${yo}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${n}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${it};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,Pm=(e,t,n)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${it};
    border-radius: ${yo}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${t}px;
    margin-left: ${n}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${it};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,qm=(e,t,n,r)=>t?Pm(e,n,r):Nm(e,n,r),Sm=(e,t,n)=>n?"":t?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Me=({children:e,alignOffset:t=0,alignLeft:n=!1,marginTop:r=0,marginLeft:a=0,hideBorder:s=!1})=>te.jsxs(te.Fragment,{children:[te.jsx("style",{dangerouslySetInnerHTML:{__html:qm(t,n,r,a)}}),te.jsx("div",{className:Sm(t,n,s),children:e})]});var Vs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ds;function Im(){return Ds||(Ds=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=a(s,r.call(this,l)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)t.call(s,l)&&s[l]&&(o=a(o,this&&this[l]||l));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Vs)),Vs.exports}var xm=Im();const ze=Om(xm),Vm="_borderbox_hicl4_1",Dm="_error_hicl4_4",Mm="_warning_hicl4_7",Lm={borderbox:Vm,error:Dm,warning:Mm},Cm=ze.bind(Lm),Pe=({error:e=!1,className:t,children:n})=>te.jsx(jm,{border:!0,className:Cm("borderbox",{error:e},t),children:n}),$m="_aksjonspunkt_kn1hn_1",Km="_erAksjonspunktApent_kn1hn_4",Bm="_erIkkeGodkjentAvBeslutter_kn1hn_8",Gm={aksjonspunkt:$m,erAksjonspunktApent:Km,erIkkeGodkjentAvBeslutter:Bm};ze.bind(Gm);ie(Ir);ie(Ir);const Um="_tooltip_h8akz_1",Hm="_tooltiptext_h8akz_5",Ym="_left_h8akz_22",zm="_top_h8akz_27",Wm="_right_h8akz_30",Jm="_bottom_h8akz_34",Xm="_showTooltip_h8akz_1",ya={tooltip:Um,tooltiptext:Hm,left:Ym,top:zm,right:Wm,bottom:Jm,showTooltip:Xm},Zm=ze.bind(ya),Qm=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>te.jsxs("div",{className:ya.tooltip,children:[te.jsx("span",{className:Zm(ya.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),eg=p.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:o,onKeyDown:l,tooltip:d,alignTooltipLeft:m=!1},g)=>{const[u,f]=v.useState(!1),k=v.useCallback(()=>{f(!0)},[]),y=v.useCallback(()=>{f(!1)},[]),b=v.useCallback(E=>{(E.key==="Enter"||E.key===" ")&&(l&&l(E),E.preventDefault())},[]),h=s&&u?s:a,A=te.jsx("img",{ref:g,className:r,src:h,alt:o,tabIndex:n,onMouseOver:k,onMouseOut:y,onFocus:k,onBlur:y,onKeyDown:b,onMouseDown:t,onClick:e});return d?te.jsx(Qm,{content:d,alignLeft:m,children:A}):A});eg.displayName="Image";const rg="_flexColumnNew_1vdv1_1",ng={flexColumnNew:rg};ze.bind(ng);const tg="_flexRow_1yf0y_1",ag="_spaceBetween_1yf0y_9",sg="_alignItemsToBaseline_1yf0y_12",ig="_alignItemsToFlexEnd_1yf0y_15",og="_justifyItemsToFlexEnd_1yf0y_18",lg="_wrap_1yf0y_21",dg={flexRow:tg,spaceBetween:ag,alignItemsToBaseline:sg,alignItemsToFlexEnd:ig,justifyItemsToFlexEnd:og,wrap:lg};ze.bind(dg);const ug="_flexContainer_1dk1o_1",mg="_fluid_1dk1o_6",gg="_fullHeight_1dk1o_9",pg="_flexWrap_1dk1o_17",cg={flexContainer:ug,fluid:mg,fullHeight:gg,flexWrap:pg};ze.bind(cg);ie(Ir);const fg="_row_1lxv9_1",vg="_harHover_1lxv9_4",kg="_rowHeader_1lxv9_7",yg="_grayHeader_1lxv9_12",bg="_rowContent_1lxv9_15",hg="_selected_1lxv9_18",Rg="_bold_1lxv9_22",Eg="_dashedBottomBorder_1lxv9_25",Fg="_solidBottomBorder_1lxv9_28",Ag="_apLeftBorder_1lxv9_31",_g="_noBottomBorder_1lxv9_34",bo={row:fg,harHover:vg,rowHeader:kg,grayHeader:yg,rowContent:bg,selected:hg,bold:Rg,dashedBottomBorder:Eg,solidBottomBorder:Fg,apLeftBorder:Ag,noBottomBorder:_g},jg=ze.bind(bo),Og=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},ho=e=>e.tagName==="TR"?e:ho(e.parentElement),Ms=(e,t)=>{const n=ho(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},Tg=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Ms(a,!0):a.key==="ArrowUp"?Ms(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},wg=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Ng=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:o,noHover:l=!1,isSelected:d=!1,isBold:m=!1,isDashedBottomBorder:g=!1,isSolidBottomBorder:u=!1,isApLeftBorder:f=!1,className:k,useMultiselect:y=!1,hasNoBottomBorder:b=!1})=>te.jsx("tr",{className:jg(k,bo.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!l,selected:d,harHover:!l,bold:m,dashedBottomBorder:g,solidBottomBorder:u,noBottomBorder:b,apLeftBorder:f}),onMouseDown:Og(a,e,t),onKeyDown:Tg(y,s,e,t),onKeyUp:y?wg(s):void 0,tabIndex:0,children:o}),Pg="_columnStyle_1f13u_1",Ro={columnStyle:Pg},qg=ze.bind(Ro),Xt=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:te.jsx("td",{className:qg(Ro.columnStyle,t),colSpan:r?100:void 0,children:e}),Sg="_table_2cnpl_1",Ig="_rowHover_2cnpl_25",xg={table:Sg,rowHover:Ig},Vg=ze.bind(xg),Dg="EMPTY",Mg=p.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},o)=>te.jsxs("table",{ref:o,className:Vg("table",{[n]:n,rowHover:!r}),children:[te.jsx("thead",{children:te.jsxs(Ng,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(l=>typeof l=="string"&&l.startsWith(Dg)?te.jsx(Xt,{children:" "},l):te.jsx(Xt,{children:te.jsx(S,{id:l})},l)),t.map(l=>te.jsx(Xt,{children:l},l.key))]})}),te.jsx("tbody",{children:Array.isArray(s)?p.Children.map(s,l=>p.cloneElement(l,{noHover:r})):p.cloneElement(s,{noHover:r})})]}));Mg.displayName="Table";const Lg="_hidden_1pb4f_1",Cg="_active_1pb4f_8",$g="_activeRow_1pb4f_15 _active_1pb4f_8",Kg="_toggleIcon_1pb4f_19",Bg="_colTopPadding_1pb4f_22",Gg={hidden:Lg,active:Cg,activeRow:$g,toggleIcon:Kg,colTopPadding:Bg};ze.bind(Gg);ie(Ir);const Ug="_fourPx_qda5k_1",Hg="_eightPx_qda5k_4",Yg="_sixteenPx_qda5k_7",zg="_twentyPx_qda5k_10",Wg="_thirtyTwoPx_qda5k_13",Jg="_fourtyPx_qda5k_16",Xg={fourPx:Ug,eightPx:Hg,sixteenPx:Yg,twentyPx:zg,thirtyTwoPx:Wg,fourtyPx:Jg},Zg=ze.bind(Xg),In=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>te.jsx("div",{className:Zg({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});ie(Ir);const Qg="_divider_1t980_1",ep="_dividerParagraf_1t980_8",rp="_leftPanel_1t980_11",np="_rightPanel_1t980_14",ba={divider:Qg,dividerParagraf:ep,leftPanel:rp,rightPanel:np},tp=ze.bind(ba),ap=({spaceUnder:e=!1,spaceAbove:t=!1,leftPanel:n=!1,rightPanel:r=!1,dividerParagraf:a=!1,className:s})=>te.jsxs(te.Fragment,{children:[t&&te.jsx(In,{thirtyTwoPx:!0}),te.jsx("div",{className:tp(s,{leftPanel:n,rightPanel:r}),children:te.jsx("div",{className:a?ba.dividerParagraf:ba.divider})}),e&&te.jsx(In,{thirtyTwoPx:!0})]}),sp="_editedIcon_ulrjl_1",ip={editedIcon:sp},op=ze.bind(ip),Va=({className:e=""})=>te.jsx("span",{"data-testid":"editedIcon",className:op("editedIcon",e),children:te.jsx(bd,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var Mn=e=>e.type==="checkbox",wr=e=>e instanceof Date,De=e=>e==null;const Eo=e=>typeof e=="object";var ge=e=>!De(e)&&!Array.isArray(e)&&Eo(e)&&!wr(e),Fo=e=>ge(e)&&e.target?Mn(e.target)?e.target.checked:e.target.value:e,lp=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ao=(e,t)=>e.has(lp(t)),dp=e=>{const t=e.constructor&&e.constructor.prototype;return ge(t)&&t.hasOwnProperty("isPrototypeOf")},Da=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Re(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Da&&(e instanceof Blob||r))&&(n||ge(e)))if(t=n?[]:{},!n&&!dp(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=Re(e[a]));else return e;return t}var Ln=e=>Array.isArray(e)?e.filter(Boolean):[],le=e=>e===void 0,P=(e,t,n)=>{if(!t||!ge(e))return n;const r=Ln(t.split(/[,[\].]+?/)).reduce((a,s)=>De(a)?a:a[s],e);return le(r)||r===e?le(e[t])?n:e[t]:r},We=e=>typeof e=="boolean",Ma=e=>/^\w*$/.test(e),_o=e=>Ln(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ae=(e,t,n)=>{let r=-1;const a=Ma(t)?[t]:_o(t),s=a.length,o=s-1;for(;++r<s;){const l=a[r];let d=n;if(r!==o){const m=e[l];d=ge(m)||Array.isArray(m)?m:isNaN(+a[r+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=d,e=e[l]}return e};const ot={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Je={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},lr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},jo=p.createContext(null),W=()=>p.useContext(jo),up=e=>{const{children:t,...n}=e;return p.createElement(jo.Provider,{value:n},t)};var Oo=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return t._proxyFormState[o]!==Je.all&&(t._proxyFormState[o]=!r||Je.all),n&&(n[o]=!0),e[o]}});return a},Ve=e=>ge(e)&&!Object.keys(e).length,To=(e,t,n,r)=>{n(e);const{name:a,...s}=e;return Ve(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||Je.all))},$e=e=>Array.isArray(e)?e:[e],wo=(e,t,n)=>!e||!t||e===t||$e(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function Tt(e){const t=p.useRef(e);t.current=e,p.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function mp(e){const t=W(),{control:n=t.control,disabled:r,name:a,exact:s}=e,[o,l]=p.useState(n._formState),d=p.useRef(!0),m=p.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),g=p.useRef(a);return g.current=a,Tt({disabled:r,next:u=>d.current&&wo(g.current,u.name,s)&&To(u,m.current,n._updateFormState)&&l({...n._formState,...u}),subject:n._subjects.state}),p.useEffect(()=>(d.current=!0,m.current.isValid&&n._updateValid(!0),()=>{d.current=!1}),[n]),p.useMemo(()=>Oo(o,n,m.current,!1),[o,n])}var sr=e=>typeof e=="string",No=(e,t,n,r,a)=>sr(e)?(r&&t.watch.add(e),P(n,e,a)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),P(n,s))):(r&&(t.watchAll=!0),n);function gp(e){const t=W(),{control:n=t.control,name:r,defaultValue:a,disabled:s,exact:o}=e,l=p.useRef(r);l.current=r,Tt({disabled:s,subject:n._subjects.values,next:g=>{wo(l.current,g.name,o)&&m(Re(No(l.current,n._names,g.values||n._formValues,!1,a)))}});const[d,m]=p.useState(n._getWatch(r,a));return p.useEffect(()=>n._removeUnmounted()),d}function xr(e){const t=W(),{name:n,disabled:r,control:a=t.control,shouldUnregister:s}=e,o=Ao(a._names.array,n),l=gp({control:a,name:n,defaultValue:P(a._formValues,n,P(a._defaultValues,n,e.defaultValue)),exact:!0}),d=mp({control:a,name:n,exact:!0}),m=p.useRef(a.register(n,{...e.rules,value:l,...We(e.disabled)?{disabled:e.disabled}:{}})),g=p.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!P(d.errors,n)},isDirty:{enumerable:!0,get:()=>!!P(d.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!P(d.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!P(d.validatingFields,n)},error:{enumerable:!0,get:()=>P(d.errors,n)}}),[d,n]),u=p.useMemo(()=>({name:n,value:l,...We(r)||d.disabled?{disabled:d.disabled||r}:{},onChange:f=>m.current.onChange({target:{value:Fo(f),name:n},type:ot.CHANGE}),onBlur:()=>m.current.onBlur({target:{value:P(a._formValues,n),name:n},type:ot.BLUR}),ref:f=>{const k=P(a._fields,n);k&&f&&(k._f.ref={focus:()=>f.focus(),select:()=>f.select(),setCustomValidity:y=>f.setCustomValidity(y),reportValidity:()=>f.reportValidity()})}}),[n,a._formValues,r,d.disabled,l,a._fields]);return p.useEffect(()=>{const f=a._options.shouldUnregister||s,k=(y,b)=>{const h=P(a._fields,y);h&&h._f&&(h._f.mount=b)};if(k(n,!0),f){const y=Re(P(a._options.defaultValues,n));ae(a._defaultValues,n,y),le(P(a._formValues,n))&&ae(a._formValues,n,y)}return!o&&a.register(n),()=>{(o?f&&!a._state.action:f)?a.unregister(n):k(n,!1)}},[n,a,o,s]),p.useEffect(()=>{a._updateDisabledField({disabled:r,fields:a._fields,name:n})},[r,n,a]),p.useMemo(()=>({field:u,formState:d,fieldState:g}),[u,d,g])}var pp=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},pr=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(Math.random()*16+e)%16|0;return(t=="x"?n:n&3|8).toString(16)})},Zt=(e,t,n={})=>n.shouldFocus||le(n.shouldFocus)?n.focusName||`${e}.${le(n.focusIndex)?t:n.focusIndex}.`:"",wn=e=>({isOnSubmit:!e||e===Je.onSubmit,isOnBlur:e===Je.onBlur,isOnChange:e===Je.onChange,isOnAll:e===Je.all,isOnTouch:e===Je.onTouched}),ha=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Hr=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const s=P(e,a);if(s){const{_f:o,...l}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],a)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(Hr(l,t))break}else if(ge(l)&&Hr(l,t))break}}};var Po=(e,t,n)=>{const r=$e(P(e,n));return ae(r,"root",t[n]),ae(e,n,r),e},La=e=>e.type==="file",tr=e=>typeof e=="function",lt=e=>{if(!Da)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},et=e=>sr(e),Ca=e=>e.type==="radio",dt=e=>e instanceof RegExp;const Ls={value:!1,isValid:!1},Cs={value:!0,isValid:!0};var qo=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!le(e[0].attributes.value)?le(e[0].value)||e[0].value===""?Cs:{value:e[0].value,isValid:!0}:Cs:Ls}return Ls};const $s={isValid:!1,value:null};var So=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,$s):$s;function Ks(e,t,n="validate"){if(et(e)||Array.isArray(e)&&e.every(et)||We(e)&&!e)return{type:n,message:et(e)?e:"",ref:t}}var Cr=e=>ge(e)&&!dt(e)?e:{value:e,message:""},Ra=async(e,t,n,r,a,s)=>{const{ref:o,refs:l,required:d,maxLength:m,minLength:g,min:u,max:f,pattern:k,validate:y,name:b,valueAsNumber:h,mount:A}=e._f,E=P(n,b);if(!A||t.has(b))return{};const w=l?l[0]:o,O=x=>{a&&w.reportValidity&&(w.setCustomValidity(We(x)?"":x||""),w.reportValidity())},D={},j=Ca(o),_=Mn(o),q=j||_,L=(h||La(o))&&le(o.value)&&le(E)||lt(o)&&o.value===""||E===""||Array.isArray(E)&&!E.length,C=pp.bind(null,b,r,D),K=(x,T,B,H=lr.maxLength,z=lr.minLength)=>{const ue=x?T:B;D[b]={type:x?H:z,message:ue,ref:o,...C(x?H:z,ue)}};if(s?!Array.isArray(E)||!E.length:d&&(!q&&(L||De(E))||We(E)&&!E||_&&!qo(l).isValid||j&&!So(l).isValid)){const{value:x,message:T}=et(d)?{value:!!d,message:d}:Cr(d);if(x&&(D[b]={type:lr.required,message:T,ref:w,...C(lr.required,T)},!r))return O(T),D}if(!L&&(!De(u)||!De(f))){let x,T;const B=Cr(f),H=Cr(u);if(!De(E)&&!isNaN(E)){const z=o.valueAsNumber||E&&+E;De(B.value)||(x=z>B.value),De(H.value)||(T=z<H.value)}else{const z=o.valueAsDate||new Date(E),ue=Ie=>new Date(new Date().toDateString()+" "+Ie),X=o.type=="time",Fe=o.type=="week";sr(B.value)&&E&&(x=X?ue(E)>ue(B.value):Fe?E>B.value:z>new Date(B.value)),sr(H.value)&&E&&(T=X?ue(E)<ue(H.value):Fe?E<H.value:z<new Date(H.value))}if((x||T)&&(K(!!x,B.message,H.message,lr.max,lr.min),!r))return O(D[b].message),D}if((m||g)&&!L&&(sr(E)||s&&Array.isArray(E))){const x=Cr(m),T=Cr(g),B=!De(x.value)&&E.length>+x.value,H=!De(T.value)&&E.length<+T.value;if((B||H)&&(K(B,x.message,T.message),!r))return O(D[b].message),D}if(k&&!L&&sr(E)){const{value:x,message:T}=Cr(k);if(dt(x)&&!E.match(x)&&(D[b]={type:lr.pattern,message:T,ref:o,...C(lr.pattern,T)},!r))return O(T),D}if(y){if(tr(y)){const x=await y(E,n),T=Ks(x,w);if(T&&(D[b]={...T,...C(lr.validate,T.message)},!r))return O(T.message),D}else if(ge(y)){let x={};for(const T in y){if(!Ve(x)&&!r)break;const B=Ks(await y[T](E,n),w,T);B&&(x={...B,...C(T,B.message)},O(B.message),r&&(D[b]=x))}if(!Ve(x)&&(D[b]={ref:w,...x},!r))return D}}return O(!0),D},Qt=(e,t)=>[...e,...$e(t)],ea=e=>Array.isArray(e)?e.map(()=>{}):void 0;function ra(e,t,n){return[...e.slice(0,t),...$e(n),...e.slice(t)]}var na=(e,t,n)=>Array.isArray(e)?(le(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(t,1)[0]),e):[],ta=(e,t)=>[...$e(t),...$e(e)];function cp(e,t){let n=0;const r=[...e];for(const a of t)r.splice(a-n,1),n++;return Ln(r).length?r:[]}var aa=(e,t)=>le(t)?[]:cp(e,$e(t).sort((n,r)=>n-r)),sa=(e,t,n)=>{[e[t],e[n]]=[e[n],e[t]]};function fp(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=le(e)?r++:e[t[r++]];return e}function vp(e){for(const t in e)if(e.hasOwnProperty(t)&&!le(e[t]))return!1;return!0}function fe(e,t){const n=Array.isArray(t)?t:Ma(t)?[t]:_o(t),r=n.length===1?e:fp(e,n),a=n.length-1,s=n[a];return r&&delete r[s],a!==0&&(ge(r)&&Ve(r)||Array.isArray(r)&&vp(r))&&fe(e,n.slice(0,-1)),e}var Bs=(e,t,n)=>(e[t]=n,e);function Ue(e){const t=W(),{control:n=t.control,name:r,keyName:a="id",shouldUnregister:s,rules:o}=e,[l,d]=p.useState(n._getFieldArray(r)),m=p.useRef(n._getFieldArray(r).map(pr)),g=p.useRef(l),u=p.useRef(r),f=p.useRef(!1);u.current=r,g.current=l,n._names.array.add(r),o&&n.register(r,o),Tt({next:({values:j,name:_})=>{if(_===u.current||!_){const q=P(j,u.current);Array.isArray(q)&&(d(q),m.current=q.map(pr))}},subject:n._subjects.array});const k=p.useCallback(j=>{f.current=!0,n._updateFieldArray(r,j)},[n,r]),y=(j,_)=>{const q=$e(Re(j)),L=Qt(n._getFieldArray(r),q);n._names.focus=Zt(r,L.length-1,_),m.current=Qt(m.current,q.map(pr)),k(L),d(L),n._updateFieldArray(r,L,Qt,{argA:ea(j)})},b=(j,_)=>{const q=$e(Re(j)),L=ta(n._getFieldArray(r),q);n._names.focus=Zt(r,0,_),m.current=ta(m.current,q.map(pr)),k(L),d(L),n._updateFieldArray(r,L,ta,{argA:ea(j)})},h=j=>{const _=aa(n._getFieldArray(r),j);m.current=aa(m.current,j),k(_),d(_),!Array.isArray(P(n._fields,r))&&ae(n._fields,r,void 0),n._updateFieldArray(r,_,aa,{argA:j})},A=(j,_,q)=>{const L=$e(Re(_)),C=ra(n._getFieldArray(r),j,L);n._names.focus=Zt(r,j,q),m.current=ra(m.current,j,L.map(pr)),k(C),d(C),n._updateFieldArray(r,C,ra,{argA:j,argB:ea(_)})},E=(j,_)=>{const q=n._getFieldArray(r);sa(q,j,_),sa(m.current,j,_),k(q),d(q),n._updateFieldArray(r,q,sa,{argA:j,argB:_},!1)},w=(j,_)=>{const q=n._getFieldArray(r);na(q,j,_),na(m.current,j,_),k(q),d(q),n._updateFieldArray(r,q,na,{argA:j,argB:_},!1)},O=(j,_)=>{const q=Re(_),L=Bs(n._getFieldArray(r),j,q);m.current=[...L].map((C,K)=>!C||K===j?pr():m.current[K]),k(L),d([...L]),n._updateFieldArray(r,L,Bs,{argA:j,argB:q},!0,!1)},D=j=>{const _=$e(Re(j));m.current=_.map(pr),k([..._]),d([..._]),n._updateFieldArray(r,[..._],q=>q,{},!0,!1)};return p.useEffect(()=>{if(n._state.action=!1,ha(r,n._names)&&n._subjects.state.next({...n._formState}),f.current&&(!wn(n._options.mode).isOnSubmit||n._formState.isSubmitted))if(n._options.resolver)n._executeSchema([r]).then(j=>{const _=P(j.errors,r),q=P(n._formState.errors,r);(q?!_&&q.type||_&&(q.type!==_.type||q.message!==_.message):_&&_.type)&&(_?ae(n._formState.errors,r,_):fe(n._formState.errors,r),n._subjects.state.next({errors:n._formState.errors}))});else{const j=P(n._fields,r);j&&j._f&&!(wn(n._options.reValidateMode).isOnSubmit&&wn(n._options.mode).isOnSubmit)&&Ra(j,n._names.disabled,n._formValues,n._options.criteriaMode===Je.all,n._options.shouldUseNativeValidation,!0).then(_=>!Ve(_)&&n._subjects.state.next({errors:Po(n._formState.errors,_,r)}))}n._subjects.values.next({name:r,values:{...n._formValues}}),n._names.focus&&Hr(n._fields,(j,_)=>{if(n._names.focus&&_.startsWith(n._names.focus)&&j.focus)return j.focus(),1}),n._names.focus="",n._updateValid(),f.current=!1},[l,r,n]),p.useEffect(()=>(!P(n._formValues,r)&&n._updateFieldArray(r),()=>{(n._options.shouldUnregister||s)&&n.unregister(r)}),[r,n,a,s]),{swap:p.useCallback(E,[k,r,n]),move:p.useCallback(w,[k,r,n]),prepend:p.useCallback(b,[k,r,n]),append:p.useCallback(y,[k,r,n]),remove:p.useCallback(h,[k,r,n]),insert:p.useCallback(A,[k,r,n]),update:p.useCallback(O,[k,r,n]),replace:p.useCallback(D,[k,r,n]),fields:p.useMemo(()=>l.map((j,_)=>({...j,[a]:m.current[_]||pr()})),[l,a])}}var ia=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},Ea=e=>De(e)||!Eo(e);function cr(e,t){if(Ea(e)||Ea(t))return e===t;if(wr(e)&&wr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const s=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=t[a];if(wr(s)&&wr(o)||ge(s)&&ge(o)||Array.isArray(s)&&Array.isArray(o)?!cr(s,o):s!==o)return!1}}return!0}var Io=e=>e.type==="select-multiple",kp=e=>Ca(e)||Mn(e),oa=e=>lt(e)&&e.isConnected,xo=e=>{for(const t in e)if(tr(e[t]))return!0;return!1};function ut(e,t={}){const n=Array.isArray(e);if(ge(e)||n)for(const r in e)Array.isArray(e[r])||ge(e[r])&&!xo(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ut(e[r],t[r])):De(e[r])||(t[r]=!0);return t}function Vo(e,t,n){const r=Array.isArray(e);if(ge(e)||r)for(const a in e)Array.isArray(e[a])||ge(e[a])&&!xo(e[a])?le(t)||Ea(n[a])?n[a]=Array.isArray(e[a])?ut(e[a],[]):{...ut(e[a])}:Vo(e[a],De(t)?{}:t[a],n[a]):n[a]=!cr(e[a],t[a]);return n}var yn=(e,t)=>Vo(e,t,ut(t)),Do=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>le(e)?e:t?e===""?NaN:e&&+e:n&&sr(e)?new Date(e):r?r(e):e;function la(e){const t=e.ref;return La(t)?t.files:Ca(t)?So(e.refs).value:Io(t)?[...t.selectedOptions].map(({value:n})=>n):Mn(t)?qo(e.refs).value:Do(le(t.value)?e.ref.value:t.value,e)}var yp=(e,t,n,r)=>{const a={};for(const s of e){const o=P(t,s);o&&ae(a,s,o._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},bn=e=>le(e)?e:dt(e)?e.source:ge(e)?dt(e.value)?e.value.source:e.value:e;const Gs="AsyncFunction";var bp=e=>!!e&&!!e.validate&&!!(tr(e.validate)&&e.validate.constructor.name===Gs||ge(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Gs)),hp=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Us(e,t,n){const r=P(e,n);if(r||Ma(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),o=P(t,s),l=P(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};a.pop()}return{name:n}}var Rp=(e,t,n,r,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:(n?r.isOnChange:a.isOnChange)?e:!0,Ep=(e,t)=>!Ln(P(e,t)).length&&fe(e,t);const Fp={mode:Je.onSubmit,reValidateMode:Je.onChange,shouldFocusError:!0};function Ap(e={}){let t={...Fp,...e},n={submitCount:0,isDirty:!1,isLoading:tr(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},a=ge(t.defaultValues)||ge(t.values)?Re(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:Re(a),o={action:!1,mount:!1,watch:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,m=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},u={values:ia(),array:ia(),state:ia()},f=wn(t.mode),k=wn(t.reValidateMode),y=t.criteriaMode===Je.all,b=c=>R=>{clearTimeout(m),m=setTimeout(c,R)},h=async c=>{if(!t.disabled&&(g.isValid||c)){const R=t.resolver?Ve((await q()).errors):await C(r,!0);R!==n.isValid&&u.state.next({isValid:R})}},A=(c,R)=>{!t.disabled&&(g.isValidating||g.validatingFields)&&((c||Array.from(l.mount)).forEach(F=>{F&&(R?ae(n.validatingFields,F,R):fe(n.validatingFields,F))}),u.state.next({validatingFields:n.validatingFields,isValidating:!Ve(n.validatingFields)}))},E=(c,R=[],F,V,I=!0,N=!0)=>{if(V&&F&&!t.disabled){if(o.action=!0,N&&Array.isArray(P(r,c))){const G=F(P(r,c),V.argA,V.argB);I&&ae(r,c,G)}if(N&&Array.isArray(P(n.errors,c))){const G=F(P(n.errors,c),V.argA,V.argB);I&&ae(n.errors,c,G),Ep(n.errors,c)}if(g.touchedFields&&N&&Array.isArray(P(n.touchedFields,c))){const G=F(P(n.touchedFields,c),V.argA,V.argB);I&&ae(n.touchedFields,c,G)}g.dirtyFields&&(n.dirtyFields=yn(a,s)),u.state.next({name:c,isDirty:x(c,R),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ae(s,c,R)},w=(c,R)=>{ae(n.errors,c,R),u.state.next({errors:n.errors})},O=c=>{n.errors=c,u.state.next({errors:n.errors,isValid:!1})},D=(c,R,F,V)=>{const I=P(r,c);if(I){const N=P(s,c,le(F)?P(a,c):F);le(N)||V&&V.defaultChecked||R?ae(s,c,R?N:la(I._f)):H(c,N),o.mount&&h()}},j=(c,R,F,V,I)=>{let N=!1,G=!1;const Z={name:c};if(!t.disabled){const _e=!!(P(r,c)&&P(r,c)._f&&P(r,c)._f.disabled);if(!F||V){g.isDirty&&(G=n.isDirty,n.isDirty=Z.isDirty=x(),N=G!==Z.isDirty);const je=_e||cr(P(a,c),R);G=!!(!_e&&P(n.dirtyFields,c)),je||_e?fe(n.dirtyFields,c):ae(n.dirtyFields,c,!0),Z.dirtyFields=n.dirtyFields,N=N||g.dirtyFields&&G!==!je}if(F){const je=P(n.touchedFields,c);je||(ae(n.touchedFields,c,F),Z.touchedFields=n.touchedFields,N=N||g.touchedFields&&je!==F)}N&&I&&u.state.next(Z)}return N?Z:{}},_=(c,R,F,V)=>{const I=P(n.errors,c),N=g.isValid&&We(R)&&n.isValid!==R;if(t.delayError&&F?(d=b(()=>w(c,F)),d(t.delayError)):(clearTimeout(m),d=null,F?ae(n.errors,c,F):fe(n.errors,c)),(F?!cr(I,F):I)||!Ve(V)||N){const G={...V,...N&&We(R)?{isValid:R}:{},errors:n.errors,name:c};n={...n,...G},u.state.next(G)}},q=async c=>{A(c,!0);const R=await t.resolver(s,t.context,yp(c||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return A(c),R},L=async c=>{const{errors:R}=await q(c);if(c)for(const F of c){const V=P(R,F);V?ae(n.errors,F,V):fe(n.errors,F)}else n.errors=R;return R},C=async(c,R,F={valid:!0})=>{for(const V in c){const I=c[V];if(I){const{_f:N,...G}=I;if(N){const Z=l.array.has(N.name),_e=I._f&&bp(I._f);_e&&g.validatingFields&&A([V],!0);const je=await Ra(I,l.disabled,s,y,t.shouldUseNativeValidation&&!R,Z);if(_e&&g.validatingFields&&A([V]),je[N.name]&&(F.valid=!1,R))break;!R&&(P(je,N.name)?Z?Po(n.errors,je,N.name):ae(n.errors,N.name,je[N.name]):fe(n.errors,N.name))}!Ve(G)&&await C(G,R,F)}}return F.valid},K=()=>{for(const c of l.unMount){const R=P(r,c);R&&(R._f.refs?R._f.refs.every(F=>!oa(F)):!oa(R._f.ref))&&J(c)}l.unMount=new Set},x=(c,R)=>!t.disabled&&(c&&R&&ae(s,c,R),!cr(ce(),a)),T=(c,R,F)=>No(c,l,{...o.mount?s:le(R)?a:sr(c)?{[c]:R}:R},F,R),B=c=>Ln(P(o.mount?s:a,c,t.shouldUnregister?P(a,c,[]):[])),H=(c,R,F={})=>{const V=P(r,c);let I=R;if(V){const N=V._f;N&&(!N.disabled&&ae(s,c,Do(R,N)),I=lt(N.ref)&&De(R)?"":R,Io(N.ref)?[...N.ref.options].forEach(G=>G.selected=I.includes(G.value)):N.refs?Mn(N.ref)?N.refs.length>1?N.refs.forEach(G=>(!G.defaultChecked||!G.disabled)&&(G.checked=Array.isArray(I)?!!I.find(Z=>Z===G.value):I===G.value)):N.refs[0]&&(N.refs[0].checked=!!I):N.refs.forEach(G=>G.checked=G.value===I):La(N.ref)?N.ref.value="":(N.ref.value=I,N.ref.type||u.values.next({name:c,values:{...s}})))}(F.shouldDirty||F.shouldTouch)&&j(c,I,F.shouldTouch,F.shouldDirty,!0),F.shouldValidate&&Ie(c)},z=(c,R,F)=>{for(const V in R){const I=R[V],N=`${c}.${V}`,G=P(r,N);(l.array.has(c)||ge(I)||G&&!G._f)&&!wr(I)?z(N,I,F):H(N,I,F)}},ue=(c,R,F={})=>{const V=P(r,c),I=l.array.has(c),N=Re(R);ae(s,c,N),I?(u.array.next({name:c,values:{...s}}),(g.isDirty||g.dirtyFields)&&F.shouldDirty&&u.state.next({name:c,dirtyFields:yn(a,s),isDirty:x(c,N)})):V&&!V._f&&!De(N)?z(c,N,F):H(c,N,F),ha(c,l)&&u.state.next({...n}),u.values.next({name:o.mount?c:void 0,values:{...s}})},X=async c=>{o.mount=!0;const R=c.target;let F=R.name,V=!0;const I=P(r,F),N=()=>R.type?la(I._f):Fo(c),G=Z=>{V=Number.isNaN(Z)||wr(Z)&&isNaN(Z.getTime())||cr(Z,P(s,F,Z))};if(I){let Z,_e;const je=N(),gr=c.type===ot.BLUR||c.type===ot.FOCUS_OUT,ol=!hp(I._f)&&!t.resolver&&!P(n.errors,F)&&!I._f.deps||Rp(gr,P(n.touchedFields,F),n.isSubmitted,k,f),Gt=ha(F,l,gr);ae(s,F,je),gr?(I._f.onBlur&&I._f.onBlur(c),d&&d(0)):I._f.onChange&&I._f.onChange(c);const Ut=j(F,je,gr,!1),ll=!Ve(Ut)||Gt;if(!gr&&u.values.next({name:F,type:c.type,values:{...s}}),ol)return g.isValid&&(t.mode==="onBlur"&&gr?h():gr||h()),ll&&u.state.next({name:F,...Gt?{}:Ut});if(!gr&&Gt&&u.state.next({...n}),t.resolver){const{errors:ps}=await q([F]);if(G(je),V){const dl=Us(n.errors,r,F),cs=Us(ps,r,dl.name||F);Z=cs.error,F=cs.name,_e=Ve(ps)}}else A([F],!0),Z=(await Ra(I,l.disabled,s,y,t.shouldUseNativeValidation))[F],A([F]),G(je),V&&(Z?_e=!1:g.isValid&&(_e=await C(r,!0)));V&&(I._f.deps&&Ie(I._f.deps),_(F,_e,Z,Ut))}},Fe=(c,R)=>{if(P(n.errors,R)&&c.focus)return c.focus(),1},Ie=async(c,R={})=>{let F,V;const I=$e(c);if(t.resolver){const N=await L(le(c)?c:I);F=Ve(N),V=c?!I.some(G=>P(N,G)):F}else c?(V=(await Promise.all(I.map(async N=>{const G=P(r,N);return await C(G&&G._f?{[N]:G}:G)}))).every(Boolean),!(!V&&!n.isValid)&&h()):V=F=await C(r);return u.state.next({...!sr(c)||g.isValid&&F!==n.isValid?{}:{name:c},...t.resolver||!c?{isValid:F}:{},errors:n.errors}),R.shouldFocus&&!V&&Hr(r,Fe,c?I:l.mount),V},ce=c=>{const R={...o.mount?s:a};return le(c)?R:sr(c)?P(R,c):c.map(F=>P(R,F))},Rr=(c,R)=>({invalid:!!P((R||n).errors,c),isDirty:!!P((R||n).dirtyFields,c),error:P((R||n).errors,c),isValidating:!!P(n.validatingFields,c),isTouched:!!P((R||n).touchedFields,c)}),Er=c=>{c&&$e(c).forEach(R=>fe(n.errors,R)),u.state.next({errors:c?n.errors:{}})},un=(c,R,F)=>{const V=(P(r,c,{_f:{}})._f||{}).ref,I=P(n.errors,c)||{},{ref:N,message:G,type:Z,..._e}=I;ae(n.errors,c,{..._e,...R,ref:V}),u.state.next({name:c,errors:n.errors,isValid:!1}),F&&F.shouldFocus&&V&&V.focus&&V.focus()},ee=(c,R)=>tr(c)?u.values.subscribe({next:F=>c(T(void 0,R),F)}):T(c,R,!0),J=(c,R={})=>{for(const F of c?$e(c):l.mount)l.mount.delete(F),l.array.delete(F),R.keepValue||(fe(r,F),fe(s,F)),!R.keepError&&fe(n.errors,F),!R.keepDirty&&fe(n.dirtyFields,F),!R.keepTouched&&fe(n.touchedFields,F),!R.keepIsValidating&&fe(n.validatingFields,F),!t.shouldUnregister&&!R.keepDefaultValue&&fe(a,F);u.values.next({values:{...s}}),u.state.next({...n,...R.keepDirty?{isDirty:x()}:{}}),!R.keepIsValid&&h()},Ae=({disabled:c,name:R,field:F,fields:V})=>{(We(c)&&o.mount||c||l.disabled.has(R))&&(c?l.disabled.add(R):l.disabled.delete(R),j(R,la(F?F._f:P(V,R)._f),!1,!1,!0))},xe=(c,R={})=>{let F=P(r,c);const V=We(R.disabled)||We(t.disabled);return ae(r,c,{...F||{},_f:{...F&&F._f?F._f:{ref:{name:c}},name:c,mount:!0,...R}}),l.mount.add(c),F?Ae({field:F,disabled:We(R.disabled)?R.disabled:t.disabled,name:c}):D(c,!0,R.value),{...V?{disabled:R.disabled||t.disabled}:{},...t.progressive?{required:!!R.required,min:bn(R.min),max:bn(R.max),minLength:bn(R.minLength),maxLength:bn(R.maxLength),pattern:bn(R.pattern)}:{},name:c,onChange:X,onBlur:X,ref:I=>{if(I){xe(c,R),F=P(r,c);const N=le(I.value)&&I.querySelectorAll&&I.querySelectorAll("input,select,textarea")[0]||I,G=kp(N),Z=F._f.refs||[];if(G?Z.find(_e=>_e===N):N===F._f.ref)return;ae(r,c,{_f:{...F._f,...G?{refs:[...Z.filter(oa),N,...Array.isArray(P(a,c))?[{}]:[]],ref:{type:N.type,name:c}}:{ref:N}}}),D(c,!1,void 0,N)}else F=P(r,c,{}),F._f&&(F._f.mount=!1),(t.shouldUnregister||R.shouldUnregister)&&!(Ao(l.array,c)&&o.action)&&l.unMount.add(c)}}},mn=()=>t.shouldFocusError&&Hr(r,Fe,l.mount),$n=c=>{We(c)&&(u.state.next({disabled:c}),Hr(r,(R,F)=>{const V=P(r,F);V&&(R.disabled=V._f.disabled||c,Array.isArray(V._f.refs)&&V._f.refs.forEach(I=>{I.disabled=V._f.disabled||c}))},0,!1))},Dr=(c,R)=>async F=>{let V;F&&(F.preventDefault&&F.preventDefault(),F.persist&&F.persist());let I=Re(s);if(l.disabled.size)for(const N of l.disabled)ae(I,N,void 0);if(u.state.next({isSubmitting:!0}),t.resolver){const{errors:N,values:G}=await q();n.errors=N,I=G}else await C(r);if(fe(n.errors,"root"),Ve(n.errors)){u.state.next({errors:{}});try{await c(I,F)}catch(N){V=N}}else R&&await R({...n.errors},F),mn(),setTimeout(mn);if(u.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ve(n.errors)&&!V,submitCount:n.submitCount+1,errors:n.errors}),V)throw V},gn=(c,R={})=>{P(r,c)&&(le(R.defaultValue)?ue(c,Re(P(a,c))):(ue(c,R.defaultValue),ae(a,c,Re(R.defaultValue))),R.keepTouched||fe(n.touchedFields,c),R.keepDirty||(fe(n.dirtyFields,c),n.isDirty=R.defaultValue?x(c,Re(P(a,c))):x()),R.keepError||(fe(n.errors,c),g.isValid&&h()),u.state.next({...n}))},Mr=(c,R={})=>{const F=c?Re(c):a,V=Re(F),I=Ve(c),N=I?a:V;if(R.keepDefaultValues||(a=F),!R.keepValues){if(R.keepDirtyValues){const G=new Set([...l.mount,...Object.keys(yn(a,s))]);for(const Z of Array.from(G))P(n.dirtyFields,Z)?ae(N,Z,P(s,Z)):ue(Z,P(N,Z))}else{if(Da&&le(c))for(const G of l.mount){const Z=P(r,G);if(Z&&Z._f){const _e=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(lt(_e)){const je=_e.closest("form");if(je){je.reset();break}}}}r={}}s=t.shouldUnregister?R.keepDefaultValues?Re(a):{}:Re(N),u.array.next({values:{...N}}),u.values.next({values:{...N}})}l={mount:R.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!g.isValid||!!R.keepIsValid||!!R.keepDirtyValues,o.watch=!!t.shouldUnregister,u.state.next({submitCount:R.keepSubmitCount?n.submitCount:0,isDirty:I?!1:R.keepDirty?n.isDirty:!!(R.keepDefaultValues&&!cr(c,a)),isSubmitted:R.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:I?{}:R.keepDirtyValues?R.keepDefaultValues&&s?yn(a,s):n.dirtyFields:R.keepDefaultValues&&c?yn(a,c):R.keepDirty?n.dirtyFields:{},touchedFields:R.keepTouched?n.touchedFields:{},errors:R.keepErrors?n.errors:{},isSubmitSuccessful:R.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Fr=(c,R)=>Mr(tr(c)?c(s):c,R);return{control:{register:xe,unregister:J,getFieldState:Rr,handleSubmit:Dr,setError:un,_executeSchema:q,_getWatch:T,_getDirty:x,_updateValid:h,_removeUnmounted:K,_updateFieldArray:E,_updateDisabledField:Ae,_getFieldArray:B,_reset:Mr,_resetDefaultValues:()=>tr(t.defaultValues)&&t.defaultValues().then(c=>{Fr(c,t.resetOptions),u.state.next({isLoading:!1})}),_updateFormState:c=>{n={...n,...c}},_disableForm:$n,_subjects:u,_proxyFormState:g,_setErrors:O,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(c){o=c},get _defaultValues(){return a},get _names(){return l},set _names(c){l=c},get _formState(){return n},set _formState(c){n=c},get _options(){return t},set _options(c){t={...t,...c}}},trigger:Ie,register:xe,handleSubmit:Dr,watch:ee,setValue:ue,getValues:ce,reset:Fr,resetField:gn,clearErrors:Er,unregister:J,setError:un,setFocus:(c,R={})=>{const F=P(r,c),V=F&&F._f;if(V){const I=V.refs?V.refs[0]:V.ref;I.focus&&(I.focus(),R.shouldSelect&&tr(I.select)&&I.select())}},getFieldState:Rr}}function zv(e={}){const t=p.useRef(void 0),n=p.useRef(void 0),[r,a]=p.useState({isDirty:!1,isValidating:!1,isLoading:tr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:tr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ap(e),formState:r});const s=t.current.control;return s._options=e,Tt({subject:s._subjects.state,next:o=>{To(o,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),p.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),p.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),p.useEffect(()=>{e.values&&!cr(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),p.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),p.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),p.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Oo(r,s),t.current}function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hs={exports:{}},hn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys;function jp(){if(Ys)return hn;Ys=1;var e=p,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(l,d,m){var g,u={},f=null,k=null;m!==void 0&&(f=""+m),d.key!==void 0&&(f=""+d.key),d.ref!==void 0&&(k=d.ref);for(g in d)r.call(d,g)&&!s.hasOwnProperty(g)&&(u[g]=d[g]);if(l&&l.defaultProps)for(g in d=l.defaultProps,d)u[g]===void 0&&(u[g]=d[g]);return{$$typeof:t,type:l,key:f,ref:k,props:u,_owner:a.current}}return hn.Fragment=n,hn.jsx=o,hn.jsxs=o,hn}var zs;function Op(){return zs||(zs=1,Hs.exports=jp()),Hs.exports}var $=Op();const Vr=e=>e.reduce((t,n,r)=>({...t,[r]:a=>n(a)||!0}),{}),kr=(e,t)=>{const n=t.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return n==null?void 0:n.message},Ye=({name:e,label:t,validate:n=[],readOnly:r=!1,onChange:a,onClick:s,className:o,disabled:l})=>{const{formState:{errors:d}}=W(),{field:m}=xr({name:e,rules:{validate:v.useMemo(()=>Vr(n),[n])}}),g=kr(d,e);return $.jsxs($.Fragment,{children:[$.jsx(ka,{size:"small",disabled:l||r,checked:m.value===!0,className:o,error:!!g,...m,onChange:u=>{m.onChange(u),a&&a(u.currentTarget.checked)},onClick:()=>{s&&s()},children:t}),g&&$.jsx(or,{children:kr(d,e)})]})},$a=({label:e,name:t,description:n,validate:r=[],checkboxes:a,onChange:s,disabled:o=!1,isReadOnly:l=!1,isHorizontal:d=!1,parse:m=f=>f,hideLegend:g=!1,isEdited:u=!1})=>{const{formState:{errors:f}}=W(),{field:k}=xr({name:t,rules:{validate:v.useMemo(()=>Vr(r),[r])}}),y=$.jsxs($.Fragment,{children:[e,l&&u&&$.jsx(Va,{})]});return $.jsxs(mm,{name:t,description:n,value:k.value!==void 0?k.value:[],onChange:b=>{s&&s(b),k.onChange(b)},size:"small",legend:y,error:kr(f,t),hideLegend:g,children:[!d&&a.map(b=>$.jsxs(v.Fragment,{children:[$.jsx(ka,{value:m(b.value),disabled:b.disabled||o||l,children:b.label}),(k.value??[]).includes(m(b.value))&&b.element]},b.value)),d&&$.jsxs($.Fragment,{children:[$.jsx(Be,{gap:"4",children:a.map(b=>$.jsx(ka,{value:m(b.value),disabled:b.disabled||o||l,children:b.label},b.value))}),a.filter(b=>(k.value??[]).includes(m(b.value))).map(b=>$.jsx(v.Fragment,{children:b.element},b.value))]})]})};var Fa={exports:{}},Tp=Fa.exports,Ws;function wp(){return Ws||(Ws=1,function(e,t){(function(n,r){e.exports=r()})(Tp,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,l=/\d*[^-_:/,()\s\d]+/,d={},m=function(h){return(h=+h)+(h>68?1900:2e3)},g=function(h){return function(A){this[h]=+A}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(h){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var E=A.match(/([+-]|\d\d)/g),w=60*E[1]+(+E[2]||0);return w===0?0:E[0]==="+"?-w:w}(h)}],f=function(h){var A=d[h];return A&&(A.indexOf?A:A.s.concat(A.f))},k=function(h,A){var E,w=d.meridiem;if(w){for(var O=1;O<=24;O+=1)if(h.indexOf(w(O,0,A))>-1){E=O>12;break}}else E=h===(A?"pm":"PM");return E},y={A:[l,function(h){this.afternoon=k(h,!1)}],a:[l,function(h){this.afternoon=k(h,!0)}],Q:[a,function(h){this.month=3*(h-1)+1}],S:[a,function(h){this.milliseconds=100*+h}],SS:[s,function(h){this.milliseconds=10*+h}],SSS:[/\d{3}/,function(h){this.milliseconds=+h}],s:[o,g("seconds")],ss:[o,g("seconds")],m:[o,g("minutes")],mm:[o,g("minutes")],H:[o,g("hours")],h:[o,g("hours")],HH:[o,g("hours")],hh:[o,g("hours")],D:[o,g("day")],DD:[s,g("day")],Do:[l,function(h){var A=d.ordinal,E=h.match(/\d+/);if(this.day=E[0],A)for(var w=1;w<=31;w+=1)A(w).replace(/\[|\]/g,"")===h&&(this.day=w)}],w:[o,g("week")],ww:[s,g("week")],M:[o,g("month")],MM:[s,g("month")],MMM:[l,function(h){var A=f("months"),E=(f("monthsShort")||A.map(function(w){return w.slice(0,3)})).indexOf(h)+1;if(E<1)throw new Error;this.month=E%12||E}],MMMM:[l,function(h){var A=f("months").indexOf(h)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,g("year")],YY:[s,function(h){this.year=m(h)}],YYYY:[/\d{4}/,g("year")],Z:u,ZZ:u};function b(h){var A,E;A=h,E=d&&d.formats;for(var w=(h=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,K,x){var T=x&&x.toUpperCase();return K||E[x]||n[x]||E[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(B,H,z){return H||z.slice(1)})})).match(r),O=w.length,D=0;D<O;D+=1){var j=w[D],_=y[j],q=_&&_[0],L=_&&_[1];w[D]=L?{regex:q,parser:L}:j.replace(/^\[|\]$/g,"")}return function(C){for(var K={},x=0,T=0;x<O;x+=1){var B=w[x];if(typeof B=="string")T+=B.length;else{var H=B.regex,z=B.parser,ue=C.slice(T),X=H.exec(ue)[0];z.call(K,X),C=C.replace(X,"")}}return function(Fe){var Ie=Fe.afternoon;if(Ie!==void 0){var ce=Fe.hours;Ie?ce<12&&(Fe.hours+=12):ce===12&&(Fe.hours=0),delete Fe.afternoon}}(K),K}}return function(h,A,E){E.p.customParseFormat=!0,h&&h.parseTwoDigitYear&&(m=h.parseTwoDigitYear);var w=A.prototype,O=w.parse;w.parse=function(D){var j=D.date,_=D.utc,q=D.args;this.$u=_;var L=q[1];if(typeof L=="string"){var C=q[2]===!0,K=q[3]===!0,x=C||K,T=q[2];K&&(T=q[2]),d=this.$locale(),!C&&T&&(d=E.Ls[T]),this.$d=function(ue,X,Fe,Ie){try{if(["x","X"].indexOf(X)>-1)return new Date((X==="X"?1e3:1)*ue);var ce=b(X)(ue),Rr=ce.year,Er=ce.month,un=ce.day,ee=ce.hours,J=ce.minutes,Ae=ce.seconds,xe=ce.milliseconds,mn=ce.zone,$n=ce.week,Dr=new Date,gn=un||(Rr||Er?1:Dr.getDate()),Mr=Rr||Dr.getFullYear(),Fr=0;Rr&&!Er||(Fr=Er>0?Er-1:Dr.getMonth());var pn,Kn=ee||0,Bn=J||0,c=Ae||0,R=xe||0;return mn?new Date(Date.UTC(Mr,Fr,gn,Kn,Bn,c,R+60*mn.offset*1e3)):Fe?new Date(Date.UTC(Mr,Fr,gn,Kn,Bn,c,R)):(pn=new Date(Mr,Fr,gn,Kn,Bn,c,R),$n&&(pn=Ie(pn).week($n).toDate()),pn)}catch{return new Date("")}}(j,L,_,E),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),x&&j!=this.format(L)&&(this.$d=new Date("")),d={}}else if(L instanceof Array)for(var B=L.length,H=1;H<=B;H+=1){q[1]=L[H-1];var z=E.apply(this,q);if(z.isValid()){this.$d=z.$d,this.$L=z.$L,this.init();break}H===B&&(this.$d=new Date(""))}else O.call(this,D)}}})}(Fa)),Fa.exports}var Np=wp();const Pp=_p(Np),qp="_readOnlyContainer_v0eco_1",Sp="_readOnlyContent_v0eco_4",Ip="_readOnlyContentCenter_v0eco_7",xp="_textarea_v0eco_11",Vp="_space_v0eco_15",Yn={readOnlyContainer:qp,readOnlyContent:Sp,readOnlyContentCenter:Ip,textarea:xp,space:Vp},Dp=e=>e!=null&&e!=="",wt=({label:e,value:t,isEdited:n=!1,type:r,hideLabel:a,size:s})=>Dp(t)?$.jsxs("div",{className:Yn.readOnlyContainer,children:[e&&!a&&$.jsx(Ce,{size:"small",children:e}),$.jsx("div",{className:r==="textarea"?Yn.textarea:"",children:$.jsxs(Bl,{className:Yn.readOnlyContent,size:s,children:[t,n&&$.jsx(Va,{className:Yn.space})]})})]}):null;Y.extend(Pp);const Q=({name:e,label:t,description:n,validate:r=[],disabled:a=!1,isReadOnly:s=!1,onChange:o,disabledDays:l,isEdited:d,defaultMonth:m,fromDate:g,toDate:u,size:f="small"})=>{const{formState:{errors:k}}=W(),{field:y}=xr({name:e,rules:{validate:v.useMemo(()=>Vr(r),[r])}}),b=y.value?Y(y.value,Ee,!0).format(Tr):"",[h,A]=v.useState(b),{datepickerProps:E,inputProps:w}=Vu({onDateChange:j=>{if(j!==void 0){const _=Y(j).format(Ee);o&&o(_),y.onChange(_),A(Y(_,Ee,!0).format(Tr))}},defaultSelected:y.value?Y(y.value,Ee,!0).toDate():void 0,defaultMonth:m||(!y.value&&u?u:void 0),disabled:l}),O=v.useCallback(j=>{const _=Y(j.target.value,Tr,!0).format(Ee),q=_!=="Invalid Date";A(j.target.value),o&&o(q?_:j.target.value),y.onChange(q?_:j.target.value)},[A,o,y]);if(s)return $.jsx(wt,{label:t,value:y.value?Y(y.value,Ee,!0).format(Tr):void 0,isEdited:d,size:f});const D={...E,fromDate:g,toDate:u,dropdownCaption:g&&u?!0:void 0};return $.jsx(st,{...D,children:$.jsx(st.Input,{...w,onChange:O,value:h,size:f,label:t,description:n,disabled:a,error:kr(k,e)})})},Oe=({name:e,label:t,validate:n=[],readOnly:r=!1,type:a,shouldValidateOnBlur:s=!1,onBlur:o,onChange:l,description:d,autoFocus:m,parse:g=O=>O,format:u=O=>O,normalizeOnBlur:f,isEdited:k,maxLength:y,autoComplete:b=!1,disabled:h,className:A,hideLabel:E,...w})=>{const{formState:{errors:O},trigger:D}=W(),{field:j}=xr({name:e,rules:{validate:v.useMemo(()=>Vr(n),[n])}});return r?$.jsx(wt,{label:t,value:j.value,isEdited:k,hideLabel:E,size:w.size}):$.jsx(Am,{size:"small",hideLabel:E,description:d,label:t,error:kr(O,e),...j,value:j.value?u(j.value):"",autoFocus:m,autoComplete:b?void 0:"off",maxLength:y,disabled:h,type:a,className:A,onChange:_=>{const q=_.currentTarget.value?g(_.currentTarget.value):null;return l&&l(q),j.onChange(q)},onBlur:async _=>{var q,L,C,K;if(j.onBlur(),s){const x=await D();o&&x&&o((q=_==null?void 0:_.target)==null?void 0:q.value)}else o&&o((L=_==null?void 0:_.target)==null?void 0:L.value);f&&j.onChange((C=_==null?void 0:_.target)!=null&&C.value?f(g((K=_==null?void 0:_.target)==null?void 0:K.value)):null)},...w})},Mp="_hideRadioLabels_1u3xf_1",Lp={hideRadioLabels:Mp},br=({label:e,description:t,name:n,validate:r=[],radios:a,onChange:s,disabled:o=!1,isReadOnly:l=!1,isHorizontal:d=!1,parse:m=y=>y,isTrueOrFalseSelection:g=!1,hideLegend:u=!1,hideRadioLabels:f=!1,isEdited:k=!1})=>{const{formState:{errors:y}}=W(),{field:b}=xr({name:n,rules:{validate:v.useMemo(()=>Vr(r),[r])}}),h=g?E=>E==="true":m,A=$.jsxs($.Fragment,{children:[e,l&&k&&$.jsx(Va,{})]});return $.jsxs(fm,{name:n,value:b.value!==void 0?b.value:null,onChange:E=>{s&&s(E),b.onChange(E)},size:"small",legend:A,description:t,error:kr(y,n),className:f?Lp.hideRadioLabels:"",hideLegend:u,children:[!d&&a.map(E=>$.jsxs(v.Fragment,{children:[$.jsx(Ts,{value:h(E.value),disabled:E.disabled||o||l,children:E.label}),b.value===h(E.value)&&E.element]},E.value)),d&&$.jsxs($.Fragment,{children:[$.jsx(Be,{gap:"4",children:a.map(E=>$.jsx(Ts,{value:h(E.value),disabled:E.disabled||o||l,children:E.label},E.value))}),a.filter(E=>b.value===h(E.value)).map(E=>$.jsx(v.Fragment,{children:E.element},E.value))]})]})},Ke=({name:e,label:t,selectValues:n,validate:r=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:l,disabled:d,className:m,hideLabel:g,isEdited:u,size:f})=>{const{formState:{errors:k}}=W(),{field:y}=xr({name:e,rules:{validate:v.useMemo(()=>Vr(r),[r])}});if(a){const A=n.map(w=>w.props).find(w=>w.value===y.value),E=A?A.children:void 0;return $.jsx(wt,{value:E,label:t,hideLabel:g,isEdited:u,size:f})}const b=y.value||"",h=!n.map(A=>A.props.value).includes(b)&&b!=="";return h&&console.warn(`No corresponding option found for value '${b}'`),$.jsxs(va,{size:"small",className:m,error:kr(k,e),label:t,description:s,value:o&&d||h?"":y.value,disabled:d,onChange:A=>{l&&l(A),y.onChange(A)},hideLabel:g,children:[$.jsx("option",{style:{display:"none"}}),",",n]})},Cp="_textAreaFieldWithBadges_bdz0b_1",$p="_etikettWrapper_bdz0b_4",Js={textAreaFieldWithBadges:Cp,etikettWrapper:$p},Mo=({name:e,label:t,readOnly:n,maxLength:r,badges:a,validate:s=[],parse:o=u=>u,className:l,description:d,isEdited:m,...g})=>{const{formState:{errors:u}}=W(),{field:f}=xr({name:e,rules:{validate:v.useMemo(()=>Vr(s),[s])}});return n?$.jsx(wt,{label:t,value:f.value,type:"textarea",isEdited:m,hideLabel:g.hideLabel}):$.jsxs("div",{className:a?Js.textAreaFieldWithBadges:null,children:[a&&$.jsx("div",{className:Js.etikettWrapper,children:a.map(({type:k,titleText:y})=>$.jsx(om,{variant:k,size:"small",children:y},y))}),$.jsx(Em,{size:"small",label:t,description:d,className:l,autoComplete:"off",...f,onChange:k=>f.onChange(k.currentTarget.value!==""?o(k.currentTarget.value):null),value:f.value?f.value:"",error:kr(u,e),maxLength:r,...g})]})},Wv=({formMethods:e,onSubmit:t,children:n,className:r,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return v.useEffect(()=>()=>{a&&a(o())},[]),$.jsx(up,{...e,children:$.jsx("form",{className:r,onSubmit:t?s(l=>t(l)):void 0,children:n})})},Kp="_addCircleIcon_bm9jq_1",Bp="_imageText_bm9jq_2",Gp="_addPeriode_bm9jq_7",da={addCircleIcon:Kp,imageText:Bp,addPeriode:Gp};function Xs(e,t){return()=>{e(t)}}function Up(e,t){return({key:n})=>{n==="Enter"&&e(t)}}const Hp=(e,t)=>n=>{if(e>0)return $.jsx(be,{className:n,icon:$.jsx(Gl,{"aria-hidden":!0}),type:"button",onClick:()=>{t(e)}})},er=({fields:e,readOnly:t=!0,titleText:n,bodyText:r,emptyPeriodTemplate:a={periodeFom:"",periodeTom:""},shouldShowAddButton:s=!0,createAddButtonInsteadOfImageLink:o=!1,children:l,remove:d,append:m})=>$.jsxs(xa,{legend:n,children:[e.map((g,u)=>l(g,u,Hp(u,d))),s&&$.jsxs($.Fragment,{children:[!o&&!t&&$.jsxs("div",{onClick:Xs(m,a),onKeyDown:Up(m,a),className:da.addPeriode,role:"button",tabIndex:0,children:[$.jsx(at,{className:da.addCircleIcon,title:r}),$.jsx(Dn,{className:da.imageText,children:r})]}),o&&!t&&$.jsx(be,{icon:$.jsx(at,{"aria-hidden":!0}),type:"button",onClick:Xs(m,a),children:r}),$.jsx(In,{sixteenPx:!0})]})]}),mt="andreYtelser",Lo="andreYtelserPerioder",Co="andreYtelserTyper",Yp="Dato må være før eller lik {limit}",zp="Dato må være etter eller lik {limit}",Wp="Perioder kan ikke overlappe i tid",Jp="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Xp="Dato må være lik {value}",Zp="Dato må skrives slik: dd.mm.åååå",Qp="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",ec="Tallet kan ikke inneholde mer enn to desimaler",rc="Tallet kan ikke ha desimaler",nc="Feltet kan kun inneholde tall",tc="Ugyldig fødselsnummer",ac="Feltet må være et fødselsnummer (11 siffer)",sc="Ugyldig organisasjonsnummer.",ic="Ugyldig organisasjonsnummer eller fødselsnummer",oc="Startdato må være før eller lik sluttdato",lc="Periode er utenfor opptjeningsperioden",dc="Ugyldig saksnummer eller fødselsnummer",uc="Feltet inneholder ugyldige tegn: {text}",mc="Feltet inneholder en ugyldig verdi: {value}",gc="Feltet kan ikke inneholde mellomrom",pc="Feltet må fylles ut",cc="Du kan skrive maksimalt {length} tegn",fc="Du må skrive minst {length} tegn",vc="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",kc="Feltet må være mindre eller lik {length}",yc="Feltet må være større eller lik {length}",bc="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",hc={DateNotBeforeOrEqual:Yp,DateNotAfterOrEqual:zp,DateRangesOverlapping:Wp,DateRangesOverlappingPeriodTypes:Jp,DatesNotEqual:Xp,InvalidDate:Zp,InvalidDatesInPeriod:Qp,InvalidDecimal:ec,InvalidInteger:rc,InvalidNumber:nc,InvalidFodselsnr:tc,InvalidFodselsnrFormat:ac,InvalidOrgnr:sc,InvalidOrgnrOrFodselsnr:ic,InvalidPeriod:oc,InvalidPeriodRange:lc,InvalidSaksnrOrFodselsnrFormat:dc,InvalidText:uc,InvalidValue:mc,IllegalWhiteSpace:gc,IsRequired:pc,MaxLength:cc,MinLength:fc,MaxLengthOrFodselsnr:vc,MaxValue:kc,MinValue:yc,SammeFodselsnrSomSoker:bc},{formatMessage:pe}=ie(hc),Rc=e=>pe({id:"DateNotBeforeOrEqual"},{limit:e}),Ec=e=>pe({id:"DateNotAfterOrEqual"},{limit:e}),Fc=()=>pe({id:"DateRangesOverlapping"}),Ac=e=>pe({id:"DatesNotEqual"},{value:e}),_c=()=>pe({id:"InvalidDate"}),jc=e=>pe({id:"InvalidDecimal"},{text:e}),Oc=e=>pe({id:"InvalidInteger"},{text:e}),Tc=e=>pe({id:"InvalidNumber"},{text:e}),wc=()=>pe({id:"InvalidFodselsnr"}),Nc=()=>pe({id:"InvalidFodselsnrFormat"}),Pc=()=>pe({id:"InvalidOrgnr"}),qc=()=>pe({id:"InvalidOrgnrOrFodselsnr"}),Sc=()=>pe({id:"InvalidPeriod"}),Ic=e=>pe({id:"InvalidText"},{text:e}),xc=()=>pe({id:"IllegalWhiteSpace"}),Vc=()=>pe({id:"IsRequired"}),Dc=e=>pe({id:"MaxLength"},{length:e}),Mc=e=>pe({id:"MaxLengthOrFodselsnr"},{length:e}),Lc=e=>pe({id:"MaxValue"},{length:e}),Cc=e=>pe({id:"MinValue"},{length:e}),$c=()=>pe({id:"SammeFodselsnrSomSoker"}),Kc=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,Bc=/^\d+([,.]\d+)?$/,Gc=/^\s*\d+\s*$/,Uc=/^\d+(.\d{1,2})?$/,Hc=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Yc=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Qe=e=>e==null||e.toString().trim().length===0,zc=()=>Y().startOf("day"),Wc=e=>{if(Array.isArray(e)){const t=(n,r,a)=>{const s=Y(n,Ee).startOf("day"),o=r+1<a.length?Y(a[r+1],Ee).startOf("day"):null;return o!==null?s.isBefore(o):!0};return[...e].sort((n,r)=>Y(n[0],Ee).startOf("day").isAfter(Y(r[0],Ee).startOf("day"))?1:-1).map(n=>n[0]===n[1]?[n[0]]:n).reduce((n,r)=>n.concat(r)).every(t)}return!0};function $o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Aa={exports:{}},Jc=Aa.exports,Zs;function Xc(){return Zs||(Zs=1,function(e,t){(function(n,r){e.exports=r()})(Jc,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(Aa)),Aa.exports}var Zc=Xc();const Qc=$o(Zc);var _a={exports:{}},ef=_a.exports,Qs;function rf(){return Qs||(Qs=1,function(e,t){(function(n,r){e.exports=r()})(ef,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(_a)),_a.exports}var nf=rf();const tf=$o(nf);Y.extend(Qc);Y.extend(tf);const af=e=>t=>Qe(t)||t.toString().trim().length<=e?null:Mc(e),M=e=>Qe(e)?Vc():void 0,Ka=e=>t=>Qe(t)||t.toString().trim().length<=e?null:Dc(e),Ko=e=>t=>t>=e?null:Cc(e),Cn=e=>t=>t<=e?null:Lc(e),sf=e=>e.toString().trim().length===9?null:Pc(),of=e=>e.toString().trim().length===9||e.toString().trim().length===11?null:qc(),lf=e=>/\s/g.test(e)?xc():null,Bo=e=>Qe(e)||Bc.test(e.toString())?null:Tc(e.toString()),df=e=>Qe(e)||Gc.test(e.toString())?null:Oc(e.toString()),uf=e=>Qe(e)||Uc.test(e.toString())?null:jc(e.toString()),Pr=e=>Bo(e)||df(e),ja=e=>Bo(e)||uf(e),re=e=>Qe(e)||Kc.test(e)?null:_c(),Se=e=>t=>{const n=Y(e).endOf("day");return Qe(t)||Y(t).isSameOrBefore(n)?null:Rc(n.format(Tr))},Te=e=>t=>{const n=Y(e).startOf("day");return Qe(t)||Y(t).isSameOrAfter(n)?null:Ec(n.format(Tr))},Zr=e=>Wc(e)?null:Fc(),Jr=e=>Se(zc())(e),mf=e=>Ul.test(e)?null:Nc(),Go=e=>Hl(e)?null:wc(),gf=e=>t=>t===e?$c():null,Ba=e=>{if(!Hc.test(e)){const t=e.replace(Yc,"");return Ic(t.replace(/[\t]/g,"Tabulatortegn"))}return null},pf=(e,t)=>e!==t?Ac(Y(t).format(Tr)):null,cf=(e,t)=>Qe(e)&&Qe(t)||Y(e).isSameOrBefore(Y(t).startOf("day"))?null:Sc(),ff=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const n=e[0];n.setAttributeNode(t),document.activeElement.blur(),n.focus()}},300)},Uo=({readOnly:e,name:t})=>{const n=de(),{getValues:r,control:a,trigger:s,formState:{isSubmitted:o}}=W(),{fields:l,remove:d,append:m}=Ue({control:a,name:t});return v.useEffect(()=>{l.length===0&&m({periodeFom:"",periodeTom:""})},[]),i.jsx(er,{fields:l,bodyText:n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:m,remove:d,children:(g,u)=>{const f=`${t}.${u}`;return i.jsxs(Be,{gap:"2",children:[i.jsx(Q,{name:`${f}.periodeFom`,label:u===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[M,re,()=>{const{periodeFom:k,periodeTom:y}=r(`${t}.${u}`);return y&&k?Se(y)(k):null}],onChange:()=>o?s():void 0}),i.jsx(Q,{name:`${t}.${u}.periodeTom`,label:u===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[M,re,()=>{const{periodeFom:k,periodeTom:y}=r(`${t}.${u}`);return k&&y?Te(k)(y):null}],onChange:()=>o?s():void 0}),!e&&u>0&&i.jsx("div",{children:i.jsx(be,{size:"small",type:"button",variant:"tertiary-neutral",icon:i.jsx(At,{}),onClick:()=>d(u)})})]},g.id)}})};Uo.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};const vf=(e,t)=>t?e.filter(n=>n.kode===An.MILITÆR_ELLER_SIVILTJENESTE):e.filter(n=>n.kode!==An.UTENLANDSK_ARBEIDSFORHOLD&&n.kode!==An.FRILANSER&&n.kode!==An.LONN_UNDER_UTDANNING),Qr=({readOnly:e,kunMiliterEllerSiviltjeneste:t=!1,alleKodeverk:n})=>{const r=n[Le.ARBEID_TYPE],a=v.useMemo(()=>vf(r,t),[t]);return i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.AndreYtelser.Title"})}),i.jsx($a,{isReadOnly:e,name:`${mt}.${Co}`,checkboxes:a.map(s=>({label:s.navn,value:s.kode,element:i.jsx(Me,{children:i.jsx(Uo,{name:`${mt}.${Lo}.${s.kode}`,readOnly:e})})}))})]})})};Qr.initialValues=()=>({[mt]:{[Co]:[],[Lo]:{}}});Qr.transformValues=({andreYtelser:{andreYtelserTyper:e,andreYtelserPerioder:t}})=>({[mt]:e.flatMap(n=>t[n].map(r=>({ytelseType:n,...r})))});Qr.__docgenInfo={description:`AndreYtelserPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]},alias:"AndreYtelserFormValue"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
}`,signature:{properties:[{key:"andreYtelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}[]`,required:!0}}]}}}}],displayName:"AndreYtelserPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const he={"Registrering.Yes":"Ja","Registrering.No":"Nei","Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.TerminOgFodsel.Tittel":"Opplysninger om termin og fødsel","Registrering.TerminOgFodsel.ErBarnetFodt":"Er barnet født?","Registrering.TerminOgFodsel.ErFodt":"Ja","Registrering.TerminOgFodsel.ErIkkeFodt":"Nei","Registrering.TerminOgFodsel.Termindato":"Termindato","Registrering.TerminOgFodsel.AntallBarn":"Antall barn","Registrering.TerminOgFodsel.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.TerminOgFodsel.Fodselsdato":"Fødselsdato","Registrering.TerminOgFodsel.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","ModalLukkPapirSoknad.ModalDescription":"Registrering av søknaden avsluttes","ModalLukkPapirSoknad.Avslutt":"Avslutt registrering av søknaden","ModalLukkPapirSoknad.Title":"Avslutter registrering av søknaden","ModalLukkPapirSoknad.Opplysninger":"Det er ikke mulig å innhente ytterligere opplysninger.","ModalLukkPapirSoknad.Bekreft":"Bekreft at søknaden skal avslås.","ModalLukkPapirSoknad.Ok":"OK","ModalLukkPapirSoknad.Avbryt":"Avbryt","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Label":"Begrunnelse","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og avslutt behandling","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til periode","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.NyIArbeidslivet":"Ny i arbeidslivet","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Søkers virksomheter","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Det må registreres minst 1 virksomhet","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.TittelSN":"Tilretteleggingsbehov for selvstendig næringsdrivende","BehovForTilretteleggingPanel.TittelFrilans":"Tilretteleggingsbehov for frilanser","BehovForTilretteleggingPanel.TittelArbeidstaker":"Tilretteleggingsbehov for arbeidstaker","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.Title":"Arbeidsgivere med tilretteleggingsbehov","TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength":"Det må registreres minst 1 arbeidsforhold","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","RegistrerArbeidsgiverRad.OrgNr":"Arbeidsgivers orgnr/fnr","RegistrerArbeidsgiverRad.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.ForTidligTermin":"Termin kan ikke være mer enn 3 uker før fødsel","ValidationMessage.ForSenTermin":"Termin kan ikke være mer enn 5 måneder etter fødsel"},kf=ie(he),Ga=({readOnly:e,alleKodeverk:t,kunMiliterEllerSiviltjeneste:n})=>i.jsx(Ge,{value:kf,children:i.jsx(Qr,{readOnly:e,alleKodeverk:t,kunMiliterEllerSiviltjeneste:n})});Ga.initialValues=Qr.initialValues;Ga.transformValues=Qr.transformValues;Ga.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]},alias:"AndreYtelserFormValue"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
}`,signature:{properties:[{key:"andreYtelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}[]`,required:!0}}]}}}}],displayName:"AndreYtelserPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const qe="annenForelder",zn="kanIkkeOppgiBegrunnelse",yf="_inputBredde_138ho_1",ua={inputBredde:yf},bf=e=>e.filter(({kode:t})=>t!==Et.NORGE).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),Nt=({readOnly:e=!0,alleKodeverk:t,fagsakPersonnummer:n})=>{const{formatMessage:r}=de(),{watch:a,trigger:s,formState:{isSubmitted:o}}=W(),l=a(`${qe}.kanIkkeOppgiAnnenForelder`),d=a(`${qe}.${zn}`),m=t[Le.LANDKODER],g=v.useMemo(()=>m.slice().sort((u,f)=>u.navn.localeCompare(f.navn)),[m]);return i.jsxs(i.Fragment,{children:[i.jsx(Oe,{name:`${qe}.foedselsnummer`,label:r({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:u=>u&&u.toString().replace(/\s/g,""),readOnly:e,className:ua.inputBredde,validate:l?[]:[M,mf,Go,gf(n)],disabled:l}),i.jsx(Ye,{name:`${qe}.kanIkkeOppgiAnnenForelder`,label:r({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>o?s():void 0}),l===!0&&i.jsx(Me,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:r({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),i.jsx(br,{name:`${qe}.${zn}.arsak`,hideLegend:!0,validate:[M],isReadOnly:e,radios:[{label:r({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:Tn.UKJENT_FORELDER},{label:r({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:Tn.IKKE_NORSK_FNR}]}),(d==null?void 0:d.arsak)===Tn.IKKE_NORSK_FNR&&i.jsxs(i.Fragment,{children:[i.jsx(Ke,{name:`${qe}.${zn}.land`,label:r({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:bf(g),validate:[M],className:ua.inputBredde,readOnly:e}),i.jsx(Oe,{name:`${qe}.${zn}.utenlandskFoedselsnummer`,label:r({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[M],className:ua.inputBredde,readOnly:e})]})]})})]})};Nt.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:t,kanIkkeOppgiBegrunnelse:{arsak:n,land:r,utenlandskFoedselsnummer:a}={}})=>t?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:n===Tn.IKKE_NORSK_FNR?{arsak:n,land:r,utenlandskFoedselsnummer:a}:{arsak:n}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};Nt.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  foedselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { arsak, land, utenlandskFoedselsnummer } = {},
}: AnnenForelderSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]},alias:"AnnenForelderSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}}}}],displayName:"OppgiAnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ei=ie(he),ye=({name:e,label:t,isHorizontal:n=!0,readOnly:r,trueLabel:a,trueContent:s,falseLabel:o,falseContent:l,isRequired:d=!0})=>i.jsx(br,{name:e,label:t,validate:d?[M]:[],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:n,radios:[{label:a??ei.formatMessage({id:"Registrering.Yes"}),value:"true",element:s},{label:o??ei.formatMessage({id:"Registrering.No"}),value:"false",element:l}]});ye.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const Pt=({readOnly:e,sokerErMor:t})=>{const n=de(),{watch:r}=W(),a=r(`${qe}.sokerHarAleneomsorg`),s=r(`${qe}.denAndreForelderenHarRettPaForeldrepenger`),o=r(`${qe}.annenForelderRettEØS`);return i.jsxs(ne,{gap:"4",children:[i.jsx(ye,{name:`${qe}.sokerHarAleneomsorg`,label:n.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),a===!1&&i.jsx(ye,{name:`${qe}.denAndreForelderenHarRettPaForeldrepenger`,label:n.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),a===!1&&s===!1&&i.jsx(ye,{name:`${qe}.annenForelderRettEØS`,label:n.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!t&&a===!1&&s===!1&&o===!1&&i.jsx(ye,{name:`${qe}.morMottarUføretrygd`,label:n.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};Pt.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:t,annenForelderRettEØS:n,morMottarUføretrygd:r})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?t:void 0,annenForelderRettEØS:t===!1?n:void 0,morMottarUføretrygd:n===!1?r:void 0});Pt.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  sokerHarAleneomsorg,
  denAndreForelderenHarRettPaForeldrepenger,
  annenForelderRettEØS,
  morMottarUføretrygd,
}: PermisjonRettigheterFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]},alias:"PermisjonRettigheterFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const hf=ie(he),Ua=({readOnly:e,alleKodeverk:t,fagsakPersonnummer:n,sokerErMor:r})=>i.jsx(Ge,{value:hf,children:i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.TheOtherParent.Title"})}),i.jsx(Nt,{readOnly:e,fagsakPersonnummer:n,alleKodeverk:t}),i.jsx(Pt,{readOnly:e,sokerErMor:r})]})})});Ua.initialValues=()=>({[qe]:{}});Ua.transformValues=({annenForelder:e})=>({[qe]:{...Pt.transformValues(e),...Nt.transformValues(e)}});Ua.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  annenForelder,
}: AnnenForelderFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"AnnenForelderFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const Xe="frilans",jn=(e,t)=>e(t),Rf=(e=[])=>e.map(t=>t.periodeFom).filter(t=>t&&t!=="").sort((t,n)=>Y(t,Ee).diff(Y(n,Ee))),Ef=Ka(50),Ff=(e,t,n,r)=>()=>{const a=jn(e,`${t}.fomDato`);return n.length>0&&n[0]&&a&&!Y(n[0]).isSameOrBefore(Y(a))?r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},Ho=({readOnly:e})=>{const t=de(),{control:n,getValues:r,watch:a,trigger:s,formState:{isSubmitted:o}}=W(),{fields:l,remove:d,append:m}=Ue({control:n,name:`${Xe}.oppdragPerioder`}),g=a(`${Xe}.perioder`),u=v.useMemo(()=>Rf(g),[g]);return i.jsx(er,{bodyText:t.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:l,readOnly:e,append:m,remove:d,children:(f,k,y)=>{const b=`${Xe}.oppdragPerioder.${k}`;return i.jsxs(Be,{gap:"4",paddingBlock:"2",align:"end",children:[i.jsx(Q,{name:`${b}.fomDato`,label:t.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[re,Ff(r,b,u,t),()=>{const h=jn(r,`${b}.fomDato`),A=jn(r,`${b}.tomDato`);return A&&h?Se(A)(h):null}],onChange:()=>o?s():void 0}),i.jsx(Q,{name:`${b}.tomDato`,label:t.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[re,()=>{const h=jn(r,`${b}.fomDato`),A=jn(r,`${b}.tomDato`);return A&&h?Te(h)(A):null}],onChange:()=>o?s():void 0}),i.jsx(Oe,{name:`${b}.oppdragsgiver`,validate:[Ef],label:t.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})}),y&&i.jsx("div",{children:y()})]},f.id)}})};Ho.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const en=({readOnly:e})=>{const{watch:t}=W(),n=t(`${Xe}.harHattOppdragForFamilie`);return i.jsxs(i.Fragment,{children:[i.jsx(ye,{name:`${Xe}.harHattOppdragForFamilie`,label:i.jsx(S,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),readOnly:e}),n&&i.jsxs(Me,{children:[i.jsx(Ce,{size:"small",children:i.jsx(S,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),i.jsx(Ho,{readOnly:e})]})]})};en.initialValues=()=>({oppdragPerioder:[{fomDato:"",tomDato:"",oppdragsgiver:""}]});en.transformValues=({harHattOppdragForFamilie:e,oppdragPerioder:t})=>({harHattOppdragForFamilie:e,oppdragPerioder:e?t:void 0});en.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  harHattOppdragForFamilie,
  oppdragPerioder,
}: FrilansSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},alias:"FrilansSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Wn=(e,t)=>e(t),qt=({readOnly:e})=>{const t=de(),{control:n,getValues:r,formState:{isSubmitted:a},trigger:s}=W(),{fields:o,remove:l,append:d}=Ue({control:n,name:`${Xe}.perioder`});return i.jsx(er,{fields:o,bodyText:t.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,remove:l,append:d,children:(m,g,u)=>{const f=`${Xe}.perioder.${g}`;return i.jsxs(Be,{gap:"4",paddingBlock:"2",children:[i.jsx(Q,{name:`${f}.periodeFom`,label:g===0?t.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[M,re,()=>{const k=Wn(r,`${f}.periodeFom`),y=Wn(r,`${f}.periodeTom`);return y&&k?Se(y)(k):null}],onChange:()=>a?s():void 0}),i.jsx(Q,{name:`${f}.periodeTom`,label:g===0?t.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[M,re,()=>{const k=Wn(r,`${f}.periodeFom`),y=Wn(r,`${f}.periodeTom`);return y&&k?Te(k)(y):null}],onChange:()=>a?s():void 0}),u&&i.jsx("div",{children:u()})]},m.id)}})};qt.initialValues=()=>({perioder:[{periodeFom:"",periodeTom:""}]});qt.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const rn=({readOnly:e})=>i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.Frilans.Title"})}),i.jsx(ye,{name:`${Xe}.harSokerPeriodeMedFrilans`,label:i.jsx(S,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),readOnly:e,trueContent:i.jsx(Me,{marginTop:8,children:i.jsxs(ne,{gap:"4",children:[i.jsx(Dn,{children:i.jsx(S,{id:"Registrering.Frilans.OppgiPeriode"})}),i.jsx(qt,{readOnly:e}),i.jsx(ye,{name:`${Xe}.erNyoppstartetFrilanser`,label:i.jsx(S,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),readOnly:e}),i.jsx(ye,{name:`${Xe}.harInntektFraFosterhjem`,label:i.jsx(S,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),readOnly:e}),i.jsx(en,{readOnly:e})]})})})]})});rn.initialValues=()=>({[Xe]:{...qt.initialValues(),...en.initialValues()}});rn.transformValues=({frilans:e})=>({[Xe]:e.harSokerPeriodeMedFrilans===!1?{harSokerPeriodeMedFrilans:!1}:{harSokerPeriodeMedFrilans:!0,perioder:e.perioder,erNyoppstartetFrilanser:e.erNyoppstartetFrilanser,harInntektFraFosterhjem:e.harInntektFraFosterhjem,...en.transformValues(e)}});rn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ frilans }: FrilansFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]},alias:"FrilansFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Af=ie(he),Ha=({readOnly:e})=>i.jsx(Ge,{value:Af,children:i.jsx(rn,{readOnly:e})});Ha.initialValues=rn.initialValues;Ha.transformValues=rn.transformValues;Ha.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ frilans }: FrilansFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]},alias:"FrilansFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const $r="arbeidsforhold",hr=({children:e,remove:t,readOnly:n,index:r})=>i.jsxs(i.Fragment,{children:[r>0&&i.jsx(ap,{spaceUnder:!0,spaceAbove:!0}),i.jsxs(Be,{wrap:!1,justify:"space-between",children:[i.jsx(Be,{wrap:!0,gap:"4",children:e}),!n&&r>0&&i.jsx(be,{type:"button",variant:"tertiary-neutral",icon:i.jsx(At,{}),onClick:()=>t(r)})]})]});hr.__docgenInfo={description:"",methods:[],displayName:"FieldArrayRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _f=Ka(50),jf=e=>e.filter(({kode:t})=>t!==Et.NORGE).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),Yo=({alleKodeverk:e,readOnly:t})=>{const n=de(),{control:r}=W(),{fields:a,remove:s,append:o}=Ue({control:r,name:$r}),l=e[Le.LANDKODER].slice().sort((d,m)=>d.navn.localeCompare(m.navn));return i.jsx(er,{fields:a,bodyText:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:t,emptyPeriodTemplate:{arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},remove:s,append:o,children:(d,m)=>i.jsxs(hr,{remove:s,index:m,readOnly:t,children:[i.jsx(Oe,{readOnly:t,name:`${$r}.${m}.arbeidsgiver`,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}),validate:[_f],maxLength:99}),i.jsx(Q,{isReadOnly:t,name:`${$r}.${m}.periodeFom`,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}),validate:[re]}),i.jsx(Q,{isReadOnly:t,name:`${$r}.${m}.periodeTom`,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}),validate:[re]}),i.jsx(Ke,{readOnly:t,name:`${$r}.${m}.land`,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}),selectValues:jf(l),size:"small"})]},d.id)})};Yo.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.`,methods:[],displayName:"RenderInntektsgivendeArbeidFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const nn=({readOnly:e,alleKodeverk:t})=>i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title"})}),i.jsx(Dn,{children:i.jsx(S,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold"})}),i.jsx(Yo,{readOnly:e,alleKodeverk:t})]})});nn.initialValues=()=>({[$r]:[]});const Jn=e=>e===void 0||e==="";nn.transformValues=({arbeidsforhold:e})=>({arbeidsforhold:e==null?void 0:e.filter(t=>!(Jn(t.arbeidsgiver)&&Jn(t.land)&&Jn(t.periodeFom)&&Jn(t.periodeTom)))});nn.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]},alias:"InntektsgivendeArbeidFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}}],displayName:"InntektsgivendeArbeidPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Of=ie(he),Ya=({readOnly:e,alleKodeverk:t})=>i.jsx(Ge,{value:Of,children:i.jsx(nn,{readOnly:e,alleKodeverk:t})});Ya.initialValues=nn.initialValues;Ya.transformValues=nn.transformValues;Ya.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]},alias:"InntektsgivendeArbeidFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}}],displayName:"InntektsgivendeArbeidPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const zo=({showModal:e,handleSubmit:t,cancelEvent:n})=>{const r=de();return i.jsxs(En,{open:e,"aria-label":r.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:n,children:[i.jsx(En.Header,{children:i.jsxs(Be,{gap:"4",children:[i.jsx(Yl,{color:"var(--a-orange-500)",width:35,height:35,title:r.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})}),i.jsx(me,{size:"medium",id:"modal-heading",children:r.formatMessage({id:"ModalLukkPapirSoknad.Title"})})]})}),i.jsxs(En.Body,{children:[i.jsx(we,{weight:"semibold",children:r.formatMessage({id:"ModalLukkPapirSoknad.Opplysninger"})}),i.jsx(we,{children:r.formatMessage({id:"ModalLukkPapirSoknad.Bekreft"})})]}),i.jsxs(En.Footer,{children:[i.jsx(zl,{to:"/",children:i.jsx(be,{variant:"primary",onClick:()=>t(),type:"button",children:r.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),i.jsx(be,{variant:"secondary",onClick:n,type:"button",children:r.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};zo.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tf=Ka(1500),tn=({submitting:e,onSubmitUfullstendigsoknad:t,readOnly:n=!0})=>{const r=de(),[a,s]=v.useState(!1),{watch:o}=W(),l=o("ufullstendigSoeknad")||!1,d=v.useCallback(()=>{s(!a)},[s,a]);return i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:r.formatMessage({id:"Registrering.SaveApplication.Title"})}),i.jsx(Mo,{name:"kommentarEndring",label:r.formatMessage({id:"Registrering.SaveApplication.Label"}),description:r.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Tf,Ba],readOnly:n}),i.jsxs("div",{children:[i.jsx(Ye,{name:"registrerVerge",label:r.formatMessage({id:"Registrering.Verge"}),readOnly:n}),i.jsx(Ye,{name:"ufullstendigSoeknad",label:r.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),i.jsxs("div",{children:[!l&&i.jsx(be,{id:"saveButton",size:"small",variant:"primary",loading:e,disabled:n||e,onClick:ff,children:i.jsx(S,{id:"Registrering.SaveApplication.SaveButton"})}),l&&i.jsx(be,{id:"endButton",onClick:d,size:"small",variant:"primary",loading:e,disabled:n||e,type:"button",children:i.jsx(S,{id:"Registrering.SaveApplication.EndButton"})})]}),i.jsx(zo,{handleSubmit:t,showModal:a,cancelEvent:d})]})})};tn.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});tn.transformValues=({kommentarEndring:e,registrerVerge:t,ufullstendigSoeknad:n})=>({kommentarEndring:e,registrerVerge:t,ufullstendigSoeknad:n});tn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  kommentarEndring,
  registrerVerge,
  ufullstendigSoeknad,
}: LagreSoknadFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]},alias:"LagreSoknadFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const wf=ie(he),za=({readOnly:e,onSubmitUfullstendigsoknad:t,submitting:n})=>i.jsx(Ge,{value:wf,children:i.jsx(tn,{readOnly:e,onSubmitUfullstendigsoknad:t,submitting:n})});za.initialValues=tn.initialValues;za.transformValues=tn.transformValues;za.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  kommentarEndring,
  registrerVerge,
  ufullstendigSoeknad,
}: LagreSoknadFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]},alias:"LagreSoknadFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Nf=ie(he),ri=()=>Y().subtract(1,"year").subtract(1,"day"),Pf=()=>Y(),Wa=({readOnly:e})=>i.jsx(Ge,{value:Nf,children:i.jsxs(Pe,{children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),i.jsx(In,{sixteenPx:!0}),i.jsx(Q,{name:"mottattDato",label:i.jsx(S,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),fromDate:ri().toDate(),toDate:Pf().toDate(),validate:[M,re,Jr,Te(ri())],isReadOnly:e})]})});Wa.initialValues=()=>({mottattDato:void 0});Wa.transformValues=({mottattDato:e})=>({mottattDato:e});Wa.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ mottattDato }: MottattDatoFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]},alias:"MottattDatoFormValues"}}],returns:null}],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ur="omsorg",qf="_barnInput_1jjt5_1",Sf="_col_1jjt5_5",If={barnInput:qf,col:Sf},xf=10,Vf=e=>e?Ko(1)(e):void 0,Df=e=>e?Cn(10)(e):void 0,ni=(e,t)=>n=>{if(e===0&&t&&n)return pf(n,Array.isArray(t)?t[0]:t)},an=({readOnly:e=!0,familieHendelseType:t,isForeldrepengerFagsak:n,fodselsdatoer:r})=>{const{formatMessage:a}=de(),{control:s,watch:o}=W(),{fields:l,remove:d,append:m}=Ue({control:s,name:`${ur}.foedselsDato`}),g=o(`${ur}.antallBarn`)??0;return v.useEffect(()=>{if(l.length>Math.max(g,0))for(let u=l.length;u>g;u-=1)d(u-1);else if(l.length<Math.min(g,xf))for(let u=l.length;u<g;u+=1)m({id:u,dato:void 0})},[g]),i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:t===nr.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),n&&t===nr.ADOPSJON&&i.jsx(br,{name:`${ur}.erEktefellesBarn`,label:i.jsx(S,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[M],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:a({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),i.jsx(Q,{name:`${ur}.omsorgsovertakelsesdato`,label:a({id:t===nr.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:t===nr.ADOPSJON?[M,re]:[re]}),i.jsxs(Be,{gap:"4",children:[t===nr.ADOPSJON&&i.jsx(Q,{name:`${ur}.ankomstdato`,label:a({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[re]}),i.jsx(Oe,{name:`${ur}.antallBarn`,label:a({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:If.barnInput,parse:u=>{const f=parseInt(u.toString(),10);return Number.isNaN(f)?u:f},validate:[...t===nr.ADOPSJON?[M]:[],Pr,Vf,Df]})]}),l.map((u,f)=>i.jsx(p.Fragment,{children:i.jsx(Q,{name:`${ur}.foedselsDato.${f}.dato`,isReadOnly:e,validate:t===nr.ADOPSJON?[M,re,Jr,ni(f,r)]:[re,Jr,ni(f,r)],label:a({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:f+1})})},u.id))]})})};an.initialValues=()=>({[ur]:{}});an.transformValues=({omsorg:e})=>({[ur]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(t=>t.dato):void 0}});an.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ omsorg }: OmsorgOgAdopsjonFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]},alias:"OmsorgOgAdopsjonFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: (string | undefined)[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Mf=ie(he),Ja=({readOnly:e,familieHendelseType:t,isForeldrepengerFagsak:n=!1,fodselsdato:r})=>i.jsx(Ge,{value:Mf,children:i.jsx(an,{readOnly:e,familieHendelseType:t,isForeldrepengerFagsak:n,fodselsdatoer:r})});Ja.initialValues=an.initialValues;Ja.transformValues=an.transformValues;Ja.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ omsorg }: OmsorgOgAdopsjonFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]},alias:"OmsorgOgAdopsjonFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: (string | undefined)[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Lf={land:void 0,periodeFom:void 0,periodeTom:void 0},gt=(e,t)=>e(t),ti=(e,t)=>()=>{const r=e(t).filter(({periodeFom:a,periodeTom:s})=>a&&a!==""&&s&&s!=="").map(({periodeFom:a,periodeTom:s})=>[a,s]);return r.length>0?Zr(r):void 0},Cf=e=>e.filter(({kode:t})=>t!==Et.NORGE).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),ai=(e,t,n,r)=>()=>{const a=gt(e,`${t}.${n}.periodeFom`),s=gt(e,`${t}.${n}.periodeTom`);return!s||!a?null:r?Se(s)(a):Te(a)(s)},Oa=({erTidligereOpphold:e=!1,mottattDato:t,readOnly:n,countryCodes:r})=>{const a=de(),s=e?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:o,getValues:l,trigger:d,formState:{isSubmitted:m}}=W(),{fields:g,remove:u,append:f}=Ue({control:o,name:s}),k=v.useMemo(()=>Cf(r),[r]);return i.jsx(er,{fields:g,titleText:a.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:a.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:Lf,readOnly:n,remove:u,append:f,children:(y,b,h)=>i.jsx(p.Fragment,{children:i.jsxs(Be,{gap:"4",paddingBlock:"2",children:[i.jsx(Ke,{name:`${s}.${b}.land`,label:a.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:k,readOnly:n,validate:[M]}),i.jsx(Q,{name:`${s}.${b}.periodeFom`,label:a.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:n,validate:[M,re,ai(l,s,b,!0),()=>{const A=gt(l,`${s}.${b}.periodeFom`);return e?Se(Y().format(Ee))(A):t?Te(t)(A):void 0},ti(l,s)],onChange:()=>m?d():void 0}),i.jsx(Q,{name:`${s}.${b}.periodeTom`,label:a.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:n,validate:[M,re,ai(l,s,b,!1),()=>{const A=gt(l,`${s}.${b}.periodeTom`);return e?Se(Y().format(Ee))(A):t?Te(t)(A):void 0},ti(l,s)],onChange:()=>m?d():void 0}),h&&i.jsx("div",{children:h()})]},y.id)},y.id)})};Oa.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},mottattDato:{required:!1,tsType:{name:"string"},description:""},countryCodes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const sn=({readOnly:e=!0,alleKodeverk:t,mottattDato:n,erAdopsjon:r})=>{const{formatMessage:a}=de(),s=v.useMemo(()=>t[Le.LANDKODER].slice().sort((m,g)=>m.navn.localeCompare(g.navn)),[t]),{watch:o}=W(),l=!o("oppholdSisteTolvINorge",!0),d=!o("oppholdNesteTolvINorge",!0);return i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.Opphold"})}),i.jsx(ye,{name:"oppholdINorge",label:a({id:r?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),readOnly:e}),i.jsxs(ne,{gap:"2",children:[i.jsx(ye,{name:"oppholdSisteTolvINorge",label:i.jsx(S,{id:"Registrering.OppholdSisteTolv"}),readOnly:e}),l&&i.jsx(Me,{alignOffset:58,children:i.jsx(Oa,{erTidligereOpphold:!0,mottattDato:n,countryCodes:s,readOnly:e})})]}),i.jsxs(ne,{gap:"2",children:[i.jsx(ye,{name:"oppholdNesteTolvINorge",label:i.jsx(S,{id:"Registrering.OppholdNesteTolv"}),readOnly:e}),d&&i.jsx(Me,{alignOffset:58,children:i.jsx(Oa,{mottattDato:n,countryCodes:s,readOnly:e})})]})]})})};sn.initialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});sn.transformValues=({oppholdINorge:e,oppholdSisteTolvINorge:t,oppholdNesteTolvINorge:n,tidligereOppholdUtenlands:r,fremtidigeOppholdUtenlands:a})=>({oppholdINorge:e,harTidligereOppholdUtenlands:!t,harFremtidigeOppholdUtenlands:!n,tidligereOppholdUtenlands:t?void 0:r,fremtidigeOppholdUtenlands:n?void 0:a});sn.__docgenInfo={description:`OppholdINorgePanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  oppholdINorge,
  oppholdSisteTolvINorge,
  oppholdNesteTolvINorge,
  tidligereOppholdUtenlands,
  fremtidigeOppholdUtenlands,
}: OppholdINorgeFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"OppholdINorgeFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const $f=ie(he),Xa=({readOnly:e,erAdopsjon:t,alleKodeverk:n,mottattDato:r})=>i.jsx(Ge,{value:$f,children:i.jsx(sn,{readOnly:e,erAdopsjon:t,alleKodeverk:n,mottattDato:r})});Xa.initialValues=sn.initialValues;Xa.transformValues=sn.transformValues;Xa.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  oppholdINorge,
  oppholdSisteTolvINorge,
  oppholdNesteTolvINorge,
  tidligereOppholdUtenlands,
  fremtidigeOppholdUtenlands,
}: OppholdINorgeFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"OppholdINorgeFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const On=ie(he),Kr={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},si=[{label:On.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Kr.ANNEN_FORELDER_DOED},{label:On.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Kr.OVERTA_FORELDREANSVARET_ALENE},{label:On.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Kr.MANN_ADOPTERER_ALENE},{label:On.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Kr.IKKE_RELEVANT}],Za=({readOnly:e,soknadData:t})=>{const r=t.getFamilieHendelseType()!==nr.FODSEL&&t.getForeldreType()===Rt.FAR?si:si.filter(a=>a.value!==Kr.MANN_ADOPTERER_ALENE);return i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:On.formatMessage({id:"Registrering.Rettigheter.Title"})}),i.jsx(br,{name:"rettigheter",isReadOnly:e,radios:r})]})})};Za.initialValues=()=>({rettigheter:void 0});Za.transformValues=({rettigheter:e})=>e===Kr.IKKE_RELEVANT?{}:{rettigheter:e};Za.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const Xn=ie(he),ma={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},Qa=({readOnly:e})=>i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:Xn.formatMessage({id:"Registrering.Sprak"})}),i.jsx(br,{name:"språkkode",validate:[M],isReadOnly:e,radios:[{label:Xn.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:ma.BOKMAL},{label:Xn.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:ma.NYNORSK},{label:Xn.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:ma.ENGELSK}]})]})});Qa.initialValues=()=>({språkkode:void 0});Qa.transformValues=({språkkode:e})=>({språkkode:e});Qa.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ språkkode }: SprakFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]},alias:"SprakFormValues"}}],returns:null}],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Nr="egenVirksomhet",ke=`${Nr}.virksomheter`,Kf="_orgNrBredde_cby8r_1",Bf={orgNrBredde:Kf},Gf=e=>e.map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),St=({index:e,readOnly:t,alleKodeverk:n})=>{const r=de(),a=n[Le.LANDKODER].slice().sort((o,l)=>o.navn.localeCompare(l.navn)),{getValues:s}=W();return i.jsx(ye,{name:`${ke}.${e}.virksomhetRegistrertINorge`,label:i.jsx(S,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),readOnly:t,trueContent:i.jsx(Me,{marginTop:8,children:i.jsx(Oe,{name:`${ke}.${e}.organisasjonsnummer`,readOnly:t,validate:[M,Pr,sf],label:i.jsx(S,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})}),falseContent:i.jsx(Me,{alignOffset:58,marginTop:8,children:i.jsxs(ne,{gap:"4",children:[i.jsx(Ke,{name:`${ke}.${e}.landJobberFra`,className:Bf.landBredde,selectValues:Gf(a),validate:[M],label:r.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),i.jsxs(Be,{gap:"4",children:[i.jsx(Q,{isReadOnly:t,validate:[M,re,Jr],name:`${ke}.${e}.fom`,label:r.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})}),i.jsx(Q,{isReadOnly:t,validate:[re,o=>{const l=s(`${ke}.${e}.fom`);return l?cf(l,o):null}],name:`${ke}.${e}.tom`,label:r.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})]})]})})})};St.transformValues=({virksomhetRegistrertINorge:e,organisasjonsnummer:t,landJobberFra:n,fom:r,tom:a})=>({virksomhetRegistrertINorge:e,organisasjonsnummer:e?t:void 0,...e===!1?{landJobberFra:n,fom:r,tom:a}:{landJobberFra:"NOR"}});St.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  virksomhetRegistrertINorge,
  organisasjonsnummer,
  landJobberFra,
  fom,
  tom,
}: RegistrerVirksomhetFormValues`,optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetIdentifikasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const It=({index:e,readOnly:t})=>i.jsx(ye,{name:`${ke}.${e}.harRegnskapsforer`,label:i.jsx(S,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),readOnly:t,trueContent:i.jsx(Me,{marginTop:8,children:i.jsxs(ne,{gap:"4",children:[i.jsx(Oe,{name:`${ke}.${e}.navnRegnskapsforer`,readOnly:t,validate:[M,Ba],label:i.jsx(S,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),i.jsx(Oe,{name:`${ke}.${e}.tlfRegnskapsforer`,readOnly:t,validate:[M,Pr],label:i.jsx(S,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]})})});It.transformValues=({harRegnskapsforer:e,navnRegnskapsforer:t,tlfRegnskapsforer:n})=>({harRegnskapsforer:e,...e?{navnRegnskapsforer:t}:{},...e?{tlfRegnskapsforer:n}:{}});It.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  harRegnskapsforer,
  navnRegnskapsforer,
  tlfRegnskapsforer,
}: RegistrerVirksomhetFormValues`,optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Wo=({readOnly:e,index:t})=>i.jsx(ye,{name:`${ke}.${t}.familieEllerVennerTilknyttetNaringen`,label:i.jsx(S,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),readOnly:e,isHorizontal:!1,trueLabel:i.jsx(S,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),falseLabel:i.jsx(S,{id:"Registrering.VirksomhetRelasjonPanel.No"})});Wo.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Uf="_inntektBredde_1xgnj_1",Hf={inntektBredde:Uf},Yf=({readOnly:e,index:t})=>[{value:"harVarigEndring",label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"}),element:i.jsx(Me,{marginTop:8,children:i.jsx(Q,{name:`${ke}.${t}.varigEndringGjeldendeFom`,isReadOnly:e,validate:[re,M],label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})},{value:"erNyoppstartet",label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})},{value:"erNyIArbeidslivet",label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.NyIArbeidslivet"}),element:i.jsx(Me,{marginTop:8,children:i.jsx(Q,{name:`${ke}.${t}.nyIArbeidslivetFom`,isReadOnly:e,validate:[re,M],label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})}],xt=({readOnly:e,index:t})=>i.jsx(ye,{name:`${ke}.${t}.varigEndretEllerStartetSisteFireAr`,label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),readOnly:e,trueContent:i.jsx(Me,{marginTop:8,children:i.jsxs(ne,{gap:"4",children:[i.jsx(Ce,{size:"small",children:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),i.jsx($a,{validate:[M],name:`${ke}.${t}.varigEndretEllerStartetSisteFireArArsak`,checkboxes:Yf({readOnly:e,index:t})}),i.jsx(Mo,{name:`${ke}.${t}.beskrivelseAvEndring`,label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[Ba]}),i.jsx(Oe,{name:`${ke}.${t}.inntekt`,label:i.jsx(S,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:e,validate:[Pr,M],className:Hf.inntektBredde,parse:n=>{const r=parseInt(n.toString(),10);return Number.isNaN(r)?n:r}})]})})});xt.transformValues=({varigEndretEllerStartetSisteFireAr:e,varigEndretEllerStartetSisteFireArArsak:t,varigEndringGjeldendeFom:n,nyIArbeidslivetFom:r,beskrivelseAvEndring:a,inntekt:s})=>{const o=t.includes("harVarigEndring"),l=t.includes("erNyoppstartet"),d=t.includes("erNyIArbeidslivet");return{varigEndretEllerStartetSisteFireAr:e,...e?{harVarigEndring:o,...o?{varigEndringGjeldendeFom:n}:{},erNyoppstartet:l,erNyIArbeidslivet:d,...d?{nyIArbeidslivetFom:r}:{},beskrivelseAvEndring:a,inntekt:s}:{}}};xt.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  varigEndretEllerStartetSisteFireAr,
  varigEndretEllerStartetSisteFireArArsak,
  varigEndringGjeldendeFom,
  nyIArbeidslivetFom,
  beskrivelseAvEndring,
  inntekt,
}: StartedEndretFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]},alias:"StartedEndretFormValues"}}],returns:null}],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const ii={[ar.DAGMAMMA]:1,[ar.FISKE]:2,[ar.JORDBRUK_ELLER_SKOGBRUK]:3,[ar.ANNEN]:4},zf=(e,t)=>e>t?1:e<t?-1:0,Wf=e=>e[Le.VIRKSOMHET_TYPE].filter(t=>t.kode!==ar.FRILANSER).sort((t,n)=>zf(ii[t.kode],ii[n.kode])).map(t=>({value:t.kode,label:t.navn})),Vt=({readOnly:e,alleKodeverk:t,index:n})=>i.jsx($a,{label:i.jsx(S,{id:"Registrering.VirksomhetNaeringTypePanel.Title"}),name:`${ke}.${n}.typeVirksomhet`,validate:[M],checkboxes:Wf(t),isReadOnly:e});Vt.transformValues=({typeVirksomhet:e})=>({typeVirksomhet:{ANNEN:e.includes(ar.ANNEN),FISKE:e.includes(ar.FISKE),DAGMAMMA:e.includes(ar.DAGMAMMA),JORDBRUK_SKOGBRUK:e.includes(ar.JORDBRUK_ELLER_SKOGBRUK)}});Vt.__docgenInfo={description:`VirksomhetTypeNaringPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ typeVirksomhet }: RegistrerVirksomhetFormValues",optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetTypeNaringPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const qr=({open:e,readOnly:t=!1,alleKodeverk:n,index:r,remove:a})=>{const{getFieldState:s,watch:o}=W(),{error:l}=s(`${ke}.${r}`),d=o(`${ke}.${r}.navn`),[m,g]=v.useState(e);return i.jsxs(se.Row,{shadeOnHover:!1,style:{backgroundColor:l&&!m?"var(--a-red-50)":"none"},children:[i.jsx(se.DataCell,{valign:"top",children:i.jsx(be,{type:"button",variant:"tertiary-neutral",onClick:()=>g(u=>!u),icon:m?i.jsx(Ui,{"aria-label":"Vis mindre"}):i.jsx(Ft,{"aria-label":"Vis mer"})})}),i.jsxs(se.DataCell,{valign:"top",children:[i.jsx(Ot,{hidden:m,paddingBlock:"3",children:i.jsx(we,{weight:"semibold",children:d})}),i.jsxs(ne,{gap:"4",hidden:!m,children:[i.jsx(Oe,{name:`${ke}.${r}.navn`,validate:[M],label:i.jsx(S,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),readOnly:t}),i.jsx(St,{readOnly:t,index:r,alleKodeverk:n}),i.jsx(Vt,{readOnly:t,index:r,alleKodeverk:n}),i.jsx(xt,{readOnly:t,index:r}),i.jsx(It,{readOnly:t,index:r}),i.jsx(Wo,{readOnly:t,index:r})]})]}),i.jsx(se.DataCell,{valign:"top",align:"right",children:i.jsx(be,{type:"button",variant:"tertiary-neutral",onClick:a,onKeyDown:a,icon:i.jsx(At,{"aria-label":"Slett rad"})})})]})};qr.initialValues=()=>({varigEndretEllerStartetSisteFireArArsak:[],typeVirksomhet:[]});qr.transformValues=e=>({navn:e.navn,...St.transformValues(e),...Vt.transformValues(e),...xt.transformValues(e),...It.transformValues(e),familieEllerVennerTilknyttetNaringen:e.familieEllerVennerTilknyttetNaringen});qr.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const Dt=({readOnly:e=!1,alleKodeverk:t})=>{var m,g,u,f,k;const n=de(),{control:r,formState:{errors:a}}=W(),{fields:s,remove:o,append:l}=Ue({control:r,name:`${Nr}.virksomheter`,rules:{required:n.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}}),d=()=>{l(qr.initialValues())};return v.useEffect(()=>{s.length===0&&d()},[]),i.jsxs(i.Fragment,{children:[i.jsxs(se,{children:[i.jsx(se.Header,{children:i.jsxs(se.Row,{children:[i.jsx(se.HeaderCell,{style:{width:"48px"}}),i.jsx(se.HeaderCell,{children:i.jsx(S,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),i.jsx(se.HeaderCell,{style:{width:"48px"}})]})}),i.jsx(se.Body,{children:s.map((y,b)=>i.jsx(qr,{index:b,open:b+1===s.length,remove:()=>o(b),alleKodeverk:t,readOnly:e},y.id))})]}),((u=(g=(m=a[Nr])==null?void 0:m.virksomheter)==null?void 0:g.root)==null?void 0:u.message)&&i.jsx(or,{children:(k=(f=a[Nr])==null?void 0:f.virksomheter.root)==null?void 0:k.message}),i.jsx("div",{children:i.jsx(be,{size:"small",variant:"tertiary",type:"button",onClick:d,icon:i.jsx(at,{"aria-hidden":!0}),children:i.jsx(S,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})})]})};Dt.transformValues=({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:t}})=>({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:e?t.map(n=>qr.transformValues(n)):void 0}});Dt.__docgenInfo={description:`RegistrererVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og søker har arbeidet i egen virksomhet.
Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"RegistrerVirksomhetPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const on=({readOnly:e=!0,alleKodeverk:t})=>{const n=de(),{watch:r}=W(),a=r(`${Nr}.harArbeidetIEgenVirksomhet`)||null;return i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.EgenVirksomhet.Title"})}),i.jsx(br,{name:`${Nr}.harArbeidetIEgenVirksomhet`,validate:[M],isReadOnly:e,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:n.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:n.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),a&&i.jsx(Dt,{readOnly:e,alleKodeverk:t})]})})};on.initialValues=()=>({[Nr]:{harArbeidetIEgenVirksomhet:void 0,virksomheter:[qr.initialValues()]}});on.transformValues=Dt.transformValues;on.__docgenInfo={description:`EgenVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Søker må oppgi om hen har arbdeidet i egen virksomhet.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"EgenVirksomhetPanel",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Jf=ie(he),es=({readOnly:e,alleKodeverk:t})=>i.jsx(Ge,{value:Jf,children:i.jsx(on,{readOnly:e,alleKodeverk:t})});es.initialValues=on.initialValues;es.transformValues=on.transformValues;es.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ga=ie(he),rs=({readOnly:e})=>i.jsxs(Pe,{children:[i.jsx(me,{size:"small",children:ga.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),i.jsx(In,{sixteenPx:!0}),i.jsx(br,{name:"dekningsgrad",validate:[M],isReadOnly:e,isHorizontal:!0,radios:[{label:ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});rs.initialValues=()=>({dekningsgrad:void 0});rs.transformValues=({dekningsgrad:e})=>({dekningsgrad:e});rs.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ dekningsgrad }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const oi=ie(he),ns=({readOnly:e,annenForelderInformertRequired:t=!1})=>i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:oi.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),i.jsx(ye,{label:oi.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"}),name:"annenForelderInformert",isRequired:t,readOnly:e})]})});ns.initialValues=()=>({annenForelderInformert:void 0});ns.tranformValues=({annenForelderInformert:e})=>({annenForelderInformert:e});ns.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]}}}},{name:"tranformValues",docblock:null,modifiers:["static"],params:[{name:"{ annenForelderInformert }: BekreftelseFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]},alias:"BekreftelseFormValues"}}],returns:null}],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const oe="tidsromPermisjon",Yr="graderingPeriode",ts="oppholdPerioder",Jo="overforingsperioder",Mt="utsettelsePeriode",Nn="permisjonsPerioder",as=`${oe}.${Nn}`,rr=e=>`${as}.${e}`,Xf=Cn(100),ss=[mr.FELLESPERIODE,mr.FEDREKVOTE,mr.FORELDREPENGER_FOR_FODSEL,mr.FORELDREPENGER,mr.MODREKVOTE],Zf=e=>e.filter(({kode:t})=>ss.some(n=>n===t)).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),Qf=e=>e.map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),Xo=[mr.FEDREKVOTE,mr.FORELDREPENGER_FOR_FODSEL,mr.MODREKVOTE],Zn=(e,t)=>e?t:"",ev=e=>!!e&&Y(e,Ee).isBefore(Y("2019-01-01")),li=e=>()=>{const n=(e(as)||[]).filter(({periodeFom:r,periodeTom:a})=>r!==""&&a!=="").map(({periodeFom:r,periodeTom:a})=>[r,a]);return Zr(n)},di=(e,t,n)=>()=>{const r=e(`${rr(t)}.periodeFom`),a=e(`${rr(t)}.periodeTom`);return!a||!r?null:n?Se(a)(r):Te(r)(a)},Lt=({sokerErMor:e,readOnly:t,alleKodeverk:n})=>{const r=de(),a=n[Le.UTTAK_PERIODE_TYPE],s=n[Le.MORS_AKTIVITET];s.filter(({kode:y})=>y==="-").length===0&&s.unshift({kode:"-",navn:"",kodeverk:""});const{control:o,getValues:l,trigger:d,watch:m,formState:{isSubmitted:g}}=W(),{fields:u,remove:f,append:k}=Ue({control:o,name:as});return v.useEffect(()=>{u.length===0&&k({})},[]),i.jsx(er,{readOnly:t,fields:u,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:k,remove:f,children:(y,b)=>{const h=b===0,A=m(rr(b)),E=ev(A.periodeFom),w=Xo.some(O=>O===A.periodeType)||A.periodeType==="";return i.jsxs(hr,{readOnly:t,remove:f,index:b,children:[i.jsx("div",{children:i.jsx(Ke,{readOnly:t,name:`${rr(b)}.periodeType`,label:Zn(h,r.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:Zf(a),validate:[M]})}),i.jsx(Q,{isReadOnly:t,name:`${rr(b)}.periodeFom`,label:Zn(h,r.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[M,re,di(l,b,!0),li(l)],onChange:()=>g?d():void 0}),i.jsx(Q,{isReadOnly:t,name:`${rr(b)}.periodeTom`,label:Zn(h,r.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[M,re,di(l,b,!1),li(l)],onChange:()=>g?d():void 0}),!e&&i.jsx(Ke,{readOnly:t,disabled:w,name:`${rr(b)}.morsAktivitet`,label:Zn(h,r.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:Qf(s),hideValueOnDisable:!0}),i.jsx(Ye,{readOnly:t,name:`${rr(b)}.flerbarnsdager`,label:i.jsx(S,{id:"Registrering.Permisjon.Flerbarnsdager"})}),i.jsx(Ye,{readOnly:t,name:`${rr(b)}.harSamtidigUttak`,label:i.jsx(S,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),A.harSamtidigUttak&&i.jsx(Oe,{name:`${rr(b)}.samtidigUttaksprosent`,validate:[ja,Xf],label:r.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:O=>Number.isNaN(O)?O:parseFloat(O.toString()).toFixed(2)}),E&&i.jsx(bt,{size:"small",variant:"warning",children:i.jsx(S,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},y.id)}})};Lt.transformValues=e=>e.map(t=>Xo.some(n=>n===t.periodeType)?{periodeType:t.periodeType,periodeFom:t.periodeFom,periodeTom:t.periodeTom,flerbarnsdager:t.flerbarnsdager?t.flerbarnsdager:!1,harSamtidigUttak:t.harSamtidigUttak?t.harSamtidigUttak:!1,samtidigUttaksprosent:t.samtidigUttaksprosent}:{periodeType:t.periodeType,periodeFom:t.periodeFom,periodeTom:t.periodeTom,morsAktivitet:t.morsAktivitet,flerbarnsdager:t.flerbarnsdager?t.flerbarnsdager:!1,harSamtidigUttak:t.harSamtidigUttak?t.harSamtidigUttak:!1,samtidigUttaksprosent:t.samtidigUttaksprosent});Lt.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av perioder med permijon.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]"}}],returns:null}],displayName:"RenderPermisjonPeriodeFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ct=({foreldreType:e,readOnly:t,alleKodeverk:n})=>{const{watch:r}=W(),a=r(`${oe}.fulltUttak`)||!1;return i.jsxs(ne,{gap:"2",children:[i.jsx(Ce,{children:i.jsx(S,{id:"Registrering.Permisjon.FulltUttak"})}),i.jsx(Ye,{readOnly:t,name:`${oe}.fulltUttak`,label:i.jsx(S,{id:"Registrering.Permisjon.FulltUttak"})}),a&&i.jsx(Lt,{sokerErMor:e===Rt.MOR,readOnly:t,alleKodeverk:n})]})};Ct.initialValues=()=>({[Nn]:[],fulltUttak:!1});Ct.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}}}}],displayName:"PermisjonFulltUttak",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const rv=af(9),pt=`${oe}.${Yr}`,He=e=>`${pt}.${e}`,ui=e=>()=>{const n=(e(`${pt}`)||[]).filter(({periodeFom:r,periodeTom:a})=>r!==""&&a!=="").map(({periodeFom:r,periodeTom:a})=>[r,a]);return n.length>0?Zr(n):void 0},mi=(e,t,n)=>()=>{const r=e(`${He(t)}.periodeFom`),a=e(`${He(t)}.periodeTom`);return!a||!r?null:n?Se(a)(r):Te(r)(a)},nv=(e,t)=>n=>e(`${He(t)}.arbeidskategoriType`)===vr.ARBEIDSTAKER?M(n):void 0,tv=e=>{if(e)return e.length===11?Go(e):rv(e)},gi={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},av=[vr.ARBEIDSTAKER,vr.SELVSTENDIG_NAERINGSDRIVENDE,vr.FRILANSER],pi=Cn(100),sv=e=>e.filter(({kode:t})=>ss.some(n=>n===t)).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),iv=e=>e.filter(({kode:t})=>av.some(n=>n===t)).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),Zo=({graderingKvoter:e,readOnly:t,arbeidskategoriTyper:n})=>{const r=de(),{watch:a,control:s,getValues:o,trigger:l,formState:{isSubmitted:d}}=W(),{fields:m,remove:g,append:u}=Ue({control:s,name:`${pt}`}),f=a(`${pt}`)||[];return v.useEffect(()=>{m.length===0&&u(gi)},[]),i.jsx(er,{fields:m,emptyPeriodTemplate:gi,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:t,remove:g,append:u,children:(k,y)=>{const{harSamtidigUttak:b,periodeFom:h}=f[y],A=h&&Y(h,Ee).isBefore(Y("2019-01-01"));return i.jsxs(hr,{readOnly:t,remove:g,index:y,children:[i.jsx(Ke,{name:`${He(y)}.periodeForGradering`,selectValues:sv(e),label:r.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[M]}),i.jsx(Q,{label:r.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${He(y)}.periodeFom`,validate:[M,re,mi(o,y,!0),ui(o)],onChange:()=>d?l():void 0}),i.jsx(Q,{label:r.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${He(y)}.periodeTom`,validate:[M,re,mi(o,y,!1),ui(o)],onChange:()=>d?l():void 0}),i.jsx(Oe,{label:i.jsx(S,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${He(y)}.prosentandelArbeid`,validate:[M,ja,pi],normalizeOnBlur:E=>Number.isNaN(E)?E:parseFloat(E.toString()).toFixed(2)}),i.jsx(Oe,{label:r.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${He(y)}.arbeidsgiverIdentifikator`,validate:[nv(o,y),Pr,tv]}),i.jsx(Ke,{label:r.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${He(y)}.arbeidskategoriType`,selectValues:iv(n),validate:[M],onChange:()=>d?l():void 0}),i.jsx(Ye,{name:`${He(y)}.skalGraderes`,label:i.jsx(S,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})}),i.jsx(Ye,{readOnly:t,name:`${He(y)}.flerbarnsdager`,label:i.jsx(S,{id:"Registrering.Permisjon.Flerbarnsdager"})}),i.jsx(Ye,{name:`${He(y)}.harSamtidigUttak`,label:i.jsx(S,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),b&&i.jsx(Oe,{name:`${He(y)}.samtidigUttaksprosent`,validate:[M,ja,pi],label:r.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})}),A&&i.jsx(bt,{size:"small",variant:"warning",children:i.jsx(S,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},k.id)}})};Zo.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av graderingperiode.`,methods:[],displayName:"RenderGraderingPeriodeFieldArray",props:{graderingKvoter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidskategoriTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const ln=({readOnly:e,alleKodeverk:t})=>{const n=t[Le.UTTAK_PERIODE_TYPE],r=t[Le.ARBEIDSKATEGORI],{watch:a}=W(),s=a(`${oe}.skalGradere`)||!1;return i.jsxs(ne,{gap:"2",children:[i.jsx(Ce,{children:i.jsx(S,{id:"Registrering.Permisjon.Gradering.Title"})}),i.jsx(Ye,{readOnly:e,name:`${oe}.skalGradere`,label:i.jsx(S,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),s&&i.jsx(Zo,{graderingKvoter:n,arbeidskategoriTyper:r,readOnly:e})]})};ln.transformValues=e=>{const t=e[Yr];return t?t.map(n=>n.arbeidskategoriType?{...n,erArbeidstaker:n.arbeidskategoriType===vr.ARBEIDSTAKER,erFrilanser:n.arbeidskategoriType===vr.FRILANSER,erSelvstNæringsdrivende:n.arbeidskategoriType===vr.SELVSTENDIG_NAERINGSDRIVENDE}:n):[]};ln.initialValues=()=>({[Yr]:[],skalGradere:!1});ln.__docgenInfo={description:`PermisjonGraderingPanel

Viser panel for gradering
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]},alias:"FormValuesGradering"}}],returns:null},{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}}}}],displayName:"PermisjonGraderingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const is=`${oe}.${ts}`,Ar=e=>`${is}.${e}`,ci=e=>()=>{const n=(e(`${is}`)||[]).filter(({periodeFom:r,periodeTom:a})=>r!==""&&a!=="").map(({periodeFom:r,periodeTom:a})=>[r,a]);return n.length>0?Zr(n):void 0},fi={periodeFom:"",periodeTom:"",årsak:""},ov=[_n.UTTAK_MØDREKVOTE_ANNEN_FORELDER,_n.UTTAK_FEDREKVOTE_ANNEN_FORELDER,_n.UTTAK_FELLESP_ANNEN_FORELDER,_n.UTTAK_FORELDREPENGER_ANNEN_FORELDER],lv=e=>e.filter(({kode:t})=>ov.some(n=>n===t)).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),Qo=({oppholdsReasons:e,readOnly:t})=>{const n=de(),{control:r,getValues:a,trigger:s,formState:{isSubmitted:o}}=W(),{fields:l,remove:d,append:m}=Ue({control:r,name:`${is}`});return v.useEffect(()=>{l.length===0&&m(fi)},[]),i.jsx(er,{fields:l,emptyPeriodTemplate:fi,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:t,append:m,remove:d,children:(g,u)=>i.jsxs(hr,{readOnly:t,remove:d,index:u,children:[i.jsx(Q,{name:`${Ar(u)}.periodeFom`,label:n.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[M,re,()=>{const f=a(`${Ar(u)}.periodeFom`),k=a(`${Ar(u)}.periodeTom`);return k&&f?Se(k)(f):null},ci(a)],onChange:()=>o?s():void 0}),i.jsx(Q,{name:`${Ar(u)}.periodeTom`,label:n.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[M,re,()=>{const f=a(`${Ar(u)}.periodeFom`),k=a(`${Ar(u)}.periodeTom`);return k&&f?Te(f)(k):null},ci(a)],onChange:()=>o?s():void 0}),i.jsx("div",{children:i.jsx(Ke,{name:`${Ar(u)}.årsak`,label:n.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}),selectValues:lv(e),validate:[M]})})]},g.id)})};Qo.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const $t=({readOnly:e,alleKodeverk:t})=>{const n=t[Le.OPPHOLD_ARSAK],{watch:r}=W(),a=r(`${oe}.skalHaOpphold`)||!1;return i.jsxs(ne,{gap:"2",children:[i.jsx(Ce,{children:i.jsx(S,{id:"Registrering.Permisjon.Opphold.Title"})}),i.jsx(Ye,{readOnly:e,name:`${oe}.skalHaOpphold`,label:i.jsx(S,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),a&&i.jsx(Qo,{oppholdsReasons:n,readOnly:e})]})};$t.initialValues=()=>({[ts]:[],skalHaOpphold:!1});$t.__docgenInfo={description:`PermisjonOppholdPanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}}}}],displayName:"PermisjonOppholdPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const os=`${oe}.${Jo}`,_r=e=>`${os}.${e}`,vi=e=>()=>{const n=(e(os)||[]).filter(({periodeFom:r,periodeTom:a})=>r!==""&&a!=="").map(({periodeFom:r,periodeTom:a})=>[r,a]);return n.length>0?Zr(n):void 0},ki={periodeFom:"",periodeTom:"",overforingArsak:""},el=({selectValues:e,readOnly:t})=>{const n=de(),{control:r,getValues:a,trigger:s,formState:{isSubmitted:o}}=W(),{fields:l,remove:d,append:m}=Ue({control:r,name:os});return v.useEffect(()=>{l.length===0&&m(ki)},[]),i.jsx(er,{fields:l,emptyPeriodTemplate:ki,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:t,append:m,remove:d,children:(g,u)=>i.jsxs(hr,{readOnly:t,remove:d,index:u,children:[i.jsx("div",{children:i.jsx(Ke,{name:`${_r(u)}.overforingArsak`,label:n.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}),selectValues:e,validate:[M],readOnly:t})}),i.jsx(Q,{isReadOnly:t,name:`${_r(u)}.periodeFom`,validate:[M,re,()=>{const f=a(`${_r(u)}.periodeFom`),k=a(`${_r(u)}.periodeTom`);return k&&f?Se(k)(f):null},vi(a)],label:i.jsx(S,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}),onChange:()=>o?s():void 0}),i.jsx(Q,{isReadOnly:t,name:`${_r(u)}.periodeTom`,validate:[M,re,()=>{const f=a(`${_r(u)}.periodeFom`),k=a(`${_r(u)}.periodeTom`);return k&&f?Te(f)(k):null},vi(a)],label:i.jsx(S,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}),onChange:()=>o?s():void 0})]},g.id)})};el.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const dv=(e,t,n)=>t===Pn.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):t===Pn.SYKDOM_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):n,uv=(e,t,n,r)=>e.filter(({kode:a})=>n||a!==Pn.ALENEOMSORG&&a!==Pn.IKKE_RETT_ANNEN_FORELDER).map(({kode:a,navn:s})=>t?i.jsx("option",{value:a,children:s},a):i.jsx("option",{value:a,children:dv(r,a,s)},a)),Kt=({foreldreType:e,alleKodeverk:t,readOnly:n,erEndringssøknad:r})=>{const a=de(),s=t[Le.OVERFOERING_AARSAK_TYPE],o=uv(s,e===Rt.MOR,r,a),{watch:l}=W(),d=l(`${oe}.skalOvertaKvote`)||!1;return i.jsxs(ne,{gap:"2",children:[i.jsx(Ce,{children:i.jsx(S,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),i.jsx(Ye,{readOnly:n,name:`${oe}.skalOvertaKvote`,label:i.jsx(S,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),d&&i.jsx(el,{selectValues:o,readOnly:n})]})};Kt.initialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[]});Kt.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}}}}],displayName:"PermisjonOverforingAvKvoterPanel",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const yi={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},rl=`${oe}.${Mt}`,Or=e=>`${rl}.${e}`,bi=e=>()=>{const n=(e(`${rl}`)||[]).filter(({periodeFom:r,periodeTom:a})=>r!==""&&a!=="").map(({periodeFom:r,periodeTom:a})=>[r,a]);return n.length>0?Zr(n):void 0},hi=(e,t,n)=>()=>{const r=`${Or(t)}`,a=e(`${r}.periodeFom`),s=e(`${r}.periodeTom`);return!s&&!a?null:n?Se(s)(a):Te(a)(s)},mv=e=>e.map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),gv=e=>e.filter(({kode:t})=>ss.some(n=>n===t)).map(({kode:t,navn:n})=>i.jsx("option",{value:t,children:n},t)),nl=({utsettelseReasons:e,utsettelseKvoter:t,readOnly:n})=>{const r=de(),{control:a,getValues:s,trigger:o,formState:{isSubmitted:l}}=W(),{fields:d,remove:m,append:g}=Ue({control:a,name:`${oe}.${Mt}`});v.useEffect(()=>{d.length===0&&g(yi)},[]);const u=v.useCallback(()=>l?o():void 0,[l,o]);return i.jsx(er,{fields:d,emptyPeriodTemplate:yi,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:n,append:g,remove:m,children:(f,k)=>i.jsxs(hr,{readOnly:n,remove:m,index:k,children:[i.jsx(Ke,{name:`${Or(k)}.periodeForUtsettelse`,label:r.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}),selectValues:gv(t),validate:[M]}),i.jsx(Q,{name:`${Or(k)}.periodeFom`,label:r.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[M,re,hi(s,k,!0),bi(s)],onChange:u}),i.jsx(Q,{name:`${Or(k)}.periodeTom`,label:r.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[M,re,hi(s,k,!1),bi(s)],onChange:u}),i.jsx(Ke,{name:`${Or(k)}.arsakForUtsettelse`,label:r.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}),selectValues:mv(e),validate:[M],onChange:u}),i.jsx(Ke,{label:r.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${Or(k)}.erArbeidstaker`,selectValues:[i.jsx("option",{value:"true",children:r.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),i.jsx("option",{value:"false",children:r.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[y=>s(`${Or(k)}.arsakForUtsettelse`)==="ARBEID"?M(y):void 0]})]},f.id)})};nl.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

Viser inputfelter for dato for bestemmelse av utsettelseperiode.`,methods:[],displayName:"RenderUtsettelsePeriodeFieldArray",props:{utsettelseReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},utsettelseKvoter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Bt=({readOnly:e,alleKodeverk:t})=>{const n=t[Le.UTSETTELSE_AARSAK_TYPE],r=t[Le.UTTAK_PERIODE_TYPE],{watch:a}=W(),s=a(`${oe}.skalUtsette`)||!1;return i.jsxs(ne,{gap:"2",children:[i.jsx(Ce,{children:i.jsx(S,{id:"Registrering.Permisjon.Utsettelse.Title"})}),i.jsx(Ye,{readOnly:e,name:`${oe}.skalUtsette`,label:i.jsx(S,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),s&&i.jsx(nl,{utsettelseReasons:n,utsettelseKvoter:r,readOnly:e})]})};Bt.initialValues=()=>({[Mt]:[],skalUtsette:!1});Bt.__docgenInfo={description:`PermisjonUtsettelsePanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}}}}],displayName:"PermisjonUtsettelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const dn=({foreldreType:e,readOnly:t,alleKodeverk:n,erEndringssøknad:r})=>{var k,y,b,h;const a=de(),{setError:s,clearErrors:o,formState:l,watch:d}=W(),[m,g,u,f]=d([`${oe}.fulltUttak`,`${oe}.skalGradere`,`${oe}.skalUtsette`,`${oe}.skalOvertaKvote`]);return v.useEffect(()=>{!m&&!g&&!u&&!f?s(`${oe}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}):o(`${oe}.notRegisteredInput`)},[m,g,u,f]),i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"Registrering.Permisjon.Title"})}),i.jsx(Ct,{foreldreType:e,readOnly:t,alleKodeverk:n}),i.jsx(Kt,{readOnly:t,foreldreType:e,alleKodeverk:n,erEndringssøknad:r}),i.jsx(Bt,{readOnly:t,alleKodeverk:n}),i.jsx(ln,{readOnly:t,alleKodeverk:n}),i.jsx($t,{readOnly:t,alleKodeverk:n}),l.isSubmitted&&((y=(k=l.errors[oe])==null?void 0:k.notRegisteredInput)==null?void 0:y.message)&&i.jsx(or,{children:(h=(b=l.errors[oe])==null?void 0:b.notRegisteredInput)==null?void 0:h.message})]})})};dn.transformValues=e=>{var s,o,l,d,m,g,u;const t=e[oe],n=t,r=t[Nn];(s=e.tidsromPermisjon)!=null&&s.fulltUttak&&r&&(n[Nn]=Lt.transformValues(r));const a=t[Yr];return(o=e.tidsromPermisjon)!=null&&o.skalGradere&&a&&(n[Yr]=ln.transformValues(t)),(l=e.tidsromPermisjon)!=null&&l.fulltUttak||(n[Nn]=void 0),(d=e.tidsromPermisjon)!=null&&d.skalGradere||(n[Yr]=void 0),(m=e.tidsromPermisjon)!=null&&m.skalUtsette||(n[Mt]=void 0),(g=e.tidsromPermisjon)!=null&&g.skalOvertaKvote||(n[Jo]=void 0),(u=e.tidsromPermisjon)!=null&&u.skalHaOpphold||(n[ts]=void 0),{[oe]:n}};dn.initialValues=()=>({[oe]:{...Ct.initialValues(),...Kt.initialValues(),...Bt.initialValues(),...ln.initialValues(),...$t.initialValues()}});dn.__docgenInfo={description:`PermisjonPanel

Viser permisjonspanel for mor eller far/medmor`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"PermisjonFormValues"}}],returns:null},{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]}}}}],displayName:"PermisjonPanel",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const pv=ie(he),ls=({foreldreType:e,readOnly:t,alleKodeverk:n,erEndringssøknad:r})=>i.jsx(Ge,{value:pv,children:i.jsx(dn,{readOnly:t,foreldreType:e,alleKodeverk:n,erEndringssøknad:r})});ls.transformValues=dn.transformValues;ls.initialValues=dn.initialValues;ls.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"PermisjonFormValues"}}],returns:null},{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]}}}}],displayName:"PermisjonIndex",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};class Jv{constructor(t,n,r){Gn(this,"fagsakYtelseType");Gn(this,"familieHendelseType");Gn(this,"foreldreType");this.fagsakYtelseType=zt(t),t===Ci.SVANGERSKAPSPENGER?this.familieHendelseType=nr.FODSEL:this.familieHendelseType=zt(n),this.foreldreType=zt(r)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const cv=ie(he),ds=({readOnly:e})=>i.jsx(Ge,{value:cv,children:i.jsx(br,{name:"erBarnetFodt",label:i.jsx(S,{id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[M],isReadOnly:e,isTrueOrFalseSelection:!0,radios:[{label:i.jsx(S,{id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:i.jsx(S,{id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]})});ds.__docgenInfo={description:"",methods:[],displayName:"ErBarnetFodt",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};var rt={exports:{}},fv=rt.exports,Ri;function vv(){return Ri||(Ri=1,function(e,t){(function(n,r){e.exports=r()})(fv,function(){return function(n,r){r.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(rt)),rt.exports}var kv=vv();const yv=Di(kv);var nt={exports:{}},bv=nt.exports,Ei;function hv(){return Ei||(Ei=1,function(e,t){(function(n,r){e.exports=r()})(bv,function(){return function(n,r){r.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(nt)),nt.exports}var Rv=hv();const Ev=Di(Rv),Fi=ie(he);Y.extend(Ev);Y.extend(yv);const Ai=Ko(1),_i=Cn(9),ct=()=>Y().subtract(5,"year"),tl=()=>Y(),Fv=()=>Y().subtract(5,"year"),Av=()=>Y().subtract(0,"year"),Br=()=>Y().subtract(5,"year"),Gr=()=>Y().add(9,"months"),_v=(e,t)=>{const n=e?Y(e,Ee):void 0,r=Y().startOf("day"),a=n!=null&&n.isValid()&&(n!=null&&n.isBefore(r))?n:r;return Se(a)(t)},al=(e,t)=>{const n=e?Y(e,Ee):void 0,r=Y(t,Ee);if(!(n!=null&&n.isValid())||!(r!=null&&r.isValid()))return null;const a=n.subtract(3,"weeks").subtract(1,"day"),s=n.add(5,"months").add(1,"day");return a.isSameOrAfter(r)?Fi.formatMessage({id:"ValidationMessage.ForTidligTermin"}):s.isSameOrBefore(r)?Fi.formatMessage({id:"ValidationMessage.ForSenTermin"}):null},dr=ie(he),jv=e=>t=>{const n=e("foedselsDato");return al(n,t)},Ov=e=>t=>{const n=e("termindato");return _v(n,t)},us=({readOnly:e,erForeldrepenger:t=!1})=>{const{watch:n,getValues:r}=W(),a=n("erBarnetFodt");return i.jsx(Ge,{value:dr,children:i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:dr.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),i.jsx(ds,{readOnly:e}),a!==void 0&&i.jsxs(ne,{gap:"4",children:[a===!1&&i.jsxs(i.Fragment,{children:[i.jsxs(Be,{gap:"4",children:[i.jsx(Q,{name:"termindato",label:dr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:Br().toDate(),toDate:Gr().toDate(),defaultMonth:new Date,validate:[M,re,Te(Br()),Se(Gr())]}),i.jsx(Oe,{name:"antallBarn",label:dr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:s=>{const o=parseInt(s.toString(),10);return isNaN(o)?s:o},validate:[M,Pr,Ai,_i]})]}),i.jsx(Q,{name:"terminbekreftelseDato",label:dr.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:e,fromDate:Fv().toDate(),toDate:Av().toDate(),defaultMonth:new Date,validate:[re,Ov(r)]})]}),a===!0&&i.jsxs(i.Fragment,{children:[i.jsxs(Be,{gap:"4",children:[i.jsx(Q,{name:"foedselsDato",label:dr.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,validate:[M,re,Te(ct()),Jr],fromDate:ct().toDate(),toDate:tl().toDate()}),i.jsx(Oe,{name:"antallBarn",label:dr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:s=>{const o=parseInt(s.toString(),10);return Number.isNaN(o)?s:o},validate:[M,Pr,Ai,_i]})]}),t&&i.jsx(bt,{size:"small",variant:"info",children:i.jsx(Ce,{size:"small",children:dr.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),i.jsx(Q,{name:"termindato",label:dr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,validate:[re,Te(Br()),Se(Gr()),jv(r)],fromDate:Br().toDate(),toDate:Gr().toDate(),defaultMonth:new Date})]})]})]})})})};us.initialValues=()=>({erBarnetFodt:void 0});us.transformValues=({antallBarn:e,erBarnetFodt:t,foedselsDato:n,termindato:r,terminbekreftelseDato:a})=>t?{erBarnetFodt:!0,termindato:r,foedselsDato:n,antallBarn:e}:{erBarnetFodt:!1,termindato:r,terminbekreftelseDato:a,antallBarnFraTerminbekreftelse:e};us.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  antallBarn,
  erBarnetFodt,
  foedselsDato,
  termindato,
  terminbekreftelseDato,
}: FormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"union",raw:`| {
    erBarnetFodt: false;
    termindato?: string;
    terminbekreftelseDato?: string;
    antallBarnFraTerminbekreftelse?: number;
  }
| {
    erBarnetFodt: true;
    termindato?: string;
    foedselsDato?: string;
    antallBarn?: number;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erBarnetFodt: false;
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"false",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erBarnetFodt: true;
  termindato?: string;
  foedselsDato?: string;
  antallBarn?: number;
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pa=ie(he),Tv=e=>t=>{const n=e("foedselsDato");return al(n,t)},ms=({readOnly:e})=>{const{getValues:t,watch:n}=W(),r=n("erBarnetFodt");return i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:pa.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),i.jsx(ds,{readOnly:e}),r&&i.jsx(Q,{name:"foedselsDato",label:pa.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,fromDate:ct().toDate(),toDate:tl().toDate(),validate:[M,re,Jr,Te(ct())]}),i.jsx(Q,{name:"termindato",label:pa.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:Br().toDate(),toDate:Gr().toDate(),defaultMonth:new Date,validate:[M,re,Te(Br()),Se(Gr()),Tv(t)]})]})})};ms.initialValues=()=>({termindato:void 0,foedselsDato:void 0,erBarnetFodt:!1});ms.transformValues=({erBarnetFodt:e,foedselsDato:t,termindato:n})=>({erBarnetFodt:e,termindato:n,foedselsDato:e?t:void 0});ms.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ erBarnetFodt, foedselsDato, termindato }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"TerminOgFodselPanelSvp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const wv=Cn(100),ji={tilretteleggingType:"",dato:"",stillingsprosent:""},ft=({readOnly:e,name:t})=>{const n=de(),{control:r}=W(),{fields:a,remove:s,append:o}=Ue({control:r,name:t});return v.useEffect(()=>{a.length===0&&o(ji)},[]),i.jsx(Ot,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:i.jsx(er,{fields:a,emptyPeriodTemplate:ji,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:e,append:o,remove:s,children:(l,d)=>i.jsxs(hr,{readOnly:e,remove:s,index:d,children:[i.jsx(Ke,{readOnly:e,name:`${t}.${d}.tilretteleggingType`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[M],selectValues:[i.jsx("option",{value:jr.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},jr.HEL_TILRETTELEGGING),i.jsx("option",{value:jr.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},jr.DELVIS_TILRETTELEGGING),i.jsx("option",{value:jr.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},jr.INGEN_TILRETTELEGGING)]}),i.jsx(Q,{isReadOnly:e,name:`${t}.${d}.dato`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[M]}),i.jsx(Oe,{readOnly:e,name:`${t}.${d}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[M,wv],maxLength:99})]},l.id)})})};ft.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ve="tilretteleggingArbeidsforhold",vt="tilretteleggingForArbeidsgiver",Nv="tilretteleggingSelvstendigNaringsdrivende",Pv="tilretteleggingFrilans",qv="tilretteleggingArbeidsgiver",Ta=`${ve}.${vt}`,ca=e=>`${Ta}.${e}`,sl=({open:e,readOnly:t=!1,index:n,remove:r})=>{const{getFieldState:a,watch:s}=W(),{error:o}=a(`${Ta}.${n}`),l=s(`${Ta}.${n}.organisasjonsnummer`),[d,m]=v.useState(e),g=de();return i.jsxs(se.Row,{shadeOnHover:!1,style:{backgroundColor:o&&!d?"var(--a-red-50)":"none"},children:[i.jsx(se.DataCell,{valign:"top",children:i.jsx(be,{type:"button",variant:"tertiary-neutral",onClick:()=>m(u=>!u),icon:d?i.jsx(Ui,{"aria-label":"Vis mindre"}):i.jsx(Ft,{"aria-label":"Vis mer"})})}),i.jsxs(se.DataCell,{valign:"top",children:[i.jsx(Ot,{hidden:d,paddingBlock:"3",children:i.jsx(we,{weight:"semibold",children:l})}),i.jsxs(ne,{gap:"4",hidden:!d,children:[i.jsxs(Be,{gap:"4",children:[i.jsx(Oe,{readOnly:t,name:`${ca(n)}.organisasjonsnummer`,label:g.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[M,u=>lf(u.toString()),of],maxLength:99}),i.jsx(Q,{name:`${ca(n)}.behovsdato`,label:g.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[M],isReadOnly:t})]}),i.jsx(ft,{name:`${ca(n)}.${qv}`,readOnly:t})]})]}),i.jsx(se.DataCell,{valign:"top",align:"right",children:i.jsx(be,{type:"button",variant:"tertiary-neutral",onClick:r,onKeyDown:r,icon:i.jsx(At,{"aria-label":"Slett rad"})})})]})};sl.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const Sv={organisasjonsnummer:"",behovsdato:""},Iv=`${ve}.${vt}`,il=({readOnly:e})=>{var d,m,g,u,f;const t=de(),{control:n,formState:{errors:r}}=W(),{fields:a,append:s,remove:o}=Ue({control:n,name:Iv,rules:{required:t.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),l=()=>{s(Sv)};return v.useEffect(()=>{a.length===0&&l()},[]),i.jsxs(ne,{gap:"4",children:[i.jsxs(se,{children:[i.jsx(se.Header,{children:i.jsxs(se.Row,{children:[i.jsx(se.HeaderCell,{style:{width:"48px"}}),i.jsx(se.HeaderCell,{children:i.jsx(S,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),i.jsx(se.HeaderCell,{style:{width:"48px"}})]})}),i.jsx(se.Body,{children:a.map((k,y)=>i.jsx(sl,{index:y,open:y+1===a.length,remove:()=>o(y),readOnly:e},k.id))})]}),((g=(m=(d=r[ve])==null?void 0:d[vt])==null?void 0:m.root)==null?void 0:g.message)&&i.jsx(or,{children:(f=(u=r[ve])==null?void 0:u[vt].root)==null?void 0:f.message}),i.jsx("div",{children:i.jsx(be,{size:"small",variant:"tertiary",onClick:l,type:"button",icon:i.jsx(at,{"aria-hidden":!0}),children:i.jsx(S,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};il.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const xv=e=>{const t=[];return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&t.push(...e.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),e!=null&&e.sokForFrilans&&t.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&t.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),t},Qn=ie(he),gs=({readOnly:e})=>{var d,m,g,u;const{watch:t,setError:n,clearErrors:r,formState:a}=W(),[s,o,l]=t([`${ve}.sokForSelvstendigNaringsdrivende`,`${ve}.sokForFrilans`,`${ve}.sokForArbeidsgiver`]);return v.useEffect(()=>{!s&&!o&&!l?n(`${ve}.notRegisteredInput`,{type:"custom",message:Qn.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):r(`${ve}.notRegisteredInput`)},[s,o,l]),i.jsx(Ge,{value:Qn,children:i.jsx(Pe,{children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&((m=(d=a.errors[ve])==null?void 0:d.notRegisteredInput)==null?void 0:m.message)&&i.jsx(or,{children:(u=(g=a.errors[ve])==null?void 0:g.notRegisteredInput)==null?void 0:u.message}),i.jsx(ye,{name:`${ve}.sokForSelvstendigNaringsdrivende`,label:i.jsx(S,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:e,trueContent:i.jsx(Me,{marginTop:4,children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"BehovForTilretteleggingPanel.TittelSN"})}),i.jsx(Q,{name:`${ve}.behovsdatoSN`,label:Qn.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[M],isReadOnly:e}),i.jsx(ft,{name:`${ve}.${Nv}`,readOnly:e})]})})}),i.jsx(ye,{name:`${ve}.sokForFrilans`,label:i.jsx(S,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:e,trueContent:i.jsx(Me,{marginTop:4,children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),i.jsx(Q,{name:`${ve}.behovsdatoFrilans`,label:Qn.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[M],isReadOnly:e}),i.jsx(ft,{name:`${ve}.${Pv}`,readOnly:e})]})})}),i.jsx(ye,{name:`${ve}.sokForArbeidsgiver`,label:i.jsx(S,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:e,trueContent:i.jsx(Me,{marginTop:4,children:i.jsxs(ne,{gap:"4",children:[i.jsx(me,{size:"small",children:i.jsx(S,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),i.jsx(il,{readOnly:e})]})})})]})})})};gs.initialValues=()=>({[ve]:{}});gs.transformValues=({tilretteleggingArbeidsforhold:e})=>({[ve]:xv(e)});gs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ tilretteleggingArbeidsforhold }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};export{Ga as A,ns as B,rs as D,Ci as F,Hv as H,Ya as I,Le as K,za as L,Wa as M,Xa as O,ls as P,Za as R,Jv as S,us as T,es as V,Wv as W,Gv as a,nr as b,Rt as c,Ha as d,Ja as e,Ua as f,Uv as g,Qa as h,ms as i,gs as j,Ot as k,S as l,br as m,M as n,zv as u,Yv as v};
