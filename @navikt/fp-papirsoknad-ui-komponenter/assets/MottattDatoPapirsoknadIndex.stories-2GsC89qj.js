import{R as t}from"./index-Dl6G-zuu.js";import{S as c,H as u,M as o,b as m,f,t as k,k as b,m as g,a as M,c as D,d as y,B as E}from"./nb_NO-FpxXeSMP.js";import{r as P,b as x,_ as v}from"./index.es-BOP7ekyo.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-D5dJDnOJ.js";import"./index-Dmr9vlPS.js";const i=({readOnly:e})=>t.createElement(c,null,t.createElement(u,{size:"small"},t.createElement(o,{key:"regDatoTittel",id:"Registrering.Omsoknaden.MottattDato"})),t.createElement(m,{sixteenPx:!0}),t.createElement(f,{name:"mottattDato",label:t.createElement(o,{key:"regDatoUnder",id:"Registrering.Omsoknaden.MottattDato"}),validate:[P,x,v],isReadOnly:e}));i.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _=k(g),l=({readOnly:e})=>t.createElement(b,{value:_},t.createElement(i,{readOnly:e})),d=l;l.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const B={title:"papirsoknad/ui-komponenter/mottatt-dato",component:d},O=({submitCallback:e})=>{const p=D();return t.createElement(y,{formMethods:p,onSubmit:e},t.createElement(d,{readOnly:!1}),t.createElement(m,{fourtyPx:!0}),t.createElement(E,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},a=O.bind({});a.args={submitCallback:M("button-click")};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,B as default};
