import{u as x,r as B,j as e,t as c,O as y,g as S,i as N,l as M,c as h,F as j,e as E,P as V,a as P}from"./iframe-ChRMKlYL.js";import{u as T,a as I,d as J,V as D,b as G,S as L,H as O,R as A,T as F,k as X,m as H,e as $,f as z,B as C}from"./nb_NO-DzlJc8N2.js";import{F as t}from"./familieHendelseType-CLnpSBng.js";import{M as b}from"./message-CEOORhkt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Roa-T-pX.js";const o="omsorg",K="_barnInput_1jjt5_1",U={barnInput:K},Y=10,Q=a=>a?N(1)(a):void 0,W=a=>a?M(10)(a):void 0,q=(a,r)=>n=>{const u=[r].flat().filter(l=>l!==void 0).at(0);if(a===0&&u&&n)return E(n,u)},g=({readOnly:a=!0,familieHendelseType:r,isForeldrepengerFagsak:n,fodselsdatoer:i})=>{const{formatMessage:u}=x(),{control:l,watch:R}=T(),{fields:p,remove:_,append:w}=I({control:l,name:`${o}.foedselsDato`}),f=R(`${o}.antallBarn`)??0;return B.useEffect(()=>{if(p.length>Math.max(f,0))for(let s=p.length;s>f;s-=1)_(s-1);else if(p.length<Math.min(f,Y))for(let s=p.length;s<f;s+=1)w({id:s,dato:void 0})},[f]),e.jsx(J,{children:e.jsxs(D,{gap:"space-16",children:[e.jsx(G,{size:"small",level:"3",children:e.jsx(b,{id:r===t.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),n&&r===t.ADOPSJON&&e.jsx(L,{name:`${o}.erEktefellesBarn`,control:l,label:e.jsx(b,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[c],isReadOnly:a,children:e.jsxs(O,{gap:"space-16",children:[e.jsx(A,{value:!0,size:"small",children:e.jsx(b,{id:"Registrering.Adopsjon.Ja"})}),e.jsx(A,{value:!1,size:"small",children:e.jsx(b,{id:"Registrering.Adopsjon.Nei"})})]})}),e.jsx(F,{name:`${o}.omsorgsovertakelsesdato`,control:l,label:u({id:r===t.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:a,validate:r===t.ADOPSJON?[c,y]:[y]}),e.jsx(O,{gap:"space-16",children:e.jsx(X,{name:`${o}.antallBarn`,control:l,label:u({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:a,className:U.barnInput,parse:s=>{const d=Number.parseInt(s.toString(),10);return Number.isNaN(d)?s:d},validate:[...r===t.ADOPSJON?[c]:[],S,Q,W]})}),p.map((s,d)=>e.jsx(h.Fragment,{children:e.jsx(F,{name:`${o}.foedselsDato.${d}.dato`,control:l,isReadOnly:a,validate:r===t.ADOPSJON?[c,y,j,q(d,i)]:[y,j,q(d,i)],label:u({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:d+1})})},s.id))]})})};g.initialValues=()=>({[o]:{}});g.transformValues=({omsorg:a})=>({[o]:{...a,foedselsDato:a.foedselsDato&&a.foedselsDato.length>0?a.foedselsDato.map(r=>r.dato):void 0}});g.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Z=P(H),m=({readOnly:a,familieHendelseType:r,isForeldrepengerFagsak:n=!1,fodselsdato:i})=>e.jsx(V,{value:Z,children:e.jsx(g,{readOnly:a,familieHendelseType:r,isForeldrepengerFagsak:n,fodselsdatoer:i})});m.initialValues=g.initialValues;m.transformValues=g.transformValues;m.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const{action:ee}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"ui-komponenter/omsorg-og-adopsjon",component:m,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:ee("onSubmit")},render:(a,{parameters:{submitCallback:r}})=>{const n=$({defaultValues:m.initialValues()});return e.jsx(z,{formMethods:n,onSubmit:i=>r(m.transformValues(i)),children:e.jsxs(D,{gap:"space-40",children:[e.jsx(m,{...a}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},k={args:{familieHendelseType:t.FODSEL}},v={args:{familieHendelseType:t.ADOPSJON}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON
  }
}`,...v.parameters?.docs?.source}}};const le=["ForFodsel","ForAdopsjon"];export{v as ForAdopsjon,k as ForFodsel,le as __namedExportsOrder,ie as default};
