import{w as F,F as o}from"./iframe-DezZ0ClB.js";import{b as l,g as S,S as n,F as t,c as d}from"./BehovForTilretteleggingPanel-DTDgwlPR.js";import{E as c}from"./EngangsstonadPapirsoknadIndex-B7SxCo6B.js";import{m as i}from"./nb_NO-C-Vitt-N.js";import"./index--ZwPQaHR.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,T={component:c,decorators:[F,S(i)],args:{readOnly:!1,alleKodeverk:l,onSubmit:m=>(p("onSubmit")(m),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(p("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new n(o.ENGANGSSTONAD,t.FODSEL,d.MOR)}},a={args:{soknadData:new n(o.ENGANGSSTONAD,t.FODSEL,d.FAR)}},r={args:{soknadData:new n(o.ENGANGSSTONAD,t.ADOPSJON,d.MOR)}},s={args:{soknadData:new n(o.ENGANGSSTONAD,t.ADOPSJON,d.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, FamilieHendelseType.ADOPSJON, ForeldreType.FAR)
  }
}`,...s.parameters?.docs?.source}}};const k=["ForMorVedFødsel","ForFarVedFødsel","ForMorVedAdopsjon","ForFarVedAdopsjon"];export{s as ForFarVedAdopsjon,a as ForFarVedFødsel,r as ForMorVedAdopsjon,e as ForMorVedFødsel,k as __namedExportsOrder,T as default};
