import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as V,e as L,h as $,p as O,N as X,M as K,y as N,f as Y,B as b,q as J,v as U,V as F,H as Q,E as H,z as W,r as Z,P as ee,b as re,c as _,G as S,m as ne,d as se,O as te}from"./nb_NO-CO8Lf0y6.js";import{e as I,l as ie,u as ae,m as oe,a as le}from"./index.es-Y_pmkVsu.js";import{r as h}from"./index-C4XKfyRp.js";import{T as f}from"./TrueFalseInput-ahmheniT.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as ge}from"./FieldArrayRow-njFD2_AN.js";import{T as l,S as de}from"./Table-EWa4-O_t.js";import{S as ue}from"./Trash-J4Z5o5vt.js";import{M as m}from"./message-CyGWbGQD.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./v4-CtRu48qb.js";var p=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(p||{});const s="tilretteleggingArbeidsforhold",y="tilretteleggingForArbeidsgiver",Ee="tilretteleggingSelvstendigNaringsdrivende",me="tilretteleggingFrilans",ve="tilretteleggingArbeidsgiver",Te=ie(100),M={tilretteleggingType:"",dato:"",stillingsprosent:""},G=({readOnly:r,name:t})=>{const n=V(),{control:o}=L(),{fields:a,remove:g,append:d}=$({control:o,name:t});return h.useEffect(()=>{a.length===0&&d(M)},[]),e.jsx(O,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(X,{fields:a,emptyPeriodTemplate:M,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:g,children:(u,i)=>e.jsxs(ge,{readOnly:r,remove:g,index:i,children:[e.jsx(K,{readOnly:r,name:`${t}.${i}.tilretteleggingType`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[I],selectValues:[e.jsx("option",{value:p.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},p.HEL_TILRETTELEGGING),e.jsx("option",{value:p.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},p.DELVIS_TILRETTELEGGING),e.jsx("option",{value:p.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},p.INGEN_TILRETTELEGGING)]}),e.jsx(N,{isReadOnly:r,name:`${t}.${i}.dato`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[I]}),e.jsx(Y,{readOnly:r,name:`${t}.${i}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[I,Te],maxLength:99})]},u.id)})})};G.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const D=`${s}.${y}`,x=r=>`${D}.${r}`,P=({open:r,readOnly:t=!1,index:n,remove:o})=>{const{getFieldState:a,watch:g}=L(),{error:d}=a(`${D}.${n}`),u=g(`${D}.${n}.organisasjonsnummer`),[i,T]=h.useState(r),v=V();return e.jsxs(l.Row,{shadeOnHover:!1,style:{backgroundColor:d&&!i?"var(--a-red-50)":"none"},children:[e.jsx(l.DataCell,{valign:"top",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:()=>T(E=>!E),icon:i?e.jsx(de,{"aria-label":"Vis mindre"}):e.jsx(J,{"aria-label":"Vis mer"})})}),e.jsxs(l.DataCell,{valign:"top",children:[e.jsx(O,{hidden:i,paddingBlock:"3",children:e.jsx(U,{weight:"semibold",children:u})}),e.jsxs(F,{gap:"4",hidden:!i,children:[e.jsxs(Q,{gap:"4",children:[e.jsx(Y,{readOnly:t,name:`${x(n)}.organisasjonsnummer`,label:v.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[I,E=>ae(E.toString()),oe],maxLength:99}),e.jsx(N,{name:`${x(n)}.behovsdato`,label:v.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[I],isReadOnly:t})]}),e.jsx(G,{name:`${x(n)}.${ve}`,readOnly:t})]})]}),e.jsx(l.DataCell,{valign:"top",align:"right",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:o,onKeyDown:o,icon:e.jsx(ue,{"aria-label":"Slett rad"})})})]})};P.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const pe={organisasjonsnummer:"",behovsdato:""},Fe=`${s}.${y}`,C=({readOnly:r})=>{var i,T,v,E,j;const t=V(),{control:n,formState:{errors:o}}=L(),{fields:a,append:g,remove:d}=$({control:n,name:Fe,rules:{required:t.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),u=()=>{g(pe)};return h.useEffect(()=>{a.length===0&&u()},[]),e.jsxs(F,{gap:"4",children:[e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{style:{width:"48px"}}),e.jsx(l.HeaderCell,{children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(l.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(l.Body,{children:a.map((z,k)=>e.jsx(P,{index:k,open:k+1===a.length,remove:()=>d(k),readOnly:r},z.id))})]}),((v=(T=(i=o[s])==null?void 0:i[y])==null?void 0:T.root)==null?void 0:v.message)&&e.jsx(H,{children:(j=(E=o[s])==null?void 0:E[y].root)==null?void 0:j.message}),e.jsx("div",{children:e.jsx(b,{size:"small",variant:"tertiary",onClick:u,type:"button",icon:e.jsx(W,{"aria-hidden":!0}),children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Re=r=>{const t=[];return r!=null&&r.sokForArbeidsgiver&&(r!=null&&r.tilretteleggingForArbeidsgiver)&&t.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r!=null&&r.sokForFrilans&&t.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r!=null&&r.sokForSelvstendigNaringsdrivende&&t.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),t},A=Z(ne),R=({readOnly:r})=>{var i,T,v,E;const{watch:t,setError:n,clearErrors:o,formState:a}=L(),[g,d,u]=t([`${s}.sokForSelvstendigNaringsdrivende`,`${s}.sokForFrilans`,`${s}.sokForArbeidsgiver`]);return h.useEffect(()=>{!g&&!d&&!u?n(`${s}.notRegisteredInput`,{type:"custom",message:A.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):o(`${s}.notRegisteredInput`)},[g,d,u]),e.jsx(ee,{value:A,children:e.jsx(re,{children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&((T=(i=a.errors[s])==null?void 0:i.notRegisteredInput)==null?void 0:T.message)&&e.jsx(H,{children:(E=(v=a.errors[s])==null?void 0:v.notRegisteredInput)==null?void 0:E.message}),e.jsx(f,{name:`${s}.sokForSelvstendigNaringsdrivende`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(N,{name:`${s}.behovsdatoSN`,label:A.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[I],isReadOnly:r}),e.jsx(G,{name:`${s}.${Ee}`,readOnly:r})]})})}),e.jsx(f,{name:`${s}.sokForFrilans`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(N,{name:`${s}.behovsdatoFrilans`,label:A.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[I],isReadOnly:r}),e.jsx(G,{name:`${s}.${me}`,readOnly:r})]})})}),e.jsx(f,{name:`${s}.sokForArbeidsgiver`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(F,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx(C,{readOnly:r})]})})})]})})})};R.initialValues=()=>({[s]:{}});R.transformValues=({tilretteleggingArbeidsforhold:r})=>({[s]:Re(r)});R.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const De={title:"ui-komponenter/tilrettelegging-svp",component:R,parameters:{submitCallback:le("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:t}})=>{const n=se({defaultValues:R.initialValues()});return e.jsx(te,{formMethods:n,onSubmit:o=>t(R.transformValues(o)),children:e.jsxs(F,{gap:"10",children:[e.jsx(R,{...r}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={};var q,B,w;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const Ve=["Default"];export{c as Default,Ve as __namedExportsOrder,De as default};
