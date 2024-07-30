import{j as n}from"./dayjs.min-DtekDYzD.js";import{R as D,O as d,f as o,S as K,b as y,d as k,a as X,M as J,L as $,r as Y,h as i,i as b,z as S,j as A}from"./BehovForTilretteleggingPanel-DHuhdpJP.js";import{H as G,u as z,D as B,b as C,w as Q}from"./index.es-BsA6gvT2.js";import"./index-BBkUAzwr.js";import"./v4-CQkTLCs1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-BfZ0jBbx.js";const W="_col_hlukm_1",j={col:W},F="omsorg",l=({readOnly:e,soknadData:r,alleKodeverk:s,fodselsdato:a,mottattDato:t})=>n.jsxs(G,{justify:"space-between",children:[n.jsxs("div",{className:j.col,children:[n.jsx(D,{readOnly:e,soknadData:r}),n.jsx(d,{readOnly:e,alleKodeverk:s,erAdopsjon:r.getFamilieHendelseType()!==o.ADOPSJON,mottattDato:t}),n.jsx(K,{readOnly:e})]}),n.jsx("div",{className:j.col,children:n.jsx(y,{readOnly:e,familieHendelseType:r.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:a})})]});l.transformValues=e=>({...d.transformValues(e),[F]:y.transformValues(e[F])});l.buildInitialValues=()=>({[F]:{},...d.buildInitialValues()});l.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const Z="_col_hlukm_1",T={col:Z},R="omsorg",m=({readOnly:e,soknadData:r,alleKodeverk:s,fodselsdato:a,mottattDato:t})=>n.jsxs(G,{justify:"space-between",children:[n.jsxs("div",{className:T.col,children:[r.getForeldreType()!==k.MOR&&n.jsx(D,{readOnly:e,soknadData:r}),n.jsx(d,{readOnly:e,erAdopsjon:r.getFamilieHendelseType()!==o.ADOPSJON,alleKodeverk:s,mottattDato:t}),n.jsx(K,{readOnly:e})]}),n.jsxs("div",{className:T.col,children:[r.getForeldreType()!==k.MOR&&n.jsx(y,{readOnly:e,familieHendelseType:r.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:a}),n.jsx(X,{readOnly:e})]})]});m.transformValues=e=>({...d.transformValues(e),[R]:y.transformValues(e[R])});m.buildInitialValues=()=>({...d.buildInitialValues(),[R]:{}});m.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const ee=(e,r)=>e?m.buildInitialValues():r?l.buildInitialValues():{},ne=(e,r,s)=>{let a=e;return e.rettigheter===Y.IKKE_RELEVANT&&(a=C(e,"rettigheter")),{...a,...r?m.transformValues(a):{},...s?l.transformValues(a):{}}},H=({readOnly:e,soknadData:r,alleKodeverk:s,onSubmitUfullstendigsoknad:a,onSubmit:t})=>{const f=r.getFamilieHendelseType()===o.FODSEL,O=r.getFamilieHendelseType()===o.ADOPSJON,c=z({defaultValues:ee(f,O)}),w=c.watch("foedselsDato"),N=c.watch("mottattDato");return n.jsxs(B,{formMethods:c,onSubmit:U=>t(ne(U,f,O)),children:[n.jsx(J,{readOnly:e}),f&&n.jsx(m,{soknadData:r,readOnly:e,alleKodeverk:s,fodselsdato:w,mottattDato:N}),O&&n.jsx(l,{soknadData:r,readOnly:e,alleKodeverk:s,fodselsdato:w,mottattDato:N}),n.jsx($,{readOnly:e,submitting:c.formState.isSubmitting,onSubmitUfullstendigsoknad:a})]})};H.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const L=({onSubmitUfullstendigsoknad:e,onSubmit:r,readOnly:s,soknadData:a,alleKodeverk:t})=>n.jsx(H,{onSubmitUfullstendigsoknad:e,onSubmit:r,readOnly:s,soknadData:a,alleKodeverk:t}),v=L;L.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const le={title:"papirsoknad/papirsoknad-es",component:v,decorators:[Q]},u=()=>n.jsx(v,{onSubmitUfullstendigsoknad:i("button-click"),onSubmit:i("button-click"),readOnly:!1,soknadData:new b(S.ENGANGSSTONAD,o.FODSEL,k.MOR),alleKodeverk:A}),g=()=>n.jsx(v,{onSubmitUfullstendigsoknad:i("button-click"),onSubmit:i("button-click"),readOnly:!1,soknadData:new b(S.ENGANGSSTONAD,o.ADOPSJON,k.MOR),alleKodeverk:A}),p=()=>n.jsx(v,{onSubmitUfullstendigsoknad:i("button-click"),onSubmit:i("button-click"),readOnly:!1,soknadData:new b(S.ENGANGSSTONAD,o.FODSEL,k.FAR),alleKodeverk:A});u.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedFødsel"};g.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedAdopsjon"};p.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForFarVedFødsel"};var V,P,M;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:"() => <EngangsstonadPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,x,I;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"() => <EngangsstonadPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(I=(x=g.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var E,q,h;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"() => <EngangsstonadPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.FAR)} alleKodeverk={(alleKodeverk as any)} />",...(h=(q=p.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};const me=["visPapirsoknadForMorVedFødsel","visPapirsoknadForMorVedAdopsjon","visPapirsoknadForFarVedFødsel"];export{me as __namedExportsOrder,le as default,p as visPapirsoknadForFarVedFødsel,g as visPapirsoknadForMorVedAdopsjon,u as visPapirsoknadForMorVedFødsel};
