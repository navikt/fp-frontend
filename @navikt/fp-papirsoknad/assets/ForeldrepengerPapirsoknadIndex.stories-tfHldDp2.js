import{w as M,F as e}from"./iframe-CIE21GwI.js";import{b as N,g as w,S as a,F as r,c as s}from"./BehovForTilretteleggingPanel-BaD3lonS.js";import{F as G}from"./ForeldrepengerPapirsoknadIndex-C99oS0mS.js";import{m as f}from"./nb_NO-Dhqzff6J.js";import"./index-DwA6199S.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,b={component:G,decorators:[M,w(f)],args:{readOnly:!1,alleKodeverk:N,onSubmit:P=>(E("onSubmit")(P),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(E("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},o={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.MOR)}},n={args:{soknadData:new a(e.FORELDREPENGER,r.ADOPSJON,s.MOR)}},d={args:{soknadData:new a(e.FORELDREPENGER,r.OMSORG,s.MOR)}},t={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.FAR)}},F={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.FAR),erEndringssøknad:!0}};var m,p,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var R,c,i;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var O,g,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.OMSORG, ForeldreType.MOR)
  }
}`,...(D=(g=d.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var k,u,S;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var T,y,L;F.parameters={...F.parameters,docs:{...(T=F.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR),
    erEndringssøknad: true
  }
}`,...(L=(y=F.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const v=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel","Endringssøknad"];export{F as Endringssøknad,t as ForFarVedFødsel,n as ForMorVedAdopsjon,o as ForMorVedFødsel,d as ForMorVedOmsorg,v as __namedExportsOrder,b as default};
