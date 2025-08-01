import{w as m,j as p,F as w,B as g}from"./iframe-CyPkD_ak.js";import{X as E}from"./index.es-naRtX646.js";import{u as d}from"./useQuery-C1ErPo1u.js";import{a as e,L as s,H as t,l as c}from"./fplosSaksbehandlerApi-VmWZgKW-.js";import{A as R}from"./andreKriterierType-Cg0VWsVP.js";import{L as l,A as i}from"./LedigOppgaveTabell-GQ-KilNv.js";import"./FlyttReservasjonModal-BmfBBKio.js";import{g as h}from"./withIntl-CIFsDVd0.js";import{a as u}from"./alleKodeverkLos-DeeW-5p1.js";import{m as O}from"./nb_NO-CRusyisS.js";import"./index.es-CVnPHYNh.js";import"./Loader-CY0_Js7v.js";import"./BehandlingPollingTimoutModal-BFs9m5ev.js";import"./Modal-D50mm1Zy.js";import"./index-CpEopPp5.js";import"./composeEventHandlers-krbYd5LM.js";import"./VStack-CYvyhPBD.js";import"./ExclamationmarkTriangleFill-BvFSgeBV.js";import"./message-D_e69ppz.js";import"./OppgaveLabels-CzBhv67b.js";import"./Portal-k5y8ZYq9.js";import"./ChevronDown-CH8_dNCP.js";import"./useLosKodeverk-BPWnj7bd.js";import"./Tag-CvXDIv8V.js";import"./Table-BiTrzpGD.js";import"./ArrowsUpDown-B0raxNy1.js";import"./useMutation-BDyGKyio.js";import"./index.es-CYQDWAXV.js";import"./index.es-FVdwy9rG.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,L=h(O),N=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:g.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:w.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[R.REVURDERING_INNTEKTSMELDING]}],Z={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[L,m],args:{valgtSakslisteId:1,reserverOppgave:P("button-click")},render:n=>d(c()).data?p.jsx(l,{...n}):p.jsx(E,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(N))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
