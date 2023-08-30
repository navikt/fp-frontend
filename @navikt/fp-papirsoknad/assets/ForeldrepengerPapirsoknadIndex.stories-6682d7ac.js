import{j as a}from"./jsx-runtime-9c4ae004.js";import{a as s}from"./chunk-AY7I2SME-c7b6cf8a.js";import{u as W,t as _,F as Z,H as $,q as x,E as t,b as G,K as C,J as V,B as D,f as ee,g as ae,h as re,U as h,G as ne,X as se,N as l,i as O,Q as oe,Z as te,W as le,x as de,c as ie,w as ue,a as c,z as k,d as f}from"./index.es-495fb334.js";import{r as me}from"./index-1b03fe98.js";import{b as pe}from"./index-860a6928.js";import"./index-6fd5a17b.js";const P="omsorg",b="frilans",ce=e=>({[b]:V.buildInitialValues(),...D.buildInitialValues(e),...G.buildInitialValues(),[P]:{},...x.buildInitialValues(),...O.buildInitialValues()}),ke=(e,n)=>{let r=e;return e.rettigheter===de.IKKE_RELEVANT&&(r=pe(e,"rettigheter")),{...x.transformValues(r),[P]:h.transformValues(r[P]),[ie]:D.transformValues(r,n),[ue]:O.transformValues(r),[b]:V.transformValues(r[b])}},S=({readOnly:e,soknadData:n,alleKodeverk:r,onSubmit:g,onSubmitUfullstendigsoknad:F,fagsakPersonnummer:E,erEndringssøknad:y})=>{const o=W({defaultValues:me.useMemo(()=>ce(r[_.ARBEID_TYPE]),[])}),Y=r[_.ARBEID_TYPE],J=o.watch("sokerHarAleneomsorg"),j=o.watch("denAndreForelderenHarRettPaForeldrepenger"),B=!J&&j!==!1,X=o.watch("foedselsDato"),z=o.watch("mottattDato");return a.jsxs(Z,{formMethods:o,onSubmit:Q=>g(ke(Q,Y)),children:[a.jsx($,{readOnly:e}),a.jsx(x,{readOnly:e,erAdopsjon:n.getFamilieHendelseType()!==t.ADOPSJON,alleKodeverk:r,mottattDato:z}),a.jsx(G,{readOnly:e,alleKodeverk:r}),a.jsx(C,{readOnly:e,alleKodeverk:r}),a.jsx(V,{readOnly:e}),a.jsx(D,{readOnly:e,alleKodeverk:r}),a.jsx(ee,{readOnly:e}),n.getFamilieHendelseType()===t.FODSEL&&a.jsx(ae,{readOnly:e,erForeldrepenger:!0}),a.jsx(re,{readOnly:e,soknadData:n}),a.jsx(h,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),fodselsdato:X,isForeldrepengerFagsak:!0}),a.jsx(ne,{readOnly:e,permisjonRettigheterPanel:a.jsx(se,{readOnly:e,denAndreForelderenHarRettPaForeldrepenger:j,sokerErMor:n.getForeldreType()===l.MOR}),alleKodeverk:r,fagsakPersonnummer:E}),a.jsx(O,{foreldreType:n.getForeldreType(),readOnly:e,alleKodeverk:r,erEndringssøknad:y}),a.jsx(oe,{annenForelderInformertRequired:B,readOnly:e}),a.jsx(te,{readOnly:e}),a.jsx(le,{readOnly:e,onSubmitUfullstendigsoknad:F,submitting:o.formState.isSubmitting})]})};try{S.displayName="ForeldrepengerForm",S.__docgenInfo={description:`ForeldrepengerForm

Form-komponent for registrering av papirsøknad for foreldrepenger.`,displayName:"ForeldrepengerForm",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}},fagsakPersonnummer:{defaultValue:null,description:"",name:"fagsakPersonnummer",required:!0,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: any) => Promise<any>"}},onSubmitUfullstendigsoknad:{defaultValue:null,description:"",name:"onSubmitUfullstendigsoknad",required:!0,type:{name:"() => Promise<any>"}},erEndringssøknad:{defaultValue:null,description:"",name:"erEndringssøknad",required:!0,type:{name:"boolean"}}}}}catch{}const R=({onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:r,soknadData:g,alleKodeverk:F,fagsakPersonnummer:E,erEndringssøknad:y})=>a.jsx(S,{onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:r,soknadData:g,alleKodeverk:F,fagsakPersonnummer:E,erEndringssøknad:y}),d=R;try{R.displayName="ForeldrepengerPapirsoknadIndex",R.__docgenInfo={description:"",displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{defaultValue:null,description:"",name:"onSubmitUfullstendigsoknad",required:!0,type:{name:"() => Promise<any>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: any) => Promise<any>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}},fagsakPersonnummer:{defaultValue:null,description:"",name:"fagsakPersonnummer",required:!0,type:{name:"string"}},erEndringssøknad:{defaultValue:null,description:"",name:"erEndringssøknad",required:!0,type:{name:"boolean"}}}}}catch{}const be={title:"papirsoknad/papirsoknad-fp",component:d},i=()=>a.jsx(d,{onSubmitUfullstendigsoknad:s("button-click"),onSubmit:s("button-click"),readOnly:!1,soknadData:new c(k.FORELDREPENGER,t.FODSEL,l.MOR),alleKodeverk:f,fagsakPersonnummer:"1234567",erEndringssøknad:!1}),u=()=>a.jsx(d,{onSubmitUfullstendigsoknad:s("button-click"),onSubmit:s("button-click"),readOnly:!1,soknadData:new c(k.FORELDREPENGER,t.ADOPSJON,l.MOR),alleKodeverk:f,fagsakPersonnummer:"1234567",erEndringssøknad:!1}),m=()=>a.jsx(d,{onSubmitUfullstendigsoknad:s("button-click"),onSubmit:s("button-click"),readOnly:!1,soknadData:new c(k.FORELDREPENGER,t.OMSORG,l.MOR),alleKodeverk:f,fagsakPersonnummer:"1234567",erEndringssøknad:!1}),p=()=>a.jsx(d,{onSubmitUfullstendigsoknad:s("button-click"),onSubmit:s("button-click"),readOnly:!1,soknadData:new c(k.FORELDREPENGER,t.FODSEL,l.FAR),alleKodeverk:f,fagsakPersonnummer:"1234567",erEndringssøknad:!1});var v,I,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => <ForeldrepengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} fagsakPersonnummer="1234567" erEndringssøknad={false} />`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,N,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => <ForeldrepengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} fagsakPersonnummer="1234567" erEndringssøknad={false} />`,...(A=(N=u.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var q,K,L;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => <ForeldrepengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} fagsakPersonnummer="1234567" erEndringssøknad={false} />`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var w,H,U;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => <ForeldrepengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR)} alleKodeverk={(alleKodeverk as any)} fagsakPersonnummer="1234567" erEndringssøknad={false} />`,...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Se=["visPapirsoknadForMorVedFødsel","visPapirsoknadForMorVedAdopsjon","visPapirsoknadForMorVedOmsorg","visPapirsoknadForFarVedFødsel"];export{Se as __namedExportsOrder,be as default,p as visPapirsoknadForFarVedFødsel,u as visPapirsoknadForMorVedAdopsjon,i as visPapirsoknadForMorVedFødsel,m as visPapirsoknadForMorVedOmsorg};
//# sourceMappingURL=ForeldrepengerPapirsoknadIndex.stories-6682d7ac.js.map
