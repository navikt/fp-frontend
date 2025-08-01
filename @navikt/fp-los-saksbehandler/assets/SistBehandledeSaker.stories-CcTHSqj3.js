import{a as t,L as s,H as o}from"./fplosSaksbehandlerApi-VmWZgKW-.js";import"./FlyttReservasjonModal-BmfBBKio.js";import{w as n}from"./iframe-CyPkD_ak.js";import{g as a}from"./withIntl-CIFsDVd0.js";import{S as m}from"./SistBehandledeSaker-Idd2V2CM.js";import{m as p}from"./nb_NO-CRusyisS.js";import"./index.es-CYQDWAXV.js";import"./index.es-naRtX646.js";import"./index.es-CVnPHYNh.js";import"./Loader-CY0_Js7v.js";import"./Modal-D50mm1Zy.js";import"./index-CpEopPp5.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CH8_dNCP.js";import"./Tag-CvXDIv8V.js";import"./VStack-CYvyhPBD.js";import"./index.es-FVdwy9rG.js";import"./message-D_e69ppz.js";import"./useQuery-C1ErPo1u.js";import"./Table-BiTrzpGD.js";import"./ArrowsUpDown-B0raxNy1.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),I={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,n],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,N as __namedExportsOrder,I as default};
