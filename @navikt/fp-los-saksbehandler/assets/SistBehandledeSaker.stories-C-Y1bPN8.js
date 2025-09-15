import{w as i,j as a}from"./iframe-D-7Qumb2.js";import{Q as l}from"./index.es-BWKXY8Zm.js";import{u as d}from"./useQuery-BhV4ZsAf.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-BZvbsPDs.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-De9D_uHy.js";import{g as u}from"./withIntl-CAr1wgSh.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-D-1vUT1y.js";import{m as c}from"./nb_NO-DWFKg_VO.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-21QoRLSO.js";import"./index.es-B7nEd_p0.js";import"./Modal-BtOD45wg.js";import"./floating-ui.react-DprRCndk.js";import"./composeEventHandlers-DJI96O9p.js";import"./index-QdqvErMV.js";import"./ChevronDown-B19QdtsS.js";import"./Tag-CtH-johQ.js";import"./VStack-DdnwT8h-.js";import"./useLosKodeverk-I2SQCJ7D.js";import"./Table-hG1JoSDz.js";import"./Checkmark-BqxJQnFv.js";import"./HourglassTopFilled-DXe65zhz.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
