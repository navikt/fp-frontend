import{j as g}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{a as h}from"./index.es-CkC-ADA8.js";import{a as L,w as _,F as R,B as i}from"./withThemeDecorator-z4QW1Ff7.js";import{u as k}from"./useQuery-D_Pw0jkN.js";import{h as t,L as r,H as s,l as K}from"./fplosSaksbehandlerApi-4oezgadX.js";import{A as N}from"./andreKriterierType-DyVow8-R.js";import"./FlyttReservasjonModal-CAo0DYe1.js";import{g as b}from"./withIntl-lOi1k64a.js";import{a as l}from"./alleKodeverkLos-DjowPRxp.js";import{R as O}from"./ReservertOppgaveTabell-Ctj5CC7a.js";import{m as f}from"./nb_NO-C3_hJm02.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-BIv60t02.js";import"./v4-CtRu48qb.js";import"./entry-preview-ZfnTd0Yb.js";import"./iframe-B7o3CpvX.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-I3dd9qWc.js";import"./Modal-D30nVMJM.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-hzrWzE7n.js";import"./Tag-jMNzjvJL.js";import"./VStack-CMLmUAd_.js";import"./index.es-D0cdVRCV.js";import"./message-BKRiN860.js";import"./OppgaveLabels-B2easYMl.js";import"./Portal-B4Uyzadm.js";import"./useLosKodeverk-BxoCJ-MK.js";import"./OppgaveHandlingerMenu-bD5wmdbC.js";import"./useMutation-D0WUzOL0.js";import"./OppgaveReservasjonForlengetModal-C3Nt_bBw.js";import"./NotatModal-BeBTgbsr.js";import"./ChevronRight-Dy6Pbg1E.js";import"./PersonHeadset-MqI8RbuH.js";import"./Table-BUYqCHT5.js";import"./ArrowsUpDown-BZjYTx7A.js";const j=b(f),e=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:i.KLAGE,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:i.KLAGE,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:i.REVURDERING,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[N.REVURDERING_INNTEKTSMELDING]}],ve={title:"behandlingskoer/ReservertOppgaveTabell",component:O,decorators:[j,_],args:{reserverOppgave:L("button-click"),brukernavn:"T232332"},render:E=>k(K()).data?g.jsx(O,{...E}):g.jsx(h,{})},a={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(l)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json(e))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(l)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([]))]}}},n=(E,m)=>E.map(d=>({...d,id:d.id+m})),o={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(l)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([...e,...n(e,10),...n(e,20),...n(e,30),...n(e,40),...n(e,50),...n(e,60),...n(e,70)]))]}},args:{antallOppgaver:4}};var u,V,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(V=a.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var T,S,G;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(G=(S=p.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var v,A,c;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(c=(A=o.parameters)==null?void 0:A.docs)==null?void 0:c.source}}};const Ae=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{a as Default,p as TomOppgaveTabell,o as VisPagineringNårMerEnn15Oppgaver,Ae as __namedExportsOrder,ve as default};
