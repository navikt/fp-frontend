import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as k,S as F,H as h,y as o,D as x,k as P,m as y,a as p,b as j,$ as R,B as O}from"./nb_NO-DqQu-P-Y.js";import{r as I}from"./index.es-CabxuONu.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";import"./index-rX-Bn4lm.js";const t=k(y),i=({readOnly:a,annenForelderInformertRequired:s=!1})=>e.jsxs(F,{children:[e.jsx(h,{size:"small",children:t.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e.jsx(o,{sixteenPx:!0}),e.jsx(x,{children:t.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),e.jsx(o,{eightPx:!0}),e.jsx(P,{name:"annenForelderInformert",validate:s?[I]:[],isReadOnly:a,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:t.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:t.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]});i.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"papirsoknad/ui-komponenter/bekreftelse",component:i},g=({submitCallback:a,annenForelderInformertRequired:s})=>{const b=j();return e.jsxs(R,{formMethods:b,onSubmit:a,children:[e.jsx(i,{readOnly:!1,annenForelderInformertRequired:s}),e.jsx(o,{fourtyPx:!0}),e.jsx(O,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=g.bind({});r.args={submitCallback:p("button-click"),annenForelderInformertRequired:!1};const n=g.bind({});n.args={submitCallback:p("button-click"),annenForelderInformertRequired:!0};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,f,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const K=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,K as __namedExportsOrder,z as default};
