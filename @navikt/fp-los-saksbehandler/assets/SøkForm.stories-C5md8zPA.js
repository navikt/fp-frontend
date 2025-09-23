import"./iframe-al_w9SvD.js";import{g as n}from"./withIntl-CilqdPmv.js";import{S as o}from"./SøkForm-QyjVtvVh.js";import{m}from"./nb_NO-D75nEubS.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-Q8WK_JoA.js";import"./index.es-DJaJzdj5.js";import"./Loader-IndRYNKO.js";import"./Modal-0WIgj-CC.js";import"./floating-ui.react-Cit7apB7.js";import"./composeEventHandlers-9iUK784h.js";import"./index-BPTO5uRc.js";import"./ChevronDown-CUgqPIXf.js";import"./Tag-BsjiPpoy.js";import"./VStack-Codnuli_.js";import"./ExclamationmarkTriangleFill-Cwrf355W.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),N={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
