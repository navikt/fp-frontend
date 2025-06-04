import{w as T,F as o}from"./iframe-C4JE4yCP.js";import{b as y,g as M,S as n,F as t,c as d}from"./BehovForTilretteleggingPanel-BMqdds8l.js";import{F as P}from"./ForeldrepengerPapirsoknadIndex-ouobDnHo.js";import{m as L}from"./nb_NO-CvKlmI6h.js";import"./index-B21APRQJ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,_={component:P,decorators:[T,M(L)],args:{readOnly:!1,alleKodeverk:y,onSubmit:u=>(F("onSubmit")(u),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(F("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},e={args:{soknadData:new n(o.FORELDREPENGER,t.FODSEL,d.MOR)}},a={args:{soknadData:new n(o.FORELDREPENGER,t.ADOPSJON,d.MOR)}},r={args:{soknadData:new n(o.FORELDREPENGER,t.OMSORG,d.MOR)}},s={args:{soknadData:new n(o.FORELDREPENGER,t.FODSEL,d.FAR)}};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var E,c,R;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(R=(c=a.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};var i,O,D;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.OMSORG, ForeldreType.MOR)
  }
}`,...(D=(O=r.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var g,k,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const A=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel"];export{s as ForFarVedFødsel,a as ForMorVedAdopsjon,e as ForMorVedFødsel,r as ForMorVedOmsorg,A as __namedExportsOrder,_ as default};
