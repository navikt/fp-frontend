import{u as b,j as e,o as S,N as y,E as v,P as V,a as E,w as q}from"./iframe-ChCszL4i.js";import{u as x,l as j,V as h,b as w,e as P,w as p,B as k,m as L,d as _,N as T}from"./nb_NO-OoPiwMTG.js";import{M as f}from"./message-D6BptZK1.js";import"./index-DylFhEll.js";const U=S(1500),s=({submitting:n,onSubmitUfullstendigsoknad:i,readOnly:r=!0,erEndringssøknad:d})=>{const t=b(),{watch:c,control:u}=x(),g=c("ufullstendigSoeknad")||!1;return e.jsx(j,{children:e.jsxs(h,{gap:"4",children:[e.jsx(w,{size:"small",children:t.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(P,{name:"kommentarEndring",control:u,label:t.formatMessage({id:"Registrering.SaveApplication.Label"}),description:t.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[U,y],readOnly:r}),!d&&e.jsxs("div",{children:[e.jsx(p,{name:"registrerVerge",control:u,label:t.formatMessage({id:"Registrering.Verge"}),readOnly:r}),e.jsx(p,{name:"ufullstendigSoeknad",control:u,label:t.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),e.jsxs("div",{children:[!g&&e.jsx(k,{id:"saveButton",size:"small",variant:"primary",loading:n,disabled:r||n,onClick:v,children:e.jsx(f,{id:"Registrering.SaveApplication.SaveButton"})}),g&&e.jsx(k,{id:"endButton",onClick:i,size:"small",variant:"primary",loading:n,disabled:r||n,type:"button",children:e.jsx(f,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};s.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});s.transformValues=({kommentarEndring:n,registrerVerge:i,ufullstendigSoeknad:r})=>({kommentarEndring:n,registrerVerge:i,ufullstendigSoeknad:r});s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const M=E(L),a=n=>e.jsx(V,{value:M,children:e.jsx(s,{...n})});a.initialValues=s.initialValues;a.transformValues=s.transformValues;a.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:m}=__STORYBOOK_MODULE_ACTIONS__,F={title:"ui-komponenter/lagre-soknad",component:a,decorators:[q],parameters:{submitCallback:m("onSubmit")},render:(n,{parameters:{submitCallback:i}})=>{const r=_();return e.jsx(T,{formMethods:r,onSubmit:d=>i(a.transformValues(d)),children:e.jsx(a,{...n})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:m("onSubmitUfullstendigsoknad"),erEndringssøknad:!1}},l={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:m("onSubmitUfullstendigsoknad"),erEndringssøknad:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>,
    erEndringssøknad: false
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>,
    erEndringssøknad: true
  }
}`,...l.parameters?.docs?.source}}};const I=["Default","ErEndringssøknad"];export{o as Default,l as ErEndringssøknad,I as __namedExportsOrder,F as default};
