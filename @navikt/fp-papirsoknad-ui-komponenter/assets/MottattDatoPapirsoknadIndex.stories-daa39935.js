import{j as t}from"./jsx-runtime-6b79a019.js";import{a as c}from"./chunk-OPEUWD42-a3b45fd8.js";import{Q as u,f as n,J as m,j as f,t as x,P as y,m as _,a as g,F as k,B as j}from"./nb_NO-b0b70c9a.js";import{r as D,b as M,_ as b}from"./index.es-e11054f4.js";import{H as P}from"./Heading-51f79073.js";import"./index-ccf6a75d.js";import"./index-8d7a8128.js";const o=({readOnly:a})=>t.jsxs(u,{children:[t.jsx(P,{size:"small",children:t.jsx(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t.jsx(m,{sixteenPx:!0}),t.jsx(f,{name:"mottattDato",label:t.jsx(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[D,M,b],isReadOnly:a})]});try{o.displayName="MottattDatoPanel",o.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"MottattDatoPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const h=x(_),r=({readOnly:a})=>t.jsx(y,{value:h,children:t.jsx(o,{readOnly:a})}),l=r;try{r.displayName="MottattDatoPapirsoknadIndex",r.__docgenInfo={description:"",displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const S={title:"papirsoknad/ui-komponenter/mottatt-dato",component:l},O=({submitCallback:a})=>{const p=g();return t.jsxs(k,{formMethods:p,onSubmit:a,children:[t.jsx(l,{readOnly:!1}),t.jsx(m,{fourtyPx:!0}),t.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},e=O.bind({});e.args={submitCallback:c("button-click")};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,S as default};
//# sourceMappingURL=MottattDatoPapirsoknadIndex.stories-daa39935.js.map
