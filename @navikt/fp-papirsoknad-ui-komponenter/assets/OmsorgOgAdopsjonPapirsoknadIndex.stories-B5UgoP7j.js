import{u as M,r as w,j as e,t as f,O as c,g as N,i as _,l as x,a as B,F as k,b as P,P as h,e as E}from"./iframe-C7Uf29fy.js";import{u as V,a as T,c as I,V as F,b as J,S as G,H as j,R as O,y as A,T as L,m as X,d as $,e as z,B as C}from"./nb_NO-qpdlIGct.js";import{M as v}from"./message-uXFzsY2n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqN738t4.js";const t="omsorg",H="_barnInput_1jjt5_1",K={barnInput:H},U=10,Y=a=>a?_(1)(a):void 0,Q=a=>a?x(10)(a):void 0,D=(a,r)=>n=>{const m=[r].flat().filter(i=>i!==void 0).at(0);if(a===0&&m&&n)return P(n,m)},u=({readOnly:a=!0,familieHendelseType:r,isForeldrepengerFagsak:n,fodselsdatoer:o})=>{const{formatMessage:m}=M(),{control:i,watch:R}=V(),{fields:g,remove:S,append:q}=T({control:i,name:`${t}.foedselsDato`}),p=R(`${t}.antallBarn`)??0;return w.useEffect(()=>{if(g.length>Math.max(p,0))for(let s=g.length;s>p;s-=1)S(s-1);else if(g.length<Math.min(p,U))for(let s=g.length;s<p;s+=1)q({id:s,dato:void 0})},[p]),e.jsx(I,{children:e.jsxs(F,{gap:"space-16",children:[e.jsx(J,{size:"small",level:"3",children:e.jsx(v,{id:r==="ADPSJN"?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),n&&r==="ADPSJN"&&e.jsx(G,{name:`${t}.erEktefellesBarn`,control:i,label:e.jsx(v,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[f],isReadOnly:a,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(O,{value:!0,size:"small",children:e.jsx(v,{id:"Registrering.Adopsjon.Ja"})}),e.jsx(O,{value:!1,size:"small",children:e.jsx(v,{id:"Registrering.Adopsjon.Nei"})})]})}),e.jsx(A,{name:`${t}.omsorgsovertakelsesdato`,control:i,label:m({id:r==="ADPSJN"?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:a,validate:r==="ADPSJN"?[f,c]:[c]}),e.jsx(j,{gap:"space-16",children:e.jsx(L,{name:`${t}.antallBarn`,control:i,label:m({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:a,className:K.barnInput,parse:s=>{const l=Number.parseInt(s.toString(),10);return Number.isNaN(l)?s:l},validate:[...r==="ADPSJN"?[f]:[],N,Y,Q]})}),g.map((s,l)=>e.jsx(B.Fragment,{children:e.jsx(A,{name:`${t}.foedselsDato.${l}.dato`,control:i,isReadOnly:a,validate:r==="ADPSJN"?[f,c,k,D(l,o)]:[c,k,D(l,o)],label:m({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:l+1})})},s.id))]})})};u.initialValues=()=>({[t]:{}});u.transformValues=({omsorg:a})=>({[t]:{...a,foedselsDato:a.foedselsDato&&a.foedselsDato.length>0?a.foedselsDato.map(r=>r.dato):void 0}});u.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ omsorg }: OmsorgOgAdopsjonFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]},alias:"OmsorgOgAdopsjonFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: (string | undefined)[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const W=E(X),d=({readOnly:a,familieHendelseType:r,isForeldrepengerFagsak:n=!1,fodselsdato:o})=>e.jsx(h,{value:W,children:e.jsx(u,{readOnly:a,familieHendelseType:r,isForeldrepengerFagsak:n,fodselsdatoer:o})});d.initialValues=u.initialValues;d.transformValues=u.transformValues;d.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ omsorg }: OmsorgOgAdopsjonFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]},alias:"OmsorgOgAdopsjonFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: (string | undefined)[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}]},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const{action:Z}=__STORYBOOK_MODULE_ACTIONS__,te={title:"ui-komponenter/omsorg-og-adopsjon",component:d,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:Z("onSubmit")},render:(a,{parameters:{submitCallback:r}})=>{const n=$({defaultValues:d.initialValues()});return e.jsx(z,{formMethods:n,onSubmit:o=>r(d.transformValues(o)),children:e.jsxs(F,{gap:"space-40",children:[e.jsx(d,{...a}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},y={args:{familieHendelseType:"FODSL"}},b={args:{familieHendelseType:"ADPSJN"}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: 'FODSL'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: 'ADPSJN'
  }
}`,...b.parameters?.docs?.source}}};const oe=["ForFodsel","ForAdopsjon"];export{b as ForAdopsjon,y as ForFodsel,oe as __namedExportsOrder,te as default};
