import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{S as p,H as c,M as s,y as m,P as u,t as x,d as f,m as g,a as k,b as M,$ as b,B as j}from"./nb_NO-D_TgqB1W.js";import{V as y,w as D,G as P}from"./index.es-D_GpvDOR.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const d=({readOnly:e})=>t.jsxs(p,{children:[t.jsx(c,{size:"small",children:t.jsx(s,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t.jsx(m,{sixteenPx:!0}),t.jsx(u,{name:"mottattDato",label:t.jsx(s,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[y,D,P],isReadOnly:e})]});d.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const h=x(g),o=({readOnly:e})=>t.jsx(f,{value:h,children:t.jsx(d,{readOnly:e})});o.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const K={title:"papirsoknad/ui-komponenter/mottatt-dato",component:o},v=({submitCallback:e})=>{const l=M();return t.jsxs(b,{formMethods:l,onSubmit:e,children:[t.jsx(o,{readOnly:!1}),t.jsx(m,{fourtyPx:!0}),t.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=v.bind({});a.args={submitCallback:k("button-click")};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
