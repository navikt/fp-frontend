import{j as e}from"./jsx-runtime-CLpGMVip.js";import{j as x,k as l,H as w,b as E,l as f,B as d,e as P,a as T,V as _,o as F,p as c,M as b,n as I,P as B,m as O,c as U,r as R}from"./nb_NO-Cv9pzysB.js";import{N as A,E as C,l as N,a as L}from"./index.es-DGWo_lbb.js";import{L as D,w as z}from"./withPanelData-WjM-05fJ.js";import"./aktivitetStatus-B1m96ipJ.js";import{r as y}from"./index-CYQpqK1Q.js";import{S as H}from"./ExclamationmarkTriangleFill-BXXsHB08.js";import"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./v4-CtRu48qb.js";import"./react-D66Z11Sx.js";import"./iframe-BqckxrAP.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./fagsakYtelseType-DI8GXtVr.js";const m=({showModal:r,handleSubmit:i,cancelEvent:a})=>{const n=x();return e.jsxs(l,{open:r,"aria-label":n.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:a,children:[e.jsx(l.Header,{children:e.jsxs(w,{gap:"4",children:[e.jsx(H,{color:"var(--a-orange-500)",width:35,height:35,title:n.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})}),e.jsx(E,{size:"medium",id:"modal-heading",children:n.formatMessage({id:"ModalLukkPapirSoknad.Title"})})]})}),e.jsxs(l.Body,{children:[e.jsx(f,{weight:"semibold",children:n.formatMessage({id:"ModalLukkPapirSoknad.Opplysninger"})}),e.jsx(f,{children:n.formatMessage({id:"ModalLukkPapirSoknad.Bekreft"})})]}),e.jsxs(l.Footer,{children:[e.jsx(D,{to:"/",children:e.jsx(d,{variant:"primary",onClick:()=>i(),type:"button",children:n.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),e.jsx(d,{variant:"secondary",onClick:a,type:"button",children:n.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};m.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};m.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const K=N(1500),o=({submitting:r,onSubmitUfullstendigsoknad:i,readOnly:a=!0})=>{const n=x(),[u,g]=y.useState(!1),{watch:M}=P(),k=M("ufullstendigSoeknad")||!1,p=y.useCallback(()=>{g(!u)},[g,u]);return e.jsx(T,{children:e.jsxs(_,{gap:"4",children:[e.jsx(E,{size:"small",children:n.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(F,{name:"kommentarEndring",label:n.formatMessage({id:"Registrering.SaveApplication.Label"}),description:n.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[K,A],readOnly:a}),e.jsxs("div",{children:[e.jsx(c,{name:"registrerVerge",label:n.formatMessage({id:"Registrering.Verge"}),readOnly:a}),e.jsx(c,{name:"ufullstendigSoeknad",label:n.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:a})]}),e.jsxs("div",{children:[!k&&e.jsx(d,{id:"saveButton",size:"small",variant:"primary",loading:r,disabled:a||r,onClick:C,children:e.jsx(b,{id:"Registrering.SaveApplication.SaveButton"})}),k&&e.jsx(d,{id:"endButton",onClick:p,size:"small",variant:"primary",loading:r,disabled:a||r,type:"button",children:e.jsx(b,{id:"Registrering.SaveApplication.EndButton"})})]}),e.jsx(m,{handleSubmit:i,showModal:u,cancelEvent:p})]})})};o.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});o.transformValues=({kommentarEndring:r,registrerVerge:i,ufullstendigSoeknad:a})=>({kommentarEndring:r,registrerVerge:i,ufullstendigSoeknad:a});o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const G=I(O),t=({readOnly:r,onSubmitUfullstendigsoknad:i,submitting:a})=>e.jsx(B,{value:G,children:e.jsx(o,{readOnly:r,onSubmitUfullstendigsoknad:i,submitting:a})});t.initialValues=o.initialValues;t.transformValues=o.transformValues;t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const de={title:"ui-komponenter/lagre-soknad",component:t,decorators:[z],parameters:{submitCallback:L("onSubmit")},render:(r,{parameters:{submitCallback:i}})=>{const a=U();return e.jsx(R,{formMethods:a,onSubmit:n=>i(t.transformValues(n)),children:e.jsx(t,{...r})})}},s={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:L("onSubmitUfullstendigsoknad")}};var S,v,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>
  }
}`,...(V=(v=s.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var q,h,j;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>
  }
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const ue=["Default"];export{s as Default,ue as __namedExportsOrder,de as default};
