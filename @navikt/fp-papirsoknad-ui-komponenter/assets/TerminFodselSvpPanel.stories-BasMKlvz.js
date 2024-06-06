import{R as e}from"./index-DVXBtNgz.js";import{t as f,R as b,H as F,g as d,F as E,M as g,c as r,d as s,m as v,a as S,b as T,O as P,B as y}from"./nb_NO-DjV95RET.js";import{r as M,b as o,_ as k}from"./index.es-CixayVtT.js";import"./v4-CQkTLCs1.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";const n=f(v),c=({readOnly:t})=>e.createElement(b,null,e.createElement(F,{size:"small"},n.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})),e.createElement(d,{sixteenPx:!0}),e.createElement(E,null,e.createElement(g,null,e.createElement(r,null,e.createElement(s,{name:"termindato",label:n.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:t,validate:[M,o]})),e.createElement(r,null,e.createElement(s,{name:"foedselsDato",label:n.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:t,validate:[o,k]}))))),p=c;c.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const C={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:p},O=({submitCallback:t})=>{const u=T();return e.createElement(P,{formMethods:u,onSubmit:t},e.createElement(p,{readOnly:!1}),e.createElement(d,{fourtyPx:!0}),e.createElement(y,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},a=O.bind({});a.args={submitCallback:S("button-click")};var l,m,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,C as default};
