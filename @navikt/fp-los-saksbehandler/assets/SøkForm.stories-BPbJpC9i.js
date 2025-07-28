import"./iframe-C1nA0uJj.js";import{g as n}from"./withIntl-CrxOFtc5.js";import{S as o}from"./SøkForm-DtzHYHRy.js";import{m as c}from"./nb_NO-CkG39b6k.js";import"./index.es-D50fzgQu.js";import"./index.es-BNCrfEq9.js";import"./Loader-BLm6o0Ei.js";import"./Modal-x0b0eqpK.js";import"./index-B-tESIzx.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BDh-Aopk.js";import"./Tag-D5ZLsB3k.js";import"./VStack-BCnib7z-.js";import"./ExclamationmarkTriangleFill-CwoiJeVN.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m=n(c),O={title:"søk/SøkForm",component:o,decorators:[m],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
