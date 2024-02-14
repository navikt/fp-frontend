import{j as d,a as e}from"./jsx-runtime-ESnF-waY.js";import{t as p,R as c,H as u,g as l,T as f,m as k,a as b,b as x,O as y,B as _}from"./nb_NO-61DFl8RV.js";import{r as D}from"./index.es-tGi7gE_T.js";import"./index-OjgoNOWw.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-mQqIOHEI.js";const n=p(k),s=({readOnly:a})=>d(c,{children:[e(u,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e(l,{sixteenPx:!0}),e(f,{name:"dekningsgrad",validate:[D],isReadOnly:a,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),m=s;try{s.displayName="DekningsgradIndex",s.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"DekningsgradIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const T={title:"papirsoknad/ui-komponenter/dekningsgrad",component:m},O=({submitCallback:a})=>{const g=x();return d(y,{formMethods:g,onSubmit:a,children:[e(m,{readOnly:!1}),e(l,{fourtyPx:!0}),e(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=O.bind({});r.args={submitCallback:b("button-click")};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,T as default};
