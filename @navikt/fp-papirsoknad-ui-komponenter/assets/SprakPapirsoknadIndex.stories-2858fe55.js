import{j as e}from"./jsx-runtime-d079401a.js";import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{f as u,D as k,H as g,b as p,T as f,t as x,P as y,m as S,c as _,O as b,B as N}from"./nb_NO-e8a3fb59.js";import{r as j}from"./index.es-40a199ab.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},t=({readOnly:a})=>{const r=u();return e.jsxs(k,{children:[e.jsx(g,{size:"small",children:r.formatMessage({id:"Registrering.Sprak"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(f,{name:"språkkode",validate:[j],isReadOnly:a,radios:[{label:r.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:r.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:r.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};try{t.displayName="SprakPanel",t.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",displayName:"SprakPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const O=x(S),o=({readOnly:a})=>e.jsx(y,{value:O,children:e.jsx(t,{readOnly:a})}),m=o;try{o.displayName="SprakPapirsoknadIndex",o.__docgenInfo={description:"",displayName:"SprakPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const E={title:"papirsoknad/ui-komponenter/sprak",component:m},P=({submitCallback:a})=>{const r=_();return e.jsxs(b,{formMethods:r,onSubmit:a,children:[e.jsx(m,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(N,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=P.bind({});s.args={submitCallback:c("button-click")};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <SprakPapirsoknadIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["Default"];export{s as Default,R as __namedExportsOrder,E as default};
//# sourceMappingURL=SprakPapirsoknadIndex.stories-2858fe55.js.map
