import{j as u}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{r as _}from"./index.es-0pw154gs.js";import{a as c,w as k,F as R,B as i,b as l,m as K}from"./nb_NO-Bq-cqQdA.js";import{u as N}from"./useQuery-CFBRO-gP.js";import{h as t,L as r,H as s,l as b}from"./fplosSaksbehandlerApi-4oezgadX.js";import{A as D}from"./andreKriterierType-DyVow8-R.js";import"./FlyttReservasjonModal-umpHhC0A.js";import{g as I}from"./withIntl-CZdWB3DY.js";import{a as m}from"./alleKodeverkLos-DjowPRxp.js";import{R as O}from"./ReservertOppgaveTabell-DkYebj15.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-9Y3kA6U8.js";import"./v4-CtRu48qb.js";import"./entry-preview-B10uUASF.js";import"./iframe-BGN740Lg.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./dayjs.min-DkLNzaWO.js";import"./decorators-Bnaor6Ku.js";import"./index.es-BNOS6gPu.js";import"./Modal-_NqW-YzC.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-DmJuooVd.js";import"./Tag-DE8Mn4AN.js";import"./VStack-B5Y3r442.js";import"./index.es-D_SvV4zg.js";import"./message-Ds_Wgjgk.js";import"./OppgaveLabels-WOegWibt.js";import"./Portal-CpPWe_1Y.js";import"./useLosKodeverk-nfR2XL0C.js";import"./OppgaveHandlingerMenu-Bqj_QxOm.js";import"./useMutation-Xw0jkHY3.js";import"./OppgaveReservasjonForlengetModal-C6pgDOl5.js";import"./NotatModal-a7Jg9Rxb.js";import"./ChevronRight-CCzUZ_BN.js";import"./PersonHeadset-ICwfqHq3.js";import"./Table-Bb4hpPxP.js";import"./ArrowsUpDown-C5Hv_6VW.js";const f=I(K),e=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:l.KLAGE,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:l.KLAGE,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:l.REVURDERING,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[D.REVURDERING_INNTEKTSMELDING]}],he={title:"behandlingskoer/ReservertOppgaveTabell",component:O,decorators:[f,k],args:{reserverOppgave:c("button-click"),brukernavn:"T232332"},render:E=>N(b()).data?u.jsx(O,{...E}):u.jsx(_,{})},a={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(m)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json(e))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(m)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([]))]}}},n=(E,d)=>E.map(g=>({...g,id:g.id+d})),o={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(m)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([...e,...n(e,10),...n(e,20),...n(e,30),...n(e,40),...n(e,50),...n(e,60),...n(e,70)]))]}},args:{antallOppgaver:4}};var V,S,P;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,G,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var h,L,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(L=o.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const Le=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{a as Default,p as TomOppgaveTabell,o as VisPagineringNårMerEnn15Oppgaver,Le as __namedExportsOrder,he as default};
