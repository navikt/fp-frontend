import{w as i,j as a}from"./iframe-B_gJBb7r.js";import{Q as l}from"./index.es-CbHhdo4C.js";import{u as d}from"./useQuery-t6iTPEh-.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-I_eKkXm5.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-Cy_egtoi.js";import{g as u}from"./withIntl-DHnWlpZk.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-D3gzv0zY.js";import{m as c}from"./nb_NO-BYV9EfKW.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-i6Od3rbL.js";import"./index.es-C5hA478h.js";import"./Modal-zHNc--Nf.js";import"./floating-ui.react-DMTowDgT.js";import"./composeEventHandlers-C1qbdVpl.js";import"./index-d2PAzCkG.js";import"./ChevronDown-DH_0Sr6y.js";import"./Tag-D_aIr90f.js";import"./VStack-Mjg6ToKR.js";import"./useLosKodeverk-BdeUhmgv.js";import"./Table-DOt0hw6z.js";import"./Checkmark-ByN8wngF.js";import"./HourglassTopFilled-Bwh4M1qN.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
