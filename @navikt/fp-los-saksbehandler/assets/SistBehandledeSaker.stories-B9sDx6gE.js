import{w as i,j as n}from"./iframe-D5kzLkTB.js";import{Q as l}from"./index.es-5JZOUY4a.js";import{u as d}from"./useQuery-6y2dZTqF.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-DPBGFk9W.js";import"./FlyttReservasjonModal-CyRRwbqK.js";import{g as u}from"./withIntl-BwS0yhYk.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-CSmiL-9Y.js";import{m as c}from"./nb_NO-DkEvKsFh.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B-ItYq5j.js";import"./index.es-B2Qsiamg.js";import"./Modal-D12FW8s_.js";import"./floating-ui.react-DKeKFHDe.js";import"./composeEventHandlers-CNKAIeZw.js";import"./index-Cfle-u0a.js";import"./ChevronDown-0Qs7jtBh.js";import"./Tag-B4I7MrXx.js";import"./VStack-DSYO9RIf.js";import"./useLosKodeverk-D58PjiPH.js";import"./Table-Ct2JSsx9.js";import"./Checkmark-Cwd6ylaY.js";import"./HourglassTopFilled-jK3OzNDv.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),C={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323',
        oppgaveBehandlingStatus: 'UNDER_ARBEID',
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
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,C as default};
