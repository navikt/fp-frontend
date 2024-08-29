import{j as e}from"./dayjs.min-D0F5fy79.js";import{t as f,S as x,H as b,y as d,W as j,c as F,L as n,P as t,m as S,a as h,b as v,Y as P,B as y}from"./nb_NO-Ck3UbI0K.js";import{r as T,b as o,_ as g}from"./index.es-9SLT0vzE.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const r=f(S),p=({readOnly:a})=>e.jsxs(x,{children:[e.jsx(b,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(j,{children:e.jsxs(F,{children:[e.jsx(n,{children:e.jsx(t,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[T,o]})}),e.jsx(n,{children:e.jsx(t,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[o,g]})})]})})]}),c=p;p.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const C={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},k=({submitCallback:a})=>{const u=v();return e.jsxs(P,{formMethods:u,onSubmit:a,children:[e.jsx(c,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(y,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=k.bind({});s.args={submitCallback:h("button-click")};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const D=["Default"];export{s as Default,D as __namedExportsOrder,C as default};
