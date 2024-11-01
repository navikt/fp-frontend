import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as m,S as c,H as u,y as l,k,t as g,h as f,m as x,a as S,b,$ as y,B as j}from"./nb_NO-DqQu-P-Y.js";import{r as N}from"./index.es-CabxuONu.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";import"./index-rX-Bn4lm.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},p=({readOnly:s})=>{const r=m();return e.jsxs(c,{children:[e.jsx(u,{size:"small",children:r.formatMessage({id:"Registrering.Sprak"})}),e.jsx(l,{sixteenPx:!0}),e.jsx(k,{name:"språkkode",validate:[N],isReadOnly:s,radios:[{label:r.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:r.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:r.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};p.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const h=g(x),t=({readOnly:s})=>e.jsx(f,{value:h,children:e.jsx(p,{readOnly:s})});t.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const I={title:"papirsoknad/ui-komponenter/sprak",component:t},v=({submitCallback:s})=>{const r=b();return e.jsxs(y,{formMethods:r,onSubmit:s,children:[e.jsx(t,{readOnly:!1}),e.jsx(l,{fourtyPx:!0}),e.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},a=v.bind({});a.args={submitCallback:S("button-click")};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,I as default};
