import{j as e,P as R,a as M,t as d,O as u,J as b,R as D,p as g,q as f,g as v,v as T,s as x,x as S,z as V,A as _,B as y,k as w,C as E,D as z}from"./iframe-b0Ml_VkZ.js";import{u as A,d as I,V as B,b as N,F as C,R as j,H as h,y as p,f as q,L as P,m as L,e as H,D as J,B as K}from"./nb_NO-BBxiQqlW.js";import{M as O}from"./message-D54R3E_5.js";import{A as U}from"./Alert-T90XxEG7.js";import"./preload-helper-D9Z9MdNV.js";import"./index-4XG2jA43.js";const r=M(L),Y=a=>t=>{const n=a("foedselsDato");return z(n,t)},G=a=>t=>{const n=a("termindato");return E(n,t)},i=({readOnly:a,erForeldrepenger:t=!1})=>{const{watch:n,getValues:l,control:s}=A(),k=n("erBarnetFodt");return e.jsx(R,{value:r,children:e.jsx(I,{children:e.jsxs(B,{gap:"space-16",children:[e.jsx(N,{size:"small",level:"3",children:r.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsxs(C,{name:"erBarnetFodt",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[d],isReadOnly:a,children:[e.jsx(j,{value:!0,size:"small",children:e.jsx(O,{id:"Registrering.TerminOgFodsel.ErFodt"})}),e.jsx(j,{value:!1,size:"small",children:e.jsx(O,{id:"Registrering.TerminOgFodsel.ErIkkeFodt"})})]}),k!==void 0&&e.jsxs(B,{gap:"space-16",children:[k===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(h,{gap:"space-16",children:[e.jsx(p,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date,validate:[d,u,b(f()),D(g())]}),e.jsx(q,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:o=>{const m=parseInt(o.toString(),10);return isNaN(m)?o:m},validate:[d,v,T,x]})]}),e.jsx(p,{name:"terminbekreftelseDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:V().toDate(),toDate:S().toDate(),defaultMonth:new Date,validate:[u,G(l)]})]}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(h,{gap:"space-16",children:[e.jsx(p,{name:"foedselsDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[d,u,b(y()),w],fromDate:y().toDate(),toDate:_().toDate()}),e.jsx(q,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:o=>{const m=parseInt(o.toString(),10);return Number.isNaN(m)?o:m},validate:[d,v,T,x]})]}),t&&e.jsx(U,{size:"small",variant:"info",children:e.jsx(P,{size:"small",children:r.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(p,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[u,b(f()),D(g()),Y(l)],fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date})]})]})]})})})};i.initialValues=()=>({erBarnetFodt:void 0});i.transformValues=({antallBarn:a,erBarnetFodt:t,foedselsDato:n,termindato:l,terminbekreftelseDato:s})=>t?{erBarnetFodt:!0,termindato:l,foedselsDato:n,antallBarn:a}:{erBarnetFodt:!1,termindato:l,terminbekreftelseDato:s,antallBarnFraTerminbekreftelse:a};i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
