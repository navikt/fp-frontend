import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as l,S as g,H as p,y as d,k as u,m as c,a as f,b as k,$ as x,B as b}from"./nb_NO-D_TgqB1W.js";import{V as j}from"./index.es-D_GpvDOR.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const n=l(c),a=({readOnly:r})=>e.jsxs(g,{children:[e.jsx(p,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(u,{name:"dekningsgrad",validate:[j],isReadOnly:r,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});a.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _={title:"papirsoknad/ui-komponenter/dekningsgrad",component:a},y=({submitCallback:r})=>{const m=k();return e.jsxs(x,{formMethods:m,onSubmit:r,children:[e.jsx(a,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=y.bind({});s.args={submitCallback:f("button-click")};var t,o,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const I=["Default"];export{s as Default,I as __namedExportsOrder,_ as default};
