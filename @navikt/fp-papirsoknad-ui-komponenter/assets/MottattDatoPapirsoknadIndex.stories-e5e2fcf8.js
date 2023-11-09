import{j as l,a as t}from"./jsx-runtime-f8e698f3.js";import{a as u}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as f,H as g,l as o,g as m,b as y,t as _,m as k,a as b,O as M,c as D}from"./nb_NO-bd1cc92f.js";import{r as x,b as P,_ as h}from"./index.es-bd381c2f.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const r=({readOnly:a})=>l(f,{children:[t(g,{size:"small",children:t(o.FormattedMessage,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t(m,{sixteenPx:!0}),t(y,{name:"mottattDato",label:t(o.FormattedMessage,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[x,P,h],isReadOnly:a})]});try{r.displayName="MottattDatoPanel",r.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"MottattDatoPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const O=_(k),n=({readOnly:a})=>t(o.RawIntlProvider,{value:O,children:t(r,{readOnly:a})}),p=n;try{n.displayName="MottattDatoPapirsoknadIndex",n.__docgenInfo={description:"",displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const S={title:"papirsoknad/ui-komponenter/mottatt-dato",component:p},v=({submitCallback:a})=>{const c=b();return l(M,{formMethods:c,onSubmit:a,children:[t(p,{readOnly:!1}),t(m,{fourtyPx:!0}),t(D,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},e=v.bind({});e.args={submitCallback:u("button-click")};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=MottattDatoPapirsoknadIndex.stories-e5e2fcf8.js.map
