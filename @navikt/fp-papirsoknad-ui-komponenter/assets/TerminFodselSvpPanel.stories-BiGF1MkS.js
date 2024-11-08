import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as u,S as f,H as x,y as p,W as j,c as b,L as n,P as o,m as h,a as F,b as S,$ as v,B as y}from"./nb_NO-D_TgqB1W.js";import{V as P,w as i,G as g}from"./index.es-D_GpvDOR.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const r=u(h),t=({readOnly:a})=>e.jsxs(f,{children:[e.jsx(x,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(j,{children:e.jsxs(b,{children:[e.jsx(n,{children:e.jsx(o,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[P,i]})}),e.jsx(n,{children:e.jsx(o,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[i,g]})})]})})]});t.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const C={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:t},T=({submitCallback:a})=>{const c=S();return e.jsxs(v,{formMethods:c,onSubmit:a,children:[e.jsx(t,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(y,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=T.bind({});s.args={submitCallback:F("button-click")};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Default"];export{s as Default,D as __namedExportsOrder,C as default};
