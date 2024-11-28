import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{e as U,d as A,i as J,I as C,j as F,c as q,w as T,M as y,F as ie,A as $e,V as h,L as X,S as Ze,a as er,E as rr,t as nr,P as ar,m as tr,b as ir,$ as sr,y as or,B as dr}from"./nb_NO-Do_lz9uu.js";import{H as v,g as j,m as ke,s as xe,f as z,D as W,U as Q,d as lr,I as mr,z as ur,a as gr}from"./index.es-CiSAtsS3.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as Z}from"./foreldreType-BrQrvOqY.js";import"./withRouter-DhSU4y_G.js";import{K as _,a as pr}from"./alleKodeverk-D-QME5s7.js";import{r as D}from"./index-DRjF_FHU.js";import{d as se}from"./dayjs.min-CnNqAF5I.js";import{F as ee}from"./FieldArrayRow-DoNzO1Kh.js";import{A as Ye}from"./Alert-C1Db46fx.js";import"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";import"./Trash-BXDQVvrQ.js";import"./ExclamationmarkTriangleFill-C3QGUi95.js";var O=(e=>(e.FISKER="FISKER",e.ARBEIDSTAKER="ARBEIDSTAKER",e.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",e.SJOMANN="SJØMANN",e.JORDBRUKER="JORDBRUKER",e.DAGPENGER="DAGPENGER",e.INAKTIV="INAKTIV",e.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",e.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",e.FRILANSER="FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",e.DAGMAMMA="DAGMAMMA",e.ANNET="ANNET",e))(O||{}),Y=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(Y||{}),H=(e=>(e.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",e.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",e.ALENEOMSORG="ALENEOMSORG",e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e.UDEFINERT="-",e))(H||{}),P=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(P||{});const l="tidsromPermisjon",V="graderingPeriode",ve="oppholdPerioder",Be="overforingsperioder",de="utsettelsePeriode",B="permisjonsPerioder",ye=`${l}.${B}`,b=e=>`${ye}.${e}`,kr=xe(100),Re=[P.FELLESPERIODE,P.FEDREKVOTE,P.FORELDREPENGER_FOR_FODSEL,P.FORELDREPENGER,P.MODREKVOTE],vr=e=>e.filter(({kode:r})=>Re.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),yr=e=>e.map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),He=[P.FEDREKVOTE,P.FORELDREPENGER_FOR_FODSEL,P.MODREKVOTE],re=(e,r)=>e?r:"",Rr=e=>!!e&&se(e,$e).isBefore(se("2019-01-01")),fe=e=>()=>{const a=(e(ye)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return z(a)},Ae=(e,r,a)=>()=>{const t=e(`${b(r)}.periodeFom`),i=e(`${b(r)}.periodeTom`);return!i||!t?null:a?W(i)(t):Q(t)(i)},le=({sokerErMor:e,readOnly:r,alleKodeverk:a})=>{const t=U(),i=a[_.UTTAK_PERIODE_TYPE],s=a[_.MORS_AKTIVITET];s.filter(({kode:k})=>k==="-").length===0&&s.unshift({kode:"-",navn:"",kodeverk:""});const{control:g,getValues:m,trigger:u,watch:R,formState:{isSubmitted:E}}=A(),{fields:o,remove:p,append:d}=J({control:g,name:ye});return D.useEffect(()=>{o.length===0&&d({})},[]),n.jsx(C,{readOnly:r,fields:o,bodyText:t.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:d,remove:p,children:(k,c)=>{const N=c===0,S=R(b(c)),$=Rr(S.periodeFom),Qe=He.some(x=>x===S.periodeType)||S.periodeType==="";return n.jsxs(ee,{readOnly:r,remove:p,index:c,children:[n.jsx("div",{children:n.jsx(F,{readOnly:r,name:`${b(c)}.periodeType`,label:re(N,t.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:vr(i),validate:[v]})}),n.jsx(q,{isReadOnly:r,name:`${b(c)}.periodeFom`,label:re(N,t.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[v,j,Ae(m,c,!0),fe(m)],onChange:()=>E?u():void 0}),n.jsx(q,{isReadOnly:r,name:`${b(c)}.periodeTom`,label:re(N,t.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[v,j,Ae(m,c,!1),fe(m)],onChange:()=>E?u():void 0}),!e&&n.jsx(F,{readOnly:r,disabled:Qe,name:`${b(c)}.morsAktivitet`,label:re(N,t.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:yr(s),hideValueOnDisable:!0}),n.jsx(T,{readOnly:r,name:`${b(c)}.flerbarnsdager`,label:n.jsx(y,{id:"Registrering.Permisjon.Flerbarnsdager"})}),n.jsx(T,{readOnly:r,name:`${b(c)}.harSamtidigUttak`,label:n.jsx(y,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),S.harSamtidigUttak&&n.jsx(ie,{name:`${b(c)}.samtidigUttaksprosent`,validate:[ke,kr],label:t.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:x=>Number.isNaN(x)?x:parseFloat(x.toString()).toFixed(2)}),$&&n.jsx(Ye,{size:"small",variant:"warning",children:n.jsx(y,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},k.id)}})};le.transformValues=e=>e.map(r=>He.some(a=>a===r.periodeType)?{periodeType:r.periodeType,periodeFom:r.periodeFom,periodeTom:r.periodeTom,flerbarnsdager:r.flerbarnsdager?r.flerbarnsdager:!1,harSamtidigUttak:r.harSamtidigUttak?r.harSamtidigUttak:!1,samtidigUttaksprosent:r.samtidigUttaksprosent}:{periodeType:r.periodeType,periodeFom:r.periodeFom,periodeTom:r.periodeTom,morsAktivitet:r.morsAktivitet,flerbarnsdager:r.flerbarnsdager?r.flerbarnsdager:!1,harSamtidigUttak:r.harSamtidigUttak?r.harSamtidigUttak:!1,samtidigUttaksprosent:r.samtidigUttaksprosent});le.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const me=({foreldreType:e,readOnly:r,alleKodeverk:a})=>{const{watch:t}=A(),i=t(`${l}.fulltUttak`)||!1;return n.jsxs(h,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.FulltUttak"})}),n.jsx(T,{readOnly:r,name:`${l}.fulltUttak`,label:n.jsx(y,{id:"Registrering.Permisjon.FulltUttak"})}),i&&n.jsx(le,{sokerErMor:e===Z.MOR,readOnly:r,alleKodeverk:a})]})};me.initialValues=()=>({[B]:[],fulltUttak:!1});me.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Er=ur(9),oe=`${l}.${V}`,f=e=>`${oe}.${e}`,be=e=>()=>{const a=(e(`${oe}`)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?z(a):void 0},Te=(e,r,a)=>()=>{const t=e(`${f(r)}.periodeFom`),i=e(`${f(r)}.periodeTom`);return!i||!t?null:a?W(i)(t):Q(t)(i)},cr=(e,r)=>a=>e(`${f(r)}.arbeidskategoriType`)===O.ARBEIDSTAKER?v(a):void 0,fr=e=>{if(e)return e.length===11?mr(e):Er(e)},qe={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},Ar=[O.ARBEIDSTAKER,O.SELVSTENDIG_NAERINGSDRIVENDE,O.FRILANSER],je=xe(100),br=e=>e.filter(({kode:r})=>Re.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Tr=e=>e.filter(({kode:r})=>Ar.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Je=({graderingKvoter:e,readOnly:r,arbeidskategoriTyper:a})=>{const t=U(),{watch:i,control:s,getValues:g,trigger:m,formState:{isSubmitted:u}}=A(),{fields:R,remove:E,append:o}=J({control:s,name:`${oe}`}),p=i(`${oe}`)||[];return D.useEffect(()=>{R.length===0&&o(qe)},[]),n.jsx(C,{fields:R,emptyPeriodTemplate:qe,bodyText:t.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,remove:E,append:o,children:(d,k)=>{const{harSamtidigUttak:c,periodeFom:N}=p[k],S=N&&se(N,$e).isBefore(se("2019-01-01"));return n.jsxs(ee,{readOnly:r,remove:E,index:k,children:[n.jsx(F,{name:`${f(k)}.periodeForGradering`,selectValues:br(e),label:t.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[v]}),n.jsx(q,{label:t.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${f(k)}.periodeFom`,validate:[v,j,Te(g,k,!0),be(g)],onChange:()=>u?m():void 0}),n.jsx(q,{label:t.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${f(k)}.periodeTom`,validate:[v,j,Te(g,k,!1),be(g)],onChange:()=>u?m():void 0}),n.jsx(ie,{label:n.jsx(y,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${f(k)}.prosentandelArbeid`,validate:[v,ke,je],normalizeOnBlur:$=>Number.isNaN($)?$:parseFloat($.toString()).toFixed(2)}),n.jsx(ie,{label:t.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${f(k)}.arbeidsgiverIdentifikator`,validate:[cr(g,k),lr,fr]}),n.jsx(F,{label:t.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${f(k)}.arbeidskategoriType`,selectValues:Tr(a),validate:[v],onChange:()=>u?m():void 0}),n.jsx(T,{name:`${f(k)}.skalGraderes`,label:n.jsx(y,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})}),n.jsx(T,{readOnly:r,name:`${f(k)}.flerbarnsdager`,label:n.jsx(y,{id:"Registrering.Permisjon.Flerbarnsdager"})}),n.jsx(T,{name:`${f(k)}.harSamtidigUttak`,label:n.jsx(y,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),c&&n.jsx(ie,{name:`${f(k)}.samtidigUttaksprosent`,validate:[v,ke,je],label:t.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})}),S&&n.jsx(Ye,{size:"small",variant:"warning",children:n.jsx(y,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},d.id)}})};Je.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const G=({readOnly:e,alleKodeverk:r})=>{const a=r[_.UTTAK_PERIODE_TYPE],t=r[_.ARBEIDSKATEGORI],{watch:i}=A(),s=i(`${l}.skalGradere`)||!1;return n.jsxs(h,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.Gradering.Title"})}),n.jsx(T,{readOnly:e,name:`${l}.skalGradere`,label:n.jsx(y,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),s&&n.jsx(Je,{graderingKvoter:a,arbeidskategoriTyper:t,readOnly:e})]})};G.transformValues=e=>{const r=e[V];return r?r.map(a=>a.arbeidskategoriType?{...a,erArbeidstaker:a.arbeidskategoriType===O.ARBEIDSTAKER,erFrilanser:a.arbeidskategoriType===O.FRILANSER,erSelvstNæringsdrivende:a.arbeidskategoriType===O.SELVSTENDIG_NAERINGSDRIVENDE}:a):[]};G.initialValues=()=>({[V]:[],skalGradere:!1});G.__docgenInfo={description:`PermisjonGraderingPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ee=`${l}.${ve}`,w=e=>`${Ee}.${e}`,Pe=e=>()=>{const a=(e(`${Ee}`)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?z(a):void 0},Fe={periodeFom:"",periodeTom:"",årsak:""},qr=[Y.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Y.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Y.UTTAK_FELLESP_ANNEN_FORELDER,Y.UTTAK_FORELDREPENGER_ANNEN_FORELDER],jr=e=>e.filter(({kode:r})=>qr.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),Ce=({oppholdsReasons:e,readOnly:r})=>{const a=U(),{control:t,getValues:i,trigger:s,formState:{isSubmitted:g}}=A(),{fields:m,remove:u,append:R}=J({control:t,name:`${Ee}`});return D.useEffect(()=>{m.length===0&&R(Fe)},[]),n.jsx(C,{fields:m,emptyPeriodTemplate:Fe,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:R,remove:u,children:(E,o)=>n.jsxs(ee,{readOnly:r,remove:u,index:o,children:[n.jsx(q,{name:`${w(o)}.periodeFom`,label:a.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[v,j,()=>{const p=i(`${w(o)}.periodeFom`),d=i(`${w(o)}.periodeTom`);return d&&p?W(d)(p):null},Pe(i)],onChange:()=>g?s():void 0}),n.jsx(q,{name:`${w(o)}.periodeTom`,label:a.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[v,j,()=>{const p=i(`${w(o)}.periodeFom`),d=i(`${w(o)}.periodeTom`);return d&&p?Q(p)(d):null},Pe(i)],onChange:()=>g?s():void 0}),n.jsx("div",{children:n.jsx(F,{name:`${w(o)}.årsak`,label:a.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}),selectValues:jr(e),validate:[v]})})]},E.id)})};Ce.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ue=({readOnly:e,alleKodeverk:r})=>{const a=r[_.OPPHOLD_ARSAK],{watch:t}=A(),i=t(`${l}.skalHaOpphold`)||!1;return n.jsxs(h,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.Opphold.Title"})}),n.jsx(T,{readOnly:e,name:`${l}.skalHaOpphold`,label:n.jsx(y,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),i&&n.jsx(Ce,{oppholdsReasons:a,readOnly:e})]})};ue.initialValues=()=>({[ve]:[],skalHaOpphold:!1});ue.__docgenInfo={description:`PermisjonOppholdPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ce=`${l}.${Be}`,I=e=>`${ce}.${e}`,Oe=e=>()=>{const a=(e(ce)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?z(a):void 0},_e={periodeFom:"",periodeTom:"",overforingArsak:""},Xe=({selectValues:e,readOnly:r})=>{const a=U(),{control:t,getValues:i,trigger:s,formState:{isSubmitted:g}}=A(),{fields:m,remove:u,append:R}=J({control:t,name:ce});return D.useEffect(()=>{m.length===0&&R(_e)},[]),n.jsx(C,{fields:m,emptyPeriodTemplate:_e,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:R,remove:u,children:(E,o)=>n.jsxs(ee,{readOnly:r,remove:u,index:o,children:[n.jsx("div",{children:n.jsx(F,{name:`${I(o)}.overforingArsak`,label:a.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}),selectValues:e,validate:[v],readOnly:r})}),n.jsx(q,{isReadOnly:r,name:`${I(o)}.periodeFom`,validate:[v,j,()=>{const p=i(`${I(o)}.periodeFom`),d=i(`${I(o)}.periodeTom`);return d&&p?W(d)(p):null},Oe(i)],label:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}),onChange:()=>g?s():void 0}),n.jsx(q,{isReadOnly:r,name:`${I(o)}.periodeTom`,validate:[v,j,()=>{const p=i(`${I(o)}.periodeFom`),d=i(`${I(o)}.periodeTom`);return d&&p?Q(p)(d):null},Oe(i)],label:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}),onChange:()=>g?s():void 0})]},E.id)})};Xe.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Pr=(e,r,a)=>r===H.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):r===H.SYKDOM_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):a,Fr=(e,r,a,t)=>e.filter(({kode:i})=>a||i!==H.ALENEOMSORG&&i!==H.IKKE_RETT_ANNEN_FORELDER).map(({kode:i,navn:s})=>r?n.jsx("option",{value:i,children:s},i):n.jsx("option",{value:i,children:Pr(t,i,s)},i)),ge=({foreldreType:e,alleKodeverk:r,readOnly:a,erEndringssøknad:t})=>{const i=U(),s=r[_.OVERFOERING_AARSAK_TYPE],g=Fr(s,e===Z.MOR,t,i),{watch:m}=A(),u=m(`${l}.skalOvertaKvote`)||!1;return n.jsxs(h,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),n.jsx(T,{readOnly:a,name:`${l}.skalOvertaKvote`,label:n.jsx(y,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),u&&n.jsx(Xe,{selectValues:g,readOnly:a})]})};ge.initialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[]});ge.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Ne={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},ze=`${l}.${de}`,M=e=>`${ze}.${e}`,we=e=>()=>{const a=(e(`${ze}`)||[]).filter(({periodeFom:t,periodeTom:i})=>t!==""&&i!=="").map(({periodeFom:t,periodeTom:i})=>[t,i]);return a.length>0?z(a):void 0},Ie=(e,r,a)=>()=>{const t=`${M(r)}`,i=e(`${t}.periodeFom`),s=e(`${t}.periodeTom`);return!s&&!i?null:a?W(s)(i):Q(i)(s)},Or=e=>e.map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),_r=e=>e.filter(({kode:r})=>Re.some(a=>a===r)).map(({kode:r,navn:a})=>n.jsx("option",{value:r,children:a},r)),We=({utsettelseReasons:e,utsettelseKvoter:r,readOnly:a})=>{const t=U(),{control:i,getValues:s,trigger:g,formState:{isSubmitted:m}}=A(),{fields:u,remove:R,append:E}=J({control:i,name:`${l}.${de}`});D.useEffect(()=>{u.length===0&&E(Ne)},[]);const o=D.useCallback(()=>m?g():void 0,[m,g]);return n.jsx(C,{fields:u,emptyPeriodTemplate:Ne,bodyText:t.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,append:E,remove:R,children:(p,d)=>n.jsxs(ee,{readOnly:a,remove:R,index:d,children:[n.jsx(F,{name:`${M(d)}.periodeForUtsettelse`,label:t.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}),selectValues:_r(r),validate:[v]}),n.jsx(q,{name:`${M(d)}.periodeFom`,label:t.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[v,j,Ie(s,d,!0),we(s)],onChange:o}),n.jsx(q,{name:`${M(d)}.periodeTom`,label:t.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[v,j,Ie(s,d,!1),we(s)],onChange:o}),n.jsx(F,{name:`${M(d)}.arsakForUtsettelse`,label:t.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}),selectValues:Or(e),validate:[v],onChange:o}),n.jsx(F,{label:t.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${M(d)}.erArbeidstaker`,selectValues:[n.jsx("option",{value:"true",children:t.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),n.jsx("option",{value:"false",children:t.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[k=>s(`${M(d)}.arsakForUtsettelse`)==="ARBEID"?v(k):void 0]})]},p.id)})};We.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const pe=({readOnly:e,alleKodeverk:r})=>{const a=r[_.UTSETTELSE_AARSAK_TYPE],t=r[_.UTTAK_PERIODE_TYPE],{watch:i}=A(),s=i(`${l}.skalUtsette`)||!1;return n.jsxs(h,{gap:"2",children:[n.jsx(X,{children:n.jsx(y,{id:"Registrering.Permisjon.Utsettelse.Title"})}),n.jsx(T,{readOnly:e,name:`${l}.skalUtsette`,label:n.jsx(y,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),s&&n.jsx(We,{utsettelseReasons:a,utsettelseKvoter:t,readOnly:e})]})};pe.initialValues=()=>({[de]:[],skalUtsette:!1});pe.__docgenInfo={description:`PermisjonUtsettelsePanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Nr=e=>{const r=e(`${l}.fulltUttak`)||!1,a=e(`${l}.skalGradere`)||!1,t=e(`${l}.skalUtsette`)||!1,i=e(`${l}.skalOvertaKvote`)||!1;return!r&&!a&&!t&&!i},L=({foreldreType:e,readOnly:r,alleKodeverk:a,erEndringssøknad:t})=>{var E,o,p,d;const i=U(),{setError:s,clearErrors:g,getValues:m,formState:u}=A(),R=Nr(m);return D.useEffect(()=>{R&&s(`${l}.notRegisteredInput`,{type:"custom",message:i.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}),R||g(`${l}.notRegisteredInput`)},[R]),n.jsx(Ze,{children:n.jsxs(h,{gap:"4",children:[n.jsx(er,{size:"small",children:n.jsx(y,{id:"Registrering.Permisjon.Title"})}),n.jsx(me,{foreldreType:e,readOnly:r,alleKodeverk:a}),n.jsx(ge,{readOnly:r,foreldreType:e,alleKodeverk:a,erEndringssøknad:t}),n.jsx(pe,{readOnly:r,alleKodeverk:a}),n.jsx(G,{readOnly:r,alleKodeverk:a}),n.jsx(ue,{readOnly:r,alleKodeverk:a}),u.isSubmitted&&((o=(E=u.errors[l])==null?void 0:E.notRegisteredInput)==null?void 0:o.message)&&n.jsx(rr,{children:(d=(p=u.errors[l])==null?void 0:p.notRegisteredInput)==null?void 0:d.message})]})})};L.transformValues=e=>{var s,g,m,u,R,E,o;const r=e[l],a=r,t=r[B];(s=e.tidsromPermisjon)!=null&&s.fulltUttak&&t&&(a[B]=le.transformValues(t));const i=r[V];return(g=e.tidsromPermisjon)!=null&&g.skalGradere&&i&&(a[V]=G.transformValues(r)),(m=e.tidsromPermisjon)!=null&&m.fulltUttak||(a[B]=void 0),(u=e.tidsromPermisjon)!=null&&u.skalGradere||(a[V]=void 0),(R=e.tidsromPermisjon)!=null&&R.skalUtsette||(a[de]=void 0),(E=e.tidsromPermisjon)!=null&&E.skalOvertaKvote||(a[Be]=void 0),(o=e.tidsromPermisjon)!=null&&o.skalHaOpphold||(a[ve]=void 0),{[l]:a}};L.initialValues=()=>({[l]:{...me.initialValues(),...ge.initialValues(),...pe.initialValues(),...G.initialValues(),...ue.initialValues()}});L.__docgenInfo={description:`PermisjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const wr=nr(tr),K=({foreldreType:e,readOnly:r,alleKodeverk:a,erEndringssøknad:t})=>n.jsx(ar,{value:wr,children:n.jsx(L,{readOnly:r,foreldreType:e,alleKodeverk:a,erEndringssøknad:t})});K.transformValues=L.transformValues;K.initialValues=L.initialValues;K.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Jr={title:"ui-komponenter/permisjon",component:K,parameters:{submitCallback:gr("onSubmit")},args:{readOnly:!1,alleKodeverk:pr},render:(e,{parameters:{submitCallback:r}})=>{const a=ir({defaultValues:K.initialValues()});return n.jsxs(sr,{formMethods:a,onSubmit:t=>r(K.transformValues(t)),children:[n.jsx(K,{...e}),n.jsx(or,{fourtyPx:!0}),n.jsx(dr,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})}},ne={args:{foreldreType:Z.MOR,erEndringssøknad:!1}},ae={args:{foreldreType:Z.FAR,erEndringssøknad:!1}},te={args:{foreldreType:Z.MOR,erEndringssøknad:!0}};var Me,Ke,De;ne.parameters={...ne.parameters,docs:{...(Me=ne.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    foreldreType: ForeldreType.MOR,
    erEndringssøknad: false
  }
}`,...(De=(Ke=ne.parameters)==null?void 0:Ke.docs)==null?void 0:De.source}}};var Ue,Se,Ve;ae.parameters={...ae.parameters,docs:{...(Ue=ae.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    foreldreType: ForeldreType.FAR,
    erEndringssøknad: false
  }
}`,...(Ve=(Se=ae.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var he,Ge,Le;te.parameters={...te.parameters,docs:{...(he=te.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    foreldreType: ForeldreType.MOR,
    erEndringssøknad: true
  }
}`,...(Le=(Ge=te.parameters)==null?void 0:Ge.docs)==null?void 0:Le.source}}};const Cr=["SokerErMor","SokerErFar","ErEndringssøknad"];export{te as ErEndringssøknad,ae as SokerErFar,ne as SokerErMor,Cr as __namedExportsOrder,Jr as default};
