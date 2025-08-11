import"./iframe-BwKNJOZ5.js";import{g as n}from"./withIntl-BqPCZHwl.js";import{S as o}from"./SøkForm-B8v5ATJu.js";import{m}from"./nb_NO-pr7Wf7mt.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-CPxNtf18.js";import"./index.es-C2Yxr8g-.js";import"./Loader-D-bqSM9O.js";import"./Modal-Dg4VOHe-.js";import"./index-BuWVdx51.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CkoL87KZ.js";import"./Tag-A2Gv-CiV.js";import"./VStack-DtCjXnC7.js";import"./ExclamationmarkTriangleFill-C8Mloxtp.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),I={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const N=["Søkeskjema","SøkeskjemaNårEnIkkeKanVelgeÅReservere","SøkeskjemaNårSøkPågår","SøkeskjemaMedFeilmelding"];export{e as Søkeskjema,s as SøkeskjemaMedFeilmelding,r as SøkeskjemaNårEnIkkeKanVelgeÅReservere,a as SøkeskjemaNårSøkPågår,N as __namedExportsOrder,I as default};
