import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-smQbFDOI.js";import"./FlyttReservasjonModal-CmtPezqh.js";import{w as o}from"./iframe-ByYO6KOV.js";import{g as a}from"./withIntl-J4d6Mu0I.js";import{S as m}from"./SistBehandledeSaker-Cao-_53F.js";import{m as p}from"./nb_NO-CIwUGrZ2.js";import"./index.es-OepJvX5g.js";import"./index.es-DP5DjQzJ.js";import"./Loader-BIWjlfaJ.js";import"./Modal-DZP-HGw0.js";import"./index-wy_rA9iY.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DGYRj2vc.js";import"./Tag-DEr0G3vC.js";import"./VStack-D-2Qoep_.js";import"./message-M9Grmtq-.js";import"./useQuery-Di1bbWZy.js";import"./Table-H9Ku_ntZ.js";import"./ArrowsUpDown-BgcHPgtn.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),U={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323'
      } as Oppgave]))]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,v as __namedExportsOrder,U as default};
