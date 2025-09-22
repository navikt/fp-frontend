import{b as p,g as c,S as s,F as n,c as d}from"./BehovForTilretteleggingPanel-BIxNLAeg.js";import{w as i}from"./iframe-DExZYTU-.js";import{E as l}from"./EngangsstonadPapirsoknadIndex-xUiHk-Q3.js";import{m as F}from"./nb_NO-B3bV4Ovi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXkLOI1n.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,E={component:l,decorators:[i,c(F)],args:{readOnly:!1,alleKodeverk:p,onSubmit:m=>(t("onSubmit")(m),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(t("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new s("ES",n.FODSEL,d.MOR)}},a={args:{soknadData:new s("ES",n.FODSEL,d.FAR)}},r={args:{soknadData:new s("ES",n.ADOPSJON,d.MOR)}},o={args:{soknadData:new s("ES",n.ADOPSJON,d.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('ES', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('ES', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('ES', FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('ES', FamilieHendelseType.ADOPSJON, ForeldreType.FAR)
  }
}`,...o.parameters?.docs?.source}}};const A=["ForMorVedFødsel","ForFarVedFødsel","ForMorVedAdopsjon","ForFarVedAdopsjon"];export{o as ForFarVedAdopsjon,a as ForFarVedFødsel,r as ForMorVedAdopsjon,e as ForMorVedFødsel,A as __namedExportsOrder,E as default};
