import{w as i,j as a}from"./iframe-D7QvprpV.js";import{Q as l}from"./index.es-DwtIUmGP.js";import{u as d}from"./useQuery-xKzZNyNA.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-BZvap6Fv.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-gNq7uFX-.js";import{g as u}from"./withIntl-CDv_6EOo.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DBNUYDlD.js";import{m as c}from"./nb_NO-8Dtbmjy8.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B29GRadZ.js";import"./index.es-B47NpgJ0.js";import"./Modal-Bk7ZiD1t.js";import"./floating-ui.react-DY5XLlDo.js";import"./composeEventHandlers-qRCbCdav.js";import"./index-gSKIV6-f.js";import"./ChevronDown-Cs5YeVgB.js";import"./Tag-DJy__Sqy.js";import"./VStack-B9R60f1s.js";import"./useLosKodeverk-YnCl8_Tv.js";import"./Table-DNDOu8DJ.js";import"./Checkmark-DUENYu6j.js";import"./HourglassTopFilled-B5tkOX31.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
