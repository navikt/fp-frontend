import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{H as F,g as b,D as O,U as $,a as U}from"./index.es-8Fll0b49.js";import{d as H,e as K,f as B,I as X,W as C,b as z,L as w,P as _,y as N,S as G,H as J,M as W,w as Q,l as Z,t as ee,c as re,m as ne,a as ae,$ as te,V as se,B as ie}from"./nb_NO-gSijKUYs.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as j,a as T}from"./alleKodeverk-D-QME5s7.js";import"./withRouter-DhSU4y_G.js";import{r as oe,R as de}from"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";var v=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(v||{});const le="_notLastRow_7c46s_1",ue={notLastRow:le},m="andreYtelser",q="PERIODER",c=(e,a)=>e(a),E=({readOnly:e,name:a})=>{const n=H(),{getValues:t,control:s,trigger:l,formState:{isSubmitted:o}}=K(),{fields:i,remove:A,append:D}=B({control:s,name:`${m}.${a}`});return r.jsx(X,{fields:i,bodyText:n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:D,remove:A,children:(Y,y,V)=>{const u=`${m}.${a}.${y}`;return r.jsxs("div",{children:[r.jsx("div",{className:y!==i.length-1?ue.notLastRow:"",children:r.jsx(C,{children:r.jsxs(z,{children:[r.jsx(w,{children:r.jsx(_,{name:`${u}.periodeFom`,label:y===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[F,b,()=>{const g=c(t,`${u}.periodeFom`),p=c(t,`${u}.periodeTom`);return p&&g?O(p)(g):null}],onChange:()=>o?l():void 0})}),r.jsx(w,{children:r.jsx(_,{name:`${u}.periodeTom`,label:y===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[F,b,()=>{const g=c(t,`${u}.periodeFom`),p=c(t,`${u}.periodeTom`);return p&&g?$(g)(p):null}],onChange:()=>o?l():void 0})}),V&&r.jsx(w,{children:V()})]})})}),r.jsx(N,{sixteenPx:!0})]},Y.id)}})};E.transformValues=(e,a)=>e.map(n=>({ytelseType:a,periodeFom:n.periodeFom,periodeTom:n.periodeTom}));E.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"ytelseType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"TransformValues[]"}}}],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const h=(e,a)=>a?e.filter(n=>n.kode===v.MILITÆR_ELLER_SIVILTJENESTE):e.filter(n=>n.kode!==v.UTENLANDSK_ARBEIDSFORHOLD&&n.kode!==v.FRILANSER&&n.kode!==v.LONN_UNDER_UTDANNING),k=({readOnly:e,kunMiliterEllerSiviltjeneste:a=!1,alleKodeverk:n})=>{const{watch:t}=K(),s=t(m),l=n[j.ARBEID_TYPE],o=oe.useMemo(()=>h(l,a),[a]);return r.jsxs(G,{children:[r.jsx(J,{size:"small",children:r.jsx(W,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(N,{sixteenPx:!0}),o.map(i=>{const A=`${i.kode}_${q}`;return r.jsxs(de.Fragment,{children:[r.jsx(Q,{name:`${m}.${i.kode}`,label:i.navn,readOnly:e},i.kode),(s==null?void 0:s[i.kode])&&r.jsxs(r.Fragment,{children:[r.jsx(N,{eightPx:!0}),r.jsx(Z,{children:r.jsx(E,{name:A,readOnly:e})})]})]},i.kode)})]})};k.buildInitialValues=e=>{const a={};return h(e).forEach(n=>{const t=`${n.kode}_${q}`;a[t]=[{}]}),{[m]:a}};k.transformValues=(e,a)=>{const n=e[m],t=[];return a.filter(s=>n==null?void 0:n[s.kode]).forEach(s=>{const l=`${s.kode}_${q}`,o=n?n[l]:void 0;o&&E.transformValues(o,s.kode).forEach(i=>t.push(i))}),t};k.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me=ee(ne),d=({readOnly:e,alleKodeverk:a,kunMiliterEllerSiviltjeneste:n})=>r.jsx(re,{value:me,children:r.jsx(k,{readOnly:e,alleKodeverk:a,kunMiliterEllerSiviltjeneste:n})});d.buildInitialValues=e=>k.buildInitialValues(e);d.transformValues=(e,a)=>k.transformValues(e,a);d.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const we={title:"papirsoknad/ui-komponenter/andre-ytelser",component:d,parameters:{submitCallback:U("onSubmit")},args:{readOnly:!1,alleKodeverk:T},render:function(a,{parameters:{submitCallback:n}}){const t=ae({defaultValues:d.buildInitialValues(T[j.ARBEID_TYPE])});return r.jsx(te,{formMethods:t,onSubmit:s=>n(d.transformValues(s,T[j.ARBEID_TYPE])),children:r.jsxs(se,{gap:"10",children:[r.jsx(d,{...a}),r.jsx(ie,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},R={args:{kunMiliterEllerSiviltjeneste:!1}},f={args:{kunMiliterEllerSiviltjeneste:!0}};var I,x,M;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: false
  }
}`,...(M=(x=R.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var S,L,P;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: true
  }
}`,...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const Te=["Default","KunMiliterEllerSiviltjeneste"];export{R as Default,f as KunMiliterEllerSiviltjeneste,Te as __namedExportsOrder,we as default};
