import{w as i,j as a}from"./iframe-CVdg-tBd.js";import{Q as l}from"./index.es-7rlZVJxi.js";import{u as d}from"./useQuery-CAxJFEa-.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-CNfMQEtl.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-QuMjrbNB.js";import{g as u}from"./withIntl-DzomSXNo.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-CkfLPfSN.js";import{m as c}from"./nb_NO-aZ122nb9.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-N55rD42L.js";import"./index.es-CBk3KEL3.js";import"./Modal-BGhXbf7c.js";import"./floating-ui.react-CZrBqaZn.js";import"./composeEventHandlers-CLG_zOfr.js";import"./index-CkMVMhu3.js";import"./ChevronDown-H3NDO_bh.js";import"./Tag-DEY1I3er.js";import"./VStack-BH6QZYU2.js";import"./useLosKodeverk-DCVY8xBp.js";import"./Table-CperSuce.js";import"./Checkmark-2mHymsfe.js";import"./HourglassTopFilled-DTUUbW_n.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
