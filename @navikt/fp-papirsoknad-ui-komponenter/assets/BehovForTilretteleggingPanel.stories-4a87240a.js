import{j as e}from"./jsx-runtime-d079401a.js";import{a as H}from"./chunk-AY7I2SME-c7b6cf8a.js";import{f as R,g as A,j as S,n as q,b as d,U as k,Y as V,z as h,S as w,a as f,C as O,B as z,F as T,t as J,P as K,D as U,H as X,E as Y,T as b,h as y,m as Q,c as W,O as Z}from"./nb_NO-e8a3fb59.js";import{r as C}from"./index-f1f2c4b1.js";import{r as n,N as ee,E as re,A as te}from"./index.es-40a199ab.js";import{q as v}from"./index.es-d4601d30.js";import"./index-c74c9f7f.js";const ie="_notLastRow_uwn16_1",se={notLastRow:ie},le=ee(100),ae="tilretteleggingArbeidsgiver",ne="tilretteleggingSelvstendigNaringsdrivende",oe="tilretteleggingFrilans",P={tilretteleggingType:"",dato:"",stillingsprosent:""},x=({readOnly:r,name:s})=>{const l=R(),{control:c}=A(),{fields:o,remove:F,append:g}=S({control:c,name:s});return C.useEffect(()=>{o.length===0&&g(P)},[]),e.jsx(q,{fields:o,emptyPeriodTemplate:P,bodyText:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:r,append:g,remove:F,children:(u,t,m)=>e.jsxs("div",{className:t!==o.length-1?se.notLastRow:"",children:[e.jsx(d,{sixteenPx:!0}),e.jsx(k,{children:e.jsxs(V,{children:[e.jsx(h,{children:e.jsx(w,{readOnly:r,name:`${s}.${t}.tilretteleggingType`,label:t===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[n],selectValues:[e.jsx("option",{value:v.HEL_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},v.HEL_TILRETTELEGGING),e.jsx("option",{value:v.DELVIS_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},v.DELVIS_TILRETTELEGGING),e.jsx("option",{value:v.INGEN_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},v.INGEN_TILRETTELEGGING)]})}),e.jsx(h,{children:e.jsx(f,{isReadOnly:r,name:`${s}.${t}.dato`,label:t===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[n]})}),e.jsx(h,{children:e.jsx(O,{readOnly:r,name:`${s}.${t}.stillingsprosent`,label:t===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[n,le],maxLength:99})}),m&&e.jsx(h,{children:m()})]})})]},u.id)})};try{x.displayName="BehovForTilretteleggingFieldArray",x.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const $="tilretteleggingArbeidsforhold",I="tilretteleggingForArbeidsgiver",ge={organisasjonsnummer:"",behovsdato:""},E=({readOnly:r})=>{const s=R(),{control:l}=A(),{fields:c,append:o}=S({control:l,name:`${$}.${I}`}),F=()=>{o(ge)},g=`${$}.${I}`;return e.jsx(e.Fragment,{children:c.map((u,t)=>e.jsxs("div",{children:[e.jsx(k,{children:e.jsxs(V,{children:[e.jsx(h,{children:e.jsx(O,{readOnly:r,name:`${g}.${t}.organisasjonsnummer`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[n,m=>re(m.toString()),te],maxLength:99})}),e.jsx(h,{children:e.jsx(f,{name:`${g}.${t}.behovsdato`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[n],isReadOnly:r})})]})}),e.jsx(d,{sixteenPx:!0}),e.jsx(x,{name:`${g}.${t}.${ae}`,readOnly:r}),c.length>t+1&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx(d,{sixteenPx:!0})]}),c.length===t+1&&e.jsx(z,{size:"small",variant:"secondary",onClick:F,type:"button",children:e.jsx(T,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},u.id))})};try{E.displayName="TilretteleggingForArbeidsgiverFieldArray",E.__docgenInfo={description:"",displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const a=J(Q),de="tilretteleggingForArbeidsgiver",i="tilretteleggingArbeidsforhold",j=({readOnly:r})=>{var m,N,_,B;const{watch:s,setError:l,clearErrors:c,formState:o}=A(),F=s(`${i}.sokForSelvstendigNaringsdrivende`),g=s(`${i}.sokForFrilans`),u=s(`${i}.sokForArbeidsgiver`),t=!F&&!g&&!u;return C.useEffect(()=>{t&&l(`${i}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),t||c(`${i}.notRegisteredInput`)},[t]),e.jsx(K,{value:a,children:e.jsxs(U,{children:[e.jsx(X,{size:"small",children:e.jsx(T,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),e.jsx(d,{sixteenPx:!0}),o.isSubmitted&&((N=(m=o.errors[i])==null?void 0:m.notRegisteredInput)==null?void 0:N.message)&&e.jsx(Y,{children:(B=(_=o.errors[i])==null?void 0:_.notRegisteredInput)==null?void 0:B.message}),e.jsx(b,{name:`${i}.sokForSelvstendigNaringsdrivende`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[n],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),F&&e.jsxs(y,{children:[e.jsx(f,{name:`${i}.behovsdatoSN`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[n],isReadOnly:r}),e.jsx(x,{name:`${i}.${ne}`,readOnly:r})]}),e.jsx(b,{name:`${i}.sokForFrilans`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[n],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),g&&e.jsxs(y,{children:[e.jsx(f,{name:`${i}.behovsdatoFrilans`,label:a.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[n],isReadOnly:r}),e.jsx(x,{name:`${i}.${oe}`,readOnly:r})]}),e.jsx(b,{name:`${i}.sokForArbeidsgiver`,label:e.jsx(T,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[n],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:a.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),u&&e.jsx(y,{children:e.jsx(E,{readOnly:r})})]})})};j.buildInitialValues=()=>({[i]:{[de]:[{}]}});const D=j;try{j.displayName="BehovForTilretteleggingPanel",j.__docgenInfo={description:"",displayName:"BehovForTilretteleggingPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const xe={title:"papirsoknad/ui-komponenter/tilrettelegging-svp",component:D},ce=({submitCallback:r})=>{const s=W();return e.jsxs(Z,{formMethods:s,onSubmit:r,children:[e.jsx(D,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(z,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},p=ce.bind({});p.args={submitCallback:H("button-click")};var L,G,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
//# sourceMappingURL=BehovForTilretteleggingPanel.stories-4a87240a.js.map
