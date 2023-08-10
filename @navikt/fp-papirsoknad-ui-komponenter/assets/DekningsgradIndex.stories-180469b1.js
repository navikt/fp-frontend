import{j as e}from"./jsx-runtime-69eee039.js";import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as p,Q as u,J as d,w as c,m as f,u as k,F as x,B as b}from"./nb_NO-b9935103.js";import{r as y}from"./index.es-26c0dd3e.js";import{H as _}from"./Heading-43813b22.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";const n=p(f),a=({readOnly:s})=>e.jsxs(u,{children:[e.jsx(_,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(c,{name:"dekningsgrad",validate:[y],isReadOnly:s,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),m=a;try{a.displayName="DekningsgradIndex",a.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"DekningsgradIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const S={title:"papirsoknad/ui-komponenter/dekningsgrad",component:m},j=({submitCallback:s})=>{const l=k();return e.jsxs(x,{formMethods:l,onSubmit:s,children:[e.jsx(m,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=j.bind({});r.args={submitCallback:g("button-click")};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <DekningsgradIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,S as default};
//# sourceMappingURL=DekningsgradIndex.stories-180469b1.js.map
