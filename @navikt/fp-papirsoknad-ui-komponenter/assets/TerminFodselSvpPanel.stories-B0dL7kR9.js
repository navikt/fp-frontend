import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as u,S as f,H as x,y as p,W as j,c as b,L as n,P as o,m as g,a as h,b as F,$ as S,B as v}from"./nb_NO-5CofAXXD.js";import{H as y,g as i,p as P}from"./index.es-CP-sLi8l.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const r=u(g),t=({readOnly:a})=>e.jsxs(f,{children:[e.jsx(x,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(p,{sixteenPx:!0}),e.jsx(j,{children:e.jsxs(b,{children:[e.jsx(n,{children:e.jsx(o,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[y,i]})}),e.jsx(n,{children:e.jsx(o,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[i,P]})})]})})]});t.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const z={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:t},T=({submitCallback:a})=>{const c=F();return e.jsxs(S,{formMethods:c,onSubmit:a,children:[e.jsx(t,{readOnly:!1}),e.jsx(p,{fourtyPx:!0}),e.jsx(v,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=T.bind({});s.args={submitCallback:h("button-click")};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,z as default};
