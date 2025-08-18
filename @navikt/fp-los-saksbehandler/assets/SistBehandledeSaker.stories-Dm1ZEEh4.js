import{w as i,j as a}from"./iframe-DZrfQhmt.js";import{X as l}from"./index.es-BcsMNl_W.js";import{u as d}from"./useLosKodeverk-CVIXc4uI.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-CqHcwc4C.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BuE_vvBt.js";import{g as u}from"./withIntl-MVxRk1vh.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-D3D_FdUv.js";import{m as c}from"./nb_NO-BiGyfJgG.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Cd5GBwP9.js";import"./index.es-05Y_sk3C.js";import"./Modal-Cpcc_uy-.js";import"./index-vJ6sSl0L.js";import"./composeEventHandlers-BivaY7Vf.js";import"./Tag-jf73OxDF.js";import"./VStack-VrpA6W4Y.js";import"./Table-riZywx3-.js";import"./ArrowsUpDown-pET3yqlY.js";import"./Checkmark-CCftTTSL.js";import"./HourglassTopFilled-ByAHlm4m.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),Q={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,Q as default};
