import{j as e}from"./dayjs.min-D0F5fy79.js";import{t as g,S as p,H as u,y as i,F as c,m as f,a as k,b as x,Y as b,B as j}from"./nb_NO-gL8CkKbM.js";import{r as y}from"./index.es-F8_np8M9.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const n=g(f),d=({readOnly:r})=>e.jsxs(p,{children:[e.jsx(u,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(c,{name:"dekningsgrad",validate:[y],isReadOnly:r,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),m=d;d.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _={title:"papirsoknad/ui-komponenter/dekningsgrad",component:m},D=({submitCallback:r})=>{const l=x();return e.jsxs(b,{formMethods:l,onSubmit:r,children:[e.jsx(m,{readOnly:!1}),e.jsx(i,{fourtyPx:!0}),e.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=D.bind({});s.args={submitCallback:k("button-click")};var a,t,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,_ as default};
