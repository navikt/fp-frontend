import{R as n}from"./index-DogsOklH.js";import{R as K,O as d,f as o,S as G,b as y,d as k,a as X,M as J,L as $,r as Y,h as i,i as E,z as b,j as S}from"./BehovForTilretteleggingPanel-KxVNoSh9.js";import{H as x,u as z,O as B,a as C,w as Q}from"./index.es-vmBGRY87.js";import"./v4-yQnnJER4.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-MroJ3egt.js";const W="_col_hlukm_1",N={col:W},F="omsorg",l=({readOnly:e,soknadData:r,alleKodeverk:s,fodselsdato:a,mottattDato:t})=>n.createElement(x,{justify:"space-between"},n.createElement("div",{className:N.col},n.createElement(K,{readOnly:e,soknadData:r}),n.createElement(d,{readOnly:e,alleKodeverk:s,erAdopsjon:r.getFamilieHendelseType()!==o.ADOPSJON,mottattDato:t}),n.createElement(G,{readOnly:e})),n.createElement("div",{className:N.col},n.createElement(y,{readOnly:e,familieHendelseType:r.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:a})));l.transformValues=e=>({...d.transformValues(e),[F]:y.transformValues(e[F])});l.buildInitialValues=()=>({[F]:{},...d.buildInitialValues()});l.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const Z="_col_hlukm_1",T={col:Z},R="omsorg",m=({readOnly:e,soknadData:r,alleKodeverk:s,fodselsdato:a,mottattDato:t})=>n.createElement(x,{justify:"space-between"},n.createElement("div",{className:T.col},r.getForeldreType()!==k.MOR&&n.createElement(K,{readOnly:e,soknadData:r}),n.createElement(d,{readOnly:e,erAdopsjon:r.getFamilieHendelseType()!==o.ADOPSJON,alleKodeverk:s,mottattDato:t}),n.createElement(G,{readOnly:e})),n.createElement("div",{className:T.col},r.getForeldreType()!==k.MOR&&n.createElement(y,{readOnly:e,familieHendelseType:r.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:a}),n.createElement(X,{readOnly:e})));m.transformValues=e=>({...d.transformValues(e),[R]:y.transformValues(e[R])});m.buildInitialValues=()=>({...d.buildInitialValues(),[R]:{}});m.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const ee=(e,r)=>e?m.buildInitialValues():r?l.buildInitialValues():{},ne=(e,r,s)=>{let a=e;return e.rettigheter===Y.IKKE_RELEVANT&&(a=C(e,"rettigheter")),{...a,...r?m.transformValues(a):{},...s?l.transformValues(a):{}}},H=({readOnly:e,soknadData:r,alleKodeverk:s,onSubmitUfullstendigsoknad:a,onSubmit:t})=>{const f=r.getFamilieHendelseType()===o.FODSEL,O=r.getFamilieHendelseType()===o.ADOPSJON,c=z({defaultValues:ee(f,O)}),A=c.watch("foedselsDato"),w=c.watch("mottattDato");return n.createElement(B,{formMethods:c,onSubmit:U=>t(ne(U,f,O))},n.createElement(J,{readOnly:e}),f&&n.createElement(m,{soknadData:r,readOnly:e,alleKodeverk:s,fodselsdato:A,mottattDato:w}),O&&n.createElement(l,{soknadData:r,readOnly:e,alleKodeverk:s,fodselsdato:A,mottattDato:w}),n.createElement($,{readOnly:e,submitting:c.formState.isSubmitting,onSubmitUfullstendigsoknad:a}))};H.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const L=({onSubmitUfullstendigsoknad:e,onSubmit:r,readOnly:s,soknadData:a,alleKodeverk:t})=>n.createElement(H,{onSubmitUfullstendigsoknad:e,onSubmit:r,readOnly:s,soknadData:a,alleKodeverk:t}),v=L;L.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const de={title:"papirsoknad/papirsoknad-es",component:v,decorators:[Q]},u=()=>n.createElement(v,{onSubmitUfullstendigsoknad:i("button-click"),onSubmit:i("button-click"),readOnly:!1,soknadData:new E(b.ENGANGSSTONAD,o.FODSEL,k.MOR),alleKodeverk:S}),g=()=>n.createElement(v,{onSubmitUfullstendigsoknad:i("button-click"),onSubmit:i("button-click"),readOnly:!1,soknadData:new E(b.ENGANGSSTONAD,o.ADOPSJON,k.MOR),alleKodeverk:S}),p=()=>n.createElement(v,{onSubmitUfullstendigsoknad:i("button-click"),onSubmit:i("button-click"),readOnly:!1,soknadData:new E(b.ENGANGSSTONAD,o.FODSEL,k.FAR),alleKodeverk:S});u.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedFødsel"};g.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedAdopsjon"};p.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForFarVedFødsel"};var V,P,M;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:"() => <EngangsstonadPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,I,q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"() => <EngangsstonadPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(q=(I=g.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var j,D,h;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:"() => <EngangsstonadPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.FAR)} alleKodeverk={(alleKodeverk as any)} />",...(h=(D=p.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const le=["visPapirsoknadForMorVedFødsel","visPapirsoknadForMorVedAdopsjon","visPapirsoknadForFarVedFødsel"];export{le as __namedExportsOrder,de as default,p as visPapirsoknadForFarVedFødsel,g as visPapirsoknadForMorVedAdopsjon,u as visPapirsoknadForMorVedFødsel};
