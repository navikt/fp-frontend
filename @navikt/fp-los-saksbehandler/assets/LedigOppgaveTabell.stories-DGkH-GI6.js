import{w as m,j as p}from"./iframe-DiMnSK1d.js";import{Z as w}from"./index.es-lCpdW0HF.js";import{u as g}from"./useQuery-ClkPqT5O.js";import{h as e,L as s,H as t,l as d}from"./fplosSaksbehandlerApi-Bun217q9.js";import{L as l,A as i}from"./LedigOppgaveTabell-moakIq0G.js";import"./FlyttReservasjonModal-Dij7qiCr.js";import{g as E}from"./withIntl-DLwdP-IZ.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as c}from"./nb_NO-D3Su-AXd.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B0Yol6yT.js";import"./BehandlingPollingTimoutModal-BsA_3ALj.js";import"./Modal-cMpeHn0D.js";import"./floating-ui.react-BEYd_m8g.js";import"./composeEventHandlers-CoQZPbaw.js";import"./index-Cs21t5FM.js";import"./ChevronDown-D9SW_1AK.js";import"./VStack-Bm6ysBGh.js";import"./ExclamationmarkTriangleFill-7RI5ozws.js";import"./OppgaveLabels-isIoEYP1.js";import"./Checkmark-BH1dC7qn.js";import"./useLosKodeverk-CDWMCYmO.js";import"./Tag-DzGiyALb.js";import"./Table-vcMq0F8T.js";import"./Tooltip-CwJipofR.js";import"./Portal-BEflWgYz.js";import"./useMutation-CZ5jyAt_.js";import"./index.es-CmxG4w0J.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,h=E(c),O=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:["REVURDERING_INNTEKTSMELDING"],oppgaveBehandlingStatus:"UNDER_ARBEID"}],Y={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[h,m],args:{valgtSakslisteId:1,reserverOppgave:R("button-click")},render:n=>g(d()).data?p.jsx(l,{...n}):p.jsx(w,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(O))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Z=["Default","TomOppgaveTabell"];export{o as Default,r as TomOppgaveTabell,Z as __namedExportsOrder,Y as default};
