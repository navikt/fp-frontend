import"./iframe-CYoJoWN6.js";import{g as n}from"./withIntl-CfrQfrk7.js";import{S as o}from"./SøkForm-CVrODmx9.js";import{m}from"./nb_NO-CBu7rNk9.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-D6bmyoJ1.js";import"./index.es-BT10P9oF.js";import"./Loader-XHIe6xLJ.js";import"./Modal-BAsyhjvm.js";import"./index-D5hJTAsG.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Cq7J4B_G.js";import"./Tag-DQoDhdCC.js";import"./VStack-D7Idh84k.js";import"./ExclamationmarkTriangleFill-BqHpeAgX.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),I={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
