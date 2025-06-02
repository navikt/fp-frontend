import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as O,a as w,V as F,b as A,H as B,P as d,A as D,L as N,m as E,d as P,N as H,B as I}from"./nb_NO-BeBGbCCx.js";import{a as z}from"./index-B-lxVbXh.js";import{a as _,r as L}from"./index.es-CZjkzcto.js";import{e as u,p as f,H as k,D as v,c as y,S as C}from"./index.es-sIGWTmsS.js";import{E as K,m as g,a as p,v as T,b as x,c as U,d as G,e as J,f as j,t as Q,g as W}from"./validator-nVWwEpDO.js";import"./index-C4XKfyRp.js";import{A as X}from"./Alert-DIeDMBpk.js";import"./index-PUjTtqh4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DTjSd7F1.js";import"./v4-CtRu48qb.js";import"./message-C5auBQb2.js";const n=L(E),Y=r=>a=>{const t=r("foedselsDato");return W(t,a)},Z=r=>a=>{const t=r("termindato");return Q(t,a)},l=({readOnly:r,erForeldrepenger:a=!1})=>{const{watch:t,getValues:s}=O(),o=t("erBarnetFodt");return e.jsx(_,{value:n,children:e.jsx(w,{children:e.jsxs(F,{gap:"4",children:[e.jsx(A,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(K,{readOnly:r}),o!==void 0&&e.jsxs(F,{gap:"4",children:[o===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:r,fromDate:p().toDate(),toDate:g().toDate(),defaultMonth:new Date,validate:[u,f,k(p()),v(g())]}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:r,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[u,y,T,x]})]}),e.jsx(d,{name:"terminbekreftelseDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:r,fromDate:G().toDate(),toDate:U().toDate(),defaultMonth:new Date,validate:[f,Z(s)]})]}),o===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"foedselsDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:r,validate:[u,f,k(j()),C],fromDate:j().toDate(),toDate:J().toDate()}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:r,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[u,y,T,x]})]}),a&&e.jsx(X,{size:"small",variant:"info",children:e.jsx(N,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:r,validate:[f,k(p()),v(g()),Y(s)],fromDate:p().toDate(),toDate:g().toDate(),defaultMonth:new Date})]})]})]})})})};l.initialValues=()=>({erBarnetFodt:void 0});l.transformValues=({antallBarn:r,erBarnetFodt:a,foedselsDato:t,termindato:s,terminbekreftelseDato:o})=>a?{erBarnetFodt:!0,termindato:s,foedselsDato:t,antallBarn:r}:{erBarnetFodt:!1,termindato:s,terminbekreftelseDato:o,antallBarnFraTerminbekreftelse:r};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const fe={title:"ui-komponenter/termin-og-fodsel",component:l,parameters:{submitCallback:z("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:a}})=>{const t=P();return e.jsx(H,{formMethods:t,onSubmit:s=>a(l.transformValues(s)),children:e.jsxs(F,{gap:"10",children:[e.jsx(l,{...r}),e.jsx(I,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};var q,h,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var M,S,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ge=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,ge as __namedExportsOrder,fe as default};
