import{w as m,j as p,F as g,B as w}from"./iframe-6sLc6nWL.js";import{Q as E}from"./index.es-BzBsaHxG.js";import{u as d}from"./useLosKodeverk-BRGadkE-.js";import{a as e,L as s,H as t,l as c}from"./fplosSaksbehandlerApi-D0kriSNO.js";import{A as R}from"./andreKriterierType-Cg0VWsVP.js";import{O as h}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as l,A as i}from"./LedigOppgaveTabell-CADeV9Qb.js";import"./FlyttReservasjonModal-Dx52-NNi.js";import{g as O}from"./withIntl-nMFV4D_u.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as P}from"./nb_NO-CTGRyfFc.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Bsz5sjnH.js";import"./BehandlingPollingTimoutModal-BgdcGNM4.js";import"./Modal-C9rYWZHM.js";import"./index-DmxU5NkJ.js";import"./composeEventHandlers-Ilc965z7.js";import"./VStack-_sYn5JF6.js";import"./ExclamationmarkTriangleFill-CpNk3nK_.js";import"./OppgaveLabels-Q8B3FM2P.js";import"./Checkmark-DlG9Oc2T.js";import"./Portal-6ZIT7Q2v.js";import"./Tag-BHN0w7_X.js";import"./Table-CY8X8NS9.js";import"./ArrowsUpDown-DGKfLMsn.js";import"./useMutation-Coz0oglK.js";import"./index.es-I3DalEUC.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=O(P),A=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:w.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[R.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:h.UNDER_ARBEID}],X={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[N,m],args:{valgtSakslisteId:1,reserverOppgave:L("button-click")},render:n=>d(c()).data?p.jsx(l,{...n}):p.jsx(E,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(A))]}},args:{antallOppgaver:4}},a={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Z=["Default","TomOppgaveTabell"];export{o as Default,a as TomOppgaveTabell,Z as __namedExportsOrder,X as default};
