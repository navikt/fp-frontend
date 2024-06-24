import{R as e}from"./index-DVXBtNgz.js";import{t as F,R as h,H as P,g as s,D as R,T as O,m as y,a as f,b as E,O as I,B as M}from"./nb_NO-CWD5ZyDt.js";import{r as B}from"./index.es-DfqFIXgR.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-q5bIuV4J.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";const n=F(y),p=({readOnly:a,annenForelderInformertRequired:o=!1})=>e.createElement(h,null,e.createElement(P,{size:"small"},n.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})),e.createElement(s,{sixteenPx:!0}),e.createElement(R,null,n.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})),e.createElement(s,{eightPx:!0}),e.createElement(O,{name:"annenForelderInformert",validate:o?[B]:[],isReadOnly:a,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:n.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:n.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})),g=p;p.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const K={title:"papirsoknad/ui-komponenter/bekreftelse",component:g},b=({submitCallback:a,annenForelderInformertRequired:o})=>{const k=E();return e.createElement(I,{formMethods:k,onSubmit:a},e.createElement(g,{readOnly:!1,annenForelderInformertRequired:o}),e.createElement(s,{fourtyPx:!0}),e.createElement(M,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},r=b.bind({});r.args={submitCallback:f("button-click"),annenForelderInformertRequired:!1};const t=b.bind({});t.args={submitCallback:f("button-click"),annenForelderInformertRequired:!0};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const _=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,t as MedObligatoriskFeltFordiAnnenForelderErInformert,_ as __namedExportsOrder,K as default};
