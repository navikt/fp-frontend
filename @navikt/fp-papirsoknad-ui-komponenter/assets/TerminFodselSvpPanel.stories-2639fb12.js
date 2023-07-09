import{j as e}from"./jsx-runtime-6b79a019.js";import{a as f}from"./chunk-OPEUWD42-a3b45fd8.js";import{t as x,Q as j,J as p,E as F,o as b,A as o,j as t,m as v,a as y,F as h,B as S}from"./nb_NO-b0b70c9a.js";import{r as _,b as l,_ as g}from"./index.es-e11054f4.js";import{H as P}from"./Heading-51f79073.js";import"./index-ccf6a75d.js";import"./index-8d7a8128.js";const r=x(v),n=({readOnly:s})=>e.jsxs(j,{children:[e.jsx(P,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(F,{children:e.jsxs(b,{children:[e.jsx(o,{children:e.jsx(t,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[_,l]})}),e.jsx(o,{children:e.jsx(t,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[l,g]})})]})})]}),c=n;try{n.displayName="TerminFodselSvpPanel",n.__docgenInfo={description:"",displayName:"TerminFodselSvpPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const D={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},T=({submitCallback:s})=>{const u=y();return e.jsxs(h,{formMethods:u,onSubmit:s,children:[e.jsx(c,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(S,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=T.bind({});a.args={submitCallback:f("button-click")};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,D as default};
//# sourceMappingURL=TerminFodselSvpPanel.stories-2639fb12.js.map
