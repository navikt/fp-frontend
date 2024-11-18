import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as a,s as H,o as z,l as J,a as O}from"./index.es-8Fll0b49.js";import{d as P,e as x,f as M,I as C,y as v,W as _,b as B,L as c,n as K,P as h,F as q,B as w,M as b,t as X,c as W,S as Q,H as U,E as Y,k as j,l as E,m as Z,a as ee,$ as re,V as ie}from"./nb_NO-gSijKUYs.js";import{r as V}from"./index-DRjF_FHU.js";import"./aktivitetStatus-B1m96ipJ.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";var u=(r=>(r.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",r.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",r.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",r))(u||{});const te="_notLastRow_uwn16_1",ne={notLastRow:te},se=H(100),le="tilretteleggingArbeidsgiver",ae="tilretteleggingSelvstendigNaringsdrivende",ge="tilretteleggingFrilans",I={tilretteleggingType:"",dato:"",stillingsprosent:""},f=({readOnly:r,name:n})=>{const s=P(),{control:g}=x(),{fields:o,remove:F,append:d}=M({control:g,name:n});return V.useEffect(()=>{o.length===0&&d(I)},[]),e.jsx(C,{fields:o,emptyPeriodTemplate:I,bodyText:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:d,remove:F,children:(T,i,m)=>e.jsxs("div",{className:i!==o.length-1?ne.notLastRow:"",children:[e.jsx(v,{sixteenPx:!0}),e.jsx(_,{children:e.jsxs(B,{children:[e.jsx(c,{children:e.jsx(K,{readOnly:r,name:`${n}.${i}.tilretteleggingType`,label:i===0?s.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[a],selectValues:[e.jsx("option",{value:u.HEL_TILRETTELEGGING,children:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},u.HEL_TILRETTELEGGING),e.jsx("option",{value:u.DELVIS_TILRETTELEGGING,children:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},u.DELVIS_TILRETTELEGGING),e.jsx("option",{value:u.INGEN_TILRETTELEGGING,children:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},u.INGEN_TILRETTELEGGING)]})}),e.jsx(c,{children:e.jsx(h,{isReadOnly:r,name:`${n}.${i}.dato`,label:i===0?s.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[a]})}),e.jsx(c,{children:e.jsx(q,{readOnly:r,name:`${n}.${i}.stillingsprosent`,label:i===0?s.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[a,se],maxLength:99})}),m&&e.jsx(c,{children:m()})]})})]},T.id)})};f.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const G="tilretteleggingArbeidsforhold",L="tilretteleggingForArbeidsgiver",oe={organisasjonsnummer:"",behovsdato:""},D=({readOnly:r})=>{const n=P(),{control:s}=x(),{fields:g,append:o}=M({control:s,name:`${G}.${L}`}),F=()=>{o(oe)},d=`${G}.${L}`;return e.jsx(e.Fragment,{children:g.map((T,i)=>e.jsxs("div",{children:[e.jsx(_,{children:e.jsxs(B,{children:[e.jsx(c,{children:e.jsx(q,{readOnly:r,name:`${d}.${i}.organisasjonsnummer`,label:n.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[a,m=>z(m.toString()),J],maxLength:99})}),e.jsx(c,{children:e.jsx(h,{name:`${d}.${i}.behovsdato`,label:n.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[a],isReadOnly:r})})]})}),e.jsx(v,{sixteenPx:!0}),e.jsx(f,{name:`${d}.${i}.${le}`,readOnly:r}),g.length>i+1&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx(v,{sixteenPx:!0})]}),g.length===i+1&&e.jsx(w,{size:"small",variant:"secondary",onClick:F,type:"button",children:e.jsx(b,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},T.id))})};D.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const l=X(Z),de="tilretteleggingForArbeidsgiver",t="tilretteleggingArbeidsforhold",y=({readOnly:r})=>{var m,A,N,k;const{watch:n,setError:s,clearErrors:g,formState:o}=x(),F=n(`${t}.sokForSelvstendigNaringsdrivende`),d=n(`${t}.sokForFrilans`),T=n(`${t}.sokForArbeidsgiver`),i=!F&&!d&&!T;return V.useEffect(()=>{i&&s(`${t}.notRegisteredInput`,{type:"custom",message:l.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),i||g(`${t}.notRegisteredInput`)},[i]),e.jsx(W,{value:l,children:e.jsxs(Q,{children:[e.jsx(U,{size:"small",children:e.jsx(b,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),e.jsx(v,{sixteenPx:!0}),o.isSubmitted&&((A=(m=o.errors[t])==null?void 0:m.notRegisteredInput)==null?void 0:A.message)&&e.jsx(Y,{children:(k=(N=o.errors[t])==null?void 0:N.notRegisteredInput)==null?void 0:k.message}),e.jsx(j,{name:`${t}.sokForSelvstendigNaringsdrivende`,label:e.jsx(b,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[a],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(v,{sixteenPx:!0}),F&&e.jsxs(E,{children:[e.jsx(h,{name:`${t}.behovsdatoSN`,label:l.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[a],isReadOnly:r}),e.jsx(f,{name:`${t}.${ae}`,readOnly:r})]}),e.jsx(j,{name:`${t}.sokForFrilans`,label:e.jsx(b,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[a],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(v,{sixteenPx:!0}),d&&e.jsxs(E,{children:[e.jsx(h,{name:`${t}.behovsdatoFrilans`,label:l.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[a],isReadOnly:r}),e.jsx(f,{name:`${t}.${ge}`,readOnly:r})]}),e.jsx(j,{name:`${t}.sokForArbeidsgiver`,label:e.jsx(b,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[a],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(v,{sixteenPx:!0}),T&&e.jsx(E,{children:e.jsx(D,{readOnly:r})})]})})};y.buildInitialValues=()=>({[t]:{[de]:[{}]}});y.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const he={title:"papirsoknad/ui-komponenter/tilrettelegging-svp",component:y,parameters:{submitCallback:O("onSubmit")},args:{readOnly:!1},render:function(n,{parameters:{submitCallback:s}}){const g=ee();return e.jsx(re,{formMethods:g,onSubmit:s,children:e.jsxs(ie,{gap:"10",children:[e.jsx(y,{...n}),e.jsx(w,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},p={};var S,R,$;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const fe=["Default"];export{p as Default,fe as __namedExportsOrder,he as default};
