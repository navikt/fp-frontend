import{j as e}from"./jsx-runtime-69eee039.js";import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{b as u,Q as k,J as p,w as g,t as f,P as x,m as y,u as S,F as _,B as b}from"./nb_NO-62594ebc.js";import{r as N}from"./index.es-fa80d0cc.js";import{H as j}from"./Heading-c79e0b8b.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},t=({readOnly:r})=>{const a=u();return e.jsxs(k,{children:[e.jsx(j,{size:"small",children:a.formatMessage({id:"Registrering.Sprak"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(g,{name:"språkkode",validate:[N],isReadOnly:r,radios:[{label:a.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:a.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:a.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};try{t.displayName="SprakPanel",t.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",displayName:"SprakPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const P=f(y),o=({readOnly:r})=>e.jsx(x,{value:P,children:e.jsx(t,{readOnly:r})}),m=o;try{o.displayName="SprakPapirsoknadIndex",o.__docgenInfo={description:"",displayName:"SprakPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const R={title:"papirsoknad/ui-komponenter/sprak",component:m},v=({submitCallback:r})=>{const a=S();return e.jsxs(_,{formMethods:a,onSubmit:r,children:[e.jsx(m,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=v.bind({});s.args={submitCallback:c("button-click")};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,R as default};
//# sourceMappingURL=SprakPapirsoknadIndex.stories-91a3ff28.js.map
