import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{e as M,d as b,i as V,I as Y,H as I,j as w,c as R,F as q,B as p,K as $,V as c,r as O,M as T,t as H,P,S as C,a as z,E as K,l as N,m as X,b as J,$ as U}from"./nb_NO-YFU2oKl2.js";import{H as u,s as Q,o as W,l as Z,a as ee}from"./index.es-wC-k5ZxB.js";import{r as y}from"./index-DRjF_FHU.js";import{T as G}from"./TrueFalseInput-Cj-tWw9Q.js";import"./aktivitetStatus-B1m96ipJ.js";import{S as re}from"./Trash-erfhDESj.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";var E=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(E||{});const ne=Q(100),S={tilretteleggingType:"",dato:"",stillingsprosent:""},A=({readOnly:r,name:s})=>{const t=M(),{control:a}=b(),{fields:o,remove:m,append:l}=V({control:a,name:s});return y.useEffect(()=>{o.length===0&&l(S)},[]),e.jsx(Y,{fields:o,emptyPeriodTemplate:S,bodyText:t.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:l,remove:m,children:(g,n)=>e.jsxs(I,{wrap:!1,gap:"4",children:[e.jsxs(I,{gap:"4",children:[e.jsx(w,{readOnly:r,name:`${s}.${n}.tilretteleggingType`,label:n===0?t.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[u],selectValues:[e.jsx("option",{value:E.HEL_TILRETTELEGGING,children:t.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},E.HEL_TILRETTELEGGING),e.jsx("option",{value:E.DELVIS_TILRETTELEGGING,children:t.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},E.DELVIS_TILRETTELEGGING),e.jsx("option",{value:E.INGEN_TILRETTELEGGING,children:t.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},E.INGEN_TILRETTELEGGING)]}),e.jsx(R,{isReadOnly:r,name:`${s}.${n}.dato`,label:n===0?t.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[u]}),e.jsx(q,{readOnly:r,name:`${s}.${n}.stillingsprosent`,label:n===0?t.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[u,ne],maxLength:99})]}),!r&&n>0&&e.jsx(p,{size:"small",type:"button",variant:"tertiary-neutral",icon:e.jsx(re,{}),onClick:()=>m(n)})]},g.id)})};A.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const i="tilretteleggingArbeidsforhold",te="tilretteleggingForArbeidsgiver",se="tilretteleggingSelvstendigNaringsdrivende",ie="tilretteleggingFrilans",ae="tilretteleggingArbeidsgiver",oe={organisasjonsnummer:"",behovsdato:""},x=`${i}.${te}`,L=r=>`${x}.${r}`,B=({readOnly:r})=>{const s=M(),{control:t}=b(),{fields:a,append:o,remove:m}=V({control:t,name:x}),l=()=>{o(oe)};return y.useEffect(()=>{a.length===0&&l()},[]),e.jsxs(e.Fragment,{children:[a.map((g,n)=>e.jsxs("div",{children:[n>0&&e.jsx($,{spaceUnder:!0,spaceAbove:!0}),e.jsxs(I,{wrap:!1,justify:"space-between",children:[e.jsxs(c,{children:[e.jsxs(I,{gap:"4",children:[e.jsx(q,{readOnly:r,name:`${L(n)}.organisasjonsnummer`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[u,v=>W(v.toString()),Z],maxLength:99}),e.jsx(R,{name:`${L(n)}.behovsdato`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[u],isReadOnly:r})]}),e.jsx(A,{name:`${L(n)}.${ae}`,readOnly:r})]}),!r&&n>0&&e.jsx("div",{children:e.jsx(p,{type:"button",variant:"tertiary-neutral",icon:e.jsx(O,{}),onClick:()=>m(n)})})]})]},g.id)),e.jsx(p,{size:"small",variant:"secondary",onClick:l,type:"button",children:e.jsx(T,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]})};B.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const le=r=>{const s=[];return r!=null&&r.sokForArbeidsgiver&&(r!=null&&r.tilretteleggingForArbeidsgiver)&&s.push(...r.tilretteleggingForArbeidsgiver.map(t=>({"@type":"VI",behovsdato:t.behovsdato,organisasjonsnummer:t.organisasjonsnummer,tilrettelegginger:t.tilretteleggingArbeidsgiver}))),r!=null&&r.sokForFrilans&&s.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r!=null&&r.sokForSelvstendigNaringsdrivende&&s.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),s},F=H(X),d=({readOnly:r})=>{var n,v,k,j;const{watch:s,setError:t,clearErrors:a,formState:o}=b(),{sokForSelvstendigNaringsdrivende:m,sokForFrilans:l,sokForArbeidsgiver:g}=s(i);return y.useEffect(()=>{!m&&!l&&!g?t(`${i}.notRegisteredInput`,{type:"custom",message:F.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):a(`${i}.notRegisteredInput`)},[g,l,g]),e.jsx(P,{value:F,children:e.jsx(C,{children:e.jsxs(c,{gap:"4",children:[e.jsx(z,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),o.isSubmitted&&((v=(n=o.errors[i])==null?void 0:n.notRegisteredInput)==null?void 0:v.message)&&e.jsx(K,{children:(j=(k=o.errors[i])==null?void 0:k.notRegisteredInput)==null?void 0:j.message}),e.jsx(G,{name:`${i}.sokForSelvstendigNaringsdrivende`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsxs(N,{marginTop:4,children:[e.jsx(R,{name:`${i}.behovsdatoSN`,label:F.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[u],isReadOnly:r}),e.jsx(A,{name:`${i}.${se}`,readOnly:r})]})}),e.jsx(G,{name:`${i}.sokForFrilans`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsxs(N,{marginTop:4,children:[e.jsx(R,{name:`${i}.behovsdatoFrilans`,label:F.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[u],isReadOnly:r}),e.jsx(A,{name:`${i}.${ie}`,readOnly:r})]})}),e.jsx(G,{name:`${i}.sokForArbeidsgiver`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(N,{marginTop:4,children:e.jsx(B,{readOnly:r})})})]})})})};d.initialValues=()=>({[i]:{}});d.transformValues=({tilretteleggingArbeidsforhold:r})=>({[i]:le(r)});d.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForArbeidsgiver?: boolean;
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForArbeidsgiver?: boolean;
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const pe={title:"ui-komponenter/tilrettelegging-svp",component:d,parameters:{submitCallback:ee("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:s}})=>{const t=J({defaultValues:d.initialValues()});return e.jsx(U,{formMethods:t,onSubmit:a=>s(d.transformValues(a)),children:e.jsxs(c,{gap:"10",children:[e.jsx(d,{...r}),e.jsx(p,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},_={};var h,f,D;_.parameters={..._.parameters,docs:{...(h=_.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(D=(f=_.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const Ae=["Default"];export{_ as Default,Ae as __namedExportsOrder,pe as default};
