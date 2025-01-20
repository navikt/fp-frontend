import{h as e,L as s,H as t}from"./fplosAvdelingslederApi-DPBZ_YKB.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as p}from"./behandlingType-BdbjGMJD.js";import{w as d,m as V}from"./nb_NO-Bi5y27PA.js";import{g as m}from"./withIntl-D8jdhkXM.js";import{a as v}from"./useLosKodeverk-DC0Yv5X7.js";import{R as _}from"./ReservasjonerTabell-LUVzlE3K.js";import"./decorators-DIzpaN6C.js";import"./index-B54hSm9S.js";import"./index-D1iumpf7.js";import"./Modal-BrZj9Pi8.js";import"./index-BC2UOl6f.js";import"./index-D41M3POg.js";import"./jsx-runtime-BDPtolqC.js";import"./BasePrimitive-r5CFla7J.js";import"./useQuery-BTEFDDvd.js";import"./index.es-RUajDzyl.js";import"./dayjs.min-BBSNu57g.js";import"./useMutation-BYq_cSFy.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FlyttReservasjonModal-D-_BZ2nl.js";import"./index.es-CbjsSlRY.js";import"./index.es-DGFmJ-tP.js";import"./Table-DFvjVuO9.js";const T=m(V),q={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:_,decorators:[T,d],args:{valgtAvdelingEnhet:"1"}},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(v)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(v)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:p.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:p.KLAGE}])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}};var o,E,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(N=r.parameters)==null?void 0:N.docs)==null?void 0:u.source}}};const z=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,n as ViseAtIngenReservasjonerBleFunnet,z as __namedExportsOrder,q as default};
