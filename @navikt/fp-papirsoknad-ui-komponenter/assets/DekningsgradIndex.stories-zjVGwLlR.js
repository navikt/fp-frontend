import{R as e}from"./index-OjgoNOWw.js";import{t as g,R as c,H as p,g as i,T as u,m as f,a as k,b,O as x,B as E}from"./nb_NO-oCapN-Td.js";import{r as y}from"./index.es-ynu9s7Vi.js";import"./v4-yQnnJER4.js";import"./index-mQqIOHEI.js";const a=g(f),m=({readOnly:t})=>e.createElement(c,null,e.createElement(p,{size:"small"},a.formatMessage({id:"Registrering.Dekningsgrad.Title"})),e.createElement(i,{sixteenPx:!0}),e.createElement(u,{name:"dekningsgrad",validate:[y],isReadOnly:t,isHorizontal:!0,radios:[{label:a.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:a.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})),d=m;m.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _={title:"papirsoknad/ui-komponenter/dekningsgrad",component:d},D=({submitCallback:t})=>{const l=b();return e.createElement(x,{formMethods:l,onSubmit:t},e.createElement(d,{readOnly:!1}),e.createElement(i,{fourtyPx:!0}),e.createElement(E,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},r=D.bind({});r.args={submitCallback:k("button-click")};var n,s,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,_ as default};
