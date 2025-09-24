import{w as i,j as a}from"./iframe-hngBcEJU.js";import{Q as l}from"./index.es-CCQ8GdpS.js";import{u as d}from"./useQuery-DRScyGKp.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-CfwPuiET.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BbHsQp6e.js";import{g as u}from"./withIntl-Bcg8ljZ3.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-0nLsp4vg.js";import{m as c}from"./nb_NO-CtwuI1lJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-VFefIwdI.js";import"./index.es-D4x0QtRB.js";import"./Modal-BbjPbd20.js";import"./floating-ui.react-ClIw87gO.js";import"./composeEventHandlers-Cq0PU7zd.js";import"./index-DY40as6m.js";import"./ChevronDown-CAkkY---.js";import"./Tag-CxHHKzC0.js";import"./VStack-BeA-F8sQ.js";import"./useLosKodeverk-Bcc54kba.js";import"./Table-CRd4l9Zn.js";import"./Checkmark-BIorpre5.js";import"./HourglassTopFilled-BFFCgcdP.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
