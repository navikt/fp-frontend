import{j as p,a as e}from"./jsx-runtime-ESnF-waY.js";import{e as u,R as k,H as g,g as m,T as f,t as y,P as S,m as _,a as b,b as N,O as x,B as O}from"./nb_NO-c-rHYmpj.js";import{r as P}from"./index.es-HEkpCj1g.js";import"./index-OjgoNOWw.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-mQqIOHEI.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},t=({readOnly:a})=>{const r=u();return p(k,{children:[e(g,{size:"small",children:r.formatMessage({id:"Registrering.Sprak"})}),e(m,{sixteenPx:!0}),e(f,{name:"språkkode",validate:[P],isReadOnly:a,radios:[{label:r.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:r.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:r.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};try{t.displayName="SprakPanel",t.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",displayName:"SprakPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const v=y(_),o=({readOnly:a})=>e(S,{value:v,children:e(t,{readOnly:a})}),c=o;try{o.displayName="SprakPapirsoknadIndex",o.__docgenInfo={description:"",displayName:"SprakPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const L={title:"papirsoknad/ui-komponenter/sprak",component:c},h=({submitCallback:a})=>{const r=N();return p(x,{formMethods:r,onSubmit:a,children:[e(c,{readOnly:!1}),e(m,{fourtyPx:!0}),e(O,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=h.bind({});s.args={submitCallback:b("button-click")};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,L as default};
