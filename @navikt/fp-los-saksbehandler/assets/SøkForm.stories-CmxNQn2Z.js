import"./iframe-6sLc6nWL.js";import{g as n}from"./withIntl-nMFV4D_u.js";import{S as o}from"./SøkForm-C1VAu1x0.js";import{m as c}from"./nb_NO-CTGRyfFc.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-I3DalEUC.js";import"./index.es-BzBsaHxG.js";import"./Loader-Bsz5sjnH.js";import"./Modal-C9rYWZHM.js";import"./index-DmxU5NkJ.js";import"./composeEventHandlers-Ilc965z7.js";import"./Tag-BHN0w7_X.js";import"./VStack-_sYn5JF6.js";import"./ExclamationmarkTriangleFill-CpNk3nK_.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m=n(c),O={title:"søk/SøkForm",component:o,decorators:[m],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
