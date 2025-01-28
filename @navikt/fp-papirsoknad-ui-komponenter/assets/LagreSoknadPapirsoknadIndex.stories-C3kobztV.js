import{j as e}from"./jsx-runtime-CLpGMVip.js";import{i as h,j as o,H as q,b as x,k as p,B as d,d as L,Y as E,a as P,l as w,o as c,M as f,n as T,P as B,m as F,c as R,r as A}from"./nb_NO-BWG5UGPU.js";import{N as C,E as I,l as _,a as j}from"./index.es-IwNBnKCa.js";import{L as O,w as U}from"./withRouter-D1jL7FRn.js";import{r as b}from"./index-CYQpqK1Q.js";import{S as z}from"./ExclamationmarkTriangleFill-DeJOthqn.js";import"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./v4-CtRu48qb.js";const V=({showModal:r,handleSubmit:s,cancelEvent:n})=>{const a=h();return e.jsxs(o,{open:r,"aria-label":a.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:n,children:[e.jsx(o.Header,{children:e.jsxs(q,{gap:"4",children:[e.jsx(z,{color:"var(--a-orange-500)",width:35,height:35,title:a.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})}),e.jsx(x,{size:"medium",id:"modal-heading",children:a.formatMessage({id:"ModalLukkPapirSoknad.Title"})})]})}),e.jsxs(o.Body,{children:[e.jsx(p,{weight:"semibold",children:a.formatMessage({id:"ModalLukkPapirSoknad.Opplysninger"})}),e.jsx(p,{children:a.formatMessage({id:"ModalLukkPapirSoknad.Bekreft"})})]}),e.jsxs(o.Footer,{children:[e.jsx(O,{to:"/",children:e.jsx(d,{variant:"primary",onClick:()=>s(),type:"button",children:a.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),e.jsx(d,{variant:"secondary",onClick:n,type:"button",children:a.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};V.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D=_(1500),t=({submitting:r,onSubmitUfullstendigsoknad:s,readOnly:n=!0})=>{const a=h(),[u,m]=b.useState(!1),{watch:M}=L(),g=M("ufullstendigSoeknad")||!1,k=b.useCallback(()=>{m(!u)},[m,u]);return e.jsx(E,{children:e.jsxs(P,{gap:"4",children:[e.jsx(x,{size:"small",children:a.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(w,{name:"kommentarEndring",label:a.formatMessage({id:"Registrering.SaveApplication.Label"}),description:a.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[D,C],readOnly:n}),e.jsxs("div",{children:[e.jsx(c,{name:"registrerVerge",label:a.formatMessage({id:"Registrering.Verge"}),readOnly:n}),e.jsx(c,{name:"ufullstendigSoeknad",label:a.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),e.jsxs("div",{children:[!g&&e.jsx(d,{id:"saveButton",size:"small",variant:"primary",loading:r,disabled:n||r,onClick:I,children:e.jsx(f,{id:"Registrering.SaveApplication.SaveButton"})}),g&&e.jsx(d,{id:"endButton",onClick:k,size:"small",variant:"primary",loading:r,disabled:n||r,type:"button",children:e.jsx(f,{id:"Registrering.SaveApplication.EndButton"})})]}),e.jsx(V,{handleSubmit:s,showModal:u,cancelEvent:k})]})})};t.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});t.transformValues=({kommentarEndring:r,registrerVerge:s,ufullstendigSoeknad:n})=>({kommentarEndring:r,registrerVerge:s,ufullstendigSoeknad:n});t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const N=T(F),i=({readOnly:r,onSubmitUfullstendigsoknad:s,submitting:n})=>e.jsx(B,{value:N,children:e.jsx(t,{readOnly:r,onSubmitUfullstendigsoknad:s,submitting:n})});i.initialValues=t.initialValues;i.transformValues=t.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const ae={title:"ui-komponenter/lagre-soknad",component:i,decorators:[U],parameters:{submitCallback:j("onSubmit")},render:(r,{parameters:{submitCallback:s}})=>{const n=R();return e.jsx(A,{formMethods:n,onSubmit:a=>s(i.transformValues(a)),children:e.jsx(i,{...r})})}},l={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:j("onSubmitUfullstendigsoknad")}};var y,S,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const ne=["Default"];export{l as Default,ne as __namedExportsOrder,ae as default};
