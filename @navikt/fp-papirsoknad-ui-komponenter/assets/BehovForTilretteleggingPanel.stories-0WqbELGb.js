import{u as D,r as j,j as e,a as z,P as K}from"./iframe-PSLltoVy.js";import{u as k,a as w,h as O,$ as X,Y as U,P as y,A as Y,B as L,i as W,j as J,V as R,H as Q,E as P,k as Z,l as ee,b as c,W as f,m as re,c as ne,N as se}from"./nb_NO-CwdsBB97.js";import{t as I,i as te,c as ie,u as ae}from"./index.es-0tMb955Z.js";import{T as x}from"./TrueFalseInput-uRT8d4fp.js";import{F as oe}from"./FieldArrayRow-DTqZqU6m.js";import{T as l,S as le}from"./Table-DcEq42hD.js";import{S as ge}from"./Trash-CWq-EBK2.js";import{M as T}from"./message-B3oE8p95.js";import"./index-CmUVxGlo.js";var p=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(p||{});const s="tilretteleggingArbeidsforhold",G="tilretteleggingForArbeidsgiver",de="tilretteleggingSelvstendigNaringsdrivende",ue="tilretteleggingFrilans",Ee="tilretteleggingArbeidsgiver",me=te(100),M={tilretteleggingType:"",dato:"",stillingsprosent:""},h=({readOnly:r,name:t})=>{const n=D(),{control:i}=k(),{fields:a,remove:u,append:g}=w({control:i,name:t});return j.useEffect(()=>{a.length===0&&g(M)},[]),e.jsx(O,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:e.jsx(X,{fields:a,emptyPeriodTemplate:M,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:g,remove:u,children:(E,o)=>e.jsxs(oe,{readOnly:r,remove:u,index:o,children:[e.jsx(U,{name:`${t}.${o}.tilretteleggingType`,control:i,readOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[I],selectValues:[e.jsx("option",{value:p.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},p.HEL_TILRETTELEGGING),e.jsx("option",{value:p.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},p.DELVIS_TILRETTELEGGING),e.jsx("option",{value:p.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},p.INGEN_TILRETTELEGGING)]}),e.jsx(y,{name:`${t}.${o}.dato`,control:i,isReadOnly:r,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[I]}),e.jsx(Y,{readOnly:r,control:i,name:`${t}.${o}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[I,me],maxLength:99})]},E.id)})})};h.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const A=`${s}.${G}`,Te=r=>`${A}.${r}`,H=({open:r,readOnly:t=!1,index:n,remove:i})=>{const{getFieldState:a,watch:u,control:g}=k(),{error:E}=a(`${A}.${n}`),o=u(`${A}.${n}.organisasjonsnummer`),[d,F]=j.useState(r),v=D();return e.jsxs(l.Row,{shadeOnHover:!1,style:{backgroundColor:E&&!d?"var(--a-red-50)":"none"},children:[e.jsx(l.DataCell,{valign:"top",children:e.jsx(L,{type:"button",variant:"tertiary-neutral",onClick:()=>F(m=>!m),icon:d?e.jsx(le,{"aria-label":"Vis mindre"}):e.jsx(W,{"aria-label":"Vis mer"})})}),e.jsxs(l.DataCell,{valign:"top",children:[e.jsx(O,{hidden:d,paddingBlock:"3",children:e.jsx(J,{weight:"semibold",children:o})}),e.jsxs(R,{gap:"4",hidden:!d,children:[e.jsxs(Q,{gap:"4",children:[e.jsx(Y,{name:`${A}.${n}.organisasjonsnummer`,control:g,readOnly:t,label:v.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[I,m=>ie(m.toString()),ae],maxLength:99}),e.jsx(y,{name:`${A}.${n}.behovsdato`,control:g,label:v.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[I],isReadOnly:t})]}),e.jsx(h,{name:`${Te(n)}.${Ee}`,readOnly:t})]})]}),e.jsx(l.DataCell,{valign:"top",align:"right",children:e.jsx(L,{type:"button",variant:"tertiary-neutral",onClick:i,onKeyDown:i,icon:e.jsx(ge,{"aria-label":"Slett rad"})})})]})};H.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const ve={organisasjonsnummer:"",behovsdato:""},Fe=`${s}.${G}`,C=({readOnly:r})=>{var o,d,F,v,m;const t=D(),{control:n,formState:{errors:i}}=k(),{fields:a,append:u,remove:g}=w({control:n,name:Fe,rules:{required:t.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),E=()=>{u(ve)};return j.useEffect(()=>{a.length===0&&E()},[]),e.jsxs(R,{gap:"4",children:[e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{style:{width:"48px"}}),e.jsx(l.HeaderCell,{children:e.jsx(T,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),e.jsx(l.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(l.Body,{children:a.map((V,S)=>e.jsx(H,{index:S,open:S+1===a.length,remove:()=>g(S),readOnly:r},V.id))})]}),((F=(d=(o=i[s])==null?void 0:o[G])==null?void 0:d.root)==null?void 0:F.message)&&e.jsx(P,{children:(m=(v=i[s])==null?void 0:v[G].root)==null?void 0:m.message}),e.jsx("div",{children:e.jsx(L,{size:"small",variant:"tertiary",onClick:E,type:"button",icon:e.jsx(Z,{"aria-hidden":!0}),children:e.jsx(T,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const pe=r=>{const t=[];return r!=null&&r.sokForArbeidsgiver&&(r!=null&&r.tilretteleggingForArbeidsgiver)&&t.push(...r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),r!=null&&r.sokForFrilans&&t.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r!=null&&r.sokForSelvstendigNaringsdrivende&&t.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),t},N=z(re),_=({readOnly:r})=>{var d,F,v,m;const{watch:t,setError:n,clearErrors:i,formState:a,control:u}=k(),[g,E,o]=t([`${s}.sokForSelvstendigNaringsdrivende`,`${s}.sokForFrilans`,`${s}.sokForArbeidsgiver`]);return j.useEffect(()=>{!g&&!E&&!o?n(`${s}.notRegisteredInput`,{type:"custom",message:N.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):i(`${s}.notRegisteredInput`)},[g,E,o]),e.jsx(K,{value:N,children:e.jsx(ee,{children:e.jsxs(R,{gap:"4",children:[e.jsx(c,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),a.isSubmitted&&((F=(d=a.errors[s])==null?void 0:d.notRegisteredInput)==null?void 0:F.message)&&e.jsx(P,{children:(m=(v=a.errors[s])==null?void 0:v.notRegisteredInput)==null?void 0:m.message}),e.jsx(x,{name:`${s}.sokForSelvstendigNaringsdrivende`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:r,trueContent:e.jsx(f,{marginTop:4,children:e.jsxs(R,{gap:"4",children:[e.jsx(c,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.TittelSN"})}),e.jsx(y,{name:`${s}.behovsdatoSN`,control:u,label:N.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[I],isReadOnly:r}),e.jsx(h,{name:`${s}.${de}`,readOnly:r})]})})}),e.jsx(x,{name:`${s}.sokForFrilans`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:r,trueContent:e.jsx(f,{marginTop:4,children:e.jsxs(R,{gap:"4",children:[e.jsx(c,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),e.jsx(y,{name:`${s}.behovsdatoFrilans`,control:u,label:N.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[I],isReadOnly:r}),e.jsx(h,{name:`${s}.${ue}`,readOnly:r})]})})}),e.jsx(x,{name:`${s}.sokForArbeidsgiver`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:r,trueContent:e.jsx(f,{marginTop:4,children:e.jsxs(R,{gap:"4",children:[e.jsx(c,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),e.jsx(C,{readOnly:r})]})})})]})})})};_.initialValues=()=>({[s]:{}});_.transformValues=({tilretteleggingArbeidsforhold:r})=>({[s]:pe(r)});_.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Re}=__STORYBOOK_MODULE_ACTIONS__,he={title:"ui-komponenter/tilrettelegging-svp",component:_,parameters:{submitCallback:Re("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:t}})=>{const n=ne({defaultValues:_.initialValues()});return e.jsx(se,{formMethods:n,onSubmit:i=>t(_.transformValues(i)),children:e.jsxs(R,{gap:"10",children:[e.jsx(_,{...r}),e.jsx(L,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},b={};var q,B,$;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...($=(B=b.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const je=["Default"];export{b as Default,je as __namedExportsOrder,he as default};
