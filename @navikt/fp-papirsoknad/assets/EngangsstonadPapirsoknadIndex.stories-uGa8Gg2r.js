import{w as l,F as o}from"./iframe-DOO905g7.js";import{b as F,g as S,S as n,a as t,c as d}from"./BehovForTilretteleggingPanel-46cf00Nt.js";import{E as c}from"./EngangsstonadPapirsoknadIndex-CcQCdRuX.js";import{m as i}from"./nb_NO-BXFtxTq4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DUiDdraD.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,k={component:c,decorators:[l,S(i)],args:{readOnly:!1,alleKodeverk:F,onSubmit:m=>(p("onSubmit")(m),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(p("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new n(o.ENGANGSSTONAD,t.FODSEL,d.MOR)}},a={args:{soknadData:new n(o.ENGANGSSTONAD,t.FODSEL,d.FAR)}},r={args:{soknadData:new n(o.ENGANGSSTONAD,t.ADOPSJON,d.MOR)}},s={args:{soknadData:new n(o.ENGANGSSTONAD,t.ADOPSJON,d.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const u=["ForMorVedFødsel","ForFarVedFødsel","ForMorVedAdopsjon","ForFarVedAdopsjon"];export{s as ForFarVedAdopsjon,a as ForFarVedFødsel,r as ForMorVedAdopsjon,e as ForMorVedFødsel,u as __namedExportsOrder,k as default};
