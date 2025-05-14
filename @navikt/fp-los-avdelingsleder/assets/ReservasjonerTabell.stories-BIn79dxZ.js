import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index.es-CuanKM8i.js";import{u as d}from"./useQuery-DxU1jdeO.js";import{h as e,L as s,H as t,l as L}from"./fplosAvdelingslederApi-DKy6EIY1.js";import{w as N,B as p,m as V}from"./nb_NO-tkSV1vCo.js";import{g as _}from"./withIntl-NXol72dE.js";import{a as A}from"./useLosKodeverk-Dy79y__V.js";import{R as a}from"./ReservasjonerTabell-Dz6bJp4c.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-RWozyy4S.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./decorators-Bnaor6Ku.js";import"./BasePrimitive-Bh0ufWl_.js";import"./v4-CtRu48qb.js";import"./entry-preview-C-P7KeuY.js";import"./iframe-CCS64lpW.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-nupdxx3S.js";import"./FlyttReservasjonModal-Bj1mIE8O.js";import"./index.es-BsJjJbyn.js";import"./index.es-DGqVU0h3.js";import"./Table-BCLC1gDF.js";const T=_(V),X={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:a,decorators:[T,N],args:{valgtAvdelingEnhet:"1"},render:u=>{const{data:v}=d(L());return v?o.jsx(a,{...u}):o.jsx(O,{})}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(A)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(A)),e.get(s.RESERVASJONER_FOR_AVDELING,()=>t.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:"122234",behandlingType:p.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:"23454",behandlingType:p.KLAGE}])),e.post(s.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new t(null,{status:200})),e.post(s.ENDRE_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new t(null,{status:200})),e.post(s.FLYTT_RESERVASJON,()=>new t(null,{status:200}))]}}};var E,l,R;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(l=r.parameters)==null?void 0:l.docs)==null?void 0:R.source}}};var S,i,m;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{n as VisTabellMedReservasjoner,r as ViseAtIngenReservasjonerBleFunnet,Z as __namedExportsOrder,X as default};
