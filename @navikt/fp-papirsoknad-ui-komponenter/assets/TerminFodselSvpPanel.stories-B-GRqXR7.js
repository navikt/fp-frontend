import{R as e}from"./index-Dl6G-zuu.js";import{t as f,S as b,H as S,b as d,W as E,e as F,L as r,f as s,m as v,a as T,c as g,d as P,B as y}from"./nb_NO-FpxXeSMP.js";import{r as k,b as o,_ as M}from"./index.es-BOP7ekyo.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-D5dJDnOJ.js";import"./index-Dmr9vlPS.js";const n=f(v),c=({readOnly:t})=>e.createElement(b,null,e.createElement(S,{size:"small"},n.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})),e.createElement(d,{sixteenPx:!0}),e.createElement(E,null,e.createElement(F,null,e.createElement(r,null,e.createElement(s,{name:"termindato",label:n.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:t,validate:[k,o]})),e.createElement(r,null,e.createElement(s,{name:"foedselsDato",label:n.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:t,validate:[o,M]}))))),p=c;c.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const R={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:p},_=({submitCallback:t})=>{const u=g();return e.createElement(P,{formMethods:u,onSubmit:t},e.createElement(p,{readOnly:!1}),e.createElement(d,{fourtyPx:!0}),e.createElement(y,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},a=_.bind({});a.args={submitCallback:T("button-click")};var l,m,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,R as default};
