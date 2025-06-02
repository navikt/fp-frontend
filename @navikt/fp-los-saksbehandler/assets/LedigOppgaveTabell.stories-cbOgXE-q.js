import{j as p}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{a as R}from"./index.es-CkC-ADA8.js";import{a as h,w as O,F as P,B as L}from"./withThemeDecorator-z4QW1Ff7.js";import{u as N}from"./useQuery-D_Pw0jkN.js";import{h as e,L as s,H as t,l as A}from"./fplosSaksbehandlerApi-4oezgadX.js";import{A as G}from"./andreKriterierType-DyVow8-R.js";import{L as l,A as E}from"./LedigOppgaveTabell-lt4otGfV.js";import"./FlyttReservasjonModal-CAo0DYe1.js";import{g as I}from"./withIntl-lOi1k64a.js";import{a as c}from"./alleKodeverkLos-DjowPRxp.js";import{m as v}from"./nb_NO-C3_hJm02.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-BIv60t02.js";import"./v4-CtRu48qb.js";import"./entry-preview-ZfnTd0Yb.js";import"./iframe-B7o3CpvX.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-D0kFWjnl.js";import"./Modal-D30nVMJM.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-CMLmUAd_.js";import"./ExclamationmarkTriangleFill-CiBUM89n.js";import"./message-BKRiN860.js";import"./OppgaveLabels-B2easYMl.js";import"./Portal-B4Uyzadm.js";import"./ChevronDown-hzrWzE7n.js";import"./useLosKodeverk-BxoCJ-MK.js";import"./Tag-jMNzjvJL.js";import"./Table-BUYqCHT5.js";import"./ArrowsUpDown-BZjYTx7A.js";import"./useMutation-D0WUzOL0.js";import"./index.es-I3dd9qWc.js";import"./index.es-D0cdVRCV.js";const S=I(v),_=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:L.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:P.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[G.REVURDERING_INNTEKTSMELDING]}],dt={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[S,O],args:{valgtSakslisteId:1,reserverOppgave:h("button-click")},render:o=>N(A()).data?p.jsx(l,{...o}):p.jsx(R,{})},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,o=>o.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:E.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(_))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,o=>o.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:E.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};var i,m,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,g,d;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const Et=["Default","TomOppgaveTabell"];export{n as Default,r as TomOppgaveTabell,Et as __namedExportsOrder,dt as default};
