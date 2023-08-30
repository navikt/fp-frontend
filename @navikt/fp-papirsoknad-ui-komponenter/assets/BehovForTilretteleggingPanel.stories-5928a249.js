import{j as e}from"./jsx-runtime-d079401a.js";import{a as H}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as R,e as A,g as k,h as C,G as d,o as S,s as V,D as v,O as q,j as f,T as O,B as w,d as T,t as J,P as K,Q,H as X,E as U,w as b,I as y,m as W,u as Y,F as Z}from"./nb_NO-8eede04c.js";import{r as z}from"./index-f1f2c4b1.js";import{r as n,N as ee,E as re,A as te}from"./index.es-840a5222.js";import{f as u}from"./index.es-fe5c891b.js";import"./index-c74c9f7f.js";const ie="_notLastRow_uwn16_1",se={notLastRow:ie},le=ee(100),ae="tilretteleggingArbeidsgiver",ne="tilretteleggingSelvstendigNaringsdrivende",oe="tilretteleggingFrilans",$={tilretteleggingType:"",dato:"",stillingsprosent:""},x=({readOnly:r,name:s})=>{const l=R(),{control:c}=A(),{fields:o,remove:m,append:g}=k({control:c,name:s});return z.useEffect(()=>{o.length===0&&g($)},[]),e.jsx(C,{fields:o,emptyPeriodTemplate:$,bodyText:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:g,remove:m,children:(F,t,h)=>e.jsxs("div",{className:t!==o.length-1?se.notLastRow:"",children:[e.jsx(d,{sixteenPx:!0}),e.jsx(S,{children:e.jsxs(V,{children:[e.jsx(v,{children:e.jsx(q,{readOnly:r,name:`${s}.${t}.tilretteleggingType`,label:t===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[n],selectValues:[e.jsx("option",{value:u.HEL_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},u.HEL_TILRETTELEGGING),e.jsx("option",{value:u.DELVIS_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},u.DELVIS_TILRETTELEGGING),e.jsx("option",{value:u.INGEN_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},u.INGEN_TILRETTELEGGING)]})}),e.jsx(v,{children:e.jsx(f,{isReadOnly:r,name:`${s}.${t}.dato`,label:t===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[n]})}),e.jsx(v,{children:e.jsx(O,{readOnly:r,name:`${s}.${t}.stillingsprosent`,label:t===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[n,le],maxLength:99})}),h&&e.jsx(v,{children:h()})]})})]},F.id)})};try{x.displayName="BehovForTilretteleggingFieldArray",x.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const I="tilretteleggingArbeidsforhold",P="tilretteleggingForArbeidsgiver",ge={organisasjonsnummer:"",behovsdato:""},E=({readOnly:r})=>{const s=R(),{control:l}=A(),{fields:c,append:o}=k({control:l,name:`${I}.${P}`}),m=()=>{o(ge)},g=`${I}.${P}`;return e.jsx(e.Fragment,{children:c.map((F,t)=>e.jsxs("div",{children:[e.jsx(S,{children:e.jsxs(V,{children:[e.jsx(v,{children:e.jsx(O,{readOnly:r,name:`${g}.${t}.organisasjonsnummer`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[n,re,te],maxLength:99})}),e.jsx(v,{children:e.jsx(f,{name:`${g}.${t}.behovsdato`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[n],isReadOnly:r})})]})}),e.jsx(d,{sixteenPx:!0}),e.jsx(x,{name:`${g}.${t}.${ae}`,readOnly:r}),c.length>t+1&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx(d,{sixteenPx:!0})]}),c.length===t+1&&e.jsx(w,{size:"small",variant:"secondary",onClick:m,type:"button",children:e.jsx(T,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},F.id))})};try{E.displayName="TilretteleggingForArbeidsgiverFieldArray",E.__docgenInfo={description:"",displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const a=J(W),de="tilretteleggingForArbeidsgiver",i="tilretteleggingArbeidsforhold",j=({readOnly:r})=>{var h,_,N,B;const{watch:s,setError:l,clearErrors:c,formState:o}=A(),m=s(`${i}.sokForSelvstendigNaringsdrivende`),g=s(`${i}.sokForFrilans`),F=s(`${i}.sokForArbeidsgiver`),t=!m&&!g&&!F;return z.useEffect(()=>{t&&l(`${i}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),t||c(`${i}.notRegisteredInput`)},[t]),e.jsx(K,{value:a,children:e.jsxs(Q,{children:[e.jsx(X,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),e.jsx(d,{sixteenPx:!0}),o.isSubmitted&&((_=(h=o.errors[i])==null?void 0:h.notRegisteredInput)==null?void 0:_.message)&&e.jsx(U,{children:(B=(N=o.errors[i])==null?void 0:N.notRegisteredInput)==null?void 0:B.message}),e.jsx(b,{name:`${i}.sokForSelvstendigNaringsdrivende`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[n],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),m&&e.jsxs(y,{children:[e.jsx(f,{name:`${i}.behovsdatoSN`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[n],isReadOnly:r}),e.jsx(x,{name:`${i}.${ne}`,readOnly:r})]}),e.jsx(b,{name:`${i}.sokForFrilans`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[n],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),g&&e.jsxs(y,{children:[e.jsx(f,{name:`${i}.behovsdatoFrilans`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[n],isReadOnly:r}),e.jsx(x,{name:`${i}.${oe}`,readOnly:r})]}),e.jsx(b,{name:`${i}.sokForArbeidsgiver`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[n],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),F&&e.jsx(y,{children:e.jsx(E,{readOnly:r})})]})})};j.buildInitialValues=()=>({[i]:{[de]:[{}]}});const D=j;try{j.displayName="BehovForTilretteleggingPanel",j.__docgenInfo={description:"",displayName:"BehovForTilretteleggingPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const xe={title:"papirsoknad/ui-komponenter/tilrettelegging-svp",component:D},ce=({submitCallback:r})=>{const s=Y();return e.jsxs(Z,{formMethods:s,onSubmit:r,children:[e.jsx(D,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(w,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},p=ce.bind({});p.args={submitCallback:H("button-click")};var L,G,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(M=(G=p.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const fe=["Default"];export{p as Default,fe as __namedExportsOrder,xe as default};
//# sourceMappingURL=BehovForTilretteleggingPanel.stories-5928a249.js.map
