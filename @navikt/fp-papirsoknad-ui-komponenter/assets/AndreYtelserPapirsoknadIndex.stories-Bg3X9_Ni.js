import{j as r}from"./jsx-runtime-CLpGMVip.js";import{i as X,d as U,p as H,t as B,H as C,X as A,B as I,Y as G,a as O,b as z,M as J,G as Q,q as W,n as Z,P as ee,m as re,c as ne,r as te}from"./nb_NO-BWG5UGPU.js";import{e as _,O as N,D as ae,H as se,a as ie}from"./index.es-IwNBnKCa.js";import"./withRouter-B08-CNY4.js";import{K as oe,a as de}from"./kodeverkTyper-DpbxgZaG.js";import{r as V}from"./index-CYQpqK1Q.js";import"./aktivitetStatus-B1m96ipJ.js";import{S as ue}from"./Trash-Bk3bmJIX.js";import"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./v4-CtRu48qb.js";var g=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(g||{});const y="andreYtelser",K="andreYtelserPerioder",x="andreYtelserTyper",E=({readOnly:e,name:t})=>{const n=X(),{getValues:a,control:k,trigger:l,formState:{isSubmitted:v}}=U(),{fields:R,remove:c,append:T}=H({control:k,name:t});return V.useEffect(()=>{R.length===0&&T({periodeFom:"",periodeTom:""})},[]),r.jsx(B,{fields:R,bodyText:n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:T,remove:c,children:(h,s)=>{const $=`${t}.${s}`;return r.jsxs(C,{gap:"2",children:[r.jsx(A,{name:`${$}.periodeFom`,label:s===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[_,N,()=>{const{periodeFom:m,periodeTom:p}=a(`${t}.${s}`);return p&&m?ae(p)(m):null}],onChange:()=>v?l():void 0}),r.jsx(A,{name:`${t}.${s}.periodeTom`,label:s===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[_,N,()=>{const{periodeFom:m,periodeTom:p}=a(`${t}.${s}`);return m&&p?se(m)(p):null}],onChange:()=>v?l():void 0}),!e&&s>0&&r.jsx("div",{children:r.jsx(I,{size:"small",type:"button",variant:"tertiary-neutral",icon:r.jsx(ue,{}),onClick:()=>c(s)})})]},h.id)}})};E.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};const le=(e,t)=>t?e.filter(n=>n.kode===g.MILITÆR_ELLER_SIVILTJENESTE):e.filter(n=>n.kode!==g.UTENLANDSK_ARBEIDSFORHOLD&&n.kode!==g.FRILANSER&&n.kode!==g.LONN_UNDER_UTDANNING),u=({readOnly:e,kunMiliterEllerSiviltjeneste:t=!1,alleKodeverk:n})=>{const a=n[oe.ARBEID_TYPE],k=V.useMemo(()=>le(a,t),[t]);return r.jsx(G,{children:r.jsxs(O,{gap:"4",children:[r.jsx(z,{size:"small",children:r.jsx(J,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(Q,{isReadOnly:e,name:`${y}.${x}`,checkboxes:k.map(l=>({label:l.navn,value:l.kode,element:r.jsx(W,{children:r.jsx(E,{name:`${y}.${K}.${l.kode}`,readOnly:e})})}))})]})})};u.initialValues=()=>({[y]:{[x]:[],[K]:{}}});u.transformValues=({andreYtelser:{andreYtelserTyper:e,andreYtelserPerioder:t}})=>({[y]:e.flatMap(n=>t[n].map(a=>({ytelseType:n,...a})))});u.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};u.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me=Z(re),i=({readOnly:e,alleKodeverk:t,kunMiliterEllerSiviltjeneste:n})=>r.jsx(ee,{value:me,children:r.jsx(u,{readOnly:e,alleKodeverk:t,kunMiliterEllerSiviltjeneste:n})});i.initialValues=u.initialValues;i.transformValues=u.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const qe={title:"ui-komponenter/andre-ytelser",component:i,parameters:{submitCallback:ie("onSubmit")},args:{readOnly:!1,alleKodeverk:de},render:(e,{parameters:{submitCallback:t}})=>{const n=ne({defaultValues:i.initialValues()});return r.jsx(te,{formMethods:n,onSubmit:a=>t(i.transformValues(a)),children:r.jsxs(O,{gap:"10",children:[r.jsx(i,{...e}),r.jsx(I,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},o={args:{kunMiliterEllerSiviltjeneste:!1}},d={args:{kunMiliterEllerSiviltjeneste:!0}};var Y,q,w;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: false
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var P,M,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: true
  }
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var b,D,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: false
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,L,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    kunMiliterEllerSiviltjeneste: true
  }
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const we=["Default","KunMiliterEllerSiviltjeneste"];export{o as Default,d as KunMiliterEllerSiviltjeneste,we as __namedExportsOrder,qe as default};
