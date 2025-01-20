import{j as w}from"./jsx-runtime-DjgmBYnU.js";import{H as b}from"./index.es-Bkc7HGaP.js";import{a as f}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{u as y}from"./useQuery-DH5Nnehw.js";import{h as e,L as s,H as t,l as B}from"./fplosSaksbehandlerApi-DDGYBxmk.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as i}from"./behandlingStatus-CZkrUkra.js";import{B as R}from"./behandlingType-BdbjGMJD.js";import{F as u}from"./fagsakYtelseType-DI8GXtVr.js";import{O as P,A as d}from"./OppgaverTabell-dVVpNJkw.js";import{g as F}from"./withIntl-C_qdw-fe.js";import{w as M,m as q}from"./nb_NO-BC55Mr_y.js";import{a as m}from"./alleKodeverkLos-BJud6Q-i.js";import"./index-DjXIRphR.js";import"./index-D7mKeUb6.js";import"./index.es-Dr0WfndB.js";import"./dayjs.min-Boho2IT3.js";import"./i18n.hooks-CJJTWvJ1.js";import"./Loader-3Qx-7J6D.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./BehandlingPollingTimoutModal-Ck09bdrs.js";import"./Modal-8rThvUW_.js";import"./index-BdR6VAUc.js";import"./index-DCOq8Jev.js";import"./Theme-BfTL5VBB.js";import"./composeEventHandlers-BV8udL3-.js";import"./VStack-DmKxM4QU.js";import"./ExclamationmarkTriangleFill-DUIdkP67.js";import"./useLosKodeverk-DEoPbcJX.js";import"./OppgaveHandlingerMenu--LiuDXM2.js";import"./useMutation-DJRtem_c.js";import"./FlyttReservasjonModal-D1FwBcoQ.js";import"./index.es-COMVmwHE.js";import"./ChevronDown-BupHQ-8S.js";import"./Tag-Bxg2NxiU.js";import"./index.es-DCyjXJOg.js";import"./OppgaveReservasjonForlengetModal-V5XnCwKa.js";import"./OpphevReservasjonModal-BxL38h-U.js";import"./useControllableState-Yq0ffON_.js";import"./ChevronRight-z4ZfUbNx.js";import"./PersonHeadset-DbiT3rTE.js";import"./Table-BTpdiPhf.js";import"./ArrowsUpDown-Bi9nuB2N.js";const J=F(q),U=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:345325,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:R.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],o=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:964545,personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:3454626,personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:R.REVURDERING,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Kt={title:"behandlingskoer/OppgaverTabell",component:P,decorators:[J,M],args:{valgtSakslisteId:1,reserverOppgave:f("button-click")},render:n=>y(B()).data?w.jsx(P,{...n}):w.jsx(b,{})},r={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(m)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json(o)),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(U))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(m)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json([]))]}}},l=(n,E)=>n.map(g=>({...g,id:g.id+E})),a={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(m)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([...o,...l(o,10),...l(o,20),...l(o,30),...l(o,40),...l(o,50),...l(o,60),...l(o,70)])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(U))]}},args:{antallOppgaver:4}};var c,h,O;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER)), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/result'
          }
        });
      }), http.get('http://www.test.com/api/status', () => HttpResponse.json({
        status: AsyncPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(O=(h=r.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var V,G,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([])), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/result'
          }
        });
      }), http.get('http://www.test.com/api/status', () => HttpResponse.json({
        status: AsyncPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json([]))]
    }
  }
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var L,S,I;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([...RESERVERTE_OPPGAVER, ...oppdatertId(RESERVERTE_OPPGAVER, 10), ...oppdatertId(RESERVERTE_OPPGAVER, 20), ...oppdatertId(RESERVERTE_OPPGAVER, 30), ...oppdatertId(RESERVERTE_OPPGAVER, 40), ...oppdatertId(RESERVERTE_OPPGAVER, 50), ...oppdatertId(RESERVERTE_OPPGAVER, 60), ...oppdatertId(RESERVERTE_OPPGAVER, 70)])), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/result'
          }
        });
      }), http.get('http://www.test.com/api/status', () => HttpResponse.json({
        status: AsyncPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,_,T;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER)), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/result'
          }
        });
      }), http.get('http://www.test.com/api/status', () => HttpResponse.json({
        status: AsyncPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(T=(_=r.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var H,v,D;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([])), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/result'
          }
        });
      }), http.get('http://www.test.com/api/status', () => HttpResponse.json({
        status: AsyncPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json([]))]
    }
  }
}`,...(D=(v=p.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var j,k,K;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([...RESERVERTE_OPPGAVER, ...oppdatertId(RESERVERTE_OPPGAVER, 10), ...oppdatertId(RESERVERTE_OPPGAVER, 20), ...oppdatertId(RESERVERTE_OPPGAVER, 30), ...oppdatertId(RESERVERTE_OPPGAVER, 40), ...oppdatertId(RESERVERTE_OPPGAVER, 50), ...oppdatertId(RESERVERTE_OPPGAVER, 60), ...oppdatertId(RESERVERTE_OPPGAVER, 70)])), http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
        const doPolling = t.request.url.includes('oppgaveIder');
        return doPolling ? new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/status'
          }
        }) : new HttpResponse(null, {
          status: 202,
          headers: {
            location: 'http://www.test.com/api/result'
          }
        });
      }), http.get('http://www.test.com/api/status', () => HttpResponse.json({
        status: AsyncPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(K=(k=a.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};const Ut=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{r as Default,p as TomOppgaveTabell,a as VisPagineringNårMerEnn15Oppgaver,Ut as __namedExportsOrder,Kt as default};
