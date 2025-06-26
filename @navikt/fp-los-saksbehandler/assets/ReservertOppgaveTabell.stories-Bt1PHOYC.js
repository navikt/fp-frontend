import{w as c,j as O,F as R,B as l}from"./iframe-D5gt21PO.js";import{X as L}from"./index.es-CoA4ZD_x.js";import{u as h}from"./useQuery-CPdGRmrW.js";import{a as r,L as t,H as s,l as k}from"./fplosSaksbehandlerApi-CVJT04HZ.js";import{A as K}from"./andreKriterierType-Cg0VWsVP.js";import"./FlyttReservasjonModal-BC5_QVhd.js";import{g as N}from"./withIntl-DUGshOIu.js";import{a as i}from"./alleKodeverkLos-DeeW-5p1.js";import{R as g}from"./ReservertOppgaveTabell-BeETmvJJ.js";import{m as j}from"./nb_NO-Cn9UTMYo.js";import"./Loader-Cl2mnQon.js";import"./index.es-Cghxu1oE.js";import"./Modal-a3Lg1O_R.js";import"./index-szWamCQ5.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-XhgFDZ8a.js";import"./Tag-BRX3nRY2.js";import"./VStack-CwGp4ZqH.js";import"./index.es-BK2vFbfc.js";import"./message-BycedRya.js";import"./OppgaveLabels-DJIiPMPR.js";import"./Portal-CNpmicer.js";import"./useLosKodeverk-BmFhK4EY.js";import"./OppgaveHandlingerMenu-KJRc7azL.js";import"./useMutation-CG83hrnC.js";import"./OppgaveReservasjonForlengetModal-BXM6qnSp.js";import"./NotatModal-DU8s5pVf.js";import"./ChevronRight-WVSEFdZ5.js";import"./PersonHeadset-Dm2ugQtW.js";import"./Table-XorNTw9V.js";import"./ArrowsUpDown-7XuR4Frf.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,f=N(j),e=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:l.KLAGE,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:3,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:l.KLAGE,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:4,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:l.REVURDERING,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[K.REVURDERING_INNTEKTSMELDING]}],ie={title:"behandlingskoer/ReservertOppgaveTabell",component:g,decorators:[f,c],args:{reserverOppgave:b("button-click"),brukernavn:"T232332"},render:E=>h(k()).data?O.jsx(g,{...E}):O.jsx(L,{})},a={parameters:{msw:{handlers:[r.get(t.KODEVERK_LOS,()=>s.json(i)),r.get(t.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),r.get(t.RESERVERTE_OPPGAVER,()=>s.json(e))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[r.get(t.KODEVERK_LOS,()=>s.json(i)),r.get(t.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),r.get(t.RESERVERTE_OPPGAVER,()=>s.json([]))]}}},n=(E,m)=>E.map(d=>({...d,id:d.id+m})),o={parameters:{msw:{handlers:[r.get(t.KODEVERK_LOS,()=>s.json(i)),r.get(t.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),r.get(t.RESERVERTE_OPPGAVER,()=>s.json([...e,...n(e,10),...n(e,20),...n(e,30),...n(e,40),...n(e,50),...n(e,60),...n(e,70)]))]}},args:{antallOppgaver:4}};var u,V,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
