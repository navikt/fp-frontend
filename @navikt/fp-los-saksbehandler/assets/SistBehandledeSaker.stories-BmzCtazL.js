import{w as i,j as a}from"./iframe-BXoHgEa-.js";import{X as l}from"./index.es-D4OORaz-.js";import{u as d}from"./useLosKodeverk-dTtzBYPh.js";import{a as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-CVMsXjZG.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BD6xWYxW.js";import{g as u}from"./withIntl-Drm4VCv7.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DHKsMwoB.js";import{m as c}from"./nb_NO-QJrSJNY5.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-CqOZFQT3.js";import"./index.es-CjhcoE0S.js";import"./Modal-Cb081AvI.js";import"./index-B2Oi8yAc.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BYQFD8ty.js";import"./Tag-DcTWI1H0.js";import"./VStack-BsXxvB66.js";import"./Table-gOp6AR9m.js";import"./ArrowsUpDown-BzT9PSTn.js";import"./Checkmark-Oh4RAlfo.js";import"./HourglassTopFilled-BJeY3HfD.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),T={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const X=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,X as __namedExportsOrder,T as default};
