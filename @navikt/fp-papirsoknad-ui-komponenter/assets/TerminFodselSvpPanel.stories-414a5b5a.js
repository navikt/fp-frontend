import{j as e}from"./jsx-runtime-69eee039.js";import{a as f}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as x,Q as j,J as p,E as F,o as b,A as o,j as t,m as v,u as y,F as h,B as S}from"./nb_NO-b9935103.js";import{r as _,b as l,_ as g}from"./index.es-26c0dd3e.js";import{H as P}from"./Heading-43813b22.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";const a=x(v),n=({readOnly:s})=>e.jsxs(j,{children:[e.jsx(P,{size:"small",children:a.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(F,{children:e.jsxs(b,{children:[e.jsx(o,{children:e.jsx(t,{name:"termindato",label:a.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[_,l]})}),e.jsx(o,{children:e.jsx(t,{name:"foedselsDato",label:a.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[l,g]})})]})})]}),c=n;try{n.displayName="TerminFodselSvpPanel",n.__docgenInfo={description:"",displayName:"TerminFodselSvpPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const R={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},T=({submitCallback:s})=>{const u=y();return e.jsxs(h,{formMethods:u,onSubmit:s,children:[e.jsx(c,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(S,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=T.bind({});r.args={submitCallback:f("button-click")};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <TerminFodselSvpPanel readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,R as default};
//# sourceMappingURL=TerminFodselSvpPanel.stories-414a5b5a.js.map
