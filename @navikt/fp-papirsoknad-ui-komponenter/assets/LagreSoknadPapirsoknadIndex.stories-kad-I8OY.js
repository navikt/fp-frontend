import{u as q,j as e,o as x,N as j,E as h,P,a as w,w as L}from"./iframe-Cd5tSmbZ.js";import{u as _,l as T,V as U,b as M,e as O,y as p,B as k,m as R,d as A,N as B}from"./nb_NO-B3SCrwpL.js";import{M as f}from"./message-Db7SWhej.js";import"./index-DNNPsnCD.js";const F=x(1500),s=({submitting:n,onSubmitUfullstendigsoknad:i,readOnly:r=!0,erEndringssøknad:d})=>{const t=q(),{watch:E,control:u}=_(),g=E("ufullstendigSoeknad")||!1;return e.jsx(T,{children:e.jsxs(U,{gap:"4",children:[e.jsx(M,{size:"small",children:t.formatMessage({id:"Registrering.SaveApplication.Title"})}),e.jsx(O,{name:"kommentarEndring",control:u,label:t.formatMessage({id:"Registrering.SaveApplication.Label"}),description:t.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[F,j],readOnly:r}),!d&&e.jsxs("div",{children:[e.jsx(p,{name:"registrerVerge",control:u,label:t.formatMessage({id:"Registrering.Verge"}),readOnly:r}),e.jsx(p,{name:"ufullstendigSoeknad",control:u,label:t.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),e.jsxs("div",{children:[!g&&e.jsx(k,{id:"saveButton",size:"small",variant:"primary",loading:n,disabled:r||n,onClick:h,children:e.jsx(f,{id:"Registrering.SaveApplication.SaveButton"})}),g&&e.jsx(k,{id:"endButton",onClick:i,size:"small",variant:"primary",loading:n,disabled:r||n,type:"button",children:e.jsx(f,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};s.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});s.transformValues=({kommentarEndring:n,registrerVerge:i,ufullstendigSoeknad:r})=>({kommentarEndring:n,registrerVerge:i,ufullstendigSoeknad:r});s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const I=w(R),a=n=>e.jsx(P,{value:I,children:e.jsx(s,{...n})});a.initialValues=s.initialValues;a.transformValues=s.transformValues;a.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:m}=__STORYBOOK_MODULE_ACTIONS__,H={title:"ui-komponenter/lagre-soknad",component:a,decorators:[L],parameters:{submitCallback:m("onSubmit")},render:(n,{parameters:{submitCallback:i}})=>{const r=A();return e.jsx(B,{formMethods:r,onSubmit:d=>i(a.transformValues(d)),children:e.jsx(a,{...n})})}},o={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:m("onSubmitUfullstendigsoknad"),erEndringssøknad:!1}},l={args:{readOnly:!1,submitting:!1,onSubmitUfullstendigsoknad:m("onSubmitUfullstendigsoknad"),erEndringssøknad:!0}};var c,b,y;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const K=["Default","ErEndringssøknad"];export{o as Default,l as ErEndringssøknad,K as __namedExportsOrder,H as default};
