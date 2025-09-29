import{w as m,j as p,B as g}from"./iframe-DcWfvX4E.js";import{Q as w}from"./index.es-CK71UUG6.js";import{u as d}from"./useQuery-CPaP-Sxu.js";import{h as e,L as s,H as t,l as E}from"./fplosSaksbehandlerApi-DVMPShiN.js";import{A as c}from"./andreKriterierType-Cg0VWsVP.js";import{O as R}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as l,A as i}from"./LedigOppgaveTabell-DvGwkoqI.js";import"./FlyttReservasjonModal-cyJRfFZ_.js";import{g as h}from"./withIntl-BpqaF8OP.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as O}from"./nb_NO-B5yokG7b.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BgAJ8TXJ.js";import"./BehandlingPollingTimoutModal-BUFNnVUn.js";import"./Modal-CkgRguxl.js";import"./floating-ui.react-BQhJV-NN.js";import"./composeEventHandlers-rXV8Rneo.js";import"./index-BUjOf9FY.js";import"./ChevronDown-V1IO0Cne.js";import"./VStack-qlvPq9uV.js";import"./ExclamationmarkTriangleFill-VQXYKzUw.js";import"./OppgaveLabels-BXpomtxi.js";import"./Checkmark-DpKxb_EB.js";import"./useLosKodeverk-CpQ04YyY.js";import"./Tag-KNyf_X-k.js";import"./Table-q8fDV-xz.js";import"./Tooltip-CTOelyQE.js";import"./Portal-z6xuPYI8.js";import"./useMutation-CD_UXkzb.js";import"./index.es-CrSE2Vo3.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,L=h(O),N=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:g.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[c.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:R.UNDER_ARBEID}],$={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[L,m],args:{valgtSakslisteId:1,reserverOppgave:P("button-click")},render:n=>d(E()).data?p.jsx(l,{...n}):p.jsx(w,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(N))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const tt=["Default","TomOppgaveTabell"];export{o as Default,r as TomOppgaveTabell,tt as __namedExportsOrder,$ as default};
