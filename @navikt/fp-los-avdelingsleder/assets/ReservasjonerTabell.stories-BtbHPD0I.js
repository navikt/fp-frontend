import{h as e,L as t,H as s}from"./fplosAvdelingslederApi-DNP73Upt.js";import{w as A,B as o,m}from"./nb_NO-rozzxS7Z.js";import{g as v}from"./withIntl-BSNqeFWw.js";import"./jsx-runtime-D_zvdyIk.js";import{a as i}from"./useLosKodeverk-C7a-MglP.js";import{R as O}from"./ReservasjonerTabell-DI5mySxO.js";import"./decorators-DIzpaN6C.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-BVAIC6Kg.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-4Eka1X40.js";import"./v4-CtRu48qb.js";import"./react-Bu2w_5aE.js";import"./iframe-BtfLcYZS.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./useQuery-DtT7oZ3t.js";import"./index.es-CdLdJLVf.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-BosAOaUz.js";import"./kodeverkTyper-CSMzNBS4.js";import"./FlyttReservasjonModal-D0d--T1w.js";import"./index.es-DF4ymgBM.js";import"./index.es-Cvrkl4Kk.js";import"./Table-B9E7IXJy.js";const N=v(m),x={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:O,decorators:[N,A],args:{valgtAvdelingEnhet:"1"}},r={parameters:{msw:{handlers:[e.get(t.KODEVERK_LOS,()=>s.json(i)),e.get(t.RESERVASJONER_FOR_AVDELING,()=>s.json([])),e.post(t.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new s(null,{status:200})),e.post(t.ENDRE_OPPGAVERESERVASJON,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON,()=>new s(null,{status:200}))]}}},n={parameters:{msw:{handlers:[e.get(t.KODEVERK_LOS,()=>s.json(i)),e.get(t.RESERVASJONER_FOR_AVDELING,()=>s.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:o.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:o.KLAGE}])),e.post(t.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new s(null,{status:200})),e.post(t.ENDRE_OPPGAVERESERVASJON,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new s(null,{status:200})),e.post(t.FLYTT_RESERVASJON,()=>new s(null,{status:200}))]}}};var p,E,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const M=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{n as VisTabellMedReservasjoner,r as ViseAtIngenReservasjonerBleFunnet,M as __namedExportsOrder,x as default};
