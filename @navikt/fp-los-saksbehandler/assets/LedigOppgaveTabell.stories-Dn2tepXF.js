import{w as m,j as p,F as g,B as w}from"./iframe-B9KoQGM0.js";import{X as E}from"./index.es-CLSw_-eh.js";import{u as d}from"./useLosKodeverk-BE3hg7Pt.js";import{a as e,L as s,H as t,l as c}from"./fplosSaksbehandlerApi-CWuH3MKX.js";import{A as R}from"./andreKriterierType-Cg0VWsVP.js";import{O as h}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as l,A as i}from"./LedigOppgaveTabell-2aP3oSGk.js";import"./FlyttReservasjonModal-B35tj6vq.js";import{g as O}from"./withIntl-DeQxf50B.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as P}from"./nb_NO-C3IQ5_sL.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-C2bZBRPU.js";import"./BehandlingPollingTimoutModal-Cxwe6Gpx.js";import"./Modal-CHSHW0HN.js";import"./index-TZAab7S3.js";import"./composeEventHandlers-C20DeXlO.js";import"./VStack-C4xViOeb.js";import"./ExclamationmarkTriangleFill-CeqG1iCP.js";import"./OppgaveLabels-Bg9Dm6C3.js";import"./Checkmark-DtkYrHG8.js";import"./Portal-DmzAOMbA.js";import"./Tag-BQHGL7Xh.js";import"./Table-C1cOsVXS.js";import"./ArrowsUpDown-CM4N4ECD.js";import"./useMutation-N_FPDICk.js";import"./index.es-Bp8LbBj1.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=O(P),A=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:w.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[R.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:h.UNDER_ARBEID}],W={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[N,m],args:{valgtSakslisteId:1,reserverOppgave:L("button-click")},render:n=>d(c()).data?p.jsx(l,{...n}):p.jsx(E,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(A))]}},args:{antallOppgaver:4}},a={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Z=["Default","TomOppgaveTabell"];export{o as Default,a as TomOppgaveTabell,Z as __namedExportsOrder,W as default};
