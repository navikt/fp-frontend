import{w as i,j as a}from"./iframe-XJysTbVt.js";import{Q as l}from"./index.es-Bx2Lc6cN.js";import{u as d}from"./useQuery-DHcfd0I4.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-BFD48Mop.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BBbHltuO.js";import{g as u}from"./withIntl-CiDJYkrt.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-BsL49sVE.js";import{m as c}from"./nb_NO-CO3HAz6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BV-Jh8wD.js";import"./index.es-DawA6EnQ.js";import"./Modal-BvNhRRyn.js";import"./floating-ui.react-BvpS9y_f.js";import"./composeEventHandlers-CltQEKyj.js";import"./index-DKMOwF-J.js";import"./ChevronDown-C350f3Hb.js";import"./Tag-B8W21FA_.js";import"./VStack-JRQgy8gX.js";import"./useLosKodeverk-BvLUDjJK.js";import"./Table-C7eUA1yU.js";import"./Checkmark-C8HH494n.js";import"./HourglassTopFilled-BDIigqy5.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
