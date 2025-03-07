import{j as w}from"./jsx-runtime-D_zvdyIk.js";import"./index-_2TAQcTa.js";import{M as I}from"./index.es-BkiTe-iQ.js";import{a as _,w as v,F as E,B as u,b as R,m as D}from"./nb_NO-Bu_UlwUo.js";import{u as k}from"./useQuery-K1BN7cAU.js";import{h as e,L as s,H as t,l as H}from"./fplosSaksbehandlerApi-C2ujEe17.js";import{O as P,A as d}from"./OppgaverTabell-c6e0zxtI.js";import"./FlyttReservasjonModal-Cf8X5PuK.js";import{g as j}from"./withIntl-C-MeNraW.js";import{a as m}from"./alleKodeverkLos-BJud6Q-i.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-D4-E1-fA.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-CddJycI5.js";import"./v4-CtRu48qb.js";import"./entry-preview-WM9ojKLj.js";import"./iframe-0Sb3ummH.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./BehandlingPollingTimoutModal-BC0r_ABc.js";import"./Modal-D0ko4Ji8.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-DdwBPMHa.js";import"./composeEventHandlers-DeH74NdU.js";import"./VStack-Dl7dqQV-.js";import"./ExclamationmarkTriangleFill-CPNO1Nsm.js";import"./useLosKodeverk-CbU-oC6W.js";import"./OppgaveHandlingerMenu-Dg0JO1_H.js";import"./useMutation-CMeID_m_.js";import"./OppgaveReservasjonForlengetModal-UiFzhg1L.js";import"./OpphevReservasjonModal-M1s8E74Q.js";import"./index.es-DLTJZrqI.js";import"./ChevronDown-CxGCMIaK.js";import"./Tag-DJ6cwreo.js";import"./index.es-BcWumzrS.js";import"./useControllableState-CKUnHN0n.js";import"./ChevronRight-C-EQggLg.js";import"./PersonHeadset-CL-9i6SU.js";import"./Table-AQ5MYCdA.js";import"./ArrowsUpDown-B9fpxNpd.js";const b=j(D),L=[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet fordi..."}},saksnummer:345325,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:R.FORSTEGANGSSOKNAD,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],r=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:964545,personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:R.KLAGE,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:3454626,personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:R.REVURDERING,behandlingStatus:u.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],St={title:"behandlingskoer/OppgaverTabell",component:P,decorators:[b,v],args:{valgtSakslisteId:1,reserverOppgave:_("button-click")},render:n=>k(H()).data?w.jsx(P,{...n}):w.jsx(I,{})},p={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(m)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json(r)),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}},l={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(m)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json([]))]}}},a=(n,o)=>n.map(g=>({...g,id:g.id+o})),i={parameters:{msw:{handlers:[e.get(s.KODEVERK_LOS,()=>t.json(m)),e.get(s.FORLENG_OPPGAVERESERVASJON,()=>new t(null,{status:200})),e.get(s.RESERVERTE_OPPGAVER,()=>t.json([...r,...a(r,10),...a(r,20),...a(r,30),...a(r,40),...a(r,50),...a(r,60),...a(r,70)])),e.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new t(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new t(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),e.get("http://www.test.com/api/status",()=>t.json({status:d.PENDING,pollIntervalMillis:1e8})),e.get("http://www.test.com/api/result",()=>t.json(L))]}},args:{antallOppgaver:4}};var h,c,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var V,N,T;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const Vt=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{p as Default,l as TomOppgaveTabell,i as VisPagineringNårMerEnn15Oppgaver,Vt as __namedExportsOrder,St as default};
