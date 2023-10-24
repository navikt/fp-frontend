import{j as l,a as t}from"./jsx-runtime-f8e698f3.js";import{a as u}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as f,H as g,f as n,g as m,b as y,t as _,P as k,m as b,a as D,O as M,c as P}from"./nb_NO-89bb17a2.js";import{r as x,b as h,_ as O}from"./index.es-c68f3c29.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const o=({readOnly:a})=>l(f,{children:[t(g,{size:"small",children:t(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t(m,{sixteenPx:!0}),t(y,{name:"mottattDato",label:t(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[x,h,O],isReadOnly:a})]});try{o.displayName="MottattDatoPanel",o.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"MottattDatoPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const v=_(b),r=({readOnly:a})=>t(k,{value:v,children:t(o,{readOnly:a})}),p=r;try{r.displayName="MottattDatoPapirsoknadIndex",r.__docgenInfo={description:"",displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const z={title:"papirsoknad/ui-komponenter/mottatt-dato",component:p},I=({submitCallback:a})=>{const c=D();return l(M,{formMethods:c,onSubmit:a,children:[t(p,{readOnly:!1}),t(m,{fourtyPx:!0}),t(P,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},e=I.bind({});e.args={submitCallback:u("button-click")};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,z as default};
//# sourceMappingURL=MottattDatoPapirsoknadIndex.stories-de687e40.js.map
