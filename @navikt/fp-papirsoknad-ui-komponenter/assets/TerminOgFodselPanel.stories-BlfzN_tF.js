import{j as e,P as q,m as u,a as g,v as D,b as v,c as h,e as R,f as M,g as T,t as S,h as V}from"./iframe-BKAlD7kq.js";import{u as _,r as w,l as A,V as B,b as E,M as N,H as y,P as f,A as x,L as I,m as P,d as z,N as L,B as C}from"./nb_NO-BBa2qQ2A.js";import{t as d,O as p,J as F,R as j,g as O,k as H}from"./index.es-BwStEKym.js";import{A as J}from"./Alert-DwSbJY3x.js";import"./index-ChRUIYyj.js";const r=w(P),K=a=>t=>{const n=a("foedselsDato");return V(n,t)},U=a=>t=>{const n=a("termindato");return S(n,t)},o=({readOnly:a,erForeldrepenger:t=!1})=>{const{watch:n,getValues:l,control:s}=_(),k=n("erBarnetFodt");return e.jsx(q,{value:r,children:e.jsx(A,{children:e.jsxs(B,{gap:"4",children:[e.jsx(E,{size:"small",children:r.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(N,{name:"erBarnetFodt",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[d],isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]}),k!==void 0&&e.jsxs(B,{gap:"4",children:[k===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{gap:"4",children:[e.jsx(f,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:g().toDate(),toDate:u().toDate(),defaultMonth:new Date,validate:[d,p,F(g()),j(u())]}),e.jsx(x,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[d,O,D,v]})]}),e.jsx(f,{name:"terminbekreftelseDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:R().toDate(),toDate:h().toDate(),defaultMonth:new Date,validate:[p,U(l)]})]}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{gap:"4",children:[e.jsx(f,{name:"foedselsDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[d,p,F(T()),H],fromDate:T().toDate(),toDate:M().toDate()}),e.jsx(x,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[d,O,D,v]})]}),t&&e.jsx(J,{size:"small",variant:"info",children:e.jsx(I,{size:"small",children:r.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(f,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[p,F(g()),j(u()),K(l)],fromDate:g().toDate(),toDate:u().toDate(),defaultMonth:new Date})]})]})]})})})};o.initialValues=()=>({erBarnetFodt:void 0});o.transformValues=({antallBarn:a,erBarnetFodt:t,foedselsDato:n,termindato:l,terminbekreftelseDato:s})=>t?{erBarnetFodt:!0,termindato:l,foedselsDato:n,antallBarn:a}:{erBarnetFodt:!1,termindato:l,terminbekreftelseDato:s,antallBarnFraTerminbekreftelse:a};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:Y}=__STORYBOOK_MODULE_ACTIONS__,$={title:"ui-komponenter/termin-og-fodsel",component:o,parameters:{submitCallback:Y("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:t}})=>{const n=z();return e.jsx(L,{formMethods:n,onSubmit:l=>t(o.transformValues(l)),children:e.jsxs(B,{gap:"10",children:[e.jsx(o,{...a}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...b.parameters?.docs?.source}}};const ee=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,ee as __namedExportsOrder,$ as default};
