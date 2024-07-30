import{R as e}from"./index-Dl6G-zuu.js";import{t as F,S as P,H as h,b as s,D as R,P as y,m as O,a as f,c as E,d as I,B as M}from"./nb_NO-FpxXeSMP.js";import{r as B}from"./index.es-BOP7ekyo.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-D5dJDnOJ.js";import"./index-Dmr9vlPS.js";const n=F(O),p=({readOnly:a,annenForelderInformertRequired:o=!1})=>e.createElement(P,null,e.createElement(h,{size:"small"},n.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})),e.createElement(s,{sixteenPx:!0}),e.createElement(R,null,n.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})),e.createElement(s,{eightPx:!0}),e.createElement(y,{name:"annenForelderInformert",validate:o?[B]:[],isReadOnly:a,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:n.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:n.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})),b=p;p.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"papirsoknad/ui-komponenter/bekreftelse",component:b},g=({submitCallback:a,annenForelderInformertRequired:o})=>{const k=E();return e.createElement(I,{formMethods:k,onSubmit:a},e.createElement(b,{readOnly:!1,annenForelderInformertRequired:o}),e.createElement(s,{fourtyPx:!0}),e.createElement(M,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},r=g.bind({});r.args={submitCallback:f("button-click"),annenForelderInformertRequired:!1};const t=g.bind({});t.args={submitCallback:f("button-click"),annenForelderInformertRequired:!0};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const D=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,t as MedObligatoriskFeltFordiAnnenForelderErInformert,D as __namedExportsOrder,z as default};
