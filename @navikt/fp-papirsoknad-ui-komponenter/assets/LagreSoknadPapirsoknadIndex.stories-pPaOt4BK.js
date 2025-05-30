import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as b,f as y,V as v,a as S,D as V,y as d,B as m,m as x,b as j,N as q}from"./nb_NO-DtoXCGNE.js";import{a as k}from"./index-B-lxVbXh.js";import{w as E}from"./withThemeDecorator-CfakuK42.js";import"./index-C4XKfyRp.js";import{u as h,a as w,r as P}from"./index.es-CZjkzcto.js";import"./aktivitetStatus-B1m96ipJ.js";import{a as L,y as M,E as R}from"./index.es-sIGWTmsS.js";import{M as u}from"./message-C5auBQb2.js";import"./index-PUjTtqh4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DTjSd7F1.js";import"./v4-CtRu48qb.js";import"./entry-preview-DuYcYhdN.js";import"./iframe-0ljtz8Ul.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";const F=L(1500),t=({submitting:n,onSubmitUfullstendigsoknad:a,readOnly:r=!0})=>{const s=h(),{watch:c}=b(),l=c("ufullstendigSoeknad")||!1;return e.jsx(y,{children:e.jsxs(v,{gap:"4",children:[e.jsx(S,{size:"small",children:s.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(V,{name:"kommentarEndring",label:s.formatMessage({id:"Registrering.SaveApplication.Label"}),description:s.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[F,M],readOnly:r}),e.jsxs("div",{children:[e.jsx(d,{name:"registrerVerge",label:s.formatMessage({id:"Registrering.Verge"}),readOnly:r}),e.jsx(d,{name:"ufullstendigSoeknad",label:s.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),e.jsxs("div",{children:[!l&&e.jsx(m,{id:"saveButton",size:"small",variant:"primary",loading:n,disabled:r||n,onClick:R,children:e.jsx(u,{id:"Registrering.SaveApplication.SaveButton"})}),l&&e.jsx(m,{id:"endButton",onClick:a,size:"small",variant:"primary",loading:n,disabled:r||n,type:"button",children:e.jsx(u,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};t.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});t.transformValues=({kommentarEndring:n,registrerVerge:a,ufullstendigSoeknad:r})=>({kommentarEndring:n,registrerVerge:a,ufullstendigSoeknad:r});t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const T=P(x),i=({readOnly:n,onSubmitUfullstendigsoknad:a,submitting:r})=>e.jsx(w,{value:T,children:e.jsx(t,{readOnly:n,onSubmitUfullstendigsoknad:a,submitting:r})});i.initialValues=t.initialValues;i.transformValues=t.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Z={title:"ui-komponenter/lagre-soknad",component:i,decorators:[E],parameters:{submitCallback:k("onSubmit")},render:(n,{parameters:{submitCallback:a}})=>{const r=j();return e.jsx(q,{formMethods:r,onSubmit:s=>a(i.transformValues(s)),children:e.jsx(i,{...n})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:k("onSubmitUfullstendigsoknad")}};var g,p,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,Z as default};
