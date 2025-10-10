import{w as i,j as n}from"./iframe-Cxiu9moG.js";import{Q as l}from"./index.es-DLn_AXM2.js";import{u as d}from"./useQuery-gJxwkrnl.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-D1Zxrxmc.js";import"./FlyttReservasjonModal-Cu80SIjy.js";import{g as u}from"./withIntl-BXv-mgj5.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-Czpkuj69.js";import{m as c}from"./nb_NO-GnRbBCJl.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DiixKYlL.js";import"./index.es-CvnX6Kxc.js";import"./Modal-OU9is9qV.js";import"./floating-ui.react-CsYY5UsG.js";import"./composeEventHandlers-CL7ondXh.js";import"./index-DKaflqxo.js";import"./ChevronDown-C2V79gwj.js";import"./Tag-C4N-KuoW.js";import"./VStack-C1W6LOfh.js";import"./useLosKodeverk-zVqvuNx5.js";import"./Table-Dp_wWKaU.js";import"./Checkmark-CkLu5wCE.js";import"./HourglassTopFilled-DLUqxMFi.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),C={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323',
        oppgaveBehandlingStatus: 'UNDER_ARBEID',
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
