import{w as m,j as p,F as g,B as w}from"./iframe-BXoHgEa-.js";import{X as E}from"./index.es-D4OORaz-.js";import{u as d}from"./useLosKodeverk-dTtzBYPh.js";import{a as e,L as s,H as t,l as c}from"./fplosSaksbehandlerApi-CVMsXjZG.js";import{A as R}from"./andreKriterierType-Cg0VWsVP.js";import{O as h}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as l,A as i}from"./LedigOppgaveTabell-DRg8G4RU.js";import"./FlyttReservasjonModal-BD6xWYxW.js";import{g as O}from"./withIntl-Drm4VCv7.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as P}from"./nb_NO-QJrSJNY5.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-CqOZFQT3.js";import"./BehandlingPollingTimoutModal-C2rcRje-.js";import"./Modal-Cb081AvI.js";import"./index-B2Oi8yAc.js";import"./composeEventHandlers-krbYd5LM.js";import"./VStack-BsXxvB66.js";import"./ExclamationmarkTriangleFill-Bx9KvdFv.js";import"./OppgaveLabels-DGO7jMlg.js";import"./Checkmark-Oh4RAlfo.js";import"./Portal-DjRGnfZo.js";import"./ChevronDown-BYQFD8ty.js";import"./Tag-DcTWI1H0.js";import"./Table-gOp6AR9m.js";import"./ArrowsUpDown-BzT9PSTn.js";import"./useMutation-nYJdiels.js";import"./index.es-CjhcoE0S.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=O(P),A=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:w.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[R.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:h.UNDER_ARBEID}],Z={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[N,m],args:{valgtSakslisteId:1,reserverOppgave:L("button-click")},render:n=>d(c()).data?p.jsx(l,{...n}):p.jsx(E,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(A))]}},args:{antallOppgaver:4}},a={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const $=["Default","TomOppgaveTabell"];export{o as Default,a as TomOppgaveTabell,$ as __namedExportsOrder,Z as default};
