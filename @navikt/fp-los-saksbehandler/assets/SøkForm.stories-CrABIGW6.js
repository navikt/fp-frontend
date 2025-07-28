import"./iframe-DM8LYoMN.js";import{g as n}from"./withIntl-BN5cT-Jw.js";import{S as o}from"./SøkForm-C1I3WMbE.js";import{m as c}from"./nb_NO-BuWnCQiM.js";import"./index.es-B-U1gNAW.js";import"./index.es-0Unrm-qE.js";import"./Loader-CN2EFucT.js";import"./Modal-laqU7i9r.js";import"./index-Bifiva1h.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DbuORtlx.js";import"./Tag-BM8q_-bR.js";import"./VStack-DWSoSyHo.js";import"./ExclamationmarkTriangleFill-DEUWxpKC.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m=n(c),O={title:"søk/SøkForm",component:o,decorators:[m],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const I=["Søkeskjema","SøkeskjemaNårEnIkkeKanVelgeÅReservere","SøkeskjemaNårSøkPågår","SøkeskjemaMedFeilmelding"];export{e as Søkeskjema,s as SøkeskjemaMedFeilmelding,r as SøkeskjemaNårEnIkkeKanVelgeÅReservere,a as SøkeskjemaNårSøkPågår,I as __namedExportsOrder,O as default};
