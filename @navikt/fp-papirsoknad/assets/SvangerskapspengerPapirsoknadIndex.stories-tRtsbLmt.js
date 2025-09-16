import{b as d,g as m,S as o,F as s,c as n}from"./BehovForTilretteleggingPanel-DEI9SSbi.js";import{w as i}from"./iframe-Dm9s1GmW.js";import{S as l}from"./SvangerskapspengerPapirsoknadIndex-BNbL58cZ.js";import{m as p}from"./nb_NO-DSqQZdst.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Bbvgkvkm.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O={component:l,decorators:[i,m(p)],args:{readOnly:!1,alleKodeverk:d,onSubmit:t=>(a("onSubmit")(t),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(a("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o("SVP",s.FODSEL,n.MOR)}},r={args:{soknadData:new o("SVP",s.FODSEL,n.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...r.parameters?.docs?.source}}};const k=["ForMorVedFødsel","ForFarVedFodsel"];export{r as ForFarVedFodsel,e as ForMorVedFødsel,k as __namedExportsOrder,O as default};
