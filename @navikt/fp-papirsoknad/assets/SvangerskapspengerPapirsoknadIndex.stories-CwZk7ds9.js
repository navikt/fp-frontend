import{b as d,g as m,S as o,a as s,c as n}from"./BehovForTilretteleggingPanel-D5VmOZyp.js";import{w as i}from"./iframe-BWZ-QPxu.js";import{S as l}from"./SvangerskapspengerPapirsoknadIndex-UZ3sOekD.js";import{m as p}from"./nb_NO-8eDZ-ViO.js";import"./preload-helper-D9Z9MdNV.js";import"./index-3uSdrGXR.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,O={component:l,decorators:[i,m(p)],args:{readOnly:!1,alleKodeverk:d,onSubmit:t=>(r("onSubmit")(t),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(r("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o("SVP",s.FODSEL,n.MOR)}},a={args:{soknadData:new o("SVP",s.FODSEL,n.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('SVP', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};const k=["ForMorVedFødsel","ForFarVedFodsel"];export{a as ForFarVedFodsel,e as ForMorVedFødsel,k as __namedExportsOrder,O as default};
