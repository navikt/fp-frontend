import{b as d,g as m,a as o,F as s,c as n}from"./BehovForTilretteleggingPanel-DxIrImeY.js";import{w as i}from"./iframe-BG77LS2K.js";import{S as l}from"./SvangerskapspengerPapirsoknadIndex-DKVXyZwh.js";import{m as p}from"./nb_NO-DwfmNHOS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd-kIYqi.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,O={component:l,decorators:[i,m(p)],args:{readOnly:!1,alleKodeverk:d,onSubmit:t=>(r("onSubmit")(t),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(r("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o("SVP",s.FODSEL,n.MOR)}},a={args:{soknadData:new o("SVP",s.FODSEL,n.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};const k=["ForMorVedFødsel","ForFarVedFodsel"];export{a as ForFarVedFodsel,e as ForMorVedFødsel,k as __namedExportsOrder,O as default};
