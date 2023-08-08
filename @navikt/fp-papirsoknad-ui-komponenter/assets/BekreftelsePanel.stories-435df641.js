import{j as e}from"./jsx-runtime-69eee039.js";import{a as p}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as k,Q as h,J as s,D as x,w as P,m as y,u as R,F as j,B as O}from"./nb_NO-62594ebc.js";import{r as I}from"./index.es-fa80d0cc.js";import{H as B}from"./Heading-c79e0b8b.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";const a=k(y),l=({readOnly:t,annenForelderInformertRequired:o=!1})=>e.jsxs(h,{children:[e.jsx(B,{size:"small",children:a.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e.jsx(s,{sixteenPx:!0}),e.jsx(x,{size:"small",children:a.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),e.jsx(s,{eightPx:!0}),e.jsx(P,{name:"annenForelderInformert",validate:o?[I]:[],isReadOnly:t,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:a.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]}),g=l;try{l.displayName="BekreftelsePanel",l.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"BekreftelsePanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},annenForelderInformertRequired:{defaultValue:{value:"false"},description:"",name:"annenForelderInformertRequired",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"papirsoknad/ui-komponenter/bekreftelse",component:g},F=({submitCallback:t,annenForelderInformertRequired:o})=>{const b=R();return e.jsxs(j,{formMethods:b,onSubmit:t,children:[e.jsx(g,{readOnly:!1,annenForelderInformertRequired:o}),e.jsx(s,{fourtyPx:!0}),e.jsx(O,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=F.bind({});r.args={submitCallback:p("button-click"),annenForelderInformertRequired:!1};const n=F.bind({});n.args={submitCallback:p("button-click"),annenForelderInformertRequired:!0};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const D=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,D as __namedExportsOrder,K as default};
//# sourceMappingURL=BekreftelsePanel.stories-435df641.js.map
