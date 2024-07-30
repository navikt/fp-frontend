import{j as e}from"./dayjs.min-D0F5fy79.js";import{h as P,i as E,l as B,q as z,b as d,W as M,e as _,L as c,F as O,f as h,w as q,B as w,M as b,t as C,k as J,S as K,H as X,E as W,P as y,O as j,m as Q,a as U,c as Y,d as Z}from"./nb_NO-cH9-xN7v.js";import{r as D}from"./index-CTjT7uj6.js";import{r as a,N as ee,E as re,A as te}from"./index.es-DJynhZCR.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const T={HEL_TILRETTELEGGING:"HEL_TILRETTELEGGING",DELVIS_TILRETTELEGGING:"DELVIS_TILRETTELEGGING",INGEN_TILRETTELEGGING:"INGEN_TILRETTELEGGING"},ie="_notLastRow_uwn16_1",ne={notLastRow:ie},se=ee(100),le="tilretteleggingArbeidsgiver",ae="tilretteleggingSelvstendigNaringsdrivende",ge="tilretteleggingFrilans",I={tilretteleggingType:"",dato:"",stillingsprosent:""},f=({readOnly:r,name:n})=>{const s=P(),{control:m}=E(),{fields:g,remove:v,append:o}=B({control:m,name:n});return D.useEffect(()=>{g.length===0&&o(I)},[]),e.jsx(z,{fields:g,emptyPeriodTemplate:I,bodyText:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:o,remove:v,children:(F,t,u)=>e.jsxs("div",{className:t!==g.length-1?ne.notLastRow:"",children:[e.jsx(d,{sixteenPx:!0}),e.jsx(M,{children:e.jsxs(_,{children:[e.jsx(c,{children:e.jsx(O,{readOnly:r,name:`${n}.${t}.tilretteleggingType`,label:t===0?s.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[a],selectValues:[e.jsx("option",{value:T.HEL_TILRETTELEGGING,children:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},T.HEL_TILRETTELEGGING),e.jsx("option",{value:T.DELVIS_TILRETTELEGGING,children:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},T.DELVIS_TILRETTELEGGING),e.jsx("option",{value:T.INGEN_TILRETTELEGGING,children:s.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},T.INGEN_TILRETTELEGGING)]})}),e.jsx(c,{children:e.jsx(h,{isReadOnly:r,name:`${n}.${t}.dato`,label:t===0?s.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[a]})}),e.jsx(c,{children:e.jsx(q,{readOnly:r,name:`${n}.${t}.stillingsprosent`,label:t===0?s.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[a,se],maxLength:99})}),u&&e.jsx(c,{children:u()})]})})]},F.id)})};f.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const G="tilretteleggingArbeidsforhold",L="tilretteleggingForArbeidsgiver",oe={organisasjonsnummer:"",behovsdato:""},V=({readOnly:r})=>{const n=P(),{control:s}=E(),{fields:m,append:g}=B({control:s,name:`${G}.${L}`}),v=()=>{g(oe)},o=`${G}.${L}`;return e.jsx(e.Fragment,{children:m.map((F,t)=>e.jsxs("div",{children:[e.jsx(M,{children:e.jsxs(_,{children:[e.jsx(c,{children:e.jsx(q,{readOnly:r,name:`${o}.${t}.organisasjonsnummer`,label:n.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[a,u=>re(u.toString()),te],maxLength:99})}),e.jsx(c,{children:e.jsx(h,{name:`${o}.${t}.behovsdato`,label:n.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[a],isReadOnly:r})})]})}),e.jsx(d,{sixteenPx:!0}),e.jsx(f,{name:`${o}.${t}.${le}`,readOnly:r}),m.length>t+1&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx(d,{sixteenPx:!0})]}),m.length===t+1&&e.jsx(w,{size:"small",variant:"secondary",onClick:v,type:"button",children:e.jsx(b,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},F.id))})};V.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const l=C(Q),de="tilretteleggingForArbeidsgiver",i="tilretteleggingArbeidsforhold",x=({readOnly:r})=>{var u,A,N,k;const{watch:n,setError:s,clearErrors:m,formState:g}=E(),v=n(`${i}.sokForSelvstendigNaringsdrivende`),o=n(`${i}.sokForFrilans`),F=n(`${i}.sokForArbeidsgiver`),t=!v&&!o&&!F;return D.useEffect(()=>{t&&s(`${i}.notRegisteredInput`,{type:"custom",message:l.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),t||m(`${i}.notRegisteredInput`)},[t]),e.jsx(J,{value:l,children:e.jsxs(K,{children:[e.jsx(X,{size:"small",children:e.jsx(b,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),e.jsx(d,{sixteenPx:!0}),g.isSubmitted&&((A=(u=g.errors[i])==null?void 0:u.notRegisteredInput)==null?void 0:A.message)&&e.jsx(W,{children:(k=(N=g.errors[i])==null?void 0:N.notRegisteredInput)==null?void 0:k.message}),e.jsx(y,{name:`${i}.sokForSelvstendigNaringsdrivende`,label:e.jsx(b,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[a],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),v&&e.jsxs(j,{children:[e.jsx(h,{name:`${i}.behovsdatoSN`,label:l.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[a],isReadOnly:r}),e.jsx(f,{name:`${i}.${ae}`,readOnly:r})]}),e.jsx(y,{name:`${i}.sokForFrilans`,label:e.jsx(b,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[a],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),o&&e.jsxs(j,{children:[e.jsx(h,{name:`${i}.behovsdatoFrilans`,label:l.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[a],isReadOnly:r}),e.jsx(f,{name:`${i}.${ge}`,readOnly:r})]}),e.jsx(y,{name:`${i}.sokForArbeidsgiver`,label:e.jsx(b,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[a],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:l.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),F&&e.jsx(j,{children:e.jsx(V,{readOnly:r})})]})})};x.buildInitialValues=()=>({[i]:{[de]:[{}]}});const H=x;x.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel"};const pe={title:"papirsoknad/ui-komponenter/tilrettelegging-svp",component:H},me=({submitCallback:r})=>{const n=Y();return e.jsxs(Z,{formMethods:n,onSubmit:r,children:[e.jsx(H,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(w,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},p=me.bind({});p.args={submitCallback:U("button-click")};var S,R,$;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const he=["Default"];export{p as Default,he as __namedExportsOrder,pe as default};
