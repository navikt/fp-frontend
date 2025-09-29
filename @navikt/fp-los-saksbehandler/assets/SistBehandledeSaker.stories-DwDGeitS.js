import{w as i,j as a}from"./iframe-AjKksD2M.js";import{Q as l}from"./index.es-7xMF6UfH.js";import{u as d}from"./useQuery-DDqeVjuC.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-CltX3F6R.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-C4jyn-or.js";import{g as u}from"./withIntl-CDhtBTLX.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DQs8XU0d.js";import{m as c}from"./nb_NO-CJwOlkXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BXfb-HtN.js";import"./index.es-BUPwAAG7.js";import"./Modal-kwnTbPip.js";import"./floating-ui.react-Blq3xWus.js";import"./composeEventHandlers-ChK-3pKs.js";import"./index-BMmFCz37.js";import"./ChevronDown-D9Wj4v5k.js";import"./Tag-BDaX_l7d.js";import"./VStack-QRnt28vS.js";import"./useLosKodeverk-7NWeK5zc.js";import"./Table-DSVqjgGQ.js";import"./Checkmark-yYqOfi44.js";import"./HourglassTopFilled-Qsu5nNGn.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
