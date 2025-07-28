import{u as f,r as h,j as e,t as p,i as w,H as Y,K as H,a as P,P as C}from"./iframe-DYORZiXE.js";import{u as L,a as D,i as V,$ as z,O as K,P as c,A as M,B as b,j as X,k as U,V as v,H as W,E as q,n as J,l as Q,b as R,W as j,m as Z,d as ee,N as re}from"./nb_NO-C4hDyxYQ.js";import{T as k}from"./TrueFalseInput-C22oDIIj.js";import{F as ne}from"./FieldArrayRow-DqAPu2Od.js";import{T as g,S as te}from"./Table-fFElO6QP.js";import{S as ie}from"./Trash-Daj_wZMh.js";import{M as m}from"./message-BkRwhc4P.js";import"./index-DEkgERyQ.js";var T=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(T||{});const t="tilretteleggingArbeidsforhold",N="tilretteleggingForArbeidsgiver",se="tilretteleggingSelvstendigNaringsdrivende",ae="tilretteleggingFrilans",le="tilretteleggingArbeidsgiver",oe=w(100),x={tilretteleggingType:"",dato:"",stillingsprosent:""},y=({readOnly:r,name:i})=>{const n=f(),{control:s}=L(),{fields:a,remove:l,append:d}=D({control:s,name:i});return h.useEffect(()=>{a.length===0&&d(x)},[]),e.jsx(V,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(z,{fields:a,emptyPeriodTemplate:x,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:l,children:(u,o)=>e.jsxs(ne,{readOnly:r,remove:l,index:o,children:[e.jsx(K,{name:`${i}.${o}.tilretteleggingType`,control:s,readOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[p],selectValues:[e.jsx("option",{value:T.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},T.HEL_TILRETTELEGGING),e.jsx("option",{value:T.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},T.DELVIS_TILRETTELEGGING),e.jsx("option",{value:T.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},T.INGEN_TILRETTELEGGING)]}),e.jsx(c,{name:`${i}.${o}.dato`,control:s,isReadOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[p]}),e.jsx(M,{readOnly:r,control:s,name:`${i}.${o}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[p,oe],maxLength:99})]},u.id)})})};y.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const A=`${t}.${N}`,ge=r=>`${A}.${r}`,B=({open:r,readOnly:i=!1,index:n,remove:s})=>{const{getFieldState:a,watch:l,control:d}=L(),{error:u}=a(`${A}.${n}`),o=l(`${A}.${n}.organisasjonsnummer`),[E,O]=h.useState(r),S=f();return e.jsxs(g.Row,{shadeOnHover:!1,style:{backgroundColor:u&&!E?"var(--a-red-50)":"none"},children:[e.jsx(g.DataCell,{valign:"top",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:()=>O(G=>!G),icon:E?e.jsx(te,{"aria-label":"Vis mindre"}):e.jsx(X,{"aria-label":"Vis mer"})})}),e.jsxs(g.DataCell,{valign:"top",children:[e.jsx(V,{hidden:E,paddingBlock:"3",children:e.jsx(U,{weight:"semibold",children:o})}),e.jsxs(v,{gap:"4",hidden:!E,children:[e.jsxs(W,{gap:"4",children:[e.jsx(M,{name:`${A}.${n}.organisasjonsnummer`,control:d,readOnly:i,label:S.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[p,G=>Y(G.toString()),H],maxLength:99}),e.jsx(c,{name:`${A}.${n}.behovsdato`,control:d,label:S.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[p],isReadOnly:i})]}),e.jsx(y,{name:`${ge(n)}.${le}`,readOnly:i})]})]}),e.jsx(g.DataCell,{valign:"top",align:"right",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:s,onKeyDown:s,icon:e.jsx(ie,{"aria-label":"Slett rad"})})})]})};B.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const de={organisasjonsnummer:"",behovsdato:""},ue=`${t}.${N}`,$=({readOnly:r})=>{const i=f(),{control:n,formState:{errors:s}}=L(),{fields:a,append:l,remove:d}=D({control:n,name:ue,rules:{required:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),u=()=>{l(de)};return h.useEffect(()=>{a.length===0&&u()},[]),e.jsxs(v,{gap:"4",children:[e.jsxs(g,{children:[e.jsx(g.Header,{children:e.jsxs(g.Row,{children:[e.jsx(g.HeaderCell,{style:{width:"48px"}}),e.jsx(g.HeaderCell,{children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(g.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(g.Body,{children:a.map((o,E)=>e.jsx(B,{index:E,open:E+1===a.length,remove:()=>d(E),readOnly:r},o.id))})]}),s[t]?.[N]?.root?.message&&e.jsx(q,{children:s[t]?.[N].root?.message}),e.jsx("div",{children:e.jsx(b,{size:"small",variant:"tertiary",onClick:u,type:"button",icon:e.jsx(J,{"aria-hidden":!0}),children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};$.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ee=r=>{const i=[];return r?.sokForArbeidsgiver&&r?.tilretteleggingForArbeidsgiver&&i.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r?.sokForFrilans&&i.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r?.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),i},_=P(Z),F=({readOnly:r})=>{const{watch:i,setError:n,clearErrors:s,formState:a,control:l}=L(),[d,u,o]=i([`${t}.sokForSelvstendigNaringsdrivende`,`${t}.sokForFrilans`,`${t}.sokForArbeidsgiver`]);return h.useEffect(()=>{!d&&!u&&!o?n(`${t}.notRegisteredInput`,{type:"custom",message:_.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):s(`${t}.notRegisteredInput`)},[d,u,o]),e.jsx(C,{value:_,children:e.jsx(Q,{children:e.jsxs(v,{gap:"4",children:[e.jsx(R,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&a.errors[t]?.notRegisteredInput?.message&&e.jsx(q,{children:a.errors[t]?.notRegisteredInput?.message}),e.jsx(k,{name:`${t}.sokForSelvstendigNaringsdrivende`,control:l,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(j,{marginTop:4,children:e.jsxs(v,{gap:"4",children:[e.jsx(R,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(c,{name:`${t}.behovsdatoSN`,control:l,label:_.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[p],isReadOnly:r}),e.jsx(y,{name:`${t}.${se}`,readOnly:r})]})})}),e.jsx(k,{name:`${t}.sokForFrilans`,control:l,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(j,{marginTop:4,children:e.jsxs(v,{gap:"4",children:[e.jsx(R,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(c,{name:`${t}.behovsdatoFrilans`,control:l,label:_.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[p],isReadOnly:r}),e.jsx(y,{name:`${t}.${ae}`,readOnly:r})]})})}),e.jsx(k,{name:`${t}.sokForArbeidsgiver`,control:l,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(j,{marginTop:4,children:e.jsxs(v,{gap:"4",children:[e.jsx(R,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx($,{readOnly:r})]})})})]})})})};F.initialValues=()=>({[t]:{}});F.transformValues=({tilretteleggingArbeidsforhold:r})=>({[t]:Ee(r)});F.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ tilretteleggingArbeidsforhold }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:me}=__STORYBOOK_MODULE_ACTIONS__,ce={title:"ui-komponenter/tilrettelegging-svp",component:F,parameters:{submitCallback:me("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:i}})=>{const n=ee({defaultValues:F.initialValues()});return e.jsx(re,{formMethods:n,onSubmit:s=>i(F.transformValues(s)),children:e.jsxs(v,{gap:"10",children:[e.jsx(F,{...r}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},I={};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"{}",...I.parameters?.docs?.source}}};const be=["Default"];export{I as Default,be as __namedExportsOrder,ce as default};
