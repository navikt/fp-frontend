import{w as i,j as a}from"./iframe-6sLc6nWL.js";import{Q as l}from"./index.es-BzBsaHxG.js";import{u as d}from"./useLosKodeverk-BRGadkE-.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-D0kriSNO.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-Dx52-NNi.js";import{g as u}from"./withIntl-nMFV4D_u.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-bYLUjT1H.js";import{m as c}from"./nb_NO-CTGRyfFc.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Bsz5sjnH.js";import"./index.es-I3DalEUC.js";import"./Modal-C9rYWZHM.js";import"./index-DmxU5NkJ.js";import"./composeEventHandlers-Ilc965z7.js";import"./Tag-BHN0w7_X.js";import"./VStack-_sYn5JF6.js";import"./Table-CY8X8NS9.js";import"./ArrowsUpDown-DGKfLMsn.js";import"./Checkmark-DlG9Oc2T.js";import"./HourglassTopFilled-uL0wEN2R.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),C={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
