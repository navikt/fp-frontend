import{b as d,g as m,S as o,F as s,c as n}from"./BehovForTilretteleggingPanel-C4ba2g6n.js";import{w as i}from"./iframe-4mC-RW3I.js";import{S as l}from"./SvangerskapspengerPapirsoknadIndex-USOe4ixZ.js";import{m as p}from"./nb_NO-DxvYixXj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Bca_lq8L.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O={component:l,decorators:[i,m(p)],args:{readOnly:!1,alleKodeverk:d,onSubmit:t=>(a("onSubmit")(t),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(a("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o("SVP",s.FODSEL,n.MOR)}},r={args:{soknadData:new o("SVP",s.FODSEL,n.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...r.parameters?.docs?.source}}};const k=["ForMorVedFødsel","ForFarVedFodsel"];export{r as ForFarVedFodsel,e as ForMorVedFødsel,k as __namedExportsOrder,O as default};
