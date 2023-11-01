import{j as d,a as e}from"./jsx-runtime-f8e698f3.js";import{a as p}from"./chunk-AY7I2SME-5eb1ab46.js";import{t as c,R as u,H as f,g as l,T as k,m as b,a as x,O as y,c as _}from"./nb_NO-06e163ad.js";import{r as D}from"./index.es-993cfde3.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const n=c(b),s=({readOnly:a})=>d(u,{children:[e(f,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e(l,{sixteenPx:!0}),e(k,{name:"dekningsgrad",validate:[D],isReadOnly:a,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),m=s;try{s.displayName="DekningsgradIndex",s.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"DekningsgradIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const S={title:"papirsoknad/ui-komponenter/dekningsgrad",component:m},O=({submitCallback:a})=>{const g=x();return d(y,{formMethods:g,onSubmit:a,children:[e(m,{readOnly:!1}),e(l,{fourtyPx:!0}),e(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=O.bind({});r.args={submitCallback:p("button-click")};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,S as default};
//# sourceMappingURL=DekningsgradIndex.stories-abba285e.js.map
