import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as S,P as w,f as E,R as I,V as F,c as A,H as B,U as d,G as D,L as N,m as H,d as P,K as z,B as _}from"./nb_NO-Do8e3gZi.js";import{e as u,O as g,H as k,D as v,g as y,I as K,a as L}from"./index.es-DAlOjUJD.js";import{E as U,m as f,a as p,v as T,b as x,c as C,d as G,e as J,f as j,t as Q,g as W}from"./validator-Qkn1_Kf4.js";import"./index-_2TAQcTa.js";import{A as X}from"./Alert-GdDh-kX8.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0bQSHhiP.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";import"./message-CxYIsBoI.js";const n=E(H),Y=a=>r=>{const t=a("foedselsDato");return W(t,r)},Z=a=>r=>{const t=a("termindato");return Q(t,r)},l=({readOnly:a,erForeldrepenger:r=!1})=>{const{watch:t,getValues:s}=S(),o=t("erBarnetFodt");return e.jsx(w,{value:n,children:e.jsx(I,{children:e.jsxs(F,{gap:"4",children:[e.jsx(A,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(U,{readOnly:a}),o!==void 0&&e.jsxs(F,{gap:"4",children:[o===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:p().toDate(),toDate:f().toDate(),defaultMonth:new Date,validate:[u,g,k(p()),v(f())]}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[u,y,T,x]})]}),e.jsx(d,{name:"terminbekreftelseDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:G().toDate(),toDate:C().toDate(),defaultMonth:new Date,validate:[g,Z(s)]})]}),o===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"foedselsDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[u,g,k(j()),K],fromDate:j().toDate(),toDate:J().toDate()}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[u,y,T,x]})]}),r&&e.jsx(X,{size:"small",variant:"info",children:e.jsx(N,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[g,k(p()),v(f()),Y(s)],fromDate:p().toDate(),toDate:f().toDate(),defaultMonth:new Date})]})]})]})})})};l.initialValues=()=>({erBarnetFodt:void 0});l.transformValues=({antallBarn:a,erBarnetFodt:r,foedselsDato:t,termindato:s,terminbekreftelseDato:o})=>r?{erBarnetFodt:!0,termindato:s,foedselsDato:t,antallBarn:a}:{erBarnetFodt:!1,termindato:s,terminbekreftelseDato:o,antallBarnFraTerminbekreftelse:a};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ue={title:"ui-komponenter/termin-og-fodsel",component:l,parameters:{submitCallback:L("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:r}})=>{const t=P();return e.jsx(z,{formMethods:t,onSubmit:s=>r(l.transformValues(s)),children:e.jsxs(F,{gap:"10",children:[e.jsx(l,{...a}),e.jsx(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};var q,h,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var M,O,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(V=(O=b.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ge=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,ge as __namedExportsOrder,ue as default};
