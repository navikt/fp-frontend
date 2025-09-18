import{b as p,g as i,S as e,F as r,c as a}from"./BehovForTilretteleggingPanel-BL0kXko5.js";import{w as c}from"./iframe-Csw3b7St.js";import{F as l}from"./ForeldrepengerPapirsoknadIndex-Cye_6aOb.js";import{m as g}from"./nb_NO-DSeV8HYc.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DOl5qJcc.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,M={component:l,decorators:[c,i(g)],args:{readOnly:!1,alleKodeverk:p,onSubmit:F=>(m("onSubmit")(F),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(m("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},s={args:{soknadData:new e("FP",r.FODSEL,a.MOR)}},o={args:{soknadData:new e("FP",r.ADOPSJON,a.MOR)}},n={args:{soknadData:new e("FP",r.OMSORG,a.MOR)}},d={args:{soknadData:new e("FP",r.FODSEL,a.FAR)}},t={args:{soknadData:new e("FP",r.FODSEL,a.FAR),erEndringssøknad:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.OMSORG, ForeldreType.MOR)
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.FODSEL, ForeldreType.FAR),
    erEndringssøknad: true
  }
}`,...t.parameters?.docs?.source}}};const R=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel","Endringssøknad"];export{t as Endringssøknad,d as ForFarVedFødsel,o as ForMorVedAdopsjon,s as ForMorVedFødsel,n as ForMorVedOmsorg,R as __namedExportsOrder,M as default};
