import{u as b,j as e,P as y,a as S,w as v}from"./iframe-wRiEbax3.js";import{u as V,l as x,V as j,b as q,d as E,y as d,B as u,m as h,c as w,N as P}from"./nb_NO-CCZbSLZt.js";import{a as L,y as _,E as M}from"./index.es-D6rbkOhl.js";import{M as m}from"./message-Do5C69VI.js";import"./index-CQ2rW2c7.js";const R=L(1500),t=({submitting:a,onSubmitUfullstendigsoknad:r,readOnly:n=!0})=>{const s=b(),{watch:c}=V(),l=c("ufullstendigSoeknad")||!1;return e.jsx(x,{children:e.jsxs(j,{gap:"4",children:[e.jsx(q,{size:"small",children:s.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(E,{name:"kommentarEndring",label:s.formatMessage({id:"Registrering.SaveApplication.Label"}),description:s.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[R,_],readOnly:n}),e.jsxs("div",{children:[e.jsx(d,{name:"registrerVerge",label:s.formatMessage({id:"Registrering.Verge"}),readOnly:n}),e.jsx(d,{name:"ufullstendigSoeknad",label:s.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),e.jsxs("div",{children:[!l&&e.jsx(u,{id:"saveButton",size:"small",variant:"primary",loading:a,disabled:n||a,onClick:M,children:e.jsx(m,{id:"Registrering.SaveApplication.SaveButton"})}),l&&e.jsx(u,{id:"endButton",onClick:r,size:"small",variant:"primary",loading:a,disabled:n||a,type:"button",children:e.jsx(m,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};t.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});t.transformValues=({kommentarEndring:a,registrerVerge:r,ufullstendigSoeknad:n})=>({kommentarEndring:a,registrerVerge:r,ufullstendigSoeknad:n});t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const T=S(h),i=({readOnly:a,onSubmitUfullstendigsoknad:r,submitting:n})=>e.jsx(y,{value:T,children:e.jsx(t,{readOnly:a,onSubmitUfullstendigsoknad:r,submitting:n})});i.initialValues=t.initialValues;i.transformValues=t.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,U={title:"ui-komponenter/lagre-soknad",component:i,decorators:[v],parameters:{submitCallback:k("onSubmit")},render:(a,{parameters:{submitCallback:r}})=>{const n=w();return e.jsx(P,{formMethods:n,onSubmit:s=>r(i.transformValues(s)),children:e.jsx(i,{...a})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:k("onSubmitUfullstendigsoknad")}};var g,p,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,U as default};
