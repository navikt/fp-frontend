import{w as i,j as a}from"./iframe-CEmqnPfo.js";import{Q as l}from"./index.es-CLQDx-mi.js";import{u as d}from"./useLosKodeverk-Baudd7nC.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-Fx4pLV7i.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-CwICi7MD.js";import{g as u}from"./withIntl-D8s6mJK8.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-BX2lmyyG.js";import{m as c}from"./nb_NO-FOl0qZti.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-W4N4n3J_.js";import"./index.es-Dj5OBCqo.js";import"./Modal-CXCon6mo.js";import"./index-D78_jirS.js";import"./composeEventHandlers-CJyonZHw.js";import"./Tag-CRHuM36I.js";import"./VStack-Dv7IGAf5.js";import"./Table-CxoJC-IQ.js";import"./ArrowsUpDown-IsItxp4a.js";import"./Checkmark-CuamwtSp.js";import"./HourglassTopFilled-BsCkzPui.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),C={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,C as default};
