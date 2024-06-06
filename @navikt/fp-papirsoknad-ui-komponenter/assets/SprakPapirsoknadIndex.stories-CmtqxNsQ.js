import{R as e}from"./index-Dl6G-zuu.js";import{e as c,R as u,H as k,g as l,T as g,t as f,P as S,m as b,a as E,b as y,O as N,B as v}from"./nb_NO-Dx9Z9-UI.js";import{r as O}from"./index.es-C0zsNI6o.js";import"./v4-CQkTLCs1.js";import"./index-D1_ZHIBm.js";const s={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},m=({readOnly:r})=>{const a=c();return e.createElement(u,null,e.createElement(k,{size:"small"},a.formatMessage({id:"Registrering.Sprak"})),e.createElement(l,{sixteenPx:!0}),e.createElement(g,{name:"språkkode",validate:[O],isReadOnly:r,radios:[{label:a.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:s.BOKMAL},{label:a.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:s.NYNORSK},{label:a.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:s.ENGELSK}]}))};m.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const P=f(b),p=({readOnly:r})=>e.createElement(S,{value:P},e.createElement(m,{readOnly:r})),d=p;p.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _={title:"papirsoknad/ui-komponenter/sprak",component:d},x=({submitCallback:r})=>{const a=y();return e.createElement(N,{formMethods:a,onSubmit:r},e.createElement(d,{readOnly:!1}),e.createElement(l,{fourtyPx:!0}),e.createElement(v,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},t=x.bind({});t.args={submitCallback:E("button-click")};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <SprakPapirsoknadIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,_ as default};
