import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as d,g as u,U as k,D as B,d as D,p as O,a as w}from"./index.es-CiSAtsS3.js";import{t as E,d as A,P as N,S as P,V as F,a as H,H as v,c as g,F as y,L as I,m as z,b as _,$ as L,B as U}from"./nb_NO-Do_lz9uu.js";import{E as C,m as f,a as p,v as T,b as x,c as $,d as K,e as j,f as G,t as J,g as Q}from"./validator-RRkNOw3-.js";import"./index-DRjF_FHU.js";import{A as W}from"./Alert-C1Db46fx.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";import"./ExclamationmarkTriangleFill-C3QGUi95.js";const n=E(z),X=a=>r=>{const t=a("foedselsDato");return J(t,r)},Y=a=>r=>{const t=a("termindato");return Q(t,r)},l=({readOnly:a,erForeldrepenger:r=!1})=>{const{watch:t,getValues:s}=A(),o=t("erBarnetFodt");return e.jsx(N,{value:n,children:e.jsx(P,{children:e.jsxs(F,{gap:"4",children:[e.jsx(H,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(C,{readOnly:a}),o!==void 0&&e.jsxs(F,{gap:"4",children:[o===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{gap:"4",children:[e.jsx(g,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:f().toDate(),toDate:p().toDate(),defaultMonth:new Date,validate:[d,u,k(f()),B(p())]}),e.jsx(y,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[d,D,T,x]})]}),e.jsx(g,{name:"terminbekreftelseDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:$().toDate(),toDate:K().toDate(),defaultMonth:new Date,validate:[u,Y(s)]})]}),o===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{gap:"4",children:[e.jsx(g,{name:"foedselsDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[d,u,k(j()),O],fromDate:j().toDate(),toDate:G().toDate()}),e.jsx(y,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[d,D,T,x]})]}),r&&e.jsx(W,{size:"small",variant:"info",children:e.jsx(I,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(g,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[u,k(f()),B(p()),X(s)],fromDate:f().toDate(),toDate:p().toDate(),defaultMonth:new Date})]})]})]})})})};l.initialValues=()=>({erBarnetFodt:void 0});l.transformValues=({antallBarn:a,erBarnetFodt:r,foedselsDato:t,termindato:s,terminbekreftelseDato:o})=>r?{erBarnetFodt:!0,termindato:s,foedselsDato:t,antallBarn:a}:{erBarnetFodt:!1,termindato:s,terminbekreftelseDato:o,antallBarnFraTerminbekreftelse:a};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me={title:"ui-komponenter/termin-og-fodsel",component:l,parameters:{submitCallback:w("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:r}})=>{const t=_();return e.jsx(L,{formMethods:t,onSubmit:s=>r(l.transformValues(s)),children:e.jsxs(F,{gap:"10",children:[e.jsx(l,{...a}),e.jsx(U,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};var q,h,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var M,S,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const de=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,de as __namedExportsOrder,me as default};
