import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{i as _,f as P,l as V,a as E,V as B,b as h,M as v,J as I,G as k,H as T,X as J,P as G,n as X,m as $,c as H,e as L,B as z}from"./nb_NO-CoA8CYxJ.js";import{e as c,O as f,g as K,l as C,i as Q,I as j,R as U,a as W}from"./index.es-BXKFxR2z.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as n}from"./familieHendelseType-CLnpSBng.js";import{r as Y,R as Z}from"./index-_2TAQcTa.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";const t="omsorg",ee="_barnInput_1jjt5_1",re={barnInput:ee},ae=10,se=e=>e?C(1)(e):void 0,ne=e=>e?Q(10)(e):void 0,O=(e,r)=>o=>{if(e===0&&r&&o)return U(o,Array.isArray(r)?r[0]:r)},u=({readOnly:e=!0,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:m}=_(),{control:S,watch:N}=P(),{fields:g,remove:x,append:M}=V({control:S,name:`${t}.foedselsDato`}),p=N(`${t}.antallBarn`)??0;return Y.useEffect(()=>{if(g.length>Math.max(p,0))for(let s=g.length;s>p;s-=1)x(s-1);else if(g.length<Math.min(p,ae))for(let s=g.length;s<p;s+=1)M({id:s,dato:void 0})},[p]),a.jsx(E,{children:a.jsxs(B,{gap:"4",children:[a.jsx(h,{size:"small",children:a.jsx(v,{id:r===n.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),o&&r===n.ADOPSJON&&a.jsx(I,{name:`${t}.erEktefellesBarn`,label:a.jsx(v,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[c],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:m({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:m({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),a.jsx(k,{name:`${t}.omsorgsovertakelsesdato`,label:m({id:r===n.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:r===n.ADOPSJON?[c,f]:[f]}),a.jsxs(T,{gap:"4",children:[r===n.ADOPSJON&&a.jsx(k,{name:`${t}.ankomstdato`,label:m({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[f]}),a.jsx(J,{name:`${t}.antallBarn`,label:m({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:re.barnInput,parse:s=>{const i=parseInt(s.toString(),10);return Number.isNaN(i)?s:i},validate:[...r===n.ADOPSJON?[c]:[],K,se,ne]})]}),g.map((s,i)=>a.jsx(Z.Fragment,{children:a.jsx(k,{name:`${t}.foedselsDato.${i}.dato`,isReadOnly:e,validate:r===n.ADOPSJON?[c,f,j,O(i,d)]:[f,j,O(i,d)],label:m({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:i+1})})},s.id))]})})};u.initialValues=()=>({[t]:{}});u.transformValues=({omsorg:e})=>({[t]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(r=>r.dato):void 0}});u.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const te=X($),l=({readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:o=!1,fodselsdato:d})=>a.jsx(G,{value:te,children:a.jsx(u,{readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:d})});l.initialValues=u.initialValues;l.transformValues=u.transformValues;l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const be={title:"ui-komponenter/omsorg-og-adopsjon",component:l,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:W("onSubmit")},render:(e,{parameters:{submitCallback:r}})=>{const o=H({defaultValues:l.initialValues()});return a.jsx(L,{formMethods:o,onSubmit:d=>r(l.transformValues(d)),children:a.jsxs(B,{gap:"10",children:[a.jsx(l,{...e}),a.jsx(z,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},y={args:{familieHendelseType:n.FODSEL}},b={args:{familieHendelseType:n.ADOPSJON}};var A,q,F;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL
  }
}`,...(F=(q=y.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var D,R,w;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON
  }
}`,...(w=(R=b.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const ke=["ForFodsel","ForAdopsjon"];export{b as ForAdopsjon,y as ForFodsel,ke as __namedExportsOrder,be as default};
