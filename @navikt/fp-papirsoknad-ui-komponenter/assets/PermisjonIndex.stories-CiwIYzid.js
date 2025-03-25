import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{a as V,d as A,i as J,r as C,Z as O,G as j,U as q,X as ie,h as $e,V as S,L as X,O as Qe,b as er,E as rr,P as nr,f as ar,m as tr,c as ir,e as sr,B as or}from"./nb_NO-F2oxspNt.js";import{e as v,O as P,f as ke,i as xe,D as z,H as Z,h as W,g as dr,M as lr,X as mr,a as ur}from"./index.es-DFaLKfmV.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as Q}from"./foreldreType-BrQrvOqY.js";import"./withPanelData-CFwWFtpM.js";import{r as U}from"./index-_2TAQcTa.js";import{K as N,a as gr}from"./alleKodeverk-Dm9joGL5.js";import{d as se}from"./dayjs.min-DkLNzaWO.js";import{F as ee}from"./FieldArrayRow-CwiQJz8G.js";import{M as y}from"./message-BYsGUOk8.js";import{A as Ye}from"./Alert-BNn36VPj.js";import"./index-BsrZSYsV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";import"./entry-preview-C03bE3rC.js";import"./iframe-C5Mzxw4X.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./Trash-CCdfhrAv.js";var _=(e=>(e.FISKER="FISKER",e.ARBEIDSTAKER="ARBEIDSTAKER",e.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",e.SJOMANN="SJØMANN",e.JORDBRUKER="JORDBRUKER",e.DAGPENGER="DAGPENGER",e.INAKTIV="INAKTIV",e.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",e.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",e.FRILANSER="FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",e.DAGMAMMA="DAGMAMMA",e.ANNET="ANNET",e))(_||{}),Y=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(Y||{}),H=(e=>(e.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",e.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",e.ALENEOMSORG="ALENEOMSORG",e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e.UDEFINERT="-",e))(H||{}),F=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(F||{});const l="tidsromPermisjon",h="graderingPeriode",ve="oppholdPerioder",Be="overforingsperioder",de="utsettelsePeriode",B="permisjonsPerioder",ye=`${l}.${B}`,T=e=>`${ye}.${e}`,pr=xe(100),Re=[F.FELLESPERIODE,F.FEDREKVOTE,F.FORELDREPENGER_FOR_FODSEL,F.FORELDREPENGER,F.MODREKVOTE],kr=e=>e.filter(({kode:r})=>Re.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),vr=e=>e.map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),He=[F.FEDREKVOTE,F.FORELDREPENGER_FOR_FODSEL,F.MODREKVOTE],re=(e,r)=>e?r:"",yr=e=>!!e&&se(e,$e).isBefore(se("2019-01-01")),fe=e=>()=>{const a=(e(ye)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return W(a)},Ae=(e,r,a)=>()=>{const t=e(`${T(r)}.periodeFom`),i=e(`${T(r)}.periodeTom`);return!i||!t?null:a?z(i)(t):Z(t)(i)},le=({sokerErMor:e,readOnly:r,alleKodeverk:a})=>{const t=V(),i=a[N.UTTAK_PERIODE_TYPE],s=a[N.MORS_AKTIVITET];s.filter(({kode:u})=>u==="-").length===0&&s.unshift({kode:"-",navn:"",kodeverk:""});const{control:g,getValues:m,trigger:p,watch:R,formState:{isSubmitted:E}}=A(),{fields:o,remove:k,append:d}=J({control:g,name:ye});return U.useEffect(()=>{o.length===0&&d({})},[]),n.jsx(C,{readOnly:r,fields:o,bodyText:t.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:d,remove:k,children:(u,c)=>{const b=c===0,w=R(T(c)),$=yr(w.periodeFom),We=He.some(x=>x===w.periodeType)||w.periodeType==="";return n.jsxs(ee,{readOnly:r,remove:k,index:c,children:[n.jsx("div",{children:n.jsx(O,{readOnly:r,name:`${T(c)}.periodeType`,label:re(b,t.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:kr(i),validate:[v]})}),n.jsx(j,{isReadOnly:r,name:`${T(c)}.periodeFom`,label:re(b,t.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[v,P,Ae(m,c,!0),fe(m)],onChange:()=>E?p():void 0}),n.jsx(j,{isReadOnly:r,name:`${T(c)}.periodeTom`,label:re(b,t.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[v,P,Ae(m,c,!1),fe(m)],onChange:()=>E?p():void 0}),!e&&n.jsx(O,{readOnly:r,disabled:We,name:`${T(c)}.morsAktivitet`,label:re(b,t.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:vr(s),hideValueOnDisable:!0}),n.jsx(q,{readOnly:r,name:`${T(c)}.flerbarnsdager`,label:n.jsx(y,{id:"Registrering.Permisjon.Flerbarnsdager"})}),n.jsx(q,{readOnly:r,name:`${T(c)}.harSamtidigUttak`,label:n.jsx(y,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),w.harSamtidigUttak&&n.jsx(ie,{name:`${T(c)}.samtidigUttaksprosent`,validate:[ke,pr],label:t.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:x=>Number.isNaN(x)?x:parseFloat(x.toString()).toFixed(2)}),$&&n.jsx(Ye,{size:"small",variant:"warning",children:n.jsx(y,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},u.id)}})};le.transformValues=e=>e.map(r=>He.some(a=>a===r.periodeType)?{periodeType:r.periodeType,periodeFom:r.periodeFom,periodeTom:r.periodeTom,flerbarnsdager:r.flerbarnsdager?r.flerbarnsdager:!1,harSamtidigUttak:r.harSamtidigUttak?r.harSamtidigUttak:!1,samtidigUttaksprosent:r.samtidigUttaksprosent}:{periodeType:r.periodeType,periodeFom:r.periodeFom,periodeTom:r.periodeTom,morsAktivitet:r.morsAktivitet,flerbarnsdager:r.flerbarnsdager?r.flerbarnsdager:!1,harSamtidigUttak:r.harSamtidigUttak?r.harSamtidigUttak:!1,samtidigUttaksprosent:r.samtidigUttaksprosent});le.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const me=({foreldreType:e,readOnly:r,alleKodeverk:a})=>{const{watch:t}=A(),i=t(`${l}.fulltUttak`)||!1;return n.jsxs(S,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.FulltUttak"})}),n.jsx(q,{readOnly:r,name:`${l}.fulltUttak`,label:n.jsx(y,{id:"Registrering.Permisjon.FulltUttak"})}),i&&n.jsx(le,{sokerErMor:e===Q.MOR,readOnly:r,alleKodeverk:a})]})};me.initialValues=()=>({[B]:[],fulltUttak:!1});me.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Rr=mr(9),oe=`${l}.${h}`,f=e=>`${oe}.${e}`,be=e=>()=>{const a=(e(`${oe}`)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?W(a):void 0},Te=(e,r,a)=>()=>{const t=e(`${f(r)}.periodeFom`),i=e(`${f(r)}.periodeTom`);return!i||!t?null:a?z(i)(t):Z(t)(i)},Er=(e,r)=>a=>e(`${f(r)}.arbeidskategoriType`)===_.ARBEIDSTAKER?v(a):void 0,cr=e=>{if(e)return e.length===11?lr(e):Rr(e)},qe={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},fr=[_.ARBEIDSTAKER,_.SELVSTENDIG_NAERINGSDRIVENDE,_.FRILANSER],je=xe(100),Ar=e=>e.filter(({kode:r})=>Re.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),br=e=>e.filter(({kode:r})=>fr.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Je=({graderingKvoter:e,readOnly:r,arbeidskategoriTyper:a})=>{const t=V(),{watch:i,control:s,getValues:g,trigger:m,formState:{isSubmitted:p}}=A(),{fields:R,remove:E,append:o}=J({control:s,name:`${oe}`}),k=i(`${oe}`)||[];return U.useEffect(()=>{R.length===0&&o(qe)},[]),n.jsx(C,{fields:R,emptyPeriodTemplate:qe,bodyText:t.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,remove:E,append:o,children:(d,u)=>{const{harSamtidigUttak:c,periodeFom:b}=k[u],w=b&&se(b,$e).isBefore(se("2019-01-01"));return n.jsxs(ee,{readOnly:r,remove:E,index:u,children:[n.jsx(O,{name:`${f(u)}.periodeForGradering`,selectValues:Ar(e),label:t.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[v]}),n.jsx(j,{label:t.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${f(u)}.periodeFom`,validate:[v,P,Te(g,u,!0),be(g)],onChange:()=>p?m():void 0}),n.jsx(j,{label:t.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${f(u)}.periodeTom`,validate:[v,P,Te(g,u,!1),be(g)],onChange:()=>p?m():void 0}),n.jsx(ie,{label:n.jsx(y,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${f(u)}.prosentandelArbeid`,validate:[v,ke,je],normalizeOnBlur:$=>Number.isNaN($)?$:parseFloat($.toString()).toFixed(2)}),n.jsx(ie,{label:t.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${f(u)}.arbeidsgiverIdentifikator`,validate:[Er(g,u),dr,cr]}),n.jsx(O,{label:t.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${f(u)}.arbeidskategoriType`,selectValues:br(a),validate:[v],onChange:()=>p?m():void 0}),n.jsx(q,{name:`${f(u)}.skalGraderes`,label:n.jsx(y,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})}),n.jsx(q,{readOnly:r,name:`${f(u)}.flerbarnsdager`,label:n.jsx(y,{id:"Registrering.Permisjon.Flerbarnsdager"})}),n.jsx(q,{name:`${f(u)}.harSamtidigUttak`,label:n.jsx(y,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),c&&n.jsx(ie,{name:`${f(u)}.samtidigUttaksprosent`,validate:[v,ke,je],label:t.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})}),w&&n.jsx(Ye,{size:"small",variant:"warning",children:n.jsx(y,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},d.id)}})};Je.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const G=({readOnly:e,alleKodeverk:r})=>{const a=r[N.UTTAK_PERIODE_TYPE],t=r[N.ARBEIDSKATEGORI],{watch:i}=A(),s=i(`${l}.skalGradere`)||!1;return n.jsxs(S,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.Gradering.Title"})}),n.jsx(q,{readOnly:e,name:`${l}.skalGradere`,label:n.jsx(y,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),s&&n.jsx(Je,{graderingKvoter:a,arbeidskategoriTyper:t,readOnly:e})]})};G.transformValues=e=>{const r=e[h];return r?r.map(a=>a.arbeidskategoriType?{...a,erArbeidstaker:a.arbeidskategoriType===_.ARBEIDSTAKER,erFrilanser:a.arbeidskategoriType===_.FRILANSER,erSelvstNæringsdrivende:a.arbeidskategoriType===_.SELVSTENDIG_NAERINGSDRIVENDE}:a):[]};G.initialValues=()=>({[h]:[],skalGradere:!1});G.__docgenInfo={description:`PermisjonGraderingPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ee=`${l}.${ve}`,I=e=>`${Ee}.${e}`,Pe=e=>()=>{const a=(e(`${Ee}`)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?W(a):void 0},Fe={periodeFom:"",periodeTom:"",årsak:""},Tr=[Y.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Y.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Y.UTTAK_FELLESP_ANNEN_FORELDER,Y.UTTAK_FORELDREPENGER_ANNEN_FORELDER],qr=e=>e.filter(({kode:r})=>Tr.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Ce=({oppholdsReasons:e,readOnly:r})=>{const a=V(),{control:t,getValues:i,trigger:s,formState:{isSubmitted:g}}=A(),{fields:m,remove:p,append:R}=J({control:t,name:`${Ee}`});return U.useEffect(()=>{m.length===0&&R(Fe)},[]),n.jsx(C,{fields:m,emptyPeriodTemplate:Fe,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:R,remove:p,children:(E,o)=>n.jsxs(ee,{readOnly:r,remove:p,index:o,children:[n.jsx(j,{name:`${I(o)}.periodeFom`,label:a.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[v,P,()=>{const k=i(`${I(o)}.periodeFom`),d=i(`${I(o)}.periodeTom`);return d&&k?z(d)(k):null},Pe(i)],onChange:()=>g?s():void 0}),n.jsx(j,{name:`${I(o)}.periodeTom`,label:a.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[v,P,()=>{const k=i(`${I(o)}.periodeFom`),d=i(`${I(o)}.periodeTom`);return d&&k?Z(k)(d):null},Pe(i)],onChange:()=>g?s():void 0}),n.jsx("div",{children:n.jsx(O,{name:`${I(o)}.årsak`,label:a.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}),selectValues:qr(e),validate:[v]})})]},E.id)})};Ce.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ue=({readOnly:e,alleKodeverk:r})=>{const a=r[N.OPPHOLD_ARSAK],{watch:t}=A(),i=t(`${l}.skalHaOpphold`)||!1;return n.jsxs(S,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.Opphold.Title"})}),n.jsx(q,{readOnly:e,name:`${l}.skalHaOpphold`,label:n.jsx(y,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),i&&n.jsx(Ce,{oppholdsReasons:a,readOnly:e})]})};ue.initialValues=()=>({[ve]:[],skalHaOpphold:!1});ue.__docgenInfo={description:`PermisjonOppholdPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ce=`${l}.${Be}`,M=e=>`${ce}.${e}`,Oe=e=>()=>{const a=(e(ce)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?W(a):void 0},_e={periodeFom:"",periodeTom:"",overforingArsak:""},Xe=({selectValues:e,readOnly:r})=>{const a=V(),{control:t,getValues:i,trigger:s,formState:{isSubmitted:g}}=A(),{fields:m,remove:p,append:R}=J({control:t,name:ce});return U.useEffect(()=>{m.length===0&&R(_e)},[]),n.jsx(C,{fields:m,emptyPeriodTemplate:_e,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:R,remove:p,children:(E,o)=>n.jsxs(ee,{readOnly:r,remove:p,index:o,children:[n.jsx("div",{children:n.jsx(O,{name:`${M(o)}.overforingArsak`,label:a.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}),selectValues:e,validate:[v],readOnly:r})}),n.jsx(j,{isReadOnly:r,name:`${M(o)}.periodeFom`,validate:[v,P,()=>{const k=i(`${M(o)}.periodeFom`),d=i(`${M(o)}.periodeTom`);return d&&k?z(d)(k):null},Oe(i)],label:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}),onChange:()=>g?s():void 0}),n.jsx(j,{isReadOnly:r,name:`${M(o)}.periodeTom`,validate:[v,P,()=>{const k=i(`${M(o)}.periodeFom`),d=i(`${M(o)}.periodeTom`);return d&&k?Z(k)(d):null},Oe(i)],label:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}),onChange:()=>g?s():void 0})]},E.id)})};Xe.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const jr=(e,r,a)=>r===H.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):r===H.SYKDOM_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):a,Pr=(e,r,a,t)=>e.filter(({kode:i})=>a||i!==H.ALENEOMSORG&&i!==H.IKKE_RETT_ANNEN_FORELDER).map(({kode:i,navn:s})=>r?n.jsx("option",{value:i,children:s},i):n.jsx("option",{value:i,children:jr(t,i,s)},i)),ge=({foreldreType:e,alleKodeverk:r,readOnly:a,erEndringssøknad:t})=>{const i=V(),s=r[N.OVERFOERING_AARSAK_TYPE],g=Pr(s,e===Q.MOR,t,i),{watch:m}=A(),p=m(`${l}.skalOvertaKvote`)||!1;return n.jsxs(S,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),n.jsx(q,{readOnly:a,name:`${l}.skalOvertaKvote`,label:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),p&&n.jsx(Xe,{selectValues:g,readOnly:a})]})};ge.initialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[]});ge.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Ne={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},ze=`${l}.${de}`,K=e=>`${ze}.${e}`,we=e=>()=>{const a=(e(`${ze}`)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?W(a):void 0},Ie=(e,r,a)=>()=>{const t=`${K(r)}`,i=e(`${t}.periodeFom`),s=e(`${t}.periodeTom`);return!s&&!i?null:a?z(s)(i):Z(i)(s)},Fr=e=>e.map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Or=e=>e.filter(({kode:r})=>Re.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Ze=({utsettelseReasons:e,utsettelseKvoter:r,readOnly:a})=>{const t=V(),{control:i,getValues:s,trigger:g,formState:{isSubmitted:m}}=A(),{fields:p,remove:R,append:E}=J({control:i,name:`${l}.${de}`});U.useEffect(()=>{p.length===0&&E(Ne)},[]);const o=U.useCallback(()=>m?g():void 0,[m,g]);return n.jsx(C,{fields:p,emptyPeriodTemplate:Ne,bodyText:t.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,append:E,remove:R,children:(k,d)=>n.jsxs(ee,{readOnly:a,remove:R,index:d,children:[n.jsx(O,{name:`${K(d)}.periodeForUtsettelse`,label:t.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}),selectValues:Or(r),validate:[v]}),n.jsx(j,{name:`${K(d)}.periodeFom`,label:t.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[v,P,Ie(s,d,!0),we(s)],onChange:o}),n.jsx(j,{name:`${K(d)}.periodeTom`,label:t.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[v,P,Ie(s,d,!1),we(s)],onChange:o}),n.jsx(O,{name:`${K(d)}.arsakForUtsettelse`,label:t.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}),selectValues:Fr(e),validate:[v],onChange:o}),n.jsx(O,{label:t.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${K(d)}.erArbeidstaker`,selectValues:[n.jsx("option",{value:"true",children:t.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),n.jsx("option",{value:"false",children:t.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[u=>s(`${K(d)}.arsakForUtsettelse`)==="ARBEID"?v(u):void 0]})]},k.id)})};Ze.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const pe=({readOnly:e,alleKodeverk:r})=>{const a=r[N.UTSETTELSE_AARSAK_TYPE],t=r[N.UTTAK_PERIODE_TYPE],{watch:i}=A(),s=i(`${l}.skalUtsette`)||!1;return n.jsxs(S,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.Utsettelse.Title"})}),n.jsx(q,{readOnly:e,name:`${l}.skalUtsette`,label:n.jsx(y,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),s&&n.jsx(Ze,{utsettelseReasons:a,utsettelseKvoter:t,readOnly:e})]})};pe.initialValues=()=>({[de]:[],skalUtsette:!1});pe.__docgenInfo={description:`PermisjonUtsettelsePanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const L=({foreldreType:e,readOnly:r,alleKodeverk:a,erEndringssøknad:t})=>{var d,u,c,b;const i=V(),{setError:s,clearErrors:g,formState:m,watch:p}=A(),[R,E,o,k]=p([`${l}.fulltUttak`,`${l}.skalGradere`,`${l}.skalUtsette`,`${l}.skalOvertaKvote`]);return U.useEffect(()=>{!R&&!E&&!o&&!k?s(`${l}.notRegisteredInput`,{type:"custom",message:i.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}):g(`${l}.notRegisteredInput`)},[R,E,o,k]),n.jsx(Qe,{children:n.jsxs(S,{gap:"4",children:[n.jsx(er,{size:"small",children:n.jsx(y,{id:"Registrering.Permisjon.Title"})}),n.jsx(me,{foreldreType:e,readOnly:r,alleKodeverk:a}),n.jsx(ge,{readOnly:r,foreldreType:e,alleKodeverk:a,erEndringssøknad:t}),n.jsx(pe,{readOnly:r,alleKodeverk:a}),n.jsx(G,{readOnly:r,alleKodeverk:a}),n.jsx(ue,{readOnly:r,alleKodeverk:a}),m.isSubmitted&&((u=(d=m.errors[l])==null?void 0:d.notRegisteredInput)==null?void 0:u.message)&&n.jsx(rr,{children:(b=(c=m.errors[l])==null?void 0:c.notRegisteredInput)==null?void 0:b.message})]})})};L.transformValues=e=>{var s,g,m,p,R,E,o;const r=e[l],a=r,t=r[B];(s=e.tidsromPermisjon)!=null&&s.fulltUttak&&t&&(a[B]=le.transformValues(t));const i=r[h];return(g=e.tidsromPermisjon)!=null&&g.skalGradere&&i&&(a[h]=G.transformValues(r)),(m=e.tidsromPermisjon)!=null&&m.fulltUttak||(a[B]=void 0),(p=e.tidsromPermisjon)!=null&&p.skalGradere||(a[h]=void 0),(R=e.tidsromPermisjon)!=null&&R.skalUtsette||(a[de]=void 0),(E=e.tidsromPermisjon)!=null&&E.skalOvertaKvote||(a[Be]=void 0),(o=e.tidsromPermisjon)!=null&&o.skalHaOpphold||(a[ve]=void 0),{[l]:a}};L.initialValues=()=>({[l]:{...me.initialValues(),...ge.initialValues(),...pe.initialValues(),...G.initialValues(),...ue.initialValues()}});L.__docgenInfo={description:`PermisjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const _r=ar(tr),D=({foreldreType:e,readOnly:r,alleKodeverk:a,erEndringssøknad:t})=>n.jsx(nr,{value:_r,children:n.jsx(L,{readOnly:r,foreldreType:e,alleKodeverk:a,erEndringssøknad:t})});D.transformValues=L.transformValues;D.initialValues=L.initialValues;D.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Wr={title:"ui-komponenter/permisjon",component:D,parameters:{submitCallback:ur("onSubmit")},args:{readOnly:!1,alleKodeverk:gr},render:(e,{parameters:{submitCallback:r}})=>{const a=ir({defaultValues:D.initialValues()});return n.jsx(sr,{formMethods:a,onSubmit:t=>r(D.transformValues(t)),children:n.jsxs(S,{gap:"10",children:[n.jsx(D,{...e}),n.jsx(or,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},ne={args:{foreldreType:Q.MOR,erEndringssøknad:!1}},ae={args:{foreldreType:Q.FAR,erEndringssøknad:!1}},te={args:{foreldreType:Q.MOR,erEndringssøknad:!0}};var Me,Ke,De;ne.parameters={...ne.parameters,docs:{...(Me=ne.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    foreldreType: ForeldreType.MOR,
    erEndringssøknad: false
  }
}`,...(De=(Ke=ne.parameters)==null?void 0:Ke.docs)==null?void 0:De.source}}};var Ue,Ve,Se;ae.parameters={...ae.parameters,docs:{...(Ue=ae.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    foreldreType: ForeldreType.FAR,
    erEndringssøknad: false
  }
}`,...(Se=(Ve=ae.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var he,Ge,Le;te.parameters={...te.parameters,docs:{...(he=te.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    foreldreType: ForeldreType.MOR,
    erEndringssøknad: true
  }
}`,...(Le=(Ge=te.parameters)==null?void 0:Ge.docs)==null?void 0:Le.source}}};const Qr=["SokerErMor","SokerErFar","ErEndringssøknad"];export{te as ErEndringssøknad,ae as SokerErFar,ne as SokerErMor,Qr as __namedExportsOrder,Wr as default};
