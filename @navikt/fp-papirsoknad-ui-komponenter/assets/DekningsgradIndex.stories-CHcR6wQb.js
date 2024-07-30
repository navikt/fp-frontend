import{R as e}from"./index-Dl6G-zuu.js";import{t as g,S as c,H as p,b as i,P as u,m as f,a as k,c as b,d as x,B as D}from"./nb_NO-FpxXeSMP.js";import{r as E}from"./index.es-BOP7ekyo.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-D5dJDnOJ.js";import"./index-Dmr9vlPS.js";const a=g(f),m=({readOnly:t})=>e.createElement(c,null,e.createElement(p,{size:"small"},a.formatMessage({id:"Registrering.Dekningsgrad.Title"})),e.createElement(i,{sixteenPx:!0}),e.createElement(u,{name:"dekningsgrad",validate:[E],isReadOnly:t,isHorizontal:!0,radios:[{label:a.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:a.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})),d=m;m.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _={title:"papirsoknad/ui-komponenter/dekningsgrad",component:d},y=({submitCallback:t})=>{const l=b();return e.createElement(x,{formMethods:l,onSubmit:t},e.createElement(d,{readOnly:!1}),e.createElement(i,{fourtyPx:!0}),e.createElement(D,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},r=y.bind({});r.args={submitCallback:k("button-click")};var n,s,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
