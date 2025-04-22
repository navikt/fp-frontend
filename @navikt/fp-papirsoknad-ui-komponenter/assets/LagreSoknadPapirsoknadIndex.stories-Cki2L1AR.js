import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as b,g as y,d as v,V as S,c as V,N as x,w as d,B as m,P as j,f as q,m as E,e as h,$ as w}from"./nb_NO-DWXx_5rD.js";import{o as P,N as L,E as M,a as k}from"./index.es-CEGBLAGy.js";import{w as R}from"./withPanelData-DZ9oxQJ3.js";import"./index-C4XKfyRp.js";import"./aktivitetStatus-B1m96ipJ.js";import{M as u}from"./message-VCpe8OHV.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./v4-CtRu48qb.js";import"./entry-preview-jtooXM-a.js";import"./iframe-CIcA63BH.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";const F=P(1500),t=({submitting:n,onSubmitUfullstendigsoknad:a,readOnly:r=!0})=>{const s=b(),{watch:c}=y(),l=c("ufullstendigSoeknad")||!1;return e.jsx(v,{children:e.jsxs(S,{gap:"4",children:[e.jsx(V,{size:"small",children:s.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(x,{name:"kommentarEndring",label:s.formatMessage({id:"Registrering.SaveApplication.Label"}),description:s.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[F,L],readOnly:r}),e.jsxs("div",{children:[e.jsx(d,{name:"registrerVerge",label:s.formatMessage({id:"Registrering.Verge"}),readOnly:r}),e.jsx(d,{name:"ufullstendigSoeknad",label:s.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),e.jsxs("div",{children:[!l&&e.jsx(m,{id:"saveButton",size:"small",variant:"primary",loading:n,disabled:r||n,onClick:M,children:e.jsx(u,{id:"Registrering.SaveApplication.SaveButton"})}),l&&e.jsx(m,{id:"endButton",onClick:a,size:"small",variant:"primary",loading:n,disabled:r||n,type:"button",children:e.jsx(u,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};t.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});t.transformValues=({kommentarEndring:n,registrerVerge:a,ufullstendigSoeknad:r})=>({kommentarEndring:n,registrerVerge:a,ufullstendigSoeknad:r});t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const T=q(E),i=({readOnly:n,onSubmitUfullstendigsoknad:a,submitting:r})=>e.jsx(j,{value:T,children:e.jsx(t,{readOnly:n,onSubmitUfullstendigsoknad:a,submitting:r})});i.initialValues=t.initialValues;i.transformValues=t.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const X={title:"ui-komponenter/lagre-soknad",component:i,decorators:[R],parameters:{submitCallback:k("onSubmit")},render:(n,{parameters:{submitCallback:a}})=>{const r=h();return e.jsx(w,{formMethods:r,onSubmit:s=>a(i.transformValues(s)),children:e.jsx(i,{...n})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:k("onSubmitUfullstendigsoknad")}};var g,p,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const Y=["Default"];export{o as Default,Y as __namedExportsOrder,X as default};
