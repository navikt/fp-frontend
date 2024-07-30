import{j as e}from"./dayjs.min-YlGoo7vu.js";import{t as F,S as h,H as x,b as o,D as P,P as j,m as R,a as c,c as y,d as O,B as I}from"./nb_NO-DctYr_9_.js";import{r as M}from"./index.es-CKkPQCiX.js";import"./index-Dl6G-zuu.js";import"./v4-CQkTLCs1.js";import"./index-Dmr9vlPS.js";const t=F(R),p=({readOnly:a,annenForelderInformertRequired:s=!1})=>e.jsxs(h,{children:[e.jsx(x,{size:"small",children:t.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e.jsx(o,{sixteenPx:!0}),e.jsx(P,{children:t.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),e.jsx(o,{eightPx:!0}),e.jsx(j,{name:"annenForelderInformert",validate:s?[M]:[],isReadOnly:a,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:t.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:t.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]}),b=p;p.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"papirsoknad/ui-komponenter/bekreftelse",component:b},g=({submitCallback:a,annenForelderInformertRequired:s})=>{const k=y();return e.jsxs(O,{formMethods:k,onSubmit:a,children:[e.jsx(b,{readOnly:!1,annenForelderInformertRequired:s}),e.jsx(o,{fourtyPx:!0}),e.jsx(I,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=g.bind({});r.args={submitCallback:c("button-click"),annenForelderInformertRequired:!1};const n=g.bind({});n.args={submitCallback:c("button-click"),annenForelderInformertRequired:!0};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const D=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,D as __namedExportsOrder,z as default};
