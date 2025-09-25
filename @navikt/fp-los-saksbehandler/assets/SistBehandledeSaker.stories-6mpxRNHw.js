import{w as i,j as a}from"./iframe-DAr4z3wg.js";import{Q as l}from"./index.es-mi9KTwSZ.js";import{u as d}from"./useQuery-z-BGmxSt.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-Bsh7Sork.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-DxdmoDeu.js";import{g as u}from"./withIntl-DLS80wvo.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-Bd5VAgzD.js";import{m as c}from"./nb_NO-IxsdePfK.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DrsJTGRF.js";import"./index.es-Btudquw0.js";import"./Modal-BAzcmhQV.js";import"./floating-ui.react-VugY_tUT.js";import"./composeEventHandlers-C5MnnDIG.js";import"./index-iHiP0wo0.js";import"./ChevronDown-BXeIQ5uf.js";import"./Tag-DrEG3uoO.js";import"./VStack-CK9W3U07.js";import"./useLosKodeverk-DjTLm-1S.js";import"./Table-BYJXTRbd.js";import"./Checkmark-Dt74d1yi.js";import"./HourglassTopFilled-CgpHpoK0.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
