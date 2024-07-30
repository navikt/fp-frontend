import{r as M,R as e}from"./index-Dl6G-zuu.js";import{h as _,i as A,l as q,q as z,b as d,W as w,e as j,L as F,F as O,f as p,w as x,B as D,M as T,t as C,k as J,S as K,H as X,E as W,P as f,O as h,m as Q,a as U,c as Y,d as Z}from"./nb_NO-FpxXeSMP.js";import{r as s,N as ee,E as te,A as re}from"./index.es-BOP7ekyo.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-D5dJDnOJ.js";import"./index-Dmr9vlPS.js";const E={HEL_TILRETTELEGGING:"HEL_TILRETTELEGGING",DELVIS_TILRETTELEGGING:"DELVIS_TILRETTELEGGING",INGEN_TILRETTELEGGING:"INGEN_TILRETTELEGGING"},ne="_notLastRow_uwn16_1",ie={notLastRow:ne},le=ee(100),ae="tilretteleggingArbeidsgiver",se="tilretteleggingSelvstendigNaringsdrivende",ge="tilretteleggingFrilans",L={tilretteleggingType:"",dato:"",stillingsprosent:""},y=({readOnly:t,name:i})=>{const l=_(),{control:m}=A(),{fields:g,remove:v,append:o}=q({control:m,name:i});return M.useEffect(()=>{g.length===0&&o(L)},[]),e.createElement(z,{fields:g,emptyPeriodTemplate:L,bodyText:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:t,append:o,remove:v},(c,r,u)=>e.createElement("div",{key:c.id,className:r!==g.length-1?ie.notLastRow:""},e.createElement(d,{sixteenPx:!0}),e.createElement(w,null,e.createElement(j,null,e.createElement(F,null,e.createElement(O,{readOnly:t,name:`${i}.${r}.tilretteleggingType`,label:r===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[s],selectValues:[e.createElement("option",{value:E.HEL_TILRETTELEGGING,key:E.HEL_TILRETTELEGGING},l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})),e.createElement("option",{value:E.DELVIS_TILRETTELEGGING,key:E.DELVIS_TILRETTELEGGING},l.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})),e.createElement("option",{value:E.INGEN_TILRETTELEGGING,key:E.INGEN_TILRETTELEGGING},l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"}))]})),e.createElement(F,null,e.createElement(p,{isReadOnly:t,name:`${i}.${r}.dato`,label:r===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[s]})),e.createElement(F,null,e.createElement(x,{readOnly:t,name:`${i}.${r}.stillingsprosent`,label:r===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[s,le],maxLength:99})),u&&e.createElement(F,null,u())))))};y.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const S="tilretteleggingArbeidsforhold",R="tilretteleggingForArbeidsgiver",oe={organisasjonsnummer:"",behovsdato:""},V=({readOnly:t})=>{const i=_(),{control:l}=A(),{fields:m,append:g}=q({control:l,name:`${S}.${R}`}),v=()=>{g(oe)},o=`${S}.${R}`;return e.createElement(e.Fragment,null,m.map((c,r)=>e.createElement("div",{key:c.id},e.createElement(w,null,e.createElement(j,null,e.createElement(F,null,e.createElement(x,{readOnly:t,name:`${o}.${r}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[s,u=>te(u.toString()),re],maxLength:99})),e.createElement(F,null,e.createElement(p,{name:`${o}.${r}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[s],isReadOnly:t})))),e.createElement(d,{sixteenPx:!0}),e.createElement(y,{name:`${o}.${r}.${ae}`,readOnly:t}),m.length>r+1&&e.createElement(e.Fragment,null,e.createElement("hr",null),e.createElement(d,{sixteenPx:!0})),m.length===r+1&&e.createElement(D,{size:"small",variant:"secondary",onClick:v,type:"button"},e.createElement(T,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})))))};V.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const a=C(Q),de="tilretteleggingForArbeidsgiver",n="tilretteleggingArbeidsforhold",k=({readOnly:t})=>{var u,N,I,G;const{watch:i,setError:l,clearErrors:m,formState:g}=A(),v=i(`${n}.sokForSelvstendigNaringsdrivende`),o=i(`${n}.sokForFrilans`),c=i(`${n}.sokForArbeidsgiver`),r=!v&&!o&&!c;return M.useEffect(()=>{r&&l(`${n}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),r||m(`${n}.notRegisteredInput`)},[r]),e.createElement(J,{value:a},e.createElement(K,null,e.createElement(X,{size:"small"},e.createElement(T,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})),e.createElement(d,{sixteenPx:!0}),g.isSubmitted&&((N=(u=g.errors[n])==null?void 0:u.notRegisteredInput)==null?void 0:N.message)&&e.createElement(W,null,(G=(I=g.errors[n])==null?void 0:I.notRegisteredInput)==null?void 0:G.message),e.createElement(f,{name:`${n}.sokForSelvstendigNaringsdrivende`,label:e.createElement(T,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[s],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.createElement(d,{sixteenPx:!0}),v&&e.createElement(h,null,e.createElement(p,{name:`${n}.behovsdatoSN`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[s],isReadOnly:t}),e.createElement(y,{name:`${n}.${se}`,readOnly:t})),e.createElement(f,{name:`${n}.sokForFrilans`,label:e.createElement(T,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[s],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.createElement(d,{sixteenPx:!0}),o&&e.createElement(h,null,e.createElement(p,{name:`${n}.behovsdatoFrilans`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[s],isReadOnly:t}),e.createElement(y,{name:`${n}.${ge}`,readOnly:t})),e.createElement(f,{name:`${n}.sokForArbeidsgiver`,label:e.createElement(T,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[s],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.createElement(d,{sixteenPx:!0}),c&&e.createElement(h,null,e.createElement(V,{readOnly:t}))))};k.buildInitialValues=()=>({[n]:{[de]:[{}]}});const H=k;k.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel"};const be={title:"papirsoknad/ui-komponenter/tilrettelegging-svp",component:H},me=({submitCallback:t})=>{const i=Y();return e.createElement(Z,{formMethods:i,onSubmit:t},e.createElement(H,{readOnly:!1}),e.createElement(d,{fourtyPx:!0}),e.createElement(D,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},b=me.bind({});b.args={submitCallback:U("button-click")};var $,P,B;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <BehovForTilretteleggingPanel readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const pe=["Default"];export{b as Default,pe as __namedExportsOrder,be as default};
