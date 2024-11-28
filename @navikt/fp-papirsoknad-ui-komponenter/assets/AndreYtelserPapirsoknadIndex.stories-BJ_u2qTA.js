import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{e as O,d as K,i as $,I as U,W as X,s as B,x as w,c as V,y as F,S as H,a as C,M as z,w as G,l as J,t as W,P as Q,m as Z,b as ee,$ as re,V as ne,B as ae}from"./nb_NO-YFU2oKl2.js";import{H as _,g as b,D as te,U as se,a as ie}from"./index.es-wC-k5ZxB.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as j,a as f}from"./alleKodeverk-D-QME5s7.js";import"./withRouter-DhSU4y_G.js";import{r as oe,R as de}from"./index-DRjF_FHU.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";var y=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(y||{});const le="_notLastRow_7c46s_1",ue={notLastRow:le},m="andreYtelser",q="PERIODER",c=(e,n)=>e(n),T=({readOnly:e,name:n})=>{const a=O(),{getValues:t,control:i,trigger:o,formState:{isSubmitted:l}}=K(),{fields:s,remove:A,append:D}=$({control:i,name:`${m}.${n}`});return r.jsx(U,{fields:s,bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:D,remove:A,children:(h,v,N)=>{const u=`${m}.${n}.${v}`;return r.jsxs("div",{children:[r.jsx("div",{className:v!==s.length-1?ue.notLastRow:"",children:r.jsx(X,{children:r.jsxs(B,{children:[r.jsx(w,{children:r.jsx(V,{name:`${u}.periodeFom`,label:v===0?a.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[_,b,()=>{const p=c(t,`${u}.periodeFom`),k=c(t,`${u}.periodeTom`);return k&&p?te(k)(p):null}],onChange:()=>l?o():void 0})}),r.jsx(w,{children:r.jsx(V,{name:`${u}.periodeTom`,label:v===0?a.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[_,b,()=>{const p=c(t,`${u}.periodeFom`),k=c(t,`${u}.periodeTom`);return k&&p?se(p)(k):null}],onChange:()=>l?o():void 0})}),N&&r.jsx(w,{children:N()})]})})}),r.jsx(F,{sixteenPx:!0})]},h.id)}})};T.transformValues=({periodeFom:e,periodeTom:n})=>({periodeFom:e,periodeTom:n});T.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ periodeFom, periodeTom }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}}}],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Y=(e,n)=>n?e.filter(a=>a.kode===y.MILITÆR_ELLER_SIVILTJENESTE):e.filter(a=>a.kode!==y.UTENLANDSK_ARBEIDSFORHOLD&&a.kode!==y.FRILANSER&&a.kode!==y.LONN_UNDER_UTDANNING),g=({readOnly:e,kunMiliterEllerSiviltjeneste:n=!1,alleKodeverk:a})=>{const{watch:t}=K(),i=t(m),o=a[j.ARBEID_TYPE],l=oe.useMemo(()=>Y(o,n),[n]);return r.jsxs(H,{children:[r.jsx(C,{size:"small",children:r.jsx(z,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(F,{sixteenPx:!0}),l.map(s=>{const A=`${s.kode}_${q}`;return r.jsxs(de.Fragment,{children:[r.jsx(G,{name:`${m}.${s.kode}`,label:s.navn,readOnly:e},s.kode),(i==null?void 0:i[s.kode])&&r.jsxs(r.Fragment,{children:[r.jsx(F,{eightPx:!0}),r.jsx(J,{children:r.jsx(T,{name:A,readOnly:e})})]})]},s.kode)})]})};g.initialValues=e=>{const n={};return Y(e).forEach(a=>{const t=`${a.kode}_${q}`;n[t]=[{}]}),{[m]:n}};g.transformValues=({andreYtelser:e},n)=>{const a=[];return n.filter(t=>e==null?void 0:e[t.kode]).forEach(t=>{const i=`${t.kode}_${q}`,o=e?e[i]:void 0;o&&o.map(T.transformValues).forEach(l=>a.push({...l,ytelseType:t.kode}))}),{[m]:a}};g.__docgenInfo={description:`AndreYtelserPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ andreYtelser }: AndreYtelserFormValue",optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]},alias:"AndreYtelserFormValue"}},{name:"kodeverkAndreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
}`,signature:{properties:[{key:"andreYtelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}[]`,required:!0}}]}}}}],displayName:"AndreYtelserPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me=W(Z),d=({readOnly:e,alleKodeverk:n,kunMiliterEllerSiviltjeneste:a})=>r.jsx(Q,{value:me,children:r.jsx(g,{readOnly:e,alleKodeverk:n,kunMiliterEllerSiviltjeneste:a})});d.initialValues=g.initialValues;d.transformValues=g.transformValues;d.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ andreYtelser }: AndreYtelserFormValue",optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]},alias:"AndreYtelserFormValue"}},{name:"kodeverkAndreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
}`,signature:{properties:[{key:"andreYtelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}[]`,required:!0}}]}}}}],displayName:"AndreYtelserPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const we={title:"ui-komponenter/andre-ytelser",component:d,parameters:{submitCallback:ie("onSubmit")},args:{readOnly:!1,alleKodeverk:f},render:(e,{parameters:{submitCallback:n}})=>{const a=ee({defaultValues:d.initialValues(f[j.ARBEID_TYPE])});return r.jsx(re,{formMethods:a,onSubmit:t=>n(d.transformValues(t,f[j.ARBEID_TYPE])),children:r.jsxs(ne,{gap:"10",children:[r.jsx(d,{...e}),r.jsx(ae,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},R={args:{kunMiliterEllerSiviltjeneste:!1}},E={args:{kunMiliterEllerSiviltjeneste:!0}};var I,P,M;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: false
  }
}`,...(M=(P=R.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var S,x,L;E.parameters={...E.parameters,docs:{...(S=E.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: true
  }
}`,...(L=(x=E.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const fe=["Default","KunMiliterEllerSiviltjeneste"];export{R as Default,E as KunMiliterEllerSiviltjeneste,fe as __namedExportsOrder,we as default};
