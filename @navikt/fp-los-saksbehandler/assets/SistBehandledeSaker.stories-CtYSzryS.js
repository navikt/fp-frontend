import{w as i,j as a}from"./iframe-DjvIQ3VO.js";import{Q as l}from"./index.es-Briw5zBJ.js";import{u as d}from"./useLosKodeverk-Dxo6C_9k.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-B3Yz8Ws0.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-M4Re-cai.js";import{g as u}from"./withIntl-FGM9NOdh.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-BO2xTKd3.js";import{m as c}from"./nb_NO-BAlqZDvd.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-DkZSySMT.js";import"./index.es-CGxeg_H_.js";import"./Modal-CubRlcK3.js";import"./index-BaCo9O5e.js";import"./composeEventHandlers-TZZ0FFNb.js";import"./Tag-CpiMYCNZ.js";import"./VStack-BUujH98t.js";import"./Table-C_hy6jQm.js";import"./Checkmark-B0dh_7cj.js";import"./HourglassTopFilled-XSEFK7dn.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),y={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const C=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,C as __namedExportsOrder,y as default};
