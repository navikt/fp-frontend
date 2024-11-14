import{H as x,R as D,O as i,f as o,S as h,b as c,d as m,a as L,u as X,$ as J,M as $,L as U,r as Y,h as z,i as T,j as F,z as R}from"./BehovForTilretteleggingPanel-5to9imvA.js";import{b as B,w as C,g as Q,m as W}from"./nb_NO-CDPgrmbM.js";import{j as r}from"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DjnMOTGP.js";import"./index-rX-Bn4lm.js";const Z="_col_hlukm_1",N={col:Z},f="omsorg",d=({readOnly:e,soknadData:n,alleKodeverk:s,fodselsdato:a,mottattDato:t})=>r.jsxs(x,{justify:"space-between",children:[r.jsxs("div",{className:N.col,children:[r.jsx(D,{readOnly:e,soknadData:n}),r.jsx(i,{readOnly:e,alleKodeverk:s,erAdopsjon:n.getFamilieHendelseType()!==o.ADOPSJON,mottattDato:t}),r.jsx(h,{readOnly:e})]}),r.jsx("div",{className:N.col,children:r.jsx(c,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:a})})]});d.transformValues=e=>({...i.transformValues(e),[f]:c.transformValues(e[f])});d.buildInitialValues=()=>({[f]:{},...i.buildInitialValues()});d.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
} & OppholdINorgeFormValues`,elements:[{name:"signature",type:"object",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"omsorg",value:{name:"FormValues",required:!1}}]}},{name:"FormValues"}],alias:"FormValues"}}],returns:{type:{name:"intersection",raw:`Omit<FormValues, 'omsorg'> & {
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
} & OppholdINorgeFormValues`,elements:[{name:"signature",type:"object",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"omsorg",value:{name:"FormValues",required:!1}}]}},{name:"FormValues"}]},{name:"literal",value:"'omsorg'"}],raw:"Omit<FormValues, 'omsorg'>"},{name:"signature",type:"object",raw:`{
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const ee="_col_hlukm_1",S={col:ee},O="omsorg",l=({readOnly:e,soknadData:n,alleKodeverk:s,fodselsdato:a,mottattDato:t})=>r.jsxs(x,{justify:"space-between",children:[r.jsxs("div",{className:S.col,children:[n.getForeldreType()!==m.MOR&&r.jsx(D,{readOnly:e,soknadData:n}),r.jsx(i,{readOnly:e,erAdopsjon:n.getFamilieHendelseType()!==o.ADOPSJON,alleKodeverk:s,mottattDato:t}),r.jsx(h,{readOnly:e})]}),r.jsxs("div",{className:S.col,children:[n.getForeldreType()!==m.MOR&&r.jsx(c,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:a}),r.jsx(L,{readOnly:e,erForeldrepenger:!1})]})]});l.transformValues=e=>({...i.transformValues(e),[O]:c.transformValues(e[O])});l.buildInitialValues=()=>({...i.buildInitialValues(),[O]:{}});l.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const re=(e,n)=>e?l.buildInitialValues():n?d.buildInitialValues():{},ne=(e,n,s)=>{let a=e;return e.rettigheter===Y.IKKE_RELEVANT&&(a=B(e,"rettigheter")),{...a,...n?l.transformValues(a):{},...s?d.transformValues(a):{}}},G=({readOnly:e,soknadData:n,alleKodeverk:s,onSubmitUfullstendigsoknad:a,onSubmit:t})=>{const y=n.getFamilieHendelseType()===o.FODSEL,v=n.getFamilieHendelseType()===o.ADOPSJON,u=X({defaultValues:re(y,v)}),A=u.watch("foedselsDato"),w=u.watch("mottattDato");return r.jsxs(J,{formMethods:u,onSubmit:H=>t(ne(H,y,v)),children:[r.jsx($,{readOnly:e}),y&&r.jsx(l,{soknadData:n,readOnly:e,alleKodeverk:s,fodselsdato:A,mottattDato:w}),v&&r.jsx(d,{soknadData:n,readOnly:e,alleKodeverk:s,fodselsdato:A,mottattDato:w}),r.jsx(U,{readOnly:e,submitting:u.formState.isSubmitting,onSubmitUfullstendigsoknad:a})]})};G.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const K=({onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:s,soknadData:a,alleKodeverk:t})=>r.jsx(G,{onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:s,soknadData:a,alleKodeverk:t});K.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const me={title:"papirsoknad/engangstonad",component:K,decorators:[C,Q(W)],args:{readOnly:!1,alleKodeverk:z,onSubmit:e=>(T("onSubmit")(e),Promise.resolve(e)),onSubmitUfullstendigsoknad:()=>(T("onSubmitUfullstendigsoknad")(),Promise.resolve())}},g={args:{soknadData:new F(R.ENGANGSSTONAD,o.FODSEL,m.MOR)}},p={args:{soknadData:new F(R.ENGANGSSTONAD,o.ADOPSJON,m.MOR)}},k={args:{soknadData:new F(R.ENGANGSSTONAD,o.FODSEL,m.FAR)}};var j,V,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR)
  }
}`,...(M=(V=g.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var b,_,q;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR)
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,P,I;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.FAR)
  }
}`,...(I=(P=k.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const ue=["ForMorVedFødsel","ForMorVedAdopsjon","ForFarVedFødsel"];export{k as ForFarVedFødsel,p as ForMorVedAdopsjon,g as ForMorVedFødsel,ue as __namedExportsOrder,me as default};
