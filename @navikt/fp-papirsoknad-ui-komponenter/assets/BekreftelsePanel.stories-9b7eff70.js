import{j as p,a as e}from"./jsx-runtime-f8e698f3.js";import{a as g}from"./chunk-AY7I2SME-5eb1ab46.js";import{t as h,R as P,H as y,g as s,D as O,T as R,m as I,a as M,O as q,c as B}from"./nb_NO-bd1cc92f.js";import{r as _}from"./index.es-bd381c2f.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const t=h(I),l=({readOnly:a,annenForelderInformertRequired:o=!1})=>p(P,{children:[e(y,{size:"small",children:t.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),e(s,{sixteenPx:!0}),e(O,{children:t.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),e(s,{eightPx:!0}),e(R,{name:"annenForelderInformert",validate:o?[_]:[],isReadOnly:a,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:t.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:t.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]}),b=l;try{l.displayName="BekreftelsePanel",l.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"BekreftelsePanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},annenForelderInformertRequired:{defaultValue:{value:"false"},description:"",name:"annenForelderInformertRequired",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"papirsoknad/ui-komponenter/bekreftelse",component:b},k=({submitCallback:a,annenForelderInformertRequired:o})=>{const F=M();return p(q,{formMethods:F,onSubmit:a,children:[e(b,{readOnly:!1,annenForelderInformertRequired:o}),e(s,{fourtyPx:!0}),e(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=k.bind({});r.args={submitCallback:g("button-click"),annenForelderInformertRequired:!1};const n=k.bind({});n.args={submitCallback:g("button-click"),annenForelderInformertRequired:!0};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const K=["Default","MedObligatoriskFeltFordiAnnenForelderErInformert"];export{r as Default,n as MedObligatoriskFeltFordiAnnenForelderErInformert,K as __namedExportsOrder,z as default};
//# sourceMappingURL=BekreftelsePanel.stories-9b7eff70.js.map
