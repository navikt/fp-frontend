import{j as e}from"./dayjs.min-YlGoo7vu.js";import{t as f,S as x,H as b,b as d,W as j,e as S,L as n,f as t,m as F,a as h,c as v,d as T,B as g}from"./nb_NO-DctYr_9_.js";import{r as P,b as o,_ as y}from"./index.es-CKkPQCiX.js";import"./index-Dl6G-zuu.js";import"./v4-CQkTLCs1.js";import"./index-Dmr9vlPS.js";const r=f(F),p=({readOnly:a})=>e.jsxs(x,{children:[e.jsx(b,{size:"small",children:r.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(j,{children:e.jsxs(S,{children:[e.jsx(n,{children:e.jsx(t,{name:"termindato",label:r.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[P,o]})}),e.jsx(n,{children:e.jsx(t,{name:"foedselsDato",label:r.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[o,y]})})]})})]}),c=p;p.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const z={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:c},k=({submitCallback:a})=>{const u=v();return e.jsxs(T,{formMethods:u,onSubmit:a,children:[e.jsx(c,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(g,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=k.bind({});s.args={submitCallback:h("button-click")};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,z as default};
