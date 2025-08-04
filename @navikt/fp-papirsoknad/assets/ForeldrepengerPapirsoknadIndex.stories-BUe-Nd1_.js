import{w as p,F as e}from"./iframe-CKZvDsWp.js";import{b as l,g as R,S as a,F as r,c as s}from"./BehovForTilretteleggingPanel-DCH3B7T5.js";import{F as c}from"./ForeldrepengerPapirsoknadIndex-B8yBEAge.js";import{m as i}from"./nb_NO-CaRP0_Pe.js";import"./index-B7XwvW9I.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,S={component:c,decorators:[p,R(i)],args:{readOnly:!1,alleKodeverk:l,onSubmit:m=>(E("onSubmit")(m),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(E("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},o={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.MOR)}},n={args:{soknadData:new a(e.FORELDREPENGER,r.ADOPSJON,s.MOR)}},d={args:{soknadData:new a(e.FORELDREPENGER,r.OMSORG,s.MOR)}},t={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.FAR)}},F={args:{soknadData:new a(e.FORELDREPENGER,r.FODSEL,s.FAR),erEndringssøknad:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const T=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel","Endringssøknad"];export{F as Endringssøknad,t as ForFarVedFødsel,n as ForMorVedAdopsjon,o as ForMorVedFødsel,d as ForMorVedOmsorg,T as __namedExportsOrder,S as default};
