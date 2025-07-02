import{u as q,j as e,P as x,a as j,w as h}from"./iframe-BrVq1Ni6.js";import{u as P,l as w,V as L,b as _,e as T,y as p,B as k,m as U,d as M,N as O}from"./nb_NO-QbGOywF-.js";import{o as R,N as A,E as B}from"./index.es-CQZm98y5.js";import{M as f}from"./message-CsYO9NvZ.js";import"./index-BMSy3fFj.js";const F=R(1500),s=({submitting:n,onSubmitUfullstendigsoknad:i,readOnly:r=!0,erEndringssøknad:d})=>{const t=q(),{watch:E,control:u}=P(),g=E("ufullstendigSoeknad")||!1;return e.jsx(w,{children:e.jsxs(L,{gap:"4",children:[e.jsx(_,{size:"small",children:t.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(T,{name:"kommentarEndring",control:u,label:t.formatMessage({id:"Registrering.SaveApplication.Label"}),description:t.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[F,A],readOnly:r}),!d&&e.jsxs("div",{children:[e.jsx(p,{name:"registrerVerge",control:u,label:t.formatMessage({id:"Registrering.Verge"}),readOnly:r}),e.jsx(p,{name:"ufullstendigSoeknad",control:u,label:t.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),e.jsxs("div",{children:[!g&&e.jsx(k,{id:"saveButton",size:"small",variant:"primary",loading:n,disabled:r||n,onClick:B,children:e.jsx(f,{id:"Registrering.SaveApplication.SaveButton"})}),g&&e.jsx(k,{id:"endButton",onClick:i,size:"small",variant:"primary",loading:n,disabled:r||n,type:"button",children:e.jsx(f,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};s.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});s.transformValues=({kommentarEndring:n,registrerVerge:i,ufullstendigSoeknad:r})=>({kommentarEndring:n,registrerVerge:i,ufullstendigSoeknad:r});s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const I=j(U),a=n=>e.jsx(x,{value:I,children:e.jsx(s,{...n})});a.initialValues=s.initialValues;a.transformValues=s.transformValues;a.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:m}=__STORYBOOK_MODULE_ACTIONS__,K={title:"ui-komponenter/lagre-soknad",component:a,decorators:[h],parameters:{submitCallback:m("onSubmit")},render:(n,{parameters:{submitCallback:i}})=>{const r=M();return e.jsx(O,{formMethods:r,onSubmit:d=>i(a.transformValues(d)),children:e.jsx(a,{...n})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:m("onSubmitUfullstendigsoknad"),erEndringssøknad:!1}},l={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:m("onSubmitUfullstendigsoknad"),erEndringssøknad:!0}};var c,b,y;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>,
    erEndringssøknad: false
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,v,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>,
    erEndringssøknad: true
  }
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const Y=["Default","ErEndringssøknad"];export{o as Default,l as ErEndringssøknad,Y as __namedExportsOrder,K as default};
