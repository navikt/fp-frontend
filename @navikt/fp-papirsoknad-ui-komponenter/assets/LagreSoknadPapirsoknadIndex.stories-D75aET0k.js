import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as q,R as L,n as E,a as h}from"./index.es-CiSAtsS3.js";import{L as w,w as P}from"./withRouter-DhSU4y_G.js";import{e as x,f as o,H as T,a as j,g as p,B as d,d as R,S as A,V as B,h as F,w as c,M as f,t as C,P as I,m as _,b as O,$ as U}from"./nb_NO-Do_lz9uu.js";import{r as b}from"./index-DRjF_FHU.js";import{S as z}from"./ExclamationmarkTriangleFill-C3QGUi95.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const V=({showModal:r,handleSubmit:s,cancelEvent:n})=>{const a=x();return e.jsxs(o,{open:r,"aria-label":a.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:n,children:[e.jsx(o.Header,{children:e.jsxs(T,{gap:"4",children:[e.jsx(z,{color:"var(--a-orange-500)",width:35,height:35,title:a.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})}),e.jsx(j,{size:"medium",id:"modal-heading",children:a.formatMessage({id:"ModalLukkPapirSoknad.Title"})})]})}),e.jsxs(o.Body,{children:[e.jsx(p,{weight:"semibold",children:a.formatMessage({id:"ModalLukkPapirSoknad.Opplysninger"})}),e.jsx(p,{children:a.formatMessage({id:"ModalLukkPapirSoknad.Bekreft"})})]}),e.jsxs(o.Footer,{children:[e.jsx(w,{to:"/",children:e.jsx(d,{variant:"primary",onClick:()=>s(),type:"button",children:a.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),e.jsx(d,{variant:"secondary",onClick:n,type:"button",children:a.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};V.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D=E(1500),t=({submitting:r,onSubmitUfullstendigsoknad:s,readOnly:n=!0})=>{const a=x(),[u,m]=b.useState(!1),{watch:M}=R(),g=M("ufullstendigSoeknad")||!1,k=b.useCallback(()=>{m(!u)},[m,u]);return e.jsx(A,{children:e.jsxs(B,{gap:"4",children:[e.jsx(j,{size:"small",children:a.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(F,{name:"kommentarEndring",label:a.formatMessage({id:"Registrering.SaveApplication.Label"}),description:a.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[D,q],readOnly:n}),e.jsxs("div",{children:[e.jsx(c,{name:"registrerVerge",label:a.formatMessage({id:"Registrering.Verge"}),readOnly:n}),e.jsx(c,{name:"ufullstendigSoeknad",label:a.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),e.jsxs("div",{children:[!g&&e.jsx(d,{id:"saveButton",size:"small",variant:"primary",loading:r,disabled:n||r,onClick:L,children:e.jsx(f,{id:"Registrering.SaveApplication.SaveButton"})}),g&&e.jsx(d,{id:"endButton",onClick:k,size:"small",variant:"primary",loading:r,disabled:n||r,type:"button",children:e.jsx(f,{id:"Registrering.SaveApplication.EndButton"})})]}),e.jsx(V,{handleSubmit:s,showModal:u,cancelEvent:k})]})})};t.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});t.transformValues=({kommentarEndring:r,registrerVerge:s,ufullstendigSoeknad:n})=>({kommentarEndring:r,registrerVerge:s,ufullstendigSoeknad:n});t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const H=C(_),i=({readOnly:r,onSubmitUfullstendigsoknad:s,submitting:n})=>e.jsx(I,{value:H,children:e.jsx(t,{readOnly:r,onSubmitUfullstendigsoknad:s,submitting:n})});i.initialValues=t.initialValues;i.transformValues=t.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Z={title:"ui-komponenter/lagre-soknad",component:i,decorators:[P],parameters:{submitCallback:h("onSubmit")},render:(r,{parameters:{submitCallback:s}})=>{const n=O();return e.jsx(U,{formMethods:n,onSubmit:a=>s(i.transformValues(a)),children:e.jsx(i,{...r})})}},l={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:h("onSubmitUfullstendigsoknad")}};var S,y,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const ee=["Default"];export{l as Default,ee as __namedExportsOrder,Z as default};
