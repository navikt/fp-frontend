import{j as e,P as A,a as _,t as d,O as u,J as F,V as D,n as g,p as f,g as v,v as T,q as x,s as w,x as N,z as E,A as y,k as P,B as I,C as z}from"./iframe-Cd5tSmbZ.js";import{u as C,l as L,V as B,b as H,H as j,P as p,A as q,L as J,m as K,d as U,N as Y,B as G}from"./nb_NO-B3SCrwpL.js";import{E as Q}from"./ErBarnetFodt-Cjkv__Ky.js";import{A as W}from"./Alert-BeVFXDZX.js";import"./index-DNNPsnCD.js";import"./message-Db7SWhej.js";const n=_(K),X=a=>r=>{const t=a("foedselsDato");return z(t,r)},Z=a=>r=>{const t=a("termindato");return I(t,r)},o=({readOnly:a,erForeldrepenger:r=!1})=>{const{watch:t,getValues:l,control:s}=C(),b=t("erBarnetFodt");return e.jsx(A,{value:n,children:e.jsx(L,{children:e.jsxs(B,{gap:"4",children:[e.jsx(H,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(Q,{readOnly:a}),b!==void 0&&e.jsxs(B,{gap:"4",children:[b===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{gap:"4",children:[e.jsx(p,{name:"termindato",control:s,label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date,validate:[d,u,F(f()),D(g())]}),e.jsx(q,{name:"antallBarn",control:s,label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[d,v,T,x]})]}),e.jsx(p,{name:"terminbekreftelseDato",control:s,label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:N().toDate(),toDate:w().toDate(),defaultMonth:new Date,validate:[u,Z(l)]})]}),b===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{gap:"4",children:[e.jsx(p,{name:"foedselsDato",control:s,label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[d,u,F(y()),P],fromDate:y().toDate(),toDate:E().toDate()}),e.jsx(q,{name:"antallBarn",control:s,label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[d,v,T,x]})]}),r&&e.jsx(W,{size:"small",variant:"info",children:e.jsx(J,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(p,{name:"termindato",control:s,label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[u,F(f()),D(g()),X(l)],fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date})]})]})]})})})};o.initialValues=()=>({erBarnetFodt:void 0});o.transformValues=({antallBarn:a,erBarnetFodt:r,foedselsDato:t,termindato:l,terminbekreftelseDato:s})=>r?{erBarnetFodt:!0,termindato:l,foedselsDato:t,antallBarn:a}:{erBarnetFodt:!1,termindato:l,terminbekreftelseDato:s,antallBarnFraTerminbekreftelse:a};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:$}=__STORYBOOK_MODULE_ACTIONS__,le={title:"ui-komponenter/termin-og-fodsel",component:o,parameters:{submitCallback:$("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:r}})=>{const t=U();return e.jsx(Y,{formMethods:t,onSubmit:l=>r(o.transformValues(l)),children:e.jsxs(B,{gap:"10",children:[e.jsx(o,{...a}),e.jsx(G,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},k={args:{erForeldrepenger:!1}};var h,O,R;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var M,S,V;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(V=(S=k.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const oe=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{k as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,oe as __namedExportsOrder,le as default};
