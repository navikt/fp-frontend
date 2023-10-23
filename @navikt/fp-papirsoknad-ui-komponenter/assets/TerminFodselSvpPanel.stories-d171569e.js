import{j as e}from"./jsx-runtime-d079401a.js";import{a as f}from"./chunk-AY7I2SME-5eb1ab46.js";import{t as x,R as b,H as F,g as p,F as j,M as g,B as t,b as o,m as v,a as y,O as h,c as S}from"./nb_NO-93655e77.js";import{r as _,b as l,_ as P}from"./index.es-ad598274.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const r=x(v),n=({readOnly:s})=>e.jsxs(b,{children:[e.jsx(F,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(t,{children:e.jsx(o,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[_,l]})}),e.jsx(t,{children:e.jsx(o,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[l,P]})})]})})]}),c=n;try{n.displayName="TerminFodselSvpPanel",n.__docgenInfo={description:"",displayName:"TerminFodselSvpPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const C={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},T=({submitCallback:s})=>{const u=y();return e.jsxs(h,{formMethods:u,onSubmit:s,children:[e.jsx(c,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(S,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=T.bind({});a.args={submitCallback:f("button-click")};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,C as default};
//# sourceMappingURL=TerminFodselSvpPanel.stories-d171569e.js.map
