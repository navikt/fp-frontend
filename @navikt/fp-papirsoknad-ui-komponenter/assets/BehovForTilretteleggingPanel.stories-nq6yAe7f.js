import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{e as $,d as N,i as P,I as H,y as m,W as _,s as w,x as T,j as z,c as k,F as M,B,M as y,t as J,P as O,S as X,a as C,E as K,k as j,l as f,m as W,b as Q,$ as U,V as Y}from"./nb_NO-Do_lz9uu.js";import{H as l,s as Z,o as ee,l as re,a as ie}from"./index.es-CiSAtsS3.js";import{r as V}from"./index-DRjF_FHU.js";import"./aktivitetStatus-B1m96ipJ.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";var v=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(v||{});const ne="_notLastRow_uwn16_1",te={notLastRow:ne},se=Z(100),ae="tilretteleggingArbeidsgiver",le="tilretteleggingSelvstendigNaringsdrivende",ge="tilretteleggingFrilans",I={tilretteleggingType:"",dato:"",stillingsprosent:""},h=({readOnly:r,name:i})=>{const n=$(),{control:g}=N(),{fields:o,remove:p,append:d}=P({control:g,name:i});return V.useEffect(()=>{o.length===0&&d(I)},[]),e.jsx(H,{fields:o,emptyPeriodTemplate:I,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:p,children:(b,t,u)=>e.jsxs("div",{className:t!==o.length-1?te.notLastRow:"",children:[e.jsx(m,{sixteenPx:!0}),e.jsx(_,{children:e.jsxs(w,{children:[e.jsx(T,{children:e.jsx(z,{readOnly:r,name:`${i}.${t}.tilretteleggingType`,label:t===0?n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[l],selectValues:[e.jsx("option",{value:v.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},v.HEL_TILRETTELEGGING),e.jsx("option",{value:v.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},v.DELVIS_TILRETTELEGGING),e.jsx("option",{value:v.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},v.INGEN_TILRETTELEGGING)]})}),e.jsx(T,{children:e.jsx(k,{isReadOnly:r,name:`${i}.${t}.dato`,label:t===0?n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[l]})}),e.jsx(T,{children:e.jsx(M,{readOnly:r,name:`${i}.${t}.stillingsprosent`,label:t===0?n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[l,se],maxLength:99})}),u&&e.jsx(T,{children:u()})]})})]},b.id)})};h.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const G="tilretteleggingArbeidsforhold",S="tilretteleggingForArbeidsgiver",oe={organisasjonsnummer:"",behovsdato:""},D=({readOnly:r})=>{const i=$(),{control:n}=N(),{fields:g,append:o}=P({control:n,name:`${G}.${S}`}),p=()=>{o(oe)},d=`${G}.${S}`;return e.jsx(e.Fragment,{children:g.map((b,t)=>e.jsxs("div",{children:[e.jsx(_,{children:e.jsxs(w,{children:[e.jsx(T,{children:e.jsx(M,{readOnly:r,name:`${d}.${t}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[l,u=>ee(u.toString()),re],maxLength:99})}),e.jsx(T,{children:e.jsx(k,{name:`${d}.${t}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[l],isReadOnly:r})})]})}),e.jsx(m,{sixteenPx:!0}),e.jsx(h,{name:`${d}.${t}.${ae}`,readOnly:r}),g.length>t+1&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx(m,{sixteenPx:!0})]}),g.length===t+1&&e.jsx(B,{size:"small",variant:"secondary",onClick:p,type:"button",children:e.jsx(y,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},b.id))})};D.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const a=J(W),de="tilretteleggingForArbeidsgiver",s="tilretteleggingArbeidsforhold",F=({readOnly:r})=>{var u,E,x,A;const{watch:i,setError:n,clearErrors:g,formState:o}=N(),p=i(`${s}.sokForSelvstendigNaringsdrivende`),d=i(`${s}.sokForFrilans`),b=i(`${s}.sokForArbeidsgiver`),t=!p&&!d&&!b;return V.useEffect(()=>{t&&n(`${s}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),t||g(`${s}.notRegisteredInput`)},[t]),e.jsx(O,{value:a,children:e.jsxs(X,{children:[e.jsx(C,{size:"small",children:e.jsx(y,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),e.jsx(m,{sixteenPx:!0}),o.isSubmitted&&((E=(u=o.errors[s])==null?void 0:u.notRegisteredInput)==null?void 0:E.message)&&e.jsx(K,{children:(A=(x=o.errors[s])==null?void 0:x.notRegisteredInput)==null?void 0:A.message}),e.jsx(j,{name:`${s}.sokForSelvstendigNaringsdrivende`,label:e.jsx(y,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[l],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(m,{sixteenPx:!0}),p&&e.jsxs(f,{children:[e.jsx(k,{name:`${s}.behovsdatoSN`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[l],isReadOnly:r}),e.jsx(h,{name:`${s}.${le}`,readOnly:r})]}),e.jsx(j,{name:`${s}.sokForFrilans`,label:e.jsx(y,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[l],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(m,{sixteenPx:!0}),d&&e.jsxs(f,{children:[e.jsx(k,{name:`${s}.behovsdatoFrilans`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[l],isReadOnly:r}),e.jsx(h,{name:`${s}.${ge}`,readOnly:r})]}),e.jsx(j,{name:`${s}.sokForArbeidsgiver`,label:e.jsx(y,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[l],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(m,{sixteenPx:!0}),b&&e.jsx(f,{children:e.jsx(D,{readOnly:r})})]})})};F.initialValues=()=>({[s]:{[de]:[{}]}});const ue=r=>{let i=[];return r!=null&&r.sokForArbeidsgiver&&(r!=null&&r.tilretteleggingForArbeidsgiver)&&(i=i.concat(r.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver})))),r!=null&&r.sokForFrilans&&i.push({"@type":"FR",behovsdato:r.behovsdatoFrilans,tilrettelegginger:r.tilretteleggingFrilans}),r!=null&&r.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:r.behovsdatoSN,tilrettelegginger:r.tilretteleggingSelvstendigNaringsdrivende}),i};F.transformValues=({tilretteleggingArbeidsforhold:r})=>({[s]:ue(r)});F.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    [tilretteleggingForArbeidsgiverFieldArrayName]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      tilretteleggingArbeidsgiver?: Tilrettelegging[];
    }[];
    sokForArbeidsgiver?: boolean;
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    tilretteleggingFrilans?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  [tilretteleggingForArbeidsgiverFieldArrayName]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    tilretteleggingArbeidsgiver?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  tilretteleggingFrilans?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  [tilretteleggingForArbeidsgiverFieldArrayName]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    tilretteleggingArbeidsgiver?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  tilretteleggingFrilans?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
}`,signature:{properties:[{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilretteleggingArbeidsgiver?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilretteleggingArbeidsgiver?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ tilretteleggingArbeidsforhold }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    [tilretteleggingForArbeidsgiverFieldArrayName]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      tilretteleggingArbeidsgiver?: Tilrettelegging[];
    }[];
    sokForArbeidsgiver?: boolean;
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    tilretteleggingFrilans?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  [tilretteleggingForArbeidsgiverFieldArrayName]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    tilretteleggingArbeidsgiver?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  tilretteleggingFrilans?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  [tilretteleggingForArbeidsgiverFieldArrayName]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    tilretteleggingArbeidsgiver?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  tilretteleggingFrilans?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
}`,signature:{properties:[{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilretteleggingArbeidsgiver?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilretteleggingArbeidsgiver?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ke={title:"ui-komponenter/tilrettelegging-svp",component:F,parameters:{submitCallback:ie("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:i}})=>{const n=Q({defaultValues:F.initialValues()});return e.jsx(U,{formMethods:n,onSubmit:g=>i(F.transformValues(g)),children:e.jsxs(Y,{gap:"10",children:[e.jsx(F,{...r}),e.jsx(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={};var L,q,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(R=(q=c.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const he=["Default"];export{c as Default,he as __namedExportsOrder,ke as default};
