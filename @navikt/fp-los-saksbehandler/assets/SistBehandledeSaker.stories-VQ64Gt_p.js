import{w as i,j as a}from"./iframe-CGtaPlMr.js";import{Q as l}from"./index.es-zzSr_Xqr.js";import{u as d}from"./useLosKodeverk-mAeRkF2C.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-DKUv_1KG.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-DquGq6Ru.js";import{g as u}from"./withIntl-C38w5mIj.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-CfE-geBc.js";import{m as c}from"./nb_NO-8OE8CfW0.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-8F9pyiDk.js";import"./index.es-DJ_X4gMc.js";import"./Modal-1IhewSW0.js";import"./index-DJ2gHwTN.js";import"./composeEventHandlers-BLmajNSV.js";import"./Tag-DK_vZxKa.js";import"./VStack--o-kiaXL.js";import"./Table-Dm_TLl73.js";import"./ArrowsUpDown-BUfiZD-r.js";import"./Checkmark-B6hTe0ph.js";import"./HourglassTopFilled-Bt8u50H8.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),C={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
