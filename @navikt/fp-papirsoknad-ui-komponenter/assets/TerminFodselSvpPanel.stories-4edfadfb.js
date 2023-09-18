import{j as e}from"./jsx-runtime-d079401a.js";import{a as f}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as x,D as b,H as j,b as p,U as F,Y as v,z as t,a as o,m as y,c as h,O as S,B as _}from"./nb_NO-e8a3fb59.js";import{r as g,b as l,_ as P}from"./index.es-40a199ab.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const r=x(y),n=({readOnly:s})=>e.jsxs(b,{children:[e.jsx(j,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(F,{children:e.jsxs(v,{children:[e.jsx(t,{children:e.jsx(o,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[g,l]})}),e.jsx(t,{children:e.jsx(o,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[l,P]})})]})})]}),c=n;try{n.displayName="TerminFodselSvpPanel",n.__docgenInfo={description:"",displayName:"TerminFodselSvpPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const C={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},T=({submitCallback:s})=>{const u=h();return e.jsxs(S,{formMethods:u,onSubmit:s,children:[e.jsx(c,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=T.bind({});a.args={submitCallback:f("button-click")};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,C as default};
//# sourceMappingURL=TerminFodselSvpPanel.stories-4edfadfb.js.map
