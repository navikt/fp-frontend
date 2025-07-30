import{f as S,j as o,B as p}from"./iframe-gYF99bpJ.js";import{X as i}from"./index.es-Bru076JX.js";import{u as A}from"./useQuery-De1p-dGU.js";import{h as e,L as s,b as t,l as u}from"./fplosAvdelingslederApi-cGPzxlCw.js";import{g as v}from"./withIntl-CQNxENlx.js";import{a as E}from"./useLosKodeverk-7Y30tkru.js";import{R as a}from"./ReservasjonerTabell-DAo5kaDK.js";import{m as O}from"./nb_NO-3HGCLywH.js";import"./Modal-CZ0fvY4N.js";import"./index-kWm9xkfC.js";import"./BasePrimitive-j7bUEsxy.js";import"./useMutation-edhUVvtQ.js";import"./FlyttReservasjonModal-rek6a-c2.js";import"./index.es-Dx42xqqo.js";import"./index.es-B8bRcqOo.js";import"./Table-BvZg85xp.js";const d=v(O),j={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:a,decorators:[d,S],args:{valgtAvdelingEnhet:"1"},render:l=>{const{data:R}=A(u());return R?o.jsx(a,{...l}):o.jsx(i,{})}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(E)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(E)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:"122234",behandlingType:p.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:"23454",behandlingType:p.KLAGE}])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const G=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{n as VisTabellMedReservasjoner,r as ViseAtIngenReservasjonerBleFunnet,G as __namedExportsOrder,j as default};
