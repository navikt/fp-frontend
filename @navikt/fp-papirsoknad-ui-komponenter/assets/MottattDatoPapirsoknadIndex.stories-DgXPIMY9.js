import{R as t}from"./index-DVXBtNgz.js";import{R as c,H as u,h as o,g as m,d as f,t as k,P as g,m as b,a as M,b as y,O as D,B as E}from"./nb_NO-C9BsZesQ.js";import{r as P,b as x,_ as O}from"./index.es-DaiGF91N.js";import"./v4-CQkTLCs1.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";const i=({readOnly:e})=>t.createElement(c,null,t.createElement(u,{size:"small"},t.createElement(o,{key:"regDatoTittel",id:"Registrering.Omsoknaden.MottattDato"})),t.createElement(m,{sixteenPx:!0}),t.createElement(f,{name:"mottattDato",label:t.createElement(o,{key:"regDatoUnder",id:"Registrering.Omsoknaden.MottattDato"}),validate:[P,x,O],isReadOnly:e}));i.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const v=k(b),l=({readOnly:e})=>t.createElement(g,{value:v},t.createElement(i,{readOnly:e})),d=l;l.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const K={title:"papirsoknad/ui-komponenter/mottatt-dato",component:d},_=({submitCallback:e})=>{const p=y();return t.createElement(D,{formMethods:p,onSubmit:e},t.createElement(d,{readOnly:!1}),t.createElement(m,{fourtyPx:!0}),t.createElement(E,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},a=_.bind({});a.args={submitCallback:M("button-click")};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,K as default};
