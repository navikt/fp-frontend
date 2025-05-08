import{h as e,L as t,H as s}from"./fplosAvdelingslederApi-BcMQOOWq.js";import{w as A,B as o,m}from"./nb_NO-WGnJneqN.js";import{g as v}from"./withIntl-BulwPjXw.js";import"./jsx-runtime-D_zvdyIk.js";import{a as i}from"./useLosKodeverk-BsqzzNcY.js";import{R as O}from"./ReservasjonerTabell-BuPLE0qQ.js";import"./decorators-Bnaor6Ku.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-Ms8vZqk1.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./BasePrimitive-CcpCaMoC.js";import"./v4-CtRu48qb.js";import"./entry-preview-aE7qxxaS.js";import"./iframe-D5CN87fA.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./useQuery-OFa5q3cg.js";import"./index.es-nRZyUuM4.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-Hqt8nfSP.js";import"./kodeverkTyper-BiqIm7FA.js";import"./FlyttReservasjonModal-yWZMIKah.js";import"./index.es-CEeGQiSU.js";import"./index.es-B3NxXnPW.js";import"./Table-CsNm4HwM.js";const N=v(m),C={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:O,decorators:[N,A],args:{valgtAvdelingEnhet:"1"}},r={parameters:{msw:{handlers:[e.get(t.KODEVERK_LOS,()=>s.json(i)),e.get(t.RESERVASJONER_FOR_AVDELING,()=>s.json([])),e.post(t.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new s(null,{status:200})),e.post(t.ENDRE_OPPGAVERESERVASJON,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON,()=>new s(null,{status:200}))]}}},n={parameters:{msw:{handlers:[e.get(t.KODEVERK_LOS,()=>s.json(i)),e.get(t.RESERVASJONER_FOR_AVDELING,()=>s.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:"122234",behandlingType:o.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:"23454",behandlingType:o.KLAGE}])),e.post(t.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new s(null,{status:200})),e.post(t.ENDRE_OPPGAVERESERVASJON,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON,()=>new s(null,{status:200}))]}}};var p,E,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(E=r.parameters)==null?void 0:E.docs)==null?void 0:a.source}}};var l,R,S;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const Q=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{n as VisTabellMedReservasjoner,r as ViseAtIngenReservasjonerBleFunnet,Q as __namedExportsOrder,C as default};
