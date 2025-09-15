import{w as m,j as p,B as g}from"./iframe-D-7Qumb2.js";import{Q as w}from"./index.es-BWKXY8Zm.js";import{u as d}from"./useQuery-BhV4ZsAf.js";import{h as e,L as s,H as t,l as E}from"./fplosSaksbehandlerApi-BZvbsPDs.js";import{A as c}from"./andreKriterierType-Cg0VWsVP.js";import{O as R}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as l,A as i}from"./LedigOppgaveTabell-CqDxUQU3.js";import"./FlyttReservasjonModal-De9D_uHy.js";import{g as h}from"./withIntl-CAr1wgSh.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as O}from"./nb_NO-DWFKg_VO.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-21QoRLSO.js";import"./BehandlingPollingTimoutModal-C1DTNUaV.js";import"./Modal-BtOD45wg.js";import"./floating-ui.react-DprRCndk.js";import"./composeEventHandlers-DJI96O9p.js";import"./index-QdqvErMV.js";import"./ChevronDown-B19QdtsS.js";import"./VStack-DdnwT8h-.js";import"./ExclamationmarkTriangleFill-CAlp5iD_.js";import"./OppgaveLabels-h0CKDYFk.js";import"./Checkmark-BqxJQnFv.js";import"./useLosKodeverk-I2SQCJ7D.js";import"./Tag-CtH-johQ.js";import"./Table-hG1JoSDz.js";import"./Tooltip-BTPQERcm.js";import"./Portal-DlhkIRl-.js";import"./useMutation-C_Z7kfZY.js";import"./index.es-B7nEd_p0.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,L=h(O),N=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:g.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[c.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:R.UNDER_ARBEID}],$={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[L,m],args:{valgtSakslisteId:1,reserverOppgave:P("button-click")},render:n=>d(E()).data?p.jsx(l,{...n}):p.jsx(w,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(N))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
