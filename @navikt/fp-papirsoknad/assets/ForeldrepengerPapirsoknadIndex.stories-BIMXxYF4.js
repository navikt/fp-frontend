import{b as m,g as c,a}from"./BehovForTilretteleggingPanel-CIBLni7x.js";import{w as F}from"./iframe-DZx0druf.js";import{F as p}from"./ForeldrepengerPapirsoknadIndex-Cf2kELIq.js";import{m as i}from"./nb_NO-D4LdkBIy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cfd-G6hJ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,l={component:p,decorators:[F,c(i)],args:{readOnly:!1,alleKodeverk:m,onSubmit:d=>(t("onSubmit")(d),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(t("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},r={args:{soknadData:new a("FP","FODSL","MOR")}},e={args:{soknadData:new a("FP","ADPSJN","MOR")}},s={args:{soknadData:new a("FP","OMSRGO","MOR")}},o={args:{soknadData:new a("FP","FODSL","FAR")}},n={args:{soknadData:new a("FP","FODSL","FAR"),erEndringssøknad:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'MOR')
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'MOR')
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'OMSRGO', 'MOR')
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'FAR')
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'FAR'),
    erEndringssøknad: true
  }
}`,...n.parameters?.docs?.source}}};const P=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel","Endringssøknad"];export{n as Endringssøknad,o as ForFarVedFødsel,e as ForMorVedAdopsjon,r as ForMorVedFødsel,s as ForMorVedOmsorg,P as __namedExportsOrder,l as default};
