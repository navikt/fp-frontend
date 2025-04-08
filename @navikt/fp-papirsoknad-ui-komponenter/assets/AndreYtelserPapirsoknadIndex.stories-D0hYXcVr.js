import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{b as V,e as O,k as K,l as x,H as h,U as T,B as j,R as $,V as S,c as U,v as H,p as X,P as B,f as C,m as z,d as G,K as J}from"./nb_NO-OfRtrFwo.js";import{e as A,O as _,D as Q,H as W,a as Z}from"./index.es-l01z5hqK.js";import"./withPanelData-B9CNyksI.js";import{r as M}from"./index-_2TAQcTa.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as ee,a as re}from"./alleKodeverk-Ga5AMxGN.js";import{S as ne}from"./Trash-C8LToiso.js";import{M as te}from"./message-BF-PO83n.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0bQSHhiP.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";import"./entry-preview-CTffOVML.js";import"./iframe-BpcumhwQ.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";var m=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(m||{});const y="andreYtelser",D="andreYtelserPerioder",L="andreYtelserTyper",b=({readOnly:e,name:t})=>{const n=V(),{getValues:a,control:k,trigger:o,formState:{isSubmitted:E}}=O(),{fields:v,remove:R,append:c}=K({control:k,name:t});return M.useEffect(()=>{v.length===0&&c({periodeFom:"",periodeTom:""})},[]),r.jsx(x,{fields:v,bodyText:n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:c,remove:R,children:(F,s)=>{const I=`${t}.${s}`;return r.jsxs(h,{gap:"2",children:[r.jsx(T,{name:`${I}.periodeFom`,label:s===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[A,_,()=>{const{periodeFom:l,periodeTom:u}=a(`${t}.${s}`);return u&&l?Q(u)(l):null}],onChange:()=>E?o():void 0}),r.jsx(T,{name:`${t}.${s}.periodeTom`,label:s===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[A,_,()=>{const{periodeFom:l,periodeTom:u}=a(`${t}.${s}`);return l&&u?W(l)(u):null}],onChange:()=>E?o():void 0}),!e&&s>0&&r.jsx("div",{children:r.jsx(j,{size:"small",type:"button",variant:"tertiary-neutral",icon:r.jsx(ne,{}),onClick:()=>R(s)})})]},F.id)}})};b.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};const ae=(e,t)=>t?e.filter(n=>n.kode===m.MILITÆR_ELLER_SIVILTJENESTE):e.filter(n=>n.kode!==m.UTENLANDSK_ARBEIDSFORHOLD&&n.kode!==m.FRILANSER&&n.kode!==m.LONN_UNDER_UTDANNING),d=({readOnly:e,kunMiliterEllerSiviltjeneste:t=!1,alleKodeverk:n})=>{const a=n[ee.ARBEID_TYPE],k=M.useMemo(()=>ae(a,t),[t]);return r.jsx($,{children:r.jsxs(S,{gap:"4",children:[r.jsx(U,{size:"small",children:r.jsx(te,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(H,{isReadOnly:e,name:`${y}.${L}`,checkboxes:k.map(o=>({label:o.navn,value:o.kode,element:r.jsx(X,{children:r.jsx(b,{name:`${y}.${D}.${o.kode}`,readOnly:e})})}))})]})})};d.initialValues=()=>({[y]:{[L]:[],[D]:{}}});d.transformValues=({andreYtelser:{andreYtelserTyper:e,andreYtelserPerioder:t}})=>({[y]:e.flatMap(n=>t[n].map(a=>({ytelseType:n,...a})))});d.__docgenInfo={description:`AndreYtelserPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]},alias:"AndreYtelserFormValue"}}],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const se=C(z),i=({readOnly:e,alleKodeverk:t,kunMiliterEllerSiviltjeneste:n})=>r.jsx(B,{value:se,children:r.jsx(d,{readOnly:e,alleKodeverk:t,kunMiliterEllerSiviltjeneste:n})});i.initialValues=d.initialValues;i.transformValues=d.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]},alias:"AndreYtelserFormValue"}}],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const fe={title:"ui-komponenter/andre-ytelser",component:i,parameters:{submitCallback:Z("onSubmit")},args:{readOnly:!1,alleKodeverk:re},render:(e,{parameters:{submitCallback:t}})=>{const n=G({defaultValues:i.initialValues()});return r.jsx(J,{formMethods:n,onSubmit:a=>t(i.transformValues(a)),children:r.jsxs(S,{gap:"10",children:[r.jsx(i,{...e}),r.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},p={args:{kunMiliterEllerSiviltjeneste:!1}},g={args:{kunMiliterEllerSiviltjeneste:!0}};var N,Y,f;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: false
  }
}`,...(f=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:f.source}}};var q,w,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: true
  }
}`,...(P=(w=g.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const qe=["Default","KunMiliterEllerSiviltjeneste"];export{p as Default,g as KunMiliterEllerSiviltjeneste,qe as __namedExportsOrder,fe as default};
