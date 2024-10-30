import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{S as p,H as c,M as r,y as m,O as u,t as x,P as f,m as g,a as k,b,$ as M,B as j}from"./nb_NO-eDexvpdT.js";import{r as y,b as D,_ as h}from"./index.es-BXM60ixv.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DQZRloWl.js";import"./index-BbmHap-z.js";const d=({readOnly:e})=>t.jsxs(p,{children:[t.jsx(c,{size:"small",children:t.jsx(r,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t.jsx(m,{sixteenPx:!0}),t.jsx(u,{name:"mottattDato",label:t.jsx(r,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[y,D,h],isReadOnly:e})]});d.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const P=x(g),o=({readOnly:e})=>t.jsx(f,{value:P,children:t.jsx(d,{readOnly:e})});o.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const K={title:"papirsoknad/ui-komponenter/mottatt-dato",component:o},O=({submitCallback:e})=>{const l=b();return t.jsxs(M,{formMethods:l,onSubmit:e,children:[t.jsx(o,{readOnly:!1}),t.jsx(m,{fourtyPx:!0}),t.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=O.bind({});a.args={submitCallback:k("button-click")};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <MottattDatoPapirsoknadIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,K as default};
