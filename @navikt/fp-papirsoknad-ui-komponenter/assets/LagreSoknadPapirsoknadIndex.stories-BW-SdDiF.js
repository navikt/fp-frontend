import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as b,d as y,M as S,V as v,b as V,K as x,U as d,B as u,P as j,n as q,m as E,c as h,e as w}from"./nb_NO-CfvUI8_Y.js";import{o as L,N as M,E as P,a as k}from"./index.es-_l0dZOqU.js";import{w as R}from"./withPanelData-DbY-aW8z.js";import"./index-_2TAQcTa.js";import"./aktivitetStatus-B1m96ipJ.js";import{M as m}from"./message-BDodd0-i.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";import"./entry-preview-ADut9pmq.js";import"./iframe-BIuwJwJm.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";const U=L(1500),i=({submitting:a,onSubmitUfullstendigsoknad:r,readOnly:n=!0})=>{const s=b(),{watch:c}=y(),l=c("ufullstendigSoeknad")||!1;return e.jsx(S,{children:e.jsxs(v,{gap:"4",children:[e.jsx(V,{size:"small",children:s.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(x,{name:"kommentarEndring",label:s.formatMessage({id:"Registrering.SaveApplication.Label"}),description:s.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[U,M],readOnly:n}),e.jsxs("div",{children:[e.jsx(d,{name:"registrerVerge",label:s.formatMessage({id:"Registrering.Verge"}),readOnly:n}),e.jsx(d,{name:"ufullstendigSoeknad",label:s.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),e.jsxs("div",{children:[!l&&e.jsx(u,{id:"saveButton",size:"small",variant:"primary",loading:a,disabled:n||a,onClick:P,children:e.jsx(m,{id:"Registrering.SaveApplication.SaveButton"})}),l&&e.jsx(u,{id:"endButton",onClick:r,size:"small",variant:"primary",loading:a,disabled:n||a,type:"button",children:e.jsx(m,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};i.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});i.transformValues=({kommentarEndring:a,registrerVerge:r,ufullstendigSoeknad:n})=>({kommentarEndring:a,registrerVerge:r,ufullstendigSoeknad:n});i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const F=q(E),t=({readOnly:a,onSubmitUfullstendigsoknad:r,submitting:n})=>e.jsx(j,{value:F,children:e.jsx(i,{readOnly:a,onSubmitUfullstendigsoknad:r,submitting:n})});t.initialValues=i.initialValues;t.transformValues=i.transformValues;t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Y={title:"ui-komponenter/lagre-soknad",component:t,decorators:[R],parameters:{submitCallback:k("onSubmit")},render:(a,{parameters:{submitCallback:r}})=>{const n=h();return e.jsx(w,{formMethods:n,onSubmit:s=>r(t.transformValues(s)),children:e.jsx(t,{...a})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:k("onSubmitUfullstendigsoknad")}};var g,p,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const Z=["Default"];export{o as Default,Z as __namedExportsOrder,Y as default};
