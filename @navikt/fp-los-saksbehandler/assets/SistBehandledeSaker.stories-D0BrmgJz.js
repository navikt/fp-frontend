import{w as i,j as a}from"./iframe-CYoJoWN6.js";import{X as l}from"./index.es-BT10P9oF.js";import{u as d}from"./useLosKodeverk-4HV7Jgqb.js";import{a as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-CGILq44Y.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BdvHuStF.js";import{g as u}from"./withIntl-CfrQfrk7.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-SlC-TJHS.js";import{m as c}from"./nb_NO-CBu7rNk9.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-XHIe6xLJ.js";import"./index.es-D6bmyoJ1.js";import"./Modal-BAsyhjvm.js";import"./index-D5hJTAsG.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Cq7J4B_G.js";import"./Tag-DQoDhdCC.js";import"./VStack-D7Idh84k.js";import"./Table-Chw-JO2p.js";import"./ArrowsUpDown-0Hnx30Fk.js";import"./Checkmark-DkNE55u9.js";import"./HourglassTopFilled-BeBLMJYy.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),T={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const X=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,X as __namedExportsOrder,T as default};
