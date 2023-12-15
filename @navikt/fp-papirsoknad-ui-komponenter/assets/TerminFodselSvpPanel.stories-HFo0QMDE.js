import{j as n,a as e}from"./jsx-runtime-ESnF-waY.js";import{t as b,R as F,H as g,g as c,F as v,M as y,c as o,d as l,m as h,a as S,b as _,O as P,B as T}from"./nb_NO-6Jm19noK.js";import{r as M,b as i,_ as O}from"./index.es-C77sDNs5.js";import"./index-OjgoNOWw.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-mQqIOHEI.js";const s=b(h),t=({readOnly:a})=>n(F,{children:[e(g,{size:"small",children:s.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),e(c,{sixteenPx:!0}),e(v,{children:n(y,{children:[e(o,{children:e(l,{name:"termindato",label:s.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:a,validate:[M,i]})}),e(o,{children:e(l,{name:"foedselsDato",label:s.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:a,validate:[i,O]})})]})})]}),u=t;try{t.displayName="TerminFodselSvpPanel",t.__docgenInfo={description:"",displayName:"TerminFodselSvpPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const H={title:"papirsoknad/ui-komponenter/termin-fodsel-svp",component:u},k=({submitCallback:a})=>{const f=_();return n(P,{formMethods:f,onSubmit:a,children:[e(u,{readOnly:!1}),e(c,{fourtyPx:!0}),e(T,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=k.bind({});r.args={submitCallback:S("button-click")};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,H as default};
