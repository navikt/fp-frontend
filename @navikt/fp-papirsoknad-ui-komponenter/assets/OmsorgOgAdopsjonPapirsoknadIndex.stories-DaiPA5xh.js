import{u as S,r as w,j as e,t as y,O as c,g as B,i as N,l as M,c as h,F as O,e as E,P,a as V}from"./iframe-XpiojukZ.js";import{u as I,a as T,d as J,V as D,b as G,S as L,H as A,R as F,T as j,k as X,m as $,e as H,f as z,B as C}from"./nb_NO-CkCIHybU.js";import{F as n}from"./familieHendelseType-CLnpSBng.js";import{M as b}from"./message-OUcHQrCx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AnHLdE_1.js";const t="omsorg",K="_barnInput_1jjt5_1",U={barnInput:K},Y=10,Q=a=>a?N(1)(a):void 0,W=a=>a?M(10)(a):void 0,q=(a,r)=>o=>{const d=[r].flat().filter(i=>i!==void 0).at(0);if(a===0&&d&&o)return E(o,d)},g=({readOnly:a=!0,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:l})=>{const{formatMessage:d}=S(),{control:i,watch:R}=I(),{fields:p,remove:_,append:x}=T({control:i,name:`${t}.foedselsDato`}),f=R(`${t}.antallBarn`)??0;return w.useEffect(()=>{if(p.length>Math.max(f,0))for(let s=p.length;s>f;s-=1)_(s-1);else if(p.length<Math.min(f,Y))for(let s=p.length;s<f;s+=1)x({id:s,dato:void 0})},[f]),e.jsx(J,{children:e.jsxs(D,{gap:"space-16",children:[e.jsx(G,{size:"small",level:"3",children:e.jsx(b,{id:r===n.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),o&&r===n.ADOPSJON&&e.jsx(L,{name:`${t}.erEktefellesBarn`,control:i,label:e.jsx(b,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[y],isReadOnly:a,children:e.jsxs(A,{gap:"space-16",children:[e.jsx(F,{value:!0,size:"small",children:e.jsx(b,{id:"Registrering.Adopsjon.Ja"})}),e.jsx(F,{value:!1,size:"small",children:e.jsx(b,{id:"Registrering.Adopsjon.Nei"})})]})}),e.jsx(j,{name:`${t}.omsorgsovertakelsesdato`,control:i,label:d({id:r===n.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:a,validate:r===n.ADOPSJON?[y,c]:[c]}),e.jsxs(A,{gap:"space-16",children:[r===n.ADOPSJON&&e.jsx(j,{name:`${t}.ankomstdato`,control:i,label:d({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:a,validate:[c]}),e.jsx(X,{name:`${t}.antallBarn`,control:i,label:d({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:a,className:U.barnInput,parse:s=>{const m=Number.parseInt(s.toString(),10);return Number.isNaN(m)?s:m},validate:[...r===n.ADOPSJON?[y]:[],B,Q,W]})]}),p.map((s,m)=>e.jsx(h.Fragment,{children:e.jsx(j,{name:`${t}.foedselsDato.${m}.dato`,control:i,isReadOnly:a,validate:r===n.ADOPSJON?[y,c,O,q(m,l)]:[c,O,q(m,l)],label:d({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:m+1})})},s.id))]})})};g.initialValues=()=>({[t]:{}});g.transformValues=({omsorg:a})=>({[t]:{...a,foedselsDato:a.foedselsDato&&a.foedselsDato.length>0?a.foedselsDato.map(r=>r.dato):void 0}});g.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Z=V($),u=({readOnly:a,familieHendelseType:r,isForeldrepengerFagsak:o=!1,fodselsdato:l})=>e.jsx(P,{value:Z,children:e.jsx(g,{readOnly:a,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:l})});u.initialValues=g.initialValues;u.transformValues=g.transformValues;u.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const{action:ee}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"ui-komponenter/omsorg-og-adopsjon",component:u,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:ee("onSubmit")},render:(a,{parameters:{submitCallback:r}})=>{const o=H({defaultValues:u.initialValues()});return e.jsx(z,{formMethods:o,onSubmit:l=>r(u.transformValues(l)),children:e.jsxs(D,{gap:"space-40",children:[e.jsx(u,{...a}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},k={args:{familieHendelseType:n.FODSEL}},v={args:{familieHendelseType:n.ADOPSJON}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON
  }
}`,...v.parameters?.docs?.source}}};const le=["ForFodsel","ForAdopsjon"];export{v as ForAdopsjon,k as ForFodsel,le as __namedExportsOrder,ie as default};
