import{g as d,j as o,B as p}from"./iframe-W05lDONa.js";import{Q as L}from"./index.es-C6p6PTF4.js";import{u as N}from"./useQuery-BF8nV89k.js";import{h as e,L as s,b as t,l as m}from"./fplosAvdelingslederApi-DCDkERWD.js";import{g as V}from"./withIntl-BGOjs-2h.js";import{a as u}from"./useLosKodeverk-CfkJ2sxg.js";import{R as a}from"./ReservasjonerTabell-DQzyu7eg.js";import{m as _}from"./nb_NO-O4GuYuU4.js";import"./Modal-WyBVvZ83.js";import"./index-BqVJLtux.js";import"./BasePrimitive-D898U9FR.js";import"./useMutation-CY7FPm-o.js";import"./FlyttReservasjonModal-BiqsRuG9.js";import"./index.es-Dpo6jwpA.js";import"./index.es-H47MmmW_.js";import"./Table-Pw1ewl7A.js";const g=V(_),f={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:a,decorators:[g,d],args:{valgtAvdelingEnhet:"1"},render:v=>{const{data:O}=N(m());return O?o.jsx(a,{...v}):o.jsx(L,{})}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:"122234",behandlingType:p.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:"23454",behandlingType:p.KLAGE}])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}};var E,l,R;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([])), http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  }
}`,...(R=(l=r.parameters)==null?void 0:l.docs)==null?void 0:R.source}}};var S,i,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([{
        reservertAvUid: 'wsfwer-sdsfd',
        reservertAvNavn: 'Espen Utvikler',
        reservertTilTidspunkt: '2020-01-10',
        oppgaveId: 1,
        oppgaveSaksNr: '122234',
        behandlingType: BehandlingType.FORSTEGANGSSOKNAD
      }, {
        reservertAvUid: 'gtfbrt-tbrtb',
        reservertAvNavn: 'Eirik Utvikler',
        reservertTilTidspunkt: '2020-01-01',
        oppgaveId: 2,
        oppgaveSaksNr: '23454',
        behandlingType: BehandlingType.KLAGE
      }])), http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  }
}`,...(A=(i=n.parameters)==null?void 0:i.docs)==null?void 0:A.source}}};const B=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{n as VisTabellMedReservasjoner,r as ViseAtIngenReservasjonerBleFunnet,B as __namedExportsOrder,f as default};
