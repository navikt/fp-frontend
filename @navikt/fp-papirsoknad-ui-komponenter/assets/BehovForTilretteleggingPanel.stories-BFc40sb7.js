import{u as k,r as y,j as e,t as F,l as $,E as O,G as Y,a as P,P as H}from"./iframe-Ca20Zx4x.js";import{u as h,a as x,l as D,Y as C,P as z,S as c,y as M,B as I,n as K,o as X,V as v,H as U,E as V,p as J,d as Q,b as A,c as j,m as W,e as Z,M as ee}from"./nb_NO-CO5XUw6t.js";import{T as G}from"./TrueFalseInput-C9qLReXd.js";import{F as re}from"./FieldArrayRow-CWtwXxsM.js";import{T as g,S as ne}from"./Table-BODRVtay.js";import{S as te}from"./Trash-Df65NgO1.js";import{M as E}from"./message-enQCpoA9.js";import"./preload-helper-D9Z9MdNV.js";import"./index-COvPwJOq.js";const t="tilretteleggingArbeidsforhold",b="tilretteleggingForArbeidsgiver",ie="tilretteleggingSelvstendigNaringsdrivende",se="tilretteleggingFrilans",ae="tilretteleggingArbeidsgiver",le=$(100),S={tilretteleggingType:"",dato:"",stillingsprosent:""},N=({readOnly:r,name:i})=>{const n=k(),{control:s}=h(),{fields:a,remove:l,append:d}=x({control:s,name:i});return y.useEffect(()=>{a.length===0&&d(S)},[]),e.jsx(D.New,{background:"brand-blue-moderateA",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(C,{fields:a,emptyPeriodTemplate:S,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:l,children:(u,o)=>e.jsxs(re,{readOnly:r,remove:l,index:o,children:[e.jsx(z,{name:`${i}.${o}.tilretteleggingType`,control:s,readOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[F],selectValues:[e.jsx("option",{value:"HEL_TILRETTELEGGING",children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},"HEL_TILRETTELEGGING"),e.jsx("option",{value:"DELVIS_TILRETTELEGGING",children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},"DELVIS_TILRETTELEGGING"),e.jsx("option",{value:"INGEN_TILRETTELEGGING",children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},"INGEN_TILRETTELEGGING")]}),e.jsx(c,{name:`${i}.${o}.dato`,control:s,isReadOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[F]}),e.jsx(M,{readOnly:r,control:s,name:`${i}.${o}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[F,le],maxLength:99})]},u.id)})})};N.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const T=`${t}.${b}`,oe=r=>`${T}.${r}`,q=({open:r,readOnly:i=!1,index:n,remove:s})=>{const{getFieldState:a,watch:l,control:d}=h(),{error:u}=a(`${T}.${n}`),o=l(`${T}.${n}.organisasjonsnummer`),[m,w]=y.useState(r),f=k();return e.jsxs(g.Row,{shadeOnHover:!1,style:{backgroundColor:u&&!m?"var(--ax-danger-100)":"none"},children:[e.jsx(g.DataCell,{valign:"top",children:e.jsx(I,{type:"button",variant:"tertiary-neutral",onClick:()=>w(L=>!L),icon:m?e.jsx(ne,{"aria-label":"Vis mindre"}):e.jsx(K,{"aria-label":"Vis mer"})})}),e.jsxs(g.DataCell,{valign:"top",children:[e.jsx(D.New,{hidden:m,paddingBlock:"3",children:e.jsx(X,{weight:"semibold",children:o})}),e.jsxs(v,{gap:"space-16",hidden:!m,children:[e.jsxs(U,{gap:"space-16",children:[e.jsx(M,{name:`${T}.${n}.organisasjonsnummer`,control:d,readOnly:i,label:f.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[F,L=>O(L.toString()),Y],maxLength:99}),e.jsx(c,{name:`${T}.${n}.behovsdato`,control:d,label:f.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[F],isReadOnly:i})]}),e.jsx(N,{name:`${oe(n)}.${ae}`,readOnly:i})]})]}),e.jsx(g.DataCell,{valign:"top",align:"right",children:e.jsx(I,{type:"button",variant:"tertiary-neutral",onClick:s,onKeyDown:s,icon:e.jsx(te,{"aria-label":"Slett rad"})})})]})};q.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const ge={organisasjonsnummer:"",behovsdato:""},de=`${t}.${b}`,B=({readOnly:r})=>{const i=k(),{control:n,formState:{errors:s}}=h(),{fields:a,append:l,remove:d}=x({control:n,name:de,rules:{required:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),u=()=>{l(ge)};return y.useEffect(()=>{a.length===0&&u()},[]),e.jsxs(v,{gap:"space-16",children:[e.jsxs(g,{children:[e.jsx(g.Header,{children:e.jsxs(g.Row,{children:[e.jsx(g.HeaderCell,{style:{width:"48px"}}),e.jsx(g.HeaderCell,{children:e.jsx(E,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(g.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(g.Body,{children:a.map((o,m)=>e.jsx(q,{index:m,open:m+1===a.length,remove:()=>d(m),readOnly:r},o.id))})]}),s[t]?.[b]?.root?.message&&e.jsx(V,{children:s[t]?.[b].root?.message}),e.jsx("div",{children:e.jsx(I,{size:"small",variant:"tertiary",onClick:u,type:"button",icon:e.jsx(J,{"aria-hidden":!0}),children:e.jsx(E,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};B.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ue=r=>{const i=[];return r?.sokForArbeidsgiver&&r?.tilretteleggingForArbeidsgiver&&i.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r?.sokForFrilans&&i.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r?.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),i},R=P(W),p=({readOnly:r})=>{const{watch:i,setError:n,clearErrors:s,formState:a,control:l}=h(),[d,u,o]=i([`${t}.sokForSelvstendigNaringsdrivende`,`${t}.sokForFrilans`,`${t}.sokForArbeidsgiver`]);return y.useEffect(()=>{!d&&!u&&!o?n(`${t}.notRegisteredInput`,{type:"custom",message:R.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):s(`${t}.notRegisteredInput`)},[d,u,o]),e.jsx(H,{value:R,children:e.jsx(Q,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"3",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&a.errors[t]?.notRegisteredInput?.message&&e.jsx(V,{children:a.errors[t]?.notRegisteredInput?.message}),e.jsx(G,{name:`${t}.sokForSelvstendigNaringsdrivende`,control:l,label:e.jsx(E,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(j,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"4",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(c,{name:`${t}.behovsdatoSN`,control:l,label:R.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[F],isReadOnly:r}),e.jsx(N,{name:`${t}.${ie}`,readOnly:r})]})})}),e.jsx(G,{name:`${t}.sokForFrilans`,control:l,label:e.jsx(E,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(j,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"4",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(c,{name:`${t}.behovsdatoFrilans`,control:l,label:R.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[F],isReadOnly:r}),e.jsx(N,{name:`${t}.${se}`,readOnly:r})]})})}),e.jsx(G,{name:`${t}.sokForArbeidsgiver`,control:l,label:e.jsx(E,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(j,{children:e.jsxs(v,{gap:"space-16",children:[e.jsx(A,{size:"small",level:"4",children:e.jsx(E,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx(B,{readOnly:r})]})})})]})})})};p.initialValues=()=>({[t]:{}});p.transformValues=({tilretteleggingArbeidsforhold:r})=>({[t]:ue(r)});p.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:me}=__STORYBOOK_MODULE_ACTIONS__,Ie={title:"ui-komponenter/tilrettelegging-svp",component:p,parameters:{submitCallback:me("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:i}})=>{const n=Z({defaultValues:p.initialValues()});return e.jsx(ee,{formMethods:n,onSubmit:s=>i(p.transformValues(s)),children:e.jsxs(v,{gap:"space-40",children:[e.jsx(p,{...r}),e.jsx(I,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},_={};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"{}",..._.parameters?.docs?.source}}};const be=["Default"];export{_ as Default,be as __namedExportsOrder,Ie as default};
