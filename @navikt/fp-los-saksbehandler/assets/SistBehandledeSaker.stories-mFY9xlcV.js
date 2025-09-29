import{w as i,j as a}from"./iframe-DcWfvX4E.js";import{Q as l}from"./index.es-CK71UUG6.js";import{u as d}from"./useQuery-CPaP-Sxu.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-DVMPShiN.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-cyJRfFZ_.js";import{g as u}from"./withIntl-BpqaF8OP.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-D8D-TR2X.js";import{m as c}from"./nb_NO-B5yokG7b.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BgAJ8TXJ.js";import"./index.es-CrSE2Vo3.js";import"./Modal-CkgRguxl.js";import"./floating-ui.react-BQhJV-NN.js";import"./composeEventHandlers-rXV8Rneo.js";import"./index-BUjOf9FY.js";import"./ChevronDown-V1IO0Cne.js";import"./Tag-KNyf_X-k.js";import"./VStack-qlvPq9uV.js";import"./useLosKodeverk-CpQ04YyY.js";import"./Table-q8fDV-xz.js";import"./Checkmark-DpKxb_EB.js";import"./HourglassTopFilled-BbYFEgP6.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
