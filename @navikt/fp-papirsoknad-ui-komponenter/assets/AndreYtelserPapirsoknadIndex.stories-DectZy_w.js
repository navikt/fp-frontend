import{R as e,r as U}from"./index-DVXBtNgz.js";import{e as C,f as w,l as z,r as H,F as X,M as G,c as F,d as T,g as R,R as J,H as Q,h as W,p as Z,i as ee,t as re,P as ne,m as te,a as x,b as ae,O as se,B as le}from"./nb_NO-CWD5ZyDt.js";import{K as V,a as _}from"./alleKodeverk-DbawmvgK.js";import"./withRouter-ClqbeiGf.js";import{r as S,b as Y,I as oe,c as ie}from"./index.es-DfqFIXgR.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-q5bIuV4J.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";const g={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},de="_notLastRow_7c46s_1",me={notLastRow:de},m="andreYtelser",N="PERIODER",y=(n,t)=>n(t),I=({readOnly:n,name:t})=>{const r=C(),{getValues:a,control:l,trigger:i,formState:{isSubmitted:o}}=w(),{fields:s,remove:b,append:O}=z({control:l,name:`${m}.${t}`});return e.createElement(H,{fields:s,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:n,append:O,remove:b},(q,f,P)=>{const d=`${m}.${t}.${f}`;return e.createElement("div",{key:q.id},e.createElement("div",{className:f!==s.length-1?me.notLastRow:""},e.createElement(X,null,e.createElement(G,null,e.createElement(F,null,e.createElement(T,{name:`${d}.periodeFom`,label:f===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[S,Y,()=>{const p=y(a,`${d}.periodeFom`),c=y(a,`${d}.periodeTom`);return c&&p?oe(c)(p):null}],onChange:()=>o?i():void 0})),e.createElement(F,null,e.createElement(T,{name:`${d}.periodeTom`,label:f===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[S,Y,()=>{const p=y(a,`${d}.periodeFom`),c=y(a,`${d}.periodeTom`);return c&&p?ie(p)(c):null}],onChange:()=>o?i():void 0})),P&&e.createElement(F,null,P())))),e.createElement(R,{sixteenPx:!0}))})};I.transformValues=(n,t)=>n.map(r=>({ytelseType:t,periodeFom:r.periodeFom,periodeTom:r.periodeTom}));I.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"any"}}}],displayName:"RenderAndreYtelserPerioderFieldArray"};const j=(n,t)=>t?n.filter(r=>r.kode===g.MILITÆR_ELLER_SIVILTJENESTE):n.filter(r=>r.kode!==g.UTENLANDSK_ARBEIDSFORHOLD&&r.kode!==g.FRILANSER&&r.kode!==g.LONN_UNDER_UTDANNING),u=({readOnly:n,kunMiliterEllerSiviltjeneste:t=!1,alleKodeverk:r})=>{const{watch:a}=w(),l=a(m),i=r[V.ARBEID_TYPE],o=U.useMemo(()=>j(i,t),[t]);return e.createElement(J,null,e.createElement(Q,{size:"small"},e.createElement(W,{id:"Registrering.AndreYtelser.Title"})),e.createElement(R,{sixteenPx:!0}),o.map(s=>{const b=`${s.kode}_${N}`;return e.createElement(e.Fragment,{key:s.kode},e.createElement(Z,{key:s.kode,name:`${m}.${s.kode}`,label:s.navn,readOnly:n}),l&&l[s.kode]&&e.createElement(e.Fragment,null,e.createElement(R,{eightPx:!0}),e.createElement(ee,null,e.createElement(I,{name:b,readOnly:n}))))}))};u.buildInitialValues=n=>{const t={};return j(n).forEach(r=>{const a=`${r.kode}_${N}`;t[a]=[{}]}),{[m]:t}};u.transformValues=(n,t)=>{const r=n[m],a=[];return t.filter(l=>r&&r[l.kode]).forEach(l=>{const i=`${l.kode}_${N}`,o=r?r[i]:void 0;o&&I.transformValues(o,l.kode).forEach(s=>a.push(s))}),a};u.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"any"}}}],displayName:"AndreYtelserPanel",props:{kunMiliterEllerSiviltjeneste:{defaultValue:{value:"false",computed:!1},required:!1}}};const ue=re(te),A=({readOnly:n,alleKodeverk:t,kunMiliterEllerSiviltjeneste:r})=>e.createElement(ne,{value:ue},e.createElement(u,{readOnly:n,alleKodeverk:t,kunMiliterEllerSiviltjeneste:r}));A.buildInitialValues=n=>u.buildInitialValues(n);A.transformValues=(n,t)=>u.transformValues(n,t);const v=A;A.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null},{name:"andreYtelser",optional:!1,type:null}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex"};const Ie={title:"papirsoknad/ui-komponenter/andre-ytelser",component:v},B=({kunMiliterEllerSiviltjeneste:n,submitCallback:t})=>{const r=ae({defaultValues:v.buildInitialValues(_[V.ARBEID_TYPE])});return e.createElement(se,{formMethods:r,onSubmit:a=>t(v.transformValues(a,_[V.ARBEID_TYPE]))},e.createElement(v,{readOnly:!1,kunMiliterEllerSiviltjeneste:n,alleKodeverk:_}),e.createElement(R,{fourtyPx:!0}),e.createElement(le,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},k=B.bind({});k.args={kunMiliterEllerSiviltjeneste:!1,submitCallback:x("button-click")};const E=B.bind({});E.args={kunMiliterEllerSiviltjeneste:!0,submitCallback:x("button-click")};var L,M,D;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(D=(M=k.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var K,$,h;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`({
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
}`,...(h=($=E.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};const Ae=["Default","KunMiliterEllerSiviltjeneste"];export{k as Default,E as KunMiliterEllerSiviltjeneste,Ae as __namedExportsOrder,Ie as default};
