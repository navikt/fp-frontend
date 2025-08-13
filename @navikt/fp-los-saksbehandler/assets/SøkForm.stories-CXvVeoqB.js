import"./iframe-Clb27KdX.js";import{g as n}from"./withIntl-BLSqA8yB.js";import{S as o}from"./SøkForm-CEG-TK3q.js";import{m}from"./nb_NO--W7a-9g9.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-BvBWvnwP.js";import"./index.es-YB7mErq6.js";import"./Loader-Ch4zzPxw.js";import"./Modal-D5ZdTN-0.js";import"./index-CAZnbBZ-.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CAv2P8YR.js";import"./Tag-DOgy5-6g.js";import"./VStack-Bo-6G3rc.js";import"./ExclamationmarkTriangleFill-XjtUL29D.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c=n(m),I={title:"søk/SøkForm",component:o,decorators:[c],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
