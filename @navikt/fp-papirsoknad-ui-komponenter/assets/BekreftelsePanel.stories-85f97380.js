import{j as e}from"./jsx-runtime-d079401a.js";import{a as p}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as k,Q as h,H as x,G as o,b as P,w as y,m as R,a as j,F as O,B as I}from"./nb_NO-54ecb69d.js";import{r as B}from"./index.es-13218a4b.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const a=k(R),l=({readOnly:t,annenForelderInformertRequired:s=!1})=>e.jsxs(h,{children:[e.jsx(x,{size:"small",children:a.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e.jsx(o,{sixteenPx:!0}),e.jsx(P,{children:a.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),e.jsx(o,{eightPx:!0}),e.jsx(y,{name:"annenForelderInformert",validate:s?[B]:[],isReadOnly:t,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:a.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]}),g=l;try{l.displayName="BekreftelsePanel",l.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"BekreftelsePanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},annenForelderInformertRequired:{defaultValue:{value:"false"},description:"",name:"annenForelderInformertRequired",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"papirsoknad/ui-komponenter/bekreftelse",component:g},F=({submitCallback:t,annenForelderInformertRequired:s})=>{const b=j();return e.jsxs(O,{formMethods:b,onSubmit:t,children:[e.jsx(g,{readOnly:!1,annenForelderInformertRequired:s}),e.jsx(o,{fourtyPx:!0}),e.jsx(I,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=F.bind({});r.args={submitCallback:p("button-click"),annenForelderInformertRequired:!1};const n=F.bind({});n.args={submitCallback:p("button-click"),annenForelderInformertRequired:!0};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const z=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,z as __namedExportsOrder,T as default};
//# sourceMappingURL=BekreftelsePanel.stories-85f97380.js.map
