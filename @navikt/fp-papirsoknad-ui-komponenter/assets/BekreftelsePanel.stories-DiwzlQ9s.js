import{j as p,a as e}from"./jsx-runtime-ESnF-waY.js";import{t as h,R as P,H as y,g as s,D as O,T as R,m as I,a as g,b as B,O as M,B as q}from"./nb_NO-fiXJQ-n1.js";import{r as _}from"./index.es-Hx5QPdn0.js";import"./index-OjgoNOWw.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-mQqIOHEI.js";const a=h(I),l=({readOnly:t,annenForelderInformertRequired:o=!1})=>p(P,{children:[e(y,{size:"small",children:a.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e(s,{sixteenPx:!0}),e(O,{children:a.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),e(s,{eightPx:!0}),e(R,{name:"annenForelderInformert",validate:o?[_]:[],isReadOnly:t,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:a.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]}),b=l;try{l.displayName="BekreftelsePanel",l.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"BekreftelsePanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},annenForelderInformertRequired:{defaultValue:{value:"false"},description:"",name:"annenForelderInformertRequired",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"papirsoknad/ui-komponenter/bekreftelse",component:b},k=({submitCallback:t,annenForelderInformertRequired:o})=>{const F=B();return p(M,{formMethods:F,onSubmit:t,children:[e(b,{readOnly:!1,annenForelderInformertRequired:o}),e(s,{fourtyPx:!0}),e(q,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=k.bind({});r.args={submitCallback:g("button-click"),annenForelderInformertRequired:!1};const n=k.bind({});n.args={submitCallback:g("button-click"),annenForelderInformertRequired:!0};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  submitCallback,
  annenForelderInformertRequired
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <BekreftelsePanel readOnly={false} annenForelderInformertRequired={annenForelderInformertRequired} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,f,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  submitCallback,
  annenForelderInformertRequired
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <BekreftelsePanel readOnly={false} annenForelderInformertRequired={annenForelderInformertRequired} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const D=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,D as __namedExportsOrder,K as default};
