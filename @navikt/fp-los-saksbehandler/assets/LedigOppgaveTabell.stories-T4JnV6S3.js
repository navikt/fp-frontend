import{w as R,j as p,F as h,B as O}from"./iframe-Cb_ISg--.js";import{X as P}from"./index.es-0GbpNu_8.js";import{u as L}from"./useQuery-CCzjY9t4.js";import{a as e,L as s,H as t,l as N}from"./fplosSaksbehandlerApi-D2WcQp54.js";import{A}from"./andreKriterierType-Cg0VWsVP.js";import{L as l,A as d}from"./LedigOppgaveTabell-BnnC0dHp.js";import"./FlyttReservasjonModal-inlmcaXr.js";import{g as I}from"./withIntl-DginZqZZ.js";import{a as c}from"./alleKodeverkLos-DeeW-5p1.js";import{m as G}from"./nb_NO-Cz-DehRK.js";import"./Loader-BPbWQrE7.js";import"./BehandlingPollingTimoutModal-BjK6A9nF.js";import"./Modal-GY09lf0u.js";import"./index-DDfoBEuY.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-D_z2lemC.js";import"./ExclamationmarkTriangleFill-4xcwJObX.js";import"./message-DxCmWH9K.js";import"./OppgaveLabels-CGJIRDUF.js";import"./Portal-Dsx1mL3h.js";import"./ChevronDown-QHs8JhIS.js";import"./useLosKodeverk-DSfbOajx.js";import"./Tag-8oyzaAVR.js";import"./Table-CgpiyalU.js";import"./ArrowsUpDown-CAsvqp8t.js";import"./useMutation-Dse_DItv.js";import"./index.es-CFfJp_UP.js";import"./index.es-MLu144aj.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,v=I(G),S=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:O.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:h.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[A.REVURDERING_INNTEKTSMELDING]}],nt={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[v,R],args:{valgtSakslisteId:1,reserverOppgave:_("button-click")},render:n=>L(N()).data?p.jsx(l,{...n}):p.jsx(P,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(S))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var w,g,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(g=r.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const ot=["Default","TomOppgaveTabell"];export{o as Default,r as TomOppgaveTabell,ot as __namedExportsOrder,nt as default};
