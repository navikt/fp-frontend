import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as O,d as w,P as E,S as A,V as F,a as N,H as B,c as d,F as D,L as P,m as H,b as I,$ as z,B as _}from"./nb_NO-Do_lz9uu.js";import{H as u,g,U as k,D as v,d as y,p as L,a as U}from"./index.es-CiSAtsS3.js";import{E as C,m as f,a as p,v as T,b as x,c as $,d as K,e as j,f as G,t as J,g as Q}from"./validator-e2f6XIL7.js";import"./index-DRjF_FHU.js";import{A as W}from"./Alert-C1Db46fx.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";import"./ExclamationmarkTriangleFill-C3QGUi95.js";const n=O(H),X=a=>r=>{const t=a("foedselsDato");return J(t,r)},Y=a=>r=>{const t=a("termindato");return Q(t,r)},l=({readOnly:a,erForeldrepenger:r=!1})=>{const{watch:t,getValues:s}=w(),o=t("erBarnetFodt");return e.jsx(E,{value:n,children:e.jsx(A,{children:e.jsxs(F,{gap:"4",children:[e.jsx(N,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(C,{readOnly:a}),o!==void 0&&e.jsxs(F,{gap:"4",children:[o===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:f().toDate(),toDate:p().toDate(),defaultMonth:new Date,validate:[u,g,k(f()),v(p())]}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[u,y,T,x]})]}),e.jsx(d,{name:"terminbekreftelseDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:$().toDate(),toDate:K().toDate(),defaultMonth:new Date,validate:[g,Y(s)]})]}),o===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{gap:"4",children:[e.jsx(d,{name:"foedselsDato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[u,g,k(j()),L],fromDate:j().toDate(),toDate:G().toDate()}),e.jsx(D,{name:"antallBarn",label:n.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[u,y,T,x]})]}),r&&e.jsx(W,{size:"small",variant:"info",children:e.jsx(P,{size:"small",children:n.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(d,{name:"termindato",label:n.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[g,k(f()),v(p()),X(s)],fromDate:f().toDate(),toDate:p().toDate(),defaultMonth:new Date})]})]})]})})})};l.initialValues=()=>({erBarnetFodt:void 0});l.transformValues=({antallBarn:a,erBarnetFodt:r,foedselsDato:t,termindato:s,terminbekreftelseDato:o})=>r?{erBarnetFodt:!0,termindato:s,foedselsDato:t,antallBarn:a}:{erBarnetFodt:!1,termindato:s,terminbekreftelseDato:o,antallBarnFraTerminbekreftelse:a};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me={title:"ui-komponenter/termin-og-fodsel",component:l,parameters:{submitCallback:U("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:r}})=>{const t=I();return e.jsx(z,{formMethods:t,onSubmit:s=>r(l.transformValues(s)),children:e.jsxs(F,{gap:"10",children:[e.jsx(l,{...a}),e.jsx(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};var q,h,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var M,S,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const de=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,de as __namedExportsOrder,me as default};
