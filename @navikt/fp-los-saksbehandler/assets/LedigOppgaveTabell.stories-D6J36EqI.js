import{w as m,j as p}from"./iframe-XJysTbVt.js";import{Q as w}from"./index.es-Bx2Lc6cN.js";import{u as g}from"./useQuery-DHcfd0I4.js";import{h as e,L as s,H as t,l as d}from"./fplosSaksbehandlerApi-BFD48Mop.js";import{A as E}from"./andreKriterierType-Cg0VWsVP.js";import{O as c}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as l,A as i}from"./LedigOppgaveTabell-fAQimtzb.js";import"./FlyttReservasjonModal-BBbHltuO.js";import{g as R}from"./withIntl-CiDJYkrt.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as h}from"./nb_NO-CO3HAz6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BV-Jh8wD.js";import"./BehandlingPollingTimoutModal-CoKeBG1B.js";import"./Modal-BvNhRRyn.js";import"./floating-ui.react-BvpS9y_f.js";import"./composeEventHandlers-CltQEKyj.js";import"./index-DKMOwF-J.js";import"./ChevronDown-C350f3Hb.js";import"./VStack-JRQgy8gX.js";import"./ExclamationmarkTriangleFill-D-hTcQRv.js";import"./OppgaveLabels-aFxQ8n0h.js";import"./Checkmark-C8HH494n.js";import"./useLosKodeverk-BvLUDjJK.js";import"./Tag-B8W21FA_.js";import"./Table-C7eUA1yU.js";import"./Tooltip-BQwdGvLc.js";import"./Portal-CdlyI78r.js";import"./useMutation-CiVYtcd_.js";import"./index.es-DawA6EnQ.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,P=R(h),L=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[E.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:c.UNDER_ARBEID}],Z={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[P,m],args:{valgtSakslisteId:1,reserverOppgave:O("button-click")},render:n=>g(d()).data?p.jsx(l,{...n}):p.jsx(w,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const $=["Default","TomOppgaveTabell"];export{o as Default,r as TomOppgaveTabell,$ as __namedExportsOrder,Z as default};
