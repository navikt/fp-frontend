import{j as e}from"./dayjs.min-D0F5fy79.js";import{d as w,e as b,S as q,H as R,M as _,y as i,f as h,o as E,O as M,F as I,p as S,t as V,h as $,m as C,a as L,b as B,Y as D,B as z}from"./nb_NO-Ck3UbI0K.js";import"./withRouter-DFPnh569.js";import{K as U,a as J}from"./alleKodeverk-Dzm1yn2L.js";import{r as G}from"./index-CTjT7uj6.js";import{l as H}from"./landkoder-T-1RG3zx.js";import{r as l,z as X,U as Y,V as Q}from"./index.es-9SLT0vzE.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const p={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},W="_inputBredde_138ho_1",v={inputBredde:W},s="annenForelder",m="kanIkkeOppgiBegrunnelse",Z=r=>r.filter(({kode:n})=>n!==H.NORGE).map(({kode:n,navn:o})=>e.jsx("option",{value:n,children:o},n)),K=({readOnly:r=!0,permisjonRettigheterPanel:n,alleKodeverk:o,fagsakPersonnummer:u})=>{const{formatMessage:a}=w(),{watch:c,trigger:T,formState:{isSubmitted:N}}=b(),k=c(`${s}.kanIkkeOppgiAnnenForelder`),g=c(`${s}.${m}`),y=o[U.LANDKODER],A=G.useMemo(()=>y.slice().sort((t,F)=>t.navn.localeCompare(F.navn)),[y]);return e.jsxs(q,{children:[e.jsx(R,{size:"small",children:e.jsx(_,{id:"Registrering.TheOtherParent.Title"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(h,{name:`${s}.foedselsnummer`,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:t=>t&&t.toString().replace(/\s/g,""),readOnly:r,className:v.inputBredde,validate:k?[]:[l,X,Y,t=>t===u?Q():null],disabled:k}),e.jsx(i,{sixteenPx:!0}),e.jsx(E,{name:`${s}.kanIkkeOppgiAnnenForelder`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:r,onChange:()=>N?T():void 0}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs(M,{children:[e.jsx(R,{size:"small",children:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),e.jsx(I,{name:`${s}.${m}.arsak`,hideLegend:!0,validate:[l],isReadOnly:r,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:p.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:p.IKKE_NORSK_FNR}]}),(g==null?void 0:g.arsak)===p.IKKE_NORSK_FNR&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(S,{name:`${s}.${m}.land`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:Z(A),validate:[l],className:v.inputBredde,readOnly:r}),e.jsx(i,{sixteenPx:!0}),e.jsx(h,{name:`${s}.${m}.utenlandskFoedselsnummer`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[l],className:v.inputBredde,readOnly:r})]})]})]}),e.jsx(i,{sixteenPx:!0}),n]})};K.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ee=V(C),P=({readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:o,fagsakPersonnummer:u})=>e.jsx($,{value:ee,children:e.jsx(K,{readOnly:r,alleKodeverk:n,permisjonRettigheterPanel:o,fagsakPersonnummer:u})}),O=P;P.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ue={title:"papirsoknad/ui-komponenter/annen-forelder",component:O},re=({submitCallback:r})=>{const n=B();return e.jsxs(D,{formMethods:n,onSubmit:r,children:[e.jsx(O,{readOnly:!1,alleKodeverk:J,permisjonRettigheterPanel:e.jsx("div",{children:"Dummy for panel Permisjon-rettigheter"}),fagsakPersonnummer:"07078518434"}),e.jsx(i,{fourtyPx:!0}),e.jsx(z,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},d=re.bind({});d.args={submitCallback:L("button-click")};var x,f,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const ke=["Default"];export{d as Default,ke as __namedExportsOrder,ue as default};
