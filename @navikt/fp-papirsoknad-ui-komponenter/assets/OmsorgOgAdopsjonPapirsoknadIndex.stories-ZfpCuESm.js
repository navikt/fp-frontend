import{u as _,r as w,j as a,t as y,O as c,g as B,l as N,i as S,c as M,k as O,e as x,P,a as E}from"./iframe-Cvu0XLKM.js";import{u as V,a as h,l as I,V as q,b as T,M as J,P as v,H as G,A as X,m as $,d as H,N as L,B as z}from"./nb_NO-BEcvUEy0.js";import{F as n}from"./familieHendelseType-CLnpSBng.js";import{M as j}from"./message-DgZdv3_M.js";import"./index-lGl9NmSx.js";const t="omsorg",K="_barnInput_1jjt5_1",C={barnInput:K},U=10,Y=e=>e?N(1)(e):void 0,Q=e=>e?S(10)(e):void 0,A=(e,r)=>o=>{if(e===0&&r&&o)return x(o,Array.isArray(r)?r[0]:r)},g=({readOnly:e=!0,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:m}=_(),{control:u,watch:F}=V(),{fields:p,remove:D,append:R}=h({control:u,name:`${t}.foedselsDato`}),f=F(`${t}.antallBarn`)??0;return w.useEffect(()=>{if(p.length>Math.max(f,0))for(let s=p.length;s>f;s-=1)D(s-1);else if(p.length<Math.min(f,U))for(let s=p.length;s<f;s+=1)R({id:s,dato:void 0})},[f]),a.jsx(I,{children:a.jsxs(q,{gap:"space-16",children:[a.jsx(T,{size:"small",level:"3",children:a.jsx(j,{id:r===n.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),o&&r===n.ADOPSJON&&a.jsx(J,{name:`${t}.erEktefellesBarn`,control:u,label:a.jsx(j,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[y],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:m({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:m({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),a.jsx(v,{name:`${t}.omsorgsovertakelsesdato`,control:u,label:m({id:r===n.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:r===n.ADOPSJON?[y,c]:[c]}),a.jsxs(G,{gap:"space-16",children:[r===n.ADOPSJON&&a.jsx(v,{name:`${t}.ankomstdato`,control:u,label:m({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[c]}),a.jsx(X,{name:`${t}.antallBarn`,control:u,label:m({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:C.barnInput,parse:s=>{const i=parseInt(s.toString(),10);return Number.isNaN(i)?s:i},validate:[...r===n.ADOPSJON?[y]:[],B,Y,Q]})]}),p.map((s,i)=>a.jsx(M.Fragment,{children:a.jsx(v,{name:`${t}.foedselsDato.${i}.dato`,control:u,isReadOnly:e,validate:r===n.ADOPSJON?[y,c,O,A(i,d)]:[c,O,A(i,d)],label:m({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:i+1})})},s.id))]})})};g.initialValues=()=>({[t]:{}});g.transformValues=({omsorg:e})=>({[t]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(r=>r.dato):void 0}});g.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const W=E($),l=({readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:o=!1,fodselsdato:d})=>a.jsx(P,{value:W,children:a.jsx(g,{readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:d})});l.initialValues=g.initialValues;l.transformValues=g.transformValues;l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const{action:Z}=__STORYBOOK_MODULE_ACTIONS__,te={title:"ui-komponenter/omsorg-og-adopsjon",component:l,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:Z("onSubmit")},render:(e,{parameters:{submitCallback:r}})=>{const o=H({defaultValues:l.initialValues()});return a.jsx(L,{formMethods:o,onSubmit:d=>r(l.transformValues(d)),children:a.jsxs(q,{gap:"space-40",children:[a.jsx(l,{...e}),a.jsx(z,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},b={args:{familieHendelseType:n.FODSEL}},k={args:{familieHendelseType:n.ADOPSJON}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON
  }
}`,...k.parameters?.docs?.source}}};const oe=["ForFodsel","ForAdopsjon"];export{k as ForAdopsjon,b as ForFodsel,oe as __namedExportsOrder,te as default};
