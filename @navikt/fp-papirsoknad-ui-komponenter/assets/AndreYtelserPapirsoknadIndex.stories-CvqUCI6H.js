import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as b,g as F,D as O,U as $,a as U}from"./index.es-CIUn6rVA.js";import{d as H,e as K,f as B,I as X,W as C,b as z,L as T,P as _,y as N,S as G,H as J,M as W,w as Q,l as Z,t as ee,c as re,m as ne,a as ae,$ as te,V as se,B as ie}from"./nb_NO-C2sskw2s.js";import{K as j,a as w}from"./alleKodeverk-D-QME5s7.js";import"./withRouter-DhSU4y_G.js";import{r as oe,R as de}from"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";const y={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},le="_notLastRow_7c46s_1",ue={notLastRow:le},m="andreYtelser",q="PERIODER",c=(n,a)=>n(a),E=({readOnly:n,name:a})=>{const r=H(),{getValues:t,control:s,trigger:l,formState:{isSubmitted:o}}=K(),{fields:i,remove:A,append:D}=B({control:s,name:`${m}.${a}`});return e.jsx(X,{fields:i,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:n,append:D,remove:A,children:(Y,v,V)=>{const u=`${m}.${a}.${v}`;return e.jsxs("div",{children:[e.jsx("div",{className:v!==i.length-1?ue.notLastRow:"",children:e.jsx(C,{children:e.jsxs(z,{children:[e.jsx(T,{children:e.jsx(_,{name:`${u}.periodeFom`,label:v===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[b,F,()=>{const g=c(t,`${u}.periodeFom`),p=c(t,`${u}.periodeTom`);return p&&g?O(p)(g):null}],onChange:()=>o?l():void 0})}),e.jsx(T,{children:e.jsx(_,{name:`${u}.periodeTom`,label:v===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[b,F,()=>{const g=c(t,`${u}.periodeFom`),p=c(t,`${u}.periodeTom`);return p&&g?$(g)(p):null}],onChange:()=>o?l():void 0})}),V&&e.jsx(T,{children:V()})]})})}),e.jsx(N,{sixteenPx:!0})]},Y.id)}})};E.transformValues=(n,a)=>n.map(r=>({ytelseType:a,periodeFom:r.periodeFom,periodeTom:r.periodeTom}));E.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"ytelseType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"TransformValues[]"}}}],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const h=(n,a)=>a?n.filter(r=>r.kode===y.MILITÆR_ELLER_SIVILTJENESTE):n.filter(r=>r.kode!==y.UTENLANDSK_ARBEIDSFORHOLD&&r.kode!==y.FRILANSER&&r.kode!==y.LONN_UNDER_UTDANNING),k=({readOnly:n,kunMiliterEllerSiviltjeneste:a=!1,alleKodeverk:r})=>{const{watch:t}=K(),s=t(m),l=r[j.ARBEID_TYPE],o=oe.useMemo(()=>h(l,a),[a]);return e.jsxs(G,{children:[e.jsx(J,{size:"small",children:e.jsx(W,{id:"Registrering.AndreYtelser.Title"})}),e.jsx(N,{sixteenPx:!0}),o.map(i=>{const A=`${i.kode}_${q}`;return e.jsxs(de.Fragment,{children:[e.jsx(Q,{name:`${m}.${i.kode}`,label:i.navn,readOnly:n},i.kode),(s==null?void 0:s[i.kode])&&e.jsxs(e.Fragment,{children:[e.jsx(N,{eightPx:!0}),e.jsx(Z,{children:e.jsx(E,{name:A,readOnly:n})})]})]},i.kode)})]})};k.buildInitialValues=n=>{const a={};return h(n).forEach(r=>{const t=`${r.kode}_${q}`;a[t]=[{}]}),{[m]:a}};k.transformValues=(n,a)=>{const r=n[m],t=[];return a.filter(s=>r==null?void 0:r[s.kode]).forEach(s=>{const l=`${s.kode}_${q}`,o=r?r[l]:void 0;o&&E.transformValues(o,s.kode).forEach(i=>t.push(i))}),t};k.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"ytelseType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"TransformValues[]"}}}],displayName:"AndreYtelserPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me=ee(ne),d=({readOnly:n,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})=>e.jsx(re,{value:me,children:e.jsx(k,{readOnly:n,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})});d.buildInitialValues=n=>k.buildInitialValues(n);d.transformValues=(n,a)=>k.transformValues(n,a);d.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const Ae={title:"papirsoknad/ui-komponenter/andre-ytelser",component:d,parameters:{submitCallback:U("onSubmit")},args:{readOnly:!1,alleKodeverk:w},render:function(a,{parameters:{submitCallback:r}}){const t=ae({defaultValues:d.buildInitialValues(w[j.ARBEID_TYPE])});return e.jsx(te,{formMethods:t,onSubmit:s=>r(d.transformValues(s,w[j.ARBEID_TYPE])),children:e.jsxs(se,{gap:"10",children:[e.jsx(d,{...a}),e.jsx(ie,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},R={args:{kunMiliterEllerSiviltjeneste:!1}},f={args:{kunMiliterEllerSiviltjeneste:!0}};var I,x,M;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: false
  }
}`,...(M=(x=R.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var S,L,P;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: true
  }
}`,...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const Te=["Default","KunMiliterEllerSiviltjeneste"];export{R as Default,f as KunMiliterEllerSiviltjeneste,Te as __namedExportsOrder,Ae as default};
