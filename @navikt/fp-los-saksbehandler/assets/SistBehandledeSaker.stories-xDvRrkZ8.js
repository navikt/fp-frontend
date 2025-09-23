import{w as i,j as a}from"./iframe-al_w9SvD.js";import{Q as l}from"./index.es-DJaJzdj5.js";import{u as d}from"./useQuery-Cq95H-Zv.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-ClPM3L4y.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-DUqLKjyl.js";import{g as u}from"./withIntl-CilqdPmv.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DCNDsDfb.js";import{m as c}from"./nb_NO-D75nEubS.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-IndRYNKO.js";import"./index.es-Q8WK_JoA.js";import"./Modal-0WIgj-CC.js";import"./floating-ui.react-Cit7apB7.js";import"./composeEventHandlers-9iUK784h.js";import"./index-BPTO5uRc.js";import"./ChevronDown-CUgqPIXf.js";import"./Tag-BsjiPpoy.js";import"./VStack-Codnuli_.js";import"./useLosKodeverk-Ch6G3qC8.js";import"./Table-Bigy80jT.js";import"./Checkmark-j7yyKMfH.js";import"./HourglassTopFilled-Dgj6OBEh.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
