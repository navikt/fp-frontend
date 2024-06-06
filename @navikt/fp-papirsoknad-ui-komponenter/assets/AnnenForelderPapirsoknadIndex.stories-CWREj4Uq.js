import{r as b,R as e}from"./index-Dl6G-zuu.js";import{e as q,f as _,R as x,H as R,h as M,g as i,C as E,p as I,i as S,T as j,q as C,t as V,P as $,m as L,a as B,b as D,O as z,B as U}from"./nb_NO-Dx9Z9-UI.js";import"./withRouter-CFqmaMPG.js";import{K as J,a as G}from"./alleKodeverk-DbawmvgK.js";import{l as H}from"./landkoder-T-1RG3zx.js";import{r as l,z as X,U as Q,V as W}from"./index.es-C0zsNI6o.js";import"./v4-CQkTLCs1.js";import"./index-D1_ZHIBm.js";const p={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},Y="_inputBredde_138ho_1",v={inputBredde:Y},s="annenForelder",m="kanIkkeOppgiBegrunnelse",Z=r=>r.filter(({kode:n})=>n!==H.NORGE).map(({kode:n,navn:o})=>e.createElement("option",{value:n,key:n},o)),T=({readOnly:r=!0,permisjonRettigheterPanel:n,alleKodeverk:o,fagsakPersonnummer:u})=>{const{formatMessage:a}=q(),{watch:c,trigger:N,formState:{isSubmitted:A}}=_(),k=c(`${s}.kanIkkeOppgiAnnenForelder`),g=c(`${s}.${m}`),y=o[J.LANDKODER],w=b.useMemo(()=>y.slice().sort((t,F)=>t.navn.localeCompare(F.navn)),[y]);return e.createElement(x,null,e.createElement(R,{size:"small"},e.createElement(M,{id:"Registrering.TheOtherParent.Title"})),e.createElement(i,{sixteenPx:!0}),e.createElement(E,{name:`${s}.foedselsnummer`,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:t=>t&&t.toString().replace(/\s/g,""),readOnly:r,className:v.inputBredde,validate:k?[]:[l,X,Q,t=>t===u?W():null],disabled:k}),e.createElement(i,{sixteenPx:!0}),e.createElement(I,{name:`${s}.kanIkkeOppgiAnnenForelder`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:r,onChange:()=>A?N():void 0}),k===!0&&e.createElement(e.Fragment,null,e.createElement(i,{eightPx:!0}),e.createElement(S,null,e.createElement(R,{size:"small"},a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})),e.createElement(j,{name:`${s}.${m}.arsak`,hideLegend:!0,validate:[l],isReadOnly:r,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:p.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:p.IKKE_NORSK_FNR}]}),(g==null?void 0:g.arsak)===p.IKKE_NORSK_FNR&&e.createElement(e.Fragment,null,e.createElement(i,{sixteenPx:!0}),e.createElement(C,{name:`${s}.${m}.land`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:Z(w),validate:[l],className:v.inputBredde,readOnly:r}),e.createElement(i,{sixteenPx:!0}),e.createElement(E,{name:`${s}.${m}.utenlandskFoedselsnummer`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[l],className:v.inputBredde,readOnly:r})))),e.createElement(i,{sixteenPx:!0}),n)};T.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ee=V(L),O=({readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:o,fagsakPersonnummer:u})=>e.createElement($,{value:ee},e.createElement(T,{readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:o,fagsakPersonnummer:u})),h=O;O.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const me={title:"papirsoknad/ui-komponenter/annen-forelder",component:h},re=({submitCallback:r})=>{const n=D();return e.createElement(z,{formMethods:n,onSubmit:r},e.createElement(h,{readOnly:!1,alleKodeverk:G,permisjonRettigheterPanel:e.createElement("div",null,"Dummy for panel Permisjon-rettigheter"),fagsakPersonnummer:"07078518434"}),e.createElement(i,{fourtyPx:!0}),e.createElement(U,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},d=re.bind({});d.args={submitCallback:B("button-click")};var f,P,K;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <AnnenForelderPapirsoknadIndex readOnly={false} alleKodeverk={(alleKodeverk as any)} permisjonRettigheterPanel={<div>Dummy for panel Permisjon-rettigheter</div>} fagsakPersonnummer="07078518434" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(K=(P=d.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};const ue=["Default"];export{d as Default,ue as __namedExportsOrder,me as default};
