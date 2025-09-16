import{w as i,j as a}from"./iframe-BMzSxz3d.js";import{Q as l}from"./index.es-B_TKVFTq.js";import{u as d}from"./useQuery-HPZ32hsM.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-jY3GooNr.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-Bi42EV2w.js";import{g as u}from"./withIntl-BE_EYLoJ.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker--8LtFmQ2.js";import{m as c}from"./nb_NO-D1SkG4bK.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-BHnPqr4y.js";import"./index.es-CfjTePEL.js";import"./Modal-CJM-QhG5.js";import"./floating-ui.react-CPtGj9jL.js";import"./composeEventHandlers-D0GCARzl.js";import"./index-BS7yLyw8.js";import"./ChevronDown-NtvoSeF5.js";import"./Tag-BmqXzpue.js";import"./VStack-Cb6OXLu2.js";import"./useLosKodeverk-8ejreVti.js";import"./Table-MbQTzqf2.js";import"./Checkmark-BSmUIQ2Z.js";import"./HourglassTopFilled-DQNHBH3N.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
