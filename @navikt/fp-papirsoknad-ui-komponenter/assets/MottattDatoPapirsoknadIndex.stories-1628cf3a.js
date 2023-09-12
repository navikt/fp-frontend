import{j as t}from"./jsx-runtime-d079401a.js";import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Q as u,H as x,e as n,G as l,j as f,t as y,P as _,m as g,a as k,F as j,B as D}from"./nb_NO-54ecb69d.js";import{r as M,b,_ as P}from"./index.es-13218a4b.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const o=({readOnly:a})=>t.jsxs(u,{children:[t.jsx(x,{size:"small",children:t.jsx(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t.jsx(l,{sixteenPx:!0}),t.jsx(f,{name:"mottattDato",label:t.jsx(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[M,b,P],isReadOnly:a})]});try{o.displayName="MottattDatoPanel",o.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"MottattDatoPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const h=y(g),r=({readOnly:a})=>t.jsx(_,{value:h,children:t.jsx(o,{readOnly:a})}),m=r;try{r.displayName="MottattDatoPapirsoknadIndex",r.__docgenInfo={description:"",displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const R={title:"papirsoknad/ui-komponenter/mottatt-dato",component:m},O=({submitCallback:a})=>{const p=k();return t.jsxs(j,{formMethods:p,onSubmit:a,children:[t.jsx(m,{readOnly:!1}),t.jsx(l,{fourtyPx:!0}),t.jsx(D,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},e=O.bind({});e.args={submitCallback:c("button-click")};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,R as default};
//# sourceMappingURL=MottattDatoPapirsoknadIndex.stories-1628cf3a.js.map
