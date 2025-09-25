import{w as i,j as a}from"./iframe-DxwM4xU5.js";import{Q as l}from"./index.es-Dug4QYxW.js";import{u as d}from"./useQuery-D6_xnIHQ.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-BXld5sfV.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BjTsV2JF.js";import{g as u}from"./withIntl-D3Bpl7ME.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-BD4yJ-xh.js";import{m as c}from"./nb_NO-BRC6EKYe.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DdsWyIwa.js";import"./index.es-BllIWvfJ.js";import"./Modal-BDEypy-g.js";import"./floating-ui.react-hzBpVm0Y.js";import"./composeEventHandlers-C2vQhqcS.js";import"./index-CvKkzCSw.js";import"./ChevronDown-DxaiY5wo.js";import"./Tag-36BpLXc6.js";import"./VStack-DgbYcPiR.js";import"./useLosKodeverk-Cwn1oj1q.js";import"./Table-FmZjh_Ho.js";import"./Checkmark-BQVbx5jS.js";import"./HourglassTopFilled-BEbQOqgm.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
