import{j as p}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{r as R}from"./index.es-BQChBZK5.js";import{a as h,w as O,F as P,B as L,b as N,m as A}from"./nb_NO-Bb9ahodp.js";import{u as G}from"./useQuery-J3gvHqn5.js";import{h as e,L as s,H as t,l as I}from"./fplosSaksbehandlerApi-4oezgadX.js";import{A as v}from"./andreKriterierType-DyVow8-R.js";import{L as l,A as d}from"./LedigOppgaveTabell-C6R3c-OT.js";import"./FlyttReservasjonModal-D6z5Ybfx.js";import{g as S}from"./withIntl-o3HhZLhi.js";import{a as c}from"./alleKodeverkLos-DjowPRxp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-DP7OfJnd.js";import"./v4-CtRu48qb.js";import"./entry-preview-DImLezzp.js";import"./iframe-CWkrEQb5.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./dayjs.min-DkLNzaWO.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-03tqQDNN.js";import"./Modal-B2q02yNA.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-C0zrd7Fd.js";import"./ExclamationmarkTriangleFill-Ds1qOWBi.js";import"./message-Sp_E-lKi.js";import"./OppgaveLabels-PkfAVjAL.js";import"./Portal-B4VZKk85.js";import"./ChevronDown-D-ipQBjQ.js";import"./useLosKodeverk-CF4czut7.js";import"./Tag-_EL9kzDj.js";import"./Table-DHj7x4o5.js";import"./ArrowsUpDown-BXwKqSwg.js";import"./useMutation-DJMtwEtE.js";import"./index.es-Bk7QASNb.js";import"./index.es-DJ7rLz-N.js";const _=S(A),T=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:N.FORSTEGANGSSOKNAD,behandlingStatus:L.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:P.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[v.REVURDERING_INNTEKTSMELDING]}],dt={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[_,O],args:{valgtSakslisteId:1,reserverOppgave:h("button-click")},render:n=>G(I()).data?p.jsx(l,{...n}):p.jsx(R,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(T))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'https://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'https://www.test.com/api/result'
          }
        });
      }), http.get('https://www.test.com/api/status', () => HttpResponse.json({
        status: ApiPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('https://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,g,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([])), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'https://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'https://www.test.com/api/result'
          }
        });
      }), http.get('https://www.test.com/api/status', () => HttpResponse.json({
        status: ApiPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('https://www.test.com/api/result', () => HttpResponse.json([]))]
    }
  }
}`,...(E=(g=r.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const ct=["Default","TomOppgaveTabell"];export{o as Default,r as TomOppgaveTabell,ct as __namedExportsOrder,dt as default};
