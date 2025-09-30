import{w as i,j as a}from"./iframe-DYQXSugv.js";import{Q as l}from"./index.es-C8XlgDNo.js";import{u as d}from"./useQuery-Ba6nhKfY.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-BfsdCpZQ.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-C_nrB5TD.js";import{g as u}from"./withIntl-Bp8rqF47.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-jrWT8Asv.js";import{m as c}from"./nb_NO-BkdgpR3F.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-Bxok6rQJ.js";import"./index.es-CzRS-N89.js";import"./Modal-C6HyE8k9.js";import"./floating-ui.react-DyUfF0SX.js";import"./composeEventHandlers-D5zYzSMn.js";import"./index-DM-P7FfV.js";import"./ChevronDown-Cia31y9C.js";import"./Tag-B733wLh1.js";import"./VStack-0FyVDDRJ.js";import"./useLosKodeverk-CqoPwSmx.js";import"./Table-BZkjQVPB.js";import"./Checkmark-C3FYSGVQ.js";import"./HourglassTopFilled-DdilIFTw.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323',
        oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
        reservasjonStatus: {
          erReservert: true,
          reservertAvNavn: 'Ola Nordmann'
        }
      } as Oppgave]))]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...r.parameters?.docs?.source}}};const F=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,F as __namedExportsOrder,b as default};
