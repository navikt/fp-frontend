import{j as n,a as e}from"./jsx-runtime-f8e698f3.js";import{a as b}from"./chunk-AY7I2SME-5eb1ab46.js";import{t as F,R as g,H as v,g as c,F as y,M as h,B as o,b as l,m as S,a as _,O as P,c as T}from"./nb_NO-06e163ad.js";import{r as M,b as i,_ as O}from"./index.es-993cfde3.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const s=F(S),t=({readOnly:a})=>n(g,{children:[e(v,{size:"small",children:s.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e(c,{sixteenPx:!0}),e(y,{children:n(h,{children:[e(o,{children:e(l,{name:"termindato",label:s.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[M,i]})}),e(o,{children:e(l,{name:"foedselsDato",label:s.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[i,O]})})]})})]}),u=t;try{t.displayName="TerminFodselSvpPanel",t.__docgenInfo={description:"",displayName:"TerminFodselSvpPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const D={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:u},k=({submitCallback:a})=>{const f=_();return n(P,{formMethods:f,onSubmit:a,children:[e(u,{readOnly:!1}),e(c,{fourtyPx:!0}),e(T,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=k.bind({});r.args={submitCallback:b("button-click")};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,D as default};
//# sourceMappingURL=TerminFodselSvpPanel.stories-1ff98fd4.js.map
