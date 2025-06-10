import{j as e,P as V,a as _}from"./iframe-CPU-3r13.js";import{u as w,d as A,V as F,b as N,H as B,P as d,A as D,L as E,m as P,e as I,N as H,B as z}from"./nb_NO-hiT1xduR.js";import{e as u,p as g,H as k,D as v,c as T,S as L}from"./index.es-BQ00orad.js";import{E as C,m as f,a as p,v as y,b as x,c as K,d as U,e as Y,f as j,t as G,g as J}from"./validator-BtdfsuLa.js";import{A as Q}from"./Alert-Crk-Xn9X.js";import"./index-cfeu8LEu.js";import"./message-Dh32RqQv.js";const n=_(P),W=a=>r=>{const t=a("foedselsDato");return J(t,r)},X=a=>r=>{const t=a("termindato");return G(t,r)},l=({readOnly:a,erForeldrepenger:r=!1})=>{const{watch:t,getValues:s}=w(),o=t("erBarnetFodt");return e.jsx(V,{value:n,children:e.jsx(A,{children:e.jsxs(F,{gap:"4",children:[e.jsx(N,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(C,{readOnly:a}),o!==void 0&&e.jsxs(F,{gap:"4",children:[o===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:p().toDate(),toDate:f().toDate(),defaultMonth:new Date,validate:[u,g,k(p()),v(f())]}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[u,T,y,x]})]}),e.jsx(d,{name:"terminbekreftelseDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:U().toDate(),toDate:K().toDate(),defaultMonth:new Date,validate:[g,X(s)]})]}),o===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"foedselsDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[u,g,k(j()),L],fromDate:j().toDate(),toDate:Y().toDate()}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[u,T,y,x]})]}),r&&e.jsx(Q,{size:"small",variant:"info",children:e.jsx(E,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[g,k(p()),v(f()),W(s)],fromDate:p().toDate(),toDate:f().toDate(),defaultMonth:new Date})]})]})]})})})};l.initialValues=()=>({erBarnetFodt:void 0});l.transformValues=({antallBarn:a,erBarnetFodt:r,foedselsDato:t,termindato:s,terminbekreftelseDato:o})=>r?{erBarnetFodt:!0,termindato:s,foedselsDato:t,antallBarn:a}:{erBarnetFodt:!1,termindato:s,terminbekreftelseDato:o,antallBarnFraTerminbekreftelse:a};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:Z}=__STORYBOOK_MODULE_ACTIONS__,le={title:"ui-komponenter/termin-og-fodsel",component:l,parameters:{submitCallback:Z("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:r}})=>{const t=I();return e.jsx(H,{formMethods:t,onSubmit:s=>r(l.transformValues(s)),children:e.jsxs(F,{gap:"10",children:[e.jsx(l,{...a}),e.jsx(z,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};var q,h,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(O=(h=c.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var R,S,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(M=(S=b.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const oe=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,oe as __namedExportsOrder,le as default};
