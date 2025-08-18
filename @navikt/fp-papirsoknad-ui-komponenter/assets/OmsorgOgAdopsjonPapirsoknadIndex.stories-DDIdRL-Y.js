import{u as w,r as B,j as e,t as y,O as c,g as S,l as N,i as M,c as h,k as O,e as E,P,a as V}from"./iframe-RprA3srk.js";import{u as I,a as T,l as J,V as D,b as G,F as X,H as A,R as q,y as j,d as $,m as H,c as L,D as z,B as C}from"./nb_NO-C9zd2XMQ.js";import{F as n}from"./familieHendelseType-CLnpSBng.js";import{M as k}from"./message-dnWw4qEI.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Bu_OGmsC.js";const t="omsorg",K="_barnInput_1jjt5_1",U={barnInput:K},Y=10,Q=r=>r?N(1)(r):void 0,W=r=>r?M(10)(r):void 0,F=(r,a)=>o=>{if(r===0&&a&&o)return E(o,Array.isArray(a)?a[0]:a)},u=({readOnly:r=!0,familieHendelseType:a,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:f}=w(),{control:m,watch:R}=I(),{fields:g,remove:_,append:x}=T({control:m,name:`${t}.foedselsDato`}),p=R(`${t}.antallBarn`)??0;return B.useEffect(()=>{if(g.length>Math.max(p,0))for(let s=g.length;s>p;s-=1)_(s-1);else if(g.length<Math.min(p,Y))for(let s=g.length;s<p;s+=1)x({id:s,dato:void 0})},[p]),e.jsx(J,{children:e.jsxs(D,{gap:"space-16",children:[e.jsx(G,{size:"small",level:"3",children:e.jsx(k,{id:a===n.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),o&&a===n.ADOPSJON&&e.jsx(X,{name:`${t}.erEktefellesBarn`,control:m,label:e.jsx(k,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[y],isReadOnly:r,children:e.jsxs(A,{gap:"space-16",children:[e.jsx(q,{value:!0,size:"small",children:e.jsx(k,{id:"Registrering.Adopsjon.Ja"})}),e.jsx(q,{value:!1,size:"small",children:e.jsx(k,{id:"Registrering.Adopsjon.Nei"})})]})}),e.jsx(j,{name:`${t}.omsorgsovertakelsesdato`,control:m,label:f({id:a===n.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:r,validate:a===n.ADOPSJON?[y,c]:[c]}),e.jsxs(A,{gap:"space-16",children:[a===n.ADOPSJON&&e.jsx(j,{name:`${t}.ankomstdato`,control:m,label:f({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:r,validate:[c]}),e.jsx($,{name:`${t}.antallBarn`,control:m,label:f({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:r,className:U.barnInput,parse:s=>{const i=parseInt(s.toString(),10);return Number.isNaN(i)?s:i},validate:[...a===n.ADOPSJON?[y]:[],S,Q,W]})]}),g.map((s,i)=>e.jsx(h.Fragment,{children:e.jsx(j,{name:`${t}.foedselsDato.${i}.dato`,control:m,isReadOnly:r,validate:a===n.ADOPSJON?[y,c,O,F(i,d)]:[c,O,F(i,d)],label:f({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:i+1})})},s.id))]})})};u.initialValues=()=>({[t]:{}});u.transformValues=({omsorg:r})=>({[t]:{...r,foedselsDato:r.foedselsDato&&r.foedselsDato.length>0?r.foedselsDato.map(a=>a.dato):void 0}});u.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Z=V(H),l=({readOnly:r,familieHendelseType:a,isForeldrepengerFagsak:o=!1,fodselsdato:d})=>e.jsx(P,{value:Z,children:e.jsx(u,{readOnly:r,familieHendelseType:a,isForeldrepengerFagsak:o,fodselsdatoer:d})});l.initialValues=u.initialValues;l.transformValues=u.transformValues;l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const{action:ee}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"ui-komponenter/omsorg-og-adopsjon",component:l,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:ee("onSubmit")},render:(r,{parameters:{submitCallback:a}})=>{const o=L({defaultValues:l.initialValues()});return e.jsx(z,{formMethods:o,onSubmit:d=>a(l.transformValues(d)),children:e.jsxs(D,{gap:"space-40",children:[e.jsx(l,{...r}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},b={args:{familieHendelseType:n.FODSEL}},v={args:{familieHendelseType:n.ADOPSJON}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON
  }
}`,...v.parameters?.docs?.source}}};const le=["ForFodsel","ForAdopsjon"];export{v as ForAdopsjon,b as ForFodsel,le as __namedExportsOrder,ie as default};
