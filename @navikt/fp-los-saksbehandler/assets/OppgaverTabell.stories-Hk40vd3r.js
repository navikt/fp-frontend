import{j as w}from"./jsx-runtime-D_zvdyIk.js";import"./index-_2TAQcTa.js";import{V as I}from"./index.es-BaV1zFyq.js";import{a as _,w as v,F as E,B as u,b as R,m as D}from"./nb_NO-DXuZpwvA.js";import{u as k}from"./useQuery-BzO1ituX.js";import{h as e,L as s,H as t,l as H}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import{O as P,A as m}from"./OppgaverTabell-D4tiNtX6.js";import"./FlyttReservasjonModal-DAjdBA81.js";import{g as j}from"./withIntl-PdHeGbO3.js";import{a as d}from"./alleKodeverkLos-BJud6Q-i.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-ClwW4EUb.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BiNbCtWk.js";import"./v4-CtRu48qb.js";import"./entry-preview-BwwzheJK.js";import"./iframe-DiMt0KFx.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-CxW54xBq.js";import"./Modal-BPoqHm29.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-a-3uwZHN.js";import"./ExclamationmarkTriangleFill-Bf8cc7j1.js";import"./message-BP4r06K8.js";import"./useLosKodeverk-DDdvs0LQ.js";import"./OppgaveHandlingerMenu-BvnbbUdR.js";import"./useMutation-m9ryOTR_.js";import"./OppgaveReservasjonForlengetModal-DNcJsWsP.js";import"./OpphevReservasjonModal-DjhQjE72.js";import"./index.es-CXK2YioG.js";import"./ChevronDown-CvRLEy6H.js";import"./Tag-BPto_FBI.js";import"./index.es-CvZShvJo.js";import"./ChevronRight-0TKZlqyZ.js";import"./PersonHeadset-BCpW9J-x.js";import"./Table-uyIxd-9g.js";import"./ArrowsUpDown-CHD3uyAZ.js";const b=j(D),L=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:345325,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:R.FORSTEGANGSSOKNAD,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],r=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:964545,personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:3454626,personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:R.REVURDERING,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],St={title:"behandlingskoer/OppgaverTabell",component:P,decorators:[b,v],args:{valgtSakslisteId:1,reserverOppgave:_("button-click")},render:n=>k(H()).data?w.jsx(P,{...n}):w.jsx(I,{})},p={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(d)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json(r)),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:m.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}},l={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(d)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:m.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json([]))]}}},a=(n,o)=>n.map(g=>({...g,id:g.id+o})),i={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(d)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([...r,...a(r,10),...a(r,20),...a(r,30),...a(r,40),...a(r,50),...a(r,60),...a(r,70)])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:m.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}};var h,c,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        status: ApiPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(O=(c=p.parameters)==null?void 0:c.docs)==null?void 0:O.source}}};var G,V,A;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        status: ApiPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json([]))]
    }
  }
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var S,N,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        status: ApiPollingStatus.PENDING,
        pollIntervalMillis: 100000000
      })), http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const Nt=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{p as Default,l as TomOppgaveTabell,i as VisPagineringNårMerEnn15Oppgaver,Nt as __namedExportsOrder,St as default};
