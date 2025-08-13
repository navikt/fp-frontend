import{w as i,j as a}from"./iframe-Clb27KdX.js";import{X as l}from"./index.es-YB7mErq6.js";import{u as d}from"./useLosKodeverk-DEhLWE0f.js";import{a as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-eMHBsBGQ.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-CJI4golJ.js";import{g as u}from"./withIntl-BLSqA8yB.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DzW9XSBO.js";import{m as c}from"./nb_NO--W7a-9g9.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Ch4zzPxw.js";import"./index.es-BvBWvnwP.js";import"./Modal-D5ZdTN-0.js";import"./index-CAZnbBZ-.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CAv2P8YR.js";import"./Tag-DOgy5-6g.js";import"./VStack-Bo-6G3rc.js";import"./Table-B7Hl0vW8.js";import"./ArrowsUpDown-BlcRSSzS.js";import"./Checkmark-CZjVzu2f.js";import"./HourglassTopFilled-B--oghcW.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),T={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
