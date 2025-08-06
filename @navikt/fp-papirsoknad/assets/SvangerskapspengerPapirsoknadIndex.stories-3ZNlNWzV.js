import{w as m,F as s}from"./iframe-DezZ0ClB.js";import{b as l,g as S,S as o,F as n,c as t}from"./BehovForTilretteleggingPanel-DTDgwlPR.js";import{S as p}from"./SvangerskapspengerPapirsoknadIndex-CWNq5PdL.js";import{m as F}from"./nb_NO-C-Vitt-N.js";import"./index--ZwPQaHR.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,k={component:p,decorators:[m,S(F)],args:{readOnly:!1,alleKodeverk:l,onSubmit:d=>(r("onSubmit")(d),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(r("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new o(s.SVANGERSKAPSPENGER,n.FODSEL,t.MOR)}},a={args:{soknadData:new o(s.SVANGERSKAPSPENGER,n.FODSEL,t.FAR)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...a.parameters?.docs?.source}}};const R=["ForMorVedFødsel","ForFarVedFodsel"];export{a as ForFarVedFodsel,e as ForMorVedFødsel,R as __namedExportsOrder,k as default};
