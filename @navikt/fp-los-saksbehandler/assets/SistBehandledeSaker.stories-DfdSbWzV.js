import{w as i,j as a}from"./iframe-CF8fhdT_.js";import{Q as l}from"./index.es-WP0U6Vwi.js";import{u as d}from"./useQuery-swBBePYk.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-5-Mp6zjg.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-ZjytOXOy.js";import{g as u}from"./withIntl-CT0Bxjve.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-Dzi_U_I0.js";import{m as c}from"./nb_NO-B0MwT9px.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-De7v7hMf.js";import"./index.es-4AS-gBOy.js";import"./Modal-CwKCJBdK.js";import"./floating-ui.react-B6UxSIwD.js";import"./composeEventHandlers-Bl9pufit.js";import"./index-ugOsHta_.js";import"./ChevronDown-DCCkzgwb.js";import"./Tag-DVuiRVvo.js";import"./VStack-CNleZAjs.js";import"./useLosKodeverk-Bi5cHP5c.js";import"./Table-BhFkQhxm.js";import"./Checkmark-BpoFG3LS.js";import"./HourglassTopFilled-DvpdKdhw.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
