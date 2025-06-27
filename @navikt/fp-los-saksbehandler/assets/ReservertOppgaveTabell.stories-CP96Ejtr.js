import{w as c,j as O,F as R,B as l}from"./iframe-Cb_ISg--.js";import{X as L}from"./index.es-0GbpNu_8.js";import{u as h}from"./useQuery-CCzjY9t4.js";import{a as r,L as t,H as s,l as k}from"./fplosSaksbehandlerApi-D2WcQp54.js";import{A as K}from"./andreKriterierType-Cg0VWsVP.js";import"./FlyttReservasjonModal-inlmcaXr.js";import{g as N}from"./withIntl-DginZqZZ.js";import{a as i}from"./alleKodeverkLos-DeeW-5p1.js";import{R as g}from"./ReservertOppgaveTabell-DOS3pmFb.js";import{m as j}from"./nb_NO-Cz-DehRK.js";import"./Loader-BPbWQrE7.js";import"./index.es-CFfJp_UP.js";import"./Modal-GY09lf0u.js";import"./index-DDfoBEuY.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-QHs8JhIS.js";import"./Tag-8oyzaAVR.js";import"./VStack-D_z2lemC.js";import"./index.es-MLu144aj.js";import"./message-DxCmWH9K.js";import"./OppgaveLabels-CGJIRDUF.js";import"./Portal-Dsx1mL3h.js";import"./useLosKodeverk-DSfbOajx.js";import"./OppgaveHandlingerMenu-Dg1TMIkY.js";import"./useMutation-Dse_DItv.js";import"./OppgaveReservasjonForlengetModal-BLb2Xlfz.js";import"./NotatModal-DXiN4LZ5.js";import"./ChevronRight-DfuiG5nP.js";import"./PersonHeadset-CeIMFh2Y.js";import"./Table-CgpiyalU.js";import"./ArrowsUpDown-CAsvqp8t.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,f=N(j),e=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:l.KLAGE,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:3,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:l.KLAGE,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:4,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:l.REVURDERING,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[K.REVURDERING_INNTEKTSMELDING]}],ie={title:"behandlingskoer/ReservertOppgaveTabell",component:g,decorators:[f,c],args:{reserverOppgave:b("button-click"),brukernavn:"T232332"},render:E=>h(k()).data?O.jsx(g,{...E}):O.jsx(L,{})},a={parameters:{msw:{handlers:[r.get(t.KODEVERK_LOS,()=>s.json(i)),r.get(t.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),r.get(t.RESERVERTE_OPPGAVER,()=>s.json(e))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[r.get(t.KODEVERK_LOS,()=>s.json(i)),r.get(t.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),r.get(t.RESERVERTE_OPPGAVER,()=>s.json([]))]}}},n=(E,m)=>E.map(d=>({...d,id:d.id+m})),o={parameters:{msw:{handlers:[r.get(t.KODEVERK_LOS,()=>s.json(i)),r.get(t.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),r.get(t.RESERVERTE_OPPGAVER,()=>s.json([...e,...n(e,10),...n(e,20),...n(e,30),...n(e,40),...n(e,50),...n(e,60),...n(e,70)]))]}},args:{antallOppgaver:4}};var u,V,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(P=(V=a.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var S,T,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(v=(T=p.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var _,A,G;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([...RESERVERTE_OPPGAVER, ...oppdatertId(RESERVERTE_OPPGAVER, 10), ...oppdatertId(RESERVERTE_OPPGAVER, 20), ...oppdatertId(RESERVERTE_OPPGAVER, 30), ...oppdatertId(RESERVERTE_OPPGAVER, 40), ...oppdatertId(RESERVERTE_OPPGAVER, 50), ...oppdatertId(RESERVERTE_OPPGAVER, 60), ...oppdatertId(RESERVERTE_OPPGAVER, 70)]))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(G=(A=o.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const me=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{a as Default,p as TomOppgaveTabell,o as VisPagineringNårMerEnn15Oppgaver,me as __namedExportsOrder,ie as default};
