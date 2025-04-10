import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b,e as y,R as S,V as v,c as V,Q as q,q as d,B as u,P as x,f as j,m as E,d as h,K as w}from"./nb_NO-OfRtrFwo.js";import{o as L,N as R,E as P,a as k}from"./index.es-l01z5hqK.js";import{w as M}from"./withPanelData-CrWJGBNa.js";import"./index-_2TAQcTa.js";import"./aktivitetStatus-B1m96ipJ.js";import{M as m}from"./message-BF-PO83n.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0bQSHhiP.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";import"./entry-preview-BVQuqtYG.js";import"./iframe-ShReMkB_.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";const F=L(1500),i=({submitting:r,onSubmitUfullstendigsoknad:a,readOnly:n=!0})=>{const s=b(),{watch:c}=y(),l=c("ufullstendigSoeknad")||!1;return e.jsx(S,{children:e.jsxs(v,{gap:"4",children:[e.jsx(V,{size:"small",children:s.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(q,{name:"kommentarEndring",label:s.formatMessage({id:"Registrering.SaveApplication.Label"}),description:s.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[F,R],readOnly:n}),e.jsxs("div",{children:[e.jsx(d,{name:"registrerVerge",label:s.formatMessage({id:"Registrering.Verge"}),readOnly:n}),e.jsx(d,{name:"ufullstendigSoeknad",label:s.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),e.jsxs("div",{children:[!l&&e.jsx(u,{id:"saveButton",size:"small",variant:"primary",loading:r,disabled:n||r,onClick:P,children:e.jsx(m,{id:"Registrering.SaveApplication.SaveButton"})}),l&&e.jsx(u,{id:"endButton",onClick:a,size:"small",variant:"primary",loading:r,disabled:n||r,type:"button",children:e.jsx(m,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};i.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});i.transformValues=({kommentarEndring:r,registrerVerge:a,ufullstendigSoeknad:n})=>({kommentarEndring:r,registrerVerge:a,ufullstendigSoeknad:n});i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const T=j(E),t=({readOnly:r,onSubmitUfullstendigsoknad:a,submitting:n})=>e.jsx(x,{value:T,children:e.jsx(i,{readOnly:r,onSubmitUfullstendigsoknad:a,submitting:n})});t.initialValues=i.initialValues;t.transformValues=i.transformValues;t.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Y={title:"ui-komponenter/lagre-soknad",component:t,decorators:[M],parameters:{submitCallback:k("onSubmit")},render:(r,{parameters:{submitCallback:a}})=>{const n=h();return e.jsx(w,{formMethods:n,onSubmit:s=>a(t.transformValues(s)),children:e.jsx(t,{...r})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:k("onSubmitUfullstendigsoknad")}};var g,p,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const Z=["Default"];export{o as Default,Z as __namedExportsOrder,Y as default};
