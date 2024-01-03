import{j as l,a as t}from"./jsx-runtime-ESnF-waY.js";import{R as u,H as f,h as n,g as m,d as g,t as y,P as _,m as k,a as b,b as D,O as M,B as P}from"./nb_NO-Jp11i7qh.js";import{r as x,b as h,_ as O}from"./index.es-c41PWReF.js";import"./index-OjgoNOWw.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-mQqIOHEI.js";const o=({readOnly:a})=>l(u,{children:[t(f,{size:"small",children:t(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t(m,{sixteenPx:!0}),t(g,{name:"mottattDato",label:t(n,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[x,h,O],isReadOnly:a})]});try{o.displayName="MottattDatoPanel",o.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"MottattDatoPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const v=y(k),r=({readOnly:a})=>t(_,{value:v,children:t(o,{readOnly:a})}),p=r;try{r.displayName="MottattDatoPapirsoknadIndex",r.__docgenInfo={description:"",displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const z={title:"papirsoknad/ui-komponenter/mottatt-dato",component:p},I=({submitCallback:a})=>{const c=D();return l(M,{formMethods:c,onSubmit:a,children:[t(p,{readOnly:!1}),t(m,{fourtyPx:!0}),t(P,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},e=I.bind({});e.args={submitCallback:b("button-click")};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,z as default};
