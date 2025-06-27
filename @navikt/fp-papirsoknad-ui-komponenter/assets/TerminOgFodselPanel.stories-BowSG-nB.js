import{j as e,P as _,a as w}from"./iframe-FrXAMUXp.js";import{u as A,l as N,V as B,b as E,H as D,P as d,A as v,L as P,m as I,c as z,N as L,B as C}from"./nb_NO-Cr5O0Zqi.js";import{t as u,O as g,J as F,V as T,g as y,k as H}from"./index.es-D1Z05UIf.js";import{E as J,m as f,a as p,v as x,b as j,c as K,d as U,e as Y,f as q,t as G,g as Q}from"./validator-C59_UYI0.js";import{A as W}from"./Alert-C8JVYDh8.js";import"./index-CyBmCSnO.js";import"./message-5sNsc00J.js";const n=w(I),X=a=>r=>{const t=a("foedselsDato");return Q(t,r)},Z=a=>r=>{const t=a("termindato");return G(t,r)},o=({readOnly:a,erForeldrepenger:r=!1})=>{const{watch:t,getValues:s,control:l}=A(),k=t("erBarnetFodt");return e.jsx(_,{value:n,children:e.jsx(N,{children:e.jsxs(B,{gap:"4",children:[e.jsx(E,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(J,{readOnly:a}),k!==void 0&&e.jsxs(B,{gap:"4",children:[k===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{gap:"4",children:[e.jsx(d,{name:"termindato",control:l,label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:p().toDate(),toDate:f().toDate(),defaultMonth:new Date,validate:[u,g,F(p()),T(f())]}),e.jsx(v,{name:"antallBarn",control:l,label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[u,y,x,j]})]}),e.jsx(d,{name:"terminbekreftelseDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:U().toDate(),toDate:K().toDate(),defaultMonth:new Date,validate:[g,Z(s)]})]}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{gap:"4",children:[e.jsx(d,{name:"foedselsDato",control:l,label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[u,g,F(q()),H],fromDate:q().toDate(),toDate:Y().toDate()}),e.jsx(v,{name:"antallBarn",control:l,label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[u,y,x,j]})]}),r&&e.jsx(W,{size:"small",variant:"info",children:e.jsx(P,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(d,{name:"termindato",control:l,label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[g,F(p()),T(f()),X(s)],fromDate:p().toDate(),toDate:f().toDate(),defaultMonth:new Date})]})]})]})})})};o.initialValues=()=>({erBarnetFodt:void 0});o.transformValues=({antallBarn:a,erBarnetFodt:r,foedselsDato:t,termindato:s,terminbekreftelseDato:l})=>r?{erBarnetFodt:!0,termindato:s,foedselsDato:t,antallBarn:a}:{erBarnetFodt:!1,termindato:s,terminbekreftelseDato:l,antallBarnFraTerminbekreftelse:a};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:$}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"ui-komponenter/termin-og-fodsel",component:o,parameters:{submitCallback:$("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:r}})=>{const t=z();return e.jsx(L,{formMethods:t,onSubmit:s=>r(o.transformValues(s)),children:e.jsxs(B,{gap:"10",children:[e.jsx(o,{...a}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};var h,O,R;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var M,S,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ie=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,ie as __namedExportsOrder,oe as default};
