import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as H,P,n as _,a as z,V as F,b as L,H as B,G as f,X as y,L as C,m as G,c as X,e as K,B as U}from"./nb_NO-CoA8CYxJ.js";import{e as g,O as p,H as c,D as v,g as D,I as $,a as J}from"./index.es-BXKFxR2z.js";import{E as Q,m as b,a as k,v as q,b as T,c as W,d as Y,e as Z,f as j,t as ee,g as re}from"./validator-lPvY4zIg.js";import"./index-_2TAQcTa.js";import{A as ae}from"./Alert-BfknG_NQ.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";import"./ExclamationmarkTriangleFill-WJx_G_WF.js";const t=_(G),ne=r=>a=>{const n=r("foedselsDato");return re(n,a)},te=r=>a=>{const n=r("termindato");return ee(n,a)},o=({readOnly:r,erForeldrepenger:a=!1})=>{const{watch:n,getValues:i}=H(),m=n("erBarnetFodt");return e.jsx(P,{value:t,children:e.jsx(z,{children:e.jsxs(F,{gap:"4",children:[e.jsx(L,{size:"small",children:t.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(Q,{readOnly:r}),m!==void 0&&e.jsxs(F,{gap:"4",children:[m===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(f,{name:"termindato",label:t.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:r,fromDate:k().toDate(),toDate:b().toDate(),defaultMonth:new Date,validate:[g,p,c(k()),v(b())]}),e.jsx(y,{name:"antallBarn",label:t.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:r,parse:d=>{const u=parseInt(d.toString(),10);return isNaN(u)?d:u},validate:[g,D,q,T]})]}),e.jsx(f,{name:"terminbekreftelseDato",label:t.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:r,fromDate:Y().toDate(),toDate:W().toDate(),defaultMonth:new Date,validate:[p,te(i)]})]}),m===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(f,{name:"foedselsDato",label:t.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:r,validate:[g,p,c(j()),$],fromDate:j().toDate(),toDate:Z().toDate()}),e.jsx(y,{name:"antallBarn",label:t.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:r,parse:d=>{const u=parseInt(d.toString(),10);return Number.isNaN(u)?d:u},validate:[g,D,q,T]})]}),a&&e.jsx(ae,{size:"small",variant:"info",children:e.jsx(C,{size:"small",children:t.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(f,{name:"termindato",label:t.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:r,validate:[p,c(k()),v(b()),ne(i)],fromDate:k().toDate(),toDate:b().toDate(),defaultMonth:new Date})]})]})]})})})};o.initialValues=()=>({erBarnetFodt:void 0});o.transformValues=({antallBarn:r,erBarnetFodt:a,foedselsDato:n,termindato:i,terminbekreftelseDato:m})=>a?{erBarnetFodt:!0,termindato:i,foedselsDato:n,antallBarn:r}:{erBarnetFodt:!1,termindato:i,terminbekreftelseDato:m,antallBarnFraTerminbekreftelse:r};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ce={title:"ui-komponenter/termin-og-fodsel",component:o,parameters:{submitCallback:J("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:a}})=>{const n=X();return e.jsx(K,{formMethods:n,onSubmit:i=>a(o.transformValues(i)),children:e.jsxs(F,{gap:"10",children:[e.jsx(o,{...r}),e.jsx(U,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},s={args:{erForeldrepenger:!0}},l={args:{erForeldrepenger:!1}};var x,h,V;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var O,R,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var M,S,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,N,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const Fe=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{l as ErIkkeForeldrepengeSak,s as ForeldrepengeSak,Fe as __namedExportsOrder,ce as default};
