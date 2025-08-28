import{w as p,F as e}from"./iframe-BjswJHwZ.js";import{b as l,g as i,S as a,a as r,c as s}from"./BehovForTilretteleggingPanel-DLBjSakC.js";import{F as R}from"./ForeldrepengerPapirsoknadIndex-Cavo2GH_.js";import{m as c}from"./nb_NO-D7VDwcfC.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CbYseeki.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,T={component:R,decorators:[p,i(c)],args:{readOnly:!1,alleKodeverk:l,onSubmit:m=>(E("onSubmit")(m),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(E("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},o={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.MOR)}},n={args:{soknadData:new a(e.FORELDREPENGER,r.ADOPSJON,s.MOR)}},d={args:{soknadData:new a(e.FORELDREPENGER,r.OMSORG,s.MOR)}},t={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.FAR)}},F={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.FAR),erEndringssøknad:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.OMSORG, ForeldreType.MOR)
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...t.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR),
    erEndringssøknad: true
  }
}`,...F.parameters?.docs?.source}}};const y=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel","Endringssøknad"];export{F as Endringssøknad,t as ForFarVedFødsel,n as ForMorVedAdopsjon,o as ForMorVedFødsel,d as ForMorVedOmsorg,y as __namedExportsOrder,T as default};
