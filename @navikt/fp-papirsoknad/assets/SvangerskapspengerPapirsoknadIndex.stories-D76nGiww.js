import{b as d,g as m,S as o,a as s,c as n}from"./BehovForTilretteleggingPanel-qvo016Yl.js";import{w as i}from"./iframe-BmnP51LQ.js";import{S as l}from"./SvangerskapspengerPapirsoknadIndex-B6FuCEk6.js";import{m as p}from"./nb_NO-DadvGKyU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-TMHEgV2h.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,O={component:l,decorators:[i,m(p)],args:{readOnly:!1,alleKodeverk:d,onSubmit:t=>(r("onSubmit")(t),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(r("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o("SVP",s.FODSEL,n.MOR)}},a={args:{soknadData:new o("SVP",s.FODSEL,n.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};const k=["ForMorVedFødsel","ForFarVedFodsel"];export{a as ForFarVedFodsel,e as ForMorVedFødsel,k as __namedExportsOrder,O as default};
