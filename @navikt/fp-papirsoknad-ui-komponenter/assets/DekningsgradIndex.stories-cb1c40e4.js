import{j as e}from"./jsx-runtime-6b79a019.js";import{a as g}from"./chunk-OPEUWD42-a3b45fd8.js";import{t as p,Q as u,J as d,w as c,m as f,a as k,F as x,B as b}from"./nb_NO-b0b70c9a.js";import{r as y}from"./index.es-e11054f4.js";import{H as _}from"./Heading-51f79073.js";import"./index-ccf6a75d.js";import"./index-8d7a8128.js";const n=p(f),a=({readOnly:s})=>e.jsxs(u,{children:[e.jsx(_,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(c,{name:"dekningsgrad",validate:[y],isReadOnly:s,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),l=a;try{a.displayName="DekningsgradIndex",a.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"DekningsgradIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const R={title:"papirsoknad/ui-komponenter/dekningsgrad",component:l},j=({submitCallback:s})=>{const m=k();return e.jsxs(x,{formMethods:m,onSubmit:s,children:[e.jsx(l,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=j.bind({});r.args={submitCallback:g("button-click")};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,R as default};
//# sourceMappingURL=DekningsgradIndex.stories-cb1c40e4.js.map
