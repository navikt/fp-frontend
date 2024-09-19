import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as q,e as D,i as U,q as C,W as H,c as z,L as b,P as V,y as R,S as X,H as G,M as J,n as W,O as Q,t as Z,h as ee,m as re,a as K,b as ne,Y as ae,B as se}from"./nb_NO-B_MYPsBD.js";import{K as _,a as F}from"./alleKodeverk-Dzm1yn2L.js";import"./withRouter-xu-IZtWb.js";import{r as te,R as oe}from"./index-CTjT7uj6.js";import{r as N,b as P,I as le,c as ie}from"./index.es-amUsmgtA.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DQZRloWl.js";import"./index-vZN_Bsf0.js";const E={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},de="_notLastRow_7c46s_1",ue={notLastRow:de},m="andreYtelser",j="PERIODER",v=(n,a)=>n(a),A=({readOnly:n,name:a})=>{const r=q(),{getValues:s,control:o,trigger:d,formState:{isSubmitted:l}}=D(),{fields:t,remove:I,append:O}=U({control:o,name:`${m}.${a}`});return e.jsx(C,{fields:t,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:n,append:O,remove:I,children:(B,y,x)=>{const u=`${m}.${a}.${y}`;return e.jsxs("div",{children:[e.jsx("div",{className:y!==t.length-1?ue.notLastRow:"",children:e.jsx(H,{children:e.jsxs(z,{children:[e.jsx(b,{children:e.jsx(V,{name:`${u}.periodeFom`,label:y===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[N,P,()=>{const c=v(s,`${u}.periodeFom`),k=v(s,`${u}.periodeTom`);return k&&c?le(k)(c):null}],onChange:()=>l?d():void 0})}),e.jsx(b,{children:e.jsx(V,{name:`${u}.periodeTom`,label:y===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[N,P,()=>{const c=v(s,`${u}.periodeFom`),k=v(s,`${u}.periodeTom`);return k&&c?ie(c)(k):null}],onChange:()=>l?d():void 0})}),x&&e.jsx(b,{children:x()})]})})}),e.jsx(R,{sixteenPx:!0})]},B.id)}})};A.transformValues=(n,a)=>n.map(r=>({ytelseType:a,periodeFom:r.periodeFom,periodeTom:r.periodeTom}));A.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"any"}}}],displayName:"RenderAndreYtelserPerioderFieldArray"};const w=(n,a)=>a?n.filter(r=>r.kode===E.MILITÆR_ELLER_SIVILTJENESTE):n.filter(r=>r.kode!==E.UTENLANDSK_ARBEIDSFORHOLD&&r.kode!==E.FRILANSER&&r.kode!==E.LONN_UNDER_UTDANNING),p=({readOnly:n,kunMiliterEllerSiviltjeneste:a=!1,alleKodeverk:r})=>{const{watch:s}=D(),o=s(m),d=r[_.ARBEID_TYPE],l=te.useMemo(()=>w(d,a),[a]);return e.jsxs(X,{children:[e.jsx(G,{size:"small",children:e.jsx(J,{id:"Registrering.AndreYtelser.Title"})}),e.jsx(R,{sixteenPx:!0}),l.map(t=>{const I=`${t.kode}_${j}`;return e.jsxs(oe.Fragment,{children:[e.jsx(W,{name:`${m}.${t.kode}`,label:t.navn,readOnly:n},t.kode),o&&o[t.kode]&&e.jsxs(e.Fragment,{children:[e.jsx(R,{eightPx:!0}),e.jsx(Q,{children:e.jsx(A,{name:I,readOnly:n})})]})]},t.kode)})]})};p.buildInitialValues=n=>{const a={};return w(n).forEach(r=>{const s=`${r.kode}_${j}`;a[s]=[{}]}),{[m]:a}};p.transformValues=(n,a)=>{const r=n[m],s=[];return a.filter(o=>r&&r[o.kode]).forEach(o=>{const d=`${o.kode}_${j}`,l=r?r[d]:void 0;l&&A.transformValues(l,o.kode).forEach(t=>s.push(t))}),s};p.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"any"}}}],displayName:"AndreYtelserPanel",props:{kunMiliterEllerSiviltjeneste:{defaultValue:{value:"false",computed:!1},required:!1}}};const me=Z(re),i=({readOnly:n,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})=>e.jsx(ee,{value:me,children:e.jsx(p,{readOnly:n,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})});i.buildInitialValues=n=>p.buildInitialValues(n);i.transformValues=(n,a)=>p.transformValues(n,a);i.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null},{name:"andreYtelser",optional:!1,type:null}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex"};const Ae={title:"papirsoknad/ui-komponenter/andre-ytelser",component:i},$=({kunMiliterEllerSiviltjeneste:n,submitCallback:a})=>{const r=ne({defaultValues:i.buildInitialValues(F[_.ARBEID_TYPE])});return e.jsxs(ae,{formMethods:r,onSubmit:s=>a(i.transformValues(s,F[_.ARBEID_TYPE])),children:[e.jsx(i,{readOnly:!1,kunMiliterEllerSiviltjeneste:n,alleKodeverk:F}),e.jsx(R,{fourtyPx:!0}),e.jsx(se,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},f=$.bind({});f.args={kunMiliterEllerSiviltjeneste:!1,submitCallback:K("button-click")};const g=$.bind({});g.args={kunMiliterEllerSiviltjeneste:!0,submitCallback:K("button-click")};var T,S,Y;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`({
  kunMiliterEllerSiviltjeneste,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: AndreYtelserPapirsoknadIndex.buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE])
  });
  return <Form formMethods={formMethods} onSubmit={(values: any) => submitCallback(AndreYtelserPapirsoknadIndex.transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))}>
      <AndreYtelserPapirsoknadIndex readOnly={false} kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste} alleKodeverk={alleKodeverk as any} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(Y=(S=f.parameters)==null?void 0:S.docs)==null?void 0:Y.source}}};var L,h,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`({
  kunMiliterEllerSiviltjeneste,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: AndreYtelserPapirsoknadIndex.buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE])
  });
  return <Form formMethods={formMethods} onSubmit={(values: any) => submitCallback(AndreYtelserPapirsoknadIndex.transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))}>
      <AndreYtelserPapirsoknadIndex readOnly={false} kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste} alleKodeverk={alleKodeverk as any} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(M=(h=g.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const Ie=["Default","KunMiliterEllerSiviltjeneste"];export{f as Default,g as KunMiliterEllerSiviltjeneste,Ie as __namedExportsOrder,Ae as default};
