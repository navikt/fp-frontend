import"./iframe-Bb7EaA3c.js";import{g as n}from"./withIntl-a7CRg7qg.js";import{S as o}from"./SøkForm-BF624WQ_.js";import{m}from"./nb_NO-Day4tSnv.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-Ds-u-sgY.js";import"./index.es-Ql_h3ek1.js";import"./Loader-B4nQOFQQ.js";import"./Modal-BJsjDxSS.js";import"./floating-ui.react-i3YnTFZQ.js";import"./composeEventHandlers-lncVDnve.js";import"./index-57zqyBz9.js";import"./ChevronDown-UarleSwg.js";import"./Tag-BQBB0SW6.js";import"./VStack-DE2AaRsN.js";import"./ExclamationmarkTriangleFill-A10p-qkG.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),N={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    searchStarted: false,
    kanSaksbehandle: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    searchStarted: false,
    kanSaksbehandle: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    searchStarted: true,
    kanSaksbehandle: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kanSaksbehandle: true,
    searchStarted: true,
    searchResultAccessDenied: {
      feilmelding: 'Dette er en feilmelding'
    }
  }
}`,...s.parameters?.docs?.source}}};const R=["Søkeskjema","SøkeskjemaNårEnIkkeKanVelgeÅReservere","SøkeskjemaNårSøkPågår","SøkeskjemaMedFeilmelding"];export{e as Søkeskjema,s as SøkeskjemaMedFeilmelding,r as SøkeskjemaNårEnIkkeKanVelgeÅReservere,a as SøkeskjemaNårSøkPågår,R as __namedExportsOrder,N as default};
