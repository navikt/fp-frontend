import{w as d,h as e,L as s,H as t}from"./withQueryClientProvider-D5rUA1vz.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as p}from"./behandlingType-BdbjGMJD.js";import{m as V}from"./nb_NO-CZSpk6bt.js";import{g as _}from"./withIntl-DXtOtJE7.js";import{a as v}from"./useLosKodeverk-EfGSBP6a.js";import{R as m}from"./ReservasjonerTabell-DBGL_cak.js";import"./decorators-86JrGkCj.js";import"./index-DRjF_FHU.js";import"./Modal-B9osCInE.js";import"./index-rX-Bn4lm.js";import"./jsx-runtime-DR9Q75dM.js";import"./BasePrimitive-zpMbHS_U.js";import"./useQuery-Cufi_TnF.js";import"./index.es-C9TXiEHC.js";import"./dayjs.min-CnNqAF5I.js";import"./useMutation-Bl-NM7Qh.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FlyttReservasjonModal-DABA3iZ_.js";import"./index.es-BU4tl1aP.js";import"./index.es-Dx0W_TRK.js";import"./Table-BpD34COj.js";const T=_(V),C={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:m,decorators:[T,d],args:{valgtAvdelingEnhet:"1"}},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(v)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(v)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:p.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:p.KLAGE}])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}};var o,E,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(E=n.parameters)==null?void 0:E.docs)==null?void 0:a.source}}};var R,l,S;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([{
        reservertAvUid: 'wsfwer-sdsfd',
        reservertAvNavn: 'Espen Utvikler',
        reservertTilTidspunkt: '2020-01-10',
        oppgaveId: 1,
        oppgaveSaksNr: 122234,
        behandlingType: BehandlingType.FORSTEGANGSSOKNAD
      }, {
        reservertAvUid: 'gtfbrt-tbrtb',
        reservertAvNavn: 'Eirik Utvikler',
        reservertTilTidspunkt: '2020-01-01',
        oppgaveId: 2,
        oppgaveSaksNr: 23454,
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
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var A,i,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(i=n.parameters)==null?void 0:i.docs)==null?void 0:L.source}}};var O,N,u;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([{
        reservertAvUid: 'wsfwer-sdsfd',
        reservertAvNavn: 'Espen Utvikler',
        reservertTilTidspunkt: '2020-01-10',
        oppgaveId: 1,
        oppgaveSaksNr: 122234,
        behandlingType: BehandlingType.FORSTEGANGSSOKNAD
      }, {
        reservertAvUid: 'gtfbrt-tbrtb',
        reservertAvNavn: 'Eirik Utvikler',
        reservertTilTidspunkt: '2020-01-01',
        oppgaveId: 2,
        oppgaveSaksNr: 23454,
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
}`,...(u=(N=r.parameters)==null?void 0:N.docs)==null?void 0:u.source}}};const Q=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,n as ViseAtIngenReservasjonerBleFunnet,Q as __namedExportsOrder,C as default};
