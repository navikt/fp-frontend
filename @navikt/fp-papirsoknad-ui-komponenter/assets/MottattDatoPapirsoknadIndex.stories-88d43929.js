import{j as t}from"./jsx-runtime-d079401a.js";import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Q as u,d as n,J as m,j as f,t as x,P as y,m as _,u as g,F as k,B as j}from"./nb_NO-bba0f3ef.js";import{r as D,b as M,_ as b}from"./index.es-c52020bc.js";import{H as P}from"./Heading-35f9e313.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const o=({readOnly:a})=>t.jsxs(u,{children:[t.jsx(P,{size:"small",children:t.jsx(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t.jsx(m,{sixteenPx:!0}),t.jsx(f,{name:"mottattDato",label:t.jsx(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[D,M,b],isReadOnly:a})]});try{o.displayName="MottattDatoPanel",o.__docgenInfo={description:`MottattDatoPanel

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
//# sourceMappingURL=MottattDatoPapirsoknadIndex.stories-88d43929.js.map
