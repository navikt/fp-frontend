import{j as e,P as R,a as M,t as d,O as u,J as k,R as v,n as g,p as f,g as D,v as T,q as x,s as S,x as V,z as _,A as y,F as w,B as E,C as N}from"./iframe-CKnwH9Kg.js";import{u as z,d as A,V as B,b as I,M as P,R as j,H as O,O as p,P as h,L as C,m as L,f as H,N as J,B as K}from"./nb_NO-DlU9eL94.js";import{M as q}from"./message-BMq6D31B.js";import{A as U}from"./Alert-CzZ0fknE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5gXYbC8c.js";const r=M(L),Y=a=>t=>{const n=a("foedselsDato");return N(n,t)},G=a=>t=>{const n=a("termindato");return E(n,t)},i=({readOnly:a,erForeldrepenger:t=!1})=>{const{watch:n,getValues:l,control:s}=z(),b=n("erBarnetFodt");return e.jsx(R,{value:r,children:e.jsx(A,{children:e.jsxs(B,{gap:"space-16",children:[e.jsx(I,{size:"small",level:"3",children:r.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsxs(P,{name:"erBarnetFodt",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[d],isReadOnly:a,children:[e.jsx(j,{value:!0,size:"small",children:e.jsx(q,{id:"Registrering.TerminOgFodsel.ErFodt"})}),e.jsx(j,{value:!1,size:"small",children:e.jsx(q,{id:"Registrering.TerminOgFodsel.ErIkkeFodt"})})]}),b!==void 0&&e.jsxs(B,{gap:"space-16",children:[b===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(O,{gap:"space-16",children:[e.jsx(p,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date,validate:[d,u,k(f()),v(g())]}),e.jsx(h,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:o=>{const m=parseInt(o.toString(),10);return isNaN(m)?o:m},validate:[d,D,T,x]})]}),e.jsx(p,{name:"terminbekreftelseDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:V().toDate(),toDate:S().toDate(),defaultMonth:new Date,validate:[u,G(l)]})]}),b===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(O,{gap:"space-16",children:[e.jsx(p,{name:"foedselsDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[d,u,k(y()),w],fromDate:y().toDate(),toDate:_().toDate()}),e.jsx(h,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:o=>{const m=parseInt(o.toString(),10);return Number.isNaN(m)?o:m},validate:[d,D,T,x]})]}),t&&e.jsx(U,{size:"small",variant:"info",children:e.jsx(C,{size:"small",children:r.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(p,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[u,k(f()),v(g()),Y(l)],fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date})]})]})]})})})};i.initialValues=()=>({erBarnetFodt:void 0});i.transformValues=({antallBarn:a,erBarnetFodt:t,foedselsDato:n,termindato:l,terminbekreftelseDato:s})=>t?{erBarnetFodt:!0,termindato:l,foedselsDato:n,antallBarn:a}:{erBarnetFodt:!1,termindato:l,terminbekreftelseDato:s,antallBarnFraTerminbekreftelse:a};i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:Q}=__STORYBOOK_MODULE_ACTIONS__,re={title:"ui-komponenter/termin-og-fodsel",component:i,parameters:{submitCallback:Q("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:t}})=>{const n=H();return e.jsx(J,{formMethods:n,onSubmit:l=>t(i.transformValues(l)),children:e.jsxs(B,{gap:"space-40",children:[e.jsx(i,{...a}),e.jsx(K,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},F={args:{erForeldrepenger:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...c.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...F.parameters?.docs?.source}}};const te=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{F as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,te as __namedExportsOrder,re as default};
