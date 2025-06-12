import{u as V,r as G,j as e,a as K,P as X}from"./iframe-wRiEbax3.js";import{u as h,a as w,h as O,$ as U,Y as W,P as N,A as Y,B as b,i as J,j as Q,V as p,H as Z,E as P,k as ee,l as re,b as I,W as S,m as ne,c as se,N as te}from"./nb_NO-CCZbSLZt.js";import{e as _,l as ie,u as ae,m as le}from"./index.es-D6rbkOhl.js";import{T as f}from"./TrueFalseInput-XOsP1TnC.js";import{F as oe}from"./FieldArrayRow-Bri8vwqJ.js";import{T as o,S as ge}from"./Table-BzuIh6K-.js";import{S as de}from"./Trash-CP1fzP29.js";import{M as m}from"./message-Do5C69VI.js";import"./index-CQ2rW2c7.js";var F=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(F||{});const s="tilretteleggingArbeidsforhold",y="tilretteleggingForArbeidsgiver",ue="tilretteleggingSelvstendigNaringsdrivende",Ee="tilretteleggingFrilans",me="tilretteleggingArbeidsgiver",Te=ie(100),M={tilretteleggingType:"",dato:"",stillingsprosent:""},L=({readOnly:r,name:t})=>{const n=V(),{control:l}=h(),{fields:a,remove:g,append:d}=w({control:l,name:t});return G.useEffect(()=>{a.length===0&&d(M)},[]),e.jsx(O,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(U,{fields:a,emptyPeriodTemplate:M,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:g,children:(u,i)=>e.jsxs(oe,{readOnly:r,remove:g,index:i,children:[e.jsx(W,{readOnly:r,name:`${t}.${i}.tilretteleggingType`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[_],selectValues:[e.jsx("option",{value:F.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},F.HEL_TILRETTELEGGING),e.jsx("option",{value:F.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},F.DELVIS_TILRETTELEGGING),e.jsx("option",{value:F.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},F.INGEN_TILRETTELEGGING)]}),e.jsx(N,{isReadOnly:r,name:`${t}.${i}.dato`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[_]}),e.jsx(Y,{readOnly:r,name:`${t}.${i}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[_,Te],maxLength:99})]},u.id)})})};L.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const D=`${s}.${y}`,x=r=>`${D}.${r}`,H=({open:r,readOnly:t=!1,index:n,remove:l})=>{const{getFieldState:a,watch:g}=h(),{error:d}=a(`${D}.${n}`),u=g(`${D}.${n}.organisasjonsnummer`),[i,v]=G.useState(r),T=V();return e.jsxs(o.Row,{shadeOnHover:!1,style:{backgroundColor:d&&!i?"var(--a-red-50)":"none"},children:[e.jsx(o.DataCell,{valign:"top",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:()=>v(E=>!E),icon:i?e.jsx(ge,{"aria-label":"Vis mindre"}):e.jsx(J,{"aria-label":"Vis mer"})})}),e.jsxs(o.DataCell,{valign:"top",children:[e.jsx(O,{hidden:i,paddingBlock:"3",children:e.jsx(Q,{weight:"semibold",children:u})}),e.jsxs(p,{gap:"4",hidden:!i,children:[e.jsxs(Z,{gap:"4",children:[e.jsx(Y,{readOnly:t,name:`${x(n)}.organisasjonsnummer`,label:T.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[_,E=>ae(E.toString()),le],maxLength:99}),e.jsx(N,{name:`${x(n)}.behovsdato`,label:T.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[_],isReadOnly:t})]}),e.jsx(L,{name:`${x(n)}.${me}`,readOnly:t})]})]}),e.jsx(o.DataCell,{valign:"top",align:"right",children:e.jsx(b,{type:"button",variant:"tertiary-neutral",onClick:l,onKeyDown:l,icon:e.jsx(de,{"aria-label":"Slett rad"})})})]})};H.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const ve={organisasjonsnummer:"",behovsdato:""},Fe=`${s}.${y}`,C=({readOnly:r})=>{var i,v,T,E,j;const t=V(),{control:n,formState:{errors:l}}=h(),{fields:a,append:g,remove:d}=w({control:n,name:Fe,rules:{required:t.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),u=()=>{g(ve)};return G.useEffect(()=>{a.length===0&&u()},[]),e.jsxs(p,{gap:"4",children:[e.jsxs(o,{children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{style:{width:"48px"}}),e.jsx(o.HeaderCell,{children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(o.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(o.Body,{children:a.map((z,k)=>e.jsx(H,{index:k,open:k+1===a.length,remove:()=>d(k),readOnly:r},z.id))})]}),((T=(v=(i=l[s])==null?void 0:i[y])==null?void 0:v.root)==null?void 0:T.message)&&e.jsx(P,{children:(j=(E=l[s])==null?void 0:E[y].root)==null?void 0:j.message}),e.jsx("div",{children:e.jsx(b,{size:"small",variant:"tertiary",onClick:u,type:"button",icon:e.jsx(ee,{"aria-hidden":!0}),children:e.jsx(m,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const pe=r=>{const t=[];return r!=null&&r.sokForArbeidsgiver&&(r!=null&&r.tilretteleggingForArbeidsgiver)&&t.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r!=null&&r.sokForFrilans&&t.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r!=null&&r.sokForSelvstendigNaringsdrivende&&t.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),t},A=K(ne),R=({readOnly:r})=>{var i,v,T,E;const{watch:t,setError:n,clearErrors:l,formState:a}=h(),[g,d,u]=t([`${s}.sokForSelvstendigNaringsdrivende`,`${s}.sokForFrilans`,`${s}.sokForArbeidsgiver`]);return G.useEffect(()=>{!g&&!d&&!u?n(`${s}.notRegisteredInput`,{type:"custom",message:A.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):l(`${s}.notRegisteredInput`)},[g,d,u]),e.jsx(X,{value:A,children:e.jsx(re,{children:e.jsxs(p,{gap:"4",children:[e.jsx(I,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&((v=(i=a.errors[s])==null?void 0:i.notRegisteredInput)==null?void 0:v.message)&&e.jsx(P,{children:(E=(T=a.errors[s])==null?void 0:T.notRegisteredInput)==null?void 0:E.message}),e.jsx(f,{name:`${s}.sokForSelvstendigNaringsdrivende`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(p,{gap:"4",children:[e.jsx(I,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(N,{name:`${s}.behovsdatoSN`,label:A.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[_],isReadOnly:r}),e.jsx(L,{name:`${s}.${ue}`,readOnly:r})]})})}),e.jsx(f,{name:`${s}.sokForFrilans`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(p,{gap:"4",children:[e.jsx(I,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(N,{name:`${s}.behovsdatoFrilans`,label:A.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[_],isReadOnly:r}),e.jsx(L,{name:`${s}.${Ee}`,readOnly:r})]})})}),e.jsx(f,{name:`${s}.sokForArbeidsgiver`,label:e.jsx(m,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(S,{marginTop:4,children:e.jsxs(p,{gap:"4",children:[e.jsx(I,{size:"small",children:e.jsx(m,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx(C,{readOnly:r})]})})})]})})})};R.initialValues=()=>({[s]:{}});R.transformValues=({tilretteleggingArbeidsforhold:r})=>({[s]:pe(r)});R.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Re}=__STORYBOOK_MODULE_ACTIONS__,he={title:"ui-komponenter/tilrettelegging-svp",component:R,parameters:{submitCallback:Re("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:t}})=>{const n=se({defaultValues:R.initialValues()});return e.jsx(te,{formMethods:n,onSubmit:l=>t(R.transformValues(l)),children:e.jsxs(p,{gap:"10",children:[e.jsx(R,{...r}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={};var q,B,$;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...($=(B=c.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const je=["Default"];export{c as Default,je as __namedExportsOrder,he as default};
