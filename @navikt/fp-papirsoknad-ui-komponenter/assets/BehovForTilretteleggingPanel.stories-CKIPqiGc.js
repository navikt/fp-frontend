import{u as f,r as h,j as e,t as p,l as $,E as O,G as Y,e as P,P as H}from"./iframe-JigLZSyW.js";import{u as y,a as x,l as D,P as C,w as z,y as b,T as M,B as c,n as K,o as X,V as v,H as U,E as V,c as J,b as A,U as j,m as Q,d as W,e as Z}from"./nb_NO-Bkbsqolb.js";import{T as G}from"./TrueFalseInput-DPtvJg_b.js";import{F as ee}from"./FieldArrayRow-C4ZN7gdI.js";import{T as o,S as re,a as ne,b as te}from"./Table-hRz4blgf.js";import{M as E}from"./message-B7N5HCv3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkJyxLsq.js";const t="tilretteleggingArbeidsforhold",I="tilretteleggingForArbeidsgiver",ie="tilretteleggingSelvstendigNaringsdrivende",se="tilretteleggingFrilans",ae="tilretteleggingArbeidsgiver",le=$(100),S={tilretteleggingType:"",dato:"",stillingsprosent:""},N=({readOnly:r,name:i})=>{const n=f(),{control:s}=y(),{fields:a,remove:l,append:d}=x({control:s,name:i});return h.useEffect(()=>{a.length===0&&d(S)},[]),e.jsx(D.New,{background:"brand-blue-moderateA",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(C,{fields:a,emptyTemplate:S,addButtonText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:l,children:(u,g)=>e.jsxs(ee,{readOnly:r,remove:l,index:g,children:[e.jsx(z,{name:`${i}.${g}.tilretteleggingType`,control:s,readOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[p],selectValues:[e.jsx("option",{value:"HEL_TILRETTELEGGING",children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},"HEL_TILRETTELEGGING"),e.jsx("option",{value:"DELVIS_TILRETTELEGGING",children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},"DELVIS_TILRETTELEGGING"),e.jsx("option",{value:"INGEN_TILRETTELEGGING",children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},"INGEN_TILRETTELEGGING")]}),e.jsx(b,{name:`${i}.${g}.dato`,control:s,isReadOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[p]}),e.jsx(M,{readOnly:r,control:s,name:`${i}.${g}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[p,le],maxLength:99})]},u.id)})})};N.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"union",raw:"| 'tilretteleggingArbeidsforhold.tilretteleggingFrilans'\n| 'tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende'\n| `tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.${number}.tilretteleggingArbeidsgiver`",elements:[{name:"literal",value:"'tilretteleggingArbeidsforhold.tilretteleggingFrilans'"},{name:"literal",value:"'tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende'"},{name:"literal",value:"`tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.${number}.tilretteleggingArbeidsgiver`"}]},description:""}}};const T=`${t}.${I}`,q=({open:r,readOnly:i=!1,index:n,remove:s})=>{const{getFieldState:a,watch:l,control:d}=y(),{error:u}=a(`${T}.${n}`),g=l(`${T}.${n}.organisasjonsnummer`),[m,w]=h.useState(r),k=f();return e.jsxs(o.Row,{shadeOnHover:!1,style:{backgroundColor:u&&!m?"var(--ax-danger-100)":"none"},children:[e.jsx(o.DataCell,{valign:"top",children:e.jsx(c,{type:"button",variant:"tertiary-neutral",onClick:()=>w(L=>!L),icon:m?e.jsx(re,{"aria-label":"Vis mindre"}):e.jsx(K,{"aria-label":"Vis mer"})})}),e.jsxs(o.DataCell,{valign:"top",children:[e.jsx(D.New,{hidden:m,paddingBlock:"3",children:e.jsx(X,{weight:"semibold",children:g})}),e.jsxs(v,{gap:"space-16",hidden:!m,children:[e.jsxs(U,{gap:"space-16",children:[e.jsx(M,{name:`${T}.${n}.organisasjonsnummer`,control:d,readOnly:i,label:k.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[p,L=>O(L.toString()),Y],maxLength:99}),e.jsx(b,{name:`${T}.${n}.behovsdato`,control:d,label:k.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[p],isReadOnly:i})]}),e.jsx(N,{name:`${T}.${n}.${ae}`,readOnly:i})]})]}),e.jsx(o.DataCell,{valign:"top",align:"right",children:e.jsx(c,{type:"button",variant:"tertiary-neutral",onClick:s,onKeyDown:s,icon:e.jsx(ne,{"aria-label":"Slett rad"})})})]})};q.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const ge={organisasjonsnummer:"",behovsdato:""},oe=`${t}.${I}`,B=({readOnly:r})=>{const i=f(),{control:n,formState:{errors:s}}=y(),{fields:a,append:l,remove:d}=x({control:n,name:oe,rules:{required:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),u=()=>{l(ge)};return h.useEffect(()=>{a.length===0&&u()},[]),e.jsxs(v,{gap:"space-16",children:[e.jsxs(o,{children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{style:{width:"48px"}}),e.jsx(o.HeaderCell,{children:e.jsx(E,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(o.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(o.Body,{children:a.map((g,m)=>e.jsx(q,{index:m,open:m+1===a.length,remove:()=>d(m),readOnly:r},g.id))})]}),s[t]?.[I]?.root?.message&&e.jsx(V,{children:s[t][I].root.message}),e.jsx("div",{children:e.jsx(c,{size:"small",variant:"tertiary",onClick:u,type:"button",icon:e.jsx(te,{"aria-hidden":!0}),children:e.jsx(E,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};B.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const de=r=>{const i=[];return r?.sokForArbeidsgiver&&r?.tilretteleggingForArbeidsgiver&&i.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r?.sokForFrilans&&i.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r?.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),i},R=P(Q),F=({readOnly:r})=>{const{watch:i,setError:n,clearErrors:s,formState:a,control:l}=y(),[d,u,g]=i([`${t}.sokForSelvstendigNaringsdrivende`,`${t}.sokForFrilans`,`${t}.sokForArbeidsgiver`]);return h.useEffect(()=>{!d&&!u&&!g?n(`${t}.notRegisteredInput`,{type:"custom",message:R.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):s(`${t}.notRegisteredInput`)},[d,u,g]),e.jsx(H,{value:R,children:e.jsx(J,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"3",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&a.errors[t]?.notRegisteredInput?.message&&e.jsx(V,{children:a.errors[t].notRegisteredInput.message}),e.jsx(G,{name:`${t}.sokForSelvstendigNaringsdrivende`,control:l,label:e.jsx(E,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(j,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"4",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(b,{name:`${t}.behovsdatoSN`,control:l,label:R.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[p],isReadOnly:r}),e.jsx(N,{name:`${t}.${ie}`,readOnly:r})]})})}),e.jsx(G,{name:`${t}.sokForFrilans`,control:l,label:e.jsx(E,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(j,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"4",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(b,{name:`${t}.behovsdatoFrilans`,control:l,label:R.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[p],isReadOnly:r}),e.jsx(N,{name:`${t}.${se}`,readOnly:r})]})})}),e.jsx(G,{name:`${t}.sokForArbeidsgiver`,control:l,label:e.jsx(E,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(j,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"4",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx(B,{readOnly:r})]})})})]})})})};F.initialValues=()=>({[t]:{}});F.transformValues=({tilretteleggingArbeidsforhold:r})=>({[t]:de(r)});F.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:ue}=__STORYBOOK_MODULE_ACTIONS__,_e={title:"ui-komponenter/tilrettelegging-svp",component:F,parameters:{submitCallback:ue("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:i}})=>{const n=W({defaultValues:F.initialValues()});return e.jsx(Z,{formMethods:n,onSubmit:s=>i(F.transformValues(s)),children:e.jsxs(v,{gap:"space-40",children:[e.jsx(F,{...r}),e.jsx(c,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},_={};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"{}",..._.parameters?.docs?.source}}};const be=["Default"];export{_ as Default,be as __namedExportsOrder,_e as default};
