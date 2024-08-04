import{j as t}from"./dayjs.min-D0F5fy79.js";import{S as c,H as u,M as o,b as i,P as x,t as f,k,m as b,c as g,d as M,Y as j,B as D}from"./nb_NO-CdUvm0lp.js";import{r as P,b as y,_ as h}from"./index.es-R_VB8V1y.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const d=({readOnly:e})=>t.jsxs(c,{children:[t.jsx(u,{size:"small",children:t.jsx(o,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),t.jsx(i,{sixteenPx:!0}),t.jsx(x,{name:"mottattDato",label:t.jsx(o,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[P,y,h],isReadOnly:e})]});d.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const v=f(b),m=({readOnly:e})=>t.jsx(k,{value:v,children:t.jsx(d,{readOnly:e})}),l=m;m.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const K={title:"papirsoknad/ui-komponenter/mottatt-dato",component:l},_=({submitCallback:e})=>{const p=M();return t.jsxs(j,{formMethods:p,onSubmit:e,children:[t.jsx(l,{readOnly:!1}),t.jsx(i,{fourtyPx:!0}),t.jsx(D,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=_.bind({});a.args={submitCallback:g("button-click")};var s,r,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,K as default};
