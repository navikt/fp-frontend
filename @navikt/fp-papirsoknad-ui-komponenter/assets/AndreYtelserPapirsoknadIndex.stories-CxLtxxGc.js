import{j as e}from"./dayjs.min-D0F5fy79.js";import{d as U,e as K,i as C,A as H,W as z,c as X,L as x,P as N,y as A,S as G,H as J,M as W,o as Q,O as Z,t as ee,h as re,m as ne,a as $,b as ae,Y as se,B as te}from"./nb_NO-Ck3UbI0K.js";import{K as _,a as F}from"./alleKodeverk-Dzm1yn2L.js";import"./withRouter-DFPnh569.js";import{r as oe,R as le}from"./index-CTjT7uj6.js";import{r as P,b as T,I as ie,c as de}from"./index.es-9SLT0vzE.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const y={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},ue="_notLastRow_7c46s_1",me={notLastRow:ue},u="andreYtelser",j="PERIODER",E=(n,a)=>n(a),R=({readOnly:n,name:a})=>{const r=U(),{getValues:s,control:o,trigger:i,formState:{isSubmitted:l}}=K(),{fields:t,remove:b,append:B}=C({control:o,name:`${u}.${a}`});return e.jsx(H,{fields:t,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:n,append:B,remove:b,children:(q,g,V)=>{const d=`${u}.${a}.${g}`;return e.jsxs("div",{children:[e.jsx("div",{className:g!==t.length-1?me.notLastRow:"",children:e.jsx(z,{children:e.jsxs(X,{children:[e.jsx(x,{children:e.jsx(N,{name:`${d}.periodeFom`,label:g===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[P,T,()=>{const p=E(s,`${d}.periodeFom`),c=E(s,`${d}.periodeTom`);return c&&p?ie(c)(p):null}],onChange:()=>l?i():void 0})}),e.jsx(x,{children:e.jsx(N,{name:`${d}.periodeTom`,label:g===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[P,T,()=>{const p=E(s,`${d}.periodeFom`),c=E(s,`${d}.periodeTom`);return c&&p?de(p)(c):null}],onChange:()=>l?i():void 0})}),V&&e.jsx(x,{children:V()})]})})}),e.jsx(A,{sixteenPx:!0})]},q.id)}})};R.transformValues=(n,a)=>n.map(r=>({ytelseType:a,periodeFom:r.periodeFom,periodeTom:r.periodeTom}));R.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"any"}}}],displayName:"RenderAndreYtelserPerioderFieldArray"};const w=(n,a)=>a?n.filter(r=>r.kode===y.MILITÆR_ELLER_SIVILTJENESTE):n.filter(r=>r.kode!==y.UTENLANDSK_ARBEIDSFORHOLD&&r.kode!==y.FRILANSER&&r.kode!==y.LONN_UNDER_UTDANNING),m=({readOnly:n,kunMiliterEllerSiviltjeneste:a=!1,alleKodeverk:r})=>{const{watch:s}=K(),o=s(u),i=r[_.ARBEID_TYPE],l=oe.useMemo(()=>w(i,a),[a]);return e.jsxs(G,{children:[e.jsx(J,{size:"small",children:e.jsx(W,{id:"Registrering.AndreYtelser.Title"})}),e.jsx(A,{sixteenPx:!0}),l.map(t=>{const b=`${t.kode}_${j}`;return e.jsxs(le.Fragment,{children:[e.jsx(Q,{name:`${u}.${t.kode}`,label:t.navn,readOnly:n},t.kode),o&&o[t.kode]&&e.jsxs(e.Fragment,{children:[e.jsx(A,{eightPx:!0}),e.jsx(Z,{children:e.jsx(R,{name:b,readOnly:n})})]})]},t.kode)})]})};m.buildInitialValues=n=>{const a={};return w(n).forEach(r=>{const s=`${r.kode}_${j}`;a[s]=[{}]}),{[u]:a}};m.transformValues=(n,a)=>{const r=n[u],s=[];return a.filter(o=>r&&r[o.kode]).forEach(o=>{const i=`${o.kode}_${j}`,l=r?r[i]:void 0;l&&R.transformValues(l,o.kode).forEach(t=>s.push(t))}),s};m.__docgenInfo={description:`AndreYtelserPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"FormValues"}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"FormValues"}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]},alias:"FormValues"}},{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"any"}}}],displayName:"AndreYtelserPanel",props:{kunMiliterEllerSiviltjeneste:{defaultValue:{value:"false",computed:!1},required:!1}}};const pe=ee(ne),I=({readOnly:n,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})=>e.jsx(re,{value:pe,children:e.jsx(m,{readOnly:n,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})});I.buildInitialValues=n=>m.buildInitialValues(n);I.transformValues=(n,a)=>m.transformValues(n,a);const v=I;I.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null},{name:"andreYtelser",optional:!1,type:null}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex"};const Re={title:"papirsoknad/ui-komponenter/andre-ytelser",component:v},O=({kunMiliterEllerSiviltjeneste:n,submitCallback:a})=>{const r=ae({defaultValues:v.buildInitialValues(F[_.ARBEID_TYPE])});return e.jsxs(se,{formMethods:r,onSubmit:s=>a(v.transformValues(s,F[_.ARBEID_TYPE])),children:[e.jsx(v,{readOnly:!1,kunMiliterEllerSiviltjeneste:n,alleKodeverk:F}),e.jsx(A,{fourtyPx:!0}),e.jsx(te,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},k=O.bind({});k.args={kunMiliterEllerSiviltjeneste:!1,submitCallback:$("button-click")};const f=O.bind({});f.args={kunMiliterEllerSiviltjeneste:!0,submitCallback:$("button-click")};var S,Y,L;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`({
  kunMiliterEllerSiviltjeneste,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: AndreYtelserPapirsoknadIndex.buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE])
  });
  return <Form formMethods={formMethods} onSubmit={(values: any) => submitCallback(AndreYtelserPapirsoknadIndex.transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))}>
      <AndreYtelserPapirsoknadIndex readOnly={false} kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste} alleKodeverk={(alleKodeverk as any)} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(L=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var h,M,D;f.parameters={...f.parameters,docs:{...(h=f.parameters)==null?void 0:h.docs,source:{originalSource:`({
  kunMiliterEllerSiviltjeneste,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: AndreYtelserPapirsoknadIndex.buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE])
  });
  return <Form formMethods={formMethods} onSubmit={(values: any) => submitCallback(AndreYtelserPapirsoknadIndex.transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))}>
      <AndreYtelserPapirsoknadIndex readOnly={false} kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste} alleKodeverk={(alleKodeverk as any)} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(D=(M=f.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const Ie=["Default","KunMiliterEllerSiviltjeneste"];export{k as Default,f as KunMiliterEllerSiviltjeneste,Ie as __namedExportsOrder,Re as default};
