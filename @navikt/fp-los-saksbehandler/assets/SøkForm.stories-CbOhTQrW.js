import"./iframe-DAr4z3wg.js";import{g as n}from"./withIntl-DLS80wvo.js";import{S as o}from"./SøkForm-BGnf8otm.js";import{m}from"./nb_NO-IxsdePfK.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-Btudquw0.js";import"./index.es-mi9KTwSZ.js";import"./Loader-DrsJTGRF.js";import"./Modal-BAzcmhQV.js";import"./floating-ui.react-VugY_tUT.js";import"./composeEventHandlers-C5MnnDIG.js";import"./index-iHiP0wo0.js";import"./ChevronDown-BXeIQ5uf.js";import"./Tag-DrEG3uoO.js";import"./VStack-CK9W3U07.js";import"./ExclamationmarkTriangleFill-D8CJzLwz.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),N={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
