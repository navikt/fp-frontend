import{j as p}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{r as R}from"./index.es-C1lgsJyf.js";import{a as h,w as O,F as P,B as L,b as N}from"./withThemeDecorator-D2xQwgNs.js";import{u as A}from"./useQuery-CuIEmpwG.js";import{h as e,L as s,H as t,l as G}from"./fplosSaksbehandlerApi-4oezgadX.js";import{A as I}from"./andreKriterierType-DyVow8-R.js";import{L as l,A as d}from"./LedigOppgaveTabell-HEVcZHrv.js";import"./FlyttReservasjonModal-Dnip16lf.js";import{g as v}from"./withIntl-Bs8JUAqF.js";import{a as c}from"./alleKodeverkLos-DjowPRxp.js";import{m as S}from"./nb_NO-BYhlkY2e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-JYgzgfA1.js";import"./v4-CtRu48qb.js";import"./entry-preview-C9u7Fb_d.js";import"./iframe-DPwyuyzw.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-B-rQRmJU.js";import"./Modal-fg6e4fr9.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-CZXVqKg_.js";import"./ExclamationmarkTriangleFill-BbilBgph.js";import"./message-DPXt46j3.js";import"./OppgaveLabels-C0hPVFxf.js";import"./Portal-CQ4x1n-j.js";import"./ChevronDown-CibENQQb.js";import"./useLosKodeverk-61xInNBk.js";import"./Tag-2pGxz__i.js";import"./Table-TaEswIz_.js";import"./ArrowsUpDown-Bj6TqND6.js";import"./useMutation-CNLBDcUr.js";import"./index.es-CthwVBft.js";import"./index.es-BZV4k_VH.js";const _=v(S),T=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:N.FORSTEGANGSSOKNAD,behandlingStatus:L.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:P.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[I.REVURDERING_INNTEKTSMELDING]}],dt={title:"behandlingskoer/LedigOppgaveTabell",component:l,decorators:[_,O],args:{valgtSakslisteId:1,reserverOppgave:h("button-click")},render:o=>A(G()).data?p.jsx(l,{...o}):p.jsx(R,{})},n={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.OPPGAVER_TIL_BEHANDLING,o=>o.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json(T))]}},args:{antallOppgaver:4}},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(c)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,o=>o.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),e.get("https://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("https://www.test.com/api/result",()=>t.json([]))]}}};var i,m,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,g,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(g=r.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const ct=["Default","TomOppgaveTabell"];export{n as Default,r as TomOppgaveTabell,ct as __namedExportsOrder,dt as default};
