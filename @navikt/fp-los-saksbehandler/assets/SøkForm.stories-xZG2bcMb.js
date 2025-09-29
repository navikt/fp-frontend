import"./iframe-XJysTbVt.js";import{g as n}from"./withIntl-CiDJYkrt.js";import{S as o}from"./SøkForm-BPqPm_QW.js";import{m}from"./nb_NO-CO3HAz6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-DawA6EnQ.js";import"./index.es-Bx2Lc6cN.js";import"./Loader-BV-Jh8wD.js";import"./Modal-BvNhRRyn.js";import"./floating-ui.react-BvpS9y_f.js";import"./composeEventHandlers-CltQEKyj.js";import"./index-DKMOwF-J.js";import"./ChevronDown-C350f3Hb.js";import"./Tag-B8W21FA_.js";import"./VStack-JRQgy8gX.js";import"./ExclamationmarkTriangleFill-D-hTcQRv.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),N={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
