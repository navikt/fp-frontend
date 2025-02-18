import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as q,V as I,b as V,n as h,m as v,c as x,e as R,B}from"./nb_NO-CoA8CYxJ.js";import{a as O}from"./index.es-BXKFxR2z.js";import{T as P}from"./TrueFalseInput-Mp05nkOp.js";import"./index-_2TAQcTa.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";const t=h(v),a=({readOnly:o,annenForelderInformertRequired:s=!1})=>e.jsx(q,{children:e.jsxs(I,{gap:"4",children:[e.jsx(V,{size:"small",children:t.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e.jsx(P,{label:t.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"}),name:"annenForelderInformert",isRequired:s,readOnly:o})]})});a.initialValues=()=>({annenForelderInformert:void 0});a.tranformValues=({annenForelderInformert:o})=>({annenForelderInformert:o});a.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]}}}},{name:"tranformValues",docblock:null,modifiers:["static"],params:[{name:"{ annenForelderInformert }: BekreftelseFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]},alias:"BekreftelseFormValues"}}],returns:null}],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};a.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]}}}},{name:"tranformValues",docblock:null,modifiers:["static"],params:[{name:"{ annenForelderInformert }: BekreftelseFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]},alias:"BekreftelseFormValues"}}],returns:null}],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D={title:"ui-komponenter/bekreftelse",component:a,parameters:{submitCallback:O("onSubmit")},args:{readOnly:!1},render:(o,{parameters:{submitCallback:s}})=>{const y=x();return e.jsx(R,{formMethods:y,onSubmit:j=>s(a.tranformValues(j)),children:e.jsxs(I,{gap:"10",children:[e.jsx(a,{...o}),e.jsx(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},r={args:{annenForelderInformertRequired:!1}},n={args:{annenForelderInformertRequired:!0}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    annenForelderInformertRequired: false
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    annenForelderInformertRequired: true
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,c,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    annenForelderInformertRequired: false
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var F,b,k;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    annenForelderInformertRequired: true
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const H=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,H as __namedExportsOrder,D as default};
