import{w as m,F as s}from"./iframe-twZIo3xr.js";import{b as l,g as S,S as o,a as n,c as t}from"./BehovForTilretteleggingPanel-C-0CnwC8.js";import{S as p}from"./SvangerskapspengerPapirsoknadIndex-CE_mm-xn.js";import{m as i}from"./nb_NO-CHZJYSns.js";import"./preload-helper-D9Z9MdNV.js";import"./index-yT4EPpW_.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,R={component:p,decorators:[m,S(i)],args:{readOnly:!1,alleKodeverk:l,onSubmit:d=>(r("onSubmit")(d),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(r("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o(s.SVANGERSKAPSPENGER,n.FODSEL,t.MOR)}},a={args:{soknadData:new o(s.SVANGERSKAPSPENGER,n.FODSEL,t.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};const D=["ForMorVedFødsel","ForFarVedFodsel"];export{a as ForFarVedFodsel,e as ForMorVedFødsel,D as __namedExportsOrder,R as default};
