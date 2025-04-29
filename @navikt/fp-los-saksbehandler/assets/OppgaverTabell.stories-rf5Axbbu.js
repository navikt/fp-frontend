import{j as w}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{e as I}from"./index.es-Cb2PWLJ_.js";import{a as v,w as _,F as E,B as u,b as R,m as D}from"./nb_NO-DJ0cTm1i.js";import{u as k}from"./useQuery-BCYaZZdw.js";import{h as e,L as s,H as t,l as H}from"./fplosSaksbehandlerApi-DuEer2SV.js";import{O as P,A as m}from"./OppgaverTabell-ThGHk-mm.js";import"./FlyttReservasjonModal-GiL7nMf0.js";import{g as j}from"./withIntl-DY6ocfwn.js";import{a as d}from"./alleKodeverkLos-B7zuCOtP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-DrfPpdWy.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader--Op49Rbq.js";import"./v4-CtRu48qb.js";import"./entry-preview-BBP6LUVX.js";import"./iframe-CV6ISZhK.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-Bq_3av3j.js";import"./Modal-Dv_YUY5k.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-Ckfk55ND.js";import"./ExclamationmarkTriangleFill-BxbGOo3q.js";import"./message-Bo3mygJP.js";import"./useLosKodeverk-B33R4Q1s.js";import"./OppgaveHandlingerMenu-Cv7ZfMQb.js";import"./useMutation-BskYP8vJ.js";import"./OppgaveReservasjonForlengetModal-C8Tg3wM5.js";import"./NotatModal-D5hisgjq.js";import"./index.es-C0Ptx6Mr.js";import"./ChevronDown-DXuNrWf5.js";import"./Tag-DosGEWqu.js";import"./index.es-Cl5q-fDK.js";import"./ChevronRight-D1db-mCW.js";import"./PersonHeadset-BV0EGRNU.js";import"./Table-x3upLzYZ.js";import"./ArrowsUpDown-CS1ykaZO.js";const b=j(D),L=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:"345325",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:R.FORSTEGANGSSOKNAD,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],r=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:R.REVURDERING,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Vt={title:"behandlingskoer/OppgaverTabell",component:P,decorators:[b,_],args:{valgtSakslisteId:1,reserverOppgave:v("button-click"),brukernavn:"T232332"},render:n=>k(H()).data?w.jsx(P,{...n}):w.jsx(I,{})},p={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(d)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json(r)),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:m.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}},l={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(d)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:m.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json([]))]}}},a=(n,o)=>n.map(g=>({...g,id:g.id+o})),i={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(d)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([...r,...a(r,10),...a(r,20),...a(r,30),...a(r,40),...a(r,50),...a(r,60),...a(r,70)])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:m.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}};var h,c,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(c=p.parameters)==null?void 0:c.docs)==null?void 0:O.source}}};var G,A,S;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var V,T,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const Tt=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{p as Default,l as TomOppgaveTabell,i as VisPagineringNårMerEnn15Oppgaver,Tt as __namedExportsOrder,Vt as default};
