import{j as e}from"./dayjs.min-YlGoo7vu.js";import{h as c,S as u,H as k,b as d,P as g,t as f,k as x,m as S,a as b,c as j,d as y,B as N}from"./nb_NO-DctYr_9_.js";import{r as P}from"./index.es-CKkPQCiX.js";import"./index-Dl6G-zuu.js";import"./v4-CQkTLCs1.js";import"./index-Dmr9vlPS.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},p=({readOnly:a})=>{const r=c();return e.jsxs(u,{children:[e.jsx(k,{size:"small",children:r.formatMessage({id:"Registrering.Sprak"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(g,{name:"språkkode",validate:[P],isReadOnly:a,radios:[{label:r.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:r.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:r.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};p.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const h=f(S),l=({readOnly:a})=>e.jsx(x,{value:h,children:e.jsx(p,{readOnly:a})}),m=l;l.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const R={title:"papirsoknad/ui-komponenter/sprak",component:m},v=({submitCallback:a})=>{const r=j();return e.jsxs(y,{formMethods:r,onSubmit:a,children:[e.jsx(m,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(N,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=v.bind({});s.args={submitCallback:b("button-click")};var t,o,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <SprakPapirsoknadIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,R as default};
