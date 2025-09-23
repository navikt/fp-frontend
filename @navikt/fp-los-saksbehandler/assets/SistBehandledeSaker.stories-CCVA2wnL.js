import{w as i,j as a}from"./iframe-RykeYqTq.js";import{Q as l}from"./index.es-BUCEDbPw.js";import{u as d}from"./useQuery-TN5nAucX.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-Bbz_f-Uf.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-DwGDLWMc.js";import{g as u}from"./withIntl-CiisbyX4.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-Cmv2VcvX.js";import{m as c}from"./nb_NO-fNecNmUG.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-CoPbOKoD.js";import"./index.es-boNIXK65.js";import"./Modal-xr1w2-Su.js";import"./floating-ui.react-CgQRJDae.js";import"./composeEventHandlers-CquY-AmA.js";import"./index-Cf_UCHuL.js";import"./ChevronDown-B63rftSi.js";import"./Tag-DoRYJ2t4.js";import"./VStack-BAQrvpD1.js";import"./useLosKodeverk-Bj0AeszZ.js";import"./Table-DxUBiIC7.js";import"./Checkmark-C8IWcqfi.js";import"./HourglassTopFilled-BT-VtFij.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
