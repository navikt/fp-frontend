import{w as m,j as p}from"./iframe-CCoeTBVO.js";import{Q as w}from"./index.es-CtfjSj0a.js";import{u as g}from"./useQuery-DNPglWc1.js";import{h as e,L as s,H as t,l as d}from"./fplosSaksbehandlerApi-DUjNpqD9.js";import{L as l,A as i}from"./LedigOppgaveTabell-Cj-NnPpz.js";import"./FlyttReservasjonModal-BWgBlWZc.js";import{g as E}from"./withIntl-USg0sCON.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as c}from"./nb_NO-C7K6sktD.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BfRqDWwu.js";import"./BehandlingPollingTimoutModal-CP8goYQ8.js";import"./Modal-DiZZhibk.js";import"./floating-ui.react-C8ZV5sBu.js";import"./composeEventHandlers-BGqjwrlF.js";import"./index-COhETKab.js";import"./ChevronDown-BQj5bnus.js";import"./VStack-BiqG47QD.js";import"./ExclamationmarkTriangleFill-Bbnr-fs6.js";import"./OppgaveLabels-CaCFy0SH.js";import"./Checkmark-kkodfRXJ.js";import"./useLosKodeverk-DQdS-DYd.js";import"./Tag-CDrJBapq.js";import"./Table-CqHNy5yE.js";import"./Tooltip-BnANhtoJ.js";import"./Portal-BM9PFBHf.js";import"./useMutation-Bp6KmK-u.js";import"./index.es-BjXTJTbj.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,h=E(c),O=[{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:["REVURDERING_INNTEKTSMELDING"],oppgaveBehandlingStatus:"UNDER_ARBEID"}],Y={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[h,m],args:{valgtSakslisteId:1,reserverOppgave:R("button-click")},render:n=>g(d()).data?p.jsx(l,{...n}):p.jsx(w,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(O))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(u)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:i.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const z=["Default","TomOppgaveTabell"];export{o as Default,r as TomOppgaveTabell,z as __namedExportsOrder,Y as default};
