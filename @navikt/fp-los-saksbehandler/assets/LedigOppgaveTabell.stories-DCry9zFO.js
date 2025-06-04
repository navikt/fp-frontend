import{w as R,j as p,F as h,B as O}from"./iframe-Cwe0bwJ9.js";import{Q as P}from"./index.es-Dna4oZ5x.js";import{u as L}from"./useQuery-DVm6FeRj.js";import{a as e,L as s,H as t,l as N}from"./fplosSaksbehandlerApi-CWeePBmt.js";import{A}from"./andreKriterierType-DyVow8-R.js";import{L as l,A as d}from"./LedigOppgaveTabell-B119fsxX.js";import"./FlyttReservasjonModal-B2mgUDxo.js";import{g as I}from"./withIntl-D9nmWhbu.js";import{a as c}from"./alleKodeverkLos-DjowPRxp.js";import{m as G}from"./nb_NO-bfncGwUh.js";import"./Loader-5LDEStqt.js";import"./BehandlingPollingTimoutModal-BtWjcKlr.js";import"./Modal-BxSIUeqn.js";import"./index-xDdMB7tx.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-Bf-ul0Dz.js";import"./ExclamationmarkTriangleFill-DUNqHqZT.js";import"./message-BnxX8ymA.js";import"./OppgaveLabels-dTYCT-yj.js";import"./Portal-Dr9X5XPZ.js";import"./ChevronDown-DI2c8J56.js";import"./useLosKodeverk-CEsPQzMJ.js";import"./Tag-B6yaoXJU.js";import"./Table-DZYlCdrB.js";import"./ArrowsUpDown-C2YDK5IP.js";import"./useMutation-CsZOKDSm.js";import"./index.es-AjNjlijS.js";import"./index.es-xiO060LA.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,v=I(G),S=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:O.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:h.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[A.REVURDERING_INNTEKTSMELDING]}],nt={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[v,R],args:{valgtSakslisteId:1,reserverOppgave:_("button-click")},render:n=>L(N()).data?p.jsx(l,{...n}):p.jsx(P,{})},o={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(S))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
