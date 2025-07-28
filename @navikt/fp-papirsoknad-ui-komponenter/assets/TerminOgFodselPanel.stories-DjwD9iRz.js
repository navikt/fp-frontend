import{j as e,P as q,a as h,t as d,O as u,J as F,V as D,n as g,p as f,g as v,v as T,q as y,s as M,x as R,z as S,A as x,k as V,B as A,C as _}from"./iframe-ChCszL4i.js";import{u as w,l as E,V as B,b as N,M as I,H as j,P as p,A as O,L as P,m as z,d as C,N as L,B as H}from"./nb_NO-OoPiwMTG.js";import{A as J}from"./Alert-M8-FoWr5.js";import"./index-DylFhEll.js";const r=h(z),K=a=>t=>{const n=a("foedselsDato");return _(n,t)},U=a=>t=>{const n=a("termindato");return A(n,t)},o=({readOnly:a,erForeldrepenger:t=!1})=>{const{watch:n,getValues:l,control:s}=w(),k=n("erBarnetFodt");return e.jsx(q,{value:r,children:e.jsx(E,{children:e.jsxs(B,{gap:"4",children:[e.jsx(N,{size:"small",children:r.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),e.jsx(I,{name:"erBarnetFodt",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[d],isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:r.formatMessage({id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]}),k!==void 0&&e.jsxs(B,{gap:"4",children:[k===!1&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{gap:"4",children:[e.jsx(p,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date,validate:[d,u,F(f()),D(g())]}),e.jsx(O,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return isNaN(m)?i:m},validate:[d,v,T,y]})]}),e.jsx(p,{name:"terminbekreftelseDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:a,fromDate:R().toDate(),toDate:M().toDate(),defaultMonth:new Date,validate:[u,U(l)]})]}),k===!0&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{gap:"4",children:[e.jsx(p,{name:"foedselsDato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:a,validate:[d,u,F(x()),V],fromDate:x().toDate(),toDate:S().toDate()}),e.jsx(O,{name:"antallBarn",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:a,parse:i=>{const m=parseInt(i.toString(),10);return Number.isNaN(m)?i:m},validate:[d,v,T,y]})]}),t&&e.jsx(J,{size:"small",variant:"info",children:e.jsx(P,{size:"small",children:r.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),e.jsx(p,{name:"termindato",control:s,label:r.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:a,validate:[u,F(f()),D(g()),K(l)],fromDate:f().toDate(),toDate:g().toDate(),defaultMonth:new Date})]})]})]})})})};o.initialValues=()=>({erBarnetFodt:void 0});o.transformValues=({antallBarn:a,erBarnetFodt:t,foedselsDato:n,termindato:l,terminbekreftelseDato:s})=>t?{erBarnetFodt:!0,termindato:l,foedselsDato:n,antallBarn:a}:{erBarnetFodt:!1,termindato:l,terminbekreftelseDato:s,antallBarnFraTerminbekreftelse:a};o.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:Y}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"ui-komponenter/termin-og-fodsel",component:o,parameters:{submitCallback:Y("onSubmit")},args:{readOnly:!1},render:(a,{parameters:{submitCallback:t}})=>{const n=C();return e.jsx(L,{formMethods:n,onSubmit:l=>t(o.transformValues(l)),children:e.jsxs(B,{gap:"10",children:[e.jsx(o,{...a}),e.jsx(H,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erForeldrepenger:!0}},b={args:{erForeldrepenger:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: true
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    erForeldrepenger: false
  }
}`,...b.parameters?.docs?.source}}};const $=["ForeldrepengeSak","ErIkkeForeldrepengeSak"];export{b as ErIkkeForeldrepengeSak,c as ForeldrepengeSak,$ as __namedExportsOrder,Z as default};
