import"./iframe-ByYO6KOV.js";import{g as n}from"./withIntl-J4d6Mu0I.js";import{S as o}from"./SøkForm-DW4eaNqk.js";import{m as c}from"./nb_NO-CIwUGrZ2.js";import"./index.es-OepJvX5g.js";import"./index.es-DP5DjQzJ.js";import"./Loader-BIWjlfaJ.js";import"./Modal-DZP-HGw0.js";import"./index-wy_rA9iY.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DGYRj2vc.js";import"./Tag-DEr0G3vC.js";import"./VStack-D-2Qoep_.js";import"./ExclamationmarkTriangleFill-iBs_e46Z.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m=n(c),O={title:"søk/SøkForm",component:o,decorators:[m],args:{onSubmit:t("button-click"),resetSearch:t("button-click")}},e={args:{searchStarted:!1,kanSaksbehandle:!0}},r={args:{searchStarted:!1,kanSaksbehandle:!1}},a={args:{searchStarted:!0,kanSaksbehandle:!0}},s={args:{kanSaksbehandle:!0,searchStarted:!0,searchResultAccessDenied:{feilmelding:"Dette er en feilmelding"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
