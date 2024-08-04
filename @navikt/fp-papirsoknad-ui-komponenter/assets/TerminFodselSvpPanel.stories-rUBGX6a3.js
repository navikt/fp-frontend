import{j as e}from"./dayjs.min-D0F5fy79.js";import{t as f,S as x,H as b,b as d,W as j,e as F,L as n,P as t,m as S,c as h,d as v,Y as P,B as T}from"./nb_NO-CdUvm0lp.js";import{r as g,b as o,_ as y}from"./index.es-R_VB8V1y.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const r=f(S),p=({readOnly:a})=>e.jsxs(x,{children:[e.jsx(b,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(j,{children:e.jsxs(F,{children:[e.jsx(n,{children:e.jsx(t,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[g,o]})}),e.jsx(n,{children:e.jsx(t,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[o,y]})})]})})]}),c=p;p.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const C={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},k=({submitCallback:a})=>{const u=v();return e.jsxs(P,{formMethods:u,onSubmit:a,children:[e.jsx(c,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(T,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=k.bind({});s.args={submitCallback:h("button-click")};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
