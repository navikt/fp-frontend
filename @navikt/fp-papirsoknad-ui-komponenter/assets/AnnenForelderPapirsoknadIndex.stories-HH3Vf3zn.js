import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{H as m,h as T,I as _,F as x,a as H}from"./index.es-CiSAtsS3.js";import{e as I,d as M,F as j,w as B,l as U,V as v,a as S,k as $,j as L,t as C,P as D,S as X,M as z,m as J,b as G,$ as Q,B as W}from"./nb_NO-Do_lz9uu.js";import"./withRouter-DhSU4y_G.js";import{K as Y,a as Z}from"./alleKodeverk-D-QME5s7.js";import{r as ee}from"./index-DRjF_FHU.js";import"./aktivitetStatus-B1m96ipJ.js";import{L as re}from"./landkoder-tJDPMx5C.js";import{T as g}from"./TrueFalseInput-DPUk9p9R.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";var u=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(u||{});const ne="_inputBredde_138ho_1",A={inputBredde:ne},t="annenForelder",k="kanIkkeOppgiBegrunnelse",ae=e=>e.filter(({kode:s})=>s!==re.NORGE).map(({kode:s,navn:n})=>r.jsx("option",{value:s,children:n},s)),f=({readOnly:e=!0,alleKodeverk:s,fagsakPersonnummer:n})=>{const{formatMessage:a}=I(),{watch:o,trigger:i,formState:{isSubmitted:F}}=M(),R=o(`${t}.kanIkkeOppgiAnnenForelder`),b=o(`${t}.${k}`),q=s[Y.LANDKODER],K=ee.useMemo(()=>q.slice().sort((d,V)=>d.navn.localeCompare(V.navn)),[q]);return r.jsxs(r.Fragment,{children:[r.jsx(j,{name:`${t}.foedselsnummer`,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:d=>d&&d.toString().replace(/\s/g,""),readOnly:e,className:A.inputBredde,validate:R?[]:[m,T,_,x(n)],disabled:R}),r.jsx(B,{name:`${t}.kanIkkeOppgiAnnenForelder`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>F?i():void 0}),R===!0&&r.jsx(U,{children:r.jsxs(v,{gap:"4",children:[r.jsx(S,{size:"small",children:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx($,{name:`${t}.${k}.arsak`,hideLegend:!0,validate:[m],isReadOnly:e,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:u.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:u.IKKE_NORSK_FNR}]}),(b==null?void 0:b.arsak)===u.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(L,{name:`${t}.${k}.land`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:ae(K),validate:[m],className:A.inputBredde,readOnly:e}),r.jsx(j,{name:`${t}.${k}.utenlandskFoedselsnummer`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[m],className:A.inputBredde,readOnly:e})]})]})})]})};f.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:s,kanIkkeOppgiBegrunnelse:{arsak:n,land:a,utenlandskFoedselsnummer:o}={}})=>s?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:n===u.IKKE_NORSK_FNR?{arsak:n,land:a,utenlandskFoedselsnummer:o}:{arsak:n}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};f.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  foedselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { arsak, land, utenlandskFoedselsnummer } = {},
}: AnnenForelderSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]},alias:"AnnenForelderSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}}}}],displayName:"OppgiAnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const c=({readOnly:e,sokerErMor:s})=>{const n=I(),{watch:a}=M(),o=a(`${t}.sokerHarAleneomsorg`),i=a(`${t}.denAndreForelderenHarRettPaForeldrepenger`),F=a(`${t}.annenForelderRettEØS`);return r.jsxs(v,{gap:"4",children:[r.jsx(g,{name:`${t}.sokerHarAleneomsorg`,label:n.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),o===!1&&r.jsx(g,{name:`${t}.denAndreForelderenHarRettPaForeldrepenger`,label:n.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),o===!1&&i===!1&&r.jsx(g,{name:`${t}.annenForelderRettEØS`,label:n.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!s&&o===!1&&i===!1&&F===!1&&r.jsx(g,{name:`${t}.morMottarUføretrygd`,label:n.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};c.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:s,annenForelderRettEØS:n,morMottarUføretrygd:a})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?s:void 0,annenForelderRettEØS:s===!1?n:void 0,morMottarUføretrygd:n===!1?a:void 0});c.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  sokerHarAleneomsorg,
  denAndreForelderenHarRettPaForeldrepenger,
  annenForelderRettEØS,
  morMottarUføretrygd,
}: PermisjonRettigheterFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]},alias:"PermisjonRettigheterFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const se=C(J),l=({readOnly:e,alleKodeverk:s,fagsakPersonnummer:n,sokerErMor:a})=>r.jsx(D,{value:se,children:r.jsx(X,{children:r.jsxs(v,{gap:"4",children:[r.jsx(S,{size:"small",children:r.jsx(z,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(f,{readOnly:e,fagsakPersonnummer:n,alleKodeverk:s}),r.jsx(c,{readOnly:e,sokerErMor:a})]})})});l.initialValues=()=>({[t]:{}});l.transformValues=({annenForelder:e})=>({[t]:{...c.transformValues(e),...f.transformValues(e)}});l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  annenForelder,
}: AnnenForelderFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"AnnenForelderFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const fe={title:"ui-komponenter/annen-forelder",component:l,args:{readOnly:!1,alleKodeverk:Z,fagsakPersonnummer:"07078518434"},parameters:{submitCallback:H("onSubmit")},render:(e,{parameters:{submitCallback:s}})=>{const n=G({defaultValues:l.initialValues()});return r.jsx(Q,{formMethods:n,onSubmit:a=>s(l.transformValues(a)),children:r.jsxs(v,{gap:"10",children:[r.jsx(l,{...e}),r.jsx(W,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},p={args:{sokerErMor:!0}},y={args:{sokerErMor:!1}};var E,O,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    sokerErMor: true
  }
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var h,w,N;y.parameters={...y.parameters,docs:{...(h=y.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sokerErMor: false
  }
}`,...(N=(w=y.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const ce=["SokerErMor","SokerErFar"];export{y as SokerErFar,p as SokerErMor,ce as __namedExportsOrder,fe as default};
