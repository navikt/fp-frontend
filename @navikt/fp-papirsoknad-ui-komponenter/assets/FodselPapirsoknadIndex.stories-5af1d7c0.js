import{j as e}from"./jsx-runtime-d079401a.js";import{a as I}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as E,e as N,Q as A,H as L,G as n,w as q,d as u,I as j,o as F,s as p,D as t,j as o,T as b,f as w,N as H,t as K,P as Q,m as U,u as G,F as $,B as J}from"./nb_NO-8eede04c.js";import{r as i,b as l,R as h,_ as W,y as X,N as Y,I as Z,h as B}from"./index.es-840a5222.js";import{A as ee}from"./Alert-f08750c1.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const k=X(1),y=Y(9),D=()=>B().startOf("day"),re=()=>D().subtract(3,"weeks"),ae=r=>{const s=re(),a=r?B(r,H):void 0,c=D();return a&&a.isSameOrBefore(c)?(a.isAfter(s)?a:s).subtract(1,"days"):c},se=r=>s=>Z(ae(r("termindato")))(s),g=({readOnly:r,erForeldrepenger:s=!1})=>{const a=E(),{watch:c,getValues:V,trigger:C,formState:{isSubmitted:z}}=N(),f=c("erBarnetFodt");return e.jsxs(A,{children:[e.jsx(L,{size:"small",children:a.formatMessage({id:"Registrering.TerminOgFodsel"})}),e.jsx(n,{sixteenPx:!0}),e.jsx(q,{name:"erBarnetFodt",label:e.jsx(u,{id:"Registrering.Termin.Fodt"}),validate:[i],isReadOnly:r,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:e.jsx(u,{id:"Registrering.Fodsel.ErFodt"}),value:"true"},{label:e.jsx(u,{id:"Registrering.Fodsel.ErIkkeFodt"}),value:"false"}]}),f===!1&&e.jsxs(e.Fragment,{children:[e.jsx(n,{eightPx:!0}),e.jsx(j,{alignOffset:64,children:e.jsxs(F,{children:[e.jsxs(p,{children:[e.jsx(t,{children:e.jsx(o,{name:"termindato",label:a.formatMessage({id:"Registrering.Termindato"}),isReadOnly:r,validate:[i,l],onChange:()=>z?C():void 0})}),e.jsx(t,{children:e.jsx(b,{name:"antallBarnFraTerminbekreftelse",label:a.formatMessage({id:"Registrering.AntallBarn"}),readOnly:r,validate:[i,h,k,y]})})]}),e.jsx(n,{sixteenPx:!0}),e.jsx(p,{children:e.jsx(t,{children:e.jsx(o,{name:"terminbekreftelseDato",label:a.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:r,validate:[l,se(V)]})})})]})})]}),f&&e.jsxs(e.Fragment,{children:[e.jsx(n,{eightPx:!0}),e.jsx(j,{alignOffset:0,children:e.jsxs(F,{children:[e.jsxs(p,{children:[e.jsx(t,{children:e.jsx(o,{name:"foedselsDato",label:a.formatMessage({id:"Registrering.Fodselsdato"}),isReadOnly:r,validate:[i,l,W]})}),e.jsx(t,{children:e.jsx(b,{name:"antallBarn",label:a.formatMessage({id:"Registrering.AntallBarn"}),readOnly:r,validate:[i,h,k,y]})})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx(n,{sixteenPx:!0}),e.jsx(ee,{size:"small",variant:"info",children:e.jsx(w,{size:"small",children:e.jsx(u,{id:"Registrering.RettTilPrematuruker"})})}),e.jsx(n,{sixteenPx:!0}),e.jsxs(p,{children:[e.jsx(t,{children:e.jsx(o,{name:"termindato",label:a.formatMessage({id:"Registrering.Termindato"}),isReadOnly:r,validate:[l]})}),e.jsx(t,{children:e.jsx(o,{name:"terminbekreftelseDato",label:a.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:r,validate:[l]})})]})]})]})})]})]})};try{g.displayName="TerminFodselDatoPanel",g.__docgenInfo={description:"",displayName:"TerminFodselDatoPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},erForeldrepenger:{defaultValue:{value:"false"},description:"",name:"erForeldrepenger",required:!1,type:{name:"boolean"}}}}}catch{}const te=K(U),x=({readOnly:r,erForeldrepenger:s})=>e.jsx(Q,{value:te,children:e.jsx(g,{readOnly:r,erForeldrepenger:s})}),O=x;try{x.displayName="FodselPapirsoknadIndex",x.__docgenInfo={description:"",displayName:"FodselPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},erForeldrepenger:{defaultValue:null,description:"",name:"erForeldrepenger",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"papirsoknad/ui-komponenter/fodsel",component:O},S=({submitCallback:r,erForeldrepenger:s})=>{const a=G();return e.jsxs($,{formMethods:a,onSubmit:r,children:[e.jsx(O,{readOnly:!1,erForeldrepenger:s}),e.jsx(n,{fourtyPx:!0}),e.jsx(J,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},d=S.bind({});d.args={submitCallback:I("button-click"),erForeldrepenger:!0};const m=S.bind({});m.args={submitCallback:I("button-click"),erForeldrepenger:!1};var v,P,R;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`({
  submitCallback,
  erForeldrepenger
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <FodselPapirsoknadIndex readOnly={false} erForeldrepenger={erForeldrepenger} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var _,T,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`({
  submitCallback,
  erForeldrepenger
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <FodselPapirsoknadIndex readOnly={false} erForeldrepenger={erForeldrepenger} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(M=(T=m.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};const pe=["Default","ErIkkeForeldrepenger"];export{d as Default,m as ErIkkeForeldrepenger,pe as __namedExportsOrder,ue as default};
//# sourceMappingURL=FodselPapirsoknadIndex.stories-5af1d7c0.js.map
