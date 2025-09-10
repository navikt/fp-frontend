import{w as i,j as a}from"./iframe-CPFa3gmr.js";import{Q as l}from"./index.es--0PdulrM.js";import{u as d}from"./useQuery-BiO7YH4d.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-C4EheF9Y.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BGxmViOl.js";import{g as u}from"./withIntl-C00_soG9.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-vSU5Zjez.js";import{m as c}from"./nb_NO-C12JtpDU.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-CB5uaQ93.js";import"./index.es-BBSxhl5l.js";import"./Modal-D_mzxU70.js";import"./floating-ui.react-BRI3OAgS.js";import"./composeEventHandlers-BvJ_3eqJ.js";import"./index-J920Gb80.js";import"./ChevronDown-DAom9lm-.js";import"./Tag-Rq661IkE.js";import"./VStack-Bb4vw2vW.js";import"./useLosKodeverk-D7NY-IcD.js";import"./Table-9G206CHX.js";import"./Checkmark-Bb-1u2QH.js";import"./HourglassTopFilled-tz3SqQYQ.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
