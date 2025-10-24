import"./iframe-BgqHI6_D.js";import{g as n}from"./withIntl-CwWlSh0l.js";import{S as o}from"./SøkForm-CKrmpj_x.js";import{m}from"./nb_NO-DNaahZtR.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-yKC1ZRN4.js";import"./index.es-C5bvsI8w.js";import"./Loader-DOoSrnUO.js";import"./Modal-C5tKf2gw.js";import"./floating-ui.react-CYhy7SUm.js";import"./composeEventHandlers-Dx2nCQMD.js";import"./index-C-D9Pekm.js";import"./ChevronDown-VWy8a60g.js";import"./Tag-D9CpAEC3.js";import"./VStack-D-GBvM_X.js";import"./ExclamationmarkTriangleFill-DIEtOkn1.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),N={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
