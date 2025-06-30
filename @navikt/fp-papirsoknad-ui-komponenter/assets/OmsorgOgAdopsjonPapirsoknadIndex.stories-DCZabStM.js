import{u as x,r as P,j as a,R as E,P as V,a as h}from"./iframe-PSLltoVy.js";import{u as I,a as T,l as J,V as B,b as G,M as X,P as v,H as $,A as H,m as L,c as z,N as K,B as C}from"./nb_NO-CwdsBB97.js";import{F as n}from"./familieHendelseType-CLnpSBng.js";import{t as y,O as f,g as U,l as Y,i as Q,k as O,R as W}from"./index.es-0tMb955Z.js";import{M as j}from"./message-B3oE8p95.js";import"./index-CmUVxGlo.js";const t="omsorg",Z="_barnInput_1jjt5_1",ee={barnInput:Z},re=10,ae=e=>e?Y(1)(e):void 0,se=e=>e?Q(10)(e):void 0,A=(e,r)=>o=>{if(e===0&&r&&o)return W(o,Array.isArray(r)?r[0]:r)},u=({readOnly:e=!0,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:m}=x(),{control:c,watch:N}=I(),{fields:g,remove:S,append:M}=T({control:c,name:`${t}.foedselsDato`}),p=N(`${t}.antallBarn`)??0;return P.useEffect(()=>{if(g.length>Math.max(p,0))for(let s=g.length;s>p;s-=1)S(s-1);else if(g.length<Math.min(p,re))for(let s=g.length;s<p;s+=1)M({id:s,dato:void 0})},[p]),a.jsx(J,{children:a.jsxs(B,{gap:"4",children:[a.jsx(G,{size:"small",children:a.jsx(j,{id:r===n.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),o&&r===n.ADOPSJON&&a.jsx(X,{name:`${t}.erEktefellesBarn`,label:a.jsx(j,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[y],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:m({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:m({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),a.jsx(v,{name:`${t}.omsorgsovertakelsesdato`,control:c,label:m({id:r===n.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:r===n.ADOPSJON?[y,f]:[f]}),a.jsxs($,{gap:"4",children:[r===n.ADOPSJON&&a.jsx(v,{name:`${t}.ankomstdato`,label:m({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[f]}),a.jsx(H,{name:`${t}.antallBarn`,control:c,label:m({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:ee.barnInput,parse:s=>{const i=parseInt(s.toString(),10);return Number.isNaN(i)?s:i},validate:[...r===n.ADOPSJON?[y]:[],U,ae,se]})]}),g.map((s,i)=>a.jsx(E.Fragment,{children:a.jsx(v,{name:`${t}.foedselsDato.${i}.dato`,control:c,isReadOnly:e,validate:r===n.ADOPSJON?[y,f,O,A(i,d)]:[f,O,A(i,d)],label:m({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:i+1})})},s.id))]})})};u.initialValues=()=>({[t]:{}});u.transformValues=({omsorg:e})=>({[t]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(r=>r.dato):void 0}});u.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const ne=h(L),l=({readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:o=!1,fodselsdato:d})=>a.jsx(V,{value:ne,children:a.jsx(u,{readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:o,fodselsdatoer:d})});l.initialValues=u.initialValues;l.transformValues=u.transformValues;l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const{action:te}=__STORYBOOK_MODULE_ACTIONS__,ge={title:"ui-komponenter/omsorg-og-adopsjon",component:l,args:{isForeldrepengerFagsak:!1,fodselsdato:"2022-05-27",readOnly:!1},parameters:{submitCallback:te("onSubmit")},render:(e,{parameters:{submitCallback:r}})=>{const o=z({defaultValues:l.initialValues()});return a.jsx(K,{formMethods:o,onSubmit:d=>r(l.transformValues(d)),children:a.jsxs(B,{gap:"10",children:[a.jsx(l,{...e}),a.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},b={args:{familieHendelseType:n.FODSEL}},k={args:{familieHendelseType:n.ADOPSJON}};var q,F,D;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL
  }
}`,...(D=(F=b.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var R,_,w;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON
  }
}`,...(w=(_=k.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const pe=["ForFodsel","ForAdopsjon"];export{k as ForAdopsjon,b as ForFodsel,pe as __namedExportsOrder,ge as default};
