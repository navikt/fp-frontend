import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as l,h as A,I as q,F,a as _}from"./index.es-DAgkteDm.js";import{d as E,e as b,S as M,H as h,M as I,y as i,g as x,w as S,O as $,k as V,n as L,t as C,c as D,m as B,a as z,$ as H,V as U,B as J}from"./nb_NO-ChUmxPha.js";import"./withRouter-DhSU4y_G.js";import{K as G,a as X}from"./alleKodeverk-D-QME5s7.js";import{r as Q}from"./index-DRjF_FHU.js";import{l as W}from"./landkoder-T-1RG3zx.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const p={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},Y="_inputBredde_138ho_1",v={inputBredde:Y},s="annenForelder",m="kanIkkeOppgiBegrunnelse",Z=r=>r.filter(({kode:n})=>n!==W.NORGE).map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),O=({readOnly:r=!0,permisjonRettigheterPanel:n,alleKodeverk:a,fagsakPersonnummer:o})=>{const{formatMessage:t}=E(),{watch:y,trigger:N,formState:{isSubmitted:T}}=b(),k=y(`${s}.kanIkkeOppgiAnnenForelder`),g=y(`${s}.${m}`),R=a[G.LANDKODER],P=Q.useMemo(()=>R.slice().sort((d,w)=>d.navn.localeCompare(w.navn)),[R]);return e.jsxs(M,{children:[e.jsx(h,{size:"small",children:e.jsx(I,{id:"Registrering.TheOtherParent.Title"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(x,{name:`${s}.foedselsnummer`,label:t({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:d=>d&&d.toString().replace(/\s/g,""),readOnly:r,className:v.inputBredde,validate:k?[]:[l,A,q,F(o)],disabled:k}),e.jsx(i,{sixteenPx:!0}),e.jsx(S,{name:`${s}.kanIkkeOppgiAnnenForelder`,label:t({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:r,onChange:()=>T?N():void 0}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs($,{children:[e.jsx(h,{size:"small",children:t({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),e.jsx(V,{name:`${s}.${m}.arsak`,hideLegend:!0,validate:[l],isReadOnly:r,radios:[{label:t({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:p.UKJENT_FORELDER},{label:t({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:p.IKKE_NORSK_FNR}]}),(g==null?void 0:g.arsak)===p.IKKE_NORSK_FNR&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(L,{name:`${s}.${m}.land`,label:t({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:Z(P),validate:[l],className:v.inputBredde,readOnly:r}),e.jsx(i,{sixteenPx:!0}),e.jsx(x,{name:`${s}.${m}.utenlandskFoedselsnummer`,label:t({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[l],className:v.inputBredde,readOnly:r})]})]})]}),e.jsx(i,{sixteenPx:!0}),n]})};O.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ee=C(B),c=({readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:a,fagsakPersonnummer:o})=>e.jsx(D,{value:ee,children:e.jsx(O,{readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:a,fagsakPersonnummer:o})});c.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ue={title:"papirsoknad/ui-komponenter/annen-forelder",component:c,args:{readOnly:!1,alleKodeverk:X,permisjonRettigheterPanel:e.jsx("div",{children:"Dummy for panel Permisjon-rettigheter"}),fagsakPersonnummer:"07078518434"},parameters:{submitCallback:_("onSubmit")},render:function(n,{parameters:{submitCallback:a}}){const o=z();return e.jsx(H,{formMethods:o,onSubmit:a,children:e.jsxs(U,{gap:"10",children:[e.jsx(c,{...n}),e.jsx(J,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},u={};var j,K,f;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(f=(K=u.parameters)==null?void 0:K.docs)==null?void 0:f.source}}};const ke=["Default"];export{u as Default,ke as __namedExportsOrder,ue as default};
