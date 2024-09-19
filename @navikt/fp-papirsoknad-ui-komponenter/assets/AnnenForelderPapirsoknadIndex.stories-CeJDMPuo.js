import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as F,e as w,S as b,H as h,M as q,y as i,f,n as _,O as E,F as M,p as S,t as I,h as V,m as C,a as L,b as $,Y as B,B as D}from"./nb_NO-B_MYPsBD.js";import"./withRouter-xu-IZtWb.js";import{K as z,a as U}from"./alleKodeverk-Dzm1yn2L.js";import{r as J}from"./index-CTjT7uj6.js";import{l as G}from"./landkoder-T-1RG3zx.js";import{r as l,z as H,U as X,V as Y}from"./index.es-amUsmgtA.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DQZRloWl.js";import"./index-vZN_Bsf0.js";const p={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},Q="_inputBredde_138ho_1",v={inputBredde:Q},s="annenForelder",m="kanIkkeOppgiBegrunnelse",W=r=>r.filter(({kode:n})=>n!==G.NORGE).map(({kode:n,navn:o})=>e.jsx("option",{value:n,children:o},n)),P=({readOnly:r=!0,permisjonRettigheterPanel:n,alleKodeverk:o,fagsakPersonnummer:u})=>{const{formatMessage:a}=F(),{watch:y,trigger:O,formState:{isSubmitted:T}}=w(),k=y(`${s}.kanIkkeOppgiAnnenForelder`),g=y(`${s}.${m}`),R=o[z.LANDKODER],N=J.useMemo(()=>R.slice().sort((t,A)=>t.navn.localeCompare(A.navn)),[R]);return e.jsxs(b,{children:[e.jsx(h,{size:"small",children:e.jsx(q,{id:"Registrering.TheOtherParent.Title"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(f,{name:`${s}.foedselsnummer`,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:t=>t&&t.toString().replace(/\s/g,""),readOnly:r,className:v.inputBredde,validate:k?[]:[l,H,X,t=>t===u?Y():null],disabled:k}),e.jsx(i,{sixteenPx:!0}),e.jsx(_,{name:`${s}.kanIkkeOppgiAnnenForelder`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:r,onChange:()=>T?O():void 0}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs(E,{children:[e.jsx(h,{size:"small",children:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),e.jsx(M,{name:`${s}.${m}.arsak`,hideLegend:!0,validate:[l],isReadOnly:r,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:p.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:p.IKKE_NORSK_FNR}]}),(g==null?void 0:g.arsak)===p.IKKE_NORSK_FNR&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(S,{name:`${s}.${m}.land`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:W(N),validate:[l],className:v.inputBredde,readOnly:r}),e.jsx(i,{sixteenPx:!0}),e.jsx(f,{name:`${s}.${m}.utenlandskFoedselsnummer`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[l],className:v.inputBredde,readOnly:r})]})]})]}),e.jsx(i,{sixteenPx:!0}),n]})};P.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const Z=I(C),c=({readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:o,fagsakPersonnummer:u})=>e.jsx(V,{value:Z,children:e.jsx(P,{readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:o,fagsakPersonnummer:u})});c.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ue={title:"papirsoknad/ui-komponenter/annen-forelder",component:c},ee=({submitCallback:r})=>{const n=$();return e.jsxs(B,{formMethods:n,onSubmit:r,children:[e.jsx(c,{readOnly:!1,alleKodeverk:U,permisjonRettigheterPanel:e.jsx("div",{children:"Dummy for panel Permisjon-rettigheter"}),fagsakPersonnummer:"07078518434"}),e.jsx(i,{fourtyPx:!0}),e.jsx(D,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},d=ee.bind({});d.args={submitCallback:L("button-click")};var x,j,K;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <AnnenForelderPapirsoknadIndex readOnly={false} alleKodeverk={alleKodeverk as any} permisjonRettigheterPanel={<div>Dummy for panel Permisjon-rettigheter</div>} fagsakPersonnummer="07078518434" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(K=(j=d.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const ke=["Default"];export{d as Default,ke as __namedExportsOrder,ue as default};
