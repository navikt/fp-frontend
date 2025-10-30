import{j as e,P as O,e as R,t as d,O as u,J as k,R as v,m as g,n as f,g as D,v as T,p as x,q as S,s as V,z as N,A as j,F as _,B as w,C as E}from"./iframe-BqnEFk-y.js";import{u as z,c as A,V as B,b as I,S as P,R as y,H as h,T as p,e as q,L as C,m as L,d as H,P as J,B as K}from"./nb_NO-DISyZyHa.js";import{M}from"./message-CZv0OR3R.js";import{A as U}from"./Alert-DHxryxFx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_9OiTaIa.js";const a=R(L),Y=r=>t=>{const n=r("foedselsDato");return E(n,t)},G=r=>t=>{const n=r("termindato");return w(n,t)},o=({readOnly:r,erForeldrepenger:t=!1})=>{const{watch:n,getValues:l,control:s}=z(),b=n("erBarnetFodt");return e.jsx(O,{value:a,children:e.jsx(A,{children:e.jsxs(B,{gap:"space-16",children:[e.jsx(I,{size:"small",level:"3",children:a.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsxs(P,{name:"erBarnetFodt",control:s,legend:a.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[d],readOnly:r,children:[e.jsx(y,{value:!0,size:"small",children:e.jsx(M,{id:"Registrering.TerminOgFodsel.ErFodt"})}),e.jsx(y,{value:!1,size:"small",children:e.jsx(M,{id:"Registrering.TerminOgFodsel.ErIkkeFodt"})})]}),b!==void 0&&e.jsxs(B,{gap:"space-16",children:[b===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(h,{gap:"space-16",children:[e.jsx(p,{name:"termindato",control:s,label:a.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),readOnly:r,fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date,validate:[d,u,k(f()),v(g())]}),e.jsx(q,{name:"antallBarn",control:s,label:a.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:r,parse:i=>{const m=Number.parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[d,D,T,x]})]}),e.jsx(p,{name:"terminbekreftelseDato",control:s,label:a.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),readOnly:r,fromDate:V().toDate(),toDate:S().toDate(),defaultMonth:new Date,validate:[u,G(l)]})]}),b===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(h,{gap:"space-16",children:[e.jsx(p,{name:"foedselsDato",control:s,label:a.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),readOnly:r,validate:[d,u,k(j()),_],fromDate:j().toDate(),toDate:N().toDate()}),e.jsx(q,{name:"antallBarn",control:s,label:a.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:r,parse:i=>{const m=Number.parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[d,D,T,x]})]}),t&&e.jsx(U,{size:"small",variant:"info",children:e.jsx(C,{size:"small",children:a.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(p,{name:"termindato",control:s,label:a.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),readOnly:r,validate:[u,k(f()),v(g()),Y(l)],fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date})]})]})]})})})};o.initialValues=()=>({erBarnetFodt:void 0});o.transformValues=({antallBarn:r,erBarnetFodt:t,foedselsDato:n,termindato:l,terminbekreftelseDato:s})=>t?{erBarnetFodt:!0,termindato:l,foedselsDato:n,antallBarn:r}:{erBarnetFodt:!1,termindato:l,terminbekreftelseDato:s,antallBarnFraTerminbekreftelse:r};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  antallBarn,
  erBarnetFodt,
  foedselsDato,
  termindato,
  terminbekreftelseDato,
}: FormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"union",raw:`| {
    erBarnetFodt: false;
    termindato?: string;
    terminbekreftelseDato?: string;
    antallBarnFraTerminbekreftelse?: number;
  }
| {
    erBarnetFodt: true;
    termindato?: string;
    foedselsDato?: string;
    antallBarn?: number;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erBarnetFodt: false;
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"false",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erBarnetFodt: true;
  termindato?: string;
  foedselsDato?: string;
  antallBarn?: number;
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:Q}=__STORYBOOK_MODULE_ACTIONS__,ae={title:"ui-komponenter/termin-og-fodsel",component:o,parameters:{submitCallback:Q("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:t}})=>{const n=H();return e.jsx(J,{formMethods:n,onSubmit:l=>t(o.transformValues(l)),children:e.jsxs(B,{gap:"space-40",children:[e.jsx(o,{...r}),e.jsx(K,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},F={args:{erForeldrepenger:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...c.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...F.parameters?.docs?.source}}};const te=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{F as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,te as __namedExportsOrder,ae as default};
