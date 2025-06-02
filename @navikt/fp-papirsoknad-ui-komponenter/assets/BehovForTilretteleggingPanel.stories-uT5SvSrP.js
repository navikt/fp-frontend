import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as G,f as w,j as Y,$ as X,Y as K,P as N,A as O,B as b,k as Z,l as J,V as F,H as U,E as H,n as Q,a as W,b as _,Z as S,m as ee,d as re,N as ne}from"./nb_NO-BeBGbCCx.js";import{a as se}from"./index-B-lxVbXh.js";import{r as h}from"./index-C4XKfyRp.js";import{u as V,r as te,a as ie}from"./index.es-CZjkzcto.js";import{e as I,l as ae,u as oe,m as le}from"./index.es-sIGWTmsS.js";import{T as f}from"./TrueFalseInput-DxVXq0t0.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as ge}from"./FieldArrayRow-BGRNoU-Y.js";import{T as l,S as de}from"./Table-ZyyxAlDs.js";import{S as ue}from"./Trash-B36cipQP.js";import{M as m}from"./message-C5auBQb2.js";import"./index-PUjTtqh4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DTjSd7F1.js";import"./v4-CtRu48qb.js";var p=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(p||{});const s="tilretteleggingArbeidsforhold",y="tilretteleggingForArbeidsgiver",Ee="tilretteleggingSelvstendigNaringsdrivende",me="tilretteleggingFrilans",ve="tilretteleggingArbeidsgiver",Te=ae(100),M={tilretteleggingType:"",dato:"",stillingsprosent:""},L=({readOnly:r,name:t})=>{const n=V(),{control:o}=G(),{fields:a,remove:g,append:d}=w({control:o,name:t});return h.useEffect(()=>{a.length===0&&d(M)},[]),e.jsx(Y,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(X,{fields:a,emptyPeriodTemplate:M,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:g,children:(u,i)=>e.jsxs(ge,{readOnly:r,remove:g,index:i,children:[e.jsx(K,{readOnly:r,name:`${t}.${i}.tilretteleggingType`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[I],selectValues:[e.jsx("option",{value:p.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},p.HEL_TILRETTELEGGING),e.jsx("option",{value:p.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},p.DELVIS_TILRETTELEGGING),e.jsx("option",{value:p.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},p.INGEN_TILRETTELEGGING)]}),e.jsx(N,{isReadOnly:r,name:`${t}.${i}.dato`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[I]}),e.jsx(O,{readOnly:r,name:`${t}.${i}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[I,Te],maxLength:99})]},u.id)})})};L.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const D=`${s}.${y}`,x=r=>`${D}.${r}`,P=({open:r,readOnly:t=!1,index:n,remove:o})=>{const{getFieldState:a,watch:g}=G(),{error:d}=a(`${D}.${n}`),u=g(`${D}.${n}.organisasjonsnummer`),[i,T]=h.useState(r),v=V();return e.jsxs(l.Row,{shadeOnHover:!1,style:{backgroundColor:d&&!i?"var(--a-red-50)":"none"},children:[e.jsx(l.DataCell,{valign:"top",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:()=>T(E=>!E),icon:i?e.jsx(de,{"aria-label":"Vis mindre"}):e.jsx(Z,{"aria-label":"Vis mer"})})}),e.jsxs(l.DataCell,{valign:"top",children:[e.jsx(Y,{hidden:i,paddingBlock:"3",children:e.jsx(J,{weight:"semibold",children:u})}),e.jsxs(F,{gap:"4",hidden:!i,children:[e.jsxs(U,{gap:"4",children:[e.jsx(O,{readOnly:t,name:`${x(n)}.organisasjonsnummer`,label:v.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[I,E=>oe(E.toString()),le],maxLength:99}),e.jsx(N,{name:`${x(n)}.behovsdato`,label:v.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[I],isReadOnly:t})]}),e.jsx(L,{name:`${x(n)}.${ve}`,readOnly:t})]})]}),e.jsx(l.DataCell,{valign:"top",align:"right",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:o,onKeyDown:o,icon:e.jsx(ue,{"aria-label":"Slett rad"})})})]})};P.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const pe={organisasjonsnummer:"",behovsdato:""},Fe=`${s}.${y}`,C=({readOnly:r})=>{var i,T,v,E,j;const t=V(),{control:n,formState:{errors:o}}=G(),{fields:a,append:g,remove:d}=w({control:n,name:Fe,rules:{required:t.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),u=()=>{g(pe)};return h.useEffect(()=>{a.length===0&&u()},[]),e.jsxs(F,{gap:"4",children:[e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{style:{width:"48px"}}),e.jsx(l.HeaderCell,{children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(l.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(l.Body,{children:a.map((z,k)=>e.jsx(P,{index:k,open:k+1===a.length,remove:()=>d(k),readOnly:r},z.id))})]}),((v=(T=(i=o[s])==null?void 0:i[y])==null?void 0:T.root)==null?void 0:v.message)&&e.jsx(H,{children:(j=(E=o[s])==null?void 0:E[y].root)==null?void 0:j.message}),e.jsx("div",{children:e.jsx(b,{size:"small",variant:"tertiary",onClick:u,type:"button",icon:e.jsx(Q,{"aria-hidden":!0}),children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Re=r=>{const t=[];return r!=null&&r.sokForArbeidsgiver&&(r!=null&&r.tilretteleggingForArbeidsgiver)&&t.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r!=null&&r.sokForFrilans&&t.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r!=null&&r.sokForSelvstendigNaringsdrivende&&t.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),t},A=te(ee),R=({readOnly:r})=>{var i,T,v,E;const{watch:t,setError:n,clearErrors:o,formState:a}=G(),[g,d,u]=t([`${s}.sokForSelvstendigNaringsdrivende`,`${s}.sokForFrilans`,`${s}.sokForArbeidsgiver`]);return h.useEffect(()=>{!g&&!d&&!u?n(`${s}.notRegisteredInput`,{type:"custom",message:A.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):o(`${s}.notRegisteredInput`)},[g,d,u]),e.jsx(ie,{value:A,children:e.jsx(W,{children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&((T=(i=a.errors[s])==null?void 0:i.notRegisteredInput)==null?void 0:T.message)&&e.jsx(H,{children:(E=(v=a.errors[s])==null?void 0:v.notRegisteredInput)==null?void 0:E.message}),e.jsx(f,{name:`${s}.sokForSelvstendigNaringsdrivende`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(N,{name:`${s}.behovsdatoSN`,label:A.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[I],isReadOnly:r}),e.jsx(L,{name:`${s}.${Ee}`,readOnly:r})]})})}),e.jsx(f,{name:`${s}.sokForFrilans`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(N,{name:`${s}.behovsdatoFrilans`,label:A.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[I],isReadOnly:r}),e.jsx(L,{name:`${s}.${me}`,readOnly:r})]})})}),e.jsx(f,{name:`${s}.sokForArbeidsgiver`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx(C,{readOnly:r})]})})})]})})})};R.initialValues=()=>({[s]:{}});R.transformValues=({tilretteleggingArbeidsforhold:r})=>({[s]:Re(r)});R.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ve={title:"ui-komponenter/tilrettelegging-svp",component:R,parameters:{submitCallback:se("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:t}})=>{const n=re({defaultValues:R.initialValues()});return e.jsx(ne,{formMethods:n,onSubmit:o=>t(R.transformValues(o)),children:e.jsxs(F,{gap:"10",children:[e.jsx(R,{...r}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={};var q,B,$;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...($=(B=c.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Me=["Default"];export{c as Default,Me as __namedExportsOrder,Ve as default};
