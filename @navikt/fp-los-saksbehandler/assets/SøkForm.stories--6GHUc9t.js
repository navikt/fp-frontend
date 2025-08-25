import"./iframe-B9KoQGM0.js";import{g as n}from"./withIntl-DeQxf50B.js";import{S as o}from"./SøkForm-D0wtwrXY.js";import{m as c}from"./nb_NO-C3IQ5_sL.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-Bp8LbBj1.js";import"./index.es-CLSw_-eh.js";import"./Loader-C2bZBRPU.js";import"./Modal-CHSHW0HN.js";import"./index-TZAab7S3.js";import"./composeEventHandlers-C20DeXlO.js";import"./Tag-BQHGL7Xh.js";import"./VStack-C4xViOeb.js";import"./ExclamationmarkTriangleFill-CeqG1iCP.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m=n(c),O={title:"søk/SøkForm",component:o,decorators:[m],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
